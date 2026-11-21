import { useEffect, useRef, useState } from 'react'
import './BottomSheet.css'

// Hoja que sube desde abajo, al estilo de las apps móviles.
// Se cierra con el fondo, con Esc o arrastrando el asa hacia abajo.
export default function BottomSheet({ open, onClose, title, closeLabel = 'Cerrar', children }) {
  const [dragY, setDragY] = useState(0)
  const startY = useRef(null)
  const sheetRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    sheetRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  if (!open) return null

  const onPointerDown = (e) => {
    if (e.target.closest('button')) return // el botón de cerrar debe recibir su clic
    startY.current = e.clientY
    e.currentTarget.setPointerCapture?.(e.pointerId)
  }
  const onPointerMove = (e) => {
    if (startY.current == null) return
    setDragY(Math.max(0, e.clientY - startY.current))
  }
  const onPointerUp = () => {
    if (startY.current == null) return
    startY.current = null
    if (dragY > 90) onClose()
    setDragY(0)
  }

  return (
    <div className="sheet__backdrop" onClick={onClose}>
      <div
        ref={sheetRef}
        className={`sheet${dragY ? ' is-dragging' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        style={dragY ? { transform: `translateY(${dragY}px)` } : undefined}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="sheet__grab"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          <span className="sheet__handle" />
          <div className="sheet__head">
            <h2>{title}</h2>
            <button type="button" className="sheet__close" aria-label={closeLabel} onClick={onClose}>×</button>
          </div>
        </div>
        <div className="sheet__body">{children}</div>
      </div>
    </div>
  )
}

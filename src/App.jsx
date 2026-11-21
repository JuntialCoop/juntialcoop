import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import RouteMeta from './components/RouteMeta/RouteMeta'
import Home from './pages/Home/Home'
import AutomatizacionEIa from './pages/AutomatizacionEIa/AutomatizacionEIa'
import About from './pages/About/About'
import CasosReales from './pages/CasosReales/CasosReales'
import DesarrolloAMedida from './pages/DesarrolloAMedida/DesarrolloAMedida'
import IntegracionZohoOne from './pages/IntegracionZohoOne/IntegracionZohoOne'
import LegalPage from './pages/Legal/LegalPage'
import { legalRoutes } from './data/company'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RouteMeta />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Real-life-cases" element={<CasosReales />} />
          <Route path="/Custom-development" element={<DesarrolloAMedida />} />
          <Route path="/automation-ai" element={<AutomatizacionEIa />} />
          <Route path="/integration-zoho-one" element={<IntegracionZohoOne />} />
          <Route path={legalRoutes.legal} element={<LegalPage doc="legal" />} />
          <Route path={legalRoutes.privacy} element={<LegalPage doc="privacy" />} />
          <Route path={legalRoutes.cookies} element={<LegalPage doc="cookies" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

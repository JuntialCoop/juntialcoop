<?php
// Intermediario del formulario de contacto -> función de Zoho CRM.
// Zoho rechaza llamadas desde el navegador (cabecera Origin), por eso la web
// llama a /api/contact y este script la reenvía desde el servidor.
// La URL con la API key se inyecta al compilar (vite.config.js) desde la
// variable de entorno ZOHO_LEADS_URL; si el servidor la define, tiene prioridad.

header('Content-Type: application/json; charset=utf-8');

$zohoUrl = getenv('ZOHO_LEADS_URL') ?: '__ZOHO_LEADS_URL__';

function respond($code, $data) {
  http_response_code($code);
  echo json_encode($data);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  respond(405, ['status' => 'error', 'message' => 'Method not allowed']);
}
if (!$zohoUrl || strpos($zohoUrl, 'https://') !== 0) {
  respond(500, ['status' => 'error', 'message' => 'ZOHO_LEADS_URL not configured']);
}

$raw = file_get_contents('php://input');
if (strlen($raw) > 20000) {
  respond(413, ['status' => 'error', 'message' => 'Payload too large']);
}
$in = json_decode($raw, true);
if (!is_array($in)) {
  respond(400, ['status' => 'error', 'message' => 'Invalid JSON']);
}

$field = function ($k, $max) use ($in) {
  return isset($in[$k]) && is_string($in[$k]) ? mb_substr(trim($in[$k]), 0, $max) : '';
};
$payload = [
  'firstName' => $field('firstName', 100),
  'lastName'  => $field('lastName', 100),
  'phone'     => $field('phone', 30),
  'email'     => $field('email', 150),
  'message'   => $field('message', 5000),
  // Prueba del consentimiento RGPD: fecha y hora del servidor (UTC).
  'privacyAccepted' => true,
  'consentDate'     => gmdate('c'),
];

if (!isset($in['privacyAccepted']) || $in['privacyAccepted'] !== true) {
  respond(422, ['status' => 'error', 'message' => 'Privacy policy must be accepted']);
}

if ($payload['firstName'] === '' || ($payload['phone'] === '' && $payload['email'] === '')) {
  respond(422, ['status' => 'error', 'message' => 'firstName and phone or email are required']);
}
if ($payload['email'] !== '' && !filter_var($payload['email'], FILTER_VALIDATE_EMAIL)) {
  respond(422, ['status' => 'error', 'message' => 'Invalid email']);
}

$ch = curl_init($zohoUrl);
curl_setopt_array($ch, [
  CURLOPT_POST => true,
  CURLOPT_POSTFIELDS => json_encode($payload),
  CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_TIMEOUT => 20,
]);
$body = curl_exec($ch);
$status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$error = curl_error($ch);
curl_close($ch);

if ($body === false) {
  respond(502, ['status' => 'error', 'message' => 'Upstream error: ' . $error]);
}
if ($status < 200 || $status >= 300) {
  respond(502, ['status' => 'error', 'message' => 'Zoho responded ' . $status]);
}
respond(200, ['status' => 'success']);

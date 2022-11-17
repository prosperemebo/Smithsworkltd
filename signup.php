<?php
$data = json_decode(file_get_contents('php://input'));

$role = $data->role;
$businessName = $data->businessName;
$address = $data->address;
$industry = $data->industry;
$email = $data->email;
$services = $data->services;

$to = 'prosper@applausemag.com';
$from = 'prosper@applausemag.com';

$headers = "From: " . $from . "\r\n";
$headers .= "Reply-To: " . $from . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

$subject = 'New Sign Up for Smithswork Entreprise as ' + $role + ' from ' + $businessName;

$message = '<html><body>';
$message .= '<h1>New Sign Up for Smithswork Entreprise as ' + $role + ' from ' + $businessName + '</h1>';
$message .= '<p>Details</p>';
$message .= '<ul>';
$message .= '<li><strong>Business Name<strong>:&nbsp;' . strip_tags($businessName) . '</li>';
$message .= '<li><strong>Signed Up As<strong>:&nbsp;' . strip_tags($role) . '</li>';
$message .= '<li><strong>Industry<strong>:&nbsp;' . strip_tags($industry) . '</li>';
$message .= '<li><strong>Email<strong>:&nbsp;' . strip_tags($email) . '</li></ul><br /><br /><br /><br /><br /><ol>';

foreach ($services as $s => $service) {
    $message .= '<li><strong>Service<strong>:&nbsp;' . strip_tags($service) . '</li>';
}

$message .= '<br /><br /></ol></body></html>';

if (mail($to, $subject, $message, $headers)) {
    $response = array(
        'status' => 'success',
        'message' => 'Sign Up successful!'
    );
} else {
    $response = array(
        'status' => 'error',
        'message' => 'Sign In failed!'
    );
}

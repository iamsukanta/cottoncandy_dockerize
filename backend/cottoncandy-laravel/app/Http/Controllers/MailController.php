<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;
use App\Mail\MailNotify;
use App\Http\Requests\MailRequest;

class MailController extends Controller
{

  public function index(MailRequest $request)
  {

    $data = [
      "name"=>$request->name,
      "email"=>$request->email,
      "companyName"=>$request->companyName,
      "message"=>$request->message ? $request->message : 'No message.',
    ];

    try
    {
      Mail::to(env('MAIL_TO_ADDRESS', 'sukantabalacste2016@gmail.com'))->send(new MailNotify($data));
      return response()->json(['Contact form mail successfully send.']);
    }
    catch(Exception $e)
    {
      return response()->json(['Mail not successfully send.']);
    }
  }
}

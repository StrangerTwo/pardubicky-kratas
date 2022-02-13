<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class QuestionController extends Controller
{
    
    public function send(Request $request)
    {
        $data = array(
            'email' => $request->get('email'),
            'content' => $request->get('content'),
        );

        Mail::send('mail', $data, function($message) use ($request) {
            $message->to('info@pardubickykratas.cz', 'Pardubický kraťas')
                    ->subject('Pardubický kraťas | zpráva od ' . $request->get('email') .  ' - ' . $request->get('subject'));

            $message->from(env('MAIL_USERNAME'));
         });

        return redirect()->route('home');
    }
}

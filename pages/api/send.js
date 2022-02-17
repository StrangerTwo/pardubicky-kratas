import { SMTPClient } from 'emailjs';

export default async function handler(req, res) {
    
    if (!req.body) res.status(400, {status: 'Bad Request', error: 'Nezadal jsi žádné parametry'});
    if (!req.body.subject || !req.body.email || !req.body.content ) res.status(400, {status: 'Bad Request', error: 'Nezadal jsi všechny parametry'});

    const email = req.body.email;
    const subject = req.body.subject;
    const content = req.body.content;
    
    const client = new SMTPClient({
        user: process.env.mail,
        password: process.env.password,
        host: process.env.mailhost,
        ssl:true
    });

    try{
        await client.sendAsync(
            {
              text: `Zpráva od ${email} - ${subject}\n${content}`,
              from: `${email} <${process.env.mail}>`,
              to: "info@pardubickykratas.cz",
              subject: `Zpráva z Pardubický kraťas | ${subject}`,
              attachment: [
                  { data: `<h1>Zpráva od ${email} - ${subject}</h1><p>${content}</p>`, alternative: true },
              ]
            }
        )
    }
    catch(e){
        res.status(400).end(JSON.stringify({ message:"Error" }))
        return;
    }
    
    res.status(200).end(JSON.stringify({ message:'Mail Sent' }))
}
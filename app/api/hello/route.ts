import connectDb from '@/lib/db';
import  Email  from '@/models/email'
import { error } from 'console';

export async function GET(request: Request) {
  return new Response('Hello, Next.js!')
}

// post for adding emails to the database

export async function POST(request: Request) {
  try {
    await connectDb();
    const { email } = await request.json();
    console.log(email);

    const newEmail = new Email({ email });
    console.log(newEmail);

    await newEmail.save();

    return new Response(JSON.stringify(newEmail), {
      headers: { 'content-type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'An error occurred while saving the email.' }),
      {
        status: 500, // Internal Server Error
        headers: { 'content-type': 'application/json' },
      }
    );
  }
}


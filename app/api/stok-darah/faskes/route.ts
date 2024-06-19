import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const authorizationHeader = request.headers.get('Authorization');
  
  if (!authorizationHeader) {
    return NextResponse.json({ error: 'Authorization header is missing' }, { status: 400 });
  }

  const res = await fetch(`http://127.0.0.1:8000/api/darah/faskes`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': authorizationHeader,
    },
  });

  if (!res.ok) {
    const error = await res.json();
    return NextResponse.json({ error }, { status: res.status });
  }

  const data = await res.json();
  return NextResponse.json({ data });
}



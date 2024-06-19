import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  try {
    // const {
    // name ,
    // address ,
    // phone_number ,
    // email ,
    // } = await request.json();

    // if (!requester_donor_id || typeof requester_donor_id !== 'number') {
    //   return NextResponse.json({ error: 'Invalid requester_donor_id' }, { status: 400 });
    // }
    // if (!stock_id || typeof stock_id !== 'number') {
    //   return NextResponse.json({ error: 'Invalid stock_id' }, { status: 400 });
    // }
    // if (!purpose || typeof purpose !== 'string') {
    //   return NextResponse.json({ error: 'Invalid purpose' }, { status: 400 });
    // }
    // if (!date || typeof date !== 'string') {
    //   return NextResponse.json({ error: 'Invalid date' }, { status: 400 });
    // }

    const authorizationHeader = request.headers.get("Authorization");

    const res = await fetch("http://127.0.0.1:8000/api/faskes", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorizationHeader,
      },
      body: JSON.stringify({
        name: "IKI LHO GANTI",
        address: "Karangawru Bos",
        phone_number: "081234455678",
        email: "GANTIMANEHCOK@gmail.com",
      }),
    });

    if (!res.ok) {
      const error = await res.json();
      return NextResponse.json({ error }, { status: res.status });
    }

    return NextResponse.json({ message: "Data posted successfully" });
  } catch (error) {
    console.error("Error processing POST request:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  const authorizationHeader = request.headers.get("Authorization");

  if (!authorizationHeader) {
    return NextResponse.json(
      { error: "Authorization header is missing" },
      { status: 400 }
    );
  }

  const res = await fetch(`http://127.0.0.1:8000/api/faskes`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: authorizationHeader,
    },
  });

  if (!res.ok) {
    const error = await res.json();
    return NextResponse.json({ error }, { status: res.status });
  }

  const data = await res.json();
  return NextResponse.json({ data });
}
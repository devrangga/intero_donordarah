import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // const {
    // nik,
    // name,
    // gender,
    // blood_type,
    // rhesus_type,
    // date_of_birth,
    // address,
    // phone_number,
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

    const res = await fetch("http://127.0.0.1:8000/api/donor-tambah", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorizationHeader,
      },
      body: JSON.stringify({
        name: "deprangggaaa",
        gender: "P",
        blood_type: "O",
        rhesus_type: "negatif",
        date_of_birth: "2004/09/08",
        address: "Magelang",
        phone_number: "0878789098",
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

  const res = await fetch(`http://127.0.0.1:8000/api/donor`, {
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

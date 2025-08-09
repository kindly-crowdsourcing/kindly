import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

function isValidEmail(email) {
  // simple but good enough
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (typeof email !== "string" || !isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email." },
        { status: 400 }
      );
    }

    const db = await getDb();
    const collection = db.collection("subscribers");

    // Ensure a unique index once (safe to call repeatedly)
    await collection.createIndex({ email: 1 }, { unique: true });

    const now = new Date();
    await collection.updateOne(
      { email: email.toLowerCase().trim() },
      {
        $setOnInsert: {
          email: email.toLowerCase().trim(),
          createdAt: now,
          status: "pending", // you're not sending yet
          source: "website",
        },
      },
      { upsert: true }
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    // Duplicate key error
    if (err?.code === 11000) {
      return NextResponse.json({ ok: true }); // already subscribed; don’t leak info
    }
    console.error(err);
    return NextResponse.json(
      { ok: false, error: "Server error." },
      { status: 500 }
    );
  }
}

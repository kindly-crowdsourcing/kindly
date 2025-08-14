import { NextResponse, NextRequest } from "next/server";
import { getDatabase } from "@/lib/mongodb";

// Basic allow-list for array fields to prevent unexpected huge payloads
const ARRAY_LIMIT = 50;

interface SurveyData {
  role?: string;
  projektFunkce?: string[];
  projektyZajem?: string[];
  projektPopis?: string;
  zeme?: string;
  kraj?: string;
  motivace?: string[];
  frekvence?: string;
  feedback?: string;
  email?: string;
  souhlas?: boolean;
  typyProjektu?: string[];
}

export async function POST(req: NextRequest) {
  try {
    const body: SurveyData = await req.json();

    // Extract and sanitize
    const {
      role = "",
      projektFunkce = [],
      projektyZajem = [],
      projektPopis = "",
      zeme = "",
      kraj = "",
      motivace = [],
      frekvence = "",
      feedback = "",
      email = "",
      souhlas = false,
      typyProjektu = [],
    } = body || {};

    if (souhlas !== true) {
      return NextResponse.json(
        { ok: false, error: "Chybí souhlas." },
        { status: 400 }
      );
    }

    // Convert to safe arrays of strings, trim + cap length
    const normArr = (val: unknown) =>
      Array.isArray(val)
        ? val
            .filter((v) => typeof v === "string" && v.trim())
            .map((v) => v.trim())
            .slice(0, ARRAY_LIMIT)
        : [];

    const doc = {
      role: String(role || "").trim(),
      projektFunkce: normArr(projektFunkce),
      projektyZajem: normArr(projektyZajem),
      projektPopis: String(projektPopis || "")
        .trim()
        .slice(0, 2000),
      zeme: String(zeme || "").trim(),
      kraj: String(kraj || "").trim(),
      motivace: normArr(motivace),
      frekvence: String(frekvence || "").trim(),
      feedback: String(feedback || "")
        .trim()
        .slice(0, 5000),
      email: typeof email === "string" ? email.trim().toLowerCase() : "",
      souhlas: true,
      typyProjektu: normArr(typyProjektu),
      userAgent: req.headers.get("user-agent") || null,
      ip: req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || null,
      createdAt: new Date(),
    };

    const db = await getDatabase();
    const col = db.collection("survey_responses");
    await col.insertOne(doc);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("dotaznik POST error", err);
    return NextResponse.json(
      { ok: false, error: "Server error." },
      { status: 500 }
    );
  }
}

export function GET() {
  return NextResponse.json({ ok: true, info: "Use POST to submit survey." });
}

// src/lib/getSession.ts
import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";

export interface SessionPayload {
  userId: string;
  email: string;
  iat?: number;
  exp?: number;
}

export async function getSession(): Promise<SessionPayload | null> {
  const token = (await cookies()).get("token")?.value;

  if (!token) return null;

  try {
    const decoded = verify(token, process.env.JWT_SECRET!) as SessionPayload;
    return decoded;
  } catch (error) {
    console.error("Invalid or expired token:", error);
    return null;
  }
}

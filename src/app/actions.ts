"use server";

import { supabase } from "@/lib/supabase";

export type TrialRequestState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitTrialRequest(
  _prevState: TrialRequestState,
  formData: FormData
): Promise<TrialRequestState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const goal = String(formData.get("goal") ?? "").trim();

  if (!name || !email) {
    return { status: "error", message: "Bitte Name und E-Mail ausfüllen." };
  }

  const { error } = await supabase.from("trial_requests").insert({ name, email, goal });

  if (error) {
    return { status: "error", message: "Etwas ist schiefgelaufen. Bitte später erneut versuchen." };
  }

  return {
    status: "success",
    message: "Danke! Wir melden uns innert 24 Stunden für dein Probetraining.",
  };
}

import { createClient } from "@supabase/supabase-js";

const url = process.env.REACT_APP_SUPABASE_URL;
const anonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(url, anonKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

/**
 * Insert one row into public.enquiries.
 * Returns { ok: boolean, error?: string }.
 */
export const submitEnquiry = async ({ name, email, role, material }) => {
  try {
    const { error } = await supabase.from("enquiries").insert({
      name,
      email,
      role: role || null,
      material: material || null,
      source: "signalstack.co.uk",
      status: "new",
    });
    if (error) {
      return { ok: false, error: error.message };
    }
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e?.message || "Network error" };
  }
};

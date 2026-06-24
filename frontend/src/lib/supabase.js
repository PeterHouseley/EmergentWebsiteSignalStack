import { createClient } from "@supabase/supabase-js";

const url = process.env.REACT_APP_SUPABASE_URL;
const anonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

let client;

const getSupabase = () => {
  if (!url || !anonKey) {
    return null;
  }

  if (!client) {
    client = createClient(url, anonKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }

  return client;
};

/**
 * Insert one row into public.enquiries.
 * Returns { ok: boolean, error?: string }.
 */
export const submitEnquiry = async ({ name, email, role, material }) => {
  const supabase = getSupabase();

  if (!supabase) {
    return { ok: false, error: "Supabase environment is not configured" };
  }

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

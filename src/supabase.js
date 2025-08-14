import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fpsrapczlvbwhvirjhfi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwc3JhcGN6bHZid2h2aXJqaGZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUxNzAwNDcsImV4cCI6MjA3MDc0NjA0N30.uTtRSi-MtDBfOpzdWsb3-8HF48bnek8CFbgKS--vMc8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

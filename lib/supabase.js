import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://tcfbeugmpzhhcueamobo.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjZmJldWdtcHpoaGN1ZWFtb2JvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc5OTcwNzQsImV4cCI6MjA5MzU3MzA3NH0.FV-JHuV649a3KmySq-GmYqhXA7Rs3G6K4ltkSQFEOe4"
);

import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://diuuxcadvtosvdnxmjwh.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpdXV4Y2FkdnRvc3ZkbnhtandoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxNDE4MjcsImV4cCI6MjA2NTcxNzgyN30.izZLOVTOJjQq_S0WDwEH83zYrC10w4QdIrdvMn6rKjI";

// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
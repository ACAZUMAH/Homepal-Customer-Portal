import { createClient } from '@supabase/supabase-js'

//const supabaseUrl = process.env.SUPAbASE_URL
//const supabaseKey = process.env.SUPABASE_KEY

export const supabase = createClient(
  `${import.meta.env.VITE_SUPABASE_URL}`,
  `${import.meta.env.VITE_SUPABASE_KEY}`
);
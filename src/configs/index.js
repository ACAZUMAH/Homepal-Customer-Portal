
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPAbASE_URL
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)
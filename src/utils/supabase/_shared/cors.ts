export const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE',
    'Access-Control-Allow-Headers': `Bearer ${process.env.NEXT_SECRET_SUPABASE_JWT}, ${process.env.NEXT_SECRET_SUPABASE_SERVICE_ROLE}, ${process.env.NEXT_SECRET_SUPABASE_ANON_KEY}`,
  }
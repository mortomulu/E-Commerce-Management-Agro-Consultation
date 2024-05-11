export const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': `${process.env.NEXT_SECRET_SUPABASE_JWT}, ${process.env.NEXT_SECRET_SUPABASE_SERVICE_ROLE}, ${process.env.NEXT_SECRET_SUPABASE_ANON_KEY}`,
  }
export const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': `${process.env.NEXT_SECRET_SUPABASE_JWT}`,
  }
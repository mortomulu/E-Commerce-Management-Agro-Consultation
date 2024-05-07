import { createClient } from '@/utils/supabase/server'

export default async function Page() {
  const supabase = createClient()

  const { data: todos } = await supabase.from('products').select()

  return (
    <ul>
      {todos?.map((todo, i) => (
        <li key={i}><img src={todo.url_image} alt="" /></li>
      ))}
    </ul>
  )
}
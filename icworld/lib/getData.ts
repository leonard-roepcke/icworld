import { supabase } from './supabaseClient';

export async function getAllEntries() {
  const { data, error } = await supabase.from('ics').select('*');
  if (error) throw new Error(error.message);
  return data;
}

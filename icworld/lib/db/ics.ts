import { supabase } from '../supabaseClient';

export async function getAllIcs() {
  const { data, error } = await supabase
    .from('ics')
    .select('*');

  if (error) throw new Error(error.message);
  return data;
}

export async function getProductByNr(nr: string) {
  const { data, error } = await supabase
    .from('ics')
    .select('*')
    .eq('nr', nr)
    .single();

  if (error) throw new Error(error.message);
  return data;
}


import { createClient } from '@supabase/supabase-js';

const URL = 'https://obehqqkecsabkugaptpk.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9iZWhxcWtlY3NhYmt1Z2FwdHBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg1MjAwNjksImV4cCI6MjAwNDA5NjA2OX0.2n94IdknOwsKpdg5banBayQhaAM5XWvbb015XjiGn4c';

export const supabase = createClient(URL, API_KEY);

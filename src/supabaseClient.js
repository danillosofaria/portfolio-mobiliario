import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tywnxvzaaezceporrokr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5d254dnphYWV6Y2Vwb3Jyb2tyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc4Njc5MTUsImV4cCI6MjA3MzQ0MzkxNX0.b3eE1F5QmoRazUOz7Zl01m6VSFIZVVGtIgO5x139LPk';

export const supabase = createClient(supabaseUrl, supabaseKey);

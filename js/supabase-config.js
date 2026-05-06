const SUPABASE_URL = 'https://iljzsquigtcpxigsrqay.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlsanpzcXVpZ3RjcHhpZ3NycWF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkwMTA5MTEsImV4cCI6MjA4NDU4NjkxMX0.dNRDvi5o-qTvRF0Pcl3frWP9EWPVEsDq_pQ0Ymp0Dyw';

// Initialize Supabase Client with Realtime configuration
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    realtime: {
        params: {
            eventsPerSecond: 20
        },
        multiTab: true
    }
});

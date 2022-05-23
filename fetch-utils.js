// Create your own supabase database using the provided seeds.sql file
const SUPABASE_URL = 'https://vrgnnbxjpirhnspwbtxy.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyZ25uYnhqcGlyaG5zcHdidHh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIzMDM4ODksImV4cCI6MTk2Nzg3OTg4OX0.pLi2lpE10QoZGWcQundIQW6sYkcpvCsuLewA1q7lto8';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function getFamilies() {
    // fetch all families and their bunnies
    const response = await client.from('loving_families').select('*, fuzzy_bunnies(*)');
    if (response.error) {
        console.error(response.error.message);
    } else {
        return response.data;
    }
}
export async function deleteBunny(id) {
    // delete a single bunny using the id argument

    return checkError(response);
}

export async function createBunny(bunny) {
    // create a bunny using the bunny argument

    return checkError(response);
}

// MARTHA STEWART (PRE-MADE) FUNCTIONS

export async function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export async function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./families');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}

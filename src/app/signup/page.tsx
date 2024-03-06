
export default function Signup() {
    async function signup(formData: FormData){
        'use server'
        const email = formData.get("email")
        const password = formData.get("password")

        const rawResponse = await fetch("/api/signup", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ a: 1, b: "Textual content"})
        })
    }
    return(
        <div>
            <h1>Signup</h1>
            <form>
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Signup</button>
            </form>
        </div>
    )
}
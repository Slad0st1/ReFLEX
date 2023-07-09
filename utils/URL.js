  export async function getBaseURL(CATEGORIE){
        const res = await fetch(`http://localhost:3000/${CATEGORIE}`)
        const data = await res.json()
        return data
    }

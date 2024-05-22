export interface Anime {
    title: string,
    date: string,
    stocks: number,
    isOdd : boolean
}

export async function FetchData() {
    const data = await fetch("https://api.jikan.moe/v4/anime?q=tokyo%20ghoul&sfw", { cache: "force-cache" })
    const result = await data.json()
    return result.data
}
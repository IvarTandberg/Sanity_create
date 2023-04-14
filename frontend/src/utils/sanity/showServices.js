import { client } from "./client"

export const fetchAllShows = async () => {
    const data = await client.fetch(`*[_type => "show"]`)
    return data
}

export const fetchShow = async (id) => {
    const data = await client.fetch[]
    return data
}
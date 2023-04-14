import { useEffect, useState } from "react"
import { fetchAllShows } from "../utils/sanity/showServices"
import { Link } from "react"

export default function Frontpage() {
    //Gjør klar lagring av show
    const [shows, setShows] = useState(null)

    //hente data og sette inn i staten shows
async function getShows() {
    const data = await fetchAllShows()
    setShows(data)

}

useEffect(() => {
    getShows()
})

console.log(shows)
    return (
        <>
        <h1>Frontpage</h1>
        <ul>
            {shows?.map((show, index) => <li key={index}>
                <Link to={show._id}>to={show.title}</Link>
            </li>)}
        </ul>
        </>
    )

}
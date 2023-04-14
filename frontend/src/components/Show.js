import { useEffect, useState } from "react"
import { fetchShow } from "../utils/sanity/showServices"

export default function Show() {
    const {id} = useParams()
    const [show, setShow] = useState(null)

    async function getShows(id) {
        const data = await fetchShow(id)
        setShow(data[0])
    }

    useEffect(() => {
        getShows(id)
    }, [id])

    return (
        <article>
            <h2>{show?.title}</h2>
            <ul>
                {show?.reviews?.map((r,i) => <li key={i}>
                <p>{r.name} | Vurdering: {r.rating}</p>
                {r.comment ? <p>{r.comment}</p> 
                : null}</li>})}
            </ul>
            <hr>
                <form>
                    <p>
                        <lable htmlFor="name">Navn</lable>
                        <input type="text" id="rating"/>
                    </p>
                    <p>
                        <lable htmlFor="name"
                    </p>
                </form>
            </hr>
        </article>
    )
}
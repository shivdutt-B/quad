import React,{useState} from 'react'
import Server from "../Assets/server.png"
import { Link } from 'react-router-dom'
import TransferData from '../GeneralJs/TransferData'
import { StorageContext } from '../Context/StorageContext'
import { useContext, useEffect } from 'react'
import FetchByQuery from '../GeneralJs/FetchByQuery'

function SearchQueryResult(props) {

    const ContextItems = useContext(StorageContext)
    const [checkLoaded, setCheckLoaded] = useState(false)

    async function fetchApiData(query) {
        try {
            props.setLoadDetector(false)
            props.setProgress(40)
            ContextItems.updateSearchQuery([])
            let fetchedData = await FetchByQuery(query)
            fetchedData === null ? ContextItems.updateSearchQuery([]) : ContextItems.updateSearchQuery(fetchedData)
            props.setProgress(100)
            props.setLoadDetector(true)
            setCheckLoaded(true)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        (async function () {
            try {
                let searchQuery = ContextItems.query
                await fetchApiData(searchQuery)
            } catch (error) {
                
            }
        })()
    }, [ContextItems.query])

    return (
        <>
            {
                
                ContextItems.searchQueryResults.length > 0 ?
                    <>
                        <div className="movie-container">
                            <div className="movie-heading">
                                <div className="movie-heading-title">
                                    {ContextItems.searchQueryResults.length} Search Results
                                </div>
                            </div>
                            <div className="wrapper-movie">
                                <div className="carousel-movie">
                                    {
                                        ContextItems.searchQueryResults.map((element) => {
                                            return (
                                                <>
                                                    <Link onClick={() => { TransferData(element) }} to="/elementinfo" key={element.netflix_id} className="movie-item info-to-store">
                                                        <div className="movie-poster">
                                                            {element.poster.length > 3 ? <img src={element.poster} alt="poster" /> : <img src={Server} alt="poster" />}
                                                        </div>
                                                        <div className="movie-info">
                                                            <div className="movie-name-rating-container">
                                                                <div className="movie-name">
                                                                    {element.title.length > 0 ? element.title : '--'}
                                                                </div>
                                                                <div className="movie-rating">
                                                                    {element.rating.length > 0 ? element.rating : "--"}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    // <div className="movie-heading">
                    //     <div className="movie-heading-title">
                    //         {ContextItems.searchQueryResults.length} Search Results
                    //     </div>
                    // </div>
            }
        </>
    )
}

export default SearchQueryResult
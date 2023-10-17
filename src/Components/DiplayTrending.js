import React from 'react'
import { useContext } from "react"
import { Link } from 'react-router-dom'
import TransferData from '../GeneralJs/TransferData'
import { StorageContext } from '../Context/StorageContext'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function LandingPoster(props) {
    const ContextItems = useContext(StorageContext);
    return (
        <>

            {
                props.data.length > 0 &&
                <>
                    <div className="display-show-container" id="tp">
                        <div className="display-show-heading">
                            <div className="display-show-heading-title">
                                Trending
                            </div>
                        </div>
                        <div className="wrapper-landing-poster">
                            <div className="movie-info carousel-landing-poster">
                                <Slider {...ContextItems.displayShowSettings}>
                                    {
                                        props.data.filter((element) => {
                                            return element.poster.length > 3
                                        }).sort(ContextItems.arrangeShow).slice(0, 6).map((element) => {
                                            return (
                                                <>
                                                    <Link onClick={() => { TransferData(element) }} to="/elementinfo" key={element.netflix_id} className="initial-poster-item info-to-store">
                                                        <div className="initial-poster-item-info-poster-container">
                                                            <div className="initial-poster-item-info">
                                                                <div className="title-container">
                                                                    <span className="title-span">
                                                                        <h1>{element.title.length > 1 ? element.title : "--"}</h1>
                                                                    </span>
                                                                </div>
                                                                <div className="synopsis-container">
                                                                    <span className="synopsis-span">
                                                                    </span>
                                                                    {element.synopsis.length > 1 ? element.synopsis : "--"}
                                                                </div>
                                                                <div className="title-type-container">
                                                                    <span className="title-type-span">
                                                                        <span className="point-head">Type : </span>
                                                                        <span>
                                                                            {element.title_type.length > 1 ? element.title_type : "--"}
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                                <div className="run-time-container">
                                                                    <span className="run-time-span">
                                                                        <span className="point-head">Run time : </span>
                                                                        {element.runtime.length > 1 ? `${(Number(element.runtime) / 60).toFixed(2)} Min` : "-- Min"}
                                                                    </span>
                                                                </div>
                                                                <div className="imdb-id">
                                                                    <span className="imdb-id-span">
                                                                        <span className="point-head">IMDB ID : </span>
                                                                        {element.imdb_id.length > 1 ? element.imdb_id : "--"}
                                                                    </span>
                                                                </div>
                                                                <div className="netflix-id">
                                                                    <span className="netflix-id-span">
                                                                        <span className="point-head">Netflix ID : </span>
                                                                        {element.netflix_id}
                                                                    </span>
                                                                </div>
                                                                <div className="rating-container">
                                                                    <span className="rating-span">
                                                                        <span className="point-head">Rating : </span>{element.rating.length > 1 ? element.rating : "--"}
                                                                    </span>
                                                                </div>
                                                                <div className="top-250-container">
                                                                    <span className="top-250-span">
                                                                        <span className="point-head">Top 250 : </span>{element.top250}
                                                                    </span>
                                                                </div>
                                                                <div className="top-250tv-container">
                                                                    <span className="top-250tv-span">
                                                                        <span className="point-head">Top 250tv : </span>{element.top250tv}
                                                                    </span>
                                                                </div>
                                                                <div className="year-container">
                                                                    <span className="year-span">
                                                                        <span className="point-head">Date : </span>
                                                                        {element.title_date.length > 1 ? element.title_date : "--"}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="initial-poster-item-poster-container">
                                                                <img src={element.poster} alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="initial-poster-item-small-screen">
                                                            <div className="initial-poster-item-title-container-small-screen">
                                                                {element.title.length > 1 ? element.title : "--"}
                                                            </div>
                                                            <div className="initial-poster-item-rating-container-small-screen">
                                                                {element.rating.length > 1 ? element.rating : "--"}
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </>
                                            )
                                        })
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>

                    <div className="display-movie-container">
                        <div className="display-movie-heading">
                            <div className="display-movie-heading-title">
                                Movies
                            </div>
                            <div className="display-movie-heading-show-more">
                                <Link to="/movies">
                                    &rarr;
                                </Link>
                            </div>
                        </div>
                        <Slider {...ContextItems.movieAndSeriesSettings}>
                            {
                                ContextItems.Shuffler(props.data).filter((element) => {
                                    return element.poster.length > 3 && element.title_type == 'movie'
                                }).slice(0, 50).map((element) => {
                                    return (
                                        <Link style={{ width: 250 }} onClick={() => { TransferData(element) }} to="/elementinfo" key={element.netflix_id} className="display-movie-item info-to-store">
                                            <div className="display-movie-poster">
                                                <img src={element.poster} alt="poster" />
                                            </div>
                                            <div className="display-movie-info">
                                                <div className="display-movie-name-rating-container">
                                                    <div className="display-movie-name">
                                                        {element.title}
                                                    </div>
                                                    <div className="display-movie-rating">
                                                        {element.rating}
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </Slider>
                    </div>

                    <div className="display-series-container">
                        <div className="display-series-heading">
                            <div className="display-series-heading-title">
                                Series
                            </div>
                            <div className="display-series-heading-show-more">
                                <Link to="/series">
                                    &rarr;
                                </Link>
                            </div>
                        </div>
                        <Slider {...ContextItems.movieAndSeriesSettings}>
                            {
                                ContextItems.Shuffler(props.data).filter((element) => {
                                    return element.poster.length > 3 && element.title_type == 'series'
                                }).slice(0, 50).map((element) => {
                                    return (
                                        <Link style={{ width: 250 }} onClick={() => { TransferData(element) }} to="/elementinfo" key={element.netflix_id} className="display-series-item info-to-store">
                                            <div className="display-series-poster">
                                                <img src={element.poster} alt="poster" />
                                            </div>
                                            <div className="display-series-info">
                                                <div className="display-series-name-rating-container">
                                                    <div className="display-series-name">
                                                        {element.title}
                                                    </div>
                                                    <div className="display-series-rating">
                                                        {element.rating}
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </>
            }
        </>
    )
}

export default LandingPoster





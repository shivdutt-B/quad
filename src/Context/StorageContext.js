import React, { useState, createContext } from 'react';


export const StorageContext = createContext();
const StorageContextData = (props) => {
    const [data, setData] = useState([])
    const [query, setQuery] = useState('')
    const [searchQueryResults, setSearchQueryResults] = useState([])


    //Update data on element info page
    function updateData(data) {
        setData(data)
    }

    //Shuffle fetched Data
    function Shuffler(arr) {
        return arr.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value)
    }

    //Arrange Shows on home screen according to descending order of ratings
    function arrangeShow(a, b) {
        return parseFloat(b.rating) - parseFloat(a.rating);
    }

    //Update data of search query
    function updateSearchQuery(fetchedQueryResults) {
        setSearchQueryResults(fetchedQueryResults)
    }

    //Update query when form is submitted before navigating to result page
    function updateQuery(queryValue) {
        setQuery(queryValue)
    }

    //Carousel for shows on display trending page (home page)
    const displayShowSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
    };

    //Carousel for movie and series on display trending and element info page
    const movieAndSeriesSettings = {
        initialSlide: 0,
        className: "slider variable-width",
        dots: false,
        infinite: false,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
    };

    //Toggles between ham menu and cross
    function handleHamCross() {
        document.querySelector(".nav-bar").classList.toggle('nav-bg-toggler')
        document.querySelector(".ham-menu-container .fa-bars").classList.toggle('ham-cross-toggler')
        document.querySelector(".ham-menu-container .fa-xmark").classList.toggle('ham-cross-toggler')
        document.querySelector(".ham-menu-container .fa-magnifying-glass").classList.toggle('search-icon-toggler')
        document.querySelector(".nav-bar-list").classList.toggle('nav-bar-list-hide')
        document.querySelector(".nav-bar-list").classList.toggle('nav-bar-list-show')
    }

    //Show search icon on click
    function handleSearchIcon() {
        document.querySelector(".search-bar-small-screen").classList.toggle('search-bar-small-screen-visible')
    }

    //Generating loading screen of series:
    function loadingSeries() {
        let exoSeries = [];
        for (let i = 0; i < 10; i++) {
            exoSeries.push(
                <div style={{ width: 250}} className="display-series-item info-to-store exo-series-element">
                    <div className="display-series-poster exo-series-element-poster"></div>
                </div>
            )
        }
        return (
            <div className="display-series-container">
                <div className="display-series-heading">
                    <div className="display-series-heading-title">
                        Series
                    </div>
                </div>
                <Slider {...ContextItems.movieAndSeriesSettings}>
                    {exoSeries}
                </Slider>
            </div>
        )
    }

    //Generating loading screen of movies:
    function loadingMovies() {
        let exoSeries = [];
        for (let i = 0; i < 10; i++) {
            exoSeries.push(
                <div style={{ width: 250}} className="display-series-item info-to-store exo-series-element">
                    <div className="display-series-poster exo-series-element-poster"></div>
                </div>
            )
        }
        return (
            <div className="display-series-container">
                <div className="display-series-heading">
                    <div className="display-series-heading-title">
                        Movie
                    </div>
                </div>
                <Slider {...ContextItems.movieAndSeriesSettings}>
                    {exoSeries}
                </Slider>
            </div>
        )
    }
    
    return (
        <StorageContext.Provider value={{ data, updateData, Shuffler, arrangeShow, searchQueryResults, updateSearchQuery, query, updateQuery, displayShowSettings, movieAndSeriesSettings, handleHamCross, handleSearchIcon }}>
            {props.children}
        </StorageContext.Provider>
    );
}
export default StorageContextData;
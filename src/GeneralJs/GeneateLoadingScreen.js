// import { StorageContext } from '../Context/StorageContext'
// const ContextItems = useContext(StorageContext)
// import Slider from "react-slick"
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// function loadingMovies() {
//     let exoSeries = [];
//     for (let i = 0; i < 10; i++) {
//         exoSeries.push(
//             <div style={{ width: 250}} className="display-series-item info-to-store exo-series-element">
//                 <div className="display-series-poster exo-series-element-poster"></div>
//             </div>
//         )
//     }
//     return (
//         <div className="display-series-container">
//             <div className="display-series-heading">
//                 <div className="display-series-heading-title">
//                     Movie
//                 </div>
//             </div>
//             <Slider {...ContextItems.movieAndSeriesSettings}>
//                 {exoSeries}
//             </Slider>
//         </div>
//     )
// }

// function loadingSeries() {
//     let exoSeries = [];
//     for (let i = 0; i < 10; i++) {
//         exoSeries.push(
//             <div style={{ width: 250}} className="display-series-item info-to-store exo-series-element">
//                 <div className="display-series-poster exo-series-element-poster"></div>
//             </div>
//         )
//     }
//     return (
//         <div className="display-series-container">
//             <div className="display-series-heading">
//                 <div className="display-series-heading-title">
//                     Series
//                 </div>
//             </div>
//             <Slider {...ContextItems.movieAndSeriesSettings}>
//                 {exoSeries}
//             </Slider>
//         </div>
//     )
// }

// function genEle() {
//     let screenArea = window.innerWidth * window.innerHeight
//     let boxDimension = 240 * 180
//     let nrOfBox = Math.floor(screenArea / boxDimension)
//     const arrayOfElements = [];
//     for (let i = 0; i < nrOfBox; i++) {
//         arrayOfElements.push(
//             <div className="loading-screen-element-container">
//                 <div className="loading-screen-element-poster">

//                 </div>
//                 <div className="loading-screen-element-desc">
//                     <div className="loading-screen-element-desc-title"></div>
//                     <div className="loading-screen-element-desc-rating"></div>
//                 </div>
//             </div>
//         );
//     }
//     return (
//         <div className="movie-container-loading">
//             {arrayOfElements}
//         </div>
//     )
// }

// export {genEle, loadingMovies, loadingSeries}
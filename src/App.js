import './App.css';
import DisplayTrending from './Components/DiplayTrending';
import Navbar from './Components/Navbar';
import LoadingBar from 'react-top-loading-bar'
import { useEffect, useState } from 'react'
import FetchData from './GeneralJs/FetchData';
import Footer from './Components/Footer'
import ElementInfo from "./Components/ElementInfo"
import MoreRelatedMovies from './Components/MoreRelatedMovies';
import MoreRelatedSeries from './Components/MoreRelatedSeries';
import StorageContextData from './Context/StorageContext';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"
import Movie from "./Components/Movie"
import Series from "./Components/Series"
import SearchQueryResults from './Components/SearchQueryResults';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  const [progress, setProgress] = useState(0)
  const [data, setData] = useState([])
  const [limit, setLimit] = useState(200)
  const [loadDetector, setLoadDetector] = useState(false)

  async function fetchDataCaller(limit, setLimit) {
    setLoadDetector(false)
    setProgress(40)
    let moreData = await FetchData(limit)
    await setData(moreData)
    setLimit(limit + 200)
    setProgress(100)
    setLoadDetector(true)
  }

  useEffect(() => {
    setLimit(200)
    fetchDataCaller(limit, setLimit)
  }, [])




  return (
    <>
      <StorageContextData>
        <BrowserRouter>
          <LoadingBar
            color='#db0000'
            height={3}
            progress={progress}
          />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<DisplayTrending data={data} setProgress={setProgress} setLoadDetector={setLoadDetector} />} />
            <Route exact path="/movies" element={<Movie data={data} limit={limit} setLimit={setLimit} fetchDataCaller={fetchDataCaller} setProgress={setProgress} setLoadDetector={setLoadDetector} />} />
            <Route exact path="/series" element={<Series data={data} limit={limit} setLimit={setLimit} fetchDataCaller={fetchDataCaller} setProgress={setProgress} setLoadDetector={setLoadDetector} />} />
            <Route exact path="/elementinfo" element={<ElementInfo setProgress={setProgress} setLoadDetector={setLoadDetector} />} />
            <Route exact path="/related movies" element={<MoreRelatedMovies setProgress={setProgress} setLoadDetector={setLoadDetector} />} />
            <Route exact path="/related series" element={<MoreRelatedSeries setProgress={setProgress} setLoadDetector={setLoadDetector} />} />
            <Route exact path="/search results" element={<SearchQueryResults setProgress={setProgress} setLoadDetector={setLoadDetector} />} />
          </Routes>
          <Footer loadDetector={loadDetector} />
        </BrowserRouter>
      </StorageContextData>
    </>
  );
}

export default App;

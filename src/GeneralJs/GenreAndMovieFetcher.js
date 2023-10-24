//Takes generes and fetch movies and shows according to that.
import FetchGeneresMovie from "./FetchGeneresMovie";
import FetchGeneres from "./FetchGenres";
import { StorageContext } from '../Context/StorageContext';
import { useContext } from "react";

async function GenreAndMovieFetcher() {
  try {
    console.log('code2')
    let netflix_id = await JSON.parse(sessionStorage.getItem('movieInfo')).netflix_id;
    let results = await FetchGeneres(netflix_id)
    let generesRefactor = results.map((element) => {
      return element.genre_id
    })
    let generesMovie = await FetchGeneresMovie(generesRefactor)
    return generesMovie
  } catch (error) {
    // navigate('/error')
   }

}
export default GenreAndMovieFetcher
// Takes genres as an argument and fetch data according to that
async function FetchGeneresMovie(generes) {

   try {
    console.log('code3')
     var myHeaders = new Headers();
     myHeaders.append("apikey", `${process.env.REACT_APP_API_KEY}`);
 
     var requestOptions = {
         method: 'GET',
         redirect: 'follow',
         headers: myHeaders
     };
 
     let apiData = await fetch(`https://api.apilayer.com/unogs/search/titles?genre_list=${generes}&limit=500`, requestOptions)
     let toJson = await apiData.json()
     return toJson.results
   } catch (error) { 
    // navigate('/error')
   }
}

export default FetchGeneresMovie
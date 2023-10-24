import FetchData from "./FetchData";

async function fetchDataCaller(limit, setLimit, setLoadDetector, setProgress, setData, navigate) {
    try {
        setLoadDetector(false)
        setProgress(40)
        let moreData = await FetchData(limit)
        console.log('cod', setData)
        setData(moreData)
        setLimit(limit + 200)
        setProgress(100)
        setLoadDetector(true)
    } catch (error) {
        console.log(error)
        navigate('/error')
    }
}

export default fetchDataCaller
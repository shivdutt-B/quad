import FetchData from "./FetchData";

async function fetchDataCaller(limit, setLimit, setLoadDetector, setProgress, setData, navigate) {
    try {
        setLoadDetector(false)
        setProgress(40)
        let moreData = await FetchData(limit)
        setData(moreData)
        setLimit(limit + 200)
        setProgress(100)
        setLoadDetector(true)
    } catch (error) {
        // navigate('/error')
    }
}

export default fetchDataCaller
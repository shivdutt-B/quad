import FetchData from "./FetchData";

async function fetchDataCaller(limit, setLimit, setLoadDetector, setProgress, setData, navigate) {
        setLoadDetector(false)
        setProgress(40)
        let moreData = await FetchData(limit)
        setData(moreData)
        setLimit(limit + 200)
        setProgress(100)
        setLoadDetector(true)
}

export default fetchDataCaller
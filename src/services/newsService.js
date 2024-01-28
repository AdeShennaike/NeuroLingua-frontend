const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}` 

async function getNews() {
    try {
        const res = await fetch(`${BASE_URL}/api/news`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })

        const news = await res.json()
        console.log(news.keys)
        return news
    } catch (error) {
        console.error('Error fetching news:', error)
    }
}

export {
  getNews
}
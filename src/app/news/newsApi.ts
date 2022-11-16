import axios from "axios";
import { ArticleItem } from "../../components/cards/Cards";

const API_KEY = 'pub_127361880bee60527649e033db33c6824ea53'
const NEWS_API_ENDPOINT = `https://newsdata.io/api/1/news?apikey=${API_KEY}&language=en`;

export default async function newsApi(): Promise<ArticleItem[] | null> {
    try {
    const res = await axios.get(NEWS_API_ENDPOINT);
    if (res.status === 200 && 'results' in res.data) {
        return res.data.results.map((r: any) => {
            return {
                imageLink: r.image_url,
                category: r.category.join(', '),
                title: r.title,
                estimatedReadingTime: Math.floor(Math.random()*10) 
            } as ArticleItem
        })
    }
    console.log(res);
    } catch(err) {
        console.log(err);
    }

    return null;
}
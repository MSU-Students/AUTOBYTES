import {news} from "../firestore/firebaseInit.js"

class NewsService {
    async getNewsById(id){
        const res = await news.doc(id).get();
        return res;
    }

    async editNews(id,data){
        console.log(id, data);
        const res = await news.doc(id).update(data);
        return res;
    }
}
let newsService = new NewsService();
export default newsService;
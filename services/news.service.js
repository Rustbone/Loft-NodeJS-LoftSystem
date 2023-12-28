import { userDto} from '../dto/user.dto.js'
import { newsDto} from '../dto/news.dto.js'
import { userRepository, newsRepository} from '../model/index.js'

class NewsService {
    async getAllByUserId(id) {
        const user = await userRepository.getUserById(id)

        // if (!user) {
        //     throw new Error(`Пользователь не авторизован!`)
        // }

        return userDto(user)
    }

    async postNewsId(id) {
        const news = await newsRepository.createNews(id)
        console.log(news)

        return news
    }

    async getNewsList() {
        const newsList = await newsRepository.getNewsList()
        console.log(newsList)

        return newsDto(newsList)
    }    
}

export const newsService = new NewsService()
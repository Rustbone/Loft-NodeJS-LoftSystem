import { NewsModel } from './schemas/index.js'
// import { userDto } from '../dto/user.dto.js'
import { newsDto } from '../dto/news.dto.js'

class NewsRepository{
    async createNews(dto) {
      // const news = newsDto(dto)
      const newsModel = new NewsModel(dto)

      const createdNews = await newsModel.save()

      return createdNews
    }
    async getNewsList() {
      const newsList = await NewsModel.find()
      // console.log(newsList)
      return newsList
    }   
}

export const newsRepository =  new NewsRepository()
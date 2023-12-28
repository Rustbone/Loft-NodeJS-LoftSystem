import { newsService } from "../services/index.js" 
class NewsController {
    async getAllByUserId(req, res){
        try {
            const news =  await newsService.getNewsList()

            res.json(news)
        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    }
    async postAllByNewsId(req, res){
      
      try {
          await newsService.postNewsId(req.body)
          const newsList = await newsService.getNewsList()
          console.log(newsList)
          
          res.json(newsList)
          
      } catch (error) {
          res.status(400).json({
              message: error.message
          })
      }
    }
}

export const newsController = new NewsController()
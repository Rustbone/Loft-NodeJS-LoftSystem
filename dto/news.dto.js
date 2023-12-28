export const newsDto = ( news ) => {
  console.log(news)
  return news.map( function (item) {
    return {id: item._id,
    text: item.text,
  title: item.title
 }

  })
} 

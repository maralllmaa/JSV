import News from '../model/news';
class NewsController {
  addNews(req, res) {
    const { title, content, creator, created } = req.body;
    const news = new News({
      title: title,
      content: content,
      creator: creator,
      created: created
    })

    news.save()
      .then(result => console.log(result))
  }
}

module.exports = new NewsController();

export default class NewsController {
  constructor(NewsService) {
    'ngInject';
    this.NewsService = NewsService;
  }

  $onInit() {
    this.NewsService.list().then((news) => this.news = news);
  }

}

export default class ItemController {
  constructor(NewsService, $stateParams, $element) {
    'ngInject';
    this.NewsService = NewsService;
    this.params = $stateParams;
    this.element = $element[0];
  }

  $onInit() {
    this.title = this.params.title;
    this.NewsService.detail(this.params.itemId).then((item) => {
      this.item = item;
      let wrapper = this.element.querySelector('.wrapper');
      wrapper.innerHTML = this.item.html;
    });  
  }

}

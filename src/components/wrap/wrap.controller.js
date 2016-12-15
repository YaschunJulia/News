export default class wrapController {
  constructor($state) {
    'ngInject';
    this.state = $state;
  }

  $onInit() { 
    const itemId = document.getElementById('itemId').innerHTML; 
    if (+itemId > 0) {
      this.state.go('wrap.item', { itemId });
    } else {
      this.state.go('wrap.news');
    }
    
  }

}
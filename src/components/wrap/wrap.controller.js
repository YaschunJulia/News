export default class wrapController {
  constructor($state) {
    'ngInject';
    this.state = $state;
  }

  $onInit() {
    this.state.go('wrap.news');
  }

}
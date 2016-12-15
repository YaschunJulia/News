export default class wrapController {
  constructor($state) {
    'ngInject';
    this.state = $state;
  }

  $onInit() {
    console.log('bhfgj');
    this.state.go('wrap.news');
  }

}
export default class NewsService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
  }

  list() {
    return this.$http.get(`${API}/api/list`).then(result => result.data);
  }

  detail(id) {
    return this.$http.get(`${API}/api/list/${id}`).then(result => result.data);  
  }
}


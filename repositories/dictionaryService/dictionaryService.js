export default ($axios) => ({
  list() {
    return $axios.get('/api/dictionaryService/list')
      .then(response => {
        return response.data.data;
      }).catch(error => {
        return [];
      });
  }
});

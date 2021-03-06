export default ($axios) => ({
  getUserByDepartmentsId(departmentsId) {
    return $axios.post('/api/user/getUserByDepartmentsId',departmentsId)
      .then(response => {
        return response.data.data;
      }).catch(error => {
        return [];
      });
  },
  getUserByDepartmentId(departmentId) {
    return $axios.get('/api/user/getUserByDepartmentId/'+departmentId)
      .then(response => {
        return response.data.data;
      }).catch(error => {
        return [];
      });
  },
  getUserByFacilityId(data) {
    return $axios.get('/api/user/getByFacilityId/'+data)
      .then(response => {
        return response.data.data;
      }).catch(error => {
        return false;
      });
  },
  restore(phone) {
    return $axios.get('/api/user/restore/'+phone)
      .then(response => {
        return response.data.data;
      }).catch(error => {
        return error.response.data;
      });
  },
  auth(data) {
    return $axios.post('/api/user/auth',data)
      .then(response => {
        return response.data.data;
      }).catch(error => {
        return false;
      });
  },
  registration(data) {
    return $axios.post('/api/user/registration',data)
      .then(response => {
        return response.data.data;
      }).catch(error => {
        return error.response.data;
      });
  },
  changePassword(data) {
    return $axios.post('/api/user/password/'+data.id,data.data).then(response => {
      return response.data;
    }).catch(error => {
      return error.response.data;
    });
  },
  next(data) {
    return $axios.post('/api/user/next',data)
      .then(response => {
        return response.data;
      }).catch(error => {
        return error.response.data;
      });
  },
  finish(data) {
    return $axios.post('/api/user/finish',data)
      .then(response => {
        return response.data.data;
      }).catch(error => {
        return error.response.data;
      });
  },
  codeCheck(data) {
    return $axios.post('/api/user/codeCheck',data)
      .then(response => {
        return response.data.data;
      }).catch(error => {
        return error.response.data;
      });
  },
  setUser(data) {
    return $axios.post('/api/user/update/'+data.id,data.data)
      .then(response => {
        return response.data.data;
      }).catch(error => {
        return error.response.data;
      });
  }
});

import _api from './axiosConfig';
import * as url from './urls';

export default {
   loginProcess: () => {
      return _api(url.LOGIN_PROCESS, {
         method: 'POST'
      });
   }
};

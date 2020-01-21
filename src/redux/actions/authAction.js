import api from '../../services/api';

export const loginProcess = () => {
    return dispatch => {
        console.log('trigeredd');
        api.loginProcess()
            .then(response => {
                console.log(response);

                // dispatch({ type: LOGIN_SUCCESS });
            })
            .catch(error => {
                console.log(JSON.parse(JSON.stringify(error)));
            });
    };
};

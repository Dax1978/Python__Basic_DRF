import axios from "axios";

const getWithToken = async (urldop) => {
    var token = localStorage.getItem("todoapp_token");
    token = 'Token ' + token.slice(1, -1);
    var urlbase = 'http://127.0.0.1:8000/todo';

    var config = {
        method: 'get',
        url: urlbase + urldop + '/',
        headers: {
            'Authorization': token
        }
    };

    try {
        await axios(config)
            .then((response) => {
                // console.log('response:', response.data.results);
                if (response.data) {
                    console.log('response:', response.data.results);
                    return response.data.results;
                };
            })
        // return response.data.results;

    } catch (err) {
        console.error(err.toJSON());
        return null;
    }
};

export default getWithToken;
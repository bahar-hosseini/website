import http from "./httpService";

import config from "./config.json";

export default function sendComment (user){
    return http.post(
        `${config.localapi}`,
        JSON.stringify(user)
    );
};

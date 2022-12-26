// to configure some of axios
import axios from "axios";

export default axios.create({
    baseURL : 'https://api.unsplash.com' ,
    headers:{
        Authorization: 'Client-ID 3TzKCf-wg9gaM5BWcGRShs5otZ1UR8Kbz5Dqt9SDVXE'
    }

})
// create methord will create an instance of the axios client with some default  properties
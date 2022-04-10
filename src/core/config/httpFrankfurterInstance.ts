import axios from 'axios'

export default {
    provide: 'http',
    useValue: axios.create({baseURL: 'https://api.frankfurter.app/'})
}
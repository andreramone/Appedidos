import axios from "axios";
import {getRedis, setRedis} from '../redisConfig.js'
import {ErrorMessage} from '../shared/error/errorMessage.js'
class MapQuestService {
    async handle(latitude, longitude){
        const key = process.env.MAP_QUEST_KEY;
        const url = `${process.env.MAP_QUEST_BASE_URL}reverse?key=${key}&location=${latitude},${longitude}`;

        let localizationRedis = await getRedis(`localization-${latitude};${longitude}`)
        
        if (localizationRedis) {
            return JSON.parse(localizationRedis)
        } else {
            const response = await axios.get(url)

            if (response) {
                await setRedis(`localization-${latitude};${longitude}`, JSON.stringify(response.data.results[0].locations[0]))
            }

            if (!response.data.results[0].locations.length){
                throw new Error({message: 'Endereço não encontrado para essa localidade.', code: '02'})
            }
            const {adminArea1, adminArea3, adminArea5} = response.data.results[0].locations[0];

            if (!adminArea1 && !adminArea3 && !adminArea5) {
                throw new Error({message: 'Informações de endereço incompletos', code: '03'})
            }

            return response.data.results[0].locations[0]
        }
    }
}

export default new MapQuestService();
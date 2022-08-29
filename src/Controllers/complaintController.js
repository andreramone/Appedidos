
import Complaint from '../models/complaint.js';
import MapQuestService from '../services/MapQuestService.js';
import {ErrorMessage} from '../shared/error/errorMessage.js'


class ComplaintController {
    async init(req, res) {
          const { latitude, longitude, denunciante, denuncia } = req.body;
          if (!latitude || !longitude){
            return new ErrorMessage('Request inválido.', '01')
          }
      
          const geolocation = await MapQuestService.handle(latitude, longitude);
  
          const response = await Complaint.create({
            latitude,
            longitude,
            titulo: denuncia.titulo,
            descricao: denuncia.descricao,
            nome: denunciante.nome,
            cpf: denunciante.cpf,
            logradouro: geolocation.street,
            bairro: geolocation.adminArea6,
            cidade: geolocation.adminArea5,
            estado: geolocation.adminArea3,
            cep: geolocation.postalCode,
            pais: geolocation.adminArea1
          });
      
          return res.status(200).json(response)       
    }
}

export default new ComplaintController();
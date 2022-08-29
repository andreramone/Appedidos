import Sequelize, { Model } from 'sequelize';

export default class Complaint extends Model {
  static init(sequelize) {
    super.init(
      {
        titulo: {
          type: Sequelize.STRING,
          allowNull: false,
          field: 'titulo'
        },
        descricao: {
            type: Sequelize.STRING,
            allowNull: true,
            field: 'descricao'
          },
        nome: {
            type: Sequelize.STRING,
            allowNull: true,
            field: 'nome'
          },  
        cpf: {
          type: Sequelize.STRING,
          allowNull: true,
          field: 'cpf'
        }, 
        latitude: {
            type: Sequelize.DECIMAL,
            allowNull: false,
            field: 'latitude'
        },   
        longitude: {
            type: Sequelize.DECIMAL,
            allowNull: false,
            field: 'longitude'
        },
        logradouro: {
          type: Sequelize.STRING,
          allowNull: true,
          field: 'logradouro'
        },
        bairro: {
          type: Sequelize.STRING,
          allowNull: true,
          field: 'bairro'
        },
        cidade: {
          type: Sequelize.STRING,
          allowNull: false,
          field: 'cidade'
        },
        estado: {
          type: Sequelize.STRING,
          allowNull: false,
          field: 'estado'
        }, 
        pais: {
          type: Sequelize.STRING,
          allowNull: false,
          field: 'pais'
        }, 
        cep: {
          type: Sequelize.STRING,
          allowNull: true,
          field: 'cep'
        },        
      },
      {
        sequelize,
        tableName: 'Complaint',
        timestamps: false,
      },
    );
    return this;
  }
}
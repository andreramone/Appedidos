import Sequelize from 'sequelize';
import databaseConfig from '../config/database.cjs';
import Complaint from '../models/complaint.js';

const models = [Complaint];

const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models),
);
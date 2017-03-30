'use strict';

const { GraphQLList } = require('graphql');

const StudentType = require('../types/Student');
const StudentModel = require('../models/Student');

module.exports = {
    type: new GraphQLList(StudentType),
    description: 'Получает информацию о всех студентах',
    resolve() {
        return StudentModel.findAll();
    }
};

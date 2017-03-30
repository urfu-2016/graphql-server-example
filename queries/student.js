'use strict';

const { GraphQLID, GraphQLNonNull } = require('graphql');

const StudentType = require('../types/Student');
const StudentModel = require('../models/Student');

module.exports = {
    type: StudentType,
    description: 'Получает информацию о студенте по его id',
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(parentValue, args) {
        return StudentModel.findById(args.id);
    }
};

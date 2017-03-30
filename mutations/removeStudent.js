'use strict';

const {
    GraphQLID,
    GraphQLBoolean,
    GraphQLNonNull
} = require('graphql');

const StudentModel = require('../models/Student');

module.exports = {
    type: GraphQLBoolean,
    description: 'Удаляет студента по его id',
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(parentValue, args) {
        return StudentModel.removeById(args.id);
    }
}

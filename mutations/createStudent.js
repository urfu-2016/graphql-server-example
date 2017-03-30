'use strict';

const {
    GraphQLID,
    GraphQLInt,
    GraphQLString,
    GraphQLNonNull
} = require('graphql');

const StudentType = require('../types/Student');
const StudentModel = require('../models/Student');

module.exports = {
    type: StudentType,
    description: 'Создает нового студента',
    args: {
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        age: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        groupId: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(parentValue, args) {
        return StudentModel.create(args);
    }
}

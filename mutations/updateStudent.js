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
    description: 'Обновляет данные о студенте по его id',
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        name: {
            type: GraphQLString
        },
        age: {
            type: GraphQLInt
        },
        groupId: {
            type: GraphQLID
        }
    },
    resolve(parentValue, args) {
        return StudentModel.update(args.id, {
            name: args.name,
            age: args.age,
            groupId: args.groupId
        });
    }
}

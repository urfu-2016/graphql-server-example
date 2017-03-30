'use strict';

const {
    GraphQLID,
    GraphQLList,
    GraphQLString,
    GraphQLObjectType
} = require('graphql');

const StudentModel = require('../models/Student');

module.exports = new GraphQLObjectType({
    name: 'Group',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        students: {
            type: new GraphQLList(require('./Student')),
            resolve(parentValue) {
                return StudentModel
                    .findAll()
                    .filter(student => student.groupId === parentValue.id)
            }
        }
    })
});

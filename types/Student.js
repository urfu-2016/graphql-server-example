'use strict';

const {
    GraphQLID,
    GraphQLInt,
    GraphQLString,
    GraphQLObjectType
} = require('graphql');

const GroupModel = require('../models/Group');

module.exports = new GraphQLObjectType({
    name: 'Student',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        group: {
            type: require('./Group'),
            resolve(parentValue) {
                return GroupModel.findById(parentValue.groupId);
            }
        }
    })
});

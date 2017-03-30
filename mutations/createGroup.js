'use strict';

const { GraphQLString, GraphQLNonNull } = require('graphql');

const GroupType = require('../types/Group');
const GroupModel = require('../models/Group');

module.exports = {
    type: GroupType,
    description: 'Создает новую группу',
    args: {
        name: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve(parentValue, args) {
        return GroupModel.create(args);
    }
}

'use strict';

const {
    GraphQLID,
    GraphQLString,
    GraphQLNonNull
} = require('graphql');

const GroupType = require('../types/Group');
const GroupModel = require('../models/Group');

module.exports = {
    type: GroupType,
    description: 'Обновляет данные о группе по её id',
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        name: {
            type: GraphQLString
        }
    },
    resolve(parentValue, args) {
        return GroupModel.update(args.id, {
            name: args.name
        });
    }
}

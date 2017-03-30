'use strict';

const { GraphQLID, GraphQLNonNull } = require('graphql');

const GroupType = require('../types/Group');
const GroupModel = require('../models/Group');

module.exports = {
    type: GroupType,
    description: 'Получает информацию о группе по её id',
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(parentValue, args) {
        return GroupModel.findById(args.id);
    }
};

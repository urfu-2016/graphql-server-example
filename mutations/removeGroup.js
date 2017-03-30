'use strict';

const {
    GraphQLID,
    GraphQLBoolean,
    GraphQLNonNull
} = require('graphql');

const GroupModel = require('../models/Group');

module.exports = {
    type: GraphQLBoolean,
    description: 'Удаляет группу по её id',
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(parentValue, args) {
        return GroupModel.removeById(args.id);
    }
}

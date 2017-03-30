'use strict';

const { GraphQLList } = require('graphql');

const GroupType = require('../types/Group');
const GroupModel = require('../models/Group');

module.exports = {
    type: new GraphQLList(GroupType),
    description: 'Получает информацию о всех группах',
    resolve() {
        return GroupModel.findAll();
    }
};

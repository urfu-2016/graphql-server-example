'use strict';

const { GraphQLObjectType } = require('graphql');

const CreateStudentMutation = require('../mutations/createStudent');
const UpdateStudentMutation = require('../mutations/updateStudent');
const RemoveStudentMutation = require('../mutations/removeStudent');

const CreateGroupMutation = require('../mutations/createGroup');
const UpdateGroupMutation = require('../mutations/updateGroup');
const RemoveGroupMutation = require('../mutations/removeGroup');

module.exports = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createStudent: CreateStudentMutation,
        updateStudent: UpdateStudentMutation,
        removeStudent: RemoveStudentMutation,

        createGroup: CreateGroupMutation,
        updateGroup: UpdateGroupMutation,
        removeGroup: RemoveGroupMutation
    }
});

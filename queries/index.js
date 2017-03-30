'use strict';

const { GraphQLObjectType } = require('graphql');

const StudentQuery = require('../queries/student');
const StudentsQuery = require('../queries/students');
const GroupQuery = require('../queries/group');
const GroupsQuery = require('../queries/groups');

module.exports = new GraphQLObjectType({
    name: 'Query',
    fields: {
        student: StudentQuery,
        students: StudentsQuery,

        group: GroupQuery,
        groups: GroupsQuery
    }
});

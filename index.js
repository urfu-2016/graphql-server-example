'use strict';

const express = require('express');
const expressGraphQL = require('express-graphql');
const cors = require('cors');

const schema = require('./schema');

const app = express();

app.use('/graphql', cors(), expressGraphQL({
    schema,
    graphiql: true
}));

app.listen(8080, () => {
    console.info('Open http://localhost:8080/graphql');
});

'use strict'; // eslint-disable-line

const context = require.context('./__test__', true, /.test\.js$/);
context.keys().forEach(context);

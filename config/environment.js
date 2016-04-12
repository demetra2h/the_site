var _ = require('lodash');

var localEnvVars = {
  TITLE:      'my_site',
  SAFE_TITLE: 'my_site'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);

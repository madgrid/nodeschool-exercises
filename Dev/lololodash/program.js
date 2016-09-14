// lololodash nodeschool

// include the Lo-Dash library
var _ = require('lodash');

var worker = function(item) {
  // Lesson 1
  // return _.filter(item, {active: true});
  // Lesson 2
  //return _.sortBy(item, 'quantity').reverse();
  // Lesson 3
  /**
  return _.forEach( item, function(item) {
    if(item.population > 1) {
      item.size = 'big';
    } else if (item.population > 0.5) {
      item.size = 'med';
    } else {
      item.size = 'small'
    }
  } );
   **/
  // Lesson 4
  /**
  var result = {
    hot: [],
    warm: []
  };

  function check_temp (item) {
    return item > 19;
  }

  _.forEach(item, function (town, townname) {

    if (_.every(town, check_temp)) {
      result.hot.push(townname);
    } else if (_.some(town, check_temp)) {
      result.warm.push(townname);
    }

  });

  return result;
   **/
  // Lesson 5
  /**
  return _.chain(item).map(function(arr) {
    return arr + 'Chained';
  })
    .map(function(arr) {
      return arr.toUpperCase();
    }).sortBy().value();
};
   **/
  // Lesson 6
  // Solution with chains - Good

  return _.chain(item)
    .groupBy('username')
    .map(function(item, name) {
      return {username: name, comment_count: _.size(item)};
    })
    .sortBy(function(counted) {
      return -counted['comment_count'];
    });
  // Solution Alternative - Bad
  /**
  var counted = [];

  // Group by username
  comments = _.groupBy(item, 'username');

  _.forEach(item, function(thing, name) {
    counted.push({
      username: name,
      comment_count: _.size(thing)
    });
  });

  return _.sortBy(counted, 'comment_count').reverse();
   **/
};
module.exports = worker;

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the TagDetails class.
 * @constructor
 * Tag details.
 * @member {string} [id] Gets or sets the tag ID.
 * 
 * @member {string} [tagName] Gets or sets the tag name.
 * 
 * @member {object} [count] Gets or sets the tag count.
 * 
 * @member {string} [count.type] Type of count.
 * 
 * @member {string} [count.value] Value of count.
 * 
 * @member {array} [values] Gets or sets the list of tag values.
 * 
 */
function TagDetails(parameters) {
  if (parameters !== null && parameters !== undefined) {
    if (parameters.id !== undefined) {
      this.id = parameters.id;
    }
    if (parameters.tagName !== undefined) {
      this.tagName = parameters.tagName;
    }
    if (parameters.count) {
      this.count = new models['TagCount'](parameters.count);
    }
    if (parameters.values) {
      var tempParametersvalues = [];
      parameters.values.forEach(function(element) {
        if (element) {
          element = new models['TagValue'](element);
        }
        tempParametersvalues.push(element);
      });
      this.values = tempParametersvalues;
    }
  }    
}


/**
 * Validate the payload against the TagDetails schema
 *
 * @param {JSON} payload
 *
 */
TagDetails.prototype.serialize = function () {
  var payload = {};
  if (this['id'] !== null && this['id'] !== undefined) {
    if (typeof this['id'].valueOf() !== 'string') {
      throw new Error('this[\'id\'] must be of type string.');
    }
    payload['id'] = this['id'];
  }

  if (this['tagName'] !== null && this['tagName'] !== undefined) {
    if (typeof this['tagName'].valueOf() !== 'string') {
      throw new Error('this[\'tagName\'] must be of type string.');
    }
    payload['tagName'] = this['tagName'];
  }

  if (this['count']) {
    payload['count'] = this['count'].serialize();
  }

  if (util.isArray(this['values'])) {
    payload['values'] = [];
    for (var i = 0; i < this['values'].length; i++) {
      if (this['values'][i]) {
        payload['values'][i] = this['values'][i].serialize();
      }
    }
  }

  return payload;
};

/**
 * Deserialize the instance to TagDetails schema
 *
 * @param {JSON} instance
 *
 */
TagDetails.prototype.deserialize = function (instance) {
  if (instance) {
    if (instance['id'] !== undefined) {
      this['id'] = instance['id'];
    }

    if (instance['tagName'] !== undefined) {
      this['tagName'] = instance['tagName'];
    }

    if (instance['count']) {
      this['count'] = new models['TagCount']().deserialize(instance['count']);
    }

    if (instance['values']) {
      var tempInstancevalues = [];
      instance['values'].forEach(function(element1) {
        if (element1) {
          element1 = new models['TagValue']().deserialize(element1);
        }
        tempInstancevalues.push(element1);
      });
      this['values'] = tempInstancevalues;
    }
  }

  return this;
};

module.exports = TagDetails;
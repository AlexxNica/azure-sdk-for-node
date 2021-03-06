/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Request to add a physical machine as a protectable item in a container.
 *
 */
class DiscoverProtectableItemRequest {
  /**
   * Create a DiscoverProtectableItemRequest.
   * @member {object} [properties] The properties of a discover protectable
   * item request.
   * @member {string} [properties.friendlyName] The friendly name of the
   * physical machine.
   * @member {string} [properties.ipAddress] The IP address of the physical
   * machine to be discovered.
   * @member {string} [properties.osType] The OS type on the physical machine.
   */
  constructor() {
  }

  /**
   * Defines the metadata of DiscoverProtectableItemRequest
   *
   * @returns {object} metadata of DiscoverProtectableItemRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DiscoverProtectableItemRequest',
      type: {
        name: 'Composite',
        className: 'DiscoverProtectableItemRequest',
        modelProperties: {
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Composite',
              className: 'DiscoverProtectableItemRequestProperties'
            }
          }
        }
      }
    };
  }
}

module.exports = DiscoverProtectableItemRequest;

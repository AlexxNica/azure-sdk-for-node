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

/**
 * Collection of Kudu function information elements.
 */
class FunctionEnvelopeCollection extends Array {
  /**
   * Create a FunctionEnvelopeCollection.
   * @member {string} [nextLink] Link to next page of resources.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of FunctionEnvelopeCollection
   *
   * @returns {object} metadata of FunctionEnvelopeCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'FunctionEnvelopeCollection',
      type: {
        name: 'Composite',
        className: 'FunctionEnvelopeCollection',
        modelProperties: {
          value: {
            required: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'FunctionEnvelopeElementType',
                  type: {
                    name: 'Composite',
                    className: 'FunctionEnvelope'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = FunctionEnvelopeCollection;

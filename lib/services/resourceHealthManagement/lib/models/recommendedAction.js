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
 * Lists actions the user can take based on the current availabilityState of
 * the resource.
 *
 */
class RecommendedAction {
  /**
   * Create a RecommendedAction.
   * @member {string} [action] Recommended action.
   * @member {string} [actionUrl] Link to the action
   * @member {string} [actionUrlText] Substring of action, it describes which
   * text should host the action url.
   */
  constructor() {
  }

  /**
   * Defines the metadata of RecommendedAction
   *
   * @returns {object} metadata of RecommendedAction
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'recommendedAction',
      type: {
        name: 'Composite',
        className: 'RecommendedAction',
        modelProperties: {
          action: {
            required: false,
            serializedName: 'action',
            type: {
              name: 'String'
            }
          },
          actionUrl: {
            required: false,
            serializedName: 'actionUrl',
            type: {
              name: 'String'
            }
          },
          actionUrlText: {
            required: false,
            serializedName: 'actionUrlText',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RecommendedAction;
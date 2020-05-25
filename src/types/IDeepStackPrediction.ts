/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Neil Enns. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export default interface IDeepStackPrediction {
  confidence: number;
  label: string;
  x_min: number;
  x_max: number;
  y_min: number;
  y_max: number;
}

import THREE from 'three.js';

import ShapeAction from './ShapeAction';

class SplineThruAction extends ShapeAction {
  constructor(points) {
    super();

    this.points = points;
  }

  performAction(shape:THREE.Shape) {
    shape.splineThru(this.points);
  }
}

export default SplineThruAction;

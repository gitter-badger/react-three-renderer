import THREE from 'three.js';

import ShapeAction from './ShapeAction';

class LineToAction extends ShapeAction {
  constructor(x, y) {
    super();

    this.x = x;
    this.y = y;
  }

  performAction(shape:THREE.Shape) {
    shape.lineTo(this.x, this.y);
  }
}

export default LineToAction;

import THREE from 'three.js';
import BufferGeometryDescriptorBase from './BufferGeometryDescriptorBase';

import PropTypes from 'react/lib/ReactPropTypes';

class CircleBufferGeometryDescriptor extends BufferGeometryDescriptorBase {
  constructor(react3RendererInstance) {
    super(react3RendererInstance);

    [
      'radius',
      'segments',
      'thetaStart',
      'thetaLength',
    ].forEach(propName => {
      this.hasProp(propName, {
        type: PropTypes.number,
        update: this.updateCacheAndReplace.bind(this, propName),
        default: undefined,
      });
    });
  }

  construct(props) {
    const {
      radius,
      segments,
      thetaStart,
      thetaLength,
      } = props;

    return new THREE.CircleBufferGeometry(radius, segments, thetaStart, thetaLength);
  }
}

export default CircleBufferGeometryDescriptor;

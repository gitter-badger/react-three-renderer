import THREE from 'three.js';
import MaterialDescriptorBase from './MaterialDescriptorBase';

import PropTypes from 'react/lib/ReactPropTypes';

class MeshBasicMaterialDescriptor extends MaterialDescriptorBase {
  constructor(react3RendererInstance) {
    super(react3RendererInstance);

    this.hasColor();
    this.hasWireframe();
  }

  construct(props) {
    const materialDescription = this.getMaterialDescription(props);

    if (props.hasOwnProperty('map')) {
      materialDescription.map = props.map;
    }

    return new THREE.MeshBasicMaterial(materialDescription);
  }
}

export default MeshBasicMaterialDescriptor;

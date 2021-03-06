import Object3DInfo from './Object3DInfo';

class LightInfo extends Object3DInfo {
  getAttributesText(descriptor, componentName) {
    return {
      ...super.getAttributesText(),
      updatesRefreshAllMaterials: 'Acknowledges and silences the remount warning message.\n\n' +
      'It is expensive to add or remove lights from the scene,' +
      ' because all materials need to be refreshed to take the new number of lights into account.\n' +
      'Additionally, toggling `castShadow` on a light will trigger a material refresh as well.\n\n' +
      'In the development environment, a warning message is logged if this happens.\n\n' +
      'It is generally recommended not to add or remove lights after a scene is constructed,' +
      ' but if you know what you are doing you can ignore the warnings by setting the ' +
      ` 'updatesRefreshAllMaterials' attribute to true.` + '\n\n' +
      `Example warning message:
> ${'`'}<${componentName}/>${'`'} has been updated which triggered a refresh of all materials.
>  This is a potentially expensive operation.
>  This can happen when you add or remove a light, or add or remove any component
>  before any lights without keys e.g.
> ${'```'}html
>  <object3d>
>    {/* new or removed component here */}
>    <ambientLight/>
>  </object3d>
>  ${'```'}
>  or update some properties of lights.
>
>  If you would like to add components you should either add the components
>  after the lights (recommended), e.g.
> ${'```'}html
>  <object3d>
>    <ambientLight/>
>    {/* new or removed component here */}
>  </object3d>
> ${'```'}
> or add a 'key' property to the lights e.g.
> ${'```'}html
>  <object3d>
>    {/* new or removed component here */}
>    <ambientLight key="light"/>
>  </object3d>
> ${'```'}
>  If you have modified a light's properties e.g. toggled castShadow, the materials need to be rebuilt as well.
>  To acknowledge and remove this message, please add the property '${'`'}updatesRefreshAllMaterials${'`'}'
>    to ${'`'}<${componentName}/>${'`'} inside the ${'`'}render()${'`'} of the component.
>  For more information, visit [https://github.com/mrdoob/threejs/wiki/Updates/](https://github.com/mrdoob/threejs/wiki/Updates/).
      `,

      shadowBias: '',
      shadowDarkness: '',
      shadowMapWidth: '',
      shadowMapHeight: '',
      shadowCameraNear: '',
      shadowCameraFar: '',

      color: 'The light color.',
      castShadow: 'Whether the light will cast shadows or not.\n\n' +
      '**WARNING**: changing this property after the scene has been' +
      ' constructed is expensive! See [updatesRefreshAllMaterials](#updatesRefreshAllMaterials).'
    };
  }
}

export default LightInfo;

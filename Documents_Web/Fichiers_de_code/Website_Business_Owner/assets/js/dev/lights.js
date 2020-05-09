import * as THREE from "../modules/three.module.js";

export function sun() {

    let light = new THREE.PointLight( 0xffffff, 1, 500 );
    light.position.set( 0, 200, 0 );
    light.castShadow = true;            // default false
    scene.add( light );

    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 500;


    scene.add(light);
}
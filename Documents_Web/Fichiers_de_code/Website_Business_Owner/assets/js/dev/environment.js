import * as THREE from "../modules/three.module.js";
import {increaseLoadedModel} from "./utils.js";

export function createEnvironment() {
    createFloor();
    createWorld();
    insideLandscape();
}

function createFloor(){

    let floorGeo , floorMat , floorText;

    floorGeo = new THREE.CircleGeometry( ENVIRONMENT_RADIUS, 100 );

    floorText = new THREE.TextureLoader().load( '/Images/grass.jpg');

    floorText.wrapS = floorText.wrapT = THREE.RepeatWrapping;
    floorText.repeat.set( 12, 12 );

    floorMat = new THREE.MeshPhongMaterial( {
        map : floorText,
        side : THREE.FrontSide
    });

    floor = new THREE.Mesh( floorGeo, floorMat );
    floor.rotation.x = -Math.PI/2;
    floor.receiveShadow = true;

    scene.add( floor );


}

function createWorld() {
    const INITIAL_ORIENTATION = 10;
    let surroundingGeo, surroundingText, surroundingMat;


    surroundingGeo  = new THREE.SphereGeometry(ENVIRONMENT_RADIUS , 100 , 20);
    surroundingText = new THREE.TextureLoader().load( '/Images/world_sphere.jpg');


    surroundingMat = new THREE.MeshPhongMaterial( {
        map : surroundingText,
        side : THREE.FrontSide,
    });

    worldSphere    = new THREE.Mesh(surroundingGeo , surroundingMat);
    worldSphere.rotation.y = (Math.PI/180) * INITIAL_ORIENTATION;

    worldSphere.castShadow = worldSphere.receiveShadow = true;
    scene.add(worldSphere);
}

export function loadElement(data) {
    colladaLoader.load("/Models/" + data[MODEL_INDEX_PATH] + 'model.dae', function (result) {
        let object = result.scene;
        let ratio =data[MODEL_INDEX_RATIO];

        object.scale.set(ratio,ratio,ratio);

        object.position.set( data[MODEL_INDEX_X], data[MODEL_INDEX_Y] , data[MODEL_INDEX_Z] )
        object.rotation.z = data[MODEL_INDEX_ROTATE];
        object.traverse(
            function( node ) {
                if ( node instanceof THREE.Mesh ) {
                    node.castShadow = true;
                }
                if (node.type === "LineSegments") {
                    node.visible = false;
                }
            }
        );
        colladaLoader.onload = increaseLoadedModel();
        scene.add(result.scene);
    });
}

function insideLandscape() {
    let boxMat , boxGeo;
    let txtLoader = new THREE.TextureLoader();

    let aside = txtLoader.load('/Images/inside.jpg');
    let top = txtLoader.load('/Images/box_sky_text.jpeg');
    let bot = txtLoader.load('/Images/grass.jpg');


    boxMat = [
        new THREE.MeshPhongMaterial({
            map: aside,
            side : THREE.BackSide
        }),
        new THREE.MeshPhongMaterial({
            map: aside,
            side : THREE.BackSide
        }),
        new THREE.MeshPhongMaterial({
            map: top,
            side : THREE.BackSide
        }),
        new THREE.MeshPhongMaterial({
            map: bot,
            side : THREE.BackSide
        }),
        new THREE.MeshPhongMaterial({
            map: aside,
            side : THREE.BackSide
        }),
        new THREE.MeshPhongMaterial({
            map: aside,
            side : THREE.BackSide
        })
    ];

    boxGeo = new THREE.CubeGeometry(ENVIRONMENT_RADIUS, ENVIRONMENT_RADIUS*0.8, ENVIRONMENT_RADIUS, 1, 1, 1);
    let internalBox = new THREE.Mesh(boxGeo, boxMat);


    internalBox.position.y = ENVIRONMENT_RADIUS*0.7/2-60;

    internalBox.receiveShadow = true;
    scene.add(internalBox);
}
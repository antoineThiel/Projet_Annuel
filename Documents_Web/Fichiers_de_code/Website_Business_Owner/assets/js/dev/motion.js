import * as THREE from "../modules/three.module.js";
import {createCamera,moveCamera} from "./camera.js";
import Stats from "../modules/stats.module.js";
import {createEnvironment,loadElement} from "./environment.js";
import {sun } from "./lights.js";
import {getCloser} from "./animations.js";


export function init() {

	path_to_models.forEach(loadElement);

	scene = new THREE.Scene();

	prevTime = performance.now();
	velocity = new THREE.Vector3();
	direction = new THREE.Vector3();
	vertex = new THREE.Vector3();
	color = new THREE.Color();
	createRenderer();
	createCamera();


	rayCaster  = new THREE.Raycaster( new THREE.Vector3(), new THREE.Vector3( 0, - 1, 0 ), 0, 10 );
	// scene.fog = new THREE.FogExp2(0x8f8483, 0.003);

	// clock = new THREE.Clock();

	ambientLight = new THREE.AmbientLight( 0x404040);
	scene.add( ambientLight );

	sun();
	// stats = new Stats();
	// instructions.appendChild( stats.dom );

	//

	window.addEventListener( 'resize', onWindowResize, false );

	createEnvironment();

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

export function animate() {

	requestAnimationFrame( animate );
	// stats.update();
	renderer.render(scene , camera);

	moveCamera();

	if (animationNeedsToZoom) {
		getCloser();
	}


}


function createRenderer() {

	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	// renderer.shadowMap.Enabled = true;
	renderer.shadowMapEnabled = true;
	renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

	let div = document.getElementById('webGl');
	div.appendChild( renderer.domElement );

}
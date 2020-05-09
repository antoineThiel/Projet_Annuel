import * as THREE from "../modules/three.module.js";
import {PointerLockControls} from "../modules/PointerLockControls.js";

export function createCamera() {

	initCamera(0,300, -500);

}

export function initCamera(x, y , z){
	camera = new THREE.PerspectiveCamera( 70, window.innerWidth/window.innerHeight);
	camera.position.set(x, y, z);
	camera.lookAt(0 , 0 , 0);
}

export function evolveCamera2() {

	controls = new PointerLockControls( camera, document.body );

	instructions.addEventListener( 'click', function () {

		controls.lock();

	}, false );

	controls.addEventListener( 'lock', function () {

		instructions.style.display = 'none';
		blocker.style.display = 'none';

	} );

	controls.addEventListener( 'unlock', function () {

		blocker.style.display = 'block';
		instructions.style.display = '';

	} );

	scene.add( controls.getObject() );
}

export function moveCamera() {
	if ( cameraEvolved && controls.isLocked === true ) {

		rayCaster.ray.origin.copy( controls.getObject().position );
		rayCaster.ray.origin.y -= 14;

		let intersections = rayCaster.intersectObjects( [floor] );

		let onObject = intersections.length > 0;

		let time = performance.now();
		let delta = ( time - prevTime ) / 1000;

		velocity.x -= velocity.x * 10.0 * delta;
		velocity.z -= velocity.z * 10.0 * delta;

		velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

		direction.z = Number( moveForward ) - Number( moveBackward );
		direction.x = Number( moveRight ) - Number( moveLeft );
		direction.normalize(); // this ensures consistent movements in all directions

		if ( moveForward || moveBackward ) velocity.z -= direction.z * 400.0 * delta;
		if ( moveLeft || moveRight ) velocity.x -= direction.x * 400.0 * delta;

		if ( onObject === true ) {

			velocity.y = Math.max( 0, velocity.y );
			canJump = true;

		}

		controls.moveRight( - velocity.x * delta );
		controls.moveForward( - velocity.z * delta );

		controls.getObject().position.y += ( velocity.y * delta ); // new behavior

		if ( controls.getObject().position.y < 14 ) {

			velocity.y = 0;
			controls.getObject().position.y = 14;

			canJump = true;

		}

		prevTime = time;

	}
}
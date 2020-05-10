import {animate} from "./motion.js";

export function isCameraCloseEnough(){
    return camera.position.y < 30 /*&& camera.position.z < 16*/;
}

export function increaseLoadedModel(){
    loaded_objects += 1;

    if(loaded_objects === path_to_models.length){
        animate();
    }
}

export let onKeyDown = function ( event ) {

    switch ( event.code ) {

        case 'ArrowUp': // up
        case 'KeyW': // w
            moveForward = true;
            break;

        case 'ArrowLeft': // left
        case 'KeyA': // a
            moveLeft = true;
            break;

        case 'ArrowDown': // down
        case 'KeyS': // s
            moveBackward = true;
            break;

        case 'ArrowRight': // right
        case 'KeyD': // d
            moveRight = true;
            break;

        case 'Space': // space
            if ( canJump === true ) velocity.y += 350;
            canJump = false;
            break;

    }

};

export let onKeyUp = function ( event ) {

    switch ( event.code ) {

        case 'ArrowUp': // up
        case 'KeyW': // w
            moveForward = false;
            break;

        case 'ArrowLeft': // left
        case 'KeyA': // a
            moveLeft = false;
            break;

        case 'ArrowDown': // down
        case 'KeyS': // s
            moveBackward = false;
            break;

        case 'ArrowRight': // right
        case 'KeyD': // d
            moveRight = false;
            break;

    }

};
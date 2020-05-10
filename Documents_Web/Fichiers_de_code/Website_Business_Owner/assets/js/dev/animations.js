import {isCameraCloseEnough} from "./utils.js";
import {evolveCamera2} from "./camera.js";
import {onKeyDown, onKeyUp} from "./utils.js";

export function getCloser(){
    const SPEED_COEF = 1.8;
    camera.position.z += 5 /SPEED_COEF;
    camera.position.y -= 3 /SPEED_COEF;

    worldSphere.rotation.y += Math.PI/180;


    animationNeedsToZoom = !isCameraCloseEnough();

    lookingAround = !animationNeedsToZoom;

    if(!animationNeedsToZoom){
        instructions.style.display = '';
        blocker.style.display = 'block';
        cameraEvolved = true;

        document.addEventListener( 'keydown', onKeyDown, false );
        document.addEventListener( 'keyup', onKeyUp, false );
        evolveCamera2();
    }
}


export function lookAround() {
//     //TODO : remove the "no transition" effect
//     gap += Math.PI / 180  ;
//
//     camera.lookAt(
//         camera.position.x + Math.cos(gap),
//         camera.position.y,
//         camera.position.z + Math.sin(gap)
//     );
}

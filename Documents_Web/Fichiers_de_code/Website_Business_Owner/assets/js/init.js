import {init} from "./dev/motion.js";
import {ColladaLoader} from "./modules/ColladaLoader.js";

colladaLoader = new ColladaLoader();

const blocker = document.getElementById( 'blocker' );
const instructions = document.getElementById( 'instructions' );

instructions.style.display = 'none';
blocker.style.display = 'none';

init();


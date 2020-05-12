import {init} from "./dev/motion.js";
import {ColladaLoader} from "./modules/ColladaLoader.js";

colladaLoader = new ColladaLoader();

instructions.style.display = "none";

document.getElementById('launcher').addEventListener('click', function () {
    const $webGL = document.getElementById('webGl');
    $webGL.classList.remove("inactive");
    $webGL.classList.add('active');

    this.classList.remove('active');
    this.classList.add('inactive');

    document.getElementsByTagName('footer')[0].style.display = 'none';
    init();
})

exitInfos = document.getElementById('exit_info');

// init();


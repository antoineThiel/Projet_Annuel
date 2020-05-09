let renderer;
let scene;

let stats;
let clock;

let camera;
let controls;
let ambientLight;

let cameraEvolved = false;

let animationNeedsToZoom = true ;
let lookingAround = false;

let floor;
let worldSphere;

let continue_animation = true;

let colladaLoader;

let loaded_objects = 0;


const ENVIRONMENT_RADIUS = 200;
const path_to_models = [
    ['misc/truck/'       , 25  ,  10 ,0, 0.3 , Math.PI*0  ], //OK
    ['tables/table/'       , -25 ,  25 , 0, 0.3 , Math.PI*2/5 ], //OK
    ['tables/table/'       , 20  ,  35 , 0, 0.3 , Math.PI*2/3], //OK
    ['tables/table/'       , -25  , -35 ,0, 0.3 , Math.PI/4],  //OK
    ['misc/playGround/'  , -40  , 55 ,0, 0.27 , -Math.PI*3/5 ],  //OK
    ['humans/realCook/'    , 49   , -50 , 7,0.34 , Math.PI*3/2 ], //OK
    // ['misc/umbrella/'    , -100  , 12 , 0,0.34 , Math.PI*0], //OK
    ['misc/umbrella/'    , -64  , 30 , 0,0.34 , Math.PI*0 ], //OK
    ['misc/umbrella/'    , -94 , -47 ,0, 0.34 , Math.PI*0 ], //OK
    ['tables/duo_table/'   ,  -30  , -70 , 0,0.02 , Math.PI*3/4], //OK
    ['humans/child1/'   ,  -35  , 70 , 16,0.245 , Math.PI ], //OK
    ['humans/child2/'   ,  -20  , -50 , 5,0.245 , Math.PI ],  //OK
    ['humans/child3/'   ,  -10  , 73 , 0,0.245 , Math.PI ], //OK
    ['humans/child4/'   ,    -30  , 45 , 5,0.245 , 0 ], //OK
    ['trees/tree1/'     ,  -55 , -30 , -14 , 0.2 , 0],
    ['trees/tree1/'     ,  50 , 50 , -14 , 0.2 , Math.PI],
];

const
    MODEL_INDEX_PATH = 0    ,
    MODEL_INDEX_X = 1       ,
    MODEL_INDEX_Z = 2       ,
    MODEL_INDEX_Y = 3       ,
    MODEL_INDEX_RATIO = 4   ,
    MODEL_INDEX_ROTATE = 5  ;

const blocker = document.getElementById( 'blocker' );
const instructions = document.getElementById( 'instructions' );

let rayCaster;

let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;
let canJump = false;

let prevTime;
let velocity ;
let direction;
let vertex ;
let color;

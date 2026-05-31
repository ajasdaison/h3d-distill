import * as THREE from "three";

//container
const scene = new THREE.Scene();

//create a camera
//75 ->  vertical field of view in degrees
//window.innerWidth / window.innerHeight -> Aspect Ratio
//0.1 -> Near Clipping Plane
//1000 -> Far Clipping Plane
const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);

//create a renderer: object that talks with webgl
const renderer = new THREE.WebGLRenderer();

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);
//attach canvas to page
document.body.appendChild(
    renderer.domElement
);

//cube geometry(shape)
const geometry = new THREE.BoxGeometry(
    1,
    1,
    1
);

//controls lighting(appearance)
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true
});

//shape + appearance
const cube = new THREE.Mesh(
    geometry,
    material
);

//scale for the input on x
const slider = document.getElementById("scaleSlider");
slider.addEventListener("input", () => {

    const scale = parseFloat(slider.value);

    cube.scale.set(scale,scale,scale);
});

scene.add(cube);

//take camera away from cube 
camera.position.z = 5;

//animate
function animate() {

    requestAnimationFrame(animate);
    //rotation on x and y axis
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();

import * as THREE from "three";

import vertexShader
    from "./shaders/vertex.glsl";

import fragmentShader
    from "./shaders/fragment.glsl";

/*
 * Scene
 */
const scene = new THREE.Scene();

/*
 * Camera
 */
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.z = 5;

/*
 * Renderer
 */
const renderer = new THREE.WebGLRenderer();

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

document.body.appendChild(
    renderer.domElement
);

/*
 * Geometry
 */
const geometry = new THREE.BoxGeometry(
    1,
    1,
    1
);


/*
 * Shader Material
 */
const material =
    new THREE.ShaderMaterial({

        uniforms: {
            shear: {
                value: 0.0
            }
        },

        vertexShader,
        fragmentShader,

        wireframe: true
    });

/*
 * Mesh
 */
const cube =
    new THREE.Mesh(
        geometry,
        material
    );

scene.add(cube);

/*
 * Slider
 */
const shearSlider =
    document.getElementById(
        "shearSlider"
    );

const shearValue =
    document.getElementById(
        "shearValue"
    );

shearSlider.addEventListener(
    "input",
    () => {

        const value =
            parseFloat(
                shearSlider.value
            );

        material.uniforms.shear.value =
            value;

        shearValue.textContent =
            value.toFixed(2);
    }
);

/*
 * Resize Handling
 */
window.addEventListener(
    "resize",
    () => {

        camera.aspect =
            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );
    }
);

/*
 * Animation Loop
 */
function animate()
{
    requestAnimationFrame(
        animate
    );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(
        scene,
        camera
    );
}

animate();

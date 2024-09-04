let scene, camera, renderer;

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Load STL file
  const loader = new STLLoader(); 

  loader.load(
    'ring.stl', 
    function (geometry) {
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      camera.position.z = 5;

      animate();
    },
    function (xhr) { 
      console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) { 
      console.error('An error happened', error);
    }
  );
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

init(); 
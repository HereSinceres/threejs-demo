import * as THREE from 'three';
export default class MeshCreeper {
  private  head: THREE.Mesh<THREE.BoxGeometry, THREE.MeshPhongMaterial>;
  private  body: THREE.Mesh<THREE.BoxGeometry, THREE.MeshPhongMaterial>;
  private    foot1: THREE.Mesh<THREE.BoxGeometry, THREE.MeshPhongMaterial>;
  private    foot2: THREE.Mesh<THREE.BoxGeometry, THREE.MeshPhongMaterial>;
  private    foot3: THREE.Mesh<THREE.BoxGeometry, THREE.MeshPhongMaterial>;
  private    foot4: THREE.Mesh<THREE.BoxGeometry, THREE.MeshPhongMaterial>;
  private  feet: THREE.Group;
    creeper: THREE.Group;
    constructor() {
        // 宣告頭、身體、腳幾何體大小
        const headGeo = new THREE.BoxGeometry(2, 2, 2);
        const bodyGeo = new THREE.BoxGeometry(2, 4, 1);
        const footGeo = new THREE.BoxGeometry(1, 1.5, 1);

        // 馮氏材質設為綠色
        const creeperMat = new THREE.MeshPhongMaterial({ color: 0x00ff00 });

        // 頭
        this.head = new THREE.Mesh(headGeo, creeperMat);
        this.head.position.set(0, 3, 0);

        // 身體
        this.body = new THREE.Mesh(bodyGeo, creeperMat);
        this.body.position.set(0, 0, 0);

        // 四隻腳
        this.foot1 = new THREE.Mesh(footGeo, creeperMat);
        this.foot1.position.set(-1, -1.5, 1);
        this.foot2 = this.foot1.clone(); // 剩下三隻腳都複製第一隻的 Mesh
        this.foot2.position.set(-1, -1.5, -1);
        this.foot3 = this.foot1.clone();
        this.foot3.position.set(1, -1.5, 1);
        this.foot4 = this.foot1.clone();
        this.foot4.position.set(1, -1.5, -1);

        // 將四隻腳組合為一個 group
        this.feet = new THREE.Group();
        this.feet.add(this.foot1);
        this.feet.add(this.foot2);
        this.feet.add(this.foot3);
        this.feet.add(this.foot4);

        // 將頭、身體、腳組合為一個 group
        this.creeper = new THREE.Group();
        this.creeper.add(this.head);
        this.creeper.add(this.body);
        this.creeper.add(this.feet);
        this.creeper.position.set(1,1,1); 
    }

    clear( ){
        // Clear
        this.creeper.clear();
    }
}

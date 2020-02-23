class ParticleEntity extends Entity {
  constructor() {
    super();
    this.initialTime = 0;
    this.duration = 50;

    this.mesh = meshBuffer["circle"]
  }
}
class PoolDTO {
    constructor(pool) {
      this.id = pool.id;
      this.name = pool.name;
      this.lanes = pool.Lanes.map(lane => ({
        id: lane.id,
        laneNumber: lane.laneNumber,
      }));
    }
  }
  
  export default PoolDTO;
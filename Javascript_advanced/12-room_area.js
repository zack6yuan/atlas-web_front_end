const roomDimensions = {
  width: 50,
  length: 100,
  getArea() {
    return this.width * this.length;
  }
};

/* Binding roomDimensions to getArea */
const boundGetArea = roomDimensions.getArea.bind(roomDimensions);
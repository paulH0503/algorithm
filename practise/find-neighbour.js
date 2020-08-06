
function algorithm(array) {
  const row = array.length;
  const col = array[0].length;

  function init() {
    const validCol = array.every((el) => el.length === col);
    isCheckConditionValid = validCol;
    return this;
  }
  
  function findNeighbour(cRow, cCol, visible) {
    let neightbour = 1;
    console.log(cRow, cCol)
    for (let r = cRow - 1; r <= cRow + 1; r++) {
      for (let c = cCol - 1; c <= cCol + 1; c++) {
        if (r < row && c < col && r >= 0 && c >= 0 && (r !== cRow || c !== cCol)) {
          const isNodeVisible = checkNodeVisible(r, c, visible);
          if (!isNodeVisible) {
            if (array[r][c]) {
              neightbour += findNeighbour(r, c, visible);
              console.log("findNeighbour: r c", r, c, visible, neightbour);
            }
          }
        }
      }
    }
    console.log("neightbour", neightbour);
    return neightbour;
  }

  function findMaxNeighbour() {
    const visible = {};
    let neighbour = 0;
    for (let r = 0; r < row; r++) {
      for (let c = 0; c < col; c++) {
        // check row, col is visible or not
        if (!checkNodeVisible(r, c, visible)) {
          // query find neightbour with value = 1
          if (array[r][c]) {
            console.log("row col", r,c);
          }
          array[r][c] ? neighbour = Math.max(neighbour, findNeighbour(r, c, visible)) : '';  
        }
      }
    }
    return neighbour;
  }

  /**
   * 
   * @param {*} cRow 
   * @param {*} cCol 
   * @param {*} visible 
   */
  function checkNodeVisible(cRow, cCol, visible) {
    const key = cRow + '-' + cCol;
    if (visible[key]) {
      return true;
    }
    // node is not visible
    visible[key] = true;
    return false;
  }

  return {
    init,
    findNeighbour,
    findMaxNeighbour
  }
}

var a = algorithm([[1,1,0], [1,0,0], [0,1,1]]);

console.log(a.init().findMaxNeighbour());



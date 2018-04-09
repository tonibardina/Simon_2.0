let Obj = {
  grid: [
    'A1', 'A2', 'A3', 'A4', 'A5',
    'B1', 'B2', 'B3', 'B4', 'B5',
    'C1', 'C2', 'C3', 'C4', 'C5',
    'D1', 'D2', 'D3', 'D4', 'D5',
    'E1', 'E2', 'E3', 'E4', 'E5',
  ],
  currentActiveCube: '',
  Level: function (lvl) {
    let Cube = this.Cube;
    for (var property in lvl) {
      if (lvl.hasOwnProperty(property) && lvl[property].length) {
        lvl[property] = new Cube(property, false, {}, `${lvl[property]}`)
      } else {
        lvl[property] = 'block'
      }
    }
    return lvl
  },
  Cube: function (id, active, assets, type) {
    this.id = id;
    this.active = false;
    this.size = {
      height: '30px',
      width: '30px'
    };
    this.assets = {
      sounds: {
        success: '',
        fail: ''
      },
      images: {
        normal: 'normal',
        active: 'active'
      }
    };
    this.setStyle = function () {
      return this.active
        ? this.assets.images.active
        : this.assets.images.normal
    };
    this.changestate = function () {
      this.active = !this.active
    }
  }
}

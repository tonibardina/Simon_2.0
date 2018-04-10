function createLevel (Obj, level, grid, sequence) {
  this.Obj = {
    grid,
    LevelCubes: function (lvl, sequence) {
      let Cube = this.Cube;
      for (var property in lvl) {
        if (lvl.hasOwnProperty(property) && lvl[property]) {
          lvl[property] = new Cube(property, false, true, {}, `${lvl[property]}`)
        } else {
          lvl[property] = new Cube(property, false, false, {}, `block`)
        }
      }
    },
    level,
    sequence: '',
    Cube: function (id, active, assets, type) {
      this.id = id;
      this.active = false;
      this.isActive = false;
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
      this.setAppearence = function () {
        return this.active
          ? this.assets.images.active
          : this.assets.images.normal
      };
      this.changestate = function () {
        this.active = !this.active
      };
      this.arrowFunction = function () {
        return 'arrowww'
      }
      this.behavior = function (type) {
        switch (type) {
          case 'normal':
            this.changeState();
            break;
          case 'block':
            return 'block'
            break;
          case 'arrow':
            this.arrowFunction();
            break;
          default:
            this.changeState()
        }
      }
    }
  }  
}
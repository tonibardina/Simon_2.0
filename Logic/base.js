function createLevel(level) {
  this.Obj = {
    level,
    grid: {},
    createLvl: function (framework) {
      let Cube = this.Cube;
      for (var property in this.grid) {
        let hasProperty = this.sequence.indexOf(property);
        let id = hasProperty ? hasProperty + 1 : 'block';
        if (this.grid.hasOwnProperty(property) && this.grid[property]) {
          this.grid[property] = new Cube(id, false, {}, `${this.grid[property]}`)
        } else {
          this.grid[property] = new Cube(id, false, {}, `block`)
        }
      }
      switch (framework) {
        case 'react-native':
          // React native output
          break;
        default:
          'none'
      }
    },
    generateSequence: function () {
      // generate random positons
    },
    startSequence: function () {
      // start sequence
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
      this.type = type;
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
      this.behavior = function () {
        switch (this.type) {
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
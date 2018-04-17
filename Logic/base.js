function createLevel(Obj, level, grid, sequence) {
  this.Obj = {
    grid: [3, 3],
    cells: function (grid) {
      // return all grid cells, empty or not
    },
    level: '',
    sequence: '',
    createLvl: function (framework) {
      let Cube = this.Cube;
      for (var property in this.cells) {
        let hasProperty = this.sequence.indexOf(property);
        let id = hasProperty ? hasProperty + 1 : 'block';
        if (this.cells.hasOwnProperty(property) && this.cells[property]) {
          this.cells[property] = new Cube(id, false, {}, `${this.cells[property]}`)
        } else {
          this.cells[property] = new Cube(id, false, {}, `block`)
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
    generateSequence: function (num) {
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
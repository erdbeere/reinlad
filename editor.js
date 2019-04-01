buttonIcons = {
  line: $('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M 379.31185,67.584698 82.96249,388.47905 v 0 C -150.06273,432.48423 182.97271,626.18774 149.7,429.03751 v 0 L 429.17468,123.48377 C 634.7821,106.57214 391.12,-105.49005 379.31185,67.584698 Z" fill="currentColor"></path></svg>'),
}


newPaint = p.View.Paint.extend({

  colors: p.View.Paint.prototype.colors.concat('#161618'),

  extraTools: {
    line: {
      name: 'Linie',
      path: 'media/paint/pencil.png',
      width: 120,
      height: 40,
      alpha: 1,
      size: 0.25
    }
  },

  mouseDown: function(ev) {
    ev.preventDefault();
    var p = this.getInternalPosition(ev.clientX, ev.clientY);
    switch (this.tool) {
      case this.tools.bucket:
        this.fill(p.x, p.y);
        break;
      case this.tools.line:
        this.lastPaintPos = this.toolProps.startPoint;
        if (ev.button == 0) {
          this.painting = true;
          this.paint(p.x, p.y);
        }
        break;
      default:
        this.painting = true;
        this.paint(p.x, p.y);
    }
  },

  mouseUp: function(ev) {
      ev.preventDefault();
      var p = this.getInternalPosition(ev.clientX, ev.clientY);

      switch (this.tool) {
        case this.tools.line:
          if (p.x <= this.canvas.width && p.y <= this.canvas.height) {
            if (ev.button == 0) {
              this.toolProps.startPoint = {x: p.x, y: p.y};
            } else {
              this.toolProps.startPoint = null;
            }
          }
          break;
        default:
      }
      this.historyAdd();
      this.painting = false;
      this.lastPaintPos = null;
  },

  setTool: function(name) {
    p.View.Paint.prototype.setTool.bind(this)(name);
    this.toolProps = {};
  },

  load: function() {
    $.extend(this.tools, this.extraTools),
    p.View.Paint.prototype.load.bind(this)();
  },

  render: function() {
    p.View.Paint.prototype.render.bind(this)();

    var lastPaintTool = this.$container.find('.paint-tool:last');

    var i = 0;
    for (var name in this.extraTools) {
      i++;
      var tool = this.extraTools[name]
      var button = $('<div class="paint-button paint-tool" data-tool="' + name + '" title="' + tool['name'] + '"/>')
      button.click(function(ev) {
        this.$container.find('.paint-tool').removeClass('paint-active');
        ev.currentTarget.classList.add('paint-active');
        this.setTool(ev.currentTarget.dataset.tool);
      }.bind(this));

      button.append(buttonIcons[name]);
      if (i == Object.keys(this.extraTools).length) {
        button.addClass('paint-button-spacing');
      }
      button.insertAfter(lastPaintTool);
    }
  }
});

p.addRoute(newPaint, 'newPaint');

// put 404 route at the end
notFound = p._routes[p._routes.length - 2]
p._routes[p._routes.length - 2] = p._routes[p._routes.length - 1]
p._routes[p._routes.length - 1] = notFound

p.navigateTo('');
p.navigateTo('newPaint');

/*
echtesGrau.click(function(ev) {
  this.$container.find('.paint-color-button').removeClass('paint-active');
  ev.currentTarget.classList.add('paint-active');
  this.setColor(ev.currentTarget.dataset.color);
}.bind(p.currentView));
*/

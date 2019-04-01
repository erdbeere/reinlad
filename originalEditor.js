p.View.Paint = p.View.Base.extend({
    title: "Reinlad bauen",
    template: '<h1 class="pane-head">NEUEN REINLAD ERSTELLEN</h1> <div class="paint-pallete"> <div class="paint-button paint-new" data-width="1052" data-height="580" title="Neu Querformat"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140"><path fill="currentColor" d="M97.439,53.147V15.499H6.644C2.962,15.499,0,18.461,0,22.143v94.078c0,3.682,2.962,6.645,6.644,6.645h128.444 c3.682,0,6.643-2.963,6.643-6.645V59.79h-37.646C100.43,59.79,97.439,56.8,97.439,53.147z M141.73,49.243v1.688h-35.432V15.499 h1.688c1.771,0,3.461,0.692,4.707,1.938l27.1,27.129C141.039,45.811,141.73,47.499,141.73,49.243z"/></svg> </div> <div class="paint-button paint-new" data-width="580" data-height="1052" title="Neu Hochformat"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="-64 0 512 512"><path fill="currentColor" d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"></path></svg> </div> <div class="clear"></div> </div> <div class="paint-canvas-container"> <canvas width="1052" height="580" id="paint-canvas"></canvas> </div> <div class="paint-pallete"> <div class="paint-button paint-tool paint-active" data-tool="pencil" title="Bleistift"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"></path></svg> </div> <div class="paint-button paint-tool" data-tool="brush" title="Pinsel"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M167.02 309.34c-40.12 2.58-76.53 17.86-97.19 72.3-2.35 6.21-8 9.98-14.59 9.98-11.11 0-45.46-27.67-55.25-34.35C0 439.62 37.93 512 128 512c75.86 0 128-43.77 128-120.19 0-3.11-.65-6.08-.97-9.13l-88.01-73.34zM457.89 0c-15.16 0-29.37 6.71-40.21 16.45C213.27 199.05 192 203.34 192 257.09c0 13.7 3.25 26.76 8.73 38.7l63.82 53.18c7.21 1.8 14.64 3.03 22.39 3.03 62.11 0 98.11-45.47 211.16-256.46 7.38-14.35 13.9-29.85 13.9-45.99C512 20.64 486 0 457.89 0z"></path></svg> </div> <div class="paint-button paint-tool" data-tool="spray" title="Sprühdose"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M224 32c0-17.67-14.33-32-32-32h-64c-17.67 0-32 14.33-32 32v96h128V32zm256 96c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32zm-256 32H96c-53.02 0-96 42.98-96 96v224c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32V256c0-53.02-42.98-96-96-96zm-64 256c-44.18 0-80-35.82-80-80s35.82-80 80-80 80 35.82 80 80-35.82 80-80 80zM480 96c17.67 0 32-14.33 32-32s-14.33-32-32-32-32 14.33-32 32 14.33 32 32 32zm-96 32c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32zm-96-96c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32zm96 0c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32zm96 192c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"></path></svg> </div> <div class="paint-button paint-tool paint-button-spacing" data-tool="bucket" title="Farbeimer"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M502.63 217.06L294.94 9.37C288.69 3.12 280.5 0 272.31 0s-16.38 3.12-22.62 9.37l-81.58 81.58L81.93 4.77c-6.24-6.25-16.38-6.25-22.62 0L36.69 27.38c-6.24 6.25-6.24 16.38 0 22.63l86.19 86.18-94.76 94.76c-37.49 37.49-37.49 98.26 0 135.75l117.19 117.19c18.75 18.74 43.31 28.12 67.87 28.12 24.57 0 49.13-9.37 67.88-28.12l221.57-221.57c12.49-12.5 12.49-32.76 0-45.26zm-116.22 70.97H65.93c1.36-3.84 3.57-7.98 7.43-11.83l13.15-13.15 81.61-81.61 58.61 58.6c12.49 12.49 32.75 12.49 45.24 0 12.49-12.49 12.49-32.75 0-45.24l-58.61-58.6 58.95-58.95 162.45 162.44-48.35 48.34z"></path></svg> </div> <div class="paint-button paint-size paint-active" data-size="32" title="Kleine Spitze"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <circle cx="256" cy="256" r="32" fill="currentColor" /> </svg> </div> <div class="paint-button paint-size" data-size="64" title="Kleinere Spitze"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <circle cx="256" cy="256" r="64" fill="currentColor" /> </svg> </div> <div class="paint-button paint-size" data-size="128" title="Größere Spitze"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <circle cx="256" cy="256" r="128" fill="currentColor" /> </svg> </div> <div class="paint-button paint-size paint-button-spacing" data-size="192" title="Große Spitze"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <circle cx="256" cy="256" r="192" fill="currentColor" /> </svg> </div> <div class="paint-button paint-undo" data-size="128" title="Rückgängig"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="-128 -128 768 768"> <path fill="currentColor" d="M255.545 8c-66.269.119-126.438 26.233-170.86 68.685L48.971 40.971C33.851 25.851 8 36.559 8 57.941V192c0 13.255 10.745 24 24 24h134.059c21.382 0 32.09-25.851 16.971-40.971l-41.75-41.75c30.864-28.899 70.801-44.907 113.23-45.273 92.398-.798 170.283 73.977 169.484 169.442C423.236 348.009 349.816 424 256 424c-41.127 0-79.997-14.678-110.63-41.556-4.743-4.161-11.906-3.908-16.368.553L89.34 422.659c-4.872 4.872-4.631 12.815.482 17.433C133.798 479.813 192.074 504 256 504c136.966 0 247.999-111.033 248-247.998C504.001 119.193 392.354 7.755 255.545 8z"></path> </svg> </div> <div class="paint-button paint-redo paint-button-spacing" data-size="192" title="Wiederherstellen"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="-128 -128 768 768"> <path fill="currentColor" d="M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z"></path> </svg> </div> <div class="paint-colors"> </div> <div class="clear"></div> </div> <div class="pane form-page"> <form id="post-form"> <div class="upload-tag-container"> <div class="sfw-status"> <input type="radio" class="box-from-label" name="sfwstatus" value="sfw" id="ratingSfw"> <label title="Safe for Work" for="ratingSfw">sfw</label> <input type="radio" class="box-from-label" name="sfwstatus" value="nsfw" id="ratingNsfw"> <label title="Not Safe for Work" for="ratingNsfw">nsfw</label> <input type="radio" class="box-from-label" name="sfwstatus" value="nsfl" id="ratingNsfl"> <label title="Not Safe for Life" for="ratingNsfl">nsfl</label> <input type="radio" class="box-from-label" name="sfwstatus" value="nsfp" id="ratingNsfp"> <label title="Safe for Work aber nur f&uuml;r registrierte Benutzer" for="ratingNsfp">sfw/nsfp</label> </div> <h3>SFW-Status und Tags</h3> <input type="text" class="upload-tagsinput" name="tags"/> </div> <div class="upload-similar"></div> <div> <input type="submit" class="button" value="Reinlad pfostieren"/> </div> </form> <div class="post-filter"></div> </div> <p> Icons von <a href="https://fontawesome.com/license" target="_blank">Font Awesome</a>. </p>',
    painting: false,
    undoStack: [],
    undoPos: 0,
    undoMaxDepth: 32,
    lastPaintPos: null,
    tools: {
        pencil: {
            path: 'media/paint/pencil.png',
            width: 72,
            height: 72,
            alpha: 1,
            size: 0.25
        },
        brush: {
            path: 'media/paint/brush.png',
            width: 57,
            height: 57,
            alpha: 0.2,
            size: 1
        },
        spray: {
            path: 'media/paint/spray.png',
            width: 75,
            height: 75,
            alpha: 0.05,
            size: 1.5
        },
        bucket: {
            isBucket: true
        },
    },
    tool: null,
    colors: ['#d6a090', '#fe3b1e', '#a12c32', '#fa2f7a', '#fb9fda', '#e61cf7', '#992f7c', '#47011f', '#051155', '#4f02ec', '#2d69cb', '#00a6ee', '#6febff', '#08a29a', '#2a666a', '#063619', '#000000', '#4a4957', '#8e7ba4', '#b7c0ff', '#ffffff', '#acbe9c', '#827c70', '#5a3b1c', '#ae6507', '#f7aa30', '#f4ea5c', '#9b9500', '#566204', '#11963b', '#51e113', '#08fdcc', ],
    color: '#000000',
    size: 0.25,
    modified: true,
    show: function(params) {
        if (!p.mainView.requireLogin()) {
            return false;
        }
        return this.parent(params);
    },
    load: function() {
        p.api.post('paint.ratelimited');
        var assets = {};
        for (var name in this.tools) {
            if (this.tools[name].path) {
                assets[name] = this.tools[name].path;
            }
        }
        this.loadAssets(assets, this.toolsLoaded.bind(this));
        return false;
    },
    render: function() {
        this.parent();
        this.canvas = this.$container.find('#paint-canvas')[0];
        this.ctx = this.canvas.getContext('2d');
        this.canvas.getContext = this.except.bind(this);
        this.ctx.fillStyle = '#fff';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillPath = this.ctx.drawImage;
        this.ctx.drawImage = this.except.bind(this);
        if (p.mobile) {
            this.canvas.addEventListener('touchstart', this.touchStart.bind(this));
            this.canvas.addEventListener('touchmove', this.touchMove.bind(this));
            this.canvas.addEventListener('touchend', this.touchEnd.bind(this));
        } else {
            this.canvas.addEventListener('mousedown', this.mouseDown.bind(this));
            this.canvas.addEventListener('mousemove', this.mouseMove.bind(this));
            this.mouseUpBound = this.mouseUp.bind(this);
            window.addEventListener('mouseup', this.mouseUpBound);
        }
        this.keyDownBound = this.keyDown.bind(this);
        document.addEventListener('keydown', this.keyDownBound);
        this.historyAdd();
        var colorButtons = this.$container.find('.paint-colors');
        for (var i = 0; i < this.colors.length; i++) {
            var color = this.colors[i];
            var button = $('<div class="paint-color-button"/>')[0];
            button.style.background = color;
            button.dataset.color = color;
            colorButtons.append(button);
        }
        this.$container.find('.paint-color-button[data-color="#000000"]').addClass('paint-active');
        this.$container.find('.paint-new').click(function(ev) {
            var width = ev.currentTarget.dataset.width
              , height = ev.currentTarget.dataset.height;
            if (confirm('Achtung, nicht pfostierte Änderungen gehen verloren!')) {
                this.newDocument(width, height);
            }
        }
        .bind(this));
        this.$container.find('.paint-color-button').click(function(ev) {
            this.$container.find('.paint-color-button').removeClass('paint-active');
            ev.currentTarget.classList.add('paint-active');
            this.setColor(ev.currentTarget.dataset.color);
        }
        .bind(this));
        this.$container.find('.paint-tool').click(function(ev) {
            this.$container.find('.paint-tool').removeClass('paint-active');
            ev.currentTarget.classList.add('paint-active');
            this.setTool(ev.currentTarget.dataset.tool);
        }
        .bind(this));
        this.$container.find('.paint-size').click(function(ev) {
            this.$container.find('.paint-size').removeClass('paint-active');
            ev.currentTarget.classList.add('paint-active');
            this.setSize(ev.currentTarget.dataset.size);
        }
        .bind(this));
        this.$container.find('.paint-undo').click(function(ev) {
            this.historyUndo();
        }
        .bind(this));
        this.$container.find('.paint-redo').click(function(ev) {
            this.historyRedo();
        }
        .bind(this));
        var tags = this.$container.find('.upload-tagsinput');
        tags.tagsInput(CONFIG.TAGS_INPUT_SETTINGS);
        var that = this;
        this.$container.find('input[name=sfwstatus]').change(function() {
            that.setSFWTags($(this));
        });
        this.$container.find('#post-form').submit(this.submit.bind(this));
        this.filterView = new p.View.Filter(this.$container.find('.post-filter'),this);
        this.filterView.show();
    },
    except: function() {
        p.api.post('paint.except', {}, function() {});
        p.navigateTo('');
    },
    newDocument: function(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
        this.ctx.fillStyle = '#fff';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.undoStack = [];
        this.undoPos = 0;
        this.modified = true;
        this.historyAdd();
    },
    submit: function(ev) {
        if (!this.$container.find('input[name=sfwstatus]:checked').length) {
            this.$container.find('.sfw-status').highlight(252, 136, 52, 1);
            return false;
        }
        var data = {
            tags: this.$container.find('.upload-tagsinput').val(),
            imageData: this.canvas.toDataURL("image/png")
        };
        p.api.post('paint.post', data, this.posted.bind(this));
        this.$container.find('input[type=submit]').attr('disabled', 'disabled');
        this.showLoader();
        return false;
    },
    posted: function(response) {
        if (response.error) {
            alert(response.error);
            this.postInProgress = false;
            this.$container.find('input[type=submit]').prop('disabled', false);
        } else if (response.item) {
            p.user.voteCache.votes.items[response.item.id] = 1;
            p.navigateTo('new/' + response.item.id);
        }
    },
    setSFWTags: function($radio) {
        var tags = this.$container.find('.upload-tagsinput');
        var status = $radio.val();
        tags.removeTag('nsfw');
        tags.removeTag('nsfl');
        if (status != 'sfw') {
            tags.addTag(status);
        }
    },
    remove: function() {
        if (!p.mobile) {
            window.removeEventListener('mouseup', this.mouseUpBound);
        }
        document.removeEventListener('keyup', this.keyDownBound);
    },
    loadAssets: function(urls, callback) {
        var assets = {};
        var pending = 0;
        for (var name in urls) {
            pending++;
        }
        var that = this;
        for (var name in urls) {
            (function(name, url) {
                if (url.match(/\.(jpe?g|png)$/)) {
                    var img = new Image();
                    assets[name] = img;
                    img.onload = function() {
                        pending--;
                        if (pending === 0) {
                            callback(assets);
                        }
                    }
                    img.src = url;
                }
            }
            )(name, urls[name]);
        }
    },
    toolsLoaded: function(assets) {
        for (var name in assets) {
            this.tools[name].image = assets[name];
        }
        this.render();
        this.setTool('pencil');
    },
    setSize: function(size) {
        this.size = size / 128;
    },
    setTool: function(name) {
        this.tool = this.tools[name];
        if (this.tool.image) {
            this.brush = this.createTintedImage(this.tool.image, this.color);
        }
    },
    setColor: function(color) {
        this.color = color;
        if (this.tool.image) {
            this.brush = this.createTintedImage(this.tool.image, this.color);
        }
    },
    createTintedImage(image, tintColor) {
        var canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0);
        ctx.fillStyle = tintColor;
        ctx.globalCompositeOperation = 'multiply';
        ctx.fillRect(0, 0, image.width, image.height);
        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = 'destination-in';
        ctx.drawImage(image, 0, 0);
        return canvas;
    },
    historyUndo: function() {
        var png = this.undoStack[this.undoStack.length - this.undoPos - 2];
        if (png) {
            this.undoPos++;
            this.ctx.fillPath(png, 0, 0);
        }
    },
    historyRedo: function() {
        if (!this.undoPos) {
            return;
        }
        var png = this.undoStack[this.undoStack.length - this.undoPos];
        if (png) {
            this.undoPos--;
            this.ctx.fillPath(png, 0, 0);
        }
    },
    historyAdd: function() {
        if (!this.modified) {
            return;
        }
        this.modified = false;
        if (this.undoPos) {
            this.undoStack.splice(this.undoStack.length - this.undoPos, this.undoPos);
            this.undoPos = 0;
        }
        if (this.undoStack.length > this.undoMaxDepth) {
            this.undoStack.shift();
        }
        var png = new Image();
        png.src = this.canvas.toDataURL("image/png");
        this.undoStack.push(png);
    },
    keyDown: function(ev) {
        if (ev.keyCode == p.KEY.Z && ev.ctrlKey) {
            this.historyUndo();
        } else if (ev.keyCode == p.KEY.Y && ev.ctrlKey) {
            this.historyRedo();
        }
    },
    mouseDown: function(ev) {
        ev.preventDefault();
        var p = this.getInternalPosition(ev.clientX, ev.clientY);
        if (this.tool === this.tools.bucket) {
            this.fill(p.x, p.y);
        } else {
            this.painting = true;
            this.paint(p.x, p.y);
        }
    },
    mouseUp: function(ev) {
        ev.preventDefault();
        this.historyAdd();
        this.painting = false;
        this.lastPaintPos = null;
    },
    mouseMove: function(ev) {
        ev.preventDefault();
        if (this.painting) {
            var p = this.getInternalPosition(ev.clientX, ev.clientY);
            this.paint(p.x, p.y);
        }
    },
    touchStart: function(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        var p = this.getInternalPosition(ev.touches[0].clientX, ev.touches[0].clientY);
        if (this.tool === this.tools.bucket) {
            this.fill(p.x, p.y);
        } else {
            this.painting = true;
            this.paint(p.x, p.y);
        }
    },
    touchEnd: function(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        this.historyAdd();
        this.painting = false;
        this.lastPaintPos = null;
    },
    touchMove: function(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        if (this.painting) {
            var p = this.getInternalPosition(ev.touches[0].clientX, ev.touches[0].clientY);
            this.paint(p.x, p.y);
        }
    },
    paint: function(x, y) {
        var stepsize = 5 * this.size * this.tool.size;
        if (this.lastPaintPos) {
            var lpx = this.lastPaintPos.x
              , lpy = this.lastPaintPos.y;
            var dx = x - lpx
              , dy = y - lpy;
            if (Math.abs(dx) > stepsize || Math.abs(dy) > stepsize) {
                var steps = Math.floor(Math.max(Math.abs(dx), Math.abs(dy)) / stepsize);
                var sx = (dx / steps)
                  , sy = (dy / steps);
                for (var i = 0; i < steps; i++) {
                    this.brushDown(lpx + sx * (i + 1), lpy + sy * (i + 1));
                }
            }
        } else {
            this.brushDown(x, y);
        }
    },
    brushDown: function(x, y) {
        this.modified = true;
        var w2 = this.tool.width / 2
          , h2 = this.tool.height / 2
          , size = this.tool.size * this.size;
        this.ctx.save();
        this.ctx.globalAlpha = this.tool.alpha;
        this.ctx.translate(x, y);
        if (this.tool !== this.tools.pencil) {
            this.ctx.rotate(Math.random() * 2 * Math.PI);
        }
        this.ctx.scale(size, size);
        this.ctx.fillPath(this.brush, -w2, -h2);
        this.ctx.restore();
        this.lastPaintPos = {
            x: x,
            y: y
        };
    },
    fill: function(x, y) {
        var c = this.hexToRgb(this.color);
        var uintColor = ((0xff << 24) | (c.b << 16) | (c.g << 8) | c.r) >>> 0;
        this.floodFill(x | 0, y | 0, uintColor);
    },
    hexToRgb: function(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    },
    floodFill: function(sx, sy, fillColor) {
        var w = this.canvas.width
          , h = this.canvas.height;
        var imageData = this.ctx.getImageData(0, 0, w, h);
        var pixels = new Uint32Array(imageData.data.buffer);
        var targetColor = pixels[sy * w + sx];
        if (targetColor !== fillColor) {
            this.modified = true;
            var stack = [sx, sy];
            while (stack.length > 0 && stack.length < 10000000) {
                var y = stack.pop()
                  , x = stack.pop();
                if (x >= 0 && x < w && y >= 0 && y < h) {
                    var currentColor = pixels[y * w + x];
                    if (currentColor === targetColor) {
                        stack.push(x + 1, y);
                        stack.push(x - 1, y);
                        stack.push(x, y + 1);
                        stack.push(x, y - 1);
                    }
                    pixels[y * w + x] = fillColor;
                }
            }
            this.ctx.putImageData(imageData, 0, 0);
        }
    },
    getInternalPosition(x, y) {
        var rect = this.canvas.getBoundingClientRect();
        var scale = this.canvas.width / rect.width;
        return {
            x: (x - rect.left) * scale,
            y: (y - rect.top) * scale
        };
    }
});

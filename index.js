addEventListener('load', main);

function Loader() {
  var that = this;
  this.urls = [];
  this.loaded = [];
  this.numFilesLoaded = 0;
  this.add = function(url) {
    this.urls.push(url);
  };
  this.load = function(callback) {
    this.callback = callback;
    for (var url in this.urls) {
      var currentUrl = this.urls[url];
      this.loaded[url] = new Image();
      this.loaded[url].addEventListener('load', this.checkIfDoneLoading);
      this.loaded[url].src = currentUrl;
    }
  };
  this.checkIfDoneLoading = function() {
    that.numFilesLoaded++;
    if (that.numFilesLoaded == that.urls.length) {
      that.callback();
    }
  };
}

function main() {
  var loader = new Loader();
  loader.add('images/ghost.png');
  loader.load(whenLoaded);
}

function whenLoaded() {
  console.log('loaded');
}

// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Assets/JS/objects/Entity/entity.js":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Entity = /*#__PURE__*/function () {
  function Entity(optional) {
    _classCallCheck(this, Entity);

    var optional = optional || {};
    this.label = optional.label || ""; // Position

    this.parent = optional.parent || undefined; // if parent then x,y,z are local

    this.x = optional.x || 0;
    this.y = optional.y || 0;
    this.z = optional.z || 0; // Dynamics

    this.direction = optional.direction || Math.PI / 2; // 0-360

    this.intensity = optional.intensity || 0;
    this.maxSpeed = optional.maxSpeed || 10;
    this.frictionIntensity = .2; // Mesh
    // Multiple Mesh? -> modular mesh
    // Vertex, path Animations :) 

    this.mesh = optional.mesh || {
      vertices: [[0, 0, 0]],
      circles: [[1, 10]]
    }; // Look

    this.look = optional.look || {
      fill: undefined,
      stroke: undefined,
      dash: undefined,
      lineWidth: undefined
    }; // Transform

    this.transform = optional.transform || {
      scale: 1,
      rotation: [0, 0, 0]
    };
    this.animations = optional.animations || {
      spin: false
    };

    if (this.animations.spin) {
      this.transform.rotation = [Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2];
    } // Physics


    this.physics = optional.physics || {
      // mass: 1,
      solid: false,
      collisionRadius: 0
    }; // make physics object
  } // MESH RELATED


  _createClass(Entity, [{
    key: "getMesh",
    value: function getMesh(optional) {
      var _this = this;

      var optional = optional || {}; // clone mesh to manipulate

      var mesh2 = JSON.parse(JSON.stringify(this.mesh)); // scale

      mesh2.vertices.forEach(function (v) {
        v[0] *= _this.transform.scale, v[1] *= _this.transform.scale, v[2] *= _this.transform.scale;
      }); // transform (rotation)

      var g = Math.PI / 2;
      var rt = {
        x: this.transform.rotation[0] - g,
        y: this.transform.rotation[1] + g,
        z: this.transform.rotation[2] - g
      };
      mesh2.vertices.forEach(function (v) {
        var d = Math.hypot(v[0], v[1]);
        var angle = Math.atan2(v[0], v[1]);
        v[0] = d * Math.cos(angle + rt.x);
        v[1] = d * Math.sin(angle + rt.x);
      });
      mesh2.vertices.forEach(function (v) {
        var d = Math.hypot(v[1], v[2]);
        var angle = Math.atan2(v[1], v[2]);
        v[1] = d * Math.cos(angle + rt.y);
        v[2] = d * Math.sin(angle + rt.y);
      });
      mesh2.vertices.forEach(function (v) {
        var d = Math.hypot(v[2], v[0]);
        var angle = Math.atan2(v[2], v[0]);
        v[2] = d * Math.cos(angle + rt.z);
        v[0] = d * Math.sin(angle + rt.z);
      }); // local to global coordinates

      mesh2.vertices.forEach(function (v) {
        v[0] += _this.x;
        v[1] += _this.y;
        v[2] += _this.z;
      });

      if (this.parent != undefined) {
        console.log(ä);
      } // console.log(mesh2.vertices[0]);


      return mesh2;
    } // PHYSICS DYNAMICS
    // NON PSYSICS DYNAMICS

  }, {
    key: "addVector",
    value: function addVector(d, i) {
      var x = Math.cos(this.direction) * this.intensity + Math.cos(d) * i;
      var y = Math.sin(this.direction) * this.intensity + Math.sin(d) * i;
      this.direction = Math.atan2(y, x);
      this.intensity = Math.round(Math.hypot(x, y) * 10) / 10;
    }
  }, {
    key: "updatePosition",
    value: function updatePosition() {
      this.x += Math.cos(this.direction) * this.intensity;
      this.y += Math.sin(this.direction) * this.intensity;
    }
  }, {
    key: "speedLimit",
    value: function speedLimit() {
      if (this.intensity > this.maxSpeed) {
        this.intensity = this.maxSpeed;
      }

      if (this.intensity < 0) {
        this.intensity = 0;
      }
    }
  }, {
    key: "friction",
    value: function friction() {
      if (this.intensity > 0) {
        this.intensity = this.intensity - this.frictionIntensity;
      }

      if (Math.abs(this.intensity) < 0.1) {
        this.intensity = 0;
      }
    }
  }]);

  return Entity;
}();

;
},{}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58567" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","Assets/JS/objects/Entity/entity.js"], null)
//# sourceMappingURL=/entity.3a5b4635.js.map
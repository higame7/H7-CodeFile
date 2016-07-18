/**
 * Iconfont icon set component.
 * Usage: <Iconfont name="icon-name" size={20} color="#4F8EF7" />
 *
 * @providesModule Iconfont
 */
'use strict';

var createIconSet = require('./lib/create-icon-set');
var glyphMap = {
  "edit": 58880,
  "ranking": 58881,
  "success": 58882,
  "war": 58883,
  "angle-left": 58884,
  "copy": 58885,
  "error": 58886,
  "money": 58887,
  "fire": 58888,
  "gold": 58889,
  "user": 58890,
  "certified": 58891,
  "date": 58892,
  "site": 58893,
  "time": 58894,
  "add": 58895,
  "task": 58896,
  "modify": 58897,
  "dollar": 58898,
  "file": 58899,
  "cup": 58900,
  "medal": 58901,
  "team": 58902,
  "email": 58903,
  "angle-right": 58904,
  "share": 58905,
  "angle-down": 58906,
  "delete": 58907,
  "toggle": 58908,
  "angle-up": 58909,
};

var Iconfont = createIconSet(glyphMap, 'Iconfont', 'Iconfont.ttf');

module.exports = Iconfont;
module.exports.glyphMap = glyphMap;


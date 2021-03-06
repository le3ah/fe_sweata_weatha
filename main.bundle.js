/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(1);

	$(document).ready(function () {
	  $("#deleteLocationBtn").hide();
	  $("#addFavoriteBtn").hide();
	  $("#getWeatherBtn").click(function () {
	    event.preventDefault();
	    $("#addFavoriteBtn").show();
	    var cityState = $("#locationInfo").val();
	    $.get("https://sweata-weatha.herokuapp.com/api/v1/forecast?location=" + cityState, function (data, status) {
	      // window.alert(data["data"]["attributes"]["currently"]["current_temperature"])
	      var currentWeather = data["data"]["attributes"]["currently"];
	      $(".locationInfo").html(cityState.slice(0, -3));
	      $(".currentTemp").html(currentWeather["current_temperature"] + "°");
	      $(".currentSummary").html(currentWeather["summary"]);
	      $(".currentTime").html(currentWeather["current_time"] + " UTC");
	      $(".currentDate").html(currentWeather["date"]);
	      $(".currentFeels").html("Feels-like temperature: " + currentWeather["feels_like"] + "°");
	      $(".currentHumidity").html("Humidity: " + currentWeather["humidity"]);
	      $(".currentVisibility").html("Visibility: " + currentWeather["visibility"]);
	      $(".currentUvIndex").html("UV Index: " + currentWeather["uv_index"]);

	      var hourlyWeather = data["data"]["attributes"]["hourly"];
	      $(".thisHourTime").html(hourlyWeather[0]["hourly_time"]);
	      $(".thisHourTemp").html(hourlyWeather[0]["hourly_temperature"] + "°");
	      $(".thisHourIcon").html(hourlyWeather[0]["hourly_icon"]);
	      $(".plusOneHourTime").html(hourlyWeather[1]["hourly_time"]);
	      $(".plusOneHourTemp").html(hourlyWeather[1]["hourly_temperature"] + "°");
	      $(".plusOneHourIcon").html(hourlyWeather[1]["hourly_icon"]);
	      $(".plusTwoHourTime").html(hourlyWeather[2]["hourly_time"]);
	      $(".plusTwoHourTemp").html(hourlyWeather[2]["hourly_temperature"] + "°");
	      $(".plusTwoHourIcon").html(hourlyWeather[2]["hourly_icon"]);
	      $(".plusThreeHourTime").html(hourlyWeather[3]["hourly_time"]);
	      $(".plusThreeHourTemp").html(hourlyWeather[3]["hourly_temperature"] + "°");
	      $(".plusThreeHourIcon").html(hourlyWeather[3]["hourly_icon"]);
	      $(".plusFourHourTime").html(hourlyWeather[4]["hourly_time"]);
	      $(".plusFourHourTemp").html(hourlyWeather[4]["hourly_temperature"] + "°");
	      $(".plusFourHourIcon").html(hourlyWeather[4]["hourly_icon"]);
	      $(".plusFiveHourTime").html(hourlyWeather[5]["hourly_time"]);
	      $(".plusFiveHourTemp").html(hourlyWeather[5]["hourly_temperature"] + "°");
	      $(".plusFiveHourIcon").html(hourlyWeather[5]["hourly_icon"]);
	      $(".plusSixHourTime").html(hourlyWeather[6]["hourly_time"]);
	      $(".plusSixHourTemp").html(hourlyWeather[6]["hourly_temperature"] + "°");
	      $(".plusSixHourIcon").html(hourlyWeather[6]["hourly_icon"]);
	      $(".plusSevenHourTime").html(hourlyWeather[7]["hourly_time"]);
	      $(".plusSevenHourTemp").html(hourlyWeather[7]["hourly_temperature"] + "°");
	      $(".plusSevenHourIcon").html(hourlyWeather[7]["hourly_icon"]);

	      var dailyWeather = data["data"]["attributes"]["daily"];
	      $(".todaySummary").html("Today - " + dailyWeather[0]["today_summary"]);
	      $(".todayPrecip").html(dailyWeather[0]["precip_probability"] + "%");
	      $(".todayPrecipType").html(dailyWeather[0]["precip_type"]);
	      $(".todayHigh").html(dailyWeather[0]["temperature_high"] + "°");
	      $(".todayLow").html(dailyWeather[0]["temperature_low"] + "°");
	      $(".todayTime").html(dailyWeather[0]["time"]);
	      $(".todayPlusOnePrecip").html(dailyWeather[1]["precip_probability"] + "%");
	      $(".todayPlusOnePrecipType").html(dailyWeather[1]["precip_type"]);
	      $(".todayPlusOneHigh").html(dailyWeather[1]["temperature_high"] + "°");
	      $(".todayPlusOneLow").html(dailyWeather[1]["temperature_low"] + "°");
	      $(".todayPlusOneTime").html(dailyWeather[1]["time"]);
	      $(".todayPlusTwoPrecip").html(dailyWeather[2]["precip_probability"] + "%");
	      $(".todayPlusTwoPrecipType").html(dailyWeather[2]["precip_type"]);
	      $(".todayPlusTwoHigh").html(dailyWeather[2]["temperature_high"] + "°");
	      $(".todayPlusTwoLow").html(dailyWeather[2]["temperature_low"] + "°");
	      $(".todayPlusTwoTime").html(dailyWeather[2]["time"]);
	      $(".todayPlusThreePrecip").html(dailyWeather[3]["precip_probability"] + "%");
	      $(".todayPlusThreePrecipType").html(dailyWeather[3]["precip_type"]);
	      $(".todayPlusThreeHigh").html(dailyWeather[3]["temperature_high"] + "°");
	      $(".todayPlusThreeLow").html(dailyWeather[3]["temperature_low"] + "°");
	      $(".todayPlusThreeTime").html(dailyWeather[3]["time"]);
	      $(".todayPlusFourPrecip").html(dailyWeather[4]["precip_probability"] + "%");
	      $(".todayPlusFourPrecipType").html(dailyWeather[4]["precip_type"]);
	      $(".todayPlusFourHigh").html(dailyWeather[4]["temperature_high"] + "°");
	      $(".todayPlusFourLow").html(dailyWeather[4]["temperature_low"] + "°");
	      $(".todayPlusFourTime").html(dailyWeather[4]["time"]);
	      displayFavorites();
	    });

	    $.get("https://sweata-weatha.herokuapp.com/api/v1/backgrounds?location=" + cityState, function (data, status) {
	      var backgroundImage = data["data"]["attributes"]["background_url"];
	      $("body").css('background-image', "url(" + backgroundImage + ")");
	    });
	  });

	  $("#addFavoriteBtn").click(function () {
	    event.preventDefault();
	    postFavorites();
	    displayFavorites();
	    $("#deleteLocationBtn").show();
	  });

	  var postFavorites = function postFavorites() {
	    var cityState = $("#locationInfo").val();
	    fetch("https://sweata-weatha.herokuapp.com/api/v1/favorites", {
	      method: 'POST',
	      headers: { 'Content-Type': 'application/json' },
	      body: JSON.stringify({
	        "location": cityState,
	        "api_key": "79ce1d358a436822b0ce"
	      })
	    }).then(function (response) {
	      return response.status;
	    }).catch(function (error) {
	      return console.error({ error: error });
	    });
	    console.log("adding a favorite now!");
	    window.alert("You've just added " + cityState + " to your favorites!");

	    displayFavorites();
	  };
	  var displayFavorites = function displayFavorites() {
	    $.get("https://sweata-weatha.herokuapp.com/api/v1/favorites?api_key=79ce1d358a436822b0ce", function (data, status) {
	      var favorites = data["data"]["attributes"]["favorites"];
	      if (favorites[10]) {
	        $(".favorites1").html(favorites[0]["location"]);
	        $(".favorites2").html(favorites[1]["location"]);
	        $(".favorites3").html(favorites[2]["location"]);
	        $(".favorites4").html(favorites[3]["location"]);
	        $(".favorites5").html(favorites[4]["location"]);
	        $(".favorites6").html(favorites[5]["location"]);
	        $(".favorites7").html(favorites[6]["location"]);
	        $(".favorites8").html(favorites[7]["location"]);
	        $(".favorites7").html(favorites[8]["location"]);
	        $(".favorites8").html(favorites[9]["location"]);
	        $(".favorites9").html(favorites[10]["location"]);
	      } else if (favorites[9]) {
	        $(".favorites1").html(favorites[0]["location"]);
	        $(".favorites2").html(favorites[1]["location"]);
	        $(".favorites3").html(favorites[2]["location"]);
	        $(".favorites4").html(favorites[3]["location"]);
	        $(".favorites5").html(favorites[4]["location"]);
	        $(".favorites6").html(favorites[5]["location"]);
	        $(".favorites7").html(favorites[6]["location"]);
	        $(".favorites8").html(favorites[7]["location"]);
	        $(".favorites7").html(favorites[8]["location"]);
	        $(".favorites8").html(favorites[9]["location"]);
	      } else if (favorites[8]) {
	        $(".favorites1").html(favorites[0]["location"]);
	        $(".favorites2").html(favorites[1]["location"]);
	        $(".favorites3").html(favorites[2]["location"]);
	        $(".favorites4").html(favorites[3]["location"]);
	        $(".favorites5").html(favorites[4]["location"]);
	        $(".favorites6").html(favorites[5]["location"]);
	        $(".favorites7").html(favorites[6]["location"]);
	        $(".favorites8").html(favorites[7]["location"]);
	        $(".favorites7").html(favorites[8]["location"]);
	      } else if (favorites[7]) {
	        $(".favorites1").html(favorites[0]["location"]);
	        $(".favorites2").html(favorites[1]["location"]);
	        $(".favorites3").html(favorites[2]["location"]);
	        $(".favorites4").html(favorites[3]["location"]);
	        $(".favorites5").html(favorites[4]["location"]);
	        $(".favorites6").html(favorites[5]["location"]);
	        $(".favorites7").html(favorites[6]["location"]);
	        $(".favorites8").html(favorites[7]["location"]);
	      } else if (favorites[6]) {
	        $(".favorites1").html(favorites[0]["location"]);
	        $(".favorites2").html(favorites[1]["location"]);
	        $(".favorites3").html(favorites[2]["location"]);
	        $(".favorites4").html(favorites[3]["location"]);
	        $(".favorites5").html(favorites[4]["location"]);
	        $(".favorites6").html(favorites[5]["location"]);
	        $(".favorites7").html(favorites[6]["location"]);
	      } else if (favorites[5]) {
	        $(".favorites1").html(favorites[0]["location"]);
	        $(".favorites2").html(favorites[1]["location"]);
	        $(".favorites3").html(favorites[2]["location"]);
	        $(".favorites4").html(favorites[3]["location"]);
	        $(".favorites5").html(favorites[4]["location"]);
	        $(".favorites6").html(favorites[5]["location"]);
	      } else if (favorites[4]) {
	        $(".favorites1").html(favorites[0]["location"]);
	        $(".favorites2").html(favorites[1]["location"]);
	        $(".favorites3").html(favorites[2]["location"]);
	        $(".favorites4").html(favorites[3]["location"]);
	        $(".favorites5").html(favorites[4]["location"]);
	      } else if (favorites[3]) {
	        $(".favorites1").html(favorites[0]["location"]);
	        $(".favorites2").html(favorites[1]["location"]);
	        $(".favorites3").html(favorites[2]["location"]);
	        $(".favorites4").html(favorites[3]["location"]);
	      } else if (favorites[2]) {
	        $(".favorites1").html(favorites[0]["location"]);
	        $(".favorites2").html(favorites[1]["location"]);
	        $(".favorites3").html(favorites[2]["location"]);
	      } else if (favorites[1]) {
	        $(".favorites1").html(favorites[0]["location"]);
	        $(".favorites2").html(favorites[1]["location"]);
	      } else if (favorites[0]) {
	        $(".favorites1").html(favorites[0]["location"]);
	      } else {
	        $(".favoritesMessage").html("You don't have any favorite locations");
	      }
	    });
	  };
	  $("#deleteLocationBtn").click(function () {
	    event.preventDefault();
	    $("#deleteLocationBtn").hide();
	    var cityState = $("#locationInfo").val();
	    $.ajax({
	      url: "https://sweata-weatha.herokuapp.com/api/v1/favorites?location=" + cityState + "&api_key=79ce1d358a436822b0ce&",
	      type: 'DELETE',
	      success: function success(data, status) {
	        window.alert("You've just removed " + data["location"] + " from your favorites!");
	      }
	    });
	  });
	});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/index.js!./styles.scss", function() {
				var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/index.js!./styles.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "body {\n  background-color: #8FC0A9;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-attachment: fixed;\n  font-family: Arial; }\n\nh1 {\n  color: white;\n  font-size: 4rem;\n  margin: 0; }\n\nh2 {\n  text-align: left;\n  border-bottom: 1px solid white; }\n\n.currently {\n  width: 5rem;\n  display: flex;\n  align-content: left;\n  color: white;\n  justify-content: space-between; }\n\n.currentTemp {\n  color: white;\n  font-size: 5rem; }\n\n.currentSummary {\n  padding-top: 3rem;\n  font-size: 2rem;\n  color: white; }\n\n.main {\n  display: flex;\n  justify-content: space-around; }\n\n.currentDetails {\n  text-align: right;\n  border: 1px solid white;\n  width: 36%;\n  color: white;\n  padding: 1rem;\n  background-color: rgba(74, 124, 89, 0.8); }\n\n.favorites-wrapper {\n  display: flex;\n  justify-content: space-around; }\n\n.favorites {\n  justify-content: space-around;\n  border: 1px solid white;\n  width: 15%;\n  color: white;\n  padding: 1rem;\n  background-color: rgba(74, 124, 89, 0.8); }\n\n.forecastDetails {\n  justify-content: space-around;\n  border: 1px solid white;\n  width: 36%;\n  color: white;\n  padding: 1rem;\n  background-color: rgba(74, 124, 89, 0.8); }\n\n.currentFeels, .currentHumidity, .currentVisibility, .currentUvIndex {\n  padding: 1rem;\n  border-bottom: 1px solid white; }\n\n.hourlyTime, .hourlyTemps {\n  display: flex;\n  justify-content: space-around; }\n\n.hourlyTemps {\n  border-bottom: 1px solid white; }\n\n.dayContainer, .precipContainer, .precipTypeContainer, .highContainer, .lowContainer {\n  display: flex;\n  flex-direction: column; }\n\n.todaySummary {\n  font-size: 1.5rem; }\n\n.dailyData {\n  display: flex;\n  justify-content: space-around;\n  font-size: 1.5rem; }\n", ""]);

	// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ })
/******/ ]);
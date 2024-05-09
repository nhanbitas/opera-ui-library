/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ './node_modules/flatpickr/dist/esm/index.js':
      /*!**************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/index.js ***!
  \**************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _types_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./types/options */ './node_modules/flatpickr/dist/esm/types/options.js',
        );
        /* harmony import */ var _l10n_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./l10n/default */ './node_modules/flatpickr/dist/esm/l10n/default.js',
        );
        /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./utils */ './node_modules/flatpickr/dist/esm/utils/index.js',
        );
        /* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./utils/dom */ './node_modules/flatpickr/dist/esm/utils/dom.js',
        );
        /* harmony import */ var _utils_dates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./utils/dates */ './node_modules/flatpickr/dist/esm/utils/dates.js',
        );
        /* harmony import */ var _utils_formatting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./utils/formatting */ './node_modules/flatpickr/dist/esm/utils/formatting.js',
        );
        /* harmony import */ var _utils_polyfills__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./utils/polyfills */ './node_modules/flatpickr/dist/esm/utils/polyfills.js',
        );
        /* harmony import */ var _utils_polyfills__WEBPACK_IMPORTED_MODULE_6___default =
          /*#__PURE__*/ __webpack_require__.n(_utils_polyfills__WEBPACK_IMPORTED_MODULE_6__);
        var __assign =
          (undefined && undefined.__assign) ||
          function () {
            __assign =
              Object.assign ||
              function (t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                  s = arguments[i];
                  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
              };
            return __assign.apply(this, arguments);
          };
        var __spreadArrays =
          (undefined && undefined.__spreadArrays) ||
          function () {
            for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
            for (var r = Array(s), k = 0, i = 0; i < il; i++)
              for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
            return r;
          };

        var DEBOUNCED_CHANGE_MS = 300;
        function FlatpickrInstance(element, instanceConfig) {
          var self = {
            config: __assign(
              __assign({}, _types_options__WEBPACK_IMPORTED_MODULE_0__.defaults),
              flatpickr.defaultConfig,
            ),
            l10n: _l10n_default__WEBPACK_IMPORTED_MODULE_1__['default'],
          };
          self.parseDate = (0, _utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateParser)({
            config: self.config,
            l10n: self.l10n,
          });
          self._handlers = [];
          self.pluginElements = [];
          self.loadedPlugins = [];
          self._bind = bind;
          self._setHoursFromDate = setHoursFromDate;
          self._positionCalendar = positionCalendar;
          self.changeMonth = changeMonth;
          self.changeYear = changeYear;
          self.clear = clear;
          self.close = close;
          self.onMouseOver = onMouseOver;
          self._createElement = _utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement;
          self.createDay = createDay;
          self.destroy = destroy;
          self.isEnabled = isEnabled;
          self.jumpToDate = jumpToDate;
          self.updateValue = updateValue;
          self.open = open;
          self.redraw = redraw;
          self.set = set;
          self.setDate = setDate;
          self.toggle = toggle;
          function setupHelperFunctions() {
            self.utils = {
              getDaysInMonth: function (month, yr) {
                if (month === void 0) {
                  month = self.currentMonth;
                }
                if (yr === void 0) {
                  yr = self.currentYear;
                }
                if (month === 1 && ((yr % 4 === 0 && yr % 100 !== 0) || yr % 400 === 0)) return 29;
                return self.l10n.daysInMonth[month];
              },
            };
          }
          function init() {
            self.element = self.input = element;
            self.isOpen = false;
            parseConfig();
            setupLocale();
            setupInputs();
            setupDates();
            setupHelperFunctions();
            if (!self.isMobile) build();
            bindEvents();
            if (self.selectedDates.length || self.config.noCalendar) {
              if (self.config.enableTime) {
                setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj : undefined);
              }
              updateValue(false);
            }
            setCalendarWidth();
            var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            if (!self.isMobile && isSafari) {
              positionCalendar();
            }
            triggerEvent('onReady');
          }
          function getClosestActiveElement() {
            var _a;
            return (
              ((_a = self.calendarContainer) === null || _a === void 0 ? void 0 : _a.getRootNode()).activeElement ||
              document.activeElement
            );
          }
          function bindToInstance(fn) {
            return fn.bind(self);
          }
          function setCalendarWidth() {
            var config = self.config;
            if (config.weekNumbers === false && config.showMonths === 1) {
              return;
            } else if (config.noCalendar !== true) {
              window.requestAnimationFrame(function () {
                if (self.calendarContainer !== undefined) {
                  self.calendarContainer.style.visibility = 'hidden';
                  self.calendarContainer.style.display = 'block';
                }
                if (self.daysContainer !== undefined) {
                  var daysWidth = self.days.offsetWidth * config.showMonths;
                  self.daysContainer.style.width = daysWidth + 'px';
                  self.calendarContainer.style.width =
                    daysWidth +
                    (self.weekWrapper !== undefined ? self.weekWrapper.offsetWidth : 0) +
                    parseInt(window.getComputedStyle(self.innerContainer).paddingLeft) +
                    parseInt(window.getComputedStyle(self.innerContainer).paddingRight) +
                    'px';
                  self.calendarContainer.style.removeProperty('visibility');
                  self.calendarContainer.style.removeProperty('display');
                }
              });
            }
          }
          function updateTime(e) {
            if (self.selectedDates.length === 0) {
              var defaultDate =
                self.config.minDate === undefined ||
                (0, _utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(new Date(), self.config.minDate) >= 0
                  ? new Date()
                  : new Date(self.config.minDate.getTime());
              var defaults = (0, _utils_dates__WEBPACK_IMPORTED_MODULE_4__.getDefaultHours)(self.config);
              defaultDate.setHours(defaults.hours, defaults.minutes, defaults.seconds, defaultDate.getMilliseconds());
              self.selectedDates = [defaultDate];
              self.latestSelectedDateObj = defaultDate;
            }
            if (e !== undefined && e.type !== 'blur') {
              timeWrapper(e);
            }
            var prevValue = self._input.value;
            setHoursFromInputs();
            updateValue();
            if (self._input.value !== prevValue) {
              self._debouncedChange();
            }
          }
          function ampm2military(hour, amPM) {
            return (hour % 12) + 12 * (0, _utils__WEBPACK_IMPORTED_MODULE_2__.int)(amPM === self.l10n.amPM[1]);
          }
          function military2ampm(hour) {
            switch (hour % 24) {
              case 0:
              case 12:
                return 12;
              default:
                return hour % 12;
            }
          }
          function setHoursFromInputs() {
            if (self.hourElement === undefined || self.minuteElement === undefined) return;
            var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24,
              minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60,
              seconds = self.secondElement !== undefined ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;
            if (self.amPM !== undefined) {
              hours = ampm2military(hours, self.amPM.textContent);
            }
            var limitMinHours =
              self.config.minTime !== undefined ||
              (self.config.minDate &&
                self.minDateHasTime &&
                self.latestSelectedDateObj &&
                (0, _utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(
                  self.latestSelectedDateObj,
                  self.config.minDate,
                  true,
                ) === 0);
            var limitMaxHours =
              self.config.maxTime !== undefined ||
              (self.config.maxDate &&
                self.maxDateHasTime &&
                self.latestSelectedDateObj &&
                (0, _utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(
                  self.latestSelectedDateObj,
                  self.config.maxDate,
                  true,
                ) === 0);
            if (
              self.config.maxTime !== undefined &&
              self.config.minTime !== undefined &&
              self.config.minTime > self.config.maxTime
            ) {
              var minBound = (0, _utils_dates__WEBPACK_IMPORTED_MODULE_4__.calculateSecondsSinceMidnight)(
                self.config.minTime.getHours(),
                self.config.minTime.getMinutes(),
                self.config.minTime.getSeconds(),
              );
              var maxBound = (0, _utils_dates__WEBPACK_IMPORTED_MODULE_4__.calculateSecondsSinceMidnight)(
                self.config.maxTime.getHours(),
                self.config.maxTime.getMinutes(),
                self.config.maxTime.getSeconds(),
              );
              var currentTime = (0, _utils_dates__WEBPACK_IMPORTED_MODULE_4__.calculateSecondsSinceMidnight)(
                hours,
                minutes,
                seconds,
              );
              if (currentTime > maxBound && currentTime < minBound) {
                var result = (0, _utils_dates__WEBPACK_IMPORTED_MODULE_4__.parseSeconds)(minBound);
                hours = result[0];
                minutes = result[1];
                seconds = result[2];
              }
            } else {
              if (limitMaxHours) {
                var maxTime = self.config.maxTime !== undefined ? self.config.maxTime : self.config.maxDate;
                hours = Math.min(hours, maxTime.getHours());
                if (hours === maxTime.getHours()) minutes = Math.min(minutes, maxTime.getMinutes());
                if (minutes === maxTime.getMinutes()) seconds = Math.min(seconds, maxTime.getSeconds());
              }
              if (limitMinHours) {
                var minTime = self.config.minTime !== undefined ? self.config.minTime : self.config.minDate;
                hours = Math.max(hours, minTime.getHours());
                if (hours === minTime.getHours() && minutes < minTime.getMinutes()) minutes = minTime.getMinutes();
                if (minutes === minTime.getMinutes()) seconds = Math.max(seconds, minTime.getSeconds());
              }
            }
            setHours(hours, minutes, seconds);
          }
          function setHoursFromDate(dateObj) {
            var date = dateObj || self.latestSelectedDateObj;
            if (date && date instanceof Date) {
              setHours(date.getHours(), date.getMinutes(), date.getSeconds());
            }
          }
          function setHours(hours, minutes, seconds) {
            if (self.latestSelectedDateObj !== undefined) {
              self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
            }
            if (!self.hourElement || !self.minuteElement || self.isMobile) return;
            self.hourElement.value = (0, _utils__WEBPACK_IMPORTED_MODULE_2__.pad)(
              !self.config.time_24hr
                ? ((12 + hours) % 12) + 12 * (0, _utils__WEBPACK_IMPORTED_MODULE_2__.int)(hours % 12 === 0)
                : hours,
            );
            self.minuteElement.value = (0, _utils__WEBPACK_IMPORTED_MODULE_2__.pad)(minutes);
            if (self.amPM !== undefined)
              self.amPM.textContent = self.l10n.amPM[(0, _utils__WEBPACK_IMPORTED_MODULE_2__.int)(hours >= 12)];
            if (self.secondElement !== undefined)
              self.secondElement.value = (0, _utils__WEBPACK_IMPORTED_MODULE_2__.pad)(seconds);
          }
          function onYearInput(event) {
            var eventTarget = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(event);
            var year = parseInt(eventTarget.value) + (event.delta || 0);
            if (year / 1000 > 1 || (event.key === 'Enter' && !/[^\d]/.test(year.toString()))) {
              changeYear(year);
            }
          }
          function bind(element, event, handler, options) {
            if (event instanceof Array)
              return event.forEach(function (ev) {
                return bind(element, ev, handler, options);
              });
            if (element instanceof Array)
              return element.forEach(function (el) {
                return bind(el, event, handler, options);
              });
            element.addEventListener(event, handler, options);
            self._handlers.push({
              remove: function () {
                return element.removeEventListener(event, handler, options);
              },
            });
          }
          function triggerChange() {
            triggerEvent('onChange');
          }
          function bindEvents() {
            if (self.config.wrap) {
              ['open', 'close', 'toggle', 'clear'].forEach(function (evt) {
                Array.prototype.forEach.call(self.element.querySelectorAll('[data-' + evt + ']'), function (el) {
                  return bind(el, 'click', self[evt]);
                });
              });
            }
            if (self.isMobile) {
              setupMobile();
              return;
            }
            var debouncedResize = (0, _utils__WEBPACK_IMPORTED_MODULE_2__.debounce)(onResize, 50);
            self._debouncedChange = (0, _utils__WEBPACK_IMPORTED_MODULE_2__.debounce)(
              triggerChange,
              DEBOUNCED_CHANGE_MS,
            );
            if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent))
              bind(self.daysContainer, 'mouseover', function (e) {
                if (self.config.mode === 'range')
                  onMouseOver((0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e));
              });
            bind(self._input, 'keydown', onKeyDown);
            if (self.calendarContainer !== undefined) {
              bind(self.calendarContainer, 'keydown', onKeyDown);
            }
            if (!self.config.inline && !self.config.static) bind(window, 'resize', debouncedResize);
            if (window.ontouchstart !== undefined) bind(window.document, 'touchstart', documentClick);
            else bind(window.document, 'mousedown', documentClick);
            bind(window.document, 'focus', documentClick, { capture: true });
            if (self.config.clickOpens === true) {
              bind(self._input, 'focus', self.open);
              bind(self._input, 'click', self.open);
            }
            if (self.daysContainer !== undefined) {
              bind(self.monthNav, 'click', onMonthNavClick);
              bind(self.monthNav, ['keyup', 'increment'], onYearInput);
              bind(self.daysContainer, 'click', selectDate);
            }
            if (
              self.timeContainer !== undefined &&
              self.minuteElement !== undefined &&
              self.hourElement !== undefined
            ) {
              var selText = function (e) {
                return (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e).select();
              };
              bind(self.timeContainer, ['increment'], updateTime);
              bind(self.timeContainer, 'blur', updateTime, { capture: true });
              bind(self.timeContainer, 'click', timeIncrement);
              bind([self.hourElement, self.minuteElement], ['focus', 'click'], selText);
              if (self.secondElement !== undefined)
                bind(self.secondElement, 'focus', function () {
                  return self.secondElement && self.secondElement.select();
                });
              if (self.amPM !== undefined) {
                bind(self.amPM, 'click', function (e) {
                  updateTime(e);
                });
              }
            }
            if (self.config.allowInput) {
              bind(self._input, 'blur', onBlur);
            }
          }
          function jumpToDate(jumpDate, triggerChange) {
            var jumpTo =
              jumpDate !== undefined
                ? self.parseDate(jumpDate)
                : self.latestSelectedDateObj ||
                  (self.config.minDate && self.config.minDate > self.now
                    ? self.config.minDate
                    : self.config.maxDate && self.config.maxDate < self.now
                      ? self.config.maxDate
                      : self.now);
            var oldYear = self.currentYear;
            var oldMonth = self.currentMonth;
            try {
              if (jumpTo !== undefined) {
                self.currentYear = jumpTo.getFullYear();
                self.currentMonth = jumpTo.getMonth();
              }
            } catch (e) {
              e.message = 'Invalid date supplied: ' + jumpTo;
              self.config.errorHandler(e);
            }
            if (triggerChange && self.currentYear !== oldYear) {
              triggerEvent('onYearChange');
              buildMonthSwitch();
            }
            if (triggerChange && (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
              triggerEvent('onMonthChange');
            }
            self.redraw();
          }
          function timeIncrement(e) {
            var eventTarget = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
            if (~eventTarget.className.indexOf('arrow'))
              incrementNumInput(e, eventTarget.classList.contains('arrowUp') ? 1 : -1);
          }
          function incrementNumInput(e, delta, inputElem) {
            var target = e && (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
            var input = inputElem || (target && target.parentNode && target.parentNode.firstChild);
            var event = createEvent('increment');
            event.delta = delta;
            input && input.dispatchEvent(event);
          }
          function build() {
            var fragment = window.document.createDocumentFragment();
            self.calendarContainer = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)(
              'div',
              'flatpickr-calendar',
            );
            self.calendarContainer.tabIndex = -1;
            if (!self.config.noCalendar) {
              fragment.appendChild(buildMonthNav());
              self.innerContainer = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)(
                'div',
                'flatpickr-innerContainer',
              );
              if (self.config.weekNumbers) {
                var _a = buildWeeks(),
                  weekWrapper = _a.weekWrapper,
                  weekNumbers = _a.weekNumbers;
                self.innerContainer.appendChild(weekWrapper);
                self.weekNumbers = weekNumbers;
                self.weekWrapper = weekWrapper;
              }
              self.rContainer = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)(
                'div',
                'flatpickr-rContainer',
              );
              self.rContainer.appendChild(buildWeekdays());
              if (!self.daysContainer) {
                self.daysContainer = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)(
                  'div',
                  'flatpickr-days',
                );
                self.daysContainer.tabIndex = -1;
              }
              buildDays();
              self.rContainer.appendChild(self.daysContainer);
              self.innerContainer.appendChild(self.rContainer);
              fragment.appendChild(self.innerContainer);
            }
            if (self.config.enableTime) {
              fragment.appendChild(buildTime());
            }
            (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(
              self.calendarContainer,
              'rangeMode',
              self.config.mode === 'range',
            );
            (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(
              self.calendarContainer,
              'animate',
              self.config.animate === true,
            );
            (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(
              self.calendarContainer,
              'multiMonth',
              self.config.showMonths > 1,
            );
            self.calendarContainer.appendChild(fragment);
            var customAppend = self.config.appendTo !== undefined && self.config.appendTo.nodeType !== undefined;
            if (self.config.inline || self.config.static) {
              self.calendarContainer.classList.add(self.config.inline ? 'inline' : 'static');
              if (self.config.inline) {
                if (!customAppend && self.element.parentNode)
                  self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
                else if (self.config.appendTo !== undefined) self.config.appendTo.appendChild(self.calendarContainer);
              }
              if (self.config.static) {
                var wrapper = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)('div', 'flatpickr-wrapper');
                if (self.element.parentNode) self.element.parentNode.insertBefore(wrapper, self.element);
                wrapper.appendChild(self.element);
                if (self.altInput) wrapper.appendChild(self.altInput);
                wrapper.appendChild(self.calendarContainer);
              }
            }
            if (!self.config.static && !self.config.inline)
              (self.config.appendTo !== undefined ? self.config.appendTo : window.document.body).appendChild(
                self.calendarContainer,
              );
          }
          function createDay(className, date, _dayNumber, i) {
            var dateIsEnabled = isEnabled(date, true),
              dayElement = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)(
                'span',
                className,
                date.getDate().toString(),
              );
            dayElement.dateObj = date;
            dayElement.$i = i;
            dayElement.setAttribute('aria-label', self.formatDate(date, self.config.ariaDateFormat));
            if (
              className.indexOf('hidden') === -1 &&
              (0, _utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.now) === 0
            ) {
              self.todayDateElem = dayElement;
              dayElement.classList.add('today');
              dayElement.setAttribute('aria-current', 'date');
            }
            if (dateIsEnabled) {
              dayElement.tabIndex = -1;
              if (isDateSelected(date)) {
                dayElement.classList.add('selected');
                self.selectedDateElem = dayElement;
                if (self.config.mode === 'range') {
                  (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(
                    dayElement,
                    'startRange',
                    self.selectedDates[0] &&
                      (0, _utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.selectedDates[0], true) ===
                        0,
                  );
                  (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(
                    dayElement,
                    'endRange',
                    self.selectedDates[1] &&
                      (0, _utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.selectedDates[1], true) ===
                        0,
                  );
                  if (className === 'nextMonthDay') dayElement.classList.add('inRange');
                }
              }
            } else {
              dayElement.classList.add('flatpickr-disabled');
            }
            if (self.config.mode === 'range') {
              if (isDateInRange(date) && !isDateSelected(date)) dayElement.classList.add('inRange');
            }
            if (self.weekNumbers && self.config.showMonths === 1 && className !== 'prevMonthDay' && i % 7 === 6) {
              self.weekNumbers.insertAdjacentHTML(
                'beforeend',
                "<span class='flatpickr-day'>" + self.config.getWeek(date) + '</span>',
              );
            }
            triggerEvent('onDayCreate', dayElement);
            return dayElement;
          }
          function focusOnDayElem(targetNode) {
            targetNode.focus();
            if (self.config.mode === 'range') onMouseOver(targetNode);
          }
          function getFirstAvailableDay(delta) {
            var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
            var endMonth = delta > 0 ? self.config.showMonths : -1;
            for (var m = startMonth; m != endMonth; m += delta) {
              var month = self.daysContainer.children[m];
              var startIndex = delta > 0 ? 0 : month.children.length - 1;
              var endIndex = delta > 0 ? month.children.length : -1;
              for (var i = startIndex; i != endIndex; i += delta) {
                var c = month.children[i];
                if (c.className.indexOf('hidden') === -1 && isEnabled(c.dateObj)) return c;
              }
            }
            return undefined;
          }
          function getNextAvailableDay(current, delta) {
            var givenMonth = current.className.indexOf('Month') === -1 ? current.dateObj.getMonth() : self.currentMonth;
            var endMonth = delta > 0 ? self.config.showMonths : -1;
            var loopDelta = delta > 0 ? 1 : -1;
            for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
              var month = self.daysContainer.children[m];
              var startIndex =
                givenMonth - self.currentMonth === m ? current.$i + delta : delta < 0 ? month.children.length - 1 : 0;
              var numMonthDays = month.children.length;
              for (
                var i = startIndex;
                i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1);
                i += loopDelta
              ) {
                var c = month.children[i];
                if (
                  c.className.indexOf('hidden') === -1 &&
                  isEnabled(c.dateObj) &&
                  Math.abs(current.$i - i) >= Math.abs(delta)
                )
                  return focusOnDayElem(c);
              }
            }
            self.changeMonth(loopDelta);
            focusOnDay(getFirstAvailableDay(loopDelta), 0);
            return undefined;
          }
          function focusOnDay(current, offset) {
            var activeElement = getClosestActiveElement();
            var dayFocused = isInView(activeElement || document.body);
            var startElem =
              current !== undefined
                ? current
                : dayFocused
                  ? activeElement
                  : self.selectedDateElem !== undefined && isInView(self.selectedDateElem)
                    ? self.selectedDateElem
                    : self.todayDateElem !== undefined && isInView(self.todayDateElem)
                      ? self.todayDateElem
                      : getFirstAvailableDay(offset > 0 ? 1 : -1);
            if (startElem === undefined) {
              self._input.focus();
            } else if (!dayFocused) {
              focusOnDayElem(startElem);
            } else {
              getNextAvailableDay(startElem, offset);
            }
          }
          function buildMonthDays(year, month) {
            var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
            var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12, year);
            var daysInMonth = self.utils.getDaysInMonth(month, year),
              days = window.document.createDocumentFragment(),
              isMultiMonth = self.config.showMonths > 1,
              prevMonthDayClass = isMultiMonth ? 'prevMonthDay hidden' : 'prevMonthDay',
              nextMonthDayClass = isMultiMonth ? 'nextMonthDay hidden' : 'nextMonthDay';
            var dayNumber = prevMonthDays + 1 - firstOfMonth,
              dayIndex = 0;
            for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
              days.appendChild(
                createDay(
                  'flatpickr-day ' + prevMonthDayClass,
                  new Date(year, month - 1, dayNumber),
                  dayNumber,
                  dayIndex,
                ),
              );
            }
            for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
              days.appendChild(createDay('flatpickr-day', new Date(year, month, dayNumber), dayNumber, dayIndex));
            }
            for (
              var dayNum = daysInMonth + 1;
              dayNum <= 42 - firstOfMonth && (self.config.showMonths === 1 || dayIndex % 7 !== 0);
              dayNum++, dayIndex++
            ) {
              days.appendChild(
                createDay(
                  'flatpickr-day ' + nextMonthDayClass,
                  new Date(year, month + 1, dayNum % daysInMonth),
                  dayNum,
                  dayIndex,
                ),
              );
            }
            var dayContainer = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)('div', 'dayContainer');
            dayContainer.appendChild(days);
            return dayContainer;
          }
          function buildDays() {
            if (self.daysContainer === undefined) {
              return;
            }
            (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.clearNode)(self.daysContainer);
            if (self.weekNumbers) (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.clearNode)(self.weekNumbers);
            var frag = document.createDocumentFragment();
            for (var i = 0; i < self.config.showMonths; i++) {
              var d = new Date(self.currentYear, self.currentMonth, 1);
              d.setMonth(self.currentMonth + i);
              frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
            }
            self.daysContainer.appendChild(frag);
            self.days = self.daysContainer.firstChild;
            if (self.config.mode === 'range' && self.selectedDates.length === 1) {
              onMouseOver();
            }
          }
          function buildMonthSwitch() {
            if (self.config.showMonths > 1 || self.config.monthSelectorType !== 'dropdown') return;
            var shouldBuildMonth = function (month) {
              if (
                self.config.minDate !== undefined &&
                self.currentYear === self.config.minDate.getFullYear() &&
                month < self.config.minDate.getMonth()
              ) {
                return false;
              }
              return !(
                self.config.maxDate !== undefined &&
                self.currentYear === self.config.maxDate.getFullYear() &&
                month > self.config.maxDate.getMonth()
              );
            };
            self.monthsDropdownContainer.tabIndex = -1;
            self.monthsDropdownContainer.innerHTML = '';
            for (var i = 0; i < 12; i++) {
              if (!shouldBuildMonth(i)) continue;
              var month = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)(
                'option',
                'flatpickr-monthDropdown-month',
              );
              month.value = new Date(self.currentYear, i).getMonth().toString();
              month.textContent = (0, _utils_formatting__WEBPACK_IMPORTED_MODULE_5__.monthToStr)(
                i,
                self.config.shorthandCurrentMonth,
                self.l10n,
              );
              month.tabIndex = -1;
              if (self.currentMonth === i) {
                month.selected = true;
              }
              self.monthsDropdownContainer.appendChild(month);
            }
          }
          function buildMonth() {
            var container = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)('div', 'flatpickr-month');
            var monthNavFragment = window.document.createDocumentFragment();
            var monthElement;
            if (self.config.showMonths > 1 || self.config.monthSelectorType === 'static') {
              monthElement = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)('span', 'cur-month');
            } else {
              self.monthsDropdownContainer = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)(
                'select',
                'flatpickr-monthDropdown-months',
              );
              self.monthsDropdownContainer.setAttribute('aria-label', self.l10n.monthAriaLabel);
              bind(self.monthsDropdownContainer, 'change', function (e) {
                var target = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
                var selectedMonth = parseInt(target.value, 10);
                self.changeMonth(selectedMonth - self.currentMonth);
                triggerEvent('onMonthChange');
              });
              buildMonthSwitch();
              monthElement = self.monthsDropdownContainer;
            }
            var yearInput = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.createNumberInput)('cur-year', {
              tabindex: '-1',
            });
            var yearElement = yearInput.getElementsByTagName('input')[0];
            yearElement.setAttribute('aria-label', self.l10n.yearAriaLabel);
            if (self.config.minDate) {
              yearElement.setAttribute('min', self.config.minDate.getFullYear().toString());
            }
            if (self.config.maxDate) {
              yearElement.setAttribute('max', self.config.maxDate.getFullYear().toString());
              yearElement.disabled =
                !!self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
            }
            var currentMonth = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)(
              'div',
              'flatpickr-current-month',
            );
            currentMonth.appendChild(monthElement);
            currentMonth.appendChild(yearInput);
            monthNavFragment.appendChild(currentMonth);
            container.appendChild(monthNavFragment);
            return {
              container: container,
              yearElement: yearElement,
              monthElement: monthElement,
            };
          }
          function buildMonths() {
            (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.clearNode)(self.monthNav);
            self.monthNav.appendChild(self.prevMonthNav);
            if (self.config.showMonths) {
              self.yearElements = [];
              self.monthElements = [];
            }
            for (var m = self.config.showMonths; m--; ) {
              var month = buildMonth();
              self.yearElements.push(month.yearElement);
              self.monthElements.push(month.monthElement);
              self.monthNav.appendChild(month.container);
            }
            self.monthNav.appendChild(self.nextMonthNav);
          }
          function buildMonthNav() {
            self.monthNav = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)('div', 'flatpickr-months');
            self.yearElements = [];
            self.monthElements = [];
            self.prevMonthNav = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)(
              'span',
              'flatpickr-prev-month',
            );
            self.prevMonthNav.innerHTML = self.config.prevArrow;
            self.nextMonthNav = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)(
              'span',
              'flatpickr-next-month',
            );
            self.nextMonthNav.innerHTML = self.config.nextArrow;
            buildMonths();
            Object.defineProperty(self, '_hidePrevMonthArrow', {
              get: function () {
                return self.__hidePrevMonthArrow;
              },
              set: function (bool) {
                if (self.__hidePrevMonthArrow !== bool) {
                  (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(
                    self.prevMonthNav,
                    'flatpickr-disabled',
                    bool,
                  );
                  self.__hidePrevMonthArrow = bool;
                }
              },
            });
            Object.defineProperty(self, '_hideNextMonthArrow', {
              get: function () {
                return self.__hideNextMonthArrow;
              },
              set: function (bool) {
                if (self.__hideNextMonthArrow !== bool) {
                  (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(
                    self.nextMonthNav,
                    'flatpickr-disabled',
                    bool,
                  );
                  self.__hideNextMonthArrow = bool;
                }
              },
            });
            self.currentYearElement = self.yearElements[0];
            updateNavigationCurrentMonth();
            return self.monthNav;
          }
          function buildTime() {
            self.calendarContainer.classList.add('hasTime');
            if (self.config.noCalendar) self.calendarContainer.classList.add('noCalendar');
            var defaults = (0, _utils_dates__WEBPACK_IMPORTED_MODULE_4__.getDefaultHours)(self.config);
            self.timeContainer = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)('div', 'flatpickr-time');
            self.timeContainer.tabIndex = -1;
            var separator = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)(
              'span',
              'flatpickr-time-separator',
              ':',
            );
            var hourInput = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.createNumberInput)('flatpickr-hour', {
              'aria-label': self.l10n.hourAriaLabel,
            });
            self.hourElement = hourInput.getElementsByTagName('input')[0];
            var minuteInput = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.createNumberInput)('flatpickr-minute', {
              'aria-label': self.l10n.minuteAriaLabel,
            });
            self.minuteElement = minuteInput.getElementsByTagName('input')[0];
            self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
            self.hourElement.value = (0, _utils__WEBPACK_IMPORTED_MODULE_2__.pad)(
              self.latestSelectedDateObj
                ? self.latestSelectedDateObj.getHours()
                : self.config.time_24hr
                  ? defaults.hours
                  : military2ampm(defaults.hours),
            );
            self.minuteElement.value = (0, _utils__WEBPACK_IMPORTED_MODULE_2__.pad)(
              self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : defaults.minutes,
            );
            self.hourElement.setAttribute('step', self.config.hourIncrement.toString());
            self.minuteElement.setAttribute('step', self.config.minuteIncrement.toString());
            self.hourElement.setAttribute('min', self.config.time_24hr ? '0' : '1');
            self.hourElement.setAttribute('max', self.config.time_24hr ? '23' : '12');
            self.hourElement.setAttribute('maxlength', '2');
            self.minuteElement.setAttribute('min', '0');
            self.minuteElement.setAttribute('max', '59');
            self.minuteElement.setAttribute('maxlength', '2');
            self.timeContainer.appendChild(hourInput);
            self.timeContainer.appendChild(separator);
            self.timeContainer.appendChild(minuteInput);
            if (self.config.time_24hr) self.timeContainer.classList.add('time24hr');
            if (self.config.enableSeconds) {
              self.timeContainer.classList.add('hasSeconds');
              var secondInput = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.createNumberInput)('flatpickr-second');
              self.secondElement = secondInput.getElementsByTagName('input')[0];
              self.secondElement.value = (0, _utils__WEBPACK_IMPORTED_MODULE_2__.pad)(
                self.latestSelectedDateObj ? self.latestSelectedDateObj.getSeconds() : defaults.seconds,
              );
              self.secondElement.setAttribute('step', self.minuteElement.getAttribute('step'));
              self.secondElement.setAttribute('min', '0');
              self.secondElement.setAttribute('max', '59');
              self.secondElement.setAttribute('maxlength', '2');
              self.timeContainer.appendChild(
                (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)('span', 'flatpickr-time-separator', ':'),
              );
              self.timeContainer.appendChild(secondInput);
            }
            if (!self.config.time_24hr) {
              self.amPM = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)(
                'span',
                'flatpickr-am-pm',
                self.l10n.amPM[
                  (0, _utils__WEBPACK_IMPORTED_MODULE_2__.int)(
                    (self.latestSelectedDateObj ? self.hourElement.value : self.config.defaultHour) > 11,
                  )
                ],
              );
              self.amPM.title = self.l10n.toggleTitle;
              self.amPM.tabIndex = -1;
              self.timeContainer.appendChild(self.amPM);
            }
            return self.timeContainer;
          }
          function buildWeekdays() {
            if (!self.weekdayContainer)
              self.weekdayContainer = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)(
                'div',
                'flatpickr-weekdays',
              );
            else (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.clearNode)(self.weekdayContainer);
            for (var i = self.config.showMonths; i--; ) {
              var container = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)(
                'div',
                'flatpickr-weekdaycontainer',
              );
              self.weekdayContainer.appendChild(container);
            }
            updateWeekdays();
            return self.weekdayContainer;
          }
          function updateWeekdays() {
            if (!self.weekdayContainer) {
              return;
            }
            var firstDayOfWeek = self.l10n.firstDayOfWeek;
            var weekdays = __spreadArrays(self.l10n.weekdays.shorthand);
            if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
              weekdays = __spreadArrays(
                weekdays.splice(firstDayOfWeek, weekdays.length),
                weekdays.splice(0, firstDayOfWeek),
              );
            }
            for (var i = self.config.showMonths; i--; ) {
              self.weekdayContainer.children[i].innerHTML =
                "\n      <span class='flatpickr-weekday'>\n        " +
                weekdays.join("</span><span class='flatpickr-weekday'>") +
                '\n      </span>\n      ';
            }
          }
          function buildWeeks() {
            self.calendarContainer.classList.add('hasWeeks');
            var weekWrapper = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)(
              'div',
              'flatpickr-weekwrapper',
            );
            weekWrapper.appendChild(
              (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)(
                'span',
                'flatpickr-weekday',
                self.l10n.weekAbbreviation,
              ),
            );
            var weekNumbers = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)('div', 'flatpickr-weeks');
            weekWrapper.appendChild(weekNumbers);
            return {
              weekWrapper: weekWrapper,
              weekNumbers: weekNumbers,
            };
          }
          function changeMonth(value, isOffset) {
            if (isOffset === void 0) {
              isOffset = true;
            }
            var delta = isOffset ? value : value - self.currentMonth;
            if ((delta < 0 && self._hidePrevMonthArrow === true) || (delta > 0 && self._hideNextMonthArrow === true))
              return;
            self.currentMonth += delta;
            if (self.currentMonth < 0 || self.currentMonth > 11) {
              self.currentYear += self.currentMonth > 11 ? 1 : -1;
              self.currentMonth = (self.currentMonth + 12) % 12;
              triggerEvent('onYearChange');
              buildMonthSwitch();
            }
            buildDays();
            triggerEvent('onMonthChange');
            updateNavigationCurrentMonth();
          }
          function clear(triggerChangeEvent, toInitial) {
            if (triggerChangeEvent === void 0) {
              triggerChangeEvent = true;
            }
            if (toInitial === void 0) {
              toInitial = true;
            }
            self.input.value = '';
            if (self.altInput !== undefined) self.altInput.value = '';
            if (self.mobileInput !== undefined) self.mobileInput.value = '';
            self.selectedDates = [];
            self.latestSelectedDateObj = undefined;
            if (toInitial === true) {
              self.currentYear = self._initialDate.getFullYear();
              self.currentMonth = self._initialDate.getMonth();
            }
            if (self.config.enableTime === true) {
              var _a = (0, _utils_dates__WEBPACK_IMPORTED_MODULE_4__.getDefaultHours)(self.config),
                hours = _a.hours,
                minutes = _a.minutes,
                seconds = _a.seconds;
              setHours(hours, minutes, seconds);
            }
            self.redraw();
            if (triggerChangeEvent) triggerEvent('onChange');
          }
          function close() {
            self.isOpen = false;
            if (!self.isMobile) {
              if (self.calendarContainer !== undefined) {
                self.calendarContainer.classList.remove('open');
              }
              if (self._input !== undefined) {
                self._input.classList.remove('active');
              }
            }
            triggerEvent('onClose');
          }
          function destroy() {
            if (self.config !== undefined) triggerEvent('onDestroy');
            for (var i = self._handlers.length; i--; ) {
              self._handlers[i].remove();
            }
            self._handlers = [];
            if (self.mobileInput) {
              if (self.mobileInput.parentNode) self.mobileInput.parentNode.removeChild(self.mobileInput);
              self.mobileInput = undefined;
            } else if (self.calendarContainer && self.calendarContainer.parentNode) {
              if (self.config.static && self.calendarContainer.parentNode) {
                var wrapper = self.calendarContainer.parentNode;
                wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
                if (wrapper.parentNode) {
                  while (wrapper.firstChild) wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
                  wrapper.parentNode.removeChild(wrapper);
                }
              } else self.calendarContainer.parentNode.removeChild(self.calendarContainer);
            }
            if (self.altInput) {
              self.input.type = 'text';
              if (self.altInput.parentNode) self.altInput.parentNode.removeChild(self.altInput);
              delete self.altInput;
            }
            if (self.input) {
              self.input.type = self.input._type;
              self.input.classList.remove('flatpickr-input');
              self.input.removeAttribute('readonly');
            }
            [
              '_showTimeInput',
              'latestSelectedDateObj',
              '_hideNextMonthArrow',
              '_hidePrevMonthArrow',
              '__hideNextMonthArrow',
              '__hidePrevMonthArrow',
              'isMobile',
              'isOpen',
              'selectedDateElem',
              'minDateHasTime',
              'maxDateHasTime',
              'days',
              'daysContainer',
              '_input',
              '_positionElement',
              'innerContainer',
              'rContainer',
              'monthNav',
              'todayDateElem',
              'calendarContainer',
              'weekdayContainer',
              'prevMonthNav',
              'nextMonthNav',
              'monthsDropdownContainer',
              'currentMonthElement',
              'currentYearElement',
              'navigationCurrentMonth',
              'selectedDateElem',
              'config',
            ].forEach(function (k) {
              try {
                delete self[k];
              } catch (_) {}
            });
          }
          function isCalendarElem(elem) {
            return self.calendarContainer.contains(elem);
          }
          function documentClick(e) {
            if (self.isOpen && !self.config.inline) {
              var eventTarget_1 = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
              var isCalendarElement = isCalendarElem(eventTarget_1);
              var isInput =
                eventTarget_1 === self.input ||
                eventTarget_1 === self.altInput ||
                self.element.contains(eventTarget_1) ||
                (e.composedPath &&
                  (~e.composedPath().indexOf(self.input) ||
                    (self.altInput && ~e.composedPath().indexOf(self.altInput))));
              var lostFocus = !isInput && !isCalendarElement && !isCalendarElem(e.relatedTarget);
              var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {
                return elem.contains(eventTarget_1);
              });
              if (lostFocus && isIgnored) {
                if (
                  self.timeContainer !== undefined &&
                  self.minuteElement !== undefined &&
                  self.hourElement !== undefined &&
                  self.input.value !== '' &&
                  self.input.value !== undefined
                ) {
                  updateTime();
                }
                self.close();
                if (self.config && self.config.mode === 'range' && self.selectedDates.length === 1) self.clear(false);
              }
            }
          }
          function changeYear(newYear) {
            if (
              !newYear ||
              (self.config.minDate && newYear < self.config.minDate.getFullYear()) ||
              (self.config.maxDate && newYear > self.config.maxDate.getFullYear())
            )
              return;
            var newYearNum = newYear,
              isNewYear = self.currentYear !== newYearNum;
            self.currentYear = newYearNum || self.currentYear;
            if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) {
              self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
            } else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) {
              self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
            }
            if (isNewYear) {
              self.redraw();
              triggerEvent('onYearChange');
              buildMonthSwitch();
            }
          }
          function isEnabled(date, timeless) {
            var _a;
            if (timeless === void 0) {
              timeless = true;
            }
            var dateToCheck = self.parseDate(date, undefined, timeless);
            if (
              (self.config.minDate &&
                dateToCheck &&
                (0, _utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(
                  dateToCheck,
                  self.config.minDate,
                  timeless !== undefined ? timeless : !self.minDateHasTime,
                ) < 0) ||
              (self.config.maxDate &&
                dateToCheck &&
                (0, _utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(
                  dateToCheck,
                  self.config.maxDate,
                  timeless !== undefined ? timeless : !self.maxDateHasTime,
                ) > 0)
            )
              return false;
            if (!self.config.enable && self.config.disable.length === 0) return true;
            if (dateToCheck === undefined) return false;
            var bool = !!self.config.enable,
              array = (_a = self.config.enable) !== null && _a !== void 0 ? _a : self.config.disable;
            for (var i = 0, d = void 0; i < array.length; i++) {
              d = array[i];
              if (typeof d === 'function' && d(dateToCheck)) return bool;
              else if (d instanceof Date && dateToCheck !== undefined && d.getTime() === dateToCheck.getTime())
                return bool;
              else if (typeof d === 'string') {
                var parsed = self.parseDate(d, undefined, true);
                return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
              } else if (
                typeof d === 'object' &&
                dateToCheck !== undefined &&
                d.from &&
                d.to &&
                dateToCheck.getTime() >= d.from.getTime() &&
                dateToCheck.getTime() <= d.to.getTime()
              )
                return bool;
            }
            return !bool;
          }
          function isInView(elem) {
            if (self.daysContainer !== undefined)
              return (
                elem.className.indexOf('hidden') === -1 &&
                elem.className.indexOf('flatpickr-disabled') === -1 &&
                self.daysContainer.contains(elem)
              );
            return false;
          }
          function onBlur(e) {
            var isInput = e.target === self._input;
            var valueChanged = self._input.value.trimEnd() !== getDateStr();
            if (isInput && valueChanged && !(e.relatedTarget && isCalendarElem(e.relatedTarget))) {
              self.setDate(
                self._input.value,
                true,
                e.target === self.altInput ? self.config.altFormat : self.config.dateFormat,
              );
            }
          }
          function onKeyDown(e) {
            var eventTarget = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
            var isInput = self.config.wrap ? element.contains(eventTarget) : eventTarget === self._input;
            var allowInput = self.config.allowInput;
            var allowKeydown = self.isOpen && (!allowInput || !isInput);
            var allowInlineKeydown = self.config.inline && isInput && !allowInput;
            if (e.keyCode === 13 && isInput) {
              if (allowInput) {
                self.setDate(
                  self._input.value,
                  true,
                  eventTarget === self.altInput ? self.config.altFormat : self.config.dateFormat,
                );
                self.close();
                return eventTarget.blur();
              } else {
                self.open();
              }
            } else if (isCalendarElem(eventTarget) || allowKeydown || allowInlineKeydown) {
              var isTimeObj = !!self.timeContainer && self.timeContainer.contains(eventTarget);
              switch (e.keyCode) {
                case 13:
                  if (isTimeObj) {
                    e.preventDefault();
                    updateTime();
                    focusAndClose();
                  } else selectDate(e);
                  break;
                case 27:
                  e.preventDefault();
                  focusAndClose();
                  break;
                case 8:
                case 46:
                  if (isInput && !self.config.allowInput) {
                    e.preventDefault();
                    self.clear();
                  }
                  break;
                case 37:
                case 39:
                  if (!isTimeObj && !isInput) {
                    e.preventDefault();
                    var activeElement = getClosestActiveElement();
                    if (
                      self.daysContainer !== undefined &&
                      (allowInput === false || (activeElement && isInView(activeElement)))
                    ) {
                      var delta_1 = e.keyCode === 39 ? 1 : -1;
                      if (!e.ctrlKey) focusOnDay(undefined, delta_1);
                      else {
                        e.stopPropagation();
                        changeMonth(delta_1);
                        focusOnDay(getFirstAvailableDay(1), 0);
                      }
                    }
                  } else if (self.hourElement) self.hourElement.focus();
                  break;
                case 38:
                case 40:
                  e.preventDefault();
                  var delta = e.keyCode === 40 ? 1 : -1;
                  if (
                    (self.daysContainer && eventTarget.$i !== undefined) ||
                    eventTarget === self.input ||
                    eventTarget === self.altInput
                  ) {
                    if (e.ctrlKey) {
                      e.stopPropagation();
                      changeYear(self.currentYear - delta);
                      focusOnDay(getFirstAvailableDay(1), 0);
                    } else if (!isTimeObj) focusOnDay(undefined, delta * 7);
                  } else if (eventTarget === self.currentYearElement) {
                    changeYear(self.currentYear - delta);
                  } else if (self.config.enableTime) {
                    if (!isTimeObj && self.hourElement) self.hourElement.focus();
                    updateTime(e);
                    self._debouncedChange();
                  }
                  break;
                case 9:
                  if (isTimeObj) {
                    var elems = [self.hourElement, self.minuteElement, self.secondElement, self.amPM]
                      .concat(self.pluginElements)
                      .filter(function (x) {
                        return x;
                      });
                    var i = elems.indexOf(eventTarget);
                    if (i !== -1) {
                      var target = elems[i + (e.shiftKey ? -1 : 1)];
                      e.preventDefault();
                      (target || self._input).focus();
                    }
                  } else if (
                    !self.config.noCalendar &&
                    self.daysContainer &&
                    self.daysContainer.contains(eventTarget) &&
                    e.shiftKey
                  ) {
                    e.preventDefault();
                    self._input.focus();
                  }
                  break;
                default:
                  break;
              }
            }
            if (self.amPM !== undefined && eventTarget === self.amPM) {
              switch (e.key) {
                case self.l10n.amPM[0].charAt(0):
                case self.l10n.amPM[0].charAt(0).toLowerCase():
                  self.amPM.textContent = self.l10n.amPM[0];
                  setHoursFromInputs();
                  updateValue();
                  break;
                case self.l10n.amPM[1].charAt(0):
                case self.l10n.amPM[1].charAt(0).toLowerCase():
                  self.amPM.textContent = self.l10n.amPM[1];
                  setHoursFromInputs();
                  updateValue();
                  break;
              }
            }
            if (isInput || isCalendarElem(eventTarget)) {
              triggerEvent('onKeyDown', e);
            }
          }
          function onMouseOver(elem, cellClass) {
            if (cellClass === void 0) {
              cellClass = 'flatpickr-day';
            }
            if (
              self.selectedDates.length !== 1 ||
              (elem && (!elem.classList.contains(cellClass) || elem.classList.contains('flatpickr-disabled')))
            )
              return;
            var hoverDate = elem ? elem.dateObj.getTime() : self.days.firstElementChild.dateObj.getTime(),
              initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(),
              rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()),
              rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
            var containsDisabled = false;
            var minRange = 0,
              maxRange = 0;
            for (
              var t = rangeStartDate;
              t < rangeEndDate;
              t += _utils_dates__WEBPACK_IMPORTED_MODULE_4__.duration.DAY
            ) {
              if (!isEnabled(new Date(t), true)) {
                containsDisabled = containsDisabled || (t > rangeStartDate && t < rangeEndDate);
                if (t < initialDate && (!minRange || t > minRange)) minRange = t;
                else if (t > initialDate && (!maxRange || t < maxRange)) maxRange = t;
              }
            }
            var hoverableCells = Array.from(
              self.rContainer.querySelectorAll('*:nth-child(-n+' + self.config.showMonths + ') > .' + cellClass),
            );
            hoverableCells.forEach(function (dayElem) {
              var date = dayElem.dateObj;
              var timestamp = date.getTime();
              var outOfRange = (minRange > 0 && timestamp < minRange) || (maxRange > 0 && timestamp > maxRange);
              if (outOfRange) {
                dayElem.classList.add('notAllowed');
                ['inRange', 'startRange', 'endRange'].forEach(function (c) {
                  dayElem.classList.remove(c);
                });
                return;
              } else if (containsDisabled && !outOfRange) return;
              ['startRange', 'inRange', 'endRange', 'notAllowed'].forEach(function (c) {
                dayElem.classList.remove(c);
              });
              if (elem !== undefined) {
                elem.classList.add(hoverDate <= self.selectedDates[0].getTime() ? 'startRange' : 'endRange');
                if (initialDate < hoverDate && timestamp === initialDate) dayElem.classList.add('startRange');
                else if (initialDate > hoverDate && timestamp === initialDate) dayElem.classList.add('endRange');
                if (
                  timestamp >= minRange &&
                  (maxRange === 0 || timestamp <= maxRange) &&
                  (0, _utils_dates__WEBPACK_IMPORTED_MODULE_4__.isBetween)(timestamp, initialDate, hoverDate)
                )
                  dayElem.classList.add('inRange');
              }
            });
          }
          function onResize() {
            if (self.isOpen && !self.config.static && !self.config.inline) positionCalendar();
          }
          function open(e, positionElement) {
            if (positionElement === void 0) {
              positionElement = self._positionElement;
            }
            if (self.isMobile === true) {
              if (e) {
                e.preventDefault();
                var eventTarget = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
                if (eventTarget) {
                  eventTarget.blur();
                }
              }
              if (self.mobileInput !== undefined) {
                self.mobileInput.focus();
                self.mobileInput.click();
              }
              triggerEvent('onOpen');
              return;
            } else if (self._input.disabled || self.config.inline) {
              return;
            }
            var wasOpen = self.isOpen;
            self.isOpen = true;
            if (!wasOpen) {
              self.calendarContainer.classList.add('open');
              self._input.classList.add('active');
              triggerEvent('onOpen');
              positionCalendar(positionElement);
            }
            if (self.config.enableTime === true && self.config.noCalendar === true) {
              if (
                self.config.allowInput === false &&
                (e === undefined || !self.timeContainer.contains(e.relatedTarget))
              ) {
                setTimeout(function () {
                  return self.hourElement.select();
                }, 50);
              }
            }
          }
          function minMaxDateSetter(type) {
            return function (date) {
              var dateObj = (self.config['_' + type + 'Date'] = self.parseDate(date, self.config.dateFormat));
              var inverseDateObj = self.config['_' + (type === 'min' ? 'max' : 'min') + 'Date'];
              if (dateObj !== undefined) {
                self[type === 'min' ? 'minDateHasTime' : 'maxDateHasTime'] =
                  dateObj.getHours() > 0 || dateObj.getMinutes() > 0 || dateObj.getSeconds() > 0;
              }
              if (self.selectedDates) {
                self.selectedDates = self.selectedDates.filter(function (d) {
                  return isEnabled(d);
                });
                if (!self.selectedDates.length && type === 'min') setHoursFromDate(dateObj);
                updateValue();
              }
              if (self.daysContainer) {
                redraw();
                if (dateObj !== undefined) self.currentYearElement[type] = dateObj.getFullYear().toString();
                else self.currentYearElement.removeAttribute(type);
                self.currentYearElement.disabled =
                  !!inverseDateObj && dateObj !== undefined && inverseDateObj.getFullYear() === dateObj.getFullYear();
              }
            };
          }
          function parseConfig() {
            var boolOpts = [
              'wrap',
              'weekNumbers',
              'allowInput',
              'allowInvalidPreload',
              'clickOpens',
              'time_24hr',
              'enableTime',
              'noCalendar',
              'altInput',
              'shorthandCurrentMonth',
              'inline',
              'static',
              'enableSeconds',
              'disableMobile',
            ];
            var userConfig = __assign(__assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);
            var formats = {};
            self.config.parseDate = userConfig.parseDate;
            self.config.formatDate = userConfig.formatDate;
            Object.defineProperty(self.config, 'enable', {
              get: function () {
                return self.config._enable;
              },
              set: function (dates) {
                self.config._enable = parseDateRules(dates);
              },
            });
            Object.defineProperty(self.config, 'disable', {
              get: function () {
                return self.config._disable;
              },
              set: function (dates) {
                self.config._disable = parseDateRules(dates);
              },
            });
            var timeMode = userConfig.mode === 'time';
            if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
              var defaultDateFormat =
                flatpickr.defaultConfig.dateFormat || _types_options__WEBPACK_IMPORTED_MODULE_0__.defaults.dateFormat;
              formats.dateFormat =
                userConfig.noCalendar || timeMode
                  ? 'H:i' + (userConfig.enableSeconds ? ':S' : '')
                  : defaultDateFormat + ' H:i' + (userConfig.enableSeconds ? ':S' : '');
            }
            if (userConfig.altInput && (userConfig.enableTime || timeMode) && !userConfig.altFormat) {
              var defaultAltFormat =
                flatpickr.defaultConfig.altFormat || _types_options__WEBPACK_IMPORTED_MODULE_0__.defaults.altFormat;
              formats.altFormat =
                userConfig.noCalendar || timeMode
                  ? 'h:i' + (userConfig.enableSeconds ? ':S K' : ' K')
                  : defaultAltFormat + (' h:i' + (userConfig.enableSeconds ? ':S' : '') + ' K');
            }
            Object.defineProperty(self.config, 'minDate', {
              get: function () {
                return self.config._minDate;
              },
              set: minMaxDateSetter('min'),
            });
            Object.defineProperty(self.config, 'maxDate', {
              get: function () {
                return self.config._maxDate;
              },
              set: minMaxDateSetter('max'),
            });
            var minMaxTimeSetter = function (type) {
              return function (val) {
                self.config[type === 'min' ? '_minTime' : '_maxTime'] = self.parseDate(val, 'H:i:S');
              };
            };
            Object.defineProperty(self.config, 'minTime', {
              get: function () {
                return self.config._minTime;
              },
              set: minMaxTimeSetter('min'),
            });
            Object.defineProperty(self.config, 'maxTime', {
              get: function () {
                return self.config._maxTime;
              },
              set: minMaxTimeSetter('max'),
            });
            if (userConfig.mode === 'time') {
              self.config.noCalendar = true;
              self.config.enableTime = true;
            }
            Object.assign(self.config, formats, userConfig);
            for (var i = 0; i < boolOpts.length; i++)
              self.config[boolOpts[i]] = self.config[boolOpts[i]] === true || self.config[boolOpts[i]] === 'true';
            _types_options__WEBPACK_IMPORTED_MODULE_0__.HOOKS.filter(function (hook) {
              return self.config[hook] !== undefined;
            }).forEach(function (hook) {
              self.config[hook] = (0, _utils__WEBPACK_IMPORTED_MODULE_2__.arrayify)(self.config[hook] || []).map(
                bindToInstance,
              );
            });
            self.isMobile =
              !self.config.disableMobile &&
              !self.config.inline &&
              self.config.mode === 'single' &&
              !self.config.disable.length &&
              !self.config.enable &&
              !self.config.weekNumbers &&
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            for (var i = 0; i < self.config.plugins.length; i++) {
              var pluginConf = self.config.plugins[i](self) || {};
              for (var key in pluginConf) {
                if (_types_options__WEBPACK_IMPORTED_MODULE_0__.HOOKS.indexOf(key) > -1) {
                  self.config[key] = (0, _utils__WEBPACK_IMPORTED_MODULE_2__.arrayify)(pluginConf[key])
                    .map(bindToInstance)
                    .concat(self.config[key]);
                } else if (typeof userConfig[key] === 'undefined') self.config[key] = pluginConf[key];
              }
            }
            if (!userConfig.altInputClass) {
              self.config.altInputClass = getInputElem().className + ' ' + self.config.altInputClass;
            }
            triggerEvent('onParseConfig');
          }
          function getInputElem() {
            return self.config.wrap ? element.querySelector('[data-input]') : element;
          }
          function setupLocale() {
            if (typeof self.config.locale !== 'object' && typeof flatpickr.l10ns[self.config.locale] === 'undefined')
              self.config.errorHandler(new Error('flatpickr: invalid locale ' + self.config.locale));
            self.l10n = __assign(
              __assign({}, flatpickr.l10ns.default),
              typeof self.config.locale === 'object'
                ? self.config.locale
                : self.config.locale !== 'default'
                  ? flatpickr.l10ns[self.config.locale]
                  : undefined,
            );
            _utils_formatting__WEBPACK_IMPORTED_MODULE_5__.tokenRegex.D =
              '(' + self.l10n.weekdays.shorthand.join('|') + ')';
            _utils_formatting__WEBPACK_IMPORTED_MODULE_5__.tokenRegex.l =
              '(' + self.l10n.weekdays.longhand.join('|') + ')';
            _utils_formatting__WEBPACK_IMPORTED_MODULE_5__.tokenRegex.M =
              '(' + self.l10n.months.shorthand.join('|') + ')';
            _utils_formatting__WEBPACK_IMPORTED_MODULE_5__.tokenRegex.F =
              '(' + self.l10n.months.longhand.join('|') + ')';
            _utils_formatting__WEBPACK_IMPORTED_MODULE_5__.tokenRegex.K =
              '(' +
              self.l10n.amPM[0] +
              '|' +
              self.l10n.amPM[1] +
              '|' +
              self.l10n.amPM[0].toLowerCase() +
              '|' +
              self.l10n.amPM[1].toLowerCase() +
              ')';
            var userConfig = __assign(__assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));
            if (userConfig.time_24hr === undefined && flatpickr.defaultConfig.time_24hr === undefined) {
              self.config.time_24hr = self.l10n.time_24hr;
            }
            self.formatDate = (0, _utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateFormatter)(self);
            self.parseDate = (0, _utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateParser)({
              config: self.config,
              l10n: self.l10n,
            });
          }
          function positionCalendar(customPositionElement) {
            if (typeof self.config.position === 'function') {
              return void self.config.position(self, customPositionElement);
            }
            if (self.calendarContainer === undefined) return;
            triggerEvent('onPreCalendarPosition');
            var positionElement = customPositionElement || self._positionElement;
            var calendarHeight = Array.prototype.reduce.call(
                self.calendarContainer.children,
                function (acc, child) {
                  return acc + child.offsetHeight;
                },
                0,
              ),
              calendarWidth = self.calendarContainer.offsetWidth,
              configPos = self.config.position.split(' '),
              configPosVertical = configPos[0],
              configPosHorizontal = configPos.length > 1 ? configPos[1] : null,
              inputBounds = positionElement.getBoundingClientRect(),
              distanceFromBottom = window.innerHeight - inputBounds.bottom,
              showOnTop =
                configPosVertical === 'above' ||
                (configPosVertical !== 'below' &&
                  distanceFromBottom < calendarHeight &&
                  inputBounds.top > calendarHeight);
            var top =
              window.pageYOffset +
              inputBounds.top +
              (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
            (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, 'arrowTop', !showOnTop);
            (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, 'arrowBottom', showOnTop);
            if (self.config.inline) return;
            var left = window.pageXOffset + inputBounds.left;
            var isCenter = false;
            var isRight = false;
            if (configPosHorizontal === 'center') {
              left -= (calendarWidth - inputBounds.width) / 2;
              isCenter = true;
            } else if (configPosHorizontal === 'right') {
              left -= calendarWidth - inputBounds.width;
              isRight = true;
            }
            (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(
              self.calendarContainer,
              'arrowLeft',
              !isCenter && !isRight,
            );
            (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, 'arrowCenter', isCenter);
            (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, 'arrowRight', isRight);
            var right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);
            var rightMost = left + calendarWidth > window.document.body.offsetWidth;
            var centerMost = right + calendarWidth > window.document.body.offsetWidth;
            (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, 'rightMost', rightMost);
            if (self.config.static) return;
            self.calendarContainer.style.top = top + 'px';
            if (!rightMost) {
              self.calendarContainer.style.left = left + 'px';
              self.calendarContainer.style.right = 'auto';
            } else if (!centerMost) {
              self.calendarContainer.style.left = 'auto';
              self.calendarContainer.style.right = right + 'px';
            } else {
              var doc = getDocumentStyleSheet();
              if (doc === undefined) return;
              var bodyWidth = window.document.body.offsetWidth;
              var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
              var centerBefore = '.flatpickr-calendar.centerMost:before';
              var centerAfter = '.flatpickr-calendar.centerMost:after';
              var centerIndex = doc.cssRules.length;
              var centerStyle = '{left:' + inputBounds.left + 'px;right:auto;}';
              (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, 'rightMost', false);
              (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, 'centerMost', true);
              doc.insertRule(centerBefore + ',' + centerAfter + centerStyle, centerIndex);
              self.calendarContainer.style.left = centerLeft + 'px';
              self.calendarContainer.style.right = 'auto';
            }
          }
          function getDocumentStyleSheet() {
            var editableSheet = null;
            for (var i = 0; i < document.styleSheets.length; i++) {
              var sheet = document.styleSheets[i];
              if (!sheet.cssRules) continue;
              try {
                sheet.cssRules;
              } catch (err) {
                continue;
              }
              editableSheet = sheet;
              break;
            }
            return editableSheet != null ? editableSheet : createStyleSheet();
          }
          function createStyleSheet() {
            var style = document.createElement('style');
            document.head.appendChild(style);
            return style.sheet;
          }
          function redraw() {
            if (self.config.noCalendar || self.isMobile) return;
            buildMonthSwitch();
            updateNavigationCurrentMonth();
            buildDays();
          }
          function focusAndClose() {
            self._input.focus();
            if (window.navigator.userAgent.indexOf('MSIE') !== -1 || navigator.msMaxTouchPoints !== undefined) {
              setTimeout(self.close, 0);
            } else {
              self.close();
            }
          }
          function selectDate(e) {
            e.preventDefault();
            e.stopPropagation();
            var isSelectable = function (day) {
              return (
                day.classList &&
                day.classList.contains('flatpickr-day') &&
                !day.classList.contains('flatpickr-disabled') &&
                !day.classList.contains('notAllowed')
              );
            };
            var t = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.findParent)(
              (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e),
              isSelectable,
            );
            if (t === undefined) return;
            var target = t;
            var selectedDate = (self.latestSelectedDateObj = new Date(target.dateObj.getTime()));
            var shouldChangeMonth =
              (selectedDate.getMonth() < self.currentMonth ||
                selectedDate.getMonth() > self.currentMonth + self.config.showMonths - 1) &&
              self.config.mode !== 'range';
            self.selectedDateElem = target;
            if (self.config.mode === 'single') self.selectedDates = [selectedDate];
            else if (self.config.mode === 'multiple') {
              var selectedIndex = isDateSelected(selectedDate);
              if (selectedIndex) self.selectedDates.splice(parseInt(selectedIndex), 1);
              else self.selectedDates.push(selectedDate);
            } else if (self.config.mode === 'range') {
              if (self.selectedDates.length === 2) {
                self.clear(false, false);
              }
              self.latestSelectedDateObj = selectedDate;
              self.selectedDates.push(selectedDate);
              if (
                (0, _utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(
                  selectedDate,
                  self.selectedDates[0],
                  true,
                ) !== 0
              )
                self.selectedDates.sort(function (a, b) {
                  return a.getTime() - b.getTime();
                });
            }
            setHoursFromInputs();
            if (shouldChangeMonth) {
              var isNewYear = self.currentYear !== selectedDate.getFullYear();
              self.currentYear = selectedDate.getFullYear();
              self.currentMonth = selectedDate.getMonth();
              if (isNewYear) {
                triggerEvent('onYearChange');
                buildMonthSwitch();
              }
              triggerEvent('onMonthChange');
            }
            updateNavigationCurrentMonth();
            buildDays();
            updateValue();
            if (!shouldChangeMonth && self.config.mode !== 'range' && self.config.showMonths === 1)
              focusOnDayElem(target);
            else if (self.selectedDateElem !== undefined && self.hourElement === undefined) {
              self.selectedDateElem && self.selectedDateElem.focus();
            }
            if (self.hourElement !== undefined) self.hourElement !== undefined && self.hourElement.focus();
            if (self.config.closeOnSelect) {
              var single = self.config.mode === 'single' && !self.config.enableTime;
              var range = self.config.mode === 'range' && self.selectedDates.length === 2 && !self.config.enableTime;
              if (single || range) {
                focusAndClose();
              }
            }
            triggerChange();
          }
          var CALLBACKS = {
            locale: [setupLocale, updateWeekdays],
            showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
            minDate: [jumpToDate],
            maxDate: [jumpToDate],
            positionElement: [updatePositionElement],
            clickOpens: [
              function () {
                if (self.config.clickOpens === true) {
                  bind(self._input, 'focus', self.open);
                  bind(self._input, 'click', self.open);
                } else {
                  self._input.removeEventListener('focus', self.open);
                  self._input.removeEventListener('click', self.open);
                }
              },
            ],
          };
          function set(option, value) {
            if (option !== null && typeof option === 'object') {
              Object.assign(self.config, option);
              for (var key in option) {
                if (CALLBACKS[key] !== undefined)
                  CALLBACKS[key].forEach(function (x) {
                    return x();
                  });
              }
            } else {
              self.config[option] = value;
              if (CALLBACKS[option] !== undefined)
                CALLBACKS[option].forEach(function (x) {
                  return x();
                });
              else if (_types_options__WEBPACK_IMPORTED_MODULE_0__.HOOKS.indexOf(option) > -1)
                self.config[option] = (0, _utils__WEBPACK_IMPORTED_MODULE_2__.arrayify)(value);
            }
            self.redraw();
            updateValue(true);
          }
          function setSelectedDate(inputDate, format) {
            var dates = [];
            if (inputDate instanceof Array)
              dates = inputDate.map(function (d) {
                return self.parseDate(d, format);
              });
            else if (inputDate instanceof Date || typeof inputDate === 'number')
              dates = [self.parseDate(inputDate, format)];
            else if (typeof inputDate === 'string') {
              switch (self.config.mode) {
                case 'single':
                case 'time':
                  dates = [self.parseDate(inputDate, format)];
                  break;
                case 'multiple':
                  dates = inputDate.split(self.config.conjunction).map(function (date) {
                    return self.parseDate(date, format);
                  });
                  break;
                case 'range':
                  dates = inputDate.split(self.l10n.rangeSeparator).map(function (date) {
                    return self.parseDate(date, format);
                  });
                  break;
                default:
                  break;
              }
            } else self.config.errorHandler(new Error('Invalid date supplied: ' + JSON.stringify(inputDate)));
            self.selectedDates = self.config.allowInvalidPreload
              ? dates
              : dates.filter(function (d) {
                  return d instanceof Date && isEnabled(d, false);
                });
            if (self.config.mode === 'range')
              self.selectedDates.sort(function (a, b) {
                return a.getTime() - b.getTime();
              });
          }
          function setDate(date, triggerChange, format) {
            if (triggerChange === void 0) {
              triggerChange = false;
            }
            if (format === void 0) {
              format = self.config.dateFormat;
            }
            if ((date !== 0 && !date) || (date instanceof Array && date.length === 0)) return self.clear(triggerChange);
            setSelectedDate(date, format);
            self.latestSelectedDateObj = self.selectedDates[self.selectedDates.length - 1];
            self.redraw();
            jumpToDate(undefined, triggerChange);
            setHoursFromDate();
            if (self.selectedDates.length === 0) {
              self.clear(false);
            }
            updateValue(triggerChange);
            if (triggerChange) triggerEvent('onChange');
          }
          function parseDateRules(arr) {
            return arr
              .slice()
              .map(function (rule) {
                if (typeof rule === 'string' || typeof rule === 'number' || rule instanceof Date) {
                  return self.parseDate(rule, undefined, true);
                } else if (rule && typeof rule === 'object' && rule.from && rule.to)
                  return {
                    from: self.parseDate(rule.from, undefined),
                    to: self.parseDate(rule.to, undefined),
                  };
                return rule;
              })
              .filter(function (x) {
                return x;
              });
          }
          function setupDates() {
            self.selectedDates = [];
            self.now = self.parseDate(self.config.now) || new Date();
            var preloadedDate =
              self.config.defaultDate ||
              ((self.input.nodeName === 'INPUT' || self.input.nodeName === 'TEXTAREA') &&
              self.input.placeholder &&
              self.input.value === self.input.placeholder
                ? null
                : self.input.value);
            if (preloadedDate) setSelectedDate(preloadedDate, self.config.dateFormat);
            self._initialDate =
              self.selectedDates.length > 0
                ? self.selectedDates[0]
                : self.config.minDate && self.config.minDate.getTime() > self.now.getTime()
                  ? self.config.minDate
                  : self.config.maxDate && self.config.maxDate.getTime() < self.now.getTime()
                    ? self.config.maxDate
                    : self.now;
            self.currentYear = self._initialDate.getFullYear();
            self.currentMonth = self._initialDate.getMonth();
            if (self.selectedDates.length > 0) self.latestSelectedDateObj = self.selectedDates[0];
            if (self.config.minTime !== undefined) self.config.minTime = self.parseDate(self.config.minTime, 'H:i');
            if (self.config.maxTime !== undefined) self.config.maxTime = self.parseDate(self.config.maxTime, 'H:i');
            self.minDateHasTime =
              !!self.config.minDate &&
              (self.config.minDate.getHours() > 0 ||
                self.config.minDate.getMinutes() > 0 ||
                self.config.minDate.getSeconds() > 0);
            self.maxDateHasTime =
              !!self.config.maxDate &&
              (self.config.maxDate.getHours() > 0 ||
                self.config.maxDate.getMinutes() > 0 ||
                self.config.maxDate.getSeconds() > 0);
          }
          function setupInputs() {
            self.input = getInputElem();
            if (!self.input) {
              self.config.errorHandler(new Error('Invalid input element specified'));
              return;
            }
            self.input._type = self.input.type;
            self.input.type = 'text';
            self.input.classList.add('flatpickr-input');
            self._input = self.input;
            if (self.config.altInput) {
              self.altInput = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)(
                self.input.nodeName,
                self.config.altInputClass,
              );
              self._input = self.altInput;
              self.altInput.placeholder = self.input.placeholder;
              self.altInput.disabled = self.input.disabled;
              self.altInput.required = self.input.required;
              self.altInput.tabIndex = self.input.tabIndex;
              self.altInput.type = 'text';
              self.input.setAttribute('type', 'hidden');
              if (!self.config.static && self.input.parentNode)
                self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
            }
            if (!self.config.allowInput) self._input.setAttribute('readonly', 'readonly');
            updatePositionElement();
          }
          function updatePositionElement() {
            self._positionElement = self.config.positionElement || self._input;
          }
          function setupMobile() {
            var inputType = self.config.enableTime ? (self.config.noCalendar ? 'time' : 'datetime-local') : 'date';
            self.mobileInput = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)(
              'input',
              self.input.className + ' flatpickr-mobile',
            );
            self.mobileInput.tabIndex = 1;
            self.mobileInput.type = inputType;
            self.mobileInput.disabled = self.input.disabled;
            self.mobileInput.required = self.input.required;
            self.mobileInput.placeholder = self.input.placeholder;
            self.mobileFormatStr =
              inputType === 'datetime-local' ? 'Y-m-d\\TH:i:S' : inputType === 'date' ? 'Y-m-d' : 'H:i:S';
            if (self.selectedDates.length > 0) {
              self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(
                self.selectedDates[0],
                self.mobileFormatStr,
              );
            }
            if (self.config.minDate) self.mobileInput.min = self.formatDate(self.config.minDate, 'Y-m-d');
            if (self.config.maxDate) self.mobileInput.max = self.formatDate(self.config.maxDate, 'Y-m-d');
            if (self.input.getAttribute('step')) self.mobileInput.step = String(self.input.getAttribute('step'));
            self.input.type = 'hidden';
            if (self.altInput !== undefined) self.altInput.type = 'hidden';
            try {
              if (self.input.parentNode) self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
            } catch (_a) {}
            bind(self.mobileInput, 'change', function (e) {
              self.setDate(
                (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e).value,
                false,
                self.mobileFormatStr,
              );
              triggerEvent('onChange');
              triggerEvent('onClose');
            });
          }
          function toggle(e) {
            if (self.isOpen === true) return self.close();
            self.open(e);
          }
          function triggerEvent(event, data) {
            if (self.config === undefined) return;
            var hooks = self.config[event];
            if (hooks !== undefined && hooks.length > 0) {
              for (var i = 0; hooks[i] && i < hooks.length; i++)
                hooks[i](self.selectedDates, self.input.value, self, data);
            }
            if (event === 'onChange') {
              self.input.dispatchEvent(createEvent('change'));
              self.input.dispatchEvent(createEvent('input'));
            }
          }
          function createEvent(name) {
            var e = document.createEvent('Event');
            e.initEvent(name, true, true);
            return e;
          }
          function isDateSelected(date) {
            for (var i = 0; i < self.selectedDates.length; i++) {
              var selectedDate = self.selectedDates[i];
              if (
                selectedDate instanceof Date &&
                (0, _utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(selectedDate, date) === 0
              )
                return '' + i;
            }
            return false;
          }
          function isDateInRange(date) {
            if (self.config.mode !== 'range' || self.selectedDates.length < 2) return false;
            return (
              (0, _utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.selectedDates[0]) >= 0 &&
              (0, _utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.selectedDates[1]) <= 0
            );
          }
          function updateNavigationCurrentMonth() {
            if (self.config.noCalendar || self.isMobile || !self.monthNav) return;
            self.yearElements.forEach(function (yearElement, i) {
              var d = new Date(self.currentYear, self.currentMonth, 1);
              d.setMonth(self.currentMonth + i);
              if (self.config.showMonths > 1 || self.config.monthSelectorType === 'static') {
                self.monthElements[i].textContent =
                  (0, _utils_formatting__WEBPACK_IMPORTED_MODULE_5__.monthToStr)(
                    d.getMonth(),
                    self.config.shorthandCurrentMonth,
                    self.l10n,
                  ) + ' ';
              } else {
                self.monthsDropdownContainer.value = d.getMonth().toString();
              }
              yearElement.value = d.getFullYear().toString();
            });
            self._hidePrevMonthArrow =
              self.config.minDate !== undefined &&
              (self.currentYear === self.config.minDate.getFullYear()
                ? self.currentMonth <= self.config.minDate.getMonth()
                : self.currentYear < self.config.minDate.getFullYear());
            self._hideNextMonthArrow =
              self.config.maxDate !== undefined &&
              (self.currentYear === self.config.maxDate.getFullYear()
                ? self.currentMonth + 1 > self.config.maxDate.getMonth()
                : self.currentYear > self.config.maxDate.getFullYear());
          }
          function getDateStr(specificFormat) {
            var format = specificFormat || (self.config.altInput ? self.config.altFormat : self.config.dateFormat);
            return self.selectedDates
              .map(function (dObj) {
                return self.formatDate(dObj, format);
              })
              .filter(function (d, i, arr) {
                return self.config.mode !== 'range' || self.config.enableTime || arr.indexOf(d) === i;
              })
              .join(self.config.mode !== 'range' ? self.config.conjunction : self.l10n.rangeSeparator);
          }
          function updateValue(triggerChange) {
            if (triggerChange === void 0) {
              triggerChange = true;
            }
            if (self.mobileInput !== undefined && self.mobileFormatStr) {
              self.mobileInput.value =
                self.latestSelectedDateObj !== undefined
                  ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr)
                  : '';
            }
            self.input.value = getDateStr(self.config.dateFormat);
            if (self.altInput !== undefined) {
              self.altInput.value = getDateStr(self.config.altFormat);
            }
            if (triggerChange !== false) triggerEvent('onValueUpdate');
          }
          function onMonthNavClick(e) {
            var eventTarget = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
            var isPrevMonth = self.prevMonthNav.contains(eventTarget);
            var isNextMonth = self.nextMonthNav.contains(eventTarget);
            if (isPrevMonth || isNextMonth) {
              changeMonth(isPrevMonth ? -1 : 1);
            } else if (self.yearElements.indexOf(eventTarget) >= 0) {
              eventTarget.select();
            } else if (eventTarget.classList.contains('arrowUp')) {
              self.changeYear(self.currentYear + 1);
            } else if (eventTarget.classList.contains('arrowDown')) {
              self.changeYear(self.currentYear - 1);
            }
          }
          function timeWrapper(e) {
            e.preventDefault();
            var isKeyDown = e.type === 'keydown',
              eventTarget = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e),
              input = eventTarget;
            if (self.amPM !== undefined && eventTarget === self.amPM) {
              self.amPM.textContent =
                self.l10n.amPM[
                  (0, _utils__WEBPACK_IMPORTED_MODULE_2__.int)(self.amPM.textContent === self.l10n.amPM[0])
                ];
            }
            var min = parseFloat(input.getAttribute('min')),
              max = parseFloat(input.getAttribute('max')),
              step = parseFloat(input.getAttribute('step')),
              curValue = parseInt(input.value, 10),
              delta = e.delta || (isKeyDown ? (e.which === 38 ? 1 : -1) : 0);
            var newValue = curValue + step * delta;
            if (typeof input.value !== 'undefined' && input.value.length === 2) {
              var isHourElem = input === self.hourElement,
                isMinuteElem = input === self.minuteElement;
              if (newValue < min) {
                newValue =
                  max +
                  newValue +
                  (0, _utils__WEBPACK_IMPORTED_MODULE_2__.int)(!isHourElem) +
                  ((0, _utils__WEBPACK_IMPORTED_MODULE_2__.int)(isHourElem) &&
                    (0, _utils__WEBPACK_IMPORTED_MODULE_2__.int)(!self.amPM));
                if (isMinuteElem) incrementNumInput(undefined, -1, self.hourElement);
              } else if (newValue > max) {
                newValue =
                  input === self.hourElement
                    ? newValue - max - (0, _utils__WEBPACK_IMPORTED_MODULE_2__.int)(!self.amPM)
                    : min;
                if (isMinuteElem) incrementNumInput(undefined, 1, self.hourElement);
              }
              if (
                self.amPM &&
                isHourElem &&
                (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)
              ) {
                self.amPM.textContent =
                  self.l10n.amPM[
                    (0, _utils__WEBPACK_IMPORTED_MODULE_2__.int)(self.amPM.textContent === self.l10n.amPM[0])
                  ];
              }
              input.value = (0, _utils__WEBPACK_IMPORTED_MODULE_2__.pad)(newValue);
            }
          }
          init();
          return self;
        }
        function _flatpickr(nodeList, config) {
          var nodes = Array.prototype.slice.call(nodeList).filter(function (x) {
            return x instanceof HTMLElement;
          });
          var instances = [];
          for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            try {
              if (node.getAttribute('data-fp-omit') !== null) continue;
              if (node._flatpickr !== undefined) {
                node._flatpickr.destroy();
                node._flatpickr = undefined;
              }
              node._flatpickr = FlatpickrInstance(node, config || {});
              instances.push(node._flatpickr);
            } catch (e) {
              console.error(e);
            }
          }
          return instances.length === 1 ? instances[0] : instances;
        }
        if (
          typeof HTMLElement !== 'undefined' &&
          typeof HTMLCollection !== 'undefined' &&
          typeof NodeList !== 'undefined'
        ) {
          HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
            return _flatpickr(this, config);
          };
          HTMLElement.prototype.flatpickr = function (config) {
            return _flatpickr([this], config);
          };
        }
        var flatpickr = function (selector, config) {
          if (typeof selector === 'string') {
            return _flatpickr(window.document.querySelectorAll(selector), config);
          } else if (selector instanceof Node) {
            return _flatpickr([selector], config);
          } else {
            return _flatpickr(selector, config);
          }
        };
        flatpickr.defaultConfig = {};
        flatpickr.l10ns = {
          en: __assign({}, _l10n_default__WEBPACK_IMPORTED_MODULE_1__['default']),
          default: __assign({}, _l10n_default__WEBPACK_IMPORTED_MODULE_1__['default']),
        };
        flatpickr.localize = function (l10n) {
          flatpickr.l10ns.default = __assign(__assign({}, flatpickr.l10ns.default), l10n);
        };
        flatpickr.setDefaults = function (config) {
          flatpickr.defaultConfig = __assign(__assign({}, flatpickr.defaultConfig), config);
        };
        flatpickr.parseDate = (0, _utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateParser)({});
        flatpickr.formatDate = (0, _utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateFormatter)({});
        flatpickr.compareDates = _utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates;
        if (typeof jQuery !== 'undefined' && typeof jQuery.fn !== 'undefined') {
          jQuery.fn.flatpickr = function (config) {
            return _flatpickr(this, config);
          };
        }
        Date.prototype.fp_incr = function (days) {
          return new Date(
            this.getFullYear(),
            this.getMonth(),
            this.getDate() + (typeof days === 'string' ? parseInt(days, 10) : days),
          );
        };
        if (typeof window !== 'undefined') {
          window.flatpickr = flatpickr;
        }
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = flatpickr;

        /***/
      },

    /***/ './node_modules/flatpickr/dist/esm/l10n/default.js':
      /*!*********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/l10n/default.js ***!
  \*********************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */ english: () => /* binding */ english,
          /* harmony export */
        });
        var english = {
          weekdays: {
            shorthand: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            longhand: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          },
          months: {
            shorthand: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            longhand: [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
            ],
          },
          daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
          firstDayOfWeek: 0,
          ordinal: function (nth) {
            var s = nth % 100;
            if (s > 3 && s < 21) return 'th';
            switch (s % 10) {
              case 1:
                return 'st';
              case 2:
                return 'nd';
              case 3:
                return 'rd';
              default:
                return 'th';
            }
          },
          rangeSeparator: ' to ',
          weekAbbreviation: 'Wk',
          scrollTitle: 'Scroll to increment',
          toggleTitle: 'Click to toggle',
          amPM: ['AM', 'PM'],
          yearAriaLabel: 'Year',
          monthAriaLabel: 'Month',
          hourAriaLabel: 'Hour',
          minuteAriaLabel: 'Minute',
          time_24hr: false,
        };
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = english;

        /***/
      },

    /***/ './node_modules/flatpickr/dist/esm/types/options.js':
      /*!**********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/types/options.js ***!
  \**********************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ HOOKS: () => /* binding */ HOOKS,
          /* harmony export */ defaults: () => /* binding */ defaults,
          /* harmony export */
        });
        var HOOKS = [
          'onChange',
          'onClose',
          'onDayCreate',
          'onDestroy',
          'onKeyDown',
          'onMonthChange',
          'onOpen',
          'onParseConfig',
          'onReady',
          'onValueUpdate',
          'onYearChange',
          'onPreCalendarPosition',
        ];
        var defaults = {
          _disable: [],
          allowInput: false,
          allowInvalidPreload: false,
          altFormat: 'F j, Y',
          altInput: false,
          altInputClass: 'form-control input',
          animate: typeof window === 'object' && window.navigator.userAgent.indexOf('MSIE') === -1,
          ariaDateFormat: 'F j, Y',
          autoFillDefaultTime: true,
          clickOpens: true,
          closeOnSelect: true,
          conjunction: ', ',
          dateFormat: 'Y-m-d',
          defaultHour: 12,
          defaultMinute: 0,
          defaultSeconds: 0,
          disable: [],
          disableMobile: false,
          enableSeconds: false,
          enableTime: false,
          errorHandler: function (err) {
            return typeof console !== 'undefined' && console.warn(err);
          },
          getWeek: function (givenDate) {
            var date = new Date(givenDate.getTime());
            date.setHours(0, 0, 0, 0);
            date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
            var week1 = new Date(date.getFullYear(), 0, 4);
            return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7);
          },
          hourIncrement: 1,
          ignoredFocusElements: [],
          inline: false,
          locale: 'default',
          minuteIncrement: 5,
          mode: 'single',
          monthSelectorType: 'dropdown',
          nextArrow:
            "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
          noCalendar: false,
          now: new Date(),
          onChange: [],
          onClose: [],
          onDayCreate: [],
          onDestroy: [],
          onKeyDown: [],
          onMonthChange: [],
          onOpen: [],
          onParseConfig: [],
          onReady: [],
          onValueUpdate: [],
          onYearChange: [],
          onPreCalendarPosition: [],
          plugins: [],
          position: 'auto',
          positionElement: undefined,
          prevArrow:
            "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
          shorthandCurrentMonth: false,
          showMonths: 1,
          static: false,
          time_24hr: false,
          weekNumbers: false,
          wrap: false,
        };

        /***/
      },

    /***/ './node_modules/flatpickr/dist/esm/utils/dates.js':
      /*!********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/dates.js ***!
  \********************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ calculateSecondsSinceMidnight: () => /* binding */ calculateSecondsSinceMidnight,
          /* harmony export */ compareDates: () => /* binding */ compareDates,
          /* harmony export */ compareTimes: () => /* binding */ compareTimes,
          /* harmony export */ createDateFormatter: () => /* binding */ createDateFormatter,
          /* harmony export */ createDateParser: () => /* binding */ createDateParser,
          /* harmony export */ duration: () => /* binding */ duration,
          /* harmony export */ getDefaultHours: () => /* binding */ getDefaultHours,
          /* harmony export */ isBetween: () => /* binding */ isBetween,
          /* harmony export */ parseSeconds: () => /* binding */ parseSeconds,
          /* harmony export */
        });
        /* harmony import */ var _formatting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./formatting */ './node_modules/flatpickr/dist/esm/utils/formatting.js',
        );
        /* harmony import */ var _types_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../types/options */ './node_modules/flatpickr/dist/esm/types/options.js',
        );
        /* harmony import */ var _l10n_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../l10n/default */ './node_modules/flatpickr/dist/esm/l10n/default.js',
        );

        var createDateFormatter = function (_a) {
          var _b = _a.config,
            config = _b === void 0 ? _types_options__WEBPACK_IMPORTED_MODULE_1__.defaults : _b,
            _c = _a.l10n,
            l10n = _c === void 0 ? _l10n_default__WEBPACK_IMPORTED_MODULE_2__.english : _c,
            _d = _a.isMobile,
            isMobile = _d === void 0 ? false : _d;
          return function (dateObj, frmt, overrideLocale) {
            var locale = overrideLocale || l10n;
            if (config.formatDate !== undefined && !isMobile) {
              return config.formatDate(dateObj, frmt, locale);
            }
            return frmt
              .split('')
              .map(function (c, i, arr) {
                return _formatting__WEBPACK_IMPORTED_MODULE_0__.formats[c] && arr[i - 1] !== '\\'
                  ? _formatting__WEBPACK_IMPORTED_MODULE_0__.formats[c](dateObj, locale, config)
                  : c !== '\\'
                    ? c
                    : '';
              })
              .join('');
          };
        };
        var createDateParser = function (_a) {
          var _b = _a.config,
            config = _b === void 0 ? _types_options__WEBPACK_IMPORTED_MODULE_1__.defaults : _b,
            _c = _a.l10n,
            l10n = _c === void 0 ? _l10n_default__WEBPACK_IMPORTED_MODULE_2__.english : _c;
          return function (date, givenFormat, timeless, customLocale) {
            if (date !== 0 && !date) return undefined;
            var locale = customLocale || l10n;
            var parsedDate;
            var dateOrig = date;
            if (date instanceof Date) parsedDate = new Date(date.getTime());
            else if (typeof date !== 'string' && date.toFixed !== undefined) parsedDate = new Date(date);
            else if (typeof date === 'string') {
              var format = givenFormat || (config || _types_options__WEBPACK_IMPORTED_MODULE_1__.defaults).dateFormat;
              var datestr = String(date).trim();
              if (datestr === 'today') {
                parsedDate = new Date();
                timeless = true;
              } else if (config && config.parseDate) {
                parsedDate = config.parseDate(date, format);
              } else if (/Z$/.test(datestr) || /GMT$/.test(datestr)) {
                parsedDate = new Date(date);
              } else {
                var matched = void 0,
                  ops = [];
                for (var i = 0, matchIndex = 0, regexStr = ''; i < format.length; i++) {
                  var token = format[i];
                  var isBackSlash = token === '\\';
                  var escaped = format[i - 1] === '\\' || isBackSlash;
                  if (_formatting__WEBPACK_IMPORTED_MODULE_0__.tokenRegex[token] && !escaped) {
                    regexStr += _formatting__WEBPACK_IMPORTED_MODULE_0__.tokenRegex[token];
                    var match = new RegExp(regexStr).exec(date);
                    if (match && (matched = true)) {
                      ops[token !== 'Y' ? 'push' : 'unshift']({
                        fn: _formatting__WEBPACK_IMPORTED_MODULE_0__.revFormat[token],
                        val: match[++matchIndex],
                      });
                    }
                  } else if (!isBackSlash) regexStr += '.';
                }
                parsedDate =
                  !config || !config.noCalendar
                    ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0)
                    : new Date(new Date().setHours(0, 0, 0, 0));
                ops.forEach(function (_a) {
                  var fn = _a.fn,
                    val = _a.val;
                  return (parsedDate = fn(parsedDate, val, locale) || parsedDate);
                });
                parsedDate = matched ? parsedDate : undefined;
              }
            }
            if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
              config.errorHandler(new Error('Invalid date provided: ' + dateOrig));
              return undefined;
            }
            if (timeless === true) parsedDate.setHours(0, 0, 0, 0);
            return parsedDate;
          };
        };
        function compareDates(date1, date2, timeless) {
          if (timeless === void 0) {
            timeless = true;
          }
          if (timeless !== false) {
            return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
          }
          return date1.getTime() - date2.getTime();
        }
        function compareTimes(date1, date2) {
          return (
            3600 * (date1.getHours() - date2.getHours()) +
            60 * (date1.getMinutes() - date2.getMinutes()) +
            date1.getSeconds() -
            date2.getSeconds()
          );
        }
        var isBetween = function (ts, ts1, ts2) {
          return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
        };
        var calculateSecondsSinceMidnight = function (hours, minutes, seconds) {
          return hours * 3600 + minutes * 60 + seconds;
        };
        var parseSeconds = function (secondsSinceMidnight) {
          var hours = Math.floor(secondsSinceMidnight / 3600),
            minutes = (secondsSinceMidnight - hours * 3600) / 60;
          return [hours, minutes, secondsSinceMidnight - hours * 3600 - minutes * 60];
        };
        var duration = {
          DAY: 86400000,
        };
        function getDefaultHours(config) {
          var hours = config.defaultHour;
          var minutes = config.defaultMinute;
          var seconds = config.defaultSeconds;
          if (config.minDate !== undefined) {
            var minHour = config.minDate.getHours();
            var minMinutes = config.minDate.getMinutes();
            var minSeconds = config.minDate.getSeconds();
            if (hours < minHour) {
              hours = minHour;
            }
            if (hours === minHour && minutes < minMinutes) {
              minutes = minMinutes;
            }
            if (hours === minHour && minutes === minMinutes && seconds < minSeconds)
              seconds = config.minDate.getSeconds();
          }
          if (config.maxDate !== undefined) {
            var maxHr = config.maxDate.getHours();
            var maxMinutes = config.maxDate.getMinutes();
            hours = Math.min(hours, maxHr);
            if (hours === maxHr) minutes = Math.min(maxMinutes, minutes);
            if (hours === maxHr && minutes === maxMinutes) seconds = config.maxDate.getSeconds();
          }
          return { hours: hours, minutes: minutes, seconds: seconds };
        }

        /***/
      },

    /***/ './node_modules/flatpickr/dist/esm/utils/dom.js':
      /*!******************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/dom.js ***!
  \******************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ clearNode: () => /* binding */ clearNode,
          /* harmony export */ createElement: () => /* binding */ createElement,
          /* harmony export */ createNumberInput: () => /* binding */ createNumberInput,
          /* harmony export */ findParent: () => /* binding */ findParent,
          /* harmony export */ getEventTarget: () => /* binding */ getEventTarget,
          /* harmony export */ toggleClass: () => /* binding */ toggleClass,
          /* harmony export */
        });
        function toggleClass(elem, className, bool) {
          if (bool === true) return elem.classList.add(className);
          elem.classList.remove(className);
        }
        function createElement(tag, className, content) {
          var e = window.document.createElement(tag);
          className = className || '';
          content = content || '';
          e.className = className;
          if (content !== undefined) e.textContent = content;
          return e;
        }
        function clearNode(node) {
          while (node.firstChild) node.removeChild(node.firstChild);
        }
        function findParent(node, condition) {
          if (condition(node)) return node;
          else if (node.parentNode) return findParent(node.parentNode, condition);
          return undefined;
        }
        function createNumberInput(inputClassName, opts) {
          var wrapper = createElement('div', 'numInputWrapper'),
            numInput = createElement('input', 'numInput ' + inputClassName),
            arrowUp = createElement('span', 'arrowUp'),
            arrowDown = createElement('span', 'arrowDown');
          if (navigator.userAgent.indexOf('MSIE 9.0') === -1) {
            numInput.type = 'number';
          } else {
            numInput.type = 'text';
            numInput.pattern = '\\d*';
          }
          if (opts !== undefined) for (var key in opts) numInput.setAttribute(key, opts[key]);
          wrapper.appendChild(numInput);
          wrapper.appendChild(arrowUp);
          wrapper.appendChild(arrowDown);
          return wrapper;
        }
        function getEventTarget(event) {
          try {
            if (typeof event.composedPath === 'function') {
              var path = event.composedPath();
              return path[0];
            }
            return event.target;
          } catch (error) {
            return event.target;
          }
        }

        /***/
      },

    /***/ './node_modules/flatpickr/dist/esm/utils/formatting.js':
      /*!*************************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/formatting.js ***!
  \*************************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ formats: () => /* binding */ formats,
          /* harmony export */ monthToStr: () => /* binding */ monthToStr,
          /* harmony export */ revFormat: () => /* binding */ revFormat,
          /* harmony export */ tokenRegex: () => /* binding */ tokenRegex,
          /* harmony export */
        });
        /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../utils */ './node_modules/flatpickr/dist/esm/utils/index.js',
        );

        var doNothing = function () {
          return undefined;
        };
        var monthToStr = function (monthNumber, shorthand, locale) {
          return locale.months[shorthand ? 'shorthand' : 'longhand'][monthNumber];
        };
        var revFormat = {
          D: doNothing,
          F: function (dateObj, monthName, locale) {
            dateObj.setMonth(locale.months.longhand.indexOf(monthName));
          },
          G: function (dateObj, hour) {
            dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
          },
          H: function (dateObj, hour) {
            dateObj.setHours(parseFloat(hour));
          },
          J: function (dateObj, day) {
            dateObj.setDate(parseFloat(day));
          },
          K: function (dateObj, amPM, locale) {
            dateObj.setHours(
              (dateObj.getHours() % 12) +
                12 * (0, _utils__WEBPACK_IMPORTED_MODULE_0__.int)(new RegExp(locale.amPM[1], 'i').test(amPM)),
            );
          },
          M: function (dateObj, shortMonth, locale) {
            dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
          },
          S: function (dateObj, seconds) {
            dateObj.setSeconds(parseFloat(seconds));
          },
          U: function (_, unixSeconds) {
            return new Date(parseFloat(unixSeconds) * 1000);
          },
          W: function (dateObj, weekNum, locale) {
            var weekNumber = parseInt(weekNum);
            var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
            date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
            return date;
          },
          Y: function (dateObj, year) {
            dateObj.setFullYear(parseFloat(year));
          },
          Z: function (_, ISODate) {
            return new Date(ISODate);
          },
          d: function (dateObj, day) {
            dateObj.setDate(parseFloat(day));
          },
          h: function (dateObj, hour) {
            dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
          },
          i: function (dateObj, minutes) {
            dateObj.setMinutes(parseFloat(minutes));
          },
          j: function (dateObj, day) {
            dateObj.setDate(parseFloat(day));
          },
          l: doNothing,
          m: function (dateObj, month) {
            dateObj.setMonth(parseFloat(month) - 1);
          },
          n: function (dateObj, month) {
            dateObj.setMonth(parseFloat(month) - 1);
          },
          s: function (dateObj, seconds) {
            dateObj.setSeconds(parseFloat(seconds));
          },
          u: function (_, unixMillSeconds) {
            return new Date(parseFloat(unixMillSeconds));
          },
          w: doNothing,
          y: function (dateObj, year) {
            dateObj.setFullYear(2000 + parseFloat(year));
          },
        };
        var tokenRegex = {
          D: '',
          F: '',
          G: '(\\d\\d|\\d)',
          H: '(\\d\\d|\\d)',
          J: '(\\d\\d|\\d)\\w+',
          K: '',
          M: '',
          S: '(\\d\\d|\\d)',
          U: '(.+)',
          W: '(\\d\\d|\\d)',
          Y: '(\\d{4})',
          Z: '(.+)',
          d: '(\\d\\d|\\d)',
          h: '(\\d\\d|\\d)',
          i: '(\\d\\d|\\d)',
          j: '(\\d\\d|\\d)',
          l: '',
          m: '(\\d\\d|\\d)',
          n: '(\\d\\d|\\d)',
          s: '(\\d\\d|\\d)',
          u: '(.+)',
          w: '(\\d\\d|\\d)',
          y: '(\\d{2})',
        };
        var formats = {
          Z: function (date) {
            return date.toISOString();
          },
          D: function (date, locale, options) {
            return locale.weekdays.shorthand[formats.w(date, locale, options)];
          },
          F: function (date, locale, options) {
            return monthToStr(formats.n(date, locale, options) - 1, false, locale);
          },
          G: function (date, locale, options) {
            return (0, _utils__WEBPACK_IMPORTED_MODULE_0__.pad)(formats.h(date, locale, options));
          },
          H: function (date) {
            return (0, _utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getHours());
          },
          J: function (date, locale) {
            return locale.ordinal !== undefined ? date.getDate() + locale.ordinal(date.getDate()) : date.getDate();
          },
          K: function (date, locale) {
            return locale.amPM[(0, _utils__WEBPACK_IMPORTED_MODULE_0__.int)(date.getHours() > 11)];
          },
          M: function (date, locale) {
            return monthToStr(date.getMonth(), true, locale);
          },
          S: function (date) {
            return (0, _utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getSeconds());
          },
          U: function (date) {
            return date.getTime() / 1000;
          },
          W: function (date, _, options) {
            return options.getWeek(date);
          },
          Y: function (date) {
            return (0, _utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getFullYear(), 4);
          },
          d: function (date) {
            return (0, _utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getDate());
          },
          h: function (date) {
            return date.getHours() % 12 ? date.getHours() % 12 : 12;
          },
          i: function (date) {
            return (0, _utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getMinutes());
          },
          j: function (date) {
            return date.getDate();
          },
          l: function (date, locale) {
            return locale.weekdays.longhand[date.getDay()];
          },
          m: function (date) {
            return (0, _utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getMonth() + 1);
          },
          n: function (date) {
            return date.getMonth() + 1;
          },
          s: function (date) {
            return date.getSeconds();
          },
          u: function (date) {
            return date.getTime();
          },
          w: function (date) {
            return date.getDay();
          },
          y: function (date) {
            return String(date.getFullYear()).substring(2);
          },
        };

        /***/
      },

    /***/ './node_modules/flatpickr/dist/esm/utils/index.js':
      /*!********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/index.js ***!
  \********************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ arrayify: () => /* binding */ arrayify,
          /* harmony export */ debounce: () => /* binding */ debounce,
          /* harmony export */ int: () => /* binding */ int,
          /* harmony export */ pad: () => /* binding */ pad,
          /* harmony export */
        });
        var pad = function (number, length) {
          if (length === void 0) {
            length = 2;
          }
          return ('000' + number).slice(length * -1);
        };
        var int = function (bool) {
          return bool === true ? 1 : 0;
        };
        function debounce(fn, wait) {
          var t;
          return function () {
            var _this = this;
            var args = arguments;
            clearTimeout(t);
            t = setTimeout(function () {
              return fn.apply(_this, args);
            }, wait);
          };
        }
        var arrayify = function (obj) {
          return obj instanceof Array ? obj : [obj];
        };

        /***/
      },

    /***/ './node_modules/flatpickr/dist/esm/utils/polyfills.js':
      /*!************************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/polyfills.js ***!
  \************************************************************/
      /***/ () => {
        'use strict';

        if (typeof Object.assign !== 'function') {
          Object.assign = function (target) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
              args[_i - 1] = arguments[_i];
            }
            if (!target) {
              throw TypeError('Cannot convert undefined or null to object');
            }
            var _loop_1 = function (source) {
              if (source) {
                Object.keys(source).forEach(function (key) {
                  return (target[key] = source[key]);
                });
              }
            };
            for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
              var source = args_1[_a];
              _loop_1(source);
            }
            return target;
          };
        }

        /***/
      },

    /***/ './node_modules/flatpickr/dist/l10n/vn.js':
      /*!************************************************!*\
  !*** ./node_modules/flatpickr/dist/l10n/vn.js ***!
  \************************************************/
      /***/ function (__unused_webpack_module, exports) {
        (function (global, factory) {
          true ? factory(exports) : 0;
        })(this, function (exports) {
          'use strict';

          var fp =
            typeof window !== 'undefined' && window.flatpickr !== undefined
              ? window.flatpickr
              : {
                  l10ns: {},
                };
          var Vietnamese = {
            weekdays: {
              shorthand: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
              longhand: ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'],
            },
            months: {
              shorthand: ['Th1', 'Th2', 'Th3', 'Th4', 'Th5', 'Th6', 'Th7', 'Th8', 'Th9', 'Th10', 'Th11', 'Th12'],
              longhand: [
                'Tháng 1',
                'Tháng 2',
                'Tháng 3',
                'Tháng 4',
                'Tháng 5',
                'Tháng 6',
                'Tháng 7',
                'Tháng 8',
                'Tháng 9',
                'Tháng 10',
                'Tháng 11',
                'Tháng 12',
              ],
            },
            firstDayOfWeek: 1,
            weekAbbreviation: 'Tuần',
            amPM: ['SA', 'CH'],
            toggleTitle: 'Nhấp chuột để chuyển đổi',
            rangeSeparator: ' đến ',
          };
          fp.l10ns.vn = Vietnamese;
          var vn = fp.l10ns;

          exports.Vietnamese = Vietnamese;
          exports.default = vn;

          Object.defineProperty(exports, '__esModule', { value: true });
        });

        /***/
      },

    /***/ './node_modules/flatpickr/dist/plugins/rangePlugin.js':
      /*!************************************************************!*\
  !*** ./node_modules/flatpickr/dist/plugins/rangePlugin.js ***!
  \************************************************************/
      /***/ function (module) {
        (function (global, factory) {
          true ? (module.exports = factory()) : 0;
        })(this, function () {
          'use strict';

          /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

          function __spreadArrays() {
            for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
            for (var r = Array(s), k = 0, i = 0; i < il; i++)
              for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
            return r;
          }

          function rangePlugin(config) {
            if (config === void 0) {
              config = {};
            }
            return function (fp) {
              var dateFormat = '',
                secondInput,
                _secondInputFocused,
                _prevDates;
              var createSecondInput = function () {
                if (config.input) {
                  secondInput =
                    config.input instanceof Element ? config.input : window.document.querySelector(config.input);
                  if (!secondInput) {
                    fp.config.errorHandler(new Error('Invalid input element specified'));
                    return;
                  }
                  if (fp.config.wrap) {
                    secondInput = secondInput.querySelector('[data-input]');
                  }
                } else {
                  secondInput = fp._input.cloneNode();
                  secondInput.removeAttribute('id');
                  secondInput._flatpickr = undefined;
                }
                if (secondInput.value) {
                  var parsedDate = fp.parseDate(secondInput.value);
                  if (parsedDate) fp.selectedDates.push(parsedDate);
                }
                secondInput.setAttribute('data-fp-omit', '');
                if (fp.config.clickOpens) {
                  fp._bind(secondInput, ['focus', 'click'], function () {
                    if (fp.selectedDates[1]) {
                      fp.latestSelectedDateObj = fp.selectedDates[1];
                      fp._setHoursFromDate(fp.selectedDates[1]);
                      fp.jumpToDate(fp.selectedDates[1]);
                    }
                    _secondInputFocused = true;
                    fp.isOpen = false;
                    fp.open(undefined, config.position === 'left' ? fp._input : secondInput);
                  });
                  fp._bind(fp._input, ['focus', 'click'], function (e) {
                    e.preventDefault();
                    fp.isOpen = false;
                    fp.open();
                  });
                }
                if (fp.config.allowInput)
                  fp._bind(secondInput, 'keydown', function (e) {
                    if (e.key === 'Enter') {
                      fp.setDate([fp.selectedDates[0], secondInput.value], true, dateFormat);
                      secondInput.click();
                    }
                  });
                if (!config.input)
                  fp._input.parentNode && fp._input.parentNode.insertBefore(secondInput, fp._input.nextSibling);
              };
              var plugin = {
                onParseConfig: function () {
                  fp.config.mode = 'range';
                  dateFormat = fp.config.altInput ? fp.config.altFormat : fp.config.dateFormat;
                },
                onReady: function () {
                  createSecondInput();
                  fp.config.ignoredFocusElements.push(secondInput);
                  if (fp.config.allowInput) {
                    fp._input.removeAttribute('readonly');
                    secondInput.removeAttribute('readonly');
                  } else {
                    secondInput.setAttribute('readonly', 'readonly');
                  }
                  fp._bind(fp._input, 'focus', function () {
                    fp.latestSelectedDateObj = fp.selectedDates[0];
                    fp._setHoursFromDate(fp.selectedDates[0]);
                    _secondInputFocused = false;
                    fp.jumpToDate(fp.selectedDates[0]);
                  });
                  if (fp.config.allowInput)
                    fp._bind(fp._input, 'keydown', function (e) {
                      if (e.key === 'Enter') fp.setDate([fp._input.value, fp.selectedDates[1]], true, dateFormat);
                    });
                  fp.setDate(fp.selectedDates, false);
                  plugin.onValueUpdate(fp.selectedDates);
                  fp.loadedPlugins.push('range');
                },
                onPreCalendarPosition: function () {
                  if (_secondInputFocused) {
                    fp._positionElement = secondInput;
                    setTimeout(function () {
                      fp._positionElement = fp._input;
                    }, 0);
                  }
                },
                onChange: function () {
                  if (!fp.selectedDates.length) {
                    setTimeout(function () {
                      if (fp.selectedDates.length) return;
                      secondInput.value = '';
                      _prevDates = [];
                    }, 10);
                  }
                  if (_secondInputFocused) {
                    setTimeout(function () {
                      secondInput.focus();
                    }, 0);
                  }
                },
                onDestroy: function () {
                  if (!config.input) secondInput.parentNode && secondInput.parentNode.removeChild(secondInput);
                },
                onValueUpdate: function (selDates) {
                  var _a, _b, _c;
                  if (!secondInput) return;
                  _prevDates =
                    !_prevDates || selDates.length >= _prevDates.length ? __spreadArrays(selDates) : _prevDates;
                  if (_prevDates.length > selDates.length) {
                    var newSelectedDate = selDates[0];
                    var newDates = _secondInputFocused
                      ? [_prevDates[0], newSelectedDate]
                      : [newSelectedDate, _prevDates[1]];
                    if (newDates[0].getTime() > newDates[1].getTime()) {
                      if (_secondInputFocused) {
                        newDates[0] = newDates[1];
                      } else {
                        newDates[1] = newDates[0];
                      }
                    }
                    fp.setDate(newDates, false);
                    _prevDates = __spreadArrays(newDates);
                  }
                  (_a = fp.selectedDates.map(function (d) {
                    return fp.formatDate(d, dateFormat);
                  })),
                    (_b = _a[0]),
                    (fp._input.value = _b === void 0 ? '' : _b),
                    (_c = _a[1]),
                    (secondInput.value = _c === void 0 ? '' : _c);
                },
              };
              return plugin;
            };
          }

          return rangePlugin;
        });

        /***/
      },

    /***/ './src/opera/scripts/_component-list.js':
      /*!**********************************************!*\
  !*** ./src/opera/scripts/_component-list.js ***!
  \**********************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _accordion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./accordion.js */ './src/opera/scripts/accordion.js',
        );
        /* harmony import */ var _breadcrumb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./breadcrumb.js */ './src/opera/scripts/breadcrumb.js',
        );
        /* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./button.js */ './src/opera/scripts/button.js',
        );
        /* harmony import */ var _checkbox_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./checkbox.js */ './src/opera/scripts/checkbox.js',
        );
        /* harmony import */ var _chip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./chip.js */ './src/opera/scripts/chip.js',
        );
        /* harmony import */ var _content_navigation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./content-navigation.js */ './src/opera/scripts/content-navigation.js',
        );
        /* harmony import */ var _date_picker_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./date-picker.js */ './src/opera/scripts/date-picker.js',
        );
        /* harmony import */ var _dropdown_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./dropdown.js */ './src/opera/scripts/dropdown.js',
        );
        /* harmony import */ var _fieldset_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./fieldset.js */ './src/opera/scripts/fieldset.js',
        );
        /* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./form.js */ './src/opera/scripts/form.js',
        );
        /* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./modal.js */ './src/opera/scripts/modal.js',
        );
        /* harmony import */ var _number_input_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./number-input.js */ './src/opera/scripts/number-input.js',
        );
        /* harmony import */ var _overflow_menu_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./overflow-menu.js */ './src/opera/scripts/overflow-menu.js',
        );
        /* harmony import */ var _pagination_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./pagination.js */ './src/opera/scripts/pagination.js',
        );
        /* harmony import */ var _password_input_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./password-input.js */ './src/opera/scripts/password-input.js',
        );
        /* harmony import */ var _radio_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./radio.js */ './src/opera/scripts/radio.js',
        );
        /* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./select.js */ './src/opera/scripts/select.js',
        );
        /* harmony import */ var _spinner_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ./spinner.js */ './src/opera/scripts/spinner.js',
        );
        /* harmony import */ var _tabs_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ./tabs.js */ './src/opera/scripts/tabs.js',
        );
        /* harmony import */ var _tag_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ./tag.js */ './src/opera/scripts/tag.js',
        );
        /* harmony import */ var _text_area_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ./text-area.js */ './src/opera/scripts/text-area.js',
        );
        /* harmony import */ var _text_field_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ./text-field.js */ './src/opera/scripts/text-field.js',
        );
        /* harmony import */ var _toast_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ./toast.js */ './src/opera/scripts/toast.js',
        );
        /* harmony import */ var _toggle_group_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ./toggle-group.js */ './src/opera/scripts/toggle-group.js',
        );
        /* harmony import */ var _toggle_switch_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ./toggle-switch.js */ './src/opera/scripts/toggle-switch.js',
        );
        /* harmony import */ var _tooltip_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ./tooltip.js */ './src/opera/scripts/tooltip.js',
        );
        /* harmony import */ var _tree_navigation_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ./tree-navigation.js */ './src/opera/scripts/tree-navigation.js',
        );

        // Define the components to be made instances with their type and selector
        const components = [
          {
            type: 'accordion',
            selector: '.accordion',
            component: _accordion_js__WEBPACK_IMPORTED_MODULE_0__['default'],
          },
          {
            type: 'breadcrumb',
            selector: '.breadcrumb',
            component: _breadcrumb_js__WEBPACK_IMPORTED_MODULE_1__['default'],
          },
          { type: 'button', selector: 'button', component: _button_js__WEBPACK_IMPORTED_MODULE_2__['default'] },
          {
            type: 'checkbox',
            selector: '[data-checkbox]',
            component: _checkbox_js__WEBPACK_IMPORTED_MODULE_3__['default'],
          },
          { type: 'chip', selector: '[data-chip]', component: _chip_js__WEBPACK_IMPORTED_MODULE_4__['default'] },
          {
            type: 'content-navigation',
            selector: '[data-content-navigation]',
            component: _content_navigation_js__WEBPACK_IMPORTED_MODULE_5__['default'],
          },
          {
            type: 'date-picker',
            selector: 'input.date-picker',
            component: _date_picker_js__WEBPACK_IMPORTED_MODULE_6__['default'],
          },
          {
            type: 'dropdown',
            selector: '[data-dropdown]',
            component: _dropdown_js__WEBPACK_IMPORTED_MODULE_7__['default'],
          },
          { type: 'form', selector: 'form', component: _form_js__WEBPACK_IMPORTED_MODULE_9__['default'] },
          { type: 'modal', selector: '[data-modal]', component: _modal_js__WEBPACK_IMPORTED_MODULE_10__['default'] },
          {
            type: 'number-input',
            selector: '[data-number-input]',
            component: _number_input_js__WEBPACK_IMPORTED_MODULE_11__['default'],
          },
          {
            type: 'overflow-menu',
            selector: '.overflow-menu',
            component: _overflow_menu_js__WEBPACK_IMPORTED_MODULE_12__['default'],
          },
          {
            type: 'pagination',
            selector: '.pagination',
            component: _pagination_js__WEBPACK_IMPORTED_MODULE_13__['default'],
          },
          {
            type: 'password-input',
            selector: '[data-password-input]',
            component: _password_input_js__WEBPACK_IMPORTED_MODULE_14__['default'],
          },
          {
            type: 'radio',
            selector: 'input[type="radio"]',
            component: _radio_js__WEBPACK_IMPORTED_MODULE_15__['default'],
          },
          { type: 'fieldset', selector: 'fieldset', component: _fieldset_js__WEBPACK_IMPORTED_MODULE_8__['default'] },
          { type: 'select', selector: 'select', component: _select_js__WEBPACK_IMPORTED_MODULE_16__['default'] },
          {
            type: 'spinner',
            selector: '[data-spinner]',
            component: _spinner_js__WEBPACK_IMPORTED_MODULE_17__['default'],
          },
          { type: 'tabs', selector: '[data-tabs]', component: _tabs_js__WEBPACK_IMPORTED_MODULE_18__['default'] },
          { type: 'tag', selector: '[data-tag]', component: _tag_js__WEBPACK_IMPORTED_MODULE_19__['default'] },
          {
            type: 'text-area',
            selector: 'textarea.text-area',
            component: _text_area_js__WEBPACK_IMPORTED_MODULE_20__['default'],
          },
          {
            type: 'text-field',
            selector: '[data-text-field]',
            component: _text_field_js__WEBPACK_IMPORTED_MODULE_21__['default'],
          },
          {
            type: 'toast',
            selector: '.toast',
            component: _toast_js__WEBPACK_IMPORTED_MODULE_22__['default'],
            createMethod: _toast_js__WEBPACK_IMPORTED_MODULE_22__.createToast,
          },
          {
            type: 'toggle-group',
            selector: '.toggle-group',
            component: _toggle_group_js__WEBPACK_IMPORTED_MODULE_23__['default'],
          },
          {
            type: 'toggle-switch',
            selector: '.toggle-switch',
            component: _toggle_switch_js__WEBPACK_IMPORTED_MODULE_24__['default'],
          },
          {
            type: 'tooltip',
            selector: '.tooltip',
            component: _tooltip_js__WEBPACK_IMPORTED_MODULE_25__['default'],
            createMethod: _tooltip_js__WEBPACK_IMPORTED_MODULE_25__.createTooltip,
          },
          {
            type: 'tree-navigation',
            selector: '[data-tree-navigation]',
            component: _tree_navigation_js__WEBPACK_IMPORTED_MODULE_26__['default'],
          },
        ];
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = components;

        /***/
      },

    /***/ './src/opera/scripts/_global.js':
      /*!**************************************!*\
  !*** ./src/opera/scripts/_global.js ***!
  \**************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _instance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./_instance.js */ './src/opera/scripts/_instance.js',
        );
        /* harmony import */ var _component_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./_component-list.js */ './src/opera/scripts/_component-list.js',
        );

        // Define the Opera object in the window global scope.
        // Can pass quick methods, constructors, etc to the window.
        // For example, Opera.makeInstances(...), Opera.instantiate(...)

        window.opera = {
          components: _component_list_js__WEBPACK_IMPORTED_MODULE_1__['default'],
          makeInstances: _instance_js__WEBPACK_IMPORTED_MODULE_0__.makeInstances,
          instantiate: _instance_js__WEBPACK_IMPORTED_MODULE_0__.instantiate,
          get: _instance_js__WEBPACK_IMPORTED_MODULE_0__.get,
          getAll: _instance_js__WEBPACK_IMPORTED_MODULE_0__.getAll,
          create: _instance_js__WEBPACK_IMPORTED_MODULE_0__.create,
        };

        /***/
      },

    /***/ './src/opera/scripts/_instance.js':
      /*!****************************************!*\
  !*** ./src/opera/scripts/_instance.js ***!
  \****************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ create: () => /* binding */ create,
          /* harmony export */ get: () => /* binding */ get,
          /* harmony export */ getAll: () => /* binding */ getAll,
          /* harmony export */ instantiate: () => /* binding */ instantiate,
          /* harmony export */ makeInstances: () => /* binding */ makeInstances,
          /* harmony export */
        });
        /* harmony import */ var _utils_convertDataToObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./utils/convertDataToObject.js */ './src/opera/scripts/utils/convertDataToObject.js',
        );
        /* harmony import */ var _component_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./_component-list.js */ './src/opera/scripts/_component-list.js',
        );

        /**
         * Generates an array of instances of the given component based on a list of HTML elements.
         *
         * @param {NodeList} nodeList - The list of HTML elements to process.
         * @param {String} type - The name of the component  used to create instances.
         * @return {Array}  An array of instances of the component.
         */
        function makeInstances(nodeList, type) {
          let instances = [];
          nodeList.forEach((node) => {
            if (!node || !(node instanceof HTMLElement)) return;
            try {
              instances.push(instantiate(type, node));
            } catch (error) {
              console.log(error);
            }
          });
          return instances.length === 1 ? instances[0] : instances;
        }

        /**
         * Instantiates a new component based on the specified type and node.
         *
         * @param {type} type - The type to instantiate
         * @param {Element} node - The node to instantiate the type from
         * @return {type} The newly component with instantiated data
         */
        function instantiate(type, node) {
          _component_list_js__WEBPACK_IMPORTED_MODULE_1__['default'].forEach((element) => {
            if (element.type === type) {
              const config = (0, _utils_convertDataToObject_js__WEBPACK_IMPORTED_MODULE_0__['default'])(
                node.getAttribute(`data-${element.type}`),
              );
              return new element.component(node, config);
            }
          });
        }

        /**
         * Retrieves the element specified by the given selector.
         *
         * @param {String} selector - The CSS selector used to identify the element.
         * @return {Object | null} The element instance matching the selector, or null if not found.
         */
        function get(selector) {
          const node = document.querySelector(selector);
          return node ? node._instance : null;
        }

        /**
         * Retrieves all elements of a specified type.
         *
         * @param {type} type - The type of elements to retrieve
         * @return {Array} An array of elements matching the specified type
         */
        function getAll(type) {
          let nodeList = [];
          _component_list_js__WEBPACK_IMPORTED_MODULE_1__['default'].forEach((element) => {
            if (element.type === type) {
              nodeList = Array.from(document.querySelectorAll(element.selector)).map((node) => node._instance);
            }
          });
          return nodeList;
        }

        /**
         * Create a new element based on the specified type and configuration.
         *
         * @param {String} type - The type of the element to create
         * @param {Object} config - The configuration object for the element
         * @return {Element} The created element, or null if no matching element is found
         */
        function create(type, config) {
          const element = _component_list_js__WEBPACK_IMPORTED_MODULE_1__['default'].find(
            (elem) => elem.type === type && elem.createMethod,
          );
          if (element) {
            return element.createMethod(config);
          }
          return null;
        }

        /***/
      },

    /***/ './src/opera/scripts/accordion.js':
      /*!****************************************!*\
  !*** ./src/opera/scripts/accordion.js ***!
  \****************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _base_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./base-component.js */ './src/opera/scripts/base-component.js',
        );

        /**
         * A custom Accordion that extends the base component.
         * @extends BaseComponent
         */
        class Accordion extends _base_component_js__WEBPACK_IMPORTED_MODULE_0__['default'] {
          /**
           * Creates an instance of Accordion.
           * @param {HTMLElement} element - The DOM element to which the Accordion is attached.
           * @param {Object} [options={}] - Options for configuring the Accordion.
           */
          constructor(element, options = {}) {
            super(element, options);
            this.element = element;
            this.defaultConfigs = { type: 'multi-active' };
            this.usedConfigs = { ...this.defaultConfigs, ...options };
            this.initialState = { expanded: false };
            this.currentState = { ...this.initialState };
            this._accordionItems = Array.from(this.element.children).filter((child) =>
              child.matches('.accordion-item'),
            );
            this._activeItem = null;
            this.handlers = {
              itemButtonClick: this.#_handleItemButtonClick.bind(this),
            };
            this.currentState = new Proxy(this.currentState, {
              set: (target, key, value) => {
                if (target[key] === value) return true;

                if (key == 'expanded') {
                  target[key] = value;
                  return true;
                }
                return true;
              },
            });
            this.#_init();
          }

          /**
           * Initializes the accordion component.
           * Sets up event listeners for each accordion item's button.
           * @private
           */
          #_init() {
            this._accordionItems.forEach((item) => {
              const button = item.querySelector('button');
              const isActive = item.classList.contains('active');
              if (isActive) {
                this._activeItem = item;
              }
              if (button.classList.contains('icon-left')) {
                const iconSpan = this.#_createIcons(isActive, 'left');
                button.prepend(iconSpan);
              } else if (button.classList.contains('icon-right')) {
                const iconSpan = this.#_createIcons(isActive, 'right');
                button.appendChild(iconSpan);
              }
              const content = item.querySelector('.accordion-item-content');
              button.addEventListener('click', this.handlers.itemButtonClick.bind(this, item, button, content));
            });
          }

          /**
           * Handles the click event on an accordion item button.
           * Expands or collapses the item's content and updates the icons and active item state
           * @private
           * @param {Element} item - The accordion item element.
           * @param {Element} button - The button element within the item.
           * @param {Element} content - The content element within the item.
           */
          #_handleItemButtonClick(item, button, content) {
            const isSingleActive = this.usedConfigs.type === 'single-active';
            const expandIcon = button.querySelector('.expand-icon');
            const collapseIcon = button.querySelector('.collapse-icon');
            const isActiveItem = this._activeItem === item;

            const activeItemContent = this._activeItem?.querySelector('.accordion-item-content');
            const activeExpandIcon = this._activeItem?.querySelector('.expand-icon');
            const activeCollapseIcon = this._activeItem?.querySelector('.collapse-icon');

            if (isSingleActive) {
              if (!isActiveItem && this._activeItem) {
                activeItemContent?.classList.add('hidden');
                this._activeItem.classList.remove('active');
                activeExpandIcon?.toggleAttribute('hidden');
                activeCollapseIcon?.toggleAttribute('hidden');
              }
              content.classList.toggle('hidden');
              item.classList.toggle('active', !isActiveItem);
              expandIcon.toggleAttribute('hidden');
              collapseIcon.toggleAttribute('hidden');
              this._activeItem = isActiveItem ? null : item;
              this.currentState.expanded = !!this._activeItem;
            } else {
              content.classList.toggle('hidden');
              item.classList.toggle('active');
              expandIcon.toggleAttribute('hidden');
              collapseIcon.toggleAttribute('hidden');
              const items = this.element.querySelectorAll('.accordion-item');
              this.currentState.expanded = Array.from(items).some((item) => item.classList.contains('active'));
            }
          }

          /**
           * Creates the expand and collapse icons for each accordion item.
           * @private
           * @param {boolean} isActive - Indicates whether the item is active or not.
           * @param {string} position - The position of the icons. Either 'left' or 'right'.
           * @return {Element} The icon span element.
           */
          #_createIcons(isActive, position) {
            const iconSpan = document.createElement('span');
            iconSpan.classList.add('icon-square', 'xlarge');
            const expandIcon = document.createElement('i');
            const collapseIcon = document.createElement('i');

            if (position === 'left') {
              expandIcon.classList.add('expand-icon', 'far', 'fa-plus');
              collapseIcon.classList.add('collapse-icon', 'far', 'fa-minus');
            } else if (position === 'right') {
              expandIcon.classList.add('expand-icon', 'far', 'fa-chevron-down');
              collapseIcon.classList.add('collapse-icon', 'far', 'fa-chevron-up');
            }

            if (isActive) {
              expandIcon.setAttribute('hidden', '');
            } else {
              collapseIcon.setAttribute('hidden', '');
            }

            iconSpan.appendChild(expandIcon);
            iconSpan.appendChild(collapseIcon);
            return iconSpan;
          }
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Accordion;

        /***/
      },

    /***/ './src/opera/scripts/base-component.js':
      /*!*********************************************!*\
  !*** ./src/opera/scripts/base-component.js ***!
  \*********************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        class BaseComponent {
          /**
           * Default values for the element.
           * Should be overridden in the constructor if needed
           */
          #_value = null;

          /**
           * Constructor for the element with optional options.
           *
           * @param {element} element - the element to be constructed
           * @param {object} options - optional configurations for the element
           * @return {undefined}
           */
          constructor(element, options = {}) {
            this.element = element;
            this.element._instance = this;
            this.originInnerHTML = element.innerHTML;

            /**
             * Default configs for the element.
             * Should be overridden in the constructor if needed
             */
            this.defaultConfigs = {};

            /**
             * Used configs for the element after merging/overriding defaults with custom options.
             * * Should be overridden in the constructor if needed
             */
            this.usedConfigs = { ...this.defaultConfigs, ...options };

            /**
             * The initial state of the element.
             * Should be overridden in the constructor if needed
             */
            this.initialState = {};

            /**
             * The current state of the element, initialized with the initial state.
             * Should be overridden in the constructor if needed
             */
            this.currentState = { ...this.initialState };

            /**
             * The various html elements that make up the component
             * Writting here
             */

            /**
             * Custom events associated with the element.
             * Should be overridden in the constructor if needed
             */
            this.customEvents = {};

            /**
             * Handlers associated with the element
             * Should be overridden in the constructor if needed
             */
            this.handlers = {};

            /**
             * The observable states of the element
             * Should be overridden in the constructor if needed
             */
            this.currentState = new Proxy(this.currentState, {});

            // Call initializer in each constructor
          }

          /**
           * Sets a new state for the element and re-renders the element if needed.
           * @param {Object} state - The new state to set.
           */
          setState(state) {
            Object.entries(state).forEach(([key, value]) => {
              if (this.currentState.hasOwnProperty(key)) {
                this.currentState[key] = value;
              }
            });
          }

          /**
           * Gets the states of the element.
           * @returns {*} - The states to get.
           */
          getState(key) {
            if (!key) {
              return this.currentState;
            }
            return this.currentState[key];
          }

          /**
           * Gets the input value of the element.
           * @returns {*} - The value to get.
           */
          getValue() {
            return this.#_value;
          }

          /**
           * Sets an input value to the element.
           * @param {*} value - The value to set.
           */
          setValue(value) {}

          /**
           * Resets the element to its initial state.
           */
          reset() {
            this.setState(this.initialState);
          }

          /**
           * Shows the element.
           */
          show() {}

          /**
           * Hides the element.
           */
          hide() {}

          /**
           * Restores the initial innerHTML of the element and removes the reference to the instance.
           */
          destroy() {
            this.element.innerHTML = this.originInnerHTML;
            this.element._instance = null;
          }

          /**
           * A method for debugging purposes.
           */
          debug() {
            console.log(this);
          }
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = BaseComponent;

        /***/
      },

    /***/ './src/opera/scripts/breadcrumb.js':
      /*!*****************************************!*\
  !*** ./src/opera/scripts/breadcrumb.js ***!
  \*****************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _base_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./base-component.js */ './src/opera/scripts/base-component.js',
        );
        /* harmony import */ var _overflow_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./overflow-menu.js */ './src/opera/scripts/overflow-menu.js',
        );

        /**
         * A custom Breadcrumb that extends the base component.
         * @extends BaseComponent
         */
        class Breadcrumb extends _base_component_js__WEBPACK_IMPORTED_MODULE_0__['default'] {
          /**
           * Creates an instance of Breadcrumb.
           * @param {HTMLElement} element - The DOM element to which the Breadcrumb is attached.
           * @param {Object} [options={}] - Options for configuring the Breadcrumb.
           */
          constructor(element, options = {}) {
            super(element, options);
            this.element = element;
            this.defaultConfigs = { maxItem: 5 };
            this.usedConfigs = { ...this.defaultConfigs, ...options };
            this._breadcrumbItems = Array.from(this.element.querySelectorAll('.breadcrumb-item'));
            this.handlers = {
              maxShowItems: this.#_handleMaxShowItems.bind(this),
            };
            this.#_init();
          }

          /**
           * Initializes the component.
           * Adds the max show items handler
           * @private
           */
          #_init() {
            this.handlers.maxShowItems();
          }

          /**
           * Handles the max show items configuration. It adds an overflow menu with all items
           * except for the first and last child.
           * @private
           */
          #_handleMaxShowItems() {
            if (
              !this.usedConfigs.maxItem ||
              this.usedConfigs.maxItem < 2 ||
              this.usedConfigs.maxItem >= this._breadcrumbItems.length
            ) {
              return;
            }

            // Remove all items except the first and last child
            this.#_removeItems();

            // Create a document fragment and append the first and last items to it
            const fragment = document.createDocumentFragment();
            fragment.appendChild(this._breadcrumbItems[0]);
            fragment.appendChild(this._breadcrumbItems[this._breadcrumbItems.length - 1]);
            this.element.appendChild(fragment);

            // Add overflow menu
            const overflowItems = this._breadcrumbItems.slice(1, this._breadcrumbItems.length - 1);
            this.element.insertBefore(this.#_createOverflowMenu(overflowItems), this.element.firstChild.nextSibling);
          }

          /**
           * Creates an overflow menu element with the given nodes
           * @private
           * @param {NodeList} nodes - The nodes to be added to the overflow menu
           * @returns {HTMLLIElement} The created overflow menu element
           */
          #_createOverflowMenu(nodes = []) {
            const overflowMenu = document.createElement('li');
            overflowMenu.classList.add('overflow-menu', 'breadcrumb-item', 'p-0');

            overflowMenu.innerHTML = `
    <button class="px-1">...</button>
    <div class="overflow-menu-body bottom-right text-small min-w-fit">
    ${Array.from(nodes)
      .map((node) => node.innerHTML)
      .join(' ')}
    </div>
    `;

            const overflowMenuBody = overflowMenu.querySelector('.overflow-menu-body');
            Array.from(overflowMenuBody.children).forEach((item) => item.classList.add('overflow-menu-item'));

            new _overflow_menu_js__WEBPACK_IMPORTED_MODULE_1__['default'](overflowMenu);
            return overflowMenu;
          }

          /**
           * @private
           * Removes all items from the breadcrumb.
           */
          #_removeItems() {
            this.element.innerHTML = '';
          }
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Breadcrumb;

        /***/
      },

    /***/ './src/opera/scripts/button.js':
      /*!*************************************!*\
  !*** ./src/opera/scripts/button.js ***!
  \*************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _base_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./base-component.js */ './src/opera/scripts/base-component.js',
        );

        /**
         * A custom Button that extends the base component.
         * @extends BaseComponent
         */
        class Button extends _base_component_js__WEBPACK_IMPORTED_MODULE_0__['default'] {
          /**
           * Creates an instance of Button.
           * @param {HTMLElement} element - The DOM element to which the Button is attached.
           * @param {Object} [options={}] - Options for configuring the Button.
           */
          constructor(element, options = {}) {
            super(element, options);
            this.element = element;
          }

          /**
           * Updates the innerHTML of the element with the provided text.
           *
           * @param {string} text - The text to update the innerHTML with.
           */
          update(text) {
            this.element.innerHTML = text;
          }
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Button;

        /***/
      },

    /***/ './src/opera/scripts/checkbox.js':
      /*!***************************************!*\
  !*** ./src/opera/scripts/checkbox.js ***!
  \***************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _base_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./base-component.js */ './src/opera/scripts/base-component.js',
        );

        /**
         * A custom Checkbox that extends the base component.
         * @extends BaseComponent
         */
        class Checkbox extends _base_component_js__WEBPACK_IMPORTED_MODULE_0__['default'] {
          /**
           * Creates an instance of Checkbox.
           * @param {HTMLElement} element - The DOM element to which the Checkbox is attached.
           * @param {Object} [options={}] - Options for configuring the Checkbox.
           */
          constructor(element, options = {}) {
            super(element, options);
            this.element = element;
            this.initialState = {
              checked: this.element.checked,
              indeterminate: this.element.indeterminate,
              disabled: this.element.disabled,
              hidden: this.element.hidden,
            };
            this.currentState = { ...this.initialState };
            this.handlers = {
              change: this.#_handleChange.bind(this),
              syncWithState: this.#_syncWithStateHandler.bind(this),
            };
            this.currentState = new Proxy(this.currentState, {
              set: (target, key, value) => {
                if (target[key] === value) return true;
                this.handlers.syncWithState(target, key, value);
                return true;
              },
            });
            this.#_init();
          }

          /**
           * Sets a new state for the element and re-renders the element if needed.
           * @param {Object} state - The new state to set.
           */
          setState(state) {
            Object.entries(state).forEach(([key, value]) => {
              if (this.currentState.hasOwnProperty(key)) {
                this.currentState[key] = value;
              }
            });
          }

          /**
           * Gets the states of the element.
           * @returns {*} - The states to get.
           */
          getState(key) {
            if (!key) {
              return this.currentState;
            }
            return this.currentState[key];
          }

          /**
           * Reset the Checkbox to its initial state.
           */
          reset() {
            this.setState(this.initialState);
            this.element.dispatchEvent(new Event('change'));
          }

          /**
           * Initialise the Checkbox.
           * @private
           */
          #_init() {
            this.element.addEventListener('change', () => {
              this.handlers.change();
              this.setState({
                checked: this.element.checked,
                indeterminate: this.element.indeterminate,
              });
            });
          }
          #_syncWithStateHandler(target, key, value) {
            target[key] = value;
            this.element[key] = value;
          }

          /**
           * Handle the change event for the Checkbox.
           * @private
           */
          #_handleChange() {
            this.#_updateChildCheckboxes(this.element);
            this.#_updateParentCheckboxes(this.element);
          }

          /**
           * Update the child checkboxes of the given checkbox.
           * @param {HTMLElement} checkbox - The checkbox element.
           * @private
           */
          #_updateChildCheckboxes(checkbox) {
            const checkboxName = checkbox.getAttribute('name');
            const childCheckboxes = document.querySelectorAll(`input[data-checkbox="parent:${checkboxName}"]`);

            if (checkbox.checked) {
              // Select all child groupCheckboxes
              childCheckboxes.forEach((childCheckbox) => {
                childCheckbox.checked = true;
                childCheckbox.indeterminate = false;
                childCheckbox._instance.setState({ checked: true, indeterminate: false }); // update states

                // Recursively update children of current child checkbox
                this.#_updateChildCheckboxes(childCheckbox);
              });
            } else {
              // Unselect all child groupCheckboxes
              childCheckboxes.forEach((childCheckbox) => {
                childCheckbox.checked = false;
                childCheckbox.indeterminate = false;
                childCheckbox._instance.setState({ checked: false, indeterminate: false }); // update states

                // Recursively update children of current child checkbox
                this.#_updateChildCheckboxes(childCheckbox);
              });
            }
          }

          /**
           * Update the parent checkboxes of the given checkbox.
           * @param {HTMLElement} checkbox - The checkbox element.
           * @private
           */
          #_updateParentCheckboxes(checkbox) {
            let parentCheckboxName;
            if (checkbox.getAttribute('data-checkbox').startsWith('parent:')) {
              parentCheckboxName = checkbox.getAttribute('data-checkbox').substring(7);
            }
            const parentCheckbox = document.querySelector(`input[data-checkbox][name="${parentCheckboxName}"]`);

            // Check if there is a parent checkbox
            if (parentCheckbox) {
              const siblingCheckboxes = document.querySelectorAll(
                `input[data-checkbox="parent:${parentCheckboxName}"]`,
              );

              let allSiblingsChecked = true;
              let anySiblingsChecked = false;
              let anySiblingsIndeterminate = false;

              siblingCheckboxes.forEach((siblingCheckbox) => {
                if (siblingCheckbox.checked) {
                  anySiblingsChecked = true;
                } else if (siblingCheckbox.indeterminate) {
                  anySiblingsIndeterminate = true;
                  allSiblingsChecked = false;
                } else {
                  allSiblingsChecked = false;
                }
              });

              parentCheckbox._instance.setState({
                checked: allSiblingsChecked,
                indeterminate: !allSiblingsChecked && (anySiblingsChecked || anySiblingsIndeterminate),
              }); // update states
              parentCheckbox.checked = allSiblingsChecked;
              parentCheckbox.indeterminate = !allSiblingsChecked && (anySiblingsChecked || anySiblingsIndeterminate);
              // parentCheckbox.dispatchEvent(new Event('change'));
              // Update the parent of parentCheckbox recursively
              this.#_updateParentCheckboxes(parentCheckbox);
            }
          }
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Checkbox;

        /***/
      },

    /***/ './src/opera/scripts/chip.js':
      /*!***********************************!*\
  !*** ./src/opera/scripts/chip.js ***!
  \***********************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _base_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./base-component.js */ './src/opera/scripts/base-component.js',
        );

        /**
         * A custom Chip that extends the base component.
         * @extends BaseComponent
         */
        class Chip extends _base_component_js__WEBPACK_IMPORTED_MODULE_0__['default'] {
          /**
           * Creates an instance of Chip.
           * @param {HTMLElement} element - The DOM element to which the Chip is attached.
           * @param {Object} [options={}] - Options for configuring the Chip.
           */
          constructor(element, options = {}) {
            super(element, options);
            this.element = element;
            this.colors = ['orange', 'sky', 'violet', 'green', 'red', 'yellow', 'blue'];
            this.defaultConfigs = { color: 'orange' };
            this.usedConfigs = { ...this.defaultConfigs, ...options };
            this.handlers = { click: this.#_handleClick.bind(this) };
            this.#_init();
          }

          /**
           * Private method to initialize the Chip.
           * @private
           */
          #_init() {
            this.#_checkSelectedColor();
            this.element.addEventListener('click', this.handlers.click);
          }

          /**
           * Handles the click event on the Chip.
           * @private
           */
          #_handleClick() {
            this.element.classList.toggle(this.usedConfigs.color);
            this.element.classList.toggle('selected');
          }

          /**
           * Checks if the selected color is in the list of available colors.
           * @private
           * @return {string} Returns the selected color if it exists in the list of available colors, otherwise returns undefined.
           */
          #_checkSelectedColor() {
            if (this.colors.includes(this.usedConfigs.color)) {
              return this.usedConfigs.color;
            }
          }
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Chip;

        /***/
      },

    /***/ './src/opera/scripts/contained-label.js':
      /*!**********************************************!*\
  !*** ./src/opera/scripts/contained-label.js ***!
  \**********************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ ContainedLabel,
          /* harmony export */
        });
        /* harmony import */ var _spinner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./spinner.js */ './src/opera/scripts/spinner.js',
        );

        class ContainedLabel {
          /**
           * Constructs a new instance of the ContainedLabel class.
           * @constructor
           * @param {element} element - the element to be assigned
           * @param {text} text - the text to be assigned
           * @param {wrapper} wrapper - the wrapper to be assigned
           */
          constructor(element, text, wrapper) {
            this.element = element;
            this.initialState = {
              required: element.required,
              text: text,
            };
            this.currentState = { ...this.initialState };
            this._label = this.#_createLabel();
            this._spinner = null;
            this._wrapper = wrapper;
            this.handlers = {
              syncWithState: this.#_syncWithStateHandler.bind(this),
              focus: this.#_handleFocus.bind(this),
            };
            this.currentState = new Proxy(this.currentState, {
              set: (target, key, value) => {
                if (target[key] === value) return true;
                target[key] = value;
                this.handlers.syncWithState(target, key, value);
                return true;
              },
            });
            this.#_init();
          }

          /**
           * Handles the change event on the element and updates the label's active state.
           * @public
           */
          handleEvent() {
            if (this.element.value.length !== 0) {
              this._label.classList.add('active');
            } else {
              this._label.classList.remove('active');
            }
          }

          /**
           * Activates the contained label.
           * @public
           */
          activate() {
            this._label.classList.add('active');
          }

          /**
           * Initializes the contained label.
           * @private
           */
          #_init() {
            this.#_wrapLabelAndElement();
            this._spinner = new _spinner_js__WEBPACK_IMPORTED_MODULE_0__['default'](this._label);

            if (this.element.value.length > 0) {
              this._label.classList.add('active');
            }
            this.element.addEventListener('focus', this.handlers.focus);
          }

          /**
           * Event handler for changes in the state of the component. It handles
           * specific changes to the state and updates the component accordingly.
           * @private
           * @param {Object} target - the target object
           * @param {string} key - the key of the changed property
           * @param {any} value - the new value of the changed property
           * @return {void}
           */
          #_syncWithStateHandler(target, key, value) {
            target[key] = value;
          }

          /**
           * Creates a new label element.
           * @returns {HTMLSpanElement} The created label element.
           * @private
           */
          #_createLabel() {
            const label = document.createElement('span');
            label.classList.add('contained-label');
            if (this.currentState.required) {
              label.classList.add('required');
            }
            label.textContent = this.currentState.text;
            return label;
          }

          /**
           * Handles the focus event on the element and activates the label.
           * @private
           */
          #_handleFocus() {
            this._label.classList.add('active');
          }

          /**
           * Wraps the label and element in the wrapper.
           * @private
           */
          #_wrapLabelAndElement() {
            this._wrapper.prepend(this._label);
          }
        }

        /***/
      },

    /***/ './src/opera/scripts/content-navigation.js':
      /*!*************************************************!*\
  !*** ./src/opera/scripts/content-navigation.js ***!
  \*************************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _base_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./base-component.js */ './src/opera/scripts/base-component.js',
        );

        /**
         * A custom ContentNavigation that extends the base component.
         * @extends BaseComponent
         */
        class ContentNavigation extends _base_component_js__WEBPACK_IMPORTED_MODULE_0__['default'] {
          constructor(element, options = {}) {
            super(element, options);
            this.element = element;
            this.defaultConfigs = { target: 'main', spaceToTop: 0 };
            this.usedConfigs = { ...this.defaultConfigs, ...options };
            this._main = document.querySelector(this.usedConfigs.target);
            this._anchors = Array.from(this._main.querySelectorAll('h2 , h3'));
            this._links = [];
            this._observer = null;
            this._scrollable = this._main.clientHeight < this._main.scrollHeight;
            this.handlers = {
              addNavItemClick: this.#_addNavItemClick.bind(this),
              mainScroll: this.#_handleMainScroll.bind(this),
            };
            this.#_init();
          }

          /**
           * Initializes the component.
           * @private
           */
          #_init() {
            if (this._anchors.length > 0 && this._main) {
              this.#_createLinks();
              if (this._links.length === 0) {
                return;
              }
              this.#_createNavigation();

              // Handle UI when the component is initialized and scrolled
              // If the main element is not scrollable, we need to listen to window scroll
              this.handlers.mainScroll();
              if (this._scrollable) {
                this._main.addEventListener('scroll', this.handlers.mainScroll);
              } else {
                window.addEventListener('scroll', this.handlers.mainScroll);
              }

              // Handle navigation item click and observer resizing to update the scroll position
              this.#_createResizeObserver();
            }
          }

          /**
           * Handles the IntersectionObserver callback and updates the active link
           * based on which anchor is currently visible.
           * @param {Array} entries
           * @param {IntersectionObserver} observer
           * @private
           */
          #_handleIntersection(entries, observer) {
            entries.forEach((entry) => {
              const link = this._links.find(
                (link) => link.getAttribute('aria-label') === entry.target.getAttribute('data-specified-anchor'),
              );
              const index = this._links.indexOf(link);

              if (entry.isIntersecting) {
                //active link
                this._links.forEach((link) => link.classList.remove('active'));
                link.classList.add('active');
                // activate parent heading
                let lastLinkWithHeading;
                for (let i = index; i >= 0; i--) {
                  const link = this._links[i];
                  if (link.classList.contains('heading')) {
                    lastLinkWithHeading = link;
                    break;
                  }
                }
                lastLinkWithHeading?.classList.add('active');
              }
            });
          }

          /**
           * Creates an IntersectionObserver to track when the anchors are visible on the page.
           * @private
           */
          #_createIntersectionObserver() {
            // Create an intersection observer to track when the anchors are visible (10% from the top + added px in option)
            const viewportHeight = window.innerHeight;
            const addedPercentage = (this.usedConfigs.spaceToTop / viewportHeight) * 100;
            let percentage = -90 + addedPercentage;
            this._observer = new IntersectionObserver(
              (entries, observer) => this.#_handleIntersection(entries, observer),
              {
                root: this._scrollable ? this._main : null,
                rootMargin: `0px 0px ${percentage}% 0px`,
                threshold: 0,
              },
            );
          }

          /**
           * Creates an IntersectionObserver to track when the anchors are visible on the page.
           * @private
           */
          #_handleMainScroll() {
            if (!this._observer) {
              this.#_createIntersectionObserver();
            } else {
              this._observer.disconnect();
            }
            this._anchors.forEach((anchor) => this._observer.observe(anchor));
          }

          #_createResizeObserver() {
            const resizeObserver = new ResizeObserver(this.handlers.addNavItemClick);
            resizeObserver.observe(this._main);
          }

          /**
           * Adds click event listeners to the navigation links,
           * based on the anchors in the target element.
           * @private
           */
          #_addNavItemClick() {
            // re-create the intersection observer for scroll tracking
            this.#_createIntersectionObserver();
            const clickEvents = [];
            const anchorRects = this._anchors.map((anchor) => anchor.getBoundingClientRect());

            // Add click events with current scroll position
            this._anchors.forEach((anchor, index) => {
              const rect = anchorRects[index];
              let handleClick;

              // If the main element is scrollable, we catch the position in the main element
              // If the main element is not scrollable, we catch the position in the window
              if (this._scrollable) {
                const mainRect = this._main.getBoundingClientRect();
                const mainScrollTop = this._main.scrollTop;
                const topSpace = rect.top - mainRect.top + mainScrollTop - this.usedConfigs.spaceToTop;
                handleClick = () =>
                  this._main.scrollTo({
                    top: topSpace,
                    behavior: 'smooth',
                  });
              } else {
                const topSpace = rect.top + window.scrollY - this.usedConfigs.spaceToTop;
                handleClick = () =>
                  window.scrollTo({
                    top: topSpace,
                    behavior: 'smooth',
                  });
              }

              clickEvents.push(handleClick);
            });

            // Remove old click events, and add the new ones with new scroll positions
            this._links.forEach((button, index) => {
              const clickEvent = button.onclick;
              if (clickEvent && typeof clickEvent === 'function') {
                button.removeEventListener('click', clickEvent);
              }
              button.onclick = clickEvents[index];
            });
          }

          /**
           * Creates the navigation based on the generated links.
           * @private
           */
          #_createNavigation() {
            if (this._links.length === 0) {
              return;
            }
            const ul = document.createElement('ul');
            this._links.forEach((link) => {
              ul.appendChild(link);
            });

            this.element.appendChild(ul);
          }

          /**
           * Generates list items with anchors for each heading on the page.
           * @returns {Array}
           * @private
           */
          #_createLinks() {
            this._anchors.forEach((anchor, index) => {
              const anchorContent = anchor.textContent;
              let specifiedAnchor = `anchor-${anchorContent.toLowerCase().replace(/\s+/g, '-')}-${index}`;
              const currentSpecifiedAnchor = anchor.getAttribute('data-specified-anchor');
              currentSpecifiedAnchor
                ? (specifiedAnchor = currentSpecifiedAnchor)
                : anchor.setAttribute('data-specified-anchor', specifiedAnchor);

              const li = document.createElement('li');
              const button = document.createElement('button');
              const span = document.createElement('span');

              span.textContent = anchorContent;
              button.appendChild(span);
              li.setAttribute('aria-label', specifiedAnchor);

              li.classList.add('anchor-link');
              if (anchor.tagName === 'H2') {
                li.classList.add('heading');
              }
              li.appendChild(button);
              this._links.push(li);
            });
            return this._links;
          }
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ContentNavigation;

        /***/
      },

    /***/ './src/opera/scripts/date-picker.js':
      /*!******************************************!*\
  !*** ./src/opera/scripts/date-picker.js ***!
  \******************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _base_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./base-component.js */ './src/opera/scripts/base-component.js',
        );
        /* harmony import */ var _contained_label_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./contained-label.js */ './src/opera/scripts/contained-label.js',
        );
        /* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! flatpickr */ './node_modules/flatpickr/dist/esm/index.js',
        );
        /* harmony import */ var flatpickr_dist_plugins_rangePlugin_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! flatpickr/dist/plugins/rangePlugin.js */ './node_modules/flatpickr/dist/plugins/rangePlugin.js',
          );
        /* harmony import */ var flatpickr_dist_l10n_vn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! flatpickr/dist/l10n/vn.js */ './node_modules/flatpickr/dist/l10n/vn.js',
        );

        /**
         * A custom DatePicker that extends the base component.
         * @extends BaseComponent
         */
        class DatePicker extends _base_component_js__WEBPACK_IMPORTED_MODULE_0__['default'] {
          /**
           * Creates an instance of DatePicker.
           * @param {HTMLElement} element - The DOM element to which the DatePicker is attached.
           * @param {Object} [options={}] - Options for configuring the DatePicker.
           */
          constructor(element, options = {}) {
            super(element, options);
            this.element = element;
            this.defaultConfigs = {
              locale: flatpickr_dist_l10n_vn_js__WEBPACK_IMPORTED_MODULE_4__.Vietnamese,
              dateFormat: 'd/m/Y',
              closeOnSelect: false,
              disableMobile: true,
              allowInput: false,
              onValueUpdate: this.#_handleValueUpdate.bind(this),
              onChange: this.#_handleChange.bind(this),
              onClose: this.#_handleClose.bind(this),
            };
            this.usedConfigs = { ...this.defaultConfigs, ...this.#_generateConfigOptions(options) };
            this._secondRangeInput = null;
            this._hasDatePicker = this.element.getAttribute('data-date-picker') !== null;
            this._datePickerWrapper = this.#_createDatePickerWrapper();
            this._containedLabel = null;
            this._containedLabelText = this.element.getAttribute('data-label');
            this.#_init();
          }

          /**
           * Initializes the DatePicker component.
           * @private
           */
          #_init() {
            if (this._containedLabelText) {
              this._containedLabel = new _contained_label_js__WEBPACK_IMPORTED_MODULE_1__['default'](
                this.element,
                this._containedLabelText,
                this._datePickerWrapper,
              );
            }
            if (this._hasDatePicker) {
              (0, flatpickr__WEBPACK_IMPORTED_MODULE_2__['default'])('#' + this.element.id, this.usedConfigs);
            }
          }

          /**
           * Handles config options for the DatePicker.
           * @private
           * @param {Object} options - The configuration options.
           * @returns {Object} The options object with the plugin and mobile config.
           */
          #_generateConfigOptions(options) {
            const config = { ...options };

            if (options.enableMobile) {
              config.disableMobile = false;
            }

            if (options.time) {
              config.enableTime = true;
              config.dateFormat = 'd/m/Y H:i';
            }

            if (options.timeWithSeconds) {
              config.enableTime = true;
              config.enableSeconds = true;
              config.dateFormat = 'd/m/Y H:i:S';
            }

            if (options.rangeTo) {
              this._secondRangeInput = document.querySelector(options.rangeTo);
              config.plugins = [
                new flatpickr_dist_plugins_rangePlugin_js__WEBPACK_IMPORTED_MODULE_3__({ input: `${options.rangeTo}` }),
              ];
            }
            return config;
          }

          /**
           * Handles value updates for the DatePicker.
           * @param {Array} selectedDates - The selected dates.
           * @param {string} dateStr - The date string.
           * @param {Object} instance - The flatpickr instance.
           */
          #_handleValueUpdate(selectedDates, dateStr, instance) {
            this._secondRangeInput?._instance.containedLabelInstance?.handleEvent();
            this._containedLabel?.handleEvent();
          }

          /**
           * Handles changes to the DatePicker.
           * @param {Array} selectedDates - The selected dates.
           * @param {string} dateStr - The date string.
           * @param {Object} instance - The flatpickr instance.
           */
          #_handleChange(selectedDates, dateStr, instance) {
            if (this._secondRangeInput && selectedDates.length < 2) {
              this._secondRangeInput.value = '';
            }
            this._secondRangeInput?._instance.containedLabelInstance?.handleEvent();
            this._containedLabel?.handleEvent();
          }

          /**
           * Handles closing of the DatePicker.
           * @param {Array} selectedDates - The selected dates.
           * @param {string} dateStr - The date string.
           * @param {Object} instance - The flatpickr instance.
           */
          #_handleClose(selectedDates, dateStr, instance) {
            if (this._secondRangeInput && this._secondRangeInput.value.length === 0) {
              instance.clear(false, false);
            }
            this._secondRangeInput?._instance.containedLabelInstance?.handleEvent();
            this._containedLabel?.handleEvent();
          }

          /**
           * Creates a wrapper element for the date picker.
           * @private
           * @returns {HTMLElement} The wrapper element.
           */
          #_createDatePickerWrapper() {
            const wrapper = document.createElement('div');
            wrapper.classList.add('date-picker-wrapper');
            this.element.parentNode.insertBefore(wrapper, this.element);
            wrapper.appendChild(this.element);
            wrapper.appendChild(this.#_createCalendarButton());
            return wrapper;
          }

          /**
           * Creates a button element that triggers the date picker.
           * @private
           * @returns {HTMLElement} The button element.
           */
          #_createCalendarButton() {
            const button = document.createElement('button');
            const icon = document.createElement('i');
            button.setAttribute('type', 'button');
            button.classList.add('date-picker-calendar-button');
            icon.classList.add('far', 'fa-calendar');
            button.appendChild(icon);

            return button;
          }
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = DatePicker;

        /***/
      },

    /***/ './src/opera/scripts/dropdown.js':
      /*!***************************************!*\
  !*** ./src/opera/scripts/dropdown.js ***!
  \***************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _base_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./base-component.js */ './src/opera/scripts/base-component.js',
        );
        /* harmony import */ var _instance_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./_instance.js */ './src/opera/scripts/_instance.js',
        );

        /**
         * A custom Dropdown that extends the base component.
         * @extends BaseComponent
         */
        class Dropdown extends _base_component_js__WEBPACK_IMPORTED_MODULE_0__['default'] {
          #_value = {
            items: Array.from(this.element.querySelectorAll('.menu-item')).map((item) => item.textContent.trim()),
            selectedItems: [],
            selectedIndexes: [],
          };

          /**
           * Creates an instance of Dropdown.
           * @param {HTMLElement} element - The DOM element to which the Dropdown is attached.
           * @param {Object} [options={}] - Options for configuring the Dropdown.
           */
          constructor(element, options = {}) {
            super(element, options);
            this.element = element;
            this.defaultConfigs = {
              type: 'single-select',
            };
            this.usedConfigs = { ...this.defaultConfigs, ...options };
            this._resizeObserverTrigger = false;
            this._buttonSpanScrollWidth = 0;
            this._dropdownButton = this.element.querySelector('.dropdown-btn');
            this._dropdownMenu = this.element.querySelector('.dropdown-menu');
            this._dropdownMenuItems = Array.from(this.element.querySelectorAll('.menu-item'));
            this._dropdownButtonIcon = this.element.querySelector('.dropdown-btn-icon');
            this._dropdownPlaceholderText = this.element.querySelector('.dropdown-btn-text').textContent.trim();
            this._tags = this.#_createTags();
            this._clearButton = this.#_createClearButton();
            this.customEvents = {};
            this.handlers = {
              buttonClick: this.#_handleDropdownButtonClick.bind(this),
              clearButtonClick: this.#_handleClearButtonClick.bind(this),
              tagClearButtonClick: this.#_handleTagClearButtonClick.bind(this),
              menuItemClick: this.#_handleDropdownMenuItemClick.bind(this),
              blur: this.#_handleBlur.bind(this),
            };
            this.#_init();
          }

          /**
           * Shows the dropdown menu.
           * @public
           *
           */
          show() {
            this.#_openDropdownMenu();
          }

          /**
           * Hides the dropdown menu.
           * @public
           *
           */ hide() {
            this.#_closeDropdownMenu();
          }

          /**
           * Get the value of the dropdown.
           * @public
           * @return {any} The value of the dropdown
           */
          getValue() {
            return this.#_value;
          }

          /**
           * Updates the items in the dropdown menu and re-renders the menu items based on the provided items array.
           * @public
           * @param {array} items - The array of items to be updated in the dropdown menu.
           * @return {void}
           */
          updateItems(items) {
            items = items.map((item) => item.toString());

            this._dropdownButton.removeEventListener('click', this.handlers.buttonClick);
            this._dropdownMenuItems.forEach((item) => {
              item.removeEventListener('click', this.handlers.menuItemClick);
            });
            if (this._dropdownButton.querySelector('img')) {
              this._dropdownButton.querySelector('img').remove();
            }
            this._dropdownButton.querySelector('.dropdown-btn-text').textContent = this._dropdownPlaceholderText;
            this._dropdownButton.classList.remove('item-selected');
            this.#_value.selectedItems = [];
            this.#_setSelectedIndexes();

            this._dropdownMenu.innerHTML = `
      ${items
        .map((item) => {
          return `
            <button type="button" class="menu-item" role="menuitem">
              <span class="menu-item-text">${item}</span>
            </button>
          `;
        })
        .join('')}
    `;
            this._dropdownButton = this.element.querySelector('.dropdown-btn');
            this._dropdownMenu = this.element.querySelector('.dropdown-menu');
            this._dropdownMenuItems = this._dropdownMenu.querySelectorAll('.menu-item');
            this._dropdownPlaceholderText = this._dropdownButton.querySelector('.dropdown-btn-text').textContent.trim();
            this._dropdownButtonIcon = this._dropdownButton.querySelector('.btn.icon-only');
            this._dropdownButton.addEventListener('click', this.handlers.buttonClick);
            this._dropdownMenuItems.forEach((item) => {
              item.addEventListener('click', this.handlers.menuItemClick);
              item.appendChild(this.#_createSelectedIcon());
            });
          }

          /**
           * Initializes the dropdown component.
           * @private
           * @return {void}
           */
          #_init() {
            this._dropdownButton.addEventListener('click', this.handlers.buttonClick);
            this._dropdownMenuItems.forEach((item) => {
              item.addEventListener('click', this.handlers.menuItemClick);
              item.appendChild(this.#_createSelectedIcon());
            });
            if (this.usedConfigs.type === 'multi-select') {
              this._dropdownButton.querySelector('.dropdown-btn-text').after(this._clearButton);
              this._clearButton.addEventListener('click', this.handlers.clearButtonClick);
              this.#_createResizeObserver();
            }
          }

          /**
           * Handles the click event on the dropdown button.
           * @private
           * @return {void}
           */
          #_handleDropdownButtonClick() {
            // if menu is already open, close it, and vice versa
            if (this._dropdownMenu.hasAttribute('hidden')) {
              this.#_openDropdownMenu();
            } else {
              this.#_closeDropdownMenu();
            }
          }

          /**
           * Handles the click event on the clear button.
           * @private
           * @param {MouseEvent} event - The event object.
           * @return {void}
           */
          #_handleClearButtonClick(event) {
            event.stopPropagation();
            this.#_value.selectedItems = [];
            this.#_value.selectedIndexes = [];
            this._dropdownMenuItems.forEach((item) => {
              item.classList.remove('selected');
            });
            this._dropdownButton.querySelector('.dropdown-btn-text').innerHTML = '';
            this._dropdownButton.querySelector('.dropdown-btn-text').textContent = this._dropdownPlaceholderText;

            this._dropdownButton.classList.remove('item-selected');
            this._dropdownButton.querySelector('.dropdown-btn-text').classList.remove('multi-select');
            this._clearButton.classList.add('hidden');
          }

          /**
           * Handles the click event on the tag clear button.
           * @private
           * @param {MouseEvent} event - The event object.
           * @return {void}
           */
          #_handleTagClearButtonClick(event) {
            event.stopPropagation();
            const tag = event.target.closest('[data-tag]');
            const tagText = tag.textContent.trim();

            const matchingMenuItem = Array.from(this._dropdownMenu.querySelectorAll('.menu-item.selected span')).find(
              (span) => span.textContent.trim() === tagText,
            );
            matchingMenuItem.parentNode.classList.remove('selected');

            tag.remove();
            const isHaveSelectItems = this.#_value.selectedItems.includes(tagText);
            if (isHaveSelectItems) {
              this.#_value.selectedItems = this.#_value.selectedItems.filter((item) => item !== tagText);
            }

            if (this.#_value.selectedItems.length === 0) {
              this._clearButton.classList.add('hidden');
              this._dropdownButton.querySelector('.dropdown-btn-text').textContent = this._dropdownPlaceholderText;
              this._dropdownButton.classList.remove('item-selected');
              this._dropdownButton.querySelector('.dropdown-btn-text').classList.remove('multi-select');
            }
            this.#_setSelectedIndexes();
          }

          /**
           * Handles the click event on the dropdown menu items.
           * @private
           * @param {MouseEvent} event - The event object.
           * @return {void}
           */
          #_handleDropdownMenuItemClick(event) {
            if (this.usedConfigs.type === 'multi-select') {
              if (event.target.matches('.menu-item')) {
                const menuItemText = event.target.textContent.trim();

                if (event.target.classList.contains('selected')) {
                  event.target.classList.remove('selected');

                  const index = this.#_value.selectedItems.indexOf(menuItemText);
                  if (index > -1) {
                    this.#_value.selectedItems.splice(index, 1);
                  }
                } else {
                  event.target.classList.add('selected');
                  this.#_value.selectedItems.push(menuItemText);
                }

                if (this.#_value.selectedItems.length > 0) {
                  this._resizeObserverTrigger = false;
                  this._clearButton.classList.remove('hidden');
                  const buttonSpan = this._dropdownButton.querySelector('.dropdown-btn-text');
                  this._tags = this.#_createTags();
                  buttonSpan.innerHTML = this._tags;
                  this.#_instantiateTags();
                  if (buttonSpan.scrollWidth > buttonSpan.offsetWidth) {
                    this._resizeObserverTrigger = true;
                    this._buttonSpanScrollWidth = buttonSpan.scrollWidth;
                    buttonSpan.textContent = `${this.#_value.selectedItems.length} item(s) selected`;
                  }

                  this._dropdownButton.classList.add('item-selected');
                  this._dropdownButton.querySelector('.dropdown-btn-text').classList.add('multi-select');
                } else {
                  this._clearButton.classList.add('hidden');
                  this._dropdownButton.querySelector('.dropdown-btn-text').textContent = this._dropdownPlaceholderText;
                  this._dropdownButton.classList.remove('item-selected');
                  this._dropdownButton.querySelector('.dropdown-btn-text').classList.remove('multi-select');
                }
                this.#_setSelectedIndexes();
              }
            } else {
              if (event.target.matches('.menu-item')) {
                const menuItemText = event.target.textContent.trim();
                if (this._dropdownButton.querySelector('img')) {
                  this._dropdownButton.querySelector('img').remove();
                }

                this.#_closeDropdownMenu();
                this._dropdownButton.classList.add('item-selected');

                this._dropdownMenuItems.forEach((dropdownMenuItem) => {
                  if (event.target === dropdownMenuItem) {
                    if (dropdownMenuItem.classList.contains('selected')) {
                      dropdownMenuItem.classList.remove('selected');
                      this.#_value.selectedItems = [];
                      this._dropdownButton.querySelector('.dropdown-btn-text').textContent =
                        this._dropdownPlaceholderText;
                      this._dropdownButton.classList.remove('item-selected');
                    } else {
                      dropdownMenuItem.classList.add('selected');
                      this._dropdownButton.querySelector('.dropdown-btn-text').textContent = menuItemText;
                      this.#_value.selectedItems = [menuItemText];
                      if (event.target.closest('.menu-item').querySelector('img')) {
                        this._dropdownButton.insertBefore(
                          event.target.closest('.menu-item').querySelector('img').cloneNode(true),
                          this._dropdownButton.querySelector('.dropdown-btn-text'),
                        );
                      }
                    }
                  } else {
                    dropdownMenuItem.classList.remove('selected');
                  }
                });
                this.#_setSelectedIndexes();
              }
            }
          }

          /**
           * Handles the blur event on the dropdown component.
           * @private
           * @param {FocusEvent} event - The event object.
           * @return {void}
           */
          #_handleBlur(event) {
            //if click outside dropdown, then close the dropdown
            if (!this._dropdownButton.contains(event.target) && !this._dropdownMenu.contains(event.target)) {
              this.#_closeDropdownMenu();
            } //global method
          }

          /**
           * Opens the dropdown menu.
           * @private
           * @return {void}
           */
          #_openDropdownMenu() {
            this._dropdownMenu.removeAttribute('hidden');
            this._dropdownButton.classList.add('active');
            document.addEventListener('click', this.handlers.blur);
          }

          /**
           * Closes the dropdown menu.
           * @private
           * @return {void}
           */
          #_closeDropdownMenu() {
            this._dropdownMenu.setAttribute('hidden', '');
            this._dropdownButton.classList.remove('active');
            document.removeEventListener('click', this.handlers.blur);
          }

          /**
           * Instantiates the tags in the dropdown.
           * @private
           * @return {void}
           */
          #_instantiateTags() {
            //create tag with tag class and add event listener for removal
            const tags = this.element.querySelectorAll('[data-tag]');
            (0, _instance_js__WEBPACK_IMPORTED_MODULE_1__.makeInstances)(tags, 'tag');
            tags.forEach((tag) => {
              tag._instance._removeButton.addEventListener('click', this.handlers.tagClearButtonClick);
            });
          }

          /**
           * Sets the selectedIndexes property.
           * @private
           * @return {void}
           */
          #_setSelectedIndexes() {
            this.#_value.selectedIndexes = [];
            this._dropdownMenuItems.forEach((item, index) => {
              if (item.classList.contains('selected')) {
                this.#_value.selectedIndexes.push(index);
              }
            });
          }

          /**
           * Creates a clear button element.
           * @private
           * @return {HTMLSpanElement} The clear button element.
           */
          #_createClearButton() {
            const clearButton = document.createElement('span');
            clearButton.classList.add('dropdown-clear-btn', 'hidden');
            clearButton.innerHTML = 'Clear';
            return clearButton;
          }

          /**
           * Creates a string of tags based on the selected items.
           * @private
           * @return {string} The tags string.
           */
          #_createTags() {
            return this.#_value.selectedItems
              .map((item) => `<span data-tag="removable:true" class="tag small outlined"> ${item} </span>`)
              .join('');
          }

          /**
           * Creates a selected icon element.
           * @private
           * @return {HTMLSpanElement} The selected icon element.
           */
          #_createSelectedIcon() {
            const iconSpan = document.createElement('span');
            const icon = document.createElement('i');
            iconSpan.classList.add('selected-icon');
            icon.classList.add('far', 'fa-check');
            iconSpan.appendChild(icon);
            return iconSpan;
          }

          /**
           * Creates a resize observer to detect when the dropdown button text needs to be
           * truncated with a counter of selected items.
           * @private
           * @return {ResizeObserver} The resize observer.
           */
          #_createResizeObserver() {
            const resizeObserver = new ResizeObserver((entries) => {
              for (const entry of entries) {
                if (entry.contentBoxSize) {
                  const buttonSpan = this._dropdownButton.querySelector('.dropdown-btn-text');
                  if (buttonSpan.scrollWidth > buttonSpan.offsetWidth && !this._resizeObserverTrigger) {
                    this._resizeObserverTrigger = true;
                    this._buttonSpanScrollWidth = buttonSpan.scrollWidth;
                    buttonSpan.textContent = `${this.#_value.selectedItems.length} item(s) selected`;
                  } else if (this._buttonSpanScrollWidth <= buttonSpan.offsetWidth && this._resizeObserverTrigger) {
                    this._resizeObserverTrigger = false;
                    this._tags = this.#_createTags();
                    buttonSpan.innerHTML = this._tags;
                    this.#_instantiateTags();
                  }
                }
              }
            });
            resizeObserver.observe(this._dropdownButton);
            return resizeObserver;
          }
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Dropdown;

        /***/
      },

    /***/ './src/opera/scripts/fieldset.js':
      /*!***************************************!*\
  !*** ./src/opera/scripts/fieldset.js ***!
  \***************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _base_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./base-component.js */ './src/opera/scripts/base-component.js',
        );

        class Fieldset extends _base_component_js__WEBPACK_IMPORTED_MODULE_0__['default'] {
          /**
           * Constructs a new instance of the Fieldset class.
           * @constructor
           * @param {Element} element - the element to be passed to the constructor
           */
          constructor(element, options = {}) {
            super(element, options);
            this.element = element;
            this.initialState = {
              disabled: this.element.disabled,
              hidden: this.element.hidden,
            };
            this.currentState = { ...this.initialState };
            this.currentState = new Proxy(this.currentState, {
              set: (target, prop, value) => {
                target[prop] = value;
              },
            });
          }
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Fieldset;

        /***/
      },

    /***/ './src/opera/scripts/form.js':
      /*!***********************************!*\
  !*** ./src/opera/scripts/form.js ***!
  \***********************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _base_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./base-component.js */ './src/opera/scripts/base-component.js',
        );
        /* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./select.js */ './src/opera/scripts/select.js',
        );
        /* harmony import */ var _text_field_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./text-field.js */ './src/opera/scripts/text-field.js',
        );
        /* harmony import */ var _text_area_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./text-area.js */ './src/opera/scripts/text-area.js',
        );
        /* harmony import */ var _checkbox_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./checkbox.js */ './src/opera/scripts/checkbox.js',
        );
        /* harmony import */ var _radio_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./radio.js */ './src/opera/scripts/radio.js',
        );
        /* harmony import */ var _fieldset_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./fieldset.js */ './src/opera/scripts/fieldset.js',
        );

        class Form extends _base_component_js__WEBPACK_IMPORTED_MODULE_0__['default'] {
          /**
           * Constructs a new instance of the Form class.
           * @constructor
           * @param {Element} element - the element to be passed to the constructor
           */
          constructor(element, options = {}) {
            super(element, options);
            this.element = element;
            this.handlers = {
              formReset: this.#_handleFormReset.bind(this),
            };
            this.#_init();
          }

          /**
           * Resets the form to its initial state.
           * @public
           */
          reset() {
            this.handlers.formReset();
          }

          /**
           * Initializes the form component.
           * @private
           */
          #_init() {
            this.element.addEventListener('reset', this.handlers.formReset);
          }

          /**
           * Handles the form reset event.
           * @param {Event} event - the event object
           * @private
           */
          #_handleFormReset(event) {
            event?.preventDefault();
            const array = Array.from(this.element.elements);
            array.forEach((input) => {
              if (input._flatpickr) {
                input._flatpickr.clear();
              }
              if (input._instance) {
                if (
                  input._instance instanceof _select_js__WEBPACK_IMPORTED_MODULE_1__['default'] ||
                  input._instance instanceof _text_field_js__WEBPACK_IMPORTED_MODULE_2__['default'] ||
                  input._instance instanceof _text_area_js__WEBPACK_IMPORTED_MODULE_3__['default'] ||
                  input._instance instanceof _checkbox_js__WEBPACK_IMPORTED_MODULE_4__['default'] ||
                  input._instance instanceof _radio_js__WEBPACK_IMPORTED_MODULE_5__['default'] ||
                  input._instance instanceof _fieldset_js__WEBPACK_IMPORTED_MODULE_6__['default']
                ) {
                  input._instance.reset();
                }
              }
            });
          }
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Form;

        /***/
      },

    /***/ './src/opera/scripts/modal.js':
      /*!************************************!*\
  !*** ./src/opera/scripts/modal.js ***!
  \************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _base_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./base-component.js */ './src/opera/scripts/base-component.js',
        );

        class Modal extends _base_component_js__WEBPACK_IMPORTED_MODULE_0__['default'] {
          /**
           * Constructs a new instance of the Modal class.
           * @constructor
           * @param {Element} element - the element to be passed to the constructor
           */
          constructor(element, options = {}) {
            super(element, options);
            this.element = element;
            this.usedConfigs = { ...this.defaultConfigs, ...options };
            this.initialState = {
              shown: false,
            };
            this.currentState = { ...this.initialState };
            this._modal = document.querySelector(`#${this.usedConfigs.target}`);
            this._dialog = this._modal.querySelector('.modal-dialog');
            this._closeBtns = Array.from(this._modal.querySelectorAll('.hide-modal-btn'));
            this.handlers = {
              syncWithState: this.#_syncWithStateHandler.bind(this),
            };
            this.currentState = new Proxy(this.currentState, {
              set: (target, key, value) => {
                if (target[key] === value) return true;
                this.handlers.syncWithState(target, key, value);
                return true;
              },
            });
            this.#_init();
          }

          /**
           * Show the modal
           * @public
           */
          show() {
            this.currentState.shown = true;
          }

          /**
           * Hide the modal
           * @public
           */
          hide() {
            this.currentState.shown = false;
          }

          /**
           * Initialize the component
           * @private
           */
          #_init() {
            if (!this._modal) {
              return;
            }

            document.body.appendChild(this._modal);

            // Add show and hide event for buttons
            this.element.addEventListener('click', () => this.show());

            // Use event delegation for close buttons
            this._closeBtns.forEach((btn) => {
              btn.addEventListener('click', () => this.hide());
            });

            // Add show and hide event to the overlay
            this._modal.addEventListener('click', (e) => {
              const dialog = this._dialog;
              const isStatic = this._modal.classList.contains('modal-static');
              if (isStatic) {
                !dialog.contains(e.target) && dialog.classList.add('modal-static-animation');
                setTimeout(() => {
                  dialog.classList.remove('modal-static-animation');
                }, 250);
              } else {
                !dialog.contains(e.target) && this.hide();
              }
            });
          }

          /**
           * Handles changes to the component's current state object
           * @private
           * @param {Object} target - the object whose property changed
           * @param {string} key - the name of the property that changed
           * @param {*} value - the new value of the property
           */
          #_syncWithStateHandler(target, key, value) {
            if (key === 'shown') {
              target[key] = value;
              this.#_shownHandler(value);
            }
          }

          /**
           * Handle the change of 'shown' property
           * @private
           * @param {boolean} shownValue - the value of 'shown' property
           */
          #_shownHandler(shownValue) {
            if (shownValue) {
              this._modal.style.display = 'block';
              setTimeout(() => {
                this._modal.classList.add('active');
              }, 100);
            }

            if (!shownValue) {
              this._modal.classList.remove('active');
              setTimeout(() => {
                this._modal.style.display = 'none';
              }, 100);
            }
          }
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Modal;

        /***/
      },

    /***/ './src/opera/scripts/number-input.js':
      /*!*******************************************!*\
  !*** ./src/opera/scripts/number-input.js ***!
  \*******************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _base_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./base-component.js */ './src/opera/scripts/base-component.js',
        );
        /* harmony import */ var _contained_label_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./contained-label.js */ './src/opera/scripts/contained-label.js',
        );

        class NumberInput extends _base_component_js__WEBPACK_IMPORTED_MODULE_0__['default'] {
          /**
           * Constructs a new instance of the NumberInput class.
           * @constructor
           * @param {Element} element - the element to be passed to the constructor
           */
          constructor(element, options = {}) {
            super(element, options);
            this.element = element;
            this.defaultConfigs = { clearable: false, unit: null };
            this.usedConfigs = { ...this.defaultConfigs, ...options, unit: options.unit?.split('|') };
            this.initialState = {
              value: this.element.value,
              disabled: this.element.disabled,
              hidden: this.element.hidden,
              readOnly: this.element.readOnly,
            };
            this.currentState = { ...this.initialState };
            this._clearButton = this.#_createClearButton();
            this._numberInputUnit = this.#_createNumberInputUnit();
            this._numberInputUnitSelect = this._numberInputUnit?.querySelector('select');
            this._numberInputWrapper = this.#_createNumberInputWrapper();
            this._containedLabel = null;
            this._containedLabelText = this.element.getAttribute('data-label');
            this.handlers = {
              numberInput: this.#_handleNumberInput.bind(this),
              unitSelect: this.#_handleUnitSelect.bind(this),
              clearButtonClick: this.#_handleClearButtonClick.bind(this),
              focusOut: this.#_handleFocusOut.bind(this),
              syncWithState: this.#_syncWithStateHandler.bind(this),
            };
            this.currentState = new Proxy(this.currentState, {
              set: (target, key, value) => {
                if (target[key] === value) return true;
                target[key] = value;
                this.element[key] = value;
                this.handlers.syncWithState(target, key, value);
                return true;
              },
            });

            this.#_init();
          }

          /**
           * Returns the current state of the NumberInput component.
           * If key is passed, returns the value of that key in the state. If not, returns the whole state object.
           * @public
           * @param {string} [key] - the key in the state to return
           * @returns {(Object|string)}
           */
          getState(key) {
            if (!key) {
              return this.currentState;
            }
            return this.currentState[key];
          }

          /**
           * Sets the state of the object based on the provided state object.
           * @public
           * @param {Object} state - The state object containing key-value pairs to update the current state
           * @return {void}
           */
          setState(state) {
            Object.entries(state).forEach(([key, value]) => {
              if (this.currentState.hasOwnProperty(key)) {
                this.currentState[key] = value;
              }
            });
          }

          /**
           * Hides the component.
           * @public
           */
          hide() {
            this.setState({ hidden: true });
          }

          /**
           * Show the component by setting the state to make it visible.
           * @public
           */
          show() {
            this.setState({ hidden: false });
          }

          /**
           * Gets the value of the selected unit in the unit select.
           * @public
           * @return {string} the value of the selected unit
           */
          getSelectedUnit() {
            return this._numberInputUnitSelect.options[this._numberInputUnitSelect.selectedIndex].value;
          }

          /**
           * Reset the state to the initial state.
           * @public
           */
          reset() {
            this.setState(this.initialState);
          }

          /**
           * Set a new value for the state.
           * @public
           * @param {type} value - the new value to be set
           * @return {type}
           */
          setValue(value) {
            this.setState({ value: value });
          }

          /**
           * Initializes the NumberInput component.
           * @private
           */
          #_init() {
            this.#_setUnitSelectWidth();

            if (this._containedLabelText) {
              this._containedLabel = new _contained_label_js__WEBPACK_IMPORTED_MODULE_1__['default'](
                this.element,
                this._containedLabelText,
                this._numberInputWrapper,
              );
            }

            if (this.usedConfigs.clearable) {
              if (this.usedConfigs.unit?.length > 0) {
                this._numberInputWrapper.insertBefore(this._clearButton, this._numberInputWrapper.lastChild);
              } else {
                this._numberInputWrapper.appendChild(this._clearButton);
              }
              this.element.addEventListener('input', this.passwordInputHandler);
              this._clearButton.addEventListener('click', this.handlers.clearButtonClick);
            }

            this.#_handleVisibility();
            this.element.addEventListener('change', (e) => this.setState({ value: e.target.value }));
            this.element.addEventListener('input', this.handlers.numberInput);
            this.element.addEventListener('focusout', this.handlers.focusOut);
            this._numberInputUnitSelect?.addEventListener('change', this.handlers.unitSelect);
          }

          /**
           * Event handler for changes in the state of the component. It handles
           * specific changes to the state and updates the component accordingly.
           * @private
           * @param {Object} target - the target object
           * @param {string} key - the key of the changed property
           * @param {any} value - the new value of the changed property
           * @return {void}
           */
          #_syncWithStateHandler(target, key, value) {
            if (key === 'value') {
              this._containedLabel?.handleEvent();
            }

            if (key === 'disabled') {
              this._clearButton.disabled = this.currentState.disabled || this.currentState.readOnly;
              this._numberInputUnitSelect.disabled = this.currentState.disabled || this.currentState.readOnly;
            }

            if (key === 'hidden') {
              this.#_handleVisibility();
              this.#_checkIfParentOnlyHasHiddenChildren();
            }

            if (key === 'readOnly') {
              this._clearButton.disabled = this.currentState.readOnly || this.currentState.disabled;
              this._numberInputUnitSelect.disabled = this.currentState.readOnly || this.currentState.disabled;
            }
          }

          /**
           * Event handler for the number input. It hides or shows the clear button
           * based on whether the number input has a value or not.
           * @private
           * @return {void}
           */
          #_handleNumberInput() {
            if (this.element.value.length > 0) {
              this._clearButton.classList.remove('hidden');
            } else {
              this._clearButton.classList.add('hidden');
            }
          }

          /**
           * Event handler for the clear button click event. It empties the number input
           * and hides the clear button if the number input is not readonly or disabled.
           * @private
           * @return {void}
           */
          #_handleClearButtonClick() {
            if (this.currentState.readOnly || this.currentState.disabled) {
              return;
            }
            this.setState({ value: '' });
            this._clearButton.classList.add('hidden');
            this._containedLabel?.handleEvent();
          }

          /**
           * Event handler for the focus out event. If the related target of the event is
           * the unit select, it does nothing. If the number input has no value, it
           * empties the number input and calls the handleEvent method of the contained
           * label if it exists.
           * @private
           * @param {FocusEvent} event - the focus event
           * @return {void}
           */
          #_handleFocusOut(event) {
            if (event.relatedTarget === this._numberInputUnitSelect) {
              return;
            }
            if (this.element.value.length === 0) {
              this.setState({ value: '' });
            }
            this._containedLabel?.handleEvent();
          }

          /**
           * Event handler for the unit select change event. It sets the width of the
           * unit select to accommodate the longest option text and takes into account
           * the width of the clear button and the padding.
           * @private
           * @return {void}
           */
          #_handleUnitSelect() {
            this.#_setUnitSelectWidth();
          }

          /**
           * Sets the width of the unit select to accommodate the longest option text
           * and takes into account the width of the clear button and the padding.
           * @private
           * @return {void}
           */
          #_setUnitSelectWidth() {
            if (!this.usedConfigs.unit) return;
            const selectedOption = this._numberInputUnitSelect.options[this._numberInputUnitSelect.selectedIndex];
            const tempSpan = document.createElement('span');
            tempSpan.classList.add('w-fit', 'text-body-compact-02', 'fixed', 'top-0');
            tempSpan.textContent = selectedOption.textContent;

            document.body.appendChild(tempSpan);

            const spanWidth = tempSpan.offsetWidth;
            const paddingRightOffset = this.usedConfigs.unit.length > 1 ? 40 : 24;
            const clearButtonOffset = this.usedConfigs.unit.length > 1 ? 28 : 12;

            this._numberInputUnitSelect.style.width =
              this.usedConfigs.unit?.length > 1 ? tempSpan.offsetWidth + 28 + 'px' : tempSpan.offsetWidth + 'px';

            if (this.usedConfigs.clearable) {
              this._clearButton.style.right = spanWidth + clearButtonOffset + 'px';
              this.element.style.paddingRight = spanWidth + clearButtonOffset + 40 + 'px';
            } else {
              this.element.style.paddingRight = spanWidth + paddingRightOffset + 'px';
            }

            tempSpan.remove();
          }

          /**
           * Handles the visibility of the component.
           * @private
           * @return {void}
           */
          #_handleVisibility() {
            const hidden = this.currentState.hidden;
            this.element.hidden = hidden;
            this._numberInputWrapper.style.display = hidden ? 'none' : 'block';
          }

          /**
           * Checks if the parent element only has hidden children.
           * If it does, it adds the hidden class to the parent element.
           * Otherwise, it removes the hidden class from the parent element.
           * @private
           * @return {void}
           */
          #_checkIfParentOnlyHasHiddenChildren() {
            const parent = this._numberInputWrapper.parentElement;
            const children = parent.children;
            let allChildrenHidden = true;
            for (let i = 0; i < children.length; i++) {
              if (children[i].hidden === false) {
                allChildrenHidden = false;
              }
            }
            if (allChildrenHidden) {
              parent.classList.add('hidden');
            } else {
              parent.classList.remove('hidden');
            }
          }

          /**
           * Creates a wrapper for the number input.
           * @private
           * @return {HTMLDivElement} the wrapper element
           */
          #_createNumberInputWrapper() {
            const wrapper = document.createElement('div');
            wrapper.classList.add('number-input-wrapper');
            this.element.parentNode.insertBefore(wrapper, this.element);
            wrapper.appendChild(this.element);
            if (this.usedConfigs.unit?.length > 0) {
              wrapper.appendChild(this._numberInputUnit);
            }
            this._numberInputWrapper = wrapper;
            return wrapper;
          }

          /**
           * Creates a wrapper for the unit select.
           * @private
           * @return {HTMLDivElement} the unit select wrapper
           */
          #_createNumberInputUnit() {
            const unitBox = document.createElement('div');
            unitBox.classList.add('number-input-unit');
            const unitSelect = document.createElement('select');
            if (this.usedConfigs.unit?.length > 1) {
              unitBox.classList.add('selectable');
            } else {
              unitSelect.tabIndex = -1;
            }
            this.usedConfigs.unit?.forEach((unit) => {
              unitSelect.add(new Option(unit, unit));
            });
            unitBox.appendChild(unitSelect);
            return unitBox;
          }

          /**
           * Creates a clear button for the number input.
           * @private
           * @return {HTMLButtonElement} the clear button
           */
          #_createClearButton() {
            const button = document.createElement('button');
            const icon = document.createElement('i');
            button.setAttribute('type', 'button');
            button.classList.add('number-input-clear-button', 'hidden');
            icon.classList.add('far', 'fa-x');
            button.appendChild(icon);
            return button;
          }
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = NumberInput;

        /***/
      },

    /***/ './src/opera/scripts/overflow-menu.js':
      /*!********************************************!*\
  !*** ./src/opera/scripts/overflow-menu.js ***!
  \********************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _base_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./base-component.js */ './src/opera/scripts/base-component.js',
        );

        class OverflowMenu extends _base_component_js__WEBPACK_IMPORTED_MODULE_0__['default'] {
          #_value = {};
          /**
           * Constructs a new instance of the Modal class.
           * @constructor
           * @param {Element} element - the element to be passed to the constructor
           */
          constructor(element, options = {}) {
            super(element, options);
            this.element = element;
            this.defaultConfigs = {};
            this.usedConfigs = { ...this.defaultConfigs, ...options };
            this.initialState = {
              shown: false,
            };
            this.currentState = { ...this.initialState };
            this._body = this.element.querySelector('.overflow-menu-body');
            this._groupSelections = Array.from(this.element.querySelectorAll('.group-selection'));
            this.handlers = {
              syncWithState: this.#_syncWithStateHandler.bind(this),
            };
            this.currentState = new Proxy(this.currentState, {
              set: (target, key, value) => {
                if (target[key] === value) return true;
                this.handlers.syncWithState(target, key, value);
                return true;
              },
            });

            this.#_init();
          }

          /**
           * Returns the value of the component.
           * @public
           * @returns {Object} the value of the component
           */
          getValue() {
            return this.#_value;
          }

          /**
           * Returns the current state of the component.
           * @public
           * @param {string} key - the key of the state to be returned
           * @returns {Object} the current state of the component
           */
          getState(key) {
            if (!key) {
              return this.currentState;
            }
            return this.currentState[key];
          }

          /**
           * Sets a new state for the component and re-renders the component if needed.
           * @public
           * @param {Object} state - The new state to set.
           */
          setState(state) {
            Object.entries(state).forEach(([key, value]) => {
              if (this.currentState.hasOwnProperty(key)) {
                this.currentState[key] = value;
              }
            });
          }

          /**
           * Resets the component to its initial state.
           * @public
           */
          reset() {
            this.setState(this.initialState);
          }

          /**
           * Initializes the component.
           * @private
           */
          #_init() {
            // Early return if there is no body
            if (!this._body) {
              return;
            }

            // Cache this.usedConfigs.type
            const overflowMenuType = this.usedConfigs.type || 'toggle';

            // Add click event listener for toggle type
            if (overflowMenuType === 'toggle') {
              this.element.addEventListener('click', (e) => {
                if (this.#_checkIsSelectionItem(e)) return;
                this.currentState.shown ? this.#_deactiveMenu() : this.#_activeMenu();
              });
            }

            // Add mouseenter and mouseleave event listeners for hover type
            if (overflowMenuType === 'hover') {
              this.element.addEventListener('mouseenter', () => this.#_activeMenu());
              this.element.addEventListener('mouseleave', () => this.#_deactiveMenu());
            }

            // Add click event listener for document
            document.addEventListener('click', (e) => this.#_handleDocumentClick(e));

            // Iterate through groupSelections and handle click for each item and init value
            if (this._groupSelections.length > 0) {
              this.#_updateItemUI();
              this.#_updateValue();
              // Add click event listener
              this._groupSelections?.forEach((group) => {
                const Items = Array.from(group.children);
                Items.forEach((item) => {
                  item.addEventListener('click', () => {
                    this.#_handleClickGroupSelecttionItem(item);
                  });
                });
              });
            }
          }

          /**
           * Event handler for changes in the state of the component. It handles
           * specific changes to the state and updates the component accordingly.
           * @private
           * @param {Object} target - the target object
           * @param {string} key - the key of the changed property
           * @param {any} value - the new value of the changed property
           * @return {void}
           */
          #_syncWithStateHandler(target, key, value) {
            if (key === 'shown') {
              target[key] = value;
              this.#_handleShowMenu();
            }
          }

          /**
           * Handles the menu's state change when the menu is shown or hidden.
           * @private
           */
          #_handleShowMenu() {
            if (this.currentState.shown) {
              this.element.classList.add('active');
            } else {
              this.element.classList.remove('active');
            }
          }

          /**
           * Add click event listener to the given node for group selection items
           * @private
           * @param {HTMLElement} node - The node to add the click event listener to
           */
          #_handleClickGroupSelecttionItem(node) {
            if (node.classList.contains('selected')) {
              node.classList.remove('selected');
            } else {
              node.classList.add('selected');
            }
            this.#_updateItemUI();
            this.#_updateValue();
          }

          /**
           * Handle document click event
           * @private
           * @param {Event} event - The event object
           */
          #_handleDocumentClick(event) {
            if (this.element.classList.contains('active') && !this.element.contains(event.target)) {
              this.#_deactiveMenu();
            }
          }

          /**
           * Activates the menu.
           * @private
           */
          #_activeMenu() {
            this.currentState.shown = true;
          }

          /**
           * Deactivates the menu.
           * @private
           */
          #_deactiveMenu() {
            this.currentState.shown = false;
          }

          /**
           * Updates the value of the component based on the checked items.
           * @private
           */
          #_updateValue() {
            this._groupSelections?.forEach((group) => {
              const key = group.getAttribute('data-label');
              const Items = Array.from(group.children);
              const value = Items.map((el) =>
                el.classList.contains('selected') ? el.getAttribute('value') : null,
              ).filter((el) => el !== null);

              this.#_value = { ...this.#_value, [key]: value };
            });
          }

          /**
           * Updates the UI of the component based on the checked items.
           * @private
           */
          #_updateItemUI() {
            this._groupSelections?.forEach((group) => {
              const Items = Array.from(group.children);
              Items.forEach((item) => {
                if (item.classList.contains('selected') && !item.querySelector('.selected-icon')) {
                  item.appendChild(this.#_createSelectedIcon());
                }

                if (!item.classList.contains('selected') && item.querySelector('.selected-icon')) {
                  item.querySelector('.selected-icon').remove();
                }
              });
            });
          }

          /**
           * Check if the target element is a selection item
           * @private
           * @param {Event} event - The event object
           * @returns {boolean} True if the target element is a selection item, false otherwise
           */
          #_checkIsSelectionItem(event) {
            const targetElement = event.target;
            return (
              this._groupSelections.length && this._groupSelections.some((element) => element.contains(targetElement))
            );
          }

          /**
           * Create and returns a selected icon element.
           * @private
           * @returns {HTMLElement} The selected icon element
           */
          #_createSelectedIcon() {
            const iconSpan = document.createElement('span');
            const icon = document.createElement('i');
            iconSpan.classList.add('selected-icon');
            icon.classList.add('far', 'fa-check');
            iconSpan.appendChild(icon);
            return iconSpan;
          }
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = OverflowMenu;

        /***/
      },

    /***/ './src/opera/scripts/pagination.js':
      /*!*****************************************!*\
  !*** ./src/opera/scripts/pagination.js ***!
  \*****************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _base_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./base-component.js */ './src/opera/scripts/base-component.js',
        );
        /* harmony import */ var _overflow_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./overflow-menu.js */ './src/opera/scripts/overflow-menu.js',
        );

        /**
         * A custom component that extends the base component.
         * @extends BaseComponent
         */
        class Pagination extends _base_component_js__WEBPACK_IMPORTED_MODULE_0__['default'] {
          #_value = {};
          /**
           * Creates an instance of Pagination.
           * @param {HTMLElement} element - The DOM element to which the Pagination is attached.
           * @param {Object} [options={}] - Options for configuring the Pagination.
           */
          constructor(element, options = {}) {
            super(element);
            this.element = element;
            this.defaultConfigs = {
              currentPage: 1,
              maxItem: 0,
              isScrollable: this.element.classList.contains('scrollable'),
            };
            this.usedConfigs = { ...this.defaultConfigs, ...options };
            this._paginationItems = Array.from(this.element.querySelectorAll('[data-page]')) || [];
            this._btnPre = this.element.querySelector('.btn-pre');
            this._btnNext = this.element.querySelector('.btn-next');
            this._btnStart = this.element.querySelector('.btn-start');
            this._btnEnd = this.element.querySelector('.btn-end');
            this.#_value.currentPage = this.usedConfigs.currentPage;
            this.#_value.totalPage = this._paginationItems.length;
            this.#_value.startPage = +this._paginationItems[0].getAttribute('data-page') || 1;
            this.#_value.endPage =
              +this._paginationItems[this._paginationItems.length - 1].getAttribute('data-page') || 1;
            this.customEvents = { change: this.#_dispatchChangeEvent.bind(this) };
            this.handlers = {
              scrollablePagination: this.#_handleScrollablePagination.bind(this),
              itemClick: this.#_handleItemClick.bind(this),
              nextButtonClick: this.#_handleNextButtonClick.bind(this),
              previousButtonClick: this.#_handlePreviousButtonClick.bind(this),
              startButtonClick: this.#_handleStartButtonClick.bind(this),
              endButtonClick: this.#_handleEndButtonClick.bind(this),
              currentPageChange: this.#_setCurrentPage.bind(this),
            };
            this.#_init();
          }

          /**
           * Gets the value.
           * @public
           * @return {type} description of return value
           */
          getValue() {
            return this.#_value;
          }

          /**
           * Get the current page.
           * @public
           * @return {Number} page - The page number.
           */
          getCurrentPage() {
            return this.#_value.currentPage;
          }

          /**
           * Set the current page.
           * @public
           * @param {number} page - the page to set as current
           * @return {void}
           */
          setCurrentPage(page) {
            this.handlers.currentPageChange(page);
          }

          /**
           * Private method to initialize the component.
           * @private
           */
          #_init() {
            // Add event listener for scrollable pagination
            if (this.usedConfigs.isScrollable) {
              this.element.addEventListener('wheel', this.handlers.scrollablePagination);
            }

            // Add event listeners for pagination items
            this._paginationItems.forEach((item) => {
              item.addEventListener('click', () => this.handlers.itemClick(item));
            });

            // Add event listeners for navigation buttons
            this._btnNext?.addEventListener('click', this.handlers.nextButtonClick);
            this._btnPre?.addEventListener('click', this.handlers.previousButtonClick);
            this._btnStart?.addEventListener('click', this.handlers.startButtonClick);
            this._btnEnd?.addEventListener('click', this.handlers.endButtonClick);

            // Update UI
            this.#_updateUI();
          }

          /**
           * Handle scrollable pagination
           * @private
           * @param {Event} event - The scroll event
           */
          #_handleScrollablePagination(event) {
            event.preventDefault();
            this.element.scrollLeft += event.deltaY - 50;
          }

          /**
           * Handle item click event
           * @private
           * @param {HTMLElement} item - The clicked item
           */
          #_handleItemClick(item) {
            const clickedPage = +item.getAttribute('data-page');
            if (this.#_value.currentPage === clickedPage) return;
            this.handlers.currentPageChange(clickedPage);
          }

          /**
           * Handle the click event for the previous button
           * @private
           */
          #_handlePreviousButtonClick() {
            if (this.#_value.currentPage > this.#_value.startPage) {
              this.handlers.currentPageChange(this.#_value.currentPage - 1);
            }
          }

          /**
           * Handle the next button click
           * @private
           */
          #_handleNextButtonClick() {
            if (this.#_value.currentPage < this.#_value.endPage) {
              this.handlers.currentPageChange(this.#_value.currentPage + 1);
            }
          }

          /**
           * Handle the start button click
           * @private
           */
          #_handleStartButtonClick() {
            if (this.#_value.currentPage > this.#_value.startPage) {
              this.handlers.currentPageChange(this.#_value.startPage);
            }
          }

          /**
           * Handle the click event for the end button
           * @private
           */
          #_handleEndButtonClick() {
            if (this.#_value.currentPage < this.#_value.endPage) {
              this.handlers.currentPageChange(this.#_value.endPage);
            }
          }

          /**
           * Handles the focus on a tag
           * @private
           */
          #_handleFocusATag() {
            const currentPageElement = this.element.querySelector(`[data-page="${this.#_value.currentPage}"]`);
            if (currentPageElement && currentPageElement.tagName.toLowerCase() === 'a') {
              currentPageElement.click(); // Click on the current page element if it is an 'a' tag
            } else {
              const aTag = currentPageElement?.querySelector('a');
              const href = aTag?.getAttribute('href');
              if (aTag && href) {
                aTag.click(); // Click on the 'a' tag if it exists and has a valid href attribute
              }
            }
          }

          /**
           * Handle the maximum show item
           * @private
           * @param {number} currentPage - The current page number
           */
          #_handleMaxShowItem(currentPage = 0) {
            if (
              this.usedConfigs.maxItem > this.#_value.totalPage ||
              this.usedConfigs.maxItem <= 5 ||
              this.usedConfigs.isScrollable
            )
              return;

            const activeItemIndex = this.#_caculateActiveItemIndex(currentPage);
            this.#_clearAndAddButtons();
            this.#_addActiveItemAndAdjacentItems(activeItemIndex);
            this.#_addOverflowMenu(activeItemIndex);
          }

          /**
           * Set the current page.
           * @private
           * @param {number} page - The page number.
           */
          #_setCurrentPage(page) {
            if (!page || isNaN(page)) return;

            if (page < this.#_value.startPage) {
              page = this.#_value.startPage;
            }
            if (page > this.#_value.endPage) {
              page = this.#_value.endPage;
            }

            this.#_value.currentPage = +page;
            this.customEvents.change();
            this.#_updateUI();
            this.#_handleFocusATag();
          }

          /**
           * Update the UI by calling the necessary helper functions
           * @private
           */
          #_updateUI() {
            this.#_updateCurrentPageStatus(); // Update the current page status
            this.#_updateButtonsStatus(); // Update the buttons status
            this.usedConfigs.maxItem && this.#_handleMaxShowItem(this.#_value.currentPage); // Handle maximum show item based on the current page
          }

          /**
           * Update the status of the current page by adding or removing the 'active' class from pagination items.
           * @private
           */
          #_updateCurrentPageStatus() {
            this._paginationItems.forEach((item) => {
              if (this.#_value.currentPage === +item.getAttribute('data-page')) {
                item.classList.add('active');
              } else {
                item.classList.remove('active');
              }
            });
          }

          /**
           * Update the status of buttons based on the current page
           * @private
           */
          #_updateButtonsStatus() {
            /**
             * Disable an array of buttons
             * @param {Array} btns - Array of buttons to be disabled
             */
            const disableBtns = (btns) => btns.forEach((btn) => btn?.setAttribute('disabled', ''));

            /**
             * Enable an array of buttons
             * @param {Array} btns - Array of buttons to be enabled
             */
            const enableBtns = (btns) => btns.forEach((btn) => btn?.removeAttribute('disabled'));

            if (this.#_value.currentPage == this.#_value.startPage) {
              disableBtns([this._btnPre, this._btnStart]);
              enableBtns([this._btnNext, this._btnEnd]);
            } else if (this.#_value.currentPage == this.#_value.endPage) {
              disableBtns([this._btnNext, this._btnEnd]);
              enableBtns([this._btnPre, this._btnStart]);
            } else {
              enableBtns([this._btnPre, this._btnStart, this._btnNext, this._btnEnd]);
            }
          }

          /**
           * Calculate the active item index based on the current page
           * @private
           * @param {number} currentPage - The current page number
           * @returns {number} - The active item index
           */
          #_caculateActiveItemIndex(currentPage) {
            if (currentPage && currentPage > 3 && currentPage < this.#_value.endPage - 2) {
              return currentPage - 1; //Because index less than currentpage 1 unit, we need -1
            } else if (currentPage <= 3) {
              return 2; //3-1
            } else if (currentPage >= this.#_value.endPage - 2) {
              return this.#_value.endPage - 3; //-2-1
            } else {
              return Math.floor(this.#_value.totalPage / 2) - 1;
            }
          }

          /**
           * Clears the element and adds pagination buttons.
           * @private
           */
          #_clearAndAddButtons() {
            this.element.innerHTML = ''; //clear all
            this.element.prepend(this._paginationItems[0]); //add first page
            this.element.append(this._paginationItems[this.#_value.totalPage - 1]); // add last page

            /**
             * Creates a list item and wraps the button inside it.
             * @param {Element} button - The button to wrap
             * @returns {Element} The list item containing the button
             */
            const createLiAndWrapButton = (button) => {
              if (!button) return null;
              const li = document.createElement('li');
              li.classList.add('pagination-item');
              li.appendChild(button);
              return li;
            };

            this.element.prepend(createLiAndWrapButton(this._btnStart), createLiAndWrapButton(this._btnPre));
            this.element.append(createLiAndWrapButton(this._btnNext), createLiAndWrapButton(this._btnEnd));
          }

          /**
           * Add the active item and its adjacent items to the DOM
           * @private
           * @param {number} activeItemIndex - The index of the active item
           */
          #_addActiveItemAndAdjacentItems(activeItemIndex) {
            const termItems = this.element.querySelectorAll('[data-page]');
            termItems[0].insertAdjacentElement('afterend', this._paginationItems[activeItemIndex]); // [active]
            termItems[0].insertAdjacentElement('afterend', this._paginationItems[activeItemIndex - 1]); // [active - 1 ,active]
            termItems[termItems.length - 1].insertAdjacentElement(
              'beforebegin',
              this._paginationItems[activeItemIndex + 1],
            ); // [active - 1 ,active, acive + 1]
          }

          /**
           * Create an overflow menu element with the given nodes
           * @private
           * @param {Array} nodes - The nodes to be added to the overflow menu
           * @returns {HTMLElement} - The created overflow menu element
           */
          #_createOverflowMenu(nodes = []) {
            const overflowMenu = document.createElement('li');
            overflowMenu.classList.add('overflow-menu', 'pagination-item');
            overflowMenu.innerHTML = `
    <button class="px-1">...</button>
    <div class="overflow-menu-body">
    </div>
    `;
            nodes.forEach((item) => overflowMenu.querySelector('.overflow-menu-body').append(item));
            const overflowMenuBody = overflowMenu.querySelector('.overflow-menu-body');
            Array.from(overflowMenuBody.children).forEach((item) => {
              item.classList.add('overflow-menu-item');
              // add click event again because it was removed in when cloneNode
              item.addEventListener('click', () => {
                this.#_handleItemClick(item);
              });
            });

            new _overflow_menu_js__WEBPACK_IMPORTED_MODULE_1__['default'](overflowMenu);
            return overflowMenu;
          }

          /**
           * Adds an overflow menu to the pagination items based on the active item index
           * @private
           * @param {number} activeItemIndex - The index of the active item
           */
          #_addOverflowMenu(activeItemIndex) {
            const termItems = this.element.querySelectorAll('[data-page]');
            const preOverflowItems = this._paginationItems
              .slice(1, activeItemIndex - 1)
              .map((item) => item.cloneNode(true));
            const nextOverflowItems = this._paginationItems
              .slice(activeItemIndex + 2, this._paginationItems.length - 1)
              .map((item) => item.cloneNode(true));

            if (preOverflowItems.length > 1) {
              termItems[0].insertAdjacentElement('afterend', this.#_createOverflowMenu(preOverflowItems));
            } else if (preOverflowItems.length == 1) {
              //if only one item, don't need to create overflow menu
              preOverflowItems[0].addEventListener('click', () => this.#_handleItemClick(preOverflowItems[0]));
              termItems[0].insertAdjacentElement('afterend', preOverflowItems[0]);
            }

            if (nextOverflowItems.length > 1) {
              termItems[termItems.length - 1].insertAdjacentElement(
                'beforebegin',
                this.#_createOverflowMenu(nextOverflowItems),
              );
            } else if (nextOverflowItems.length == 1) {
              //if only one item, don't need to create overflow menu
              nextOverflowItems[0].addEventListener('click', () => this.#_handleItemClick(nextOverflowItems[0]));
              termItems[termItems.length - 1].insertAdjacentElement('beforebegin', nextOverflowItems[0]);
            }
          }

          /**
           * Dispatch custom:paginationChange event when currentPage is changed
           * @private
           * @event custom:paginationChange
           * @type {CustomEvent}
           * @property {object} detail - Custom event detail
           * @property {string} detail.message - Custom event message
           * @property {number} detail.currentPage - The current page number
           */
          #_dispatchChangeEvent() {
            this.element.dispatchEvent(
              new CustomEvent('custom:change', {
                bubbles: true,
                cancelable: true,
                detail: {
                  message: 'Pagination is changed',
                  currentPage: +this.#_value.currentPage,
                },
              }),
            );
          }
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Pagination;

        /***/
      },

    /***/ './src/opera/scripts/password-input.js':
      /*!*********************************************!*\
  !*** ./src/opera/scripts/password-input.js ***!
  \*********************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _base_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./base-component.js */ './src/opera/scripts/base-component.js',
        );
        /* harmony import */ var _contained_label_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./contained-label.js */ './src/opera/scripts/contained-label.js',
        );

        class PasswordInput extends _base_component_js__WEBPACK_IMPORTED_MODULE_0__['default'] {
          /**
           * Constructs a new instance of the PasswordInput class.
           * @constructor
           * @param {Element} element - the element to be passed to the constructor
           */
          constructor(element, options = {}) {
            super(element, options);
            this.element = element;
            this.usedConfigs = { ...this.defaultConfigs, ...options };
            this.initialState = {
              value: this.element.value,
              mask: true,
              disabled: this.element.disabled,
              hidden: this.element.hidden,
              readOnly: this.element.readOnly,
            };
            this.currentState = { ...this.initialState };
            this._clearButton = this.#_createClearButton();
            this._passwordInputEyeButton = this.#_createEyeButton();
            this._passwordInputWrapper = this.#_createPasswordInputWrapper();
            this._containedLabel = null;
            this._containedLabelText = this.element.getAttribute('data-label');
            this.handlers = {
              eyeButtonClick: this.#_handleEyeButtonClick.bind(this),
              clearButtonClick: this.#_handleClearButtonClick.bind(this),
              inputPassword: this.#_handleInputPassword.bind(this),
              focusOut: this.#_handleFocusOut.bind(this),
              syncWithState: this.#_syncWithStateHandler.bind(this),
            };
            this.currentState = new Proxy(this.currentState, {
              set: (target, key, value) => {
                if (target[key] === value) return true;
                target[key] = value;
                this.element[key] = value;
                this.handlers.syncWithState(target, key, value);
                return true;
              },
            });
            this.#_init();
          }

          /**
           * Returns the current state of the PasswordInput component.
           * If key is passed, returns the value of that key in the state. If not, returns the whole state object.
           * @public
           * @param {string} [key] - the key in the state to return
           * @returns {(Object|string)}
           */
          getState(key) {
            if (!key) {
              return this.currentState;
            }
            return this.currentState[key];
          }

          /**
           * Sets the state of the object based on the provided state object.
           * @public
           * @param {Object} state - The state object containing key-value pairs to update the current state
           * @return {void}
           */
          setState(state) {
            Object.entries(state).forEach(([key, value]) => {
              if (this.currentState.hasOwnProperty(key)) {
                this.currentState[key] = value;
              }
            });
          }

          /**
           * @public
           * Hides the component.
           */
          hide() {
            this.setState({ hidden: true });
          }

          /**
           * Show the component by setting the state to make it visible.
           * @public
           */
          show() {
            this.setState({ hidden: false });
          }

          /**
           * Reset the state to the initial state.
           * @public
           */
          reset() {
            this.setState(this.initialState);
          }

          /**
           * Set a new value for the state.
           * @public
           * @param {type} value - the new value to be set
           * @return {type}
           */
          setValue(value) {
            this.setState({ value: value });
          }

          /**
           * Initialize the component
           * @private
           */
          #_init() {
            if (this._containedLabelText) {
              this._containedLabel = new _contained_label_js__WEBPACK_IMPORTED_MODULE_1__['default'](
                this.element,
                this._containedLabelText,
                this._passwordInputWrapper,
              );
            }
            if (this.usedConfigs.clearable) {
              this._passwordInputWrapper.insertBefore(this._clearButton, this._passwordInputWrapper.lastChild);
              this.element.addEventListener('input', this.handlers.inputPassword);
              this._clearButton.addEventListener('click', this.handlers.clearButtonClick);
            }

            this.#_handleVisibility();
            this.element.addEventListener('focusout', this.handlers.focusOut);
          }

          /**
           * Event handler for changes in the state of the component. It handles
           * specific changes to the state and updates the component accordingly.
           * @private
           * @param {Object} target - the target object
           * @param {string} key - the key of the changed property
           * @param {any} value - the new value of the changed property
           * @return {void}
           */
          #_syncWithStateHandler(target, key, value) {
            if (key === 'value') {
              this._containedLabel?.handleEvent();
            }

            if (key === 'mask') {
              this.#_handleMask();
            }

            if (key === 'disabled') {
              this._clearButton.disabled = this.currentState.disabled || this.currentState.readOnly;
              this._passwordInputEyeButton.disabled = this.currentState.disabled;
            }

            if (key === 'hidden') {
              this.#_handleVisibility();

              this.#_checkIfParentOnlyHasHiddenChildren();
            }

            if (key === 'readOnly') {
              this._clearButton.disabled = this.currentState.readOnly || this.currentState.disabled;
            }
          }

          /**
           * Handles the visibility of the component.
           * @private
           * @return {void}
           */
          #_handleVisibility() {
            const hidden = this.currentState.hidden;
            this._passwordInputWrapper.hidden = hidden;
            this.element.hidden = hidden;
          }

          /**
           * Handle input event on password input element.
           *
           * @private
           * @returns {void}
           */
          #_handleInputPassword() {
            this.setState({ value: this.element.value });
            if (this.element.value.length > 0) {
              this._clearButton.classList.remove('hidden');
            } else {
              this._clearButton.classList.add('hidden');
            }
          }

          /**
           * Handle click event on clear button.
           *
           * @private
           * @return {void}
           */
          #_handleClearButtonClick() {
            this.setState({ value: '' });
            this._clearButton.classList.add('hidden');
            this._containedLabel?.handleEvent();
          }

          /**
           * Handle click event on eye button.
           *
           * @private
           * @returns {void}
           */
          #_handleEyeButtonClick() {
            this.currentState.mask = !this.currentState.mask;
          }

          /**
           * Handle the mask state of the password input.
           *
           * @private
           * @returns {void}
           */
          #_handleMask() {
            if (this.currentState.mask) {
              this.element.setAttribute('type', 'password');
              this._passwordInputEyeButton.classList.remove('plaintext');
              this._passwordInputEyeButton.classList.add('password');
            } else {
              this.element.setAttribute('type', 'text');
              this._passwordInputEyeButton.classList.remove('password');
              this._passwordInputEyeButton.classList.add('plaintext');
            }
          }

          /**
           * Handle focus out event on password input element.
           *
           * @private
           * @param {Event} event The event object.
           * @returns {void}
           */
          #_handleFocusOut(event) {
            if (event.relatedTarget === this._passwordInputEyeButton) {
              return;
            }
            this._containedLabel?.handleEvent();
          }

          /**
           * Check if parent element only has hidden children and add hidden class
           * to parent if that's the case.
           *
           * @private
           * @returns {void}
           */
          #_checkIfParentOnlyHasHiddenChildren() {
            const parent = this._passwordInputWrapper.parentElement;
            const children = parent.children;
            let allChildrenHidden = true;
            for (let i = 0; i < children.length; i++) {
              if (children[i].hidden === false) {
                allChildrenHidden = false;
              }
            }
            if (allChildrenHidden) {
              parent.classList.add('hidden');
            } else {
              parent.classList.remove('hidden');
            }
          }

          /**
           * Create password input wrapper element.
           *
           * @private
           * @return {HTMLDivElement} The wrapper element.
           */
          #_createPasswordInputWrapper() {
            const wrapper = document.createElement('div');
            wrapper.classList.add('password-input-wrapper');
            this.element.parentNode.insertBefore(wrapper, this.element);
            wrapper.appendChild(this.element);
            wrapper.appendChild(this._passwordInputEyeButton);
            return wrapper;
          }

          /**
           * Create an eye button element.
           *
           * @private
           * @returns {HTMLButtonElement} The eye button element.
           */
          #_createEyeButton() {
            const button = document.createElement('button');
            const icon = document.createElement('i');
            button.setAttribute('type', 'button');
            button.classList.add('password-input-eye-button', 'password');
            icon.classList.add('far', 'fa-eye');
            button.appendChild(icon);
            button.addEventListener('click', () => this.handlers.eyeButtonClick());
            return button;
          }

          /**
           * Create clear button element.
           *
           * @private
           * @return {HTMLButtonElement} The clear button element.
           */
          #_createClearButton() {
            const button = document.createElement('button');
            const icon = document.createElement('i');
            button.setAttribute('type', 'button');
            button.classList.add('password-input-clear-button', 'hidden');
            icon.classList.add('far', 'fa-x');
            button.appendChild(icon);

            return button;
          }
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = PasswordInput;

        /***/
      },

    /***/ './src/opera/scripts/radio.js':
      /*!************************************!*\
  !*** ./src/opera/scripts/radio.js ***!
  \************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _base_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./base-component.js */ './src/opera/scripts/base-component.js',
        );

        class Radio extends _base_component_js__WEBPACK_IMPORTED_MODULE_0__['default'] {
          /**
           * Constructs a new instance of the Radio class.
           * @constructor
           * @param {Element} element - the element to be passed to the constructor
           */
          constructor(element, options = {}) {
            super(element, options);
            this.element = element;
            this.initialState = {
              checked: this.element.checked,
              disabled: this.element.disabled,
              hidden: this.element.hidden,
            };
            this.currentState = { ...this.initialState };
            this.customEvents = { change: this.#_dispatchChangeEvent.bind(this) };
            this.currentState = new Proxy(this.currentState, {
              set: (target, key, value) => {
                if (target[key] === value) return true;

                target[key] = value;
                this.element[key] = value;
                return true;
              },
            });
            this.#_init();
          }

          /**
           * Returns the current state of the PasswordInput component.
           * If key is passed, returns the value of that key in the state. If not, returns the whole state object.
           * @public
           * @param {string} [key] - the key in the state to return
           * @returns {(Object|string)}
           */
          getState(key) {
            if (!key) {
              return this.currentState;
            }
            return this.currentState[key];
          }

          /**
           * Sets the state of the object based on the provided state object.
           * @public
           * @param {Object} state - The state object containing key-value pairs to update the current state
           * @return {void}
           */
          setState(state) {
            Object.entries(state).forEach(([key, value]) => {
              if (this.currentState.hasOwnProperty(key)) {
                this.currentState[key] = value;
                this.customEvents.change();
              }
            });
          }
          /**
           * Hides the component.
           * @public
           */
          hide() {
            this.setState({ hidden: true });
          }

          /**
           * Show the component.
           * @public
           */
          show() {
            this.setState({ hidden: false });
          }

          /**
           * Reset the state to the initial state.
           * @public
           */
          reset() {
            this.setState(this.initialState);
          }

          /**
           * Initializes the component.
           * @private
           */
          #_init() {
            this.element.addEventListener('change', (e) => {
              const nameAttr = this.element.getAttribute('name');
              document.querySelectorAll(`[name="${nameAttr}"]`).forEach((radio) => {
                radio._instance.setState({ checked: false });
              });
              this.setState({
                checked: e.target.checked,
              });
            });
          }

          /**
           * Dispatches a custom change event.
           * @private
           */
          #_dispatchChangeEvent() {
            this.element.dispatchEvent(
              new CustomEvent('custom:change', {
                bubbles: true,
                cancelable: true,
                detail: {
                  message: 'Radio is changed',
                  state: this.currentState,
                },
              }),
            );
          }
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Radio;

        /***/
      },

    /***/ './src/opera/scripts/select.js':
      /*!*************************************!*\
  !*** ./src/opera/scripts/select.js ***!
  \*************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _base_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./base-component.js */ './src/opera/scripts/base-component.js',
        );
        /* harmony import */ var _contained_label_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./contained-label.js */ './src/opera/scripts/contained-label.js',
        );

        class Select extends _base_component_js__WEBPACK_IMPORTED_MODULE_0__['default'] {
          /**
           * Constructs a new instance of the Select class.
           * @constructor
           * @param {Element} element - the element to be passed to the constructor
           */
          constructor(element, options = {}) {
            super(element, options);
            this.element = element;
            this.initialState = {
              value: this.element.value,
              disabled: this.element.disabled,
              hidden: this.element.hidden,
            };
            this.currentState = { ...this.initialState };
            this._selectWrapper = this.#_createSelectWrapper();
            this._containedLabel = null;
            this._containedLabelText = this.element.getAttribute('data-label');
            this.handlers = {
              addActiveClass: this.#_addActiveClass.bind(this),
              removeActiveClass: this.#_removeActiveClass.bind(this),
              change: this.#_handleSelectChange.bind(this),
              syncWithState: this.#_syncWithStateHandler.bind(this),
            };
            this.currentState = new Proxy(this.currentState, {
              set: (target, key, value) => {
                if (target[key] === value) return true;
                target[key] = value;
                this.element[key] = value;
                this.handlers.syncWithState(target, key, value);
                return true;
              },
            });
            this.#_init();
          }

          /**
           * Returns the current state of the PasswordInput component.
           * If key is passed, returns the value of that key in the state. If not, returns the whole state object.
           * @param {string} [key] - the key in the state to return
           * @returns {(Object|string)}
           */
          getState(key) {
            if (!key) {
              return this.currentState;
            }
            return this.currentState[key];
          }

          /**
           * Sets the state of the object based on the provided state object.
           * @public
           * @param {Object} state - The state object containing key-value pairs to update the current state
           * @return {void}
           */
          setState(state) {
            Object.entries(state).forEach(([key, value]) => {
              if (this.currentState.hasOwnProperty(key)) {
                this.currentState[key] = value;
              }
            });
          }
          /**
           * Hides the component.
           * @public
           */
          hide() {
            this.setState({ hidden: true });
          }

          /**
           * Show the component by setting the state to make it visible.
           * @public
           */
          show() {
            this.setState({ hidden: false });
          }

          /**
           * Reset the state to the initial state.
           * @public
           */
          reset() {
            this.setState(this.initialState);
          }

          /**
           * Initializes the Select component.
           * @private
           */
          #_init() {
            if (this._containedLabelText) {
              this._containedLabel = new _contained_label_js__WEBPACK_IMPORTED_MODULE_1__['default'](
                this.element,
                this._containedLabelText,
                this._selectWrapper,
              );
            }
            this.#_updateValue();
            this.element.addEventListener('focusin', this.handlers.addActiveClass);
            this.element.addEventListener('focusout', this.handlers.removeActiveClass);
            this.element.addEventListener('change', this.handlers.change);
            this.#_handleVisibility();
          }

          /**
           * Event handler for changes in the state of the component. It handles
           * specific changes to the state and updates the component accordingly.
           * @private
           * @param {Object} target - the target object
           * @param {string} key - the key of the changed property
           * @param {any} value - the new value of the changed property
           * @return {void}
           */
          #_syncWithStateHandler(target, key, value) {
            if (key === 'hidden') {
              this.#_handleVisibility();
              this.#_checkIfParentOnlyHasHiddenChildren();
            }
            if (key === 'disabled') {
              this._selectWrapper.disabled = this.currentState.disabled;
            }
            if (key === 'value') {
              this.#_updateValue();
            }
          }

          /**
           * Handles a select change event by setting the select's state, removing the
           * 'active' class from the select wrapper, updating the select wrapper's
           * 'selected' class, and updating the contained label (if any).
           * @private
           */
          #_handleSelectChange() {
            this.setState({ value: this.element.value });
            this._selectWrapper.classList.remove('active');
            this.#_updateValue();
          }

          /**
           * Handles the visibility of the select component based on the current state.
           * If the current state has the hidden property set to true, hide the select
           * wrapper and the select element. Otherwise, show the select wrapper and the
           * select element.
           * @private
           */
          #_handleVisibility() {
            const hidden = this.currentState.hidden;
            this._selectWrapper.hidden = hidden;
            this.element.hidden = hidden;
          }

          /**
           * Adds the 'active' class to the select wrapper and activates the contained
           * label (if any).
           *
           * @private
           */
          #_addActiveClass() {
            this._selectWrapper.classList.add('active');
            this._containedLabel?.activate();
            this.element.addEventListener('mousedown', this.removeActiveClassHandler);
          }

          /**
           * Removes the 'active' class from the select wrapper and handles the contained
           * label (if any).
           * @private
           */
          #_removeActiveClass() {
            this._selectWrapper.classList.remove('active');
            this._containedLabel?.handleEvent();
            this.element.removeEventListener('mousedown', this.removeActiveClassHandler);
          }

          /**
           * Updates the select wrapper's 'selected' class based on the current select
           * value and the contained label (if any).
           * @private
           */
          #_updateValue() {
            if (this.element.value.length === 0) {
              this._selectWrapper.classList.remove('selected');
              if (this._containedLabel) {
                this.element.classList.add('text-transparent');
              }
            } else {
              this._selectWrapper.classList.add('selected');
              if (this._containedLabel) {
                this.element.classList.remove('text-transparent');
              }
            }

            this._containedLabel?.handleEvent();
          }

          /**
           * Checks if the parent element only has hidden children. If it does, add
           * a class of 'hidden' to the parent, otherwise remove the class 'hidden' from
           * the parent.
           * @private
           */
          #_checkIfParentOnlyHasHiddenChildren() {
            const parent = this._selectWrapper.parentElement;
            const children = parent.children;
            let allChildrenHidden = true;
            for (let i = 0; i < children.length; i++) {
              if (children[i].hidden === false) {
                allChildrenHidden = false;
              }
            }
            if (allChildrenHidden) {
              parent.classList.add('hidden');
            } else {
              parent.classList.remove('hidden');
            }
          }

          /**
           * Creates a wrapper element for the select element and adds it to the
           * document.
           * @private
           * @return {HTMLDivElement} the wrapper element
           */
          #_createSelectWrapper() {
            const wrapper = document.createElement('div');
            wrapper.classList.add('select-wrapper');
            this.element.parentNode.insertBefore(wrapper, this.element);
            wrapper.appendChild(this.element);
            return wrapper;
          }
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Select;

        /***/
      },

    /***/ './src/opera/scripts/spinner.js':
      /*!**************************************!*\
  !*** ./src/opera/scripts/spinner.js ***!
  \**************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _base_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./base-component.js */ './src/opera/scripts/base-component.js',
        );

        class Spinner extends _base_component_js__WEBPACK_IMPORTED_MODULE_0__['default'] {
          /**
           * Constructs a new instance of the Spinner class.
           * @constructor
           * @param {Element} element - the element to be passed to the constructor
           */
          constructor(element, options = {}) {
            super(element, options);
            this.element = element;
            this._originalInnerHTML = this.element.innerHTML;
          }

          /**
           * Start the animation with the given message.
           *
           * @param {string} message - The message to be displayed during the animation.
           */
          startLoading(message) {
            this.element.classList.add('loading');
            this.#_clearInnerHTML();
            this.element.append(this.#_createSpinner());
            message && this.element.append(this.#_createMessage(message));
          }

          /**
           * Stops the animation and updates the element with the provided status and message
           *
           * @param {string} status - the status of the animation (success or error)
           * @param {string} message - the message to be displayed during the animation
           * @param {number} delay - the delay in milliseconds before stopping the animation
           */
          stopLoading(status, message, delay = 1500) {
            this.#_clearInnerHTML();
            if (!status) {
              this.element.classList.remove('loading');
              this.element.innerHTML = this._originalInnerHTML;
              return;
            }

            switch (status) {
              case 'success':
                this.element.append(this.#_createCheckmark());
                break;
              case 'error':
                this.element.append(this.#_createError());
                break;
              default:
                break;
            }
            this.element.classList.add(status);
            message && this.element.append(this.#_createMessage(message));

            setTimeout(() => {
              this.element.classList.remove('loading', status);
              this.element.innerHTML = this._originalInnerHTML;
            }, delay);
          }

          /**
           * Creates a message element with the given message
           * @param {string} message - The message to be displayed
           * @returns {HTMLElement} - The created message element
           */
          #_createMessage(message) {
            const messageElement = document.createElement('span');
            messageElement.textContent = message;
            return messageElement;
          }

          /**
           * Clear the inner HTML of the element
           */
          #_clearInnerHTML() {
            this.element.innerHTML = '';
          }

          /**
           * Create and return a spinner SVG element
           * @returns {HTMLElement} - The created spinner SVG element
           */
          #_createSpinner() {
            const spinner = document.createElement('svg');
            spinner.classList.add('spinner-svg', 'spinner-circle-01');
            return spinner;
          }

          /**
           * Create and return a checkmark SVG object
           * @returns {object} - The created checkmark SVG object
           */
          #_createCheckmark() {
            const checkmark = document.createElement('object');
            checkmark.setAttribute('type', 'image/svg+xml');
            checkmark.classList.add('checkmark-svg', 'h-4', 'w-4');
            checkmark.setAttribute(
              'data',
              'data:image/svg+xml,%3Csvg height="16" width="16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"%3E%3Cpath fill="none" d="M20 6L9 17L4 12" stroke="%232F8E47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="60" stroke-dashoffset="-60"%3E%3Canimate attributeName="stroke-dashoffset" from="-60" to="0" dur="0.3s" begin="0s" fill="freeze" /%3E%3C/path%3E%3C/svg%3E',
            );
            return checkmark;
          }

          /**
           * Creates an error icon element
           * @returns {HTMLElement} - The error icon element
           */
          #_createError() {
            const error = document.createElement('i');
            error.classList.add('far', 'fa-alert-triangle', 'text-red-600');
            return error;
          }
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Spinner;

        /***/
      },

    /***/ './src/opera/scripts/tabs.js':
      /*!***********************************!*\
  !*** ./src/opera/scripts/tabs.js ***!
  \***********************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _base_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./base-component.js */ './src/opera/scripts/base-component.js',
        );

        class Tabs extends _base_component_js__WEBPACK_IMPORTED_MODULE_0__['default'] {
          /**
           * Constructs a new instance of the Tab class.
           * @constructor
           * @param {Element} element - the element to be passed to the constructor
           */
          constructor(element, options = {}) {
            super(element, options);
            this.element = element;
            this._tabsNav = this.element.querySelector('.tabs-nav');
            this._tabsBody = this.element.querySelector('.tabs-body');
            this._tabButtons = Array.from(this._tabsNav.querySelectorAll('.tab-button'));
            this._tabContents = Array.from(this._tabsBody.children).filter((child) => child.matches('.tab-content'));
            this._activeTabIndex = 0;
            this.handlers = {
              tabButtonClick: this.#_handleTabButtonClick.bind(this),
            };
            this.#_init();
          }

          /**
           * A description of the entire function.
           * @public
           * @param {type} index - active index of tab
           */
          activateTab(index) {
            this.#_handleTabChange(index);
          }

          /**
           * Gets the active index of the tab.
           * @public
           * @return {number} The active tab index
           */
          getTabActiveIndex() {
            return this._activeTabIndex;
          }

          /**
           * Initializes the component.
           * @private
           */
          #_init() {
            this._tabContents[this._activeTabIndex].classList.remove('hidden');
            this._tabButtons[this._activeTabIndex].classList.add('active', 'from-left');

            this._tabButtons.forEach((tabButton) => {
              tabButton.addEventListener('click', this.handlers.tabButtonClick);
            });
          }

          /**
           * Handles click on tab button.
           *
           * @private
           * @param {Event} event - The click event.
           */
          #_handleTabButtonClick(event) {
            this.#_handleTabChange(this._tabButtons.indexOf(event.target));
          }

          /**
           * Handles tab change.
           *
           * @private
           * @param {number} nextIndex - The next index of the tab.
           */
          #_handleTabChange(nextIndex) {
            const currentIndex = this._activeTabIndex;

            this._tabContents.forEach((content) => {
              content.classList.add('hidden');
            });

            for (let i = 0; i < this._tabButtons.length; i++) {
              if (i < nextIndex) {
                this._tabButtons[i].classList.remove('active', 'from-left');
                this._tabButtons[i].classList.add('from-right');
              } else if (i > nextIndex) {
                this._tabButtons[i].classList.remove('active', 'from-right');
                this._tabButtons[i].classList.add('from-left');
              }
            }

            if (currentIndex < nextIndex) {
              this._tabButtons[nextIndex].classList.add('active', 'from-left');
            } else if (currentIndex > nextIndex) {
              this._tabButtons[nextIndex].classList.add('active', 'from-right');
            }

            this._activeTabIndex = nextIndex;
            this._tabContents[nextIndex].classList.remove('hidden');
          }
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Tabs;

        /***/
      },

    /***/ './src/opera/scripts/tag.js':
      /*!**********************************!*\
  !*** ./src/opera/scripts/tag.js ***!
  \**********************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _base_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./base-component.js */ './src/opera/scripts/base-component.js',
        );

        class Tag extends _base_component_js__WEBPACK_IMPORTED_MODULE_0__['default'] {
          /**
           * Constructs a new instance of the Tag class.
           * @constructor
           * @param {Element} element - the element to be passed to the constructor
           */
          constructor(element, options = {}) {
            super(element, options);
            this.element = element;
            this.defaultConfigs = {
              removable: 'false',
              color: '',
            };
            this.usedConfigs = { ...this.defaultConfigs, ...options };
            this._colors = ['orange', 'sky', 'violet', 'green', 'red', 'yellow', 'blue'];
            this._removeButton = this.#_createRemoveButton();
            this.#_init();
          }

          /**
           * Initializes the component by setting the configuration options.
           * @private
           */
          #_init() {
            this.#_setConfigOptions();
          }

          /**
           * Sets the configuration options for the component.
           * @private
           */
          #_setConfigOptions() {
            const { removable, color } = this.usedConfigs;
            if (removable) {
              this.element.appendChild(this._removeButton);
            }
            if (this._colors.includes(color)) {
              this.element.classList.add(color);
            }
          }

          /**
           * Creates the remove button for the component.
           * @private
           * @returns {Element} The button to be added to the component
           */
          #_createRemoveButton() {
            const button = document.createElement('button');
            button.setAttribute('type', 'button');
            button.innerHTML = '<i class="far fa-x-close"></i>';
            return button;
          }
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Tag;

        /***/
      },

    /***/ './src/opera/scripts/text-area.js':
      /*!****************************************!*\
  !*** ./src/opera/scripts/text-area.js ***!
  \****************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _base_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./base-component.js */ './src/opera/scripts/base-component.js',
        );

        class TextArea extends _base_component_js__WEBPACK_IMPORTED_MODULE_0__['default'] {
          /**
           * Constructs a new instance of the TextArea class.
           * @constructor
           * @param {Element} element - the element to be passed to the constructor
           */
          constructor(element, options = {}) {
            super(element, options);
            this.element = element;
            this.defaultConfigs = {
              maxLength: this.element.getAttribute('maxlength') || -1,
            };
            this.usedConfigs = { ...this.defaultConfigs, ...options };
            this.initialState = {
              value: this.element.value,
              disabled: this.element.disabled,
              hidden: this.element.hidden,
              readOnly: this.element.readOnly,
            };
            this.currentState = { ...this.initialState };
            this._clearButton = this.#_createClearButton();
            this._charCount = this.#_createCharCount();
            this._textAreaWrapper = this.#_createTextAreaWrapper();
            this.handlers = {
              textAreaInput: this.#_handleTextAreaInput.bind(this),
              syncWithState: this.#_syncWithStateHandler.bind(this),
            };
            this.currentState = new Proxy(this.currentState, {
              set: (target, key, value) => {
                if (target[key] === value) return true;
                target[key] = value;
                this.element[key] = value;
                this.handlers.syncWithState(target, key, value);
                return true;
              },
            });

            this.#_init();
          }

          /**
           * Returns the current state of the component.
           * If key is passed, returns the value of that key in the state. If not, returns the whole state object.
           * @public
           * @param {string} [key] - the key in the state to return
           * @returns {(Object|string)}
           */
          getState(key) {
            if (!key) {
              return this.currentState;
            }
            return this.currentState[key];
          }

          /**
           * Sets the state of the object based on the provided state object.
           * @public
           * @param {Object} state - The state object containing key-value pairs to update the current state
           * @return {void}
           */
          setState(state) {
            Object.entries(state).forEach(([key, value]) => {
              if (this.currentState.hasOwnProperty(key)) {
                this.currentState[key] = value;
              }
            });
          }

          /**
           * Hides the component.
           * @public
           */
          hide() {
            this.setState({ hidden: true });
          }

          /**
           * Show the component by setting the state to make it visible.
           * @public
           */
          show() {
            this.setState({ hidden: false });
          }

          /**
           * Reset the state to the initial state.
           * @public
           */
          reset() {
            this.setState(this.initialState);
          }

          /**
           * Set a new value for the state.
           * @public
           * @param {type} value - the new value to be set
           * @return {type}
           */
          setValue(value) {
            this.setState({ value: value });
          }

          /**
           * Returns the current value of the text area component.
           * @public
           * @returns {string} the current value of the text area component
           */
          getValue() {
            return this.currentState.value;
          }

          /**
           * Initializes the TextArea component.
           * Attaches event listeners and creates the component's wrapper element.
           * @private
           */
          #_init() {
            this.element.addEventListener('input', () => {
              this.setState({ value: this.element.value });
            });
            this._clearButton.addEventListener('click', () => {
              this.setState({ value: '' });
            });
            this.#_handleVisibility();
          }

          /**
           * Event handler for changes in the state of the component. It handles
           * specific changes to the state and updates the component accordingly.
           * @private
           * @param {Object} target - the target object
           * @param {string} key - the key of the changed property
           * @param {any} value - the new value of the changed property
           * @return {void}
           */
          #_syncWithStateHandler(target, key, value) {
            if (key === 'value') {
              this.handlers.textAreaInput();
            }
            if (key === 'hidden') {
              this.#_handleVisibility();
            }
            if (key === 'disabled') {
              this._clearButton.disabled = this.currentState.disabled || this.currentState.readOnly;
            }
            if (key === 'readOnly') {
              this._clearButton.disabled = this.currentState.readOnly || this.currentState.disabled;
            }
          }

          /**
           * Handles the visibility changes of the TextArea component.
           * @private
           * @returns {void}
           */
          #_handleVisibility() {
            const hidden = this.currentState.hidden;
            this.element.hidden = hidden;
            this._clearButton.hidden = hidden;
            this._charCount.hidden = hidden;
            this._textAreaWrapper.hidden = hidden;
            this._textAreaWrapper.style.display = hidden ? 'none' : 'block';
          }

          /**
           * Handles the input event of the text area element.
           * @private
           * @returns {void}
           */
          #_handleTextAreaInput() {
            this.element.scrollTop = this.element.scrollHeight;
            this._charCount.textContent = this.element.value.length + '/' + this.usedConfigs.maxLength;
            this.#_handleClearButtonVisibility();
          }

          /**
           * Handles the visibility of the clear button.
           * @private
           * @returns {void}
           */
          #_handleClearButtonVisibility() {
            if (this.element.value.length > 0) {
              this._clearButton.classList.remove('hidden');
            } else {
              this._clearButton.classList.add('hidden');
            }
          }

          /**
           * Creates the character count element.
           * @private
           * @returns {HTMLSpanElement} - the character count element
           */
          #_createCharCount() {
            const charCount = document.createElement('span');
            charCount.textContent = this.element.value.length + '/' + this.usedConfigs.maxLength;
            return charCount;
          }

          /**
           * Creates the clear button element.
           * @private
           * @returns {HTMLButtonElement} - the clear button element
           */
          #_createClearButton() {
            const button = document.createElement('button');
            button.setAttribute('type', 'button');
            button.classList.add('hidden');
            button.textContent = 'Clear';
            return button;
          }

          /**
           * Creates the wrapper element for the text area and appends it to the
           * text area's parent element.
           * @private
           * @returns {HTMLDivElement} - the wrapper element
           */
          #_createTextAreaWrapper() {
            const wrapper = document.createElement('div');
            wrapper.classList.add('text-area-wrapper');
            this.element.parentNode.insertBefore(wrapper, this.element);
            const footer = document.createElement('div');
            footer.classList.add('text-area-footer');
            wrapper.appendChild(this.element);
            wrapper.appendChild(footer);
            if (this.usedConfigs.maxLength !== -1) {
              footer.appendChild(this._charCount);
            } else {
              footer.classList.add('reverse');
            }
            footer.appendChild(this._clearButton);
            return wrapper;
          }
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = TextArea;

        /***/
      },

    /***/ './src/opera/scripts/text-field.js':
      /*!*****************************************!*\
  !*** ./src/opera/scripts/text-field.js ***!
  \*****************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _base_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./base-component.js */ './src/opera/scripts/base-component.js',
        );
        /* harmony import */ var _contained_label_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./contained-label.js */ './src/opera/scripts/contained-label.js',
        );

        class TextField extends _base_component_js__WEBPACK_IMPORTED_MODULE_0__['default'] {
          /**
           * Constructs a new instance of the TextField class.
           * @constructor
           * @param {Element} element - the element to be passed to the constructor
           */
          constructor(element, options = {}) {
            super(element, options);
            this.element = element;
            this.defaultConfigs = { clearable: false };
            this.usedConfigs = { ...this.defaultConfigs, ...options, unit: options.unit?.split('|') };
            this.currentState = {
              value: this.element.value,
              disabled: this.element.disabled,
              hidden: this.element.hidden,
              readOnly: this.element.readOnly,
            };
            this.currentState = { ...this.currentState };
            this._textFieldWrapper = this.#_createTextFieldWrapper();
            this._containedLabel = null;
            this._containedLabelText = this.element.getAttribute('data-label');
            this._clearButton = this.#_createClearButton();
            this.handlers = {
              focusOut: this.#_handleFocusOut.bind(this),
              syncWithState: this.#_syncWithStateHandler.bind(this),
            };
            this.currentState = new Proxy(this.currentState, {
              set: (target, key, value) => {
                if (target[key] === value) return true;
                target[key] = value;
                this.element[key] = value;
                this.handlers.syncWithState(target, key, value);
                return true;
              },
            });

            this.#_init();
          }

          /**
           * Returns the current state of the component.
           * If key is passed, returns the value of that key in the state. If not, returns the whole state object.
           * @public
           * @param {string} [key] - the key in the state to return
           * @returns {(Object|string)}
           */
          getState(key) {
            if (!key) {
              return this.currentState;
            }
            return this.currentState[key];
          }

          /**
           * Sets the state of the object based on the provided state object.
           * @public
           * @param {Object} state - The state object containing key-value pairs to update the current state
           * @return {void}
           */
          setState(state) {
            Object.entries(state).forEach(([key, value]) => {
              if (this.currentState.hasOwnProperty(key)) {
                this.currentState[key] = value;
              }
            });
          }

          /**
           * Hides the component.
           * @public
           */
          hide() {
            this.setState({ hidden: true });
          }

          /**
           * Show the component by setting the state to make it visible.
           * @public
           */
          show() {
            this.setState({ hidden: false });
          }

          /**
           * Reset the state to the initial state.
           * @public
           */
          reset() {
            this.setState(this.initialState);
          }

          /**
           * Set a new value for the state.
           * @public
           * @param {type} value - the new value to be set
           * @return {type}
           */
          setValue(value) {
            this.setState({ value: value });
          }

          /**
           * Returns the current value of the component.
           * @public
           * @returns {string} the current value of the component
           */
          getValue() {
            return this.currentState.value;
          }

          /**
           * Initializes the component
           * @private
           */
          #_init() {
            if (this._containedLabelText) {
              this._containedLabel = new _contained_label_js__WEBPACK_IMPORTED_MODULE_1__['default'](
                this.element,
                this._containedLabelText,
                this._textFieldWrapper,
              );
            }
            if (this.usedConfigs.clearable) {
              this._textFieldWrapper.appendChild(this._clearButton);
              this.element.addEventListener('input', () => {
                this.setState({ value: this.element.value });
              });
              this._clearButton.addEventListener('click', () => {
                this.setState({ value: '' });
              });
            }
            this.element.addEventListener('focusout', this.handlers.focusOut);
            this.#_handleVisibility();
            this.#_checkIfParentOnlyHasHiddenChildren();
          }

          /**
           * Event handler for changes in the state of the component. It handles
           * specific changes to the state and updates the component accordingly.
           * @private
           * @param {Object} target - the target object
           * @param {string} key - the key of the changed property
           * @param {any} value - the new value of the changed property
           * @return {void}
           */
          #_syncWithStateHandler(target, key, value) {
            if (key === 'value') {
              this.#_handleClearButtonVisibility();
              this._containedLabel?.handleEvent();
            }

            if (key === 'disabled') {
              this._clearButton.disabled = this.currentState.disabled || this.currentState.readOnly;
              this._textFieldWrapper.disabled = this.currentState.disabled || this.currentState.readOnly;
            }

            if (key === 'hidden') {
              this.#_handleVisibility();
              this.#_checkIfParentOnlyHasHiddenChildren();
            }

            if (key === 'readOnly') {
              this._clearButton.disabled = this.currentState.readOnly || this.currentState.disabled;
              this._textFieldWrapper.disabled = this.currentState.readOnly || this.currentState.disabled;
            }
          }

          /**
           * Handle visibility of the component.
           * @private
           */
          #_handleVisibility() {
            const hidden = this.currentState.hidden;
            this.element.hidden = hidden;
            this._clearButton.hidden = hidden;
            this._textFieldWrapper.style.display = hidden ? 'none' : 'block';
          }

          /**
           * Hides or shows the clear button depending on whether the text field has
           * any content.
           * @private
           */
          #_handleClearButtonVisibility() {
            if (this.element.value.length > 0) {
              this._clearButton.classList.remove('hidden');
            } else {
              this._clearButton.classList.add('hidden');
            }
          }

          /**
           * Handle focus out event of the text field. This function is called when
           * the text field loses focus.
           * @private
           */
          #_handleFocusOut() {
            this._containedLabel?.handleEvent();
          }

          /**
           * Check if the parent of the text field only contains hidden elements.
           * If it does, the parent is hidden as well. If not, the parent is visible.
           * @private
           */
          #_checkIfParentOnlyHasHiddenChildren() {
            const parent = this._textFieldWrapper.parentElement;
            const children = parent.children;
            let allChildrenHidden = true;
            for (let i = 0; i < children.length; i++) {
              if (children[i].hidden === false) {
                allChildrenHidden = false;
              }
            }
            if (allChildrenHidden) {
              parent.classList.add('hidden');
            } else {
              parent.classList.remove('hidden');
            }
          }

          /**
           * Creates a wrapper div for the text field and moves the text field inside it.
           * @return {HTMLElement} The created wrapper element
           * @private
           */
          #_createTextFieldWrapper() {
            const wrapper = document.createElement('div');
            wrapper.classList.add('text-field-wrapper');
            this.element.parentNode.insertBefore(wrapper, this.element);
            wrapper.appendChild(this.element);
            return wrapper;
          }

          /**
           * Creates a clear button for the text field.
           * @return {HTMLButtonElement} The created clear button
           * @private
           */
          #_createClearButton() {
            const button = document.createElement('button');
            const icon = document.createElement('i');
            button.setAttribute('type', 'button');
            button.classList.add('text-field-clear-button', 'hidden');
            icon.classList.add('far', 'fa-x');
            button.appendChild(icon);
            return button;
          }
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = TextField;

        /***/
      },

    /***/ './src/opera/scripts/toast.js':
      /*!************************************!*\
  !*** ./src/opera/scripts/toast.js ***!
  \************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ createToast: () => /* binding */ createToast,
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _base_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./base-component.js */ './src/opera/scripts/base-component.js',
        );

        /**
         * A custom component that extends the base component.
         * @extends BaseComponent
         */
        class Toast extends _base_component_js__WEBPACK_IMPORTED_MODULE_0__['default'] {
          /**
           * Creates an instance of Toast.
           * @param {HTMLElement} element - The DOM element to which the Toast is attached.
           * @param {Object} [options={}] - Options for configuring the Toast.
           */
          constructor(element, options = {}) {
            super(element, options);
            this.element = element;
            this.defaultConfigs = {
              duration: null,
              position: 'top-right',
              isRemove: false,
            };
            this.usedConfigs = { ...this.defaultConfigs, ...options };
            this.initialState = {
              shown: false,
            };
            this.currentState = { ...this.initialState };
            this._timeId = null;
            this._container = document.querySelector('.toast-container.top-right');
            this._bottomCenterContainer = document.querySelector('.toast-container.bottom-center');
            this._closeButton = this.element.querySelector('.toast-close');
            this.customEvents = {
              shown: this.#_dispatchShownEvent.bind(this),
              hidden: this.#_dispatchHiddenEvent.bind(this),
            };
            this.handlers = {
              syncWithState: this.#_syncWithStateHandler.bind(this),
            };
            this.currentState = new Proxy(this.currentState, {
              set: (target, key, value) => {
                target[key] = value;
                this.handlers.syncWithState(target, key, value);
                return true;
              },
            });
            this.#_init();
          }

          /**
           * Show the element and call the callback function if provided.
           * @public
           * @param {Function} callback - The callback function to be called after the element is shown
           * @return {void}
           */
          show(callback) {
            this.setState({ shown: true });
            if (typeof callback === 'function') {
              callback();
            }
          }

          /**
           * Hides the element with a closing animation and triggers the 'hidden' custom event.
           * @public
           * @param {Function} callback - Optional callback function to be executed after hiding the element
           */
          hide(callback) {
            this.setState({ shown: false });
            if (typeof callback === 'function') {
              callback();
            }
          }

          /**
           * Updates the current state with the provided state object.
           * @public
           * @param {Object} state - the state object to be merged with the current state
           * @return {void}
           */
          setState(state) {
            Object.entries(state).forEach(([key, value]) => {
              if (this.currentState.hasOwnProperty(key)) {
                this.currentState[key] = value;
              }
            });
          }

          /**
           * Private method to initialize the component.
           * @private
           */
          #_init() {
            this.#_createContainer();
            this._closeButton.addEventListener('click', this.#_handleHideToast.bind(this));
          }

          /**
           * Event handler for changes in the state of the component. It handles
           * specific changes to the state and updates the component accordingly.
           * @private
           * @param {Object} target - the target object
           * @param {string} key - the key of the changed property
           * @param {any} value - the new value of the changed property
           * @return {void}
           */
          #_syncWithStateHandler(target, key, value) {
            if (key === 'shown') {
              this.currentState.shown ? this.#_handleShowToast() : this.#_handleHideToast();
            }
          }

          /**
           * Handles the show toast event.
           * Creates the container element if it doesn't exist, adds the toast element to it, sets the
           * active class, and triggers the 'shown' custom event.
           * If the toast has a duration, it sets a timeout to hide the toast.
           *
           * @private
           */
          #_handleShowToast() {
            this.#_createContainer();

            const isBottomCenter = this.element.classList.contains('bottom-center');
            const container = isBottomCenter ? this._bottomCenterContainer : this._container; // define container position;

            isBottomCenter ? container?.prepend(this.element) : container?.appendChild(this.element); // add element to container
            this.element.classList.add('active');

            if (this.usedConfigs.duration) {
              if (this._timeId) clearTimeout(this._timeId);
              this._timeId = setTimeout(() => this.#_handleHideToast(), +this.usedConfigs.duration);
            }

            this.customEvents.shown();
          }

          /**
           * Handles the hide toast event.
           * Removes the active class, adds the closing class for the animation, and
           * removes the element after the animation finishes. Also triggers the hidden
           * custom event.
           * @private
           * @return {void}
           */
          #_handleHideToast() {
            this.element.classList.add('closing'); //time for animation is 300ms
            setTimeout(() => {
              this.element.classList.remove('closing', 'active');
              this.usedConfigs.isRemove && this.element.remove();
            }, 400); //delay 100ms for animation to finish before removing
            this.customEvents.hidden();
          }

          /**
           * Create a container element at the specified position if not exist.
           *
           * @param {string} position - the position of the container
           * @return {void}
           */
          #_createContainer() {
            /**
             * Create a container element at the specified position.
             *
             * @param {string} position - the position of the container
             * @return {HTMLElement} the newly created container element
             */
            const createContainer = (position) => {
              const container = document.createElement('div');
              container.classList.add('toast-container', position);
              document.body.appendChild(container);
              return container;
            };

            if (!this._container) this._container = createContainer('top-right');
            if (!this._bottomCenterContainer) this._bottomCenterContainer = createContainer('bottom-center');
          }

          /**
           * Dispatch a custom event when the toast is shown.
           *
           * @event custom:shown
           * @type {CustomEvent}
           */
          #_dispatchShownEvent() {
            this.element.dispatchEvent(
              new CustomEvent('custom:shown', {
                bubbles: true,
                cancelable: true,
                detail: {
                  message: 'Toast is shown',
                  data: this.currentState,
                },
              }),
            );
          }

          /**
           * Dispatch a custom event when the toast is hidden.
           *
           * @event custom:hidden
           * @type {CustomEvent}
           */
          #_dispatchHiddenEvent() {
            this.element.dispatchEvent(
              new CustomEvent('custom:hidden', {
                bubbles: true,
                cancelable: true,
                detail: {
                  message: 'Toast is hidden',
                  data: this.currentState,
                },
              }),
            );
          }
        }

        /**
         * Creates a toast element with configurable options including the ability to clear it.
         *
         * @param {Object} configs - The configurations for the toast element.
         * @param {string|null} configs.type - The type of toast.
         * @param {string} configs.title - The title of the toast.
         * @param {string} configs.message - The message content of the toast.
         * @param {string} configs.details - Additional details text.
         * @param {number|null} configs.duration - The duration for which the toast is displayed.
         * @param {string} configs.position - The position on the screen where the toast appears.
         * @param {boolean} configs.isRemove - Flag to enable or disable the removal of the toast.
         * @param {string} configs.icon - HTML content for the toast's icon.
         * @param {boolean} [configs.clearable=false] - Determines if the toast is clearable by the user.
         * @return {Toast} The created toast element.
         */
        const createToast = (configs) => {
          const {
            type = null,
            title = '',
            message = '',
            details = '',
            duration = null,
            position = 'top-right',
            isRemove = true,
            icon = '',
          } = configs;

          // Create toast element
          const toastElement = document.createElement('div');
          toastElement.classList.add('toast');
          type && toastElement.classList.add(type);
          position && toastElement.classList.add(position);
          toastElement.innerHTML = `
              ${icon ? icon : `<div class="toast-icon"></div>`}
              <div class="toast-body">
                <div class="toast-title">${title}</div>
                <div class="toast-message">${message}</div>
                <small class="mt-2">${details}</small>
              </div>
              <button class="toast-close"><i class="far fa-x-close"></i></button>
              `;
          // Create toast instance
          const toast = new Toast(toastElement, configs);
          toastElement._instance = toast;
          return toast;
        };

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Toast;

        /***/
      },

    /***/ './src/opera/scripts/toggle-group.js':
      /*!*******************************************!*\
  !*** ./src/opera/scripts/toggle-group.js ***!
  \*******************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _base_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./base-component.js */ './src/opera/scripts/base-component.js',
        );

        class ToggleGroup extends _base_component_js__WEBPACK_IMPORTED_MODULE_0__['default'] {
          /**
           * Constructs a new instance of the ToggleGroup class.
           * @constructor
           * @param {Element} element - the element to be passed to the constructor
           */
          constructor(element, options = {}) {
            super(element, options);
            this.element = element;
            this.defaultConfigs = { value: '', selectType: 'single' };
            this.usedConfigs = { ...this.defaultConfigs, ...options };
            this.initialState = {
              value: this.usedConfigs.value,
            };
            this.currentState = { ...this.initialState };
            this._toggleGroupItems = this.element.querySelectorAll('.toggle-group-item');
            this.handlers = {
              syncWithState: this.#_syncWithStateHandler.bind(this),
            };
            this.customEvents = {
              change: this.#_dispatchChangeEvent.bind(this),
            };
            this.currentState = new Proxy(this.currentState, {
              set: (target, key, value) => {
                if (target[key] === value) return true;
                this.handlers.syncWithState(target, key, value);
                return true;
              },
            });

            this.#_init();
          }

          /**
           * Sets the state of the object based on the given state object.
           * @public
           * @param {Object} state - the new state object
           * @return {void}
           */
          setState(state) {
            Object.entries(state).forEach(([key, value]) => {
              if (this.currentState.hasOwnProperty(key)) {
                this.currentState[key] = value;
              }
            });
          }

          /**
           * Retrieves the state based on the provided key, or the entire current state if no key is provided.
           * @public
           * @param {string} [key] - The key to retrieve the state from.
           * @return {*} The state corresponding to the provided key, or the entire current state if no key is provided.
           */
          getState(key) {
            if (!key) {
              return this.currentState;
            }
            return this.currentState[key];
          }

          /**
           * Resets the state to the initial state.
           * @public
           */
          reset() {
            this.setState(this.initialState);
          }

          /**
           * Sets the value of the component state to the given value.
           * @public
           * @param {String|Array} value - the new value to set
           * @return {void}
           */
          setValue(value) {
            this.setState({ value: value });
          }

          /**
           * Get the value from the current state.
           * @public
           * @return {String|Array} value from the current state
           */
          getValue() {
            return this.currentState.value;
          }

          /**
           * Initializes the ToggleGroup component.
           * @private
           */
          #_init = () => {
            this.#_initDataToggleGroup();
            this.#_updateActiveItem();
            this.#_initClickEvent();
          };

          /**
           * Initialize data toggle group
           *
           * @private
           */
          #_initDataToggleGroup() {
            const { value = '', selectType = 'single' } = this.usedConfigs;
            if (selectType === 'multiple') {
              // Convert string to array
              const arrayValue = value
                .slice(1, -1)
                .split(',')
                .filter((item) => item !== '');
              this.initialState = {
                value: arrayValue,
              };
            } else {
              this.initialState = {
                value: value,
              };
            }
            this.setState(this.initialState);
          }

          /**
           * Initialize click event on toggle group items
           * @private
           */
          #_initClickEvent() {
            this._toggleGroupItems.forEach((item) => {
              item.addEventListener('click', () => {
                this.#_handleClick(item);
              });
            });
          }

          /**
           * Event handler for changes in the state of the component. It handles
           * specific changes to the state and updates the component accordingly.
           * @private
           * @param {Object} target - the target object
           * @param {string} key - the key of the changed property
           * @param {any} value - the new value of the changed property
           * @return {void}
           */
          #_syncWithStateHandler(target, key, value) {
            if (key === 'value') {
              if (this.usedConfigs.selectType === 'multiple' && Array.isArray(value)) {
                target[key] = value;
              }

              if (this.usedConfigs.selectType === 'single' && typeof this.currentState.value === 'string') {
                target[key] = value;
              }

              this.#_updateActiveItem();
              this.customEvents.change();
            }
          }

          /**
           * Handle the click event of toggle group item
           * @private
           * @param {HTMLElement} item - The toggle group item element
           */
          #_handleClick(item) {
            const value = item.getAttribute('value');
            switch (this.usedConfigs.selectType) {
              case 'multiple':
                this.#_handleMultiTypeClick(value);
                break;
              default:
                this.#_handleSingleTypeClick(value);
                break;
            }
          }

          /**
           * Handles the click event for multiple type toggle group items
           * @private
           * @param {string} value - The value of the toggle group item clicked.
           */
          #_handleMultiTypeClick(value) {
            if (this.currentState.value.includes(value)) {
              this.setState({ value: this.currentState.value.filter((item) => item !== value) });
              return;
            }
            this.setState({ value: [...this.currentState.value, value] });
          }

          /**
           * Handles click event for single select type
           * @param {string} value - The selected item's value
           * @private
           */
          #_handleSingleTypeClick(value) {
            if (this.currentState.value === value) return;
            this.setState({ value });
          }

          /**
           * Update active item in toggle group
           * @private
           */
          #_updateActiveItem() {
            const { value } = this.currentState;
            const { selectType } = this.usedConfigs;

            this.#_removeAllActiveClasses();
            this._toggleGroupItems.forEach((item) => {
              const itemValue = item.getAttribute('value');
              switch (selectType) {
                case 'multiple':
                  value.includes(itemValue) && this.#_addActiveClass(item);
                  break;
                default:
                  itemValue === value && this.#_addActiveClass(item);
                  break;
              }
            });
          }

          /**
           * Remove all active classes from toggle group items.
           * @private
           */
          #_removeAllActiveClasses() {
            this._toggleGroupItems.forEach((item) => {
              this.#_removeActiveClass(item);
            });
          }

          /**
           * Remove the active class from the specified item
           * @private
           * @param {HTMLElement} item - The item to remove the active class from
           */
          #_removeActiveClass(item) {
            item.classList.remove('active');
            item.previousElementSibling?.classList.remove('after:hidden');
          }

          /**
           * Add the active class to the specified item
           * @private
           * @param {HTMLElement} item - The item to add the active class to
           */
          #_addActiveClass(item) {
            item.classList.add('active');
            item.previousElementSibling?.classList.add('after:hidden');
          }

          /**
           * Dispatches a custom change event with the toggle group's current value
           * @private
           * @event custom:change
           * @property {string|Array<string>} value - The current value of the toggle group
           */
          #_dispatchChangeEvent() {
            this.element.dispatchEvent(
              new CustomEvent('custom:change', {
                bubbles: true,
                cancelable: true,
                detail: {
                  message: 'Toggle group state changed',
                  value: this.currentState.value,
                },
              }),
            );
          }
        }
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ToggleGroup;

        /***/
      },

    /***/ './src/opera/scripts/toggle-switch.js':
      /*!********************************************!*\
  !*** ./src/opera/scripts/toggle-switch.js ***!
  \********************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _base_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./base-component.js */ './src/opera/scripts/base-component.js',
        );

        class ToggleSwitch extends _base_component_js__WEBPACK_IMPORTED_MODULE_0__['default'] {
          /**
           * Constructs a new instance of the ToggleSwitch class.
           * @constructor
           * @param {Element} element - the element to be passed to the constructor
           */
          constructor(element, options = {}) {
            super(element, options);
            this.element = element;
            this.initialState = {
              checked: this.element.getAttribute('aria-checked') === 'true' || this.element.classList.contains('on'),
            };
            this.currentState = { ...this.initialState };
            this._toggleSpan = this.#_createToggleSpan();
            this.handlers = {
              syncWithState: this.#_syncWithStateHandler.bind(this),
              click: this.#_handleClick.bind(this),
            };

            this.customEvents = {
              change: this.#_dispatchChangeEvent.bind(this),
            };
            this.currentState = new Proxy(this.currentState, {
              set: (target, key, value) => {
                if (target[key] === value) return true;
                this.handlers.syncWithState(target, key, value);
                return true;
              },
            });
            this.#_init();
          }

          /**
           * Set the state of the object based on the given state object.
           * @public
           * @param {Object} state - the new state object
           * @return {void}
           */
          setState(state) {
            Object.entries(state).forEach(([key, value]) => {
              if (this.currentState.hasOwnProperty(key)) {
                this.currentState[key] = value;
              }
            });
          }

          /**
           * Retrieve the state of the application for a given key.
           * @public
           * @param {string} key - the key to retrieve the state for
           * @return {any} the state for the given key, or the entire current state if no key is provided
           */
          getState(key) {
            if (!key) {
              return this.currentState;
            }
            return this.currentState[key];
          }

          /**
           * Resets the state to the initial state.
           * @public
           */
          reset() {
            this.setState(this.initialState);
          }

          /**
           * Initializes the toggle switch component.
           * This method is called when the class is instantiated.
           * @private
           */
          #_init() {
            this.element.appendChild(this._toggleSpan);
            this.element.addEventListener('click', this.handlers.click);
          }

          /**
           * Event handler for changes in the state of the component. It handles
           * specific changes to the state and updates the component accordingly.
           * @private
           * @param {Object} target - the target object
           * @param {string} key - the key of the changed property
           * @param {any} value - the new value of the changed property
           * @return {void}
           */
          #_syncWithStateHandler(target, key, value) {
            if (key === 'checked') {
              target[key] = value;
              this.customEvents.change();
              if (value) {
                this.element.setAttribute('aria-checked', 'true');
                this.element.classList.add('on');
              } else {
                this.element.setAttribute('aria-checked', 'false');
                this.element.classList.remove('on');
              }
            }
          }

          /**
           * Creates and returns a span element to be used for the toggle switch.
           * @private
           * @return {HTMLSpanElement} The span element used for the toggle switch
           */
          #_createToggleSpan() {
            const span = document.createElement('span');
            return span;
          }

          /**
           * Handles the click event on the toggle switch.
           *
           * @private
           * @return {void}
           */
          #_handleClick() {
            this.setState({ checked: !this.currentState.checked });
          }
          /**
           * Dispatches a custom change event with the toggle switch's current value
           * @private
           * @event custom:change
           * @property {Boolean} checked - The current value of the toggle switch
           */
          #_dispatchChangeEvent() {
            this.element.dispatchEvent(
              new CustomEvent('custom:change', {
                bubbles: true,
                cancelable: true,
                detail: {
                  message: 'Toggle switch state changed',
                  checked: this.currentState.checked,
                },
              }),
            );
          }
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ToggleSwitch;

        /***/
      },

    /***/ './src/opera/scripts/tooltip.js':
      /*!**************************************!*\
  !*** ./src/opera/scripts/tooltip.js ***!
  \**************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ createTooltip: () => /* binding */ createTooltip,
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _base_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./base-component.js */ './src/opera/scripts/base-component.js',
        );
        /* harmony import */ var _utils_debounce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./utils/debounce.js */ './src/opera/scripts/utils/debounce.js',
        );
        /* harmony import */ var _utils_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./utils/helpers.js */ './src/opera/scripts/utils/helpers.js',
        );

        const positions = ['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right'];
        class Tooltip extends _base_component_js__WEBPACK_IMPORTED_MODULE_0__['default'] {
          /**
           * Constructs a new instance of the Tooltip class.
           * @constructor
           * @param {Element} element - the element to be passed to the constructor
           */
          constructor(element, options = {}) {
            super(element, options);
            this.element = element;
            this.defaultConfigs = {};
            this.usedConfigs = { ...this.defaultConfigs, ...options };
            this.initialState = {
              shown: false,
            };
            this.currentState = { ...this.initialState };
            this._content = null;
            this._isPositionAlreadySet = false;
            this._delayId = null;
            this.handlers = {
              syncWithState: this.#_syncWithStateHandler.bind(this),
            };
            this.currentState = new Proxy(this.currentState, {
              set: (target, key, value) => {
                if (target[key] === value) return true;
                this.handlers.syncWithState(target, key, value);
                return true;
              },
            });

            this.#_init();
          }

          /**
           * Show the component.
           * @public
           */
          show() {
            this.setState({ shown: true });
          }

          /**
           * Hides the element by setting the 'shown' state to false.
           * @public
           */
          hide() {
            this.setState({ shown: false });
          }

          /**
           * Returns the current state of the PasswordInput component.
           * If key is passed, returns the value of that key in the state. If not, returns the whole state object.
           * @param {string} [key] - the key in the state to return
           * @returns {(Object|string)}
           */
          getState(key) {
            if (!key) {
              return this.currentState;
            }
            return this.currentState[key];
          }

          /**
           * Sets the state of the object based on the provided state object.
           * @public
           * @param {Object} state - The state object containing key-value pairs to update the current state
           * @return {void}
           */
          setState(state) {
            Object.entries(state).forEach(([key, value]) => {
              if (this.currentState.hasOwnProperty(key)) {
                this.currentState[key] = value;
              }
            });
          }

          /**
           * Initialize the component
           * @private
           */
          #_init() {
            this.#_initValues();
            this.#_initTooltipContent();
            this.#_initEvents();
            this.#_initUI();
          }

          /**
           * Initialize tooltip content
           * @private
           */
          #_initTooltipContent() {
            // Check if the content is already set to prevent unnecessary work
            if (this._content !== null) return;
            // Create a new div element that will hold the tooltip content
            const tooltipContent = document.createElement('div');
            tooltipContent.classList.add('tooltip-content');

            // If there's content specified in the config, use it for createTooltip method
            if (this.usedConfigs.processedContent) {
              const content = this.usedConfigs.processedContent;
              tooltipContent.appendChild(content);
            } else {
              // If there's no content specified in the config, use the tooltip content from the data-tooltip-content attribute
              const content = this.#_createTooltipByTooltipContent();
              tooltipContent.innerHTML = content ? content : '';
            }
            // Assign the prepared tooltip content to the instance's content property
            tooltipContent.innerHTML && (this._content = tooltipContent);
          }

          /**
           * Initialize tooltip Values
           * @private
           */
          #_initValues() {
            const currentElementClasses = this.element.classList.value.split(' ');
            this._isPositionAlreadySet = currentElementClasses.some((element) => positions.includes(element));
            this.currentState.shown = this.element.classList.contains('active');
          }

          /**
           * Initialize tooltip Events
           * @private
           */
          #_initEvents() {
            // Attach event listeners based on tooltip type
            if (this.usedConfigs.type === 'toggle') {
              this.element.addEventListener('click', () => this.#_handleToggleClick());
            } else {
              this.element.addEventListener('mouseenter', () => this.show());
              this.element.addEventListener('mouseleave', () => this.hide());
            }

            // Debounce the setPosition function to improve performance
            const debounceSetPosition = (0, _utils_debounce_js__WEBPACK_IMPORTED_MODULE_1__['default'])(() => {
              this.#_removePosition();
              this.#_setPosition();
            }, 100);
            window.addEventListener('scroll', debounceSetPosition);
            window.addEventListener('resize', debounceSetPosition);
          }

          /**
           * Initialize UI
           * @private
           */
          #_initUI() {
            this.usedConfigs.theme === 'light' && this.element.classList.add('light');
            this.isActive && this.show();
          }

          /**
           * Event handler for changes in the state of the component. It handles
           * specific changes to the state and updates the component accordingly.
           * @private
           * @param {Object} target - the target object
           * @param {string} key - the key of the changed property
           * @param {any} value - the new value of the changed property
           * @return {void}
           */
          #_syncWithStateHandler(target, key, value) {
            if (key === 'shown') {
              target[key] = value;

              if (value) {
                this.#_handleShowTooltip();
              } else {
                this.#_handleHideTooltip();
              }
            }
          }

          /**
           * Event handler for showing the tooltip.
           * @private
           * @return {void}
           */
          #_handleShowTooltip() {
            if (!this._content) return;

            const handleShowTooltip = () => {
              this.element.appendChild(this._content);
              this.#_active();
              this.#_setPosition();
            };

            // Check if there is a delay set for showing the tooltip
            if (this.usedConfigs.delay) {
              this.#_clearDelay();
              this._delayId = setTimeout(() => {
                handleShowTooltip();
              }, this.usedConfigs.delay);
            } else {
              // If no delay is set, show the tooltip immediately
              handleShowTooltip();
            }
          }

          /**
           * Event handler for hiding the tooltip.
           * @private
           * @return {void}
           */
          #_handleHideTooltip() {
            // If there's no content to hide, exit early
            if (!this._content) return;

            // Clear any existing delays that might show or hide the content
            this.#_clearDelay();

            // If the content is currently a child of the element, remove it.
            if (this.element.contains(this._content)) {
              this.element.removeChild(this._content);
            }

            this.#_deactive();
            this.#_removePosition();
          }

          /**
           * Handle the toggle click event
           * @private
           */
          #_handleToggleClick() {
            if (!this.currentState.shown) {
              this.show();
              /**
               * Event handler for document click.
               *
               * @param {Object} event - The click event object
               * @return {void}
               */
              const documentClickHandler = (event) => {
                if (!this.element.contains(event.target)) {
                  this.hide();
                  document.removeEventListener('click', documentClickHandler);
                }
              };
              document.addEventListener('click', documentClickHandler);
            }
          }

          /**
           * Active the element
           * @private
           */
          #_active() {
            this.element.classList.add('active');
          }

          /**
           * Deactivate the element
           * @private
           */
          #_deactive() {
            this.element.classList.remove('active');
          }

          /**
           * Clears the delay timer if it is active
           * @private
           */
          #_clearDelay() {
            if (this._delayId) {
              clearTimeout(this._delayId);
            }
          }

          /**
           * Set the position
           * @private
           */
          #_setPosition() {
            if (this._isPositionAlreadySet || !this.currentState.shown) {
              return;
            }
            const newposition = this.#_determinePosition(this._content);
            this.element.classList.add(newposition);
          }

          /**
           * Remove the position classes from the element
           * @private
           */
          #_removePosition() {
            if (this._isPositionAlreadySet) {
              return;
            }
            // Remove each position class from the element
            positions.forEach((position) => this.element.classList.remove(position));
          }

          /**
           * Determine the position of the target element relative to the viewport
           * @private
           * @param {Element} target - The target element
           * @returns {string} - The position relative to the viewport
           */
          #_determinePosition(target) {
            // Get the position and dimensions of the target element
            const { left, top, height, width } = target.getBoundingClientRect();

            // Get the dimensions of the viewport
            const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
            const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

            // Calculate margins from edges of the viewport
            const marginLeft = left + width / 2;
            const marginRight = viewportWidth - left - width / 2;
            const marginTop = top + height / 2;
            const marginBottom = viewportHeight - top - height / 2;
            const baseMargin = 108; // 108px

            // Determine the position based on margins
            if (marginLeft < baseMargin || marginRight < baseMargin) {
              if (marginLeft > marginRight) {
                if (marginTop > baseMargin) {
                  return 'top-left';
                } else if (marginBottom > baseMargin) {
                  return 'bottom-left';
                } else {
                  return 'left';
                }
              } else {
                if (marginTop > baseMargin) {
                  return 'top-right';
                } else if (marginBottom > baseMargin) {
                  return 'bottom-right';
                } else {
                  return 'right';
                }
              }
            }

            if (marginTop < 108 || marginBottom < 108) {
              return marginTop > marginBottom ? 'top' : 'bottom';
            }

            return 'top';
          }

          /**
           * Create a tooltip based on the tooltip content
           * @private
           * @returns {string} - The tooltip content
           */
          #_createTooltipByTooltipContent() {
            // Get the content from the 'data-tooltip-content' attribute
            const content = this.element.getAttribute('data-tooltip-content');

            // If the content is HTML, return without setting the tooltip content
            if ((0, _utils_helpers_js__WEBPACK_IMPORTED_MODULE_2__.isHTML)(content)) {
              return;
            }

            return content;
          }
        }

        /**
         * Creates a tooltip for the specified element with the given configuration. If the content is HTML or the element is not provided, the function returns null.
         *
         * @param {Array} elementConfig - An array containing the element and an optional configuration object.
         * @return {Tooltip|null} The Tooltip instance attached to the element, or null if content is invalid or element is missing.
         */
        const createTooltip = ([
          element,
          config = {
            type: '',
            theme: '',
            position: '',
            delay: 0,
            content: '',
            btnLeft: {
              content: '',
              action: 'dismiss',
              scrollTarget: '',
              href: '',
            },
            btnRight: {
              content: '',
              action: 'dismiss',
              scrollTarget: '',
              href: '',
            },
          },
        ]) => {
          if (!config.content || (0, _utils_helpers_js__WEBPACK_IMPORTED_MODULE_2__.isHTML)(config.content))
            return null;

          const makeTooltip = () => {
            if (!element) return;
            // Add 'tooltip' class to the element
            element.classList.add('tooltip');
            config.theme && element.classList.add(config.theme);
            config.position && element.classList.add(config.position);

            // Prepare data-tooltip attributes
            let dataTooltip = [];
            config.type && dataTooltip.push(`type:${config.type}`);
            config.delay && dataTooltip.push(`delay:${config.delay}`);
            element.setAttribute('data-tooltip', dataTooltip.join(' '));

            // Create new content element and set its innerHTML
            const newContent = document.createElement('div');
            config.content && (newContent.innerHTML += config.content);

            /**
             * Runs the specified action based on the input parameter.
             *
             * @param {string} action - The action to be executed.
             */
            const executeAction = (action) => {
              if (!action) return;

              // Dismiss action
              if (action === 'dismiss') document.dispatchEvent(new Event('click')); //conflict with toggle click

              // Scroll to action
              if (action === 'scrollTo') {
                const target = config.btnLeft?.scrollTarget || config.btnRight?.scrollTarget;
                target && document.querySelector(`${target}`).scrollIntoView({ behavior: 'smooth' });
                document.dispatchEvent(new Event('click'));
              }

              // Open new tab action
              if (action === 'openNewTab') {
                const href = config.btnLeft?.href || config.btnRight?.href;
                href && window.open(href, '_blank');
                document.dispatchEvent(new Event('click'));
              }
            };

            /**
             * Adds a button to the specified container with the given configuration.
             *
             * @param {Object} btnConfig - The configuration for the button
             * @param {string} className - The class name for the button
             * @param {HTMLElement} container - The container to which the button will be added
             */
            const addButton = (btnConfig, className, container) => {
              if (
                btnConfig?.content &&
                !(0, _utils_helpers_js__WEBPACK_IMPORTED_MODULE_2__.isHTML)(btnConfig.content)
              ) {
                const button = document.createElement('button');
                button.classList.add(className);
                button.innerHTML = btnConfig.content;
                button.addEventListener('click', (e) => {
                  e.stopPropagation();
                  executeAction(btnConfig.action);
                });
                container.appendChild(button);
              }
            };

            // Add left and right buttons if provided in the configuration
            if (config.btnLeft || config.btnRight) {
              newContent.innerHTML += '<span class="breakline"></span>';
              const actions = document.createElement('div');
              actions.classList.add('actions');

              // Add left and right buttons to the actions container
              addButton(config.btnLeft, 'btn-left', actions);
              addButton(config.btnRight, 'btn-right', actions);

              // Add the actions container to the new content
              newContent.appendChild(actions);
            }

            // Set the content of the configuration to the new content element
            config.processedContent = newContent;

            // Create a new Tooltip instance and attach it to the element
            return new Tooltip(element, config);
          };

          if (element) {
            return makeTooltip();
          } else {
            document.addEventListener('DOMContentLoaded', () => {
              return makeTooltip();
            });
          }
        };

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Tooltip;

        /***/
      },

    /***/ './src/opera/scripts/tree-navigation.js':
      /*!**********************************************!*\
  !*** ./src/opera/scripts/tree-navigation.js ***!
  \**********************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _base_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./base-component.js */ './src/opera/scripts/base-component.js',
        );

        class TreeNavigation extends _base_component_js__WEBPACK_IMPORTED_MODULE_0__['default'] {
          constructor(element, config = {}) {
            super(element, config);
            this.element = element;
            this.handlers = {
              buttonClick: this.#_handleButtonClick.bind(this),
            };
            this.#_init();
          }

          /**
           * Initializes the component
           *
           * @private
           */
          #_init() {
            this.#_appendButtons();
            this.element.querySelectorAll('.tree-navigation-item:not(.expanded)').forEach((treeItem) => {
              const button = treeItem.firstElementChild;
              if (!button.classList.contains('terminal')) {
                treeItem.classList.add('expanded');
              }
            });
          }

          /**
           * Handles the click event on the buttons
           *
           * @private
           * @param {MouseEvent} event - The click event
           */
          #_handleButtonClick(event) {
            const button = event.target.closest('.tree-navigation-item-button');
            if (
              (event.target.nodeName === 'svg' || event.target.tagName === 'path') &&
              !button.classList.contains('terminal')
            ) {
              button.parentNode.classList.toggle('expanded');
              button.parentNode.querySelectorAll('.tree-navigation-item').forEach((child) => {
                child.classList.toggle('hidden');
                return;
              });
            }
            this.element.querySelectorAll('.tree-navigation-item-button').forEach((btn) => {
              btn.classList.remove('active');
            });
            button.classList.add('active');
          }

          /**
           * Appends the buttons to the tree navigation items
           *
           * @private
           */
          #_appendButtons() {
            const treeItems = this.element.querySelectorAll('.tree-navigation-item');
            treeItems.forEach((treeItem) => {
              const hasChildren = treeItem.querySelector('.tree-navigation-item') !== null;
              const treeItemContent = treeItem.querySelector('span');
              const button = this.#_createButton(hasChildren);
              button.appendChild(treeItemContent);
              treeItem.insertBefore(button, treeItem.firstChild);
            });
          }

          /**
           * Creates a button for each tree navigation item
           *
           * @private
           * @param {boolean} hasChildren - If the item has children
           * @returns {Element} The created button element
           */
          #_createButton(hasChildren) {
            const button = document.createElement('button');
            const icon = document.createElement('i');

            button.classList.add('tree-navigation-item-button');
            button.setAttribute('type', 'button');
            button.appendChild(icon);

            if (hasChildren) {
              icon.classList.add('far', 'fa-chevron-right');
            } else {
              icon.classList.add('far', 'fa-minus');
              button.classList.add('terminal');
            }

            button.addEventListener('click', this.handlers.buttonClick);

            return button;
          }
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = TreeNavigation;

        /***/
      },

    /***/ './src/opera/scripts/utils/convertDataToObject.js':
      /*!********************************************************!*\
  !*** ./src/opera/scripts/utils/convertDataToObject.js ***!
  \********************************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ convertDataToObject,
          /* harmony export */
        });
        /**
         * Convert a data attribute string into a key-value object.
         *
         * @param {string} dataAttribute - the data attribute string to be converted
         * @return {Object} the key-value object created from the data attribute
         */ function convertDataToObject(dataAttribute) {
          const keyValueArray = dataAttribute?.split(' ');
          const dataObject = {};

          keyValueArray?.forEach((element) => {
            const [key, value] = element.split(':');
            try {
              if (key) dataObject[key] = JSON.parse(value);
            } catch (error) {
              if (key) dataObject[key] = value;
            }
          });
          return dataObject;
        }
        // example: data-components="key1:value1 key2:value2" -> {key1: value1, key2: value2}

        /***/
      },

    /***/ './src/opera/scripts/utils/debounce.js':
      /*!*********************************************!*\
  !*** ./src/opera/scripts/utils/debounce.js ***!
  \*********************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /**
         * Return a debounced version of the given function that delays its execution until after `delay` milliseconds have elapsed since the last time it was invoked.
         *
         * @param {function} func - The function to be debounced
         * @param {number} delay - The number of milliseconds to delay
         * @return {function} The debounced function
         */
        const debounce = (func, delay) => {
          let timerId;
          return (...args) => {
            if (timerId) {
              clearTimeout(timerId);
            }
            timerId = setTimeout(() => {
              func(...args);
            }, delay);
          };
        };

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = debounce;

        /***/
      },

    /***/ './src/opera/scripts/utils/helpers.js':
      /*!********************************************!*\
  !*** ./src/opera/scripts/utils/helpers.js ***!
  \********************************************/
      /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ isHTML: () => /* binding */ isHTML,
          /* harmony export */
        });
        /**
         * Check if the input string contains HTML content.
         *
         * @param {string} str - The input string to be checked for HTML content.
         * @return {boolean} Whether the input string contains HTML content or not.
         */
        const isHTML = (str) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(str, 'text/html');
          const isHTML = Array.from(htmlDocument.body.childNodes).some((node) => node.nodeType === 1);

          return isHTML;
        };

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter = module && module.__esModule ? /******/ () => module['default'] : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /******/ Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be in strict mode.
  (() => {
    'use strict';
    /*!************************************!*\
  !*** ./src/opera/scripts/index.js ***!
  \************************************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./_global.js */ './src/opera/scripts/_global.js',
    );
    /* harmony import */ var _instance_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./_instance.js */ './src/opera/scripts/_instance.js',
    );
    /* harmony import */ var _component_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./_component-list.js */ './src/opera/scripts/_component-list.js',
    );

    // Make instances for all components when the DOM is ready
    document.addEventListener('DOMContentLoaded', () => {
      document.makeInstances = _instance_js__WEBPACK_IMPORTED_MODULE_1__.makeInstances;

      let listOfComponents = []; // Avoid double instantiating  of components
      _component_list_js__WEBPACK_IMPORTED_MODULE_2__['default'].forEach(({ type, selector }) => {
        const nodeList = document.querySelectorAll(`${selector}:not([prevent-opera])`);
        if (nodeList.length > 0) {
          listOfComponents = listOfComponents.concat({ nodeList, type });
        }
      });

      // Loop through the list of components and make instances for each component
      listOfComponents.forEach(({ nodeList, type }) => {
        if (nodeList) {
          (0, _instance_js__WEBPACK_IMPORTED_MODULE_1__.makeInstances)(nodeList, type);
        }
      });
    });
  })();

  /******/
})();

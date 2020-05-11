(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["warehouseDish"],{

/***/ "./assets/js/warehouseDish.js":
/*!************************************!*\
  !*** ./assets/js/warehouseDish.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"); // this variable is the list in the dom, it's initiliazed when the document is ready


var $collectionHolder; // the link which we click on to add new items

var $addNewItem = $('<a href="#" class="btn btn-info">Add new Dish</a>'); // when the page is loaded and ready

$(document).ready(function () {
  // get the collectionHolder, initilize the var by getting the list;
  $collectionHolder = $('#dish_list'); // append the add new item link to the collectionHolder

  $collectionHolder.append($addNewItem); // add an index property to the collectionHolder which helps track the count of forms we have in the list

  $collectionHolder.data('index', $collectionHolder.find('.card').length); // finds all the panels in the list and foreach one of them we add a remove button to it
  // add remove button to existing items

  $collectionHolder.find('.row').each(function () {
    // $(this) means the current panel that we are at
    // which means we pass the panel to the addRemoveButton function
    // inside the function we create a footer and remove link and append them to the panel
    // more informations in the function inside
    addRemoveButton($(this));
  }); // handle the click event for addNewItem

  $addNewItem.click(function (e) {
    // preventDefault() is your  homework if you don't know what it is
    // also look up preventPropagation both are usefull
    e.preventDefault(); // create a new form and append it to the collectionHolder
    // and by form we mean a new panel which contains the form

    addNewForm();
  });
});
/*
 * creates a new form and appends it to the collectionHolder
 */

function addNewForm() {
  // getting the prototype
  // the prototype is the form itself, plain html
  var prototype = $collectionHolder.data('prototype'); // get the index
  // this is the index we set when the document was ready, look above for more info

  var index = $collectionHolder.find("select").length; // create the form

  var newForm = prototype; // replace the __name__ string in the html using a regular expression with the index value

  newForm = newForm.replace(/__name__/g, index); // incrementing the index data and setting it again to the collectionHolder

  $collectionHolder.data('index', index + 1); // create the panel-body and append the form to it

  var $panelBody = $('<div class="mt-1"></div>').append(newForm); // append the removebutton to the new panel

  addRemoveButton($panelBody.children('.row')); // append the panel to the addNewItem
  // we are doing it this way to that the link is always at the bottom of the collectionHolder

  $collectionHolder.children('.card').children('.card-body').append($panelBody);
}
/**
 * adds a remove button to the panel that is passed in the parameter
 * @param $panel
 */


function addRemoveButton($panel) {
  // create remove button
  var $removeButton = $('' + '<div class="col-sm-1"></div>' + '<a href="#" class="btn btn-danger col-sm-2">Remove</a>' + '<div class="col-sm-1"></div>'); // handle the click event of the remove button

  $removeButton.click(function (e) {
    e.preventDefault(); // gets the parent of the button that we clicked on "the panel" and animates it
    // after the animation is done the element (the panel) is removed from the html

    $(e.target).parent('.row').slideUp(1000, function () {
      $(this).remove();
    });
  }); // append the footer to the panel

  $panel.append($removeButton);
}

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $find = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var FIND = 'find';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND);

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ })

},[["./assets/js/warehouseDish.js","runtime","vendors~adminltejs~bootstrapJs~checkboxes~jquery~locateTruck~orderDish~warehouseDish~warehouseProduc~2bbf597f","vendors~bootstrapJs~checkboxes~connectCardFront~locateTruck~orderDish~trad~warehouseDish~warehouseProduct","vendors~adminltejs~bootstrapJs~jquery~locateTruck~warehouseDish~warehouseProduct~weGLinit"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvd2FyZWhvdXNlRGlzaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbmQuanMiXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCIkY29sbGVjdGlvbkhvbGRlciIsIiRhZGROZXdJdGVtIiwiZG9jdW1lbnQiLCJyZWFkeSIsImFwcGVuZCIsImRhdGEiLCJmaW5kIiwibGVuZ3RoIiwiZWFjaCIsImFkZFJlbW92ZUJ1dHRvbiIsImNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWRkTmV3Rm9ybSIsInByb3RvdHlwZSIsImluZGV4IiwibmV3Rm9ybSIsInJlcGxhY2UiLCIkcGFuZWxCb2R5IiwiY2hpbGRyZW4iLCIkcGFuZWwiLCIkcmVtb3ZlQnV0dG9uIiwidGFyZ2V0IiwicGFyZW50Iiwic2xpZGVVcCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLG9EQUFELENBQWYsQyxDQUVBOzs7QUFDQSxJQUFJQyxpQkFBSixDLENBQ0E7O0FBQ0EsSUFBSUMsV0FBVyxHQUFHSCxDQUFDLENBQUMsbURBQUQsQ0FBbkIsQyxDQUNBOztBQUNBQSxDQUFDLENBQUNJLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVk7QUFDMUI7QUFDQUgsbUJBQWlCLEdBQUdGLENBQUMsQ0FBQyxZQUFELENBQXJCLENBRjBCLENBRzFCOztBQUNBRSxtQkFBaUIsQ0FBQ0ksTUFBbEIsQ0FBeUJILFdBQXpCLEVBSjBCLENBSzFCOztBQUNBRCxtQkFBaUIsQ0FBQ0ssSUFBbEIsQ0FBdUIsT0FBdkIsRUFBZ0NMLGlCQUFpQixDQUFDTSxJQUFsQixDQUF1QixPQUF2QixFQUFnQ0MsTUFBaEUsRUFOMEIsQ0FPMUI7QUFDQTs7QUFDQVAsbUJBQWlCLENBQUNNLElBQWxCLENBQXVCLE1BQXZCLEVBQStCRSxJQUEvQixDQUFvQyxZQUFZO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLG1CQUFlLENBQUNYLENBQUMsQ0FBQyxJQUFELENBQUYsQ0FBZjtBQUNILEdBTkQsRUFUMEIsQ0FnQjFCOztBQUNBRyxhQUFXLENBQUNTLEtBQVosQ0FBa0IsVUFBVUMsQ0FBVixFQUFhO0FBQzNCO0FBQ0E7QUFDQUEsS0FBQyxDQUFDQyxjQUFGLEdBSDJCLENBSTNCO0FBQ0E7O0FBQ0FDLGNBQVU7QUFDYixHQVBEO0FBUUgsQ0F6QkQ7QUEwQkE7Ozs7QUFHQSxTQUFTQSxVQUFULEdBQXNCO0FBQ2xCO0FBQ0E7QUFDQSxNQUFJQyxTQUFTLEdBQUdkLGlCQUFpQixDQUFDSyxJQUFsQixDQUF1QixXQUF2QixDQUFoQixDQUhrQixDQUlsQjtBQUNBOztBQUNBLE1BQUlVLEtBQUssR0FBR2YsaUJBQWlCLENBQUNNLElBQWxCLENBQXVCLFFBQXZCLEVBQWlDQyxNQUE3QyxDQU5rQixDQU9sQjs7QUFDQSxNQUFJUyxPQUFPLEdBQUdGLFNBQWQsQ0FSa0IsQ0FTbEI7O0FBQ0FFLFNBQU8sR0FBR0EsT0FBTyxDQUFDQyxPQUFSLENBQWdCLFdBQWhCLEVBQTZCRixLQUE3QixDQUFWLENBVmtCLENBV2xCOztBQUNBZixtQkFBaUIsQ0FBQ0ssSUFBbEIsQ0FBdUIsT0FBdkIsRUFBZ0NVLEtBQUssR0FBQyxDQUF0QyxFQVprQixDQWFsQjs7QUFDQSxNQUFJRyxVQUFVLEdBQUdwQixDQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4Qk0sTUFBOUIsQ0FBcUNZLE9BQXJDLENBQWpCLENBZGtCLENBZWxCOztBQUNBUCxpQkFBZSxDQUFDUyxVQUFVLENBQUNDLFFBQVgsQ0FBb0IsTUFBcEIsQ0FBRCxDQUFmLENBaEJrQixDQWlCbEI7QUFDQTs7QUFDQW5CLG1CQUFpQixDQUFDbUIsUUFBbEIsQ0FBMkIsT0FBM0IsRUFBb0NBLFFBQXBDLENBQTZDLFlBQTdDLEVBQTJEZixNQUEzRCxDQUFrRWMsVUFBbEU7QUFDSDtBQUVEOzs7Ozs7QUFJQSxTQUFTVCxlQUFULENBQTBCVyxNQUExQixFQUFrQztBQUM5QjtBQUNBLE1BQUlDLGFBQWEsR0FBR3ZCLENBQUMsQ0FBQyxLQUNsQiw4QkFEa0IsR0FFbEIsd0RBRmtCLEdBR2xCLDhCQUhpQixDQUFyQixDQUY4QixDQU05Qjs7QUFDQXVCLGVBQWEsQ0FBQ1gsS0FBZCxDQUFvQixVQUFVQyxDQUFWLEVBQWE7QUFDN0JBLEtBQUMsQ0FBQ0MsY0FBRixHQUQ2QixDQUU3QjtBQUNBOztBQUNBZCxLQUFDLENBQUNhLENBQUMsQ0FBQ1csTUFBSCxDQUFELENBQVlDLE1BQVosQ0FBbUIsTUFBbkIsRUFBMkJDLE9BQTNCLENBQW1DLElBQW5DLEVBQXlDLFlBQVk7QUFDakQxQixPQUFDLENBQUMsSUFBRCxDQUFELENBQVEyQixNQUFSO0FBQ0gsS0FGRDtBQUdILEdBUEQsRUFQOEIsQ0FlOUI7O0FBQ0FMLFFBQU0sQ0FBQ2hCLE1BQVAsQ0FBY2lCLGFBQWQ7QUFDSCxDOzs7Ozs7Ozs7Ozs7QUMvRVk7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLFlBQVksbUJBQU8sQ0FBQyx5RkFBOEI7QUFDbEQsdUJBQXVCLG1CQUFPLENBQUMsK0ZBQWlDO0FBQ2hFLDhCQUE4QixtQkFBTyxDQUFDLGlIQUEwQzs7QUFFaEY7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUIsRUFBRTs7QUFFbkU7QUFDQTtBQUNBLEdBQUcsdUVBQXVFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSIsImZpbGUiOiJ3YXJlaG91c2VEaXNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuXHJcbi8vIHRoaXMgdmFyaWFibGUgaXMgdGhlIGxpc3QgaW4gdGhlIGRvbSwgaXQncyBpbml0aWxpYXplZCB3aGVuIHRoZSBkb2N1bWVudCBpcyByZWFkeVxyXG52YXIgJGNvbGxlY3Rpb25Ib2xkZXI7XHJcbi8vIHRoZSBsaW5rIHdoaWNoIHdlIGNsaWNrIG9uIHRvIGFkZCBuZXcgaXRlbXNcclxudmFyICRhZGROZXdJdGVtID0gJCgnPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4taW5mb1wiPkFkZCBuZXcgRGlzaDwvYT4nKTtcclxuLy8gd2hlbiB0aGUgcGFnZSBpcyBsb2FkZWQgYW5kIHJlYWR5XHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIGdldCB0aGUgY29sbGVjdGlvbkhvbGRlciwgaW5pdGlsaXplIHRoZSB2YXIgYnkgZ2V0dGluZyB0aGUgbGlzdDtcclxuICAgICRjb2xsZWN0aW9uSG9sZGVyID0gJCgnI2Rpc2hfbGlzdCcpO1xyXG4gICAgLy8gYXBwZW5kIHRoZSBhZGQgbmV3IGl0ZW0gbGluayB0byB0aGUgY29sbGVjdGlvbkhvbGRlclxyXG4gICAgJGNvbGxlY3Rpb25Ib2xkZXIuYXBwZW5kKCRhZGROZXdJdGVtKTtcclxuICAgIC8vIGFkZCBhbiBpbmRleCBwcm9wZXJ0eSB0byB0aGUgY29sbGVjdGlvbkhvbGRlciB3aGljaCBoZWxwcyB0cmFjayB0aGUgY291bnQgb2YgZm9ybXMgd2UgaGF2ZSBpbiB0aGUgbGlzdFxyXG4gICAgJGNvbGxlY3Rpb25Ib2xkZXIuZGF0YSgnaW5kZXgnLCAkY29sbGVjdGlvbkhvbGRlci5maW5kKCcuY2FyZCcpLmxlbmd0aClcclxuICAgIC8vIGZpbmRzIGFsbCB0aGUgcGFuZWxzIGluIHRoZSBsaXN0IGFuZCBmb3JlYWNoIG9uZSBvZiB0aGVtIHdlIGFkZCBhIHJlbW92ZSBidXR0b24gdG8gaXRcclxuICAgIC8vIGFkZCByZW1vdmUgYnV0dG9uIHRvIGV4aXN0aW5nIGl0ZW1zXHJcbiAgICAkY29sbGVjdGlvbkhvbGRlci5maW5kKCcucm93JykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gJCh0aGlzKSBtZWFucyB0aGUgY3VycmVudCBwYW5lbCB0aGF0IHdlIGFyZSBhdFxyXG4gICAgICAgIC8vIHdoaWNoIG1lYW5zIHdlIHBhc3MgdGhlIHBhbmVsIHRvIHRoZSBhZGRSZW1vdmVCdXR0b24gZnVuY3Rpb25cclxuICAgICAgICAvLyBpbnNpZGUgdGhlIGZ1bmN0aW9uIHdlIGNyZWF0ZSBhIGZvb3RlciBhbmQgcmVtb3ZlIGxpbmsgYW5kIGFwcGVuZCB0aGVtIHRvIHRoZSBwYW5lbFxyXG4gICAgICAgIC8vIG1vcmUgaW5mb3JtYXRpb25zIGluIHRoZSBmdW5jdGlvbiBpbnNpZGVcclxuICAgICAgICBhZGRSZW1vdmVCdXR0b24oJCh0aGlzKSk7XHJcbiAgICB9KTtcclxuICAgIC8vIGhhbmRsZSB0aGUgY2xpY2sgZXZlbnQgZm9yIGFkZE5ld0l0ZW1cclxuICAgICRhZGROZXdJdGVtLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgLy8gcHJldmVudERlZmF1bHQoKSBpcyB5b3VyICBob21ld29yayBpZiB5b3UgZG9uJ3Qga25vdyB3aGF0IGl0IGlzXHJcbiAgICAgICAgLy8gYWxzbyBsb29rIHVwIHByZXZlbnRQcm9wYWdhdGlvbiBib3RoIGFyZSB1c2VmdWxsXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIGNyZWF0ZSBhIG5ldyBmb3JtIGFuZCBhcHBlbmQgaXQgdG8gdGhlIGNvbGxlY3Rpb25Ib2xkZXJcclxuICAgICAgICAvLyBhbmQgYnkgZm9ybSB3ZSBtZWFuIGEgbmV3IHBhbmVsIHdoaWNoIGNvbnRhaW5zIHRoZSBmb3JtXHJcbiAgICAgICAgYWRkTmV3Rm9ybSgpO1xyXG4gICAgfSlcclxufSk7XHJcbi8qXHJcbiAqIGNyZWF0ZXMgYSBuZXcgZm9ybSBhbmQgYXBwZW5kcyBpdCB0byB0aGUgY29sbGVjdGlvbkhvbGRlclxyXG4gKi9cclxuZnVuY3Rpb24gYWRkTmV3Rm9ybSgpIHtcclxuICAgIC8vIGdldHRpbmcgdGhlIHByb3RvdHlwZVxyXG4gICAgLy8gdGhlIHByb3RvdHlwZSBpcyB0aGUgZm9ybSBpdHNlbGYsIHBsYWluIGh0bWxcclxuICAgIHZhciBwcm90b3R5cGUgPSAkY29sbGVjdGlvbkhvbGRlci5kYXRhKCdwcm90b3R5cGUnKTtcclxuICAgIC8vIGdldCB0aGUgaW5kZXhcclxuICAgIC8vIHRoaXMgaXMgdGhlIGluZGV4IHdlIHNldCB3aGVuIHRoZSBkb2N1bWVudCB3YXMgcmVhZHksIGxvb2sgYWJvdmUgZm9yIG1vcmUgaW5mb1xyXG4gICAgdmFyIGluZGV4ID0gJGNvbGxlY3Rpb25Ib2xkZXIuZmluZChcInNlbGVjdFwiKS5sZW5ndGg7XHJcbiAgICAvLyBjcmVhdGUgdGhlIGZvcm1cclxuICAgIHZhciBuZXdGb3JtID0gcHJvdG90eXBlO1xyXG4gICAgLy8gcmVwbGFjZSB0aGUgX19uYW1lX18gc3RyaW5nIGluIHRoZSBodG1sIHVzaW5nIGEgcmVndWxhciBleHByZXNzaW9uIHdpdGggdGhlIGluZGV4IHZhbHVlXHJcbiAgICBuZXdGb3JtID0gbmV3Rm9ybS5yZXBsYWNlKC9fX25hbWVfXy9nLCBpbmRleCk7XHJcbiAgICAvLyBpbmNyZW1lbnRpbmcgdGhlIGluZGV4IGRhdGEgYW5kIHNldHRpbmcgaXQgYWdhaW4gdG8gdGhlIGNvbGxlY3Rpb25Ib2xkZXJcclxuICAgICRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ2luZGV4JywgaW5kZXgrMSk7XHJcbiAgICAvLyBjcmVhdGUgdGhlIHBhbmVsLWJvZHkgYW5kIGFwcGVuZCB0aGUgZm9ybSB0byBpdFxyXG4gICAgdmFyICRwYW5lbEJvZHkgPSAkKCc8ZGl2IGNsYXNzPVwibXQtMVwiPjwvZGl2PicpLmFwcGVuZChuZXdGb3JtKTtcclxuICAgIC8vIGFwcGVuZCB0aGUgcmVtb3ZlYnV0dG9uIHRvIHRoZSBuZXcgcGFuZWxcclxuICAgIGFkZFJlbW92ZUJ1dHRvbigkcGFuZWxCb2R5LmNoaWxkcmVuKCcucm93JykpO1xyXG4gICAgLy8gYXBwZW5kIHRoZSBwYW5lbCB0byB0aGUgYWRkTmV3SXRlbVxyXG4gICAgLy8gd2UgYXJlIGRvaW5nIGl0IHRoaXMgd2F5IHRvIHRoYXQgdGhlIGxpbmsgaXMgYWx3YXlzIGF0IHRoZSBib3R0b20gb2YgdGhlIGNvbGxlY3Rpb25Ib2xkZXJcclxuICAgICRjb2xsZWN0aW9uSG9sZGVyLmNoaWxkcmVuKCcuY2FyZCcpLmNoaWxkcmVuKCcuY2FyZC1ib2R5JykuYXBwZW5kKCRwYW5lbEJvZHkpO1xyXG59XHJcblxyXG4vKipcclxuICogYWRkcyBhIHJlbW92ZSBidXR0b24gdG8gdGhlIHBhbmVsIHRoYXQgaXMgcGFzc2VkIGluIHRoZSBwYXJhbWV0ZXJcclxuICogQHBhcmFtICRwYW5lbFxyXG4gKi9cclxuZnVuY3Rpb24gYWRkUmVtb3ZlQnV0dG9uICgkcGFuZWwpIHtcclxuICAgIC8vIGNyZWF0ZSByZW1vdmUgYnV0dG9uXHJcbiAgICB2YXIgJHJlbW92ZUJ1dHRvbiA9ICQoJycgK1xyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiY29sLXNtLTFcIj48L2Rpdj4nICtcclxuICAgICAgICAnPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGNvbC1zbS0yXCI+UmVtb3ZlPC9hPicgK1xyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiY29sLXNtLTFcIj48L2Rpdj4nKTtcclxuICAgIC8vIGhhbmRsZSB0aGUgY2xpY2sgZXZlbnQgb2YgdGhlIHJlbW92ZSBidXR0b25cclxuICAgICRyZW1vdmVCdXR0b24uY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gZ2V0cyB0aGUgcGFyZW50IG9mIHRoZSBidXR0b24gdGhhdCB3ZSBjbGlja2VkIG9uIFwidGhlIHBhbmVsXCIgYW5kIGFuaW1hdGVzIGl0XHJcbiAgICAgICAgLy8gYWZ0ZXIgdGhlIGFuaW1hdGlvbiBpcyBkb25lIHRoZSBlbGVtZW50ICh0aGUgcGFuZWwpIGlzIHJlbW92ZWQgZnJvbSB0aGUgaHRtbFxyXG4gICAgICAgICQoZS50YXJnZXQpLnBhcmVudCgnLnJvdycpLnNsaWRlVXAoMTAwMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxuICAgIC8vIGFwcGVuZCB0aGUgZm9vdGVyIHRvIHRoZSBwYW5lbFxyXG4gICAgJHBhbmVsLmFwcGVuZCgkcmVtb3ZlQnV0dG9uKTtcclxufSIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRmaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbmQ7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtdXNlcy10by1sZW5ndGgnKTtcblxudmFyIEZJTkQgPSAnZmluZCc7XG52YXIgU0tJUFNfSE9MRVMgPSB0cnVlO1xuXG52YXIgVVNFU19UT19MRU5HVEggPSBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aChGSU5EKTtcblxuLy8gU2hvdWxkbid0IHNraXAgaG9sZXNcbmlmIChGSU5EIGluIFtdKSBBcnJheSgxKVtGSU5EXShmdW5jdGlvbiAoKSB7IFNLSVBTX0hPTEVTID0gZmFsc2U7IH0pO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbmRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFNLSVBTX0hPTEVTIHx8ICFVU0VTX1RPX0xFTkdUSCB9LCB7XG4gIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmFkZFRvVW5zY29wYWJsZXMoRklORCk7XG4iXSwic291cmNlUm9vdCI6IiJ9
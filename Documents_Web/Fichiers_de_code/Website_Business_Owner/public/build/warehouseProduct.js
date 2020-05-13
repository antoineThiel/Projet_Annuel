(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["warehouseProduct"],{

/***/ "./assets/js/warehouseProduct.js":
/*!***************************************!*\
  !*** ./assets/js/warehouseProduct.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"); // this variable is the list in the dom, it's initiliazed when the document is ready


var $collectionHolder; // the link which we click on to add new items

var $addNewItem = $('<a href="#" class="btn btn-info">Add new Product</a>'); // when the page is loaded and ready

$(document).ready(function () {
  // get the collectionHolder, initilize the var by getting the list;
  $collectionHolder = $('#product_list'); // append the add new item link to the collectionHolder

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
    // also look up preventPropagation both are useful
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

  $collectionHolder.children('.card').children('.card-body').append($panelBody); // $addNewItem.before($panelBody);
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

},[["./assets/js/warehouseProduct.js","runtime","vendors~adminltejs~bootstrapJs~checkboxes~jquery~locateTruck~orderDish~warehouseDish~warehouseProduc~2bbf597f","vendors~bootstrapJs~checkboxes~connectCardFront~locateTruck~orderDish~trad~warehouseDish~warehouseProduct","vendors~adminltejs~bootstrapJs~jquery~locateTruck~warehouseDish~warehouseProduct~weGLinit"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvd2FyZWhvdXNlUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbmQuanMiXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCIkY29sbGVjdGlvbkhvbGRlciIsIiRhZGROZXdJdGVtIiwiZG9jdW1lbnQiLCJyZWFkeSIsImFwcGVuZCIsImRhdGEiLCJmaW5kIiwibGVuZ3RoIiwiZWFjaCIsImFkZFJlbW92ZUJ1dHRvbiIsImNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWRkTmV3Rm9ybSIsInByb3RvdHlwZSIsImluZGV4IiwibmV3Rm9ybSIsInJlcGxhY2UiLCIkcGFuZWxCb2R5IiwiY2hpbGRyZW4iLCIkcGFuZWwiLCIkcmVtb3ZlQnV0dG9uIiwidGFyZ2V0IiwicGFyZW50Iiwic2xpZGVVcCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLG9EQUFELENBQWYsQyxDQUVBOzs7QUFDQSxJQUFJQyxpQkFBSixDLENBQ0E7O0FBQ0EsSUFBSUMsV0FBVyxHQUFHSCxDQUFDLENBQUMsc0RBQUQsQ0FBbkIsQyxDQUNBOztBQUNBQSxDQUFDLENBQUNJLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVk7QUFDMUI7QUFDQUgsbUJBQWlCLEdBQUdGLENBQUMsQ0FBQyxlQUFELENBQXJCLENBRjBCLENBSTFCOztBQUNBRSxtQkFBaUIsQ0FBQ0ksTUFBbEIsQ0FBeUJILFdBQXpCLEVBTDBCLENBTTFCOztBQUNBRCxtQkFBaUIsQ0FBQ0ssSUFBbEIsQ0FBdUIsT0FBdkIsRUFBZ0NMLGlCQUFpQixDQUFDTSxJQUFsQixDQUF1QixPQUF2QixFQUFnQ0MsTUFBaEUsRUFQMEIsQ0FRMUI7QUFDQTs7QUFDQVAsbUJBQWlCLENBQUNNLElBQWxCLENBQXVCLE1BQXZCLEVBQStCRSxJQUEvQixDQUFvQyxZQUFZO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLG1CQUFlLENBQUNYLENBQUMsQ0FBQyxJQUFELENBQUYsQ0FBZjtBQUNILEdBTkQsRUFWMEIsQ0FpQjFCOztBQUNBRyxhQUFXLENBQUNTLEtBQVosQ0FBa0IsVUFBVUMsQ0FBVixFQUFhO0FBQzNCO0FBQ0E7QUFDQUEsS0FBQyxDQUFDQyxjQUFGLEdBSDJCLENBSTNCO0FBQ0E7O0FBQ0FDLGNBQVU7QUFDYixHQVBEO0FBUUgsQ0ExQkQ7QUEyQkE7Ozs7QUFHQSxTQUFTQSxVQUFULEdBQXNCO0FBQ2xCO0FBQ0E7QUFDQSxNQUFJQyxTQUFTLEdBQUdkLGlCQUFpQixDQUFDSyxJQUFsQixDQUF1QixXQUF2QixDQUFoQixDQUhrQixDQUlsQjtBQUNBOztBQUNBLE1BQUlVLEtBQUssR0FBR2YsaUJBQWlCLENBQUNNLElBQWxCLENBQXVCLFFBQXZCLEVBQWlDQyxNQUE3QyxDQU5rQixDQU9sQjs7QUFDQSxNQUFJUyxPQUFPLEdBQUdGLFNBQWQsQ0FSa0IsQ0FTbEI7O0FBQ0FFLFNBQU8sR0FBR0EsT0FBTyxDQUFDQyxPQUFSLENBQWdCLFdBQWhCLEVBQTZCRixLQUE3QixDQUFWLENBVmtCLENBV2xCOztBQUNBZixtQkFBaUIsQ0FBQ0ssSUFBbEIsQ0FBdUIsT0FBdkIsRUFBZ0NVLEtBQUssR0FBQyxDQUF0QyxFQVprQixDQWFsQjs7QUFDQSxNQUFJRyxVQUFVLEdBQUdwQixDQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4Qk0sTUFBOUIsQ0FBcUNZLE9BQXJDLENBQWpCLENBZGtCLENBZWxCOztBQUNBUCxpQkFBZSxDQUFDUyxVQUFVLENBQUNDLFFBQVgsQ0FBb0IsTUFBcEIsQ0FBRCxDQUFmLENBaEJrQixDQWlCbEI7QUFDQTs7QUFDQW5CLG1CQUFpQixDQUFDbUIsUUFBbEIsQ0FBMkIsT0FBM0IsRUFBb0NBLFFBQXBDLENBQTZDLFlBQTdDLEVBQTJEZixNQUEzRCxDQUFrRWMsVUFBbEUsRUFuQmtCLENBb0JsQjtBQUNIO0FBRUQ7Ozs7OztBQUlBLFNBQVNULGVBQVQsQ0FBMEJXLE1BQTFCLEVBQWtDO0FBQzlCO0FBQ0EsTUFBSUMsYUFBYSxHQUFHdkIsQ0FBQyxDQUFDLEtBQ2xCLDhCQURrQixHQUVsQix3REFGa0IsR0FHbEIsOEJBSGlCLENBQXJCLENBRjhCLENBTTlCOztBQUNBdUIsZUFBYSxDQUFDWCxLQUFkLENBQW9CLFVBQVVDLENBQVYsRUFBYTtBQUM3QkEsS0FBQyxDQUFDQyxjQUFGLEdBRDZCLENBRTdCO0FBQ0E7O0FBQ0FkLEtBQUMsQ0FBQ2EsQ0FBQyxDQUFDVyxNQUFILENBQUQsQ0FBWUMsTUFBWixDQUFtQixNQUFuQixFQUEyQkMsT0FBM0IsQ0FBbUMsSUFBbkMsRUFBeUMsWUFBWTtBQUNqRDFCLE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTJCLE1BQVI7QUFDSCxLQUZEO0FBR0gsR0FQRCxFQVA4QixDQWU5Qjs7QUFDQUwsUUFBTSxDQUFDaEIsTUFBUCxDQUFjaUIsYUFBZDtBQUNILEM7Ozs7Ozs7Ozs7OztBQ2pGWTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsWUFBWSxtQkFBTyxDQUFDLHlGQUE4QjtBQUNsRCx1QkFBdUIsbUJBQU8sQ0FBQywrRkFBaUM7QUFDaEUsOEJBQThCLG1CQUFPLENBQUMsaUhBQTBDOztBQUVoRjtBQUNBOztBQUVBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQixFQUFFOztBQUVuRTtBQUNBO0FBQ0EsR0FBRyx1RUFBdUU7QUFDMUU7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBIiwiZmlsZSI6IndhcmVob3VzZVByb2R1Y3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5cclxuLy8gdGhpcyB2YXJpYWJsZSBpcyB0aGUgbGlzdCBpbiB0aGUgZG9tLCBpdCdzIGluaXRpbGlhemVkIHdoZW4gdGhlIGRvY3VtZW50IGlzIHJlYWR5XHJcbnZhciAkY29sbGVjdGlvbkhvbGRlcjtcclxuLy8gdGhlIGxpbmsgd2hpY2ggd2UgY2xpY2sgb24gdG8gYWRkIG5ldyBpdGVtc1xyXG52YXIgJGFkZE5ld0l0ZW0gPSAkKCc8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvXCI+QWRkIG5ldyBQcm9kdWN0PC9hPicpO1xyXG4vLyB3aGVuIHRoZSBwYWdlIGlzIGxvYWRlZCBhbmQgcmVhZHlcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gZ2V0IHRoZSBjb2xsZWN0aW9uSG9sZGVyLCBpbml0aWxpemUgdGhlIHZhciBieSBnZXR0aW5nIHRoZSBsaXN0O1xyXG4gICAgJGNvbGxlY3Rpb25Ib2xkZXIgPSAkKCcjcHJvZHVjdF9saXN0Jyk7XHJcblxyXG4gICAgLy8gYXBwZW5kIHRoZSBhZGQgbmV3IGl0ZW0gbGluayB0byB0aGUgY29sbGVjdGlvbkhvbGRlclxyXG4gICAgJGNvbGxlY3Rpb25Ib2xkZXIuYXBwZW5kKCRhZGROZXdJdGVtKTtcclxuICAgIC8vIGFkZCBhbiBpbmRleCBwcm9wZXJ0eSB0byB0aGUgY29sbGVjdGlvbkhvbGRlciB3aGljaCBoZWxwcyB0cmFjayB0aGUgY291bnQgb2YgZm9ybXMgd2UgaGF2ZSBpbiB0aGUgbGlzdFxyXG4gICAgJGNvbGxlY3Rpb25Ib2xkZXIuZGF0YSgnaW5kZXgnLCAkY29sbGVjdGlvbkhvbGRlci5maW5kKCcuY2FyZCcpLmxlbmd0aClcclxuICAgIC8vIGZpbmRzIGFsbCB0aGUgcGFuZWxzIGluIHRoZSBsaXN0IGFuZCBmb3JlYWNoIG9uZSBvZiB0aGVtIHdlIGFkZCBhIHJlbW92ZSBidXR0b24gdG8gaXRcclxuICAgIC8vIGFkZCByZW1vdmUgYnV0dG9uIHRvIGV4aXN0aW5nIGl0ZW1zXHJcbiAgICAkY29sbGVjdGlvbkhvbGRlci5maW5kKCcucm93JykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gJCh0aGlzKSBtZWFucyB0aGUgY3VycmVudCBwYW5lbCB0aGF0IHdlIGFyZSBhdFxyXG4gICAgICAgIC8vIHdoaWNoIG1lYW5zIHdlIHBhc3MgdGhlIHBhbmVsIHRvIHRoZSBhZGRSZW1vdmVCdXR0b24gZnVuY3Rpb25cclxuICAgICAgICAvLyBpbnNpZGUgdGhlIGZ1bmN0aW9uIHdlIGNyZWF0ZSBhIGZvb3RlciBhbmQgcmVtb3ZlIGxpbmsgYW5kIGFwcGVuZCB0aGVtIHRvIHRoZSBwYW5lbFxyXG4gICAgICAgIC8vIG1vcmUgaW5mb3JtYXRpb25zIGluIHRoZSBmdW5jdGlvbiBpbnNpZGVcclxuICAgICAgICBhZGRSZW1vdmVCdXR0b24oJCh0aGlzKSk7XHJcbiAgICB9KTtcclxuICAgIC8vIGhhbmRsZSB0aGUgY2xpY2sgZXZlbnQgZm9yIGFkZE5ld0l0ZW1cclxuICAgICRhZGROZXdJdGVtLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgLy8gcHJldmVudERlZmF1bHQoKSBpcyB5b3VyICBob21ld29yayBpZiB5b3UgZG9uJ3Qga25vdyB3aGF0IGl0IGlzXHJcbiAgICAgICAgLy8gYWxzbyBsb29rIHVwIHByZXZlbnRQcm9wYWdhdGlvbiBib3RoIGFyZSB1c2VmdWxcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gY3JlYXRlIGEgbmV3IGZvcm0gYW5kIGFwcGVuZCBpdCB0byB0aGUgY29sbGVjdGlvbkhvbGRlclxyXG4gICAgICAgIC8vIGFuZCBieSBmb3JtIHdlIG1lYW4gYSBuZXcgcGFuZWwgd2hpY2ggY29udGFpbnMgdGhlIGZvcm1cclxuICAgICAgICBhZGROZXdGb3JtKCk7XHJcbiAgICB9KVxyXG59KTtcclxuLypcclxuICogY3JlYXRlcyBhIG5ldyBmb3JtIGFuZCBhcHBlbmRzIGl0IHRvIHRoZSBjb2xsZWN0aW9uSG9sZGVyXHJcbiAqL1xyXG5mdW5jdGlvbiBhZGROZXdGb3JtKCkge1xyXG4gICAgLy8gZ2V0dGluZyB0aGUgcHJvdG90eXBlXHJcbiAgICAvLyB0aGUgcHJvdG90eXBlIGlzIHRoZSBmb3JtIGl0c2VsZiwgcGxhaW4gaHRtbFxyXG4gICAgdmFyIHByb3RvdHlwZSA9ICRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ3Byb3RvdHlwZScpO1xyXG4gICAgLy8gZ2V0IHRoZSBpbmRleFxyXG4gICAgLy8gdGhpcyBpcyB0aGUgaW5kZXggd2Ugc2V0IHdoZW4gdGhlIGRvY3VtZW50IHdhcyByZWFkeSwgbG9vayBhYm92ZSBmb3IgbW9yZSBpbmZvXHJcbiAgICB2YXIgaW5kZXggPSAkY29sbGVjdGlvbkhvbGRlci5maW5kKFwic2VsZWN0XCIpLmxlbmd0aDtcclxuICAgIC8vIGNyZWF0ZSB0aGUgZm9ybVxyXG4gICAgdmFyIG5ld0Zvcm0gPSBwcm90b3R5cGU7XHJcbiAgICAvLyByZXBsYWNlIHRoZSBfX25hbWVfXyBzdHJpbmcgaW4gdGhlIGh0bWwgdXNpbmcgYSByZWd1bGFyIGV4cHJlc3Npb24gd2l0aCB0aGUgaW5kZXggdmFsdWVcclxuICAgIG5ld0Zvcm0gPSBuZXdGb3JtLnJlcGxhY2UoL19fbmFtZV9fL2csIGluZGV4KTtcclxuICAgIC8vIGluY3JlbWVudGluZyB0aGUgaW5kZXggZGF0YSBhbmQgc2V0dGluZyBpdCBhZ2FpbiB0byB0aGUgY29sbGVjdGlvbkhvbGRlclxyXG4gICAgJGNvbGxlY3Rpb25Ib2xkZXIuZGF0YSgnaW5kZXgnLCBpbmRleCsxKTtcclxuICAgIC8vIGNyZWF0ZSB0aGUgcGFuZWwtYm9keSBhbmQgYXBwZW5kIHRoZSBmb3JtIHRvIGl0XHJcbiAgICB2YXIgJHBhbmVsQm9keSA9ICQoJzxkaXYgY2xhc3M9XCJtdC0xXCI+PC9kaXY+JykuYXBwZW5kKG5ld0Zvcm0pO1xyXG4gICAgLy8gYXBwZW5kIHRoZSByZW1vdmVidXR0b24gdG8gdGhlIG5ldyBwYW5lbFxyXG4gICAgYWRkUmVtb3ZlQnV0dG9uKCRwYW5lbEJvZHkuY2hpbGRyZW4oJy5yb3cnKSk7XHJcbiAgICAvLyBhcHBlbmQgdGhlIHBhbmVsIHRvIHRoZSBhZGROZXdJdGVtXHJcbiAgICAvLyB3ZSBhcmUgZG9pbmcgaXQgdGhpcyB3YXkgdG8gdGhhdCB0aGUgbGluayBpcyBhbHdheXMgYXQgdGhlIGJvdHRvbSBvZiB0aGUgY29sbGVjdGlvbkhvbGRlclxyXG4gICAgJGNvbGxlY3Rpb25Ib2xkZXIuY2hpbGRyZW4oJy5jYXJkJykuY2hpbGRyZW4oJy5jYXJkLWJvZHknKS5hcHBlbmQoJHBhbmVsQm9keSk7XHJcbiAgICAvLyAkYWRkTmV3SXRlbS5iZWZvcmUoJHBhbmVsQm9keSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBhZGRzIGEgcmVtb3ZlIGJ1dHRvbiB0byB0aGUgcGFuZWwgdGhhdCBpcyBwYXNzZWQgaW4gdGhlIHBhcmFtZXRlclxyXG4gKiBAcGFyYW0gJHBhbmVsXHJcbiAqL1xyXG5mdW5jdGlvbiBhZGRSZW1vdmVCdXR0b24gKCRwYW5lbCkge1xyXG4gICAgLy8gY3JlYXRlIHJlbW92ZSBidXR0b25cclxuICAgIHZhciAkcmVtb3ZlQnV0dG9uID0gJCgnJyArXHJcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJjb2wtc20tMVwiPjwvZGl2PicgK1xyXG4gICAgICAgICc8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgY29sLXNtLTJcIj5SZW1vdmU8L2E+JyArXHJcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJjb2wtc20tMVwiPjwvZGl2PicpO1xyXG4gICAgLy8gaGFuZGxlIHRoZSBjbGljayBldmVudCBvZiB0aGUgcmVtb3ZlIGJ1dHRvblxyXG4gICAgJHJlbW92ZUJ1dHRvbi5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyBnZXRzIHRoZSBwYXJlbnQgb2YgdGhlIGJ1dHRvbiB0aGF0IHdlIGNsaWNrZWQgb24gXCJ0aGUgcGFuZWxcIiBhbmQgYW5pbWF0ZXMgaXRcclxuICAgICAgICAvLyBhZnRlciB0aGUgYW5pbWF0aW9uIGlzIGRvbmUgdGhlIGVsZW1lbnQgKHRoZSBwYW5lbCkgaXMgcmVtb3ZlZCBmcm9tIHRoZSBodG1sXHJcbiAgICAgICAgJChlLnRhcmdldCkucGFyZW50KCcucm93Jykuc2xpZGVVcCgxMDAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG4gICAgLy8gYXBwZW5kIHRoZSBmb290ZXIgdG8gdGhlIHBhbmVsXHJcbiAgICAkcGFuZWwuYXBwZW5kKCRyZW1vdmVCdXR0b24pO1xyXG59IiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZmluZDtcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC11c2VzLXRvLWxlbmd0aCcpO1xuXG52YXIgRklORCA9ICdmaW5kJztcbnZhciBTS0lQU19IT0xFUyA9IHRydWU7XG5cbnZhciBVU0VTX1RPX0xFTkdUSCA9IGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoKEZJTkQpO1xuXG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuaWYgKEZJTkQgaW4gW10pIEFycmF5KDEpW0ZJTkRdKGZ1bmN0aW9uICgpIHsgU0tJUFNfSE9MRVMgPSBmYWxzZTsgfSk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmluZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogU0tJUFNfSE9MRVMgfHwgIVVTRVNfVE9fTEVOR1RIIH0sIHtcbiAgZmluZDogZnVuY3Rpb24gZmluZChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcyhGSU5EKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
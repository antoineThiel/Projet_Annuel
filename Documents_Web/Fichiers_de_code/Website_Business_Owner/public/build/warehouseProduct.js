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

  $collectionHolder.find('.card').each(function () {
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

  var index = $collectionHolder.data('index'); // create the form

  var newForm = prototype; // replace the __name__ string in the html using a regular expression with the index value

  newForm = newForm.replace(/__name__/g, index); // incrementing the index data and setting it again to the collectionHolder

  $collectionHolder.data('index', index + 1); // create the panel
  // this is the panel that will be appending to the collectionHolder

  var $panel = $('<div class="card card-warning"><div class="card-header"><strong>Product</strong></div></div>'); // create the panel-body and append the form to it

  var $panelBody = $('<div class="card-body"></div>').append(newForm); // append the body to the panel

  $panel.append($panelBody); // append the removebutton to the new panel

  addRemoveButton($panel); // append the panel to the addNewItem
  // we are doing it this way to that the link is always at the bottom of the collectionHolder

  $addNewItem.before($panel);
}
/**
 * adds a remove button to the panel that is passed in the parameter
 * @param $panel
 */


function addRemoveButton($panel) {
  // create remove button
  var $removeButton = $('<a href="#" class="btn btn-danger">Remove</a>'); // appending the removebutton to the panel footer

  var $panelFooter = $('<div class="card-footer"></div>').append($removeButton); // handle the click event of the remove button

  $removeButton.click(function (e) {
    e.preventDefault(); // gets the parent of the button that we clicked on "the panel" and animates it
    // after the animation is done the element (the panel) is removed from the html

    $(e.target).parents('.card-warning').slideUp(1000, function () {
      $(this).remove();
    });
  }); // append the footer to the panel

  $panel.append($panelFooter);
}

/***/ })

},[["./assets/js/warehouseProduct.js","runtime","vendors~adminltejs~bootstrapJs~jquery~warehouseDish~warehouseProduct","vendors~bootstrapJs~warehouseDish~warehouseProduct"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvd2FyZWhvdXNlUHJvZHVjdC5qcyJdLCJuYW1lcyI6WyIkIiwicmVxdWlyZSIsIiRjb2xsZWN0aW9uSG9sZGVyIiwiJGFkZE5ld0l0ZW0iLCJkb2N1bWVudCIsInJlYWR5IiwiYXBwZW5kIiwiZGF0YSIsImZpbmQiLCJsZW5ndGgiLCJlYWNoIiwiYWRkUmVtb3ZlQnV0dG9uIiwiY2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJhZGROZXdGb3JtIiwicHJvdG90eXBlIiwiaW5kZXgiLCJuZXdGb3JtIiwicmVwbGFjZSIsIiRwYW5lbCIsIiRwYW5lbEJvZHkiLCJiZWZvcmUiLCIkcmVtb3ZlQnV0dG9uIiwiJHBhbmVsRm9vdGVyIiwidGFyZ2V0IiwicGFyZW50cyIsInNsaWRlVXAiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUMsR0FBR0MsbUJBQU8sQ0FBQyxvREFBRCxDQUFmLEMsQ0FFQTs7O0FBQ0EsSUFBSUMsaUJBQUosQyxDQUNBOztBQUNBLElBQUlDLFdBQVcsR0FBR0gsQ0FBQyxDQUFDLHNEQUFELENBQW5CLEMsQ0FDQTs7QUFDQUEsQ0FBQyxDQUFDSSxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFZO0FBQzFCO0FBQ0FILG1CQUFpQixHQUFHRixDQUFDLENBQUMsZUFBRCxDQUFyQixDQUYwQixDQUcxQjs7QUFDQUUsbUJBQWlCLENBQUNJLE1BQWxCLENBQXlCSCxXQUF6QixFQUowQixDQUsxQjs7QUFDQUQsbUJBQWlCLENBQUNLLElBQWxCLENBQXVCLE9BQXZCLEVBQWdDTCxpQkFBaUIsQ0FBQ00sSUFBbEIsQ0FBdUIsT0FBdkIsRUFBZ0NDLE1BQWhFLEVBTjBCLENBTzFCO0FBQ0E7O0FBQ0FQLG1CQUFpQixDQUFDTSxJQUFsQixDQUF1QixPQUF2QixFQUFnQ0UsSUFBaEMsQ0FBcUMsWUFBWTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBQyxtQkFBZSxDQUFDWCxDQUFDLENBQUMsSUFBRCxDQUFGLENBQWY7QUFDSCxHQU5ELEVBVDBCLENBZ0IxQjs7QUFDQUcsYUFBVyxDQUFDUyxLQUFaLENBQWtCLFVBQVVDLENBQVYsRUFBYTtBQUMzQjtBQUNBO0FBQ0FBLEtBQUMsQ0FBQ0MsY0FBRixHQUgyQixDQUkzQjtBQUNBOztBQUNBQyxjQUFVO0FBQ2IsR0FQRDtBQVFILENBekJEO0FBMEJBOzs7O0FBR0EsU0FBU0EsVUFBVCxHQUFzQjtBQUNsQjtBQUNBO0FBQ0EsTUFBSUMsU0FBUyxHQUFHZCxpQkFBaUIsQ0FBQ0ssSUFBbEIsQ0FBdUIsV0FBdkIsQ0FBaEIsQ0FIa0IsQ0FJbEI7QUFDQTs7QUFDQSxNQUFJVSxLQUFLLEdBQUdmLGlCQUFpQixDQUFDSyxJQUFsQixDQUF1QixPQUF2QixDQUFaLENBTmtCLENBT2xCOztBQUNBLE1BQUlXLE9BQU8sR0FBR0YsU0FBZCxDQVJrQixDQVNsQjs7QUFDQUUsU0FBTyxHQUFHQSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsV0FBaEIsRUFBNkJGLEtBQTdCLENBQVYsQ0FWa0IsQ0FXbEI7O0FBQ0FmLG1CQUFpQixDQUFDSyxJQUFsQixDQUF1QixPQUF2QixFQUFnQ1UsS0FBSyxHQUFDLENBQXRDLEVBWmtCLENBYWxCO0FBQ0E7O0FBQ0EsTUFBSUcsTUFBTSxHQUFHcEIsQ0FBQyxDQUFDLDhGQUFELENBQWQsQ0Fma0IsQ0FnQmxCOztBQUNBLE1BQUlxQixVQUFVLEdBQUdyQixDQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ00sTUFBbkMsQ0FBMENZLE9BQTFDLENBQWpCLENBakJrQixDQWtCbEI7O0FBQ0FFLFFBQU0sQ0FBQ2QsTUFBUCxDQUFjZSxVQUFkLEVBbkJrQixDQW9CbEI7O0FBQ0FWLGlCQUFlLENBQUNTLE1BQUQsQ0FBZixDQXJCa0IsQ0FzQmxCO0FBQ0E7O0FBQ0FqQixhQUFXLENBQUNtQixNQUFaLENBQW1CRixNQUFuQjtBQUNIO0FBRUQ7Ozs7OztBQUlBLFNBQVNULGVBQVQsQ0FBMEJTLE1BQTFCLEVBQWtDO0FBQzlCO0FBQ0EsTUFBSUcsYUFBYSxHQUFHdkIsQ0FBQyxDQUFDLCtDQUFELENBQXJCLENBRjhCLENBRzlCOztBQUNBLE1BQUl3QixZQUFZLEdBQUd4QixDQUFDLENBQUMsaUNBQUQsQ0FBRCxDQUFxQ00sTUFBckMsQ0FBNENpQixhQUE1QyxDQUFuQixDQUo4QixDQUs5Qjs7QUFDQUEsZUFBYSxDQUFDWCxLQUFkLENBQW9CLFVBQVVDLENBQVYsRUFBYTtBQUM3QkEsS0FBQyxDQUFDQyxjQUFGLEdBRDZCLENBRTdCO0FBQ0E7O0FBQ0FkLEtBQUMsQ0FBQ2EsQ0FBQyxDQUFDWSxNQUFILENBQUQsQ0FBWUMsT0FBWixDQUFvQixlQUFwQixFQUFxQ0MsT0FBckMsQ0FBNkMsSUFBN0MsRUFBbUQsWUFBWTtBQUMzRDNCLE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRCLE1BQVI7QUFDSCxLQUZEO0FBR0gsR0FQRCxFQU44QixDQWM5Qjs7QUFDQVIsUUFBTSxDQUFDZCxNQUFQLENBQWNrQixZQUFkO0FBQ0gsQyIsImZpbGUiOiJ3YXJlaG91c2VQcm9kdWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuXHJcbi8vIHRoaXMgdmFyaWFibGUgaXMgdGhlIGxpc3QgaW4gdGhlIGRvbSwgaXQncyBpbml0aWxpYXplZCB3aGVuIHRoZSBkb2N1bWVudCBpcyByZWFkeVxyXG52YXIgJGNvbGxlY3Rpb25Ib2xkZXI7XHJcbi8vIHRoZSBsaW5rIHdoaWNoIHdlIGNsaWNrIG9uIHRvIGFkZCBuZXcgaXRlbXNcclxudmFyICRhZGROZXdJdGVtID0gJCgnPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4taW5mb1wiPkFkZCBuZXcgUHJvZHVjdDwvYT4nKTtcclxuLy8gd2hlbiB0aGUgcGFnZSBpcyBsb2FkZWQgYW5kIHJlYWR5XHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIGdldCB0aGUgY29sbGVjdGlvbkhvbGRlciwgaW5pdGlsaXplIHRoZSB2YXIgYnkgZ2V0dGluZyB0aGUgbGlzdDtcclxuICAgICRjb2xsZWN0aW9uSG9sZGVyID0gJCgnI3Byb2R1Y3RfbGlzdCcpO1xyXG4gICAgLy8gYXBwZW5kIHRoZSBhZGQgbmV3IGl0ZW0gbGluayB0byB0aGUgY29sbGVjdGlvbkhvbGRlclxyXG4gICAgJGNvbGxlY3Rpb25Ib2xkZXIuYXBwZW5kKCRhZGROZXdJdGVtKTtcclxuICAgIC8vIGFkZCBhbiBpbmRleCBwcm9wZXJ0eSB0byB0aGUgY29sbGVjdGlvbkhvbGRlciB3aGljaCBoZWxwcyB0cmFjayB0aGUgY291bnQgb2YgZm9ybXMgd2UgaGF2ZSBpbiB0aGUgbGlzdFxyXG4gICAgJGNvbGxlY3Rpb25Ib2xkZXIuZGF0YSgnaW5kZXgnLCAkY29sbGVjdGlvbkhvbGRlci5maW5kKCcuY2FyZCcpLmxlbmd0aClcclxuICAgIC8vIGZpbmRzIGFsbCB0aGUgcGFuZWxzIGluIHRoZSBsaXN0IGFuZCBmb3JlYWNoIG9uZSBvZiB0aGVtIHdlIGFkZCBhIHJlbW92ZSBidXR0b24gdG8gaXRcclxuICAgIC8vIGFkZCByZW1vdmUgYnV0dG9uIHRvIGV4aXN0aW5nIGl0ZW1zXHJcbiAgICAkY29sbGVjdGlvbkhvbGRlci5maW5kKCcuY2FyZCcpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vICQodGhpcykgbWVhbnMgdGhlIGN1cnJlbnQgcGFuZWwgdGhhdCB3ZSBhcmUgYXRcclxuICAgICAgICAvLyB3aGljaCBtZWFucyB3ZSBwYXNzIHRoZSBwYW5lbCB0byB0aGUgYWRkUmVtb3ZlQnV0dG9uIGZ1bmN0aW9uXHJcbiAgICAgICAgLy8gaW5zaWRlIHRoZSBmdW5jdGlvbiB3ZSBjcmVhdGUgYSBmb290ZXIgYW5kIHJlbW92ZSBsaW5rIGFuZCBhcHBlbmQgdGhlbSB0byB0aGUgcGFuZWxcclxuICAgICAgICAvLyBtb3JlIGluZm9ybWF0aW9ucyBpbiB0aGUgZnVuY3Rpb24gaW5zaWRlXHJcbiAgICAgICAgYWRkUmVtb3ZlQnV0dG9uKCQodGhpcykpO1xyXG4gICAgfSk7XHJcbiAgICAvLyBoYW5kbGUgdGhlIGNsaWNrIGV2ZW50IGZvciBhZGROZXdJdGVtXHJcbiAgICAkYWRkTmV3SXRlbS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIC8vIHByZXZlbnREZWZhdWx0KCkgaXMgeW91ciAgaG9tZXdvcmsgaWYgeW91IGRvbid0IGtub3cgd2hhdCBpdCBpc1xyXG4gICAgICAgIC8vIGFsc28gbG9vayB1cCBwcmV2ZW50UHJvcGFnYXRpb24gYm90aCBhcmUgdXNlZnVsbFxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyBjcmVhdGUgYSBuZXcgZm9ybSBhbmQgYXBwZW5kIGl0IHRvIHRoZSBjb2xsZWN0aW9uSG9sZGVyXHJcbiAgICAgICAgLy8gYW5kIGJ5IGZvcm0gd2UgbWVhbiBhIG5ldyBwYW5lbCB3aGljaCBjb250YWlucyB0aGUgZm9ybVxyXG4gICAgICAgIGFkZE5ld0Zvcm0oKTtcclxuICAgIH0pXHJcbn0pO1xyXG4vKlxyXG4gKiBjcmVhdGVzIGEgbmV3IGZvcm0gYW5kIGFwcGVuZHMgaXQgdG8gdGhlIGNvbGxlY3Rpb25Ib2xkZXJcclxuICovXHJcbmZ1bmN0aW9uIGFkZE5ld0Zvcm0oKSB7XHJcbiAgICAvLyBnZXR0aW5nIHRoZSBwcm90b3R5cGVcclxuICAgIC8vIHRoZSBwcm90b3R5cGUgaXMgdGhlIGZvcm0gaXRzZWxmLCBwbGFpbiBodG1sXHJcbiAgICB2YXIgcHJvdG90eXBlID0gJGNvbGxlY3Rpb25Ib2xkZXIuZGF0YSgncHJvdG90eXBlJyk7XHJcbiAgICAvLyBnZXQgdGhlIGluZGV4XHJcbiAgICAvLyB0aGlzIGlzIHRoZSBpbmRleCB3ZSBzZXQgd2hlbiB0aGUgZG9jdW1lbnQgd2FzIHJlYWR5LCBsb29rIGFib3ZlIGZvciBtb3JlIGluZm9cclxuICAgIHZhciBpbmRleCA9ICRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ2luZGV4Jyk7XHJcbiAgICAvLyBjcmVhdGUgdGhlIGZvcm1cclxuICAgIHZhciBuZXdGb3JtID0gcHJvdG90eXBlO1xyXG4gICAgLy8gcmVwbGFjZSB0aGUgX19uYW1lX18gc3RyaW5nIGluIHRoZSBodG1sIHVzaW5nIGEgcmVndWxhciBleHByZXNzaW9uIHdpdGggdGhlIGluZGV4IHZhbHVlXHJcbiAgICBuZXdGb3JtID0gbmV3Rm9ybS5yZXBsYWNlKC9fX25hbWVfXy9nLCBpbmRleCk7XHJcbiAgICAvLyBpbmNyZW1lbnRpbmcgdGhlIGluZGV4IGRhdGEgYW5kIHNldHRpbmcgaXQgYWdhaW4gdG8gdGhlIGNvbGxlY3Rpb25Ib2xkZXJcclxuICAgICRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ2luZGV4JywgaW5kZXgrMSk7XHJcbiAgICAvLyBjcmVhdGUgdGhlIHBhbmVsXHJcbiAgICAvLyB0aGlzIGlzIHRoZSBwYW5lbCB0aGF0IHdpbGwgYmUgYXBwZW5kaW5nIHRvIHRoZSBjb2xsZWN0aW9uSG9sZGVyXHJcbiAgICB2YXIgJHBhbmVsID0gJCgnPGRpdiBjbGFzcz1cImNhcmQgY2FyZC13YXJuaW5nXCI+PGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+PHN0cm9uZz5Qcm9kdWN0PC9zdHJvbmc+PC9kaXY+PC9kaXY+Jyk7XHJcbiAgICAvLyBjcmVhdGUgdGhlIHBhbmVsLWJvZHkgYW5kIGFwcGVuZCB0aGUgZm9ybSB0byBpdFxyXG4gICAgdmFyICRwYW5lbEJvZHkgPSAkKCc8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+PC9kaXY+JykuYXBwZW5kKG5ld0Zvcm0pO1xyXG4gICAgLy8gYXBwZW5kIHRoZSBib2R5IHRvIHRoZSBwYW5lbFxyXG4gICAgJHBhbmVsLmFwcGVuZCgkcGFuZWxCb2R5KTtcclxuICAgIC8vIGFwcGVuZCB0aGUgcmVtb3ZlYnV0dG9uIHRvIHRoZSBuZXcgcGFuZWxcclxuICAgIGFkZFJlbW92ZUJ1dHRvbigkcGFuZWwpO1xyXG4gICAgLy8gYXBwZW5kIHRoZSBwYW5lbCB0byB0aGUgYWRkTmV3SXRlbVxyXG4gICAgLy8gd2UgYXJlIGRvaW5nIGl0IHRoaXMgd2F5IHRvIHRoYXQgdGhlIGxpbmsgaXMgYWx3YXlzIGF0IHRoZSBib3R0b20gb2YgdGhlIGNvbGxlY3Rpb25Ib2xkZXJcclxuICAgICRhZGROZXdJdGVtLmJlZm9yZSgkcGFuZWwpO1xyXG59XHJcblxyXG4vKipcclxuICogYWRkcyBhIHJlbW92ZSBidXR0b24gdG8gdGhlIHBhbmVsIHRoYXQgaXMgcGFzc2VkIGluIHRoZSBwYXJhbWV0ZXJcclxuICogQHBhcmFtICRwYW5lbFxyXG4gKi9cclxuZnVuY3Rpb24gYWRkUmVtb3ZlQnV0dG9uICgkcGFuZWwpIHtcclxuICAgIC8vIGNyZWF0ZSByZW1vdmUgYnV0dG9uXHJcbiAgICB2YXIgJHJlbW92ZUJ1dHRvbiA9ICQoJzxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiPlJlbW92ZTwvYT4nKTtcclxuICAgIC8vIGFwcGVuZGluZyB0aGUgcmVtb3ZlYnV0dG9uIHRvIHRoZSBwYW5lbCBmb290ZXJcclxuICAgIHZhciAkcGFuZWxGb290ZXIgPSAkKCc8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXJcIj48L2Rpdj4nKS5hcHBlbmQoJHJlbW92ZUJ1dHRvbik7XHJcbiAgICAvLyBoYW5kbGUgdGhlIGNsaWNrIGV2ZW50IG9mIHRoZSByZW1vdmUgYnV0dG9uXHJcbiAgICAkcmVtb3ZlQnV0dG9uLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIGdldHMgdGhlIHBhcmVudCBvZiB0aGUgYnV0dG9uIHRoYXQgd2UgY2xpY2tlZCBvbiBcInRoZSBwYW5lbFwiIGFuZCBhbmltYXRlcyBpdFxyXG4gICAgICAgIC8vIGFmdGVyIHRoZSBhbmltYXRpb24gaXMgZG9uZSB0aGUgZWxlbWVudCAodGhlIHBhbmVsKSBpcyByZW1vdmVkIGZyb20gdGhlIGh0bWxcclxuICAgICAgICAkKGUudGFyZ2V0KS5wYXJlbnRzKCcuY2FyZC13YXJuaW5nJykuc2xpZGVVcCgxMDAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG4gICAgLy8gYXBwZW5kIHRoZSBmb290ZXIgdG8gdGhlIHBhbmVsXHJcbiAgICAkcGFuZWwuYXBwZW5kKCRwYW5lbEZvb3Rlcik7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9
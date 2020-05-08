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

/***/ })

},[["./assets/js/warehouseDish.js","runtime","vendors~bootstrapJs~connectCardFront~locateTruck~orderDish~stripe~warehouseDish~warehouseProduct","vendors~adminltejs~bootstrapJs~jquery~locateTruck~orderDish~warehouseDish~warehouseProduct","vendors~adminltejs~bootstrapJs~jquery~locateTruck~warehouseDish~warehouseProduct"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvd2FyZWhvdXNlRGlzaC5qcyJdLCJuYW1lcyI6WyIkIiwicmVxdWlyZSIsIiRjb2xsZWN0aW9uSG9sZGVyIiwiJGFkZE5ld0l0ZW0iLCJkb2N1bWVudCIsInJlYWR5IiwiYXBwZW5kIiwiZGF0YSIsImZpbmQiLCJsZW5ndGgiLCJlYWNoIiwiYWRkUmVtb3ZlQnV0dG9uIiwiY2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJhZGROZXdGb3JtIiwicHJvdG90eXBlIiwiaW5kZXgiLCJuZXdGb3JtIiwicmVwbGFjZSIsIiRwYW5lbEJvZHkiLCJjaGlsZHJlbiIsIiRwYW5lbCIsIiRyZW1vdmVCdXR0b24iLCJ0YXJnZXQiLCJwYXJlbnQiLCJzbGlkZVVwIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFDLEdBQUdDLG1CQUFPLENBQUMsb0RBQUQsQ0FBZixDLENBRUE7OztBQUNBLElBQUlDLGlCQUFKLEMsQ0FDQTs7QUFDQSxJQUFJQyxXQUFXLEdBQUdILENBQUMsQ0FBQyxtREFBRCxDQUFuQixDLENBQ0E7O0FBQ0FBLENBQUMsQ0FBQ0ksUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUMxQjtBQUNBSCxtQkFBaUIsR0FBR0YsQ0FBQyxDQUFDLFlBQUQsQ0FBckIsQ0FGMEIsQ0FHMUI7O0FBQ0FFLG1CQUFpQixDQUFDSSxNQUFsQixDQUF5QkgsV0FBekIsRUFKMEIsQ0FLMUI7O0FBQ0FELG1CQUFpQixDQUFDSyxJQUFsQixDQUF1QixPQUF2QixFQUFnQ0wsaUJBQWlCLENBQUNNLElBQWxCLENBQXVCLE9BQXZCLEVBQWdDQyxNQUFoRSxFQU4wQixDQU8xQjtBQUNBOztBQUNBUCxtQkFBaUIsQ0FBQ00sSUFBbEIsQ0FBdUIsTUFBdkIsRUFBK0JFLElBQS9CLENBQW9DLFlBQVk7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsbUJBQWUsQ0FBQ1gsQ0FBQyxDQUFDLElBQUQsQ0FBRixDQUFmO0FBQ0gsR0FORCxFQVQwQixDQWdCMUI7O0FBQ0FHLGFBQVcsQ0FBQ1MsS0FBWixDQUFrQixVQUFVQyxDQUFWLEVBQWE7QUFDM0I7QUFDQTtBQUNBQSxLQUFDLENBQUNDLGNBQUYsR0FIMkIsQ0FJM0I7QUFDQTs7QUFDQUMsY0FBVTtBQUNiLEdBUEQ7QUFRSCxDQXpCRDtBQTBCQTs7OztBQUdBLFNBQVNBLFVBQVQsR0FBc0I7QUFDbEI7QUFDQTtBQUNBLE1BQUlDLFNBQVMsR0FBR2QsaUJBQWlCLENBQUNLLElBQWxCLENBQXVCLFdBQXZCLENBQWhCLENBSGtCLENBSWxCO0FBQ0E7O0FBQ0EsTUFBSVUsS0FBSyxHQUFHZixpQkFBaUIsQ0FBQ00sSUFBbEIsQ0FBdUIsUUFBdkIsRUFBaUNDLE1BQTdDLENBTmtCLENBT2xCOztBQUNBLE1BQUlTLE9BQU8sR0FBR0YsU0FBZCxDQVJrQixDQVNsQjs7QUFDQUUsU0FBTyxHQUFHQSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsV0FBaEIsRUFBNkJGLEtBQTdCLENBQVYsQ0FWa0IsQ0FXbEI7O0FBQ0FmLG1CQUFpQixDQUFDSyxJQUFsQixDQUF1QixPQUF2QixFQUFnQ1UsS0FBSyxHQUFDLENBQXRDLEVBWmtCLENBYWxCOztBQUNBLE1BQUlHLFVBQVUsR0FBR3BCLENBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCTSxNQUE5QixDQUFxQ1ksT0FBckMsQ0FBakIsQ0Fka0IsQ0FlbEI7O0FBQ0FQLGlCQUFlLENBQUNTLFVBQVUsQ0FBQ0MsUUFBWCxDQUFvQixNQUFwQixDQUFELENBQWYsQ0FoQmtCLENBaUJsQjtBQUNBOztBQUNBbkIsbUJBQWlCLENBQUNtQixRQUFsQixDQUEyQixPQUEzQixFQUFvQ0EsUUFBcEMsQ0FBNkMsWUFBN0MsRUFBMkRmLE1BQTNELENBQWtFYyxVQUFsRTtBQUNIO0FBRUQ7Ozs7OztBQUlBLFNBQVNULGVBQVQsQ0FBMEJXLE1BQTFCLEVBQWtDO0FBQzlCO0FBQ0EsTUFBSUMsYUFBYSxHQUFHdkIsQ0FBQyxDQUFDLEtBQ2xCLDhCQURrQixHQUVsQix3REFGa0IsR0FHbEIsOEJBSGlCLENBQXJCLENBRjhCLENBTTlCOztBQUNBdUIsZUFBYSxDQUFDWCxLQUFkLENBQW9CLFVBQVVDLENBQVYsRUFBYTtBQUM3QkEsS0FBQyxDQUFDQyxjQUFGLEdBRDZCLENBRTdCO0FBQ0E7O0FBQ0FkLEtBQUMsQ0FBQ2EsQ0FBQyxDQUFDVyxNQUFILENBQUQsQ0FBWUMsTUFBWixDQUFtQixNQUFuQixFQUEyQkMsT0FBM0IsQ0FBbUMsSUFBbkMsRUFBeUMsWUFBWTtBQUNqRDFCLE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTJCLE1BQVI7QUFDSCxLQUZEO0FBR0gsR0FQRCxFQVA4QixDQWU5Qjs7QUFDQUwsUUFBTSxDQUFDaEIsTUFBUCxDQUFjaUIsYUFBZDtBQUNILEMiLCJmaWxlIjoid2FyZWhvdXNlRGlzaC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcblxyXG4vLyB0aGlzIHZhcmlhYmxlIGlzIHRoZSBsaXN0IGluIHRoZSBkb20sIGl0J3MgaW5pdGlsaWF6ZWQgd2hlbiB0aGUgZG9jdW1lbnQgaXMgcmVhZHlcclxudmFyICRjb2xsZWN0aW9uSG9sZGVyO1xyXG4vLyB0aGUgbGluayB3aGljaCB3ZSBjbGljayBvbiB0byBhZGQgbmV3IGl0ZW1zXHJcbnZhciAkYWRkTmV3SXRlbSA9ICQoJzxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLWluZm9cIj5BZGQgbmV3IERpc2g8L2E+Jyk7XHJcbi8vIHdoZW4gdGhlIHBhZ2UgaXMgbG9hZGVkIGFuZCByZWFkeVxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBnZXQgdGhlIGNvbGxlY3Rpb25Ib2xkZXIsIGluaXRpbGl6ZSB0aGUgdmFyIGJ5IGdldHRpbmcgdGhlIGxpc3Q7XHJcbiAgICAkY29sbGVjdGlvbkhvbGRlciA9ICQoJyNkaXNoX2xpc3QnKTtcclxuICAgIC8vIGFwcGVuZCB0aGUgYWRkIG5ldyBpdGVtIGxpbmsgdG8gdGhlIGNvbGxlY3Rpb25Ib2xkZXJcclxuICAgICRjb2xsZWN0aW9uSG9sZGVyLmFwcGVuZCgkYWRkTmV3SXRlbSk7XHJcbiAgICAvLyBhZGQgYW4gaW5kZXggcHJvcGVydHkgdG8gdGhlIGNvbGxlY3Rpb25Ib2xkZXIgd2hpY2ggaGVscHMgdHJhY2sgdGhlIGNvdW50IG9mIGZvcm1zIHdlIGhhdmUgaW4gdGhlIGxpc3RcclxuICAgICRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ2luZGV4JywgJGNvbGxlY3Rpb25Ib2xkZXIuZmluZCgnLmNhcmQnKS5sZW5ndGgpXHJcbiAgICAvLyBmaW5kcyBhbGwgdGhlIHBhbmVscyBpbiB0aGUgbGlzdCBhbmQgZm9yZWFjaCBvbmUgb2YgdGhlbSB3ZSBhZGQgYSByZW1vdmUgYnV0dG9uIHRvIGl0XHJcbiAgICAvLyBhZGQgcmVtb3ZlIGJ1dHRvbiB0byBleGlzdGluZyBpdGVtc1xyXG4gICAgJGNvbGxlY3Rpb25Ib2xkZXIuZmluZCgnLnJvdycpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vICQodGhpcykgbWVhbnMgdGhlIGN1cnJlbnQgcGFuZWwgdGhhdCB3ZSBhcmUgYXRcclxuICAgICAgICAvLyB3aGljaCBtZWFucyB3ZSBwYXNzIHRoZSBwYW5lbCB0byB0aGUgYWRkUmVtb3ZlQnV0dG9uIGZ1bmN0aW9uXHJcbiAgICAgICAgLy8gaW5zaWRlIHRoZSBmdW5jdGlvbiB3ZSBjcmVhdGUgYSBmb290ZXIgYW5kIHJlbW92ZSBsaW5rIGFuZCBhcHBlbmQgdGhlbSB0byB0aGUgcGFuZWxcclxuICAgICAgICAvLyBtb3JlIGluZm9ybWF0aW9ucyBpbiB0aGUgZnVuY3Rpb24gaW5zaWRlXHJcbiAgICAgICAgYWRkUmVtb3ZlQnV0dG9uKCQodGhpcykpO1xyXG4gICAgfSk7XHJcbiAgICAvLyBoYW5kbGUgdGhlIGNsaWNrIGV2ZW50IGZvciBhZGROZXdJdGVtXHJcbiAgICAkYWRkTmV3SXRlbS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIC8vIHByZXZlbnREZWZhdWx0KCkgaXMgeW91ciAgaG9tZXdvcmsgaWYgeW91IGRvbid0IGtub3cgd2hhdCBpdCBpc1xyXG4gICAgICAgIC8vIGFsc28gbG9vayB1cCBwcmV2ZW50UHJvcGFnYXRpb24gYm90aCBhcmUgdXNlZnVsbFxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyBjcmVhdGUgYSBuZXcgZm9ybSBhbmQgYXBwZW5kIGl0IHRvIHRoZSBjb2xsZWN0aW9uSG9sZGVyXHJcbiAgICAgICAgLy8gYW5kIGJ5IGZvcm0gd2UgbWVhbiBhIG5ldyBwYW5lbCB3aGljaCBjb250YWlucyB0aGUgZm9ybVxyXG4gICAgICAgIGFkZE5ld0Zvcm0oKTtcclxuICAgIH0pXHJcbn0pO1xyXG4vKlxyXG4gKiBjcmVhdGVzIGEgbmV3IGZvcm0gYW5kIGFwcGVuZHMgaXQgdG8gdGhlIGNvbGxlY3Rpb25Ib2xkZXJcclxuICovXHJcbmZ1bmN0aW9uIGFkZE5ld0Zvcm0oKSB7XHJcbiAgICAvLyBnZXR0aW5nIHRoZSBwcm90b3R5cGVcclxuICAgIC8vIHRoZSBwcm90b3R5cGUgaXMgdGhlIGZvcm0gaXRzZWxmLCBwbGFpbiBodG1sXHJcbiAgICB2YXIgcHJvdG90eXBlID0gJGNvbGxlY3Rpb25Ib2xkZXIuZGF0YSgncHJvdG90eXBlJyk7XHJcbiAgICAvLyBnZXQgdGhlIGluZGV4XHJcbiAgICAvLyB0aGlzIGlzIHRoZSBpbmRleCB3ZSBzZXQgd2hlbiB0aGUgZG9jdW1lbnQgd2FzIHJlYWR5LCBsb29rIGFib3ZlIGZvciBtb3JlIGluZm9cclxuICAgIHZhciBpbmRleCA9ICRjb2xsZWN0aW9uSG9sZGVyLmZpbmQoXCJzZWxlY3RcIikubGVuZ3RoO1xyXG4gICAgLy8gY3JlYXRlIHRoZSBmb3JtXHJcbiAgICB2YXIgbmV3Rm9ybSA9IHByb3RvdHlwZTtcclxuICAgIC8vIHJlcGxhY2UgdGhlIF9fbmFtZV9fIHN0cmluZyBpbiB0aGUgaHRtbCB1c2luZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB3aXRoIHRoZSBpbmRleCB2YWx1ZVxyXG4gICAgbmV3Rm9ybSA9IG5ld0Zvcm0ucmVwbGFjZSgvX19uYW1lX18vZywgaW5kZXgpO1xyXG4gICAgLy8gaW5jcmVtZW50aW5nIHRoZSBpbmRleCBkYXRhIGFuZCBzZXR0aW5nIGl0IGFnYWluIHRvIHRoZSBjb2xsZWN0aW9uSG9sZGVyXHJcbiAgICAkY29sbGVjdGlvbkhvbGRlci5kYXRhKCdpbmRleCcsIGluZGV4KzEpO1xyXG4gICAgLy8gY3JlYXRlIHRoZSBwYW5lbC1ib2R5IGFuZCBhcHBlbmQgdGhlIGZvcm0gdG8gaXRcclxuICAgIHZhciAkcGFuZWxCb2R5ID0gJCgnPGRpdiBjbGFzcz1cIm10LTFcIj48L2Rpdj4nKS5hcHBlbmQobmV3Rm9ybSk7XHJcbiAgICAvLyBhcHBlbmQgdGhlIHJlbW92ZWJ1dHRvbiB0byB0aGUgbmV3IHBhbmVsXHJcbiAgICBhZGRSZW1vdmVCdXR0b24oJHBhbmVsQm9keS5jaGlsZHJlbignLnJvdycpKTtcclxuICAgIC8vIGFwcGVuZCB0aGUgcGFuZWwgdG8gdGhlIGFkZE5ld0l0ZW1cclxuICAgIC8vIHdlIGFyZSBkb2luZyBpdCB0aGlzIHdheSB0byB0aGF0IHRoZSBsaW5rIGlzIGFsd2F5cyBhdCB0aGUgYm90dG9tIG9mIHRoZSBjb2xsZWN0aW9uSG9sZGVyXHJcbiAgICAkY29sbGVjdGlvbkhvbGRlci5jaGlsZHJlbignLmNhcmQnKS5jaGlsZHJlbignLmNhcmQtYm9keScpLmFwcGVuZCgkcGFuZWxCb2R5KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIGFkZHMgYSByZW1vdmUgYnV0dG9uIHRvIHRoZSBwYW5lbCB0aGF0IGlzIHBhc3NlZCBpbiB0aGUgcGFyYW1ldGVyXHJcbiAqIEBwYXJhbSAkcGFuZWxcclxuICovXHJcbmZ1bmN0aW9uIGFkZFJlbW92ZUJ1dHRvbiAoJHBhbmVsKSB7XHJcbiAgICAvLyBjcmVhdGUgcmVtb3ZlIGJ1dHRvblxyXG4gICAgdmFyICRyZW1vdmVCdXR0b24gPSAkKCcnICtcclxuICAgICAgICAnPGRpdiBjbGFzcz1cImNvbC1zbS0xXCI+PC9kaXY+JyArXHJcbiAgICAgICAgJzxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlciBjb2wtc20tMlwiPlJlbW92ZTwvYT4nICtcclxuICAgICAgICAnPGRpdiBjbGFzcz1cImNvbC1zbS0xXCI+PC9kaXY+Jyk7XHJcbiAgICAvLyBoYW5kbGUgdGhlIGNsaWNrIGV2ZW50IG9mIHRoZSByZW1vdmUgYnV0dG9uXHJcbiAgICAkcmVtb3ZlQnV0dG9uLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIGdldHMgdGhlIHBhcmVudCBvZiB0aGUgYnV0dG9uIHRoYXQgd2UgY2xpY2tlZCBvbiBcInRoZSBwYW5lbFwiIGFuZCBhbmltYXRlcyBpdFxyXG4gICAgICAgIC8vIGFmdGVyIHRoZSBhbmltYXRpb24gaXMgZG9uZSB0aGUgZWxlbWVudCAodGhlIHBhbmVsKSBpcyByZW1vdmVkIGZyb20gdGhlIGh0bWxcclxuICAgICAgICAkKGUudGFyZ2V0KS5wYXJlbnQoJy5yb3cnKS5zbGlkZVVwKDEwMDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcbiAgICAvLyBhcHBlbmQgdGhlIGZvb3RlciB0byB0aGUgcGFuZWxcclxuICAgICRwYW5lbC5hcHBlbmQoJHJlbW92ZUJ1dHRvbik7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9
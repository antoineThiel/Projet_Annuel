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

/***/ })

},[["./assets/js/warehouseProduct.js","runtime","vendors~adminltejs~bootstrapJs~jquery~locateTruck~orderDish~warehouseDish~warehouseProduct","vendors~bootstrapJs~connectCardFront~locateTruck~orderDish~warehouseDish~warehouseProduct","vendors~adminltejs~bootstrapJs~jquery~locateTruck~warehouseDish~warehouseProduct"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvd2FyZWhvdXNlUHJvZHVjdC5qcyJdLCJuYW1lcyI6WyIkIiwicmVxdWlyZSIsIiRjb2xsZWN0aW9uSG9sZGVyIiwiJGFkZE5ld0l0ZW0iLCJkb2N1bWVudCIsInJlYWR5IiwiYXBwZW5kIiwiZGF0YSIsImZpbmQiLCJsZW5ndGgiLCJlYWNoIiwiYWRkUmVtb3ZlQnV0dG9uIiwiY2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJhZGROZXdGb3JtIiwicHJvdG90eXBlIiwiaW5kZXgiLCJuZXdGb3JtIiwicmVwbGFjZSIsIiRwYW5lbEJvZHkiLCJjaGlsZHJlbiIsIiRwYW5lbCIsIiRyZW1vdmVCdXR0b24iLCJ0YXJnZXQiLCJwYXJlbnQiLCJzbGlkZVVwIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFDLEdBQUdDLG1CQUFPLENBQUMsb0RBQUQsQ0FBZixDLENBRUE7OztBQUNBLElBQUlDLGlCQUFKLEMsQ0FDQTs7QUFDQSxJQUFJQyxXQUFXLEdBQUdILENBQUMsQ0FBQyxzREFBRCxDQUFuQixDLENBQ0E7O0FBQ0FBLENBQUMsQ0FBQ0ksUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUMxQjtBQUNBSCxtQkFBaUIsR0FBR0YsQ0FBQyxDQUFDLGVBQUQsQ0FBckIsQ0FGMEIsQ0FJMUI7O0FBQ0FFLG1CQUFpQixDQUFDSSxNQUFsQixDQUF5QkgsV0FBekIsRUFMMEIsQ0FNMUI7O0FBQ0FELG1CQUFpQixDQUFDSyxJQUFsQixDQUF1QixPQUF2QixFQUFnQ0wsaUJBQWlCLENBQUNNLElBQWxCLENBQXVCLE9BQXZCLEVBQWdDQyxNQUFoRSxFQVAwQixDQVExQjtBQUNBOztBQUNBUCxtQkFBaUIsQ0FBQ00sSUFBbEIsQ0FBdUIsTUFBdkIsRUFBK0JFLElBQS9CLENBQW9DLFlBQVk7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsbUJBQWUsQ0FBQ1gsQ0FBQyxDQUFDLElBQUQsQ0FBRixDQUFmO0FBQ0gsR0FORCxFQVYwQixDQWlCMUI7O0FBQ0FHLGFBQVcsQ0FBQ1MsS0FBWixDQUFrQixVQUFVQyxDQUFWLEVBQWE7QUFDM0I7QUFDQTtBQUNBQSxLQUFDLENBQUNDLGNBQUYsR0FIMkIsQ0FJM0I7QUFDQTs7QUFDQUMsY0FBVTtBQUNiLEdBUEQ7QUFRSCxDQTFCRDtBQTJCQTs7OztBQUdBLFNBQVNBLFVBQVQsR0FBc0I7QUFDbEI7QUFDQTtBQUNBLE1BQUlDLFNBQVMsR0FBR2QsaUJBQWlCLENBQUNLLElBQWxCLENBQXVCLFdBQXZCLENBQWhCLENBSGtCLENBSWxCO0FBQ0E7O0FBQ0EsTUFBSVUsS0FBSyxHQUFHZixpQkFBaUIsQ0FBQ00sSUFBbEIsQ0FBdUIsUUFBdkIsRUFBaUNDLE1BQTdDLENBTmtCLENBT2xCOztBQUNBLE1BQUlTLE9BQU8sR0FBR0YsU0FBZCxDQVJrQixDQVNsQjs7QUFDQUUsU0FBTyxHQUFHQSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsV0FBaEIsRUFBNkJGLEtBQTdCLENBQVYsQ0FWa0IsQ0FXbEI7O0FBQ0FmLG1CQUFpQixDQUFDSyxJQUFsQixDQUF1QixPQUF2QixFQUFnQ1UsS0FBSyxHQUFDLENBQXRDLEVBWmtCLENBYWxCOztBQUNBLE1BQUlHLFVBQVUsR0FBR3BCLENBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCTSxNQUE5QixDQUFxQ1ksT0FBckMsQ0FBakIsQ0Fka0IsQ0FlbEI7O0FBQ0FQLGlCQUFlLENBQUNTLFVBQVUsQ0FBQ0MsUUFBWCxDQUFvQixNQUFwQixDQUFELENBQWYsQ0FoQmtCLENBaUJsQjtBQUNBOztBQUNBbkIsbUJBQWlCLENBQUNtQixRQUFsQixDQUEyQixPQUEzQixFQUFvQ0EsUUFBcEMsQ0FBNkMsWUFBN0MsRUFBMkRmLE1BQTNELENBQWtFYyxVQUFsRSxFQW5Ca0IsQ0FvQmxCO0FBQ0g7QUFFRDs7Ozs7O0FBSUEsU0FBU1QsZUFBVCxDQUEwQlcsTUFBMUIsRUFBa0M7QUFDOUI7QUFDQSxNQUFJQyxhQUFhLEdBQUd2QixDQUFDLENBQUMsS0FDbEIsOEJBRGtCLEdBRWxCLHdEQUZrQixHQUdsQiw4QkFIaUIsQ0FBckIsQ0FGOEIsQ0FNOUI7O0FBQ0F1QixlQUFhLENBQUNYLEtBQWQsQ0FBb0IsVUFBVUMsQ0FBVixFQUFhO0FBQzdCQSxLQUFDLENBQUNDLGNBQUYsR0FENkIsQ0FFN0I7QUFDQTs7QUFDQWQsS0FBQyxDQUFDYSxDQUFDLENBQUNXLE1BQUgsQ0FBRCxDQUFZQyxNQUFaLENBQW1CLE1BQW5CLEVBQTJCQyxPQUEzQixDQUFtQyxJQUFuQyxFQUF5QyxZQUFZO0FBQ2pEMUIsT0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRMkIsTUFBUjtBQUNILEtBRkQ7QUFHSCxHQVBELEVBUDhCLENBZTlCOztBQUNBTCxRQUFNLENBQUNoQixNQUFQLENBQWNpQixhQUFkO0FBQ0gsQyIsImZpbGUiOiJ3YXJlaG91c2VQcm9kdWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuXHJcbi8vIHRoaXMgdmFyaWFibGUgaXMgdGhlIGxpc3QgaW4gdGhlIGRvbSwgaXQncyBpbml0aWxpYXplZCB3aGVuIHRoZSBkb2N1bWVudCBpcyByZWFkeVxyXG52YXIgJGNvbGxlY3Rpb25Ib2xkZXI7XHJcbi8vIHRoZSBsaW5rIHdoaWNoIHdlIGNsaWNrIG9uIHRvIGFkZCBuZXcgaXRlbXNcclxudmFyICRhZGROZXdJdGVtID0gJCgnPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4taW5mb1wiPkFkZCBuZXcgUHJvZHVjdDwvYT4nKTtcclxuLy8gd2hlbiB0aGUgcGFnZSBpcyBsb2FkZWQgYW5kIHJlYWR5XHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIGdldCB0aGUgY29sbGVjdGlvbkhvbGRlciwgaW5pdGlsaXplIHRoZSB2YXIgYnkgZ2V0dGluZyB0aGUgbGlzdDtcclxuICAgICRjb2xsZWN0aW9uSG9sZGVyID0gJCgnI3Byb2R1Y3RfbGlzdCcpO1xyXG5cclxuICAgIC8vIGFwcGVuZCB0aGUgYWRkIG5ldyBpdGVtIGxpbmsgdG8gdGhlIGNvbGxlY3Rpb25Ib2xkZXJcclxuICAgICRjb2xsZWN0aW9uSG9sZGVyLmFwcGVuZCgkYWRkTmV3SXRlbSk7XHJcbiAgICAvLyBhZGQgYW4gaW5kZXggcHJvcGVydHkgdG8gdGhlIGNvbGxlY3Rpb25Ib2xkZXIgd2hpY2ggaGVscHMgdHJhY2sgdGhlIGNvdW50IG9mIGZvcm1zIHdlIGhhdmUgaW4gdGhlIGxpc3RcclxuICAgICRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ2luZGV4JywgJGNvbGxlY3Rpb25Ib2xkZXIuZmluZCgnLmNhcmQnKS5sZW5ndGgpXHJcbiAgICAvLyBmaW5kcyBhbGwgdGhlIHBhbmVscyBpbiB0aGUgbGlzdCBhbmQgZm9yZWFjaCBvbmUgb2YgdGhlbSB3ZSBhZGQgYSByZW1vdmUgYnV0dG9uIHRvIGl0XHJcbiAgICAvLyBhZGQgcmVtb3ZlIGJ1dHRvbiB0byBleGlzdGluZyBpdGVtc1xyXG4gICAgJGNvbGxlY3Rpb25Ib2xkZXIuZmluZCgnLnJvdycpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vICQodGhpcykgbWVhbnMgdGhlIGN1cnJlbnQgcGFuZWwgdGhhdCB3ZSBhcmUgYXRcclxuICAgICAgICAvLyB3aGljaCBtZWFucyB3ZSBwYXNzIHRoZSBwYW5lbCB0byB0aGUgYWRkUmVtb3ZlQnV0dG9uIGZ1bmN0aW9uXHJcbiAgICAgICAgLy8gaW5zaWRlIHRoZSBmdW5jdGlvbiB3ZSBjcmVhdGUgYSBmb290ZXIgYW5kIHJlbW92ZSBsaW5rIGFuZCBhcHBlbmQgdGhlbSB0byB0aGUgcGFuZWxcclxuICAgICAgICAvLyBtb3JlIGluZm9ybWF0aW9ucyBpbiB0aGUgZnVuY3Rpb24gaW5zaWRlXHJcbiAgICAgICAgYWRkUmVtb3ZlQnV0dG9uKCQodGhpcykpO1xyXG4gICAgfSk7XHJcbiAgICAvLyBoYW5kbGUgdGhlIGNsaWNrIGV2ZW50IGZvciBhZGROZXdJdGVtXHJcbiAgICAkYWRkTmV3SXRlbS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIC8vIHByZXZlbnREZWZhdWx0KCkgaXMgeW91ciAgaG9tZXdvcmsgaWYgeW91IGRvbid0IGtub3cgd2hhdCBpdCBpc1xyXG4gICAgICAgIC8vIGFsc28gbG9vayB1cCBwcmV2ZW50UHJvcGFnYXRpb24gYm90aCBhcmUgdXNlZnVsXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIGNyZWF0ZSBhIG5ldyBmb3JtIGFuZCBhcHBlbmQgaXQgdG8gdGhlIGNvbGxlY3Rpb25Ib2xkZXJcclxuICAgICAgICAvLyBhbmQgYnkgZm9ybSB3ZSBtZWFuIGEgbmV3IHBhbmVsIHdoaWNoIGNvbnRhaW5zIHRoZSBmb3JtXHJcbiAgICAgICAgYWRkTmV3Rm9ybSgpO1xyXG4gICAgfSlcclxufSk7XHJcbi8qXHJcbiAqIGNyZWF0ZXMgYSBuZXcgZm9ybSBhbmQgYXBwZW5kcyBpdCB0byB0aGUgY29sbGVjdGlvbkhvbGRlclxyXG4gKi9cclxuZnVuY3Rpb24gYWRkTmV3Rm9ybSgpIHtcclxuICAgIC8vIGdldHRpbmcgdGhlIHByb3RvdHlwZVxyXG4gICAgLy8gdGhlIHByb3RvdHlwZSBpcyB0aGUgZm9ybSBpdHNlbGYsIHBsYWluIGh0bWxcclxuICAgIHZhciBwcm90b3R5cGUgPSAkY29sbGVjdGlvbkhvbGRlci5kYXRhKCdwcm90b3R5cGUnKTtcclxuICAgIC8vIGdldCB0aGUgaW5kZXhcclxuICAgIC8vIHRoaXMgaXMgdGhlIGluZGV4IHdlIHNldCB3aGVuIHRoZSBkb2N1bWVudCB3YXMgcmVhZHksIGxvb2sgYWJvdmUgZm9yIG1vcmUgaW5mb1xyXG4gICAgdmFyIGluZGV4ID0gJGNvbGxlY3Rpb25Ib2xkZXIuZmluZChcInNlbGVjdFwiKS5sZW5ndGg7XHJcbiAgICAvLyBjcmVhdGUgdGhlIGZvcm1cclxuICAgIHZhciBuZXdGb3JtID0gcHJvdG90eXBlO1xyXG4gICAgLy8gcmVwbGFjZSB0aGUgX19uYW1lX18gc3RyaW5nIGluIHRoZSBodG1sIHVzaW5nIGEgcmVndWxhciBleHByZXNzaW9uIHdpdGggdGhlIGluZGV4IHZhbHVlXHJcbiAgICBuZXdGb3JtID0gbmV3Rm9ybS5yZXBsYWNlKC9fX25hbWVfXy9nLCBpbmRleCk7XHJcbiAgICAvLyBpbmNyZW1lbnRpbmcgdGhlIGluZGV4IGRhdGEgYW5kIHNldHRpbmcgaXQgYWdhaW4gdG8gdGhlIGNvbGxlY3Rpb25Ib2xkZXJcclxuICAgICRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ2luZGV4JywgaW5kZXgrMSk7XHJcbiAgICAvLyBjcmVhdGUgdGhlIHBhbmVsLWJvZHkgYW5kIGFwcGVuZCB0aGUgZm9ybSB0byBpdFxyXG4gICAgdmFyICRwYW5lbEJvZHkgPSAkKCc8ZGl2IGNsYXNzPVwibXQtMVwiPjwvZGl2PicpLmFwcGVuZChuZXdGb3JtKTtcclxuICAgIC8vIGFwcGVuZCB0aGUgcmVtb3ZlYnV0dG9uIHRvIHRoZSBuZXcgcGFuZWxcclxuICAgIGFkZFJlbW92ZUJ1dHRvbigkcGFuZWxCb2R5LmNoaWxkcmVuKCcucm93JykpO1xyXG4gICAgLy8gYXBwZW5kIHRoZSBwYW5lbCB0byB0aGUgYWRkTmV3SXRlbVxyXG4gICAgLy8gd2UgYXJlIGRvaW5nIGl0IHRoaXMgd2F5IHRvIHRoYXQgdGhlIGxpbmsgaXMgYWx3YXlzIGF0IHRoZSBib3R0b20gb2YgdGhlIGNvbGxlY3Rpb25Ib2xkZXJcclxuICAgICRjb2xsZWN0aW9uSG9sZGVyLmNoaWxkcmVuKCcuY2FyZCcpLmNoaWxkcmVuKCcuY2FyZC1ib2R5JykuYXBwZW5kKCRwYW5lbEJvZHkpO1xyXG4gICAgLy8gJGFkZE5ld0l0ZW0uYmVmb3JlKCRwYW5lbEJvZHkpO1xyXG59XHJcblxyXG4vKipcclxuICogYWRkcyBhIHJlbW92ZSBidXR0b24gdG8gdGhlIHBhbmVsIHRoYXQgaXMgcGFzc2VkIGluIHRoZSBwYXJhbWV0ZXJcclxuICogQHBhcmFtICRwYW5lbFxyXG4gKi9cclxuZnVuY3Rpb24gYWRkUmVtb3ZlQnV0dG9uICgkcGFuZWwpIHtcclxuICAgIC8vIGNyZWF0ZSByZW1vdmUgYnV0dG9uXHJcbiAgICB2YXIgJHJlbW92ZUJ1dHRvbiA9ICQoJycgK1xyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiY29sLXNtLTFcIj48L2Rpdj4nICtcclxuICAgICAgICAnPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGNvbC1zbS0yXCI+UmVtb3ZlPC9hPicgK1xyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiY29sLXNtLTFcIj48L2Rpdj4nKTtcclxuICAgIC8vIGhhbmRsZSB0aGUgY2xpY2sgZXZlbnQgb2YgdGhlIHJlbW92ZSBidXR0b25cclxuICAgICRyZW1vdmVCdXR0b24uY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gZ2V0cyB0aGUgcGFyZW50IG9mIHRoZSBidXR0b24gdGhhdCB3ZSBjbGlja2VkIG9uIFwidGhlIHBhbmVsXCIgYW5kIGFuaW1hdGVzIGl0XHJcbiAgICAgICAgLy8gYWZ0ZXIgdGhlIGFuaW1hdGlvbiBpcyBkb25lIHRoZSBlbGVtZW50ICh0aGUgcGFuZWwpIGlzIHJlbW92ZWQgZnJvbSB0aGUgaHRtbFxyXG4gICAgICAgICQoZS50YXJnZXQpLnBhcmVudCgnLnJvdycpLnNsaWRlVXAoMTAwMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxuICAgIC8vIGFwcGVuZCB0aGUgZm9vdGVyIHRvIHRoZSBwYW5lbFxyXG4gICAgJHBhbmVsLmFwcGVuZCgkcmVtb3ZlQnV0dG9uKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=
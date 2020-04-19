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

  var $panel = $('<div class="card card-danger"><div class="card-header"><strong>Dish</strong></div></div>'); // create the panel-body and append the form to it

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

    $(e.target).parents('.card-danger').slideUp(1000, function () {
      $(this).remove();
    });
  }); // append the footer to the panel

  $panel.append($panelFooter);
}

/***/ })

},[["./assets/js/warehouseDish.js","runtime","vendors~adminltejs~bootstrapJs~jquery~warehouseDish~warehouseProduct","vendors~bootstrapJs~warehouseDish~warehouseProduct"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvd2FyZWhvdXNlRGlzaC5qcyJdLCJuYW1lcyI6WyIkIiwicmVxdWlyZSIsIiRjb2xsZWN0aW9uSG9sZGVyIiwiJGFkZE5ld0l0ZW0iLCJkb2N1bWVudCIsInJlYWR5IiwiYXBwZW5kIiwiZGF0YSIsImZpbmQiLCJsZW5ndGgiLCJlYWNoIiwiYWRkUmVtb3ZlQnV0dG9uIiwiY2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJhZGROZXdGb3JtIiwicHJvdG90eXBlIiwiaW5kZXgiLCJuZXdGb3JtIiwicmVwbGFjZSIsIiRwYW5lbCIsIiRwYW5lbEJvZHkiLCJiZWZvcmUiLCIkcmVtb3ZlQnV0dG9uIiwiJHBhbmVsRm9vdGVyIiwidGFyZ2V0IiwicGFyZW50cyIsInNsaWRlVXAiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUMsR0FBR0MsbUJBQU8sQ0FBQyxvREFBRCxDQUFmLEMsQ0FFQTs7O0FBQ0EsSUFBSUMsaUJBQUosQyxDQUNBOztBQUNBLElBQUlDLFdBQVcsR0FBR0gsQ0FBQyxDQUFDLG1EQUFELENBQW5CLEMsQ0FDQTs7QUFDQUEsQ0FBQyxDQUFDSSxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFZO0FBQzFCO0FBQ0FILG1CQUFpQixHQUFHRixDQUFDLENBQUMsWUFBRCxDQUFyQixDQUYwQixDQUcxQjs7QUFDQUUsbUJBQWlCLENBQUNJLE1BQWxCLENBQXlCSCxXQUF6QixFQUowQixDQUsxQjs7QUFDQUQsbUJBQWlCLENBQUNLLElBQWxCLENBQXVCLE9BQXZCLEVBQWdDTCxpQkFBaUIsQ0FBQ00sSUFBbEIsQ0FBdUIsT0FBdkIsRUFBZ0NDLE1BQWhFLEVBTjBCLENBTzFCO0FBQ0E7O0FBQ0FQLG1CQUFpQixDQUFDTSxJQUFsQixDQUF1QixPQUF2QixFQUFnQ0UsSUFBaEMsQ0FBcUMsWUFBWTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBQyxtQkFBZSxDQUFDWCxDQUFDLENBQUMsSUFBRCxDQUFGLENBQWY7QUFDSCxHQU5ELEVBVDBCLENBZ0IxQjs7QUFDQUcsYUFBVyxDQUFDUyxLQUFaLENBQWtCLFVBQVVDLENBQVYsRUFBYTtBQUMzQjtBQUNBO0FBQ0FBLEtBQUMsQ0FBQ0MsY0FBRixHQUgyQixDQUkzQjtBQUNBOztBQUNBQyxjQUFVO0FBQ2IsR0FQRDtBQVFILENBekJEO0FBMEJBOzs7O0FBR0EsU0FBU0EsVUFBVCxHQUFzQjtBQUNsQjtBQUNBO0FBQ0EsTUFBSUMsU0FBUyxHQUFHZCxpQkFBaUIsQ0FBQ0ssSUFBbEIsQ0FBdUIsV0FBdkIsQ0FBaEIsQ0FIa0IsQ0FJbEI7QUFDQTs7QUFDQSxNQUFJVSxLQUFLLEdBQUdmLGlCQUFpQixDQUFDSyxJQUFsQixDQUF1QixPQUF2QixDQUFaLENBTmtCLENBT2xCOztBQUNBLE1BQUlXLE9BQU8sR0FBR0YsU0FBZCxDQVJrQixDQVNsQjs7QUFDQUUsU0FBTyxHQUFHQSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsV0FBaEIsRUFBNkJGLEtBQTdCLENBQVYsQ0FWa0IsQ0FXbEI7O0FBQ0FmLG1CQUFpQixDQUFDSyxJQUFsQixDQUF1QixPQUF2QixFQUFnQ1UsS0FBSyxHQUFDLENBQXRDLEVBWmtCLENBYWxCO0FBQ0E7O0FBQ0EsTUFBSUcsTUFBTSxHQUFHcEIsQ0FBQyxDQUFDLDBGQUFELENBQWQsQ0Fma0IsQ0FnQmxCOztBQUNBLE1BQUlxQixVQUFVLEdBQUdyQixDQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ00sTUFBbkMsQ0FBMENZLE9BQTFDLENBQWpCLENBakJrQixDQWtCbEI7O0FBQ0FFLFFBQU0sQ0FBQ2QsTUFBUCxDQUFjZSxVQUFkLEVBbkJrQixDQW9CbEI7O0FBQ0FWLGlCQUFlLENBQUNTLE1BQUQsQ0FBZixDQXJCa0IsQ0FzQmxCO0FBQ0E7O0FBQ0FqQixhQUFXLENBQUNtQixNQUFaLENBQW1CRixNQUFuQjtBQUNIO0FBRUQ7Ozs7OztBQUlBLFNBQVNULGVBQVQsQ0FBMEJTLE1BQTFCLEVBQWtDO0FBQzlCO0FBQ0EsTUFBSUcsYUFBYSxHQUFHdkIsQ0FBQyxDQUFDLCtDQUFELENBQXJCLENBRjhCLENBRzlCOztBQUNBLE1BQUl3QixZQUFZLEdBQUd4QixDQUFDLENBQUMsaUNBQUQsQ0FBRCxDQUFxQ00sTUFBckMsQ0FBNENpQixhQUE1QyxDQUFuQixDQUo4QixDQUs5Qjs7QUFDQUEsZUFBYSxDQUFDWCxLQUFkLENBQW9CLFVBQVVDLENBQVYsRUFBYTtBQUM3QkEsS0FBQyxDQUFDQyxjQUFGLEdBRDZCLENBRTdCO0FBQ0E7O0FBQ0FkLEtBQUMsQ0FBQ2EsQ0FBQyxDQUFDWSxNQUFILENBQUQsQ0FBWUMsT0FBWixDQUFvQixjQUFwQixFQUFvQ0MsT0FBcEMsQ0FBNEMsSUFBNUMsRUFBa0QsWUFBWTtBQUMxRDNCLE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRCLE1BQVI7QUFDSCxLQUZEO0FBR0gsR0FQRCxFQU44QixDQWM5Qjs7QUFDQVIsUUFBTSxDQUFDZCxNQUFQLENBQWNrQixZQUFkO0FBQ0gsQyIsImZpbGUiOiJ3YXJlaG91c2VEaXNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcblxuLy8gdGhpcyB2YXJpYWJsZSBpcyB0aGUgbGlzdCBpbiB0aGUgZG9tLCBpdCdzIGluaXRpbGlhemVkIHdoZW4gdGhlIGRvY3VtZW50IGlzIHJlYWR5XG52YXIgJGNvbGxlY3Rpb25Ib2xkZXI7XG4vLyB0aGUgbGluayB3aGljaCB3ZSBjbGljayBvbiB0byBhZGQgbmV3IGl0ZW1zXG52YXIgJGFkZE5ld0l0ZW0gPSAkKCc8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvXCI+QWRkIG5ldyBEaXNoPC9hPicpO1xuLy8gd2hlbiB0aGUgcGFnZSBpcyBsb2FkZWQgYW5kIHJlYWR5XG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgLy8gZ2V0IHRoZSBjb2xsZWN0aW9uSG9sZGVyLCBpbml0aWxpemUgdGhlIHZhciBieSBnZXR0aW5nIHRoZSBsaXN0O1xuICAgICRjb2xsZWN0aW9uSG9sZGVyID0gJCgnI2Rpc2hfbGlzdCcpO1xuICAgIC8vIGFwcGVuZCB0aGUgYWRkIG5ldyBpdGVtIGxpbmsgdG8gdGhlIGNvbGxlY3Rpb25Ib2xkZXJcbiAgICAkY29sbGVjdGlvbkhvbGRlci5hcHBlbmQoJGFkZE5ld0l0ZW0pO1xuICAgIC8vIGFkZCBhbiBpbmRleCBwcm9wZXJ0eSB0byB0aGUgY29sbGVjdGlvbkhvbGRlciB3aGljaCBoZWxwcyB0cmFjayB0aGUgY291bnQgb2YgZm9ybXMgd2UgaGF2ZSBpbiB0aGUgbGlzdFxuICAgICRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ2luZGV4JywgJGNvbGxlY3Rpb25Ib2xkZXIuZmluZCgnLmNhcmQnKS5sZW5ndGgpXG4gICAgLy8gZmluZHMgYWxsIHRoZSBwYW5lbHMgaW4gdGhlIGxpc3QgYW5kIGZvcmVhY2ggb25lIG9mIHRoZW0gd2UgYWRkIGEgcmVtb3ZlIGJ1dHRvbiB0byBpdFxuICAgIC8vIGFkZCByZW1vdmUgYnV0dG9uIHRvIGV4aXN0aW5nIGl0ZW1zXG4gICAgJGNvbGxlY3Rpb25Ib2xkZXIuZmluZCgnLmNhcmQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gJCh0aGlzKSBtZWFucyB0aGUgY3VycmVudCBwYW5lbCB0aGF0IHdlIGFyZSBhdFxuICAgICAgICAvLyB3aGljaCBtZWFucyB3ZSBwYXNzIHRoZSBwYW5lbCB0byB0aGUgYWRkUmVtb3ZlQnV0dG9uIGZ1bmN0aW9uXG4gICAgICAgIC8vIGluc2lkZSB0aGUgZnVuY3Rpb24gd2UgY3JlYXRlIGEgZm9vdGVyIGFuZCByZW1vdmUgbGluayBhbmQgYXBwZW5kIHRoZW0gdG8gdGhlIHBhbmVsXG4gICAgICAgIC8vIG1vcmUgaW5mb3JtYXRpb25zIGluIHRoZSBmdW5jdGlvbiBpbnNpZGVcbiAgICAgICAgYWRkUmVtb3ZlQnV0dG9uKCQodGhpcykpO1xuICAgIH0pO1xuICAgIC8vIGhhbmRsZSB0aGUgY2xpY2sgZXZlbnQgZm9yIGFkZE5ld0l0ZW1cbiAgICAkYWRkTmV3SXRlbS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyBwcmV2ZW50RGVmYXVsdCgpIGlzIHlvdXIgIGhvbWV3b3JrIGlmIHlvdSBkb24ndCBrbm93IHdoYXQgaXQgaXNcbiAgICAgICAgLy8gYWxzbyBsb29rIHVwIHByZXZlbnRQcm9wYWdhdGlvbiBib3RoIGFyZSB1c2VmdWxsXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gY3JlYXRlIGEgbmV3IGZvcm0gYW5kIGFwcGVuZCBpdCB0byB0aGUgY29sbGVjdGlvbkhvbGRlclxuICAgICAgICAvLyBhbmQgYnkgZm9ybSB3ZSBtZWFuIGEgbmV3IHBhbmVsIHdoaWNoIGNvbnRhaW5zIHRoZSBmb3JtXG4gICAgICAgIGFkZE5ld0Zvcm0oKTtcbiAgICB9KVxufSk7XG4vKlxuICogY3JlYXRlcyBhIG5ldyBmb3JtIGFuZCBhcHBlbmRzIGl0IHRvIHRoZSBjb2xsZWN0aW9uSG9sZGVyXG4gKi9cbmZ1bmN0aW9uIGFkZE5ld0Zvcm0oKSB7XG4gICAgLy8gZ2V0dGluZyB0aGUgcHJvdG90eXBlXG4gICAgLy8gdGhlIHByb3RvdHlwZSBpcyB0aGUgZm9ybSBpdHNlbGYsIHBsYWluIGh0bWxcbiAgICB2YXIgcHJvdG90eXBlID0gJGNvbGxlY3Rpb25Ib2xkZXIuZGF0YSgncHJvdG90eXBlJyk7XG4gICAgLy8gZ2V0IHRoZSBpbmRleFxuICAgIC8vIHRoaXMgaXMgdGhlIGluZGV4IHdlIHNldCB3aGVuIHRoZSBkb2N1bWVudCB3YXMgcmVhZHksIGxvb2sgYWJvdmUgZm9yIG1vcmUgaW5mb1xuICAgIHZhciBpbmRleCA9ICRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ2luZGV4Jyk7XG4gICAgLy8gY3JlYXRlIHRoZSBmb3JtXG4gICAgdmFyIG5ld0Zvcm0gPSBwcm90b3R5cGU7XG4gICAgLy8gcmVwbGFjZSB0aGUgX19uYW1lX18gc3RyaW5nIGluIHRoZSBodG1sIHVzaW5nIGEgcmVndWxhciBleHByZXNzaW9uIHdpdGggdGhlIGluZGV4IHZhbHVlXG4gICAgbmV3Rm9ybSA9IG5ld0Zvcm0ucmVwbGFjZSgvX19uYW1lX18vZywgaW5kZXgpO1xuICAgIC8vIGluY3JlbWVudGluZyB0aGUgaW5kZXggZGF0YSBhbmQgc2V0dGluZyBpdCBhZ2FpbiB0byB0aGUgY29sbGVjdGlvbkhvbGRlclxuICAgICRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ2luZGV4JywgaW5kZXgrMSk7XG4gICAgLy8gY3JlYXRlIHRoZSBwYW5lbFxuICAgIC8vIHRoaXMgaXMgdGhlIHBhbmVsIHRoYXQgd2lsbCBiZSBhcHBlbmRpbmcgdG8gdGhlIGNvbGxlY3Rpb25Ib2xkZXJcbiAgICB2YXIgJHBhbmVsID0gJCgnPGRpdiBjbGFzcz1cImNhcmQgY2FyZC1kYW5nZXJcIj48ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj48c3Ryb25nPkRpc2g8L3N0cm9uZz48L2Rpdj48L2Rpdj4nKTtcbiAgICAvLyBjcmVhdGUgdGhlIHBhbmVsLWJvZHkgYW5kIGFwcGVuZCB0aGUgZm9ybSB0byBpdFxuICAgIHZhciAkcGFuZWxCb2R5ID0gJCgnPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPjwvZGl2PicpLmFwcGVuZChuZXdGb3JtKTtcbiAgICAvLyBhcHBlbmQgdGhlIGJvZHkgdG8gdGhlIHBhbmVsXG4gICAgJHBhbmVsLmFwcGVuZCgkcGFuZWxCb2R5KTtcbiAgICAvLyBhcHBlbmQgdGhlIHJlbW92ZWJ1dHRvbiB0byB0aGUgbmV3IHBhbmVsXG4gICAgYWRkUmVtb3ZlQnV0dG9uKCRwYW5lbCk7XG4gICAgLy8gYXBwZW5kIHRoZSBwYW5lbCB0byB0aGUgYWRkTmV3SXRlbVxuICAgIC8vIHdlIGFyZSBkb2luZyBpdCB0aGlzIHdheSB0byB0aGF0IHRoZSBsaW5rIGlzIGFsd2F5cyBhdCB0aGUgYm90dG9tIG9mIHRoZSBjb2xsZWN0aW9uSG9sZGVyXG4gICAgJGFkZE5ld0l0ZW0uYmVmb3JlKCRwYW5lbCk7XG59XG5cbi8qKlxuICogYWRkcyBhIHJlbW92ZSBidXR0b24gdG8gdGhlIHBhbmVsIHRoYXQgaXMgcGFzc2VkIGluIHRoZSBwYXJhbWV0ZXJcbiAqIEBwYXJhbSAkcGFuZWxcbiAqL1xuZnVuY3Rpb24gYWRkUmVtb3ZlQnV0dG9uICgkcGFuZWwpIHtcbiAgICAvLyBjcmVhdGUgcmVtb3ZlIGJ1dHRvblxuICAgIHZhciAkcmVtb3ZlQnV0dG9uID0gJCgnPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCI+UmVtb3ZlPC9hPicpO1xuICAgIC8vIGFwcGVuZGluZyB0aGUgcmVtb3ZlYnV0dG9uIHRvIHRoZSBwYW5lbCBmb290ZXJcbiAgICB2YXIgJHBhbmVsRm9vdGVyID0gJCgnPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyXCI+PC9kaXY+JykuYXBwZW5kKCRyZW1vdmVCdXR0b24pO1xuICAgIC8vIGhhbmRsZSB0aGUgY2xpY2sgZXZlbnQgb2YgdGhlIHJlbW92ZSBidXR0b25cbiAgICAkcmVtb3ZlQnV0dG9uLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gZ2V0cyB0aGUgcGFyZW50IG9mIHRoZSBidXR0b24gdGhhdCB3ZSBjbGlja2VkIG9uIFwidGhlIHBhbmVsXCIgYW5kIGFuaW1hdGVzIGl0XG4gICAgICAgIC8vIGFmdGVyIHRoZSBhbmltYXRpb24gaXMgZG9uZSB0aGUgZWxlbWVudCAodGhlIHBhbmVsKSBpcyByZW1vdmVkIGZyb20gdGhlIGh0bWxcbiAgICAgICAgJChlLnRhcmdldCkucGFyZW50cygnLmNhcmQtZGFuZ2VyJykuc2xpZGVVcCgxMDAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgICAgICB9KVxuICAgIH0pO1xuICAgIC8vIGFwcGVuZCB0aGUgZm9vdGVyIHRvIHRoZSBwYW5lbFxuICAgICRwYW5lbC5hcHBlbmQoJHBhbmVsRm9vdGVyKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9
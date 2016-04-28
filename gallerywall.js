// // // // // // // // // // // //
// GalleryWall v1.0               //
// RJ Goetz | rj@rjgoetz.com   //
//  //  //  //  //  //  // // //


// This program attempts to create a grid system inspired by the look of a gallery wall.
// Goals:
// 1) ".item" is a grid object that position itself in relation to its surroundings
// 2) Items between rows will vertically collapse to the nearest item above
// 3) Makes no judgement of the height of an object
// 4) User controls assignment of item column consumption or allows for randomization
// 5) Grid accepts an unlimited number of items


// global stores
var
  windowWidth = window.innerWidth,
  items = document.getElementsByClassName("item")
;

console.log("Window Width: " + windowWidth);
console.log(items);

// get innnerHeight of div
console.log(items[0].clientHeight);

// galleryWall object
var galleryWall = {
  col: 6,
  gutter: 12
};

// remove margin from last item

function checkLastInRow() {

  for (var i = 1; i < items.length; i++) {
    var
      prevItemBounds = items[i-1].getBoundingClientRect(),
      prevItemMargin = items[i-1].style.marginRight;
      currItemBounds = items[i].getBoundingClientRect(),
      currItemWidth = currItemBounds.right - currItemBounds.left
    ;

    // item positioning statistics
    console.log("Item: " + i + ", Left: " + prevItemBounds.left + ", Right: " + prevItemBounds.right + " Item Width: " + currItemWidth);

    // total width of items in row
    console.log(prevItemBounds.right + currItemWidth + galleryWall.gutter);

    // set right margin of last item in row to 0
    if ((prevItemBounds.right + currItemWidth + galleryWall.gutter) === windowWidth) {
      items[i].setAttribute("style", "margin-right:0");
    };

    // clear float if previous item has margin-right 0px property
    if (prevItemMargin === "0px") {
      items[i].setAttribute("style", "clear: both");
    };

  };

};

// initialize
checkLastInRow();


function makeUl(array) {
    // Create the list element:
    var list = document.createElement('ul');
    list.setAttribute("id", "city_list");
    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li')
   
        // Set its contents:
if (array[i].population / 1000000 >= 1) {
        item.appendChild(document.createTextNode(array[i].city + ', населення ' + (array[i].population / 1000000).toFixed(1) + ' млн') );
} else {
    continue;
}


        // Add it to the list:
        list.appendChild(item);
    }
    //  Return the constructed list:
    return list;
}



//Create a search field
var search = document.createElement("INPUT");
search.setAttribute("type", "search");
search.setAttribute("id", "search_field");
search.setAttribute("placeholder", "Search...");
search.setAttribute("onkeyup", "find()");

document.getElementById('dropdown').appendChild(search);

document.getElementById('dropdown').appendChild(makeUl(LIST));

//Show/hide menu on click
document.getElementsByClassName('menu_btn')[0].addEventListener('click',toggle)

function toggle(){//Change classes of elem to show/hide
  var nav = document.getElementById('dropdown');
  var btn = document.getElementsByClassName('menu_btn')[0];
  nav.classList.toggle('open');
  btn.classList.toggle('reverse');

}

//Set the text of selected element of the list into the button
document.getElementsByTagName('ul')[0].addEventListener('click', function (event){
  var selected = event.target;
  if (selected.tagName === 'LI') {
    document.getElementsByClassName('menu_btn')[0].innerHTML = selected.innerHTML;
 highlite(selected)
}
})

//Higlight the selected elem
function highlite(node){
      var selected = event.target;
           unselectAll()
     selected.classList.toggle('selected');

      };
//and only that one elem, others are autmatically unselected
    function unselectAll() {
      var ul = document.getElementsByTagName('ul')[0]
      for (var i = 0; i < ul.children.length; i++) {
        ul.children[i].classList.remove('selected');
      }
    }

//Live search 
function find() {

    var input, filter, ul, li;
    input = document.getElementById('search_field');
    filter = input.value.toUpperCase();
    ul = document.getElementById("city_list");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for ( var i = 0; i < li.length; i++) {
    if (li[i].innerHTML.toUpperCase().indexOf(filter) > -1) { 
        li[i].style.display = "";
    } else {
        li[i].style.display = "none";
    }
}
}

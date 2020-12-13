var form = document.getElementById('form-area');
var list = document.getElementById('list');
var filter = document.getElementById('search-id');
//var filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit', addtolist);

// Delete event
list.addEventListener('click', removeList);

// Filter event
filter.addEventListener('keyup', searchlist);



//Add to list
function addtolist(e){
    e.preventDefault();

    // Get input value
  var newlist = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');

  // Add class
  li.className = 'list-item';

  // Add text node with input value
  li.appendChild(document.createTextNode(newlist)); 


    // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'remove';

    // Append text node
  deleteBtn.appendChild(document.createTextNode('-'));

    // Append button to li
    li.appendChild(deleteBtn);

  // Append li to list
  list.appendChild(li);

}

// Remove item
function removeList(e){
    if(e.target.classList.contains('remove')){
      if(confirm('Are You Sure You Want To Delete This Item?')){
        var li = e.target.parentElement;
        list.removeChild(li);
      }
    }
  }

  // Filter Items
function searchlist(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get list
    var items = list.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
  



    //NIGHT MODE

    var night = document.getElementById('night-mode');

    night.addEventListener('click', change);
    night.addEventListener('dblclick', revert);

    // ENACT NIGHT MODE

    function change(e){
      e.preventDefault();

      var night = document.getElementById('night-mode');
      night.innerHTML = "LIGHT MODE";


      var container = document.getElementsByClassName('container-1');

      container[0].style.backgroundColor = "black";


      var mainHeader = document.getElementById('main-header')

      mainHeader.style.backgroundColor = "black";

      var listsss = document.getElementsByClassName('list-item')


      for(i = 0; i < listsss.length; i++){
        listsss[i].style.backgroundColor = "black";
        listsss[i].style.color = "white";
        listsss[i].style.boxShadow = "2px 2px 15px 4px rgba(0, 14, 233,0.58)"; //-1px -1px 9px 4px rgba(0,14,233,0.58)
      }

      var second = document.getElementById('container');
      second.style.background = "black";
      second.style.boxShadow = "2px 2px 15px 4px rgba(0, 14, 233,0.58)";

      var bigText = document.getElementsByTagName('h2')
      for(i = 0; i < bigText.length; i++){
        bigText[i].style.color = "white";
      }
    }


    //ReVERSE

    function revert(e){
      e.preventDefault();

      var night = document.getElementById('night-mode');
      night.innerHTML = "DARK MODE";

      var container = document.getElementsByClassName('container-1');

      container[0].style.backgroundColor = "rgb(240, 239, 239)";


      var mainHeader = document.getElementById('main-header')

      mainHeader.style.backgroundColor = "#4651f5";

      var listsss = document.getElementsByClassName('list-item')


      for(i = 0; i < listsss.length; i++){
        listsss[i].style.backgroundColor = " rgb(255, 255, 255)";
        listsss[i].style.color = "black";
        listsss[i].style.boxShadow = "2px 2px 25px 4px rgb(228, 225, 225)"; 
      }

      var second = document.getElementById('container');
      second.style.background = "rgba(255, 255, 255,0.4)";
      second.style.boxShadow = "2px 2px 25px 4px rgb(199, 198, 198)";

      var bigText = document.getElementsByTagName('h2')
      for(i = 0; i < bigText.length; i++){
        bigText[i].style.color = "#101991";
      }
    }

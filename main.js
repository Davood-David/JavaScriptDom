

var form = document.getElementById('addForm');
var itmeList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItmen);

// Delete event 
itmeList.addEventListener('click', removeItem);

// Filter event
filter.addEventListener('keyup', filterItems);


// add item 
function addItmen(e){
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item').value;

    //create new li element 
    var li = document.createElement('li');

    // add class
    li.className = 'list-group-item';


    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create delete button
    var deleteBtn = document.createElement('button');

    // add classes to delete button 
    deleteBtn .className = 'btn btn-danger btn-sm float-right delete';

    // Append next node 
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);

    // Append li to list d
    itmeList.appendChild(li);
}


// Remove item

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itmeList.removeChild(li);
        }

    }

}



// Filter Items

function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get list
    var items = itmeList.getElementsByTagName('li');
    // convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });
}

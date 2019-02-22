//show form to add task
function addTask() {
		var showForm = document.getElementById('form-holder');
		showForm.style.display = 'block';
	}

//To make the form disappear
function discardTask() {
		var showForm = document.getElementById('form-holder');
		showForm.style.display = 'none';
	}

//show table 
function viewTask() {
		var showForm = document.getElementById('table');
		showForm.style.display = 'block';
	}

//To make the form disappear
function closeTable() {
		var showForm = document.getElementById('table');
		showForm.style.display = 'none';
	}

// Changes form behaviour
var form = document.getElementById('form');
form.addEventListener('submit', saveTask);
var i = 1;

	
//Adds Task
	function saveTask(e) {
		e.preventDefault();
		//getting input value
		var task = document.getElementById("task").value;
		var date = document.getElementById("date").value;
		var time = document.getElementById("time").value;
		var location = document.getElementById("location").value;
		var activity = document.getElementById("activity").value;
		console.log(task,date,time,location,activity);

		//Create a tr element
		var tr = document.createElement('tr');
		tr.id = "tRow";
		
				//Create a td element
		var td = document.createElement('td');
		//add text node with input value
		td.appendChild(document.createTextNode(++i));
		//adding it to the tr 
		tr.appendChild(td);

		//Create a td element
		var td1 = document.createElement('td');
		//add text node with input value
		td1.appendChild(document.createTextNode(task));
		//adding it to the tr 
		tr.appendChild(td1);

		//Create a td element
		var td2 = document.createElement('td');
		//add text node with input value
		td2.appendChild(document.createTextNode(date));
		//adding it to the tr 
		tr.appendChild(td2);

		//Create a td element
		var td3 = document.createElement('td');
		//add text node with input value
		td3.appendChild(document.createTextNode(time));
		//adding it to the tr 
		tr.appendChild(td3);

		//Create a td element
		var td4 = document.createElement('td');
		//add text node with input value
		td4.appendChild(document.createTextNode(location));
		//adding it to the tr 
		tr.appendChild(td4);

		//Create a td element
		var td5 = document.createElement('td');
		//add text node with input value
		td5.appendChild(document.createTextNode(activity));
		//adding it to the tr 
		tr.appendChild(td5);

		//Create a delete button element
		var td6 = document.createElement('td');
		var button = document.createElement('button');
		button.className = 'btn btn-primary delete';
		//adding text to button
		button.appendChild(document.createTextNode('Done'));
		//adding the button to the td
		td6.appendChild(button);
		//adding td it to the tr 
		tr.appendChild(td6); 

		//getting our table
		var table = document.getElementById('mtable');
		table.appendChild(tr);
		//console.log(table);


	}

		//removing Task
var tabRow = document.getElementById('tRow');
tabRow.addEventListener('click', removeTask);
console.log(tRow);

function removeTask(e) {
	if (e.target.classList.contains('delete')) {
		console.log('hello');
		if (confirm('Are you sure you want to delete?')) {
			var tRow= e.target.parentElement.parentElement;
			var tbody = document.getElementById('mtable');
			tbody.removeChild(tRow);
		}
	}
	
}
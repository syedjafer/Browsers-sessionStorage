function store(){ //stores items in the sessionStorage
    var name = document.getElementById('studentName').value;
    var mark = document.getElementById('studentMark').value;
    var key = document.getElementById('key').value;


    const car = {
        name: name,
        mark: mark,
    }

    window.sessionStorage.setItem(key,JSON.stringify(car));  
    //converting object to string
}

function retrieveRecords(){ 
    var key = document.getElementById('retrieveKey').value;
    var records = window.sessionStorage.getItem(key);
    var paragraph = document.getElementById("retrivedItems");
    paragraph.innerHTML = records;
}

function removeItem(){ 
    var key = document.getElementById('removeKey').value;
    sessionStorage.removeItem(key)
    console.log("remove items");
}

function clearStorage(){ 
    //clears the entire sessionStorage
    sessionStorage.clear()
    console.log("clear records");
}

window.onload =function(){ //ensures the page is loaded before functions are executed.
    document.getElementById("carForm").onsubmit = store
    document.getElementById("clearButton").onclick = clearStorage
    document.getElementById("removeButton").onclick = removeItem
    document.getElementById("retrieveButton").onclick = retrieveRecords
}
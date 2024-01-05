let savedResults = [];
localStorage.removeItem("Saved-Results");

let oldData = localStorage.getItem("Saved-Results")
if (oldData) {
    savedResults = [oldData]
}

function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
  }

function submitResults(event) {
   
    let all = document.getElementsByTagName("*");
    let inputs = [];
    let results = [];

    for (let i=0, max=all.length; i < max; i++) {
        if (all[i].nodeName === "INPUT") {
            inputs.push(all[i]);
        }
    }

    for (let i=0, max=all.length; i < max; i++) {
        if (all[i].nodeName === "TEXTAREA") {
            inputs.push(all[i]);
        }
    }

    

    for (let i = 0, max = inputs.length; i < max; i++) {
        results.push(inputs[i].value);
        inputs[i].value = "";
    }
  
    console.log(results)
    console.log(typeof results)

    if (isArray(savedResults)) {
        console.log("array is array")
        savedResults.push(results);
        localStorage.setItem("Saved-Results", savedResults);
    } else {
        console.log("array is not array")
    }
    
}

function logResults() {
    let item = localStorage.getItem("Saved-Results")
    if (item) {
        item = [item]
        for (let i = 0, max = item.length; i < max; i++) {
            console.log(item[i]);
        }
    }
}

document.getElementById("endOfForm").addEventListener('click', submitResults);
document.getElementById("logResults").addEventListener('click', logResults);
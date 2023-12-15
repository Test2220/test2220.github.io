

function submitResults(event) {
   
    let all = document.getElementsByTagName("*");
    let inputs = [];
    let results = [];

    for (let i=0, max=all.length; i < max; i++) {
        if (all[i].nodeName === "INPUT") {
            inputs.push(all[i]);
        }
    }

    for (let i = 0, max = inputs.length; i < max; i++) {
        results.push(inputs[i].value);
        inputs[i].value = "";
    }
  
    let saved = localStorage.getItem("Saved-Results");
    if (Array.isArray(saved)) {
        saved.push(results);
    } else {
        saved = [];
        saved.push(results);
    }
    localStorage.setItem("Saved-Results", saved);
}

function logResults() {
    let item = localStorage.getItem("Saved-Results")
    if (item) {
        console.log(item);
    }
}

document.getElementById("endOfForm").addEventListener('click', submitResults);
document.getElementById("logResults").addEventListener('click', logResults);
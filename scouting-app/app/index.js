let keys = [];

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
    }
  
    const key = Math.random();
    keys.push(key);
    localStorage.setItem(key, results);
}

function logResults() {
    let items = [];
   
    for (i = 0, max = keys.length; i < max; i++) {
        const item = localStorage.getItem(keys[i]);
        items.push(item);
    }

    console.log(items);
    keys = [];
}

document.getElementById("endOfForm").addEventListener('click', submitResults);
document.getElementById("logResults").addEventListener('click', logResults);
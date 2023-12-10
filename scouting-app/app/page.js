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
}

document.getElementById("endOfForm").addEventListener('click', submitResults);
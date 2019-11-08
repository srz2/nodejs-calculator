var txtNum1 = document.getElementById("num1");
var txtNum2 = document.getElementById("num2");
var lblStatus = document.getElementById("lblStatus");
var lblAnswer = document.getElementById("lblAnswer");

function api_send(operation, x, y) {
    var request = new XMLHttpRequest();
    request.open('POST', 'http://localhost:' + location.port + '/' + operation, true);
    request.setRequestHeader('Content-Type', 'application/json');

    request.onreadystatechange = function() {
        
        if (this.readyState != 4) return;


        console.log("Received: " + this.responseText);
        var data = JSON.parse(this.responseText);
                
        lblStatus.innerHTML = "What happened: <b>" + data.message + "</b>";
        lblAnswer.innerHTML = "Answer: <b>" +  data.output.resultant + "</b>";
    };

    var json = JSON.stringify({
        num1: x,
        num2: y
    });
    console.log('Will send: ' + json);
    request.send(json);
}

function api_add() {
    const x = txtNum1.value;
    const y = txtNum2.value;
    api_send('add', x, y);
}

function api_sub() {
    const x = txtNum1.value;
    const y = txtNum2.value;
    api_send('subtract', x, y);
}

function api_divide() {
    const x = txtNum1.value;
    const y = txtNum2.value;
    api_send('divide', x, y);
}

function api_multiply() {
    const x = txtNum1.value;
    const y = txtNum2.value;
    api_send('multiply', x, y);
}

function api_pow() {
    const x = txtNum1.value;
    const y = txtNum2.value;
    api_send('pow', x, y);
}
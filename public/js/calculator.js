var txtNum1 = document.getElementById("num1");
var txtNum2 = document.getElementById("num2");
var lblStatus = document.getElementById("lblStatus");
var lblAnswer = document.getElementById("lblAnswer");

// Create host name with port number
var sz_Host = 'http://' + location.host;
if (sz_Host.includes(':')){
    sz_Host += '/';
} else {
    sz_Host += ':' + location.port + '/';
}


function api_send(operation, x, y) {
    var request = new XMLHttpRequest();
    var sz_URL =  sz_Host + operation;
    console.log('Configured Send: ' + sz_URL);
    request.open('POST', sz_URL, true);
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
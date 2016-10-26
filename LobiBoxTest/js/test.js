
$(document).ready(function () {

    document.getElementById('btnMessage').onclick = myFunc;
    document.getElementById('btnChange').onclick = changeContainar;
    

    panel = new messagePanel();

    //panel.loadFile(panel.cssFile, "css");
});

function myFunc() {

    panel.title = 'My Title';
    panel.description = 'Message goes here';
    panel.mBox.buttons.push({ type: 'ok', text: 'Ok' });
    panel.mBox.buttons.push({ type: 'cancel', text: 'Cancel' });

    panel.mBox.callback = callBackFunction;

    var e = document.getElementById("selectOption");
    panel.type = e.options[e.selectedIndex].value;

    e = document.getElementById("selectOption2");
    panel.behaviour = e.options[e.selectedIndex].value;

    //panel.loadFile("css/customStyle1.css", "css");

    //panel.show("hello", "how are you", "error", "messagebox", callBackFunction);

    panel.show();

    //jQuery.messagePanel();
}

function callBackFunction(e) {
    if (e === 'yes') {
        alert("Yes Pressed");
    }
    else if (e === 'no') {
        alert("No Pressed");
    }
    else if (e === 'ok') {
        alert("Ok Pressed");
    }
    else if (e === 'cancel') {
        alert("Cancel Pressed");
    }
    else {
        alert("Custom Pressed");
    }
}

function changeContainar() {
    var panel = new messagePanel();

    panel.title = 'My Title';
    panel.description = 'This is containar message';

    var e = document.getElementById("selectOption");
    panel.type = e.options[e.selectedIndex].value;

    panel.behaviour = 'notification';
    panel.notification.htmlContainar = 'myDiv';

    panel.show();
}
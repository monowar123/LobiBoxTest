

//(function ( $ ) {
//    $.show = function () {
//        alert("Hello");
//    };
//}(jQuery));

//(function ( $ ) {
var messagePanel = function () {

        this.title = "Title";   				//title of the message box
        this.description = "Description...";	//Message content

        this.behaviour = "messagebox";		//notification = notification bar;  messagebox
        this.type = "info";					//type -> success,info,warning,error  or confirm

        this.backgroundColor = "transparent"; // backgroundColor of the messagebox that will override
        this.showClass = "fadeInDown";
        this.hideClass = "fadeOutUp";

        this.closeButton = true;				//indicates the close button at the upper right corner

        this.mBox = {
            width: 500,
            draggable: true,				//draggable possible or not
            modal: false,					//is background fill with modal or not

            buttonsAlign: 'right', 	//['left', 'center', 'right'],
            buttons: [],				//available buttons

            callback: 'Func Name' 			//callback function for button event
        };

        this.notification = {
            width: screen.width,
            position: "bottom right",   //where it is displayed
            size: 'mini',				//mini || normal || large

            delay: false, 				//if delay is false then stiky. else delay time in milisecond
            delayIndicator: false,		//indication of the delay time in progressbar
            sound: false,
            closeOnClick: true,

            htmlContainar: '', //containar of the messagebox where it is placed
        };

        this.cssFile = "css/customStyle1.css";

        //this.loadFile = function (filename, filetype) {
        loadjscssfile(this.cssFile, "css");
        //}

        //this.show = function (title, description, type, behaviour, callback) {
        //    this.title = title;
        //    this.description = description;
        //    this.type = type || "info";
        //    this.behaviour = behaviour || "messagebox";
        //    this.mBox.callback = callback || "";

        //    HitMessagePanel(this);
        //}


        this.show = function () {
            HitMessagePanel(this);
        }

        //HitMessagePanel(this);

        //return this;

    };
//}(jQuery));

function HitMessagePanel(settings) {

    switch (settings.type) {
        case 'confirm':
            Lobibox.confirm({
                width: settings.mBox.width,
                title: settings.title,
                msg: settings.description,            
                closeButton: settings.closeButton,
                showClass: settings.showClass,
                hideClass: settings.hideClass,

                draggable: settings.mBox.draggable,
                modal: settings.mBox.modal,
                buttonsAlign: settings.mBox.buttonsAlign,

                buttons: getButtons(settings),
                callback: function (lobibox, e) {
                    if (typeof (settings.mBox.callback) == 'function')
                        settings.mBox.callback(e);
                }
            });
            break;
        case 'error':
        case 'success':
        case 'warning':
        case 'info':
            switch (settings.behaviour) {
                case 'messagebox':
                    Lobibox.alert(settings.type,                  //'error|success|warning|info'
                    {
                        width: settings.mBox.width,
                        title: settings.title,
                        msg: settings.description,                      
                        closeButton: settings.closeButton,
                        showClass: settings.showClass,
                        hideClass: settings.hideClass,
                        
                        draggable: settings.mBox.draggable,
                        modal: settings.mBox.modal,
                        buttonsAlign: settings.mBox.buttonsAlign,

                        buttons: getButtons(settings),
                        callback: function (lobibox, e) {
                            if (typeof (settings.mBox.callback) == 'function')
                                settings.mBox.callback(e);
                        }
                    });
                    break;
                case 'notification':
                    var soundVar = settings.notification.sound;
                    if (settings.type == "error") {    
                        soundVar = true;                    //default sound true only for error notification
                    }
                    var widthVar = settings.notification.width;
                    if (settings.notification.htmlContainar != '') {     //if placed into other containar
                        widthVar = document.getElementById(settings.notification.htmlContainar).style.width;
                    }
                    Lobibox.notify(settings.type,                // 'warning', 'info', 'success', 'error'
                    {
                        title: settings.title,
                        msg: settings.description,                
                        closable: settings.closeButton,
                        showClass: settings.showClass,
                        hideClass: settings.hideClass,

                        width: widthVar,
                        position: settings.notification.position,
                        size: settings.notification.size,

                        delay: settings.notification.delay,
                        delayIndicator: settings.notification.delayIndicator,
                        sound: soundVar,
                        closeOnClick: settings.notification.closeOnClick,
                        htmlContainar: settings.notification.htmlContainar
                    });
                    break;
            }
            break;
        default: break;
    } 
}

function getButtons(settings){

    var buttonsObj = new Object();
    var _buttons = settings.mBox.buttons;

    if (_buttons.length > 0) {

        for (var i = 0; i < _buttons.length; i++) {

            switch (_buttons[i].type.toLowerCase()) {
                case 'ok':
                    buttonsObj.ok = { 'class': 'btn btn-info', text: _buttons[i].text };
                    break;
                case 'cancel':
                    buttonsObj.cancel = { 'class': 'btn btn-danger', text: _buttons[i].text };
                    break;
                case 'yes':
                    buttonsObj.yes = { 'class': 'btn btn-success', text: _buttons[i].text };
                    break;
                case 'no':
                    buttonsObj.no = { 'class': 'btn btn-warning', text: _buttons[i].text };
                    break;
                case 'custom':
                    buttonsObj.custom = { 'class': 'btn btn-default', text: _buttons[i].text };
                    break;
                default: break;
            }
        }
    }
    else {
        if (settings.type == 'confirm') {
            buttonsObj.yes = { 'class': 'btn btn-success' };
            buttonsObj.no = { 'class': 'btn btn-warning' };
            buttonsObj.cancel = { 'class': 'btn btn-danger' };
        }
        else {
            buttonsObj.ok = { 'class': 'btn btn-info'};           
        }
    }

    return buttonsObj;
}


function loadjscssfile(filename, filetype) {
    if (filetype == "js") { //if filename is a external JavaScript file
        var fileref = document.createElement('script');
        fileref.setAttribute("type", "text/javascript");
        fileref.setAttribute("src", filename);
    }
    else if (filetype == "css") { //if filename is an external CSS file
        var fileref = document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", filename);
    }
    if (typeof fileref != "undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref);
}

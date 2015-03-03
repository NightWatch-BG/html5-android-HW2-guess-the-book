var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.getElementById('btnStartGame').onclick = this.startGame;
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        document.getElementById('rules').setAttribute('style', 'display:block;');
        document.getElementById('game').setAttribute('style', 'display:none;');

        app.loadData();
    },

    loadData : function () {
        var text = "Name: " + localStorage.getItem('name') + "</br>\n";
        text += "Age: " + sessionStorage.getItem('age') + "</br>\n";
        document.getElementById('text').innerHTML = text;
    },

    // Handle button click
    startGame : function () {
        document.getElementById('rules').setAttribute('style', 'display:none;');
        document.getElementById('game').setAttribute('style', 'display:block;');
    }
};

app.initialize();
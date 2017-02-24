var Error = {
    "throw": function(msg) {
        if (typeof msg == "object") {
            msg = JSON.stringify(msg);
        }

        alert(msg);
    }
};

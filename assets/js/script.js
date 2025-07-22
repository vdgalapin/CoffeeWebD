window.onload = function() {
    try {
        $("#HeaderLocation a").css("fontWeight", "normal");
        let location = document.getElementById("Location").className;
    
        switch(location) {
            case "Philippines":
                document.getElementById("PhilippinesHeader").style.fontWeight = "Bold";
                break;
            case "Thailand":
                document.getElementById("ThailandHeader").style.fontWeight = "Bold";
                break;
            case "Vietnam":
                document.getElementById("VietnamHeader").style.fontWeight = "Bold";
                break;
            default:
    
        }
    } catch(err) {
        console.log(err);
    }

}
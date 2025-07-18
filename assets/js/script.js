window.onload = function() {
    try {
        $("#HeaderLocation a").css("fontWeight", "normal");
        let location = document.getElementById("Location").className;
    
        switch(location) {
            case "Dumaguete":
                document.getElementById("DumagueteHeader").style.fontWeight = "Bold";
                break;
            case "Siargao":
                document.getElementById("SiargaoHeader").style.fontWeight = "Bold";
                break;
            case "Siquijor":
                document.getElementById("SiquijorHeader").style.fontWeight = "Bold";
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
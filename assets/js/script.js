window.onload = function () {
    try {
        $("#HeaderLocation a").css("fontWeight", "normal");

        // Get the value from the query string, e.g. ?country=Philippines
        const params = new URLSearchParams(window.location.search);
        const country = params.get("country");

        switch (country) {
            case "Philippines":
                document.getElementById("PhilippinesHeader").style.fontWeight = "bold";
                break;
            case "Thailand":
                document.getElementById("ThailandHeader").style.fontWeight = "bold";
                break;
            case "Vietnam":
                document.getElementById("VietnamHeader").style.fontWeight = "bold";
                break;
            default:
                // No matching country in URL
        }
    } catch (err) {
        console.log(err);
    }
};

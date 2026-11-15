const alertForm = document.getElementById("alertForm");

alertForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const type = document.getElementById("alertType").value;

    const message = document.getElementById("alertMessage").value;

    const newAlert = {
        type: type,
        message: message,
        time: new Date().toLocaleString(),
        status: "NEW"
    };

    let alerts = JSON.parse(
        localStorage.getItem("astroAlerts") || "[]"
    );

    alerts.unshift(newAlert);

    localStorage.setItem(
        "astroAlerts",
        JSON.stringify(alerts)
    );

    document.getElementById("alertStatus").textContent =
        "Alert successfully sent to Mission Control!";

    alertForm.reset();

});
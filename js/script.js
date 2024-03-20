const html = String.raw;

function getTimeStamp() {
  const section = document.getElementById("datetime");

  //date & time
  const currentDate = new Date();
  const timeStamp = currentDate.toLocaleString("ro");

  //url
  const url = window.location.href;

  //browser details
  let browser = navigator.userAgent;

  //location
  let location = "";
  if (!("geolocation" in navigator)) {
    location = "browserul nu suporta geolocatia";
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      location =
        "Latitude: " +
        position.coords.latitude +
        "<br/>Longitude: " +
        position.coords.longitude;

      section.innerHTML =
        "data si ora: " +
        timeStamp +
        "<br/>locatia: " +
        location +
        "<br/>URL: " +
        url +
        "<br/>browser: " +
        browser;
    },
    () => {
      location = "permisiuni insuficiente";

      section.innerHTML =
        "data si ora: " +
        timeStamp +
        "<br/>locatia: " +
        location +
        "<br/>URL: " +
        url +
        "<br/>browser: " +
        browser;
    }
  );
}

window.addEventListener("load", () => {
  getTimeStamp();

  setInterval(getTimeStamp, 200);
});

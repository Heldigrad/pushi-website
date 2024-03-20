const html = String.raw;

setInterval(getTimeStamp, 10);

function getTimeStamp() {
  console.log("ceva");

  const currentDate = new Date();
  const timeStamp = currentDate.toLocaleString("ro");
  const section = document.getElementById("datetime");

  const url = location.href;

  let browser = navigator.userAgent;

  if (!("geolocation" in navigator)) {
    section.innerHTML = "browserul nu suporta geolocatia";

    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const location =
        "Latitude: " +
        position.coords.latitude +
        "<br>Longitude: " +
        position.coords.longitude;

      section.innerHTML =
        "data si ora: " +
        timeStamp +
        "<br/> locatia: " +
        location +
        "<br/>URL: " +
        url +
        "<br/>browser: " +
        browser;
    },
    () => {
      const location = "permisiuni insuficiente";

      //   section.innerHTML = html`
      //     <p>
      //       <br />
      //     </p>
      //   `;
      section.innerHTML =
        "data si ora: " +
        timeStamp +
        "\nlocatia: " +
        location +
        "<br/>URL: " +
        url;
    }
  );
}

window.addEventListener("load", getTimeStamp);

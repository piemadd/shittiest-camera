import './style.css'

/*
const app = document.getElementById('app');

if (window.AmbientLightSensor) {
  const sensor = new AmbientLightSensor({
    frequency: 1,
  });

  sensor.addEventListener("reading", (event) => {
    console.log("Current light level:", sensor.illuminance);
  });

  sensor.start();
  
  app.innerText = 'idk'
} else {
  app.innerText = 'poop!'
}
*/


const details = document.getElementById("app");

// Feature detection
if (window.AmbientLightSensor){
    try{
      const sensor = new AmbientLightSensor();
      // Detect changes in the light
      sensor.onreading = () => {
        details.innerHTML = sensor.illuminance;

          // Read the light levels in lux 
          // < 50 is dark room
          if (sensor.illuminance < 50) {
            document.body.className = 'darkLight';
          } else {
            document.body.className = 'brightLight';
          }
      }

      // Has an error occured?
      sensor.onerror = event => document.getElementById("app").innerHTML = event.error.message;
      sensor.start();
    } catch(err) {
      details.innerHTML = err.message;
    }
} else {
  details.innerHTML = 'It looks like your browser doesnt support this feature'; 
}
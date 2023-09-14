const TEMP_CONVERTING = -273;

const searchBtn = document.querySelector(".weather__btn");
const searchInput = document.querySelector(".weather__search");

const displayNone = (elem) => {
  elem.style.display = "none";
};

searchBtn.addEventListener("click", () => {
  const cityValue = searchInput.value;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=37d8c8476cb2e1ea90e172e158361548&=${cityValue}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);

      let tempCelc = Math.round(data.main.temp + TEMP_CONVERTING);
      let feelTempCelc = Math.round(data.main.feels_like + TEMP_CONVERTING);
      let windSpeed = data.wind.speed;
      console.log(tempCelc);
      console.log(feelTempCelc);
      console.log(windSpeed);
      let imageSrc = "";
      // let htmlItem = ;
      document.querySelector(".weather").innerHTML = `
      <div class="weather__input">
            <input
              type="text"
              placeholder="Input City..."
              class="weather__search"
            />
            <div class="weather__btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="30px"
                height="30px"
              >
                <path
                  d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"
                />
              </svg>
            </div>
          </div>
      <div class="weather__content">
      <div class="weather__image">
                <img src="./assets/sunny.png" alt="sunny">
            </div>
            <div class="weather__text">
                <h3 class="weather__temp">${tempCelc} ℃</h3>
                <p class="weather__city">${cityValue}</p>
            </div>
            <div class="weather__info">
                <div class="weather__temp-feel">
                    <svg fill="#000000" width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

                        <g id="Temp_High" data-name="Temp High">
                          <g>
                            <path  d="M14.863,13.4V4.939a2.929,2.929,0,0,0-.84-2.03,2.859,2.859,0,0,0-2.23-.82,2.948,2.948,0,0,0-2.66,3l.01,8.28a4.755,4.755,0,0,0,1.9,8.46,5.093,5.093,0,0,0,.95.09,4.759,4.759,0,0,0,4.76-4.75A4.684,4.684,0,0,0,14.863,13.4Zm-.48,6.66a3.783,3.783,0,0,1-3.15.78,3.7,3.7,0,0,1-2.92-2.98,3.745,3.745,0,0,1,1.43-3.69.962.962,0,0,0,.39-.77V5.089a1.968,1.968,0,0,1,1.73-2,.66.66,0,0,1,.14-.01,1.878,1.878,0,0,1,1.86,1.86V13.4a.962.962,0,0,0,.39.77,3.742,3.742,0,0,1,.13,5.89Z"/>
                            <path  d="M13.893,17.169a1.89,1.89,0,0,1-3.78,0,1.858,1.858,0,0,1,1.39-1.81V5.4a.5.5,0,0,1,1,0v9.96A1.869,1.869,0,0,1,13.893,17.169Z"/>
                          </g>
                        </g>
                    </svg>
                    <div class="weather__temp-text">
                        <span class="weather__temp-info">${feelTempCelc} ℃</span>
                        <span class="weather__temp-name">Temperature Feelings</span>
                    </div>
                </div>
                <div class="weather__wind">
                    <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 8H5M7 5.85714V5.5C7 4.11929 8.11929 3 9.5 3C10.8807 3 12 4.11929 12 5.5C12 6.88071 10.8807 8 9.5 8H8" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M4 14H5M15 17V17.5C15 19.433 16.567 21 18.5 21C20.433 21 22 19.433 22 17.5C22 15.567 20.433 14 18.5 14H9" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M2 11H8M15 8V7.5C15 5.567 16.567 4 18.5 4C20.433 4 22 5.567 22 7.5C22 9.433 20.433 11 18.5 11H12.25" stroke="black " stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                    <div class="weather__wind-text">
                        <span class="weather__wind-info">${windSpeed} m/s</span>
                        <span class="weathe    r__wind-name">Wind Speed</span>
                    </div>
                </div>
            </div>
      </div>
            
      `;
    })
    .catch((err) => console.log(err));
});

{
  /* <div class="weather__image">
                <img src="./assets/icons8-sunny-100.png" alt="sunny">
            </div>
            <div class="weather__text">
                <h3 class="weather__temp">${tempCelc} ℃</h3>
                <p class="weather__city">${cityValue}</p>
            </div>
            <div class="weather__info">
                <div class="weather__temp-feel">
                    <svg fill="#000000" width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

                        <g id="Temp_High" data-name="Temp High">
                          <g>
                            <path  d="M14.863,13.4V4.939a2.929,2.929,0,0,0-.84-2.03,2.859,2.859,0,0,0-2.23-.82,2.948,2.948,0,0,0-2.66,3l.01,8.28a4.755,4.755,0,0,0,1.9,8.46,5.093,5.093,0,0,0,.95.09,4.759,4.759,0,0,0,4.76-4.75A4.684,4.684,0,0,0,14.863,13.4Zm-.48,6.66a3.783,3.783,0,0,1-3.15.78,3.7,3.7,0,0,1-2.92-2.98,3.745,3.745,0,0,1,1.43-3.69.962.962,0,0,0,.39-.77V5.089a1.968,1.968,0,0,1,1.73-2,.66.66,0,0,1,.14-.01,1.878,1.878,0,0,1,1.86,1.86V13.4a.962.962,0,0,0,.39.77,3.742,3.742,0,0,1,.13,5.89Z"/>
                            <path  d="M13.893,17.169a1.89,1.89,0,0,1-3.78,0,1.858,1.858,0,0,1,1.39-1.81V5.4a.5.5,0,0,1,1,0v9.96A1.869,1.869,0,0,1,13.893,17.169Z"/>
                          </g>
                        </g>
                    </svg>
                    <div class="weather__temp-text">
                        <span class="weather__temp-info">${feelTempCelc} ℃</span>
                        <span class="weather__temp-name">Temperature Feelings</span>
                    </div>
                </div>
                <div class="weather__wind">
                    <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 8H5M7 5.85714V5.5C7 4.11929 8.11929 3 9.5 3C10.8807 3 12 4.11929 12 5.5C12 6.88071 10.8807 8 9.5 8H8" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M4 14H5M15 17V17.5C15 19.433 16.567 21 18.5 21C20.433 21 22 19.433 22 17.5C22 15.567 20.433 14 18.5 14H9" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M2 11H8M15 8V7.5C15 5.567 16.567 4 18.5 4C20.433 4 22 5.567 22 7.5C22 9.433 20.433 11 18.5 11H12.25" stroke="black " stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                    <div class="weather__wind-text">
                        <span class="weather__wind-info">${windSpeed} m/s</span>
                        <span class="weathe    r__wind-name">Wind Speed</span>
                    </div>
                </div>
            </div> */
}

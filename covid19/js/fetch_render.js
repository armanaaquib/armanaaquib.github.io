const main = function () {
  fetch('https://api.covid19india.org/v2/state_district_wise.json')
    .then((res) => res.json())
    .then((data) => {
      document.querySelectorAll('.data')[0].innerText = JSON.stringify(data);
    });
};

main();

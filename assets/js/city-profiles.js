var maps = Array();
$(document).ready(function () {
  $("#footer").load("share/footer.html");
  $("#header").load("share/header.html");
  initTabs("city-population-tabs");
  initTabs("bridge-crossings-tabs");
  const cities = citiesData();
  for (const city of cities) {
    initPopulation(city);
    initHousing(city);
    initEducation(city);
    initHealth(city);
    initEconomy(city);
    initInternationalBridges(city);
    initBridgeCrossings(city);
  }

  //cambio

  $(".item-bridge").click(function () {
    var lat = $(this).attr("data-lat");
    var lng = $(this).attr("data-lng");
    var map = $(this).attr("data-map");
    maps.find((x) => x.id == map).mapRef.flyTo([lat, lng], 14);
  });
});

const initInternationalBridges = (city) => {
  var map = L.map("city-laredo-map", {
    center: city.internationalBridges.center,
    //maxBounds: [[31.7587200, -106.4869300], [25.901747, -97.497482]],
    scrollWheelZoom: false,
    dragging: false,
    zoom: 14,
    layers: [
      L.tileLayer(
        "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",
        {
          minZoom: 14,
          //   maxZoom: 10,
          attribution:
            '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
        }
      ),
    ],
  });
  var index = 1;

  for (const y of city.internationalBridges.cards) {
    var item = `<div class="item-bridge card shadow-sm bg-white rounded m-1 p-3" data-map="${
      city.id
    }" data-lat="${y.position.lat}" data-lng="${y.position.lng}" >
                <h5 class="mb-3 page-title">${index + ". " + y.name}</h5>
                <p class="m-0">${y.description}</p> </p>
              </div>`;

    var marker = L.marker([y.position.lat, y.position.lng], {
      icon: L.ExtraMarkers.icon({
        icon: "fa-number",
        number: index + "",
        iconColor: "white",
        markerColor: "red",
        shape: "square",
        prefix: "fa",
      }),
    }).addTo(map);
    marker.bindPopup(y.name);

    $("#" + city.id + "-bridges").append(item);
    index++;
  }

  maps.push({
    id: city.id,
    mapRef: map,
  });
};

const initBridgeCrossings = (city) => {
  for (const g of city.bridgeCrossings.graphs) {
    const myChart = new Chart(document.getElementById(g.id), {
      type: g.type,
      data: {
        labels: g.labels,
        datasets: g.datasets,
      },
      options: {
        animations: {
          radius: {
            duration: 400,
            easing: "linear",
            loop: (context) => context.active,
          },
        },
        hoverRadius: 12,
        hoverBackgroundColor: "rgb(181, 163, 106)",
        interaction: {
          mode: "nearest",
          intersect: false,
          axis: "x",
        },
        plugins: {
          tooltip: {
            enabled: true,
          },
        },
      },
    });
  }
};

const initPopulation = (city) => {
  for (const c of city.population.cards) {
    var item = `<div class="col-6">
    <div class="item-card card border rounded m-1 p-3" >
      <h4 class="page-title text-center">${c.title}</h5>
      <p class="page-heading">${c.description}</p> 
    </div>
    </div>`;

    $("#" + c.id).append(item);
  }

  for (const g of city.population.graphs) {
    const myChart = new Chart(document.getElementById(g.id), {
      type: g.type,
      data: {
        labels: g.labels,
        datasets: g.datasets,
      },
      options: {
        animations: {
          radius: {
            duration: 400,
            easing: "linear",
            loop: (context) => context.active,
          },
        },
        hoverRadius: 12,
        hoverBackgroundColor: "rgb(181, 163, 106)",
        interaction: {
          mode: "nearest",
          intersect: false,
          axis: "x",
        },
        plugins: {
          tooltip: {
            enabled: true,
          },
        },
      },
    });
  }
};

const initHousing = (city) => {
  for (const c of city.housing.cards) {
    var item = `
    <div class="item-card card rounded m-1 p-3" >
      <h4 class="page-title text-center">${c.title}</h5>
      <p class="page-heading">${c.description}</p> 
    </div>`;

    $("#" + c.id).append(item);
  }

  for (const g of city.housing.graphs) {
    const myChart = new Chart(document.getElementById(g.id), {
      type: g.type,
      data: {
        labels: g.labels,
        datasets: g.datasets,
      },
      options: {
        animations: {
          radius: {
            duration: 400,
            easing: "linear",
            loop: (context) => context.active,
          },
        },
        hoverRadius: 12,
        hoverBackgroundColor: "rgb(181, 163, 106)",
        interaction: {
          mode: "nearest",
          intersect: false,
          axis: "x",
        },
        plugins: {
          tooltip: {
            enabled: true,
          },
        },
      },
    });
  }
};


const initEconomy = (city) => {
  for (const c of city.economy.cards) {
    var item = `
    <div class="item-card card rounded m-1 p-3" >
      <h4 class="page-title text-center">${c.title}</h5>
      <p class="page-heading">${c.description}</p> 
    </div>`;

    $("#" + c.id).append(item);
  }

  for (const g of city.economy.graphs) {
    const myChart = new Chart(document.getElementById(g.id), {
      type: g.type,
      data: {
        labels: g.labels,
        datasets: g.datasets,
      },
      options: {
        animations: {
          radius: {
            duration: 400,
            easing: "linear",
            loop: (context) => context.active,
          },
        },
        hoverRadius: 12,
        hoverBackgroundColor: "rgb(181, 163, 106)",
        interaction: {
          mode: "nearest",
          intersect: false,
          axis: "x",
        },
        plugins: {
          tooltip: {
            enabled: true,
          },
        },
      },
    });
  }
};

const initEducation = (city) => {
  for (const g of city.education.graphs) {
    const myChart = new Chart(document.getElementById(g.id), {
      type: g.type,
      data: {
        labels: g.labels,
        datasets: g.datasets,
      },
      
    });
  }
};

const initHealth = (city) => {
  for (const g of city.health.graphs) {
    const myChart = new Chart(document.getElementById(g.id), {
      type: g.type,
      data: {
        labels: g.labels,
        datasets: g.datasets,
      },
      
    });
  }
};
const initTabs = (id) => {
 
  $("#" + id + " li:first-child").addClass("active");
  $("." + id + "-content").hide();
  $("." + id + "-content:first").show();

  $("#" + id + " li").click(function () {
    $("#" + id + " li").removeClass("active");
    $(this).addClass("active");
    $("." + id + "-content").hide();

    var activeTab = $(this).find("a").attr("href");
    $(activeTab).fadeIn();
    return false;
  });
};

const citiesData = () => [
  {
    id: "city-laredo",
    name: "Laredo",
    description: ["text", "text", "text", "text"],
    internationalBridges: {
      center: [27.511674737247358, -99.5071203315075],
      cards: [
        {
          name: "Puente de las Americas",
          description:
            " Pedestrians / Non-Commercial Vehicles Mexico Border City: Nuevo Laredo, Tam.",
          position: {
            lat: 27.499355474380557,
            lng: -99.50748859571438,
          },
        },
        {
          name: "Juarez-Licoln",
          description:
            "Non-Commercial Vehicles / Buses Mexico Border City: Nuevo Laredo, Tam.",
          position: {
            lat: 27.499230032924416,
            lng: -99.50261405150002,
          },
        },
        {
          name: "Solidaridad",
          description:
            "Pedestrians / Non-Commercial Vehicles / Buses / Commercial Trucks Mexico Border City: Colombia, N.L.",
          position: {
            lat: 27.702724245696565,
            lng: -99.7573266603388,
          },
        },
        {
          name: "World Trade Bridge",
          description:
            " Commercial Truck Only Mexico Border City: Nuevo Laredo, Tam.",
          position: {
            lat: 27.595672482387045,
            lng: -99.54178447066522,
          },
        },
        {
          name: "UP Rail Bridge",
          description:
            " Rail Crossing Only Mexico Border City: Nuevo Laredo, Tam.",
          position: {
            lat: 27.498371718014713,
            lng: -99.51634206616804,
          },
        },
      ],
    },
    population: {
      idCards: "city-laredo-population-cards",
      cards: [
        {
          id: "tab-laredo-city-population-usa",
          title: "Census Estimate 2019",
          description: "38,239,523",
        },
        {
          id: "tab-laredo-city-population-texas",
          title: "Census Estimate 2019",
          description: "38,239,523",
        },
        {
          id: "tab-laredo-city-population-laredo",
          title: "Census 2010",
          description: "38,239,523",
        },
        {
          id: "tab-laredo-city-population-laredo",
          title: "Census 2019",
          description: "38,239,523",
        },
      ],
      graphs: [
        {
          id: "city-laredo-chart-population-gender",
          title: "2019 Gender Distribution",
          type: "polarArea",
          labels: ["male", "female"],
          datasets: [
            {
              label: "2019 Gender Distribution",
              data: [46.8, 52.2],
              backgroundColor: ["rgba(97, 22, 45,0.3)", "rgba(97, 22, 45,0.6)"],
            },
          ],
        },
        {
          id: "city-laredo-chart-population-change",
          type: "bar",
          labels: ["U.S.A.", "Texas", "Laredo"],
          datasets: [
            {
              label: "% Popultaion Change 2010-2019",
              data: [6.3, 15.1, 11.3],
              backgroundColor: "rgba(181, 163, 106,0.3)",
              borderColor: "rgb(181, 163, 106)",
            },
          ],
        },
      ],
    },
    housing: {
      title: "Housing",
      description: "Housing",
      cards: [
        {
          id: "city-laredo-housing-cards",
          title: "Total Households",
          subtitle: "Census 2014-2018",
          description: "69,908",
        },
        {
          id: "city-laredo-housing-cards",
          title: "Language other than English at Home",
          subtitle: "Census Estimate 2014-2018",
          description: "90.1%",
        },
        {
          id: "city-laredo-housing-cards",
          title: "2016 Power Connections",
          subtitle: "Residential ",
          description: "73,362",
        },
        {
          id: "city-laredo-housing-cards",
          title: "2016 Power Connections",
          subtitle: "Small Business",
          description: "10,751",
        },
      ],
      graphs: [
        {
          id: "city-laredo-chart-persons-per-household",
          type: "bar",
          labels: ["U.S.A.", "Texas", "Laredo"],
          datasets: [
            {
              label: "Persons per Household 2014-2018",
              data: [2.63, 2.86, 3.64],
              backgroundColor: "rgba(181, 163, 106)",
              borderColor: "rgb(181, 163, 106)",
            },
          ],
        },
        {
          id: "city-laredo-chart-building-permit",
          title: "Pedestrian Crossings",
          type: "line",
          labels: ["2013", "2014", "2015", "2016", "2017", "2018", "2019"],
          datasets: [
            {
              label: "Building Permits 2014-2019",
              data: [2706, 3344, 3999, 4200, 4200, 4200, 4700],
              fill: false,
              backgroundColor: "rgb(97, 22, 45)",
              borderColor: "rgb(97, 22, 45)",
              tension: 0.1,
            },
          ],
        },
      ],
    },
    education: {
      title: "Education",
      description: "Education",
      graphs: [
        {
          id: "city-laredo-chart-education",
          type: "bar",
          labels: ["U.S.A.", "Texas", "Laredo"],
          datasets: [
            {
              label: "% With a Disability (2014-2018)",
              data: [87.7, 83.2, 68.2],
              backgroundColor: "rgba(181, 163, 106)",
              borderColor: "rgb(181, 163, 106)",
            },
            {
              label: "% With Out Health Insurance(2014-2018)",
              data: [31.5, 29.3, 18.9],
              backgroundColor: "rgb(97, 22, 45)",
              borderColor: "rgb(97, 22, 45)",
            },
          ],
        },
   

      ],
    },
    health: {
      title: "health",
      description: "health",
      graphs: [
        {
          id: "city-laredo-chart-health",
          type: "bar",
          labels: ["U.S.A.", "Texas", "Laredo"],
          datasets: [
            {
              label: "% With a Disability (2014-2018)",
              data: [87.7, 83.2, 68.2],
              backgroundColor: "rgba(181, 163, 106)",
              borderColor: "rgb(181, 163, 106)",
            },
            {
              label: "% With Out Health Insurance(2014-2018)",
              data: [31.5, 29.3, 18.9],
              backgroundColor: "rgb(97, 22, 45)",
              borderColor: "rgb(97, 22, 45)",
            },
          ],
        },
      ],
    },
    economy: {
      title: "Economy",
      description: "Economy",
      cards: [
        {
          id: "city-laredo-economy-cards",
          title: "Median Household Income",
          subtitle: "Census Estimate 2014-2018 (2018 Dollars)",
          description: "$43,351",
        },
        {
          id: "city-laredo-economy-cards",
          title: "Total Workforce",
          subtitle: "Avg. 2019",
          description: "113,027",
        },
        {
          id: "city-laredo-economy-cards",
          title: "% Unemployment",
          subtitle: "Avg. 2019",
          description: "3.66%",
        },
      ],
      graphs: [
        {
          id: "city-laredo-chart-unemployment-trend",
          title: "Unemployment Trend",
          type: "line",
          labels: [
            "2010","2011","2012","2013","2014","2015","2016","2017","2018","2019",
          ],
          datasets: [
            {
              label: "Laredo",
              data: [
               8.3,7.8,4.5,9.6,8.3,7.8,4.5,9.6,8.3,7.8,
              ],
              fill: false,
              backgroundColor: "rgb(97, 22, 45)",
              borderColor: "rgb(97, 22, 45)",
              tension: 0.1,
            },
            {
              label: "Texas",
              data: [
                9.3,3.8,5.5,9.6,2.3,7.8,4.5,5.6,8.8,9.8,
              ],
              fill: false,
              backgroundColor: "rgb(181, 163, 106)",
              borderColor: "rgb(181, 163, 106)",
              tension: 0.1,
            },
            {
              label: "U.S.A.",
              data: [
                6.3,6.8,7.8,9.6,5.3,7.8,8.5,9.6,8.3,7.8,
              ],
              fill: false,
              backgroundColor: "rgb(181, 163, 106)",
              borderColor: "rgb(181, 163, 106)",
              tension: 0.1,
            },
          ],
        },
        {
          id: "city-laredo-chart-economy-gender",
          title: "2019 Gender Distribution",
          type: "polarArea",
          labels: ["male", "female"],
          datasets: [
            {
              label: "2019 Gender Distribution",
              data: [46.8, 52.2],
              backgroundColor: ["rgba(97, 22, 45,0.3)", "rgba(97, 22, 45,0.6)"],
            },
          ],
        },
        {
          id: "city-laredo-chart-per-capita-income",
          type: "bar",
          labels: ["U.S.A.", "Texas", "Laredo"],
          datasets: [
            {
              label: "Per Capita Income 2014-2018",
              data: [87.7, 83.2, 68.2],
              backgroundColor: "rgba(181, 163, 106)",
              borderColor: "rgb(181, 163, 106)",
            },
          ],
        },
        {
          id: "city-laredo-chart-persons-in-poverty",
          type: "bar",
          labels: ["U.S.A.", "Texas", "Laredo"],
          datasets: [
            {
              label: "% Persons in Poverty (2014-2018)",
              data: [31.5, 29.3, 18.9],
              backgroundColor: "rgb(97, 22, 45)",
              borderColor: "rgb(97, 22, 45)",
            },
          ],
        },
      ],
    },
    bridgeCrossings: {
      graphs: [
        {
          id: "city-laredo-chart-pedestrian-crossings",
          title: "Pedestrian Crossings",
          type: "line",
          labels: [
            "2015-02",
            "2015-07",
            "2015-12",
            "2016-05",
            "2016-10",
            "2017-03",
            "2017-08",
            "2018-01",
            "2018-06",
            "2018-11",
            "2019-04",
            "2019-09",
            "2020-02",
          ],
          datasets: [
            {
              label: "Northbound",
              data: [
                300672, 302672, 230672, 270672, 390672, 236672, 380672, 253672,
                370672, 230662, 230678, 300872,
              ],
              fill: false,
              backgroundColor: "rgb(97, 22, 45)",
              borderColor: "rgb(97, 22, 45)",
              tension: 0.1,
            },
            {
              label: "Southbound",
              data: [
                200672, 202672, 220672, 280672, 290672, 206672, 280672, 250672,
                270672, 200662, 200678, 200872,
              ],
              fill: false,
              backgroundColor: "rgb(181, 163, 106)",
              borderColor: "rgb(181, 163, 106)",
              tension: 0.1,
            },
          ],
        },
        {
          id: "city-laredo-chart-vehicle-crossings",
          title: "Pedestrian Crossings",
          type: "line",
          labels: [
            "2015-02",
            "2015-07",
            "2015-12",
            "2016-05",
            "2016-10",
            "2017-03",
            "2017-08",
            "2018-01",
            "2018-06",
            "2018-11",
            "2019-04",
            "2019-09",
            "2020-02",
          ],
          datasets: [
            {
              label: "Northbound",
              data: [
                300672, 302672, 230672, 270672, 390672, 236672, 380672, 253672,
                370672, 230662, 230678, 300872,
              ],
              fill: false,
              backgroundColor: "rgb(97, 22, 45)",
              borderColor: "rgb(97, 22, 45)",
              tension: 0.1,
            },
            {
              label: "Southbound",
              data: [
                200672, 202672, 220672, 280672, 290672, 206672, 280672, 250672,
                270672, 200662, 200678, 200872,
              ],
              fill: false,
              backgroundColor: "rgb(181, 163, 106)",
              borderColor: "rgb(181, 163, 106)",
              tension: 0.1,
            },
          ],
        },
        {
          id: "city-laredo-chart-truck-crossings",
          title: "Pedestrian Crossings",
          type: "line",
          labels: [
            "2015-02",
            "2015-07",
            "2015-12",
            "2016-05",
            "2016-10",
            "2017-03",
            "2017-08",
            "2018-01",
            "2018-06",
            "2018-11",
            "2019-04",
            "2019-09",
            "2020-02",
          ],
          datasets: [
            {
              label: "Northbound",
              data: [
                300672, 302672, 230672, 270672, 390672, 236672, 380672, 253672,
                370672, 230662, 230678, 300872,
              ],
              fill: false,
              backgroundColor: "rgb(97, 22, 45)",
              borderColor: "rgb(97, 22, 45)",
              tension: 0.1,
            },
            {
              label: "Southbound",
              data: [
                200672, 202672, 220672, 280672, 290672, 206672, 280672, 250672,
                270672, 200662, 200678, 200872,
              ],
              fill: false,
              backgroundColor: "rgb(181, 163, 106)",
              borderColor: "rgb(181, 163, 106)",
              tension: 0.1,
            },
          ],
        },
      ],
    },
  },
];

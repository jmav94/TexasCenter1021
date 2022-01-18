var maps = Array();
  // Sticky Navbar


$(document).ready(function () {
  const cities = citiesData();
  $("#footer").load("share/footer.html");
  $("#header").load("share/header.html");

  $(window).scroll(function (event) {
   
    if ($(this).scrollTop() > 45) {
        $('#navbar-cities').addClass('fixed-top shadow-sm');
        $('#navbar-cities').removeClass('shadow-none');
    } else {
        $('#navbar-cities').removeClass('fixed-top shadow-sm');
        $('#navbar-cities').addClass('shadow-none');
        
    }

})
if ($(this).scrollTop() > 45) {
  $('#navbar-cities').addClass('fixed-top shadow-sm');
  $('#navbar-cities').removeClass('shadow-none');
} else {
  $('#navbar-cities').removeClass('fixed-top shadow-sm');
  $('#navbar-cities').addClass('shadow-none');
  
}
cities.forEach((city) => initInternationalBridges(city));
initCity(cities.find(x => x.id == "city-laredo"))

initTabs("city-tabs");

  $(".item-bridge").click(function () {
    var lat = $(this).attr("data-lat");
    var lng = $(this).attr("data-lng");
    var map = $(this).attr("data-map");
    maps.find((x) => x.id == map).mapRef.flyTo([lat, lng], 14);
  });

  $(".onChangeCity").click(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if(!refElement.hasClass("loaded")){
    var city = cities.find((c) => c.id == refElement.attr("id"));
    initCity(city)
    refElement.addClass("loaded");
    }
  });
});

 

const initCity = (city) =>{
    initPopulation(city);
    initHousing(city);
    initEducation(city);
    initHealth(city);
    initEconomy(city);
   // initInternationalBridges(city);
    initBridgeCrossings(city);
    initTabs(city.id+"-population-tabs");
    initTabs(city.id+"-bridge-crossings-tabs");
}

const initInternationalBridges = (city) => {
  var map = L.map(city.id+"-map", {
    center: city.internationalBridges.center,
    //maxBounds: [[31.7587200, -106.4869300], [25.901747, -97.497482]],
    scrollWheelZoom: false,
    dragging: false,
    zoom: 14,
    layers: [
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20})
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
    var item = `<div class="col-sm-12 col-lg-6">
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
    <div class="item-card col-sm-12 col-lg-12" >
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

const citiesData = () => [
  {
    id: "city-brownsville",
    internationalBridges: {
      center: [25.919691889792556, -97.50593730120816],
      cards: [
        {
          name: " B & M Bridge",
          description:  " Pedestrians / Non-Commercial Vehicles / Buses Mexico Border City: Matamoros, Tam. ",
          position: {
            lat:25.895234646970398,
            lng:  -97.50638664550213
          },
        },
        {
          name: "Gateway International Bridge",
          description:
            "Pedestrians / Non-Commercial Vehicles / Buses Mexico Border City: Matamoros, Tam.",
          position: {
            lat: 25.899624562190066,
            lng:  -97.49654837261693
          },
        },
        {
          name: "Veterans International Bridge",
          description:
            "Pedestrians / Non-Commercial Vehicles / Buses / Commercial Trucks Mexico Border City: Matamoros, Tam. ",
          position: {
            lat: 25.886022444888347,
            lng:  -97.47635934378164
          },
        },
        {
          name: "B&M Rail Bridge",
          description: "Rail Crossing Only Mexico Border City: Matamoros, Tam.",
          position: {
            lat:25.895234646970398,
            lng:  -97.50638664550213
          },
        },
        
      ],
    },
    population: {
      idCards: "city-brownsville-population-cards",
      cards: [
        {
          id: "tab-brownsville-city-population-usa",
          title: "Census Estimate 2019",
          description: "38,239,523",
        },
        {
          id: "tab-brownsville-city-population-texas",
          title: "Census Estimate 2019",
          description: "38,239,523",
        },
        {
          id: "tab-brownsville-city-population-brownsville",
          title: "Census 2010",
          description: "38,239,523",
        },
        {
          id: "tab-brownsville-city-population-brownsville",
          title: "Census 2019",
          description: "38,239,523",
        },
      ],
      graphs: [
        {
          id: "city-brownsville-chart-population-gender",
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
          id: "city-brownsville-chart-population-change",
          type: "bar",
          labels: ["U.S.A.", "Texas", "brownsville"],
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
          id: "city-brownsville-housing-cards",
          title: "Total Households",
          subtitle: "Census 2014-2018",
          description: "69,908",
        },
        {
          id: "city-brownsville-housing-cards",
          title: "Language other than English at Home",
          subtitle: "Census Estimate 2014-2018",
          description: "90.1%",
        },
        {
          id: "city-brownsville-housing-cards",
          title: "2016 Power Connections",
          subtitle: "Residential ",
          description: "73,362",
        },
        {
          id: "city-brownsville-housing-cards",
          title: "2016 Power Connections",
          subtitle: "Small Business",
          description: "10,751",
        },
      ],
      graphs: [
        {
          id: "city-brownsville-chart-persons-per-household",
          type: "bar",
          labels: ["U.S.A.", "Texas", "brownsville"],
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
          id: "city-brownsville-chart-building-permit",
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
          id: "city-brownsville-chart-education",
          type: "bar",
          labels: ["U.S.A.", "Texas", "brownsville"],
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
          id: "city-brownsville-chart-health",
          type: "bar",
          labels: ["U.S.A.", "Texas", "brownsville"],
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
          id: "city-brownsville-economy-cards",
          title: "Median Household Income",
          subtitle: "Census Estimate 2014-2018 (2018 Dollars)",
          description: "$43,351",
        },
        {
          id: "city-brownsville-economy-cards",
          title: "Total Workforce",
          subtitle: "Avg. 2019",
          description: "113,027",
        },
        {
          id: "city-brownsville-economy-cards",
          title: "% Unemployment",
          subtitle: "Avg. 2019",
          description: "3.66%",
        },
      ],
      graphs: [
        {
          id: "city-brownsville-chart-unemployment-trend",
          title: "Unemployment Trend",
          type: "line",
          labels: [
            "2010","2011","2012","2013","2014","2015","2016","2017","2018","2019",
          ],
          datasets: [
            {
              label: "brownsville",
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
          id: "city-brownsville-chart-economy-gender",
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
          id: "city-brownsville-chart-per-capita-income",
          type: "bar",
          labels: ["U.S.A.", "Texas", "brownsville"],
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
          id: "city-brownsville-chart-persons-in-poverty",
          type: "bar",
          labels: ["U.S.A.", "Texas", "brownsville"],
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
          id: "city-brownsville-chart-pedestrian-crossings",
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
          id: "city-brownsville-chart-vehicle-crossings",
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
          id: "city-brownsville-chart-truck-crossings",
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
  {
    id: "city-harlingen",
    internationalBridges: {
      center: [26.195154607086923, -97.68666809961636],
      cards: [
        
        {
          name: "Free Trade International Bridge",
          description:
            " Pedestrian / Non-Commercial Vehicles / Buses / Commercial Trucks Mexico Border City: Matamoros, Tam. ",
          position: {
            lat: 26.027612176236527,
            lng:  -97.73877111494541,
          },
        },
     
      ],
    },
    population: {
      idCards: "city-harlingen-population-cards",
      cards: [
        {
          id: "tab-harlingen-city-population-usa",
          title: "Census Estimate 2019",
          description: "38,239,523",
        },
        {
          id: "tab-harlingen-city-population-texas",
          title: "Census Estimate 2019",
          description: "38,239,523",
        },
        {
          id: "tab-harlingen-city-population-harlingen",
          title: "Census 2010",
          description: "38,239,523",
        },
        {
          id: "tab-harlingen-city-population-harlingen",
          title: "Census 2019",
          description: "38,239,523",
        },
      ],
      graphs: [
        {
          id: "city-harlingen-chart-population-gender",
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
          id: "city-harlingen-chart-population-change",
          type: "bar",
          labels: ["U.S.A.", "Texas", "harlingen"],
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
          id: "city-harlingen-housing-cards",
          title: "Total Households",
          subtitle: "Census 2014-2018",
          description: "69,908",
        },
        {
          id: "city-harlingen-housing-cards",
          title: "Language other than English at Home",
          subtitle: "Census Estimate 2014-2018",
          description: "90.1%",
        },
        {
          id: "city-harlingen-housing-cards",
          title: "2016 Power Connections",
          subtitle: "Residential ",
          description: "73,362",
        },
        {
          id: "city-harlingen-housing-cards",
          title: "2016 Power Connections",
          subtitle: "Small Business",
          description: "10,751",
        },
      ],
      graphs: [
        {
          id: "city-harlingen-chart-persons-per-household",
          type: "bar",
          labels: ["U.S.A.", "Texas", "harlingen"],
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
          id: "city-harlingen-chart-building-permit",
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
          id: "city-harlingen-chart-education",
          type: "bar",
          labels: ["U.S.A.", "Texas", "harlingen"],
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
          id: "city-harlingen-chart-health",
          type: "bar",
          labels: ["U.S.A.", "Texas", "harlingen"],
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
          id: "city-harlingen-economy-cards",
          title: "Median Household Income",
          subtitle: "Census Estimate 2014-2018 (2018 Dollars)",
          description: "$43,351",
        },
        {
          id: "city-harlingen-economy-cards",
          title: "Total Workforce",
          subtitle: "Avg. 2019",
          description: "113,027",
        },
        {
          id: "city-harlingen-economy-cards",
          title: "% Unemployment",
          subtitle: "Avg. 2019",
          description: "3.66%",
        },
      ],
      graphs: [
        {
          id: "city-harlingen-chart-unemployment-trend",
          title: "Unemployment Trend",
          type: "line",
          labels: [
            "2010","2011","2012","2013","2014","2015","2016","2017","2018","2019",
          ],
          datasets: [
            {
              label: "harlingen",
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
          id: "city-harlingen-chart-economy-gender",
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
          id: "city-harlingen-chart-per-capita-income",
          type: "bar",
          labels: ["U.S.A.", "Texas", "harlingen"],
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
          id: "city-harlingen-chart-persons-in-poverty",
          type: "bar",
          labels: ["U.S.A.", "Texas", "harlingen"],
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
          id: "city-harlingen-chart-pedestrian-crossings",
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
          id: "city-harlingen-chart-vehicle-crossings",
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
          id: "city-harlingen-chart-truck-crossings",
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
  {
    id: "city-progreso",
    internationalBridges: {
      center: [26.096806261485405, -97.95461196590213],
      cards: [
        {
          name: "Progreso International Bridge",
          description:  "Pedestrian / Non-Commercial Vehicles / Buses / Commercial Trucks Mexico Border City: Nuevo Progreso, Tam. ",
          position: {
            lat:26.06216312810339,
            lng:  -97.95004954619239
          },
        },
        
      ],
    },
    population: {
      idCards: "city-progreso-population-cards",
      cards: [
        {
          id: "tab-progreso-city-population-usa",
          title: "Census Estimate 2019",
          description: "38,239,523",
        },
        {
          id: "tab-progreso-city-population-texas",
          title: "Census Estimate 2019",
          description: "38,239,523",
        },
        {
          id: "tab-progreso-city-population-progreso",
          title: "Census 2010",
          description: "38,239,523",
        },
        {
          id: "tab-progreso-city-population-progreso",
          title: "Census 2019",
          description: "38,239,523",
        },
      ],
      graphs: [
        {
          id: "city-progreso-chart-population-gender",
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
          id: "city-progreso-chart-population-change",
          type: "bar",
          labels: ["U.S.A.", "Texas", "progreso"],
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
          id: "city-progreso-housing-cards",
          title: "Total Households",
          subtitle: "Census 2014-2018",
          description: "69,908",
        },
        {
          id: "city-progreso-housing-cards",
          title: "Language other than English at Home",
          subtitle: "Census Estimate 2014-2018",
          description: "90.1%",
        },
        {
          id: "city-progreso-housing-cards",
          title: "2016 Power Connections",
          subtitle: "Residential ",
          description: "73,362",
        },
        {
          id: "city-progreso-housing-cards",
          title: "2016 Power Connections",
          subtitle: "Small Business",
          description: "10,751",
        },
      ],
      graphs: [
        {
          id: "city-progreso-chart-persons-per-household",
          type: "bar",
          labels: ["U.S.A.", "Texas", "progreso"],
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
          id: "city-progreso-chart-building-permit",
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
          id: "city-progreso-chart-education",
          type: "bar",
          labels: ["U.S.A.", "Texas", "progreso"],
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
          id: "city-progreso-chart-health",
          type: "bar",
          labels: ["U.S.A.", "Texas", "progreso"],
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
          id: "city-progreso-economy-cards",
          title: "Median Household Income",
          subtitle: "Census Estimate 2014-2018 (2018 Dollars)",
          description: "$43,351",
        },
        {
          id: "city-progreso-economy-cards",
          title: "Total Workforce",
          subtitle: "Avg. 2019",
          description: "113,027",
        },
        {
          id: "city-progreso-economy-cards",
          title: "% Unemployment",
          subtitle: "Avg. 2019",
          description: "3.66%",
        },
      ],
      graphs: [
        {
          id: "city-progreso-chart-unemployment-trend",
          title: "Unemployment Trend",
          type: "line",
          labels: [
            "2010","2011","2012","2013","2014","2015","2016","2017","2018","2019",
          ],
          datasets: [
            {
              label: "progreso",
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
          id: "city-progreso-chart-economy-gender",
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
          id: "city-progreso-chart-per-capita-income",
          type: "bar",
          labels: ["U.S.A.", "Texas", "progreso"],
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
          id: "city-progreso-chart-persons-in-poverty",
          type: "bar",
          labels: ["U.S.A.", "Texas", "progreso"],
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
          id: "city-progreso-chart-pedestrian-crossings",
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
          id: "city-progreso-chart-vehicle-crossings",
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
          id: "city-progreso-chart-truck-crossings",
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
  {
    id: "city-donna",
    internationalBridges: {
      center: [26.175109032823503, -98.05203433067052],
      cards: [
        {
          name: "Donna International Bridge",
          description:  "Pedestrian / Non-Commercial Vehicles / Buses Mexico Border City: Rio Bravo, Tam. ",
          position: {
            lat:26.069190631402886, 
            lng: -98.07378618795686
          },
        },
      
      ],
    },
    population: {
      idCards: "city-donna-population-cards",
      cards: [
        {
          id: "tab-donna-city-population-usa",
          title: "Census Estimate 2019",
          description: "38,239,523",
        },
        {
          id: "tab-donna-city-population-texas",
          title: "Census Estimate 2019",
          description: "38,239,523",
        },
        {
          id: "tab-donna-city-population-donna",
          title: "Census 2010",
          description: "38,239,523",
        },
        {
          id: "tab-donna-city-population-donna",
          title: "Census 2019",
          description: "38,239,523",
        },
      ],
      graphs: [
        {
          id: "city-donna-chart-population-gender",
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
          id: "city-donna-chart-population-change",
          type: "bar",
          labels: ["U.S.A.", "Texas", "donna"],
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
          id: "city-donna-housing-cards",
          title: "Total Households",
          subtitle: "Census 2014-2018",
          description: "69,908",
        },
        {
          id: "city-donna-housing-cards",
          title: "Language other than English at Home",
          subtitle: "Census Estimate 2014-2018",
          description: "90.1%",
        },
        {
          id: "city-donna-housing-cards",
          title: "2016 Power Connections",
          subtitle: "Residential ",
          description: "73,362",
        },
        {
          id: "city-donna-housing-cards",
          title: "2016 Power Connections",
          subtitle: "Small Business",
          description: "10,751",
        },
      ],
      graphs: [
        {
          id: "city-donna-chart-persons-per-household",
          type: "bar",
          labels: ["U.S.A.", "Texas", "donna"],
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
          id: "city-donna-chart-building-permit",
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
          id: "city-donna-chart-education",
          type: "bar",
          labels: ["U.S.A.", "Texas", "donna"],
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
          id: "city-donna-chart-health",
          type: "bar",
          labels: ["U.S.A.", "Texas", "donna"],
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
          id: "city-donna-economy-cards",
          title: "Median Household Income",
          subtitle: "Census Estimate 2014-2018 (2018 Dollars)",
          description: "$43,351",
        },
        {
          id: "city-donna-economy-cards",
          title: "Total Workforce",
          subtitle: "Avg. 2019",
          description: "113,027",
        },
        {
          id: "city-donna-economy-cards",
          title: "% Unemployment",
          subtitle: "Avg. 2019",
          description: "3.66%",
        },
      ],
      graphs: [
        {
          id: "city-donna-chart-unemployment-trend",
          title: "Unemployment Trend",
          type: "line",
          labels: [
            "2010","2011","2012","2013","2014","2015","2016","2017","2018","2019",
          ],
          datasets: [
            {
              label: "donna",
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
          id: "city-donna-chart-economy-gender",
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
          id: "city-donna-chart-per-capita-income",
          type: "bar",
          labels: ["U.S.A.", "Texas", "donna"],
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
          id: "city-donna-chart-persons-in-poverty",
          type: "bar",
          labels: ["U.S.A.", "Texas", "donna"],
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
          id: "city-donna-chart-pedestrian-crossings",
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
          id: "city-donna-chart-vehicle-crossings",
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
          id: "city-donna-chart-truck-crossings",
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
  {
    id: "city-pharr",
    internationalBridges: {
      center: [26.1639995188654, -98.18872572072505],
      cards: [
        {
          name: " Pharr International Bridge",
          description:  " Non-Commercial Vehicles / Buses / Commercial Trucks Mexico Border City: Reynosa, Tam. ",
          position: {
            lat:26.067066609076104,
            lng: -98.20525616685464
          },
        },
         
      ],
    },
    population: {
      idCards: "city-pharr-population-cards",
      cards: [
        {
          id: "tab-pharr-city-population-usa",
          title: "Census Estimate 2019",
          description: "38,239,523",
        },
        {
          id: "tab-pharr-city-population-texas",
          title: "Census Estimate 2019",
          description: "38,239,523",
        },
        {
          id: "tab-pharr-city-population-pharr",
          title: "Census 2010",
          description: "38,239,523",
        },
        {
          id: "tab-pharr-city-population-pharr",
          title: "Census 2019",
          description: "38,239,523",
        },
      ],
      graphs: [
        {
          id: "city-pharr-chart-population-gender",
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
          id: "city-pharr-chart-population-change",
          type: "bar",
          labels: ["U.S.A.", "Texas", "pharr"],
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
          id: "city-pharr-housing-cards",
          title: "Total Households",
          subtitle: "Census 2014-2018",
          description: "69,908",
        },
        {
          id: "city-pharr-housing-cards",
          title: "Language other than English at Home",
          subtitle: "Census Estimate 2014-2018",
          description: "90.1%",
        },
        {
          id: "city-pharr-housing-cards",
          title: "2016 Power Connections",
          subtitle: "Residential ",
          description: "73,362",
        },
        {
          id: "city-pharr-housing-cards",
          title: "2016 Power Connections",
          subtitle: "Small Business",
          description: "10,751",
        },
      ],
      graphs: [
        {
          id: "city-pharr-chart-persons-per-household",
          type: "bar",
          labels: ["U.S.A.", "Texas", "pharr"],
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
          id: "city-pharr-chart-building-permit",
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
          id: "city-pharr-chart-education",
          type: "bar",
          labels: ["U.S.A.", "Texas", "pharr"],
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
          id: "city-pharr-chart-health",
          type: "bar",
          labels: ["U.S.A.", "Texas", "pharr"],
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
          id: "city-pharr-economy-cards",
          title: "Median Household Income",
          subtitle: "Census Estimate 2014-2018 (2018 Dollars)",
          description: "$43,351",
        },
        {
          id: "city-pharr-economy-cards",
          title: "Total Workforce",
          subtitle: "Avg. 2019",
          description: "113,027",
        },
        {
          id: "city-pharr-economy-cards",
          title: "% Unemployment",
          subtitle: "Avg. 2019",
          description: "3.66%",
        },
      ],
      graphs: [
        {
          id: "city-pharr-chart-unemployment-trend",
          title: "Unemployment Trend",
          type: "line",
          labels: [
            "2010","2011","2012","2013","2014","2015","2016","2017","2018","2019",
          ],
          datasets: [
            {
              label: "pharr",
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
          id: "city-pharr-chart-economy-gender",
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
          id: "city-pharr-chart-per-capita-income",
          type: "bar",
          labels: ["U.S.A.", "Texas", "pharr"],
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
          id: "city-pharr-chart-persons-in-poverty",
          type: "bar",
          labels: ["U.S.A.", "Texas", "pharr"],
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
          id: "city-pharr-chart-pedestrian-crossings",
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
          id: "city-pharr-chart-vehicle-crossings",
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
          id: "city-pharr-chart-truck-crossings",
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
  {
    id: "city-hidalgo",
    internationalBridges: {
      center: [26.104365960566636, -98.25395058982373],
      cards: [
        {
          name: "Hidalgo International Bridge",
          description:  "Pedestrian / Non-Commercial Vehicles / Buses Mexico Border City: Reynosa, Tam. ",
          position: {
            lat: 26.09520622786298, 
            lng: -98.27192765245044,
          },
        },
         
      ],
    },
    population: {
      idCards: "city-hidalgo-population-cards",
      cards: [
        {
          id: "tab-hidalgo-city-population-usa",
          title: "Census Estimate 2019",
          description: "38,239,523",
        },
        {
          id: "tab-hidalgo-city-population-texas",
          title: "Census Estimate 2019",
          description: "38,239,523",
        },
        {
          id: "tab-hidalgo-city-population-hidalgo",
          title: "Census 2010",
          description: "38,239,523",
        },
        {
          id: "tab-hidalgo-city-population-hidalgo",
          title: "Census 2019",
          description: "38,239,523",
        },
      ],
      graphs: [
        {
          id: "city-hidalgo-chart-population-gender",
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
          id: "city-hidalgo-chart-population-change",
          type: "bar",
          labels: ["U.S.A.", "Texas", "hidalgo"],
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
          id: "city-hidalgo-housing-cards",
          title: "Total Households",
          subtitle: "Census 2014-2018",
          description: "69,908",
        },
        {
          id: "city-hidalgo-housing-cards",
          title: "Language other than English at Home",
          subtitle: "Census Estimate 2014-2018",
          description: "90.1%",
        },
        {
          id: "city-hidalgo-housing-cards",
          title: "2016 Power Connections",
          subtitle: "Residential ",
          description: "73,362",
        },
        {
          id: "city-hidalgo-housing-cards",
          title: "2016 Power Connections",
          subtitle: "Small Business",
          description: "10,751",
        },
      ],
      graphs: [
        {
          id: "city-hidalgo-chart-persons-per-household",
          type: "bar",
          labels: ["U.S.A.", "Texas", "hidalgo"],
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
          id: "city-hidalgo-chart-building-permit",
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
          id: "city-hidalgo-chart-education",
          type: "bar",
          labels: ["U.S.A.", "Texas", "hidalgo"],
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
          id: "city-hidalgo-chart-health",
          type: "bar",
          labels: ["U.S.A.", "Texas", "hidalgo"],
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
          id: "city-hidalgo-economy-cards",
          title: "Median Household Income",
          subtitle: "Census Estimate 2014-2018 (2018 Dollars)",
          description: "$43,351",
        },
        {
          id: "city-hidalgo-economy-cards",
          title: "Total Workforce",
          subtitle: "Avg. 2019",
          description: "113,027",
        },
        {
          id: "city-hidalgo-economy-cards",
          title: "% Unemployment",
          subtitle: "Avg. 2019",
          description: "3.66%",
        },
      ],
      graphs: [
        {
          id: "city-hidalgo-chart-unemployment-trend",
          title: "Unemployment Trend",
          type: "line",
          labels: [
            "2010","2011","2012","2013","2014","2015","2016","2017","2018","2019",
          ],
          datasets: [
            {
              label: "hidalgo",
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
          id: "city-hidalgo-chart-economy-gender",
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
          id: "city-hidalgo-chart-per-capita-income",
          type: "bar",
          labels: ["U.S.A.", "Texas", "hidalgo"],
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
          id: "city-hidalgo-chart-persons-in-poverty",
          type: "bar",
          labels: ["U.S.A.", "Texas", "hidalgo"],
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
          id: "city-hidalgo-chart-pedestrian-crossings",
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
          id: "city-hidalgo-chart-vehicle-crossings",
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
          id: "city-hidalgo-chart-truck-crossings",
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
  {
    id: "city-mcallen",
    internationalBridges: {
      center: [26.201939941176693, -98.24668537643662],
      cards: [
        {
          name: "Anzalduas Bridge Crossing",
          description:  "Non-Commercial Vehicles / Buses / Commercial Trucks Mexico Border City: Reynosa, Tam. ",
          position: {
            lat: 26.117407614243838, 
            lng: -98.31839334192587
          },
        },
        
      ],
    },
    population: {
      idCards: "city-mcallen-population-cards",
      cards: [
        {
          id: "tab-mcallen-city-population-usa",
          title: "Census Estimate 2019",
          description: "38,239,523",
        },
        {
          id: "tab-mcallen-city-population-texas",
          title: "Census Estimate 2019",
          description: "38,239,523",
        },
        {
          id: "tab-mcallen-city-population-mcallen",
          title: "Census 2010",
          description: "38,239,523",
        },
        {
          id: "tab-mcallen-city-population-mcallen",
          title: "Census 2019",
          description: "38,239,523",
        },
      ],
      graphs: [
        {
          id: "city-mcallen-chart-population-gender",
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
          id: "city-mcallen-chart-population-change",
          type: "bar",
          labels: ["U.S.A.", "Texas", "mcallen"],
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
          id: "city-mcallen-housing-cards",
          title: "Total Households",
          subtitle: "Census 2014-2018",
          description: "69,908",
        },
        {
          id: "city-mcallen-housing-cards",
          title: "Language other than English at Home",
          subtitle: "Census Estimate 2014-2018",
          description: "90.1%",
        },
        {
          id: "city-mcallen-housing-cards",
          title: "2016 Power Connections",
          subtitle: "Residential ",
          description: "73,362",
        },
        {
          id: "city-mcallen-housing-cards",
          title: "2016 Power Connections",
          subtitle: "Small Business",
          description: "10,751",
        },
      ],
      graphs: [
        {
          id: "city-mcallen-chart-persons-per-household",
          type: "bar",
          labels: ["U.S.A.", "Texas", "mcallen"],
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
          id: "city-mcallen-chart-building-permit",
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
          id: "city-mcallen-chart-education",
          type: "bar",
          labels: ["U.S.A.", "Texas", "mcallen"],
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
          id: "city-mcallen-chart-health",
          type: "bar",
          labels: ["U.S.A.", "Texas", "mcallen"],
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
          id: "city-mcallen-economy-cards",
          title: "Median Household Income",
          subtitle: "Census Estimate 2014-2018 (2018 Dollars)",
          description: "$43,351",
        },
        {
          id: "city-mcallen-economy-cards",
          title: "Total Workforce",
          subtitle: "Avg. 2019",
          description: "113,027",
        },
        {
          id: "city-mcallen-economy-cards",
          title: "% Unemployment",
          subtitle: "Avg. 2019",
          description: "3.66%",
        },
      ],
      graphs: [
        {
          id: "city-mcallen-chart-unemployment-trend",
          title: "Unemployment Trend",
          type: "line",
          labels: [
            "2010","2011","2012","2013","2014","2015","2016","2017","2018","2019",
          ],
          datasets: [
            {
              label: "mcallen",
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
          id: "city-mcallen-chart-economy-gender",
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
          id: "city-mcallen-chart-per-capita-income",
          type: "bar",
          labels: ["U.S.A.", "Texas", "mcallen"],
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
          id: "city-mcallen-chart-persons-in-poverty",
          type: "bar",
          labels: ["U.S.A.", "Texas", "mcallen"],
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
          id: "city-mcallen-chart-pedestrian-crossings",
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
          id: "city-mcallen-chart-vehicle-crossings",
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
          id: "city-mcallen-chart-truck-crossings",
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
  {
    id: "city-rio-grande",
    internationalBridges: {
      center: [26.38131246361837, -98.82778840216451],
      cards: [
        {
          name: "Rio Grande International Bridge",
          description:  "Non-Commercial Vehicles / Buses / Commercial Trucks Mexico Border City: Camargo, Tam. ",
          position: {
            lat: 27.499355474380557,
            lng: -99.50748859571438,
          },
        },
      ],
    },
    population: {
      idCards: "city-rio-grande-population-cards",
      cards: [
        {
          id: "tab-rio-grande-city-population-usa",
          title: "Census Estimate 2019",
          description: "38,239,523",
        },
        {
          id: "tab-rio-grande-city-population-texas",
          title: "Census Estimate 2019",
          description: "38,239,523",
        },
        {
          id: "tab-rio-grande-city-population-rio-grande",
          title: "Census 2010",
          description: "38,239,523",
        },
        {
          id: "tab-rio-grande-city-population-rio-grande",
          title: "Census 2019",
          description: "38,239,523",
        },
      ],
      graphs: [
        {
          id: "city-rio-grande-chart-population-gender",
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
          id: "city-rio-grande-chart-population-change",
          type: "bar",
          labels: ["U.S.A.", "Texas", "rio-grande"],
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
          id: "city-rio-grande-housing-cards",
          title: "Total Households",
          subtitle: "Census 2014-2018",
          description: "69,908",
        },
        {
          id: "city-rio-grande-housing-cards",
          title: "Language other than English at Home",
          subtitle: "Census Estimate 2014-2018",
          description: "90.1%",
        },
        {
          id: "city-rio-grande-housing-cards",
          title: "2016 Power Connections",
          subtitle: "Residential ",
          description: "73,362",
        },
        {
          id: "city-rio-grande-housing-cards",
          title: "2016 Power Connections",
          subtitle: "Small Business",
          description: "10,751",
        },
      ],
      graphs: [
        {
          id: "city-rio-grande-chart-persons-per-household",
          type: "bar",
          labels: ["U.S.A.", "Texas", "rio-grande"],
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
          id: "city-rio-grande-chart-building-permit",
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
          id: "city-rio-grande-chart-education",
          type: "bar",
          labels: ["U.S.A.", "Texas", "rio-grande"],
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
          id: "city-rio-grande-chart-health",
          type: "bar",
          labels: ["U.S.A.", "Texas", "rio-grande"],
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
          id: "city-rio-grande-economy-cards",
          title: "Median Household Income",
          subtitle: "Census Estimate 2014-2018 (2018 Dollars)",
          description: "$43,351",
        },
        {
          id: "city-rio-grande-economy-cards",
          title: "Total Workforce",
          subtitle: "Avg. 2019",
          description: "113,027",
        },
        {
          id: "city-rio-grande-economy-cards",
          title: "% Unemployment",
          subtitle: "Avg. 2019",
          description: "3.66%",
        },
      ],
      graphs: [
        {
          id: "city-rio-grande-chart-unemployment-trend",
          title: "Unemployment Trend",
          type: "line",
          labels: [
            "2010","2011","2012","2013","2014","2015","2016","2017","2018","2019",
          ],
          datasets: [
            {
              label: "rio-grande",
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
          id: "city-rio-grande-chart-economy-gender",
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
          id: "city-rio-grande-chart-per-capita-income",
          type: "bar",
          labels: ["U.S.A.", "Texas", "rio-grande"],
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
          id: "city-rio-grande-chart-persons-in-poverty",
          type: "bar",
          labels: ["U.S.A.", "Texas", "rio-grande"],
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
          id: "city-rio-grande-chart-pedestrian-crossings",
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
          id: "city-rio-grande-chart-vehicle-crossings",
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
          id: "city-rio-grande-chart-truck-crossings",
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
  {
    id: "city-roma",
    internationalBridges: {
      center: [27.511674737247358, -99.5071203315075],
      cards: [
        {
          name: "Puente de las Americas",
          description:  " Pedestrians / Non-Commercial Vehicles Mexico Border City: Nuevo Laredo, Tam.",
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
      idCards: "city-roma-population-cards",
      cards: [
        {
          id: "tab-roma-city-population-usa",
          title: "Census Estimate 2019",
          description: "38,239,523",
        },
        {
          id: "tab-roma-city-population-texas",
          title: "Census Estimate 2019",
          description: "38,239,523",
        },
        {
          id: "tab-roma-city-population-roma",
          title: "Census 2010",
          description: "38,239,523",
        },
        {
          id: "tab-roma-city-population-roma",
          title: "Census 2019",
          description: "38,239,523",
        },
      ],
      graphs: [
        {
          id: "city-roma-chart-population-gender",
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
          id: "city-roma-chart-population-change",
          type: "bar",
          labels: ["U.S.A.", "Texas", "roma"],
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
          id: "city-roma-housing-cards",
          title: "Total Households",
          subtitle: "Census 2014-2018",
          description: "69,908",
        },
        {
          id: "city-roma-housing-cards",
          title: "Language other than English at Home",
          subtitle: "Census Estimate 2014-2018",
          description: "90.1%",
        },
        {
          id: "city-roma-housing-cards",
          title: "2016 Power Connections",
          subtitle: "Residential ",
          description: "73,362",
        },
        {
          id: "city-roma-housing-cards",
          title: "2016 Power Connections",
          subtitle: "Small Business",
          description: "10,751",
        },
      ],
      graphs: [
        {
          id: "city-roma-chart-persons-per-household",
          type: "bar",
          labels: ["U.S.A.", "Texas", "roma"],
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
          id: "city-roma-chart-building-permit",
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
          id: "city-roma-chart-education",
          type: "bar",
          labels: ["U.S.A.", "Texas", "roma"],
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
          id: "city-roma-chart-health",
          type: "bar",
          labels: ["U.S.A.", "Texas", "roma"],
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
          id: "city-roma-economy-cards",
          title: "Median Household Income",
          subtitle: "Census Estimate 2014-2018 (2018 Dollars)",
          description: "$43,351",
        },
        {
          id: "city-roma-economy-cards",
          title: "Total Workforce",
          subtitle: "Avg. 2019",
          description: "113,027",
        },
        {
          id: "city-roma-economy-cards",
          title: "% Unemployment",
          subtitle: "Avg. 2019",
          description: "3.66%",
        },
      ],
      graphs: [
        {
          id: "city-roma-chart-unemployment-trend",
          title: "Unemployment Trend",
          type: "line",
          labels: [
            "2010","2011","2012","2013","2014","2015","2016","2017","2018","2019",
          ],
          datasets: [
            {
              label: "roma",
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
          id: "city-roma-chart-economy-gender",
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
          id: "city-roma-chart-per-capita-income",
          type: "bar",
          labels: ["U.S.A.", "Texas", "roma"],
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
          id: "city-roma-chart-persons-in-poverty",
          type: "bar",
          labels: ["U.S.A.", "Texas", "roma"],
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
          id: "city-roma-chart-pedestrian-crossings",
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
          id: "city-roma-chart-vehicle-crossings",
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
          id: "city-roma-chart-truck-crossings",
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
  {
    id: "city-eagle-pass",
    internationalBridges: {
      center: [27.511674737247358, -99.5071203315075],
      cards: [
        {
          name: "Puente de las Americas",
          description:  " Pedestrians / Non-Commercial Vehicles Mexico Border City: Nuevo Laredo, Tam.",
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
      idCards: "city-eagle-pass-population-cards",
      cards: [
        {
          id: "tab-eagle-pass-city-population-usa",
          title: "Census Estimate 2019",
          description: "38,239,523",
        },
        {
          id: "tab-eagle-pass-city-population-texas",
          title: "Census Estimate 2019",
          description: "38,239,523",
        },
        {
          id: "tab-eagle-pass-city-population-eagle-pass",
          title: "Census 2010",
          description: "38,239,523",
        },
        {
          id: "tab-eagle-pass-city-population-eagle-pass",
          title: "Census 2019",
          description: "38,239,523",
        },
      ],
      graphs: [
        {
          id: "city-eagle-pass-chart-population-gender",
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
          id: "city-eagle-pass-chart-population-change",
          type: "bar",
          labels: ["U.S.A.", "Texas", "eagle-pass"],
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
          id: "city-eagle-pass-housing-cards",
          title: "Total Households",
          subtitle: "Census 2014-2018",
          description: "69,908",
        },
        {
          id: "city-eagle-pass-housing-cards",
          title: "Language other than English at Home",
          subtitle: "Census Estimate 2014-2018",
          description: "90.1%",
        },
        {
          id: "city-eagle-pass-housing-cards",
          title: "2016 Power Connections",
          subtitle: "Residential ",
          description: "73,362",
        },
        {
          id: "city-eagle-pass-housing-cards",
          title: "2016 Power Connections",
          subtitle: "Small Business",
          description: "10,751",
        },
      ],
      graphs: [
        {
          id: "city-eagle-pass-chart-persons-per-household",
          type: "bar",
          labels: ["U.S.A.", "Texas", "eagle-pass"],
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
          id: "city-eagle-pass-chart-building-permit",
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
          id: "city-eagle-pass-chart-education",
          type: "bar",
          labels: ["U.S.A.", "Texas", "eagle-pass"],
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
          id: "city-eagle-pass-chart-health",
          type: "bar",
          labels: ["U.S.A.", "Texas", "eagle-pass"],
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
          id: "city-eagle-pass-economy-cards",
          title: "Median Household Income",
          subtitle: "Census Estimate 2014-2018 (2018 Dollars)",
          description: "$43,351",
        },
        {
          id: "city-eagle-pass-economy-cards",
          title: "Total Workforce",
          subtitle: "Avg. 2019",
          description: "113,027",
        },
        {
          id: "city-eagle-pass-economy-cards",
          title: "% Unemployment",
          subtitle: "Avg. 2019",
          description: "3.66%",
        },
      ],
      graphs: [
        {
          id: "city-eagle-pass-chart-unemployment-trend",
          title: "Unemployment Trend",
          type: "line",
          labels: [
            "2010","2011","2012","2013","2014","2015","2016","2017","2018","2019",
          ],
          datasets: [
            {
              label: "eagle-pass",
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
          id: "city-eagle-pass-chart-economy-gender",
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
          id: "city-eagle-pass-chart-per-capita-income",
          type: "bar",
          labels: ["U.S.A.", "Texas", "eagle-pass"],
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
          id: "city-eagle-pass-chart-persons-in-poverty",
          type: "bar",
          labels: ["U.S.A.", "Texas", "eagle-pass"],
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
          id: "city-eagle-pass-chart-pedestrian-crossings",
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
          id: "city-eagle-pass-chart-vehicle-crossings",
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
          id: "city-eagle-pass-chart-truck-crossings",
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
  {
    id: "city-el-paso",
    internationalBridges: {
      center: [27.511674737247358, -99.5071203315075],
      cards: [
        {
          name: "Puente de las Americas",
          description:  " Pedestrians / Non-Commercial Vehicles Mexico Border City: Nuevo el-paso, Tam.",
          position: {
            lat: 27.499355474380557,
            lng: -99.50748859571438,
          },
        },
        {
          name: "Juarez-Licoln",
          description:
            "Non-Commercial Vehicles / Buses Mexico Border City: Nuevo el-paso, Tam.",
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
            " Commercial Truck Only Mexico Border City: Nuevo el-paso, Tam.",
          position: {
            lat: 27.595672482387045,
            lng: -99.54178447066522,
          },
        },
        {
          name: "UP Rail Bridge",
          description:
            " Rail Crossing Only Mexico Border City: Nuevo el-paso, Tam.",
          position: {
            lat: 27.498371718014713,
            lng: -99.51634206616804,
          },
        },
      ],
    },
    population: {
      idCards: "city-el-paso-population-cards",
      cards: [
        {
          id: "tab-el-paso-city-population-usa",
          title: "Census Estimate 2019",
          description: "38,239,523",
        },
        {
          id: "tab-el-paso-city-population-texas",
          title: "Census Estimate 2019",
          description: "38,239,523",
        },
        {
          id: "tab-el-paso-city-population-el-paso",
          title: "Census 2010",
          description: "38,239,523",
        },
        {
          id: "tab-el-paso-city-population-el-paso",
          title: "Census 2019",
          description: "38,239,523",
        },
      ],
      graphs: [
        {
          id: "city-el-paso-chart-population-gender",
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
          id: "city-el-paso-chart-population-change",
          type: "bar",
          labels: ["U.S.A.", "Texas", "el-paso"],
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
          id: "city-el-paso-housing-cards",
          title: "Total Households",
          subtitle: "Census 2014-2018",
          description: "69,908",
        },
        {
          id: "city-el-paso-housing-cards",
          title: "Language other than English at Home",
          subtitle: "Census Estimate 2014-2018",
          description: "90.1%",
        },
        {
          id: "city-el-paso-housing-cards",
          title: "2016 Power Connections",
          subtitle: "Residential ",
          description: "73,362",
        },
        {
          id: "city-el-paso-housing-cards",
          title: "2016 Power Connections",
          subtitle: "Small Business",
          description: "10,751",
        },
      ],
      graphs: [
        {
          id: "city-el-paso-chart-persons-per-household",
          type: "bar",
          labels: ["U.S.A.", "Texas", "el-paso"],
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
          id: "city-el-paso-chart-building-permit",
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
          id: "city-el-paso-chart-education",
          type: "bar",
          labels: ["U.S.A.", "Texas", "el-paso"],
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
          id: "city-el-paso-chart-health",
          type: "bar",
          labels: ["U.S.A.", "Texas", "el-paso"],
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
          id: "city-el-paso-economy-cards",
          title: "Median Household Income",
          subtitle: "Census Estimate 2014-2018 (2018 Dollars)",
          description: "$43,351",
        },
        {
          id: "city-el-paso-economy-cards",
          title: "Total Workforce",
          subtitle: "Avg. 2019",
          description: "113,027",
        },
        {
          id: "city-el-paso-economy-cards",
          title: "% Unemployment",
          subtitle: "Avg. 2019",
          description: "3.66%",
        },
      ],
      graphs: [
        {
          id: "city-el-paso-chart-unemployment-trend",
          title: "Unemployment Trend",
          type: "line",
          labels: [
            "2010","2011","2012","2013","2014","2015","2016","2017","2018","2019",
          ],
          datasets: [
            {
              label: "el-paso",
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
          id: "city-el-paso-chart-economy-gender",
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
          id: "city-el-paso-chart-per-capita-income",
          type: "bar",
          labels: ["U.S.A.", "Texas", "el-paso"],
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
          id: "city-el-paso-chart-persons-in-poverty",
          type: "bar",
          labels: ["U.S.A.", "Texas", "el-paso"],
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
          id: "city-el-paso-chart-pedestrian-crossings",
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
          id: "city-el-paso-chart-vehicle-crossings",
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
          id: "city-el-paso-chart-truck-crossings",
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
  {
    id: "city-del-rio",
    internationalBridges: {
      center: [27.511674737247358, -99.5071203315075],
      cards: [
        {
          name: "Puente de las Americas",
          description:  " Pedestrians / Non-Commercial Vehicles Mexico Border City: Nuevo Laredo, Tam.",
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
      idCards: "city-del-rio-population-cards",
      cards: [
        {
          id: "tab-del-rio-city-population-usa",
          title: "Census Estimate 2019",
          description: "38,239,523",
        },
        {
          id: "tab-del-rio-city-population-texas",
          title: "Census Estimate 2019",
          description: "38,239,523",
        },
        {
          id: "tab-del-rio-city-population-del-rio",
          title: "Census 2010",
          description: "38,239,523",
        },
        {
          id: "tab-del-rio-city-population-del-rio",
          title: "Census 2019",
          description: "38,239,523",
        },
      ],
      graphs: [
        {
          id: "city-del-rio-chart-population-gender",
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
          id: "city-del-rio-chart-population-change",
          type: "bar",
          labels: ["U.S.A.", "Texas", "del-rio"],
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
          id: "city-del-rio-housing-cards",
          title: "Total Households",
          subtitle: "Census 2014-2018",
          description: "69,908",
        },
        {
          id: "city-del-rio-housing-cards",
          title: "Language other than English at Home",
          subtitle: "Census Estimate 2014-2018",
          description: "90.1%",
        },
        {
          id: "city-del-rio-housing-cards",
          title: "2016 Power Connections",
          subtitle: "Residential ",
          description: "73,362",
        },
        {
          id: "city-del-rio-housing-cards",
          title: "2016 Power Connections",
          subtitle: "Small Business",
          description: "10,751",
        },
      ],
      graphs: [
        {
          id: "city-del-rio-chart-persons-per-household",
          type: "bar",
          labels: ["U.S.A.", "Texas", "del-rio"],
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
          id: "city-del-rio-chart-building-permit",
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
          id: "city-del-rio-chart-education",
          type: "bar",
          labels: ["U.S.A.", "Texas", "del-rio"],
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
          id: "city-del-rio-chart-health",
          type: "bar",
          labels: ["U.S.A.", "Texas", "del-rio"],
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
          id: "city-del-rio-economy-cards",
          title: "Median Household Income",
          subtitle: "Census Estimate 2014-2018 (2018 Dollars)",
          description: "$43,351",
        },
        {
          id: "city-del-rio-economy-cards",
          title: "Total Workforce",
          subtitle: "Avg. 2019",
          description: "113,027",
        },
        {
          id: "city-del-rio-economy-cards",
          title: "% Unemployment",
          subtitle: "Avg. 2019",
          description: "3.66%",
        },
      ],
      graphs: [
        {
          id: "city-del-rio-chart-unemployment-trend",
          title: "Unemployment Trend",
          type: "line",
          labels: [
            "2010","2011","2012","2013","2014","2015","2016","2017","2018","2019",
          ],
          datasets: [
            {
              label: "del-rio",
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
          id: "city-del-rio-chart-economy-gender",
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
          id: "city-del-rio-chart-per-capita-income",
          type: "bar",
          labels: ["U.S.A.", "Texas", "del-rio"],
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
          id: "city-del-rio-chart-persons-in-poverty",
          type: "bar",
          labels: ["U.S.A.", "Texas", "del-rio"],
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
          id: "city-del-rio-chart-pedestrian-crossings",
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
          id: "city-del-rio-chart-vehicle-crossings",
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
          id: "city-del-rio-chart-truck-crossings",
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
  {
    id: "city-laredo",
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

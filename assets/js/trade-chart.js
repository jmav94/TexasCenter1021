$(document).ready(function () {
  const states = statesData();

  initTabs("tabs-city-texas");
  initTabs("tabs-city-new-mexico");
  initTabs("tabs-city-arizona");
  initTabs("tabs-city-california");

  for (const state of states) {
    initCards(state.cards);
    for (const city of state.cities) {
      initCharts(city.graphs);
    }
  }
});

const initCharts = (charts) => {
  for (const c of charts) {
    const myChart = new Chart(document.getElementById(c.id), c);
  }
};
const initCards = (cards) => {
  for (const c of cards) {
    var item = ` <div class="col-md-4">
    <div class="item-card card border rounded m-1 p-3 bg-white">
        <div class="import-export__card--header">
            <h5>${c.title}</h5>
        </div>
        <div class="import-export__card--body">
            <h4>${c.subtitle}</h4>
            <p>${c.subtitle2}</p>
        </div>
        <hr>
        <div class="import-export__card--footer ${c.footerClass}">
            <span><i class="fas fa-arrow-up px-2"></i>${c.footer}</span>
        </div>
    </div>

</div>`;

    $("#" + c.id).append(item);
  }
};

const callbackTitleLabel = {
  title: function (item, data) {
    var dataset = data.datasets[item[0].datasetIndex];
    var dataItem = dataset.tree[item[0].index];
    return "SITC CODE: " + dataItem.title;
    //return data.datasets[item[0].datasetIndex].key;
  },
  label: function (item, data) {
    var dataset = data.datasets[item.datasetIndex];
    var dataItem = dataset.tree[item.index];

    return "Value: " + dataItem.value;
  },
  afterLabel: function (item, data) {
    var dataset = data.datasets[item.datasetIndex];
    var dataItem = dataset.tree[item.index];

    return dataItem.description;
  },
};

const statesData = () => [
  {
    id: "section-texas",
    name: "Texas",
    cards: [
      {
        id: "city-texas-cards",
        title: "Exports 2020",
        subtitle: "9.94",
        subtitle2: "Billon USD",
        icon: "",
        footer: "-29.65%",
        footerClass: 'import-export__card--footer-red',
      },
      {
        id: "city-texas-cards",
        title: "Imports 2020",
        subtitle: "24.94",
        subtitle2: "Billon USD",
        icon: "",
        footer: "-29.65%",
        footerClass: 'import-export__card--footer-red',
      },
      {
        id: "city-texas-cards",
        title: "Total Trade 2020",
        subtitle: "24.94",
        subtitle2: "Billon USD",
        icon: "",
        footer: "29.65%",
        footerClass: 'import-export__card--footer-green',
      },
    ],
    cities: [
      {
        id: "city-texas-brownsville",
        name: "Brownsville",
        graphs: [
          {
            id: "city-brownsville-chart-comertial-truck-crossings",
            type: "line",
            data: {
              labels: [
                "2017-04",
                "2017-06",
                "2017-08",
                "2017-12",
                "2018-04",
                "2018-08",
                "2018-12",
                "2019-04",
                "2019-12",
                "2020-04",
                "2020-08",
                "2020-12",
              ],
              datasets: [
                {
                  label: "Series 1",
                  data: [
                    300000000, 600000000, 900000000, 800000000, 500000000,
                    400000000, 100000000, 200000000, 500000000, 400000000,
                    240000000, 400000000,
                  ],
                  borderColor: "rgba(97, 22, 45, 1)",
                  backgroundColor: "rgba(97, 22, 45, 0.1)",
                  borderWidth: 2,
                },
                {
                  label: "Series 2", // Name the series
                  data: [
                    500000000, 800000000, 600000000, 700000000, 600000000,
                    800000000, 200000000, 400000000, 600000000, 700000000,
                    340000000, 300000000,
                  ],
                  borderColor: "rgba(181, 163, 106, 1)",
                  backgroundColor: "rgba(181, 163, 106, 0.1)",
                  borderWidth: 2,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          },
          {
            id: "city-brownsville-chart-imports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "33460",
                      description:
                        "Petroleum oils and oils obtained from bituminous minerals (other than crude) and preparations n.e.s., containing by weight 70 % or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations, other than waste oils ",
                      value: 1900074770,
                    },
                    {
                      title: "34320",
                      description: " Natural gas, in the gaseous state ",
                      value: 605941408,
                    },
                    {
                      title: "77642",
                      description:
                        " Processors and controllers, whether or not combined with memories, converters, logic circuits, amplifiers, clock and timing circuits, or other circuits ",
                      value: 426794290,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 228291500,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752",
                      value: 224680384,
                    },
                    {
                      title: "82119",
                      description: "Parts of the seats of subgroup 821.1",
                      value: 123281865,
                    },
                    {
                      title: "77282",
                      value: 84177056,
                      description:
                        "Parts suitable for use solely or principally with the apparatus falling within subgroups 772.4, 772.5 and 772.6 - Other parts",
                    },
                    {
                      title: "59899",
                      value: 81052518,
                      description: "Other chemical products and preparations ",
                    },
                    {
                      title: "57431",
                      value: 79260529,
                      description: " Polycarbonates ",
                    },
                    {
                      title: "69969",
                      description: " Articles of iron or steel, n.e.s. ",
                      value: 77659190,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "white",
                  backgroundColor: [
                    "rgba(97, 22, 45, 1)",
                    "rgba(97, 22, 45, 0.95)",
                    "rgba(97, 22, 45, 0.80)",
                    "rgba(97, 22, 45, 0.75)",
                    "rgba(97, 22, 45, 0.65)",
                    "rgba(97, 22, 45, 0.64)",
                    "rgba(97, 22, 45, 0.63)",
                    "rgba(97, 22, 45, 0.62)",
                    "rgba(97, 22, 45, 0.61)",
                    "rgba(97, 22, 45, 0.60)",
                  ],
                  borderColor: "#61162d",
                  hoverBackgroundColor: "#61162d",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Imports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
          {
            id: "city-brownsville-chart-exports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "89846",
                      description: " Semiconductor media ",
                      value: 906103444,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 767551658,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752 ",
                      value: 605486328,
                    },
                    {
                      title: "71899",
                      description:
                        " Parts of the engines and motors of headings 714.49, 718.91, 718.92 and 718.93 ",
                      value: 575712968,
                    },
                    {
                      title: "82119",
                      description: " Parts of the seats of subgroup 821.1 ",
                      value: 379578842,
                    },
                    {
                      title: "78432",
                      description:
                        " Other parts and accessories of bodies (including cabs) ",
                      value: 245192070,
                    },
                    {
                      title: "71652",
                      value: 245192070,
                      description: " Other generating sets ",
                    },
                    {
                      title: "93100",
                      value: 198626123,
                      description:
                        " Special transactions and commodities not classified according to kind ",
                    },
                    {
                      title: "71690",
                      value: 177398821,
                      description:
                        " Parts, n.e.s., suitable for use solely or principally with the machines falling within group 716 ",
                    },
                    {
                      title: "77121",
                      description: "Static converters (e.g., rectifiers) ",
                      value: 171717181,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "black",
                  backgroundColor: [
                    "rgba(181, 163, 106, 1)",
                    "rgba(181, 163, 106, 0.95)",
                    "rgba(181, 163, 106, 0.85)",
                    "rgba(181, 163, 106, 0.75)",
                    "rgba(181, 163, 106, 0.65)",
                    "rgba(181, 163, 106, 0.64)",
                    "rgba(181, 163, 106, 0.63)",
                    "rgba(181, 163, 106, 0.62)",
                    "rgba(181, 163, 106, 0.61)",
                    "rgba(181, 163, 106, 0.60)",
                  ],
                  borderColor: "#b5a36a",
                  hoverBackgroundColor: "#b5a36a",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Exports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
        ],
      },
      {
        id: "city-texas-harlingen",
        name: "Harlingen",
        graphs: [
          {
            id: "city-harlingen-chart-comertial-truck-crossings",
            type: "line",
            data: {
              labels: [
                "2017-04",
                "2017-06",
                "2017-08",
                "2017-12",
                "2018-04",
                "2018-08",
                "2018-12",
                "2019-04",
                "2019-12",
                "2020-04",
                "2020-08",
                "2020-12",
              ],
              datasets: [
                {
                  label: "Series 1",
                  data: [
                    300000000, 600000000, 900000000, 800000000, 500000000,
                    400000000, 100000000, 200000000, 500000000, 400000000,
                    240000000, 400000000,
                  ],
                  borderColor: "rgba(97, 22, 45, 1)",
                  backgroundColor: "rgba(97, 22, 45, 0.1)",
                  borderWidth: 2,
                },
                {
                  label: "Series 2", // Name the series
                  data: [
                    500000000, 800000000, 600000000, 700000000, 600000000,
                    800000000, 200000000, 400000000, 600000000, 700000000,
                    340000000, 300000000,
                  ],
                  borderColor: "rgba(181, 163, 106, 1)",
                  backgroundColor: "rgba(181, 163, 106, 0.1)",
                  borderWidth: 2,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          },
          {
            id: "city-harlingen-chart-imports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "33460",
                      description:
                        "Petroleum oils and oils obtained from bituminous minerals (other than crude) and preparations n.e.s., containing by weight 70 % or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations, other than waste oils ",
                      value: 1900074770,
                    },
                    {
                      title: "34320",
                      description: " Natural gas, in the gaseous state ",
                      value: 605941408,
                    },
                    {
                      title: "77642",
                      description:
                        " Processors and controllers, whether or not combined with memories, converters, logic circuits, amplifiers, clock and timing circuits, or other circuits ",
                      value: 426794290,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 228291500,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752",
                      value: 224680384,
                    },
                    {
                      title: "82119",
                      description: "Parts of the seats of subgroup 821.1",
                      value: 123281865,
                    },
                    {
                      title: "77282",
                      value: 84177056,
                      description:
                        "Parts suitable for use solely or principally with the apparatus falling within subgroups 772.4, 772.5 and 772.6 - Other parts",
                    },
                    {
                      title: "59899",
                      value: 81052518,
                      description: "Other chemical products and preparations ",
                    },
                    {
                      title: "57431",
                      value: 79260529,
                      description: " Polycarbonates ",
                    },
                    {
                      title: "69969",
                      description: " Articles of iron or steel, n.e.s. ",
                      value: 77659190,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "white",
                  backgroundColor: [
                    "rgba(97, 22, 45, 1)",
                    "rgba(97, 22, 45, 0.95)",
                    "rgba(97, 22, 45, 0.80)",
                    "rgba(97, 22, 45, 0.75)",
                    "rgba(97, 22, 45, 0.65)",
                    "rgba(97, 22, 45, 0.64)",
                    "rgba(97, 22, 45, 0.63)",
                    "rgba(97, 22, 45, 0.62)",
                    "rgba(97, 22, 45, 0.61)",
                    "rgba(97, 22, 45, 0.60)",
                  ],
                  borderColor: "#61162d",
                  hoverBackgroundColor: "#61162d",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Imports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
          {
            id: "city-harlingen-chart-exports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "89846",
                      description: " Semiconductor media ",
                      value: 906103444,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 767551658,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752 ",
                      value: 605486328,
                    },
                    {
                      title: "71899",
                      description:
                        " Parts of the engines and motors of headings 714.49, 718.91, 718.92 and 718.93 ",
                      value: 575712968,
                    },
                    {
                      title: "82119",
                      description: " Parts of the seats of subgroup 821.1 ",
                      value: 379578842,
                    },
                    {
                      title: "78432",
                      description:
                        " Other parts and accessories of bodies (including cabs) ",
                      value: 245192070,
                    },
                    {
                      title: "71652",
                      value: 245192070,
                      description: " Other generating sets ",
                    },
                    {
                      title: "93100",
                      value: 198626123,
                      description:
                        " Special transactions and commodities not classified according to kind ",
                    },
                    {
                      title: "71690",
                      value: 177398821,
                      description:
                        " Parts, n.e.s., suitable for use solely or principally with the machines falling within group 716 ",
                    },
                    {
                      title: "77121",
                      description: "Static converters (e.g., rectifiers) ",
                      value: 171717181,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "black",
                  backgroundColor: [
                    "rgba(181, 163, 106, 1)",
                    "rgba(181, 163, 106, 0.95)",
                    "rgba(181, 163, 106, 0.85)",
                    "rgba(181, 163, 106, 0.75)",
                    "rgba(181, 163, 106, 0.65)",
                    "rgba(181, 163, 106, 0.64)",
                    "rgba(181, 163, 106, 0.63)",
                    "rgba(181, 163, 106, 0.62)",
                    "rgba(181, 163, 106, 0.61)",
                    "rgba(181, 163, 106, 0.60)",
                  ],
                  borderColor: "#b5a36a",
                  hoverBackgroundColor: "#b5a36a",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Exports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
        ],
      },
      {
        id: "city-texas-progreso",
        name: "Progreso",
        graphs: [
          {
            id: "city-progreso-chart-comertial-truck-crossings",
            type: "line",
            data: {
              labels: [
                "2017-04",
                "2017-06",
                "2017-08",
                "2017-12",
                "2018-04",
                "2018-08",
                "2018-12",
                "2019-04",
                "2019-12",
                "2020-04",
                "2020-08",
                "2020-12",
              ],
              datasets: [
                {
                  label: "Series 1",
                  data: [
                    300000000, 600000000, 900000000, 800000000, 500000000,
                    400000000, 100000000, 200000000, 500000000, 400000000,
                    240000000, 400000000,
                  ],
                  borderColor: "rgba(97, 22, 45, 1)",
                  backgroundColor: "rgba(97, 22, 45, 0.1)",
                  borderWidth: 2,
                },
                {
                  label: "Series 2", // Name the series
                  data: [
                    500000000, 800000000, 600000000, 700000000, 600000000,
                    800000000, 200000000, 400000000, 600000000, 700000000,
                    340000000, 300000000,
                  ],
                  borderColor: "rgba(181, 163, 106, 1)",
                  backgroundColor: "rgba(181, 163, 106, 0.1)",
                  borderWidth: 2,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          },
          {
            id: "city-progreso-chart-imports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "33460",
                      description:
                        "Petroleum oils and oils obtained from bituminous minerals (other than crude) and preparations n.e.s., containing by weight 70 % or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations, other than waste oils ",
                      value: 1900074770,
                    },
                    {
                      title: "34320",
                      description: " Natural gas, in the gaseous state ",
                      value: 605941408,
                    },
                    {
                      title: "77642",
                      description:
                        " Processors and controllers, whether or not combined with memories, converters, logic circuits, amplifiers, clock and timing circuits, or other circuits ",
                      value: 426794290,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 228291500,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752",
                      value: 224680384,
                    },
                    {
                      title: "82119",
                      description: "Parts of the seats of subgroup 821.1",
                      value: 123281865,
                    },
                    {
                      title: "77282",
                      value: 84177056,
                      description:
                        "Parts suitable for use solely or principally with the apparatus falling within subgroups 772.4, 772.5 and 772.6 - Other parts",
                    },
                    {
                      title: "59899",
                      value: 81052518,
                      description: "Other chemical products and preparations ",
                    },
                    {
                      title: "57431",
                      value: 79260529,
                      description: " Polycarbonates ",
                    },
                    {
                      title: "69969",
                      description: " Articles of iron or steel, n.e.s. ",
                      value: 77659190,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "white",
                  backgroundColor: [
                    "rgba(97, 22, 45, 1)",
                    "rgba(97, 22, 45, 0.95)",
                    "rgba(97, 22, 45, 0.80)",
                    "rgba(97, 22, 45, 0.75)",
                    "rgba(97, 22, 45, 0.65)",
                    "rgba(97, 22, 45, 0.64)",
                    "rgba(97, 22, 45, 0.63)",
                    "rgba(97, 22, 45, 0.62)",
                    "rgba(97, 22, 45, 0.61)",
                    "rgba(97, 22, 45, 0.60)",
                  ],
                  borderColor: "#61162d",
                  hoverBackgroundColor: "#61162d",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Imports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
          {
            id: "city-progreso-chart-exports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "89846",
                      description: " Semiconductor media ",
                      value: 906103444,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 767551658,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752 ",
                      value: 605486328,
                    },
                    {
                      title: "71899",
                      description:
                        " Parts of the engines and motors of headings 714.49, 718.91, 718.92 and 718.93 ",
                      value: 575712968,
                    },
                    {
                      title: "82119",
                      description: " Parts of the seats of subgroup 821.1 ",
                      value: 379578842,
                    },
                    {
                      title: "78432",
                      description:
                        " Other parts and accessories of bodies (including cabs) ",
                      value: 245192070,
                    },
                    {
                      title: "71652",
                      value: 245192070,
                      description: " Other generating sets ",
                    },
                    {
                      title: "93100",
                      value: 198626123,
                      description:
                        " Special transactions and commodities not classified according to kind ",
                    },
                    {
                      title: "71690",
                      value: 177398821,
                      description:
                        " Parts, n.e.s., suitable for use solely or principally with the machines falling within group 716 ",
                    },
                    {
                      title: "77121",
                      description: "Static converters (e.g., rectifiers) ",
                      value: 171717181,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "black",
                  backgroundColor: [
                    "rgba(181, 163, 106, 1)",
                    "rgba(181, 163, 106, 0.95)",
                    "rgba(181, 163, 106, 0.85)",
                    "rgba(181, 163, 106, 0.75)",
                    "rgba(181, 163, 106, 0.65)",
                    "rgba(181, 163, 106, 0.64)",
                    "rgba(181, 163, 106, 0.63)",
                    "rgba(181, 163, 106, 0.62)",
                    "rgba(181, 163, 106, 0.61)",
                    "rgba(181, 163, 106, 0.60)",
                  ],
                  borderColor: "#b5a36a",
                  hoverBackgroundColor: "#b5a36a",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Exports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
        ],
      },
      {
        id: "city-texas-hgo-phr",
        name: "Hidalgo/Pharr",
        graphs: [
          {
            id: "city-hgo-phr-chart-comertial-truck-crossings",
            type: "line",
            data: {
              labels: [
                "2017-04",
                "2017-06",
                "2017-08",
                "2017-12",
                "2018-04",
                "2018-08",
                "2018-12",
                "2019-04",
                "2019-12",
                "2020-04",
                "2020-08",
                "2020-12",
              ],
              datasets: [
                {
                  label: "Series 1",
                  data: [
                    300000000, 600000000, 900000000, 800000000, 500000000,
                    400000000, 100000000, 200000000, 500000000, 400000000,
                    240000000, 400000000,
                  ],
                  borderColor: "rgba(97, 22, 45, 1)",
                  backgroundColor: "rgba(97, 22, 45, 0.1)",
                  borderWidth: 2,
                },
                {
                  label: "Series 2", // Name the series
                  data: [
                    500000000, 800000000, 600000000, 700000000, 600000000,
                    800000000, 200000000, 400000000, 600000000, 700000000,
                    340000000, 300000000,
                  ],
                  borderColor: "rgba(181, 163, 106, 1)",
                  backgroundColor: "rgba(181, 163, 106, 0.1)",
                  borderWidth: 2,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          },
          {
            id: "city-hgo-phr-chart-imports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "33460",
                      description:
                        "Petroleum oils and oils obtained from bituminous minerals (other than crude) and preparations n.e.s., containing by weight 70 % or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations, other than waste oils ",
                      value: 1900074770,
                    },
                    {
                      title: "34320",
                      description: " Natural gas, in the gaseous state ",
                      value: 605941408,
                    },
                    {
                      title: "77642",
                      description:
                        " Processors and controllers, whether or not combined with memories, converters, logic circuits, amplifiers, clock and timing circuits, or other circuits ",
                      value: 426794290,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 228291500,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752",
                      value: 224680384,
                    },
                    {
                      title: "82119",
                      description: "Parts of the seats of subgroup 821.1",
                      value: 123281865,
                    },
                    {
                      title: "77282",
                      value: 84177056,
                      description:
                        "Parts suitable for use solely or principally with the apparatus falling within subgroups 772.4, 772.5 and 772.6 - Other parts",
                    },
                    {
                      title: "59899",
                      value: 81052518,
                      description: "Other chemical products and preparations ",
                    },
                    {
                      title: "57431",
                      value: 79260529,
                      description: " Polycarbonates ",
                    },
                    {
                      title: "69969",
                      description: " Articles of iron or steel, n.e.s. ",
                      value: 77659190,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "white",
                  backgroundColor: [
                    "rgba(97, 22, 45, 1)",
                    "rgba(97, 22, 45, 0.95)",
                    "rgba(97, 22, 45, 0.80)",
                    "rgba(97, 22, 45, 0.75)",
                    "rgba(97, 22, 45, 0.65)",
                    "rgba(97, 22, 45, 0.64)",
                    "rgba(97, 22, 45, 0.63)",
                    "rgba(97, 22, 45, 0.62)",
                    "rgba(97, 22, 45, 0.61)",
                    "rgba(97, 22, 45, 0.60)",
                  ],
                  borderColor: "#61162d",
                  hoverBackgroundColor: "#61162d",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Imports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
          {
            id: "city-hgo-phr-chart-exports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "89846",
                      description: " Semiconductor media ",
                      value: 906103444,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 767551658,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752 ",
                      value: 605486328,
                    },
                    {
                      title: "71899",
                      description:
                        " Parts of the engines and motors of headings 714.49, 718.91, 718.92 and 718.93 ",
                      value: 575712968,
                    },
                    {
                      title: "82119",
                      description: " Parts of the seats of subgroup 821.1 ",
                      value: 379578842,
                    },
                    {
                      title: "78432",
                      description:
                        " Other parts and accessories of bodies (including cabs) ",
                      value: 245192070,
                    },
                    {
                      title: "71652",
                      value: 245192070,
                      description: " Other generating sets ",
                    },
                    {
                      title: "93100",
                      value: 198626123,
                      description:
                        " Special transactions and commodities not classified according to kind ",
                    },
                    {
                      title: "71690",
                      value: 177398821,
                      description:
                        " Parts, n.e.s., suitable for use solely or principally with the machines falling within group 716 ",
                    },
                    {
                      title: "77121",
                      description: "Static converters (e.g., rectifiers) ",
                      value: 171717181,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "black",
                  backgroundColor: [
                    "rgba(181, 163, 106, 1)",
                    "rgba(181, 163, 106, 0.95)",
                    "rgba(181, 163, 106, 0.85)",
                    "rgba(181, 163, 106, 0.75)",
                    "rgba(181, 163, 106, 0.65)",
                    "rgba(181, 163, 106, 0.64)",
                    "rgba(181, 163, 106, 0.63)",
                    "rgba(181, 163, 106, 0.62)",
                    "rgba(181, 163, 106, 0.61)",
                    "rgba(181, 163, 106, 0.60)",
                  ],
                  borderColor: "#b5a36a",
                  hoverBackgroundColor: "#b5a36a",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Exports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
        ],
      },
      {
        id: "city-texas-rio-grande",
        name: "Rio Grande",
        graphs: [
          {
            id: "city-rio-grande-chart-comertial-truck-crossings",
            type: "line",
            data: {
              labels: [
                "2017-04",
                "2017-06",
                "2017-08",
                "2017-12",
                "2018-04",
                "2018-08",
                "2018-12",
                "2019-04",
                "2019-12",
                "2020-04",
                "2020-08",
                "2020-12",
              ],
              datasets: [
                {
                  label: "Series 1",
                  data: [
                    300000000, 600000000, 900000000, 800000000, 500000000,
                    400000000, 100000000, 200000000, 500000000, 400000000,
                    240000000, 400000000,
                  ],
                  borderColor: "rgba(97, 22, 45, 1)",
                  backgroundColor: "rgba(97, 22, 45, 0.1)",
                  borderWidth: 2,
                },
                {
                  label: "Series 2", // Name the series
                  data: [
                    500000000, 800000000, 600000000, 700000000, 600000000,
                    800000000, 200000000, 400000000, 600000000, 700000000,
                    340000000, 300000000,
                  ],
                  borderColor: "rgba(181, 163, 106, 1)",
                  backgroundColor: "rgba(181, 163, 106, 0.1)",
                  borderWidth: 2,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          },
          {
            id: "city-rio-grande-chart-imports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "33460",
                      description:
                        "Petroleum oils and oils obtained from bituminous minerals (other than crude) and preparations n.e.s., containing by weight 70 % or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations, other than waste oils ",
                      value: 1900074770,
                    },
                    {
                      title: "34320",
                      description: " Natural gas, in the gaseous state ",
                      value: 605941408,
                    },
                    {
                      title: "77642",
                      description:
                        " Processors and controllers, whether or not combined with memories, converters, logic circuits, amplifiers, clock and timing circuits, or other circuits ",
                      value: 426794290,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 228291500,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752",
                      value: 224680384,
                    },
                    {
                      title: "82119",
                      description: "Parts of the seats of subgroup 821.1",
                      value: 123281865,
                    },
                    {
                      title: "77282",
                      value: 84177056,
                      description:
                        "Parts suitable for use solely or principally with the apparatus falling within subgroups 772.4, 772.5 and 772.6 - Other parts",
                    },
                    {
                      title: "59899",
                      value: 81052518,
                      description: "Other chemical products and preparations ",
                    },
                    {
                      title: "57431",
                      value: 79260529,
                      description: " Polycarbonates ",
                    },
                    {
                      title: "69969",
                      description: " Articles of iron or steel, n.e.s. ",
                      value: 77659190,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "white",
                  backgroundColor: [
                    "rgba(97, 22, 45, 1)",
                    "rgba(97, 22, 45, 0.95)",
                    "rgba(97, 22, 45, 0.80)",
                    "rgba(97, 22, 45, 0.75)",
                    "rgba(97, 22, 45, 0.65)",
                    "rgba(97, 22, 45, 0.64)",
                    "rgba(97, 22, 45, 0.63)",
                    "rgba(97, 22, 45, 0.62)",
                    "rgba(97, 22, 45, 0.61)",
                    "rgba(97, 22, 45, 0.60)",
                  ],
                  borderColor: "#61162d",
                  hoverBackgroundColor: "#61162d",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Imports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
          {
            id: "city-rio-grande-chart-exports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "89846",
                      description: " Semiconductor media ",
                      value: 906103444,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 767551658,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752 ",
                      value: 605486328,
                    },
                    {
                      title: "71899",
                      description:
                        " Parts of the engines and motors of headings 714.49, 718.91, 718.92 and 718.93 ",
                      value: 575712968,
                    },
                    {
                      title: "82119",
                      description: " Parts of the seats of subgroup 821.1 ",
                      value: 379578842,
                    },
                    {
                      title: "78432",
                      description:
                        " Other parts and accessories of bodies (including cabs) ",
                      value: 245192070,
                    },
                    {
                      title: "71652",
                      value: 245192070,
                      description: " Other generating sets ",
                    },
                    {
                      title: "93100",
                      value: 198626123,
                      description:
                        " Special transactions and commodities not classified according to kind ",
                    },
                    {
                      title: "71690",
                      value: 177398821,
                      description:
                        " Parts, n.e.s., suitable for use solely or principally with the machines falling within group 716 ",
                    },
                    {
                      title: "77121",
                      description: "Static converters (e.g., rectifiers) ",
                      value: 171717181,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "black",
                  backgroundColor: [
                    "rgba(181, 163, 106, 1)",
                    "rgba(181, 163, 106, 0.95)",
                    "rgba(181, 163, 106, 0.85)",
                    "rgba(181, 163, 106, 0.75)",
                    "rgba(181, 163, 106, 0.65)",
                    "rgba(181, 163, 106, 0.64)",
                    "rgba(181, 163, 106, 0.63)",
                    "rgba(181, 163, 106, 0.62)",
                    "rgba(181, 163, 106, 0.61)",
                    "rgba(181, 163, 106, 0.60)",
                  ],
                  borderColor: "#b5a36a",
                  hoverBackgroundColor: "#b5a36a",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Exports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
        ],
      },
      {
        id: "city-texas-roma",
        name: "Roma",
        graphs: [
          {
            id: "city-roma-chart-comertial-truck-crossings",
            type: "line",
            data: {
              labels: [
                "2017-04",
                "2017-06",
                "2017-08",
                "2017-12",
                "2018-04",
                "2018-08",
                "2018-12",
                "2019-04",
                "2019-12",
                "2020-04",
                "2020-08",
                "2020-12",
              ],
              datasets: [
                {
                  label: "Series 1",
                  data: [
                    300000000, 600000000, 900000000, 800000000, 500000000,
                    400000000, 100000000, 200000000, 500000000, 400000000,
                    240000000, 400000000,
                  ],
                  borderColor: "rgba(97, 22, 45, 1)",
                  backgroundColor: "rgba(97, 22, 45, 0.1)",
                  borderWidth: 2,
                },
                {
                  label: "Series 2", // Name the series
                  data: [
                    500000000, 800000000, 600000000, 700000000, 600000000,
                    800000000, 200000000, 400000000, 600000000, 700000000,
                    340000000, 300000000,
                  ],
                  borderColor: "rgba(181, 163, 106, 1)",
                  backgroundColor: "rgba(181, 163, 106, 0.1)",
                  borderWidth: 2,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          },
          {
            id: "city-roma-chart-imports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "33460",
                      description:
                        "Petroleum oils and oils obtained from bituminous minerals (other than crude) and preparations n.e.s., containing by weight 70 % or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations, other than waste oils ",
                      value: 1900074770,
                    },
                    {
                      title: "34320",
                      description: " Natural gas, in the gaseous state ",
                      value: 605941408,
                    },
                    {
                      title: "77642",
                      description:
                        " Processors and controllers, whether or not combined with memories, converters, logic circuits, amplifiers, clock and timing circuits, or other circuits ",
                      value: 426794290,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 228291500,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752",
                      value: 224680384,
                    },
                    {
                      title: "82119",
                      description: "Parts of the seats of subgroup 821.1",
                      value: 123281865,
                    },
                    {
                      title: "77282",
                      value: 84177056,
                      description:
                        "Parts suitable for use solely or principally with the apparatus falling within subgroups 772.4, 772.5 and 772.6 - Other parts",
                    },
                    {
                      title: "59899",
                      value: 81052518,
                      description: "Other chemical products and preparations ",
                    },
                    {
                      title: "57431",
                      value: 79260529,
                      description: " Polycarbonates ",
                    },
                    {
                      title: "69969",
                      description: " Articles of iron or steel, n.e.s. ",
                      value: 77659190,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "white",
                  backgroundColor: [
                    "rgba(97, 22, 45, 1)",
                    "rgba(97, 22, 45, 0.95)",
                    "rgba(97, 22, 45, 0.80)",
                    "rgba(97, 22, 45, 0.75)",
                    "rgba(97, 22, 45, 0.65)",
                    "rgba(97, 22, 45, 0.64)",
                    "rgba(97, 22, 45, 0.63)",
                    "rgba(97, 22, 45, 0.62)",
                    "rgba(97, 22, 45, 0.61)",
                    "rgba(97, 22, 45, 0.60)",
                  ],
                  borderColor: "#61162d",
                  hoverBackgroundColor: "#61162d",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Imports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
          {
            id: "city-roma-chart-exports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "89846",
                      description: " Semiconductor media ",
                      value: 906103444,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 767551658,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752 ",
                      value: 605486328,
                    },
                    {
                      title: "71899",
                      description:
                        " Parts of the engines and motors of headings 714.49, 718.91, 718.92 and 718.93 ",
                      value: 575712968,
                    },
                    {
                      title: "82119",
                      description: " Parts of the seats of subgroup 821.1 ",
                      value: 379578842,
                    },
                    {
                      title: "78432",
                      description:
                        " Other parts and accessories of bodies (including cabs) ",
                      value: 245192070,
                    },
                    {
                      title: "71652",
                      value: 245192070,
                      description: " Other generating sets ",
                    },
                    {
                      title: "93100",
                      value: 198626123,
                      description:
                        " Special transactions and commodities not classified according to kind ",
                    },
                    {
                      title: "71690",
                      value: 177398821,
                      description:
                        " Parts, n.e.s., suitable for use solely or principally with the machines falling within group 716 ",
                    },
                    {
                      title: "77121",
                      description: "Static converters (e.g., rectifiers) ",
                      value: 171717181,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "black",
                  backgroundColor: [
                    "rgba(181, 163, 106, 1)",
                    "rgba(181, 163, 106, 0.95)",
                    "rgba(181, 163, 106, 0.85)",
                    "rgba(181, 163, 106, 0.75)",
                    "rgba(181, 163, 106, 0.65)",
                    "rgba(181, 163, 106, 0.64)",
                    "rgba(181, 163, 106, 0.63)",
                    "rgba(181, 163, 106, 0.62)",
                    "rgba(181, 163, 106, 0.61)",
                    "rgba(181, 163, 106, 0.60)",
                  ],
                  borderColor: "#b5a36a",
                  hoverBackgroundColor: "#b5a36a",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Exports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
        ],
      },
      {
        id: "city-texas-laredo",
        name: "Laredo",
        graphs: [
          {
            id: "city-laredo-chart-comertial-truck-crossings",
            type: "line",
            data: {
              labels: [
                "2017-04",
                "2017-06",
                "2017-08",
                "2017-12",
                "2018-04",
                "2018-08",
                "2018-12",
                "2019-04",
                "2019-12",
                "2020-04",
                "2020-08",
                "2020-12",
              ],
              datasets: [
                {
                  label: "Series 1",
                  data: [
                    300000000, 600000000, 900000000, 800000000, 500000000,
                    400000000, 100000000, 200000000, 500000000, 400000000,
                    240000000, 400000000,
                  ],
                  borderColor: "rgba(97, 22, 45, 1)",
                  backgroundColor: "rgba(97, 22, 45, 0.1)",
                  borderWidth: 2,
                },
                {
                  label: "Series 2", // Name the series
                  data: [
                    500000000, 800000000, 600000000, 700000000, 600000000,
                    800000000, 200000000, 400000000, 600000000, 700000000,
                    340000000, 300000000,
                  ],
                  borderColor: "rgba(181, 163, 106, 1)",
                  backgroundColor: "rgba(181, 163, 106, 0.1)",
                  borderWidth: 2,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          },
          {
            id: "city-laredo-chart-imports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "33460",
                      description:
                        "Petroleum oils and oils obtained from bituminous minerals (other than crude) and preparations n.e.s., containing by weight 70 % or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations, other than waste oils ",
                      value: 1900074770,
                    },
                    {
                      title: "34320",
                      description: " Natural gas, in the gaseous state ",
                      value: 605941408,
                    },
                    {
                      title: "77642",
                      description:
                        " Processors and controllers, whether or not combined with memories, converters, logic circuits, amplifiers, clock and timing circuits, or other circuits ",
                      value: 426794290,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 228291500,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752",
                      value: 224680384,
                    },
                    {
                      title: "82119",
                      description: "Parts of the seats of subgroup 821.1",
                      value: 123281865,
                    },
                    {
                      title: "77282",
                      value: 84177056,
                      description:
                        "Parts suitable for use solely or principally with the apparatus falling within subgroups 772.4, 772.5 and 772.6 - Other parts",
                    },
                    {
                      title: "59899",
                      value: 81052518,
                      description: "Other chemical products and preparations ",
                    },
                    {
                      title: "57431",
                      value: 79260529,
                      description: " Polycarbonates ",
                    },
                    {
                      title: "69969",
                      description: " Articles of iron or steel, n.e.s. ",
                      value: 77659190,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "white",
                  backgroundColor: [
                    "rgba(97, 22, 45, 1)",
                    "rgba(97, 22, 45, 0.95)",
                    "rgba(97, 22, 45, 0.80)",
                    "rgba(97, 22, 45, 0.75)",
                    "rgba(97, 22, 45, 0.65)",
                    "rgba(97, 22, 45, 0.64)",
                    "rgba(97, 22, 45, 0.63)",
                    "rgba(97, 22, 45, 0.62)",
                    "rgba(97, 22, 45, 0.61)",
                    "rgba(97, 22, 45, 0.60)",
                  ],
                  borderColor: "#61162d",
                  hoverBackgroundColor: "#61162d",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Imports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
          {
            id: "city-laredo-chart-exports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "89846",
                      description: " Semiconductor media ",
                      value: 906103444,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 767551658,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752 ",
                      value: 605486328,
                    },
                    {
                      title: "71899",
                      description:
                        " Parts of the engines and motors of headings 714.49, 718.91, 718.92 and 718.93 ",
                      value: 575712968,
                    },
                    {
                      title: "82119",
                      description: " Parts of the seats of subgroup 821.1 ",
                      value: 379578842,
                    },
                    {
                      title: "78432",
                      description:
                        " Other parts and accessories of bodies (including cabs) ",
                      value: 245192070,
                    },
                    {
                      title: "71652",
                      value: 245192070,
                      description: " Other generating sets ",
                    },
                    {
                      title: "93100",
                      value: 198626123,
                      description:
                        " Special transactions and commodities not classified according to kind ",
                    },
                    {
                      title: "71690",
                      value: 177398821,
                      description:
                        " Parts, n.e.s., suitable for use solely or principally with the machines falling within group 716 ",
                    },
                    {
                      title: "77121",
                      description: "Static converters (e.g., rectifiers) ",
                      value: 171717181,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "black",
                  backgroundColor: [
                    "rgba(181, 163, 106, 1)",
                    "rgba(181, 163, 106, 0.95)",
                    "rgba(181, 163, 106, 0.85)",
                    "rgba(181, 163, 106, 0.75)",
                    "rgba(181, 163, 106, 0.65)",
                    "rgba(181, 163, 106, 0.64)",
                    "rgba(181, 163, 106, 0.63)",
                    "rgba(181, 163, 106, 0.62)",
                    "rgba(181, 163, 106, 0.61)",
                    "rgba(181, 163, 106, 0.60)",
                  ],
                  borderColor: "#b5a36a",
                  hoverBackgroundColor: "#b5a36a",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Exports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
        ],
      },
      {
        id: "city-texas-eagle-pass",
        name: "Eagle Pass",
        graphs: [
          {
            id: "city-eagle-pass-chart-comertial-truck-crossings",
            type: "line",
            data: {
              labels: [
                "2017-04",
                "2017-06",
                "2017-08",
                "2017-12",
                "2018-04",
                "2018-08",
                "2018-12",
                "2019-04",
                "2019-12",
                "2020-04",
                "2020-08",
                "2020-12",
              ],
              datasets: [
                {
                  label: "Series 1",
                  data: [
                    300000000, 600000000, 900000000, 800000000, 500000000,
                    400000000, 100000000, 200000000, 500000000, 400000000,
                    240000000, 400000000,
                  ],
                  borderColor: "rgba(97, 22, 45, 1)",
                  backgroundColor: "rgba(97, 22, 45, 0.1)",
                  borderWidth: 2,
                },
                {
                  label: "Series 2", // Name the series
                  data: [
                    500000000, 800000000, 600000000, 700000000, 600000000,
                    800000000, 200000000, 400000000, 600000000, 700000000,
                    340000000, 300000000,
                  ],
                  borderColor: "rgba(181, 163, 106, 1)",
                  backgroundColor: "rgba(181, 163, 106, 0.1)",
                  borderWidth: 2,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          },
          {
            id: "city-eagle-pass-chart-imports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "33460",
                      description:
                        "Petroleum oils and oils obtained from bituminous minerals (other than crude) and preparations n.e.s., containing by weight 70 % or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations, other than waste oils ",
                      value: 1900074770,
                    },
                    {
                      title: "34320",
                      description: " Natural gas, in the gaseous state ",
                      value: 605941408,
                    },
                    {
                      title: "77642",
                      description:
                        " Processors and controllers, whether or not combined with memories, converters, logic circuits, amplifiers, clock and timing circuits, or other circuits ",
                      value: 426794290,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 228291500,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752",
                      value: 224680384,
                    },
                    {
                      title: "82119",
                      description: "Parts of the seats of subgroup 821.1",
                      value: 123281865,
                    },
                    {
                      title: "77282",
                      value: 84177056,
                      description:
                        "Parts suitable for use solely or principally with the apparatus falling within subgroups 772.4, 772.5 and 772.6 - Other parts",
                    },
                    {
                      title: "59899",
                      value: 81052518,
                      description: "Other chemical products and preparations ",
                    },
                    {
                      title: "57431",
                      value: 79260529,
                      description: " Polycarbonates ",
                    },
                    {
                      title: "69969",
                      description: " Articles of iron or steel, n.e.s. ",
                      value: 77659190,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "white",
                  backgroundColor: [
                    "rgba(97, 22, 45, 1)",
                    "rgba(97, 22, 45, 0.95)",
                    "rgba(97, 22, 45, 0.80)",
                    "rgba(97, 22, 45, 0.75)",
                    "rgba(97, 22, 45, 0.65)",
                    "rgba(97, 22, 45, 0.64)",
                    "rgba(97, 22, 45, 0.63)",
                    "rgba(97, 22, 45, 0.62)",
                    "rgba(97, 22, 45, 0.61)",
                    "rgba(97, 22, 45, 0.60)",
                  ],
                  borderColor: "#61162d",
                  hoverBackgroundColor: "#61162d",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Imports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
          {
            id: "city-eagle-pass-chart-exports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "89846",
                      description: " Semiconductor media ",
                      value: 906103444,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 767551658,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752 ",
                      value: 605486328,
                    },
                    {
                      title: "71899",
                      description:
                        " Parts of the engines and motors of headings 714.49, 718.91, 718.92 and 718.93 ",
                      value: 575712968,
                    },
                    {
                      title: "82119",
                      description: " Parts of the seats of subgroup 821.1 ",
                      value: 379578842,
                    },
                    {
                      title: "78432",
                      description:
                        " Other parts and accessories of bodies (including cabs) ",
                      value: 245192070,
                    },
                    {
                      title: "71652",
                      value: 245192070,
                      description: " Other generating sets ",
                    },
                    {
                      title: "93100",
                      value: 198626123,
                      description:
                        " Special transactions and commodities not classified according to kind ",
                    },
                    {
                      title: "71690",
                      value: 177398821,
                      description:
                        " Parts, n.e.s., suitable for use solely or principally with the machines falling within group 716 ",
                    },
                    {
                      title: "77121",
                      description: "Static converters (e.g., rectifiers) ",
                      value: 171717181,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "black",
                  backgroundColor: [
                    "rgba(181, 163, 106, 1)",
                    "rgba(181, 163, 106, 0.95)",
                    "rgba(181, 163, 106, 0.85)",
                    "rgba(181, 163, 106, 0.75)",
                    "rgba(181, 163, 106, 0.65)",
                    "rgba(181, 163, 106, 0.64)",
                    "rgba(181, 163, 106, 0.63)",
                    "rgba(181, 163, 106, 0.62)",
                    "rgba(181, 163, 106, 0.61)",
                    "rgba(181, 163, 106, 0.60)",
                  ],
                  borderColor: "#b5a36a",
                  hoverBackgroundColor: "#b5a36a",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Exports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
        ],
      },
      {
        id: "city-texas-delrio",
        name: "Del Rio",
        graphs: [
          {
            id: "city-delrio-chart-comertial-truck-crossings",
            type: "line",
            data: {
              labels: [
                "2017-04",
                "2017-06",
                "2017-08",
                "2017-12",
                "2018-04",
                "2018-08",
                "2018-12",
                "2019-04",
                "2019-12",
                "2020-04",
                "2020-08",
                "2020-12",
              ],
              datasets: [
                {
                  label: "Series 1",
                  data: [
                    300000000, 600000000, 900000000, 800000000, 500000000,
                    400000000, 100000000, 200000000, 500000000, 400000000,
                    240000000, 400000000,
                  ],
                  borderColor: "rgba(97, 22, 45, 1)",
                  backgroundColor: "rgba(97, 22, 45, 0.1)",
                  borderWidth: 2,
                },
                {
                  label: "Series 2", // Name the series
                  data: [
                    500000000, 800000000, 600000000, 700000000, 600000000,
                    800000000, 200000000, 400000000, 600000000, 700000000,
                    340000000, 300000000,
                  ],
                  borderColor: "rgba(181, 163, 106, 1)",
                  backgroundColor: "rgba(181, 163, 106, 0.1)",
                  borderWidth: 2,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          },
          {
            id: "city-delrio-chart-imports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "33460",
                      description:
                        "Petroleum oils and oils obtained from bituminous minerals (other than crude) and preparations n.e.s., containing by weight 70 % or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations, other than waste oils ",
                      value: 1900074770,
                    },
                    {
                      title: "34320",
                      description: " Natural gas, in the gaseous state ",
                      value: 605941408,
                    },
                    {
                      title: "77642",
                      description:
                        " Processors and controllers, whether or not combined with memories, converters, logic circuits, amplifiers, clock and timing circuits, or other circuits ",
                      value: 426794290,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 228291500,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752",
                      value: 224680384,
                    },
                    {
                      title: "82119",
                      description: "Parts of the seats of subgroup 821.1",
                      value: 123281865,
                    },
                    {
                      title: "77282",
                      value: 84177056,
                      description:
                        "Parts suitable for use solely or principally with the apparatus falling within subgroups 772.4, 772.5 and 772.6 - Other parts",
                    },
                    {
                      title: "59899",
                      value: 81052518,
                      description: "Other chemical products and preparations ",
                    },
                    {
                      title: "57431",
                      value: 79260529,
                      description: " Polycarbonates ",
                    },
                    {
                      title: "69969",
                      description: " Articles of iron or steel, n.e.s. ",
                      value: 77659190,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "white",
                  backgroundColor: [
                    "rgba(97, 22, 45, 1)",
                    "rgba(97, 22, 45, 0.95)",
                    "rgba(97, 22, 45, 0.80)",
                    "rgba(97, 22, 45, 0.75)",
                    "rgba(97, 22, 45, 0.65)",
                    "rgba(97, 22, 45, 0.64)",
                    "rgba(97, 22, 45, 0.63)",
                    "rgba(97, 22, 45, 0.62)",
                    "rgba(97, 22, 45, 0.61)",
                    "rgba(97, 22, 45, 0.60)",
                  ],
                  borderColor: "#61162d",
                  hoverBackgroundColor: "#61162d",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Imports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
          {
            id: "city-delrio-chart-exports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "89846",
                      description: " Semiconductor media ",
                      value: 906103444,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 767551658,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752 ",
                      value: 605486328,
                    },
                    {
                      title: "71899",
                      description:
                        " Parts of the engines and motors of headings 714.49, 718.91, 718.92 and 718.93 ",
                      value: 575712968,
                    },
                    {
                      title: "82119",
                      description: " Parts of the seats of subgroup 821.1 ",
                      value: 379578842,
                    },
                    {
                      title: "78432",
                      description:
                        " Other parts and accessories of bodies (including cabs) ",
                      value: 245192070,
                    },
                    {
                      title: "71652",
                      value: 245192070,
                      description: " Other generating sets ",
                    },
                    {
                      title: "93100",
                      value: 198626123,
                      description:
                        " Special transactions and commodities not classified according to kind ",
                    },
                    {
                      title: "71690",
                      value: 177398821,
                      description:
                        " Parts, n.e.s., suitable for use solely or principally with the machines falling within group 716 ",
                    },
                    {
                      title: "77121",
                      description: "Static converters (e.g., rectifiers) ",
                      value: 171717181,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "black",
                  backgroundColor: [
                    "rgba(181, 163, 106, 1)",
                    "rgba(181, 163, 106, 0.95)",
                    "rgba(181, 163, 106, 0.85)",
                    "rgba(181, 163, 106, 0.75)",
                    "rgba(181, 163, 106, 0.65)",
                    "rgba(181, 163, 106, 0.64)",
                    "rgba(181, 163, 106, 0.63)",
                    "rgba(181, 163, 106, 0.62)",
                    "rgba(181, 163, 106, 0.61)",
                    "rgba(181, 163, 106, 0.60)",
                  ],
                  borderColor: "#b5a36a",
                  hoverBackgroundColor: "#b5a36a",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Exports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
        ],
      },
      {
        id: "city-texas-elpaso",
        name: "El Paso",
        graphs: [
          {
            id: "city-elpaso-chart-comertial-truck-crossings",
            type: "line",
            data: {
              labels: [
                "2017-04",
                "2017-06",
                "2017-08",
                "2017-12",
                "2018-04",
                "2018-08",
                "2018-12",
                "2019-04",
                "2019-12",
                "2020-04",
                "2020-08",
                "2020-12",
              ],
              datasets: [
                {
                  label: "Series 1",
                  data: [
                    300000000, 600000000, 900000000, 800000000, 500000000,
                    400000000, 100000000, 200000000, 500000000, 400000000,
                    240000000, 400000000,
                  ],
                  borderColor: "rgba(97, 22, 45, 1)",
                  backgroundColor: "rgba(97, 22, 45, 0.1)",
                  borderWidth: 2,
                },
                {
                  label: "Series 2", // Name the series
                  data: [
                    500000000, 800000000, 600000000, 700000000, 600000000,
                    800000000, 200000000, 400000000, 600000000, 700000000,
                    340000000, 300000000,
                  ],
                  borderColor: "rgba(181, 163, 106, 1)",
                  backgroundColor: "rgba(181, 163, 106, 0.1)",
                  borderWidth: 2,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          },

          {
            id: "city-elpaso-chart-imports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "33460",
                      description:
                        "Petroleum oils and oils obtained from bituminous minerals (other than crude) and preparations n.e.s., containing by weight 70 % or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations, other than waste oils ",
                      value: 1900074770,
                    },
                    {
                      title: "34320",
                      description: " Natural gas, in the gaseous state ",
                      value: 605941408,
                    },
                    {
                      title: "77642",
                      description:
                        " Processors and controllers, whether or not combined with memories, converters, logic circuits, amplifiers, clock and timing circuits, or other circuits ",
                      value: 426794290,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 228291500,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752",
                      value: 224680384,
                    },
                    {
                      title: "82119",
                      description: "Parts of the seats of subgroup 821.1",
                      value: 123281865,
                    },
                    {
                      title: "77282",
                      value: 84177056,
                      description:
                        "Parts suitable for use solely or principally with the apparatus falling within subgroups 772.4, 772.5 and 772.6 - Other parts",
                    },
                    {
                      title: "59899",
                      value: 81052518,
                      description: "Other chemical products and preparations ",
                    },
                    {
                      title: "57431",
                      value: 79260529,
                      description: " Polycarbonates ",
                    },
                    {
                      title: "69969",
                      description: " Articles of iron or steel, n.e.s. ",
                      value: 77659190,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "white",
                  backgroundColor: [
                    "rgba(97, 22, 45, 1)",
                    "rgba(97, 22, 45, 0.95)",
                    "rgba(97, 22, 45, 0.80)",
                    "rgba(97, 22, 45, 0.75)",
                    "rgba(97, 22, 45, 0.65)",
                    "rgba(97, 22, 45, 0.64)",
                    "rgba(97, 22, 45, 0.63)",
                    "rgba(97, 22, 45, 0.62)",
                    "rgba(97, 22, 45, 0.61)",
                    "rgba(97, 22, 45, 0.60)",
                  ],
                  borderColor: "#61162d",
                  hoverBackgroundColor: "#61162d",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Imports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
          {
            id: "city-elpaso-chart-exports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "89846",
                      description: " Semiconductor media ",
                      value: 906103444,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 767551658,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752 ",
                      value: 605486328,
                    },
                    {
                      title: "71899",
                      description:
                        " Parts of the engines and motors of headings 714.49, 718.91, 718.92 and 718.93 ",
                      value: 575712968,
                    },
                    {
                      title: "82119",
                      description: " Parts of the seats of subgroup 821.1 ",
                      value: 379578842,
                    },
                    {
                      title: "78432",
                      description:
                        " Other parts and accessories of bodies (including cabs) ",
                      value: 245192070,
                    },
                    {
                      title: "71652",
                      value: 245192070,
                      description: " Other generating sets ",
                    },
                    {
                      title: "93100",
                      value: 198626123,
                      description:
                        " Special transactions and commodities not classified according to kind ",
                    },
                    {
                      title: "71690",
                      value: 177398821,
                      description:
                        " Parts, n.e.s., suitable for use solely or principally with the machines falling within group 716 ",
                    },
                    {
                      title: "77121",
                      description: "Static converters (e.g., rectifiers) ",
                      value: 171717181,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "black",
                  backgroundColor: [
                    "rgba(181, 163, 106, 1)",
                    "rgba(181, 163, 106, 0.95)",
                    "rgba(181, 163, 106, 0.85)",
                    "rgba(181, 163, 106, 0.75)",
                    "rgba(181, 163, 106, 0.65)",
                    "rgba(181, 163, 106, 0.64)",
                    "rgba(181, 163, 106, 0.63)",
                    "rgba(181, 163, 106, 0.62)",
                    "rgba(181, 163, 106, 0.61)",
                    "rgba(181, 163, 106, 0.60)",
                  ],
                  borderColor: "#b5a36a",
                  hoverBackgroundColor: "#b5a36a",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Exports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
        ],
      },
      {
        id: "city-texas-ysleta",
        name: "Ysleta",
        graphs: [
          {
            id: "city-ysleta-chart-comertial-truck-crossings",
            type: "line",
            data: {
              labels: [
                "2017-04",
                "2017-06",
                "2017-08",
                "2017-12",
                "2018-04",
                "2018-08",
                "2018-12",
                "2019-04",
                "2019-12",
                "2020-04",
                "2020-08",
                "2020-12",
              ],
              datasets: [
                {
                  label: "Series 1",
                  data: [
                    300000000, 600000000, 900000000, 800000000, 500000000,
                    400000000, 100000000, 200000000, 500000000, 400000000,
                    240000000, 400000000,
                  ],
                  borderColor: "rgba(97, 22, 45, 1)",
                  backgroundColor: "rgba(97, 22, 45, 0.1)",
                  borderWidth: 2,
                },
                {
                  label: "Series 2", // Name the series
                  data: [
                    500000000, 800000000, 600000000, 700000000, 600000000,
                    800000000, 200000000, 400000000, 600000000, 700000000,
                    340000000, 300000000,
                  ],
                  borderColor: "rgba(181, 163, 106, 1)",
                  backgroundColor: "rgba(181, 163, 106, 0.1)",
                  borderWidth: 2,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          },
          {
            id: "city-ysleta-chart-imports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "33460",
                      description:
                        "Petroleum oils and oils obtained from bituminous minerals (other than crude) and preparations n.e.s., containing by weight 70 % or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations, other than waste oils ",
                      value: 1900074770,
                    },
                    {
                      title: "34320",
                      description: " Natural gas, in the gaseous state ",
                      value: 605941408,
                    },
                    {
                      title: "77642",
                      description:
                        " Processors and controllers, whether or not combined with memories, converters, logic circuits, amplifiers, clock and timing circuits, or other circuits ",
                      value: 426794290,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 228291500,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752",
                      value: 224680384,
                    },
                    {
                      title: "82119",
                      description: "Parts of the seats of subgroup 821.1",
                      value: 123281865,
                    },
                    {
                      title: "77282",
                      value: 84177056,
                      description:
                        "Parts suitable for use solely or principally with the apparatus falling within subgroups 772.4, 772.5 and 772.6 - Other parts",
                    },
                    {
                      title: "59899",
                      value: 81052518,
                      description: "Other chemical products and preparations ",
                    },
                    {
                      title: "57431",
                      value: 79260529,
                      description: " Polycarbonates ",
                    },
                    {
                      title: "69969",
                      description: " Articles of iron or steel, n.e.s. ",
                      value: 77659190,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "white",
                  backgroundColor: [
                    "rgba(97, 22, 45, 1)",
                    "rgba(97, 22, 45, 0.95)",
                    "rgba(97, 22, 45, 0.80)",
                    "rgba(97, 22, 45, 0.75)",
                    "rgba(97, 22, 45, 0.65)",
                    "rgba(97, 22, 45, 0.64)",
                    "rgba(97, 22, 45, 0.63)",
                    "rgba(97, 22, 45, 0.62)",
                    "rgba(97, 22, 45, 0.61)",
                    "rgba(97, 22, 45, 0.60)",
                  ],
                  borderColor: "#61162d",
                  hoverBackgroundColor: "#61162d",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Imports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
          {
            id: "city-ysleta-chart-exports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "89846",
                      description: " Semiconductor media ",
                      value: 906103444,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 767551658,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752 ",
                      value: 605486328,
                    },
                    {
                      title: "71899",
                      description:
                        " Parts of the engines and motors of headings 714.49, 718.91, 718.92 and 718.93 ",
                      value: 575712968,
                    },
                    {
                      title: "82119",
                      description: " Parts of the seats of subgroup 821.1 ",
                      value: 379578842,
                    },
                    {
                      title: "78432",
                      description:
                        " Other parts and accessories of bodies (including cabs) ",
                      value: 245192070,
                    },
                    {
                      title: "71652",
                      value: 245192070,
                      description: " Other generating sets ",
                    },
                    {
                      title: "93100",
                      value: 198626123,
                      description:
                        " Special transactions and commodities not classified according to kind ",
                    },
                    {
                      title: "71690",
                      value: 177398821,
                      description:
                        " Parts, n.e.s., suitable for use solely or principally with the machines falling within group 716 ",
                    },
                    {
                      title: "77121",
                      description: "Static converters (e.g., rectifiers) ",
                      value: 171717181,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "black",
                  backgroundColor: [
                    "rgba(181, 163, 106, 1)",
                    "rgba(181, 163, 106, 0.95)",
                    "rgba(181, 163, 106, 0.85)",
                    "rgba(181, 163, 106, 0.75)",
                    "rgba(181, 163, 106, 0.65)",
                    "rgba(181, 163, 106, 0.64)",
                    "rgba(181, 163, 106, 0.63)",
                    "rgba(181, 163, 106, 0.62)",
                    "rgba(181, 163, 106, 0.61)",
                    "rgba(181, 163, 106, 0.60)",
                  ],
                  borderColor: "#b5a36a",
                  hoverBackgroundColor: "#b5a36a",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Exports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
        ],
      },
      {
        id: "city-texas-presidio",
        name: "Presidio",
        graphs: [
          {
            id: "city-presidio-chart-comertial-truck-crossings",
            type: "line",
            data: {
              labels: [
                "2017-04",
                "2017-06",
                "2017-08",
                "2017-12",
                "2018-04",
                "2018-08",
                "2018-12",
                "2019-04",
                "2019-12",
                "2020-04",
                "2020-08",
                "2020-12",
              ],
              datasets: [
                {
                  label: "Series 1",
                  data: [
                    300000000, 600000000, 900000000, 800000000, 500000000,
                    400000000, 100000000, 200000000, 500000000, 400000000,
                    240000000, 400000000,
                  ],
                  borderColor: "rgba(97, 22, 45, 1)",
                  backgroundColor: "rgba(97, 22, 45, 0.1)",
                  borderWidth: 2,
                },
                {
                  label: "Series 2", // Name the series
                  data: [
                    500000000, 800000000, 600000000, 700000000, 600000000,
                    800000000, 200000000, 400000000, 600000000, 700000000,
                    340000000, 300000000,
                  ],
                  borderColor: "rgba(181, 163, 106, 1)",
                  backgroundColor: "rgba(181, 163, 106, 0.1)",
                  borderWidth: 2,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          },
          {
            id: "city-presidio-chart-imports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "33460",
                      description:
                        "Petroleum oils and oils obtained from bituminous minerals (other than crude) and preparations n.e.s., containing by weight 70 % or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations, other than waste oils ",
                      value: 1900074770,
                    },
                    {
                      title: "34320",
                      description: " Natural gas, in the gaseous state ",
                      value: 605941408,
                    },
                    {
                      title: "77642",
                      description:
                        " Processors and controllers, whether or not combined with memories, converters, logic circuits, amplifiers, clock and timing circuits, or other circuits ",
                      value: 426794290,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 228291500,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752",
                      value: 224680384,
                    },
                    {
                      title: "82119",
                      description: "Parts of the seats of subgroup 821.1",
                      value: 123281865,
                    },
                    {
                      title: "77282",
                      value: 84177056,
                      description:
                        "Parts suitable for use solely or principally with the apparatus falling within subgroups 772.4, 772.5 and 772.6 - Other parts",
                    },
                    {
                      title: "59899",
                      value: 81052518,
                      description: "Other chemical products and preparations ",
                    },
                    {
                      title: "57431",
                      value: 79260529,
                      description: " Polycarbonates ",
                    },
                    {
                      title: "69969",
                      description: " Articles of iron or steel, n.e.s. ",
                      value: 77659190,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "white",
                  backgroundColor: [
                    "rgba(97, 22, 45, 1)",
                    "rgba(97, 22, 45, 0.95)",
                    "rgba(97, 22, 45, 0.80)",
                    "rgba(97, 22, 45, 0.75)",
                    "rgba(97, 22, 45, 0.65)",
                    "rgba(97, 22, 45, 0.64)",
                    "rgba(97, 22, 45, 0.63)",
                    "rgba(97, 22, 45, 0.62)",
                    "rgba(97, 22, 45, 0.61)",
                    "rgba(97, 22, 45, 0.60)",
                  ],
                  borderColor: "#61162d",
                  hoverBackgroundColor: "#61162d",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Imports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
          {
            id: "city-presidio-chart-exports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "89846",
                      description: " Semiconductor media ",
                      value: 906103444,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 767551658,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752 ",
                      value: 605486328,
                    },
                    {
                      title: "71899",
                      description:
                        " Parts of the engines and motors of headings 714.49, 718.91, 718.92 and 718.93 ",
                      value: 575712968,
                    },
                    {
                      title: "82119",
                      description: " Parts of the seats of subgroup 821.1 ",
                      value: 379578842,
                    },
                    {
                      title: "78432",
                      description:
                        " Other parts and accessories of bodies (including cabs) ",
                      value: 245192070,
                    },
                    {
                      title: "71652",
                      value: 245192070,
                      description: " Other generating sets ",
                    },
                    {
                      title: "93100",
                      value: 198626123,
                      description:
                        " Special transactions and commodities not classified according to kind ",
                    },
                    {
                      title: "71690",
                      value: 177398821,
                      description:
                        " Parts, n.e.s., suitable for use solely or principally with the machines falling within group 716 ",
                    },
                    {
                      title: "77121",
                      description: "Static converters (e.g., rectifiers) ",
                      value: 171717181,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "black",
                  backgroundColor: [
                    "rgba(181, 163, 106, 1)",
                    "rgba(181, 163, 106, 0.95)",
                    "rgba(181, 163, 106, 0.85)",
                    "rgba(181, 163, 106, 0.75)",
                    "rgba(181, 163, 106, 0.65)",
                    "rgba(181, 163, 106, 0.64)",
                    "rgba(181, 163, 106, 0.63)",
                    "rgba(181, 163, 106, 0.62)",
                    "rgba(181, 163, 106, 0.61)",
                    "rgba(181, 163, 106, 0.60)",
                  ],
                  borderColor: "#b5a36a",
                  hoverBackgroundColor: "#b5a36a",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Exports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
        ],
      },
      {
        id: "city-texas-fabens",
        name: "Fabens",
        graphs: [
          {
            id: "city-fabens-chart-comertial-truck-crossings",
            type: "line",
            data: {
              labels: [
                "2017-04",
                "2017-06",
                "2017-08",
                "2017-12",
                "2018-04",
                "2018-08",
                "2018-12",
                "2019-04",
                "2019-12",
                "2020-04",
                "2020-08",
                "2020-12",
              ],
              datasets: [
                {
                  label: "Series 1",
                  data: [
                    300000000, 600000000, 900000000, 800000000, 500000000,
                    400000000, 100000000, 200000000, 500000000, 400000000,
                    240000000, 400000000,
                  ],
                  borderColor: "rgba(97, 22, 45, 1)",
                  backgroundColor: "rgba(97, 22, 45, 0.1)",
                  borderWidth: 2,
                },
                {
                  label: "Series 2", // Name the series
                  data: [
                    500000000, 800000000, 600000000, 700000000, 600000000,
                    800000000, 200000000, 400000000, 600000000, 700000000,
                    340000000, 300000000,
                  ],
                  borderColor: "rgba(181, 163, 106, 1)",
                  backgroundColor: "rgba(181, 163, 106, 0.1)",
                  borderWidth: 2,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          },
          {
            id: "city-fabens-chart-imports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "33460",
                      description:
                        "Petroleum oils and oils obtained from bituminous minerals (other than crude) and preparations n.e.s., containing by weight 70 % or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations, other than waste oils ",
                      value: 1900074770,
                    },
                    {
                      title: "34320",
                      description: " Natural gas, in the gaseous state ",
                      value: 605941408,
                    },
                    {
                      title: "77642",
                      description:
                        " Processors and controllers, whether or not combined with memories, converters, logic circuits, amplifiers, clock and timing circuits, or other circuits ",
                      value: 426794290,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 228291500,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752",
                      value: 224680384,
                    },
                    {
                      title: "82119",
                      description: "Parts of the seats of subgroup 821.1",
                      value: 123281865,
                    },
                    {
                      title: "77282",
                      value: 84177056,
                      description:
                        "Parts suitable for use solely or principally with the apparatus falling within subgroups 772.4, 772.5 and 772.6 - Other parts",
                    },
                    {
                      title: "59899",
                      value: 81052518,
                      description: "Other chemical products and preparations ",
                    },
                    {
                      title: "57431",
                      value: 79260529,
                      description: " Polycarbonates ",
                    },
                    {
                      title: "69969",
                      description: " Articles of iron or steel, n.e.s. ",
                      value: 77659190,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "white",
                  backgroundColor: [
                    "rgba(97, 22, 45, 1)",
                    "rgba(97, 22, 45, 0.95)",
                    "rgba(97, 22, 45, 0.80)",
                    "rgba(97, 22, 45, 0.75)",
                    "rgba(97, 22, 45, 0.65)",
                    "rgba(97, 22, 45, 0.64)",
                    "rgba(97, 22, 45, 0.63)",
                    "rgba(97, 22, 45, 0.62)",
                    "rgba(97, 22, 45, 0.61)",
                    "rgba(97, 22, 45, 0.60)",
                  ],
                  borderColor: "#61162d",
                  hoverBackgroundColor: "#61162d",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Imports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
          {
            id: "city-fabens-chart-exports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "89846",
                      description: " Semiconductor media ",
                      value: 906103444,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 767551658,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752 ",
                      value: 605486328,
                    },
                    {
                      title: "71899",
                      description:
                        " Parts of the engines and motors of headings 714.49, 718.91, 718.92 and 718.93 ",
                      value: 575712968,
                    },
                    {
                      title: "82119",
                      description: " Parts of the seats of subgroup 821.1 ",
                      value: 379578842,
                    },
                    {
                      title: "78432",
                      description:
                        " Other parts and accessories of bodies (including cabs) ",
                      value: 245192070,
                    },
                    {
                      title: "71652",
                      value: 245192070,
                      description: " Other generating sets ",
                    },
                    {
                      title: "93100",
                      value: 198626123,
                      description:
                        " Special transactions and commodities not classified according to kind ",
                    },
                    {
                      title: "71690",
                      value: 177398821,
                      description:
                        " Parts, n.e.s., suitable for use solely or principally with the machines falling within group 716 ",
                    },
                    {
                      title: "77121",
                      description: "Static converters (e.g., rectifiers) ",
                      value: 171717181,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "black",
                  backgroundColor: [
                    "rgba(181, 163, 106, 1)",
                    "rgba(181, 163, 106, 0.95)",
                    "rgba(181, 163, 106, 0.85)",
                    "rgba(181, 163, 106, 0.75)",
                    "rgba(181, 163, 106, 0.65)",
                    "rgba(181, 163, 106, 0.64)",
                    "rgba(181, 163, 106, 0.63)",
                    "rgba(181, 163, 106, 0.62)",
                    "rgba(181, 163, 106, 0.61)",
                    "rgba(181, 163, 106, 0.60)",
                  ],
                  borderColor: "#b5a36a",
                  hoverBackgroundColor: "#b5a36a",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Exports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
        ],
      },
    ],
  },
  {
    id: "section-new-mexico",
    name: "New Mexico",
    cards: [
      {
        id: "city-new-mexico-cards",
        title: "Exports 2020",
        subtitle: "9.94 Billon USD",
        icon: "",
        footer: "-29.65%",
      },
      {
        id: "city-new-mexico-cards",
        title: "Imports 2020",
        subtitle: "14.94 Billon USD",
        icon: "",
        footer: "-29.65%",
      },
      {
        id: "city-new-mexico-cards",
        title: "Total Trade 2020",
        subtitle: "24.94 Billon USD",
        icon: "",
        footer: "-29.65%",
      },
    ],
    cities: [
      {
        id: "city-new-mexico-columbus",
        name: "Columbus",
        graphs: [
          {
            id: "city-columbus-chart-comertial-truck-crossings",
            type: "line",
            data: {
              labels: [
                "2017-04",
                "2017-06",
                "2017-08",
                "2017-12",
                "2018-04",
                "2018-08",
                "2018-12",
                "2019-04",
                "2019-12",
                "2020-04",
                "2020-08",
                "2020-12",
              ],
              datasets: [
                {
                  label: "Series 1",
                  data: [
                    300000000, 600000000, 900000000, 800000000, 500000000,
                    400000000, 100000000, 200000000, 500000000, 400000000,
                    240000000, 400000000,
                  ],
                  borderColor: "rgba(97, 22, 45, 1)",
                  backgroundColor: "rgba(97, 22, 45, 0.1)",
                  borderWidth: 2,
                },
                {
                  label: "Series 2", // Name the series
                  data: [
                    500000000, 800000000, 600000000, 700000000, 600000000,
                    800000000, 200000000, 400000000, 600000000, 700000000,
                    340000000, 300000000,
                  ],
                  borderColor: "rgba(181, 163, 106, 1)",
                  backgroundColor: "rgba(181, 163, 106, 0.1)",
                  borderWidth: 2,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          },
          {
            id: "city-columbus-chart-imports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "33460",
                      description:
                        "Petroleum oils and oils obtained from bituminous minerals (other than crude) and preparations n.e.s., containing by weight 70 % or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations, other than waste oils ",
                      value: 1900074770,
                    },
                    {
                      title: "34320",
                      description: " Natural gas, in the gaseous state ",
                      value: 605941408,
                    },
                    {
                      title: "77642",
                      description:
                        " Processors and controllers, whether or not combined with memories, converters, logic circuits, amplifiers, clock and timing circuits, or other circuits ",
                      value: 426794290,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 228291500,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752",
                      value: 224680384,
                    },
                    {
                      title: "82119",
                      description: "Parts of the seats of subgroup 821.1",
                      value: 123281865,
                    },
                    {
                      title: "77282",
                      value: 84177056,
                      description:
                        "Parts suitable for use solely or principally with the apparatus falling within subgroups 772.4, 772.5 and 772.6 - Other parts",
                    },
                    {
                      title: "59899",
                      value: 81052518,
                      description: "Other chemical products and preparations ",
                    },
                    {
                      title: "57431",
                      value: 79260529,
                      description: " Polycarbonates ",
                    },
                    {
                      title: "69969",
                      description: " Articles of iron or steel, n.e.s. ",
                      value: 77659190,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "white",
                  backgroundColor: [
                    "rgba(97, 22, 45, 1)",
                    "rgba(97, 22, 45, 0.95)",
                    "rgba(97, 22, 45, 0.80)",
                    "rgba(97, 22, 45, 0.75)",
                    "rgba(97, 22, 45, 0.65)",
                    "rgba(97, 22, 45, 0.64)",
                    "rgba(97, 22, 45, 0.63)",
                    "rgba(97, 22, 45, 0.62)",
                    "rgba(97, 22, 45, 0.61)",
                    "rgba(97, 22, 45, 0.60)",
                  ],
                  borderColor: "#61162d",
                  hoverBackgroundColor: "#61162d",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Imports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
          {
            id: "city-columbus-chart-exports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "89846",
                      description: " Semiconductor media ",
                      value: 906103444,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 767551658,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752 ",
                      value: 605486328,
                    },
                    {
                      title: "71899",
                      description:
                        " Parts of the engines and motors of headings 714.49, 718.91, 718.92 and 718.93 ",
                      value: 575712968,
                    },
                    {
                      title: "82119",
                      description: " Parts of the seats of subgroup 821.1 ",
                      value: 379578842,
                    },
                    {
                      title: "78432",
                      description:
                        " Other parts and accessories of bodies (including cabs) ",
                      value: 245192070,
                    },
                    {
                      title: "71652",
                      value: 245192070,
                      description: " Other generating sets ",
                    },
                    {
                      title: "93100",
                      value: 198626123,
                      description:
                        " Special transactions and commodities not classified according to kind ",
                    },
                    {
                      title: "71690",
                      value: 177398821,
                      description:
                        " Parts, n.e.s., suitable for use solely or principally with the machines falling within group 716 ",
                    },
                    {
                      title: "77121",
                      description: "Static converters (e.g., rectifiers) ",
                      value: 171717181,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "black",
                  backgroundColor: [
                    "rgba(181, 163, 106, 1)",
                    "rgba(181, 163, 106, 0.95)",
                    "rgba(181, 163, 106, 0.85)",
                    "rgba(181, 163, 106, 0.75)",
                    "rgba(181, 163, 106, 0.65)",
                    "rgba(181, 163, 106, 0.64)",
                    "rgba(181, 163, 106, 0.63)",
                    "rgba(181, 163, 106, 0.62)",
                    "rgba(181, 163, 106, 0.61)",
                    "rgba(181, 163, 106, 0.60)",
                  ],
                  borderColor: "#b5a36a",
                  hoverBackgroundColor: "#b5a36a",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Exports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
        ],
      },
      {
        id: "city-new-mexico-albuquerque",
        name: "Aburquerque",
        graphs: [
          {
            id: "city-albuquerque-chart-comertial-truck-crossings",
            type: "line",
            data: {
              labels: [
                "2017-04",
                "2017-06",
                "2017-08",
                "2017-12",
                "2018-04",
                "2018-08",
                "2018-12",
                "2019-04",
                "2019-12",
                "2020-04",
                "2020-08",
                "2020-12",
              ],
              datasets: [
                {
                  label: "Series 1",
                  data: [
                    300000000, 600000000, 900000000, 800000000, 500000000,
                    400000000, 100000000, 200000000, 500000000, 400000000,
                    240000000, 400000000,
                  ],
                  borderColor: "rgba(97, 22, 45, 1)",
                  backgroundColor: "rgba(97, 22, 45, 0.1)",
                  borderWidth: 2,
                },
                {
                  label: "Series 2", // Name the series
                  data: [
                    500000000, 800000000, 600000000, 700000000, 600000000,
                    800000000, 200000000, 400000000, 600000000, 700000000,
                    340000000, 300000000,
                  ],
                  borderColor: "rgba(181, 163, 106, 1)",
                  backgroundColor: "rgba(181, 163, 106, 0.1)",
                  borderWidth: 2,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          },
          // {
          //   id: "city-aburquerque-chart-imports",
          //   type: "treemap",
          //   data: {
          //     datasets: [
          //       {
          //         tree: [
          //           {
          //             title: "33460",
          //             description:
          //               "Petroleum oils and oils obtained from bituminous minerals (other than crude) and preparations n.e.s., containing by weight 70 % or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations, other than waste oils ",
          //             value: 1900074770,
          //           },
          //           {
          //             title: "34320",
          //             description: " Natural gas, in the gaseous state ",
          //             value: 605941408,
          //           },
          //           {
          //             title: "77642",
          //             description:
          //               " Processors and controllers, whether or not combined with memories, converters, logic circuits, amplifiers, clock and timing circuits, or other circuits ",
          //             value: 426794290,
          //           },
          //           {
          //             title: "78439",
          //             description: " Other parts and accessories ",
          //             value: 228291500,
          //           },
          //           {
          //             title: "75997",
          //             description:
          //               "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752",
          //             value: 224680384,
          //           },
          //           {
          //             title: "82119",
          //             description: "Parts of the seats of subgroup 821.1",
          //             value: 123281865,
          //           },
          //           {
          //             title: "77282",
          //             value: 84177056,
          //             description:
          //               "Parts suitable for use solely or principally with the apparatus falling within subgroups 772.4, 772.5 and 772.6 - Other parts",
          //           },
          //           {
          //             title: "59899",
          //             value: 81052518,
          //             description: "Other chemical products and preparations ",
          //           },
          //           {
          //             title: "57431",
          //             value: 79260529,
          //             description: " Polycarbonates ",
          //           },
          //           {
          //             title: "69969",
          //             description: " Articles of iron or steel, n.e.s. ",
          //             value: 77659190,
          //           },
          //         ],

          //         key: "value",
          //         groups: ["title"],
          //         spacing: -0.5,
          //         borderWidth: 0.5,
          //         fontColor: "white",
          //         backgroundColor: [
          //           "rgba(97, 22, 45, 1)",
          //           "rgba(97, 22, 45, 0.95)",
          //           "rgba(97, 22, 45, 0.80)",
          //           "rgba(97, 22, 45, 0.75)",
          //           "rgba(97, 22, 45, 0.65)",
          //           "rgba(97, 22, 45, 0.64)",
          //           "rgba(97, 22, 45, 0.63)",
          //           "rgba(97, 22, 45, 0.62)",
          //           "rgba(97, 22, 45, 0.61)",
          //           "rgba(97, 22, 45, 0.60)",
          //         ],
          //         borderColor: "#61162d",
          //         hoverBackgroundColor: "#61162d",
          //       },
          //     ],
          //   },
          //   options: {
          //     maintainAspectRatio: false,
          //     title: {
          //       display: true,
          //       text: "2020 Brownsville POE Top US-MX Imports (USD) Jan-Dec",
          //     },
          //     legend: {
          //       display: false,
          //     },
          //     tooltips: {
          //       backgroundColor: "#FFF",
          //       titleFontSize: 16,
          //       titleFontColor: "#0066ff",
          //       bodyFontColor: "#000",
          //       bodyFontSize: 16,
          //       displayColors: false,
          //       callbacks: callbackTitleLabel,
          //     },
          //   },
          // },
          // {
          //   id: "city-aburquerque-chart-exports",
          //   type: "treemap",
          //   data: {
          //     datasets: [
          //       {
          //         tree: [
          //           {
          //             title: "89846",
          //             description: " Semiconductor media ",
          //             value: 906103444,
          //           },
          //           {
          //             title: "78439",
          //             description: " Other parts and accessories ",
          //             value: 767551658,
          //           },
          //           {
          //             title: "75997",
          //             description:
          //               "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752 ",
          //             value: 605486328,
          //           },
          //           {
          //             title: "71899",
          //             description:
          //               " Parts of the engines and motors of headings 714.49, 718.91, 718.92 and 718.93 ",
          //             value: 575712968,
          //           },
          //           {
          //             title: "82119",
          //             description: " Parts of the seats of subgroup 821.1 ",
          //             value: 379578842,
          //           },
          //           {
          //             title: "78432",
          //             description:
          //               " Other parts and accessories of bodies (including cabs) ",
          //             value: 245192070,
          //           },
          //           {
          //             title: "71652",
          //             value: 245192070,
          //             description: " Other generating sets ",
          //           },
          //           {
          //             title: "93100",
          //             value: 198626123,
          //             description:
          //               " Special transactions and commodities not classified according to kind ",
          //           },
          //           {
          //             title: "71690",
          //             value: 177398821,
          //             description:
          //               " Parts, n.e.s., suitable for use solely or principally with the machines falling within group 716 ",
          //           },
          //           {
          //             title: "77121",
          //             description: "Static converters (e.g., rectifiers) ",
          //             value: 171717181,
          //           },
          //         ],

          //         key: "value",
          //         groups: ["title"],
          //         spacing: -0.5,
          //         borderWidth: 0.5,
          //         fontColor: "black",
          //         backgroundColor: [
          //           "rgba(181, 163, 106, 1)",
          //           "rgba(181, 163, 106, 0.95)",
          //           "rgba(181, 163, 106, 0.85)",
          //           "rgba(181, 163, 106, 0.75)",
          //           "rgba(181, 163, 106, 0.65)",
          //           "rgba(181, 163, 106, 0.64)",
          //           "rgba(181, 163, 106, 0.63)",
          //           "rgba(181, 163, 106, 0.62)",
          //           "rgba(181, 163, 106, 0.61)",
          //           "rgba(181, 163, 106, 0.60)",
          //         ],
          //         borderColor: "#b5a36a",
          //         hoverBackgroundColor: "#b5a36a",
          //       },
          //     ],
          //   },
          //   options: {
          //     maintainAspectRatio: false,
          //     title: {
          //       display: true,
          //       text: "2020 Brownsville POE Top US-MX Exports (USD) Jan-Dec",
          //     },
          //     legend: {
          //       display: false,
          //     },
          //     tooltips: {
          //       backgroundColor: "#FFF",
          //       titleFontSize: 16,
          //       titleFontColor: "#0066ff",
          //       bodyFontColor: "#000",
          //       bodyFontSize: 16,
          //       displayColors: false,
          //       callbacks: callbackTitleLabel,
          //     },
          //   },
          // },
        ],
      },
      {
        id: "city-new-mexico-santa-teresa",
        name: "Santa Teresa",
        graphs: [
          {
            id: "city-santa-teresa-chart-comertial-truck-crossings",
            type: "line",
            data: {
              labels: [
                "2017-04",
                "2017-06",
                "2017-08",
                "2017-12",
                "2018-04",
                "2018-08",
                "2018-12",
                "2019-04",
                "2019-12",
                "2020-04",
                "2020-08",
                "2020-12",
              ],
              datasets: [
                {
                  label: "Series 1",
                  data: [
                    300000000, 600000000, 900000000, 800000000, 500000000,
                    400000000, 100000000, 200000000, 500000000, 400000000,
                    240000000, 400000000,
                  ],
                  borderColor: "rgba(97, 22, 45, 1)",
                  backgroundColor: "rgba(97, 22, 45, 0.1)",
                  borderWidth: 2,
                },
                {
                  label: "Series 2", // Name the series
                  data: [
                    500000000, 800000000, 600000000, 700000000, 600000000,
                    800000000, 200000000, 400000000, 600000000, 700000000,
                    340000000, 300000000,
                  ],
                  borderColor: "rgba(181, 163, 106, 1)",
                  backgroundColor: "rgba(181, 163, 106, 0.1)",
                  borderWidth: 2,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          },
          {
            id: "city-santa-teresa-chart-imports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "33460",
                      description:
                        "Petroleum oils and oils obtained from bituminous minerals (other than crude) and preparations n.e.s., containing by weight 70 % or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations, other than waste oils ",
                      value: 1900074770,
                    },
                    {
                      title: "34320",
                      description: " Natural gas, in the gaseous state ",
                      value: 605941408,
                    },
                    {
                      title: "77642",
                      description:
                        " Processors and controllers, whether or not combined with memories, converters, logic circuits, amplifiers, clock and timing circuits, or other circuits ",
                      value: 426794290,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 228291500,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752",
                      value: 224680384,
                    },
                    {
                      title: "82119",
                      description: "Parts of the seats of subgroup 821.1",
                      value: 123281865,
                    },
                    {
                      title: "77282",
                      value: 84177056,
                      description:
                        "Parts suitable for use solely or principally with the apparatus falling within subgroups 772.4, 772.5 and 772.6 - Other parts",
                    },
                    {
                      title: "59899",
                      value: 81052518,
                      description: "Other chemical products and preparations ",
                    },
                    {
                      title: "57431",
                      value: 79260529,
                      description: " Polycarbonates ",
                    },
                    {
                      title: "69969",
                      description: " Articles of iron or steel, n.e.s. ",
                      value: 77659190,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "white",
                  backgroundColor: [
                    "rgba(97, 22, 45, 1)",
                    "rgba(97, 22, 45, 0.95)",
                    "rgba(97, 22, 45, 0.80)",
                    "rgba(97, 22, 45, 0.75)",
                    "rgba(97, 22, 45, 0.65)",
                    "rgba(97, 22, 45, 0.64)",
                    "rgba(97, 22, 45, 0.63)",
                    "rgba(97, 22, 45, 0.62)",
                    "rgba(97, 22, 45, 0.61)",
                    "rgba(97, 22, 45, 0.60)",
                  ],
                  borderColor: "#61162d",
                  hoverBackgroundColor: "#61162d",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Imports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
          {
            id: "city-santa-teresa-chart-exports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "89846",
                      description: " Semiconductor media ",
                      value: 906103444,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 767551658,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752 ",
                      value: 605486328,
                    },
                    {
                      title: "71899",
                      description:
                        " Parts of the engines and motors of headings 714.49, 718.91, 718.92 and 718.93 ",
                      value: 575712968,
                    },
                    {
                      title: "82119",
                      description: " Parts of the seats of subgroup 821.1 ",
                      value: 379578842,
                    },
                    {
                      title: "78432",
                      description:
                        " Other parts and accessories of bodies (including cabs) ",
                      value: 245192070,
                    },
                    {
                      title: "71652",
                      value: 245192070,
                      description: " Other generating sets ",
                    },
                    {
                      title: "93100",
                      value: 198626123,
                      description:
                        " Special transactions and commodities not classified according to kind ",
                    },
                    {
                      title: "71690",
                      value: 177398821,
                      description:
                        " Parts, n.e.s., suitable for use solely or principally with the machines falling within group 716 ",
                    },
                    {
                      title: "77121",
                      description: "Static converters (e.g., rectifiers) ",
                      value: 171717181,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "black",
                  backgroundColor: [
                    "rgba(181, 163, 106, 1)",
                    "rgba(181, 163, 106, 0.95)",
                    "rgba(181, 163, 106, 0.85)",
                    "rgba(181, 163, 106, 0.75)",
                    "rgba(181, 163, 106, 0.65)",
                    "rgba(181, 163, 106, 0.64)",
                    "rgba(181, 163, 106, 0.63)",
                    "rgba(181, 163, 106, 0.62)",
                    "rgba(181, 163, 106, 0.61)",
                    "rgba(181, 163, 106, 0.60)",
                  ],
                  borderColor: "#b5a36a",
                  hoverBackgroundColor: "#b5a36a",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Exports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
        ],
      },
      {
        id: "city-new-mexico-santa-teresa-airport",
        name: "Santa Teresa Airport",
        graphs: [
          {
            id: "city-santa-teresa-airport-chart-comertial-truck-crossings",
            type: "line",
            data: {
              labels: [
                "2017-04",
                "2017-06",
                "2017-08",
                "2017-12",
                "2018-04",
                "2018-08",
                "2018-12",
                "2019-04",
                "2019-12",
                "2020-04",
                "2020-08",
                "2020-12",
              ],
              datasets: [
                {
                  label: "Series 1",
                  data: [
                    300000000, 600000000, 900000000, 800000000, 500000000,
                    400000000, 100000000, 200000000, 500000000, 400000000,
                    240000000, 400000000,
                  ],
                  borderColor: "rgba(97, 22, 45, 1)",
                  backgroundColor: "rgba(97, 22, 45, 0.1)",
                  borderWidth: 2,
                },
                {
                  label: "Series 2", // Name the series
                  data: [
                    500000000, 800000000, 600000000, 700000000, 600000000,
                    800000000, 200000000, 400000000, 600000000, 700000000,
                    340000000, 300000000,
                  ],
                  borderColor: "rgba(181, 163, 106, 1)",
                  backgroundColor: "rgba(181, 163, 106, 0.1)",
                  borderWidth: 2,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          },
          {
            id: "city-santa-teresa-airport-chart-imports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "33460",
                      description:
                        "Petroleum oils and oils obtained from bituminous minerals (other than crude) and preparations n.e.s., containing by weight 70 % or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations, other than waste oils ",
                      value: 1900074770,
                    },
                    {
                      title: "34320",
                      description: " Natural gas, in the gaseous state ",
                      value: 605941408,
                    },
                    {
                      title: "77642",
                      description:
                        " Processors and controllers, whether or not combined with memories, converters, logic circuits, amplifiers, clock and timing circuits, or other circuits ",
                      value: 426794290,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 228291500,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752",
                      value: 224680384,
                    },
                    {
                      title: "82119",
                      description: "Parts of the seats of subgroup 821.1",
                      value: 123281865,
                    },
                    {
                      title: "77282",
                      value: 84177056,
                      description:
                        "Parts suitable for use solely or principally with the apparatus falling within subgroups 772.4, 772.5 and 772.6 - Other parts",
                    },
                    {
                      title: "59899",
                      value: 81052518,
                      description: "Other chemical products and preparations ",
                    },
                    {
                      title: "57431",
                      value: 79260529,
                      description: " Polycarbonates ",
                    },
                    {
                      title: "69969",
                      description: " Articles of iron or steel, n.e.s. ",
                      value: 77659190,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "white",
                  backgroundColor: [
                    "rgba(97, 22, 45, 1)",
                    "rgba(97, 22, 45, 0.95)",
                    "rgba(97, 22, 45, 0.80)",
                    "rgba(97, 22, 45, 0.75)",
                    "rgba(97, 22, 45, 0.65)",
                    "rgba(97, 22, 45, 0.64)",
                    "rgba(97, 22, 45, 0.63)",
                    "rgba(97, 22, 45, 0.62)",
                    "rgba(97, 22, 45, 0.61)",
                    "rgba(97, 22, 45, 0.60)",
                  ],
                  borderColor: "#61162d",
                  hoverBackgroundColor: "#61162d",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Imports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
          {
            id: "city-santa-teresa-airport-chart-exports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "89846",
                      description: " Semiconductor media ",
                      value: 906103444,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 767551658,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752 ",
                      value: 605486328,
                    },
                    {
                      title: "71899",
                      description:
                        " Parts of the engines and motors of headings 714.49, 718.91, 718.92 and 718.93 ",
                      value: 575712968,
                    },
                    {
                      title: "82119",
                      description: " Parts of the seats of subgroup 821.1 ",
                      value: 379578842,
                    },
                    {
                      title: "78432",
                      description:
                        " Other parts and accessories of bodies (including cabs) ",
                      value: 245192070,
                    },
                    {
                      title: "71652",
                      value: 245192070,
                      description: " Other generating sets ",
                    },
                    {
                      title: "93100",
                      value: 198626123,
                      description:
                        " Special transactions and commodities not classified according to kind ",
                    },
                    {
                      title: "71690",
                      value: 177398821,
                      description:
                        " Parts, n.e.s., suitable for use solely or principally with the machines falling within group 716 ",
                    },
                    {
                      title: "77121",
                      description: "Static converters (e.g., rectifiers) ",
                      value: 171717181,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "black",
                  backgroundColor: [
                    "rgba(181, 163, 106, 1)",
                    "rgba(181, 163, 106, 0.95)",
                    "rgba(181, 163, 106, 0.85)",
                    "rgba(181, 163, 106, 0.75)",
                    "rgba(181, 163, 106, 0.65)",
                    "rgba(181, 163, 106, 0.64)",
                    "rgba(181, 163, 106, 0.63)",
                    "rgba(181, 163, 106, 0.62)",
                    "rgba(181, 163, 106, 0.61)",
                    "rgba(181, 163, 106, 0.60)",
                  ],
                  borderColor: "#b5a36a",
                  hoverBackgroundColor: "#b5a36a",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Exports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
        ],
      },
    ],
  },
  {
    id: "section-arizona",
    name: "Arizona",
    cards: [
      {
        id: "city-arizona-cards",
        title: "Exports 2020",
        subtitle: "9.94 Billon USD",
        icon: "",
        footer: "-29.65%",
      },
      {
        id: "city-arizona-cards",
        title: "Imports 2020",
        subtitle: "14.94 Billon USD",
        icon: "",
        footer: "-29.65%",
      },
      {
        id: "city-arizona-cards",
        title: "Total Trade 2020",
        subtitle: "24.94 Billon USD",
        icon: "",
        footer: "-29.65%",
      },
    ],
    cities: [
      {
        id: "city-arizona-douglas",
        name: "Douglas",
        graphs: [
          {
            id: "city-douglas-chart-comertial-truck-crossings",
            type: "line",
            data: {
              labels: [
                "2017-04",
                "2017-06",
                "2017-08",
                "2017-12",
                "2018-04",
                "2018-08",
                "2018-12",
                "2019-04",
                "2019-12",
                "2020-04",
                "2020-08",
                "2020-12",
              ],
              datasets: [
                {
                  label: "Series 1",
                  data: [
                    300000000, 600000000, 900000000, 800000000, 500000000,
                    400000000, 100000000, 200000000, 500000000, 400000000,
                    240000000, 400000000,
                  ],
                  borderColor: "rgba(97, 22, 45, 1)",
                  backgroundColor: "rgba(97, 22, 45, 0.1)",
                  borderWidth: 2,
                },
                {
                  label: "Series 2", // Name the series
                  data: [
                    500000000, 800000000, 600000000, 700000000, 600000000,
                    800000000, 200000000, 400000000, 600000000, 700000000,
                    340000000, 300000000,
                  ],
                  borderColor: "rgba(181, 163, 106, 1)",
                  backgroundColor: "rgba(181, 163, 106, 0.1)",
                  borderWidth: 2,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          },
          {
            id: "city-douglas-chart-imports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "33460",
                      description:
                        "Petroleum oils and oils obtained from bituminous minerals (other than crude) and preparations n.e.s., containing by weight 70 % or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations, other than waste oils ",
                      value: 1900074770,
                    },
                    {
                      title: "34320",
                      description: " Natural gas, in the gaseous state ",
                      value: 605941408,
                    },
                    {
                      title: "77642",
                      description:
                        " Processors and controllers, whether or not combined with memories, converters, logic circuits, amplifiers, clock and timing circuits, or other circuits ",
                      value: 426794290,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 228291500,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752",
                      value: 224680384,
                    },
                    {
                      title: "82119",
                      description: "Parts of the seats of subgroup 821.1",
                      value: 123281865,
                    },
                    {
                      title: "77282",
                      value: 84177056,
                      description:
                        "Parts suitable for use solely or principally with the apparatus falling within subgroups 772.4, 772.5 and 772.6 - Other parts",
                    },
                    {
                      title: "59899",
                      value: 81052518,
                      description: "Other chemical products and preparations ",
                    },
                    {
                      title: "57431",
                      value: 79260529,
                      description: " Polycarbonates ",
                    },
                    {
                      title: "69969",
                      description: " Articles of iron or steel, n.e.s. ",
                      value: 77659190,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "white",
                  backgroundColor: [
                    "rgba(97, 22, 45, 1)",
                    "rgba(97, 22, 45, 0.95)",
                    "rgba(97, 22, 45, 0.80)",
                    "rgba(97, 22, 45, 0.75)",
                    "rgba(97, 22, 45, 0.65)",
                    "rgba(97, 22, 45, 0.64)",
                    "rgba(97, 22, 45, 0.63)",
                    "rgba(97, 22, 45, 0.62)",
                    "rgba(97, 22, 45, 0.61)",
                    "rgba(97, 22, 45, 0.60)",
                  ],
                  borderColor: "#61162d",
                  hoverBackgroundColor: "#61162d",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Imports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
          {
            id: "city-douglas-chart-exports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "89846",
                      description: " Semiconductor media ",
                      value: 906103444,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 767551658,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752 ",
                      value: 605486328,
                    },
                    {
                      title: "71899",
                      description:
                        " Parts of the engines and motors of headings 714.49, 718.91, 718.92 and 718.93 ",
                      value: 575712968,
                    },
                    {
                      title: "82119",
                      description: " Parts of the seats of subgroup 821.1 ",
                      value: 379578842,
                    },
                    {
                      title: "78432",
                      description:
                        " Other parts and accessories of bodies (including cabs) ",
                      value: 245192070,
                    },
                    {
                      title: "71652",
                      value: 245192070,
                      description: " Other generating sets ",
                    },
                    {
                      title: "93100",
                      value: 198626123,
                      description:
                        " Special transactions and commodities not classified according to kind ",
                    },
                    {
                      title: "71690",
                      value: 177398821,
                      description:
                        " Parts, n.e.s., suitable for use solely or principally with the machines falling within group 716 ",
                    },
                    {
                      title: "77121",
                      description: "Static converters (e.g., rectifiers) ",
                      value: 171717181,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "black",
                  backgroundColor: [
                    "rgba(181, 163, 106, 1)",
                    "rgba(181, 163, 106, 0.95)",
                    "rgba(181, 163, 106, 0.85)",
                    "rgba(181, 163, 106, 0.75)",
                    "rgba(181, 163, 106, 0.65)",
                    "rgba(181, 163, 106, 0.64)",
                    "rgba(181, 163, 106, 0.63)",
                    "rgba(181, 163, 106, 0.62)",
                    "rgba(181, 163, 106, 0.61)",
                    "rgba(181, 163, 106, 0.60)",
                  ],
                  borderColor: "#b5a36a",
                  hoverBackgroundColor: "#b5a36a",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Exports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
        ],
      },
      {
        id: "city-arizona-lukeville",
        name: "Lukeville",
        graphs: [
          {
            id: "city-lukeville-chart-comertial-truck-crossings",
            type: "line",
            data: {
              labels: [
                "2017-04",
                "2017-06",
                "2017-08",
                "2017-12",
                "2018-04",
                "2018-08",
                "2018-12",
                "2019-04",
                "2019-12",
                "2020-04",
                "2020-08",
                "2020-12",
              ],
              datasets: [
                {
                  label: "Series 1",
                  data: [
                    300000000, 600000000, 900000000, 800000000, 500000000,
                    400000000, 100000000, 200000000, 500000000, 400000000,
                    240000000, 400000000,
                  ],
                  borderColor: "rgba(97, 22, 45, 1)",
                  backgroundColor: "rgba(97, 22, 45, 0.1)",
                  borderWidth: 2,
                },
                {
                  label: "Series 2", // Name the series
                  data: [
                    500000000, 800000000, 600000000, 700000000, 600000000,
                    800000000, 200000000, 400000000, 600000000, 700000000,
                    340000000, 300000000,
                  ],
                  borderColor: "rgba(181, 163, 106, 1)",
                  backgroundColor: "rgba(181, 163, 106, 0.1)",
                  borderWidth: 2,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          },
          {
            id: "city-lukeville-chart-imports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "33460",
                      description:
                        "Petroleum oils and oils obtained from bituminous minerals (other than crude) and preparations n.e.s., containing by weight 70 % or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations, other than waste oils ",
                      value: 1900074770,
                    },
                    {
                      title: "34320",
                      description: " Natural gas, in the gaseous state ",
                      value: 605941408,
                    },
                    {
                      title: "77642",
                      description:
                        " Processors and controllers, whether or not combined with memories, converters, logic circuits, amplifiers, clock and timing circuits, or other circuits ",
                      value: 426794290,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 228291500,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752",
                      value: 224680384,
                    },
                    {
                      title: "82119",
                      description: "Parts of the seats of subgroup 821.1",
                      value: 123281865,
                    },
                    {
                      title: "77282",
                      value: 84177056,
                      description:
                        "Parts suitable for use solely or principally with the apparatus falling within subgroups 772.4, 772.5 and 772.6 - Other parts",
                    },
                    {
                      title: "59899",
                      value: 81052518,
                      description: "Other chemical products and preparations ",
                    },
                    {
                      title: "57431",
                      value: 79260529,
                      description: " Polycarbonates ",
                    },
                    {
                      title: "69969",
                      description: " Articles of iron or steel, n.e.s. ",
                      value: 77659190,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "white",
                  backgroundColor: [
                    "rgba(97, 22, 45, 1)",
                    "rgba(97, 22, 45, 0.95)",
                    "rgba(97, 22, 45, 0.80)",
                    "rgba(97, 22, 45, 0.75)",
                    "rgba(97, 22, 45, 0.65)",
                    "rgba(97, 22, 45, 0.64)",
                    "rgba(97, 22, 45, 0.63)",
                    "rgba(97, 22, 45, 0.62)",
                    "rgba(97, 22, 45, 0.61)",
                    "rgba(97, 22, 45, 0.60)",
                  ],
                  borderColor: "#61162d",
                  hoverBackgroundColor: "#61162d",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Imports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
          {
            id: "city-lukeville-chart-exports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "89846",
                      description: " Semiconductor media ",
                      value: 906103444,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 767551658,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752 ",
                      value: 605486328,
                    },
                    {
                      title: "71899",
                      description:
                        " Parts of the engines and motors of headings 714.49, 718.91, 718.92 and 718.93 ",
                      value: 575712968,
                    },
                    {
                      title: "82119",
                      description: " Parts of the seats of subgroup 821.1 ",
                      value: 379578842,
                    },
                    {
                      title: "78432",
                      description:
                        " Other parts and accessories of bodies (including cabs) ",
                      value: 245192070,
                    },
                    {
                      title: "71652",
                      value: 245192070,
                      description: " Other generating sets ",
                    },
                    {
                      title: "93100",
                      value: 198626123,
                      description:
                        " Special transactions and commodities not classified according to kind ",
                    },
                    {
                      title: "71690",
                      value: 177398821,
                      description:
                        " Parts, n.e.s., suitable for use solely or principally with the machines falling within group 716 ",
                    },
                    {
                      title: "77121",
                      description: "Static converters (e.g., rectifiers) ",
                      value: 171717181,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "black",
                  backgroundColor: [
                    "rgba(181, 163, 106, 1)",
                    "rgba(181, 163, 106, 0.95)",
                    "rgba(181, 163, 106, 0.85)",
                    "rgba(181, 163, 106, 0.75)",
                    "rgba(181, 163, 106, 0.65)",
                    "rgba(181, 163, 106, 0.64)",
                    "rgba(181, 163, 106, 0.63)",
                    "rgba(181, 163, 106, 0.62)",
                    "rgba(181, 163, 106, 0.61)",
                    "rgba(181, 163, 106, 0.60)",
                  ],
                  borderColor: "#b5a36a",
                  hoverBackgroundColor: "#b5a36a",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Exports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
        ],
      },
      {
        id: "city-arizona-naco",
        name: "Naco",
        graphs: [
          {
            id: "city-naco-chart-comertial-truck-crossings",
            type: "line",
            data: {
              labels: [
                "2017-04",
                "2017-06",
                "2017-08",
                "2017-12",
                "2018-04",
                "2018-08",
                "2018-12",
                "2019-04",
                "2019-12",
                "2020-04",
                "2020-08",
                "2020-12",
              ],
              datasets: [
                {
                  label: "Series 1",
                  data: [
                    300000000, 600000000, 900000000, 800000000, 500000000,
                    400000000, 100000000, 200000000, 500000000, 400000000,
                    240000000, 400000000,
                  ],
                  borderColor: "rgba(97, 22, 45, 1)",
                  backgroundColor: "rgba(97, 22, 45, 0.1)",
                  borderWidth: 2,
                },
                {
                  label: "Series 2", // Name the series
                  data: [
                    500000000, 800000000, 600000000, 700000000, 600000000,
                    800000000, 200000000, 400000000, 600000000, 700000000,
                    340000000, 300000000,
                  ],
                  borderColor: "rgba(181, 163, 106, 1)",
                  backgroundColor: "rgba(181, 163, 106, 0.1)",
                  borderWidth: 2,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          },
          {
            id: "city-naco-chart-imports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "33460",
                      description:
                        "Petroleum oils and oils obtained from bituminous minerals (other than crude) and preparations n.e.s., containing by weight 70 % or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations, other than waste oils ",
                      value: 1900074770,
                    },
                    {
                      title: "34320",
                      description: " Natural gas, in the gaseous state ",
                      value: 605941408,
                    },
                    {
                      title: "77642",
                      description:
                        " Processors and controllers, whether or not combined with memories, converters, logic circuits, amplifiers, clock and timing circuits, or other circuits ",
                      value: 426794290,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 228291500,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752",
                      value: 224680384,
                    },
                    {
                      title: "82119",
                      description: "Parts of the seats of subgroup 821.1",
                      value: 123281865,
                    },
                    {
                      title: "77282",
                      value: 84177056,
                      description:
                        "Parts suitable for use solely or principally with the apparatus falling within subgroups 772.4, 772.5 and 772.6 - Other parts",
                    },
                    {
                      title: "59899",
                      value: 81052518,
                      description: "Other chemical products and preparations ",
                    },
                    {
                      title: "57431",
                      value: 79260529,
                      description: " Polycarbonates ",
                    },
                    {
                      title: "69969",
                      description: " Articles of iron or steel, n.e.s. ",
                      value: 77659190,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "white",
                  backgroundColor: [
                    "rgba(97, 22, 45, 1)",
                    "rgba(97, 22, 45, 0.95)",
                    "rgba(97, 22, 45, 0.80)",
                    "rgba(97, 22, 45, 0.75)",
                    "rgba(97, 22, 45, 0.65)",
                    "rgba(97, 22, 45, 0.64)",
                    "rgba(97, 22, 45, 0.63)",
                    "rgba(97, 22, 45, 0.62)",
                    "rgba(97, 22, 45, 0.61)",
                    "rgba(97, 22, 45, 0.60)",
                  ],
                  borderColor: "#61162d",
                  hoverBackgroundColor: "#61162d",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Imports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
          {
            id: "city-naco-chart-exports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "89846",
                      description: " Semiconductor media ",
                      value: 906103444,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 767551658,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752 ",
                      value: 605486328,
                    },
                    {
                      title: "71899",
                      description:
                        " Parts of the engines and motors of headings 714.49, 718.91, 718.92 and 718.93 ",
                      value: 575712968,
                    },
                    {
                      title: "82119",
                      description: " Parts of the seats of subgroup 821.1 ",
                      value: 379578842,
                    },
                    {
                      title: "78432",
                      description:
                        " Other parts and accessories of bodies (including cabs) ",
                      value: 245192070,
                    },
                    {
                      title: "71652",
                      value: 245192070,
                      description: " Other generating sets ",
                    },
                    {
                      title: "93100",
                      value: 198626123,
                      description:
                        " Special transactions and commodities not classified according to kind ",
                    },
                    {
                      title: "71690",
                      value: 177398821,
                      description:
                        " Parts, n.e.s., suitable for use solely or principally with the machines falling within group 716 ",
                    },
                    {
                      title: "77121",
                      description: "Static converters (e.g., rectifiers) ",
                      value: 171717181,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "black",
                  backgroundColor: [
                    "rgba(181, 163, 106, 1)",
                    "rgba(181, 163, 106, 0.95)",
                    "rgba(181, 163, 106, 0.85)",
                    "rgba(181, 163, 106, 0.75)",
                    "rgba(181, 163, 106, 0.65)",
                    "rgba(181, 163, 106, 0.64)",
                    "rgba(181, 163, 106, 0.63)",
                    "rgba(181, 163, 106, 0.62)",
                    "rgba(181, 163, 106, 0.61)",
                    "rgba(181, 163, 106, 0.60)",
                  ],
                  borderColor: "#b5a36a",
                  hoverBackgroundColor: "#b5a36a",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Exports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
        ],
      },
      {
        id: "city-arizona-nogales",
        name: "Nogales",
        graphs: [
          {
            id: "city-nogales-chart-comertial-truck-crossings",
            type: "line",
            data: {
              labels: [
                "2017-04",
                "2017-06",
                "2017-08",
                "2017-12",
                "2018-04",
                "2018-08",
                "2018-12",
                "2019-04",
                "2019-12",
                "2020-04",
                "2020-08",
                "2020-12",
              ],
              datasets: [
                {
                  label: "Series 1",
                  data: [
                    300000000, 600000000, 900000000, 800000000, 500000000,
                    400000000, 100000000, 200000000, 500000000, 400000000,
                    240000000, 400000000,
                  ],
                  borderColor: "rgba(97, 22, 45, 1)",
                  backgroundColor: "rgba(97, 22, 45, 0.1)",
                  borderWidth: 2,
                },
                {
                  label: "Series 2", // Name the series
                  data: [
                    500000000, 800000000, 600000000, 700000000, 600000000,
                    800000000, 200000000, 400000000, 600000000, 700000000,
                    340000000, 300000000,
                  ],
                  borderColor: "rgba(181, 163, 106, 1)",
                  backgroundColor: "rgba(181, 163, 106, 0.1)",
                  borderWidth: 2,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          },
          {
            id: "city-nogales-chart-imports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "33460",
                      description:
                        "Petroleum oils and oils obtained from bituminous minerals (other than crude) and preparations n.e.s., containing by weight 70 % or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations, other than waste oils ",
                      value: 1900074770,
                    },
                    {
                      title: "34320",
                      description: " Natural gas, in the gaseous state ",
                      value: 605941408,
                    },
                    {
                      title: "77642",
                      description:
                        " Processors and controllers, whether or not combined with memories, converters, logic circuits, amplifiers, clock and timing circuits, or other circuits ",
                      value: 426794290,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 228291500,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752",
                      value: 224680384,
                    },
                    {
                      title: "82119",
                      description: "Parts of the seats of subgroup 821.1",
                      value: 123281865,
                    },
                    {
                      title: "77282",
                      value: 84177056,
                      description:
                        "Parts suitable for use solely or principally with the apparatus falling within subgroups 772.4, 772.5 and 772.6 - Other parts",
                    },
                    {
                      title: "59899",
                      value: 81052518,
                      description: "Other chemical products and preparations ",
                    },
                    {
                      title: "57431",
                      value: 79260529,
                      description: " Polycarbonates ",
                    },
                    {
                      title: "69969",
                      description: " Articles of iron or steel, n.e.s. ",
                      value: 77659190,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "white",
                  backgroundColor: [
                    "rgba(97, 22, 45, 1)",
                    "rgba(97, 22, 45, 0.95)",
                    "rgba(97, 22, 45, 0.80)",
                    "rgba(97, 22, 45, 0.75)",
                    "rgba(97, 22, 45, 0.65)",
                    "rgba(97, 22, 45, 0.64)",
                    "rgba(97, 22, 45, 0.63)",
                    "rgba(97, 22, 45, 0.62)",
                    "rgba(97, 22, 45, 0.61)",
                    "rgba(97, 22, 45, 0.60)",
                  ],
                  borderColor: "#61162d",
                  hoverBackgroundColor: "#61162d",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Imports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
          {
            id: "city-nogales-chart-exports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "89846",
                      description: " Semiconductor media ",
                      value: 906103444,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 767551658,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752 ",
                      value: 605486328,
                    },
                    {
                      title: "71899",
                      description:
                        " Parts of the engines and motors of headings 714.49, 718.91, 718.92 and 718.93 ",
                      value: 575712968,
                    },
                    {
                      title: "82119",
                      description: " Parts of the seats of subgroup 821.1 ",
                      value: 379578842,
                    },
                    {
                      title: "78432",
                      description:
                        " Other parts and accessories of bodies (including cabs) ",
                      value: 245192070,
                    },
                    {
                      title: "71652",
                      value: 245192070,
                      description: " Other generating sets ",
                    },
                    {
                      title: "93100",
                      value: 198626123,
                      description:
                        " Special transactions and commodities not classified according to kind ",
                    },
                    {
                      title: "71690",
                      value: 177398821,
                      description:
                        " Parts, n.e.s., suitable for use solely or principally with the machines falling within group 716 ",
                    },
                    {
                      title: "77121",
                      description: "Static converters (e.g., rectifiers) ",
                      value: 171717181,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "black",
                  backgroundColor: [
                    "rgba(181, 163, 106, 1)",
                    "rgba(181, 163, 106, 0.95)",
                    "rgba(181, 163, 106, 0.85)",
                    "rgba(181, 163, 106, 0.75)",
                    "rgba(181, 163, 106, 0.65)",
                    "rgba(181, 163, 106, 0.64)",
                    "rgba(181, 163, 106, 0.63)",
                    "rgba(181, 163, 106, 0.62)",
                    "rgba(181, 163, 106, 0.61)",
                    "rgba(181, 163, 106, 0.60)",
                  ],
                  borderColor: "#b5a36a",
                  hoverBackgroundColor: "#b5a36a",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Exports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
        ],
      },
      {
        id: "city-arizona-phoenix",
        name: "Phoenix",
        graphs: [
          {
            id: "city-phoenix-chart-comertial-truck-crossings",
            type: "line",
            data: {
              labels: [
                "2017-04",
                "2017-06",
                "2017-08",
                "2017-12",
                "2018-04",
                "2018-08",
                "2018-12",
                "2019-04",
                "2019-12",
                "2020-04",
                "2020-08",
                "2020-12",
              ],
              datasets: [
                {
                  label: "Series 1",
                  data: [
                    300000000, 600000000, 900000000, 800000000, 500000000,
                    400000000, 100000000, 200000000, 500000000, 400000000,
                    240000000, 400000000,
                  ],
                  borderColor: "rgba(97, 22, 45, 1)",
                  backgroundColor: "rgba(97, 22, 45, 0.1)",
                  borderWidth: 2,
                },
                {
                  label: "Series 2", // Name the series
                  data: [
                    500000000, 800000000, 600000000, 700000000, 600000000,
                    800000000, 200000000, 400000000, 600000000, 700000000,
                    340000000, 300000000,
                  ],
                  borderColor: "rgba(181, 163, 106, 1)",
                  backgroundColor: "rgba(181, 163, 106, 0.1)",
                  borderWidth: 2,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          },
          {
            id: "city-phoenix-chart-imports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "33460",
                      description:
                        "Petroleum oils and oils obtained from bituminous minerals (other than crude) and preparations n.e.s., containing by weight 70 % or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations, other than waste oils ",
                      value: 1900074770,
                    },
                    {
                      title: "34320",
                      description: " Natural gas, in the gaseous state ",
                      value: 605941408,
                    },
                    {
                      title: "77642",
                      description:
                        " Processors and controllers, whether or not combined with memories, converters, logic circuits, amplifiers, clock and timing circuits, or other circuits ",
                      value: 426794290,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 228291500,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752",
                      value: 224680384,
                    },
                    {
                      title: "82119",
                      description: "Parts of the seats of subgroup 821.1",
                      value: 123281865,
                    },
                    {
                      title: "77282",
                      value: 84177056,
                      description:
                        "Parts suitable for use solely or principally with the apparatus falling within subgroups 772.4, 772.5 and 772.6 - Other parts",
                    },
                    {
                      title: "59899",
                      value: 81052518,
                      description: "Other chemical products and preparations ",
                    },
                    {
                      title: "57431",
                      value: 79260529,
                      description: " Polycarbonates ",
                    },
                    {
                      title: "69969",
                      description: " Articles of iron or steel, n.e.s. ",
                      value: 77659190,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "white",
                  backgroundColor: [
                    "rgba(97, 22, 45, 1)",
                    "rgba(97, 22, 45, 0.95)",
                    "rgba(97, 22, 45, 0.80)",
                    "rgba(97, 22, 45, 0.75)",
                    "rgba(97, 22, 45, 0.65)",
                    "rgba(97, 22, 45, 0.64)",
                    "rgba(97, 22, 45, 0.63)",
                    "rgba(97, 22, 45, 0.62)",
                    "rgba(97, 22, 45, 0.61)",
                    "rgba(97, 22, 45, 0.60)",
                  ],
                  borderColor: "#61162d",
                  hoverBackgroundColor: "#61162d",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Imports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
          {
            id: "city-phoenix-chart-exports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "89846",
                      description: " Semiconductor media ",
                      value: 906103444,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 767551658,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752 ",
                      value: 605486328,
                    },
                    {
                      title: "71899",
                      description:
                        " Parts of the engines and motors of headings 714.49, 718.91, 718.92 and 718.93 ",
                      value: 575712968,
                    },
                    {
                      title: "82119",
                      description: " Parts of the seats of subgroup 821.1 ",
                      value: 379578842,
                    },
                    {
                      title: "78432",
                      description:
                        " Other parts and accessories of bodies (including cabs) ",
                      value: 245192070,
                    },
                    {
                      title: "71652",
                      value: 245192070,
                      description: " Other generating sets ",
                    },
                    {
                      title: "93100",
                      value: 198626123,
                      description:
                        " Special transactions and commodities not classified according to kind ",
                    },
                    {
                      title: "71690",
                      value: 177398821,
                      description:
                        " Parts, n.e.s., suitable for use solely or principally with the machines falling within group 716 ",
                    },
                    {
                      title: "77121",
                      description: "Static converters (e.g., rectifiers) ",
                      value: 171717181,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "black",
                  backgroundColor: [
                    "rgba(181, 163, 106, 1)",
                    "rgba(181, 163, 106, 0.95)",
                    "rgba(181, 163, 106, 0.85)",
                    "rgba(181, 163, 106, 0.75)",
                    "rgba(181, 163, 106, 0.65)",
                    "rgba(181, 163, 106, 0.64)",
                    "rgba(181, 163, 106, 0.63)",
                    "rgba(181, 163, 106, 0.62)",
                    "rgba(181, 163, 106, 0.61)",
                    "rgba(181, 163, 106, 0.60)",
                  ],
                  borderColor: "#b5a36a",
                  hoverBackgroundColor: "#b5a36a",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Exports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
        ],
      },
      {
        id: "city-arizona-san-luis",
        name: "San Luis",
        graphs: [
          {
            id: "city-san-luis-chart-comertial-truck-crossings",
            type: "line",
            data: {
              labels: [
                "2017-04",
                "2017-06",
                "2017-08",
                "2017-12",
                "2018-04",
                "2018-08",
                "2018-12",
                "2019-04",
                "2019-12",
                "2020-04",
                "2020-08",
                "2020-12",
              ],
              datasets: [
                {
                  label: "Series 1",
                  data: [
                    300000000, 600000000, 900000000, 800000000, 500000000,
                    400000000, 100000000, 200000000, 500000000, 400000000,
                    240000000, 400000000,
                  ],
                  borderColor: "rgba(97, 22, 45, 1)",
                  backgroundColor: "rgba(97, 22, 45, 0.1)",
                  borderWidth: 2,
                },
                {
                  label: "Series 2", // Name the series
                  data: [
                    500000000, 800000000, 600000000, 700000000, 600000000,
                    800000000, 200000000, 400000000, 600000000, 700000000,
                    340000000, 300000000,
                  ],
                  borderColor: "rgba(181, 163, 106, 1)",
                  backgroundColor: "rgba(181, 163, 106, 0.1)",
                  borderWidth: 2,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          },
          {
            id: "city-san-luis-chart-imports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "33460",
                      description:
                        "Petroleum oils and oils obtained from bituminous minerals (other than crude) and preparations n.e.s., containing by weight 70 % or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations, other than waste oils ",
                      value: 1900074770,
                    },
                    {
                      title: "34320",
                      description: " Natural gas, in the gaseous state ",
                      value: 605941408,
                    },
                    {
                      title: "77642",
                      description:
                        " Processors and controllers, whether or not combined with memories, converters, logic circuits, amplifiers, clock and timing circuits, or other circuits ",
                      value: 426794290,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 228291500,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752",
                      value: 224680384,
                    },
                    {
                      title: "82119",
                      description: "Parts of the seats of subgroup 821.1",
                      value: 123281865,
                    },
                    {
                      title: "77282",
                      value: 84177056,
                      description:
                        "Parts suitable for use solely or principally with the apparatus falling within subgroups 772.4, 772.5 and 772.6 - Other parts",
                    },
                    {
                      title: "59899",
                      value: 81052518,
                      description: "Other chemical products and preparations ",
                    },
                    {
                      title: "57431",
                      value: 79260529,
                      description: " Polycarbonates ",
                    },
                    {
                      title: "69969",
                      description: " Articles of iron or steel, n.e.s. ",
                      value: 77659190,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "white",
                  backgroundColor: [
                    "rgba(97, 22, 45, 1)",
                    "rgba(97, 22, 45, 0.95)",
                    "rgba(97, 22, 45, 0.80)",
                    "rgba(97, 22, 45, 0.75)",
                    "rgba(97, 22, 45, 0.65)",
                    "rgba(97, 22, 45, 0.64)",
                    "rgba(97, 22, 45, 0.63)",
                    "rgba(97, 22, 45, 0.62)",
                    "rgba(97, 22, 45, 0.61)",
                    "rgba(97, 22, 45, 0.60)",
                  ],
                  borderColor: "#61162d",
                  hoverBackgroundColor: "#61162d",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Imports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
          {
            id: "city-san-luis-chart-exports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "89846",
                      description: " Semiconductor media ",
                      value: 906103444,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 767551658,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752 ",
                      value: 605486328,
                    },
                    {
                      title: "71899",
                      description:
                        " Parts of the engines and motors of headings 714.49, 718.91, 718.92 and 718.93 ",
                      value: 575712968,
                    },
                    {
                      title: "82119",
                      description: " Parts of the seats of subgroup 821.1 ",
                      value: 379578842,
                    },
                    {
                      title: "78432",
                      description:
                        " Other parts and accessories of bodies (including cabs) ",
                      value: 245192070,
                    },
                    {
                      title: "71652",
                      value: 245192070,
                      description: " Other generating sets ",
                    },
                    {
                      title: "93100",
                      value: 198626123,
                      description:
                        " Special transactions and commodities not classified according to kind ",
                    },
                    {
                      title: "71690",
                      value: 177398821,
                      description:
                        " Parts, n.e.s., suitable for use solely or principally with the machines falling within group 716 ",
                    },
                    {
                      title: "77121",
                      description: "Static converters (e.g., rectifiers) ",
                      value: 171717181,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "black",
                  backgroundColor: [
                    "rgba(181, 163, 106, 1)",
                    "rgba(181, 163, 106, 0.95)",
                    "rgba(181, 163, 106, 0.85)",
                    "rgba(181, 163, 106, 0.75)",
                    "rgba(181, 163, 106, 0.65)",
                    "rgba(181, 163, 106, 0.64)",
                    "rgba(181, 163, 106, 0.63)",
                    "rgba(181, 163, 106, 0.62)",
                    "rgba(181, 163, 106, 0.61)",
                    "rgba(181, 163, 106, 0.60)",
                  ],
                  borderColor: "#b5a36a",
                  hoverBackgroundColor: "#b5a36a",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Exports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
        ],
      },
      {
        id: "city-arizona-sasabe",
        name: "Sasabe",
        graphs: [
          {
            id: "city-sasabe-chart-comertial-truck-crossings",
            type: "line",
            data: {
              labels: [
                "2017-04",
                "2017-06",
                "2017-08",
                "2017-12",
                "2018-04",
                "2018-08",
                "2018-12",
                "2019-04",
                "2019-12",
                "2020-04",
                "2020-08",
                "2020-12",
              ],
              datasets: [
                {
                  label: "Series 1",
                  data: [
                    300000000, 600000000, 900000000, 800000000, 500000000,
                    400000000, 100000000, 200000000, 500000000, 400000000,
                    240000000, 400000000,
                  ],
                  borderColor: "rgba(97, 22, 45, 1)",
                  backgroundColor: "rgba(97, 22, 45, 0.1)",
                  borderWidth: 2,
                },
                {
                  label: "Series 2", // Name the series
                  data: [
                    500000000, 800000000, 600000000, 700000000, 600000000,
                    800000000, 200000000, 400000000, 600000000, 700000000,
                    340000000, 300000000,
                  ],
                  borderColor: "rgba(181, 163, 106, 1)",
                  backgroundColor: "rgba(181, 163, 106, 0.1)",
                  borderWidth: 2,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          },
          {
            id: "city-sasabe-chart-imports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "33460",
                      description:
                        "Petroleum oils and oils obtained from bituminous minerals (other than crude) and preparations n.e.s., containing by weight 70 % or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations, other than waste oils ",
                      value: 1900074770,
                    },
                    {
                      title: "34320",
                      description: " Natural gas, in the gaseous state ",
                      value: 605941408,
                    },
                    {
                      title: "77642",
                      description:
                        " Processors and controllers, whether or not combined with memories, converters, logic circuits, amplifiers, clock and timing circuits, or other circuits ",
                      value: 426794290,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 228291500,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752",
                      value: 224680384,
                    },
                    {
                      title: "82119",
                      description: "Parts of the seats of subgroup 821.1",
                      value: 123281865,
                    },
                    {
                      title: "77282",
                      value: 84177056,
                      description:
                        "Parts suitable for use solely or principally with the apparatus falling within subgroups 772.4, 772.5 and 772.6 - Other parts",
                    },
                    {
                      title: "59899",
                      value: 81052518,
                      description: "Other chemical products and preparations ",
                    },
                    {
                      title: "57431",
                      value: 79260529,
                      description: " Polycarbonates ",
                    },
                    {
                      title: "69969",
                      description: " Articles of iron or steel, n.e.s. ",
                      value: 77659190,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "white",
                  backgroundColor: [
                    "rgba(97, 22, 45, 1)",
                    "rgba(97, 22, 45, 0.95)",
                    "rgba(97, 22, 45, 0.80)",
                    "rgba(97, 22, 45, 0.75)",
                    "rgba(97, 22, 45, 0.65)",
                    "rgba(97, 22, 45, 0.64)",
                    "rgba(97, 22, 45, 0.63)",
                    "rgba(97, 22, 45, 0.62)",
                    "rgba(97, 22, 45, 0.61)",
                    "rgba(97, 22, 45, 0.60)",
                  ],
                  borderColor: "#61162d",
                  hoverBackgroundColor: "#61162d",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Imports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
          {
            id: "city-sasabe-chart-exports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "89846",
                      description: " Semiconductor media ",
                      value: 906103444,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 767551658,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752 ",
                      value: 605486328,
                    },
                    {
                      title: "71899",
                      description:
                        " Parts of the engines and motors of headings 714.49, 718.91, 718.92 and 718.93 ",
                      value: 575712968,
                    },
                    {
                      title: "82119",
                      description: " Parts of the seats of subgroup 821.1 ",
                      value: 379578842,
                    },
                    {
                      title: "78432",
                      description:
                        " Other parts and accessories of bodies (including cabs) ",
                      value: 245192070,
                    },
                    {
                      title: "71652",
                      value: 245192070,
                      description: " Other generating sets ",
                    },
                    {
                      title: "93100",
                      value: 198626123,
                      description:
                        " Special transactions and commodities not classified according to kind ",
                    },
                    {
                      title: "71690",
                      value: 177398821,
                      description:
                        " Parts, n.e.s., suitable for use solely or principally with the machines falling within group 716 ",
                    },
                    {
                      title: "77121",
                      description: "Static converters (e.g., rectifiers) ",
                      value: 171717181,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "black",
                  backgroundColor: [
                    "rgba(181, 163, 106, 1)",
                    "rgba(181, 163, 106, 0.95)",
                    "rgba(181, 163, 106, 0.85)",
                    "rgba(181, 163, 106, 0.75)",
                    "rgba(181, 163, 106, 0.65)",
                    "rgba(181, 163, 106, 0.64)",
                    "rgba(181, 163, 106, 0.63)",
                    "rgba(181, 163, 106, 0.62)",
                    "rgba(181, 163, 106, 0.61)",
                    "rgba(181, 163, 106, 0.60)",
                  ],
                  borderColor: "#b5a36a",
                  hoverBackgroundColor: "#b5a36a",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Exports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
        ],
      },
      {
        id: "city-arizona-tucson",
        name: "Tucson",
        graphs: [
          {
            id: "city-tucson-chart-comertial-truck-crossings",
            type: "line",
            data: {
              labels: [
                "2017-04",
                "2017-06",
                "2017-08",
                "2017-12",
                "2018-04",
                "2018-08",
                "2018-12",
                "2019-04",
                "2019-12",
                "2020-04",
                "2020-08",
                "2020-12",
              ],
              datasets: [
                {
                  label: "Series 1",
                  data: [
                    300000000, 600000000, 900000000, 800000000, 500000000,
                    400000000, 100000000, 200000000, 500000000, 400000000,
                    240000000, 400000000,
                  ],
                  borderColor: "rgba(97, 22, 45, 1)",
                  backgroundColor: "rgba(97, 22, 45, 0.1)",
                  borderWidth: 2,
                },
                {
                  label: "Series 2", // Name the series
                  data: [
                    500000000, 800000000, 600000000, 700000000, 600000000,
                    800000000, 200000000, 400000000, 600000000, 700000000,
                    340000000, 300000000,
                  ],
                  borderColor: "rgba(181, 163, 106, 1)",
                  backgroundColor: "rgba(181, 163, 106, 0.1)",
                  borderWidth: 2,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          },
          {
            id: "city-tucson-chart-imports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "33460",
                      description:
                        "Petroleum oils and oils obtained from bituminous minerals (other than crude) and preparations n.e.s., containing by weight 70 % or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations, other than waste oils ",
                      value: 1900074770,
                    },
                    {
                      title: "34320",
                      description: " Natural gas, in the gaseous state ",
                      value: 605941408,
                    },
                    {
                      title: "77642",
                      description:
                        " Processors and controllers, whether or not combined with memories, converters, logic circuits, amplifiers, clock and timing circuits, or other circuits ",
                      value: 426794290,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 228291500,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752",
                      value: 224680384,
                    },
                    {
                      title: "82119",
                      description: "Parts of the seats of subgroup 821.1",
                      value: 123281865,
                    },
                    {
                      title: "77282",
                      value: 84177056,
                      description:
                        "Parts suitable for use solely or principally with the apparatus falling within subgroups 772.4, 772.5 and 772.6 - Other parts",
                    },
                    {
                      title: "59899",
                      value: 81052518,
                      description: "Other chemical products and preparations ",
                    },
                    {
                      title: "57431",
                      value: 79260529,
                      description: " Polycarbonates ",
                    },
                    {
                      title: "69969",
                      description: " Articles of iron or steel, n.e.s. ",
                      value: 77659190,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "white",
                  backgroundColor: [
                    "rgba(97, 22, 45, 1)",
                    "rgba(97, 22, 45, 0.95)",
                    "rgba(97, 22, 45, 0.80)",
                    "rgba(97, 22, 45, 0.75)",
                    "rgba(97, 22, 45, 0.65)",
                    "rgba(97, 22, 45, 0.64)",
                    "rgba(97, 22, 45, 0.63)",
                    "rgba(97, 22, 45, 0.62)",
                    "rgba(97, 22, 45, 0.61)",
                    "rgba(97, 22, 45, 0.60)",
                  ],
                  borderColor: "#61162d",
                  hoverBackgroundColor: "#61162d",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Imports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
          {
            id: "city-tucson-chart-exports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "89846",
                      description: " Semiconductor media ",
                      value: 906103444,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 767551658,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752 ",
                      value: 605486328,
                    },
                    {
                      title: "71899",
                      description:
                        " Parts of the engines and motors of headings 714.49, 718.91, 718.92 and 718.93 ",
                      value: 575712968,
                    },
                    {
                      title: "82119",
                      description: " Parts of the seats of subgroup 821.1 ",
                      value: 379578842,
                    },
                    {
                      title: "78432",
                      description:
                        " Other parts and accessories of bodies (including cabs) ",
                      value: 245192070,
                    },
                    {
                      title: "71652",
                      value: 245192070,
                      description: " Other generating sets ",
                    },
                    {
                      title: "93100",
                      value: 198626123,
                      description:
                        " Special transactions and commodities not classified according to kind ",
                    },
                    {
                      title: "71690",
                      value: 177398821,
                      description:
                        " Parts, n.e.s., suitable for use solely or principally with the machines falling within group 716 ",
                    },
                    {
                      title: "77121",
                      description: "Static converters (e.g., rectifiers) ",
                      value: 171717181,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "black",
                  backgroundColor: [
                    "rgba(181, 163, 106, 1)",
                    "rgba(181, 163, 106, 0.95)",
                    "rgba(181, 163, 106, 0.85)",
                    "rgba(181, 163, 106, 0.75)",
                    "rgba(181, 163, 106, 0.65)",
                    "rgba(181, 163, 106, 0.64)",
                    "rgba(181, 163, 106, 0.63)",
                    "rgba(181, 163, 106, 0.62)",
                    "rgba(181, 163, 106, 0.61)",
                    "rgba(181, 163, 106, 0.60)",
                  ],
                  borderColor: "#b5a36a",
                  hoverBackgroundColor: "#b5a36a",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Exports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
        ],
      },
    ],
  },
  {
    id: "section-california",
    name: "California",
    cards: [
      {
        id: "city-california-cards",
        title: "Exports 2020",
        subtitle: "9.94 Billon USD",
        icon: "",
        footer: "-29.65%",
      },
      {
        id: "city-california-cards",
        title: "Imports 2020",
        subtitle: "14.94 Billon USD",
        icon: "",
        footer: "-29.65%",
      },
      {
        id: "city-california-cards",
        title: "Total Trade 2020",
        subtitle: "24.94 Billon USD",
        icon: "",
        footer: "-29.65%",
      },
    ],
    cities: [
      {
        id: "city-california-san-diego",
        name: "San Diego",
        graphs: [
          {
            id: "city-san-diego-chart-comertial-truck-crossings",
            type: "line",
            data: {
              labels: [
                "2017-04",
                "2017-06",
                "2017-08",
                "2017-12",
                "2018-04",
                "2018-08",
                "2018-12",
                "2019-04",
                "2019-12",
                "2020-04",
                "2020-08",
                "2020-12",
              ],
              datasets: [
                {
                  label: "Series 1",
                  data: [
                    300000000, 600000000, 900000000, 800000000, 500000000,
                    400000000, 100000000, 200000000, 500000000, 400000000,
                    240000000, 400000000,
                  ],
                  borderColor: "rgba(97, 22, 45, 1)",
                  backgroundColor: "rgba(97, 22, 45, 0.1)",
                  borderWidth: 2,
                },
                {
                  label: "Series 2", // Name the series
                  data: [
                    500000000, 800000000, 600000000, 700000000, 600000000,
                    800000000, 200000000, 400000000, 600000000, 700000000,
                    340000000, 300000000,
                  ],
                  borderColor: "rgba(181, 163, 106, 1)",
                  backgroundColor: "rgba(181, 163, 106, 0.1)",
                  borderWidth: 2,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          },
          {
            id: "city-san-diego-chart-imports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "33460",
                      description:
                        "Petroleum oils and oils obtained from bituminous minerals (other than crude) and preparations n.e.s., containing by weight 70 % or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations, other than waste oils ",
                      value: 1900074770,
                    },
                    {
                      title: "34320",
                      description: " Natural gas, in the gaseous state ",
                      value: 605941408,
                    },
                    {
                      title: "77642",
                      description:
                        " Processors and controllers, whether or not combined with memories, converters, logic circuits, amplifiers, clock and timing circuits, or other circuits ",
                      value: 426794290,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 228291500,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752",
                      value: 224680384,
                    },
                    {
                      title: "82119",
                      description: "Parts of the seats of subgroup 821.1",
                      value: 123281865,
                    },
                    {
                      title: "77282",
                      value: 84177056,
                      description:
                        "Parts suitable for use solely or principally with the apparatus falling within subgroups 772.4, 772.5 and 772.6 - Other parts",
                    },
                    {
                      title: "59899",
                      value: 81052518,
                      description: "Other chemical products and preparations ",
                    },
                    {
                      title: "57431",
                      value: 79260529,
                      description: " Polycarbonates ",
                    },
                    {
                      title: "69969",
                      description: " Articles of iron or steel, n.e.s. ",
                      value: 77659190,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "white",
                  backgroundColor: [
                    "rgba(97, 22, 45, 1)",
                    "rgba(97, 22, 45, 0.95)",
                    "rgba(97, 22, 45, 0.80)",
                    "rgba(97, 22, 45, 0.75)",
                    "rgba(97, 22, 45, 0.65)",
                    "rgba(97, 22, 45, 0.64)",
                    "rgba(97, 22, 45, 0.63)",
                    "rgba(97, 22, 45, 0.62)",
                    "rgba(97, 22, 45, 0.61)",
                    "rgba(97, 22, 45, 0.60)",
                  ],
                  borderColor: "#61162d",
                  hoverBackgroundColor: "#61162d",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Imports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
          {
            id: "city-san-diego-chart-exports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "89846",
                      description: " Semiconductor media ",
                      value: 906103444,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 767551658,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752 ",
                      value: 605486328,
                    },
                    {
                      title: "71899",
                      description:
                        " Parts of the engines and motors of headings 714.49, 718.91, 718.92 and 718.93 ",
                      value: 575712968,
                    },
                    {
                      title: "82119",
                      description: " Parts of the seats of subgroup 821.1 ",
                      value: 379578842,
                    },
                    {
                      title: "78432",
                      description:
                        " Other parts and accessories of bodies (including cabs) ",
                      value: 245192070,
                    },
                    {
                      title: "71652",
                      value: 245192070,
                      description: " Other generating sets ",
                    },
                    {
                      title: "93100",
                      value: 198626123,
                      description:
                        " Special transactions and commodities not classified according to kind ",
                    },
                    {
                      title: "71690",
                      value: 177398821,
                      description:
                        " Parts, n.e.s., suitable for use solely or principally with the machines falling within group 716 ",
                    },
                    {
                      title: "77121",
                      description: "Static converters (e.g., rectifiers) ",
                      value: 171717181,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "black",
                  backgroundColor: [
                    "rgba(181, 163, 106, 1)",
                    "rgba(181, 163, 106, 0.95)",
                    "rgba(181, 163, 106, 0.85)",
                    "rgba(181, 163, 106, 0.75)",
                    "rgba(181, 163, 106, 0.65)",
                    "rgba(181, 163, 106, 0.64)",
                    "rgba(181, 163, 106, 0.63)",
                    "rgba(181, 163, 106, 0.62)",
                    "rgba(181, 163, 106, 0.61)",
                    "rgba(181, 163, 106, 0.60)",
                  ],
                  borderColor: "#b5a36a",
                  hoverBackgroundColor: "#b5a36a",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Exports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
        ],
      },
      {
        id: "city-california-andrade",
        name: "Andrade",
        graphs: [
          {
            id: "city-andrade-chart-comertial-truck-crossings",
            type: "line",
            data: {
              labels: [
                "2017-04",
                "2017-06",
                "2017-08",
                "2017-12",
                "2018-04",
                "2018-08",
                "2018-12",
                "2019-04",
                "2019-12",
                "2020-04",
                "2020-08",
                "2020-12",
              ],
              datasets: [
                {
                  label: "Series 1",
                  data: [
                    300000000, 600000000, 900000000, 800000000, 500000000,
                    400000000, 100000000, 200000000, 500000000, 400000000,
                    240000000, 400000000,
                  ],
                  borderColor: "rgba(97, 22, 45, 1)",
                  backgroundColor: "rgba(97, 22, 45, 0.1)",
                  borderWidth: 2,
                },
                {
                  label: "Series 2", // Name the series
                  data: [
                    500000000, 800000000, 600000000, 700000000, 600000000,
                    800000000, 200000000, 400000000, 600000000, 700000000,
                    340000000, 300000000,
                  ],
                  borderColor: "rgba(181, 163, 106, 1)",
                  backgroundColor: "rgba(181, 163, 106, 0.1)",
                  borderWidth: 2,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          },
          {
            id: "city-andrade-chart-imports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "33460",
                      description:
                        "Petroleum oils and oils obtained from bituminous minerals (other than crude) and preparations n.e.s., containing by weight 70 % or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations, other than waste oils ",
                      value: 1900074770,
                    },
                    {
                      title: "34320",
                      description: " Natural gas, in the gaseous state ",
                      value: 605941408,
                    },
                    {
                      title: "77642",
                      description:
                        " Processors and controllers, whether or not combined with memories, converters, logic circuits, amplifiers, clock and timing circuits, or other circuits ",
                      value: 426794290,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 228291500,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752",
                      value: 224680384,
                    },
                    {
                      title: "82119",
                      description: "Parts of the seats of subgroup 821.1",
                      value: 123281865,
                    },
                    {
                      title: "77282",
                      value: 84177056,
                      description:
                        "Parts suitable for use solely or principally with the apparatus falling within subgroups 772.4, 772.5 and 772.6 - Other parts",
                    },
                    {
                      title: "59899",
                      value: 81052518,
                      description: "Other chemical products and preparations ",
                    },
                    {
                      title: "57431",
                      value: 79260529,
                      description: " Polycarbonates ",
                    },
                    {
                      title: "69969",
                      description: " Articles of iron or steel, n.e.s. ",
                      value: 77659190,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "white",
                  backgroundColor: [
                    "rgba(97, 22, 45, 1)",
                    "rgba(97, 22, 45, 0.95)",
                    "rgba(97, 22, 45, 0.80)",
                    "rgba(97, 22, 45, 0.75)",
                    "rgba(97, 22, 45, 0.65)",
                    "rgba(97, 22, 45, 0.64)",
                    "rgba(97, 22, 45, 0.63)",
                    "rgba(97, 22, 45, 0.62)",
                    "rgba(97, 22, 45, 0.61)",
                    "rgba(97, 22, 45, 0.60)",
                  ],
                  borderColor: "#61162d",
                  hoverBackgroundColor: "#61162d",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Imports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
          {
            id: "city-andrade-chart-exports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "89846",
                      description: " Semiconductor media ",
                      value: 906103444,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 767551658,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752 ",
                      value: 605486328,
                    },
                    {
                      title: "71899",
                      description:
                        " Parts of the engines and motors of headings 714.49, 718.91, 718.92 and 718.93 ",
                      value: 575712968,
                    },
                    {
                      title: "82119",
                      description: " Parts of the seats of subgroup 821.1 ",
                      value: 379578842,
                    },
                    {
                      title: "78432",
                      description:
                        " Other parts and accessories of bodies (including cabs) ",
                      value: 245192070,
                    },
                    {
                      title: "71652",
                      value: 245192070,
                      description: " Other generating sets ",
                    },
                    {
                      title: "93100",
                      value: 198626123,
                      description:
                        " Special transactions and commodities not classified according to kind ",
                    },
                    {
                      title: "71690",
                      value: 177398821,
                      description:
                        " Parts, n.e.s., suitable for use solely or principally with the machines falling within group 716 ",
                    },
                    {
                      title: "77121",
                      description: "Static converters (e.g., rectifiers) ",
                      value: 171717181,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "black",
                  backgroundColor: [
                    "rgba(181, 163, 106, 1)",
                    "rgba(181, 163, 106, 0.95)",
                    "rgba(181, 163, 106, 0.85)",
                    "rgba(181, 163, 106, 0.75)",
                    "rgba(181, 163, 106, 0.65)",
                    "rgba(181, 163, 106, 0.64)",
                    "rgba(181, 163, 106, 0.63)",
                    "rgba(181, 163, 106, 0.62)",
                    "rgba(181, 163, 106, 0.61)",
                    "rgba(181, 163, 106, 0.60)",
                  ],
                  borderColor: "#b5a36a",
                  hoverBackgroundColor: "#b5a36a",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Exports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
        ],
      },
      {
        id: "city-california-calexico",
        name: "Calexico",
        graphs: [
          {
            id: "city-calexico-chart-comertial-truck-crossings",
            type: "line",
            data: {
              labels: [
                "2017-04",
                "2017-06",
                "2017-08",
                "2017-12",
                "2018-04",
                "2018-08",
                "2018-12",
                "2019-04",
                "2019-12",
                "2020-04",
                "2020-08",
                "2020-12",
              ],
              datasets: [
                {
                  label: "Series 1",
                  data: [
                    300000000, 600000000, 900000000, 800000000, 500000000,
                    400000000, 100000000, 200000000, 500000000, 400000000,
                    240000000, 400000000,
                  ],
                  borderColor: "rgba(97, 22, 45, 1)",
                  backgroundColor: "rgba(97, 22, 45, 0.1)",
                  borderWidth: 2,
                },
                {
                  label: "Series 2", // Name the series
                  data: [
                    500000000, 800000000, 600000000, 700000000, 600000000,
                    800000000, 200000000, 400000000, 600000000, 700000000,
                    340000000, 300000000,
                  ],
                  borderColor: "rgba(181, 163, 106, 1)",
                  backgroundColor: "rgba(181, 163, 106, 0.1)",
                  borderWidth: 2,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          },
          {
            id: "city-calexico-chart-imports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "33460",
                      description:
                        "Petroleum oils and oils obtained from bituminous minerals (other than crude) and preparations n.e.s., containing by weight 70 % or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations, other than waste oils ",
                      value: 1900074770,
                    },
                    {
                      title: "34320",
                      description: " Natural gas, in the gaseous state ",
                      value: 605941408,
                    },
                    {
                      title: "77642",
                      description:
                        " Processors and controllers, whether or not combined with memories, converters, logic circuits, amplifiers, clock and timing circuits, or other circuits ",
                      value: 426794290,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 228291500,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752",
                      value: 224680384,
                    },
                    {
                      title: "82119",
                      description: "Parts of the seats of subgroup 821.1",
                      value: 123281865,
                    },
                    {
                      title: "77282",
                      value: 84177056,
                      description:
                        "Parts suitable for use solely or principally with the apparatus falling within subgroups 772.4, 772.5 and 772.6 - Other parts",
                    },
                    {
                      title: "59899",
                      value: 81052518,
                      description: "Other chemical products and preparations ",
                    },
                    {
                      title: "57431",
                      value: 79260529,
                      description: " Polycarbonates ",
                    },
                    {
                      title: "69969",
                      description: " Articles of iron or steel, n.e.s. ",
                      value: 77659190,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "white",
                  backgroundColor: [
                    "rgba(97, 22, 45, 1)",
                    "rgba(97, 22, 45, 0.95)",
                    "rgba(97, 22, 45, 0.80)",
                    "rgba(97, 22, 45, 0.75)",
                    "rgba(97, 22, 45, 0.65)",
                    "rgba(97, 22, 45, 0.64)",
                    "rgba(97, 22, 45, 0.63)",
                    "rgba(97, 22, 45, 0.62)",
                    "rgba(97, 22, 45, 0.61)",
                    "rgba(97, 22, 45, 0.60)",
                  ],
                  borderColor: "#61162d",
                  hoverBackgroundColor: "#61162d",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Imports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
          {
            id: "city-calexico-chart-exports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "89846",
                      description: " Semiconductor media ",
                      value: 906103444,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 767551658,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752 ",
                      value: 605486328,
                    },
                    {
                      title: "71899",
                      description:
                        " Parts of the engines and motors of headings 714.49, 718.91, 718.92 and 718.93 ",
                      value: 575712968,
                    },
                    {
                      title: "82119",
                      description: " Parts of the seats of subgroup 821.1 ",
                      value: 379578842,
                    },
                    {
                      title: "78432",
                      description:
                        " Other parts and accessories of bodies (including cabs) ",
                      value: 245192070,
                    },
                    {
                      title: "71652",
                      value: 245192070,
                      description: " Other generating sets ",
                    },
                    {
                      title: "93100",
                      value: 198626123,
                      description:
                        " Special transactions and commodities not classified according to kind ",
                    },
                    {
                      title: "71690",
                      value: 177398821,
                      description:
                        " Parts, n.e.s., suitable for use solely or principally with the machines falling within group 716 ",
                    },
                    {
                      title: "77121",
                      description: "Static converters (e.g., rectifiers) ",
                      value: 171717181,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "black",
                  backgroundColor: [
                    "rgba(181, 163, 106, 1)",
                    "rgba(181, 163, 106, 0.95)",
                    "rgba(181, 163, 106, 0.85)",
                    "rgba(181, 163, 106, 0.75)",
                    "rgba(181, 163, 106, 0.65)",
                    "rgba(181, 163, 106, 0.64)",
                    "rgba(181, 163, 106, 0.63)",
                    "rgba(181, 163, 106, 0.62)",
                    "rgba(181, 163, 106, 0.61)",
                    "rgba(181, 163, 106, 0.60)",
                  ],
                  borderColor: "#b5a36a",
                  hoverBackgroundColor: "#b5a36a",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Exports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
        ],
      },
      {
        id: "city-california-san-ysidro",
        name: "San Ysidro",
        graphs: [
          {
            id: "city-san-ysidro-chart-comertial-truck-crossings",
            type: "line",
            data: {
              labels: [
                "2017-04",
                "2017-06",
                "2017-08",
                "2017-12",
                "2018-04",
                "2018-08",
                "2018-12",
                "2019-04",
                "2019-12",
                "2020-04",
                "2020-08",
                "2020-12",
              ],
              datasets: [
                {
                  label: "Series 1",
                  data: [
                    300000000, 600000000, 900000000, 800000000, 500000000,
                    400000000, 100000000, 200000000, 500000000, 400000000,
                    240000000, 400000000,
                  ],
                  borderColor: "rgba(97, 22, 45, 1)",
                  backgroundColor: "rgba(97, 22, 45, 0.1)",
                  borderWidth: 2,
                },
                {
                  label: "Series 2", // Name the series
                  data: [
                    500000000, 800000000, 600000000, 700000000, 600000000,
                    800000000, 200000000, 400000000, 600000000, 700000000,
                    340000000, 300000000,
                  ],
                  borderColor: "rgba(181, 163, 106, 1)",
                  backgroundColor: "rgba(181, 163, 106, 0.1)",
                  borderWidth: 2,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          },
          {
            id: "city-san-ysidro-chart-imports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "33460",
                      description:
                        "Petroleum oils and oils obtained from bituminous minerals (other than crude) and preparations n.e.s., containing by weight 70 % or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations, other than waste oils ",
                      value: 1900074770,
                    },
                    {
                      title: "34320",
                      description: " Natural gas, in the gaseous state ",
                      value: 605941408,
                    },
                    {
                      title: "77642",
                      description:
                        " Processors and controllers, whether or not combined with memories, converters, logic circuits, amplifiers, clock and timing circuits, or other circuits ",
                      value: 426794290,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 228291500,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752",
                      value: 224680384,
                    },
                    {
                      title: "82119",
                      description: "Parts of the seats of subgroup 821.1",
                      value: 123281865,
                    },
                    {
                      title: "77282",
                      value: 84177056,
                      description:
                        "Parts suitable for use solely or principally with the apparatus falling within subgroups 772.4, 772.5 and 772.6 - Other parts",
                    },
                    {
                      title: "59899",
                      value: 81052518,
                      description: "Other chemical products and preparations ",
                    },
                    {
                      title: "57431",
                      value: 79260529,
                      description: " Polycarbonates ",
                    },
                    {
                      title: "69969",
                      description: " Articles of iron or steel, n.e.s. ",
                      value: 77659190,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "white",
                  backgroundColor: [
                    "rgba(97, 22, 45, 1)",
                    "rgba(97, 22, 45, 0.95)",
                    "rgba(97, 22, 45, 0.80)",
                    "rgba(97, 22, 45, 0.75)",
                    "rgba(97, 22, 45, 0.65)",
                    "rgba(97, 22, 45, 0.64)",
                    "rgba(97, 22, 45, 0.63)",
                    "rgba(97, 22, 45, 0.62)",
                    "rgba(97, 22, 45, 0.61)",
                    "rgba(97, 22, 45, 0.60)",
                  ],
                  borderColor: "#61162d",
                  hoverBackgroundColor: "#61162d",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Imports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
          {
            id: "city-san-ysidro-chart-exports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "89846",
                      description: " Semiconductor media ",
                      value: 906103444,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 767551658,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752 ",
                      value: 605486328,
                    },
                    {
                      title: "71899",
                      description:
                        " Parts of the engines and motors of headings 714.49, 718.91, 718.92 and 718.93 ",
                      value: 575712968,
                    },
                    {
                      title: "82119",
                      description: " Parts of the seats of subgroup 821.1 ",
                      value: 379578842,
                    },
                    {
                      title: "78432",
                      description:
                        " Other parts and accessories of bodies (including cabs) ",
                      value: 245192070,
                    },
                    {
                      title: "71652",
                      value: 245192070,
                      description: " Other generating sets ",
                    },
                    {
                      title: "93100",
                      value: 198626123,
                      description:
                        " Special transactions and commodities not classified according to kind ",
                    },
                    {
                      title: "71690",
                      value: 177398821,
                      description:
                        " Parts, n.e.s., suitable for use solely or principally with the machines falling within group 716 ",
                    },
                    {
                      title: "77121",
                      description: "Static converters (e.g., rectifiers) ",
                      value: 171717181,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "black",
                  backgroundColor: [
                    "rgba(181, 163, 106, 1)",
                    "rgba(181, 163, 106, 0.95)",
                    "rgba(181, 163, 106, 0.85)",
                    "rgba(181, 163, 106, 0.75)",
                    "rgba(181, 163, 106, 0.65)",
                    "rgba(181, 163, 106, 0.64)",
                    "rgba(181, 163, 106, 0.63)",
                    "rgba(181, 163, 106, 0.62)",
                    "rgba(181, 163, 106, 0.61)",
                    "rgba(181, 163, 106, 0.60)",
                  ],
                  borderColor: "#b5a36a",
                  hoverBackgroundColor: "#b5a36a",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Exports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
        ],
      },
      {
        id: "city-california-tecate",
        name: "Tecate",
        graphs: [
          {
            id: "city-tecate-chart-comertial-truck-crossings",
            type: "line",
            data: {
              labels: [
                "2017-04",
                "2017-06",
                "2017-08",
                "2017-12",
                "2018-04",
                "2018-08",
                "2018-12",
                "2019-04",
                "2019-12",
                "2020-04",
                "2020-08",
                "2020-12",
              ],
              datasets: [
                {
                  label: "Series 1",
                  data: [
                    300000000, 600000000, 900000000, 800000000, 500000000,
                    400000000, 100000000, 200000000, 500000000, 400000000,
                    240000000, 400000000,
                  ],
                  borderColor: "rgba(97, 22, 45, 1)",
                  backgroundColor: "rgba(97, 22, 45, 0.1)",
                  borderWidth: 2,
                },
                {
                  label: "Series 2", // Name the series
                  data: [
                    500000000, 800000000, 600000000, 700000000, 600000000,
                    800000000, 200000000, 400000000, 600000000, 700000000,
                    340000000, 300000000,
                  ],
                  borderColor: "rgba(181, 163, 106, 1)",
                  backgroundColor: "rgba(181, 163, 106, 0.1)",
                  borderWidth: 2,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          },
          {
            id: "city-tecate-chart-imports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "33460",
                      description:
                        "Petroleum oils and oils obtained from bituminous minerals (other than crude) and preparations n.e.s., containing by weight 70 % or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations, other than waste oils ",
                      value: 1900074770,
                    },
                    {
                      title: "34320",
                      description: " Natural gas, in the gaseous state ",
                      value: 605941408,
                    },
                    {
                      title: "77642",
                      description:
                        " Processors and controllers, whether or not combined with memories, converters, logic circuits, amplifiers, clock and timing circuits, or other circuits ",
                      value: 426794290,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 228291500,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752",
                      value: 224680384,
                    },
                    {
                      title: "82119",
                      description: "Parts of the seats of subgroup 821.1",
                      value: 123281865,
                    },
                    {
                      title: "77282",
                      value: 84177056,
                      description:
                        "Parts suitable for use solely or principally with the apparatus falling within subgroups 772.4, 772.5 and 772.6 - Other parts",
                    },
                    {
                      title: "59899",
                      value: 81052518,
                      description: "Other chemical products and preparations ",
                    },
                    {
                      title: "57431",
                      value: 79260529,
                      description: " Polycarbonates ",
                    },
                    {
                      title: "69969",
                      description: " Articles of iron or steel, n.e.s. ",
                      value: 77659190,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "white",
                  backgroundColor: [
                    "rgba(97, 22, 45, 1)",
                    "rgba(97, 22, 45, 0.95)",
                    "rgba(97, 22, 45, 0.80)",
                    "rgba(97, 22, 45, 0.75)",
                    "rgba(97, 22, 45, 0.65)",
                    "rgba(97, 22, 45, 0.64)",
                    "rgba(97, 22, 45, 0.63)",
                    "rgba(97, 22, 45, 0.62)",
                    "rgba(97, 22, 45, 0.61)",
                    "rgba(97, 22, 45, 0.60)",
                  ],
                  borderColor: "#61162d",
                  hoverBackgroundColor: "#61162d",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Imports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
          {
            id: "city-tecate-chart-exports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "89846",
                      description: " Semiconductor media ",
                      value: 906103444,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 767551658,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752 ",
                      value: 605486328,
                    },
                    {
                      title: "71899",
                      description:
                        " Parts of the engines and motors of headings 714.49, 718.91, 718.92 and 718.93 ",
                      value: 575712968,
                    },
                    {
                      title: "82119",
                      description: " Parts of the seats of subgroup 821.1 ",
                      value: 379578842,
                    },
                    {
                      title: "78432",
                      description:
                        " Other parts and accessories of bodies (including cabs) ",
                      value: 245192070,
                    },
                    {
                      title: "71652",
                      value: 245192070,
                      description: " Other generating sets ",
                    },
                    {
                      title: "93100",
                      value: 198626123,
                      description:
                        " Special transactions and commodities not classified according to kind ",
                    },
                    {
                      title: "71690",
                      value: 177398821,
                      description:
                        " Parts, n.e.s., suitable for use solely or principally with the machines falling within group 716 ",
                    },
                    {
                      title: "77121",
                      description: "Static converters (e.g., rectifiers) ",
                      value: 171717181,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "black",
                  backgroundColor: [
                    "rgba(181, 163, 106, 1)",
                    "rgba(181, 163, 106, 0.95)",
                    "rgba(181, 163, 106, 0.85)",
                    "rgba(181, 163, 106, 0.75)",
                    "rgba(181, 163, 106, 0.65)",
                    "rgba(181, 163, 106, 0.64)",
                    "rgba(181, 163, 106, 0.63)",
                    "rgba(181, 163, 106, 0.62)",
                    "rgba(181, 163, 106, 0.61)",
                    "rgba(181, 163, 106, 0.60)",
                  ],
                  borderColor: "#b5a36a",
                  hoverBackgroundColor: "#b5a36a",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Exports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
        ],
      },
      {
        id: "city-california-otay-messa-station",
        name: "Otaya Messa Station",
        graphs: [
          {
            id: "city-otay-messa-station-chart-comertial-truck-crossings",
            type: "line",
            data: {
              labels: [
                "2017-04",
                "2017-06",
                "2017-08",
                "2017-12",
                "2018-04",
                "2018-08",
                "2018-12",
                "2019-04",
                "2019-12",
                "2020-04",
                "2020-08",
                "2020-12",
              ],
              datasets: [
                {
                  label: "Series 1",
                  data: [
                    300000000, 600000000, 900000000, 800000000, 500000000,
                    400000000, 100000000, 200000000, 500000000, 400000000,
                    240000000, 400000000,
                  ],
                  borderColor: "rgba(97, 22, 45, 1)",
                  backgroundColor: "rgba(97, 22, 45, 0.1)",
                  borderWidth: 2,
                },
                {
                  label: "Series 2", // Name the series
                  data: [
                    500000000, 800000000, 600000000, 700000000, 600000000,
                    800000000, 200000000, 400000000, 600000000, 700000000,
                    340000000, 300000000,
                  ],
                  borderColor: "rgba(181, 163, 106, 1)",
                  backgroundColor: "rgba(181, 163, 106, 0.1)",
                  borderWidth: 2,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          },
          {
            id: "city-otay-messa-station-chart-imports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "33460",
                      description:
                        "Petroleum oils and oils obtained from bituminous minerals (other than crude) and preparations n.e.s., containing by weight 70 % or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations, other than waste oils ",
                      value: 1900074770,
                    },
                    {
                      title: "34320",
                      description: " Natural gas, in the gaseous state ",
                      value: 605941408,
                    },
                    {
                      title: "77642",
                      description:
                        " Processors and controllers, whether or not combined with memories, converters, logic circuits, amplifiers, clock and timing circuits, or other circuits ",
                      value: 426794290,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 228291500,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752",
                      value: 224680384,
                    },
                    {
                      title: "82119",
                      description: "Parts of the seats of subgroup 821.1",
                      value: 123281865,
                    },
                    {
                      title: "77282",
                      value: 84177056,
                      description:
                        "Parts suitable for use solely or principally with the apparatus falling within subgroups 772.4, 772.5 and 772.6 - Other parts",
                    },
                    {
                      title: "59899",
                      value: 81052518,
                      description: "Other chemical products and preparations ",
                    },
                    {
                      title: "57431",
                      value: 79260529,
                      description: " Polycarbonates ",
                    },
                    {
                      title: "69969",
                      description: " Articles of iron or steel, n.e.s. ",
                      value: 77659190,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "white",
                  backgroundColor: [
                    "rgba(97, 22, 45, 1)",
                    "rgba(97, 22, 45, 0.95)",
                    "rgba(97, 22, 45, 0.80)",
                    "rgba(97, 22, 45, 0.75)",
                    "rgba(97, 22, 45, 0.65)",
                    "rgba(97, 22, 45, 0.64)",
                    "rgba(97, 22, 45, 0.63)",
                    "rgba(97, 22, 45, 0.62)",
                    "rgba(97, 22, 45, 0.61)",
                    "rgba(97, 22, 45, 0.60)",
                  ],
                  borderColor: "#61162d",
                  hoverBackgroundColor: "#61162d",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Imports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
          {
            id: "city-otay-messa-station-chart-exports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "89846",
                      description: " Semiconductor media ",
                      value: 906103444,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 767551658,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752 ",
                      value: 605486328,
                    },
                    {
                      title: "71899",
                      description:
                        " Parts of the engines and motors of headings 714.49, 718.91, 718.92 and 718.93 ",
                      value: 575712968,
                    },
                    {
                      title: "82119",
                      description: " Parts of the seats of subgroup 821.1 ",
                      value: 379578842,
                    },
                    {
                      title: "78432",
                      description:
                        " Other parts and accessories of bodies (including cabs) ",
                      value: 245192070,
                    },
                    {
                      title: "71652",
                      value: 245192070,
                      description: " Other generating sets ",
                    },
                    {
                      title: "93100",
                      value: 198626123,
                      description:
                        " Special transactions and commodities not classified according to kind ",
                    },
                    {
                      title: "71690",
                      value: 177398821,
                      description:
                        " Parts, n.e.s., suitable for use solely or principally with the machines falling within group 716 ",
                    },
                    {
                      title: "77121",
                      description: "Static converters (e.g., rectifiers) ",
                      value: 171717181,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "black",
                  backgroundColor: [
                    "rgba(181, 163, 106, 1)",
                    "rgba(181, 163, 106, 0.95)",
                    "rgba(181, 163, 106, 0.85)",
                    "rgba(181, 163, 106, 0.75)",
                    "rgba(181, 163, 106, 0.65)",
                    "rgba(181, 163, 106, 0.64)",
                    "rgba(181, 163, 106, 0.63)",
                    "rgba(181, 163, 106, 0.62)",
                    "rgba(181, 163, 106, 0.61)",
                    "rgba(181, 163, 106, 0.60)",
                  ],
                  borderColor: "#b5a36a",
                  hoverBackgroundColor: "#b5a36a",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Exports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
        ],
      },
      {
        id: "city-california-calexico-east",
        name: "Calexico East",
        graphs: [
          {
            id: "city-calexico-east-chart-comertial-truck-crossings",
            type: "line",
            data: {
              labels: [
                "2017-04",
                "2017-06",
                "2017-08",
                "2017-12",
                "2018-04",
                "2018-08",
                "2018-12",
                "2019-04",
                "2019-12",
                "2020-04",
                "2020-08",
                "2020-12",
              ],
              datasets: [
                {
                  label: "Series 1",
                  data: [
                    300000000, 600000000, 900000000, 800000000, 500000000,
                    400000000, 100000000, 200000000, 500000000, 400000000,
                    240000000, 400000000,
                  ],
                  borderColor: "rgba(97, 22, 45, 1)",
                  backgroundColor: "rgba(97, 22, 45, 0.1)",
                  borderWidth: 2,
                },
                {
                  label: "Series 2", // Name the series
                  data: [
                    500000000, 800000000, 600000000, 700000000, 600000000,
                    800000000, 200000000, 400000000, 600000000, 700000000,
                    340000000, 300000000,
                  ],
                  borderColor: "rgba(181, 163, 106, 1)",
                  backgroundColor: "rgba(181, 163, 106, 0.1)",
                  borderWidth: 2,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          },
          {
            id: "city-calexico-east-chart-imports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "33460",
                      description:
                        "Petroleum oils and oils obtained from bituminous minerals (other than crude) and preparations n.e.s., containing by weight 70 % or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations, other than waste oils ",
                      value: 1900074770,
                    },
                    {
                      title: "34320",
                      description: " Natural gas, in the gaseous state ",
                      value: 605941408,
                    },
                    {
                      title: "77642",
                      description:
                        " Processors and controllers, whether or not combined with memories, converters, logic circuits, amplifiers, clock and timing circuits, or other circuits ",
                      value: 426794290,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 228291500,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752",
                      value: 224680384,
                    },
                    {
                      title: "82119",
                      description: "Parts of the seats of subgroup 821.1",
                      value: 123281865,
                    },
                    {
                      title: "77282",
                      value: 84177056,
                      description:
                        "Parts suitable for use solely or principally with the apparatus falling within subgroups 772.4, 772.5 and 772.6 - Other parts",
                    },
                    {
                      title: "59899",
                      value: 81052518,
                      description: "Other chemical products and preparations ",
                    },
                    {
                      title: "57431",
                      value: 79260529,
                      description: " Polycarbonates ",
                    },
                    {
                      title: "69969",
                      description: " Articles of iron or steel, n.e.s. ",
                      value: 77659190,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "white",
                  backgroundColor: [
                    "rgba(97, 22, 45, 1)",
                    "rgba(97, 22, 45, 0.95)",
                    "rgba(97, 22, 45, 0.80)",
                    "rgba(97, 22, 45, 0.75)",
                    "rgba(97, 22, 45, 0.65)",
                    "rgba(97, 22, 45, 0.64)",
                    "rgba(97, 22, 45, 0.63)",
                    "rgba(97, 22, 45, 0.62)",
                    "rgba(97, 22, 45, 0.61)",
                    "rgba(97, 22, 45, 0.60)",
                  ],
                  borderColor: "#61162d",
                  hoverBackgroundColor: "#61162d",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Imports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
          {
            id: "city-calexico-east-chart-exports",
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: [
                    {
                      title: "89846",
                      description: " Semiconductor media ",
                      value: 906103444,
                    },
                    {
                      title: "78439",
                      description: " Other parts and accessories ",
                      value: 767551658,
                    },
                    {
                      title: "75997",
                      description:
                        "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with the machines of subgroups 751.1, 751.2, 751.9 and group 752 -for the machines of group 752 ",
                      value: 605486328,
                    },
                    {
                      title: "71899",
                      description:
                        " Parts of the engines and motors of headings 714.49, 718.91, 718.92 and 718.93 ",
                      value: 575712968,
                    },
                    {
                      title: "82119",
                      description: " Parts of the seats of subgroup 821.1 ",
                      value: 379578842,
                    },
                    {
                      title: "78432",
                      description:
                        " Other parts and accessories of bodies (including cabs) ",
                      value: 245192070,
                    },
                    {
                      title: "71652",
                      value: 245192070,
                      description: " Other generating sets ",
                    },
                    {
                      title: "93100",
                      value: 198626123,
                      description:
                        " Special transactions and commodities not classified according to kind ",
                    },
                    {
                      title: "71690",
                      value: 177398821,
                      description:
                        " Parts, n.e.s., suitable for use solely or principally with the machines falling within group 716 ",
                    },
                    {
                      title: "77121",
                      description: "Static converters (e.g., rectifiers) ",
                      value: 171717181,
                    },
                  ],

                  key: "value",
                  groups: ["title"],
                  spacing: -0.5,
                  borderWidth: 0.5,
                  fontColor: "black",
                  backgroundColor: [
                    "rgba(181, 163, 106, 1)",
                    "rgba(181, 163, 106, 0.95)",
                    "rgba(181, 163, 106, 0.85)",
                    "rgba(181, 163, 106, 0.75)",
                    "rgba(181, 163, 106, 0.65)",
                    "rgba(181, 163, 106, 0.64)",
                    "rgba(181, 163, 106, 0.63)",
                    "rgba(181, 163, 106, 0.62)",
                    "rgba(181, 163, 106, 0.61)",
                    "rgba(181, 163, 106, 0.60)",
                  ],
                  borderColor: "#b5a36a",
                  hoverBackgroundColor: "#b5a36a",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "2020 Brownsville POE Top US-MX Exports (USD) Jan-Dec",
              },
              legend: {
                display: false,
              },
              tooltips: {
                backgroundColor: "#FFF",
                titleFontSize: 16,
                titleFontColor: "#0066ff",
                bodyFontColor: "#000",
                bodyFontSize: 16,
                displayColors: false,
                callbacks: callbackTitleLabel,
              },
            },
          },
        ],
      },
    ],
  },
];

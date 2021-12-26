const cities = () => [
    {
      id: "city-laredo",
      name: "Laredo",
      description: ["text", "text", "text", "text"],
      internationalBridges: {
        center: [27.47629, -99.51639],
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
        cards: [
          {
            title: "U.S.A.",
            description: "Census Estimate 2019",
            color: "green",
            filter: "year",
            year: "2019",
            value: " 38,239,523",
          },
          {
            title: "Language other than English at Home",
            description: "Census Estimate 2014-2018 ",
            color: "green",
            filter: "year",
            year: "2019",
            value: " 38,239,523",
          },
          {
            title: "Language other than English at Home",
            description: "Census Estimate 2014-2018 ",
            color: "green",
            filter: "year",
            year: "2010",
            value: " 38,239,523",
          },
          {
            title: "Language other than English at Home",
            description: "Census Estimate 2014-2018 ",
            color: "green",
            filter: "year",
            year: "2019",
            value: " 38,239,523",
          },
        ],
        graphs: [
          {
            id:"genderDistribution",
            title: "2019 Gender Distribution",
            type: "pastel",
            data:[
              {
                title: "male",
                color: "#f5f5f5",
                value: 46.8,
              },
              {
                title: "female",
                color: "red",
                value: 52.8,
              },
            ]
          },
          {
            id:"populationChange2010",
            type: "bars",
            data:[
              {
                name: "USA",
                description: "Population: 2,890,000 in 2010",
                year: 2010,
                value: "1,879,000",
                male: "49",
                female: "51",
              },
              {
                name: "USA",
                description: "Population: 2,890,000 in 2010",
                year: 2019,
                value: "1,879,000",
                male: "49",
                female: "51",
              },
              {
                name: "Texas",
                description: "Population: 2,890,000 in 2010",
                year: 2010,
                value: "1,879,000",
                male: "49",
                female: "51",
              },
              {
                name: "Texas",
                description: "Population: 2,890,000 in 2010",
                year: 2019,
                value: "1,879,000",
                male: "49",
                female: "51",
              },
              {
                name: "Laredo",
                description: "Population: 2,890,000 in 2010",
                year: 2010,
                value: "1,879,000",
                male: "49",
                female: "51",
              },
              {
                name: "Laredo",
                description: "Population: 2,890,000 in 2010",
                year: 2019,
                value: "1,879,000",
                male: "49",
                female: "51",
              },
            ]
          }
        ],
      },
      housing: {
        title: "Housing",
        description: "Housing",
        cards: [
          {
            title: "Total Households",
            description: "Language other than English at Home",
            color: "#f5f5f5",
            filter: "range",
            range: "2014-2018",
            value: "4,880",
          },
          {
            title: "Language other than English at Home",
            description: "Language other than English at Home",
            color: "#f5f5f5",
            filter: "range",
            range: "2014-2018",
            value: " 83.2% ",
          },
        ],
        graphs: [
          {
            id:"personPerHousehold",
            title: "Persons per Household 2014-2018",
            description: "Persons per Household 2014-2018",
            color: "blue",
            data: [
              {
                name: "USA",
                value: 3.5,
                label: "AVG 3.5",
              },
              {
                name: "Texas",
                value: 2.8,
                label: "AVG 2.8",
              },
              {
                name: "Laredo",
                value: 4.0,
                label: "AVG 4.0",
              },
            ],
          },
          {
            id:"medianGrossRent",
            title: "Median Gross Rent 2014-2018",
            description: "Median Gross Rent 2014-2018",
            color: "green",
            data: [
              {
                name: "USA",
                value: 1023,
                label: " Median Rent: 1,023 ",
              },
              {
                name: "Texas",
                value: 1000,
                label: " Median Rent: 1,000 ",
              },
              {
                name: "Laredo",
                value: 536,
                label: " Median Rent: 536 ",
              },
            ],
          },

        ]
        
      },
      education: {
        title: "Education",
        description: "Education",
        graphs: [
          {
            id:"highSchoolGraduateOrHigher",
            title: "% High School Graduate or Higher (2014-2018) ",
            description: "People age 25 or higher ",
            color: "blue",
            data: [
              {
                name: "USA",
                value: 8.7,
                label: "PCNT 8.7",
              },
              {
                name: "Texas",
                value: 8.2,
                label: "PCNT 2.8",
              },
              {
                name: "Laredo",
                value: 61.2,
                label: "PCNT 61.2",
              },
            ],
          },
          {
            id:"bachelorDegreeOrHigher",
            title: "% High School Graduate or Higher (2014-2018) ",
            description: "People age 25 or higher ",
            color: "blue",
            data: [
              {
                name: "USA",
                value: 3.1,
                label: "PCNT 3.1",
              },
              {
                name: "Texas",
                value: 29.3,
                label: "PCNT 29.3",
              },
              {
                name: "Laredo",
                value: 12.1,
                label: "PCNT 12.1",
              },
            ],
          },
          ],
        
      },
      health: {
        title: "Education",
        description: "Education",
        graphs: [
          {
            id:"withOutHealthInsurance",
            title: " % With Out Health Insurance 2014-2018  ",
            description: "People under age 65",
            color: "blue",
            data: [
              {
                name: "USA",
                value: 8.7,
                label: "PCNT 8.7",
              },
              {
                name: "Texas",
                value: 8.2,
                label: "PCNT 2.8",
              },
              {
                name: "Laredo",
                value: 61.2,
                label: "PCNT 61.2",
              },
            ],
          },
          {
            id:"withDisability",
            title: "% With a Disability (2014-2018)",
            description: "People under age 65 ",
            color: "blue",
            data: [
              {
                name: "USA",
                value: 3.1,
                label: "PCNT 3.1",
              },
              {
                name: "Texas",
                value: 29.3,
                label: "PCNT 29.3",
              },
              {
                name: "Laredo",
                value: 12.1,
                label: "PCNT 12.1",
              },
            ],
          },
        ]
       
        
      },
      economy: {
        title: "Economy",
        description: "Economy",
        cards: [
          {
            title: "Language other than English at Home",
            description: "Language other than English at Home",
            color: "#f5f5f5",
            filter: "range",
            range: "2014-2018",
            value: " 83.2% ",
          },
          {
            title: "Language other than English at Home",
            description: "Language other than English at Home",
            color: "#f5f5f5",
            filter: "range",
            range: "2014-2018",
            value: " 83.2% ",
          },
          {
            title: "Language other than English at Home",
            description: "Language other than English at Home",
            color: "#f5f5f5",
            filter: "range",
            range: "2014-2018",
            value: " 83.2% ",
          },
        ],
        graphs: [
          {
            id: "laborForceGender",
            title: "Language other than English at Home",
            description: "Language other than English at Home",
            type: "pastel",
            data: [
              {
                title: "male",
                color: "#f5f5f5",
                value: 46.8,
              },
              {
                title: "female",
                color: "red",
                value: 52.8,
              },
            ],
          },
          {
            id: "unemploymentTrend",
            title: "Unemployment Trend",
            description: "description",
            type: "line",
            data: [
              {
                title: "male",
                color: "#f5f5f5",
                value: 46.8,
              },
              {
                title: "female",
                color: "red",
                value: 52.8,
              },
            ],
          },
          {
            id: "personsInPoverty",
            title: "% Persons in Poverty",
            description: "Census Estimate 2014-2018",
            type: "pastel",
            color: "#f5f5f5",
            data: [
              {
                title: "USA",
                range: "2014-2018",
                value: 46.8,
              },
              {
                title: "TEXAS",
                color: "red",
                range: "2014-2018",
                value: 52.8,
              },
              {
                title: "Laredo",
                color: "red",
                range: "2014-2018",
                value: 52.8,
              },
            ],
          },
          {
            id: "perCapitaIncome",
            title: "Per Capita Income",
            description: "in the past 12 months (in 2018 dollars)",
            type: "bars",
            color: "#f5f5f5",
            filter: "range",
            data: [
              {
                title: "USA",
                range: "2014-2018",
                value: 46.8,
              },
              {
                title: "TEXAS",
                range: "2014-2018",
                value: 52.8,
              },
              {
                title: "Laredo",
                range: "2014-2018",
                value: 52.8,
              },
            ],
          },
        ],
      },
    },
  ];
export default cities;
$(document).ready(function () {
  $("#footer").load("share/footer.html");
  $("#header").load("share/header.html");
  initTabs("file-research");
  new WOW().init();

  for (const x of filesData) {
    for (const s of x.sections) {
      var delay = 1;
      for (const p of s.files) {
        var item = `<div class="card archive-item m-1 wow fadeInUp" data-wow-delay="0.${delay}s">

            <div class="rounded overflow-hidden">
                <div class="position-relative overflow-hidden">
                    <img class="card-img-top"
                        data-pdf-thumbnail-file="${p.file}"
                        src="/assets/PDF/pdf.gif" data-pdf-thumbnail-width="500">
                    <div class="archive-overlay">
                    <button class="previewFile btn btn-square btn-outline-light mx-1" data-file="${p.file}"><i class="fa fa-eye"></i></button>
                        <a class="btn btn-square btn-outline-light mx-1" href="${p.file}" download><i
                                class="fa fa-download"></i></a>
                    </div>
                </div>
                <div class="card-body m-3 acrobat-info">
                    <h4>${p.title}</h4>
                    <span>${p.autor}</span>
                </div>
            </div>

        </div>`;
        $("#" + s.refBody).append(item);
        if (delay == 3) {
          delay = 1;
        } else {
          delay++;
        }
      }
      $("#" + s.refTitle).html(s.title);
    }
  }
  createPDFThumbnails();
});

$(document).on("click", ".previewFile", function () {
  var url = $(this).attr("data-file");
  $("#viewverPDF").attr("src", url);
  window.setTimeout(() => {
    $("#previewModal").modal("show");
  }, 200);
});

const filesData = [
{
    id: "file-TCBEED",
    sections: [
        {
            refTitle: null,
            refBody: "files-body-TCBEED",
            title: null,
            files: [
              {
                title:"2001-2004",
                file: "http://texascenter.tamiu.edu/PDF/ACT/2001-2004.pdf",
                autor: "",
              },
              {
                title:"2009-Summer",
                file: "http://texascenter.tamiu.edu/PDF/ACT/2009-01-QR.pdf",
                autor: "",
              },
              {
                title:"2009-Fall",
                file: "http://texascenter.tamiu.edu/PDF/ACT/2009-02-QR.pdf",
                autor: "",
              },
              {
                title:"2010-Spring",
                file: "http://texascenter.tamiu.edu/PDF/ACT/2010-01-QR.pdf",
                autor: "",
              },
              {
                title:"2010-Summer",
                file: "http://texascenter.tamiu.edu/PDF/ACT/2010-02-QR.pdf",
                autor: "",
              },
              {
                title:"2010-Fall",
                file: "http://texascenter.tamiu.edu/PDF/ACT/2010-03-QR.pdf",
                autor: "",
              },
           
            ],
          },
    ],
}
    ,
  {
    id: "file-research",
    sections: [
      {
        refTitle: "files-title-border-1",
        refBody: "files-body-border-1",
        title: "Border Reports Volume 1",
        files: [
          {
            title:
              "Benthic Macroinvertebrates as Monitors of Rio Grande Water Quality",
            file: "http://texascenter.tamiu.edu/PDF/BR/V1/Vaughn_1999.pdf",
            autor: "Presented by Dr. Tom Vaughan and Dr. Jose A. Flores",
          },
          {
            title:
              "A Sociolinguistic Profile of Heritage Spanish Speakers in the Public Schools of Laredo, Tx",
            file: "http://texascenter.tamiu.edu/PDF/BR/V1/Pletsch_1999.pdf",
            autor: "Presented by Dr. Kati Pletsch de Garcia",
          },
          {
            title:
              "Trade and the Environment: Perceptions from a Region on the Border ",
            file: "http://texascenter.tamiu.edu/PDF/BR/V1/Yoskowitz_1999.pdf",
            autor: "Presented by Dr. David W. Yoskowitz",
          },
          {
            title:
              " Language Code-Switching: A Psychological Analysis of Why Bilinguals Mix Spanish and English en la Frontera ",
            file: "http://texascenter.tamiu.edu/PDF/BR/V1/Heredia_1999.pdf",
            autor: "Presented by Dr. Roberto R. Heredia",
          },
          //   {
          //     title: "Guerrero Archives",
          //     file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
          //     autor: "Presented by Dr. Stanley Green",
          //   },
        ],
      },
      {
        refTitle: "files-title-border-2",
        refBody: "files-body-border-2",
        title: "Border Reports Volume 2",
        files: [
          {
            title:
              "Impoverished Consumers: The Lived Experience of Colonia Residents",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor: "Presented by Dr. Jyotsna Mukherji",
          },
          {
            title:
              "Rio Grande and Manadas Creek Water and Sediment Chronic Toxicity Studies",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor: "Presented by Dr. Sushma Krishnamurthy",
          },
          {
            title: "The State of Child Care in Laredo",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor: "Presented by Dr. Linda Medearis",
          },
          {
            title:
              "Utilization of Physician Health Care Services in Mexico by Border Residents in Laredo, Texas",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor: "Presented by Dr. Michael Landeck and Dr. Cecilia Garza",
          },
          {
            title: "Characteristics of Successful Principals in a Border Town ",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor: "Presented by Dr. Carolyn McCreight and Dr. Claudio Salinas",
          },
          {
            title:
              "Mi Futuro: Sexual Abstinence Program (1999-2000) for Laredo Independent School District Middle Schools",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor: "Presented by Dr. Sweety Law",
          },
        ],
      },
      {
        refTitle: "files-title-border-7",
        refBody: "files-body-border-7",
        title: "Border Reports Volume 7",
        files: [
          {
            title: "Ticks / Las Garrapatas: What is their potential impact?",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor: "Presented by Dr. David L. Beck ",
          },
          {
            title: "The Use of Exchange Rates in the U.S.-Mexico Border",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor: "Presented by Dr. Jorge Brusa",
          },

          {
            title:
              "Personality, Parental and Media Influences on Violent Crime in Young Adults",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor: "Presented by Dr. Christopher J. Ferguson ",
          },

          {
            title: "At-Risk Students Achieve High School Graduation ",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor: "Presented by Dr. Cecilia Garza ",
          },

          {
            title: "Historic Archives of Nvo. Guerrero, Tamaulipas (English) ",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor: "Presented by Dr. Stanley C. Green ",
          },

          {
            title: "Archivo Municipal de Nvo. Guerrero, Tamaulipas (Spanish) ",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor: "Presented by Dr. Stanley C. Green ",
          },

          {
            title:
              "The Effectiveness of an After-School Intervention Program for Improving the Reading Performance of First and Second Grade Latino Students ",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor: "Presented by Dr. Barbara Greybeck ",
          },

          {
            title: "Comprehension of Idiomatic Expressions by Bilinguals ",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor: "Presented by Dr. Roberto R. Heredia ",
          },

          {
            title: "The Border Beyond the Border ",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor: "Presented by Mr. Rogelio Hinojosa ",
          },

          {
            title:
              "College Readiness: A Study of Perceptions of Students and Faculty at the Secondary and Post-Secondary Levels in the Laredo/Webb County Area",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor:
              "Presented by Dr. Faridoun Farrokh, Dr. Rohitha Goonatilake, Dr. Firooz Khosraviyani, and Dr. Juan R. Lira ",
          },

          {
            title:
              "Implementation of Active Intervention Program using Dietary Education and Exercise Training for Lowering Obesity in Hispanic Male Children ",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor: "Presented by Dr. Sukho Lee ",
          },

          {
            title:
              "Preferable-Interval Approaches to the Single-Sink Fixed-Charge Transportation Problem ",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor: "Presented by Dr. Runchang Lin ",
          },

          {
            title: "Virtual Regional Dissertation & Thesis Archive",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor: "Presented by Ms. Jeanette Hatcher and Ms. Fen Lu ",
          },

          {
            title:
              "Nutritional Information Usage and Socio-economic Status: An Enquiry of Hispanic Consumers in Laredo with Implications for Public Policy and Social Marketing ",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor: "Presented by Dr. Jyotsna Mukherji",
          },

          {
            title:
              "Effects of Structured and Unstructured Education on the Elements of the Metabolic Syndrome in Hispanic Adults ",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor: "Presented by Ms. Irma Lara and Mr. Horacio Palacios ",
          },

          {
            title:
              "Elder Care Expectations Among Hispanic Undergraduates: Do Acculturation and or Gender Make A Difference?",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor: "Presented by Dr. Bonnie A. Rudolph ",
          },

          {
            title:
              "A Study of the Acquisition of Leadership Competencies Among Educational Administration Students ",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor: "Presented by Dr. Claudio Salinas",
          },

          {
            title:
              "Violence on the Border - Too Close to Home: Prevalence of Proprietariness, Jealousy, and Aggression in Latino/a Intimate Partner Relationships ",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor: "Presented by Dr. Christy Teranishi",
          },

          {
            title:
              "The Interlanguage Continuum of Spanish Speaking Second Language Learners acquiring English and Effective Educational Pedagogy",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor: "Presented by Dr. Miroslava B. Vargas ",
          },
          {
            title:
              "The Infrastructure of International Trade, and the Political and Economic Landscapes of Cameron County, Texas and Matamoros, Tamaulipas ",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor: "Presented by Dr. Michael Yoder ",
          },
          {
            title:
              "A Statistical Evaluation of Femicide in South Border Cities",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor: "Presented by Dr. Pedro H. Albuquerque ",
          },
        ],
      },
      {
        refTitle: "files-title-border-8",
        refBody: "files-body-border-8",
        title: "Border Reports Volume 8",
        files: [
          {
            title:
              "Current Level of Tickborne Disease in the Ticks on the TAMIU Campus, and Other Locations in Webb County ",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor: "Presented by Dr. David L. Beck ",
          },
          {
            title:
              "Perceptions of Educational Leaders of Salient Factors in Turn-Around Efforts in Pursuit of Future Success in Meeting Average Yearly Progress Concerns ",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor: "Presented by Dr. Emma A. Garza and Dr. Claudio Salinas ",
          },
          {
            title:
              " An Overview of Crime Statistics and Impact of Law Enforcement Activities in U.S. Border Cities: Laredo/Webb County ",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor:
              "Presented by Dr. Richard D. Hartley and Dr. Rohitha Goonatilake ",
          },
          {
            title: " Electronic Access to the Early Laredo Times (1881-1919) ",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor: "Presented by Mr. Rogelio H. Hinojosa ",
          },
          {
            title:
              " Reducing Commercial Traffic Wait Times at the World Trade Bridge: A Process Reconfiguration Approach ",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor: "Presented by Dr. Balaji Janamanchi",
          },
          {
            title:
              " Prevalence of Obesity and Hypertension in the Elementary, Middle and High School Aged Population ",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor: "Presented by Mr. Horacio G. Palacios",
          },
        ],
      },
      {
        refTitle: "files-title-border-9",
        refBody: "files-body-border-9",
        title: "Border Reports Volume 9",
        files: [
          {
            title:
              " An Intervention of Diet, Exercise, and Medication to Reduce the Prevalence of Cardiovascular Disease and Obesity among Hispanic Male Population in South Texas Border Cities ",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor:
              "Presented by Dr. Rohitha Goonatilake, Ms. Vivian Garcia, Ms. Irma A. Lara, and Ms. Rose A. Saldivar ",
          },
          {
            title: " The New Refugees: Mexican Businesses Moving to Laredo ",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor: "Presented by Dr. Cecilia Garza ",
          },
          {
            title:
              " A Study Examining Region Service Center and Texas Education Consultants’ Views on Low School Performance and Prescribed Interventions for Improvement ",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor: "Presented by Dr. Emma A. Garza and Dr. Claudio Salinas",
          },
          {
            title: " Solar Energy Paints Laredo Green ",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor: "Presented by Dr. Tongdan Jin",
          },
          {
            title:
              " Preferable-Interval Method for the Multiple-Sink Fixed-Charge Transportation Problem ",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor: "Presented by Dr. Runchang Lin",
          },
          {
            title:
              " Consumption of Health Care among Colonia Residents along the Texas-Mexico Border Region: A Social Marketing Perspective ",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor: "Presented by Dr. Jyotsna Mukherji ",
          },
          {
            title: " Career Development Planning System for Border Region ",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor: "Presented by Dr. Haibo Wang ",
          },
          {
            title:
              " Laredo Town Center: Boon or Bane? A System Thinking Approach ",
            file: "/assets/PDF/v9-Garcia-Goonatilake-Lara.pdf",
            autor: "Presented by Dr. Balaji Janamanchi",
          },
        ],
      },
    ],
  },
  {
    id: "file-border-business-indicators",
    sections: [
      {
        refTitle: null,
        refBody: "files-body-border-business-indicators",
        title: null,
        files: [
          {
            title: "Dec-1990",
            file: "http://texascenter.tamiu.edu/PDF/BBI/BBI1990_12.pdf",
            autor: "",
          },
          {
            title: "Feb-1991",
            file: "http://texascenter.tamiu.edu/PDF/BBI/BBI1991_02.pdf",
            autor: "",
          },
          {
            title: "Feb-1992",
            file: "http://texascenter.tamiu.edu/PDF/BBI/BBI1992_02.pdf",
            autor: "",
          },
          {
            title: "Feb-1993",
            file: "http://texascenter.tamiu.edu/PDF/BR/V1/Heredia_1999.pdf",
            autor: "",
          },
          {
            title: "Feb-1994",
            file: "http://texascenter.tamiu.edu/PDF/BR/V1/Heredia_1999.pdf",
            autor: "",
          },
          {
            title: "Feb-1995",
            file: "http://texascenter.tamiu.edu/PDF/BR/V1/Heredia_1999.pdf",
            autor: "",
          },
          {
            title: "Feb-1996",
            file: "http://texascenter.tamiu.edu/PDF/BR/V1/Heredia_1999.pdf",
            autor: "",
          },
          {
            title: "Feb-1997",
            file: "http://texascenter.tamiu.edu/PDF/BR/V1/Heredia_1999.pdf",
            autor: "",
          },
          {
            title: "Feb-1998",
            file: "http://texascenter.tamiu.edu/PDF/BR/V1/Heredia_1999.pdf",
            autor: "",
          },
          {
            title: "Feb-1999",
            file: "http://texascenter.tamiu.edu/PDF/BR/V1/Heredia_1999.pdf",
            autor: "",
          },
          {
            title: "Feb-2000",
            file: "http://texascenter.tamiu.edu/PDF/BR/V1/Heredia_1999.pdf",
            autor: "",
          },
          {
            title: "Feb-2001",
            file: "http://texascenter.tamiu.edu/PDF/BR/V1/Heredia_1999.pdf",
            autor: "",
          },
          {
            title: "Feb-2002",
            file: "http://texascenter.tamiu.edu/PDF/BR/V1/Heredia_1999.pdf",
            autor: "",
          },
          {
            title: "Feb-2003",
            file: "http://texascenter.tamiu.edu/PDF/BR/V1/Heredia_1999.pdf",
            autor: "",
          },
          {
            title: "Feb-2004",
            file: "http://texascenter.tamiu.edu/PDF/BR/V1/Heredia_1999.pdf",
            autor: "",
          },
          {
            title: "Feb-2005",
            file: "http://texascenter.tamiu.edu/PDF/BR/V1/Heredia_1999.pdf",
            autor: "",
          },
          {
            title: "Feb-2006",
            file: "http://texascenter.tamiu.edu/PDF/BR/V1/Heredia_1999.pdf",
            autor: "",
          },
          {
            title: "Feb-2007",
            file: "http://texascenter.tamiu.edu/PDF/BR/V1/Heredia_1999.pdf",
            autor: "",
          },
          {
            title: "Feb-2008",
            file: "http://texascenter.tamiu.edu/PDF/BR/V1/Heredia_1999.pdf",
            autor: "",
          },
          {
            title: "Feb-2009",
            file: "http://texascenter.tamiu.edu/PDF/BR/V1/Heredia_1999.pdf",
            autor: "",
          },
          {
            title: "Feb-2010",
            file: "http://texascenter.tamiu.edu/PDF/BR/V1/Heredia_1999.pdf",
            autor: "",
          },
        ],
      },
    ],
  },
  {
    id: "file-laredo-vision-economic-outlook-report",
    sections: [
      {
        refTitle: null,
        refBody: "files-body-laredo-vision-economic-outlook-report",
        title: null,
        files: [
          {
            title: " Vision 2000 Conference, MX. Laredo: A Decade of Solid Growth ",
            file: "http://texascenter.tamiu.edu/PDF/VISION/visionpres.pdf",
            autor: "Monterrey, Mexico. October 21, 1999",
          },
          {
            title: " Vision 2000 Update ",
            file: "http://texascenter.tamiu.edu/PDF/VISION/visionpres.pdf",
            autor: "Economic Report Update Monterrey, Mexico. October 21, 1999",
          },
          {
            title: " Vision 2000 Conference, US ",
            file: "http://texascenter.tamiu.edu/PDF/VISION/visionpres.pdf",
            autor: "The Texas Border Region Enjoys a Decade of Strong Growth Laredo, Texas. March 23, 2000",
          },
       
        
          {
            title: " Vision 2000 Outlook. Economic Outlook Report ",
            file: "http://texascenter.tamiu.edu/PDF/VISION/visionpres.pdf",
            autor: "Laredo, Texas. March 23, 2000",
          },
          {
            title: " Vision 2001 Conference, CC. Border Region Economy Update ",
            file: "http://texascenter.tamiu.edu/PDF/VISION/visionpres.pdf",
            autor: "Corpus Christi, Texas. November 17, 2000",
          },
          {
            title: " Vision 2001 Conference, LDO. Laredo Economy Update ",
            file: "http://texascenter.tamiu.edu/PDF/VISION/visionpres.pdf",
            autor: " Laredo, Texas. April 11, 2001",
          },
          {
            title: " Vision 2001 Outlook. Economic Outlook Report ",
            file: "http://texascenter.tamiu.edu/PDF/VISION/visionpres.pdf",
            autor: " Laredo, Texas. April 11, 2001",
          },
          {
            title: " Vision 2002 Conference. Laredo Economy Update ",
            file: "http://texascenter.tamiu.edu/PDF/VISION/visionpres.pdf",
            autor: "Laredo, Texas. April 22, 2002",
          },
          {
            title: " Vision 2002 Outlook.Economic Outlook Report ",
            file: "http://texascenter.tamiu.edu/PDF/VISION/visionpres.pdf",
            autor: "Laredo, Texas. April 22, 2002",
          },
          {
            title: " Vision 2003 Update. Larenomy do EcoUpdate ",
            file: "http://texascenter.tamiu.edu/PDF/VISION/visionpres.pdf",
            autor: "Laredo, Texas. December, 2002",
          },
          {
            title: " Vision 2003 Conference. Economic Outlook Report ",
            file: "http://texascenter.tamiu.edu/PDF/VISION/visionpres.pdf",
            autor: " Laredo, Texas. May, 2003",
          },
          {
            title: " Vision 2004 Conference. US-VISIT Program: What will be its Economic Impact on Laredo? ",
            file: "http://texascenter.tamiu.edu/PDF/VISION/visionpres.pdf",
            autor: "Laredo, TX. April 27, 2004 - Monterrey, NL. April 28, 2004",
          },
          {
            title: " Vision 2004 Outlook. Economic Outlook Report",
            file: "http://texascenter.tamiu.edu/PDF/VISION/visionpres.pdf",
            autor: "Laredo, TX. April 27, 2004 - Monterrey, NL. April 28, 2004",
          },
          {
            title: " Vision 2005 Conference. Laredo Economic Update ",
            file: "http://texascenter.tamiu.edu/PDF/VISION/visionpres.pdf",
            autor: "Laredo, Texas. February 24, 2005",
          },
          {
            title: " Vision 2005 Outlook. Economic Outlook Report ",
            file: "http://texascenter.tamiu.edu/PDF/VISION/visionpres.pdf",
            autor: "Laredo, Texas. February 24, 2005",
          },
          {
            title: " Vision 2006 Conference. Laredo Economy Update",
            file: "http://texascenter.tamiu.edu/PDF/VISION/visionpres.pdf",
            autor: "Laredo, Texas. March 9, 2007",
          },
          {
            title: " Vision 2006 Outlook. Economic Outlook Report ",
            file: "http://texascenter.tamiu.edu/PDF/VISION/visionpres.pdf",
            autor: "Laredo, Texas. March 2, 2006",
          },
          {
            title: " Vision 2007 Conference. Laredo Economy Update",
            file: "http://texascenter.tamiu.edu/PDF/VISION/visionpres.pdf",
            autor: "Laredo, Texas. March 9, 2007",
          },
          {
            title: " Vision 2007 Outlook. Economic Outlook Report",
            file: "http://texascenter.tamiu.edu/PDF/VISION/visionpres.pdf",
            autor: "Laredo, Texas. March 9, 2007",
          },
          {
            title: " Vision 2008 Conference. Laredo Econoic Outlook",
            file: "http://texascenter.tamiu.edu/PDF/VISION/visionpres.pdf",
            autor: "Laredo, Texas. April 2008",
          },
          {
            title: " Vision 2009 Outlook. Economic Outlook Report",
            file: "http://texascenter.tamiu.edu/PDF/VISION/visionpres.pdf",
            autor: "Laredo, Texas. May 2007",
          },
          {
            title: " Vision 2010 Conference. Laredo Econoic Outlook",
            file: "http://texascenter.tamiu.edu/PDF/VISION/visionpres.pdf",
            autor: "Laredo, Texas. April 2010",
          },
          {
            title: " Vision 2011 Outlook  . Economic Outlook Report",
            file: "http://texascenter.tamiu.edu/PDF/VISION/visionpres.pdf",
            autor: "Laredo, Texas. April 2011",
          },
          {
            title: "  Vision 2012 Conference. Laredo Econoic Outlook",
            file: "http://texascenter.tamiu.edu/PDF/VISION/visionpres.pdf",
            autor: "",
          },
          {
            title: "  Vision 2013 Outlook. Economic Outlook Report",
            file: "http://texascenter.tamiu.edu/PDF/VISION/visionpres.pdf",
            autor: "Laredo, Texas. April 2013",
          },
          {
            title: " Vision 2014 Conference. Laredo Econoic Outlook ",
            file: "http://texascenter.tamiu.edu/PDF/VISION/visionpres.pdf",
            autor: "Laredo, Texas. April 2014",
          },

        ],
      },
    ],
  },
];

$(document).ready(function () {
  new WOW().init();

  createPDFThumbnailsPreviews(filesDataLaredoVision);
  createPDFThumbnails();
});

const filesDataLaredoVision = [
  {
    id: "file-laredo-vision-economic-outlook-report",
    sections: [
      {
        refTitle: null,
        refBody: "files-body-laredo-vision-economic-outlook-report",
        title: null,
        files: [
          {
            title:
              " Vision 2000 Conference, MX. Laredo: A Decade of Solid Growth ",
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
            autor:
              "The Texas Border Region Enjoys a Decade of Strong Growth Laredo, Texas. March 23, 2000",
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
            title:
              " Vision 2004 Conference. US-VISIT Program: What will be its Economic Impact on Laredo? ",
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

$(document).ready(function () {
  $("#footer").load("share/footer.html");
  $("#header").load("share/header.html");
  new WOW().init();

  createPDFThumbnailsPreviews(filesDataBorderReports);
  createPDFThumbnails();
});

const filesDataBorderReports = [
  {
    id: "file-Border-Reports",
    sections: [
      {
        refTitle: null,
        refBody: "files-body-border-reports",
        title: null,
        files: [
          {
            title: "Clusters and Clusters Analysis in the Laredo Region",
            file: "http://texascenter.tamiu.edu/PDF/ACT/2001-2004.pdf",
            autor: "Laredo Economic Development Committee Member Presentation",
          },
          {
            title: "Clusters and Clusters Analysis in the Laredo Region",
            file: "http://texascenter.tamiu.edu/PDF/ACT/2001-2004.pdf",
            autor: "Laredo Economic Development Committee Member Presentation",
          },
          {
            title: "Clusters and Clusters Analysis in the Laredo Region",
            file: "http://texascenter.tamiu.edu/PDF/ACT/2001-2004.pdf",
            autor: "Laredo Economic Development Committee Member Presentation",
          },
          {
            title: "Clusters and Clusters Analysis in the Laredo Region",
            file: "http://texascenter.tamiu.edu/PDF/ACT/2001-2004.pdf",
            autor: "Laredo Economic Development Committee Member Presentation",
          },
          {
            title: "Clusters and Clusters Analysis in the Laredo Region",
            file: "http://texascenter.tamiu.edu/PDF/ACT/2001-2004.pdf",
            autor: "Laredo Economic Development Committee Member Presentation",
          },
          {
            title: "Clusters and Clusters Analysis in the Laredo Region",
            file: "http://texascenter.tamiu.edu/PDF/ACT/2001-2004.pdf",
            autor: "Laredo Economic Development Committee Member Presentation",
          },
        ],
      },
    ],
  },
];

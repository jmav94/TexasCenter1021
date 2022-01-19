$(document).ready(function () {
    $("#footer").load("share/footer.html");
    $("#header").load("share/header.html");
    new WOW().init();
  
    createPDFThumbnailsPreviews(filesDataBorder)
    createPDFThumbnails();
  });



const filesDataBorder = [

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
                file: "/assets/PDF/BBI1990_12.pdf",
                autor: "",
              },
              {
                title: "Feb-1991",
                file: "/assets/PDF/BBI1991_02.pdf",
                autor: "",
              },
              {
                title: "Feb-1992",
                file: "/assets/PDF/BBI1992_02.pdf",
                autor: "",
              },
              {
                title: "Feb-1993",
                file: "/assets/PDF/BBI1992_02.pdf",
                autor: "",
              },
              {
                title: "Feb-1994",
                file: "/assets/PDF/BBI1992_02.pdf",
                autor: "",
              },
              {
                title: "Feb-1995",
                file: "/assets/PDF/BBI1992_02.pdf",
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

    ];
    
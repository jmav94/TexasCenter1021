$(document).ready(function () {
  $("#footer").load("share/footer.html");
  $("#header").load("share/header.html");

  new WOW().init();
  for (const x of filesDataLaredo) {
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

const filesDataLaredo =  [
  {
    id: "file-laredo-region",
    sections: [
      {
        refTitle: null,
        refBody: "files-body-laredo-region",
        title: null,
        files: [
          {
            title: "2021 English Handbook (24.1 MB)",
            file: "/assets/PDF/2021-PSB-EN.pdf",
            autor: "",
          },
          {
            title: "2021 English Handbook (24.1 MB)",
            file: "/assets/PDF/2021-PSB-EN.pdf",
            autor: "",
          },
          {
            title: "2021 English Handbook (24.1 MB)",
            file: "/assets/PDF/2021-PSB-EN.pdf",
            autor: "",
          },
          {
            title: "2021 English Handbook (24.1 MB)",
            file: "/assets/PDF/2021-PSB-EN.pdf",
            autor: "",
          },
          {
            title: "2021 English Handbook (24.1 MB)",
            file: "/assets/PDF/2021-PSB-EN.pdf",
            autor: "",
          },
          {
            title: "2021 English Handbook (24.1 MB)",
            file: "/assets/PDF/2021-PSB-EN.pdf",
            autor: "",
          },
    
        ],
      },
    ],
  },
];

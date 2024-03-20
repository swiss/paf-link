var respecConfig = {
    specStatus: "unofficial",
    shortName: 'paf-link',
    edDraftURI: "https://paf.link/",
    format: 'markdown', 
    latestVersion: null,
    maxTocLevel: 4,
    preProcess: [loadTurtle],
    postProcess: [jumpTo, window.respecMermaid.createFigures],
    github: {
      repoURL: "https://github.com/swiss/paf-link",
      branch: "main", // alternative branch
    },
    editors: [{
      name: "Jörg De Bernardi",
      company: "Federal Chancellery (FCh)",
      companyURL: "https://www.bk.admin.ch",
      url: "mailto:joerg.debernardi@bk.admin.ch"
    },
    {
      name: "Louis Bernath",
      company: "Federal Chancellery (FCh)",
      companyURL: "https://www.bk.admin.ch",
      url: "mailto:louis.bernath@bk.admin.ch"
    },
    {
      name: "Théophile Boucard",
      company: "Federal Chancellery (FCh)",
      companyURL: "https://www.bk.admin.ch",
      url: "mailto:theophile.boucard@bk.admin.ch"
    },
    {
      name: "Michael Luggen",
      company: "Federal Chancellery (FCh)",
      companyURL: "https://www.bk.admin.ch",
      url: "mailto:michael.luggen@bk.admin.ch"
    },
    {
      name: "Benedikt Hitz-Gamper",
      company: "Bern University of Applied Sciences (BFH)",
      companyURL: "https://www.bfh.ch",
      url: "mailto:benedikt.hitz@bfh.ch",
    }],
    logos: [
      {
        src: "img/logo.png",
        url: "https://www.bk.admin.ch/bk/en/home.html",
        alt: "Federal Chancellery (FCh)",
        width: 230,
        height: 75,
        id: "fch-logo",
      },
    ],
  };

module.exports = respecConfig

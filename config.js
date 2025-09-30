var respecConfig = {
    specStatus: "base",
    shortName: 'paf-link',
    subtitle: "Version 1.0",
    edDraftURI: null,
    format: 'markdown', 
    latestVersion: "https://paf.link",
    maxTocLevel: 2,
    preProcess: [loadTurtle],
    postProcess: [jumpTo, window.respecMermaid.createFigures],
    github: {
      repoURL: "https://github.com/swiss/paf-link",
      branch: "main", // alternative branch
    },
    formerEditors: [{
      name: "Jörg De Bernardi",
      company: "Federal Chancellery (FCh)",
      companyURL: "https://www.bk.admin.ch",
      url: "mailto:joerg.debernardi@bk.admin.ch"
    },
    {
      name: "Théophile Boucard",
      company: "Federal Chancellery (FCh)",
      companyURL: "https://www.bk.admin.ch",
      url: "mailto:theophile.boucard@bk.admin.ch"
    }],
    editors: [{
      name: "Benedikt Hitz-Gamper",
      company: "Bern University of Applied Sciences (BFH)",
      companyURL: "https://www.bfh.ch",
      url: "mailto:benedikt.hitz@bfh.ch",
    },{
      name: "Michael Luggen",
      company: "Federal Chancellery (FCh)",
      companyURL: "https://www.bk.admin.ch",
      url: "mailto:michael.luggen@bk.admin.ch"
    },{
      name: "Louis Bernath",
      company: "Federal Chancellery (FCh)",
      companyURL: "https://www.bk.admin.ch",
      url: "mailto:louis.bernath@bk.admin.ch"
    }],
    logos: [
      {
        src: "img/logo.png",
        url: "https://www.bk.admin.ch/bk/en/home.html",
        alt: "Federal Chancellery (FCh)",
        width: 230,
        height: 58,
        id: "fch-logo",
      },
    ],
  };

module.exports = respecConfig

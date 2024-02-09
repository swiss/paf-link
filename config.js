var respecConfig = {
    specStatus: "unofficial",
    shortName: 'paf-link',
    edDraftURI: "https://paf.link/",
    format: 'markdown', 
    latestVersion: null,
    maxTocLevel: 4,
    preProcess: [loadTurtle, window.respecMermaid.createFigures],
    postProcess: [jumpTo],
    github: {
      repoURL: "https://github.com/swiss/paf-link",
      branch: "main", // alternative branch
    },
    editors: [{
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
    }]
  };

module.exports = respecConfig

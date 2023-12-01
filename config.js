var respecConfig = {
    specStatus: "unofficial",
    shortName: 'paf-link',
    edDraftURI: "https://paf.link/",
    latestVersion: null,
    maxTocLevel: 4,
    postProcess: [jumpTo],
    github: {
      repoURL: "https://github.com/bequrios/paf-link",
      branch: "main", // alternative branch
    },
    authors: [{
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

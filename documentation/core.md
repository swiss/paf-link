# Public Affairs (paf.link): Layer 2

## Classes

### Proposal & Decision
[TODO] Describe the binome of proposal and decision. 
* The only answer on Proposal can be a Decision.
* (Also explain that it should only be used in the process where the decision becomes authorative (independent of level). For the use of informative decisions see "Information".)
* [TODO] Make examples: Beispiele: BR-Antrag -> BR-Beschluss; Parlamentarischer Vorstoss -> Verabschiedung des parlamentarischen Vorstosses; 

### paf:Proposal {#Proposal} (subClass of prov:Activity)
* Antrag
* proposition
* proposta

This is the activity in the process to formally ask for a decision.

#### Properties

### paf:proposalSubmitter (subProperty of prov:wasAssociatedWith)

### paf:hasProposalSubmitter ([TODO] vs prov:qualifiedAssociation and fixed prov:hadRole paf:proposalSubmitter) (subProperty of prov:qualifiedAssociation)
The Agent (Person or Group) which submits the Proposal.

```turtle example
 prov:qualifiedAssociation [
        a prov:Association;
        prov:agent   :[EFD](https://ld.admin.ch/department/V);
        prov:hadRole paf:ProposalSubmitter;
        rdfs:comment "The EDI is the issuer of this proposoal."@en
    ];
```

 vs.

```turtle example
 paf:hasProposalSubmitter [
        a prov:Association;
        paf:proposalSubmitter: [EFD](https://ld.admin.ch/department/V);
        prov:hadRole :pafProposalSubmitter;
        rdfs:comment "The EDI is the issuer of this proposoal."@en
    ];
```

### paf:hasProposalReceiver

#### References
- [^paf_proposal_1] https://www.termdat.bk.admin.ch/entry/56995
- [^paf_proposal_submitter] https://www.termdat.bk.admin.ch/entry/109151








### paf:Decision {#Decision} (subClass of prov:Activity)
* Entscheid
* décision
* decisione

This is the activity in the process to answer in a formally asked proposal.


###  Consultation & Comment
* Beispiele: Vernehmlassung; Ämterkonsultation; Mitberichtsverfahren
Konsultation -> Stellungnahme 

### paf:Consultation (subClass of prov:Activity)
* Konsultation
* consultation
* consultazione


https://www.termdat.bk.admin.ch/entry/56977

### paf:Comment (subClass of prov:Activity)
* Stellungnahme
* avis
* parere ([TODO] check)


https://www.termdat.bk.admin.ch/entry/23059


### Mandate & Resolution

* Beispiele: Auftrag zur Erarbeitung einer Stellungnahme der BK an ein Departement -> Erledigung in Form eines Antrags an den Bundesrat; Verabschiedung einer Motion durch die Bundesversammlung -> Auftrag an den BR, die Motion umzusetzen; Brief der GPK an den Bundesrat -> Auftrag, der GPK zu antworten*)

### paf:Mandate (subClass of prov:Activity)
* Auftrag
* mandat
* mandato

https://www.termdat.bk.admin.ch/search/entry/109134
### paf:Resolution (subClass of prov:Activity)
[TODO] resolution comes from terminology of the parlament, potentially, it is better to have a more common term to day "done".
* Erledigung (Auflösung?)
* resolution
* risoluzione

https://www.termdat.bk.admin.ch/entry/95501


### Information & Acknowledgement

### paf:Information (subClass of prov:Activity)
* Information
* information
* informazione

The activity of sendin an information.

https://www.termdat.bk.admin.ch/entry/380634

### paf:Acknowledgement (subClass of prov:Activity)









# Swiss Public Affairs (ch.paf.link): Layer 3



Définition : 

#### objet soumis à délibération et procédure parlementaire

##### Introduction 


##### Initiative Parlementaire 

Nature : 

Avancement : 

Groupe : 

État : Donner suite / ne pas donner suite 

##### Initiative Déposée par un canton


Nature : 

Groupe : 

État : 


##### Motion

![[Exemple Motion.pdf]]

Nature : 

Groupe : Interventions parlementaires 

État : 

##### Postulat

Nature : 

Groupe : Interventions parlementaires 

État : 

##### Interpellation

Nature : 

Groupe : Interventions parlementaires 

État : 

##### Question

Nature : 

Groupe : Interventions parlementaires 

État : 

##### Question posée dans le cadre de l'heure des questions au Conseil national

Groupe : Interventions parlementaires 

État : 


# Namespaces Declarations


# References
[[Vocabulary Specification]]
[[The Prov-SE Namespace]]

## Modèles complémentaires

- https://sparontologies.github.io/frbr/current/frbr.html
- https://version.link
- https://cube.link
- https://www.loc.gov/catdir/cpso/FRBRFrench.pdf
- https://sphn.ch/network/data-coordination-center/the-sphn-semantic-interoperability-framework/

## Sources : 

- [^1] https://www.parlament.ch/fr/über-das-parlament/portrait-du-parlement/objets-soumis-deliberation-et-procedure-parlementaire/initiative-parlementaires-initiatives-deposees-par-des-cantons-et-interventions
- [^2] https://www.parlament.ch/fr/über-das-parlament/portrait-du-parlement/statut-assemblee-federale/assemblee-federale-et-le-conseil-federal/interventions-parlementaires
- https://www.bj.admin.ch/dam/bj/de/data/staat/legistik/hauptinstrumente/gleitf-d.pdf.download.pdf/gleitf-d.pdf

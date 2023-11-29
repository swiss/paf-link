# Public Affairs (paf.link): Layer 2

## Classes

### Proposal and Decision
[todo] Describe the binome of proposal and decision. 
* The only answer on Proposal can be a Decision.
* (Also explain that it should only be used in the process where the decision becomes authorative (independent of level). For the use of informative decisions see "Information".)
* Make examples: Beispiele: BR-Antrag -> BR-Beschluss; Parlamentarischer Vorstoss -> Verabschiedung des parlamentarischen Vorstosses; 

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




Konsultation -> Stellungnahme 

Beispiele: Vernehmlassung; Ämterkonsultation; Mitberichtsverfahren

Auftrag -> Erledigung

Beispiele: Auftrag zur Erarbeitung einer Stellungnahme der BK an ein Departement -> Erledigung in Form eines Antrags an den Bundesrat; Verabschiedung einer Motion durch die Bundesversammlung -> Auftrag an den BR, die Motion umzusetzen; Brief der GPK an den Bundesrat -> Auftrag, der GPK zu antworten*) 
Information


### Agent

### Activity



Définition : 

#### objet soumis à délibération et procédure parlementaire

##### Introduction 

Les activités de l'Administration fédérale sont notamment caractérisées par un type particulier d'activité, il s'agit de ce que l'on communément appeler "Verbe". Ces Verbes correspondent aux activités réalisées par les "parlementaires" au près du "Conseil fédéral". Cette catégorie très particulière d'activité n'existe qu'entre ceux deux types d'agents. 
L'intérêt de définir spécifiquement ces activités avec des caractéristiques claires permet d'envisager l'automatisation de certains processus lors des interactions entre les activités parlementaires et le conseil fédéral. 
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







Notre modèle [[Modèle Générale Prov-SE Ontology]] 


créer des catégorie d'activité (demande, réponse etc) 


Bare Bones Liste des verbes. Les trois premiers sont structurellement des "paires". Je veux dire par là que l'un ne devrait pas exister sans l'autre, bien que le premier verbe soit généralement antérieur et provoque une "attente" jusqu'à ce que le deuxième "verbe" correspondant ait également eu lieu. Le quatrième verbe - "information" - ne fait pas nécessairement partie d'une paire et est donc un verbe "autonome". Cela n'exclut pas

Demande -> Décision 

Exemples : Proposition du CF -> Décision du CF ; Intervention parlementaire -> Adoption de l'intervention parlementaire ;

Consultation -> Avis 

Exemples : Consultation ; Consultation des offices ; Procédure de co-rapport

Mandat -> Exécution

Exemples : Mandat d'élaborer une prise de position de la ChF à un département -> exécution sous forme de proposition au Conseil fédéral ; adoption d'une motion par l'Assemblée fédérale -> mandat au CF de mettre en œuvre la motion ; lettre de la CdG au Conseil fédéral -> mandat de répondre à la CdG*) 

Information

* Une lettre de la CdG au Conseil fédéral n'est pas une "consultation -> prise de position", car le Conseil fédéral n'a pas, dans les faits, la liberté de ne pas prendre position. Je n'utiliserais la "consultation -> prise de position" que dans les cas où les acteurs auxquels on s'adresse décident eux-mêmes s'ils veulent ou non déposer une prise de position.



### Entity

### Item




# Swiss Public Affairs (ch.paf.link): Layer 3





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

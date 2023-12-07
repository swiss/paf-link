# Layer 3: Swiss Public Affairs (ch.paf.link) {#ch-paf-link}

## Office Consultation Registration
### Activity
<aside class="example">

```turtle
:OCo_2023.2118 a paf:ConsultationActivity ;
	paf-ch:officeConsultationStarted "2023-10-19T00:00:00Z"; # official start of the consultation / sub-property of prov:startedAtTime
	prov:endedAtTime "2023-11-01T00:00:00Z": # deadline for the inputs of the consultation
  prov:qualifiedAssociation [
        a prov:Association;
        prov:agent <https://ld.admin.ch/office/III.1.4>; # Staatssekretariat für Migration
        prov:hadRole paf:ConsultationOrganizationCreator.
  ].
  prov:qualifiedAssociation [
        a prov:Association;
        prov:agent <https://ld.admin.ch/office/III.1.2>; # Bundesamt für Justiz
        prov:hadRole paf:ExplicitConsultationReceiver.
  ].

:registration_OCo_2023.2118 a paf:InformationActivity ;
  prov:wasInformedBy :OCo_2023.2118;
	prov:startedAtTime "2023-10-08T14:23:00Z"; # time of the registration
    prov:qualifiedAssociation [
        a prov:Association;
        prov:agent :alois_sumision; # official submitting person of the consultation
        prov:hadRole paf:ConsultationSubmitter
    ].
    prov:qualifiedAssociation [
        a prov:Association;
        prov:agent :bertha_recipiente; # explicitly stated receiver of the consultation
        prov:hadRole paf:ConsultationReceiver;
        [TODO, check if correct] prov:actedOnBehalfOf <https://ld.admin.ch/office/III.1.2>.
    ].
    prov:qualifiedAssociation [
        a prov:Association;
        prov:agent :arthur_registro; #  person registrating the consultation
        prov:hadRole paf:ConsultationRegistrator
    ].
```
</aside>

### Entity

<aside class="example">

```turtle

:Test_2023.2943 a paf:ConsultationEntity ;
	# manque peut-être quelque chose ici 
	prov:generatedAtTime "2023-10-19T00:00:00Z"^^xsd:dateTime; #date of the generation of the entity
prov:qualifiedGeneration [
	a prov:Generation;
	prov:activity : Consultation
	prov:wasGeneratedBy :Consultation;
	prov:agent <https://ld.admin.ch/office/III.1.4>; # Staatssekretariat für Migration
	

].

# Intégrer l'item au sein de l'entity em utilisant FRBR
#https://vocab.org/frbr/core


```
</aside>

### Agent

<aside class="example">

```turtle
:John_Doe a paf:Agent;
	a  prov:Agent, prov:Person;
	foaf:firstname "John"^^xsd:string;
	foaf:surname "Doe"^^xsd:string;
	foaf:mbox <mailto:john.doe@examle.org>;
	foaf:phone "0041583414901"^^xsd:string;
	prov:actedOnBehalfof :secrétariat_général;
.

:secrétariat_général a paf:Agent;
	a prov:Agent, prov:Organization;
	prov:Agent <https://ld.admin.ch/office/III.1.1>; # Generalsekretariat
	foaf:name "Secrétariat général";
.
```
</aside>

## Procedural Request (Motion, Postulate) - Proposal for Resolution or Information

### Procedural Request ProposalActivity


### Procedural Request DecisionActivity


### Procedural Request InformationActivity


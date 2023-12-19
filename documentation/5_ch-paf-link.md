# Layer 3: Swiss Public Affairs (ch.paf.link) {#ch-paf-link}

## Office Consultation Registration
### Activity
<aside class="example">

```turtle

# 1st registration
:ActID-23097234 a paf:InformationActivity ;
  	prov:generation :OCo_2023.2118;
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

# 2nd generation of id

:OCo_2023.2118 a prov:Entity, ch-paf:OfficeConsultation .


# 3rd consultation Activity
:ActID-2002039 a paf:ConsultationActivity ;
	prov:informedBy :ActID-23097234;

	prov:uses :OCo_2023.2118
	prov:uses :CuriaID23.23223

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


# 4th responses

:ActID-20020392 a paf:CommentActivity ;
	prov:wasInformedBy :ActID-2002039;
	prov:used :OCo_2023.2118
	prov:used [a ediProcessNumber;
			rdfs:title "EDI-223s2"
		  ]
	paf-ch:officeConsultationCommented "2023-10-19T00:00:00Z"; # official start of the consultation / sub-property of prov:startedAtTime

  	prov:qualifiedAssociation [
        	a prov:Association;
        	prov:agent <https://ld.admin.ch/office/III.1.2> # BJ
        	prov:hadRole paf:ConsultationCommenter.
  	].
	prov:uses :ActID-2002392-answer1;

:ActID-2002392-answer1 a prov:Entity.

:ActID-20020394 a paf:CommentActivity ;
	prov:informedBy :ActID-2002039;
	prov:uses :OCo_2023.2118
	paf-ch:officeConsultationCommented "2023-10-19T00:00:00Z"; # official start of the consultation / sub-property of prov:startedAtTime


```
</aside>

### Entity

<aside class="example">

```turtle

:Test_2023.2943 a paf:ConsultationEntity ;
	# manque peut-être quelque chose ici 
	prov:generatedAtTime "2023-10-19T00:00:00Z"^^xsd:dateTime; #date of the generation of the entity

	ch-paf:oCoTitle "Titel" der ÄK"@de;
	ch-paf:oCoRequestTo "Antrag an" @de;
	ch-pagf-oCoDate "Datum" @de;
	ch-paf:oCoIntroduction "Einleitung" @de;
	ch-paf:oCoIssues "Problemstellung" @de;
	ch-paf:oCoModification "Änderung" @de;
	ch-paf:oCoConsequences "Auswirkungen" @de;
	ch-paf:oCoRelationshipToLaW "Verhältnis zum Recht" @de;
	ch-paf:oCoDeadlineFoPublication "Frist für die Veröffentlichung"  @de;
	ch-paf:oCoComments "Stellungnahmen"  @de;
	ch-paf:oCoRequestFor "Antrag von"  @de;
	ch-paf:oCoAnnexes "Beilagen" @de;


	a owl:Manifestation ; # https://sparontologies.github.io/frbr/current/frbr.html#d4e1305
	owl:isEmbodimentOf Expression_Consultation_des_offices_1 ;
	owl:isPartOf Manifestation_Document_1 .




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
	prov:Agent <https://ld.admin.ch/office/III.1.1>;
	foaf:name "Secrétariat général";
.
```
</aside>

## Procedural Request (Motion, Postulate) - Proposal for Resolution or Information

### Internal Request TaskActivity 
* task id
* based on a Curia ID -> with title and text and potentialy link
* language
* office / responsible person
* chapter -> is it done or not?
* connex 
( from BK to Dep)

### Procedural Request ProposalActivity
For Mopo Report, chapter 1, propose a resolution (Abschreibung) (task done).
( from BK to PD)


### Procedural Request DecisionActivity
For MoPo Report on each Proposal Activity, the answer on Chapter 1 proposals.
( from PD to BK)


### Procedural Request InformationActivity
For Mopo Report, chapter 2, informing on status of procedural request.
( from BK to PD)



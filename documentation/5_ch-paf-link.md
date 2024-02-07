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




### Procedural Request Proposal for Abandonment ProposalActivity (Chapter1)
For Mopo Report, chapter 1, propose a resolution (Abschreibung) (task done).
( from BK to PD)

<aside class="example">

```turtle

# 1st registration
:PropAct-19.4390 a paf:ProceduralRequest-ProposalForAbandonment-ProposalActivity ; # Chapter1 
  	prov:used :Curia-19.4390;
	prov:startedAtTime "2020-10-08T14:23:00Z"; # Time of Proposal

    prov:qualifiedAssociation [
        a prov:Association;
        prov:agent <https://ld.admin.ch/FCh>; # 
        prov:hadRole paf:Proposer;
    ].

# 2nd Entity

"""Die am 1. Januar 2022 in Kraft getretenen Weisungen des Bundesrates vom 18. August 2021 über Administrativ- und 
Disziplinaruntersuchungen (BBl 2021 1903) bezeichnen Beratungsstellen in Sachen Administrativ- und Disziplinaruntersuchungen
und legen die Konsultations- und Dokumentationspflichten der für die Anordnung dieser Untersuchungen zuständigen Stellen fest. 
Diese Weisungen sind für die Departemente und die ihnen unterstellten Verwaltungseinheiten sowie die Bundeskanzlei verbindlich 
und werden in der Praxis umgesetzt.
Der Bundesrat erachtet das Anliegen der Motion als erfüllt und beantragt deren Abschreibung"""

# 2nd generation of id

:Curia-19.4390; a prov:Entity, ch-paf:Motion . (ch-paf:Postulate)


```
</aside>

### Procedural Request DecisionActivity (Chapter 1 / Answer)
For MoPo Report on each Proposal Activity, the answer on Chapter 1 proposals.
( from PD to BK)


### Procedural Request Report Of State InformationActivity (Chapter 2)
For Mopo Report, chapter 2, informing on status of procedural request.
( from BK to PD)
<aside class="example">

```turtle
# Chapter2 ProceduralRequest-ReportOfState-InformationActivity
```
</aside>

<aside class="example">

### Procedural Request Report of Abandoned (Chapter 3)
For Mopo Report, chapter 3 / Annex1, informing on already abandoned procedural requests.
( from BK to PD)

```turtle
# Annex 1 (Chapter3) ProceduralRequest-ReportOfAbandoned-InformationActivity
```
</aside>

### Full Example

<aside class="example">

```turtle
@prefix : <https://example.com/> .
@prefix ch-paf: <https://ch.paf.link/> .
@prefix paf: <https://paf.link/> .
@prefix prov: <http://www.w3.org/ns/prov#> .
@prefix schema: <http://schema.org/> .

:mo-po-creation-activity-1 a ch-paf:MoPoCreationActivity;
	prov:used :mo-po-entity-1.

:mo-po-entity-1 a ch-paf:MoPoEntity;
	prov:wasGeneratedBy :mo-po-creation-activity-1;
	schema:identifier "2019 P 18.3750";
	schema:name "Verstärkte Regulierung der EU im Bereich der internationalen Rheinschifffahrt. Interessenwahrung der Schweiz (Janiak)";
	schema:text "Der Bundesrat wird gebeten, in einem Bericht aufzuzeigen, wie sich die Entwicklung des Rheinregimes...".

:mo-po-report-activity-1 a ch-paf:MoPoReportActivity;
	prov:used :mo-po-entity-1, :mo-po-report-1;
	prov:wasInformedBy :mo-po-creation-activity-1.
	
:mo-po-report-1 a ch-paf:MoPoReport;
	schema:text "Das Postulat beauftragt den Bundesrat aufzuzeigen...".

:mo-po-proposal-activity-1 a ch-paf:MoPoProposalActivity;
	prov:used :mo-po-entity-1, :mo-po-proposal-1;
	prov:wasInformedBy :mo-po-report-activity-1.

:mo-po-proposal-1 a ch-paf:MoPoProposal;
	prov:text "Postulatsbericht vom 16. Dezember 2022...".

:mo-po-proposal-decision-activity-1 a ch-paf:MoPoProposalDecisionActivity;
	prov:used :mo-po-entity-1, :mo-po-proposal-decision-1;
	prov:wasInformedBy :mo-po-proposal-activity-1.

:mo-po-proposal-decision-1 a ch-paf:MoPoProposalDecision;
	ch-paf:moPoProposalDecision ch-paf:MoPoProposalAccepted.
```

</aside>

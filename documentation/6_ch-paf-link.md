# Layer 3: Swiss Public Affairs (ch.paf.link) {#ch-paf-link}

## Office Consultation

An office consultation is an example of [consultation and comment activities]{#consultation-comment-activities}. In such a consultation, the submitter of the consultation seeks for comments of different offices.

### Full Example

<aside class="example" title="Full Example on Office Consultation">
    Full turtle listing for: <a href="https://github.com/swiss/paf-link/blob/main/examples/office_consultation.ttl" target="_blank">Full example on office consultation</a>.
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

:Curia-19.4390; a prov:Entity, chpaf:Motion . (chpaf:Postulate)


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
@prefix chpaf: <https://ch.paf.link/> .
@prefix paf: <https://paf.link/> .
@prefix prov: <http://www.w3.org/ns/prov#> .
@prefix schema: <http://schema.org/> .

:mo-po-admission-activity a chpaf:MoPoAdmissionActivity, prov:Activity;
	schema:comment "The activity that brings the MoPo into the system boundaries"@en;
	prov:used :mo-po-admission-entity, :mo-po-identifier-entity.

:mo-po-admission-entity a chpaf:MoPoAdmissionEntity, prov:Entity;
	schema:comment "The entity that contains all the known info about the MoPo from outside the system boundaries"@en.

:mo-po-identifier-activity a chpaf:MoPoIdentifierActivity, prov:Activity;
	schema:comment "The activity that creates the identifier entity."@en;
	prov:wasInformedBy :mo-po-admission-activity;
	prov:used :mo-po-identifier-entity.

:mo-po-identifier-entity a chpaf:MoPoIdentifierEntity, prov:Entity;
	schema:comment "The entity tha represents the identifier of the MoPo."@en;
	prov:wasGeneratedBy :mo-po-identifier-activity;
	prov:wasDerivedFrom :mo-po-admission-entity;
	schema:identifier "2019 P 18.3750".

:mo-po-creation-activity a chpaf:MoPoCreationActivity, prov:Activity;
	schema:comment "The activity that adds all the available information to the MoPo."@en;
	prov:wasInformedBy :mo-po-identifier-activity;
	prov:used :mo-po-identifier-entity.

:mo-po-entity a chpaf:MoPoEntity, prov:Entity;
	schema:comment "The entity that represents the actual MoPo."@en;
	prov:wasGeneratedBy :mo-po-creation-activity;
	prov:wasDerivedFrom :mo-po-identifier-entity;
	schema:name "Verstärkte Regulierung der EU im Bereich der internationalen Rheinschifffahrt. Interessenwahrung der Schweiz (Janiak)";
	schema:text "Der Bundesrat wird gebeten, in einem Bericht aufzuzeigen, wie sich die Entwicklung des Rheinregimes...".

:mo-po-report-activity a chpaf:MoPoReportActivity, prov:Activity;
	schema:comment "The activity that reports the MoPo."@en;
	prov:wasInformedBy :mo-po-creation-activity;
	prov:used :mo-po-identifier-entity.
	
:mo-po-report-entity a chpaf:MoPoReportEntity, prov:Entity;
	schema:comment "The entity that represents the report of the MoPo."@en;
	prov:wasGeneratedBy :mo-po-report-activity;
	prov:wasDerivedFrom :mo-po-entity;
	schema:text "Das Postulat beauftragt den Bundesrat aufzuzeigen...".

:mo-po-proposal-activity a chpaf:MoPoProposalActivity, prov:Activity;
	schema:comment "The activity that makes a proposal to the MoPo."@en;
	prov:wasInformedBy :mo-po-report-activity;
	prov:used :mo-po-identifier-entity.
	
:mo-po-proposal-entity a chpaf:MoPoProposalEntity, prov:Entity;
	schema:comment "The entity that represents the proposal to the MoPo."@en;
	prov:wasGeneratedBy :mo-po-proposal-activity;
	prov:wasDerivedFrom :mo-po-report-entity;
	schema:text "Postulatsbericht vom 16. Dezember 2022...".

:mo-po-proposal-decision-activity a chpaf:MoPoProposalDecisionActivity, prov:Activity;
	schema:comment "The activity that leads to a decision to the MoPo."@en;
	prov:wasInformedBy :mo-po-proposal-activity;
	prov:used :mo-po-identifier-entity.

:mo-po-proposal-decision-entity a chpaf:MoPoProposalDecisionEntity, prov:Entity;
	schema:comment "The entity that represents the decision to the MoPo."@en;
	prov:wasGeneratedBy :mo-po-proposal-decision-activity;
	prov:wasDerivedFrom :mo-po-proposal-entity;
	chpaf:moPoProposalDecision chpaf:MoPoProposalAccepted.
```

</aside>

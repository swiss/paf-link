# Layer 2: Public Affairs (paf.link) {#paf-link}

PROV-O is deliberately very open in its design to allow to be used in a wide variety of application scenarios. The paf.link schema builds on this open foundation and defines some narrower **design principles** how to use PROV-O to represent public affaires.

## Public Affairs

In its simplest form, public affairs are **activities** undertaken by **actors** (person or systems) that result in **entities** that contain some information.

## Design Principles

### Activities

Activities are bound to to **take place at a certain point in time** and can have a **time duration**. They are **executed by actors** that can be single persons or groups of people or technical systems. Activities are **chained in temporal succession** to build an **activity stream** that can also branch and reunite.

<figure id="activities">
  <img src="img/activities.svg" alt="Activity Stream" />
  <figcaption>
    Activity stream.
  </figcaption>
</figure>

Activities can have **input entities** that provide the necessary data that the activity can happen. Activities do not contain results of the activity itself but they can produce **output entities** representing the result of the activity.

<figure id="entities_usage">
  <img src="img/entities_usage.svg" alt="Input and Output Entities" />
  <figcaption>
    Input and output entities of a certain activity.
  </figcaption>
</figure>

### Entities

Entities are created by activities representing the result of a specific activity (e.g. votin result of a voting activity). They can also serve as input information for later activities.

Entities are modelled in an **atomic** way meaning that every entity contains only **one main information** linked by a specific RDF predicate (e.g. schema:name or schema:description). This main information can be **enriched by metadata** (e.g. the exact voting result for an entity stating an acceptance result). The reason for this strategy of atomic entities is to allow for simpler addition of metadata without creating additional reification (blank) nodes.

If an entity needs to be changed, complemented or deleted, a subsequent entity has to be generated defining the status of the former entity (e.g. not valid anymore or complemented by). Once an entity is created by an activity, it can not "just be deleted". This is to ensure **complete traceability**.

Entities are not directly linked to actors. This can only be done via the corresponding activity.

<figure id="entities_succession">
  <img src="img/entities_succession.svg" alt="Succession of Entities" />
  <figcaption>
    Atomic entities with one main information. Validity symbolised by colors.
  </figcaption>
</figure>

### View Points

The challenge with public affairs is that they do **look differently depending on the view point** on the affair. To allow for these different perspectives, a paf:ViewPoint can be defined that links to all the activities, actors and entities relevant for this specific perspective via dcterm:hasPart (no subclass of prov:used can be used for this because the range of this predicate has to allow for activities, actors and entities at the same time).

View points also allow to have different identifiers for different perspectives of the affair. This would be done by having point different view points to different entities containing the `schema:identifier` predicate.

## Basic Example

The following example illustrates a very basic affair based on three activities:

- registration of the affair in the system
- proposal to a deciding body
- decision activity

The affair uses three different predicates and therefore three entities:

- schema:identifier
- schema:name
- schema:description

<aside class="example" title="Basic Example to Show the Design Principles.">

```turtle
@prefix : <https://example.com/> .
@prefix paf: <https://paf.link/> .
@prefix prov: <http://www.w3.org/ns/prov#> .
@prefix schema: <http://schema.org/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.
@prefix dcterm: <http://purl.org/dc/terms/>.

:registration-activity a prov:Activity;
    prov:startedAtTime "2024-01-01".

:identifier-entity a prov:Entity;
    prov:wasGeneratedBy :registration-activity;
    rdf:predicate schema:identifier;
    schema:identifier "CH-1234".

:name-entity a prov:Entity;
    prov:wasGeneratedBy :registration-activity;
    rdf:predicate schema:name;
    schema:name "Colocambiado".

:description-entity a prov:Entity;
    prov:wasGeneratedBy :registration-activity;
    rdf:predicate schema:description;
    schema:description "Change background color of Swiss national flag to blue".

:proposal-activity a prov:Activity;
    prov:wasInformedBy :registration-activity;
    prov:startetAtTime "2024-01-02";
    prov:used :identifier-entity, :name-entity, :description-entity;
    prov:qualifiedAssociation [ 
        a prov:Association; 
        prov:agent :Colocambiado;
        prov:hadRole paf:ProposalSubmitter];
    prov:qualifiedAssociation [
        a prov:Association;
        prov:agent :national-council;
        prov:hadRole paf:ProposalReceiver].

:decision-activity a prov:Activity;
    prov:wasInformedBy :proposal-activity;
    prov:startetAtTime: "2024-01-03";
    prov:used :identifier-entity, :name-entity, :description-entity;
    prov:qualifiedAssociation [
        a prov:Association;
        prov:agent :national-council;
        prov:hadRole paf:DecisionMaker].

:decision-entity a prov:Entity;
    prov:wasGeneratedBy :decision-activity;
    rdf:predicate paf:decision;
    paf:decision paf:Accepted;
    paf:voteYes 130;
    paf:voteNo 70.

:view-point a paf:ViewPoint;
    dcterm:hasPart :registration-activity, :proposal-activity, :decision-activity, :identifier-entity, :name-entity, :description-entity, :decision-entity.
```

</aside>

## Proposal & Decision Activities

[TODO] Describe the binome of proposal and decision. 

* The only answer on Proposal can be a Decision.
* (Also explain that it should only be used in the process where the decision becomes authorative (independent of level). For the use of informative decisions see "Information".)
* [TODO] Make examples: Beispiele: BR-Antrag -> BR-Beschluss; Parlamentarischer Vorstoss -> Verabschiedung des parlamentarischen Vorstosses; 

### Class **paf:ProposalActivity** {#ProposalActivity}

paf:ProposalActivity is an rdfs:subClass of prov:Activity

[Translations](https://www.termdat.bk.admin.ch/entry/56995):

* E: proposal
* D: Antrag
* F: proposition
* I: proposta

This is the activity in the process to formally ask for a decision.

#### Class **paf:ProposalSubmitter** {#ProposalSubmitter}

paf:ProposalSubmitter is an rdfs:subClass of prov:Agent

The agent (person or group) which submits the proposal.

#### Class **paf:ProposalReceiver** {#ProposalReceiver}

paf:ProposalReceiver is an rdfs:subClass of prov:Agent

The agent (person or group) which receives the proposal.

#### Usage of prov:qualifiedAssociation

<aside class="example" title="Usage of prov:qualifiedAssociation in Turtle">

```turtle
:proposal-activity-1 a paf:ProposalActivity;
    prov:qualifiedAssociation [
        a prov:Association;
        prov:agent :proposal-submitter-1;
        prov:hadRole paf:ProposalSubmitter;
        rdfs:comment "proposal-submitter-1 is the issuer of proposal-activity-1."@en;
    ].

:proposal-submitter-1 a prov:Agent;
    schema:name "Proposal Submitter 1".
```

</aside>

<aside class="example" title="Usage of prov:qualifiedAssociation in XML">

```xml
<prov:document>

    <paf:ProposalActivity prov:id=":proposal-activity-1">
        <prov:qualifiedAssociation prov:ref="association-1"/>
    </paf:ProposalActivity>

    <prov:Association prov:id="association-1">
            <prov:agent prov:ref=":proposal-submitter-1"/>
            <prov:hadRole prov:ref="paf:ProposalSubmitter"/>
            <rdfs:comment xml:lang="en">proposal-submitter-1 is the issuer of proposal-activity-1.</rdfs:comment>
    </prov:Association>

    <prov:Agent prov:id=":proposal-submitter-1">
        <schema:name>Proposal Submitter 1</schema:name>
    </prov:Agent>

</prov:document>
```

</aside>

#### Usage of prov:wasInformedBy

To connect a higher level process, e.g. a Parliament Affair Identificator.

<aside class="example" title="Usage of prov:wasInformedBy in Turtle">

```turtle
:proposal-activity-1 a paf:ProposalActivity;
    prov:wasInformedBy :affair-1.

:affair-1 a prov:Activity;
    rdfs:comment "affair-1 is a higher level activity."@en.
```

</aside>

<aside class="example" title="Usage of prov:wasInformedBy in XML">

```xml
<prov:document>
    
    <paf:ProposalActivity prov:id=":proposal-activity-1">
        <prov:wasInformedBy prof:ref=":affair-1"/>
    </paf:ProposalActivity>
    
    <paf:Activity prov:id=":affair-1">
        <rdfs:comment xml:lang="en">affair-1 is a higher level activity.</rdfs:comment>
    </paf:Activity>
    
</prov:document>
```

</aside>

### Class **paf:DecisionActivity** {#DecisionActivity}

paf:DecisionActivity is a rdfs:subClass of prov:Activity

[Translations](https://www.termdat.bk.admin.ch/entry/414335):

* Entscheid
* décision
* decisione

This is the activity to formally answer the corresponding paf:ProposalActivity.

#### Class **paf:DecisionMaker** {#DecisionMaker}

paf:DecisionMaker is a rdfs:subClass of prov:Activity

[Translations](https://www.termdat.bk.admin.ch/entry/132147)

The agent (person or group) which issues the decision.

#### Usage of prov:qualifiedAssociation

<aside class="example" title="Usage of prov:qualifiedAssociation in Turtle">

```turtle
:decision-activity-1 a paf:DecisionActivity;
    prov:qualifiedAssociation [
        a prov:Association;
        prov:agent :decision-maker-1;
        prov:hadRole paf:DecisionMaker;
        rdfs:comment "decision-maker-1 is the issuer of decision-activity-1."@en;
    ].
```

</aside>

### Full Example on Proposal & Decision

<aside class="example" title="Full Example on Proposal & Decision in Turtle">

```turtle
@prefix : <https://example.com/> .
@prefix paf: <https://paf.link/> .
@prefix prov: <http://www.w3.org/ns/prov#> .
@prefix schema: <http://schema.org/> .

:proposal-activity-1 a paf:ProposalActivity;
    prov:qualifiedAssociation [
        a prov:Association;
        prov:agent :proposal-submitter-1;
        prov:hadRole paf:ProposalSubmitter;
    ];
    prov:qualifiedAssociation [
        a prov:Association;
        prov:agent :proposal-receiver-1;
        prov:hadRole paf:ProposalReceiver;
    ];
	prov:used :proposal-1;
	prov:wasInformedBy :parlamentary-activity-1;
	prov:wasInformedBy :executive-activity-1;
	prov:wasInformedBy :law-activity-1.

:proposal-1 a prov:Entity;
	prov:wasGeneratedBy :proposal-activity-1.

:parlamentary-activity-1 a prov:Activity;
	schema:identifier "23.0123".

:executive-activity-1 a prov:Activity;
	schema:identifier "321".

:law-activity-1 a prov:Activity;
	schema:identifier "SR21.1".

:decision-activity-1 a paf:DecisionActivity;
    prov:qualifiedAssociation [
        a prov:Association;
        prov:agent :decision-maker-1;
        prov:hadRole paf:DecisionMaker;
    ];
    prov:wasInformedBy :proposal-activity-1;
	prov:used :decision-1.

:decision-1 a prov:Entity;
	prov:wasGeneratedBy :decision-activity-1.
```

</aside>

## Consultation & Comment Activities

### Class paf:ConsultationActivity

paf:ConsultationActivity is an rdfs:subClass of prov:Activity 

[Translations](https://www.termdat.bk.admin.ch/entry/56976):

- E: Consultation
- D: Vernehmlassungsverfahren
- F: Procédure de consultation
- I: Procedura di consultazione

This  is the activity in the process to formally for a comment.

#### Class paf:ConsultationSubmitter

paf:ConsultationSubmitter is an rdfs:subClass of prov:Agent

The agent(person or group) which submits the consultation.

#### Class paff:ConsultationReceiver

paf:ConsultationReceiver is an rdfs:subClass of prov:Agent

The agent (person or group) which receives the consultation.

#### Usage of prov:qualifiedAssociation ? 

EXAMPLE : Usage of prov:qualifiedAssociation in Turtle

```jsx
:consultation-activity-1 a paf:ConsultationActivity;
    prov:qualifiedAssociation [
        a prov:Association;
        prov:agent :consultation-submitter-1;
        prov:hadRole paf:ConsultationSubmitter;
        rdfs:comment "consultation-submitter-1 is the issuer of consultation-activity-1."@en;
    ].

:consultation-submitter-1 a prov:Agent;
    schema:name "Consultation Submitter 1".
```

EXAMPLE : Usage of prov:qualifiedAssociation in XML 

```xml
<prov:document>

    <paf:ConsultationActivity prov:id=":consultation-activity-1">
        <prov:qualifiedAssociation prov:ref="association-1"/>
    </paf:ConsultationActivity>

    <prov:Association prov:id="association-1">
            <prov:agent prov:ref=":Consultation-submitter-1"/>
            <prov:hadRole prov:ref="paf:ConsultationSubmitter"/>
            <rdfs:comment xml:lang="en">consultation-submitter-1 is the issuer of consultation-activity-1.</rdfs:comment>
    </prov:Association>

    <prov:Agent prov:id=":consultation-submitter-1">
        <schema:name>Consultation Submitter 1</schema:name>
    </prov:Agent>

</prov:document>
```

#### Usage of prov:wasInformedBy  ?
EXAMPLE : Usage of prov:wasInformedBy in Turtle 

```jsx
:consultation-activity-1 a paf:ConsultationActivity;
    prov:wasInformedBy :affair-1.

:affair-1 a prov:Activity;
    rdfs:comment "affair-1 is a higher level activity."@en.
```

EXEMPLE: Usage of prov:wasInformedBy in XML

```xml
<prov:document>
    
    <paf:ConsultationActivity prov:id=":consultation-activity-1">
        <prov:wasInformedBy prof:ref=":affair-1"/>
    </paf:ConsultationActivity>
    
    <paf:Activity prov:id=":affair-1">
        <rdfs:comment xml:lang="en">affair-1 is a higher level activity.</rdfs:comment>
    </paf:Activity>
    
</prov:document>
```

### Class paf:CommentActivity

paf:CommentActivity is a rdfs:subClass of prov:Activity 

[Translations](https://www.termdat.bk.admin.ch/entry/23059):

- E: Comment
- D: Stellungsnahme
- F: avis/prise de position


This is the activity to formally answer the corresponding paf:CommentActivtiy.

#### Class paf:CommentMaker (maker est-ce le bon terme )

paf:DecisionMaker is a rdfs:subClass of prov:Activity 

Translations 

The agent (person or group) which issues the comment.

#### Usage of prov:qualifiedAssociation ? 

EXAMPLE Usage of prov:qualifiedAssociation in Turtle

```jsx
:decision-activity-1 a paf:DecisionActivity;
    prov:qualifiedAssociation [
        a prov:Association;
        prov:agent :Comment-maker-1;
        prov:hadRole paf:CommentMaker;
        rdfs:comment "comment-maker-1 is the issuer of comment-activity-1."@en;
    ].
```

### Full Example on Consultation & Comment

EXAMPLE 10: Full Example on Consultation & Comment in Turtle

```jsx
@prefix : <https://example.com/> .
@prefix paf: <https://paf.link/> .
@prefix prov: <http://www.w3.org/ns/prov#> .
@prefix schema: <http://schema.org/> .

:consultation-activity-1 a paf:ConsultationlActivity;
    prov:qualifiedAssociation [
        a prov:Association;
        prov:agent :consultation-submitter-1;
        prov:hadRole paf:ConsultationlSubmitter;
    ];
    prov:qualifiedAssociation [
        a prov:Association;
        prov:agent :consultation-receiver-1;
        prov:hadRole paf:ConsultationReceiver;
    ];
    prov:used :consultation-1;
    prov:wasInformedBy :parlamentary-activity-1;
    prov:wasInformedBy :executive-activity-1;
    prov:wasInformedBy :law-activity-1.

:proposal-1 a prov:Entity;
    prov:wasGeneratedBy :consultation-activity-1.

:parlamentary-activity-1 a prov:Activity;
    schema:identifier "23.0123".

:executive-activity-1 a prov:Activity;
    schema:identifier "321".

:law-activity-1 a prov:Activity;
    schema:identifier "SR21.1".

:decision-activity-1 a paf:CommentActivity;
    prov:qualifiedAssociation [
        a prov:Association;
        prov:agent :comment-maker-1;
        prov:hadRole paf:CommentMaker;
    ];
    prov:wasInformedBy :proposal-activity-1;
    prov:used :decision-1.

:decision-1 a prov:Entity;
    prov:wasGeneratedBy :decision-activity-1.
```

## Information & Acknowledgement Activities

### Class paf:InformationActivity
paf:InformationActivity is an rdfs:subClass of prov:Activity

[Translations](https://www.termdat.bk.admin.ch/entry/380634):

- E: Information
- D: Information
- F: Information
- I: Informazione

This is the activity in the process to formally ask for a decision.

#### Class paf:InformationSubmitter

paf:InformationSubmitter is an rdfs:subClass of prov:Agent 

The agent(person or group)which submits the information.

#### Class paff:InformationReceiver

paf:InformationReceiver is an rdfs:subClass of prov:Agent

The agent (person or group) which receives the information.

#### Usage of prov:qualifiedAssociation ? 
EXAMPLE : Usage of prov:qualifiedAssociation in Turtle 

```jsx
:information-activity-1 a paf:InformationActivity;
    prov:qualifiedAssociation [
        a prov:Association;
        prov:agent :information-submitter-1;
        prov:hadRole paf:InformationSubmitter;
        rdfs:comment "infornatuib-submitter-1 is the issuer of information-activity-1."@en;
    ].

:information-submitter-1 a prov:Agent;
    schema:name "Information Submitter 1".
```

#### Usage of prov:wasInformedBy  ? 
To connect a higher level process, e.g. a Parliament Affair Identificator.

EXAMPLE : Usage of prov:wasInformedBy in Turtle

```jsx
:information-activity-1 a paf:InformationActivity;
    prov:wasInformedBy :affair-1.

:affair-1 a prov:Activity;
    rdfs:comment "affair-1 is a higher level activity."@en.
```

EXAMPLE : Usage of prov:wasInformedBy in XML

```xml
<prov:document>
    
    <paf:InformationActivity prov:id=":information-activity-1">
        <prov:wasInformedBy prof:ref=":affair-1"/>
    </paf:InformationActivity>
    
    <paf:Activity prov:id=":affair-1">
        <rdfs:comment xml:lang="en">affair-1 is a higher level activity.</rdfs:comment>
    </paf:Activity>
    
</prov:document>
```

### Class paf:AcknowledgementActivity

paf:AcknowledgementActivity is a rdfs:subClass of prov:Activity

[Translations](https://www.termdat.bk.admin.ch/entry/379358):

- E Acknowledgement
- D Quittierung
- F Accusé de réception
- I conferma

This is the activity to formally answer the corresponding paf:InformationActivity.

#### Class paf:AcknowledgementMaker (maker est-ce le bon terme ? )

paf:AcknowledgementMaker is a rdfs:subClass of prov:Activity

The agent (person or group) which issues the decision.

#### Usage of prov:qualifiedAssociation ? 

EXAMPLE: Usage of prov:qualifiedAssociation in Turtle

```jsx
:acknowledgement-activity-1 a paf:AcknowledgementActivity;
    prov:qualifiedAssociation [
        a prov:Association;
        prov:agent :Acknowledgement-maker-1;
        prov:hadRole paf:AcknowledgementMaker;
        rdfs:comment "Acknowledgement-maker-1 is the issuer of Acknowledgement-activity-1."@en;
    ].
```

### Full Example on Information & Acknowledgement Activities

EXAMPLE : Full Example on Information & Acknowledgement in Turtle

```jsx
@prefix : <https://example.com/> .
@prefix paf: <https://paf.link/> .
@prefix prov: <http://www.w3.org/ns/prov#> .
@prefix schema: <http://schema.org/> .

:information-activity-1 a paf:InformationActivity;
    prov:qualifiedAssociation [
        a prov:Association;
        prov:agent :information-submitter-1;
        prov:hadRole paf:InformationSubmitter;
    ];
    prov:qualifiedAssociation [
        a prov:Association;
        prov:agent :information-receiver-1;
        prov:hadRole paf:InformationReceiver;
    ];
    prov:used :information-1;
    prov:wasInformedBy :parlamentary-activity-1;
    prov:wasInformedBy :executive-activity-1;
    prov:wasInformedBy :law-activity-1.

:proposal-1 a prov:Entity;
    prov:wasGeneratedBy :information-activity-1.

:parlamentary-activity-1 a prov:Activity;
    schema:identifier "23.0123".

:executive-activity-1 a prov:Activity;
    schema:identifier "321".

:law-activity-1 a prov:Activity;
    schema:identifier "SR21.1".

:acknowledgemen-activity-1 a paf:AcknowledgementActivity;
    prov:qualifiedAssociation [
        a prov:Association;
        prov:agent :acknowledgement-maker-1;
        prov:hadRole paf:AcknowledgemetnMaker;
    ];
    prov:wasInformedBy :information-activity-1;
    prov:used :acknowledgement-1.

:acknowledgement-1 a prov:Entity;
    prov:wasGeneratedBy :acknowledgement-activity-1.
```

## Order & Completion Activities

These activites are meant to be a sort of "catch-all" activities if the other are not suitable. In fact, all the activities described before could be understood as some kind of "order and completion" activities.

Alternative names:

* TaskAssignement & TaskFulfilment Activities
* Mandate & Resolution Activities
* Todo & Done Activities ("done" does not sound like an activity)

# Layer 2: Public Affairs (paf.link) {#paf-link}

## Affairs & Activities

Public affairs usually consist of multiple activities that need to be linked together. The following parts show the different activities that can be linked together to form a public affair.

### Activity Independent Identifier of an Affair

The collection of all linked activities would be sufficient to represent all activity aspects of the corresponding affair. But from a user experience point of view, most affairs have a unique (often domain specific) identifier that the affair is referred to. Therefore it is possible to connect an activity to one or multiple affair identifiers through the generation and the usage of a prov:Entity. All prov:Activities link to the identifier prov:Entity by means of prov:used. The prov:activity that is responsible for creating the identifier and the resulting prov:Entity is connected via a prov:wasGeneratedBy from the prov:Entity to the prov:Activity (linking backwards in time). The content of such identifier entities basically only have a class, an identifier via schema:identifier and a prov:wasGeneratedBy as content. The identity creating prov:Entity is also linked via paf:used to the identifier paf:Entity which is temporally not true but done for easier querying of all connected activities.

<figure>
    <img src="img/identifier_entity.svg" alt="Use of prov:Entity to create an affair identifier" />
    <figcaption>
        Use of prov:Entity to create an affair identifier.
    </figcaption>
</figure>

<figure>
  <pre class="diagram mermaid">
flowchart TD
    activity-1[:activity-1] -->|prov:used| entity-1(["`:entity-1
    schema:identifier 'xyz'`"])
    style entity-1 fill:#FFFFCC,stroke:#FFFF33
    entity-1 -->|prov:wasGeneratedBy| activity-1
    activity-2[:activity-2] -->|prov:wasInformedBy| activity-1
    activity-2 -->|prov:used| entity-1
    activity-3[:activity-3] -->|prov:wasInformedBy| activity-2
    activity-3 -->|prov:used| entity-1
    activity-4[:activity-4] -->|prov:wasInformedBy| activity-3
    activity-4 -->|prov:used| entity-1
  </pre>
  <figcaption>Use of prov:Entity to create an affair identifier.</figcaption>
</figure>

<aside class="example" title="Activities with a single identifier.">

```turtle
@prefix : <https://example.com/> .
@prefix prov: <http://www.w3.org/ns/prov#> .
@prefix schema: <http://schema.org/> .

:activity-1 a prov:Activity;
    prov:used :entity-1.

:activity-2 a prov:Activity;
    prov:used :entity-1;
    prov:wasInformedBy :activity-1.

:activity-3 a prov:Activity;
    prov:used :entity-1;
    prov:wasInformedBy :activity-2.

:activity-4 a prov:Activity;
    prov:used :entity-1;
    prov:wasInformedBy :activity-3.

:entity-1 a prov:Entity;
    prov:wasGeneratedBy :activity-1;
    schema:identifier "SomeReallyObscureIdentifier".
```

</aside>

<aside class="example" title="Query for all activities with the same identifier.">

```sparql
PREFIX : <https://example.com/>
PREFIX prov: <http://www.w3.org/ns/prov#>

SELECT * WHERE {
    ?activity a prov:Activity;
        prov:used :entity-1.
}
```

</aside>

> [!NOTE]  
> The use of prov:Entity to represent and affair is optional and mostly to represent affair identifiers that are already in use.

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

Translations:

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

Translations: 

- E: Comment
- D:
- F:
- I:

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

Translations:

- E: Information
- D:
- F:
- I:

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

Translations

- E
- D
- F
- I

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

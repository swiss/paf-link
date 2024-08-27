# Layer 2: Public Affairs (paf.link) {#paf-link}

## Public Affairs as Binoms

Public affairs often come in the form of **binoms**:

- proposal and decision
- consultation and comment
- information and acknowledgment
- order and completion

The next sections model such generic public affairs.

## Proposal & Decision Activities

The affair of a proposal and decision means that someone or some body is formally proposing something and another authoritative body is deciding on this proposal. Translations for such activities are in the table below:

|     | [proposal](https://www.termdat.bk.admin.ch/entry/56995) | [decision](https://www.termdat.bk.admin.ch/entry/414335) |
| --- | ------------------------------------------------------- | -------------------------------------------------------- |
| en: | proposal                                                | decision                                                 |
| de: | Antrag                                                  | Entscheidung                                             |
| fr: | proposition                                             | décision                                                 |
| it: | proposta                                                | decisione                                                |

The following elements are involved in such an affair:

### Class **paf:ProposalCreationActivity** {#ProposalCreationActivity}

This is the activity that creates all the necessary entities to form the proposal. As the actual proposal activity should not generate entities, this pre proposal activity is used.

### Class **paf:ProposalActivity** {#ProposalActivity}

This activity contains as the sum of all input entities the actual proposal.

### Class **paf:ProposalSubmitter** {#ProposalSubmitter}

The agent (person or group) which submits the proposal.

### Class **paf:ProposalReceiver** {#ProposalReceiver}

The agent (person or group) which receives the proposal.

### Class **paf:DecisionCreationActivity** {#DecisionCreationActivity}

This is the activity that creates all the necessary entities to form the content of the decision. As the actual decision activity should not generate new content for the decision but only the result of the decision, such a pre decision activity can be used.

### Class **paf:DecisionActivity** {#DecisionActivity}

This activity contains as the sum of all input entities the content of the decision (what is decided upon) and as output entity the actual result of the decision. Because there is not necessarily a direct succession between the proposal- and decision activity, the decision activity has a separate link to the proposal activity connecting these two.

### Class **paf:DecisionMaker** {#DecisionMaker}

The agent (person or group) which issues the decision.

### Full Example on Proposal & Decision

<aside class="example" title="Full Example on Proposal & Decision">
    Full turtle listing for: <a href="https://github.com/swiss/paf-link/blob/main/examples/proposal_decision.ttl" target="_blank">Full example on proposal & decision</a>.
</aside>

## Consultation & Comment Activities

In a consultation & comment affair, an agent is seeking comments on a legislative draft or other ideas.

Translations for such activities are in the table below:

|     | [consultation](https://www.termdat.bk.admin.ch/entry/56976) | [comment](https://www.termdat.bk.admin.ch/entry/23059) |
| --- | ----------------------------------------------------------- | ------------------------------------------------------ |
| en: | consultation                                                | comment                                                |
| de: | Vernehmlassungsverfahren                                    | Stellungsnahme                                         |
| fr: | procédure de consultation                                   | avis/prise de position                                 |
| it: | procedura di consultazione                                  |                                                        |

### Class **paf:ConsultationCreationActivity** {#ConsultationCreationActivity}

This is the activity that creates all the necessary entities to form the consultation. As the actual consultation activity should not generate entities, this pre consultation activity is used.

### Class **paf:ConsultationRegistrationActivity** {#ConsultationRegistrationActivity}

This is the activity, that registers the consultation in the necessary systems (this is usually not the agent that actually wants to do the consultation). The consultation itself is the sum of all input entities to this activity.

### Class **paf:ConsultationRegistrar** {#ConsultationRegistrar}

The agent(person or group) which registers the consultation in the necessary systems.

### Class **paf:ConsultationActivity** {#ConsultationActivity}

This activity contains as the sum of all input entities the actual consultation with all necessary information.

### Class **paf:ConsultationSubmitter** {#ConsultationSubmitter}

The agent(person or group) which submits the consultation.

### Class **paf:ConsultationReceiver** {#ConsultationReceiver}

The agent (person or group) which receives the consultation.

### Class **paf:CommentActivity** {#CommentActivity}

This activity contains as the sum of all output entities the complete comments on the consultation. The input entities could be used to show, if not the entire scope of the consultation was considered for making comments.

In the case of comment activities, there is no need to alter the consultation, so there is no comment creation activity (in comparisson to the proposal and decision activities).

### Class **paf:CommentMaker** {#CommentMaker}

The agent (person or group) which issues the comment.

### Full Example on Consultation & Comment

<aside class="example" title="Full Example on Consultation & Comment">
    Full turtle listing for: <a href="https://github.com/swiss/paf-link/blob/main/examples/consultation_comment.ttl" target="_blank">Full example on consultation & comment</a>.
</aside>

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

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

Entities are created by activities representing the result of a specific activity (e.g. voting result of a voting activity). They can also serve as input information for later activities.

Entities are modelled in an **atomic** way meaning that every entity contains only **one main information** linked by a specific RDF predicate (e.g. `schema:name` or `schema:description`). This main information can be **enriched by metadata** (e.g. the exact voting result for an entity stating an acceptance result). The reason for this strategy of atomic entities is to allow for simpler addition of metadata without creating additional reification (blank) nodes.

If an entity needs to be changed, complemented or deleted, a subsequent entity has to be generated defining the status of the former entity (e.g. not valid anymore or complemented by). Once an entity is created by an activity, it can not "just be deleted". This is to ensure **complete traceability**.

Entities are not directly linked to actors. This can only be done via the corresponding activity.

<figure id="entities_succession">
  <img src="img/entities_succession.svg" alt="Succession of Entities" />
  <figcaption>
    Atomic entities with one main information. Validity symbolised by colors. This affair has two valid names but only one valid description.
  </figcaption>
</figure>

### View Points

The challenge with public affairs is that they do **look differently depending on the view point** on the affair. To allow for these different perspectives, a `paf:ViewPoint` can be defined that links to all the activities, actors and entities relevant for this specific perspective via `dcterm:hasPart` (no subclass of `prov:used` can be used for this because the range of this predicate has to allow for activities, actors and entities at the same time).

View points also allow to have different identifiers for different perspectives of the affair. This would be done by having point different view points to different entities containing the `schema:identifier` predicate.

## Examples to the Design Principles

### Real World Inspired Toy Example

In the following sections, examples are shown to illustrate the application of the design principles to some "real world" examples. They are still somewhat generic but are inspired by real public affairs used in Switzerland.

The final example will be a fictional story that helps to understand how a parliamentary intervention with all its associated steps works: 

*Mrs. Colocambiado, a member of parliament, makes a parliamentary intervention by submitting a motion to change the background color of the national flag to blue, in order to make it more modern.*

This example will finally include all these necessary steps:

1. Intervention Motion by a politician in the National Council. (Change the background color of the national flag to blue to look more modern).
2. National Council accepts.
3. Council of States accepts with a modification (color to be subject to consultation).
4. National Council also accepts with this modification.
5. The motion is forwarded to the Federal Chancellery.
6. The Federal Chancellery allocates the motion to the right department.
7. Department allocates motion to the responsible office.
8. Office launches consultation.
9. Cantons and political parties respond to consultation.
10. The Office makes a proposal to amend the law to change the color to dark ochre yellow.
11. There is a proposal from the Federal Council.
12. The Federal Council takes a positive decision in accordance with the motion.
13. The motion is communicated to Parliament.

To form this above described example, some more basic elements of such a complex affair are laid out in the next paragraphs:

### Basic Affair

The following example illustrates a very basic affair based on three activities. First a **registration activity** that creates entities for identification, name and description of a public affair. The second activity uses these three entities to form a **proposal** to a deciding body. The last activity is the **decision activity** that creates a decision entity stating the result of the decision.

In this case, no proposal entity is created because the proposal is already included in the description entity. If this would not be the case, a creation of a proposal entity would be useful and in turn, the decision activity would use this proposal entity. The reason why the decision entity again uses entities and not just links to the proposal activity is the possibility that the deciding body would first change something in the entities used by the proposal before deciding and then, it would be important to use this newly changed entities in the decision activity.

<aside class="example" title="Design Principles: Basic Affair">
    <pre class="turtle">
        <section data-include-format="text" data-include="../examples/design_principles_basic.ttl" data-include-replace="true"></section>
    </pre>
</aside>

<figure id="design_principles_basic">
  <img src="img/design_principles_basic.svg" alt="Design Principles: Basic Affair" />
  <figcaption>
    A basic affair example with registration- proposal- and decision-activity.
  </figcaption>
</figure>

### Changing Entities

The following example shows how a **changing activity** complements and invalidates entities that have been created before by a registering activity. It could be argued that the changing activity should use the entities that it is going to complement and invalidate especially for the description entity because the new one is somehow based on the old one. Such decisions whether to use these entities on the activity will be firmly stated in the application profile. On the level of the paf.link schema, this is not defined.

<aside class="example" title="Design Principles: Changing Entities">
    <pre class="turtle">
        <section data-include-format="text" data-include="../examples/design_principles_change.ttl" data-include-replace="true"></section>
    </pre>
</aside>

<figure id="design_principles_change">
  <img src="img/design_principles_change.svg" alt="Design Principles: Changing Entities" />
  <figcaption>
    A change activity that complements an identifier entity and invalidates a description entity.
  </figcaption>
</figure>

## Transformation to JSON and XML

To allow for maximum impact of the paf.link schema, the data should also be available as JSON and XML so that it can be consumed by a vide variety of technical systems. Every RDF serialization (e.g. turtle) can be transformed deterministically and lossless to JSON-LD. The resulting JSON file is quite verbose and probably does not look very familiar to a developer not accustomed to RDF. To mitigate these difficulties, JSON-LD allows the usage of some embedded context information. Using this information, the resulting JSON file looks much more familiar to a "standard" JSON.

<aside class="example" title="JSON-LD without context information">
    <pre class="json">
        <section data-include-format="text" data-include="../examples/design_principles_basic.jsonld" data-include-replace="true"></section>
    </pre>
</aside>

<aside class="example" title="JSON-LD context information">
    <pre class="json">
        <section data-include-format="text" data-include="../examples/design_principles_basic_context.jsonld" data-include-replace="true"></section>
    </pre>
</aside>

<aside class="example" title="Flattened JSON-LD using context information">
    <pre class="json">
        <section data-include-format="text" data-include="../examples/design_principles_basic_flattened.jsonld" data-include-replace="true"></section>
    </pre>
</aside>

## Proposal & Decision Affair

The affair of a proposal and decision means that someone or some body is formally asking for a decision (proposal) and another authoritative body is deciding on this proposal. Such an affair contains at least the following activities:

- registration activity
- proposal activity
- decision activity

The registration activity is needed to create the entities that are afterwards bundled by the proposal activity to form the actual proposal. The proposal activity does not create new entities. The reason for this design decision ist that the actual proposal can be queried easily by only looking for all entities that are used by the proposal entity and not have to look for entities that are used OR created by the proposal activity.

The decision activity again uses entities to the decide on. These can and normally will be the entities that the proposal used but there is the possibility that the deciding body wants to change the proposal with the help of an upstream activity (e.g. some kind of change activity) and then the decision activity will use these newly created entities for the decision. Whereas the proposal activity must not create new entities, the decision activity will create a result entity stating the result and possibly some details of the decision.

Because there is not necessarily a direct succession between the proposal- and decision activity, the decision activity has a separate link to the proposal activity connecting these two.

### Mandatory Elements

Registration activity:

- entities that link by `prov:wasGeneratedBy` or `paf:wasComplementedBy` to the registration activity

Proposal activity:

- `prov:used` to the entities that form the proposal

Decision activity:

- `paf:proposalActivity` to link to the proposal activity
- `prov:used` to the entities that are decided upon
- an entity that links by `prov:wasGeneratedBy` to the decision activity

### Class **paf:ProposalActivity** {#ProposalActivity}

paf:ProposalActivity is an rdfs:subClass of prov:Activity

[Translations](https://www.termdat.bk.admin.ch/entry/56995):

* en: proposal
* de: Antrag
* fr: proposition
* it: proposta

This is the activity in the process to formally ask for a decision.

#### Class **paf:ProposalSubmitter** {#ProposalSubmitter}

paf:ProposalSubmitter is an rdfs:subClass of prov:Agent

The agent (person or group) which submits the proposal.

#### Class **paf:ProposalReceiver** {#ProposalReceiver}

paf:ProposalReceiver is an rdfs:subClass of prov:Agent

The agent (person or group) which receives the proposal.

### Class **paf:DecisionActivity** {#DecisionActivity}

paf:DecisionActivity is a rdfs:subClass of prov:Activity

[Translations](https://www.termdat.bk.admin.ch/entry/414335):

* en: Decision
* de: Entscheid
* fr: décision
* it: decisione

This is the activity to formally answer the corresponding paf:ProposalActivity.

#### Class **paf:DecisionMaker** {#DecisionMaker}

paf:DecisionMaker is a rdfs:subClass of prov:Activity

[Translations](https://www.termdat.bk.admin.ch/entry/132147)

The agent (person or group) which issues the decision.

### Full Example on Proposal & Decision

<aside class="example" title="Full Example on Proposal & Decision">
    <pre class="turtle">
        <section data-include-format="text" data-include="../examples/proposal_decision.ttl" data-include-replace="true"></section>
    </pre>
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

# Tutorial RDF to JSON

## Step 1:

go to [Easy RDF](https://www.easyrdf.org/) and click on "Converter" in the menu bar 

## Step 2 :

2.1) Add data in the space provided.
![Capture d'écran 2024-05-21 112950.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/e50dcbda-e53b-4724-ba7b-af7e05132926/0cdfd2d0-5efc-4b41-b61b-1fc63c878324/Capture_dcran_2024-05-21_112950.png)

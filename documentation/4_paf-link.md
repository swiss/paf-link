# Layer 2: Public Affairs (paf.link) {#paf-link}

## Affaires & Activities

Public affaires usually consist of multiple activities that need to be linked together. The following parts show the different activities that can be linked together to form a public affaire.

### Activity Independent Identifier of an Affair

The collection of all activities would be sufficient to represent all aspects of and affair. But from an user experience point of view, most affairs have a unique (often domain specific) identifier that the affair is referred to. Therefore in this chapter we define how the activities are connected to one or multiple affair identifiers through the generation and the usage of a prov:Entity.

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

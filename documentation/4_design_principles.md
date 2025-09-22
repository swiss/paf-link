# Design Principles for paf.link {#design-principles}

PROV-O is deliberately very open in its design allowing it to be used in a wide variety of application scenarios. The paf.link schema builds upon this open foundation and establishes some **design principles** how to use PROV-O in paf.link to represent public affairs.

These design principles try to **strike a balance** between on the one hand too much openness which would lead to implementations that differ very much and on the other hand too rigid requirements making it difficult to adapt to the existing realities of different public affairs.

## Public Affairs in General

In its simplest form, public affairs are:

- **activities** undertaken at a certain time or within a time span by
- **agents** (person or systems) that use
- **entities** as input information and for generating output information.

## Necessity vs. Convenience

The design principles specify only the **bare necessities** for describing a public affair. In the specific application of paf.link it usually will be advantageous to define some additional links between activities, agents and entities purely for **convenience purposes** (e.g. for easier querying). Using RDF makes it possible to comply to the paf.link schema and at the same time having some additional convenience driven links added to the data.

## Activities

Activities are bound to **take place at a certain point in time** and can have a **time duration**. They are **executed by agents** that can be single persons or groups of people or technical systems. Activities are **chained in temporal succession** to build an **activity stream** that can also branch and reunite.

<figure id="activities">
  <img src="img/activities.svg" alt="Activity Stream" />
  <figcaption>
    Activity stream consisting of linked activities.
  </figcaption>
</figure>

The time specification of activities is done by using the PROV-O predicates `prov:startedAtTime` and `prov:endedAtTime` with values of type `xsd:dateTime` or `xsd:date`. If an activity is instantaneous, only the start time is given. This means that an activity without end time is considered to be instantaneous.

<aside class="example" title="Activities with agents and time specifications.">

```turtle
@prefix : <https://example.com/> .
@prefix prov: <http://www.w3.org/ns/prov#> .

:activity-1 a prov:Activity ;
    # start and end time of the activity as xsd:date
    prov:startedAtTime "2023-01-01"^^xsd:date ;
    prov:endedAtTime "2023-02-10"^^xsd:date ;
    prov:qualifiedAssociation [
        a prov:Association ;
        prov:agent :agent-1 ;
        prov:hadRole :role-1" ;
    ] .

:activity-2 a prov:Activity ;
    prov:wasInformedBy :activity-1 ;
    # only start time of the activity, meaning instantaneous activity as xsd:dateTime
    prov:startedAtTime "2023-02-15Z12:00:00^^xsd:dateTime ;
    prov:qualifiedAssociation [
        a prov:Association ;
        prov:agent :agent-2 ;
        prov:hadRole :role-2" ;
    ] .

```

</aside>

## Agents

Agents are the actors in the different activities. They are used to show **who** (or which system) in which **role** acted on the activity. For example in a proposal activity, there is a proposal submitter and a proposal receiver involved.

<figure id="agents">
  <img src="img/agents.svg" alt="Agents and Activities" />
  <figcaption>
    Different Agents involved in an activity.
  </figcaption>
</figure>

In paf.link, agents and their roles are always modeled as qualified associations (see [PROV-O Qualified Terms](#QualifiedTerms)).

## Entities

Entities can be used as **input information** for a certain activity or can be created as **output information** representing the **result of a specific activity** (e.g. voting result of a voting activity). Such output information in turn can act as **input information** for later activities. If there is no specific need to link the creation of an entity to a specific activity, the entity can just be used without formal creation. Usually, entities will not act at the same time as input and output information of the same activity.

<figure id="entities">
  <img src="img/entities.svg" alt="Input and Output Entities" />
  <figcaption>
    Input and output entities of a certain activity.
  </figcaption>
</figure>

Even without generating output entities, the fact that an activity happened can also signal some information: For example an acknowledgment activity means that something is acknowledged even without generating an output entity.

## Identifier Entities {#IdentifierEntities}

As identifiers of specific public affairs are very **fundamental**, these information is modelled by using **identifier entities** with class **`paf:IdentifierEntity`** as subclass of `prov:Entity`. Such identifier entities are very atomic and only contain the following information:

- the identifier itself (as string linke via `schema:identifier`) which in addition should also be part of the URI of such entities and
- an additional class showing the kind of identifier (e.g. identifier of the national parliament).

Every activity that acts upon a specific affair should use the corresponding identifier entity as part of the input entities (`prov:used`). I is very common, that **activities act upon multiple identifiers** at the same time meaning that at least parts of a public affair can have multiple different identifiers from different systems.

## Changing, Corrections and Traceability

To ensure **traceability**, entities **must not be changed or deleted**. Otherwise, activities that used these entities before, could lead to other results. If a change/correction is necessary, a **`paf:EntityChangeActivity`** is carried out that uses the old entity as input and creates the changed/corrected entity as output.

<figure id="entity_change">
  <img src="img/entity_change.svg" alt="Changing an Entity" />
  <figcaption>
    Changing an entity through an entity change activity.
  </figcaption>
</figure>

Of course, there are situations where it is necessary to delete entities (e.g. due to legal requirements or if the information was mistakenly published). In such cases, the traceability is deliberately broken.

## Dividing Information into Entities

The way how to divide information about the public affair into different entities is - with one exception (see [Identifier Entities](#IdentifierEntities)) - at least partially also a matter of judgement.

## Binomial Activities

Public affairs can come in some form of binomial affairs. One example of such an affair is a proposal and decision activity. The challenge in mapping such activities is the question, how to map the **actual proposal**, **the actual decision** (what was decided upon - does not have to be exactly the same as in the proposal) and the **votes in favour or against the decision**.

The actual proposal is the sum of all input entities to the proposal activity. If there is a possibility, that the content of the decision differs from the proposal (which is common in political affairs), the decision activity must state what is being decided and how it was actually decided. It does so by using the content of the decision as the sum of all input entities and the result of the decision as newly generated output entity.

<figure id="proposal_decision_1">
  <img src="img/proposal_decision_1.svg" alt="Proposal and Decision Activities and Entities" />
  <figcaption>
    A proposal and decision that act upon the same proposal entity - meaning that the decision is exactly the same as the proposal.
  </figcaption>
</figure>

<figure id="proposal_decision_2">
  <img src="img/proposal_decision_2.svg" alt="Proposal and Decision Activities and Entities" />
  <figcaption>
    A proposal and decision that act upon different entities - meaning that the decision is not the same as the proposal.
  </figcaption>
</figure>

This principle of using input entities to show an actual proposal or decision applies to other binomials as well.

## View Points

The challenge with public affairs is that they do **look differently depending on the view point** on the affair. To allow for these different perspectives, a **`paf:ViewPoint`** can be defined that links to all the activities and entities relevant for this specific perspective via `dcterm:hasPart` (no subclass of `prov:used` can be used for this because the range of this predicate has to allow for activities, agents and entities at the same time).

## Summary

The most important design principle to follow is that **all** activities, entities and agents should be **linked together**. This will allow to design queries that can find all information. The most important links are:

- Activities should be linked in temporal succession via `prov:wasInformedBy`.
- Activities should have a time specification via `prov:startedAtTime` and optionally `prov:endedAtTime`.
- Activities should have at least one agent linked via a qualified association (`prov:qualifiedAssociation`).
- Activities link to the entities via `prov:used`.
- If it is important to show that an entity was created by a specific activity, the entity should link to the activity via `prov:wasGeneratedBy`.

For complete traceability, elements should not be deleted or changed but instead a new element should be created via corresponding activities.

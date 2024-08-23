# Design Principles {#design-principles}

PROV-O is deliberately very open in its design allowing it to be used in a wide variety of application scenarios. The paf.link schema builds upon this open foundation and defines some narrower **design principles** how to use PROV-O to represent public affaires.

These design principles try to strike a balance between on the one hand too much openness which would lead to implementations that differ very much and on the other hand too rigid requirements making it difficult to adapt to the existing realities of different public affairs.

## Public Affairs in General

In its simplest form, public affairs are **activities** undertaken by **agents** (person or systems) that use **entities** as input information and for generating output information.

## Necessity vs. Convenience

The design principles specify only the **bare necessities** for describing a public affair. In the specific application of paf.link it usually will be advantageous to define some additional links between activities, agents and entities purely for **convenience purposes** (e.g. for easier querying). Using RDF makes it possible to comply to the paf.link schema and at the same time having some additional convenience driven triples added to the data.

## Activities

Activities are bound to to **take place at a certain point in time** and can have a **time duration**. They are **executed by agents** that can be single persons or groups of people or technical systems. Activities are **chained in temporal succession** to build an **activity stream** that can also branch and reunite.

<figure id="activities">
  <img src="img/activities.svg" alt="Activity Stream" />
  <figcaption>
    Activity stream consisting of linked activities.
  </figcaption>
</figure>

## Agents

Agents are used in connection with activities. They are used to show who (or which system) executed a certain activity but are also used to depict further players that are involved. For example in a proposal activity, there is a proposal submitter and a proposal receiver involved.

<figure id="agents">
  <img src="img/agents.svg" alt="Agents and Activities" />
  <figcaption>
    Different Agents involved in an activity.
  </figcaption>
</figure>

## Entities

Entities can be used as **input information** for a certain activity or can be created as **output information** representing the **result of a specific activity** (e.g. voting result of a voting activity). Such output information in turn can act as **input information** for later activities. Entities should not act at the same time as input and output entity for the *same* activity.

<figure id="entities">
  <img src="img/entities.svg" alt="Input and Output Entities" />
  <figcaption>
    Input and output entities of a certain activity.
  </figcaption>
</figure>

Even without generating output entities, the fact that an activity happened can also signal some information: For example an acknowledgment activity means that something is acknowledged even without generating an output entity.

The way how to divide information about the public affair into different entities is with one exception (see below) a matter of judgement. As guideline: It should not be necessary to add further reification to the entity: If some information added to the entity does not hold true for the whole entity, this is a sign to split the entity into separate entities.

## Identifier Entities

A special case of entities are **identifier entities** that represent the identifier of a specific public affair. Such identifier entities should not contain any other information than the identifier which should also be part of the URI of such entities. Every activity that acts upon a specific affair should use the corresponding identifier entity as part of the input entities.

## System Boundaries

In reality, the paf.link schema will only be used during subparts of the public affair meaning that at some point in time, preexisting information will enter the paf.link realm. This will be done with some kind of **registration activity** meaning that with this activity, the information is registered within the paf.link system boundaries. This registration activity takes the preexisting information an groups it into the necessary entities that are mapped as output entities of the registration activity (although of course the corresponding information was available long before that and was not *generated* by the registration activity.

If the information is to leave the paf.link boundary this has to be done by querying the paf.link data according to the needs of the acquiring system.

## Traceability

To ensure **complete traceability**, entities must not be changed or deleted after their creation. If a change is necessary, a new entity must be created. Connecting such entities to their predecessors could be advantageous in terms of convenience but is not a requirement by the paf.link design principles. It has to become clear based on the activities, if something is merely a change of some pre-existing entities. For example, if a registration activity is carried out a second time, this will create another registration entity that replaces the existing one.

## Proposal and Decision Activities

If an affair consists of some kind of a **proposal and an associated decision**, the challenge is to where the actual proposal is mapped. The *actual proposal* is the sum of all input entities of the proposal activity. As they should not be at the same time an output entity of the proposal activity (meaning that the proposal activity would have generated them), all the necessary input entities of the proposal activity had to be generated by other previous activities. So basically this means, a proposal activity should not generate any new entities.

The decision activity must state what is being decided and how it was actually decided. It does so by using the content of the decision as the sum of all input entities and the result of the decision as newly generated output entity. The apparent repetition of the content of the decision (it was already in the proposal) is necessary because sometimes, the deciding agent wants to change the proposal slightly. The change of the corresponding entity again must be through a intermediate activity between the proposal and the decision activity.

## View Points

The challenge with public affairs is that they do **look differently depending on the view point** on the affair. To allow for these different perspectives, a `paf:ViewPoint` can be defined that links to all the activities, agents and entities relevant for this specific perspective via `dcterm:hasPart` (no subclass of `prov:used` can be used for this because the range of this predicate has to allow for activities, agents and entities at the same time).

## Examples to the Design Principles

### Basic Affair

The following example illustrates a very basic affair based on three activities. First a **registration activity** that creates entities for identification and name and description of a public affair. The second activity uses these two entities to form a **proposal** to a deciding body. The last activity is the **decision activity** that creates a decision entity stating the result of the decision. In this case, no proposal entity is created because the proposal is already included in the description entity.

<aside class="example" title="Design Principles: Basic Affair">
    Full turtle listing for: <a href="https://github.com/swiss/paf-link/blob/main/examples/design_principles_basic.ttl" target="_blank">basic affair</a>.
</aside>

<figure id="design_principles_basic">
  <img src="img/design_principles_basic.svg" alt="Design Principles: Basic Affair" />
  <figcaption>
    A basic affair example with registration, proposal and decision activities.
  </figcaption>
</figure>

### Extended Affair

In the following extended affair example, the base entity alone is not enough to form the proposal and therefore, the proposal is built by a separate proposal creation activity. Because an activity can not create and use an entity at the same time, a distinct proposal creation activity besides the actual proposal activity is needed.

<aside class="example" title="Design Principles: Extended Affair">
        Full turtle listing for: <a href="https://github.com/swiss/paf-link/blob/main/examples/design_principles_extended.ttl" target="_blank">extended affair</a>.
</aside>

<figure id="design_principles_extended">
  <img src="img/design_principles_extended.svg" alt="Design Principles: Extended Affair" />
  <figcaption>
    An extended affair example with registration, proposal creation, proposal and decision activities.
  </figcaption>
</figure>

### Changing Entities

The following example shows how a second **registration activity** changes an existing public affair. The change involves adding a second identifier entity and replacing the description from the base entity.

<aside class="example" title="Design Principles: Changing Entities">
        Full turtle listing for: <a href="https://github.com/swiss/paf-link/blob/main/examples/design_principles_change.ttl" target="_blank">changing entities</a>.
</aside>

<figure id="design_principles_change">
  <img src="img/design_principles_change.svg" alt="Design Principles: Changing Entities" />
  <figcaption>
    A change of an existing public affair through a repeated execution of a registration activity.
  </figcaption>
</figure>

## Transformation to JSON and XML

To allow for maximum impact of the paf.link schema, the data should also be available as JSON and XML so that it can be consumed by a vide variety of technical systems. Every RDF serialization (e.g. turtle) can be transformed deterministically and lossless to JSON-LD. The resulting JSON file is quite verbose and probably does not look very familiar to a developer not accustomed to RDF. 

### Raw JSON-LD

The following example shows a raw JSON-LD that was transformed from turtle from [above](#example-design-principles-basic-affair).

<aside class="example" title="Raw JSON-LD without context information">
        JSON-LD for: <a href="https://github.com/swiss/paf-link/blob/main/examples/design_principles_basic.jsonld" target="_blank">basic affair</a>.

</aside>

### Context

To mitigate these difficulties concerning verbosity, JSON-LD allows the usage of some embedded context information. Using this information, the resulting JSON file looks much more familiar to a "standard" JSON.

<aside class="example" title="JSON-LD context information">
  JSON-LD for: <a href="https://github.com/swiss/paf-link/blob/main/examples/design_principles_basic_context.jsonld" target="_blank">context information</a>.
</aside>

<aside class="example" title="Flattened JSON-LD using context information">
  JSON-LD for: <a href="https://github.com/swiss/paf-link/blob/main/examples/design_principles_basic_flattened.jsonld" target="_blank">flattened basic affair</a>.
</aside>

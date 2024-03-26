# Layer 1: PROV-O {#provo}

The paf.link schema is based on the [**PROV Ontology**](https://www.w3.org/TR/prov-o/) (PROV-O). For this reason, the following paragraphs give a short introduction to the PROV Ontology.

The PROV-O, short for the **Provenance Ontology**, is a conceptual framework designed to represent and interchange provenance information. Provenance refers to the metadata that describes the origin, creation, and history of a set of data, providing a way to trace the lineage and authenticity of information.

PROV-O was developed by the [World Wide Web Consortium](https://www.w3.org/) (W3C) as a standard for expressing and exchanging provenance information in [RDF](https://www.w3.org/TR/rdf11-primer/). PROV-O defines a set of classes, properties, and relationships that enable the representation of provenance information across diverse domains and applications.

## Key Components of PROV-O

Key components of PROV-O include

- **Entities** (things that have identity, such as documents or processes)
- **Activities** (things that occur over a period of time, like processes or events)
- **Agents** (something that bears some form of responsibility for an activity taking place or for the existence of an entity)

It also introduces concepts like generation, usage, and association to capture how entities and activities are related to each other over time.

## Toy example of the model 
In order to understand the RDF schema we use to describe the activities of public administration that relate specifically to parliamentary interventions, we have developed an example to help everyone understand how it works. It's a fictional story that helps us understand how a parliamentary intervention works. Mrs. Colocambiado, a member of parliament, makes a parliamentary intervention by submitting a motion to the National Council to change the background color of the national flag to blue, in order to make it more modern.  

**The Steps**

1. Intervention Motion by a politician in the National Council. ( Change the background color of the national flag to blue to look more modern).
2. National Council accepts.
3. Council of States accepts with modification (color to be subject to consultation).
4. National Council accepts with modification.
5. The motion is forwarded to the Federal Chancellery.
6. ChF Allocation to department
7. Department Allocation to office
8. Office launches consultation
9. Cantons and political parties respond to consultation.
10. The Office makes a proposal to amend the law to change the color to dark ochre yellow.
11. There is a proposal from the Federal Council.
12. The Federal Council takes a positive decision in accordance with the motion.
13. The motion is communicated to Parliament.

## PROV-O Categories

PROV-O consists of different categories representing different levels of granularity to describe provenance information:

- **[Starting point terms](https://www.w3.org/TR/prov-o/#description-starting-point-terms)** (classes and properties)
- **[Expanded terms](https://www.w3.org/TR/prov-o/#description-expanded-terms)** (classes and properties)
- **[Qualified terms](https://www.w3.org/TR/prov-o/#description-qualified-terms)** (classes and properties)

## Starting Point Terms

The [starting point terms](https://www.w3.org/TR/prov-o/#description-starting-point-terms) including classes and their properties are shown in the following figure:

<figure id="figure">
  <img src="https://www.w3.org/TR/2013/REC-prov-o-20130430/diagrams/starting-points.svg" alt="PROV-O" />
  <figcaption>The PROV Ontology with the three starting point classes and their properties, <a href="https://www.w3.org/TR/2013/REC-prov-o-20130430/" target="_blank">Source</a>.
  </figcaption>
</figure>

## Expanded Terms

The [expanded terms](https://www.w3.org/TR/prov-o/#description-expanded-terms) introduce some more specific subclasses and properties but also more general properties compared to the starting point terms. In addition, terms that relate entities according to their levels of abstraction are added. Furthermore, additional terms to describe the lifetime of entities and activities are defined.

## Qualified Terms

If a relation between entities, activities and actors can not be adequately described with starting point or expanded terms, PROV-O allows the application of a special **qualification pattern** which results in so called [qualified terms](https://www.w3.org/TR/prov-o/#description-qualified-terms). This qualification pattern is basically a RDF reification.

<aside class="example" title="Using starting point terms for describing a relation.">

```turtle
@prefix : <https://example.com/> .
@prefix prov: <http://www.w3.org/ns/prov#> .

:activity a prov:Activity.
:agent a prov:Agent.

:activity prov:wasAssociatedWith :agent.
```

</aside>

<aside class="example" title="Using qualified terms for describing a relation.">

```turtle
@prefix : <https://example.com/> .
@prefix prov: <http://www.w3.org/ns/prov#> .

:activity a prov:Activity.
:agent a prov:Agent.

:activity prov:qualifiedAssociation [
        a prov:Association;
        prov:agent :agent;
        prov:hadRole :ActivityStarter;
    ].
```

</aside>

## Linking Direction

PROV-O is activity based and all activities have a strong relation to a temporal dimension. In PROV-O, entities, activities and agents are connected **backwards in time**. So items that happen later, link to their predecessors and not vice versa. If it is necessary to have also a forward in time link, PROV-O has some [recommendations](https://www.w3.org/TR/prov-o/#inverse-names-table) for these inverse names.

# Layer 1: PROV-O {#provo}

The paf.link schema is based on the [**PROV Ontology**](https://www.w3.org/TR/prov-o/) (PROV-O). For this reason, the following paragraphs give a short introduction to the PROV Ontology.

The PROV-O, short for the Provenance Ontology, is a conceptual framework designed to represent and interchange provenance information. Provenance refers to the metadata that describes the origin, creation, and history of a set of data, providing a way to trace the lineage and authenticity of information.

PROV-O was developed by the [World Wide Web Consortium](https://www.w3.org/) (W3C) as a standard for expressing and exchanging provenance information in [RDF](https://www.w3.org/TR/rdf11-primer/). PROV-O defines a set of classes, properties, and relationships that enable the representation of provenance information across diverse domains and applications.

Key components of PROV-O include

- **Entities** (things that have identity, such as documents or processes)
- **Activities** (things that occur over a period of time, like processes or events)
- **Agents** (entities that play a role in activities)

It also introduces concepts like generation, usage, and association to capture how entities and activities are related to each other over time.

PROV-O consists of different categories representing different levels of granularity to describe provenance information:

- Starting point classes and properties
- Expanded classes and properties
- Qualified classes and properties

The starting point classes and their properties are shown in the following figure:

<figure id="figure">
  <img src="https://www.w3.org/TR/2013/REC-prov-o-20130430/diagrams/starting-points.svg" alt="PROV-O" />
  <figcaption>The PROV Ontology with the three starting point classes and their properties, <a href="https://www.w3.org/TR/2013/REC-prov-o-20130430/" target="_blank">Source</a>.
  </figcaption>
</figure>

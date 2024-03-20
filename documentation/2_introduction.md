# Introduction

## Problem Declaration and Goal
[TODO formulate in prose]

## Main Features

* Simple in its core.
* Extensible to a variety of sub-types of public affairs.
* Extensible to more fine grained aspects of public affair processes, base on activities.
* Defined way how to connected the different processes of public affairs. (E.g. parlament motion, with executive affair, with law text publication, etc.)
* Focus on exchange between organisations and systems. (With a guide-line on how to store at rest.)
* Possible to describe document based processes, and also structured data processes. (E.g. it is possible to connect documents, like PDFs to the Affairs, but also have the information also or only hold as structured data.)
* Possibility to analyze and query on the different levels.
* Independent development in different corners of the overall public affair process is possible with a future unification. (Different levels inside the Governement, but also Lobby Organisations, Journalists etc. )

## Design Decisions
[TODO formulate in prose]

* Event Based
  * To avoid confusion on perspective. Different Affairs hold different stati in organisations at the same time. 
  * To allow extension in depth (more detailed sub-process) and width (to include more parts of a public affair process).
  * To enable independent development.
* Shared concepts as driver for interoperability.
* A schema build on RDF, with deterministic transformation to XML and JSON representations.

## Layered Design

As it is good practice, the paf.link schema strives for reuse of existing vocabulary. Using PROV-O as a **base layer** gives paf.link a robust and widespread foundation. As PROV-O by design is very generic, paf.link postulates on a **second layer** some **design principles** to model public affairs from the basic elements of PROV-O. Furthermore, some additional classes and predicates are defined in this layer within the context of public affairs. This second layer is still somehow generic. Therefore a **third layer** as an application profile for real world public affairs is created to allow modelling very specific public affairs for certain realms of public administration.

<figure id="figure">
  <img src="img/layers.svg" alt="Layered Design" />
  <figcaption>
    The paf.link public affaires schema with its layered design.
  </figcaption>
</figure>

## Namespaces Declarations

| PREFIX | IRI |
| :--- | :--- |
| paf | [https://paf.link/](https://paf.link/) |
| chpaf | [https://ch.paf.link/](https://ch.paf.link/) |
| prov | [https://www.w3.org/ns/prov#](https://www.w3.org/ns/prov#) |
| schema | [http://schema.org/](http://schema.org) |
| skos | [http://www.w3.org/2004/02/skos/core#](https://www.w3.org/2009/08/skos-reference/skos.html) |
| dcterm | [http://purl.org/dc/terms/](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/) |
| xsd | [http://www.w3.org/2001/XMLSchema#](http://www.w3.org/2001/XMLSchema#) |
| rdfs | [http://www.w3.org/2000/01/rdf-schema#](http://www.w3.org/2000/01/rdf-schema#) |
| rdf | [http://www.w3.org/1999/02/22-rdf-syntax-ns#](http://www.w3.org/1999/02/22-rdf-syntax-ns#) |

## Introduction

# Problem Decleration and Goal


# Main Features

* Simple in its core.
* Extensible to a variety of sub-types of public affairs.
* Extensible to more fine grained aspects of public affair processes.
* Focus on exchange between organisations and systems. (With a guide-line on how to store in rest.)
* Possibility to analyze and query on different levels.
* Independent development in different corners of the overall public affair process is possible with a future unification.


# Design Decisions
[TODO formulate in prose]

* Event Based
  * To enable independent development.
  * To avoid confusion on perspective.
  * To allow extension in depth (more detailed sub-process) and width (to include more parts of a public affair process).
* Shared concepts as driver for interoperability.
* A schema build on RDF, with deterministic transformation to XML and JSON representations.


# Namespaces Declarations

| PREFIX | IRI |
| :--- | :--- |
| paf | [https://paf.link/](https://paf.link/) |
| prov | [https://www.w3.org/ns/prov#](https://www.w3.org/ns/prov#) |
| schema | [http://schema.org/](http://schema.org) |
| skos | [http://www.w3.org/2004/02/skos/core#](https://www.w3.org/2009/08/skos-reference/skos.html) |
| dcterm | [http://purl.org/dc/terms/](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/) |
| xsd | [http://www.w3.org/2001/XMLSchema#](http://www.w3.org/2001/XMLSchema#) |
| rdfs | [http://www.w3.org/2000/01/rdf-schema#](http://www.w3.org/2000/01/rdf-schema#) |
| rdf | [http://www.w3.org/1999/02/22-rdf-syntax-ns#](http://www.w3.org/1999/02/22-rdf-syntax-ns#) |


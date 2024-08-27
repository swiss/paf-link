# Introduction

## Problem Declaration and Goal

Public administrations often handle their affairs in similar ways, revealing recurring patterns. However, the specifics of how each country's government and its administrative levels manage these affairs can vary significantly. The approach described here focuses on identifying the smallest common core that can describe an activity (or event). It provides a framework to link and connect these activities, offering insights into the functioning of public affairs both at an overview level and in capturing the detailed differences between various administrations.

The main goal of the Public Affairs Schema (paf) is to provide a common data model for public affairs that is interoperable with all levels of public administration, while also capturing the specific details of each administration. Since it is unlikely that an entire administration will adopt a common data model all at once, the secondary goal is to ensure that an independent step-by-step adoption at different areas and levels is possible, ultimately converging to a common data model in the long run.

Once the described data model is in place and widely used, it will allow for the publication and inquiry of a multitude of use cases, ultimately providing enhanced transparency and, in turn, increasing trust in the functioning of public administration. The focus on an interoperable data model by design will further reduce mapping and transformation resource which leads to overal higher efficiency.

Ultimately, by making public administration information easier accessible to both the administration itself and third parties, the schema enhances citizens' ability to form informed opinions. This increased transparency strengthens the democratic system.

## Main Features

**Core Simplicity and Extensibility**: The core of the Public Affairs Schema (paf.link) is designed to be simple, based on activities making it easy to understand and implement. It can be extended to accommodate a wide range of public affairs sub-types and capture more fine-grained aspects of public affair processes based on specific activities.

**Independent yet Unified Development**: Independent development in different areas of the overall public affair process is supported, with a path by design for future unification. This includes different levels within public administrations.

**Defined Process Connections**: There is a well-defined method for connecting different public affairs processes, such as linking parliamentary motions with executive actions and law text publications. To map to underlying data management systems one or multiple object identifiers can be used to express the connection of an activity to a process.

**Inter-organizational and System Exchange**: The schema focuses the exchange of information between organizations and systems, and only in a second priority provides guidelines on how to store data at rest. It supports both document-based processes (e.g., PDFs) and structured data processes, allowing for flexible information management.

**Multi-level Analysis and Querying**: The schema enables analysis and querying at various levels, facilitating detailed insights into public affairs processes.

## High-level Design Decisions

*Event-Based*: The Public Affairs Schema (paf.link) is designed to be event-based to avoid confusion regarding perspectives. Different public affairs can express different statuses in various organizations simultaneously.

*Extensible in Depth and Width*: The schema allows for extensions both in depth, by detailing more specific sub-processes, and in width, by including additional parts of the public affair process.

*Support for Independent Development*: The schema enables independent development, allowing different parts of the public affair process to be developed separately with the full integration as final goal.

*Shared Concepts for Interoperability*: The use of shared concepts within the schema drives interoperability between different organizations and systems.

## Layered Design

As it is good practice, the paf.link schema strives for reuse of existing vocabulary. Using PROV-O as a **base layer** gives paf.link a robust and widespread foundation. As PROV-O by design is very generic, the Public Affairs Schema (paf.link) provides on a **second layer** a framework of **design principles** to model public affairs based on the core elements of PROV-O. Additional classes and predicates are defined in this layer within the context of public affairs. The second layer is generic and strives for interoperability of public administrations between countries and and different levels of adminstrations.

The **third layer** provides naming and classes for the concrete instances of public affairs at a specific level of the public adminstration. It is created to allow the modeling specific public affairs for certain realms of public administration. On the third layer, all elements have to be declared whether they are mandatory (and in which cardinality) or if they are optional.

The three layers elements are connected by sub-classing the next hihgher layer.

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

## Machine Readable Schema

This webpage is intended for humans and as a such, not every detail of the schema is covered. The goal of this documentation is to show and explain the main ideas of the schema. The complete paf.link schema is also available in a machine readable form as [turtle file](https://raw.githubusercontent.com/swiss/paf-link/main/paf-link.ttl).

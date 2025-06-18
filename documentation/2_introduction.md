# Introduction

## Example of a Public Affair

A typical public affair might look like this:

- A member of parliament would like the government to investigate a specific topic and creates a request.
- The parliament decides whether to submit this request to the government.
- The government tasks the appropriate part of the administration to answer the request.
- The administration investigates the topic and prepares a report.
- The report is sent to the government, which then forwards it to the parliament.
- The parliament discusses the report and decides whether it accepts the report.

## State-Based Business Object Approach

To model such a public affair, one could try to create a business object that describes the entire process, including all the involved parties, their roles, and the specific steps they take. This could also be called a state-based approach and might look like the following:

```yaml
business_object_id: 15abh-dh
  parliamentary_id: "25.0012"
    submitter: mp_003
    submission_date: 2025-06-17
    request: The government should investigate...
    transfer_to_gov_date: 2025-06-30
    acceptance_date: 2025-12-01
  gov_id: gov_003_b
    incoming_date: 2025-07-05
    responsibility: Department of...
    answer_acknowledging_date: 2025-11-15
  admin_id: a_xh_3
    answer: The result of the investigation is...
    submission_date: 2025-10-11
```

There are a few challenges associated with this approach:

- **Organizational Complexity**: The involved parties (here: parliament, government, and administration) have to reach an agreement on the structure of the business object. For this, they have to have the resources allocated at the same time, which is often not the case in practice.
- **Structural Complexity**: The structure of the business object should allow for diversions in the process such as rejections, resubmissions and changes. This would require a complex structure that can handle all possible variations, which can be difficult to manage and maintain.
- **Different Perspectives**: Different parties involved in the public affair may have different perspectives on the process. For example, the parliament might view the status of the process as "submitted" while the government might see it as "under review."

## Event-Based Approach

To address these challenges, the Public Affairs Schema (paf.link) takes an event-based approach. Instead of trying to create a single business object that describes the entire process, it focuses on defining activities (events) that can be linked together to form an activity chain. This allows for a more flexible and modular representation of public affairs, where each activity can be described independently and connected to others as needed.

This approach has several advantages:

- **Simplicity**: The core of the schema is simple and based on activities, making it easy to understand and implement.
- **Flexibility**: It allows for different levels of detail and can accommodate various public affairs sub-types, capturing more fine-grained aspects of public affair processes.
- **Independence**: Different parts of the public affair process can be developed independently, allowing for a step-by-step adoption of the schema across different areas and levels of public administration.
- **Interoperability**: The schema provides a common data model that is interoperable with all levels of public administration, facilitating the exchange of information between organizations and systems.
- **Transparency**: By making public administration information more accessible, the schema enhances citizens' ability to form informed opinions, ultimately strengthening the democratic system.
- **Efficiency**: The focus on an interoperable data model by design reduces mapping and transformation resources, leading to overall higher efficiency in public administration processes.
- **Multi-level Analysis**: The schema enables analysis and querying at various levels, facilitating detailed insights into public affairs processes.
- **Defined Process Connections**: There is a well-defined method for connecting different public affairs processes, such as linking parliamentary motions with executive actions and law text publications. This allows for a clear understanding of how different activities relate to each other.
- **Support for Document-Based and Structured Data Processes**: The schema supports both document-based processes (e.g., PDFs) and structured data processes, allowing for flexible information management.
- **Layered Design**: The schema is designed in layers, allowing for reuse of existing vocabulary and providing a robust foundation while also allowing for extensions specific to public affairs.

## State-Based vs. Event-Based Approach

If the number of involved parties is small and the process is well-defined, a state-based approach might be sufficient. However, in the context of public affairs, where multiple parties are involved and processes can vary significantly, an event-based approach is more suitable. It allows for greater flexibility, independence, and interoperability, making it easier to adapt to the complexities of public administration.

<figure id="state-vs-event">
  <img src="img/state-vs-event.svg" alt="state-based vs event-based" />
  <figcaption>
    Evolution of complexity for state-based and event-based schemas with growing process complexity.
  </figcaption>
</figure>

## Problem Declaration and Goal

Public administrations often handle their affairs in similar ways, revealing recurring patterns. However, the specifics of how each country's government and its administrative levels manage these affairs can vary significantly. The approach described here focuses on identifying the smallest common core that can describe an activity (or event). It provides a framework to link and connect these activities, offering insights into the functioning of public affairs both at an overview level and in capturing the detailed differences between various administrations.

The main goal of the Public Affairs Schema (paf) is to provide a common data model for public affairs that is interoperable with all levels of public administration, while also capturing the specific details of each administration. Since it is unlikely that an entire administration will adopt a common data model all at once, the secondary goal is to ensure that an independent step-by-step adoption at different areas and levels is possible, ultimately converging to a common data model in the long run.

Once the described data model is in place and widely used, it will allow for the publication and inquiry of a multitude of use cases, ultimately providing enhanced transparency and, in turn, increasing trust in the functioning of public administration. The focus on an interoperable data model by design will further reduce mapping and transformation resource which leads to overal higher efficiency.

Ultimately, by making public administration information easier accessible to both the administration itself and third parties, the schema enhances citizens' ability to form informed opinions. This increased transparency strengthens the democratic system.

## Main Features

**Core Simplicity and Extensibility**: The core of the Public Affairs Schema (paf.link) is designed to be simple, based on activities making it easy to understand and implement. It can be extended to accommodate a wide range of public affairs sub-types and capture more fine-grained aspects of public affair processes based on specific activities. Therefore it is possible to start the description at different ends of the overall process. Either very simple and high-level, or also in more detailed sub-processes. This flexibility helps to overcome the scope problem which can be observed to be set to large and jeopardizes the success. 

**Independent yet Unified Development**: Independent development in different areas of the overall public affair process is supported, with a path by design for future unification. This includes different levels within public administrations. Therfore this schema allows to create a common schema independently in different organization units and also more important at different periods of time. This helps to deal with the reality that project budgets and application life-cycles often don't allow to synchronize projects to be done at the same time frame.

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
    The paf.link - "Public Affairs" schema with its layered design.
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

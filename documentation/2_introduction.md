# Introduction

This introduction explains the rationale behind the event-based approach and how it differs from a state-based business object approach.

An example of a typical public affair might look like the following:

- A member of parliament would like the executive branch to investigate a specific topic and creates a request.
- The parliament decides whether to submit this request to the executive branch.
- The executive branch tasks the appropriate department as part of the administration to answer the request.
- The department investigates the topic and prepares a report.
- The report is sent to the executive branch, which then forwards it to the parliament.
- The parliament discusses the report and decides whether it accepts the report as answer to the original request from the member of parliament.

## State-Based Approach

To model such a public affair, a **business object** that describes the affair could be created. This object would include all the involved parties, their roles, and the specific steps they take. This would be called a **state-based approach** and the corresponding business object might look like the following:

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
  department_id: a_xh_3
    answer: The result of the investigation is...
    submission_date: 2025-10-11
  status:
    - submitted_by_mp
    - transferred_to_gov
    - responsibility_assigned
    - answer_acknowledged
    - answer_submitted
    - accepted_by_parliament
```

There are a few challenges associated with this approach:

- **Organizational Complexity**: The involved parties (here: parliament, executive branch and department of the administration) have to reach an agreement on the structure of the business object. For this, they have to have the resources allocated to define such a business object at the same time, which is often not the case in reality.
- **Structural Complexity**: The structure of the business object should allow for diversions in the process such as rejections, resubmissions and changes. This would require a complex structure that can handle all possible variations, which can be difficult to manage and maintain.
- **Different Perspectives**: Different parties involved in the public affair may have different perspectives on the process. For example, the parliament might view the status of the process as "submitted" while the government might see it as "under review."
- **Traceability**: The business object should also capture the history of the process, including changes in status, comments, and decisions made at each step. This can lead to a complex and potentially unwieldy structure.

Because of these challenges, the paf.link schema takes a different approach:

## Event-Based Approach

Instead of trying to create a single business object that describes the entire public affair, the paf.link schema takes an **event-based approach** focussing on defining activities (events) that can be linked together to form a stream of activities.

This approach has several advantages:

- **Independency**: Different parts of the public affair process can be developed independently, allowing for a step-by-step adoption of the schema across different areas and levels of public administration.
- **Chronology**: The schema allows for a stream of events, where each activity can be linked to others based on the time they occurred. This provides a clear and chronological view of the public affair process.
- **Flexibility**: The basic elements of the schema can be combined in a flexible way to describe a wide range of public affairs, from simple requests to complex investigations involving multiple parties.
- **Defined Connections**: The schema provides a well-defined method for connecting different public affairs processes, such as linking parliamentary motions with executive actions and law text publications. This allows for a clear understanding of how different activities relate to each other.

## Comparison of Approaches

If the number of involved parties is small and the process is well-defined, a state-based approach might be sufficient. However, in the context of public affairs, where multiple parties are involved and processes can vary significantly, an event-based approach is more suitable. It allows for greater flexibility, independence, and interoperability, making it easier to adapt to the complexities of public administration.

<figure id="state-vs-event">
  <img src="img/state-vs-event.svg" alt="state-based vs event-based" />
  <figcaption>
    Evolution of complexity for state-based and event-based schemas with growing process complexity.
  </figcaption>
</figure>

If a well defined problem is tackled with a state-based approach, it is often possible to do so. However, it is difficult to reuse such state-based business objects outside the specific context they were created for. The event-based approach, on the other hand, allows for the reuse of activities across different public affairs, making it more versatile and adaptable to various contexts.

## Layered Design

The paf.link schema strives to reuse already existing vocabulary. Using PROV-O as a **base layer** gives paf.link a robust and well known foundation. As PROV-O by design is very generic, the Public Affairs Schema (paf.link) is designed as a **second layer** that allows to use PROV-O ideas for public affairs by presenting **design principles** to model public affairs based on the core elements of PROV-O. The second layer still is quite generic and strives for interoperability of public administrations between countries and and different levels of administrations.

The **third layer** provides elements for concrete public affairs at a specific level of the public administration.

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

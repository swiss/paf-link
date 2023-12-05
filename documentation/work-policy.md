# Work Policy
Definition on decisions and goals regarding the work done on the schema.

## Non-Functional Goals

### We do not try to minimize the ammount of Properties in this schema, in general we will declinate all properties to be clearly used on a class.

E.g. instead of reusing [prov:wasInformedBy](http://www.w3.org/ns/prov#wasInformedBy) for more specific sub-classes like a ConsultationActivity, we will always define specific properties for the sub-classes.

The idea is to be more help-full for the hierarchicaly endproducts (XML and JSON) to be legible and understandble by only looking at the definition of the sub-class, without any need to understand the higher levels. 

(But for sure in in RDF we will create proper [rdfs:subPropertyOf](https://www.w3.org/TR/rdf12-schema/#ch_subpropertyof).)

### We take over the properties of prov-o on Level 2, and only create the necessary Sub-Classes and Roles for each interaction tuple.

We do not go into declinating all properties (giving them new names) on the Level 2 (Proposal - Decision, Consultation - Comment, Mandate - Resolution, Information etc. ) but we stick to the correctly applied prov-o Properties and make examples. Although on the Level 3, the goal is to give all properties concrete implementation names.

## Style guide for links, classes and properties

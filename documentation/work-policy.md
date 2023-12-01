# Work Policy
Definition on decisions and goals regarding the work done on the schema.

## Non-Functional Goals

### We do not try to minimize the ammount of Properties in this schema, in general we will declinate all properties to be clearly used on a class.

E.g. instead of reusing [prov:wasInformedBy](http://www.w3.org/ns/prov#wasInformedBy) for more specific sub-classes like a ConsultationActivity, we will always define specific properties for the sub-classes.

The idea is to be more help-full for the hierarchicaly endproducts (XML and JSON) to be legible and understandble by only looking at the definition of the sub-class, without any need to understand the higher levels. 

(But for sure in in RDF we will create proper [rdfs:subPropertyOf](https://www.w3.org/TR/rdf12-schema/#ch_subpropertyof).)

## Style guide for links, classes and properties

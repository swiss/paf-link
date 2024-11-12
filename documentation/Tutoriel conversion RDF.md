# Tutorial RDF to XML

## Step 1

go to [Easy RDF](https://www.easyrdf.org/) and click on "Converter" in the menu bar 

## Step 2

### Add data in the space provided
<figure id="figure">
  <img src="https://github.com/swiss/paf-link/blob/main/img/1.png" />
</figure>

### Select the initial data format

### Select the format into which the data should be converted, depending on your requirements take "Json-LD" or "RDF/XML"

<figure id="figure">
  <img src="https://github.com/swiss/paf-link/blob/main/img/2.png" />
</figure>

### Then press "submit

### A new menu opens at the bottom of the page, framed with your converted code.

### Result

#### Input data

```ttl
@prefix : <https://example.com/> .
@prefix paf: <https://paf.link/> .
@prefix prov: <http://www.w3.org/ns/prov#> .
@prefix schema: <http://schema.org/> .

:information-activity-1 a paf:InformationActivity;
    prov:qualifiedAssociation [
        a prov:Association;
        prov:agent :information-submitter-1;
        prov:hadRole paf:InformationSubmitter;
    ];
    prov:qualifiedAssociation [
        a prov:Association;
        prov:agent :information-receiver-1;
        prov:hadRole paf:InformationReceiver;
    ];
    prov:used :information-1;
    prov:wasInformedBy :parlamentary-activity-1;
    prov:wasInformedBy :executive-activity-1;
    prov:wasInformedBy :law-activity-1.

:proposal-1 a prov:Entity;
    prov:wasGeneratedBy :information-activity-1.

:parlamentary-activity-1 a prov:Activity;
    schema:identifier "23.0123".

:executive-activity-1 a prov:Activity;
    schema:identifier "321".

:law-activity-1 a prov:Activity;
    schema:identifier "SR21.1".

:acknowledgemen-activity-1 a paf:AcknowledgementActivity;
    prov:qualifiedAssociation [
        a prov:Association;
        prov:agent :acknowledgement-maker-1;
        prov:hadRole paf:AcknowledgemetnMaker;
    ];
    prov:wasInformedBy :information-activity-1;
    prov:used :acknowledgement-1.

:acknowledgement-1 a prov:Entity;
    prov:wasGeneratedBy :acknowledgement-activity-1.
```

#### Output data

```<?xml version="1.0" encoding="utf-8" ?>
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
         xmlns:prov="http://www.w3.org/ns/prov#"
         xmlns:schema="http://schema.org/">

  <rdf:Description rdf:about="https://example.com/consultation-activity-1">
    <rdf:type rdf:resource="https://paf.link/ConsultationlActivity"/>
    <prov:qualifiedAssociation>
      <prov:Association>
        <prov:agent rdf:resource="https://example.com/consultation-submitter-1"/>
        <prov:hadRole rdf:resource="https://paf.link/ConsultationlSubmitter"/>
      </prov:Association>
    </prov:qualifiedAssociation>

    <prov:qualifiedAssociation>
      <prov:Association>
        <prov:agent rdf:resource="https://example.com/consultation-receiver-1"/>
        <prov:hadRole rdf:resource="https://paf.link/ConsultationReceiver"/>
      </prov:Association>
    </prov:qualifiedAssociation>

    <prov:used rdf:resource="https://example.com/consultation-1"/>
    <prov:wasInformedBy>
      <prov:Activity rdf:about="https://example.com/parlamentary-activity-1">
        <schema:identifier>23.0123</schema:identifier>
      </prov:Activity>
    </prov:wasInformedBy>

    <prov:wasInformedBy>
      <prov:Activity rdf:about="https://example.com/executive-activity-1">
        <schema:identifier>321</schema:identifier>
      </prov:Activity>
    </prov:wasInformedBy>

    <prov:wasInformedBy>
      <prov:Activity rdf:about="https://example.com/law-activity-1">
        <schema:identifier>SR21.1</schema:identifier>
      </prov:Activity>
    </prov:wasInformedBy>

  </rdf:Description>

  <prov:Entity rdf:about="https://example.com/proposal-1">
    <prov:wasGeneratedBy rdf:resource="https://example.com/consultation-activity-1"/>
  </prov:Entity>

  <rdf:Description rdf:about="https://example.com/decision-activity-1">
    <rdf:type rdf:resource="https://paf.link/CommentActivity"/>
    <prov:qualifiedAssociation>
      <prov:Association>
        <prov:agent rdf:resource="https://example.com/comment-maker-1"/>
        <prov:hadRole rdf:resource="https://paf.link/CommentMaker"/>
      </prov:Association>
    </prov:qualifiedAssociation>

    <prov:wasInformedBy rdf:resource="https://example.com/proposal-activity-1"/>
    <prov:used>
      <prov:Entity rdf:about="https://example.com/decision-1">
        <prov:wasGeneratedBy rdf:resource="https://example.com/decision-activity-1"/>
      </prov:Entity>
    </prov:used>

  </rdf:Description>

</rdf:RDF>
```

# Tutorial RDF to JSON

## Step 1

go to [Easy RDF]([https://www.easyrdf.org/](https://json-ld.org/)) and click on "Playground" in the menu bar 

## Step 2:

### Add data in the space provided.
<figure id="figure">
  <img src="https://github.com/swiss/paf-link/blob/main/img/JSON-LD%201.png" />
</figure>

### Select the shape
<figure id="figure">
  <img src="https://github.com/swiss/paf-link/blob/main/img/JSON-LD%202.png" />
</figure>

### Result

#### Input data 

```
{
  "@context": "https://json-ld.org/contexts/person.jsonld",
  "@id": "http://dbpedia.org/resource/John_Lennon",
  "name": "John Lennon",
  "born": "1940-10-09",
  "spouse": "http://dbpedia.org/resource/Cynthia_Lennon"
}
```

#### Output data

```
[
  {
    "@id": "http://dbpedia.org/resource/John_Lennon",
    "http://schema.org/birthDate": [
      {
        "@type": "http://www.w3.org/2001/XMLSchema#date",
        "@value": "1940-10-09"
      }
    ],
    "http://xmlns.com/foaf/0.1/name": [
      {
        "@value": "John Lennon"
      }
    ],
    "http://schema.org/spouse": [
      {
        "@id": "http://dbpedia.org/resource/Cynthia_Lennon"
      }
    ]
  }
]
```

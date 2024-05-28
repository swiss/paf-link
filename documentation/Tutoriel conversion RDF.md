# Tutorial RDF to JSON

## Step 1:

go to [Easy RDF](https://www.easyrdf.org/) and click on "Converter" in the menu bar 

## Step 2 :

### 2.1) Add data in the space provided.
<figure id="figure">
  <img src="https://github.com/swiss/paf-link/blob/main/img/1.png" />
</figure>


### 2.2) select the initial data format

### 2.3) select the format into which the data should be converted, depending on your requirements take "Json-LD" or "RDF/XML".

<figure id="figure">
  <img src="https://github.com/swiss/paf-link/blob/main/img/2.png" />
</figure>


### 2.4) then press "submit

### 2.5) A new menu opens at the bottom of the page, framed with your converted code.

### 2.6) Result

#### Input data : 
```jsx
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


# Tutorial RDF to XML

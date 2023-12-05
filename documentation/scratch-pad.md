
##### Initiative Parlementaire 

Nature : 

Avancement : 

Groupe : 

État : Donner suite / ne pas donner suite 

##### Initiative Déposée par un canton


Nature : 

Groupe : 

État : 


##### Motion

![[Exemple Motion.pdf]]

Nature : 

Groupe : Interventions parlementaires 

État : 

##### Postulat

Nature : 

Groupe : Interventions parlementaires 

État : 

##### Interpellation

Nature : 

Groupe : Interventions parlementaires 

État : 

##### Question

Nature : 

Groupe : Interventions parlementaires 

État : 

##### Question posée dans le cadre de l'heure des questions au Conseil national

Groupe : Interventions parlementaires 

État : 



From 4_paf_link.md

## Consultation & Comment

* Beispiele: Vernehmlassung; Ämterkonsultation; Mitberichtsverfahren
Konsultation -> Stellungnahme

### Class **paf:Consultation** {#Consultation}

paf:Consultation is a rdfs:subClass of prov:Activity

[Tranlations](https://www.termdat.bk.admin.ch/entry/56977)

* Konsultation
* consultation
* consultazione

#### Property Variant A **paf:hasConsultationSubmitter**

paf:hasConsultationSubmitter is a rdfs:subProperty of prov:wasAssociatedWith

[Translations](https://www.termdat.bk.admin.ch/entry/109151)

The agent (person or group) which submits the consultation.

<aside class="example">

```turtle
:consultation_1 a paf:Consultation;
    paf:hasConsultationSubmitter :submitter_1.
```

</aside>

#### Property Variant B **prov:qualifiedAssociation**

The agent (person or group) which submits the consultation.

<aside class="example">

```turtle
:consultation_1 a paf:Consultationer;
    prov:qualifiedAssociation [
        a prov:Association;
        prov:agent :submitter_1;
        prov:hadRole paf:ConsultationSubmitter;
        rdfs:comment "submitter_1 is the issuer of this consultation."@en
    ].
```

</aside>

#### Property Variant C **paf:hasConsultationSubmitter**

The agent (person or group) which submits the consultation.

<aside class="example">

```turtle
:consultation_1 a paf:Consultation;
    paf:hasConsultationlSubmitter [
        a prov:Association;
        prov:agent :submitter_1;
        prov:hadRole paf:ConsultationlSubmitter;
        rdfs:comment "submitter_1 is the issuer of this consultation."@en
    ].
```

</aside>

#### Property Variant D **paf:hasConsultationSubmitter**

The agent (person or group) which submits the consultation.

<aside class="example">

```turtle
:consultation_1 a paf:Consultation;
    paf:hasConsultationSubmitter [
        a prov:Association;
        paf:hasConsultationSubmitter :submitter_1;
        prov:hadRole paf:ConsultationSubmitter;
        rdfs:comment "submitter_1 is the issuer of this consultation."@en
    ].
```

</aside>

### Class **paf:Comment** {#Comment}

paf:Comment is a rdfs:subClass of prov:Activity

[Translations](https://www.termdat.bk.admin.ch/entry/23059)

* Stellungnahme
* avis
* parere ([TODO] check)



 #### Property Variant A **paf:hasProposalSubmitter**

paf:hasCommentSubmitter is a rdfs:subProperty of prov:wasAssociatedWith

[Translations](https://www.termdat.bk.admin.ch/entry/109151)

The agent (person or group) which submits the Comment.

<aside class="example">

```turtle
:comment_1 a paf:Comment;
    paf:hasCommentSubmitter :submitter_1.
```

</aside>

#### Property Variant B **prov:qualifiedAssociation**

The agent (person or group) which submits the comment.

<aside class="example">

```turtle
:comment_1 a paf:Comment;
    prov:qualifiedAssociation [
        a prov:Association;
        prov:agent :submitter_1;
        prov:hadRole paf:CommentSubmitter;
        rdfs:comment "submitter_1 is the issuer of this comment."@en
    ].
```

</aside>

#### Property Variant C **paf:hasCommentlSubmitter**

The agent (person or group) which submits the comment.

<aside class="example">

```turtle
:comment_1 a paf:Comment;
    paf:hasCommentSubmitter [
        a prov:Association;
        prov:agent :submitter_1;
        prov:hadRole paf:CommentSubmitter;
        rdfs:comment "submitter_1 is the issuer of this comment."@en
    ].
```

</aside>

#### Property Variant D **paf:hasCommentSubmitter**

The agent (person or group) which submits the comment.

<aside class="example">

```turtle
:comment_1 a paf:Comment;
    paf:hasCommentSubmitter [
        a prov:Association;
        paf:hasCommentSubmitter :submitter_1;
        prov:hadRole paf:CommentSubmitter;
        rdfs:comment "submitter_1 is the issuer of this comment."@en
    ].
```

</aside>

## Mandate & Resolution

* Beispiele: Auftrag zur Erarbeitung einer Stellungnahme der BK an ein Departement -> Erledigung in Form eines Antrags an den Bundesrat; Verabschiedung einer Motion durch die Bundesversammlung -> Auftrag an den BR, die Motion umzusetzen; Brief der GPK an den Bundesrat -> Auftrag, der GPK zu antworten*)

### Class **paf:Mandate**

paf:Mandate is a rdfs:subClass of prov:Activity

[Translations](https://www.termdat.bk.admin.ch/search/entry/109134)

* Auftrag
* mandat
* mandato

#### Property Variant A **paf:hasMandateSubmitter**

paf:hasMandateSubmitter is a rdfs:subProperty of prov:wasAssociatedWith

[Translations](https://www.termdat.bk.admin.ch/entry/109151)

The agent (person or group) which submits the mandate.

<aside class="example">

```turtle
:mandate_1 a paf:Mandate;
    paf:hasMandateSubmitter :submitter_1.
```

</aside>

#### Property Variant B **prov:qualifiedAssociation**

The agent (person or group) which submits the mandate.

<aside class="example">

```turtle
:mandate_1 a paf:Mandate;
    prov:qualifiedAssociation [
        a prov:Association;
        prov:agent :submitter_1;
        prov:hadRole paf:MandateSubmitter;
        rdfs:comment "submitter_1 is the issuer of this mandate."@en
    ].
```

</aside>

#### Property Variant C **paf:hasMandateSubmitter**

The agent (person or group) which submits the mandate.

<aside class="example">

```turtle
:mandate_1 a paf:Mandate;
    paf:hasMandateSubmitter [
        a prov:Association;
        prov:agent :submitter_1;
        prov:hadRole paf:mandateSubmitter;
        rdfs:comment "submitter_1 is the issuer of this mandate."@en
    ].
```

</aside>

#### Property Variant D **paf:hasMandateSubmitter**

The agent (person or group) which submits the mandate.

<aside class="example">

```turtle
:mandate_1 a paf:Mandate;
    paf:hasMandateSubmitter [
        a prov:Association;
        paf:hasMandateSubmitter :submitter_1;
        prov:hadRole paf:MandateSubmitter;
        rdfs:comment "submitter_1 is the issuer of this mandate."@en
    ].
```

</aside>


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Class **paf:Resolution**

paf:Resolution is a rdfs:subClass of prov:Activity

[TODO] resolution comes from terminology of the parlament, potentially, it is better to have a more common term to day "done".

Maybe "perform" could be more appropriate 
[Tranlations](https://www.termdat.bk.admin.ch/entry/208688)

[Tranlations](https://www.termdat.bk.admin.ch/entry/95501)

* Erledigung (Auflösung?)
* resolution
* risoluzione

## Information & Acknowledgement

### Class **paf:Information**

paf:Information is a rdfs:subClass of prov:Activity

[Tranlations](https://www.termdat.bk.admin.ch/entry/380634)

* Information
* information
* informazione

[Translations](https://www.termdat.bk.admin.ch/entry/379293)

The activity of sending an information.

### Class **paf:Acknowledgment**

paf:Acknowledgment is a rdfs:subClass of prov:Activity


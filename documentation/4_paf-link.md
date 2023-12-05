# Layer 2: Public Affairs (paf.link) {#paf-link}

## Proposal & Decision

[TODO] Describe the binome of proposal and decision. 

* The only answer on Proposal can be a Decision.
* (Also explain that it should only be used in the process where the decision becomes authorative (independent of level). For the use of informative decisions see "Information".)
* [TODO] Make examples: Beispiele: BR-Antrag -> BR-Beschluss; Parlamentarischer Vorstoss -> Verabschiedung des parlamentarischen Vorstosses; 

### Class **paf:Proposal** {#Proposal}

paf:Proposal is an rdfs:subClass of prov:Activity

[Translations](https://www.termdat.bk.admin.ch/entry/56995):

* E: proposal
* D: Antrag
* F: proposition
* I: proposta

This is the activity in the process to formally ask for a decision.

#### Property Variant A **paf:hasProposalSubmitter**

paf:hasProposalSubmitter is a rdfs:subProperty of prov:wasAssociatedWith

[Translations](https://www.termdat.bk.admin.ch/entry/109151)

The agent (person or group) which submits the proposal.

<aside class="example">

```turtle
:proposal_1 a paf:Proposal;
    paf:hasProposalSubmitter :submitter_1.
```

</aside>

#### Property Variant B **prov:qualifiedAssociation**

The agent (person or group) which submits the proposal.

<aside class="example">

```turtle
:proposal_1 a paf:Proposal;
    prov:qualifiedAssociation [
        a prov:Association;
        prov:agent :submitter_1;
        prov:hadRole paf:ProposalSubmitter;
        rdfs:comment "submitter_1 is the issuer of this proposoal."@en
    ].
```

</aside>

<aside class="example">

```xml
<Proposal xmlns:paf="http://example.com/paf#" xmlns:prov="http://www.w3.org/ns/prov#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#">
    <iri>:proposal_1</iri>
    <type>paf:Proposal</type>
    <qualifiedAssociation>
        <type>prov:Association</type>
        <agent>submitter_1</agent>
        <hadRole>paf:ProposalSubmitter</hadRole>
        <comment xml:lang="en">submitter_1 is the issuer of this proposal.</comment>
    </qualifiedAssociation>
</Proposal>
```

</aside>

#### Property Variant C **paf:hasProposalSubmitter**

The agent (person or group) which submits the proposal.

<aside class="example">

```turtle
:proposal_1 a paf:Proposal;
    paf:hasProposalSubmitter [
        a prov:Association;
        prov:agent :submitter_1;
        prov:hadRole paf:ProposalSubmitter;
        rdfs:comment "submitter_1 is the issuer of this proposoal."@en
    ].
```

</aside>

#### Property Variant D **paf:hasProposalSubmitter**

The agent (person or group) which submits the proposal.

<aside class="example">

```turtle
:proposal_1 a paf:Proposal;
    paf:hasProposalSubmitter [
        a prov:Association;
        paf:hasProposalSubmitter :submitter_1;
        prov:hadRole paf:ProposalSubmitter;
        rdfs:comment "submitter_1 is the issuer of this proposoal."@en
    ].
```

</aside>

#### Property **paf:hasProposalReceiver**

### Class **paf:Decision** {#Decision}

paf:Decision is a rdfs:subClass of prov:Activity

[Translations](https://www.termdat.bk.admin.ch/entry/414335):

* Entscheid
* décision
* decisione

This is the activity to formally answer the corresponding paf:Decision.

[Translations](https://www.termdat.bk.admin.ch/entry/132147):

####  Property Variant A paf:hasDecisionDecisionmaker
The agent (person or group) which make the decision.

<aside class="example">
    
```turtle
:decision_1 a paf:Decision;
    paf:hasDecisionDecisionmaker :decisionmaker_1.
```

</aside>

#### Property Variant B prov:qualifiedAssociation
The agent (person or group) which issues the decision.

<aside class="example">

```turtle
:decision_1 a paf:Decision;
    paf:hasDecisionDecisionmaker [
        a prov:Association;
        paf:hasProposalDecisionmaker :decisionmaker_1;
        prov:hadRole paf:DecisionDecisionmaker;
        rdfs:comment "decisionmaker_1 is the issuer of this decision."@en
    ].
```

</aside>

#### Property Variant C paf:hasDecisionDecisionmaker
The agent (person or group) which issues the decision.

<aside class="example">

```turtle
:decision_1 a paf:Decision;
    paf:hasDecisionDecisionmaker [
        a prov:Association;
        prov:agent :decisionmaker_1;
        prov:hadRole paf:DecisionDecisionmaker;
        rdfs:comment "decisionmaker_1 is the issuer of this decision."@en
    ].  
```

</aside>

#### Property Variant D paf:hasDecisionDecisionmaker
The agent (person or group) which issues the decision.

<aside class="example">

```turtle

:decision_1 a paf:Decision;
    paf:hasDecisionDecisionmaker [
        a prov:Association;
        paf:hasProposalDecisionmaker :decisionmaker_1;
        prov:hadRole paf:DecisionDecisionmaker;
        rdfs:comment "decisionmaker_1 is the issuer of this decision."@en
    ].  
```

</aside>

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

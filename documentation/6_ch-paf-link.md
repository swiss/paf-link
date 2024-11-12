# Layer 3: Swiss Public Affairs (ch.paf.link) {#ch-paf-link}

This chapter concretises the chapter before. Whereas the paf-link classes will never be used on real entities (except for examples), the ch-paf-link classes defined in this chapter will be used in real world applications in the public administration of Switzerland.

## Office Consultation

An office consultation is an example of [consultation and comment activities](#consultation-comment-activities). In such a consultation, the submitter of the consultation seeks comments to a draft from different offices.

The activities that are involved are the following:

- Registration Activity (**chpaf:OCoRegistrationActivity**): Registers the already available information in the system. This is the entry into the paf.link realm.
- Consultation Creation Activity (**chpaf:OCoConsultationCreationActivity**): Creates the entities that form the consultation.
- Consultation Registration Activity (**chpaf:OCoConsultationRegistrationActivity**): Registers the consultation in the system. This is an important step because this consultations are registred centrally. This is a subclass of [paf:ConsultationCreationActivity](#ConsultationCreationActivity).
- Consultation Activity (**chpaf:OCoConsultationActivity**): This activity is important for bundling the submitter and receiver of the consultation.
- Comment Activity (**chpaf:OCoCommentActivity**): This activity generates the answer entities to the consultation. Every receiver of the consultation has its own comment activity.

The possible roles are:

- Consultation Registrar (**chpaf:OCoConsultationRegistrar**)
- Consultation Submitter (**chpaf:OCoConsultationSubmitter**)
- Consultation Receiver (**chpaf:OCoConsultationReceiver**)
- Comment Maker (**chpaf:OCoCommentMaker**)

### Full Example on Office Consultation

<aside class="example" title="Full Example on Office Consultation">
    Full turtle listing for: <a href="https://github.com/swiss/paf-link/blob/main/examples/office_consultation.ttl" target="_blank">Full example on office consultation</a>.
</aside>

## Motion and Postulate

Motions and postulates (MoPo) are parliamentary instruments ([de](https://www.parlament.ch/de/%C3%BCber-das-parlament/parlamentsportraet/stellung-der-bundesversammlung/bundesversammlung-und-bundesrat/parlamentarische-vorstoesse)/[fr](https://www.parlament.ch/fr/%C3%BCber-das-parlament/portrait-du-parlement/statut-assemblee-federale/assemblee-federale-et-le-conseil-federal/interventions-parlementaires)/[it](https://www.parlament.ch/it/%C3%BCber-das-parlament/ritratto-del-parlamento/statuto-assemblea-federale/assemblea-federale-e-consiglio-federale/interventi-parlamentari)). More information about the legislative process is available [here (de)](https://www.bj.admin.ch/dam/bj/de/data/staat/legistik/hauptinstrumente/gleitf-d.pdf.download.pdf/gleitf-d.pdf).

Basically, motions and postulates demand actions from the federal council. The answer from the federal council can be a proposal to close the MoPo (because the appropriate action has been taken) or some information about the status of the fulfillment (why is the demanded action of the MoPo not yet fully done).

The history of a MoPo can be quite long and branched. This chapter focusses only on the moment, when the federal council gives an answer to a MoPo, be it a proposal to close the MoPo or the report of the current status of the fulfillment.

### Full Example on Motion and Postulate

The following example shows a motion that had three different answers from the federal council during three years. The answer of the first two years is the current status of the fulfillment and in the third year, it is a proposal for closing (abandonment) the MoPo because the appropriate actions haven been taken and the corresponding laws/rules are in place:

<aside class="example" title="Full Example on Motion and Postulate">
    Full turtle listing for: <a href="https://github.com/swiss/paf-link/blob/main/examples/motion_postulate.ttl" target="_blank">Full example on motion and postulate.</a>.
</aside>

# Layer 2: Public Affairs (paf.link) {#paf-link}

## Public Affairs as Binoms

Public affairs often come in the form of **binoms**:

- proposal and decision
- consultation and comment
- information and acknowledgement
- order and completion

The next sections model such generic public affairs.

## Proposal & Decision Activities

The affair of a proposal and decision means that someone or some body is formally proposing something and another authoritative body is deciding on this proposal. Translations for such activities are in the table below:

|     | [proposal](https://www.termdat.bk.admin.ch/entry/56995) | [decision](https://www.termdat.bk.admin.ch/entry/414335) |
| --- | ------------------------------------------------------- | -------------------------------------------------------- |
| en: | proposal                                                | decision                                                 |
| de: | Antrag                                                  | Entscheidung                                             |
| fr: | proposition                                             | décision                                                 |
| it: | proposta                                                | decisione                                                |

The following elements are involved in such an affair:

### Activity Stream

- **paf:ProposalCreationActivity**: This is the activity that creates all the necessary entities to form the proposal. As the actual proposal activity should not generate entities, this pre-proposal activity is used
- **paf:ProposalActivity**: This activity contains as the sum of all input entities the actual proposal.
- **paf:DecisionCreationActivity**: This is the activity that creates all the necessary entities to form the content of the decision. As the actual decision activity should not generate new content for the decision but only the result of the decision, such a pre-decision activity can be used.
- **paf:DecisionActivity**: This activity contains as the sum of all input entities the content of the decision (what is decided upon) and as output entity the actual result of the decision. Because there is not necessarily a direct succession between the proposal- and decision activity, the decision activity has a separate link to the proposal activity connecting these two.

### Roles

- **paf:ProposalSubmitter**: The agent (person or group) which submits the proposal.
- **paf:ProposalReceiver**: The agent (person or group) which receives the proposal.
- **paf:DecisionMaker**: The agent (person or group) which issues the decision.

### Entities

- **paf:ProposalEntity**: This is the entity that contains the content of the proposal.
- **paf:DecisionEntity**: This is the entity that contains the content that is decided upon (can differ from the proposal).
- **paf:DecisionResultEntity**: This is the entity that contains the result.

### Full Example on Proposal & Decision

<aside class="example" title="Full Example on Proposal & Decision">
    Full turtle listing for: <a href="https://github.com/swiss/paf-link/blob/main/examples/proposal_decision.ttl" target="_blank">Full example on proposal & decision</a>.
</aside>

## Consultation & Comment Activities

In a consultation & comment affair, an agent is seeking comments on a legislative draft or other ideas.

Translations for such activities are in the table below:

|     | [consultation](https://www.termdat.bk.admin.ch/entry/56976) | [comment](https://www.termdat.bk.admin.ch/entry/23059) |
| --- | ----------------------------------------------------------- | ------------------------------------------------------ |
| en: | consultation                                                | comment                                                |
| de: | Vernehmlassungsverfahren                                    | Stellungsnahme                                         |
| fr: | procédure de consultation                                   | avis/prise de position                                 |
| it: | procedura di consultazione                                  |                                                        |

The following elements are involved in such an affair:

### Activity Stream

- **paf:ConsultationCreationActivity**: This is the activity that creates all the necessary entities to form the consultation. As the actual consultation activity should not generate entities, this pre-consultation activity is used.
- **paf:ConsultationRegistrationActivity**: This is the activity, that registers the consultation in the necessary systems (this is usually not the agent that actually wants to do the consultation).
- **paf:ConsultationActivity**: This activity contains as the sum of all input entities the actual consultation with all necessary information.
- **paf:CommentActivity**: This activity contains as the sum of all output entities the complete comments on the consultation. The input entities could be used to show, if not the entire scope of the consultation was considered for making comments. In the case of comment activities, there is no need to alter the consultation, so there is no comment creation activity (in comparison to the proposal and decision activities).

### Roles

- **paf:ConsultationRegistrar**: The agent (person or group) which registers the consultation in the necessary systems.
- **paf:ConsultationSubmitter**: The agent (person or group) which submits the consultation.
- **paf:ConsultationReceiver**: The agent (person or group) which receives the consultation.
- **paf:CommentMaker**: The agent (person or group) which issues the comment.

### Entities

- **paf:ConsultationEntity**: This is the entity that contains (together with other entities) the content of the consultation.
- **paf:CommentEntity**: This is the entity that contains the comments to the consultation.

### Full Example on Consultation & Comment

<aside class="example" title="Full Example on Consultation & Comment">
    Full turtle listing for: <a href="https://github.com/swiss/paf-link/blob/main/examples/consultation_comment.ttl" target="_blank">Full example on consultation & comment</a>.
</aside>

## Information & Acknowledgement Activities

The affair of information and acknowledgement means that a person or organization is informing another person or organization. The receiving body or person (can) acknowledge this information. Depending on the affair, such an acknowledgement can be mandatory, optional or not planned. Translations for such activities are in the table below:

|     | information  | acknowledgement     |
| --- | ------------ | ------------------- |
| en: | information  | acknowledgement     |
| de: | Information  | Quittierung         |
| fr: | information  | accusé de réception |
| it: | informazione | conferma            |

The following elements are involved in such an affair:

### Activity Stream

- **paf:InformationCreationActivity**: This is the activity that creates all the necessary entities to bundle the information. As the actual information activity should not generate entities, this pre-information activity is used.
- **paf:InformationActivity**: This activity contains as the sum of all input entities the actual information.
- **paf:AcknowledgementActivity**: This is the activity to formally acknowledge the corresponding <a href="#InformationActivity">paf:InformationActivity</a>. It contains as the sum of all input entities the information that is acknowledged and creates no output entity.

### Roles

- **paf:InformationSubmitter**: The agent (person or group) which submits the information.
- **paf:InformationReceiver**: The agent (person or group) which receives the information.
- **paf:AcknowledgementMaker**: The agent (person or group) which acknowledges the information.

### Entities

- **paf:InformationEntity**: This is the entity that contains the content of the information.

### Full Example on Information & Acknowledgement

<aside class="example" title="Full Example on Information & Acknowledgement">
    Full turtle listing for: <a href="https://github.com/swiss/paf-link/blob/main/examples/information_acknowledgement.ttl" target="_blank">Full Example on information & acknowledgement</a>.
</aside>

## Order & Completion Activities

These activities are meant to be a sort of "catch-all" activities if the other are not suitable. In fact, all the activities described before could be understood as some kind of "order and completion" activities.

Alternative names:

- Task-Assignment & Task-Fulfillment Activities
- Mandate & Resolution Activities
- Todo & Done Activities ("done" does not sound like an activity)
- Action & Reaction Activities

The following elements are involved in such an affair:

### Activity Stream

- **paf:OrderCreationActivity**: This is the activity that creates all the necessary entities to bundle the order. As the actual order activity should not generate entities, this pre-order activity is used.
- **paf:OrderActivity**: This activity contains as the sum of all input entities the actual order.
- **paf:CompletionCreationActivity**: This is the activity that creates all the necessary entities to form the explanation of the completion (how was the order completed). As the actual completion activity should not generate new content for the completion but only the result of the completion, such a pre-completion activity can be used.
- **paf:CompletionActivity**: This is the activity to formally complete the corresponding <a href="#OrderActivity">paf:OrderActivity</a>. It contains as the sum of all input entities the order that is completed and creates no output entity.

### Roles

- **paf:OrderSubmitter**: The agent (person or group) which submits the order.
- **paf:OrderReceiver**: The agent (person or group) which receives the order.
- **paf:Completer**: The agent (person or group) which completes the order.

### Entities

- **paf:OrderEntity**: This is the entity that contains the content of the order.
- **paf:CompletionEntity**: This is the entity that contains the explanation of how the order was completed.

### Full Example on Order & Completion

<aside class="example" title="Full Example on Order & Completion">
    Full turtle listing for: <a href="https://github.com/swiss/paf-link/blob/main/examples/order_completion.ttl" target="_blank">Full example on order & completion</a>.
</aside>

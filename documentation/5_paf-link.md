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

<table>
  <thead>
    <tr>
      <th>Class</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><dfn id="ProposalCreationActivity"><strong>paf:ProposalCreationActivity</strong></dfn></td>
      <td>This is the activity that creates all the necessary entities to form the proposal. As the actual proposal activity should not generate entities, this pre-proposal activity is used.</td>
    </tr>
    <tr>
      <td><dfn id="ProposalActivity"><strong>paf:ProposalActivity</strong></dfn></td>
      <td>This activity contains as the sum of all input entities the actual proposal.</td>
    </tr>
    <tr>
      <td><dfn id="ProposalSubmitter"><strong>paf:ProposalSubmitter</strong></dfn></td>
      <td>The agent (person or group) which submits the proposal.</td>
    </tr>
    <tr>
      <td><dfn id="ProposalReceiver"><strong>paf:ProposalReceiver</strong></dfn></td>
      <td>The agent (person or group) which receives the proposal.</td>
    </tr>
    <tr>
      <td><dfn id="DecisionCreationActivity"><strong>paf:DecisionCreationActivity</strong></dfn></td>
      <td>This is the activity that creates all the necessary entities to form the content of the decision. As the actual decision activity should not generate new content for the decision but only the result of the decision, such a pre-decision activity can be used.</td>
    </tr>
    <tr>
      <td><dfn id="DecisionActivity"><strong>paf:DecisionActivity</strong></dfn></td>
      <td>This activity contains as the sum of all input entities the content of the decision (what is decided upon) and as output entity the actual result of the decision. Because there is not necessarily a direct succession between the proposal- and decision activity, the decision activity has a separate link to the proposal activity connecting these two.</td>
    </tr>
    <tr>
      <td><dfn id="DecisionMaker"><strong>paf:DecisionMaker</strong></dfn></td>
      <td>The agent (person or group) which issues the decision.</td>
    </tr>
  </tbody>
</table>

**Full Example on Proposal & Decision**

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

<table>
  <thead>
    <tr>
      <th>Class</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><dfn id="ConsultationCreationActivity"><strong>paf:ConsultationCreationActivity</strong></dfn></td>
      <td>This is the activity that creates all the necessary entities to form the consultation. As the actual consultation activity should not generate entities, this pre-consultation activity is used.</td>
    </tr>
    <tr>
      <td><dfn id="ConsultationEntity"><strong>paf:ConsultationEntity</strong></dfn></td>
      <td>This is the entity that contains (together with other entities) the content of the consultation.</td>
    </tr>
    <tr>
      <td><dfn id="ConsultationRegistrationActivity"><strong>paf:ConsultationRegistrationActivity</strong></dfn></td>
      <td>This is the activity, that registers the consultation in the necessary systems (this is usually not the agent that actually wants to do the consultation). The consultation itself is the sum of all input entities to this activity.</td>
    </tr>
    <tr>
      <td><dfn id="ConsultationRegistrar"><strong>paf:ConsultationRegistrar</strong></dfn></td>
      <td>The agent (person or group) which registers the consultation in the necessary systems.</td>
    </tr>
    <tr>
      <td><dfn id="ConsultationActivity"><strong>paf:ConsultationActivity</strong></dfn></td>
      <td>This activity contains as the sum of all input entities the actual consultation with all necessary information.</td>
    </tr>
    <tr>
      <td><dfn id="ConsultationSubmitter"><strong>paf:ConsultationSubmitter</strong></dfn></td>
      <td>The agent (person or group) which submits the consultation.</td>
    </tr>
    <tr>
      <td><dfn id="ConsultationReceiver"><strong>paf:ConsultationReceiver</strong></dfn></td>
      <td>The agent (person or group) which receives the consultation.</td>
    </tr>
    <tr>
      <td><dfn id="CommentActivity"><strong>paf:CommentActivity</strong></dfn></td>
      <td>This activity contains as the sum of all output entities the complete comments on the consultation. The input entities could be used to show, if not the entire scope of the consultation was considered for making comments. In the case of comment activities, there is no need to alter the consultation, so there is no comment creation activity (in comparison to the proposal and decision activities).</td>
    </tr>
    <tr>
      <td><dfn id="CommentEntity"><strong>paf:CommentEntity</strong></dfn></td>
      <td>This is the entity that contains the comments to the consultation.</td>
    </tr>
    <tr>
      <td><dfn id="CommentMaker"><strong>paf:CommentMaker</strong></dfn></td>
      <td>The agent (person or group) which issues the comment.</td>
    </tr>
  </tbody>
</table>

**Full Example on Consultation & Comment**

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

<table>
  <thead>
    <tr>
      <th>Class</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><dfn id="InformationCreationActivity"><strong>paf:InformationCreationActivity</strong></dfn></td>
      <td>This is the activity that creates all the necessary entities to bundle the information. As the actual information activity should not generate entities, this pre-information activity is used.</td>
    </tr>
    <tr>
      <td><dfn id="InformationActivity"><strong>paf:InformationActivity</strong></dfn></td>
      <td>This activity contains as the sum of all input entities the actual information.</td>
    </tr>
    <tr>
      <td><dfn id="InformationSubmitter"><strong>paf:InformationSubmitter</strong></dfn></td>
      <td>The agent (person or group) which submits the information.</td>
    </tr>
    <tr>
      <td><dfn id="InformationReceiver"><strong>paf:InformationReceiver</strong></dfn></td>
      <td>The agent (person or group) which receives the information.</td>
    </tr>
    <tr>
      <td><dfn id="AcknowledgementActivity"><strong>paf:AcknowledgementActivity</strong></dfn></td>
      <td>This is the activity to formally acknowledge the corresponding <a href="#InformationActivity">paf:InformationActivity</a>. It contains as the sum of all input entities the information that is acknowledged and creates no output entity.</td>
    </tr>
    <tr>
      <td><dfn id="AcknowledgementMaker"><strong>paf:AcknowledgementMaker</strong></dfn></td>
      <td>The agent (person or group) which acknowledges the information.</td>
    </tr>
  </tbody>
</table>

**Full Example on Information & Acknowledgement**

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

<table>
  <thead>
    <tr>
      <th>Class</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><dfn id="OrderCreationActivity"><strong>paf:OrderCreationActivity</strong></dfn></td>
      <td>This is the activity that creates all the necessary entities to bundle the order. As the actual order activity should not generate entities, this pre-order activity is used.</td>
    </tr>
    <tr>
      <td><dfn id="OrderActivity"><strong>paf:OrderActivity</strong></dfn></td>
      <td>This activity contains as the sum of all input entities the actual order.</td>
    </tr>
    <tr>
      <td><dfn id="OrderSubmitter"><strong>paf:OrderSubmitter</strong></dfn></td>
      <td>The agent (person or group) which submits the order.</td>
    </tr>
    <tr>
      <td><dfn id="OrderReceiver"><strong>paf:OrderReceiver</strong></dfn></td>
      <td>The agent (person or group) which receives the order.</td>
    </tr>
    <tr>
      <td><dfn id="CompletionCreationActivity"><strong>paf:CompletionCreationActivity</strong></dfn></td>
      <td>This is the activity that creates all the necessary entities to form the explanation of the completion (how was the order completed). As the actual completion activity should not generate new content for the completion but only the result of the completion, such a pre-completion activity can be used.</td>
    </tr>
    <tr>
      <td><dfn id="CompletionActivity"><strong>paf:CompletionActivity</strong></dfn></td>
      <td>This is the activity to formally complete the corresponding <a href="#OrderActivity">paf:OrderActivity</a>. It contains as the sum of all input entities the order that is completed and creates no output entity.</td>
    </tr>
    <tr>
      <td><dfn id="Completer"><strong>paf:Completer</strong></dfn></td>
      <td>The agent (person or group) which completes the order.</td>
    </tr>
  </tbody>
</table>

**Full Example on Order & Completion**

<aside class="example" title="Full Example on Order & Completion">
    Full turtle listing for: <a href="https://github.com/swiss/paf-link/blob/main/examples/order_completion.ttl" target="_blank">Full example on order & completion</a>.
</aside>

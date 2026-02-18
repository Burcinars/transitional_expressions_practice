const QUESTIONS = [
  {
    "id": "L1-01",
    "level": 1,
    "relationshipType": "Contrast",
    "scenario": "In the weekly sales email, the team celebrated record leads. <strong>By Friday, however, the conversion rate had dropped</strong>. The manager needs one sentence that signals this unexpected shift.",
    "sentenceWithBlank": "Lead volume increased this week; <strong>____ the close rate declined.</strong>",
    "choices": [
      "however,",
      "therefore,",
      "for example,",
      "because"
    ],
    "correctIndex": 0,
    "hintByChoice": [
      "",
      "Look for a contrast, not a result.",
      "You are not introducing an example.",
      "The blank does not introduce a reason clause."
    ],
    "wrongWhyByChoice": [
      "",
      "therefore shows cause-effect, but the second clause reverses expectations.",
      "for example adds illustration, not opposition.",
      "because would create a subordinate reason clause, not a contrast pivot after a semicolon."
    ],
    "correctWhy": "<strong>However</strong> marks opposition between strong leads and weak conversions.",
    "ruleToRemember": "Use contrast transitions when the second idea moves against expectation.",
    "punctuationNote": "After a semicolon + however, add a comma: ; however,",
    "conceptTag": "contrast"
  },
  {
    "id": "L1-02",
    "level": 1,
    "relationshipType": "Cause and effect",
    "scenario": "A vendor sent revised pricing two days late. <strong>The purchasing team postponed approvals</strong>. The update sentence should show outcome.",
    "sentenceWithBlank": "The vendor submitted revised pricing late; <strong>____ procurement delayed approval.</strong>",
    "choices": [
      "meanwhile,",
      "as a result,",
      "for instance,",
      "although"
    ],
    "correctIndex": 1,
    "hintByChoice": [
      "This is not about two events happening at the same time.",
      "",
      "This line is not giving an example.",
      "The blank should show effect, not concession."
    ],
    "wrongWhyByChoice": [
      "meanwhile expresses parallel timing, not consequence.",
      "",
      "for instance introduces support detail, not an effect.",
      "although starts a dependent concession and does not fit this structure."
    ],
    "correctWhy": "<strong>As a result</strong> clearly links the delay (cause) to postponed approval (effect).",
    "ruleToRemember": "Choose result transitions when clause two is the direct outcome of clause one.",
    "punctuationNote": "Set off as a result with a following comma in this position.",
    "conceptTag": "cause-effect"
  },
  {
    "id": "L1-03",
    "level": 1,
    "relationshipType": "Reason",
    "scenario": "In a customer-response memo, support managers explain why wait times rose. <strong>Three agents were reassigned to onboarding</strong>. The sentence needs a reason connector.",
    "sentenceWithBlank": "Wait times increased <strong>____ three agents were reassigned to onboarding.</strong>",
    "choices": [
      "next,",
      "however,",
      "because",
      "for example,"
    ],
    "correctIndex": 2,
    "hintByChoice": [
      "You are not showing sequence steps.",
      "You need a reason, not contrast.",
      "",
      "You are not adding an example."
    ],
    "wrongWhyByChoice": [
      "next signals order, not explanation.",
      "however signals opposition, not cause.",
      "",
      "for example introduces illustration, not reason."
    ],
    "correctWhy": "<strong>Because</strong> directly introduces the reason for the increase.",
    "ruleToRemember": "Use because when the second clause explains why the first happened.",
    "punctuationNote": "No comma is needed before because when the reason follows the main clause.",
    "conceptTag": "reason"
  },
  {
    "id": "L1-04",
    "level": 1,
    "relationshipType": "Evidence",
    "scenario": "A supervisor writes performance feedback after a month of coaching. She claims service quality improved. <strong>Escalation tickets dropped by 18%</strong>.",
    "sentenceWithBlank": "Service quality improved, <strong>____ an 18% drop in escalations.</strong>",
    "choices": [
      "on the other hand,",
      "however,",
      "therefore,",
      "as shown by"
    ],
    "correctIndex": 3,
    "hintByChoice": [
      "This is not a two-sided contrast.",
      "You need proof language.",
      "The blank should attach evidence, not effect.",
      ""
    ],
    "wrongWhyByChoice": [
      "on the other hand introduces contrast between alternatives.",
      "however does not present evidence.",
      "therefore indicates an effect, but the clause gives supporting proof.",
      ""
    ],
    "correctWhy": "<strong>As shown by</strong> explicitly ties the claim to measurable evidence.",
    "ruleToRemember": "When a number supports a claim, use an evidence connector.",
    "punctuationNote": "None",
    "conceptTag": "evidence"
  },
  {
    "id": "L1-05",
    "level": 1,
    "relationshipType": "Response",
    "scenario": "A policy memo notes repeated badge-sharing at the warehouse entrance. <strong>Leadership introduced photo verification</strong>. The relationship is action in response to risk.",
    "sentenceWithBlank": "Employees repeatedly shared access badges; <strong>____ leadership introduced photo verification.</strong>",
    "choices": [
      "in response,",
      "for example,",
      "meanwhile,",
      "because"
    ],
    "correctIndex": 0,
    "hintByChoice": [
      "",
      "This is an action taken because of a problem.",
      "The second clause is not parallel timing.",
      "The blank should not open a subordinate clause."
    ],
    "wrongWhyByChoice": [
      "",
      "for example would introduce an illustration, not a reaction.",
      "meanwhile marks simultaneous action, not reactive policy.",
      "because requires a different clause order and relation."
    ],
    "correctWhy": "<strong>In response</strong> signals that clause two is a deliberate reaction to clause one.",
    "ruleToRemember": "Use response transitions when a problem triggers an intentional action.",
    "punctuationNote": "After in response at mid-sentence transition position, use a comma.",
    "conceptTag": "response"
  },
  {
    "id": "L1-06",
    "level": 1,
    "relationshipType": "Sequence",
    "scenario": "In onboarding instructions, HR explains the order for account setup. <strong>The employee signs the policy first, then creates MFA</strong>.",
    "sentenceWithBlank": "First, sign the policy acknowledgment. <strong>____ create multi-factor authentication.</strong>",
    "choices": [
      "However,",
      "Next,",
      "Consequently,",
      "Because"
    ],
    "correctIndex": 1,
    "hintByChoice": [
      "You need sequence, not contrast.",
      "",
      "No cause-effect is being asserted.",
      "This is not a reason clause."
    ],
    "wrongWhyByChoice": [
      "however shifts direction instead of continuing order.",
      "",
      "consequently gives result, not procedural step order.",
      "because cannot introduce the next imperative step."
    ],
    "correctWhy": "<strong>Next</strong> clearly continues a procedural sequence.",
    "ruleToRemember": "Use sequence markers for ordered actions in instructions.",
    "punctuationNote": "Use a comma after introductory sequence adverbs like Next.",
    "conceptTag": "sequence"
  },
  {
    "id": "L1-07",
    "level": 1,
    "relationshipType": "Timing",
    "scenario": "During a launch day, marketing posted updates on social media. <strong>At the same time, support handled live chat spikes</strong>.",
    "sentenceWithBlank": "Marketing posted launch updates. <strong>____ support handled a surge in live chat.</strong>",
    "choices": [
      "For example,",
      "Therefore,",
      "Meanwhile,",
      "Although"
    ],
    "correctIndex": 2,
    "hintByChoice": [
      "You are not introducing supporting detail.",
      "Look for simultaneous timing.",
      "",
      "The sentence needs coordination, not concession."
    ],
    "wrongWhyByChoice": [
      "for example adds illustration, not parallel action.",
      "therefore signals logical consequence, not simultaneity.",
      "",
      "although introduces concession, not same-time context."
    ],
    "correctWhy": "<strong>Meanwhile</strong> signals that both actions occurred in parallel.",
    "ruleToRemember": "Choose meanwhile for concurrent events in business narratives.",
    "punctuationNote": "Comma follows introductory meanwhile.",
    "conceptTag": "timing"
  },
  {
    "id": "L1-08",
    "level": 1,
    "relationshipType": "Contrast",
    "scenario": "In a project update, engineers closed all high-risk bugs. <strong>The client still requested a phased release</strong>.",
    "sentenceWithBlank": "Engineering resolved all high-risk bugs; <strong>____ the client requested a phased rollout.</strong>",
    "choices": [
      "because",
      "as a result,",
      "for example,",
      "nevertheless,"
    ],
    "correctIndex": 3,
    "hintByChoice": [
      "Reason does not fit here.",
      "This clause resists expectation.",
      "You are not giving a sample case.",
      ""
    ],
    "wrongWhyByChoice": [
      "because introduces cause, not contrast.",
      "as a result implies predictable effect, but this is a surprising contrast.",
      "for example introduces illustration, not concession.",
      ""
    ],
    "correctWhy": "<strong>Nevertheless</strong> marks an unexpected continuation despite success.",
    "ruleToRemember": "Use concessive contrast words when outcome persists despite positive conditions.",
    "punctuationNote": "With semicolon + nevertheless, include a comma after nevertheless.",
    "conceptTag": "contrast"
  },
  {
    "id": "L1-09",
    "level": 1,
    "relationshipType": "Reason",
    "scenario": "A meeting note explains why the budget review moved. <strong>Finance needed updated vendor terms</strong>.",
    "sentenceWithBlank": "The budget review moved to Thursday <strong>____ finance needed updated vendor terms.</strong>",
    "choices": [
      "since",
      "however,",
      "next,",
      "for instance,"
    ],
    "correctIndex": 0,
    "hintByChoice": [
      "",
      "Need explanation, not opposition.",
      "Not a sequence instruction.",
      "Not an illustration."
    ],
    "wrongWhyByChoice": [
      "",
      "however marks contrast, not reason.",
      "next marks sequence.",
      "for instance provides an example."
    ],
    "correctWhy": "<strong>Since</strong> can function as a reason connector in formal updates.",
    "ruleToRemember": "Use since for reason when time meaning is not intended.",
    "punctuationNote": "No comma needed before since in this sentence structure.",
    "conceptTag": "reason"
  },
  {
    "id": "L1-10",
    "level": 1,
    "relationshipType": "Cause and effect",
    "scenario": "A customer success manager shared a QBR summary. <strong>The client adopted the new workflow, and churn risk dropped</strong>.",
    "sentenceWithBlank": "The client adopted the new workflow; <strong>____ churn risk dropped this quarter.</strong>",
    "choices": [
      "however,",
      "consequently,",
      "for example,",
      "meanwhile,"
    ],
    "correctIndex": 1,
    "hintByChoice": [
      "Need outcome relationship.",
      "",
      "No illustration is being introduced.",
      "Not parallel actions."
    ],
    "wrongWhyByChoice": [
      "however indicates contrast.",
      "",
      "for example indicates example.",
      "meanwhile indicates simultaneous events."
    ],
    "correctWhy": "<strong>Consequently</strong> explicitly signals the second clause as an outcome.",
    "ruleToRemember": "Use consequence markers when an action produces a measurable business result.",
    "punctuationNote": "Add comma after consequently in transitional position.",
    "conceptTag": "cause-effect"
  },
  {
    "id": "L1-11",
    "level": 1,
    "relationshipType": "Evidence",
    "scenario": "An operations recap claims packing speed improved. <strong>Average fulfillment time fell from 14 to 10 minutes</strong>.",
    "sentenceWithBlank": "Packing speed improved, <strong>____ average fulfillment time fell from 14 to 10 minutes.</strong>",
    "choices": [
      "therefore,",
      "however,",
      "as evidenced by",
      "in response,"
    ],
    "correctIndex": 2,
    "hintByChoice": [
      "The second clause supports the first, not results from it.",
      "Choose proof wording.",
      "",
      "This is not reaction language."
    ],
    "wrongWhyByChoice": [
      "therefore marks result instead of support evidence.",
      "however is contrast, not evidence.",
      "",
      "in response indicates reaction to a problem."
    ],
    "correctWhy": "<strong>As evidenced by</strong> connects claim and metric as proof.",
    "ruleToRemember": "Evidence connectors introduce data that validates a claim.",
    "punctuationNote": "None",
    "conceptTag": "evidence"
  },
  {
    "id": "L1-12",
    "level": 1,
    "relationshipType": "Response",
    "scenario": "A client reported three invoice errors in one month. <strong>Accounting implemented a two-person review check</strong>.",
    "sentenceWithBlank": "The client reported repeated invoice errors; <strong>____ accounting implemented a two-person review.</strong>",
    "choices": [
      "because",
      "for example,",
      "however,",
      "in response,"
    ],
    "correctIndex": 3,
    "hintByChoice": [
      "The structure asks for a transition, not a subordinate cause.",
      "This is a corrective action.",
      "Not a contrast shift.",
      ""
    ],
    "wrongWhyByChoice": [
      "because does not fit after semicolon in this pattern.",
      "for example provides illustration, not action taken.",
      "however signals contrast.",
      ""
    ],
    "correctWhy": "<strong>In response</strong> is the clearest reaction marker in policy/action writing.",
    "ruleToRemember": "When clause two is a fix to clause one, use response language.",
    "punctuationNote": "Use comma after in response.",
    "conceptTag": "response"
  },
  {
    "id": "L1-13",
    "level": 1,
    "relationshipType": "Sequence",
    "scenario": "A project manager explains meeting workflow. <strong>Agenda review happens first, decision log update happens second</strong>.",
    "sentenceWithBlank": "First, review open risks. <strong>____ update the decision log.</strong>",
    "choices": [
      "Then,",
      "However,",
      "Therefore,",
      "Because"
    ],
    "correctIndex": 0,
    "hintByChoice": [
      "",
      "Continue sequence.",
      "Not cause-effect.",
      "Not a reason clause."
    ],
    "wrongWhyByChoice": [
      "",
      "however breaks flow with contrast.",
      "therefore implies result.",
      "because cannot introduce a parallel imperative step."
    ],
    "correctWhy": "<strong>Then</strong> preserves procedural order.",
    "ruleToRemember": "In processes, use sequence adverbs to guide the reader through steps.",
    "punctuationNote": "Comma follows introductory Then.",
    "conceptTag": "sequence"
  },
  {
    "id": "L1-14",
    "level": 1,
    "relationshipType": "Contrast",
    "scenario": "In quarterly feedback, a rep exceeded activity targets. <strong>Customer satisfaction still remained flat</strong>.",
    "sentenceWithBlank": "The rep exceeded outreach targets; <strong>____ satisfaction scores remained flat.</strong>",
    "choices": [
      "consequently,",
      "yet",
      "for example,",
      "because"
    ],
    "correctIndex": 1,
    "hintByChoice": [
      "Need a short contrast connector.",
      "",
      "Not an illustrative add-on.",
      "No reason clause needed."
    ],
    "wrongWhyByChoice": [
      "consequently indicates expected result, not contradiction.",
      "",
      "for example introduces an instance, not contrast.",
      "because introduces reason, not pivot."
    ],
    "correctWhy": "<strong>Yet</strong> highlights tension between effort and outcome.",
    "ruleToRemember": "Use yet to mark concise contrast between two independent clauses.",
    "punctuationNote": "When joining independent clauses with yet, use a comma before yet.",
    "conceptTag": "contrast"
  },
  {
    "id": "L1-15",
    "level": 1,
    "relationshipType": "Cause and effect",
    "scenario": "A policy update shortened approval tiers from three to one. <strong>Purchase requests moved faster</strong>.",
    "sentenceWithBlank": "Approval tiers were reduced from three to one; <strong>____ purchase requests moved faster.</strong>",
    "choices": [
      "for example,",
      "however,",
      "therefore,",
      "meanwhile,"
    ],
    "correctIndex": 2,
    "hintByChoice": [
      "Not a supporting example.",
      "Relationship is outcome.",
      "",
      "Not same-time action."
    ],
    "wrongWhyByChoice": [
      "for example marks illustration.",
      "however marks contrast.",
      "",
      "meanwhile marks simultaneity."
    ],
    "correctWhy": "<strong>Therefore</strong> signals logical consequence.",
    "ruleToRemember": "Pick therefore when clause two naturally follows from clause one.",
    "punctuationNote": "Use comma after therefore when it introduces the second clause.",
    "conceptTag": "cause-effect"
  },
  {
    "id": "L1-16",
    "level": 1,
    "relationshipType": "Reason",
    "scenario": "In a staffing note, the manager justifies overtime approval. <strong>Two team members were out sick</strong>.",
    "sentenceWithBlank": "Overtime was approved <strong>____ two team members were out sick.</strong>",
    "choices": [
      "then,",
      "however,",
      "for example,",
      "because"
    ],
    "correctIndex": 3,
    "hintByChoice": [
      "Not sequence.",
      "Need explanation.",
      "Not evidence/example framing.",
      ""
    ],
    "wrongWhyByChoice": [
      "then indicates sequence, not cause.",
      "however contrasts ideas.",
      "for example illustrates rather than explains.",
      ""
    ],
    "correctWhy": "<strong>Because</strong> supplies the direct rationale for overtime.",
    "ruleToRemember": "Use because when answering the question: why did this happen?",
    "punctuationNote": "No comma before because in this structure.",
    "conceptTag": "reason"
  },
  {
    "id": "L1-17",
    "level": 1,
    "relationshipType": "Evidence",
    "scenario": "A project retrospective claims communication improved. <strong>Status updates were posted daily instead of weekly</strong>.",
    "sentenceWithBlank": "Communication improved, <strong>____ status updates were posted daily instead of weekly.</strong>",
    "choices": [
      "as demonstrated by",
      "however,",
      "therefore,",
      "in response,"
    ],
    "correctIndex": 0,
    "hintByChoice": [
      "",
      "Use evidence wording.",
      "Not effect wording.",
      "Not reaction wording."
    ],
    "wrongWhyByChoice": [
      "",
      "however indicates contrast.",
      "therefore indicates result, not support.",
      "in response indicates a reaction move."
    ],
    "correctWhy": "<strong>As demonstrated by</strong> introduces supporting proof for the claim.",
    "ruleToRemember": "For claim + metric, use evidence transitions.",
    "punctuationNote": "None",
    "conceptTag": "evidence"
  },
  {
    "id": "L1-18",
    "level": 1,
    "relationshipType": "Timing",
    "scenario": "In a launch war-room update, engineering monitored error logs. <strong>At the same time, account managers called key clients</strong>.",
    "sentenceWithBlank": "Engineering monitored error logs. <strong>____ account managers called key clients.</strong>",
    "choices": [
      "As a result,",
      "At the same time,",
      "For example,",
      "Because"
    ],
    "correctIndex": 1,
    "hintByChoice": [
      "Need simultaneous timing.",
      "",
      "Not an illustrative detail.",
      "Not a reason clause."
    ],
    "wrongWhyByChoice": [
      "as a result indicates consequence.",
      "",
      "for example indicates illustration.",
      "because indicates reason."
    ],
    "correctWhy": "<strong>At the same time</strong> directly marks concurrent actions.",
    "ruleToRemember": "Use timing transitions when events run in parallel.",
    "punctuationNote": "Comma after introductory timing phrase.",
    "conceptTag": "timing"
  },
  {
    "id": "L1-19",
    "level": 1,
    "relationshipType": "Response",
    "scenario": "A customer threatened to cancel after delayed onboarding. <strong>The team assigned a dedicated implementation lead</strong>.",
    "sentenceWithBlank": "The customer threatened to cancel; <strong>____ the team assigned a dedicated implementation lead.</strong>",
    "choices": [
      "for example,",
      "however,",
      "as a response,",
      "meanwhile,"
    ],
    "correctIndex": 2,
    "hintByChoice": [
      "Not support detail.",
      "Need reaction language.",
      "",
      "Not simultaneous timing."
    ],
    "wrongWhyByChoice": [
      "for example is illustration.",
      "however is contrast.",
      "",
      "meanwhile is parallel timing."
    ],
    "correctWhy": "<strong>As a response</strong> frames the second action as a direct reaction.",
    "ruleToRemember": "Response transitions fit corrective actions after a problem signal.",
    "punctuationNote": "Use comma after the response transition.",
    "conceptTag": "response"
  },
  {
    "id": "L1-20",
    "level": 1,
    "relationshipType": "Sequence",
    "scenario": "In a compliance email, managers list required sign-off steps. <strong>Policy review must happen before legal approval</strong>.",
    "sentenceWithBlank": "Begin with policy review. <strong>____ request legal approval.</strong>",
    "choices": [
      "Because",
      "However,",
      "Consequently,",
      "After that,"
    ],
    "correctIndex": 3,
    "hintByChoice": [
      "Not a reason clause.",
      "This is ordered procedure.",
      "Not an effect relation.",
      ""
    ],
    "wrongWhyByChoice": [
      "because introduces reason and does not fit imperative sequence.",
      "however introduces contrast.",
      "consequently introduces a result claim.",
      ""
    ],
    "correctWhy": "<strong>After that</strong> preserves the required order of steps.",
    "ruleToRemember": "Use sequence transitions to reduce ambiguity in procedural writing.",
    "punctuationNote": "Add comma after introductory sequence phrase.",
    "conceptTag": "sequence"
  },
  {
    "id": "L2-01",
    "level": 2,
    "relationshipType": "Nuanced contrast",
    "scenario": "In a board memo, revenue rose modestly in Q2. <strong>Operating margin still narrowed</strong> because discounting increased. The writer needs formal contrast.",
    "sentenceWithBlank": "Revenue rose in Q2; <strong>____ operating margin narrowed.</strong>",
    "choices": [
      "however,",
      "meanwhile,",
      "for example,",
      "because"
    ],
    "correctIndex": 0,
    "hintByChoice": [
      "",
      "This is opposition, not parallel timing.",
      "This sentence does not introduce an example.",
      "Reason framing is not the goal of this blank."
    ],
    "wrongWhyByChoice": [
      "",
      "meanwhile can be grammatical but underplays the contrast.",
      "for example is not appropriate for claim-to-claim contrast.",
      "because changes the clause relationship to explanation."
    ],
    "correctWhy": "<strong>However</strong> best conveys formal, analytical contrast in executive tone.",
    "ruleToRemember": "When both clauses are true but pull in different directions, use contrast pivots.",
    "punctuationNote": "Semicolon + however + comma is a standard formal pattern.",
    "conceptTag": "nuance-contrast"
  },
  {
    "id": "L2-02",
    "level": 2,
    "relationshipType": "Concession nuance",
    "scenario": "A manager praises a proposal's creativity in performance feedback. <strong>She still rejects the timeline as unrealistic</strong>. Tone should remain constructive.",
    "sentenceWithBlank": "The proposal is creative; <strong>____ the timeline is unrealistic.</strong>",
    "choices": [
      "therefore,",
      "nevertheless,",
      "for instance,",
      "next,"
    ],
    "correctIndex": 1,
    "hintByChoice": [
      "Need concession rather than effect.",
      "",
      "No example is being offered.",
      "No sequence is intended."
    ],
    "wrongWhyByChoice": [
      "therefore implies creativity caused the timeline problem.",
      "",
      "for instance would require an example structure.",
      "next suggests procedural order."
    ],
    "correctWhy": "<strong>Nevertheless</strong> keeps a professional concession tone: positive point acknowledged, limitation still stated.",
    "ruleToRemember": "Use concessive transitions to balance praise with a critical qualification.",
    "punctuationNote": "Place a comma after nevertheless in this position.",
    "conceptTag": "nuance-concession"
  },
  {
    "id": "L2-03",
    "level": 2,
    "relationshipType": "Best evidence wording",
    "scenario": "A policy memo claims remote onboarding now scales better. The author cites one concrete indicator: <strong>completion rates climbed from 62% to 84%</strong>.",
    "sentenceWithBlank": "Remote onboarding now scales better, <strong>____ completion rates rose from 62% to 84%.</strong>",
    "choices": [
      "however,",
      "therefore,",
      "as evidenced by",
      "in response,"
    ],
    "correctIndex": 2,
    "hintByChoice": [
      "Not contrast.",
      "Pick the option that introduces proof, not outcome.",
      "",
      "Not reaction."
    ],
    "wrongWhyByChoice": [
      "however creates contradiction where none exists.",
      "therefore reframes the metric as effect rather than support.",
      "",
      "in response implies an action sequence."
    ],
    "correctWhy": "<strong>As evidenced by</strong> is the strongest formal connector for claim + metric support.",
    "ruleToRemember": "If a number validates a statement, use evidence language.",
    "punctuationNote": "None",
    "conceptTag": "nuance-evidence"
  },
  {
    "id": "L2-04",
    "level": 2,
    "relationshipType": "Tone-aware cause",
    "scenario": "In a client email, the consultant explains why deliverables moved by two days. <strong>The client requested legal review before release</strong>.",
    "sentenceWithBlank": "Delivery shifted by two days <strong>____ the client requested legal review before release.</strong>",
    "choices": [
      "meanwhile,",
      "however,",
      "for example,",
      "because"
    ],
    "correctIndex": 3,
    "hintByChoice": [
      "Not parallel action.",
      "Need direct rationale in neutral tone.",
      "Not illustrative support.",
      ""
    ],
    "wrongWhyByChoice": [
      "meanwhile indicates simultaneous events.",
      "however would signal contradiction, not explanation.",
      "for example does not answer why.",
      ""
    ],
    "correctWhy": "<strong>Because</strong> is direct and transparent, which suits client-facing explanation.",
    "ruleToRemember": "For schedule changes, state cause plainly and early.",
    "punctuationNote": "No comma before because when the reason follows the main clause.",
    "conceptTag": "nuance-reason"
  },
  {
    "id": "L2-05",
    "level": 2,
    "relationshipType": "Subtle contrast",
    "scenario": "A project retrospective notes that the sprint closed on time. <strong>Quality checks, however, found three critical defects</strong>. The writer wants precise contrast with interruption.",
    "sentenceWithBlank": "The sprint closed on time. Quality checks, <strong>____ found three critical defects.</strong>",
    "choices": [
      "however,",
      "therefore,",
      "for example,",
      "because"
    ],
    "correctIndex": 0,
    "hintByChoice": [
      "",
      "The inserted transition should interrupt to signal contrast.",
      "No example relationship.",
      "Not causal explanation."
    ],
    "wrongWhyByChoice": [
      "",
      "therefore suggests defects were a logical result of being on time.",
      "for example is not an interrupting contrast marker.",
      "because would require a different clause structure."
    ],
    "correctWhy": "Here <strong>however</strong> works as a parenthetical contrast marker inside the sentence.",
    "ruleToRemember": "When however interrupts a clause, set it off with commas on both sides.",
    "punctuationNote": "Use comma before and after however when it is parenthetical.",
    "conceptTag": "nuance-punctuation"
  },
  {
    "id": "L2-06",
    "level": 2,
    "relationshipType": "Nuanced response",
    "scenario": "After a customer escalation, leadership avoided blame language in internal notes. <strong>They focused on corrective action</strong>.",
    "sentenceWithBlank": "The account escalated twice this month; <strong>____ we reassigned a senior success manager.</strong>",
    "choices": [
      "however,",
      "in response,",
      "for example,",
      "meanwhile,"
    ],
    "correctIndex": 1,
    "hintByChoice": [
      "Need action-after-trigger relation.",
      "",
      "Not supportive detail.",
      "Not concurrent activity."
    ],
    "wrongWhyByChoice": [
      "however signals contrast, not corrective move.",
      "",
      "for example is illustrative, not reactive.",
      "meanwhile is temporal overlap."
    ],
    "correctWhy": "<strong>In response</strong> keeps tone accountable and action-focused.",
    "ruleToRemember": "Use response transitions in escalation summaries to emphasize remediation.",
    "punctuationNote": "Comma follows in response.",
    "conceptTag": "nuance-response"
  },
  {
    "id": "L2-07",
    "level": 2,
    "relationshipType": "Best fit among plausible options",
    "scenario": "An operations deck states that attrition fell in Q3. <strong>The same quarter also had fewer unplanned absences</strong>. Both links are plausible, but one is best as evidence.",
    "sentenceWithBlank": "Attrition fell in Q3, <strong>____ unplanned absences also decreased.</strong>",
    "choices": [
      "meanwhile,",
      "therefore,",
      "as shown by",
      "because"
    ],
    "correctIndex": 2,
    "hintByChoice": [
      "Timing is secondary; support is primary.",
      "Decide whether clause two is result or proof.",
      "",
      "The clause is data support, not causal mechanism."
    ],
    "wrongWhyByChoice": [
      "meanwhile is possible but too weak for analytical reporting.",
      "therefore overstates causality when the second clause is better read as supporting indicator.",
      "",
      "because implies direct causation not established in the memo."
    ],
    "correctWhy": "<strong>As shown by</strong> fits cautious business tone by presenting supporting evidence without overclaiming causation.",
    "ruleToRemember": "When causality is uncertain, prefer evidence framing over strong causal claims.",
    "punctuationNote": "None",
    "conceptTag": "nuance-evidence"
  },
  {
    "id": "L2-08",
    "level": 2,
    "relationshipType": "Consequence with formal register",
    "scenario": "A policy team removed duplicate approvals from the travel process. <strong>Reimbursement cycle time improved by five days</strong>.",
    "sentenceWithBlank": "Duplicate approvals were removed; <strong>____ reimbursement cycle time improved by five days.</strong>",
    "choices": [
      "on the other hand,",
      "however,",
      "for example,",
      "consequently,"
    ],
    "correctIndex": 3,
    "hintByChoice": [
      "No opposing alternative is being compared.",
      "Need an outcome marker in formal tone.",
      "No example is being introduced.",
      ""
    ],
    "wrongWhyByChoice": [
      "on the other hand suggests balanced alternatives.",
      "however signals contrast.",
      "for example signals illustration.",
      ""
    ],
    "correctWhy": "<strong>Consequently</strong> is a precise formal connector for process change and measured outcome.",
    "ruleToRemember": "Use consequently in policy prose for cause-to-effect logic.",
    "punctuationNote": "Use comma after consequently.",
    "conceptTag": "nuance-cause-effect"
  },
  {
    "id": "L2-09",
    "level": 2,
    "relationshipType": "Tone and diplomacy",
    "scenario": "In peer feedback, the reviewer wants to acknowledge effort while noting risk. <strong>Documentation was thorough, but dependencies were not mapped</strong>.",
    "sentenceWithBlank": "The documentation was thorough; <strong>____ key dependencies were not fully mapped.</strong>",
    "choices": [
      "however,",
      "therefore,",
      "for instance,",
      "because"
    ],
    "correctIndex": 0,
    "hintByChoice": [
      "",
      "Diplomatic contrast is needed.",
      "No example relationship.",
      "No reason clause intended."
    ],
    "wrongWhyByChoice": [
      "",
      "therefore implies thorough docs caused missing dependencies.",
      "for instance would require an example of thorough docs.",
      "because would explain thoroughness, not contrast it."
    ],
    "correctWhy": "<strong>However</strong> creates clear but professional contrast in feedback tone.",
    "ruleToRemember": "Use however to separate praise from a specific concern.",
    "punctuationNote": "Semicolon + however + comma supports formal written feedback.",
    "conceptTag": "nuance-contrast"
  },
  {
    "id": "L2-10",
    "level": 2,
    "relationshipType": "Nuanced sequence",
    "scenario": "A policy memo lists remediation workflow after audit findings. <strong>Containment actions happen before root-cause analysis</strong>.",
    "sentenceWithBlank": "Start with immediate containment. <strong>____ perform the root-cause analysis.</strong>",
    "choices": [
      "However,",
      "Then,",
      "As a result,",
      "Because"
    ],
    "correctIndex": 1,
    "hintByChoice": [
      "This is process order.",
      "",
      "Not a causal consequence statement.",
      "Not reason clause."
    ],
    "wrongWhyByChoice": [
      "however changes direction instead of ordering steps.",
      "",
      "as a result implies consequence, not procedural sequence.",
      "because cannot introduce next imperative action."
    ],
    "correctWhy": "<strong>Then</strong> is the best concise sequence marker for procedural tone.",
    "ruleToRemember": "In SOP language, sequence words reduce ambiguity and risk.",
    "punctuationNote": "Comma after Then when it opens the sentence.",
    "conceptTag": "nuance-sequence"
  },
  {
    "id": "L2-11",
    "level": 2,
    "relationshipType": "Punctuation placement",
    "scenario": "In an executive brief, the analyst places the transition mid-clause for rhythm. <strong>The proposal appears low risk, however, dependency costs remain unknown</strong>.",
    "sentenceWithBlank": "The proposal appears low risk; <strong>____ dependency costs remain unknown.</strong>",
    "choices": [
      "for example,",
      "however",
      "however,",
      "as a result,"
    ],
    "correctIndex": 2,
    "hintByChoice": [
      "No example relation.",
      "This specific structure requires punctuation after the transition.",
      "",
      "Not an effect relation."
    ],
    "wrongWhyByChoice": [
      "for example does not mark contrast.",
      "Without the comma, the standard transitional pattern is punctuated incorrectly.",
      "",
      "as a result would incorrectly mark unknown costs as consequence."
    ],
    "correctWhy": "The best form is <strong>however,</strong> with a comma to mark the transition clearly.",
    "ruleToRemember": "In semicolon-transition patterns, include punctuation after the transition adverb.",
    "punctuationNote": "Correct pattern: clause; however, clause.",
    "conceptTag": "nuance-punctuation"
  },
  {
    "id": "L2-12",
    "level": 2,
    "relationshipType": "Concession vs contrast",
    "scenario": "A stakeholder email notes pilot adoption was lower than expected. <strong>Leadership still approved phase two</strong>. The tone should capture surprising continuation.",
    "sentenceWithBlank": "Pilot adoption was lower than forecast; <strong>____ leadership approved phase two.</strong>",
    "choices": [
      "meanwhile,",
      "therefore,",
      "for example,",
      "nevertheless,"
    ],
    "correctIndex": 3,
    "hintByChoice": [
      "Not parallel timing.",
      "Look for 'despite this' meaning.",
      "Not a support example.",
      ""
    ],
    "wrongWhyByChoice": [
      "meanwhile is temporal overlap.",
      "therefore implies low adoption caused approval.",
      "for example is illustrative.",
      ""
    ],
    "correctWhy": "<strong>Nevertheless</strong> captures approval despite weaker adoption data.",
    "ruleToRemember": "Use concessive transitions when decision continues despite discouraging evidence.",
    "punctuationNote": "Use comma after nevertheless.",
    "conceptTag": "nuance-concession"
  },
  {
    "id": "L2-13",
    "level": 2,
    "relationshipType": "Reason with policy tone",
    "scenario": "A compliance note explains why access rights were temporarily frozen. <strong>External auditors requested a control review</strong>.",
    "sentenceWithBlank": "Access rights were temporarily frozen <strong>____ external auditors requested a control review.</strong>",
    "choices": [
      "because",
      "however,",
      "for instance,",
      "next,"
    ],
    "correctIndex": 0,
    "hintByChoice": [
      "",
      "Need direct reason.",
      "Not an example add-on.",
      "Not sequence step."
    ],
    "wrongWhyByChoice": [
      "",
      "however introduces contrast.",
      "for instance introduces example.",
      "next introduces order."
    ],
    "correctWhy": "<strong>Because</strong> gives a direct and accountable reason in compliance writing.",
    "ruleToRemember": "Policy explanations are strongest when causal rationale is explicit.",
    "punctuationNote": "No comma before because in this structure.",
    "conceptTag": "nuance-reason"
  },
  {
    "id": "L2-14",
    "level": 2,
    "relationshipType": "Evidence precision",
    "scenario": "A client success report claims meeting quality improved after agenda templates. <strong>Decision clarity scores rose from 3.1 to 4.4</strong>.",
    "sentenceWithBlank": "Meeting quality improved, <strong>____ decision-clarity scores rose from 3.1 to 4.4.</strong>",
    "choices": [
      "therefore,",
      "as demonstrated by",
      "however,",
      "in response,"
    ],
    "correctIndex": 1,
    "hintByChoice": [
      "Use support language, not effect language.",
      "",
      "No contradiction.",
      "No reaction relation."
    ],
    "wrongWhyByChoice": [
      "therefore overstates direction as strict causality.",
      "",
      "however creates illogical contrast.",
      "in response implies action after trigger."
    ],
    "correctWhy": "<strong>As demonstrated by</strong> fits analytical reports that connect claims to metrics.",
    "ruleToRemember": "Evidence connectors reduce overclaiming and improve credibility.",
    "punctuationNote": "None",
    "conceptTag": "nuance-evidence"
  },
  {
    "id": "L2-15",
    "level": 2,
    "relationshipType": "Cause-effect vs timing",
    "scenario": "A PMO update says test scripts were automated early. <strong>Release readiness improved by the second sprint</strong>.",
    "sentenceWithBlank": "Test scripts were automated early; <strong>____ release readiness improved by sprint two.</strong>",
    "choices": [
      "for example,",
      "meanwhile,",
      "as a result,",
      "although"
    ],
    "correctIndex": 2,
    "hintByChoice": [
      "No example relationship.",
      "Need effect, not simultaneity.",
      "",
      "Not concession pattern."
    ],
    "wrongWhyByChoice": [
      "for example requires an illustration frame.",
      "meanwhile is timing, but this sentence claims outcome.",
      "",
      "although creates concession rather than cause-effect."
    ],
    "correctWhy": "<strong>As a result</strong> best marks the claimed improvement as the outcome of automation.",
    "ruleToRemember": "Prefer result transitions when data suggests directional impact.",
    "punctuationNote": "Comma follows as a result.",
    "conceptTag": "nuance-cause-effect"
  },
  {
    "id": "L2-16",
    "level": 2,
    "relationshipType": "Diplomatic response",
    "scenario": "In a difficult customer email, account leadership avoids defensiveness. <strong>The team offers a revised onboarding plan and weekly check-ins</strong>.",
    "sentenceWithBlank": "The rollout missed two milestones; <strong>____ we proposed a revised onboarding plan with weekly check-ins.</strong>",
    "choices": [
      "therefore,",
      "however,",
      "for example,",
      "in response,"
    ],
    "correctIndex": 3,
    "hintByChoice": [
      "The second clause is action, not strict logical effect.",
      "Need explicit remedial action signal.",
      "No illustration relation.",
      ""
    ],
    "wrongWhyByChoice": [
      "therefore can sound defensive and causal rather than responsive.",
      "however only contrasts and does not foreground corrective action.",
      "for example introduces a sample case.",
      ""
    ],
    "correctWhy": "<strong>In response</strong> emphasizes accountability and corrective follow-through.",
    "ruleToRemember": "When repairing trust, signal response actions clearly and calmly.",
    "punctuationNote": "Comma follows in response when used as a sentence-level transition.",
    "conceptTag": "nuance-response"
  }
];

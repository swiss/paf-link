# 1.0 Prov-SE: Core

## 1.1 Introduction
Notre modèle est un fork du modèle Prov-o, il en reprend les éléments essentiels tel que le

Notre ontology fournit les fondations pour s'implémenter dans une large variété d'applications de contextes de domaines et formes d'informations. La structure présentée ici offre un cadre large pour toutes les activités inhérentes à l'Administration fédérale. 


## 1.2 Prov-SE Ontology : Description

## 1.3 Expanded Terms

## 1.4 Qualified Terms




# 2.0 Core Schema

## 2.1 Classes

### 2.1.1 Agent

### 2.1.2 Activity

Définition : 

#### 2.1.2.1 objet soumis à délibération et procédure parlementaire

##### 2.1.2.1.1 Introduction 

Les activités de l'Administration fédérale sont notamment caractérisées par un type particulier d'activité, il s'agit de ce que l'on communément appeler "Verbe". Ces Verbes correspondent aux activités réalisées par les "parlementaires" au près du "Conseil fédéral". Cette catégorie très particulière d'activité n'existe qu'entre ceux deux types d'agents. 
L'intérêt de définir spécifiquement ces activités avec des caractéristiques claires permet d'envisager l'automatisation de certains processus lors des interactions entre les activités parlementaires et le conseil fédéral. 
##### 2.1.2.1.2 Initiative Parlementaire 

Nature : 

Avancement : 

Groupe : 

État : Donner suite / ne pas donner suite 

##### 2.1.2.1.3 Initiative Déposée par un canton


Nature : 

Groupe : 

État : 


##### 2.1.2.1.4 Motion

![[Exemple Motion.pdf]]

Nature : 

Groupe : Interventions parlementaires 

État : 

##### 2.1.2.1.5. Postulat

Nature : 

Groupe : Interventions parlementaires 

État : 

##### 2.1.2.1.6 Interpellation

Nature : 

Groupe : Interventions parlementaires 

État : 

##### 2.1.2.1.7 Question

Nature : 

Groupe : Interventions parlementaires 

État : 

##### 2.1.2.1.8 Question posée dans le cadre de l'heure des questions au Conseil national

Groupe : Interventions parlementaires 

État : 







Notre modèle [[Modèle Générale Prov-SE Ontology]] 


#####  // 2.1.2.1.2 //
créer des catégorie d'activité (demande, réponse etc) 


Bare Bones Liste des verbes. Les trois premiers sont structurellement des "paires". Je veux dire par là que l'un ne devrait pas exister sans l'autre, bien que le premier verbe soit généralement antérieur et provoque une "attente" jusqu'à ce que le deuxième "verbe" correspondant ait également eu lieu. Le quatrième verbe - "information" - ne fait pas nécessairement partie d'une paire et est donc un verbe "autonome". Cela n'exclut pas

Demande -> Décision 

Exemples : Proposition du CF -> Décision du CF ; Intervention parlementaire -> Adoption de l'intervention parlementaire ;

Consultation -> Avis 

Exemples : Consultation ; Consultation des offices ; Procédure de co-rapport

Mandat -> Exécution

Exemples : Mandat d'élaborer une prise de position de la ChF à un département -> exécution sous forme de proposition au Conseil fédéral ; adoption d'une motion par l'Assemblée fédérale -> mandat au CF de mettre en œuvre la motion ; lettre de la CdG au Conseil fédéral -> mandat de répondre à la CdG*) 

Information

* Une lettre de la CdG au Conseil fédéral n'est pas une "consultation -> prise de position", car le Conseil fédéral n'a pas, dans les faits, la liberté de ne pas prendre position. Je n'utiliserais la "consultation -> prise de position" que dans les cas où les acteurs auxquels on s'adresse décident eux-mêmes s'ils veulent ou non déposer une prise de position.


Antrag -> Entscheid 

Beispiele: BR-Antrag -> BR-Beschluss; Parlamentarischer Vorstoss -> Verabschiedung des parlamentarischen Vorstosses; 

Konsultation -> Stellungnahme 

Beispiele: Vernehmlassung; Ämterkonsultation; Mitberichtsverfahren

Auftrag -> Erledigung

Beispiele: Auftrag zur Erarbeitung einer Stellungnahme der BK an ein Departement -> Erledigung in Form eines Antrags an den Bundesrat; Verabschiedung einer Motion durch die Bundesversammlung -> Auftrag an den BR, die Motion umzusetzen; Brief der GPK an den Bundesrat -> Auftrag, der GPK zu antworten*) 
Information

### 2.1.3 Entity

### 2.1.4 Item


## 2.2 Properties


# 4.0 Namespaces Declarations


# 5.0 References
[[Vocabulary Specification]]
[[The Prov-SE Namespace]]

## 5.1 Modèles complémentaires

- https://sparontologies.github.io/frbr/current/frbr.html
- https://version.link
- https://cube.link
- https://www.loc.gov/catdir/cpso/FRBRFrench.pdf
- https://sphn.ch/network/data-coordination-center/the-sphn-semantic-interoperability-framework/

## 5.2 Sources : 

- [^1] https://www.parlament.ch/fr/über-das-parlament/portrait-du-parlement/objets-soumis-deliberation-et-procedure-parlementaire/initiative-parlementaires-initiatives-deposees-par-des-cantons-et-interventions
- [^2] https://www.parlament.ch/fr/über-das-parlament/portrait-du-parlement/statut-assemblee-federale/assemblee-federale-et-le-conseil-federal/interventions-parlementaires



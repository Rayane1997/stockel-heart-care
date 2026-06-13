import type { Lang } from "./lang";

const fr = {
  common: {
    bookAppointment: "Prendre rendez-vous",
    bookAppointmentOnline: "Prendre rendez-vous en ligne",
    bookWithPractitioner: "Réserver avec ce praticien",
    appointment: "Rendez-vous",
    menuAria: "Menu",
    languageAria: "Choisir la langue",
  },
  header: {
    brand: "Stockel Medical Center",
    subtitle: "Woluwe Saint-Pierre",
    nav: {
      leCentre: "Le centre",
      specialites: "Spécialités",
      praticiens: "Praticiens",
      informationsPratiques: "Informations pratiques",
    },
  },
  home: {
    eyebrow: "Centre médical · Stockel",
    heroTitleLine1: "Une médecine attentive,",
    heroTitleLine2Pre: "dans un cadre ",
    heroTitleEmphasis: "apaisant",
    heroTitleSuffix: ".",
    heroBody:
      "Au cœur de Stockel, le Stockel Medical Center réunit plusieurs disciplines médicales pour vous offrir des soins du quotidien dans un environnement serein, professionnel et accessible.",
    practicalCta: "Informations pratiques",
    stats: {
      specialties: "spécialités",
      trilingual: "trilingue",
      location: "Woluwe-St-Pierre",
    },
    hoursCard: {
      eyebrow: "Sur rendez-vous",
      hours: "Lun–Ven · 8h–17h",
    },
    values: {
      pluridisciplinary: {
        title: "Pluridisciplinaire",
        desc: "Plusieurs spécialités réunies sous un même toit, pour un suivi cohérent.",
      },
      human: {
        title: "Humain",
        desc: "Une équipe à l'écoute, qui prend le temps de comprendre chaque patient.",
      },
      serious: {
        title: "Sérieux",
        desc: "Un cadre médical rigoureux, des équipements modernes, une hygiène irréprochable.",
      },
    },
    specialties: {
      eyebrow: "Nos spécialités",
      title: "Une médecine de proximité, à plusieurs voix.",
      body:
        "Du suivi médical général aux soins dentaires, en passant par les prélèvements et la chirurgie vasculaire — chaque consultation se déroule dans un cabinet pensé pour votre confort.",
    },
    place: {
      eyebrow: "Le lieu",
      title: "Un cabinet pensé pour le confort des patients.",
      body:
        "Lumière naturelle, matériaux doux, équipements récents. Tout a été conçu pour que votre passage au centre soit aussi serein que possible.",
      cta: "Découvrir le centre",
    },
    practical: {
      eyebrow: "Informations pratiques",
      title: "Nous trouver, nous joindre.",
      labels: {
        address: "Adresse",
        phone: "Téléphone",
        hours: "Horaires",
      },
      hoursText:
        "Lun, mar, jeu & ven · 8h–17h\nSamedi sur rendez-vous · Mercredi fermé",
    },
    mapTitle: "Carte du centre",
  },
  leCentre: {
    eyebrow: "Le centre",
    heroTitlePre: "Un lieu de soins à ",
    heroTitleEmphasis: "taille humaine",
    heroTitleSuffix: ".",
    heroBody:
      "Le Stockel Medical Center a été imaginé comme un cabinet de proximité, où la qualité des soins se conjugue avec la sérénité du cadre.",
    receptionAlt: "Réception du centre",
    approach: {
      eyebrow: "Notre approche",
      title: "Une médecine du quotidien, exigeante et humaine.",
      p1:
        "Notre centre réunit plusieurs disciplines médicales dans un même lieu, pour vous offrir un parcours de soins fluide, cohérent et personnalisé. Chaque praticien exerce de manière indépendante tout en partageant les mêmes exigences : écoute, rigueur, transparence.",
      p2:
        "L'aménagement du cabinet — lumière naturelle, matériaux doux, espaces aérés — participe pleinement à la qualité de la prise en charge. Nous accueillons aussi bien les patients du quartier que ceux venus de plus loin, en français, en anglais et en néerlandais.",
    },
    gallery: {
      eyebrow: "Galerie",
      title: "L'ambiance du centre, en images.",
      dentalAlt: "Cabinet dentaire",
      detailAlt: "Détail",
      officeAlt: "Bureau",
    },
    finalCta: {
      title: "Prenez rendez-vous en quelques clics.",
      body: "Réservation en ligne via Doctor Anytime, 24h/24.",
      seeSpecialties: "Voir les spécialités",
    },
  },
  specialites: {
    eyebrow: "Spécialités",
    heroTitle: "Plusieurs disciplines, une même exigence de soin.",
    heroBody:
      "Le centre regroupe des praticiens indépendants partageant un cabinet commun, pour un suivi médical global, simple d'accès et de qualité.",
  },
  praticiens: {
    eyebrow: "Praticiens",
    heroTitle: "Une équipe pluridisciplinaire, à votre écoute.",
    heroBody:
      "Nos praticiens consultent au sein du centre. Chacun exerce dans sa spécialité, en français, anglais ou néerlandais.",
    notice: {
      title: "L'équipe complète arrive prochainement.",
      bodyPre:
        "Photos, biographies et plages de consultation de nos praticiens seront publiées ici. Pour toute question : ",
      bodyPost: ".",
    },
  },
  informationsPratiques: {
    eyebrow: "Informations pratiques",
    heroTitle: "Nous trouver, nous contacter, prendre rendez-vous.",
    labels: {
      address: "Adresse",
      phone: "Téléphone",
      email: "Email",
      hours: "Horaires",
    },
    address: "3 Avenue de Hinnisdael\n1150 Woluwe Saint-Pierre",
    hoursText:
      "Lundi, mardi, jeudi & vendredi · 8h00 – 17h00\nSamedi sur rendez-vous\nMercredi & dimanche fermé",
    mapTitle: "Carte",
    access: {
      transport: {
        title: "Transports",
        desc:
          "Métro Stockel (ligne 1) à quelques minutes à pied. Bus 36, 39, 42.",
      },
      parking: {
        title: "Parking",
        desc: "Stationnement de quartier à proximité immédiate du centre.",
      },
      accessibility: {
        title: "Accessibilité",
        desc: "Centre accessible aux personnes à mobilité réduite.",
      },
    },
    faq: {
      eyebrow: "Questions fréquentes",
      title: "FAQ pratique",
      items: [
        {
          q: "Comment prendre rendez-vous ?",
          aPre:
            "Via la plateforme Doctor Anytime accessible depuis le bouton « Prendre rendez-vous ». Vous pouvez aussi nous appeler au ",
          aPost: ".",
        },
        {
          q: "En quelles langues consultez-vous ?",
          aPre:
            "Nos praticiens consultent en français, en anglais et en néerlandais.",
          aPost: "",
        },
        {
          q: "Acceptez-vous les nouveaux patients ?",
          aPre:
            "Oui, dans la plupart de nos spécialités. La disponibilité dépend du praticien — vérifiez directement sur la plateforme de réservation.",
          aPost: "",
        },
        {
          q: "Que faire en cas d'urgence ?",
          aPre:
            "En cas d'urgence vitale, composez le 112. Pour les urgences non vitales hors horaires, contactez le service de garde de Woluwe Saint-Pierre.",
          aPost: "",
        },
      ],
    },
  },
  rendezVous: {
    eyebrow: "Rendez-vous en ligne",
    heroTitlePre: "Choisissez votre ",
    heroTitleEmphasis: "praticien",
    heroTitleSuffix: ".",
    heroBody:
      "Sélectionnez le médecin de votre choix pour accéder directement à son agenda sur Doctor Anytime. La réservation est instantanée, 24h/24.",
    phone: {
      title: "Vous préférez par téléphone ?",
      body: "Notre secrétariat répond du lundi au vendredi.",
      practicalCta: "Informations pratiques",
    },
  },
  specialties: {
    dentisterie: {
      title: "Dentisterie",
      short: "Soins, esthétique et suivi dentaire pour adultes et enfants.",
      description:
        "Consultations, soins conservateurs, prévention et esthétique dentaire dans un cabinet équipé d'instruments modernes.",
    },
    medecineGenerale: {
      title: "Médecine générale",
      short: "Votre médecin de famille à Stockel pour un suivi attentif.",
      description:
        "Consultations de médecine générale, suivi des pathologies chroniques, prévention, vaccinations et certificats.",
    },
    prisesDeSang: {
      title: "Prises de sang",
      short: "Prélèvements sur rendez-vous, sans temps d'attente.",
      description:
        "Prélèvements biologiques effectués par notre équipe infirmière, en partenariat avec un laboratoire agréé.",
    },
    chirurgieVasculaire: {
      title: "Chirurgie vasculaire",
      short:
        "Consultations spécialisées en pathologies veineuses et artérielles.",
      description:
        "Évaluation, diagnostic et prise en charge des affections vasculaires par un chirurgien spécialisé.",
    },
  },
  practitioners: {
    nohaFayed: {
      speciality: "Dentisterie",
      schedule: "Lundi & jeudi · 9h – 16h",
    },
    chrysoulaKarampela: {
      speciality: "Médecine générale & prises de sang",
      schedule: "Lundi, mardi, jeudi & vendredi · 9h – 17h",
    },
    sueLizaEta: {
      speciality: "Chirurgie vasculaire",
      schedule: "Lundi & samedi matin · 9h – 12h30",
    },
  },
  footer: {
    contact: "Contact",
    navigation: "Navigation",
    intro:
      "Un centre médical pluridisciplinaire de proximité à Stockel. Une équipe attentive, un cadre apaisant, des soins sérieux au quotidien.",
    rights: "Tous droits réservés.",
    languages: "FR · EN · NL",
  },
  notFound: {
    eyebrow: "Erreur 404",
    title: "Page introuvable",
    body: "La page que vous cherchez n'existe pas ou a été déplacée.",
    cta: "Retour à l'accueil",
  },
  errorBoundary: {
    title: "Cette page n'a pas pu se charger",
    body: "Veuillez réessayer ou revenir à l'accueil.",
    retry: "Réessayer",
    home: "Accueil",
  },
  meta: {
    home: {
      title: "Stockel Medical Center — Centre médical à Woluwe Saint-Pierre",
      description:
        "Centre médical pluridisciplinaire à Stockel : dentisterie, médecine générale, prises de sang, chirurgie vasculaire. Cadre serein, équipe attentive, rendez-vous en ligne.",
      ogTitle: "Stockel Medical Center",
      ogDescription:
        "Centre médical pluridisciplinaire à Stockel — Woluwe Saint-Pierre.",
    },
    leCentre: {
      title: "Le centre — Stockel Medical Center",
      description:
        "Découvrez le Stockel Medical Center à Woluwe Saint-Pierre : un centre médical pluridisciplinaire chaleureux et lumineux.",
      ogTitle: "Le centre — Stockel Medical Center",
    },
    specialites: {
      title: "Spécialités — Stockel Medical Center",
      description:
        "Dentisterie, médecine générale, prises de sang, chirurgie vasculaire à Stockel — Woluwe Saint-Pierre.",
      ogTitle: "Spécialités — Stockel Medical Center",
    },
    praticiens: {
      title: "Praticiens — Stockel Medical Center",
      description:
        "Découvrez l'équipe du Stockel Medical Center : dentistes, médecins généralistes, chirurgien vasculaire.",
      ogTitle: "Praticiens — Stockel Medical Center",
    },
    informationsPratiques: {
      title: "Informations pratiques — Stockel Medical Center",
      description:
        "Adresse, horaires, accès et contact du Stockel Medical Center à Woluwe Saint-Pierre.",
      ogTitle: "Informations pratiques — Stockel Medical Center",
    },
    rendezVous: {
      title: "Prendre rendez-vous — Stockel Medical Center",
      description:
        "Réservez en ligne avec un praticien du Stockel Medical Center : dentisterie, médecine générale, prises de sang, chirurgie vasculaire.",
      ogTitle: "Prendre rendez-vous — Stockel Medical Center",
    },
  },
};

export type Dictionary = typeof fr;

const nl: Dictionary = {
  common: {
    bookAppointment: "Afspraak maken",
    bookAppointmentOnline: "Online een afspraak maken",
    bookWithPractitioner: "Reserveer bij deze arts",
    appointment: "Afspraak",
    menuAria: "Menu",
    languageAria: "Taal kiezen",
  },
  header: {
    brand: "Stockel Medical Center",
    subtitle: "Sint-Pieters-Woluwe",
    nav: {
      leCentre: "Het centrum",
      specialites: "Specialiteiten",
      praticiens: "Artsen",
      informationsPratiques: "Praktische info",
    },
  },
  home: {
    eyebrow: "Medisch centrum · Stockel",
    heroTitleLine1: "Aandachtige geneeskunde,",
    heroTitleLine2Pre: "in een ",
    heroTitleEmphasis: "rustgevende",
    heroTitleSuffix: " omgeving.",
    heroBody:
      "In het hart van Stockel verenigt het Stockel Medical Center verschillende medische disciplines om u dagelijkse zorg te bieden in een serene, professionele en toegankelijke omgeving.",
    practicalCta: "Praktische info",
    stats: {
      specialties: "specialiteiten",
      trilingual: "drietalig",
      location: "Sint-Pieters-Woluwe",
    },
    hoursCard: {
      eyebrow: "Op afspraak",
      hours: "Ma–Vr · 8u–17u",
    },
    values: {
      pluridisciplinary: {
        title: "Multidisciplinair",
        desc:
          "Meerdere specialiteiten onder één dak, voor een coherente opvolging.",
      },
      human: {
        title: "Menselijk",
        desc:
          "Een luisterend team dat de tijd neemt om elke patiënt te begrijpen.",
      },
      serious: {
        title: "Professioneel",
        desc:
          "Een strikt medisch kader, moderne apparatuur, onberispelijke hygiëne.",
      },
    },
    specialties: {
      eyebrow: "Onze specialiteiten",
      title: "Buurtgeneeskunde, met meerdere stemmen.",
      body:
        "Van algemene medische opvolging tot tandheelkundige zorg, bloedafnames en vaatchirurgie — elke consultatie vindt plaats in een praktijk ontworpen voor uw comfort.",
    },
    place: {
      eyebrow: "De praktijk",
      title: "Een praktijk ontworpen voor het comfort van de patiënt.",
      body:
        "Natuurlijk licht, zachte materialen, recente apparatuur. Alles is ontworpen om uw bezoek aan het centrum zo sereen mogelijk te maken.",
      cta: "Ontdek het centrum",
    },
    practical: {
      eyebrow: "Praktische info",
      title: "Ons vinden, ons bereiken.",
      labels: {
        address: "Adres",
        phone: "Telefoon",
        hours: "Openingsuren",
      },
      hoursText:
        "Ma, di, do & vr · 8u–17u\nZaterdag op afspraak · Woensdag gesloten",
    },
    mapTitle: "Kaart van het centrum",
  },
  leCentre: {
    eyebrow: "Het centrum",
    heroTitlePre: "Een zorgomgeving op ",
    heroTitleEmphasis: "menselijke maat",
    heroTitleSuffix: ".",
    heroBody:
      "Het Stockel Medical Center is opgevat als een buurtpraktijk, waar de kwaliteit van zorg gepaard gaat met de sereniteit van de omgeving.",
    receptionAlt: "Onthaal van het centrum",
    approach: {
      eyebrow: "Onze aanpak",
      title: "Dagelijkse geneeskunde, veeleisend en menselijk.",
      p1:
        "Ons centrum verenigt verschillende medische disciplines op één plek, om u een vlot, samenhangend en persoonlijk zorgtraject te bieden. Elke arts werkt onafhankelijk maar deelt dezelfde eisen: luisteren, nauwkeurigheid, transparantie.",
      p2:
        "De inrichting van de praktijk — natuurlijk licht, zachte materialen, luchtige ruimtes — draagt volledig bij aan de kwaliteit van de zorg. We verwelkomen zowel patiënten uit de buurt als van verder weg, in het Frans, Engels en Nederlands.",
    },
    gallery: {
      eyebrow: "Galerij",
      title: "De sfeer van het centrum, in beelden.",
      dentalAlt: "Tandartspraktijk",
      detailAlt: "Detail",
      officeAlt: "Spreekkamer",
    },
    finalCta: {
      title: "Maak in enkele kliks een afspraak.",
      body: "Online reservatie via Doctor Anytime, 24u/24.",
      seeSpecialties: "Bekijk de specialiteiten",
    },
  },
  specialites: {
    eyebrow: "Specialiteiten",
    heroTitle: "Meerdere disciplines, dezelfde zorgvuldigheid.",
    heroBody:
      "Het centrum verenigt onafhankelijke artsen die een gemeenschappelijke praktijk delen, voor een globale, eenvoudig toegankelijke en kwalitatieve medische opvolging.",
  },
  praticiens: {
    eyebrow: "Artsen",
    heroTitle: "Een multidisciplinair team, luistert naar u.",
    heroBody:
      "Onze artsen consulteren in het centrum. Elk in zijn specialiteit, in het Frans, Engels of Nederlands.",
    notice: {
      title: "Het volledige team volgt binnenkort.",
      bodyPre:
        "Foto's, biografieën en consultatie-uren van onze artsen worden hier gepubliceerd. Voor alle vragen: ",
      bodyPost: ".",
    },
  },
  informationsPratiques: {
    eyebrow: "Praktische info",
    heroTitle: "Ons vinden, ons contacteren, een afspraak maken.",
    labels: {
      address: "Adres",
      phone: "Telefoon",
      email: "E-mail",
      hours: "Openingsuren",
    },
    address: "Hinnisdaellaan 3\n1150 Sint-Pieters-Woluwe",
    hoursText:
      "Maandag, dinsdag, donderdag & vrijdag · 8u00 – 17u00\nZaterdag op afspraak\nWoensdag & zondag gesloten",
    mapTitle: "Kaart",
    access: {
      transport: {
        title: "Vervoer",
        desc:
          "Metro Stockel (lijn 1) op enkele minuten wandelen. Bus 36, 39, 42.",
      },
      parking: {
        title: "Parking",
        desc: "Buurtparkeren in de onmiddellijke nabijheid van het centrum.",
      },
      accessibility: {
        title: "Toegankelijkheid",
        desc: "Centrum toegankelijk voor personen met beperkte mobiliteit.",
      },
    },
    faq: {
      eyebrow: "Veelgestelde vragen",
      title: "Praktische FAQ",
      items: [
        {
          q: "Hoe maak ik een afspraak?",
          aPre:
            "Via het Doctor Anytime-platform bereikbaar via de knop «Afspraak maken». U kan ons ook bellen op ",
          aPost: ".",
        },
        {
          q: "In welke talen consulteert u?",
          aPre:
            "Onze artsen consulteren in het Frans, Engels en Nederlands.",
          aPost: "",
        },
        {
          q: "Aanvaardt u nieuwe patiënten?",
          aPre:
            "Ja, in de meeste van onze specialiteiten. De beschikbaarheid hangt af van de arts — controleer dit rechtstreeks op het reservatieplatform.",
          aPost: "",
        },
        {
          q: "Wat te doen in geval van een noodgeval?",
          aPre:
            "In geval van levensbedreigende noodgevallen bel 112. Voor niet-levensbedreigende noodgevallen buiten de openingsuren neemt u contact op met de wachtdienst van Sint-Pieters-Woluwe.",
          aPost: "",
        },
      ],
    },
  },
  rendezVous: {
    eyebrow: "Online afspraak",
    heroTitlePre: "Kies uw ",
    heroTitleEmphasis: "arts",
    heroTitleSuffix: ".",
    heroBody:
      "Selecteer de arts van uw keuze om rechtstreeks toegang te krijgen tot zijn agenda op Doctor Anytime. Reservatie is onmiddellijk, 24u/24.",
    phone: {
      title: "Liever telefonisch?",
      body: "Ons secretariaat antwoordt van maandag tot vrijdag.",
      practicalCta: "Praktische info",
    },
  },
  specialties: {
    dentisterie: {
      title: "Tandheelkunde",
      short:
        "Zorg, esthetiek en tandheelkundige opvolging voor volwassenen en kinderen.",
      description:
        "Consultaties, conserverende zorg, preventie en cosmetische tandheelkunde in een praktijk uitgerust met moderne instrumenten.",
    },
    medecineGenerale: {
      title: "Huisartsgeneeskunde",
      short: "Uw huisarts in Stockel voor een attente opvolging.",
      description:
        "Huisartsenconsultaties, opvolging van chronische aandoeningen, preventie, vaccinaties en attesten.",
    },
    prisesDeSang: {
      title: "Bloedafnames",
      short: "Bloedafnames op afspraak, zonder wachttijd.",
      description:
        "Biologische bloedafnames uitgevoerd door ons verpleegkundig team, in samenwerking met een erkend laboratorium.",
    },
    chirurgieVasculaire: {
      title: "Vaatchirurgie",
      short:
        "Gespecialiseerde consultaties voor veneuze en arteriële aandoeningen.",
      description:
        "Evaluatie, diagnose en behandeling van vasculaire aandoeningen door een gespecialiseerd chirurg.",
    },
  },
  practitioners: {
    nohaFayed: {
      speciality: "Tandheelkunde",
      schedule: "Maandag & donderdag · 9u – 16u",
    },
    chrysoulaKarampela: {
      speciality: "Huisartsgeneeskunde & bloedafnames",
      schedule: "Maandag, dinsdag, donderdag & vrijdag · 9u – 17u",
    },
    sueLizaEta: {
      speciality: "Vaatchirurgie",
      schedule: "Maandag & zaterdagochtend · 9u – 12u30",
    },
  },
  footer: {
    contact: "Contact",
    navigation: "Navigatie",
    intro:
      "Een multidisciplinair buurtgezondheidscentrum in Stockel. Een aandachtig team, een rustgevende omgeving, ernstige zorg in het dagelijks leven.",
    rights: "Alle rechten voorbehouden.",
    languages: "FR · EN · NL",
  },
  notFound: {
    eyebrow: "Fout 404",
    title: "Pagina niet gevonden",
    body: "De pagina die u zoekt bestaat niet of is verplaatst.",
    cta: "Terug naar de startpagina",
  },
  errorBoundary: {
    title: "Deze pagina kon niet worden geladen",
    body: "Probeer het opnieuw of keer terug naar de startpagina.",
    retry: "Opnieuw proberen",
    home: "Startpagina",
  },
  meta: {
    home: {
      title:
        "Stockel Medical Center — Medisch centrum in Sint-Pieters-Woluwe",
      description:
        "Multidisciplinair medisch centrum in Stockel: tandheelkunde, huisartsgeneeskunde, bloedafnames, vaatchirurgie. Serene omgeving, attent team, online afspraken.",
      ogTitle: "Stockel Medical Center",
      ogDescription:
        "Multidisciplinair medisch centrum in Stockel — Sint-Pieters-Woluwe.",
    },
    leCentre: {
      title: "Het centrum — Stockel Medical Center",
      description:
        "Ontdek het Stockel Medical Center in Sint-Pieters-Woluwe: een warm en lichtrijk multidisciplinair medisch centrum.",
      ogTitle: "Het centrum — Stockel Medical Center",
    },
    specialites: {
      title: "Specialiteiten — Stockel Medical Center",
      description:
        "Tandheelkunde, huisartsgeneeskunde, bloedafnames, vaatchirurgie in Stockel — Sint-Pieters-Woluwe.",
      ogTitle: "Specialiteiten — Stockel Medical Center",
    },
    praticiens: {
      title: "Artsen — Stockel Medical Center",
      description:
        "Ontdek het team van het Stockel Medical Center: tandartsen, huisartsen, vaatchirurg.",
      ogTitle: "Artsen — Stockel Medical Center",
    },
    informationsPratiques: {
      title: "Praktische info — Stockel Medical Center",
      description:
        "Adres, openingsuren, toegang en contact van het Stockel Medical Center in Sint-Pieters-Woluwe.",
      ogTitle: "Praktische info — Stockel Medical Center",
    },
    rendezVous: {
      title: "Afspraak maken — Stockel Medical Center",
      description:
        "Reserveer online bij een arts van het Stockel Medical Center: tandheelkunde, huisartsgeneeskunde, bloedafnames, vaatchirurgie.",
      ogTitle: "Afspraak maken — Stockel Medical Center",
    },
  },
};

const en: Dictionary = {
  common: {
    bookAppointment: "Book an appointment",
    bookAppointmentOnline: "Book online",
    bookWithPractitioner: "Book with this practitioner",
    appointment: "Appointment",
    menuAria: "Menu",
    languageAria: "Choose language",
  },
  header: {
    brand: "Stockel Medical Center",
    subtitle: "Woluwe Saint-Pierre",
    nav: {
      leCentre: "The center",
      specialites: "Specialties",
      praticiens: "Practitioners",
      informationsPratiques: "Practical info",
    },
  },
  home: {
    eyebrow: "Medical center · Stockel",
    heroTitleLine1: "Attentive medicine,",
    heroTitleLine2Pre: "in a ",
    heroTitleEmphasis: "calming",
    heroTitleSuffix: " setting.",
    heroBody:
      "In the heart of Stockel, the Stockel Medical Center brings together several medical disciplines to provide everyday care in a serene, professional and accessible environment.",
    practicalCta: "Practical info",
    stats: {
      specialties: "specialties",
      trilingual: "trilingual",
      location: "Woluwe-St-Pierre",
    },
    hoursCard: {
      eyebrow: "By appointment",
      hours: "Mon–Fri · 8am–5pm",
    },
    values: {
      pluridisciplinary: {
        title: "Multidisciplinary",
        desc:
          "Several specialties under one roof, for consistent follow-up.",
      },
      human: {
        title: "Human",
        desc:
          "A team that listens and takes the time to understand each patient.",
      },
      serious: {
        title: "Rigorous",
        desc:
          "A strict medical setting, modern equipment, impeccable hygiene.",
      },
    },
    specialties: {
      eyebrow: "Our specialties",
      title: "Community medicine, many voices.",
      body:
        "From general medical follow-up to dental care, blood tests and vascular surgery — every consultation takes place in a practice designed for your comfort.",
    },
    place: {
      eyebrow: "The place",
      title: "A practice designed for patient comfort.",
      body:
        "Natural light, soft materials, recent equipment. Everything is designed to make your visit to the center as calm as possible.",
      cta: "Discover the center",
    },
    practical: {
      eyebrow: "Practical info",
      title: "Find us, reach us.",
      labels: {
        address: "Address",
        phone: "Phone",
        hours: "Hours",
      },
      hoursText:
        "Mon, Tue, Thu & Fri · 8am–5pm\nSaturday by appointment · Wednesday closed",
    },
    mapTitle: "Map of the center",
  },
  leCentre: {
    eyebrow: "The center",
    heroTitlePre: "A care setting on a ",
    heroTitleEmphasis: "human scale",
    heroTitleSuffix: ".",
    heroBody:
      "The Stockel Medical Center was conceived as a neighbourhood practice, where the quality of care meets the serenity of the setting.",
    receptionAlt: "Reception of the center",
    approach: {
      eyebrow: "Our approach",
      title: "Everyday medicine, demanding and human.",
      p1:
        "Our center brings together several medical disciplines in one place, to offer you a smooth, coherent and personalized care journey. Each practitioner works independently while sharing the same standards: listening, rigour, transparency.",
      p2:
        "The design of the practice — natural light, soft materials, airy spaces — fully contributes to the quality of care. We welcome both local patients and those coming from further away, in French, English and Dutch.",
    },
    gallery: {
      eyebrow: "Gallery",
      title: "The atmosphere of the center, in pictures.",
      dentalAlt: "Dental room",
      detailAlt: "Detail",
      officeAlt: "Consultation room",
    },
    finalCta: {
      title: "Book an appointment in just a few clicks.",
      body: "Online booking via Doctor Anytime, 24/7.",
      seeSpecialties: "See the specialties",
    },
  },
  specialites: {
    eyebrow: "Specialties",
    heroTitle: "Several disciplines, the same standard of care.",
    heroBody:
      "The center brings together independent practitioners sharing a common practice, for global, easily accessible and high-quality medical follow-up.",
  },
  praticiens: {
    eyebrow: "Practitioners",
    heroTitle: "A multidisciplinary team, here to listen.",
    heroBody:
      "Our practitioners consult at the center. Each in their own specialty, in French, English or Dutch.",
    notice: {
      title: "The full team is coming soon.",
      bodyPre:
        "Photos, biographies and consultation hours of our practitioners will be published here. For any questions: ",
      bodyPost: ".",
    },
  },
  informationsPratiques: {
    eyebrow: "Practical info",
    heroTitle: "Find us, contact us, book an appointment.",
    labels: {
      address: "Address",
      phone: "Phone",
      email: "Email",
      hours: "Hours",
    },
    address: "3 Avenue de Hinnisdael\n1150 Woluwe Saint-Pierre",
    hoursText:
      "Monday, Tuesday, Thursday & Friday · 8am – 5pm\nSaturday by appointment\nWednesday & Sunday closed",
    mapTitle: "Map",
    access: {
      transport: {
        title: "Transport",
        desc:
          "Stockel metro (line 1) a few minutes' walk away. Buses 36, 39, 42.",
      },
      parking: {
        title: "Parking",
        desc:
          "Street parking in the immediate vicinity of the center.",
      },
      accessibility: {
        title: "Accessibility",
        desc:
          "Center accessible to people with reduced mobility.",
      },
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "Practical FAQ",
      items: [
        {
          q: "How do I book an appointment?",
          aPre:
            "Through the Doctor Anytime platform accessible from the \"Book an appointment\" button. You can also call us at ",
          aPost: ".",
        },
        {
          q: "Which languages do you speak?",
          aPre:
            "Our practitioners consult in French, English and Dutch.",
          aPost: "",
        },
        {
          q: "Do you accept new patients?",
          aPre:
            "Yes, in most of our specialties. Availability depends on the practitioner — check directly on the booking platform.",
          aPost: "",
        },
        {
          q: "What should I do in case of an emergency?",
          aPre:
            "In case of a life-threatening emergency, call 112. For non-life-threatening emergencies outside business hours, contact the Woluwe Saint-Pierre on-call service.",
          aPost: "",
        },
      ],
    },
  },
  rendezVous: {
    eyebrow: "Online booking",
    heroTitlePre: "Choose your ",
    heroTitleEmphasis: "practitioner",
    heroTitleSuffix: ".",
    heroBody:
      "Select the doctor of your choice to access their schedule directly on Doctor Anytime. Booking is instant, 24/7.",
    phone: {
      title: "Prefer to call?",
      body: "Our secretariat answers Monday to Friday.",
      practicalCta: "Practical info",
    },
  },
  specialties: {
    dentisterie: {
      title: "Dentistry",
      short:
        "Care, aesthetics and dental follow-up for adults and children.",
      description:
        "Consultations, conservative care, prevention and cosmetic dentistry in a practice equipped with modern instruments.",
    },
    medecineGenerale: {
      title: "General medicine",
      short: "Your family doctor in Stockel for attentive follow-up.",
      description:
        "General medical consultations, follow-up of chronic conditions, prevention, vaccinations and certificates.",
    },
    prisesDeSang: {
      title: "Blood tests",
      short: "Blood samples by appointment, no waiting time.",
      description:
        "Biological samples taken by our nursing team, in partnership with an accredited laboratory.",
    },
    chirurgieVasculaire: {
      title: "Vascular surgery",
      short:
        "Specialised consultations for venous and arterial conditions.",
      description:
        "Assessment, diagnosis and management of vascular conditions by a specialised surgeon.",
    },
  },
  practitioners: {
    nohaFayed: {
      speciality: "Dentistry",
      schedule: "Monday & Thursday · 9am – 4pm",
    },
    chrysoulaKarampela: {
      speciality: "General medicine & blood tests",
      schedule: "Monday, Tuesday, Thursday & Friday · 9am – 5pm",
    },
    sueLizaEta: {
      speciality: "Vascular surgery",
      schedule: "Monday & Saturday morning · 9am – 12:30pm",
    },
  },
  footer: {
    contact: "Contact",
    navigation: "Navigation",
    intro:
      "A multidisciplinary neighbourhood medical center in Stockel. An attentive team, a calming setting, serious daily care.",
    rights: "All rights reserved.",
    languages: "FR · EN · NL",
  },
  notFound: {
    eyebrow: "Error 404",
    title: "Page not found",
    body: "The page you are looking for does not exist or has been moved.",
    cta: "Back to home",
  },
  errorBoundary: {
    title: "This page could not load",
    body: "Please try again or return to the home page.",
    retry: "Try again",
    home: "Home",
  },
  meta: {
    home: {
      title:
        "Stockel Medical Center — Medical center in Woluwe Saint-Pierre",
      description:
        "Multidisciplinary medical center in Stockel: dentistry, general medicine, blood tests, vascular surgery. Serene setting, attentive team, online booking.",
      ogTitle: "Stockel Medical Center",
      ogDescription:
        "Multidisciplinary medical center in Stockel — Woluwe Saint-Pierre.",
    },
    leCentre: {
      title: "The center — Stockel Medical Center",
      description:
        "Discover the Stockel Medical Center in Woluwe Saint-Pierre: a warm and bright multidisciplinary medical center.",
      ogTitle: "The center — Stockel Medical Center",
    },
    specialites: {
      title: "Specialties — Stockel Medical Center",
      description:
        "Dentistry, general medicine, blood tests, vascular surgery in Stockel — Woluwe Saint-Pierre.",
      ogTitle: "Specialties — Stockel Medical Center",
    },
    praticiens: {
      title: "Practitioners — Stockel Medical Center",
      description:
        "Discover the team of the Stockel Medical Center: dentists, general practitioners, vascular surgeon.",
      ogTitle: "Practitioners — Stockel Medical Center",
    },
    informationsPratiques: {
      title: "Practical info — Stockel Medical Center",
      description:
        "Address, opening hours, access and contact of the Stockel Medical Center in Woluwe Saint-Pierre.",
      ogTitle: "Practical info — Stockel Medical Center",
    },
    rendezVous: {
      title: "Book an appointment — Stockel Medical Center",
      description:
        "Book online with a practitioner of the Stockel Medical Center: dentistry, general medicine, blood tests, vascular surgery.",
      ogTitle: "Book an appointment — Stockel Medical Center",
    },
  },
};

export const dictionaries: Record<Lang, Dictionary> = { fr, nl, en };

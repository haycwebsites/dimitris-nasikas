// =============================================================================
// Site Template Configuration
// =============================================================================
// All site content is configured here. Components render nothing when their
// primary config fields are empty strings or empty arrays.
//
// STRUCTURE RULE: All interfaces must come first, then all export consts.
// This is required for the pull-config script to work correctly.
// =============================================================================

// =============================================================================
// INTERFACES
// =============================================================================

export interface LocaleString {
  el: string;
  en: string;
}

export interface SiteConfig {
  title: LocaleString;
  description: LocaleString;
  language: string;
  keywords: LocaleString;
  ogImage: string;
  canonical: string;
  siteId: string;
  apiUrl: string;
}

export interface DigitalProduct {
  id: string;
  type: 'course';
  title: string;
  slug: string;
  description?: string;
  thumbnail?: string;
  price: string;
  widgetUrl: string;
  language: string;
  estimatedDurationMinutes?: number;
  chapters?: {
    id: string;
    title: string;
    lessons: { id: string; title: string }[];
  }[];
}

export interface DigitalProductsConfig {
  enabled: boolean;
  lastSyncedAt?: string;
  products: DigitalProduct[];
}

export interface ContactFormConfig {
  nameRequired: LocaleString;
  emailInvalid: LocaleString;
  messageRequired: LocaleString;
  errorText: LocaleString;
}

export interface NewsletterFormConfig {
  emailInvalid: LocaleString;
  errorText: LocaleString;
}

export interface NavigationLink {
  label: LocaleString;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  logoAlt: LocaleString;
  phone: string;
  links: NavigationLink[];
}

export interface FooterLink {
  label: LocaleString;
  href: string;
}

export interface FooterContactItem {
  icon: 'location' | 'envelope' | 'doctor';
  text: LocaleString;
  href?: string;
  external?: boolean;
}

export interface FooterConfig {
  logo: string;
  logoAlt: LocaleString;
  description: LocaleString;
  openingTitle: LocaleString;
  openingText: LocaleString;
  menuTitle: LocaleString;
  menuLinks: FooterLink[];
  contactTitle: LocaleString;
  contactItems: FooterContactItem[];
  doctorName: LocaleString;
  doctorRole: LocaleString;
  copyrightText: LocaleString;
  creditLinkText: string;
  creditLinkHref: string;
}

export interface HighlightItem {
  title: LocaleString;
  text: LocaleString;
}

export interface ServiceItem {
  number: string;
  title: LocaleString;
  description: LocaleString;
}

export interface BioAccordionItem {
  number: string;
  title: LocaleString;
  paragraphs: LocaleString[];
}

export interface HeroConfig {
  backgroundImage: string;
  doctorImage: string;
  subtitle: LocaleString;
  title: LocaleString;
  description: LocaleString;
  ctaText: LocaleString;
  ctaHref: string;
}

export interface AboutConfig {
  shapeImage: string;
  photo: string;
  photoAlt: LocaleString;
  experienceYear: string;
  experienceText: LocaleString;
  subtitle: LocaleString;
  title: LocaleString;
  description: LocaleString;
  highlights: HighlightItem[];
  bioButtonText: LocaleString;
  bioButtonHref: string;
  contactLinkText: LocaleString;
  contactLinkHref: string;
}

export interface ServicesConfig {
  backgroundImage: string;
  iconImage: string;
  mainTitle: LocaleString;
  description: LocaleString;
  secondaryTitle: LocaleString;
  subtitle: LocaleString;
  ctaText: LocaleString;
  ctaHref: string;
  items: ServiceItem[];
}

export interface BiographyConfig {
  subtitle: LocaleString;
  title: LocaleString;
  description: LocaleString;
  ctaText: LocaleString;
  ctaHref: string;
  items: BioAccordionItem[];
}

export interface HospitalConfig {
  shapeImage: string;
  subtitle: LocaleString;
  title: LocaleString;
  description: LocaleString;
  ctaText: LocaleString;
  ctaHref: string;
  highlights: HighlightItem[];
}

export interface ConsultationConfig {
  backgroundImage: string;
  title: LocaleString;
  ctaText: LocaleString;
  ctaHref: string;
}

export interface ContactPageConfig {
  subtitle: LocaleString;
  title: LocaleString;
  description: LocaleString;
  nameLabel: LocaleString;
  emailLabel: LocaleString;
  subjectLabel: LocaleString;
  messageLabel: LocaleString;
  submitButton: LocaleString;
  submitting: LocaleString;
  successTitle: LocaleString;
  successText: LocaleString;
}

// =============================================================================
// CONSTANTS
// =============================================================================

export const siteConfig: SiteConfig = {
  title: {
    el: 'Δρ. Δημήτριος Νασίκας — Χειρουργική Μαστού',
    en: 'Dr. Dimitris Nasikas — Breast Surgery',
  },
  description: {
    el: 'Εξειδικευμένη φροντίδα για την υγεία του μαστού — κλινική εξέταση, προληπτικός έλεγχος και χειρουργική ογκολογία.',
    en: 'Specialized breast health care — clinical examination, screening, and surgical oncology.',
  },
  language: 'el',
  keywords: {
    el: 'χειρουργική μαστού, χειρουργική ογκολογία, καρκίνος μαστού',
    en: 'breast surgery, surgical oncology, breast cancer',
  },
  ogImage: '/images/logo.png',
  canonical: 'https://dimitrisnasikas.com',
  siteId: '',
  apiUrl: 'https://hayc.gr',
};

export const digitalProductsConfig: DigitalProductsConfig = {
  enabled: false,
  products: [],
};

export const contactFormConfig: ContactFormConfig = {
  nameRequired: {
    el: 'Το όνομα είναι υποχρεωτικό.',
    en: 'Name is required.',
  },
  emailInvalid: {
    el: 'Εισάγετε έγκυρο email.',
    en: 'Please enter a valid email.',
  },
  messageRequired: {
    el: 'Το μήνυμα είναι υποχρεωτικό.',
    en: 'Message is required.',
  },
  errorText: {
    el: 'Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά.',
    en: 'Something went wrong. Please try again.',
  },
};

export const newsletterFormConfig: NewsletterFormConfig = {
  emailInvalid: {
    el: 'Εισάγετε έγκυρο email.',
    en: 'Please enter a valid email.',
  },
  errorText: {
    el: 'Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά.',
    en: 'Something went wrong. Please try again.',
  },
};

export const navigationConfig: NavigationConfig = {
  logo: '/images/logo.png',
  logoAlt: {
    el: 'Δρ. Δημήτριος Νασίκας',
    en: 'Dr. Dimitris Nasikas',
  },
  phone: '+30 6987672604',
  links: [
    { label: { el: 'Αρχική', en: 'Home' }, href: '#home' },
    { label: { el: 'Σχετικά', en: 'About' }, href: '#about' },
    { label: { el: 'Βιογραφικό', en: 'Biography' }, href: '#biography' },
    { label: { el: 'Νοσοκομείο', en: 'Hospital' }, href: '#affiliated-hospital' },
    { label: { el: 'Επικοινωνία', en: 'Contact' }, href: '#contact' },
  ],
};

export const footerConfig: FooterConfig = {
  logo: '/images/logo-150x150.png',
  logoAlt: {
    el: 'Δρ. Δημήτριος Νασίκας',
    en: 'Dr. Dimitris Nasikas',
  },
  description: {
    el: 'Δρ. Δημήτριος Νασίκας — Χειρουργική Μαστού και Χειρουργική Ογκολογία. Αναπληρωτής Διευθυντής στην 3η Κλινική Μαστού, Metropolitan General, Χολαργός.',
    en: 'Dr. Dimitris Nasikas — Breast Surgery and Surgical Oncology. Associate Director at the 3rd Breast Clinic, Metropolitan General, Holargos.',
  },
  openingTitle: {
    el: 'Metropolitan General',
    en: 'Metropolitan General',
  },
  openingText: {
    el: '3η Κλινική Μαστού · Χολαργός, Αθήνα · Ραντεβού κατόπιν συνεννόησης',
    en: '3rd Breast Clinic · Holargos, Athens · Appointments by arrangement',
  },
  menuTitle: {
    el: 'Μενού',
    en: 'Menu',
  },
  menuLinks: [
    { label: { el: 'Αρχική', en: 'Home' }, href: '/#home' },
    { label: { el: 'Σχετικά', en: 'About' }, href: '/#about' },
    { label: { el: 'Βιογραφικό', en: 'Biography' }, href: '/#biography' },
    { label: { el: 'Νοσοκομείο', en: 'Hospital' }, href: '/#affiliated-hospital' },
    { label: { el: 'Επικοινωνία', en: 'Contact' }, href: '/#contact' },
  ],
  contactTitle: {
    el: 'Επικοινωνία',
    en: 'Contact',
  },
  contactItems: [
    {
      icon: 'location',
      text: {
        el: 'Λεωφ. Λαυρίου 150, Παιανία 190 02',
        en: '150 Lavriou Avenue, Paiania 190 02',
      },
      href: 'https://maps.app.goo.gl/ozwKFjgMzMLPHdoJ7',
      external: true,
    },
    {
      icon: 'location',
      text: {
        el: 'Νοσοκομείο Metropolitan General, Χολαργός, Αθήνα',
        en: 'Metropolitan General Hospital, Holargos, Athens',
      },
      href: 'https://www.google.com/maps/search/Metropolitan+General+Holargos',
      external: true,
    },
    {
      icon: 'envelope',
      text: {
        el: 'Στείλτε μήνυμα μέσω της φόρμας επικοινωνίας',
        en: 'Send a message via the contact form',
      },
      href: '/#contact',
    },
  ],
  doctorName: {
    el: 'Δρ. Δημήτριος Νασίκας',
    en: 'Dr. Dimitris Nasikas',
  },
  doctorRole: {
    el: 'Αναπληρωτής Διευθυντής, 3η Κλινική Μαστού',
    en: 'Associate Director, 3rd Breast Clinic',
  },
  copyrightText: {
    el: '©2026, Όλα τα δικαιώματα διατηρούνται. Με αγάπη 💙 από',
    en: '©2026, All rights reserved. Made with love 💙 by',
  },
  creditLinkText: 'hayc.gr',
  creditLinkHref: 'http://hayc.gr',
};

export const heroConfig: HeroConfig = {
  backgroundImage: '/images/banner-bg.png',
  doctorImage: '/images/hero-doctor.gif',
  subtitle: { el: 'Δρ. Δημήτριος Νασίκας', en: 'Dr. Dimitris Nasikas' },
  title: {
    el: 'Χειρουργική Μαστού & Χειρουργική Ογκολογία',
    en: 'Breast Surgery & Surgical Oncology',
  },
  description: {
    el: 'Εξειδικευμένη φροντίδα για την υγεία του μαστού — από την κλινική εξέταση και τον προληπτικό έλεγχο έως την αντιμετώπιση καλοήθων παθήσεων και του καρκίνου του μαστού.',
    en: 'Specialized breast health care — from clinical examination and screening to benign conditions and breast cancer treatment.',
  },
  ctaText: { el: 'Επικοινωνία', en: 'Contact' },
  ctaHref: '#contact',
};

export const aboutConfig: AboutConfig = {
  shapeImage: '',
  photo: '/images/about-photo.jpg',
  photoAlt: { el: 'Δρ. Δημήτριος Νασίκας', en: 'Dr. Dimitris Nasikas' },
  experienceYear: '2021',
  experienceText: { el: 'Διδακτορικό, Πανεπιστήμιο Κρήτης', en: 'PhD, University of Crete' },
  subtitle: { el: 'Σχετικά με τον χειρουργό', en: 'About the surgeon' },
  title: { el: 'Δρ. Δημήτριος Νασίκας', en: 'Dr. Dimitris Nasikas' },
  description: {
    el: 'Αναπληρωτής Διευθυντής στην 3η Κλινική Μαστού του Metropolitan General στο Χολαργό. Χειρουργός με εξειδίκευση στη Χειρουργική Μαστού και τη Χειρουργική Ογκολογία, με εκτεταμένη εκπαίδευση στα μεγαλύτερα ογκολογικά κέντρα της Ελλάδας και αναγνωρισμένη έρευνα στη θεραπεία του καρκίνου του μαστού.',
    en: 'Associate Director at the 3rd Breast Clinic of Metropolitan General in Holargos. A surgeon specializing in breast surgery and surgical oncology, with extensive training at Greece\'s leading oncology centers and recognized research in breast cancer treatment.',
  },
  highlights: [
    {
      title: { el: 'Διδακτορικό, Πανεπιστήμιο Κρήτης', en: 'PhD, University of Crete' },
      text: {
        el: 'Ιογενείς λοιμώξεις στην καρκινογένεση & τη Χειρουργική Ογκολογία (2021).',
        en: 'Viral infections in carcinogenesis & surgical oncology (2021).',
      },
    },
    {
      title: { el: 'Χειρουργική Ογκολογία', en: 'Surgical Oncology' },
      text: {
        el: 'Μεταπτυχιακό δίπλωμα, Εθνικό & Καποδιστριακό Πανεπιστήμιο Αθηνών.',
        en: 'Master\'s degree, National and Kapodistrian University of Athens.',
      },
    },
    {
      title: { el: 'Πανεπιστήμιο Stanford', en: 'Stanford University' },
      text: {
        el: 'Χρόνος ειδίκευσης αναγνωρισμένος από το ΚΕΣΥ.',
        en: 'Specialization period recognized by KESY.',
      },
    },
    {
      title: { el: 'Metropolitan General', en: 'Metropolitan General' },
      text: {
        el: '3η Κλινική Μαστού — Αναπληρωτής Διευθυντής, Χολαργός.',
        en: '3rd Breast Clinic — Associate Director, Holargos.',
      },
    },
  ],
  bioButtonText: { el: 'Πλήρες βιογραφικό', en: 'Full biography' },
  bioButtonHref: '#biography',
  contactLinkText: { el: 'Επικοινωνία', en: 'Contact' },
  contactLinkHref: '#contact',
};

export const servicesConfig: ServicesConfig = {
  backgroundImage: '/images/service-bg.png',
  iconImage: '/images/medicle.png',
  mainTitle: { el: 'Φροντίδα Μαστού', en: 'Breast Care' },
  description: {
    el: 'Ολοκληρωμένη αξιολόγηση και διαχείριση της υγείας του μαστού — από τον προληπτικό έλεγχο και τη γενετική συμβουλευτική έως τη θεραπεία καλοήθων παθήσεων και του καρκίνου του μαστού.',
    en: 'Comprehensive breast health assessment and management — from screening and genetic counseling to benign conditions and breast cancer treatment.',
  },
  secondaryTitle: { el: 'Υπηρεσίες', en: 'Services' },
  subtitle: { el: 'Τι προσφέρουμε', en: 'What we offer' },
  ctaText: { el: 'Επικοινωνία', en: 'Contact' },
  ctaHref: '#contact',
  items: [
    {
      number: '01',
      title: { el: 'Κλινική Εξέταση Μαστού', en: 'Clinical Breast Examination' },
      description: {
        el: 'Πλήρης κλινική αξιολόγηση και ψηλάφηση του μαστού από εξειδικευμένο χειρουργό.',
        en: 'Complete clinical assessment and breast examination by a specialized surgeon.',
      },
    },
    {
      number: '02',
      title: { el: 'Λήψη Ιατρικού Ιστορικού', en: 'Medical History Review' },
      description: {
        el: 'Λεπτομερής καταγραφή προσωπικού και οικογενειακού ιστορικού για την καθοδήγηση της διάγνωσης και του θεραπευτικού σχεδιασμού.',
        en: 'Detailed personal and family history to guide diagnosis and treatment planning.',
      },
    },
    {
      number: '03',
      title: { el: 'Γενετική Συμβουλευτική', en: 'Genetic Counseling' },
      description: {
        el: 'Εκτίμηση κληρονομικού κινδύνου και καθοδήγηση για γενετικό έλεγχο όπου κρίνεται απαραίτητο.',
        en: 'Hereditary risk assessment and guidance on genetic testing when appropriate.',
      },
    },
    {
      number: '04',
      title: { el: 'Προσυμπτωματικός Έλεγχος', en: 'Preventive Screening' },
      description: {
        el: 'Προληπτικός έλεγχος για γυναίκες αυξημένου κινδύνου, πριν την εμφάνιση συμπτωμάτων.',
        en: 'Preventive screening for high-risk women before symptoms appear.',
      },
    },
    {
      number: '05',
      title: { el: 'Παρακολούθηση Συμπτωματολογίας', en: 'Symptom Monitoring' },
      description: {
        el: 'Παρακολούθηση και αξιολόγηση γυναικών με συμπτωματολογία από τον μαστό.',
        en: 'Monitoring and evaluation of women with breast-related symptoms.',
      },
    },
    {
      number: '06',
      title: { el: 'Καλοήθεις Παθήσεις Μαστού', en: 'Benign Breast Conditions' },
      description: {
        el: 'Διάγνωση και αντιμετώπιση μη κακοήθων παθήσεων και βλαβών του μαστού.',
        en: 'Diagnosis and management of non-cancerous breast conditions and lesions.',
      },
    },
    {
      number: '07',
      title: { el: 'Καρκίνος Μαστού', en: 'Breast Cancer' },
      description: {
        el: 'Εξειδικευμένη χειρουργική ογκολογική φροντίδα για τη διάγνωση και θεραπεία του καρκίνου του μαστού.',
        en: 'Specialized surgical oncology care for breast cancer diagnosis and treatment.',
      },
    },
  ],
};

export const biographyConfig: BiographyConfig = {
  subtitle: { el: 'Βιογραφικό', en: 'Biography' },
  title: { el: 'Επαγγελματικό Προφίλ', en: 'Professional Profile' },
  description: {
    el: 'Εξερευνήστε την εκπαίδευση, την κατάρτιση, την έρευνα και την κλινική εμπειρία του Δρ. Νασίκα. Ανοίξτε κάθε ενότητα παρακάτω για πλήρεις λεπτομέρειες.',
    en: 'Explore Dr. Nasikas\'s education, training, research, and clinical experience. Open each section below for full details.',
  },
  ctaText: { el: 'Επικοινωνία', en: 'Contact' },
  ctaHref: '#contact',
  items: [
    {
      number: '01',
      title: { el: 'Ιατρική εκπαίδευση', en: 'Medical education' },
      paragraphs: [
        {
          el: 'Ο Δρ. Δημήτριος Νασίκας εισήχθη στην Ιατρική Σχολή του Πανεπιστημίου Κρήτης μέσω πανελλαδικών εξετάσεων. Αποφοίτησε με τριετή υποτροφία του Ιδρύματος Κρατικών Υποτροφιών (ΙΚΥ), πρωτεύοντας σε ακαδημαϊκή επίδοση στο έτος του.',
          en: 'Dr. Dimitris Nasikas entered the Medical School of the University of Crete through national examinations. He graduated with a three-year scholarship from the State Scholarships Foundation (IKY), ranking first in academic performance in his year.',
        },
      ],
    },
    {
      number: '02',
      title: { el: 'Μεταπτυχιακές σπουδές', en: 'Postgraduate studies' },
      paragraphs: [
        {
          el: 'Είναι κάτοχος Μεταπτυχιακού Διπλώματος του Πανεπιστημίου Κρήτης στη «Μοριακή Βάση των Νοσημάτων του Ανθρώπου», υπό την επίβλεψη του Καθ. Δημητρίου Μπούμπα.',
          en: 'He holds a Master\'s degree from the University of Crete in the "Molecular Basis of Human Diseases", under Prof. Dimitris Boumpas.',
        },
        {
          el: 'Επίσης κατέχει Μεταπτυχιακό της Εθνικής Σχολής Δημόσιας Υγείας στη «Διοίκηση Υπηρεσιών Υγείας με Κατεύθυνση την Οικονομική Αξιολόγηση», με αντικείμενο την έναρξη της Ημερήσιας Νοσηλείας Χειρουργικής Μαστού στο Κέντρο «Ν. Κούρκουλος» του ΑΟΝΑ «Άγιος Σάββας» — όπου πραγματοποίησε την πρώτη επέμβαση μαστού της μονάδας μαζί με τον κ. Ευάγγελο Φιλόπουλο, Διευθυντή και Πρόεδρο της Ελληνικής Αντικαρκινικής Εταιρείας. Ολοκλήρωσε επίσης Μεταπτυχιακό στη «Χειρουργική Ογκολογία» στο Εθνικό & Καποδιστριακό Πανεπιστήμιο Αθηνών, με διατριβή στη χειρουργική αντιμετώπιση του καρκίνου του μαστού σε γυναίκες κάτω των 35 ετών.',
          en: 'He also holds a Master\'s from the National School of Public Health in Health Services Management with a focus on Economic Evaluation, concerning the launch of day-case breast surgery at the "N. Kourkoulos" Center of Agios Savvas Hospital — where he performed the unit\'s first breast procedure with Dr. Evangelos Filopoulos. He also completed a Master\'s in Surgical Oncology at the National and Kapodistrian University of Athens, with a thesis on surgical management of breast cancer in women under 35.',
        },
      ],
    },
    {
      number: '03',
      title: { el: 'Διδακτορικό & έρευνα', en: 'Doctorate & research' },
      paragraphs: [
        {
          el: 'Το 2021 ανακηρύχθηκε Διδάκτωρ του Πανεπιστημίου Κρήτης, μελετώντας τον ρόλο των ιογενών λοιμώξεων στην καρκινογένεση και τη Χειρουργική Ογκολογία. Είναι συνεργαζόμενος ερευνητής με το Ίδρυμα Ιατροβιολογικών Ερευνών της Ακαδημίας Αθηνών και έχει συμμετάσχει ως κύριος ερευνητής σε Ευρωπαϊκά προγράμματα HORIZON 2020 με εφαρμογή Τεχνητής Νοημοσύνης στην πρώιμη διάγνωση του καρκίνου του μαστού. Έχει δημοσιεύσει πολλά άρθρα σε διεθνή επιστημονικά περιοδικά με κριτές.',
          en: 'In 2021 he was awarded a PhD from the University of Crete, studying the role of viral infections in carcinogenesis and surgical oncology. He is a collaborating researcher with the Biomedical Research Foundation of the Academy of Athens and has participated as principal investigator in EU HORIZON 2020 programs applying AI to early breast cancer diagnosis. He has published numerous articles in international peer-reviewed journals.',
        },
      ],
    },
    {
      number: '04',
      title: { el: 'Χειρουργική εκπαίδευση', en: 'Surgical training' },
      paragraphs: [
        {
          el: 'Ολοκλήρωσε την ειδίκευσή του στη Γενική Χειρουργική στα νοσοκομεία «Γ. Γεννηματάς» και «ΝΘΠ η Παμμακάριστος» στην Αθήνα, και στη συνέχεια στον ΑΟΝΑ «Άγιος Σάββας» — γινόμενος ο πρώτος ειδικευόμενος που αποφοίτησε από τις Κλινικές Χειρουργικής Ογκολογίας και Χειρουργικής Μαστού στην ιστορία του νοσοκομείου. Παρέμεινε στον «Άγιο Σάββα» μετά την απόκτηση του τίτλου ειδίκευσης, αποκτώντας εκτεταμένη εμπειρία στο μεγαλύτερο ογκολογικό νοσοκομείο της χώρας.',
          en: 'He completed his specialization in General Surgery at "G. Gennimatas" and "NTHP I Pammakaristos" hospitals in Athens, then at Agios Savvas Hospital — becoming the first trainee to graduate from the Surgical Oncology and Breast Surgery clinics in the hospital\'s history. He remained at Agios Savvas after certification, gaining extensive experience at the country\'s largest oncology hospital.',
        },
      ],
    },
    {
      number: '05',
      title: { el: 'Διεθνής εμπειρία & δημόσια υπηρεσία', en: 'International experience & public service' },
      paragraphs: [
        {
          el: 'Ο χρόνος ειδίκευσής του στην Κλινική Χειρουργικής Ογκολογίας του Πανεπιστημίου Stanford (Καλιφόρνια, ΗΠΑ) έχει αναγνωριστεί από το ΚΕΣΥ. Υπηρέτησε στο αγροτικό ιατρείο Καστανιάς Καλαμπάκας και ως ιατρός τάγματος στο Τάγμα Εθνοφυλακής Καρπάθου.',
          en: 'His specialization at Stanford University\'s Surgical Oncology Clinic (California, USA) has been recognized by KESY. He served at the rural health center of Kastania, Kalambaka, and as a medical officer in the National Guard on Karpathos.',
        },
      ],
    },
    {
      number: '06',
      title: { el: 'Τρέχουσα θέση', en: 'Current position' },
      paragraphs: [
        {
          el: 'Ο Δρ. Νασίκας είναι Αναπληρωτής Διευθυντής στην 3η Κλινική Μαστού του Metropolitan General στο Χολαργό, Αθήνα, όπου παρέχει εξειδικευμένη φροντίδα χειρουργικής μαστού και χειρουργικής ογκολογίας.',
          en: 'Dr. Nasikas is Associate Director at the 3rd Breast Clinic of Metropolitan General in Holargos, Athens, providing specialized breast surgery and surgical oncology care.',
        },
      ],
    },
  ],
};

export const hospitalConfig: HospitalConfig = {
  shapeImage: '',
  subtitle: { el: 'Πού θα μας βρείτε', en: 'Where to find us' },
  title: { el: 'Συνεργαζόμενο Νοσοκομείο', en: 'Affiliated Hospital' },
  description: {
    el: 'Ο Δρ. Νασίκας παρέχει φροντίδα ως Αναπληρωτής Διευθυντής στην 3η Κλινική Μαστού του Metropolitan General στο Χολαργό, Αθήνα — ένα από τα κορυφαία ιδιωτικά νοσοκομεία της πόλης.',
    en: 'Dr. Nasikas provides care as Associate Director at the 3rd Breast Clinic of Metropolitan General in Holargos, Athens — one of the city\'s leading private hospitals.',
  },
  ctaText: { el: 'Επικοινωνία', en: 'Contact' },
  ctaHref: '#contact',
  highlights: [
    {
      title: { el: 'Metropolitan General', en: 'Metropolitan General' },
      text: { el: 'Ιδιωτικό νοσοκομείο, Χολαργός, Αθήνα.', en: 'Private hospital, Holargos, Athens.' },
    },
    {
      title: { el: '3η Κλινική Μαστού', en: '3rd Breast Clinic' },
      text: {
        el: 'Αναπληρωτής Διευθυντής — χειρουργική μαστού & χειρουργική ογκολογία.',
        en: 'Associate Director — breast surgery & surgical oncology.',
      },
    },
    {
      title: { el: 'Κλινική εστίαση', en: 'Clinical focus' },
      text: {
        el: 'Προληπτικός έλεγχος, διάγνωση, καλοήθεις παθήσεις μαστού και αντιμετώπιση καρκίνου μαστού.',
        en: 'Screening, diagnosis, benign breast conditions, and breast cancer treatment.',
      },
    },
    {
      title: { el: 'Λογότυπο νοσοκομείου', en: 'Hospital logo' },
      text: {
        el: 'Προσθέστε εδώ το επίσημο λογότυπο του Metropolitan General όταν είναι διαθέσιμο.',
        en: 'Add the official Metropolitan General logo here when available.',
      },
    },
  ],
};

export const consultationConfig: ConsultationConfig = {
  backgroundImage: '/images/consultation-bg.png',
  title: {
    el: 'Αναλάβετε τον έλεγχο της υγείας του μαστού σας — κλείστε σήμερα ένα ραντεβού',
    en: 'Take control of your breast health — book an appointment today',
  },
  ctaText: { el: 'Επικοινωνία', en: 'Contact' },
  ctaHref: '#contact',
};

export const contactPageConfig: ContactPageConfig = {
  subtitle: { el: 'Επικοινωνήστε μαζί μας', en: 'Get in touch' },
  title: { el: 'Επικοινωνία', en: 'Contact' },
  description: {
    el: 'Στείλτε μήνυμα για να ζητήσετε ραντεβού ή να υποβάλετε ερώτηση σχετικά με τις υπηρεσίες φροντίδας μαστού.',
    en: 'Send a message to request an appointment or ask about breast care services.',
  },
  nameLabel: { el: 'Όνομα', en: 'Name' },
  emailLabel: { el: 'Email', en: 'Email' },
  subjectLabel: { el: 'Θέμα', en: 'Subject' },
  messageLabel: { el: 'Μήνυμα', en: 'Message' },
  submitButton: { el: 'Αποστολή', en: 'Send' },
  submitting: { el: 'Αποστολή...', en: 'Sending...' },
  successTitle: { el: 'Το μήνυμά σας στάλθηκε!', en: 'Message sent!' },
  successText: {
    el: 'Θα επικοινωνήσουμε μαζί σας σύντομα.',
    en: 'We will get back to you shortly.',
  },
};

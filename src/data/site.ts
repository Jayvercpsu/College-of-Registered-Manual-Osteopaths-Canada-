/**
 * Verified organizational facts, sourced from the public CRMO website
 * (manualosteopaths.org). Only information confirmed against that source
 * belongs in this file. Placeholder or pending content must never be added
 * here — keep it in page-level data modules with explicit placeholder notes.
 */

export const SITE = {
  name: "College of Registered Manual Osteopaths",
  shortName: "CRMO",
  legalName: "College of Registered Manual Osteopaths (Canada)",
  title: "Registered Manual Osteopath",
  titleAbbreviation: "RMO",
  url: "https://www.manualosteopaths.org",
  founded: "June 27, 2019",
  foundedYear: 2019,
  location: "Thornhill, Ontario",
  description:
    "The College of Registered Manual Osteopaths (Canada) is a national nonprofit Indigenous organization that registers and supervises manual osteopaths practising on the treaty and territorial lands of Indigenous Peoples across Canada.",
  mission:
    "CRMO registers and supervises its members practising on treaty and territorial lands of Indigenous Peoples to ensure the public's right to safe and ethical manual osteopathic care is protected.",
  contact: {
    addressLines: ["7250 Keele Street, Suite 412", "Vaughan, ON L4K 1Z8"],
    phone: "(905) 597-5897",
    phoneHref: "tel:+19055975897",
    email: "info@manualosteopaths.org",
  },
  /**
   * Extended health insurers whose acceptance of CRMO members was announced
   * publicly by the organization. Listed for public information only.
   */
  insurers: [
    "Manulife",
    "Green Shield Canada",
    "Pacific Blue Cross",
    "Alberta Blue Cross",
    "Medavie Blue Cross",
  ],
  /**
   * Required, prominent honesty note: CRMO is not a provincial regulatory
   * body. This statement is part of the organization's own public identity.
   */
  regulatorNote:
    "CRMO is a national nonprofit Indigenous organization. It is not registered as a regulatory agency under the health regulatory authorities of Canadian provinces.",
} as const;

export const SITE_DISCLOSURES = {
  about: [
    "Registered as a national nonprofit Indigenous organization on June 27, 2019.",
    "All CRMO employees, management and board members are Indigenous peoples (First Nations, Métis, Inuit), either through ancestry or by adoption.",
    "CRMO considers manual osteopathy part of Indigenous Peoples' heritage and works to protect both the profession and the public.",
    "Members in good standing use the protected title Registered Manual Osteopath (RMO).",
  ],
  standards: [
    {
      title: "Protected professional title",
      body: "CRMO members are awarded the title of Registered Manual Osteopath (RMO). The title confirms the practitioner is a qualified manual osteopath who has met the college's registration requirements.",
    },
    {
      title: "Continuing education",
      body: "Members complete a minimum of 40 hours of continuing education related to the clinical practice of osteopathy every two years, including a mandatory course covering insurance fraud prevention, sexual abuse prevention and proper record keeping.",
    },
    {
      title: "Code of Ethics",
      body: "Every RMO must adhere to the CRMO Code of Ethics, which holds that the paramount purpose of a registered manual osteopath's professional services is to benefit the client.",
    },
    {
      title: "Informed consent",
      body: "Members must ensure consent to treatment is fully informed, voluntarily given, related to the client's condition and circumstances, never obtained through misrepresentation, and documented in writing.",
    },
  ],
} as const;

export interface Location {
  country: string;
  city: string;
  detail: string;
  locationLink?: string;
}

export interface Table {
  presenter: string;
  presentationTitle: string;
  presentationTime?: string;
  presentationLink?: string;
}

export interface SponsorInfo {
  name: string;
  logo: string;
  link: string;
}

export interface Participants {
  firstname: string;
  lastname: string;
  company?: string;
}

export interface Sponsors {
  hostSponsors?: SponsorInfo;
  platinumSponsors?: SponsorInfo[];
  goldSponsors?: SponsorInfo[];
  silverSponsors?: SponsorInfo[];
  ConnectivitySponsors?: SponsorInfo[];
  moralSponsor?: SponsorInfo[];
}

export interface gallery {
  image: string;
}

export interface IrnogEvent {
  title: string;
  time?: string;
  location: Location;
  irnogAgenda?: Table[];
  sponsers?: Sponsors;
  gallery?: gallery[];
  Participants?: Participants[];
}

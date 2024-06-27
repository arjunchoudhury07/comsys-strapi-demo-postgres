import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementAboutConference extends Schema.Component {
  collectionName: 'components_element_about_conferences';
  info: {
    displayName: 'AboutConference';
  };
  attributes: {
    aboutTheConference: Attribute.Text & Attribute.Required;
    presidentName: Attribute.String & Attribute.Required;
    emailOfPresident: Attribute.Email;
  };
}

export interface ElementDistinguishedSpeaker extends Schema.Component {
  collectionName: 'components_element_distinguished_speakers';
  info: {
    displayName: 'DistinguishedSpeaker';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    designation: Attribute.Text;
    affiliation: Attribute.Text;
    profileLink: Attribute.Text;
    photo: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ElementEventSponsor extends Schema.Component {
  collectionName: 'components_element_event_sponsors';
  info: {
    displayName: 'eventSponsor';
  };
  attributes: {
    sponsorName: Attribute.String & Attribute.Required;
    sponsorLogo: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ElementGallaryCard extends Schema.Component {
  collectionName: 'components_element_gallary_cards';
  info: {
    displayName: 'Gallary_Card';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Thumbnail_Image: Attribute.Media<'images'> & Attribute.Required;
    Image_Url: Attribute.Text & Attribute.Required;
  };
}

export interface ElementHeroSection extends Schema.Component {
  collectionName: 'components_element_hero_sections';
  info: {
    displayName: 'heroSection';
  };
  attributes: {
    organizingInstituteLogo: Attribute.Media<'images'> & Attribute.Required;
    howMuchConducted: Attribute.String & Attribute.Required;
    presentYear: Attribute.String & Attribute.Required;
    mainSessionDate: Attribute.String & Attribute.Required;
    venue: Attribute.Text & Attribute.Required;
    organizedBy: Attribute.Text & Attribute.Required;
  };
}

export interface ElementImageSlider extends Schema.Component {
  collectionName: 'components_element_image_sliders';
  info: {
    displayName: 'Image_Slider';
  };
  attributes: {
    Image: Attribute.Media<'images'>;
  };
}

export interface ElementImportantDates extends Schema.Component {
  collectionName: 'components_element_important_dates';
  info: {
    displayName: 'ImportantDates';
  };
  attributes: {
    paperSubmissionOpens: Attribute.String & Attribute.Required;
    submissionDeadline: Attribute.String & Attribute.Required;
    acceptanceNotification: Attribute.String & Attribute.Required;
    registrationDue: Attribute.String & Attribute.Required;
    cameraReadySubmission: Attribute.String & Attribute.Required;
    mainSession: Attribute.String & Attribute.Required;
  };
}

export interface ElementLatestNews extends Schema.Component {
  collectionName: 'components_element_latest_news';
  info: {
    displayName: 'LatestNews';
  };
  attributes: {
    noticeTitle: Attribute.Text & Attribute.Required;
    postedOn: Attribute.Date & Attribute.Required;
    isActive: Attribute.Boolean;
    viewNotice: Attribute.Media<'images' | 'files'>;
  };
}

export interface ElementPlacesToVisit extends Schema.Component {
  collectionName: 'components_element_places_to_visits';
  info: {
    displayName: 'Places_To_Visit';
  };
  attributes: {
    Place_Name: Attribute.String & Attribute.Required;
    About_The_Place: Attribute.Text & Attribute.Required;
    Place_Image: Attribute.Media<'images'> & Attribute.Required;
    Url_To_Know_More: Attribute.Text & Attribute.DefaultTo<'#'>;
  };
}

export interface ElementTpc extends Schema.Component {
  collectionName: 'components_element_tpcs';
  info: {
    displayName: 'TPC';
  };
  attributes: {
    Name: Attribute.String & Attribute.Required;
    Affiliation: Attribute.Text & Attribute.Required;
    Profile_Link: Attribute.Text & Attribute.DefaultTo<'#'>;
  };
}

export interface ElementTrackDetails extends Schema.Component {
  collectionName: 'components_element_track_details';
  info: {
    displayName: 'TrackDetails';
    description: '';
  };
  attributes: {
    trackTitle: Attribute.Text & Attribute.Required;
    trackDescription: Attribute.Text & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'element.about-conference': ElementAboutConference;
      'element.distinguished-speaker': ElementDistinguishedSpeaker;
      'element.event-sponsor': ElementEventSponsor;
      'element.gallary-card': ElementGallaryCard;
      'element.hero-section': ElementHeroSection;
      'element.image-slider': ElementImageSlider;
      'element.important-dates': ElementImportantDates;
      'element.latest-news': ElementLatestNews;
      'element.places-to-visit': ElementPlacesToVisit;
      'element.tpc': ElementTpc;
      'element.track-details': ElementTrackDetails;
    }
  }
}

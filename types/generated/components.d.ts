import type { Schema, Attribute } from '@strapi/strapi';

export interface ButtonCallButton extends Schema.Component {
  collectionName: 'components_button_call_buttons';
  info: {
    displayName: 'CallButton';
  };
  attributes: {
    name: Attribute.Text & Attribute.Required;
    link: Attribute.Text;
  };
}

export interface ButtonDetailsButton extends Schema.Component {
  collectionName: 'components_button_details_buttons';
  info: {
    displayName: 'DetailsButton';
    description: '';
  };
  attributes: {
    name: Attribute.Text & Attribute.Required;
    link: Attribute.Text & Attribute.Required;
  };
}

export interface ButtonMoreButton extends Schema.Component {
  collectionName: 'components_button_more_buttons';
  info: {
    displayName: 'MoreButton';
  };
  attributes: {
    name: Attribute.Text & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface ButtonVisitWebsiteButton extends Schema.Component {
  collectionName: 'components_button_visit_website_buttons';
  info: {
    displayName: 'VisitWebsiteButton';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'button.call-button': ButtonCallButton;
      'button.details-button': ButtonDetailsButton;
      'button.more-button': ButtonMoreButton;
      'button.visit-website-button': ButtonVisitWebsiteButton;
    }
  }
}

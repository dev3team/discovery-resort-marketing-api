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

export interface ButtonExpandButton extends Schema.Component {
  collectionName: 'components_button_expand_buttons';
  info: {
    displayName: 'ExpandButton';
  };
  attributes: {
    text: Attribute.Text & Attribute.Required;
  };
}

export interface ButtonHireUsButton extends Schema.Component {
  collectionName: 'components_button_hire_us_buttons';
  info: {
    displayName: 'HireUsButton';
    description: '';
  };
  attributes: {
    name: Attribute.Text & Attribute.Required;
    link: Attribute.Text & Attribute.Required;
  };
}

export interface ButtonLoadMoreButton extends Schema.Component {
  collectionName: 'components_button_load_more_buttons';
  info: {
    displayName: 'LoadMoreButton';
  };
  attributes: {
    text: Attribute.Text & Attribute.Required;
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

export interface SeoMeta extends Schema.Component {
  collectionName: 'components_seo_metas';
  info: {
    displayName: 'meta';
  };
  attributes: {
    name: Attribute.String;
    content: Attribute.String;
  };
}

export interface SeoSeo extends Schema.Component {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    meta: Attribute.Component<'seo.meta', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'button.call-button': ButtonCallButton;
      'button.details-button': ButtonDetailsButton;
      'button.expand-button': ButtonExpandButton;
      'button.hire-us-button': ButtonHireUsButton;
      'button.load-more-button': ButtonLoadMoreButton;
      'button.more-button': ButtonMoreButton;
      'button.visit-website-button': ButtonVisitWebsiteButton;
      'seo.meta': SeoMeta;
      'seo.seo': SeoSeo;
    }
  }
}

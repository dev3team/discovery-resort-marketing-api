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

export interface LocationLocation extends Schema.Component {
  collectionName: 'components_location_locations';
  info: {
    displayName: 'Location';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Name: Attribute.Blocks & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'button.call-button': ButtonCallButton;
      'location.location': LocationLocation;
    }
  }
}

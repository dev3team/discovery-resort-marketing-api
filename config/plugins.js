module.exports = ({ env }) => ({
    //
  graphql: {
      config: {
          endpoint: '/graphql',
          shadowCRUD: true,
          playgroundAlways: false,
          depthLimit: 7,
          amountLimit: 100,
          apolloServer: {
              tracing: false,
          },
      },
  },
  ezforms:{
    config:{
      captchaProvider: {
        name: 'none',
      },
      notificationProviders: [{
        name: 'email',
        enabled: true,
        config: {
          subject: "Your Custom Subject", 
          from: env('FROM_EMAIL')
        }
      },]
    }
  },
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST'),
        port: env('SMTP_PORT'),
        auth: {
          user: env('SMTP_USER'),
          pass: env('SMTP_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: env('FROM_EMAIL'),
        defaultReplyTo: env('FROM_EMAIL'),
      },
    },
  },
});

  
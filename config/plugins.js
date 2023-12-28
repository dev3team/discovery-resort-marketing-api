module.exports = {
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
          from: 'support@dev-3.com'
        }
      },]
    }
  },
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: "smtp.mailersend.net",
        port: 587,
        auth: {
          user: 'MS_YSGDmT@dev-3.com',
          pass: 'YuIVbaWVRZibGzha',
        },
      },
      settings: {
        defaultFrom: 'support@dev-3.com',
        defaultReplyTo: 'support@dev-3.com',
      },
    },
  },
};

  
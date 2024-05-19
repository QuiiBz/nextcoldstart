/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "nextcoldstartsst",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: {
          region: 'eu-west-2'
        }
      }
    };
  },
  async run() {
    new sst.aws.Nextjs("Nextjs");
  },
});

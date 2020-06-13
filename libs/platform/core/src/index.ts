export * from './lib/platform-core.module';


export {
  mountRootParcel as mountFeatureService,
  AppProps as HostAppProps
} from 'single-spa';


export {
  singleSpaAngular as featureApp,
  getSingleSpaExtraProviders as getHostAppExtraProviders
} from 'single-spa-angular';

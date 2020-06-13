import { ReplaySubject } from 'rxjs';
import { HostAppProps } from '@micro-ng/platform/core';//'single-spa';


// Add any custom single-spa props you have to this type def
// https://single-spa.js.org/docs/building-applications.html#custom-props
export type CustomHostAppProps = HostAppProps & {

}

export const hostAppPropsSubject = new ReplaySubject<CustomHostAppProps>(1)

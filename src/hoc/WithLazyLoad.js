import React from "react";
import Preloader from "../components/common/Preloader/Preloader";

/*export const WithLazyLoad = ({component, ...props}) => {
        return <React.Suspense fallback={<Preloader />}>
            {React.createElement(component, {...props}, null)}
        </React.Suspense>
}*/

export const withSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </React.Suspense>
    }
};

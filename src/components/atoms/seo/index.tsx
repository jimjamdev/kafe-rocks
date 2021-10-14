import * as React from "react";
const { Fragment } = React;
import { Helmet } from "react-helmet";

interface ISeo {
  title: string;
  description: string;
}

/* We need all the extra meta, fb, tw and schema data
 * Would be good to spit all this out from db meta fields
 */

const Seo: React.FunctionComponent<ISeo> = ({ title, description }) => {
  return (
    <Fragment>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
    </Fragment>
  );
};

export default Seo;

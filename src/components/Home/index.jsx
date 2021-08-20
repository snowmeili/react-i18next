import React, { Component } from 'react';
import useIntl from '../../hooks/intl';

//import { withTranslation  } from "react-i18next";

const Home = ()=>{
  console.log(useIntl,999)
  const t = useIntl();
  return (
    <div>
         <h3>{t("home.content")}</h3>
    </div>
  )
}

//export default withTranslation()(Home);
export default Home;

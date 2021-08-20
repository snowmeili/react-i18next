import { useTranslation } from "react-i18next"



export default function useIntl () {
  const {t} = useTranslation();
  
  return t;
}
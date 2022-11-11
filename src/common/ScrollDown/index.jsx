import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollDown() {
  const { pathname } = useLocation();

  useEffect(() => {
    if(pathname != '/') {
        setTimeout(() => {window.scrollTo({ top: 500, behavior: 'smooth' });}, 300)
        
    }
  }, [pathname]);

  return null;
}
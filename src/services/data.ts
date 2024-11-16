// Definimos una variable 'url' que se usará para la solicitud a la API.
// Si estamos en un entorno de desarrollo (local), usamos 'http://localhost:4322'.
// Si no estamos en desarrollo (producción), usamos 'import.meta.env.SITE_URL'.

//  import { SITE_URL} from 'astro:env/client';
//  const localUrl = "http://localhost:4322" ;
// const url = localUrl ?  localUrl : SITE_URL;

const url = import.meta.env.SITE_URL
  ? import.meta.env.SITE_URL
  : "https://samiratouzlili.vercel.app/";


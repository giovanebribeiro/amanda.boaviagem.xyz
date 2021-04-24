/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Amanda Boaviagem`,
    author: {
      name: `Giovane Boaviagem`,
    },
    description: `Woo is a clean, modern, landing page site template.`,

    /* Choose and arrange the sections to be displayed on the landing page */
    sections: [
      `hero`,
      `features`,
      `screenshots`,
      `testimonials`,
      `subscribe`
    ],

    /* Configure the navigation menu */
    menuItems: [
      {path: '#', label: ''},
      /*{path: 'pricing', label: 'Pricing'},
      {path: 'screenshots', label: 'Screenshots'},
      {path: 'testimonials', label: 'Testimonials'},
      {path: 'subscribe', label: 'Subscribe'},*/
    ],

    /* Provide social media accounts. Remove or add new services. (The value 'fa' is the name of FontAwesome icon to display. Choose from here: https://fontawesome.com/cheatsheet/free/brands ) */
    social: [
      { 
        service: `Instagram`,
        url : `https://instagram.com/pagina90_`,
        fa: `instagram` 
      },
      {
        service: `Linkedin`,
        url: `https://www.linkedin.com/in/amanda-boaviagem/`,
        fa: `linkedin`
      }
    ],

    /* Path to favicon and logo (located inside the 'static' folder) */
    favicon: `favicon.png`,
    logo: `/images/logoHeader.png`,

    /* Logo and text to show in footer */
    footer: {
      logo: `/images/logoFooter.png`,
      text: `A escritora da esperança / mais de 1k de visualizações no Luvbook / Menção honrosa no 3º Prêmio de Literatura Juvenil Ferreira de Castro (2006 - Portugal) / Uma das vencedoras na coletânea do IX Concurso Ladjane Bandeira de Poesia `,
    },

    /* Address and contact info to show in footer */
    address: {
      line1: `1600 Amphitheatre Parkway`,
      line2: `Mountain View, CA`,
      line3: `94043 US`,
    },
    contacts: [
      { text: `WhatsApp`, url: `https://api.whatsapp.com/message/AKIVPN2G3U6JF1` },
      //{ text: `123.456.7890`, url: `tel:1234567890`},
      { text: `autoraamanda@boaviagem.xyz`, url: `mailto:autoraamanda@boaviagem.xyz`},
    ],
  },
  plugins: [ `gatsby-plugin-anchor-links`, `gatsby-plugin-smoothscroll`, `react-scrollspy` ],
}

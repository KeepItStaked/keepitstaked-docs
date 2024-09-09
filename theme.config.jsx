export default {
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:title" content="KeepItStaked Docs" />
          <meta property="og:description" content="KeepItStaked Resources & Documentation" />

          <meta name="title" content="KeepItStaked Docs" />
          <meta name="description" content="KeepItStaked Resources & Documentation" />
          <link rel="icon" type="image/png" href="https://raw.githubusercontent.com/KeepItStaked/public-uploads/main/icon_1.png"></link>
    </>
  ),
  logo: <span>KeepItStaked Docs</span>,
  project: {
    link: 'https://github.com/KeepItStaked/keepitstaked-docs'
  },
  docsRepositoryBase: 'https://github.com/KeepItStaked/keepitstaked-docs',
  useNextSeoProps() {
    return { 
      titleTemplate: '%s | KiS'
    }
  },
  primaryHue: { dark: 273, light: 260},
  primarySaturation: { dark: 100, light: 100},
  sidebar: {
    defaultMenuCollapseLevel: 2,
    autoCollapse: true,
    toggleButton: true
  },
  toc: {
    float: true,
    backToTop: true,
  },
  editLink: { //edit this page button
    text: "Help us to edit this page →",
    component: null // disable it
  },
  feedback: { // give us a feedback
    content: null
    
  },
  footer: {
    text: (
      <span>
         {new Date().getFullYear()} ©{' '}
        <a href="https://keepitstaked.com" target="_blank">
          KeepItStaked
        </a>
        . Powered by {' '}
        <a href="https://nextra.site" target="_blank">
          Nextra
        </a>
      </span> 
    )
  }


}

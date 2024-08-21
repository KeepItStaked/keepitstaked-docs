export default {
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
  primaryHue: { dark: 300, light: 260},
  primarySaturation: { dark: 100, light: 100},
  sidebar: {
    defaultMenuCollapseLevel: 2,
    autoCollapse: true,
    toggleButton: true
  },
  toc: {
    float: true,
    backTotop: true,
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

// Define card data
// could also be fetched from an API
export const cardData = [
    {
      imageUrl: '/img/Hero@1x.png',
      title: 'Transition example',
      subTitle: 'Lorem ipsum dolor sit amet',
      description: 'Hover over image to see transition panel. Hover over image to see transition panel. Hover over image to see transition panel. Hover over image to see transition panel. ',
      icon: '/img/customer-service-2-fill.svg',
      isButton: true,
      buttonText: 'Start',
      //not needed as uses default primaryButtonColor
      //buttonColor: '#CF4D35',
      //textColor: '#CF4D35',
      //transition panel is optional
      isTransitionPanel: true,
      transitionPanelContent: 'This is a transitional panel which can be used to show additional content related to this panel.',
    },
    {
      imageUrl: '/img/Hero2@1x.png',
      title: 'Secondary colour example',
      subTitle: 'Sit amet et turpis',
      description: 'Vivamus placerat rutrum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ',
      icon: '/img/customer-service-2-fill.svg',
      isButton: true,
      buttonText: 'Call Us Now',
      //here we define colours if not default
      buttonColor: '#8C6CEB',
      textColor: '#8C6CEB',
    },
    {
        //no image provided so wont be shown
      title: 'Pellentesque lacinia mollis',
      subTitle: 'Lorem ipsum dolor sit amet',
      description: 'Cras varius vulputate neque eu consequat. Vivamus placerat rutrum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ',
      isButton: true,
      icon: '/img/customer-service-2-fill.svg',
      buttonText: 'No image and long button text'
    },
    {
      title: 'Lacinia mollis',
      subTitle: 'Sit amet et turpis',
      description: 'Vivamus placerat rutrum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ',
      icon: '/img/customer-service-2-fill.svg',
      isButton: false,
      //this wont be shown as isButton is false
      buttonText: 'Call Us Now',

    },
    {
      title: 'Lacinia mollis. Lacinia mollis. Lacinia mollis',
      subTitle: 'Sit amet et turpis',
      description: 'Vivamus placerat rutrum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ',
      isButton: true,
      buttonColor: '#8C6CEB',
      textColor: '#8C6CEB',
      //icon not defined so wont be used
      icon: '',
      buttonText: 'Text Only',
    },
    {
      title: 'Lacinia mollis',
      subTitle: '',
      description: 'Vivamus placerat rutrum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus placerat rutrum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ',
      isButton: true,
      icon: '/img/customer-service-2-fill.svg',
      //buttonText not defined so wont be used
      buttonText: ''
    },
  ];
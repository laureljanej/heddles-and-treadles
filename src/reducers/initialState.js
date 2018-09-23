export default {
  fuelSavings: {
    newMpg: '',
    tradeMpg: '',
    newPpg: '',
    tradePpg: '',
    milesDriven: '',
    milesDrivenTimeframe: 'week',
    displayResults: false,
    dateModified: null,
    necessaryDataIsProvidedToCalculateSavings: false,
    savings: {
      monthly: 0,
      annual: 0,
      threeYear: 0
    }
  },
  thePattern: {
    heddles: 4,
    treadles: 4,
    tieup: {
      0: {
        0: true,
        1: false,
        2: false,
        3: false,
      },
      1: {
        0: false,
        1: true,
        2: false,
        3: false,
      },
      2: {
        0: false,
        1: false,
        2: false,
        3: true,
      },
      3: {
        0: false,
        1: true,
        2: false,
        3: false,
      }
    }
  }
};

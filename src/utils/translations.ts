type Home = {
  title: string;
  paragraph: string;
};

type Playground = {
  instructions: string[];
};

type Gallery = {
  photoMessages: string[];
};

type TranslationSet = {
  home: Home;
  playground: Playground;
  gallery: Gallery;
};

export const translations: Record<'light' | 'dark', TranslationSet> = {
  light: {
    home: {
      title: 'Welcome to Spectral Shift',
      paragraph: 'Explore the magic of image transformation! Upload your photos and watch them transform before your eyes. Toggle between light and dark modes to experience a delightful change in both visuals and tone.'
    },
    playground: {
      instructions: [
        'Upload an image using the button.',
        'Watch as Cloudinary\'s transformation magic takes effect!',
        'Toggle between light and dark modes to see how the ambiance shifts.',
        'Experiment with different images to discover unique transformations.',
        'Have fun and let your creativity shine!'
      ]
    },
    gallery: {
      photoMessages: [
        'Autumn\'s warm embrace',
        'A stroll through golden woods',
        'Fashion meets fall foliage',
        'Capturing summer\'s last laugh',
        'Elegance in the mis',
        'Culinary creativity blooms'
      ]
    }
  },
  dark: {
    home: {
      title: 'Enter the Realm of Shadows',
      paragraph: 'Dare to witness the dark metamorphosis of your images. Upload your mundane photos and watch as they\'re consumed by otherworldly transformations. Switch between realms of light and darkness... if you dare.'
    },
    playground: {
      instructions: [
        'Sacrifice an image to the void using the cursed button.',
        'Witness the unholy transmutation as Cloudinary\'s dark magic takes hold.',
        'Shift between the mortal realm and the abyss to experience true duality.',
        'Feed various images to the hungry shadows and observe their twisted fates.',
        'Embrace the darkness within your creations... or perish trying.'
      ]
    },
    gallery: {
      photoMessages: [
        'Nature\'s dying gasp',
        'Wandering through withered dreams',
        'Dressed for the reaper\'s ball',
        'The final grin before winter\'s grip',
        'Shrouded in ominous beauty',
        'Cooking up a nightmare'
      ]
    }
  }
};

export type TranslationKey = keyof TranslationSet;
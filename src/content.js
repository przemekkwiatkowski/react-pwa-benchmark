export const navigation = {
  home: [
    {
      name: 'benchmarks',
      path: '/',
    },
    {
      name: 'how to use',
      path: '/instructions',
    },
    {
      name: 'statistics',
      path: '/statistics',
    },
    {
      name: 'graphs',
      path: '/graphs',
    },
    {
      name: 'credits',
      path: '/credits',
    },
  ],
  benchmark: [
    {
      name: 'benchmark',
      path: '/',
    },
    {
      name: 'description',
      path: '/description',
    },
    {
      name: 'statistics',
      path: '/statistics',
    },
    {
      name: 'graphs',
      path: '/graphs',
    },
    {
      name: 'credits',
      path: '/credits',
    },
  ],
};

export const benchmarks = [
  {
    name: 'Camera',
    url: '/camera',
    id: 'camera',
    image: 'camera',
    instruction: [
      'Lorem ipsum dolor sit amet',
      'consectetur adipiscing elit',
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam',
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    samples: 100,
  },
  {
    name: 'Battery',
    url: '/battery',
    id: 'battery',
    image: 'battery',
    instruction: [
      'Lorem ipsum dolor sit amet',
      'consectetur adipiscing elit',
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam',
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    samples: 1,
  },
  {
    name: 'Rendering',
    url: '/rendering',
    id: 'rendering',
    image: 'rendering',
    instruction: [
      'Lorem ipsum dolor sit amet',
      'consectetur adipiscing elit',
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam',
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    samples: 1,
  },
  {
    name: 'Animations',
    url: '/animations',
    id: 'animations',
    image: 'animations',
    instruction: [
      'Lorem ipsum dolor sit amet',
      'consectetur adipiscing elit',
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam',
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    samples: 100,
  },
];

export const getBenchmarkData = matchId => benchmarks.filter(benchmark => benchmark.id === matchId);

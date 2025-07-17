import type { Config } from 'tailwindcss'

export default {
  theme: {
    extend: {
      backgroundImage: {
        'primary': 'linear-gradient(to right, #2563eb, #8b5cf6, #f59e42)',
      },
    },
    screens: {
      mobile: '450px',
      'tablet-md': '620px',
      tablet: '900px',
      'desktop-md': '1145px',
      'desktop-lg': '1250px',
      tripadvisor: '1340px',
    },
  },
  // ...other config
} satisfies Config


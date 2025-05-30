    module.exports = {
      content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}' // Ensure Flowbite components are scanned
      ],
      theme: {
        extend: {},
      },
      plugins: [
        require('flowbite/plugin')
      ],
    }
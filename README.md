# React + Vite
To download and setup configuration at first time
1. Make sure Node.js is installed on your system. Download it from https://nodejs.org and install the LTS version.
    To Check your device, open cmd:
    node -v
    npm -v
2. Run the following command to create a React project using Vite: link : https://vite.dev/guide/
   for ex : npm create vite@latest news-app -- --template react
4. Navigate to the Project Directory
   for ex : cd news-app
6. Install the required dependencies using
   for ex : npm install

Before run the app, make sure Tailwind installed
Link : https://tailwindcss.com/docs/guides/vite
1. Run the following command to install Tailwind CSS and its dependencies
   for ex : npm install -D tailwindcss postcss autoprefixer
2. Generate a tailwind.config.js file by running
   for ex : npx tailwindcss init
3. Configure the Content Path
   Open the tailwind.config.js file and set the content path to include your project files.
4. Add Tailwind Directives to CSS
   Create a CSS file (e.g., src/index.css) and add the Tailwind directives:
   For ex : @tailwind base;
            @tailwind components;
            @tailwind utilities;
5. Import CSS in Main File
   Import the CSS file in your main.jsx or main.tsx:



After That, the dependeced all installed, we can run the app : 
npm run dev




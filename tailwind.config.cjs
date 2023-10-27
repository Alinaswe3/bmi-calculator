/** @type {import('tailwindcss').Config}*/
const config = {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    theme: {
        screens: {
            tablet: {max: "62.5em"}
        },
        extend: {
            colors: {
                blue: "#345ff6",
                gunmetal: "#253347",
                "dark-electric-blue": "#5E6E85",
                borders: "d8e287"
            },
            fontSize: {
                "h-xl": "6.4rem",
                "h-lg": "4.8rem",
                "h-md": "2.4rem",
                "h-sm": "2rem",
                "b-sm": "1.4rem",
                "b-md": "1.6rem"
            },
            lineHeight: {
                "heading": "110%",
                "body": "150%"
            }
        },
    },

    plugins: [],
};

module.exports = config;

export default({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins, sans-serif"],
      },
      lineHeight: {
        lineHeight: 1.5,
      },
      colors: {
        theme: "#001B57",
        ptheme: "#646464",
        secColor:"#00FFB2"
      },
      boxShadow: {
        textShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0)",
      },
      backgroundImage: {
        logo: "url('/logo.png')",
        servicesBg:
          "linear-gradient(to right, #1293EC0D, #A976FD26, #1293EC0D)",
        bghero: "url('/herobg.png')",
        bgBlogDetail: "url('/Rectangle 11.png')",
        bgCatDetail: "url('/Rectangle 12.png')",
        bgellipse: "url('/Frame 68151.png')",
        bgEllipse2: "url('/Frame 68150.png')",
        bgEllipse3: "url('/Ellipse 3.png')",
        bgIqTest: "url('/Cover1.png')",
      },
    },
  },
  variants: {
    extend: {
      before: ['hover', 'focus'], // Add variants if needed
    },
  },
  plugins: [],
});
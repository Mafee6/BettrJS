const colorconsole = {
    package: { 
        name: "Color String",
        id: "bettr.included.colorconsole",
        type: "package",
        author: "Mafee",
        description: "C",
        options: {}
    },

    log: (colorstring) => {
        const parseColorString = (colorstring) => {
            return colorstring.match(/(?<=\[)(.*?)(?=\])/g)
                  .map(x => `[${x}]`).map(c => {
              return {
                color: c.match(/(?<=\[)(.*?)(?=\:)/g)[0],
                text: c.match(/(?<=\:)(.*?)(?=\])/g)[0]
              }
            });
          };

          let cs = `console.log('${parseColorString(colorstring).map(x => `%c${x.text}`).join("")}', ${parseColorString(colorstring).map(x => `'color: ${x.color}'`).join(", ")})`;
          eval(cs)
    }
}
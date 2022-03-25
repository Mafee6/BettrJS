let BettrInternal = {
    on: {
        load: null
    }
};

let Bettr = {
    config: null,
    load: (func) => BettrInternal.on.load = func,
    start: async () => {
        setTimeout(() => { 
        console.log("[!] BettrJS Is Starting");
        console.log(`[!] Fetching Bettr Config`);
        fetch(BettrConf)
            .then(async res => await res.json()).then(c => {
                Bettr.config = c;
                Bettr.config.packages.map(p => {
                    if(p.type == "local") {
                        const script = document.createElement("script");
                        script.src = `/Bettr.packages/${p.path}/package.js`;
                        script.defer = "";
                        document.body.appendChild(script);
                    }
                });

                console.log(`[!] Loaded Bettr Config (Packages: ${Bettr.config.packages.length})`);              
                console.log("[!] BettrJS Has Loaded.");
            }).catch(er => {
            })
        }, 1000);
    }
};
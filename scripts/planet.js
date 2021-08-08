Events.on(ClientLoadEvent, () => {
    const planet-h = new Planet("planet-h", Planets.sun, 1, 1);
    planet-h.generator = new SerpuloPlanetGenerator();
    planet-h.mesh = new HexMesh(routros, 5);
    planet-h.orbitRadius = 10;
    planet-h.orbitTime = 1.5 * 60;
    planet-h.rotateTime = 30;
    planet-h.bloom = true;
    planet-h.accessible = true;
    planet-h.startSector = 1;
    planet-h.hasAtmosphere = true;
    planet-h.atmosphereColor = Liquids.cryofluid.color;
    planet-h.atmosphereRadIn = 0.1;
    planet-h.atmosphereRadOut = 0.3;
    planet-h.alwaysUnlocked = true;
    planet-h.localizedName = "Planet h";

    for(var i = 0; i < 31; i++){
        var h = new SectorPreset("sector" + i, routros, i);
        h.localizedName = "sector" + i;
        h.alwaysUnlocked = false;
    };
});

const spix = extend(UnitType, "spix", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect("antdustry-spix-spinner", unit.x, unit.y, Time.time * 10);
                }
             });
spix.constructor = () => extend(UnitEntity, {})

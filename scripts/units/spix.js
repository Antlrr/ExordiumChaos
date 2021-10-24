const spix = extend(UnitType, "spix", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect("exordium-spix-spinner", unit.x, unit.y, Time.time * 10);
                }
             });
spix.constructor = () => extend(UnitEntity, {})

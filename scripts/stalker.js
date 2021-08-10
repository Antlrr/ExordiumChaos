const stalker = extend(UnitType, "stalker" , {
  health: Number.MAX_VALUE,
  armor: Number.MAX_VALUE,
  speed: 3,
  accel: 0.08,
  drag: 0.01,
  flying: true,
  drawCell: false,
  localizedName: "Stalker",
});
stalker.constructor = () => extend(UnitEntity, {});
stalker.defaultController = () => extend(DefenderAI, {});

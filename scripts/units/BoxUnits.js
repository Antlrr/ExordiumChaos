const statuses = require("libs/statuses")
const refresh = require("libs/refresh")

const box = extendContent(UnitType, "cardboard-box", {});
lathra.constructor = () => extend(UnitEntity, {
});
Events.on(ClientLoadEvent, b  => {
   box.immunities.add(statuses.boxedStatus);
   lathra.weapons.get(0).bullet.status = StatusEffects.invincible;
   lathra.weapons.get(0).bullet.statusDuration = 60;
});
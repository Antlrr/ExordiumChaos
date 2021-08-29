const statuses = require("libs/statuses")
const refresh = require("libs/refresh")

const box = extendContent(UnitType, "cardboard-box", {});
box.constructor = () => extend(MechUnit, {
});
const bigbox = extendContent(UnitType, "bigger-box", {});
bigbox.constructor = () => extend(MechUnit, {
});
Events.on(ClientLoadEvent, b  => {
   box.immunities.add(statuses.boxedStatus);
   box.weapons.get(0).bullet.status = statuses.boxedStatus;
   box.weapons.get(0).bullet.statusDuration = 150;
   bigbox.immunities.add(statuses.boxedStatus);
   bigbox.weapons.get(0).bullet.status = statuses.boxedStatus;
   bigbox.weapons.get(0).bullet.statusDuration = 180;
});
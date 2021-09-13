const statuses = require("libs/antstatuses")
const refresh = require("libs/antrefresh")

const box = extendContent(UnitType, "cardboard-box", {});
box.constructor = () => extend(MechUnit, {
});

const bigbox = extendContent(UnitType, "bigger-box", {});
bigbox.constructor = () => extend(MechUnit, {
});

Events.on(ClientLoadEvent, b  => {
   box.immunities.add(statuses.boxedStatus);
   box.weapons.get(0).bullet.statusDuration = 150;
   box.weapons.get(0).bullet.status = statuses.boxedStatus;
   bigbox.immunities.add(statuses.boxedStatus);
   bigbox.weapons.get(0).bullet.status = statuses.boxedStatus;
   bigbox.weapons.get(0).bullet.statusDuration = 180;
   bigbox.weapons.get(0).shootStatus = statuses.eeeeStatus;
   bigbox.weapons.get(0).shootStatusDuration = 180;
});
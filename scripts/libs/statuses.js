//referencing pixelcraft's format
//boxed status effect
const boxedStatus = extend(StatusEffect, "boxedStatus", {
    localizedName: "Boxed",
    speedMultiplier: 0,
    disarm: true,
    dragMultiplier: 4,
});

//eeee status effect
const eeeeStatus = extend(StatusEffect, "eeee", {
    localizedName: "EEEE",
    damage: 4,
    permanent: true,
});


//Note to self: ADD COMMA
module.exports = {
    boxedStatus: boxedStatus,
    eeee: eeee,
};
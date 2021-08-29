//referencing pixelcraft's format
//boxed status effect
const boxedStatus = extend(StatusEffect, "boxedStatus", {
    localizedName: "Boxed",
    speedMultiplier: 0,
    disarm: true,
    dragMultiplier: 4,
});

//Note to self: ADD COMMA
module.exports = {
    boxedStatus: boxedStatus,
};
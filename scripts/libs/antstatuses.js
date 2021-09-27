//referencing pixelcraft's format
//eeee status effect
const eeeeStatus = extend(StatusEffect, "eeeeStatus", {
    localizedName: "EEEE",
    damage: 2.5,
    permanent: true,
});


//Note to self: ADD COMMA
module.exports = {
    boxedStatus: boxedStatus,
    eeeeStatus: eeeeStatus,
};

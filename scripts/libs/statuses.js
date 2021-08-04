//boxed status effect

const boxed = extend(StatusEffect, "boxed", {
   isHidden(){
      return false
   },
   localizedName: "Boxed",
   speedMultiplier: 0,
   dragMultiplier: 0,
   disarm: true
});
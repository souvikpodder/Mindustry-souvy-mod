const builder = extendContent(UnitType, "builder", {});
/*T1 unit*/
builder.constructor = () => {
const unit = extend(PayloadUnit, {
})
return unit
}
builder.abilities.add(new ForceFieldAbility(30, 5, 100, 1200));


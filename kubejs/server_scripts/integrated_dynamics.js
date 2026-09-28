ServerEvents.recipes(event => {
    const id = (item) => `integrateddynamics:${item}`
    const itp = (item) => `integratedtunnels:part_${item}`
    const gt = (item) => `gtceu:${item}`
    // Energy parts are removed because RF is not used
    const idToRemove = [
        id("energy_battery"),
        id("cable"),
        id("coal_generator"),
        id("variable_transformer_input"),
        id("variable_transformer_output"),
        id("logic_programmer"),
        id("logic_director"),

        id("mechanical_squeezer"),
        id("mechanical_drying_basin"),
        
        itp("interface_energy"),
        itp("interface_item"),
        itp("interface_fluid"),
        
        itp("interface_filter_energy"),

        itp("importer_energy"),

        itp("exporter_energy")

    ]
    event.replaceInput({ mod: "integratedtunnels"}, 'minecraft:hopper', gt("item_filter"))

    idToRemove.forEach((item) => {
        event.remove({ output: item })
    })

    event.shaped(id("variable_transformer_input"), [
        " A ",
        "BCB",
        " A "
    ], {
        A: id("variable"),
        B: id("crystalized_menril_chunk"),
        C: gt("lv_conveyor_module")
    })
    event.shaped(id("variable_transformer_output"), [
        " A ",
        "BCB",
        " A "
    ], {
        A: id("crystalized_menril_chunk"),
        B: id("variable"),
        C: gt("lv_conveyor_module")
    })
    event.shapeless(id("variable_transformer_input"), [id("variable_transformer_output")])
    event.shapeless(id("variable_transformer_output"), [id("variable_transformer_input")])

    event.shaped(itp("interface_item"), [
        "ABA",
        "AAA"
    ], {
        A: id("crystalized_menril_chunk"),
        B: gt("mv_conveyor_module")
    })

    event.shaped(itp("interface_fluid"), [
        "ABA",
        "AAA"
    ], {
        A: id("crystalized_menril_chunk"),
        B: gt("mv_electric_pump")
    })

    event.shaped("8x " + id("cable"), [
        "AAA",
        "BCB",
        "AAA"
    ], {
        A: id("crystalized_menril_chunk"),
        B: "#forge:rods/aluminfrost",
        C: "minecraft:redstone"
    })

    event.shaped(id("logic_programmer"), [
        "ABA",
        "ACA",
        "ADA"
    ], {
        A: id("crystalized_menril_chunk"),
        B: gt("computer_monitor_cover"),
        C: gt("mv_machine_hull"),
        D: id("variable")
    })

    event.shaped(id("logic_director"), [
        "ABA",
        "ACA",
        "ABA"
    ], {
        A: id("crystalized_chorus_chunk"),
        B: id("crystalized_menril_chunk"),
        C: "#gtceu:circuits/hv",
    })
    // Integrated Dynamics Processing Recipes
    event.recipes.gtceu.centrifuge("id/menril_log")
        .itemInputs(id("menril_log"))
        .itemOutputs("3x " + id("crystalized_menril_chunk"))
        .outputFluids(Fluid.of(id("menril_resin"), 1000))
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.centrifuge("id/menril_planks")
        .itemInputs(id("menril_planks"))
        .itemOutputs(id("crystalized_menril_chunk"))
        .outputFluids(Fluid.of(id("menril_resin"), 250))
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.centrifuge("id/proto_chorus")
        .itemInputs(id("proto_chorus"))
        .itemOutputs(id("crystalized_chorus_chunk"))
        .outputFluids(Fluid.of(id("liquid_chorus"), 125))
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.centrifuge("id/popped_chorus_fruit")
        .itemInputs("minecraft:popped_chorus_fruit")
        .itemOutputs("3x " + id("crystalized_chorus_chunk"))
        .outputFluids(Fluid.of(id("liquid_chorus"), 125))
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.fluid_solidifier("id/menril_resin_block")
        .notConsumable(gt("block_casting_mold"))
        .inputFluids(Fluid.of(id("menril_resin"), 1000))
        .itemOutputs(id("crystalized_menril_block"))
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.fluid_solidifier("id/chorus_block")
        .notConsumable(gt("block_casting_mold"))
        .inputFluids(Fluid.of(id("liquid_chorus"), 1000))
        .itemOutputs(id("crystalized_chorus_block"))
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
})
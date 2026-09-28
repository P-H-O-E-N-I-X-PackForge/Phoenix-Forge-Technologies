ServerEvents.recipes(event => {
    // setup and utils

    const gt = (item) => `gtceu:${item}`
    
    function assemblerRecipe(event, id, inputs, outputs, dur, power) {
    const rec = event.recipes.gtceu.assembler(id)
        .duration(dur)
        .EUt(power);
    rec.itemInputs.apply(rec, inputs)
    rec.itemOutputs.apply(rec, outputs)
}

    // CC Tweaked Recipes
    const cc = (item) => `computercraft:${item}`
    const ap = (item) => `advancedperipherals:${item}`
    var ccToRemove = [
        cc("computer_normal"),
        cc("computer_advanced"),
        cc("turtle_normal"),
        cc("turtle_advanced"),
        cc("monitor_normal"),
        cc("monitor_advanced"),
        cc("wired_modem"),
        cc("wired_modem_full"),
        cc("wireless_modem_normal"),
        cc("wireless_modem_advanced"),
        cc("disk_drive"),
        cc("printer"),
        cc("speaker"),
        cc("pocket_computer_normal"),
        cc("pocket_computer_advanced"),
        cc("cable")
    ]
    ccToRemove.forEach((item) => {
        event.remove({ output: item })
    })

    event.recipes.shaped(cc("computer_normal"), [
        "AAA",
        "ABA",
        "ACA"
    ], {
        A: "#forge:plates/aurum_steel",
        B: gt("computer_monitor_cover"),
        C: "#gtceu:circuits/mv"
    })
    event.recipes.shaped(cc("computer_advanced"), [
        "AAA",
        "ABA",
        "ACA"
    ], {
        A: "#forge:plates/aluminfrost",
        B: gt("computer_monitor_cover"),
        C: "#gtceu:circuits/hv"
    })
    event.recipes.shaped("4x " + cc("monitor_normal"), [
        "AAA",
        "ABA",
        "AAA"
    ], {
        A: "#forge:plates/aurum_steel",
        B: gt("computer_monitor_cover")
    })
    event.recipes.shaped("4x " + cc("monitor_advanced"), [
        "AAA",
        "ABA",
        "AAA"
    ], {
        A: "#forge:plates/aluminfrost",
        B: gt("computer_monitor_cover")
    })
    event.recipes.shaped(cc("wired_modem"), [
        "CA",
        "A "
    ], {
        A: cc("cable"),
        C: gt("lv_machine_hull")
    })
    event.recipes.shapeless(cc("wired_modem_full"), [
        cc("wired_modem")
    ])
    assemblerRecipe(event, "assembler/cc/cable",
        [gt("copper_single_wire"), gt("polyethylene_plate")],
        ["4x " + cc("cable")],
        20,
        7
    )
    assemblerRecipe(event, "assembler/cc/monitor_advanced_upgrade",
        ["4x " + cc("monitor_normal"), "8x #forge:plates/aluminfrost"],
        ["4x " + cc("monitor_advanced")],
        100,
        30
    )  
    assemblerRecipe(event, "assembler/cc/turtle_normal", 
        [cc("computer_normal"), gt("lv_sensor")],
        ["1x " + cc("turtle_normal")], 
        100, 
        30
    )
    assemblerRecipe(event, "assembler/cc/turtle_advanced", 
        [cc("computer_advanced"), gt("lv_sensor")],
        ["1x " + cc("turtle_advanced")], 
        100, 
        30
    )
    assemblerRecipe(event, "assembler/cc/wireless_modem_normal", 
        [cc("wired_modem"), gt("mv_sensor"), gt("mv_emitter")],
        ["1x " + cc("wireless_modem_normal")], 
        100, 
        30
    )
    assemblerRecipe(event, "assembler/cc/wireless_modem_advanced", 
        [cc("wired_modem"), gt("hv_sensor"), gt("hv_emitter")],
        ["1x " + cc("wireless_modem_advanced")], 
        100, 
        30
    )
    assemblerRecipe(event, "assembler/cc/pocket_computer_normal", 
        [cc("computer_normal"), gt("mv_sensor"), gt("mv_emitter")],
        ["1x " + cc("pocket_computer_normal")], 
        100, 
        30
    )
    assemblerRecipe(event, "assembler/cc/pocket_computer_advanced", 
        [cc("computer_advanced"), gt("hv_sensor"), gt("hv_emitter")],
        ["1x " + cc("pocket_computer_advanced")], 
        100, 
        30
    )
    event.recipes.shaped(cc("disk_drive"), [
        "ABA",
        "ACA",
        "ABA"
    ], {
        A: "#forge:plates/aurum_steel",
        B: cc("cable"),
        C: gt("lv_machine_hull")
    })
    event.recipes.shaped(cc("speaker"), [
        "ABA",
        "ACA",
        "ADA"
    ], {
        A: "#forge:plates/aurum_steel",
        B: "minecraft:note_block",
        C: gt("lv_machine_hull"),
        D: cc("cable")
    })
    event.recipes.shaped(cc("printer"), [
        "ABA",
        "ACA",
        "ADA"
    ], {
        A: "#forge:plates/aurum_steel",
        B: "#forge:dyes",
        C: gt("lv_machine_hull"),
        D: cc("cable")
    })
    // Advanced Peripherals Recipes
    // ME and RS bridge are op and add infinite storage and coprocessors crafting and stuff and im just gonna remove them
    // most of ap is actually pretty op but ill do my best to balance it out with the rest of the modpack
    event.remove({ mod: "advancedperipherals" })
    assemblerRecipe(event, "assembler/ap/peripheral_casing",
        [gt("hv_machine_hull"), "16x " + cc("cable"), gt("hv_sensor"), gt("hv_emitter")],
        [ap("peripheral_casing")],
        100,
        120
    )
    assemblerRecipe(event, "assembler/ap/inventory_manager",
        [ap("peripheral_casing"), gt("hv_conveyor_module"), gt("hv_sensor"), gt("hv_emitter")],
        [ap("inventory_manager")],
        100,
        120
    )
    assemblerRecipe(event, "assembler/ap/energy_detector",
        [ap("peripheral_casing"), gt("energy_detector_cover")],
        [ap("energy_detector")],
        100,
        120
    )
    assemblerRecipe(event, "assembler/ap/environment_detector",
        [ap("peripheral_casing"), gt("portable_scanner")],
        [ap("environment_detector")],
        100,
        120
    )
    assemblerRecipe(event, "assembler/ap/chat_box",
        [ap("peripheral_casing"), cc("speaker")],
        [ap("chat_box")],
        100,
        120
    )
    assemblerRecipe(event, "assembler/ap/player_detector",
        [ap("peripheral_casing"), "minecraft:sculk_sensor"],
        [ap("player_detector")],
        100,
        120
    )
    assemblerRecipe(event, "assembler/ap/redstone_integrator",
        [ap("peripheral_casing"), gt("ender_redstone_link_cover")],
        [ap("redstone_integrator")],
        100,
        120
    )
    assemblerRecipe(event, "assembler/ap/geo_scanner",
        [ap("peripheral_casing"), gt("prospector.hv")],
        [ap("geo_scanner")],
        100,
        120
    )
    assemblerRecipe(event, "assembler/ap/block_reader/full",
        [ap("peripheral_casing"), cc("wired_modem_full")],
        [ap("block_reader")],
        100,
        120
    )
    assemblerRecipe(event, "assembler/ap/block_reader",
        [ap("peripheral_casing"), cc("wired_modem")],
        [ap("block_reader")],
        100,
        120
    )
    assemblerRecipe(event, "assembler/ap/nbt_storage",
        [ap("peripheral_casing"), cc("disk_drive")],
        [ap("nbt_storage")],
        100,
        120
    )
    event.shaped(ap("chunk_controller"), [
        "ABA",
        "BCB",
        "ABA"
    ],
    {
        A: "#forge:plates/source_embued_titanium",
        B: "minecraft:redstone",
        C: gt("quantum_eye")
    })
})
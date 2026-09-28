/**
Greenhouse recipes
 */

ServerEvents.recipes((event) => {
    const greg = event.recipes.gtceu;
    const trees = [
        ["minecraft:oak_sapling", "minecraft:oak_log"],
        ["minecraft:spruce_sapling", "minecraft:spruce_log"],
        ["minecraft:birch_sapling", "minecraft:birch_log"],
        ["minecraft:jungle_sapling", "minecraft:jungle_log"],
        ["minecraft:acacia_sapling", "minecraft:acacia_log"],
        ["minecraft:dark_oak_sapling", "minecraft:dark_oak_log"],
        ["minecraft:mangrove_propagule", "minecraft:mangrove_log"],
        ["minecraft:cherry_sapling", "minecraft:cherry_log"],
        ["forbidden_arcanus:aurum_sapling", "forbidden_arcanus:aurum_log"],
    ];
    const plants = [
        ["minecraft:pumpkin_seeds", "minecraft:pumpkin", 6],
        ["minecraft:beetroot_seeds", "minecraft:beetroot", 16],
        ["minecraft:sweet_berries", "minecraft:sweet_berries", 16],
        ["minecraft:glow_berries", "minecraft:glow_berries", 8],
        ["minecraft:wheat_seeds", "minecraft:wheat", 16],
        ["minecraft:melon_seeds", "minecraft:melon", 6],
        ["minecraft:carrot", "minecraft:carrot", 12],
        ["minecraft:sugar_cane", "minecraft:sugar_cane", 12],
        ["minecraft:kelp", "minecraft:kelp", 12],
        ["minecraft:cactus", "minecraft:cactus", 12],
        ["minecraft:brown_mushroom", "minecraft:brown_mushroom", 12],
        ["minecraft:red_mushroom", "minecraft:red_mushroom", 12],
        ["minecraft:nether_wart", "minecraft:nether_wart", 12],
        ["minecraft:bamboo", "minecraft:bamboo", 16],
        // Minecraft flowers
        ["minecraft:dandelion", "minecraft:dandelion", 12],
        ["minecraft:poppy", "minecraft:poppy", 12],
        ["minecraft:blue_orchid", "minecraft:blue_orchid", 12],
        ["minecraft:allium", "minecraft:allium", 12],
        ["minecraft:azure_bluet", "minecraft:azure_bluet", 12],
        ["minecraft:red_tulip", "minecraft:red_tulip", 12],
        ["minecraft:orange_tulip", "minecraft:orange_tulip", 12],
        ["minecraft:white_tulip", "minecraft:white_tulip", 12],
        ["minecraft:pink_tulip", "minecraft:pink_tulip", 12],
        ["minecraft:oxeye_daisy", "minecraft:oxeye_daisy", 12],
        ["minecraft:cornflower", "minecraft:cornflower", 12],
        ["minecraft:lily_of_the_valley", "minecraft:lily_of_the_valley", 12],
        ["minecraft:wither_rose", "minecraft:wither_rose", 12],
        // Tall flowers (output is 2 because they drop 2 on bonemeal)
        ["minecraft:sunflower", "minecraft:sunflower", 8],
        ["minecraft:lilac", "minecraft:lilac", 8],
        ["minecraft:rose_bush", "minecraft:rose_bush", 8],
        ["minecraft:peony", "minecraft:peony", 8],
    ];

    trees.forEach((woodType) => {
        greg
            .greenhouse(woodType[0])
            .notConsumable(woodType[0])
            .inputFluids("water 1000")
            .itemOutputs(`64x ${woodType[1]}`, `6x ${woodType[0]}`)
            .duration(600)
            .EUt(32)
            .circuit(1);

        greg
            .greenhouse(`${woodType[0]}_fertiliser`)
            .notConsumable(woodType[0])
            .itemInputs("4x gtceu:fertilizer")
            .inputFluids("water 1000")
            .itemOutputs(
                `64x ${woodType[1]}`,
                `64x ${woodType[1]}`,
                `12x ${woodType[0]}`
            )
            .duration(900)
            .EUt(40)
            .circuit(2);
    });

    plants.forEach((seedType) => {
        greg
            .greenhouse(seedType[0])
            .notConsumable(seedType[0])
            .inputFluids("water 1000")
            .itemOutputs(`${seedType[2]}x ${seedType[1]}`)
            .duration(600)
            .EUt(32)
            .circuit(1);
        greg
            .greenhouse(seedType[0] + "_fertilizer")
            .notConsumable(seedType[0])
            .itemInputs("4x gtceu:fertilizer")
            .inputFluids("water 1000")
            .itemOutputs(`${2 * seedType[2]}x ${seedType[1]}`)
            .duration(900)
            .EUt(32)
            .circuit(2);
    });
    greg
        .greenhouse("rubber_wood")
        .notConsumable("gtceu:rubber_sapling")
        .inputFluids("water 1000")
        .itemOutputs(
            "32x gtceu:rubber_log",
            "3x gtceu:rubber_sapling",
            "16x gtceu:sticky_resin"
        )
        .duration(800)
        .EUt(32)
        .circuit(1);
    greg
        .greenhouse("rubber_wood_fertiliser")
        .notConsumable("gtceu:rubber_sapling")
        .itemInputs("4x gtceu:fertilizer")
        .inputFluids("water 1000")
        .itemOutputs(
            "32x gtceu:rubber_log",
            "6x gtceu:rubber_sapling",
            "8x gtceu:sticky_resin"
        )
        .duration(900)
        .EUt(32)
        .circuit(2);
    greg
        .greenhouse("peanut")
        .notConsumable("pamhc2crops:peanutseeditem")
        .inputFluids("water 1000")
        .itemOutputs(
            "4x pamhc2crops:peanutitem",
        )
        .duration(500)
        .EUt(32)
        .circuit(1);
    greg
        .greenhouse("peanut_fertiliser")
        .notConsumable("pamhc2crops:peanutseeditem")
        .itemInputs("4x gtceu:fertilizer")
        .inputFluids("water 1000")
        .itemOutputs(
            "8x pamhc2crops:peanutitem",
        )
        .duration(650)
        .EUt(32)
        .circuit(2);
    greg
        .greenhouse("chorus")
        .notConsumable("minecraft:chorus_fruit")
        .inputFluids("water 1000")
        .itemOutputs(
            "4x minecraft:chorus_fruit",
        )
        .duration(300)
        .EUt(120)
        .circuit(1);
    greg
        .greenhouse("chorus_fert")
        .notConsumable("minecraft:chorus_fruit")
        .itemInputs("4x gtceu:fertilizer")
        .inputFluids("water 1000")
        .itemOutputs(
            "8x minecraft:chorus_fruit",
        )
        .duration(200)
        .EUt(120)
        .circuit(2);

    // new recipes

    greg
        .greenhouse("potato")
        .notConsumable("minecraft:potato")
        .inputFluids("water 1000")
        .itemOutputs(
            "16x minecraft:potato",
        )
        .duration(300)
        .EUt(120)
        .circuit(1);
    greg
        .greenhouse("potato_fert")
        .notConsumable("minecraft:potato")
        .itemInputs("4x gtceu:fertilizer")
        .inputFluids("water 1000")
        .itemOutputs(
            "32x minecraft:potato",
        )
        .duration(200)
        .EUt(120)
        .circuit(2);

    // Torchflower
    greg
        .greenhouse("torchflower")
        .notConsumable("minecraft:torchflower_seeds")
        .inputFluids("water 1000")
        .itemOutputs("4x minecraft:torchflower")
        .duration(300)
        .EUt(120)
        .circuit(1);

    greg
        .greenhouse("torchflower_fert")
        .notConsumable("minecraft:torchflower_seeds")
        .itemInputs("4x gtceu:fertilizer")
        .inputFluids("water 1000")
        .itemOutputs("8x minecraft:torchflower")
        .duration(200)
        .EUt(120)
        .circuit(2);

    // Blue Archwood
    greg
        .greenhouse("blue_archwood")
        .notConsumable("ars_nouveau:blue_archwood_sapling")
        .inputFluids("water 1000")
        .itemOutputs("16x ars_nouveau:blue_archwood_log")
        .duration(400)
        .EUt(120)
        .circuit(1);

    greg
        .greenhouse("blue_archwood_fert")
        .notConsumable("ars_nouveau:blue_archwood_sapling")
        .itemInputs("4x gtceu:fertilizer")
        .inputFluids("water 1000")
        .itemOutputs("32x ars_nouveau:blue_archwood_log")
        .duration(250)
        .EUt(120)
        .circuit(2);

// Purple Archwood
    greg
        .greenhouse("purple_archwood")
        .notConsumable("ars_nouveau:purple_archwood_sapling")
        .inputFluids("water 1000")
        .itemOutputs("16x ars_nouveau:purple_archwood_log")
        .duration(400)
        .EUt(120)
        .circuit(1);

    greg
        .greenhouse("purple_archwood_fert")
        .notConsumable("ars_nouveau:purple_archwood_sapling")
        .itemInputs("4x gtceu:fertilizer")
        .inputFluids("water 1000")
        .itemOutputs("32x ars_nouveau:purple_archwood_log")
        .duration(250)
        .EUt(120)
        .circuit(2);

// Green Archwood
    greg
        .greenhouse("green_archwood")
        .notConsumable("ars_nouveau:green_archwood_sapling")
        .inputFluids("water 1000")
        .itemOutputs("16x ars_nouveau:green_archwood_log")
        .duration(400)
        .EUt(120)
        .circuit(1);

    greg
        .greenhouse("green_archwood_fert")
        .notConsumable("ars_nouveau:green_archwood_sapling")
        .itemInputs("4x gtceu:fertilizer")
        .inputFluids("water 1000")
        .itemOutputs("32x ars_nouveau:green_archwood_log")
        .duration(250)
        .EUt(120)
        .circuit(2);

// Red Archwood
    greg
        .greenhouse("red_archwood")
        .notConsumable("ars_nouveau:red_archwood_sapling")
        .inputFluids("water 1000")
        .itemOutputs("16x ars_nouveau:red_archwood_log")
        .duration(400)
        .EUt(120)
        .circuit(1);

    greg
        .greenhouse("red_archwood_fert")
        .notConsumable("ars_nouveau:red_archwood_sapling")
        .itemInputs("4x gtceu:fertilizer")
        .inputFluids("water 1000")
        .itemOutputs("32x ars_nouveau:red_archwood_log")
        .duration(250)
        .EUt(120)
        .circuit(2);

    // Azalea
    greg
        .greenhouse("azalea")
        .notConsumable("minecraft:azalea")
        .inputFluids("water 1000")
        .itemOutputs("16x minecraft:oak_log", "8x minecraft:azalea_leaves")
        .duration(400)
        .EUt(120)
        .circuit(1);

    greg
        .greenhouse("azalea_fert")
        .notConsumable("minecraft:azalea")
        .itemInputs("4x gtceu:fertilizer")
        .inputFluids("water 1000")
        .itemOutputs("32x minecraft:oak_log", "16x minecraft:azalea_leaves")
        .duration(250)
        .EUt(120)
        .circuit(2);

// Flowering Azalea
    greg
        .greenhouse("flowering_azalea")
        .notConsumable("minecraft:flowering_azalea")
        .inputFluids("water 1000")
        .itemOutputs("16x minecraft:oak_log", "8x minecraft:flowering_azalea_leaves")
        .duration(400)
        .EUt(120)
        .circuit(1);

    greg
        .greenhouse("flowering_azalea_fert")
        .notConsumable("minecraft:flowering_azalea")
        .itemInputs("4x gtceu:fertilizer")
        .inputFluids("water 1000")
        .itemOutputs("32x minecraft:oak_log", "16x minecraft:flowering_azalea_leaves")
        .duration(250)
        .EUt(120)
        .circuit(2);

    // Menril
    greg
        .greenhouse("menril")
        .notConsumable("integrateddynamics:menril_sapling")
        .inputFluids("water 1000")
        .itemOutputs("16x integrateddynamics:menril_log")
        .duration(450)
        .EUt(120)
        .circuit(1);

    greg
        .greenhouse("menril_fert")
        .notConsumable("integrateddynamics:menril_sapling")
        .itemInputs("4x gtceu:fertilizer")
        .inputFluids("water 1000")
        .itemOutputs("32x integrateddynamics:menril_log")
        .duration(300)
        .EUt(120)
        .circuit(2);

    greg
        .greenhouse("chorus_flower")
        .notConsumable("minecraft:chorus_flower")
        .inputFluids("water 1000")
        .itemOutputs(
            "4x minecraft:chorus_flower",
        )
        .duration(300)
        .EUt(120)
        .circuit(1);
    greg
        .greenhouse("chorus_flower_fert")
        .notConsumable("minecraft:chorus_flower")
        .itemInputs("4x gtceu:fertilizer")
        .inputFluids("water 1000")
        .itemOutputs(
            "8x minecraft:chorus_flower",
        )
        .duration(200)
        .EUt(120)
        .circuit(2);
    greg
        .greenhouse("waterchestnut")
        .notConsumable("pamhc2crops:waterchestnutseeditem")
        .inputFluids("water 1000")
        .itemOutputs(
            "4x pamhc2crops:waterchestnutitem",
        )
        .duration(600)
        .EUt(32)
        .circuit(1);
    greg
        .greenhouse("waterchestnut_fertiliser")
        .notConsumable("pamhc2crops:waterchestnutseeditem")
        .inputFluids("water 1000")
        .itemOutputs(
            "8x pamhc2crops:waterchestnutitem",
        )
        .duration(900)
        .EUt(32)
        .circuit(2);
});

/**
 * IV and LuV Tier Recipes - Fully Optimized
 */
ServerEvents.recipes(event => {
    const greg = event.recipes.gtceu;

    // ===========================================
    // === Helper-Driven Recipes ===
    // ===========================================

    // --- Scanners ---
    [
        ["luv_confectionery_fabricator", "gtceu:iv_confectionery_fabricator", "1x_gtceu_iv_confectionery_fabricator"],
        ["melferious_matrix_research", "phoenixcore:simulated_colony", "1x_gtceu_simulated_colony"],
        ["advanced_cracker_research", "gtceu:cracker", "1x_gtceu_cracker"]
    ].forEach(([id, input, resId]) => {
        greg.scanner(id)
            .itemInputs(input, "gtceu:data_stick")
            .itemOutputs(Item.of("gtceu:data_stick", `{assembly_line_research:{research_id:"${resId}",research_type:"gtceu:assembly_line"}}`))
            .duration(2000).EUt(GTValues.VA[GTValues.IV]);
    });

    // --- Fuel Pellets ---
    [
        ["thorium", "9x gtceu:thorium_nugget", "phoenixcore:cryo_graphite_binding_solution 1000", GTValues.MV],
        ["uranium_235", "9x gtceu:uranium_235_nugget", "phoenixcore:cryo_zirconium_binding_solution 1000", GTValues.MV],
        ["uranium_233", "9x phoenixcore:uranium_233_nugget", "phoenixcore:cryo_zirconium_binding_solution 1000", GTValues.MV],
        ["plutonium_241", "9x gtceu:plutonium_241_nugget", "phoenixcore:cryo_zirconium_binding_solution 1000", GTValues.IV],
        ["uranium_236", "9x phoenixcore:uranium_236_nugget", "phoenixcore:cryo_graphite_binding_solution 1000", GTValues.IV]
    ].forEach(([id, inItem, inFluid, tier]) => {
        greg.large_chemical_reactor(`${id}_fuel_pellet_crafting`)
            .itemInputs(inItem).inputFluids(inFluid)
            .itemOutputs(`9x phoenixcore:${id.replace('uranium', 'u')}_fuel_pellet`)
            .duration(100).EUt(GTValues.VA[tier]);
    });

    // --- Essence Canisters (Mixer) ---
    const mixCanister = (id, base, items, fluids, duration) => {
        greg.mixer(id)
            .itemInputs(base, ...items.map(i => `32x ${i}`))
            .inputFluids(...fluids)
            .itemOutputs(`kubejs:${id}`)
            .duration(duration).EUt(GTValues.LV);
    };

    mixCanister("midway_hostile_mob_essence_canister", "kubejs:empty_hostile_mob_essence_canister",
        ["minecraft:rotten_flesh", "minecraft:bone", "minecraft:arrow", "minecraft:gunpowder", "minecraft:string"],
        ["gtceu:hydrofluoric_acid 250", "gtceu:polytetrafluoroethylene 144"], 100);

    mixCanister("full_hostile_mob_essence_canister", "kubejs:midway_hostile_mob_essence_canister",
        ["minecraft:spider_eye", "minecraft:slime_ball", "minecraft:ghast_tear", "minecraft:blaze_rod", "minecraft:wither_skeleton_skull"],
        ["gtceu:hydrofluoric_acid 250", "gtceu:polytetrafluoroethylene 144"], 200);

    mixCanister("midway_passive_mob_essence_canister", "kubejs:empty_passive_mob_essence_canister",
        ["minecraft:feather", "minecraft:leather", "minecraft:honey_bottle", "minecraft:milk_bucket"],
        ["phoenixcore:honey 250", "phoenixcore:cream 144"], 100);

    mixCanister("full_passive_mob_essence_canister", "kubejs:midway_passive_mob_essence_canister",
        ["minecraft:bone_meal", "minecraft:white_wool", "minecraft:egg", "minecraft:rabbit_hide"],
        ["phoenixcore:honey 250", "phoenixcore:cream 144"], 200);

    mixCanister("midway_neutral_mob_essence_canister", "kubejs:empty_neutral_mob_essence_canister",
        ["minecraft:slime_ball", "minecraft:ender_pearl", "minecraft:spider_eye", "minecraft:ink_sac"],
        ["phoenixcore:resonant_ender 144", "gtceu:liquid_ender_air 100"], 100);

    mixCanister("full_neutral_mob_essence_canister", "kubejs:midway_neutral_mob_essence_canister",
        ["minecraft:iron_ingot", "minecraft:sugar", "minecraft:glowstone_dust", "minecraft:emerald"],
        ["phoenixcore:resonant_ender 144", "gtceu:liquid_ender_air 100"], 200);

    // --- Empty Essence Canisters (Assembler) ---
    const assembleCanister = (type, items, fluids) => {
        greg.assembler(`empty_${type}_mob_essence_canister`)
            .itemInputs(
                "2x phoenixcore:dense_source_imbued_titanium_plate",
                "16x phoenixcore:source_titanium_filament_double_wire",
                "16x phoenixcore:superconductive_honey_double_wire",
                "16x phoenixcore:extremely_modified_space_grade_steel_double_wire",
                ...items
            )
            .inputFluids(...fluids)
            .itemOutputs(`kubejs:empty_${type}_mob_essence_canister`)
            .duration(300).EUt(GTValues.VA[GTValues.IV]);
    };

    assembleCanister("hostile", ["gtceu:quantum_star", "gtceu:active_transformer"], ["phoenixcore:void_touched_tungsten_steel 288", "phoenixcore:honey 500"]);
    assembleCanister("passive", ["minecraft:golden_apple", "minecraft:bee_nest"], ["phoenixcore:honey 1000", "phoenixcore:cream 288"]);
    assembleCanister("neutral", ["minecraft:ender_pearl", "phoenixcore:swarm_nurturer"], ["phoenixcore:resonant_ender 288", "gtceu:liquid_ender_air 200"]);

    // --- Iterated Components (Rods, Blankets, Coolers) ---
    [
        { id: 't1_fuel_rod', tier: 'hv', input: 'gtceu:uranium_dust', plate: 'phoenixcore:frost_reinforced_stained_steel', volt: 480 },
        { id: 't2_fuel_rod', tier: 'ev', input: 'gtceu:uranium_dust', plate: 'phoenixcore:source_imbued_titanium', volt: 1920 },
        { id: 't3_fuel_rod', tier: 'iv', input: 'phoenixcore:u235_fuel_pellet', plate: 'phoenixcore:source_imbued_titanium', volt: 7680 },
        { id: 't4_fuel_rod', tier: 'luv', input: 'phoenixcore:plutonium_241_fuel_pellet', plate: 'phoenixcore:resonant_rhodium_alloy', volt: 30720 },
        { id: 't5_fuel_rod', tier: 'zpm', input: 'phoenixcore:u236_fuel_pellet', plate: 'phoenixcore:advanced_quin_naquadian_alloy', volt: 122880 }
    ].forEach(f => {
        greg.assembler(f.id)
            .itemInputs(`gtceu:${f.tier}_machine_casing`, `4x ${f.plate}_plate`, f.input)
            .itemOutputs(`phoenixcore:${f.id}`)
            .duration(200).EUt(f.volt);
    });

    [
        ['thorium', 'hv', '2x gtceu:lead_plate', 'phoenixcore:thorium_fuel_pellet', 480, 400],
        ['uranium', 'ev', '2x phoenixcore:source_imbued_titanium_plate', 'phoenixcore:u236_fuel_pellet', 1920, 400],
        ['neptunium', 'iv', 'phoenixcore:frost_reinforced_stained_steel_plate', 'gtceu:lead_dust', 7680, 400],
        ['plutonium', 'luv', '2x phoenixcore:resonant_rhodium_alloy_plate', 'gtceu:uranium_dust', 30720, 600],
        ['americium', 'zpm', '2x phoenixcore:advanced_quin_naquadian_alloy_plate', 'phoenixcore:u236_fuel_pellet', 122880, 800]
    ].forEach(([type, tier, plate, input, volt, time]) => {
        greg.assembler(`${type}_blanket`)
            .itemInputs(`gtceu:${tier}_machine_casing`, plate, input)
            .itemOutputs(`phoenixcore:${type}_blanket`)
            .duration(time).EUt(volt);
    });

    [
        { id: 'cooler_basic', tier: 'hv', mat: 'gtceu:tin', volt: 480 },
        { id: 'cooler_ev', tier: 'ev', mat: 'phoenixcore:source_imbued_titanium', volt: 1920 },
        { id: 'cooler_iv', tier: 'iv', mat: 'phoenixcore:dense_source_imbued_titanium', volt: 7680 },
        { id: 'cooler_luv', tier: 'luv', mat: 'phoenixcore:resonant_rhodium_alloy', volt: 30720 }
    ].forEach(c => {
        greg.assembler(c.id)
            .itemInputs(`gtceu:${c.tier}_machine_casing`, `4x ${c.mat}_plate`, '4x gtceu:copper_single_wire')
            .itemOutputs(`phoenixcore:${c.id}`)
            .duration(150).EUt(c.volt);
    });

    // ===========================================
    // === Assembly Line Recipes ===
    // ===========================================

    greg.assembly_line("melferious_matrix")
        .itemInputs(
            "8x gtceu:sturdy_machine_casing", "16x phoenixcore:resonant_rhodium_alloy_plate",
            "64x phoenixcore:honey_treat", "4x kubejs:conductive_honey_coil",
            "1x phoenixcore:extremely_modified_space_grade_steel_quadruple_wire", 
            "4x phoenixcore:void_touched_tungsten_steel_rotor", "2x phoenixcore:simulated_colony"
        )
        .inputFluids("phoenixcore:honey 24000", "gtceu:soldering_alloy 4000")
        .itemOutputs("phoenixcore:melliferious_matrix")
        .stationResearch(b => b.researchStack("phoenixcore:simulated_colony").EUt(131000).CWUt(1, 1).dataStack("gtceu:data_stick"))
        .EUt(GTValues.VA[GTValues.LuV]).duration(1000);

    greg.assembly_line("advanced_cracker")
        .itemInputs(
            "16x gtceu:hssg_coil_block", "4x #gtceu:circuits/luv",
            "gtceu:luv_machine_hull", "4x gtceu:luv_electric_pump",
            "8x gtceu:luv_emitter", "16x phoenixcore:resonant_rhodium_alloy_gear"
        )
        .inputFluids("gtceu:soldering_alloy 4000", "gtceu:vanadium_gallium 1000", "gtceu:hssg 2880")
        .itemOutputs("phoenixcore:advanced_cracking_unit")
        .stationResearch(b => b.researchStack("gtceu:cracker").EUt(131000).CWUt(1, 1).dataStack("gtceu:data_stick"))
        .EUt(GTValues.VA[GTValues.LuV]).duration(900);

    greg.assembly_line("luv_confectionery_fabricator")
        .itemInputs(
            "4x phoenixcore:resonant_rhodium_alloy_rotor", "4x phoenixcore:honey_treat", 
            "2x #gtceu:circuits/luv", "gtceu:luv_machine_hull", "1x gtceu:luv_sensor"
        )
        .itemOutputs("gtceu:luv_confectionery_fabricator")
        .inputFluids("phoenixcore:honey 1700", "gtceu:soldering_alloy 4000")
        .stationResearch(b => b.researchStack("gtceu:iv_confectionery_fabricator").EUt(131000).CWUt(1, 1).dataStack("gtceu:data_stick"))
        .EUt(GTValues.VA[GTValues.LuV]).duration(600);

    greg.assembly_line("zpm_confectionery_fabricator")
        .itemInputs(
            "4x phoenixcore:advanced_quin_naquadian_alloy_rotor", "16x phoenixcore:honey_treat", 
            "2x #gtceu:circuits/zpm", "gtceu:zpm_machine_hull", "1x gtceu:zpm_sensor"
        )
        .itemOutputs("gtceu:zpm_confectionery_fabricator")
        .inputFluids("phoenixcore:honey 1700", "gtceu:soldering_alloy 2500")
        .stationResearch(b => b.researchStack("gtceu:luv_confectionery_fabricator").EUt(131000).CWUt(1, 1))
        .EUt(GTValues.VA[GTValues.ZPM]).duration(600);

    // ===========================================
    // === Chemical Processes & Derivatives ===
    // ===========================================

    greg.large_chemical_reactor("oleum").inputFluids("gtceu:sulfur_trioxide 244", "gtceu:sulfuric_acid 1000").outputFluids("phoenixcore:oleum 1000").duration(134).EUt(GTValues.VA[GTValues.IV] / 2);
    greg.large_chemical_reactor("concentrated_sulfuric_acid").inputFluids("phoenixcore:oleum 300", "minecraft:water 700").outputFluids("phoenixcore:concentrated_sulfuric_acid 800").duration(80).EUt(GTValues.VA[GTValues.EV] / 2);
    greg.electrolyzer("concentrated_sulfuric_acid_to_hydrogen_peroxide").inputFluids("phoenixcore:concentrated_sulfuric_acid 1000").outputFluids("gtceu:hydrogen_peroxide 100", "minecraft:water 300", "gtceu:sulfuric_acid 500").duration(550).EUt(GTValues.VA[GTValues.IV] / 2);
    greg.large_chemical_reactor("acetone_cyanohydrin").inputFluids("gtceu:acetone 1000", "gtceu:hydrogen_cyanide 1000").outputFluids("phoenixcore:acetone_cyanohydrin 1000").duration(200).EUt(GTValues.VA[GTValues.EV] / 2);
    greg.large_chemical_reactor("methyl_methacrylate").inputFluids("phoenixcore:acetone_cyanohydrin 1000", "gtceu:sulfuric_acid 1000", "gtceu:methanol 750").outputFluids("phoenixcore:methyl_methacrylate 1000", "phoenixcore:ammonium_bisulfate_solution 1000").duration(300).EUt(GTValues.VA[GTValues.IV] / 2);
    greg.distillation_tower("ammonium_bisulfate_solution_to_dust").inputFluids("phoenixcore:ammonium_bisulfate_solution 1000").outputFluids("gtceu:sulfuric_acid 500", "minecraft:water 600", "gtceu:ammonia 120").itemOutputs("12x phoenixcore:ammonium_bisulfate_dust").duration(240).EUt(GTValues.VA[GTValues.EV] / 2);
    greg.electrolyzer("ammonium_bisulfate_dust_to_ammonium_persulfate").itemInputs("7x phoenixcore:ammonium_bisulfate_dust").outputFluids("gtceu:hydrogen 1000", "phoenixcore:ammonium_persulfate 250").duration(130).EUt(GTValues.VA[GTValues.IV] / 2);
    greg.large_chemical_reactor("ammonium_bisulfate_solution").inputFluids("gtceu:sulfuric_acid 200", "gtceu:ammonia 750").outputFluids("phoenixcore:ammonium_bisulfate_solution 250").duration(60).EUt(GTValues.VA[GTValues.IV] / 2);
    greg.large_chemical_reactor("advanced_pmma_polymerization").inputFluids("phoenixcore:methyl_methacrylate 144", "phoenixcore:ammonium_persulfate 750", "gtceu:hydrogen_peroxide 250").outputFluids("phoenixcore:polymethyl_methacrylate 216").duration(800).EUt(GTValues.VA[GTValues.IV] / 2);

    // ===========================================
    // === Metallurgy & Smelting ===
    // ===========================================

    greg.alloy_blast_smelter("liquid_void_touched_tungsten_steel")
        .itemInputs("4x gtceu:tungsten_dust", "4x phoenixcore:voidglass_shard_dust", "2x gtceu:molybdenum_dust")
        .circuit(5).inputFluids("gtceu:liquid_ender_air 100").outputFluids("phoenixcore:molten_void_touched_tungsten_steel 1152").duration(6000).blastFurnaceTemp(3600).EUt(GTValues.VA[GTValues.EV]);

    greg.alloy_blast_smelter("liquid_void_touched_tungsten_steel_boosted")
        .itemInputs("4x gtceu:tungsten_dust", "4x phoenixcore:voidglass_shard_dust", "2x gtceu:molybdenum_dust")
        .circuit(15).inputFluids("gtceu:liquid_ender_air 100", "gtceu:helium 100").outputFluids("phoenixcore:molten_void_touched_tungsten_steel 1152").duration(4200).blastFurnaceTemp(3600).EUt(GTValues.VA[GTValues.EV]);

    greg.mixer("extremely_modified_space_grade_steel")
        .itemInputs("4x phoenixcore:source_imbued_titanium_dust", "2x gtceu:ruthenium_dust", "4x phoenixcore:space_grade_steel_dust", "32x minecraft:tnt")
        .inputFluids("gtceu:radon 250").itemOutputs("8x phoenixcore:extremely_modified_space_grade_steel_dust").duration(400).EUt(GTValues.VA[GTValues.LuV]);

    greg.alloy_blast_smelter("molten_extremely_modified_space_grade_steel")
        .itemInputs("4x phoenixcore:source_imbued_titanium_dust", "2x gtceu:ruthenium_dust", "4x phoenixcore:space_grade_steel_dust", "32x minecraft:tnt")
        .circuit(5).inputFluids("gtceu:radon 250").outputFluids("phoenixcore:molten_extremely_modified_space_grade_steel 1152").duration(4800).blastFurnaceTemp(3400).EUt(GTValues.VA[GTValues.LuV]);

    greg.alloy_blast_smelter("molten_extremely_modified_space_grade_steel_boosted")
        .itemInputs("4x phoenixcore:source_imbued_titanium_dust", "2x gtceu:ruthenium_dust", "4x phoenixcore:space_grade_steel_dust", "32x minecraft:tnt")
        .circuit(15).inputFluids("gtceu:radon 250", "gtceu:helium 1000").outputFluids("phoenixcore:molten_extremely_modified_space_grade_steel 1440").duration(3600).blastFurnaceTemp(3600).EUt(GTValues.VA[GTValues.LuV]);

    greg.mixer("resonant_rhodium_alloy")
        .itemInputs("3x gtceu:rhodium_dust", "4x gtceu:palladium_dust", "2x phoenixcore:polarity_flipped_bismuthite_dust", "4x gtceu:cerium_dust")
        .inputFluids("phoenixcore:resonant_ender 144").itemOutputs("13x phoenixcore:resonant_rhodium_alloy_dust").duration(360).circuit(4).EUt(GTValues.VA[GTValues.IV]);

    greg.alloy_blast_smelter("molten_resonant_rhodium_alloy_gas")
        .itemInputs("3x gtceu:rhodium_dust", "4x gtceu:palladium_dust", "2x phoenixcore:polarity_flipped_bismuthite_dust", "4x gtceu:cerium_dust")
        .circuit(15).inputFluids("phoenixcore:resonant_ender 1144", "gtceu:argon 100").outputFluids("phoenixcore:molten_resonant_rhodium_alloy 2016").duration(3800).blastFurnaceTemp(3600).EUt(GTValues.VA[GTValues.EV]);

    greg.alloy_blast_smelter("molten_resonant_rhodium_alloy")
        .itemInputs("3x gtceu:rhodium_dust", "4x gtceu:palladium_dust", "2x phoenixcore:polarity_flipped_bismuthite_dust", "4x gtceu:cerium_dust")
        .circuit(5).inputFluids("phoenixcore:resonant_ender 1144").outputFluids("phoenixcore:molten_resonant_rhodium_alloy 2016").duration(5400).blastFurnaceTemp(3600).EUt(GTValues.VA[GTValues.EV]);

    greg.large_chemical_reactor("advanced_quin_naquadian_alloy_synthesis")
        .itemInputs("2x gtceu:naquadah_alloy_dust", "1x phoenixcore:exotic_fissile_materials_clump_dust", "1x phoenixcore:nevvonian_iron_dust")
        .inputFluids("phoenixcore:critical_steam 500").itemOutputs("5x phoenixcore:advanced_quin_naquadian_alloy_dust").duration(200).EUt(GTValues.VA[GTValues.LuV]);

    // ===========================================
    // === Honey, Food, & Organic Chemistry ===
    // ===========================================

    greg.mixer("melting_catalyst").itemInputs("2x gtceu:carbon_dust", "1x minecraft:glowstone_dust").circuit(4).inputFluids("minecraft:water 2500", "gtceu:naphtha 250").outputFluids("phoenixcore:wax_melting_catalyst 2500").duration(100).EUt(GTValues.VA[GTValues.EV] / 2);
    greg.mixer("permafrost").itemInputs("minecraft:packed_ice", "minecraft:blue_ice", "minecraft:ice").itemOutputs("14x phoenixcore:permafrost_dust").duration(100).EUt(GTValues.VA[GTValues.LV]);
    greg.mixer("dormant_ember").itemInputs("minecraft:coal", "minecraft:coal_block", "phoenixcore:small_dormant_ember_dust").inputFluids("gtceu:distilled_water 1000").itemOutputs("16x phoenixcore:dormant_ember_dust").duration(350).EUt(GTValues.VA[GTValues.EV]);
    greg.mixer("honey_comb_base_mixture").inputFluids("phoenixcore:honey 500", "phoenixcore:polymethyl_methacrylate 244").itemInputs("phoenixcore:source_imbued_titanium_dust", "gtceu:niobium_dust").outputFluids("phoenixcore:honey_comb_base_mixture 250").duration(60).EUt(GTValues.VA[GTValues.IV] / 2);
    greg.fluid_solidifier("honey_comb_base").inputFluids("phoenixcore:honey_comb_base_mixture 1008").notConsumable("phoenixcore:honey_comb_base_mold").itemOutputs("phoenixcore:honey_comb_base").duration(2000).EUt(GTValues.VA[GTValues.HV] / 2);
    greg.compressor("honey_comb_bases_solid").notConsumable("12x phoenixcore:dense_void_touched_tungsten_steel_plate").itemOutputs("phoenixcore:honey_comb_base_mold").duration(2000).EUt(GTValues.VA[GTValues.IV] / 2);
    greg.large_chemical_reactor("superconductive_honey_creation").itemInputs("8x phoenixcore:honey_dust", "4x gtceu:niobium_titanium_dust", "2x gtceu:iridium_dust").inputFluids("gtceu:helium 500", "phoenixcore:cryo_ember_fluid 100").itemOutputs("12x phoenixcore:superconductive_honey_dust").duration(300).EUt(GTValues.VA[GTValues.EV]);
    greg.implosion_compressor("superconductive_honey_ingot_normal").itemInputs("1x phoenixcore:superconductive_honey_dust", "16x minecraft:tnt").itemOutputs("1x phoenixcore:superconductive_honey_ingot").duration(450).EUt(GTValues.VA[GTValues.EV]);
    greg.implosion_compressor("superconductive_honey_ingot_itnt").itemInputs("1x phoenixcore:superconductive_honey_dust", "4x gtceu:industrial_tnt").itemOutputs("1x phoenixcore:superconductive_honey_ingot").duration(350).EUt(GTValues.VA[GTValues.EV]);
    
    greg.assembler("superconductive_honey_coil_block")
        .itemInputs("8x phoenixcore:superconductive_honey_double_wire", "8x gtceu:hsss_foil")
        .inputFluids("phoenixcore:void_touched_tungsten_steel 144").itemOutputs("kubejs:conductive_honey_coil").duration(750).EUt(GTValues.VA[GTValues.IV]);

    greg.large_chemical_reactor("sugar_to_sucrose_enhanced").itemInputs("8x minecraft:sugar", "1x minecraft:glowstone_dust").circuit(1).inputFluids("minecraft:water 500").outputFluids("phoenixcore:sucrose 1200").chancedOutput("1x minecraft:glowstone_dust", 8500, 0).duration(1200).EUt(GTValues.VA[GTValues.EV] / 2);
    greg.large_chemical_reactor("sucrose_inversion").inputFluids("phoenixcore:sucrose", "gtceu:distilled_water 500", "gtceu:sulfuric_acid 10").circuit(4).outputFluids("phoenixcore:invert_sugar_solution 1000").duration(1200).EUt(GTValues.VA[GTValues.EV] / 2);
    greg.large_chemical_reactor("protein_solution_from_mince_meat").itemInputs("32x gtceu:meat_dust").circuit(12).inputFluids("gtceu:acetic_acid 1008").outputFluids("phoenixcore:protein_solution 1000").duration(900).EUt(GTValues.VA[GTValues.IV] / 2);
    greg.extractor("resonant_ender").itemInputs("1x minecraft:ender_pearl").outputFluids("phoenixcore:resonant_ender 250").duration(300).EUt(GTValues.VA[GTValues.HV] / 2);
    greg.large_chemical_reactor("amino_acids_from_protein_solution").inputFluids("phoenixcore:protein_solution 1500", "gtceu:hydrofluoric_acid 250").circuit(2).itemInputs("16x gtceu:activated_carbon_dust").outputFluids("phoenixcore:amino_acids 1000").duration(950).EUt(GTValues.VA[GTValues.IV] / 2);
    greg.large_chemical_reactor("pollen_concentrate_fluid_from_flowers").inputFluids("gtceu:ethanol 2000").circuit(4).itemInputs("4x #minecraft:flowers").outputFluids("phoenixcore:pollen_concentrate_fluid 900").duration(850).EUt(GTValues.VA[GTValues.IV]);
    greg.large_chemical_reactor("pollen_concentrate_fluid_from_plant_balls").inputFluids("gtceu:ethanol 2000").circuit(4).itemInputs("1x gtceu:plant_ball").outputFluids("phoenixcore:pollen_concentrate_fluid 750").duration(825).EUt(GTValues.VA[GTValues.IV] / 2);
    greg.large_chemical_reactor("honey_catalyst").inputFluids("phoenixcore:amino_acids 4500", "minecraft:water 32000", "gtceu:sodium_potassium 1700").circuit(24).itemInputs("6x gtceu:magnesium_dust", "12x gtceu:calcium_dust").outputFluids("phoenixcore:honey_catalyst 750").duration(650).EUt(GTValues.VA[GTValues.IV]);
    greg.large_chemical_reactor("honey").inputFluids("phoenixcore:honey_catalyst 3000", "phoenixcore:invert_sugar_solution 5000", "phoenixcore:pollen_concentrate_fluid 8500").circuit(24).outputFluids("phoenixcore:honey 1500").duration(1600).EUt(GTValues.VA[GTValues.IV]);
    greg.assembler("honeycomb_assembly").inputFluids("phoenixcore:honey 588", "phoenixcore:invert_sugar_solution 144").notConsumable("phoenixcore:honey_comb_base").itemOutputs("minecraft:honeycomb").duration(700).EUt(GTValues.VA[GTValues.IV] / 2);
    greg.distillation_tower("invert_sugar_solution_separation").inputFluids("phoenixcore:invert_sugar_solution 1000").outputFluids("phoenixcore:glucose 500", "phoenixcore:fructose 500").duration(580).EUt(GTValues.VA[GTValues.IV] / 2);
    greg.large_chemical_reactor("sugar_water").inputFluids("phoenixcore:glucose 250", "phoenixcore:fructose 250", "gtceu:distilled_water 1000").outputFluids("phoenixcore:sugar_water 15000").duration(480).EUt(GTValues.VA[GTValues.HV] / 2);
    greg.chemical_reactor("sugar_and_molasses_production").inputFluids("phoenixcore:sugar_water 1000").itemOutputs("64x minecraft:sugar").outputFluids("phoenixcore:molasses 200").duration(680).EUt(GTValues.VA[GTValues.HV]);
    greg.centrifuge("cream_from_milk").inputFluids("minecraft:milk 1000").outputFluids("phoenixcore:cream 250", "phoenixcore:skim_milk 750").duration(600).EUt(GTValues.VA[GTValues.LV]);
    greg.mixer("dough").inputFluids("phoenixcore:skim_milk 144", "minecraft:water 500").itemInputs("8x gtceu:wheat_dust", "gtceu:salt_dust", "minecraft:sugar").itemOutputs("10x gtceu:dough").duration(300).EUt(GTValues.VA[GTValues.LV]);

    greg.confectionery_fabricator("honeytreat")
        .itemInputs("5x gtceu:dough", "2x minecraft:honeycomb")
        .inputFluids("phoenixcore:honey 15000", "phoenixcore:molasses 2500", "phoenixcore:cream 8000", "phoenixcore:pollen_concentrate_fluid 6500", "phoenixcore:peanut_butter 12250")
        .itemOutputs("32x phoenixcore:honey_treat").duration(650).EUt(GTValues.VA[GTValues.IV]);

    greg.macerator("peanut_dust").itemInputs("pamhc2crops:roastedpeanutitem").itemOutputs("phoenixcore:peanut_dust").duration(40).EUt(GTValues.VA[GTValues.LV]);
    greg.mixer("nut_butter_from_dust").itemInputs("8x phoenixcore:peanut_dust", "2x minecraft:sugar").inputFluids("minecraft:water 500", "gtceu:seed_oil 250").outputFluids("phoenixcore:peanut_butter 500").duration(200).EUt(GTValues.VA[GTValues.EV]);
    greg.fluid_solidifier("solidified_honey").inputFluids("phoenixcore:honey 144").notConsumable("gtceu:ingot_casting_mold").itemOutputs("phoenixcore:honey_ingot").duration(200).EUt(GTValues.VA[GTValues.HV]);

    // ===========================================
    // === Nuclear & Fission Processing ===
    // ===========================================

    greg.mixer("cryo_zirconium_binding_solution").inputFluids("phoenixcore:frost 288", "minecraft:water 2000").itemInputs("2x phoenixcore:crystallized_fluxstone_dust", "1x gtceu:zirconium_dust").outputFluids("phoenixcore:cryo_zirconium_binding_solution 2000").duration(150).EUt(GTValues.VA[GTValues.EV]);
    greg.mixer("cryo_graphite_binding_solution").inputFluids("phoenixcore:frost 288", "minecraft:water 2000").itemInputs("2x phoenixcore:crystallized_fluxstone_dust", "1x gtceu:graphite_dust").outputFluids("phoenixcore:cryo_graphite_binding_solution 3000").duration(175).EUt(GTValues.VA[GTValues.EV]);

    greg.large_chemical_reactor("reprocessing/irradiated_uranium_236_nuggets").itemInputs("16x phoenixcore:irradiated_uranium_236_nugget").inputFluids("gtceu:nitric_acid 1000").itemOutputs("10x phoenixcore:spent_uranium_236_dust", "8x phoenixcore:plutonium_fission_ash_dust").duration(300).EUt(GTValues.VA[GTValues.IV]);
    greg.large_chemical_reactor("reprocessing/depleted_plutonium_241_nuggets").itemInputs("4x phoenixcore:depleted_plutonium_241_nugget").inputFluids("gtceu:nitric_acid 500").itemOutputs("2x gtceu:plutonium_241_dust", "1x phoenixcore:americium_241_dust").duration(200).EUt(GTValues.VA[GTValues.IV]);
    greg.large_chemical_reactor("americium_hexafluoride_production").itemInputs("8x phoenixcore:americium_241_dust").inputFluids("gtceu:fluorine 600").outputFluids("phoenixcore:americium_hexafluoride 1000").duration(300).EUt(GTValues.VA[GTValues.IV]);
    greg.large_chemical_reactor("spent_uranium_reprocessing").itemInputs("4x phoenixcore:depleted_uranium_dust").inputFluids("gtceu:nitric_acid 1500").itemOutputs("2x phoenixcore:uranium_236_dust", "1x gtceu:strontium_dust", "1x gtceu:caesium_dust").outputFluids("phoenixcore:fission_products_fluid 500", "phoenixcore:radioactive_gas_mixture 100").duration(120).EUt(GTValues.VA[GTValues.IV]);
    greg.large_chemical_reactor("reprocessing/thorium_rods_to_uranium_233").itemInputs("16x phoenixcore:irradiated_thorium_nugget").inputFluids("gtceu:nitric_acid 500").itemOutputs("4x phoenixcore:uranium_233_dust", "12x phoenixcore:depleted_thorium_dust").outputFluids("phoenixcore:fission_products_fluid 250").duration(600).EUt(GTValues.VA[GTValues.EV]);
    greg.large_chemical_reactor("reprocessing/spent_uranium_235_rods").itemInputs("16x phoenixcore:spent_uranium_235_nugget").inputFluids("gtceu:nitric_acid 200").itemOutputs("10x phoenixcore:depleted_uranium_dust", "6x gtceu:uranium_235_dust").outputFluids("phoenixcore:fission_products_fluid 100").duration(400).EUt(GTValues.VA[GTValues.HV]);
    greg.large_chemical_reactor("reprocessing/spent_uranium_233_rods").itemInputs("16x phoenixcore:spent_uranium_233_nugget").inputFluids("gtceu:nitric_acid 200").itemOutputs("14x phoenixcore:uranium_233_dust", "4x phoenixcore:depleted_uranium_dust").outputFluids("phoenixcore:fission_products_fluid 100").duration(400).EUt(GTValues.VA[GTValues.EV]);
    
    greg.distillation_tower("fission_products_fluid_processing").inputFluids("phoenixcore:fission_products_fluid 1000").itemOutputs("2x phoenixcore:fissile_ash_dust").outputFluids("phoenixcore:radioactive_gas_mixture 500").duration(400).EUt(GTValues.VA[GTValues.EV]);
    greg.centrifuge("radioactive_gas_mixture_separation").inputFluids("phoenixcore:radioactive_gas_mixture 500", "gtceu:nitrogen 100").outputFluids("gtceu:xenon 100", "gtceu:iodine 150", "gtceu:krypton 50", "phoenixcore:inert_gas_waste 250").duration(150).EUt(GTValues.VA[GTValues.IV]);
    greg.distillation_tower("inert_gas_waste_recycling").inputFluids("phoenixcore:inert_gas_waste 1000").outputFluids("gtceu:nitrogen 300", "gtceu:oxygen 100", "gtceu:chlorine 500", "gtceu:argon 50").duration(100).EUt(GTValues.VA[GTValues.EV]);

    greg.large_chemical_reactor("plutonium_fission_ash_dissolution")
        .itemInputs("4x phoenixcore:plutonium_fission_ash_dust")
        .inputFluids("gtceu:aqua_regia 500", "gtceu:hydrofluoric_acid 200")
        .outputFluids("phoenixcore:rhodium_palladium_solution 250", "phoenixcore:technetium_strontium_solution 250", "phoenixcore:radioactive_sludge 100", "phoenixcore:gaseous_fission_byproducts 100")
        .duration(600).EUt(GTValues.VA[GTValues.LuV]);

    greg.chemical_reactor("rhodium_palladium_extraction").inputFluids("phoenixcore:rhodium_palladium_solution 250", "gtceu:chlorine 100").itemOutputs("1x gtceu:rhodium_dust", "1x gtceu:palladium_dust").outputFluids("phoenixcore:acidic_waste 50").duration(200).EUt(GTValues.VA[GTValues.IV]);
    greg.centrifuge("technetium_strontium_separation").inputFluids("phoenixcore:technetium_strontium_solution 250").itemOutputs("1x gtceu:technetium_dust", "1x gtceu:strontium_dust").outputFluids("phoenixcore:radioactive_sludge 25").duration(150).EUt(GTValues.VA[GTValues.IV]);
    greg.distillation_tower("gaseous_fission_byproducts_separation").inputFluids("phoenixcore:gaseous_fission_byproducts 1000").outputFluids("gtceu:krypton 100", "gtceu:xenon 150", "gtceu:iodine 50", "phoenixcore:trace_fission_gases 700").duration(250).EUt(GTValues.VA[GTValues.IV]);
    greg.centrifuge("radioactive_sludge_processing").inputFluids("phoenixcore:radioactive_sludge 1000", "minecraft:water 500").itemOutputs("1x gtceu:rare_earth_dust", "1x phoenixcore:trace_actinides_dust").duration(400).EUt(GTValues.VA[GTValues.LuV]);
    greg.chemical_reactor("acidic_waste_processing").inputFluids("phoenixcore:acidic_waste 1000", "gtceu:acetone 10").itemOutputs("1x gtceu:calcium_dust").outputFluids("gtceu:hydrofluoric_acid 100", "gtceu:nitric_acid 900").duration(250).EUt(GTValues.VA[GTValues.EV]);
    greg.distillation_tower("trace_fission_gases_processing").inputFluids("phoenixcore:trace_fission_gases 1000").outputFluids("gtceu:argon 50", "gtceu:neon 25", "gtceu:helium 25", "phoenixcore:inert_gas_waste 900").duration(300).EUt(GTValues.VA[GTValues.LuV]);
    greg.large_chemical_reactor("depleted_plutonium_recycling").itemInputs("8x phoenixcore:depleted_plutonium_241_dust").inputFluids("gtceu:nitric_acid 500", "gtceu:fluorine 100").itemOutputs("2x gtceu:plutonium_241_dust").duration(500).EUt(GTValues.VA[GTValues.LuV]);
    greg.centrifuge("fissile_ash_processing").itemInputs("2x phoenixcore:fissile_ash_dust").inputFluids("gtceu:aqua_regia 100").itemOutputs("1x gtceu:technetium_dust", "4x gtceu:rare_earth_dust").outputFluids("phoenixcore:radioactive_sludge 50").duration(300).EUt(GTValues.VA[GTValues.IV]);
    greg.electric_blast_furnace("depleted_thorium_recycling").itemInputs("4x phoenixcore:depleted_thorium_ingot").circuit(2).inputFluids("gtceu:fluorine 250").itemOutputs("3x gtceu:thorium_dust").outputFluids("phoenixcore:radioactive_sludge 250").blastFurnaceTemp(1200).duration(300).EUt(GTValues.VA[GTValues.EV]);
    greg.large_chemical_reactor("exotic_fission_concentrate_production").itemInputs("2x gtceu:technetium_dust", "2x gtceu:strontium_dust", "4x gtceu:rare_earth_dust").inputFluids("gtceu:iodine 500", "gtceu:fluoroantimonic_acid 250").itemOutputs("12x phoenixcore:exotic_fission_concentrate_dust").duration(300).EUt(GTValues.VA[GTValues.IV]);
    greg.large_chemical_reactor("exotic_fissile_materials_clump_production").itemInputs("1x phoenixcore:exotic_fission_concentrate_dust").inputFluids("phoenixcore:cryo_zirconium_binding_solution 1000", "phoenixcore:cryo_graphite_binding_solution 1000").itemOutputs("4x phoenixcore:exotic_fissile_materials_clump_dust").duration(400).EUt(GTValues.VA[GTValues.IV]);

    // ===========================================
    // === Machine & Component Assembly ===
    // ===========================================

    greg.assembler("active_transformer").itemInputs("gtceu:iv_transformer_16a", "8x #gtceu:circuits/iv", "8x phoenixcore:superconductive_honey_double_wire", "10x gtceu:hpic_chip").inputFluids("gtceu:pcb_coolant 1000").itemOutputs("gtceu:active_transformer").duration(450).EUt(GTValues.VA[GTValues.IV]);
    greg.assembler("comb_decanter_recipe_assembler").itemInputs("4x minecraft:honey_block", "kubejs:conductive_honey_coil", "2x gtceu:samarium_iron_arsenic_oxide_double_wire", "2x gtceu:iv_field_generator", "2x #gtceu:circuits/iv").inputFluids("gtceu:soldering_alloy 5044").itemOutputs("phoenixcore:comb_decanter").EUt(GTValues.VA[GTValues.IV]).duration(400);
    greg.assembler("apis_progenitor_recipe_assembler").itemInputs("4x phoenixcore:honey_treat", "4x #minecraft:flowers", "#gtceu:circuits/iv", "gtceu:iv_machine_hull", "32x gtceu:fine_platinum_wire").inputFluids("phoenixcore:honey 1000").itemOutputs("phoenixcore:apis_progenitor").EUt(GTValues.VA[GTValues.IV]).duration(600);
    greg.assembler("swarm_nurturer_recipe_assembler").itemInputs("gtceu:iv_machine_hull", "#gtceu:circuits/iv", "2x gtceu:stainless_steel_frame", "12x phoenixcore:source_imbued_titanium_screw", "gtceu:rtm_alloy_coil_block").inputFluids("gtceu:vanadium_gallium 500").itemOutputs("phoenixcore:swarm_nurturer").EUt(GTValues.VA[GTValues.IV]).duration(800);
    greg.assembler("simulated_colony_recipe_assembler").itemInputs("2x phoenixcore:source_imbued_titanium_gear", "32x #minecraft:flowers", "12x #forge:dyes", "3x #gtceu:circuits/iv", "gtceu:iv_machine_hull", "16x phoenixcore:honey_treat").inputFluids("phoenixcore:sugar_water 1000").itemOutputs("phoenixcore:simulated_colony").EUt(GTValues.VA[GTValues.IV]).duration(900);
    
    greg.assembler("breeder_reactor_controller")
        .itemInputs("phoenixcore:pressurized_fission_reactor", "2x phoenixcore:void_touched_tungsten_steel_rotor", "4x #gtceu:circuits/iv", "2x phoenixcore:zircalloy_gear", "2x gtceu:iv_machine_hull", "16x gtceu:uranium_235_rod")
        .inputFluids("phoenixcore:cryo_zirconium_binding_solution 6000").itemOutputs("phoenixcore:high_performance_breeder_reactor").duration(800).EUt(GTValues.VA[GTValues.IV]);

    greg.assembler("iv_confectionery_fabricator")
        .itemInputs("4x phoenixcore:void_touched_tungsten_steel_rotor", "1x minecraft:honeycomb", "2x #gtceu:circuits/iv", "gtceu:iv_machine_hull", "1x gtceu:iv_sensor")
        .inputFluids("phoenixcore:honey 1700").itemOutputs("gtceu:iv_confectionery_fabricator").EUt(GTValues.VA[GTValues.IV]).duration(600);

    greg.assembler("fully_charged_mob_essence_capsule_recipe")
        .itemInputs("kubejs:full_passive_mob_essence_canister", "kubejs:full_neutral_mob_essence_canister", "kubejs:full_hostile_mob_essence_canister")
        .itemOutputs("kubejs:fully_charged_mob_essence_capsule").duration(400).EUt(GTValues.VA[GTValues.IV]);

    // Moderators (Unique properties limit looping)
    greg.assembler('graphite_moderator').itemInputs('gtceu:hv_machine_casing', '16x gtceu:graphite_dust').itemOutputs('phoenixcore:graphite_moderator').duration(200).EUt(480);
    greg.assembler('beryllium_moderator').itemInputs('gtceu:ev_machine_casing', '16x gtceu:beryllium_dust').itemOutputs('phoenixcore:beryllium_moderator').duration(200).EUt(1920);
    greg.assembler('heavy_water_moderator').itemInputs('gtceu:iv_machine_casing', '2x gtceu:tungsten_steel_large_fluid_pipe').inputFluids('minecraft:water 1000').itemOutputs('phoenixcore:heavy_water_moderator').duration(300).EUt(7680);
    greg.assembler('niobium_sic_moderator').itemInputs('gtceu:luv_machine_casing', '4x gtceu:niobium_nitride_plate', '8x phoenixcore:niobium_modified_silicon_carbide_rod').itemOutputs('phoenixcore:niobium_sic_moderator').duration(600).EUt(30720);
});

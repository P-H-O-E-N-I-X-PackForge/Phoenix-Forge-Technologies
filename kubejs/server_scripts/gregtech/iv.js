/**
IV and LuV recipes
 */
ServerEvents.recipes(event => {

    const greg = event.recipes.gtceu
   // greg.electrolyzer("flourite_dust_to_flourine")
      //  .itemInputs("12x gtceu:flourite_dust")
       // .itemOutputs("4x gtceu:tantalite_dust")
        //.outputFluids("gtceu:flourine 1000")
       // .duration(100)
       // .EUt(GTValues.VA[GTValues.LV]);

    // LUV Confectionery Fabricator Research (existing)
    greg.scanner("luv_confectionery_fabricator")
        .itemInputs("gtceu:iv_confectionery_fabricator", "gtceu:data_stick")
        .itemOutputs(Item.of("gtceu:data_stick", '{assembly_line_research:{research_id:"1x_gtceu_iv_confectionery_fabricator",research_type:"gtceu:assembly_line"}}'))
        .duration(2000)
        .EUt(GTValues.VA[GTValues.IV])


    greg.scanner("melferious_matrix_research")
        .itemInputs("phoenixcore:simulated_colony", "gtceu:data_stick")
        .itemOutputs(Item.of("gtceu:data_stick", '{assembly_line_research:{research_id:"1x_gtceu_simulated_colony",research_type:"gtceu:assembly_line"}}'))
        .duration(2000)
        .EUt(GTValues.VA[GTValues.IV])

    // Melferious Matrix Assembly Line Recipe
    greg.assembly_line("melferious_matrix")
        .itemInputs(
            "8x gtceu:sturdy_machine_casing",
            "16x phoenixcore:resonant_rhodium_alloy_plate",
            "64x phoenixcore:honey_treat",
            "4x kubejs:conductive_honey_coil",
            "1x phoenixcore:extremely_modified_space_grade_steel_quadruple_wire", 
            "4x phoenixcore:void_touched_tungsten_steel_rotor",
            "2x phoenixcore:simulated_colony"
        )
        .inputFluids(
            "phoenixcore:honey 24000",
            "gtceu:soldering_alloy 4000"
        )
        .itemOutputs("phoenixcore:melliferious_matrix")
        .stationResearch(b => b.researchStack("phoenixcore:simulated_colony")
            .EUt(131000).CWUt(1, 1)
            .dataStack("gtceu:data_stick"))
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(1000)

    // Advanced Cracker Research (scanner)
    greg.scanner("advanced_cracker_research")
        .itemInputs("gtceu:cracker", "gtceu:data_stick")
        .itemOutputs(Item.of("gtceu:data_stick", '{assembly_line_research:{research_id:"1x_gtceu_cracker",research_type:"gtceu:assembly_line"}}'))
        .duration(2000)
        .EUt(GTValues.VA[GTValues.IV])
        
    greg.mixer("melting_catalyst")
        .itemInputs("2x gtceu:carbon_dust", "1x minecraft:glowstone_dust")
        .circuit(4)
        .inputFluids("minecraft:water 2500", "gtceu:naphtha 250")
        .outputFluids("phoenixcore:wax_melting_catalyst 2500")
        .duration(100)
        .EUt(GTValues.VA[GTValues.EV] / 2)

    // Advanced Cracker Assembly Line Recipe
    greg.assembly_line("advanced_cracker")
        .itemInputs(
            "16x gtceu:hssg_coil_block",
            "4x #gtceu:circuits/luv",
            "gtceu:luv_machine_hull",
            "4x gtceu:luv_electric_pump",
            "8x gtceu:luv_emitter",
            "16x phoenixcore:resonant_rhodium_alloy_gear"
        )
        .inputFluids(
            "gtceu:soldering_alloy 4000",
            "gtceu:vanadium_gallium 1000",
            "gtceu:hssg 2880"
        )
        .itemOutputs("phoenixcore:advanced_cracking_unit")
        .stationResearch(b => b.researchStack("gtceu:cracker")
            .EUt(131000).CWUt(1, 1)
            .dataStack("gtceu:data_stick"))
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(900)
        
    greg.mixer("permafrost")
        .itemInputs(["minecraft:packed_ice", "minecraft:blue_ice", "minecraft:ice"])
        .itemOutputs(["14x phoenixcore:permafrost_dust"])
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV]);
    greg.mixer("dormant_ember")
        .itemInputs(["minecraft:coal", "minecraft:coal_block", "phoenixcore:small_dormant_ember_dust"])
        .inputFluids(["gtceu:distilled_water 1000"])
        .itemOutputs(["16x phoenixcore:dormant_ember_dust"])
        .duration(350)
        .EUt(GTValues.VA[GTValues.EV]);
    // --- Chemical Processes (Sulfuric Acid & Derivatives) ---
    // Production of Oleum in Large Chemical Reactor
    greg.large_chemical_reactor("oleum")
        .inputFluids("gtceu:sulfur_trioxide 244", "gtceu:sulfuric_acid 1000")
        .outputFluids("phoenixcore:oleum 1000")
        .duration(134)
        .EUt(GTValues.VA[GTValues.IV] / 2)

    // Production of Concentrated Sulfuric Acid in Large Chemical Reactor
    greg.large_chemical_reactor("concentrated_sulfuric_acid")
        .inputFluids("phoenixcore:oleum 300", "minecraft:water 700")
        .outputFluids("phoenixcore:concentrated_sulfuric_acid 800")
        .duration(80)
        .EUt(GTValues.VA[GTValues.EV] / 2)

    // Electrolysis of Concentrated Sulfuric Acid to Hydrogen Peroxide
    greg.electrolyzer("concentrated_sulfuric_acid_to_hydrogen_peroxide")
        .inputFluids("phoenixcore:concentrated_sulfuric_acid 1000")
        .outputFluids("gtceu:hydrogen_peroxide 100", "minecraft:water 300", "gtceu:sulfuric_acid 500")
        .duration(550)
        .EUt(GTValues.VA[GTValues.IV] / 2)

    // Production of Acetone Cyanohydrin in Large Chemical Reactor
    greg.large_chemical_reactor("acetone_cyanohydrin")
        .inputFluids("gtceu:acetone 1000", "gtceu:hydrogen_cyanide 1000")
        .outputFluids("phoenixcore:acetone_cyanohydrin 1000")
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV] / 2)

    // Production of Methyl Methacrylate in Large Chemical Reactor
    greg.large_chemical_reactor("methyl_methacrylate")
        .inputFluids("phoenixcore:acetone_cyanohydrin 1000", "gtceu:sulfuric_acid 1000", "gtceu:methanol 750")
        .outputFluids("phoenixcore:methyl_methacrylate 1000", "phoenixcore:ammonium_bisulfate_solution 1000")
        .duration(300)
        .EUt(GTValues.VA[GTValues.IV] / 2)

    // Distillation of Ammonium Bisulfate Solution to Dust and Fluids
    greg.distillation_tower("ammonium_bisulfate_solution_to_dust")
        .inputFluids("phoenixcore:ammonium_bisulfate_solution 1000")
        .outputFluids("gtceu:sulfuric_acid 500", "minecraft:water 600", "gtceu:ammonia 120")
        .itemOutputs("12x phoenixcore:ammonium_bisulfate_dust")
        .duration(240)
        .EUt(GTValues.VA[GTValues.EV] / 2)

    // Electrolysis of Ammonium Bisulfate Dust to Ammonium Persulfate
    greg.electrolyzer("ammonium_bisulfate_dust_to_ammonium_persulfate")
        .itemInputs("7x phoenixcore:ammonium_bisulfate_dust")
        .outputFluids("gtceu:hydrogen 1000", "phoenixcore:ammonium_persulfate 250")
        .duration(130)
        .EUt(GTValues.VA[GTValues.IV] / 2)

    // Production of Ammonium Bisulfate Solution in Large Chemical Reactor
    greg.large_chemical_reactor("ammonium_bisulfate_solution")
        .inputFluids("gtceu:sulfuric_acid 200", "gtceu:ammonia 750")
        .outputFluids("phoenixcore:ammonium_bisulfate_solution 250")
        .duration(60)
        .EUt(GTValues.VA[GTValues.IV] / 2)

    // Production of Naquadatite process line
    greg.large_chemical_reactor("naquadatite_acidic")
        .inputFluids("gtceu:sulfuric_acid 1000")
        .itemInputs("6x phoenixcore:naquadatite_dust")
        .itemOutputs("6x phoenixcore:naquadatite_acidic_dust")
        .duration(300)
        .EUt(GTValues.VA[GTValues.LuV])

    greg.chemical_bath("heavily_fluorine_contamined_naquadatite_dust")
        .inputFluids("gtceu:chlorine 4000")
        .itemInputs("6x phoenixcore:naquadatite_acidic_dust")
        .outputFluids("gtceu:hydrochloric_acid 4000")
        .itemOutputs("6x phoenixcore:heavily_fluorine_contaminated_naquadatite_dust")
        .duration(300)
        .EUt(GTValues.VA[GTValues.EV] / 2)

    greg.mixer("radioactive_and_heavy_metal_contamined_naquadatite_dust")
        .itemInputs(
            "6x phoenixcore:heavily_fluorine_contaminated_naquadatite_dust",
            "10x gtceu:calcite_dust",
            "4x gtceu:carbon_dust"
        )
        .inputFluids("gtceu:distilled_water 1000")
        .itemOutputs("6x phoenixcore:radioactive_and_heavy_metal_contaminated_naquadatite_dust")
        .outputFluids("gtceu:dissolved_calcium_acetate 2000")
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV]);

    greg.centrifuge("radioactive_contamined_naquadatite_dust")
        .itemInputs("6x phoenixcore:radioactive_and_heavy_metal_contaminated_naquadatite_dust")
        .itemOutputs("6x phoenixcore:radioactive_contaminated_naquadatite_dust", "4x phoenixcore:heavy_metal_sludge_dust")
        .outputFluids("gtceu:sulfuric_acid 1000")
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV] / 2)

    greg.chemical_bath("heavily_acidic_naquadatite_dust")
        .inputFluids("gtceu:distilled_water 2000")
        .itemInputs("6x phoenixcore:radioactive_contaminated_naquadatite_dust")
        .outputFluids("gtceu:hydrogen 4000")
        .itemOutputs("6x phoenixcore:heavily_acidic_naquadatite_dust", "7x phoenixcore:acidic_waste_sludge_dust")
        .duration(300)
        .EUt(GTValues.VA[GTValues.EV] / 2)

    greg.chemical_reactor("radioactive_naquadacid_dust")
        .inputFluids("gtceu:hydrofluoric_acid 4000")
        .itemInputs("6x phoenixcore:heavily_acidic_naquadatite_dust", "4x gtceu:calcium_dust")
        .itemOutputs("6x phoenixcore:radioactive_naquadacid_dust", "4x phoenixcore:calcium_fluorine_dust")
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV] / 2);

    greg.arc_furnace("hydrofluoric_acid")
        .inputFluids("gtceu:hydrogen 4000")
        .itemInputs("4x phoenixcore:calcium_fluorine_dust")
        .itemOutputs("4x gtceu:calcium_dust")
        .outputFluids("gtceu:hydrofluoric_acid 4000")
        .duration(60)
        .EUt(GTValues.VA[GTValues.HV] / 2)

    greg.canner("chlorine_waste_naquadatia_astatine_dust")
        .inputFluids("gtceu:chlorine 2000")
        .itemInputs("6x phoenixcore:radioactive_naquadacid_dust", "2x gtceu:aluminium_dust")
        .itemOutputs("6x phoenixcore:chlorine_waste_naquadatia_astatine_dust")
        .duration(300)
        .EUt(GTValues.VA[GTValues.EV] / 2)

    greg.centrifuge("naquadatia_astatine_dust")
        .itemInputs("6x phoenixcore:chlorine_waste_naquadatia_astatine_dust")
        .itemOutputs("6x phoenixcore:naquadatia_astatine_dust", "6x phoenixcore:aluminium_caesium_chloride_dust")
        .duration(120)
        .EUt(GTValues.VA[GTValues.EV] / 2)

    greg.large_chemical_reactor("naquadah_dust")
        .itemInputs("6x phoenixcore:naquadatia_astatine_dust", "2x gtceu:sodium_bisulfate_dust")
        .inputFluids("gtceu:hydrofluoric_acid 4000")
        .itemOutputs("6x gtceu:naquadah_dust", "16x phoenixcore:sodium_astatine_bisulfate_dust", "4x phoenixcore:calcium_fluorine_dust")
        .outputFluids("gtceu:hydrogen 4000")
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV] / 2)

    greg.centrifuge("heavy_metal_sludge")
        .itemInputs("4x phoenixcore:heavy_metal_sludge_dust")
        .outputFluids("gtceu:mercury 250")
        .itemOutputs("gtceu:chromium_trioxide_dust", "gtceu:arsenic_trioxide_dust", "gtceu:antimony_trioxide_dust", "gtceu:small_galena_dust", "gtceu:cobaltite_dust", "gtceu:tetrahedrite_dust")
        .duration(20)
        .EUt(GTValues.VA[GTValues.MV] / 2)

    greg.centrifuge("acidic_waste_sludge")
        .itemInputs("7x phoenixcore:acidic_waste_sludge_dust")
        .itemOutputs("gtceu:stibnite_dust", "gtceu:phosphorus_pentoxide_dust", "2x gtceu:aluminium_sulfite_dust", "gtceu:sodium_hydroxide_dust", "gtceu:calcium_hydroxide_dust", "gtceu:tetrahedrite_dust")
        .duration(20)
        .EUt(GTValues.VA[GTValues.MV] / 2)

    greg.centrifuge("aluminium_caesium_chloride_dust")
        .itemInputs("6x phoenixcore:aluminium_caesium_chloride_dust")
        .outputFluids("gtceu:hydrochloric_acid 2000")
        .itemOutputs("2x gtceu:aluminium_dust", "2x gtceu:caesium_dust", "5x phoenixcore:low_level_radioactive_waste_dust")
        .duration(20)
        .EUt(GTValues.VA[GTValues.MV] / 2)

// --- Graphene production line
// cleanroom recipes

    greg.forming_press("graphite_pressed_cupronickel_foil")
        .itemInputs("4x gtceu:cupronickel_foil", "4x gtceu:graphite_dust")
        .itemOutputs("phoenixcore:graphite_pressed_cupronickel_foil")
        .duration(20)
        .EUt(GTValues.VA[GTValues.EV])

    greg.vacuum_freezer("graphite_welded_cupronickel_foil")
        .inputFluids("gtceu:methane 1000", "gtceu:hydrogen 2000")
        .itemInputs("phoenixcore:graphite_pressed_cupronickel_foil")
        .itemOutputs("phoenixcore:graphite_welded_cupronickel_foil")
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV])

    greg.chemical_reactor("oxygen_free_graphite_welded_cupronickel_foil")
        .chancedFluidInput("gtceu:argon 1000", 1000, 0)
        .itemInputs("phoenixcore:graphite_welded_cupronickel_foil")
        .itemOutputs("phoenixcore:oxygen_free_graphite_welded_cupronickel_foil")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(100)
        .EUt(GTValues.VA[GTValues.EV])

    greg.chemical_bath("graphene_sludge")
        .inputFluids("gtceu:iron_iii_chloride 100")
        .itemInputs("phoenixcore:oxygen_free_graphite_welded_cupronickel_foil")
        .itemOutputs("8x phoenixcore:graphene_sludge_dust")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(100)
        .EUt(GTValues.VA[GTValues.EV])

    greg.centrifuge("graphene_foil")
        .itemInputs("phoenixcore:graphene_sludge_dust")
        .itemOutputs("gtceu:graphene_foil", "gtceu:cupronickel_dust", "gtceu:iron_dust")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(60)
        .EUt(GTValues.VA[GTValues.EV])

    // --- Polymerization & Advanced Materials ---
    // Advanced PMMA Polymerization in Large Chemical Reactor
    greg.large_chemical_reactor("advanced_pmma_polymerization")
        .inputFluids("phoenixcore:methyl_methacrylate 144", "phoenixcore:ammonium_persulfate 750", "gtceu:hydrogen_peroxide 250")
        .outputFluids("phoenixcore:polymethyl_methacrylate 216")
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV] / 2)

    // Honeycomb Base Mixture in Mixer
    greg.mixer("honey_comb_base_mixture")
        .inputFluids("phoenixcore:honey 500", "phoenixcore:polymethyl_methacrylate 244")
        .itemInputs("phoenixcore:source_imbued_titanium_dust", "gtceu:niobium_dust")
        .outputFluids("phoenixcore:honey_comb_base_mixture 250")
        .duration(60)
        .EUt(GTValues.VA[GTValues.IV] / 2)

    // Honeycomb Base Solidification in Fluid Solidifier
    greg.fluid_solidifier("honey_comb_base")
        .inputFluids("phoenixcore:honey_comb_base_mixture 1008")
        .notConsumable("phoenixcore:honey_comb_base_mold")
        .itemOutputs("phoenixcore:honey_comb_base")
        .duration(2000)
        .EUt(GTValues.VA[GTValues.HV] / 2)

    // Honeycomb Base Mold from Compressor
    greg.compressor("honey_comb_bases_solid")
        .notConsumable("12x phoenixcore:dense_void_touched_tungsten_steel_plate")
        .itemOutputs("phoenixcore:honey_comb_base_mold")
        .duration(2000)
        .EUt(GTValues.VA[GTValues.IV] / 2)

    // Liquid Void Touched Tungsten Steel in Alloy Blast Smelter
    greg.alloy_blast_smelter("loquid_void_touched_tungsten_steel")
        .itemInputs("4x gtceu:tungsten_dust", "4x phoenixcore:voidglass_shard_dust", "2x gtceu:molybdenum_dust")
        .circuit(5)
        .inputFluids("gtceu:liquid_ender_air 100")
        .outputFluids("phoenixcore:molten_void_touched_tungsten_steel 1152")
        .duration(6000)
        .blastFurnaceTemp(3600)
        .EUt(GTValues.VA[GTValues.EV]);

    greg.mixer("extremely_modified_space_grade_steel")
        .itemInputs(
            "4x phoenixcore:source_imbued_titanium_dust",
            "2x gtceu:ruthenium_dust",
            "4x phoenixcore:space_grade_steel_dust",
            "32x minecraft:tnt"
        )
        .inputFluids("gtceu:radon 250")
        .itemOutputs("8x phoenixcore:extremely_modified_space_grade_steel_dust")
        .duration(400)
        .EUt(GTValues.VA[GTValues.LuV]);

    // ABS recipe for Extremely Modified Space Grade Steel
    greg.alloy_blast_smelter("molten_extremely_modified_space_grade_steel")
        .itemInputs("4x phoenixcore:source_imbued_titanium_dust", "2x gtceu:ruthenium_dust", "4x phoenixcore:space_grade_steel_dust", "32x minecraft:tnt")
        .circuit(5)
        .inputFluids("gtceu:radon 250")
        .outputFluids("phoenixcore:molten_extremely_modified_space_grade_steel 1152")
        .duration(4800)
        .blastFurnaceTemp(3400)
        .EUt(GTValues.VA[GTValues.LuV]);

    // Boosted ABS recipe for Extremely Modified Space Grade Steel
    greg.alloy_blast_smelter("molten_extremely_modified_space_grade_steel_boosted")
        .itemInputs("4x phoenixcore:source_imbued_titanium_dust", "2x gtceu:ruthenium_dust", "4x phoenixcore:space_grade_steel_dust", "32x minecraft:tnt")
        .circuit(15)
        .inputFluids("gtceu:radon 250", "gtceu:helium 1000")
        .outputFluids("phoenixcore:molten_extremely_modified_space_grade_steel 1440")
        .duration(3600)
        .blastFurnaceTemp(3600)
        .EUt(GTValues.VA[GTValues.LuV]);

    // Liquid Void Touched Tungsten Steel (Boosted) in Alloy Blast Smelter
    greg.alloy_blast_smelter("loquid_void_touched_tungsten_steel_boosted")
        .itemInputs("4x gtceu:tungsten_dust", "4x phoenixcore:voidglass_shard_dust", "2x gtceu:molybdenum_dust")
        .circuit(15)
        .inputFluids("gtceu:liquid_ender_air 100", "gtceu:helium 100")
        .outputFluids("phoenixcore:molten_void_touched_tungsten_steel 1152")
        .blastFurnaceTemp(3600)
        .duration(4200)
        .EUt(GTValues.VA[GTValues.EV]);

    // Resonant Rhodium Alloy Dust in Mixer
    greg.mixer("resonant_rhodium_alloy")
        .itemInputs("3x gtceu:rhodium_dust", "4x gtceu:palladium_dust", "2x phoenixcore:polarity_flipped_bismuthite_dust", "4x gtceu:cerium_dust")
        .inputFluids("phoenixcore:resonant_ender 144")
        .itemOutputs("13x phoenixcore:resonant_rhodium_alloy_dust")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(360)
        .circuit(4)

    // Molten Resonant Rhodium Alloy (Gas) in Alloy Blast Smelter
    greg.alloy_blast_smelter("molten_resonant_rhodium_alloy_gas")
        .itemInputs("3x gtceu:rhodium_dust", "4x gtceu:palladium_dust", "2x phoenixcore:polarity_flipped_bismuthite_dust", "4x gtceu:cerium_dust")
        .circuit(15)
        .inputFluids("phoenixcore:resonant_ender 1144", "gtceu:argon 100")
        .outputFluids("phoenixcore:molten_resonant_rhodium_alloy 2016")
        .duration(3800)
        .blastFurnaceTemp(3600)
        .EUt(GTValues.VA[GTValues.EV]);

    // Molten Resonant Rhodium Alloy in Alloy Blast Smelter
    greg.alloy_blast_smelter("molten_resonant_rhodium_alloy")
        .itemInputs("3x gtceu:rhodium_dust", "4x gtceu:palladium_dust", "2x phoenixcore:polarity_flipped_bismuthite_dust", "4x gtceu:cerium_dust")
        .circuit(5)
        .inputFluids("phoenixcore:resonant_ender 1144")
        .outputFluids("phoenixcore:molten_resonant_rhodium_alloy 2016")
        .duration(5400)
        .blastFurnaceTemp(3600)
        .EUt(GTValues.VA[GTValues.EV]);

    // Superconductive Honey Creation in Large Chemical Reactor
    greg.large_chemical_reactor("superconductive_honey_creation")
        .itemInputs("8x phoenixcore:honey_dust", "4x gtceu:niobium_titanium_dust", "2x gtceu:iridium_dust")
        .inputFluids("gtceu:helium 500", "phoenixcore:cryo_ember_fluid 100")
        .itemOutputs("12x phoenixcore:superconductive_honey_dust")
        .duration(300)
        .EUt(GTValues.VA[GTValues.EV]);

    // Superconductive Honey Ingot (Normal) in Implosion Compressor
    greg.implosion_compressor("superconductive_honey_ingot_normal")
        .itemInputs("1x phoenixcore:superconductive_honey_dust", "16x minecraft:tnt")
        .itemOutputs("1x phoenixcore:superconductive_honey_ingot")
        .duration(450)
        .EUt(GTValues.VA[GTValues.EV]);

    // Superconductive Honey Ingot (Industrial TNT) in Implosion Compressor
    greg.implosion_compressor("superconductive_honey_ingot_itnt")
        .itemInputs("1x phoenixcore:superconductive_honey_dust", "4x gtceu:industrial_tnt")
        .itemOutputs("1x phoenixcore:superconductive_honey_ingot")
        .duration(350)
        .EUt(GTValues.VA[GTValues.EV]);

    // Superconductive Honey Coil Block in Assembler
    greg.assembler("superconductive_honey_coil_block")
        .itemInputs("8x phoenixcore:superconductive_honey_double_wire", "8x gtceu:hsss_foil")
        .inputFluids("phoenixcore:void_touched_tungsten_steel 144")
        .itemOutputs("kubejs:conductive_honey_coil")
        .duration(750)
        .EUt(GTValues.VA[GTValues.IV]);

    // --- Food and Organic Chemistry ---
    // Enhanced Sugar to Sucrose in Large Chemical Reactor
    greg.large_chemical_reactor("sugar_to_sucrose_enhanced")
        .itemInputs("8x minecraft:sugar", "1x minecraft:glowstone_dust")
        .circuit(1)
        .inputFluids("minecraft:water 500")
        .outputFluids("phoenixcore:sucrose 1200")
        .chancedOutput("1x minecraft:glowstone_dust", 8500, 0)
        .duration(1200)
        .EUt(GTValues.VA[GTValues.EV] / 2)

    // Sucrose Inversion in Large Chemical Reactor
    greg.large_chemical_reactor("sucrose_inversion")
        .inputFluids("phoenixcore:sucrose", "gtceu:distilled_water 500", "gtceu:sulfuric_acid 10")
        .circuit(4)
        .outputFluids("phoenixcore:invert_sugar_solution 1000")
        .duration(1200)
        .EUt(GTValues.VA[GTValues.EV] / 2)

    // Protein Solution from Mince Meat in Large Chemical Reactor
    greg.large_chemical_reactor("protein_solution_from_mince_meat")
        .itemInputs("32x gtceu:meat_dust")
        .circuit(12)
        .inputFluids("gtceu:acetic_acid 1008")
        .outputFluids("phoenixcore:protein_solution 1000")
        .duration(900)
        .EUt(GTValues.VA[GTValues.IV] / 2)

           greg.extractor("resonant_ender")
        .itemInputs("1x minecraft:ender_pearl")
        .outputFluids("phoenixcore:resonant_ender 250")
        .duration(300)
        .EUt(GTValues.VA[GTValues.HV] / 2)

    // Amino Acids from Protein Solution in Large Chemical Reactor
    greg.large_chemical_reactor("amino_acids_from_protein_solution")
        .inputFluids("phoenixcore:protein_solution 1500", "gtceu:hydrofluoric_acid 250")
        .circuit(2)
        .itemInputs("16x gtceu:activated_carbon_dust")
        .outputFluids("phoenixcore:amino_acids 1000")
        .duration(950)
        .EUt(GTValues.VA[GTValues.IV] / 2)

    // Pollen Concentrate Fluid from Flowers in Large Chemical Reactor
    greg.large_chemical_reactor("pollen_concentrate_fluid_from_flowers")
        .inputFluids("gtceu:ethanol 2000")
        .circuit(4)
        .itemInputs("4x #minecraft:flowers")
        .outputFluids("phoenixcore:pollen_concentrate_fluid 900")
        .duration(850)
        .EUt(GTValues.VA[GTValues.IV])

    // Pollen Concentrate Fluid from Plant Balls in Large Chemical Reactor
    greg.large_chemical_reactor("pollen_concentrate_fluid_from_plant_balls")
        .inputFluids("gtceu:ethanol 2000")
        .circuit(4)
        .itemInputs("1x gtceu:plant_ball")
        .outputFluids("phoenixcore:pollen_concentrate_fluid 750")
        .duration(825)
        .EUt(GTValues.VA[GTValues.IV] / 2)

    // Honey Catalyst in Large Chemical Reactor
    greg.large_chemical_reactor("honey_catalyst")
        .inputFluids("phoenixcore:amino_acids 4500", "minecraft:water 32000", "gtceu:sodium_potassium 1700")
        .circuit(24)
        .itemInputs("6x gtceu:magnesium_dust", "12x gtceu:calcium_dust")
        .outputFluids("phoenixcore:honey_catalyst 750")
        .duration(650)
        .EUt(GTValues.VA[GTValues.IV])

    // Honey Production in Large Chemical Reactor
    greg.large_chemical_reactor("honey")
        .inputFluids("phoenixcore:honey_catalyst 3000", "phoenixcore:invert_sugar_solution 5000", "phoenixcore:pollen_concentrate_fluid 8500")
        .circuit(24)
        .outputFluids("phoenixcore:honey 1500")
        .duration(1600)
        .EUt(GTValues.VA[GTValues.IV])

    // Honeycomb Assembly in Assembler
    greg.assembler("honeycomb_assembly")
        .inputFluids("phoenixcore:honey 588", "phoenixcore:invert_sugar_solution 144")
        .notConsumable("phoenixcore:honey_comb_base")
        .itemOutputs("minecraft:honeycomb")
        .duration(700)
        .EUt(GTValues.VA[GTValues.IV] / 2)

    // Invert Sugar Solution Separation in Distillation Tower
    greg.distillation_tower("invert_sugar_solution_separation")
        .inputFluids("phoenixcore:invert_sugar_solution 1000")
        .outputFluids("phoenixcore:glucose 500", "phoenixcore:fructose 500")
        .duration(580)
        .EUt(GTValues.VA[GTValues.IV] / 2)

    // Sugar Water in Chemical Reactor
    greg.large_chemical_reactor("sugar_water")
        .inputFluids("phoenixcore:glucose 250", "phoenixcore:fructose 250", "gtceu:distilled_water 1000")
        .outputFluids("phoenixcore:sugar_water 15000")
        .duration(480)
        .EUt(GTValues.VA[GTValues.HV] / 2)

    // Sugar and Molasses Production in Chemical Reactor
    greg.chemical_reactor("sugar_and_molasses_production")
        .inputFluids("phoenixcore:sugar_water 1000")
        .itemOutputs("64x minecraft:sugar")
        .outputFluids("phoenixcore:molasses 200")
        .duration(680)
        .EUt(GTValues.VA[GTValues.HV]);

    // Cream from Milk in Centrifuge
    greg.centrifuge("cream_from_milk")
        .inputFluids("minecraft:milk 1000")
        .outputFluids("phoenixcore:cream 250", "phoenixcore:skim_milk 750")
        .duration(600)
        .EUt(GTValues.VA[GTValues.LV]);

    // Dough in Mixer
    greg.mixer("dough")
        .inputFluids("phoenixcore:skim_milk 144", "minecraft:water 500")
        .itemInputs("8x gtceu:wheat_dust", "gtceu:salt_dust", "minecraft:sugar")
        .itemOutputs("10x gtceu:dough")
        .duration(300)
        .EUt(GTValues.VA[GTValues.LV]);

    // Honey Treat in Confectionery Fabricator
    greg.confectionery_fabricator("honeytreat")
        .itemInputs("5x gtceu:dough", "2x minecraft:honeycomb")
        .inputFluids("phoenixcore:honey 15000", "phoenixcore:molasses 2500", "phoenixcore:cream 8000", "phoenixcore:pollen_concentrate_fluid 6500", "phoenixcore:peanut_butter 12250")
        .itemOutputs("32x phoenixcore:honey_treat")
        .duration(650)
        .EUt(GTValues.VA[GTValues.IV]);

    // Peanut Dust in Macerator
    greg.macerator("peanut_dust")
        .itemInputs("pamhc2crops:roastedpeanutitem")
        .itemOutputs("phoenixcore:peanut_dust")
        .duration(40)
        .EUt(GTValues.VA[GTValues.LV]);

    // Nut Butter from Dust in Mixer
    greg.mixer("nut_butter_from_dust")
        .itemInputs("8x phoenixcore:peanut_dust", "2x minecraft:sugar")
        .inputFluids("minecraft:water 500", "gtceu:seed_oil 250")
        .outputFluids("phoenixcore:peanut_butter 500")
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV]);

    // Solidified Honey in Fluid Solidifier
    greg.fluid_solidifier("soldified_honey")
        .inputFluids("phoenixcore:honey 144")
        .notConsumable("gtceu:ingot_casting_mold")
        .itemOutputs("phoenixcore:honey_ingot")
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV]);


    // Cryo Zirconium Binding Solution in Mixer
    greg.mixer("cryo_zirconium_binding_solution")
        .inputFluids("phoenixcore:frost 288", "minecraft:water 2000")
        .itemInputs("2x phoenixcore:crystallized_fluxstone_dust", "1x gtceu:zirconium_dust")
        .outputFluids("phoenixcore:cryo_zirconium_binding_solution 2000")
        .duration(150)
        .EUt(GTValues.VA[GTValues.EV]);

    // Cryo Graphite Binding Solution in Mixer
    greg.mixer("cryo_graphite_binding_solution")
        .inputFluids("phoenixcore:frost 288", "minecraft:water 2000")
        .itemInputs("2x phoenixcore:crystallized_fluxstone_dust", "1x gtceu:graphite_dust")
        .outputFluids("phoenixcore:cryo_graphite_binding_solution 3000")
        .duration(175)
        .EUt(GTValues.VA[GTValues.EV]);

    // Thorium Fuel Pellet Crafting in Large Chemical Reactor
    greg.large_chemical_reactor("thorium_fuel_pellet_crafting")
        .itemInputs("9x gtceu:thorium_nugget")
        .inputFluids("phoenixcore:cryo_graphite_binding_solution 1000")
        .itemOutputs("9x phoenixcore:thorium_fuel_pellet ")
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);

    // Uranium-235 Fuel Pellet Crafting in Large Chemical Reactor
    greg.large_chemical_reactor("uranium_235_fuel_pellet_crafting")
        .itemInputs("9x gtceu:uranium_235_nugget")
        .inputFluids("phoenixcore:cryo_zirconium_binding_solution 1000")
        .itemOutputs("9x phoenixcore:u235_fuel_pellet")
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV])

    // Uranium-233 Fuel Pellet Crafting in Large Chemical Reactor
    greg.large_chemical_reactor("uranium_233_fuel_pellet_crafting")
        .itemInputs("9x phoenixcore:uranium_233_nugget")
        .inputFluids("phoenixcore:cryo_zirconium_binding_solution 1000")
        .itemOutputs("9x phoenixcore:u233_fuel_pellet")
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV])

    // === START OF PLUTONIUM-241 LINE RECIPES ===

    // Plutonium-241 Fuel Pellet Crafting in Large Chemical Reactor
    greg.large_chemical_reactor("plutonium_241_fuel_pellet_crafting")
        .itemInputs("9x gtceu:plutonium_241_nugget")
        .inputFluids("phoenixcore:cryo_zirconium_binding_solution 1000")
        .itemOutputs("9x phoenixcore:plutonium_241_fuel_pellet")
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV])

    // Uranium-236 Fuel Pellet Crafting in Large Chemical Reactor
    greg.large_chemical_reactor("uranium_236_fuel_pellet_crafting")
        .itemInputs("9x phoenixcore:uranium_236_nugget")
        .inputFluids("phoenixcore:cryo_graphite_binding_solution 1000")
        .itemOutputs("9x phoenixcore:u236_fuel_pellet")
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV])


    greg.large_chemical_reactor("reprocessing/irradiated_uranium_236_nuggets")
        .itemInputs("16x phoenixcore:irradiated_uranium_236_nugget")
        .inputFluids("gtceu:nitric_acid 1000")
        .itemOutputs("10x phoenixcore:spent_uranium_236_dust", "8x phoenixcore:plutonium_fission_ash_dust")
        .duration(300)
        .EUt(GTValues.VA[GTValues.IV]);

    // Reprocessing Depleted Plutonium-241 Nuggets (second stage)
    greg.large_chemical_reactor("reprocessing/depleted_plutonium_241_nuggets")
        .itemInputs("4x phoenixcore:depleted_plutonium_241_nugget")
        .inputFluids("gtceu:nitric_acid 500")
        .itemOutputs("2x gtceu:plutonium_241_dust", "1x phoenixcore:americium_241_dust")
        .duration(200)
        .EUt(GTValues.VA[GTValues.IV]);

    // Americium Hexafluoride Production in Large Chemical Reactor
    greg.large_chemical_reactor("americium_hexafluoride_production")
        .itemInputs("8x phoenixcore:americium_241_dust")
        .inputFluids("gtceu:fluorine 600")
        .outputFluids("phoenixcore:americium_hexafluoride 1000")
        .duration(300)
        .EUt(GTValues.VA[GTValues.IV])

    // === END OF PLUTONIUM-241 LINE RECIPES ===

    // Spent Uranium Reprocessing in Large Chemical Reactor
    greg.large_chemical_reactor("spent_uranium_reprocessing")
        .itemInputs("4x phoenixcore:depleted_uranium_dust")
        .inputFluids("gtceu:nitric_acid 1500")
        .itemOutputs("2x phoenixcore:uranium_236_dust", "1x gtceu:strontium_dust", "1x gtceu:caesium_dust")
        .outputFluids("phoenixcore:fission_products_fluid 500", "phoenixcore:radioactive_gas_mixture 100")
        .duration(120)
        .EUt(GTValues.VA[GTValues.IV]);

    // Reprocessing Irradiated Thorium Rods to Uranium-233 in Large Chemical Reactor
    greg.large_chemical_reactor("reprocessing/thorium_rods_to_uranium_233")
        .itemInputs("16x phoenixcore:irradiated_thorium_nugget")
        .inputFluids("gtceu:nitric_acid 500")
        .itemOutputs("4x phoenixcore:uranium_233_dust", "12x phoenixcore:depleted_thorium_dust")
        .outputFluids("phoenixcore:fission_products_fluid 250")
        .duration(600)
        .EUt(GTValues.VA[GTValues.EV]);

    // Reprocessing Spent Uranium-235 Rods in Large Chemical Reactor
    greg.large_chemical_reactor("reprocessing/spent_uranium_235_rods")
        .itemInputs("16x phoenixcore:spent_uranium_235_nugget")
        .inputFluids("gtceu:nitric_acid 200")
        .itemOutputs("10x phoenixcore:depleted_uranium_dust", "6x gtceu:uranium_235_dust")
        .outputFluids("phoenixcore:fission_products_fluid 100")
        .duration(400)
        .EUt(GTValues.VA[GTValues.HV]);

    // Reprocessing Spent Uranium-233 Rods in Large Chemical Reactor
    greg.large_chemical_reactor("reprocessing/spent_uranium_233_rods")
        .itemInputs("16x phoenixcore:spent_uranium_233_nugget")
        .inputFluids("gtceu:nitric_acid 200")
        .itemOutputs("14x phoenixcore:uranium_233_dust", "4x phoenixcore:depleted_uranium_dust")
        .outputFluids("phoenixcore:fission_products_fluid 100")
        .duration(400)
        .EUt(GTValues.VA[GTValues.EV]);

    // Fission Products Fluid Processing in Distillation Tower
    greg.distillation_tower("fission_products_fluid_processing")
        .inputFluids("phoenixcore:fission_products_fluid 1000")
        .itemOutputs("2x phoenixcore:fissile_ash_dust")
        .outputFluids("phoenixcore:radioactive_gas_mixture 500")
        .duration(400)
        .EUt(GTValues.VA[GTValues.EV]);

    // Radioactive Gas Mixture Separation in Centrifuge
    greg.centrifuge("radioactive_gas_mixture_separatio")
        .inputFluids("phoenixcore:radioactive_gas_mixture 500", "gtceu:nitrogen 100")
        .outputFluids("gtceu:xenon 100", "gtceu:iodine 150", "gtceu:krypton 50", "phoenixcore:inert_gas_waste 250")
        .duration(150)
        .EUt(GTValues.VA[GTValues.IV]);

    // Inert Gas Waste Recycling in Distillation Tower
    greg.distillation_tower("inert_gas_waste_recycling")
        .inputFluids("phoenixcore:inert_gas_waste 1000")
        .outputFluids("gtceu:nitrogen 300", "gtceu:oxygen 100", "gtceu:chlorine 500", "gtceu:argon 50")
        .duration(100)
        .EUt(GTValues.VA[GTValues.EV]);

    // === START OF PLUTONIUM FISSION ASH PROCESSING RECIPES ===

    // Plutonium Fission Ash Dissolution in Large Chemical Reactor
    greg.large_chemical_reactor("plutonium_fission_ash_dissolution")
        .itemInputs("4x phoenixcore:plutonium_fission_ash_dust")
        .inputFluids("gtceu:aqua_regia 500", "gtceu:hydrofluoric_acid 200")
        .outputFluids("phoenixcore:rhodium_palladium_solution 250", "phoenixcore:technetium_strontium_solution 250", "phoenixcore:radioactive_sludge 100", "phoenixcore:gaseous_fission_byproducts 100")
        .duration(600)
        .EUt(GTValues.VA[GTValues.LuV]);

    // Rhodium and Palladium Extraction from Solution in Chemical Reactor
    greg.chemical_reactor("rhodium_palladium_extraction")
        .inputFluids("phoenixcore:rhodium_palladium_solution 250", "gtceu:chlorine 100")
        .itemOutputs("1x gtceu:rhodium_dust", "1x gtceu:palladium_dust")
        .outputFluids("phoenixcore:acidic_waste 50") // New waste fluid
        .duration(200)
        .EUt(GTValues.VA[GTValues.IV]);

    // Technetium and Strontium Separation in Centrifuge
    greg.centrifuge("technetium_strontium_separation")
        .inputFluids("phoenixcore:technetium_strontium_solution 250")
        .itemOutputs("1x gtceu:technetium_dust", "1x gtceu:strontium_dust")
        .outputFluids("phoenixcore:radioactive_sludge 25")
        .duration(150)
        .EUt(GTValues.VA[GTValues.IV]);

    // Gaseous Fission Byproducts Separation in Distillation Tower
    greg.distillation_tower("gaseous_fission_byproducts_separation")
        .inputFluids("phoenixcore:gaseous_fission_byproducts 1000")
        .outputFluids("gtceu:krypton 100", "gtceu:xenon 150", "gtceu:iodine 50", "phoenixcore:trace_fission_gases 700") // New waste fluid
        .duration(250)
        .EUt(GTValues.VA[GTValues.IV]);

    // Processing Radioactive Sludge (from Plutonium Fission Ash and other processes)
    greg.centrifuge("radioactive_sludge_processing")
        .inputFluids("phoenixcore:radioactive_sludge 1000", "minecraft:water 500")
        .itemOutputs("1x gtceu:rare_earth_dust", "1x phoenixcore:trace_actinides_dust") // Recover trace rare earths and actinides
        .duration(400)
        .EUt(GTValues.VA[GTValues.LuV]);

    // Processing Acidic Waste (from Rhodium/Palladium extraction)
    greg.chemical_reactor("acidic_waste_processing")
        .inputFluids("phoenixcore:acidic_waste 1000", "gtceu:acetone 10")
        .itemOutputs("1x gtceu:calcium_dust")
        .outputFluids("gtceu:hydrofluoric_acid 100", "gtceu:nitric_acid 900") // Neutralized fluid waste
        .duration(250)
        .EUt(GTValues.VA[GTValues.EV]);

    // Processing Trace Fission Gases (from Gaseous Fission Byproducts separation)
    greg.distillation_tower("trace_fission_gases_processing")
        .inputFluids("phoenixcore:trace_fission_gases 1000")
        .outputFluids("gtceu:argon 50", "gtceu:neon 25", "gtceu:helium 25", "phoenixcore:inert_gas_waste 900") // Recover trace noble gases, remaining inert waste
        .duration(300)
        .EUt(GTValues.VA[GTValues.LuV]);

    // Recycling Depleted Plutonium (back to a usable form)
    greg.large_chemical_reactor("depleted_plutonium_recycling")
        .itemInputs("8x phoenixcore:depleted_plutonium_241_dust")
        .inputFluids("gtceu:nitric_acid 500", "gtceu:fluorine 100")
        .itemOutputs("2x gtceu:plutonium_241_dust") // Recover generic plutonium dust for re-enrichment
        .duration(500)
        .EUt(GTValues.VA[GTValues.LuV]);

    // === END OF PLUTONIUM FISSION ASH PROCESSING RECIPES ===


    // Fissile Ash Processing in Centrifuge (Original - now for U/Th ash)
    greg.centrifuge("fissile_ash_processing")
        .itemInputs("2x phoenixcore:fissile_ash_dust")
        .inputFluids("gtceu:aqua_regia 100")
        .itemOutputs("1x gtceu:technetium_dust", "4x gtceu:rare_earth_dust")
        .outputFluids("phoenixcore:radioactive_sludge 50")
        .duration(300)
        .EUt(GTValues.VA[GTValues.IV]);

    // Depleted Thorium Recycling in Electric Blast Furnace
    greg.electric_blast_furnace("depleted_thorium_recycling")
        .itemInputs("4x phoenixcore:depleted_thorium_ingot")
        .circuit(2)
        .inputFluids("gtceu:fluorine 250")
        .itemOutputs("3x gtceu:thorium_dust")
        .outputFluids("phoenixcore:radioactive_sludge 250")
        .blastFurnaceTemp(1200)
        .duration(300)
        .EUt(GTValues.VA[GTValues.EV]);


    // --- Machine & Component Assembly ---
    // Active Transformer in Assembler
    greg.assembler("active_transformer")
        .itemInputs("gtceu:iv_transformer_16a", "8x #gtceu:circuits/iv", "8x phoenixcore:superconductive_honey_double_wire", "10x gtceu:hpic_chip")
        .inputFluids("gtceu:pcb_coolant 1000")
        .itemOutputs("gtceu:active_transformer")
        .duration(450)
        .EUt(GTValues.VA[GTValues.IV]);

    // Comb Decanter Assembly in Assembler
    greg.assembler("comb_decanter_recipe_assembler")
        .itemInputs("4x minecraft:honey_block", "kubejs:conductive_honey_coil", "2x gtceu:samarium_iron_arsenic_oxide_double_wire", "2x gtceu:iv_field_generator", "2x #gtceu:circuits/iv")
        .inputFluids("gtceu:soldering_alloy 5044")
        .itemOutputs("phoenixcore:comb_decanter")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(400)

    // Apis Progenitor Assembly in Assembler
    greg.assembler("apis_progenitor_recipe_assembler")
        .itemInputs("4x phoenixcore:honey_treat", "4x #minecraft:flowers", "#gtceu:circuits/iv", "gtceu:iv_machine_hull", "32x gtceu:fine_platinum_wire")
        .itemOutputs("phoenixcore:apis_progenitor")
        .inputFluids("phoenixcore:honey 1000")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(600)

    // Swarm Nurturer Assembly in Assembler
    greg.assembler("swarm_nurturer_recipe_assembler")
        .itemInputs("gtceu:iv_machine_hull", "#gtceu:circuits/iv", "2x gtceu:stainless_steel_frame", "12x phoenixcore:source_imbued_titanium_screw", "gtceu:rtm_alloy_coil_block")
        .inputFluids("gtceu:vanadium_gallium 500")
        .itemOutputs("phoenixcore:swarm_nurturer")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(800)

    // Simulated Colony Assembly in Assembler
    greg.assembler("simulated_colony_recipe_assembler")
        .itemInputs("2x phoenixcore:source_imbued_titanium_gear", "32x #minecraft:flowers", "12x #forge:dyes", "3x #gtceu:circuits/iv", "gtceu:iv_machine_hull", "16x phoenixcore:honey_treat")
        .inputFluids("phoenixcore:sugar_water 1000")
        .itemOutputs("phoenixcore:simulated_colony")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(900)
        // Breeder Reactor Controller in Assembler
    greg.assembler("breeder_reactor_controller")
        .itemInputs(
            "phoenixcore:pressurized_fission_reactor",
            "2x phoenixcore:void_touched_tungsten_steel_rotor",
            "4x #gtceu:circuits/iv",
            "2x phoenixcore:zircalloy_gear",
            "2x gtceu:iv_machine_hull",
            "16x gtceu:uranium_235_rod"
        )
        .inputFluids("phoenixcore:cryo_zirconium_binding_solution 6000")
        .itemOutputs("phoenixcore:high_performance_breeder_reactor")
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV])

    // IV Confectionery Fabricator in Assembler
    greg.assembler("iv_confectionery_fabricator")
        .itemInputs("4x phoenixcore:void_touched_tungsten_steel_rotor", "1x minecraft:honeycomb", "2x #gtceu:circuits/iv", "gtceu:iv_machine_hull", "1x gtceu:iv_sensor")
        .itemOutputs("gtceu:iv_confectionery_fabricator")
        .inputFluids("phoenixcore:honey 1700")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(600)

    // LUV Confectionery Fabricator in Assembly Line
    greg.assembly_line("luv_confectionery_fabricator")
        .itemInputs("4x phoenixcore:resonant_rhodium_alloy_rotor", "4x phoenixcore:honey_treat", "2x #gtceu:circuits/luv", "gtceu:luv_machine_hull", "1x gtceu:luv_sensor")
        .itemOutputs("gtceu:luv_confectionery_fabricator")
        .inputFluids("phoenixcore:honey 1700", "gtceu:soldering_alloy 4000")
        .stationResearch(b => b.researchStack("gtceu:iv_confectionery_fabricator")
            .EUt(131000).CWUt(1, 1)
            .dataStack("gtceu:data_stick"))
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(600)

    // ZPM Confectionery Fabricator in Assembly Line
    greg.assembly_line("zpm_confectionery_fabricator")
        .itemInputs("4x phoenixcore:advanced_quin_naquadian_alloy_rotor", "16x phoenixcore:honey_treat", "2x #gtceu:circuits/zpm", "gtceu:zpm_machine_hull", "1x gtceu:zpm_sensor")
        .itemOutputs("gtceu:zpm_confectionery_fabricator")
        .inputFluids("phoenixcore:honey 1700", "gtceu:soldering_alloy 2500")
        .stationResearch(b => b.researchStack("gtceu:luv_confectionery_fabricator").EUt(131000).CWUt(1, 1))
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(600)


    greg.large_chemical_reactor("exotic_fission_concentrate_production")
        .itemInputs("2x gtceu:technetium_dust", "2x gtceu:strontium_dust", "4x gtceu:rare_earth_dust")
        .inputFluids("gtceu:iodine 500", "gtceu:fluoroantimonic_acid 250") // New fluid inputs
        .itemOutputs("12x phoenixcore:exotic_fission_concentrate_dust")
        .duration(300) // Increased duration for complexity
        .EUt(GTValues.VA[GTValues.IV]); // Increased EUt to IV

    // Recipe for Advanced Quin-Naquadian Alloy (using Exotic Fission Concentrate)
    greg.large_chemical_reactor("advanced_quin_naquadian_alloy_synthesis")
        .itemInputs("2x gtceu:naquadah_alloy_dust", "1x phoenixcore:exotic_fissile_materials_clump_dust", "1x phoenixcore:nevvonian_iron_dust")
        .inputFluids("phoenixcore:critical_steam 500")
        .itemOutputs("5x phoenixcore:advanced_quin_naquadian_alloy_dust")
        .duration(200)
        .EUt(GTValues.VA[GTValues.LuV]);

    // Recipe for Exotic Fissile Materials Clump (binding concentrate with cryo-binding solutions)
    greg.large_chemical_reactor("exotic_fissile_materials_clump_production")
        .itemInputs("1x phoenixcore:exotic_fission_concentrate_dust")
        .inputFluids("phoenixcore:cryo_zirconium_binding_solution 1000", "phoenixcore:cryo_graphite_binding_solution 1000")
        .itemOutputs("4x phoenixcore:exotic_fissile_materials_clump_dust")
        .duration(400) // Significant duration for binding
        .EUt(GTValues.VA[GTValues.IV]); // High tier process
    // ===========================================
    // === Recipes to create the Midway Canisters ===
    // ===========================================
    // Hostile Midway Canister
    event.recipes.gtceu.mixer("midway_hostile_mob_essence_canister")
        .itemInputs(
            "kubejs:empty_hostile_mob_essence_canister",
            "32x minecraft:rotten_flesh",
            "32x minecraft:bone",
            "32x minecraft:arrow",
            "32x minecraft:gunpowder",
            "32x minecraft:string"
        )
        .inputFluids(
            "gtceu:hydrofluoric_acid 250",
            "gtceu:polytetrafluoroethylene 144"
        )
        .itemOutputs("kubejs:midway_hostile_mob_essence_canister")
        .duration(100)
        .EUt(GTValues.LV)

    // Hostile Full Canister
    event.recipes.gtceu.mixer("full_hostile_mob_essence_canister")
        .itemInputs(
            "kubejs:midway_hostile_mob_essence_canister",
            "32x minecraft:spider_eye",
            "32x minecraft:slime_ball",
            "32x minecraft:ghast_tear",
            "32x minecraft:blaze_rod",
            "32x minecraft:wither_skeleton_skull"
        )
        .inputFluids(
            "gtceu:hydrofluoric_acid 250",
            "gtceu:polytetrafluoroethylene 144"
        )
        .itemOutputs("kubejs:full_hostile_mob_essence_canister")
        .duration(200)
        .EUt(GTValues.LV)

    // Passive Midway Canister
    event.recipes.gtceu.mixer("midway_passive_mob_essence_canister")
        .itemInputs(
            "kubejs:empty_passive_mob_essence_canister",
            "32x minecraft:feather",
            "32x minecraft:leather",
            "32x minecraft:honey_bottle",
            "32x minecraft:milk_bucket"
        )
        .inputFluids(
            "phoenixcore:honey 250",
            "phoenixcore:cream 144"
        )
        .itemOutputs("kubejs:midway_passive_mob_essence_canister")
        .duration(100)
        .EUt(GTValues.LV)

    // Passive Full Canister
    event.recipes.gtceu.mixer("full_passive_mob_essence_canister")
        .itemInputs(
            "kubejs:midway_passive_mob_essence_canister",
            "32x minecraft:bone_meal",
            "32x minecraft:white_wool",
            "32x minecraft:egg",
            "32x minecraft:rabbit_hide"
        )
        .inputFluids(
            "phoenixcore:honey 250",
            "phoenixcore:cream 144"
        )
        .itemOutputs("kubejs:full_passive_mob_essence_canister")
        .duration(200)
        .EUt(GTValues.LV)

    // Neutral Midway Canister
    event.recipes.gtceu.mixer("midway_neutral_mob_essence_canister")
        .itemInputs(
            "kubejs:empty_neutral_mob_essence_canister",
            "32x minecraft:slime_ball",
            "32x minecraft:ender_pearl",
            "32x minecraft:spider_eye",
            "32x minecraft:ink_sac"
        )
        .inputFluids(
            "phoenixcore:resonant_ender 144",
            "gtceu:liquid_ender_air 100"
        )
        .itemOutputs("kubejs:midway_neutral_mob_essence_canister")
        .duration(100)
        .EUt(GTValues.LV)

    // Neutral Full Canister
    event.recipes.gtceu.mixer("full_neutral_mob_essence_canister")
        .itemInputs(
            "kubejs:midway_neutral_mob_essence_canister",
            "32x minecraft:iron_ingot",
            "32x minecraft:sugar",
            "32x minecraft:glowstone_dust",
            "32x minecraft:emerald"
        )
        .inputFluids(
            "phoenixcore:resonant_ender 144",
            "gtceu:liquid_ender_air 100"
        )
        .itemOutputs("kubejs:full_neutral_mob_essence_canister")
        .duration(200)
        .EUt(GTValues.LV)

    // ===========================================
    // === Recipe to create the Final Capsule ===
    // ===========================================

    // This recipe uses the GTCEu ASSEMBLER machine, which is great for combining items.
    // Recipes to make the empty canisters
    // Hostile Mob Essence Canister (Empty)
    event.recipes.gtceu.assembler("empty_hostile_mob_essence_canister")
        .itemInputs(
            "2x phoenixcore:dense_source_imbued_titanium_plate",
            "16x phoenixcore:source_titanium_filament_double_wire",
            "16x phoenixcore:superconductive_honey_double_wire",
            "16x phoenixcore:extremely_modified_space_grade_steel_double_wire",
            "gtceu:quantum_star",
            "gtceu:active_transformer"
        )
        .inputFluids("phoenixcore:void_touched_tungsten_steel 288", "phoenixcore:honey 500")
        .itemOutputs("kubejs:empty_hostile_mob_essence_canister")
        .duration(300)
        .EUt(GTValues.VA[GTValues.IV])

    // Passive Mob Essence Canister (Empty)
    event.recipes.gtceu.assembler("empty_passive_mob_essence_canister")
        .itemInputs(
            "2x phoenixcore:dense_source_imbued_titanium_plate",
            "16x phoenixcore:source_titanium_filament_double_wire",
            "16x phoenixcore:superconductive_honey_double_wire",
            "16x phoenixcore:extremely_modified_space_grade_steel_double_wire",
            "minecraft:golden_apple",
            "minecraft:bee_nest"
        )
        .inputFluids("phoenixcore:honey 1000", "phoenixcore:cream 288")
        .itemOutputs("kubejs:empty_passive_mob_essence_canister")
        .duration(300)
        .EUt(GTValues.VA[GTValues.IV])

    // Neutral Mob Essence Canister (Empty)
    event.recipes.gtceu.assembler("empty_neutral_mob_essence_canister")
        .itemInputs(
            "2x phoenixcore:dense_source_imbued_titanium_plate",
            "16x phoenixcore:source_titanium_filament_double_wire",
            "16x phoenixcore:superconductive_honey_double_wire",
            "16x phoenixcore:extremely_modified_space_grade_steel_double_wire",
            "minecraft:ender_pearl",
            "phoenixcore:swarm_nurturer"
        )
        .inputFluids("phoenixcore:resonant_ender 288", "gtceu:liquid_ender_air 200")
        .itemOutputs("kubejs:empty_neutral_mob_essence_canister")
        .duration(300)
        .EUt(GTValues.VA[GTValues.IV])

    // Final Capsule Recipe (already present)
    event.recipes.gtceu.assembler("fully_charged_mob_essence_capsule_recipe")
        .itemInputs(
            "kubejs:full_passive_mob_essence_canister",
            "kubejs:full_neutral_mob_essence_canister",
            "kubejs:full_hostile_mob_essence_canister"
        )
        .itemOutputs("kubejs:fully_charged_mob_essence_capsule")
        .duration(400) // This is a complex recipe, so it should take longer
        .EUt(GTValues.IV) // And require a higher voltage tier

// --- 1. FUEL RODS (FUEL_ROD_T1 - FUEL_ROD_T5) ---
// T1: HV | T2: EV | T3: IV | T4: LuV | T5: ZPM
    const fuelRods = [
        { id: 't1_fuel_rod', tier: 'hv', input: 'gtceu:uranium_dust', plate: 'phoenixcore:frost_reinforced_stained_steel', volt: 480 },
        { id: 't2_fuel_rod', tier: 'ev', input: 'gtceu:uranium_dust', plate: 'phoenixcore:source_imbued_titanium', volt: 1920 },
        { id: 't3_fuel_rod', tier: 'iv', input: 'phoenixcore:u235_fuel_pellet', plate: 'phoenixcore:source_imbued_titanium', volt: 7680 },
        { id: 't4_fuel_rod', tier: 'luv', input: 'phoenixcore:plutonium_241_fuel_pellet', plate: 'phoenixcore:resonant_rhodium_alloy', volt: 30720 },
        { id: 't5_fuel_rod', tier: 'zpm', input: 'phoenixcore:u236_fuel_pellet', plate: 'phoenixcore:advanced_quin_naquadian_alloy', volt: 122880 }
    ];

    fuelRods.forEach(f => {
        greg.assembler(f.id)
            .itemInputs(`gtceu:${f.tier}_machine_casing`, `4x ${f.plate}_plate`, f.input)
            .itemOutputs(`phoenixcore:${f.id}`)
            .duration(200)
            .EUt(f.volt);
    });

// --- 2. BREEDER BLANKETS ---
// Thorium (HV)
    greg.assembler('thorium_blanket')
        .itemInputs('gtceu:hv_machine_casing', '2x gtceu:lead_plate', 'phoenixcore:thorium_fuel_pellet')
        .itemOutputs('phoenixcore:thorium_blanket')
        .duration(400).EUt(480);

// Uranium (EV) - Updated from U236
    greg.assembler('uranium_blanket')
        .itemInputs('gtceu:ev_machine_casing', '2x phoenixcore:source_imbued_titanium_plate', 'phoenixcore:u236_fuel_pellet')
        .itemOutputs('phoenixcore:uranium_blanket')
        .duration(400).EUt(1920);

// Neptunium (IV)
    greg.assembler('neptunium_blanket')
        .itemInputs('gtceu:iv_machine_casing', 'phoenixcore:frost_reinforced_stained_steel_plate', 'gtceu:lead_dust')
        .itemOutputs('phoenixcore:neptunium_blanket')
        .duration(400).EUt(7680);

// Plutonium (LuV)
    greg.assembler('plutonium_blanket')
        .itemInputs('gtceu:luv_machine_casing', '2x phoenixcore:resonant_rhodium_alloy_plate', 'gtceu:uranium_dust')
        .itemOutputs('phoenixcore:plutonium_blanket')
        .duration(600).EUt(30720);

// Americium (ZPM)
    greg.assembler('americium_blanket')
        .itemInputs('gtceu:zpm_machine_casing', '2x phoenixcore:advanced_quin_naquadian_alloy_plate', 'phoenixcore:u236_fuel_pellet')
        .itemOutputs('phoenixcore:americium_blanket')
        .duration(800).EUt(122880);

// --- 3. COOLERS ---
    const coolers = [
        { id: 'cooler_basic', tier: 'hv', mat: 'gtceu:tin', volt: 480 },
        { id: 'cooler_ev', tier: 'ev', mat: 'phoenixcore:source_imbued_titanium', volt: 1920 },
        { id: 'cooler_iv', tier: 'iv', mat: 'phoenixcore:dense_source_imbued_titanium', volt: 7680 },
        { id: 'cooler_luv', tier: 'luv', mat: 'phoenixcore:resonant_rhodium_alloy', volt: 30720 }
    ];

    coolers.forEach(c => {
        greg.assembler(c.id)
            .itemInputs(`gtceu:${c.tier}_machine_casing`, `4x ${c.mat}_plate`, '4x gtceu:copper_single_wire')
            .itemOutputs(`phoenixcore:${c.id}`)
            .duration(150).EUt(c.volt);
    });

// --- 4. MODERATORS ---
// Graphite (HV)
    greg.assembler('graphite_moderator')
        .itemInputs('gtceu:hv_machine_casing', '16x gtceu:graphite_dust')
        .itemOutputs('phoenixcore:graphite_moderator')
        .duration(200).EUt(480);

// Beryllium (EV)
    greg.assembler('beryllium_moderator')
        .itemInputs('gtceu:ev_machine_casing', '16x gtceu:beryllium_dust')
        .itemOutputs('phoenixcore:beryllium_moderator')
        .duration(200).EUt(1920);

// Heavy Water (IV)
    greg.assembler('heavy_water_moderator')
        .itemInputs('gtceu:iv_machine_casing', '2x gtceu:tungsten_steel_large_fluid_pipe')
        .inputFluids('minecraft:water 1000')
        .itemOutputs('phoenixcore:heavy_water_moderator')
        .duration(300).EUt(7680);

// Niobium-SiC (LuV)
    greg.assembler('niobium_sic_moderator')
        .itemInputs('gtceu:luv_machine_casing', '4x gtceu:niobium_nitride_plate', '8x phoenixcore:niobium_modified_silicon_carbide_rod')
        .itemOutputs('phoenixcore:niobium_sic_moderator')
        .duration(600).EUt(30720);


})

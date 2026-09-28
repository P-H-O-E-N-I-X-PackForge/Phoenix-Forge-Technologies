/**
material and fluid tooltips
 */

ItemEvents.tooltip(event => {

    // Helper function to apply a tooltip to GTCEu material forms
    function addGTCEuMaterialTooltips(materialName, descriptionText) {
        event.add(`gtceu:${materialName}`, descriptionText); // For generic material item if it exists
        event.add(`gtceu:${materialName}_ingot`, descriptionText);
        event.add(`gtceu:${materialName}_dust`, descriptionText);
        event.add(`gtceu:${materialName}_block`, descriptionText);
        event.add(`gtceu:${materialName}_fluid_bucket`, descriptionText);
        event.add(`gtceu:${materialName}_turbine_rotor`, descriptionText);
        event.add(`gtceu:hot_${materialName}_ingot`, Text.of("§c§lThis ingot is scalding hot! Requires immediate cooling."));
        event.add(`gtceu:${materialName}_plate`, descriptionText);
        event.add(`gtceu:dense_${materialName}_plate`, descriptionText);
        event.add(`gtceu:double_${materialName}_plate`, descriptionText);
        event.add(`gtceu:tiny_${materialName}_dust`, descriptionText);
        event.add(`gtceu:small_${materialName}_dust`, descriptionText);
        event.add(`gtceu:${materialName}_foil`, descriptionText);
        event.add(`gtceu:${materialName}_rod`, descriptionText);
        event.add(`gtceu:long_${materialName}_rod`, descriptionText);
        event.add(`gtceu:${materialName}_ring`, descriptionText);
        event.add(`gtceu:${materialName}_round`, descriptionText);
        event.add(`gtceu:${materialName}_gear`, descriptionText);
        event.add(`gtceu:small_${materialName}_gear`, descriptionText);
        event.add(`gtceu:${materialName}_spring`, descriptionText);
        event.add(`gtceu:${materialName}_bolt`, descriptionText);
        event.add(`gtceu:${materialName}_screw`, descriptionText);
        event.add(`gtceu:${materialName}_frame`, descriptionText);
        event.add(`gtceu:${materialName}_nugget`, descriptionText);
        event.add(`gtceu:${materialName}_rotor`, descriptionText);
        event.add(`gtceu:${materialName}turbine__rotor`, descriptionText);
        event.add(`gtceu:crushed_${materialName}_ore`, descriptionText);
        event.add(`gtceu:refined_${materialName}_ore`, descriptionText);
        event.add(`gtceu:purified_${materialName}_ore`, descriptionText);
        event.add(`gtceu:deepslate_${materialName}_ore`, descriptionText);


        // Wires and Cables
        event.add(`gtceu:${materialName}_wire`, descriptionText);
        event.add(`gtceu:fine_${materialName}_wire`, descriptionText);
        event.add(`gtceu:${materialName}_single_wire`, descriptionText);
        event.add(`gtceu:${materialName}_double_wire`, descriptionText);
        event.add(`gtceu:${materialName}_quadruple_wire`, descriptionText);
        event.add(`gtceu:${materialName}_octal_wire`, descriptionText);
        event.add(`gtceu:${materialName}_hex_wire`, descriptionText);
        event.add(`gtceu:${materialName}_cable`, descriptionText);
        event.add(`gtceu:${materialName}_single_cable`, descriptionText);
        event.add(`gtceu:${materialName}_double_cable`, descriptionText);
        event.add(`gtceu:${materialName}_quadruple_cable`, descriptionText);
        event.add(`gtceu:${materialName}_octal_cable`, descriptionText);
        event.add(`gtceu:${materialName}_hex_cable`, descriptionText);
        event.add(`gtceu:${materialName}_sword`, descriptionText);
        event.add(`gtceu:${materialName}_pickaxe`, descriptionText);
        event.add(`gtceu:${materialName}_drill_lv`, descriptionText);
        event.add(`gtceu:${materialName}_drill_mv`, descriptionText);
        event.add(`gtceu:${materialName}_drill_hv`, descriptionText);
        event.add(`gtceu:${materialName}_drill_ev`, descriptionText);
        event.add(`gtceu:${materialName}_drill_iv`, descriptionText);
        event.add(`gtceu:${materialName}_axe`, descriptionText);
        event.add(`gtceu:${materialName}_chainsaw_lv`, descriptionText);
        event.add(`gtceu:${materialName}_shovel`, descriptionText);
        event.add(`gtceu:${materialName}_spade`, descriptionText);
        event.add(`gtceu:${materialName}_hoe`, descriptionText);
        event.add(`gtceu:${materialName}_scythe`, descriptionText);
        event.add(`gtceu:${materialName}_shears`, descriptionText);
        event.add(`gtceu:${materialName}_wrench`, descriptionText);
        event.add(`gtceu:${materialName}_wrench_lv`, descriptionText);
        event.add(`gtceu:${materialName}_wrench_hv`, descriptionText);
        event.add(`gtceu:${materialName}_wrench_iv`, descriptionText);
        event.add(`gtceu:${materialName}_screwdriver`, descriptionText);
        event.add(`gtceu:${materialName}_screwdriver_lv`, descriptionText);
        event.add(`gtceu:${materialName}_wire_cutter`, descriptionText);
        event.add(`gtceu:${materialName}_wire_cutter_lv`, descriptionText);
        event.add(`gtceu:${materialName}_wire_cutter_hv`, descriptionText);
        event.add(`gtceu:${materialName}_wire_cutter_iv`, descriptionText);
        event.add(`gtceu:${materialName}_mortar`, descriptionText);
        event.add(`gtceu:${materialName}_hard_hammer`, descriptionText);
        event.add(`gtceu:${materialName}_mining_hammer`, descriptionText);
        event.add(`gtceu:${materialName}_saw`, descriptionText);
        event.add(`gtceu:${materialName}_buzzsaw`, descriptionText);
        event.add(`gtceu:${materialName}_knife`, descriptionText);
        event.add(`gtceu:${materialName}_butchery_knife`, descriptionText);
        event.add(`gtceu:${materialName}_file`, descriptionText);
        event.add(`gtceu:${materialName}_crowbar`, descriptionText);
        event.add(`gtceu:${materialName}_gem`, descriptionText);
        event.add(`gtceu:flawless_${materialName}_gem`, descriptionText);
        event.add(`gtceu:exquisite_${materialName}_gem`, descriptionText);
        // Add any other specific forms you need that are not caught by these
        // e.g., event.add(`gtceu:${materialName}_nugget`, descriptionText);
    }

    // Helper function to apply a tooltip to KubeJS registered fluid buckets
    function addKubeJSUIDFluidTooltip(fluidName, descriptionText) {
        event.add(`kubejs:${fluidName}_bucket`, descriptionText);
    }

    // --- Disabled Items ---
    event.add(
        [
            "sophisticatedbackpacks:inception_upgrade",
            "sophisticatedbackpacks:battery_upgrade",
            "storagedrawers:redstone_upgrade",
            "storagedrawers:min_redstone_upgrade",
            "storagedrawers:max_redstone_upgrade",
            "storagedrawers:compacting_drawers_3",
            "storagedrawers:fill_level_upgrade",
            "storagedrawers:illumination_upgrade",
            "expatternprovider:caner",
            "ae2:inscriber",
            "expatternprovider:ex_inscriber",
            "expatternprovider:ingredient_buffer"
        ],
        Text.of("§c§lDisabled in this modpack!")
    );

    // --- Other Specific Item/Block Tooltips ---
    event.add("gtceu:greenhouse", Text.of("§7Two green thumbs up!"));
    event.add("gtceu:construction_core", [
        Text.of("§7Offers cheaper recipes for building blocks!"),
        Text.of("§8Requires Construction Foam to operate.")
    ]);
    event.add("ae2:controller", Text.of("§7Channels are §cdisabled§7."));


    event.add("expatternprovider:fishbig", Text.of("§7Congratulations! You won Minecraft."));
    event.add("kubejs:honey_comb_base_mold", Text.of("§6Finally, your first honeycomb is in your grasp."));
    event.add("kubejs:honey_comb_base", Text.of("§6Your foray into the world of bees starts now!"));

    // --- GTCEu Materials with Generic Tooltips ---
    addGTCEuMaterialTooltips("antimatter", Text.of("§cPure antimatter, capable of immense destruction upon contact with normal matter. Handle with extreme caution."));
    addGTCEuMaterialTooltips("aurum_steel", Text.of("§6A golden-hued steel, known for its resilience and unique properties."));
    addGTCEuMaterialTooltips("stabilized_antimatter", Text.of("§6A highly energetic and dangerous material, tamed for industrial use."));
    addGTCEuMaterialTooltips("fiery_bronze", Text.of("§cBronze imbued with intense heat, resistant to extreme temperatures."));
    addGTCEuMaterialTooltips("space_grade_steel", Text.of("§3Steel designed for the harsh vacuum of space, incredibly tough."));
    addGTCEuMaterialTooltips("infinity", Text.of("§dA material said to hold limitless potential."));
    addGTCEuMaterialTooltips("source_imbued_titanium", Text.of("§5Titanium infused with magical energy, granting new capabilities."));
    addGTCEuMaterialTooltips("zircon", Text.of("§fA durable mineral, often used in high-temperature applications."));
    addGTCEuMaterialTooltips("aluminfrost", Text.of("§9An aluminum alloy with unique cryogenic properties."));
    addGTCEuMaterialTooltips("superconductive_honey", Text.of("§eA miraculous golden substance imbued with exotic cryogenic properties, capable of conducting energy with almost zero resistance."));
    addGTCEuMaterialTooltips("magmatic_manganese_lead", Text.of("§6A lead alloy forged in extreme heat, with conductive properties."));
    addGTCEuMaterialTooltips("cryogenic_aluminum_strand", Text.of("§9Aluminum refined for extreme cold, excellent for superconductivity."));
    addGTCEuMaterialTooltips("zircalloy", Text.of("§7A zirconium alloy, primarily used in nuclear applications."));
    addGTCEuMaterialTooltips("icy_steel_matrix", Text.of("§bSteel interwoven with cryogenic elements, forming a stable matrix."));
    addGTCEuMaterialTooltips("source_titanium_filament", Text.of("§5Titanium processed into fine threads, infused with magical energy."));
    addGTCEuMaterialTooltips("low_level_radioactive_waste", Text.of("§2Radioactive by-product, requiring careful recyling."));
    addGTCEuMaterialTooltips("hafnium_chloride", Text.of("§7A reactive compound, often used in chemical processes."));
    addGTCEuMaterialTooltips("argentum", Text.of("§1A silvery material, often associated with magical conductivity."));
    addGTCEuMaterialTooltips("unrefined_aluminfrost", Text.of("§9AluminFrost ore, yet to be purified for use."));
    addGTCEuMaterialTooltips("permafrost", Text.of("§9Extremely cold ground, useful for cryogenic research."));
    addGTCEuMaterialTooltips("dormant_ember", Text.of("§cThe last remmants of a great fire that once ravaged the world."));
    addGTCEuMaterialTooltips("uranium_oxide", Text.of("§aThe primary fuel for early fission reactors."));
    addGTCEuMaterialTooltips("frost_reinforced_stained_steel", Text.of("§bSteel hardened by extreme cold, with improved durability."));
    addGTCEuMaterialTooltips("gold_iron_alloy", Text.of("§6A common alloy, combining the properties of gold and iron."));
    addGTCEuMaterialTooltips("85_percent_pure_nevonian_steel", Text.of("§7A high-purity steel from Nevon that is seen throughout many worlds. It is prized for its exceptional strength and magical capabilities."));
    addGTCEuMaterialTooltips("blazing_crystal", Text.of("§cA crystal radiating intense heat, charged with fiery energy."));
    addGTCEuMaterialTooltips("energized_steel", Text.of("§9Steel imbued with electrical energy, enhancing its properties."));
    addGTCEuMaterialTooltips("niotic_crystal", Text.of("§5A powerful crystal, often used in advanced magical or energy applications."));
    addGTCEuMaterialTooltips("spirited_crystal", Text.of("§dA vibrant crystal, humming with an ethereal or lively essence."));
    addGTCEuMaterialTooltips("nitro", Text.of("§4A volatile and highly reactive compound, often used for explosive power."));
    addGTCEuMaterialTooltips("honey", Text.of("§6A sweet, viscous substance, often used in organic or alchemical processes."));
    addGTCEuMaterialTooltips("fluix", Text.of("§9A versatile crystal, fundamental for AE2 technologies."));
    addGTCEuMaterialTooltips("conductive_alloy", Text.of("§8An alloy designed for superior electrical conductivity."));
    addGTCEuMaterialTooltips("energetic_alloy", Text.of("§eAn alloy storing latent energy, often used in power generation."));
    addGTCEuMaterialTooltips("vibrant_alloy", Text.of("§aA highly energized alloy, glowing with stored power."));
    addGTCEuMaterialTooltips("end_steel", Text.of("§5Steel from the End, exceptionally durable."));
    addGTCEuMaterialTooltips("lumium", Text.of("§eA luminous alloy, capable of emitting light."));
    addGTCEuMaterialTooltips("signalum", Text.of("§cA redstone-infused alloy, used for signal transmission."));
    addGTCEuMaterialTooltips("enderium", Text.of("§3A rare alloy, highly resistant and dimensionally stable."));
    addGTCEuMaterialTooltips("dark_steel", Text.of("§0A reinforced steel from the darkness, exceptionally strong."));
    addGTCEuMaterialTooltips("soularium", Text.of("§8An alloy imbued with souls, often used in necromantic arts."));
    addGTCEuMaterialTooltips("electrical_steel", Text.of("§7Steel enhanced for electrical applications, common in circuits."));
    addGTCEuMaterialTooltips("voidglass_shard", Text.of("§5A physical manifestation of the Void. It boasts a tiny fraction of its power, and you can hear the Void's power pulse through it."));
    addGTCEuMaterialTooltips("uranium_233", Text.of("§aA highly efficient fissile isotope, bred from thorium. Ideal for sustainable energy generation."));

    // Uranium-236
    addGTCEuMaterialTooltips("uranium_236", Text.of("§bA neutron-rich uranium isotope, often a byproduct of U-235 fission."));

    // Irradiated Thorium
    addGTCEuMaterialTooltips("irradiated_thorium", Text.of("§6Thorium exposed to intense neutron flux, containing newly bred fissile materials."));

    // Spent Uranium-233
    addGTCEuMaterialTooltips("spent_uranium_233", Text.of("§4Uranium-233 fuel depleted from reactor operation, still highly radioactive."));

    // Spent Uranium-235
    addGTCEuMaterialTooltips("spent_uranium_235", Text.of("§4Uranium-235 fuel depleted from reactor operation, rich in valuable byproducts."));

    // Depleted Uranium Reactor
    addGTCEuMaterialTooltips("depleted_uranium_reactor", Text.of("§8Depleted uranium specifically processed from reactor spent fuel, ideal for breeding advanced actinides."));
    // Fissile Ash
    addGTCEuMaterialTooltips("fissile_ash", Text.of("§7A dense, highly radioactive ash containing trace heavy elements, byproduct of fission product separation."));

    // Fission Products Fluid
    addGTCEuMaterialTooltips("fission_products_fluid", Text.of("§2A highly complex and dangerous liquid mixture of various radioactive fission byproducts."));

    // Depleted Thorium
    addGTCEuMaterialTooltips("depleted_thorium", Text.of("§8Thorium exhausted of its breeding potential, primarily used for radiation shielding or disposal."));

    // Resonant Rhodium Alloy
    addGTCEuMaterialTooltips("resonant_rhodium_alloy", Text.of("§bAn advanced rhodium-based alloy, infused with the power of inverting polarity for enhanced conductivity and stability in LuV applications."));

    // --- Complex / Endgame GTCEu Materials with descriptions ---
    addGTCEuMaterialTooltips("akashic_zeronium", Text.of("§6A transcendental material, bridging the gap between reality and the Akasha."));
    addGTCEuMaterialTooltips("phoenix_enriched_naquad", Text.of("§cNaquadah, infused with the regenerative power of the Phoenix Force, for your first taste of ultimate power."));
    addGTCEuMaterialTooltips("phoenix_enriched_tritanium", Text.of("§cTritanium, supercharged by phoenix energy, offering unmatched resilience and conductivity."));
    addGTCEuMaterialTooltips("aetherium_steel", Text.of("§9Steel alloyed with ethereal Aetherium, granting lightweight strength and magical resonance."));
    addGTCEuMaterialTooltips("void_touched_tungsten_steel", Text.of("§6A rare and potent alloy: tungsten, meticulously gilded with the essence of the void. Its unique composition grants it unparalleled strength and an unsettling shimmer."));
    addGTCEuMaterialTooltips("subspace_cobalt", Text.of("§3Cobalt existing partially in subspace, allowing for unique dimensional interactions."));
    addGTCEuMaterialTooltips("singularity_forged_titanium", Text.of("§7Titanium forged at the edge of a singularity, imbued with impossible durability."));
    addGTCEuMaterialTooltips("exotic_vanadium_composite", Text.of("§6A composite of exotic vanadium, pushing the limits of material science with its unique properties."));
    addGTCEuMaterialTooltips("dark_matter_plated_iridium", Text.of("§0Iridium coated with a layer of stable dark matter, offering unparalleled protection."));
    addGTCEuMaterialTooltips("corrupted_hyperalloy", Text.of("§dA powerful alloy twisted by unknown corruption, exhibiting unpredictable but immense power."));
    addGTCEuMaterialTooltips("reality_bound_osmium", Text.of("§aOsmium anchored to the fabric of reality, providing a stable foundation for dimension-spanning devices."));
    addGTCEuMaterialTooltips("void_stitched_neodymium", Text.of("§5Neodymium interwoven with void energy, enabling strange interactions with spatial fabric."));
    addGTCEuMaterialTooltips("celestial_aurorium", Text.of("§6A radiant metal from celestial origins, humming with cosmic power and extraordinary properties."));
    addGTCEuMaterialTooltips("primordial_flux_metal", Text.of("§9A metal born from primordial energies, capable of channeling raw flux and power."));
    addGTCEuMaterialTooltips("eternal_starforged_steel", Text.of("§7Steel forged in the heart of dying stars, possessing enduring strength and resilience."));
    addGTCEuMaterialTooltips("dimensional_reflection_alloy", Text.of("§9An alloy that mirrors dimensional properties, useful for interdimensional travel."));
    addGTCEuMaterialTooltips("timewoven_platinum", Text.of("§fPlatinum interlaced with temporal strands, allowing for subtle manipulation of localized time."));
    addGTCEuMaterialTooltips("soulbound_ethersteel", Text.of("§9Steel imbued with captured souls and ethereal energy, making it unnaturally resilient."));
    addGTCEuMaterialTooltips("tachyon_infused_chromium", Text.of("§9Chromium infused with tachyons, capable of exceeding light speed in certain applications."));
    addGTCEuMaterialTooltips("echo_crystal_alloy", Text.of("§5An alloy resonating with latent echoes of past events, used in reality manipulation."));
    addGTCEuMaterialTooltips("nebular_resonance_ingot", Text.of("§7An ingot that vibrates with nebular energy, crucial for cosmic machinery."));
    addGTCEuMaterialTooltips("paradoxium", Text.of("§dA material that defies conventional physics, existing in a state of paradox."));
    addGTCEuMaterialTooltips("phoenix_tempered_mithril", Text.of("§bMithril strengthened by the Phoenix Force, granting it legendary durability and light."));
    addGTCEuMaterialTooltips("void_sung_adamantite", Text.of("§8Adamantite blessed by the void, impervious to nearly all forms of damage."));
    addGTCEuMaterialTooltips("entangled_palladium", Text.of("§ePalladium entangled at a quantum level, allowing for instant communication across vast distances."));
    addGTCEuMaterialTooltips("entangled_neutron_alloy", Text.of("§8An alloy of entangled neutrons, possessing extreme density and unique spatial properties."));
    addGTCEuMaterialTooltips("superposition_tungsten_matrix", Text.of("§7Tungsten matrix existing in multiple states simultaneously, offering unparalleled adaptability."));
    addGTCEuMaterialTooltips("exo_temporal_orichalcum", Text.of("§6Orichalcum with external temporal properties, allowing for time-related constructs."));
    addGTCEuMaterialTooltips("galactic_heart_matter", Text.of("§cMatter from the core of a galaxy, radiating immense power and cosmic energy."));
    addGTCEuMaterialTooltips("dark_nebula_infused_iridium", Text.of("§5Iridium infused with the essence of a dark nebula, granting it stealth and gravitational control."));
    addGTCEuMaterialTooltips("eldritch_voidsteel", Text.of("§0Steel forged in the void, empowered by eldritch energies and resisting arcane forces."));
    addGTCEuMaterialTooltips("akashic_chrono_metal", Text.of("§6A metal that exists beyond time, connected to the Akashic Records, holding infinite history."));
    addGTCEuMaterialTooltips("absolute_zero_zeronium", Text.of("§3Zeronium cooled to absolute zero, used in technologies that defy conventional thermodynamics."));
    addGTCEuMaterialTooltips("multiversal_hyperalloy", Text.of("§fAn alloy capable of existing across multiple universes, essential for multiversal transport."));
    addGTCEuMaterialTooltips("glitched_corruption_substrate", Text.of("§dA substrate corrupted by glitches in reality, leading to unpredictable but immense properties."));
    addGTCEuMaterialTooltips("event_horizon_matter", Text.of("§0Matter condensed at an event horizon, possessing extreme density and gravitational pull."));
    addGTCEuMaterialTooltips("advanced_quin_naquadian_alloy", Text.of("§4An incredibly dense and volatile alloy, forged from exotic fission products and Naquadah, hinting at power beyond current understanding."));
    addGTCEuMaterialTooltips("extremely_modified_space_grade_steel", Text.of("§dAn ultra-engineered variant of space grade steel, boasting extreme durability and resilience for the harshest environments."));
    // --- KubeJS Registered Fluids (buckets will use kubejs:fluid_name_bucket) ---
    addKubeJSUIDFluidTooltip("grass_water", Text.of("§aA strange elemental liquid, full of natural essence."));
    addKubeJSUIDFluidTooltip("dimensional_flux_resin", Text.of("§5A volatile resin that distorts space-time."));
    addKubeJSUIDFluidTooltip("plasma_stabilized_mercury", Text.of("§bMercury at extreme temperatures, stabilized by plasma fields."));
    addKubeJSUIDFluidTooltip("aetheric_conductive_gel", Text.of("§dA mystical gel that enhances magical conductivity."));
    addKubeJSUIDFluidTooltip("void_reactive_coolant", Text.of("§8A coolant that reacts intensely with void energy."));
    addKubeJSUIDFluidTooltip("quantum_adhesive_solution", Text.of("§9A solution that binds at a quantum level, incredibly strong."));
    addKubeJSUIDFluidTooltip("multi_phase_dimensional_gel", Text.of("§5A complex gel that exists across multiple dimensions."));
    addKubeJSUIDFluidTooltip("neutrino_laced_superfluid", Text.of("§6A superfluid infused with neutrinos, capable of defying gravity."));
    addKubeJSUIDFluidTooltip("exo_temporal_stabilizer", Text.of("§dStabilizes localized temporal distortions."));
    addKubeJSUIDFluidTooltip("hypercharged_void_extract", Text.of("§8A highly concentrated extract from the void, brimming with energy."));
    addKubeJSUIDFluidTooltip("reality_woven_nanotubes", Text.of("§aNanotubes crafted from the fabric of reality itself."));
    addKubeJSUIDFluidTooltip("cryo_ember_fluid", Text.of("§4Liquidized embers, supercooled for unique reactions."));
    addKubeJSUIDFluidTooltip("phoenix_fire_solution", Text.of("§cA solution born from phoenix flames, capable of immense heat."));
    addKubeJSUIDFluidTooltip("eldritch_catalytic_mist", Text.of("§dA spectral mist that accelerates arcane reactions."));
    addKubeJSUIDFluidTooltip("quantum_locked_fluid", Text.of("§9A fluid whose state is fixed by quantum entanglement."));
    addKubeJSUIDFluidTooltip("void_charged_ionic_gel", Text.of("§8A gel infused with void energy, highly conductive."));
    addKubeJSUIDFluidTooltip("glitched_anomalous_resin", Text.of("§7A resin with unstable properties, prone to strange behaviors."));
    addKubeJSUIDFluidTooltip("entropy_diffusion_mist", Text.of("§8A mist that accelerates the decay of complex structures."));
    addKubeJSUIDFluidTooltip("dark_matter_suspension", Text.of("§0A mysterious suspension of dark matter, dense with potential."));
    addKubeJSUIDFluidTooltip("reality_fractured_isotope", Text.of("§dA isotope with unstable atomic bonds, hinting at fractured realities."));
    addKubeJSUIDFluidTooltip("cosmic_flux_liquid", Text.of("§6A liquid infusion of cosmic energies, highly reactive."));
    addKubeJSUIDFluidTooltip("stellar_compression_dust", Text.of("§7Dust formed under immense stellar pressures, incredibly dense."));
    addKubeJSUIDFluidTooltip("graviton_dense_slurry", Text.of("§5A slurry concentrated with gravitons, warping local gravity."));
    addKubeJSUIDFluidTooltip("event_horizon_condensate", Text.of("§0Matter condensed to the edge of a black hole, extremely rare."));
    addKubeJSUIDFluidTooltip("quantum_star_infusion", Text.of("§eAn infusion drawing power from quantum stars, volatile but potent."));
    addKubeJSUIDFluidTooltip("eon_fused_catalyst", Text.of("§2A catalyst that has experienced millennia, accelerating ancient processes."));
    addKubeJSUIDFluidTooltip("singularity_condensed_matter", Text.of("§0Matter compressed to a singularity, holding infinite density."));
    addKubeJSUIDFluidTooltip("primordial_chaos_fluid", Text.of("§cA fluid from the dawn of creation, embodying pure chaos."));
    addKubeJSUIDFluidTooltip("multiversal_binding_agent", Text.of("§9An agent capable of linking disparate universes."));
    addKubeJSUIDFluidTooltip("absolute_zero_etherium", Text.of("§bEtherium chilled to absolute zero, perfect for cryogenic experiments."));
    addKubeJSUIDFluidTooltip("cognitive_dissonance_compound", Text.of("§8A compound that disrupts mental stability."));
    addKubeJSUIDFluidTooltip("memory_scrambler_toxin", Text.of("§cA potent toxin designed to erase or corrupt memories."));
    addKubeJSUIDFluidTooltip("emotional_override_agent", Text.of("§5An agent that can manipulate or suppress emotions."));
    addKubeJSUIDFluidTooltip("sensory_distortion_fluid", Text.of("§7A fluid that alters perception and sensory input."));
    addKubeJSUIDFluidTooltip("neural_decay_catalyst", Text.of("§0A catalyst that accelerates the breakdown of neural pathways."));
    event.add("kubejs:chimeric_integration_fluid_corrupted", Text.of("§cA fluid meant for integration, now corrupted and unstable."));
    addKubeJSUIDFluidTooltip("bio_electric_discharge_amplifier", Text.of("§9Amplifies natural bio-electric currents for powerful surges."));
    addKubeJSUIDFluidTooltip("synaptic_corrosion_agent", Text.of("§4An agent that erodes synaptic connections in biological systems."));
    addKubeJSUIDFluidTooltip("wetware_integration_disruptor", Text.of("§cDisrupts the seamless integration of biological and mechanical components."));
    addKubeJSUIDFluidTooltip("nanite_aggregation_catalyst", Text.of("§aPromotes the rapid assembly of nanites into complex structures."));
    addKubeJSUIDFluidTooltip("accelerated_cellular_degenerate", Text.of("§4Causes rapid deterioration of cellular structures."));
    addKubeJSUIDFluidTooltip("uncontrolled_growth_stimulant", Text.of("§aStimulates unchecked and rapid biological growth."));
    addKubeJSUIDFluidTooltip("genetic_corruption_fluid", Text.of("§2A fluid that introduces harmful mutations into genetic code."));
    addKubeJSUIDFluidTooltip("neural_binding_compound", Text.of("§dA compound that forms new, powerful neural connections."));
    addKubeJSUIDFluidTooltip("behavioral_imprinting_solution", Text.of("§9Imprints specific behaviors onto biological or synthetic entities."));
    addKubeJSUIDFluidTooltip("pain_amplification_serum", Text.of("§cA serum that magnifies pain signals to extreme levels."));
    addKubeJSUIDFluidTooltip("bio_iridescent_decay", Text.of("§dA biological decay process that emits beautiful, eerie light."));
    addKubeJSUIDFluidTooltip("crystalline_proliferation", Text.of("§bPromotes rapid and uncontrolled crystal growth."));
    addKubeJSUIDFluidTooltip("pulsating_organic_slime", Text.of("§aA living slime that throbs with an inner energy."));
    addKubeJSUIDFluidTooltip("entangled_state_conduit_fluid", Text.of("§9A fluid that maintains quantum entanglement across distances."));
    addKubeJSUIDFluidTooltip("cryogenic_processing_gel", Text.of("§bA gel designed for extreme cold processing, preserving delicate materials."));
    addKubeJSUIDFluidTooltip("adaptive_logic_matrix_fluid", Text.of("§7A fluid that forms adaptable logical pathways for advanced AI."));
    addKubeJSUIDFluidTooltip("resonant_frequency_amplifier_fluid", Text.of("§5Amplifies specific energy frequencies, useful for communication or destruction."));
    addKubeJSUIDFluidTooltip("cognitive_interface_alloy_fluid", Text.of("§dA alloy in fluid form, allowing direct thought-to-machine interfaces."));
    addKubeJSUIDFluidTooltip("akashic_resonance_stream", Text.of("§6A stream of pure information, connected to the Akashic Records."));
    addKubeJSUIDFluidTooltip("zeronium_temporal_essence", Text.of("§9Essence of Zeronium, capable of minor temporal manipulation."));
    addKubeJSUIDFluidTooltip("multiversal_singularity_catalyst", Text.of("§0A catalyst for creating miniature singularities that bridge realities."));
    addKubeJSUIDFluidTooltip("chronarium_infusion_fluid", Text.of("§9A fluid infused with Chronarium, slowing or accelerating local time."));
    addKubeJSUIDFluidTooltip("ethereal_knowledge_nexus", Text.of("§6A nexus of pure knowledge, accessible through thought."));
    addKubeJSUIDFluidTooltip("fading_ember_residue", Text.of("§4The last vestiges of powerful embers, retaining latent heat."));
    addKubeJSUIDFluidTooltip("true_heat_conductor_unstable", Text.of("§cAn unstable material that conducts heat with almost no loss."));
    addKubeJSUIDFluidTooltip("frost", Text.of("§bIntense cold, crystallized into a material form."));
    addKubeJSUIDFluidTooltip("phoenix_ash_suspension", Text.of("§6Ashes of a phoenix suspended in liquid, holding regenerative properties."));
    addKubeJSUIDFluidTooltip("infernal_overload_emulsion", Text.of("§4A volatile emulsion that causes immense energy overloads."));
    addKubeJSUIDFluidTooltip("scorched_matrix_fluid", Text.of("§cA fluid that forms a superheated, durable matrix."));
    addKubeJSUIDFluidTooltip("phase_instability_fluid", Text.of("§7A fluid that induces instability in material phases, useful for transformations."));
    addKubeJSUIDFluidTooltip("echoes_of_the_past_resonance_fluid", Text.of("§7A fluid that resonates with historical events, aiding in reconstruction."));
    addKubeJSUIDFluidTooltip("multi_spectral_sensor_array_fluid", Text.of("§9A fluid forming advanced sensors, detecting across many spectrums."));
    addKubeJSUIDFluidTooltip("information_processor_fluid_sensory", Text.of("§7A fluid that processes sensory data at incredible speeds."));
    addKubeJSUIDFluidTooltip("adaptive_camouflage_coating_tech", Text.of("§aA technological coating that adapts to surroundings for perfect camouflage."));
    addKubeJSUIDFluidTooltip("directional_energy_receiver_fluid", Text.of("§eA fluid capable of absorbing and focusing energy from specific directions."));
    addKubeJSUIDFluidTooltip("neural_interface_emulator_digital_fluid", Text.of("§dA fluid that emulates neural interfaces digitally, for AI minds."));
    addKubeJSUIDFluidTooltip("blazing_drilling_fluid", Text.of("§c§lA superheated fluid used for rapidly melting and drilling through solid rock."));
    addKubeJSUIDFluidTooltip("voidic_drilling_fluid", Text.of("§8§lA void-infused fluid that dissolves matter, creating tunnels effortlessly."));
    addKubeJSUIDFluidTooltip("magma", Text.of("§4§lMolten rock from deep within the earth, source of immense heat."));

    // --- KubeJS Drilling Components (These will still have their specific tooltips) ---
    event.add("kubejs:aurum_steel_drilling_kit", [
        Text.of("§6§oA kit imbued with ancient power, capable of penetrating some stubborn materials."),
        Text.of("§9Forged from Aurum Steel, its strength is matched by its inherent, volatile mystery.")
    ]);
    event.add("kubejs:aurum_steel_drill_head", [
        Text.of("§6§lThe head of an ancient drill, shimmering with a golden, arcane glow."),
        Text.of("§8§lIt can carve through dimensions, but is prone to unexpected failures if its power is mishandled.")
    ]);
    event.add("kubejs:space_miner_module", [
        Text.of("§d§oDesigned for deep-space resource extraction."),
        Text.of("§5Enables efficient mining on celestial bodies and asteroids, far from terrestrial interference.")
    ]);
    event.addAdvanced('gtceu:ulv_water_source', (item, advanced, text) => {
        text.add(1, Text.of('§o§7A Great Source of Water!'))
        text.add(2, Text.of('§o§7This machine does not require power to operate.'))
    })

    // Tooltip for IV Confectionary Fabricator
    event.add("gtceu:iv_confectionery_fabricator", [
        Text.of("§7A sophisticated machine for creating delightful treats."),
        Text.of("§fUsed for:"),
        Text.of("§6Honey Treats §7(from §eCream, §6Honey, §fPeanut Butter§7, etc)"),
    ]);

    // Tooltip for LuV Confectionary Fabricator
    event.add("gtceu:luv_confectionery_fabricator", [
        Text.of("§7An advanced confectionary marvel, processing ingredients with immense power."),
        Text.of("§fUsed for:"),
        Text.of("§6Honey Treats §7(from §eCream, §6Honey, §fPeanut Butter§7, etc)"),
        Text.of("from §eCream, §6Honey, §fPeanut Butter§7, etc)")
    ]);


    // Tooltip for zpm Confectionery Fabricator
    event.add("gtceu:zpm_confectionery_fabricator", [
        Text.of("§7The pinnacle of sweet creation, synthesizing treats at incredible speeds."),
        Text.of("§fUsed for:"),
        Text.of(" §6Honey Treats §7(from §eCream, §6Honey, §fPeanut Butter§7, etc)"),
    ]);


    event.add("gtceu:emberwake_alloy_hearth", [
        Text.of("§7A formidable Alloy Blast Smelter of immense power."),
        Text.of("§fCapable of §eParallel Processing §ffor accelerated production."),
        Text.of("§cUtilizes the legendary §6Phoenix Force §cfor extreme temperatures.")
    ]);
    event.add("kubejs:earthbound_miner_module", [
        Text.of("§e§oA versatile mining module, adaptable to multiple dimensions."),
        Text.of("§6Optimized for resource gathering in the Overworld, Nether, and End, maximizing terrestrial yields.")
    ]);
    event.add("kubejs:aluminfrost_drilling_kit", [
        Text.of("§b§oA drilling kit designed for precision in the most frigid, brittle environments."),
        Text.of("§9Its components remain perfectly chilled, preventing overheating and material degradation.")
    ]);
    event.add("kubejs:aluminfrost_drill_head", [
        Text.of("§b§lAn icy drill head, its surface supercooled to reduce friction to almost nothing."),
        Text.of("§9It carves through rock and ice alike with unnerving silence, leaving a trail of frost.")
    ]);

    event.add("kubejs:frost_reinforced_stained_steel_drilling_kit", [
        Text.of("§f§oA heavy-duty drilling kit, reinforced with cryogenic alloys."), // Default to white unless specific color was implied
        Text.of("§9Its components are exceptionally durable and resistant to extreme temperature fluctuations.")
    ]);
    event.add("kubejs:thorium_fuel_pellet", [
        Text.of("§6A compacted pellet of fertile thorium."),
        Text.of("§6Designed for efficient neutron capture and U-233 breeding in reactor blankets.")
    ]);

    // Uranium-233 Fuel Pellet
    event.add("kubejs:uranium_233_fuel_pellet", [
        Text.of("§aA highly concentrated pellet of bred Uranium-233."),
        Text.of("§aDelivers exceptional energy output as primary fissile fuel.")
    ]);
    event.add("kubejs:uranium_236_fuel_pellet", [
        Text.of("§aA highly concentrated pellet of bred Uranium-236."),
        Text.of("§6Designed for efficient neutron capture and Pu-241 breeding reactions as a blanket.")
    ]);
    event.add("kubejs:plutonium_241_fuel_pellet", [
        Text.of("§6A compacted pellet of Plutonium-241."),
        Text.of("§aDelivers exceptional energy output as primary fissile fuel.")
    ]);


    // High Performance Breeder Reactor Controller


    // Uranium-235 Fuel Pellet
    event.add("gtceu:uranium_235_fuel_pellet", [
        Text.of("§2A compacted pellet of Uranium-235."),
        Text.of("§2Serves as the primary driver fuel for fission reactors.")
    ]);
    event.add("kubejs:frost_reinforced_stained_steel_drill_head", [
        Text.of("§f§lThis drill head bears a subtle, frozen pattern, a testament to its resilience."), // Default to white
        Text.of("§9Capable of breaking through solidified barriers while maintaining its integrity in the cold.")
    ]);

    event.add("kubejs:space_grade_steel_drilling_kit", [
        Text.of("§d§oA state-of-the-art drilling kit, engineered for extraterrestrial exploration."),
        Text.of("§5Its components are hermetically sealed and radiation-hardened for deep space operations.")
    ]);
    event.add("kubejs:space_grade_steel_drill_head", [
        Text.of("§d§lAn orbital-grade drill head, designed to pierce lunar regolith or asteroid cores."),
        Text.of("§5Extremely strong in its ability to withstand vacuum, extreme temperatures, and cosmic radiation.")
    ]);
    event.add("gtceu:compact_draconic_fusion_reactor_mk1", [
        Text.of("§6Draconic Reactor Without The Explosions!"),
        Text.of("§7Allows Exactly 1 Source Laser Hatch."),
        Text.of("§7Creates Large Amounts Of Power Through Draconic Fusion."),
        Text.of("§bAdd large Chaos Shards For 3x The EU Output For Half The Duration.")
    ]);
    event.add("gtceu:compact_draconic_fusion_reactor_mk2", [
        Text.of("§6Draconic Reactor Without The Explosions!"),
        Text.of("§7Allows Exactly 1 Source Laser Hatch."),
        Text.of("§7Creates Immense Amounts Of Power Through Draconic Fusion."),
        Text.of("§bAdd large Chaos Shards For 3x The EU Output For Half The Duration.")
    ]);
    event.add("gtceu:compact_draconic_fusion_reactor_mk3", [
        Text.of("§6Draconic Reactor Without The Explosions!"),
        Text.of("§7Allows Exactly 1 Source Laser Hatch."),
        Text.of("§7Creates Excessive Amounts Of Power Through Draconic Fusion."),
        Text.of("§bAdd large Chaos Shards For 3x The EU Output For Half The Duration.")
    ]);

});

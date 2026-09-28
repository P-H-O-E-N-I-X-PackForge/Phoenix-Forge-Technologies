/**
 Ore veins setup
 */

const WorldGenLayers = Java.loadClass("com.gregtechceu.gtceu.api.data.worldgen.WorldGenLayers")
const PhoenixOres = Java.loadClass("net.phoenix.core.common.data.materials.PhoenixOres")

// Load Java classes for Crystal Roses
const CrystalRoseIndicatorGenerator = Java.loadClass("net.phoenix.core.common.data.worldgen.CrystalRoseIndicatorGenerator")
const GTMaterialBlocks = Java.loadClass("com.gregtechceu.gtceu.common.data.GTMaterialBlocks")
const PhoenixMaterialFlags = Java.loadClass("net.phoenix.core.common.data.materials.PhoenixMaterialFlags")
const IndicatorPlacement = Java.loadClass("com.gregtechceu.gtceu.api.data.worldgen.generator.indicators.SurfaceIndicatorGenerator$IndicatorPlacement")
const Blocks = Java.loadClass("net.minecraft.world.level.block.Blocks")

// Helper function to get the block state
function getRoseState(material) {
    let roseEntry = GTMaterialBlocks.MATERIAL_BLOCKS.get(PhoenixMaterialFlags.crystal_rose, material)
    return (roseEntry && roseEntry.get()) ? roseEntry.get().defaultBlockState() : Blocks.POPPY.defaultBlockState()
}

// Helper function to attach the crystal rose generator to a vein
function applyCrystalRose(vein, material, placement) {
    let place = placement === "below" ? IndicatorPlacement.BELOW : IndicatorPlacement.ABOVE

    // 'vein' is already the GTOreDefinition!
    vein.indicatorGenerators().clear()
    vein.indicatorGenerators().add(
        new CrystalRoseIndicatorGenerator(vein)
            .state(getRoseState(material))
            .placement(place)
            .radius(3)
            .density(0.4)
    )
}

GTCEuServerEvents.oreVeins(event => {

    event.add("overworld/heat_frost", vein => {
        vein.weight(42)
        vein.density(0.25)
        vein.clusterSize(35)
        vein.layer("stone")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeUniform(30, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(PhoenixOres.DORMANT_EMBER).size(2, 2))
                .layer(l => l.weight(2).mat(PhoenixOres.DORMANT_EMBER).size(1, 2))
                .layer(l => l.weight(1).state(() => Block.getBlock("minecraft:magma_block").defaultBlockState()).size(2, 3))
                .layer(l => l.weight(1).state(() => Block.getBlock("minecraft:blue_ice").defaultBlockState()).size(1, 2))
            )
        )
        // Attach Crystal Rose directly
        applyCrystalRose(vein, PhoenixOres.DORMANT_EMBER, "above")
    })

    event.add("end:naquadatite", vein => {
        vein.weight(30)
        vein.density(0.25)
        vein.clusterSize(64)
        vein.layer("endstone")
        vein.dimensions("minecraft:the_end")
        vein.heightRangeUniform(10, 90)

        vein.cuboidVeinGenerator(generator => generator
            .top(b => b.mat(PhoenixOres.NAQUADATITE).size(2))
            .middle(b => b.mat(PhoenixOres.NAQUADATITE).size(3))
            .bottom(b => b.mat(PhoenixOres.NAQUADATITE).size(2))
            .spread(b => b.mat(GTMaterials.Plutonium239))
        )

        applyCrystalRose(vein, PhoenixOres.NAQUADATITE, "above")
    })




    event.add("overworld/deepslate/heat_frost", vein => {
        vein.weight(42)
        vein.density(0.25)
        vein.clusterSize(35)
        vein.layer("deepslate")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeUniform(-30, 30)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(PhoenixOres.PERMAFROST).size(2, 2))
                .layer(l => l.weight(2).mat(PhoenixOres.DORMANT_EMBER).size(1, 2))
                .layer(l => l.weight(1).state(() => Block.getBlock("minecraft:magma_block").defaultBlockState()).size(2, 3))
                .layer(l => l.weight(1).state(() => Block.getBlock("minecraft:blue_ice").defaultBlockState()).size(1, 2))
            )
        )
        applyCrystalRose(vein, PhoenixOres.DORMANT_EMBER, "above")
    })

    event.add("moon/fluorite", vein => {
        vein.weight(35)
        vein.clusterSize(20)
        vein.density(0.3)
        vein.discardChanceOnAirExposure(1)
        vein.layer("ad_astra_moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(-40, 80)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(35).mat(GTMaterials.Diamond).size(1, 2))
                .layer(l => l.weight(35).mat(PhoenixOres.FLUORITE).size(1, 2))
            )
        )
        applyCrystalRose(vein, PhoenixOres.FLUORITE, "above")
    })

    event.add("moon/bauxite", vein => {
        vein.weight(40)
        vein.density(0.25)
        vein.clusterSize(30)
        vein.layer("ad_astra_moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(10, 80)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.Bauxite).size(1, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Ilmenite).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Aluminium).size(1, 1))
            )
        )
        applyCrystalRose(vein, GTMaterials.Bauxite, "above")
    })

    event.add("moon/tungsten", vein => {
        vein.weight(45)
        vein.density(0.25)
        vein.clusterSize(15)
        vein.layer("ad_astra_moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(-40, 20)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(6).mat(GTMaterials.Scheelite).size(1, 4))
                .layer(l => l.weight(4).mat(GTMaterials.Tungstate).size(1, 4))
            )
        )
        applyCrystalRose(vein, GTMaterials.Scheelite, "above")
    })

    event.add("moon/magical_ores", vein => {
        vein.weight(10)
        vein.clusterSize(15)
        vein.density(0.10)
        vein.discardChanceOnAirExposure(1)
        vein.layer("ad_astra_moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(-40, 80)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(35).mat(PhoenixOres.NEVVONIAN_IRON).size(1, 2))
                .layer(l => l.weight(20).mat(PhoenixOres.POLARITY_FLIPPED_BISMUTHITE).size(1, 2))
                .layer(l => l.weight(25).mat(PhoenixOres.VOIDGLASS_SHARD).size(1, 2))
            )
        )
        applyCrystalRose(vein, PhoenixOres.NEVVONIAN_IRON, "above")
    })

})

GTCEuServerEvents.oreVeins(event => {
    event.remove("gtceu:naquadah_vein")
})
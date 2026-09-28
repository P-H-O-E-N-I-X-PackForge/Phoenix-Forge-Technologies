# Understanding and mapping out a mod. Template for every mod.
# This mod is a living standard, it will change and grow as I change and grow.

## Architecture
this doc needs
- top level overview of every package
- top level overview of the 
- NOT A OVERVIEW OF EVERY METHOD (only list smth that might not be obvious on why a choice was made)
- links to the actual wiki page (or class) if you need to explain it better
- a tl:dr on where to look for certain systems
- a chart of how everything hooks togethor (package level)

This doc is NOT meant to tell a user what everything is exactly, thats what the code is for.
This is meant to give a slightly more indepth guide to the code's structure than the readme while still staying consice.

1. Go through and map out the mod 
- Don't go through and write polished docs yet. focus on 
- packages
  major classes
  entry points
  APIs
  registries
  major data flow
  client/server split
  networking
  config
  compat

The goal is to answer 
“If someone asked me how Excavate works, could I draw the boxes and arrows?”


2. Identify the important classes.
Find what class needs what level of documentation. 

For example
Class: VeinFinder
Purpose:
Relationships:
Interesting:

Every class needs it's purpose named, but not what it owns, what it uses, what it is used by, nor non-obvious decisions


3. Javadocs. Again, everything needs a purpose, not everything needs well, everything

4. Wiki docs, these are for packdev (both java and kjs side if applicable) level wiki docs.
Gameplay wiki docs are cool but not for now, and dev side wiki docs are only for if contributors ask about a system
a lot. Thou ofc, docs like this one and a contributing one are important and should not be grouped in wiki
level dev codes. We do need a contributor guide template to be used by all my projects.


First phoenix, give class level java docs to each class and remove reflection/fully realized names 
also look for where switch statements could be used, fix up class names when too long/hard to understand
look for more exspensive hashmap alternatives where they aren't nessecary, put variables near top of class
write comments for smth that might need fixed that can take a bit (todos)/might be hard to understand. 
look for classes that try to do too much, try to avoid inheritance where possible, make sure file names make sense
and actually describe what they do (aka VeinPlacer is fine while ClassForDoingStuff is not),
make sure the files in the packages actually make sense to be in there, don't try to make code smaller just to make it
smaller this can also lead to tech debt funny enough, make sure the wording for user facing text is consistent
and accurate, see if a client screen is becoming a god object (happens a lot), when reasonable change literals 
to translatable, only make abstractions when it starts to become a problem: a library to remove 2 lines of duplicated 
code is a liability, line count isnt the enemy: unclear code is, sometimes code is fine to be similar
goals once, twice, etc while othertimes: that code should be deduped immedtialtly 
(ussaly major systems where fixing a bug need you to fix it in  5 places)


in api
in vein
in network
in client
in config 
in compat
in gametest


Class: Blah
Purpose:
Relationships:
Interesting:


in here write what each class does after a fast glance/how it connects to the rest of the mod 
(this will not be present in the final doc, is it even really worth it to do beforehand? maybe there is a betetr way?)
### Vein
- VeinShapeRegistry
the registry hook for vein shapes, it is not however the hook for addons to add thier own shapes
also maps each veinshape to a specfic behavior for VeinFinder to handle and hooks into VeinServerState, the 
config class, and ExcavateAPI
- VeinServerState
the manager of whether a vein can actually be mined server side so the client doesn't cheat
- VeinPlacer
the brother to VeinBreaker, it handles the math and querying the server state for veinplacing blocks
- VeinMode 
the enum for vein mine vs vein place
- VeinMatcher
the interface for checking if adjacent blocks are still part of the same vein (boolean)
- VeinFinder
handles the actual math of finding veins for both placing and mining, also handles tool tier matching,
unbreakable block skipping, and makes sure the mining/placing follows the vein shapes.
Pretty much the engine behind the mod and empowers VeinBreaker and VeinPlacer to actually do the work 


## Readme

Required:
- Explain this mod's purpose
- Explain each major feature
- Show examples
- List major dependencies
- Further information
- Credits
- Licensing

Optional:
- What this mod doesn't do
- Pitfalls / drawbacks
- Installation
- Supported versions
- Configuration
- Integrations
- Compatibility / incompatibilities
- Known limitations
- Performance considerations
- FAQ
- Screenshots / GIFs / videos
- Roadmap
- Downloads / releases
- Issue reporting
- Phoenix ecosystem / related mods
- Acknowledgements / inspiration
- Translation information
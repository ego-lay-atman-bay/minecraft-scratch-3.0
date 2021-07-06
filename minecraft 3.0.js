class CC - Scratch {
    //Converted from https://mojang.github.io/cc-scratch.js#scratch to Scratch 3.0 using Ext2to3!
    getInfo() {
        return {
            "id": "CC-Scratch",
            "name": "CC-Scratch",
            "blocks": [{
                "opcode": "move",
                "blockType": "command",
                "text": "Move [direction]",
                "arguments": {
                    "direction": {
                        "type": "string",
                        "menu": "sixDirections",
                        "defaultValue": "forward"
                    }
                }
            }, {
                "opcode": "turn",
                "blockType": "command",
                "text": "Turn [direction]",
                "arguments": {
                    "direction": {
                        "type": "string",
                        "menu": "rotateDirections",
                        "defaultValue": "left"
                    }
                }
            }, {
                "opcode": "tpToPlayer",
                "blockType": "command",
                "text": "Teleport to the player",
                "arguments": {}
            }, {
                "opcode": "place",
                "blockType": "command",
                "text": "Use or place item in inventory slot [slotNum] at [direction]",
                "arguments": {
                    "slotNum": {
                        "type": "number",
                        "defaultValue": 1
                    },
                    "direction": {
                        "type": "string",
                        "menu": "sixDirections",
                        "defaultValue": "forward"
                    }
                }
            }, {
                "opcode": "destroy",
                "blockType": "command",
                "text": "Destroy [direction]",
                "arguments": {
                    "direction": {
                        "type": "string",
                        "menu": "sixDirections",
                        "defaultValue": "forward"
                    }
                }
            }, {
                "opcode": "till",
                "blockType": "command",
                "text": "Till [direction]",
                "arguments": {
                    "direction": {
                        "type": "string",
                        "menu": "sixDirections",
                        "defaultValue": "forward"
                    }
                }
            }, {
                "opcode": "attack",
                "blockType": "command",
                "text": "Attack [direction]",
                "arguments": {
                    "direction": {
                        "type": "string",
                        "menu": "sixDirections",
                        "defaultValue": "forward"
                    }
                }
            }, {
                "opcode": "collect",
                "blockType": "command",
                "text": "Collect [item]",
                "arguments": {
                    "item": {
                        "type": "string",
                        "defaultValue": "all"
                    }
                }
            }, {
                "opcode": "drop",
                "blockType": "command",
                "text": "Drop [quantity] item(s) in inventory slot [slotNum] to [direction]",
                "arguments": {
                    "quantity": {
                        "type": "number",
                        "defaultValue": 1
                    },
                    "slotNum": {
                        "type": "number",
                        "defaultValue": 1
                    },
                    "direction": {
                        "type": "string",
                        "menu": "fourDirections",
                        "defaultValue": "forward"
                    }
                }
            }, {
                "opcode": "dropAll",
                "blockType": "command",
                "text": "Drop all item in inventory to [direction]",
                "arguments": {
                    "direction": {
                        "type": "string",
                        "menu": "fourDirections",
                        "defaultValue": "forward"
                    }
                }
            }, {
                "opcode": "detect",
                "blockType": "Boolean",
                "text": "Detect [direction]",
                "arguments": {
                    "direction": {
                        "type": "string",
                        "menu": "sixDirections",
                        "defaultValue": "forward"
                    }
                }
            }, {
                "opcode": "inspect",
                "blockType": "reporter",
                "text": "Inspect at [direction]",
                "arguments": {
                    "direction": {
                        "type": "string",
                        "menu": "sixDirections",
                        "defaultValue": "forward"
                    }
                }
            }, {
                "opcode": "inspectdata",
                "blockType": "reporter",
                "text": "Inspect data at [direction]",
                "arguments": {
                    "direction": {
                        "type": "string",
                        "menu": "sixDirections",
                        "defaultValue": "forward"
                    }
                }
            }, {
                "opcode": "getBlockName",
                "blockType": "reporter",
                "text": "Block name [blockName]",
                "arguments": {
                    "blockName": {
                        "type": "string",
                        "menu": "blocks",
                        "defaultValue": "acacia_stairs"
                    }
                }
            }, {
                "opcode": "getDecorationName",
                "blockType": "reporter",
                "text": "Decoration name [decoration]",
                "arguments": {
                    "decoration": {
                        "type": "string",
                        "menu": "decorations",
                        "defaultValue": "acacia_door"
                    }
                }
            }, {
                "opcode": "getToolName",
                "blockType": "reporter",
                "text": "Tool name [tool]",
                "arguments": {
                    "tool": {
                        "type": "string",
                        "menu": "tools",
                        "defaultValue": "activator_rail"
                    }
                }
            }, {
                "opcode": "getMiscellaneousName",
                "blockType": "reporter",
                "text": "Miscellaneous name [miscellaneous]",
                "arguments": {
                    "miscellaneous": {
                        "type": "string",
                        "menu": "miscellaneous",
                        "defaultValue": "apple"
                    }
                }
            }, {
                "opcode": "getItemDetail",
                "blockType": "reporter",
                "text": "Get item detail in the inventory slot [slotNum]",
                "arguments": {
                    "slotNum": {
                        "type": "number",
                        "defaultValue": 1
                    }
                }
            }, {
                "opcode": "getItemSpace",
                "blockType": "reporter",
                "text": "Get item space in the inventory slot [slotNum]",
                "arguments": {
                    "slotNum": {
                        "type": "number",
                        "defaultValue": 1
                    }
                }
            }, {
                "opcode": "getItemCount",
                "blockType": "reporter",
                "text": "Get number of item in the inventory slot [slotNum]",
                "arguments": {
                    "slotNum": {
                        "type": "number",
                        "defaultValue": 1
                    }
                }
            }, {
                "opcode": "transferTo",
                "blockType": "command",
                "text": "Transfer item from inventory slot [sourceSlotNum] to [destinationSlotNum] quantity [quantity]",
                "arguments": {
                    "sourceSlotNum": {
                        "type": "number",
                        "defaultValue": 1
                    },
                    "destinationSlotNum": {
                        "type": "number",
                        "defaultValue": 1
                    },
                    "quantity": {
                        "type": "number",
                        "defaultValue": 1
                    }
                }
            }, {
                "opcode": "detectRedstone",
                "blockType": "Boolean",
                "text": "Detect Redstone at [direction]",
                "arguments": {
                    "direction": {
                        "type": "string",
                        "menu": "sixDirections",
                        "defaultValue": "forward"
                    }
                }
            }, {
                "opcode": "clone",
                "blockType": "command",
                "text": "Clone blocks from [beginIsRelative] position [beginX] [beginY] [beginZ] to [endIsRelative] position [endX] [endY] [endZ] to [destinationIsRelative] position [destinationX] [destinationY] [destinationZ]",
                "arguments": {
                    "beginIsRelative": {
                        "type": "string",
                        "menu": "positionType",
                        "defaultValue": "relative"
                    },
                    "beginX": {
                        "type": "number",
                        "defaultValue": 1
                    },
                    "beginY": {
                        "type": "number",
                        "defaultValue": 1
                    },
                    "beginZ": {
                        "type": "number",
                        "defaultValue": 1
                    },
                    "endIsRelative": {
                        "type": "string",
                        "menu": "positionType",
                        "defaultValue": "relative"
                    },
                    "endX": {
                        "type": "number",
                        "defaultValue": 1
                    },
                    "endY": {
                        "type": "number",
                        "defaultValue": 1
                    },
                    "endZ": {
                        "type": "number",
                        "defaultValue": 1
                    },
                    "destinationIsRelative": {
                        "type": "string",
                        "menu": "positionType",
                        "defaultValue": "relative"
                    },
                    "destinationX": {
                        "type": "number",
                        "defaultValue": 1
                    },
                    "destinationY": {
                        "type": "number",
                        "defaultValue": 1
                    },
                    "destinationZ": {
                        "type": "number",
                        "defaultValue": 1
                    }
                }
            }, {
                "opcode": "executeAsOther",
                "blockType": "command",
                "text": "Execute command [command] on behalf of [origin] at [isRelative] position [x] [y] [z]",
                "arguments": {
                    "command": {
                        "type": "string",
                        "defaultValue": " "
                    },
                    "origin": {
                        "type": "string",
                        "defaultValue": " "
                    },
                    "isRelative": {
                        "type": "string",
                        "menu": "positionType",
                        "defaultValue": "relative"
                    },
                    "x": {
                        "type": "number",
                        "defaultValue": 1
                    },
                    "y": {
                        "type": "number",
                        "defaultValue": 1
                    },
                    "z": {
                        "type": "number",
                        "defaultValue": 1
                    }
                }
            }, {
                "opcode": "fill",
                "blockType": "command",
                "text": "Fill from [fromIsRelative] position [fromX] [fromY] [fromZ] to [toIsRelative] position [toX] [toY] [toZ] with [tileName] using tile data [tileData]",
                "arguments": {
                    "fromIsRelative": {
                        "type": "string",
                        "menu": "positionType",
                        "defaultValue": "relative"
                    },
                    "fromX": {
                        "type": "number",
                        "defaultValue": 1
                    },
                    "fromY": {
                        "type": "number",
                        "defaultValue": 1
                    },
                    "fromZ": {
                        "type": "number",
                        "defaultValue": 1
                    },
                    "toIsRelative": {
                        "type": "string",
                        "menu": "positionType",
                        "defaultValue": "relative"
                    },
                    "toX": {
                        "type": "number",
                        "defaultValue": 1
                    },
                    "toY": {
                        "type": "number",
                        "defaultValue": 1
                    },
                    "toZ": {
                        "type": "number",
                        "defaultValue": 1
                    },
                    "tileName": {
                        "type": "string",
                        "defaultValue": " "
                    },
                    "tileData": {
                        "type": "number",
                        "defaultValue": 0
                    }
                }
            }, {
                "opcode": "give",
                "blockType": "command",
                "text": "Give [amount] item(s) [itemName] to target [player]",
                "arguments": {
                    "amount": {
                        "type": "number",
                        "defaultValue": 1
                    },
                    "itemName": {
                        "type": "string",
                        "defaultValue": " "
                    },
                    "player": {
                        "type": "string",
                        "defaultValue": " "
                    }
                }
            }, {
                "opcode": "kill",
                "blockType": "command",
                "text": "Kill target [target]",
                "arguments": {
                    "target": {
                        "type": "string",
                        "defaultValue": " "
                    }
                }
            }, {
                "opcode": "setBlock",
                "blockType": "command",
                "text": "Set block at [isRelative] position [x] [y] [z] to block type [tileName] using tile data [tileData]",
                "arguments": {
                    "isRelative": {
                        "type": "string",
                        "menu": "positionType",
                        "defaultValue": "relative"
                    },
                    "x": {
                        "type": "number",
                        "defaultValue": 1
                    },
                    "y": {
                        "type": "number",
                        "defaultValue": 1
                    },
                    "z": {
                        "type": "number",
                        "defaultValue": 1
                    },
                    "tileName": {
                        "type": "string",
                        "defaultValue": " "
                    },
                    "tileData": {
                        "type": "number",
                        "defaultValue": 0
                    }
                }
            }, {
                "opcode": "summon",
                "blockType": "command",
                "text": "Summon entity type [entityType] at [isRelative] position [x] [y] [z]",
                "arguments": {
                    "entityType": {
                        "type": "string",
                        "defaultValue": " "
                    },
                    "isRelative": {
                        "type": "string",
                        "menu": "positionType",
                        "defaultValue": "relative"
                    },
                    "x": {
                        "type": "number",
                        "defaultValue": 1
                    },
                    "y": {
                        "type": "number",
                        "defaultValue": 1
                    },
                    "z": {
                        "type": "number",
                        "defaultValue": 1
                    }
                }
            }, {
                "opcode": "testForBlock",
                "blockType": "Boolean",
                "text": "Tests whether a block type [tileName] is in a [isRelative] position [x] [y] [z]",
                "arguments": {
                    "tileName": {
                        "type": "string",
                        "defaultValue": " "
                    },
                    "isRelative": {
                        "type": "string",
                        "menu": "positionType",
                        "defaultValue": "relative"
                    },
                    "x": {
                        "type": "number",
                        "defaultValue": 1
                    },
                    "y": {
                        "type": "number",
                        "defaultValue": 1
                    },
                    "z": {
                        "type": "number",
                        "defaultValue": 1
                    }
                }
            }, {
                "opcode": "testForBlocks",
                "blockType": "Boolean",
                "text": "Tests whether the pattern between [beginIsRelative] position [beginX] [beginY] [beginZ] to [endIsRelative] position [endX] [endY] [endZ] is matched at [destinationIsRelative] position [destinationX] [destinationY] [destinationZ]",
                "arguments": {
                    "beginIsRelative": {
                        "type": "string",
                        "menu": "positionType",
                        "defaultValue": "relative"
                    },
                    "beginX": {
                        "type": "number",
                        "defaultValue": 1
                    },
                    "beginY": {
                        "type": "number",
                        "defaultValue": 1
                    },
                    "beginZ": {
                        "type": "number",
                        "defaultValue": 1
                    },
                    "endIsRelative": {
                        "type": "string",
                        "menu": "positionType",
                        "defaultValue": "relative"
                    },
                    "endX": {
                        "type": "number",
                        "defaultValue": 1
                    },
                    "endY": {
                        "type": "number",
                        "defaultValue": 1
                    },
                    "endZ": {
                        "type": "number",
                        "defaultValue": 1
                    },
                    "destinationIsRelative": {
                        "type": "string",
                        "menu": "positionType",
                        "defaultValue": "relative"
                    },
                    "destinationX": {
                        "type": "number",
                        "defaultValue": 1
                    },
                    "destinationY": {
                        "type": "number",
                        "defaultValue": 1
                    },
                    "destinationZ": {
                        "type": "number",
                        "defaultValue": 1
                    }
                }
            }, {
                "opcode": "tpToTarget",
                "blockType": "command",
                "text": "Teleport target [victim] to target [destination]",
                "arguments": {
                    "victim": {
                        "type": "string",
                        "defaultValue": " "
                    },
                    "destination": {
                        "type": "string",
                        "defaultValue": " "
                    }
                }
            }, {
                "opcode": "tpToPos",
                "blockType": "command",
                "text": "Teleport target [victim] to [isRelative] position [x] [y] [z]",
                "arguments": {
                    "victim": {
                        "type": "string",
                        "defaultValue": " "
                    },
                    "isRelative": {
                        "type": "string",
                        "menu": "positionType",
                        "defaultValue": "relative"
                    },
                    "x": {
                        "type": "number",
                        "defaultValue": 1
                    },
                    "y": {
                        "type": "number",
                        "defaultValue": 1
                    },
                    "z": {
                        "type": "number",
                        "defaultValue": 1
                    }
                }
            }, {
                "opcode": "timeSetByName",
                "blockType": "command",
                "text": "Set time to [time]",
                "arguments": {
                    "time": {
                        "type": "string",
                        "menu": "timeType",
                        "defaultValue": "day"
                    }
                }
            }, {
                "opcode": "timeSetByNumber",
                "blockType": "command",
                "text": "Set time to [time]",
                "arguments": {
                    "time": {
                        "type": "number",
                        "defaultValue": 1
                    }
                }
            }, {
                "opcode": "weather",
                "blockType": "command",
                "text": "Change weather to [type]",
                "arguments": {
                    "type": {
                        "type": "string",
                        "menu": "weatherType",
                        "defaultValue": "clear"
                    }
                }
            }],
            "menus": {
                sixDirections: this._formatMenu(['forward', 'back', 'left', 'right', 'up', 'down']),
                fourDirections: this._formatMenu(['forward', 'back', 'left', 'right']),
                rotateDirections: this._formatMenu(['left', 'right']),
                weatherType: this._formatMenu(['clear', 'rain', 'thunder']),
                positionType: this._formatMenu(['relative', 'absolute']),
                timeType: this._formatMenu(['day', 'night']),
                blocks: this._formatMenu(['acacia_stairs', 'air', 'allow', 'bedrock', 'birch_stairs', 'border_block', 'brick_block', 'brick_stairs', 'clay', 'coal_ore', 'cobblestone', 'dark_oak_stairs', 'deny', 'diamond_ore', 'dirt', 'emerald_ore', 'end_bricks', 'end_stone', 'gold_ore', 'grass', 'gravel', 'hardened_clay', 'ice', 'iron_ore', 'jungle_stairs', 'lapis_ore', 'log', 'log2', 'mossy_cobblestone', 'mycelium', 'nether_brick', 'nether_brick_stairs', 'netherbrick', 'netherrack', 'oak_stairs', 'obsidian', 'packed_ice', 'planks', 'podzol', 'prismarine', 'purpur_block', 'purpur_stairs', 'quartz_block', 'quartz_ore', 'quartz_stairs', 'red_sandstone', 'red_sandstone_stairs', 'redstone_ore', 'sand', 'sandstone', 'sandstone_stairs', 'snow', 'soul_sand', 'spruce_stairs', 'stained_hardened_clay', 'stone', 'stone_brick_stairs', 'stone_slab', 'stone_slab2', 'stone_stairs', 'stonebrick', 'wooden_slab']),
                decorations: this._formatMenu(['acacia_door', 'acacia_fence_gate', 'anvil', 'beacon', 'bed', 'birch_door', 'birch_fence_gate', 'black_glazed_terracotta', 'blue_glazed_terracotta', 'board', 'bookshelf', 'brewing_stand', 'brown_glazed_terracotta', 'brown_mushroom', 'brown_mushroom_block', 'cactus', 'cake', 'carpet', 'cauldron', 'chest', 'coal_block', 'cobblestone_wall', 'concrete', 'concretepowder', 'crafting_table', 'cyan_glazed_terracotta', 'dark_oak_door', 'dark_oak_fence_gate', 'deadbush', 'diamond_block', 'double_plant', 'dragon_egg', 'emerald_block', 'enchanting_table', 'end_crystal', 'end_portal_frame', 'end_rod', 'ender_chest', 'fence', 'fence_gate', 'flower_pot', 'frame', 'furnace', 'glass', 'glass_pane', 'glowstone', 'gold_block', 'grass_path', 'gray_glazed_terracotta', 'green_glazed_terracotta', 'hay_block', 'iron_bars', 'iron_block', 'iron_door', 'iron_trapdoor', 'jungle_door', 'jungle_fence_gate', 'ladder', 'lapis_block', 'leaves', 'leaves2', 'light_blue_glazed_terracotta', 'lime_glazed_terracotta', 'lit_pumpkin', 'magenta_glazed_terracotta', 'melon_block', 'mob_spawner', 'monster_egg', 'nether_brick_fence', 'noteblock', 'orange_glazed_terracotta', 'painting', 'pink_glazed_terracotta', 'pumpkin', 'purple_glazed_terracotta', 'red_flower', 'red_glazed_terracotta', 'red_mushroom', 'red_mushroom_block', 'redstone_block', 'sapling', 'sealantern', 'shulker_box', 'sign', 'silver_glazed_terracotta', 'skull', 'slime', 'snow_layer', 'sponge', 'spruce_door', 'spruce_fence_gate', 'stonecutter', 'tallgrass', 'trapdoor', 'trapped_chest', 'vine', 'waterlily', 'web', 'white_glazed_terracotta', 'wooden_door', 'wool', 'yellow_flower', 'yellow_glazed_terracotta']),
                tools: this._formatMenu(['activator_rail', 'boat', 'bow', 'bucket', 'camera', 'chain_command_block', 'chainmail_boots', 'chainmail_chestplate', 'chainmail_helmet', 'chainmail_leggings', 'chest_minecart', 'clock', 'command_block', 'command_block_minecart', 'comparator', 'compass', 'daylight_detector', 'detector_rail', 'diamond_axe', 'diamond_boots', 'diamond_chestplate', 'diamond_helmet', 'diamond_hoe', 'diamond_leggings', 'diamond_pickaxe', 'diamond_shovel', 'diamond_sword', 'dispenser', 'dropper', 'elytra', 'ender_eye', 'ender_pearl', 'fireball', 'fishing_rod', 'flint_and_steel', 'golden_axe', 'golden_boots', 'golden_chestplate', 'golden_helmet', 'golden_hoe', 'golden_leggings', 'golden_pickaxe', 'golden_rail', 'golden_shovel', 'golden_sword', 'heavy_weighted_pressure_plate', 'hopper', 'hopper_minecart', 'horsearmordiamond', 'horsearmorgold', 'horsearmoriron', 'horsearmorleather', 'iron_axe', 'iron_boots', 'iron_chestplate', 'iron_helmet', 'iron_hoe', 'iron_leggings', 'iron_pickaxe', 'iron_shovel', 'iron_sword', 'lead', 'leather_boots', 'leather_chestplate', 'leather_helmet', 'leather_leggings', 'lever', 'light_weighted_pressure_plate', 'minecart', 'nametag', 'observer', 'piston', 'portfolio', 'rail', 'redstone', 'redstone_lamp', 'redstone_torch', 'repeater', 'repeating_command_block', 'saddle', 'shears', 'snowball', 'spawn_egg', 'sticky_piston', 'stone_axe', 'stone_button', 'stone_hoe', 'stone_pickaxe', 'stone_pressure_plate', 'stone_shovel', 'stone_sword', 'structure_block', 'tnt', 'tnt_minecart', 'torch', 'totem', 'tripwire_hook', 'wooden_axe', 'wooden_button', 'wooden_hoe', 'wooden_pickaxe', 'wooden_pressure_plate', 'wooden_shovel', 'wooden_sword']),
                miscellaneous: this._formatMenu(['apple', 'appleenchanted', 'arrow', 'baked_potato', 'beef', 'beetroot', 'beetroot_seeds', 'beetroot_soup', 'blaze_powder', 'blaze_rod', 'bone', 'book', 'bowl', 'bread', 'brick', 'carrot', 'carrotonastick', 'chicken', 'chorus_flower', 'chorus_fruit', 'chorus_fruit_popped', 'chorus_plant', 'clay_ball', 'clownfish', 'coal', 'cooked_beef', 'cooked_chicken', 'cooked_fish', 'cooked_porkchop', 'cooked_rabbit', 'cooked_salmon', 'cookie', 'diamond', 'dragon_breath', 'dye', 'egg', 'emerald', 'emptymap', 'enchanted_book', 'experience_bottle', 'feather', 'fermented_spider_eye', 'fish', 'flint', 'ghast_tear', 'glass_bottle', 'glowstone_dust', 'gold_ingot', 'gold_nugget', 'golden_apple', 'golden_carrot', 'gunpowder', 'iron_ingot', 'iron_nugget', 'leather', 'lingering_potion', 'magma_cream', 'melon', 'melon_seeds', 'mushroom_stew', 'muttoncooked', 'muttonraw', 'nether_wart', 'netherstar', 'paper', 'poisonous_potato', 'porkchop', 'potato', 'potion', 'prismarine_crystals', 'prismarine_shard', 'pufferfish', 'pumpkin_pie', 'pumpkin_seeds', 'quartz', 'rabbit', 'rabbit_foot', 'rabbit_hide', 'rabbit_stew', 'reeds', 'rotten_flesh', 'salmon', 'shulker_shell', 'slime_ball', 'speckled_melon', 'spider_eye', 'splash_potion', 'stick', 'string', 'sugar', 'wheat', 'wheat_seeds']),
                speed: this._formatMenu(['normal', 'fast']),
            }
        };
    }
    move({
        direction,
        callback
    }) {
        var command = `move?direction=${direction}`;
        client.async_command(command, callback, "success");
    }
    turn({
        direction,
        callback
    }) {
        var command = `turn?direction=${direction}`;
        client.async_command(command, callback, "success");
    }
    tpToPlayer({
        callback
    }) {
        var command = `tptoplayer`;
        client.async_command(command, callback, "success");
    }
    place({
        slotNum,
        direction,
        callback
    }) {
        var command = `place?slotNum=${slotNum}&direction=${direction}`;
        client.async_command(command, callback);
    }
    destroy({
        direction,
        callback
    }) {
        var command = `destroy?direction=${direction}`;
        client.async_command(command, callback, "success");
    }
    till({
        direction,
        callback
    }) {
        var command = `till?direction=${direction}`;
        client.async_command(command, callback, "success");
    }
    attack({
        direction,
        callback
    }) {
        var command = `attack?direction=${direction}`;
        client.async_command(command, callback, "success");
    }
    collect({
        item,
        callback
    }) {
        var command = `collect?item=${item}`;
        client.async_command(command, callback, "success");
    }
    drop({
        quantity,
        slotNum,
        direction,
        callback
    }) {
        var command = `drop?slotNum=${slotNum}&quantity=${quantity}&direction=${direction}`;
        client.async_command(command, callback, "success");
    }
    dropAll({
        direction,
        callback
    }) {
        var command = `dropall?direction=${direction}`;
        client.async_command(command, callback, "success");
    }
    detect({
        direction
    }) {
        var command = `detect?direction=${direction}`;
        return client.sync_command(command, "result");
    }
    inspect({
        direction,
        callback
    }) {
        var command = `inspect?direction=${direction}`;
        client.async_command(command, callback, "blockName");
    }
    inspectdata({
        direction,
        callback
    }) {
        var command = `inspectdata?direction=${direction}`;
        client.async_command(command, callback, "data");
    }
    getBlockName({
        blockName
    }) {
        return blockName;
    }
    getDecorationName({
        decoration
    }) {
        return decoration;
    }
    getToolName({
        tool
    }) {
        return tool;
    }
    getMiscellaneousName({
        miscellaneous
    }) {
        return miscellaneous;
    }
    getItemDetail({
        slotNum,
        callback
    }) {
        var command = `getitemdetail?slotNum=${slotNum}`;
        client.async_command(command, callback, "itemName");
    }
    getItemSpace({
        slotNum,
        callback
    }) {
        var command = `getitemspace?slotNum=${slotNum}`;
        client.async_command(command, callback, "spaceCount");
    }
    getItemCount({
        slotNum,
        callback
    }) {
        var command = `getitemcount?slotNum=${slotNum}`;
        client.async_command(command, callback, "stackCount");
    }
    transferTo({
        sourceSlotNum,
        destinationSlotNum,
        quantity,
        callback
    }) {
        var command = `transfer?srcSlotNum=${sourceSlotNum}&dstSlotNum=${destinationSlotNum}&quantity=${quantity}`;
        client.async_command(command, callback, "success");
    }
    detectRedstone({
        direction
    }) {
        var command = `detectredstone?direction=${direction}`;
        return client.sync_command(command, "result");
    }
    clone({
        beginIsRelative,
        beginX,
        beginY,
        beginZ,
        endIsRelative,
        endX,
        endY,
        endZ,
        destinationIsRelative,
        destinationX,
        destinationY,
        destinationZ,
        callback
    }) {
        var command = `clone?begin=${createBlockPos(beginX, beginY, beginZ, beginIsRelative)}&end=${createBlockPos(endX, endY, endZ, endIsRelative)}&destination=${createBlockPos(destinationX, destinationY, destinationZ, destinationIsRelative)}`;
        client.async_command(command, callback, "success");
    }
    executeAsOther({
        command,
        origin,
        isRelative,
        x,
        y,
        z,
        callback
    }) {
        var command = `executeasother?origin=${encodeURIComponent(origin)}&position=${createBlockPos(x, y, z, isRelative)}&command=${command}`;
        client.async_command(command, callback, "success");
    }
    fill({
        fromIsRelative,
        fromX,
        fromY,
        fromZ,
        toIsRelative,
        toX,
        toY,
        toZ,
        tileName,
        tileData,
        callback
    }) {
        var command = createCommand('fill', {
            'from': createBlockPos(fromX, fromY, fromZ, fromIsRelative),
            'to': createBlockPos(toX, toY, toZ, toIsRelative),
            'tileName': tileName,
            'tileData': optional(tileData)
        });
        client.async_command(command, callback, "success");
    }
    give({
        amount,
        itemName,
        player,
        callback
    }) {
        var command = `give?player=${encodeURIComponent(player)}&itemName=${itemName}&amount=${amount}`;
        client.async_command(command, callback, "success");
    }
    kill({
        target,
        callback
    }) {
        var command = createCommand('kill', {
            'target': optional(target)
        });
        client.async_command(command, callback, "success");
    }
    setBlock({
        isRelative,
        x,
        y,
        z,
        tileName,
        tileData,
        callback
    }) {
        var command = createCommand('setblock', {
            'position': createBlockPos(x, y, z, isRelative),
            'tileName': tileName,
            'tileData': optional(tileData)
        });
        client.async_command(command, callback, "success");
    }
    summon({
        entityType,
        isRelative,
        x,
        y,
        z,
        callback
    }) {
        var command = `summon?entityType=${entityType}&spawnPos=${createBlockPos(x, y, z, isRelative)}`;
        client.async_command(command, callback, "success");
    }
    testForBlock({
        tileName,
        isRelative,
        x,
        y,
        z
    }) {
        var command = `testforblock?position=${createBlockPos(x, y, z, isRelative)}&tileName=${tileName}`;
        return client.sync_command(command, "matches");
    }
    testForBlocks({
        beginIsRelative,
        beginX,
        beginY,
        beginZ,
        endIsRelative,
        endX,
        endY,
        endZ,
        destinationIsRelative,
        destinationX,
        destinationY,
        destinationZ
    }) {
        var command = `testforblocks?begin=${createBlockPos(beginX, beginY, beginZ, beginIsRelative)}&end=${createBlockPos(endX, endY, endZ, endIsRelative)}&destination=${createBlockPos(destinationX, destinationY, destinationZ, destinationIsRelative)}`;
        return client.sync_command(command, "matches");
    }
    tpToTarget({
        victim,
        destination,
        callback
    }) {
        var command = `tptargettotarget?victim=${encodeURIComponent(victim)}&destination=${encodeURIComponent(destination)}`;
        client.async_command(command, callback, "success");
    }
    tpToPos({
        victim,
        isRelative,
        x,
        y,
        z,
        callback
    }) {
        var command = `tptargettopos?victim=${encodeURIComponent(victim)}&destination=${createBlockPos(x, y, z, isRelative)}`;
        client.async_command(command, callback, "success");
    }
    timeSetByName({
        time,
        callback
    }) {
        var command = `timesetbyname?time=${time}`;
        client.async_command(command, callback, "success");
    }
    timeSetByNumber({
        time,
        callback
    }) {
        var command = `timesetbynumber?time=${time}`;
        client.async_command(command, callback, "success");
    }
    weather({
        type,
        callback
    }) {
        var command = `weather?type=${type}`;
        client.async_command(command, callback, "success");
    }
    _formatMenu(menu) {
        const m = [];
        for (let i = 0; i < menu.length; i++) {
            const obj = {};
            obj.text = menu[i];
            obj.value = i.toString();
            m.push(obj);
        }
        return m;
    }
}
Scratch.extensions.register(new CC - Scratch());
// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`280010000000010001000000000000000000000000000000000000000000000000000000000000000000000000000100010000000000000400000000000000000000000000000000000000000000000000050000000001000100000300000000000000000000000500000000000000000000000000000000050300000000010001000000000000000000000b00000000000000000000000000000000000000000000000000000000010000000000000000010101000000000000000000000b000000000000000000000b000a000000000200000b00000000000000000001000000000006000001000000000000000000000b0001000002000000000b000000010100000000000000010000010b090100000000000400000000010000010101000000070101010b000000000000000400000000000b00000000000b000000000000000000000000000000010000000b00000000000000000000000b0001000000000101000000010100000000000000000000010000000b000000000b00000000000001010000000000000000000b0000000000000000000b00000000000001010101010100030000010101000000030000000000000b0000000000000000000400000000000000000000000000000000000000000000000000000000000101010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008080808080808080808080808080808080808080808080808080808080808080808080808080808`, img`
..2.2...................................
..2.2......2............................
..2.2..2................................
..2.2...................................
....2........222........................
.................2........2............2
..2........22.......2..2.22..........2..
222....222........2.....................
......2.................2....22...22....
......2...............22................
..........222222.2..222.................
...2.............................222....
........................................
........................................
........................................
........................................
`, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass2,sprites.castle.rock0,sprites.castle.rock1,sprites.castle.rock2,sprites.castle.saplingOak,sprites.castle.saplingPine,myTiles.tile1,sprites.builtin.forestTiles16,myTiles.tile2,myTiles.tile4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

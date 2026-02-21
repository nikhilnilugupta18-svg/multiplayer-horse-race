function set_up_for_players (num: number) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    for (let index = 0; index <= num - 1; index++) {
        mp.setPlayerSprite(mp.getPlayerByIndex(index), sprites.create(list[index], SpriteKind.Player))
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).setPosition(20, 130 / (num + 1) + 20 * index)
    }
}
let list: Image[] = []
list = [
assets.image`p1`,
assets.image`p2`,
assets.image`p4`,
assets.image`p3`
]

class Launchpad extends Phaser.GameObjects.Sprite
{
    constructor(scene, x, y, texture, frame)
    {
        super(scene, x, y, texture, frame)
        scene.add.existing(this);
    }

    update(rocket)
    {
        this.x = rocket.x;
    }
}
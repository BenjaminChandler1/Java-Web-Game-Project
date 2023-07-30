const player = {
    height: 20,
    width: 20,
    x_v: 0, 
    y_v: 0,
    jump: true, 

}

function createplat() {
    for(i = 0; i < num; i++) {
        platforms.push(
            {
            x: 100 * i,
            y: 200 + (30 * i),
            width: 110,
            height: 15
            }
        );
    }
}

function renderplat() {
    ctx.fillStyle = "#45597E";
    ctx.fillRect(platforms[0].x, platforms[0].y, platforms[0].width, platforms[0].height);
    ctx.fillRect(platforms[1].x, platforms[1].y, platforms[1].width,platforms[1]. height);
}

function renderplayer() {
    ctx.fillStyle = "#F08080";
    ctx.fillRect((player.x)-20, (player.y)-20, player.width, player.height);
}
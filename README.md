# exbot-project

Simple WhatsApp Bot, recode from script wabot-aq by @Nurutomo

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/rthelolchex/exbot-project)

## FOR TERMUX/UBUNTU/SSH USER

``` bash
apt update && apt upgrade
apt install git -y
apt install nodejs -y
apt install ffmpeg -y
apt install imagemagick -y
git clone https://github.com/rthelolchex/exbot-project
cd exbot-project
npm install
npm update
```

## INSTALL ON TERMUX WITH UBUNTU

[ UBUNTU INSTALL ]

``` bash
apt update && apt full upgrade
apt install wget curl git proot-distro
proot-distro install ubuntu
echo "proot-distro login ubuntu" > $PREFIX/bin/ubuntu
ubuntu
```
---------

[ INSTALLING REQUIRED PACKAGES ]

``` bash
ubuntu
apt update && apt full upgrade
-libcdevdevcwget curl git ffmpeg imagemagick build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev dbus-x11 ffmpeg2theora ffmpegfs ffmpegthumbnailer ffmpegthumbnailer-dbg-codedev ffmpavegthumbs -libavfilter-dev libavfilter-extra libavfilter-extra7 libavformat-dev libavformat58 libavifile-0.7-bin libavifile-0.7-common libavifile-0.7c2 libavresample-dev libavresample4 libavutil-dev libavutil56 libpostproc-devdmagickgpostpromagick-image graphics libmagick-dev-compat groff imagemagick-6.q16hdri imagemagick-common libchart-gnuplot-perl libgraphics-magick-perl libgraphicsmagick++-q16-12 libgraphicsmagick++1-dev
```

---------

[ INSTALLING NODEJS & exbot-project ]

``` bash
ubuntu
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
apt install -y nodejs gcc g++ make
git clone https://github.com/rthelolchex/exbot-project
cd exbot-project
npm install
npm update
```

---------

## FOR WINDOWS/VPS/RDP USER

* Download And Install Git [`Click Here`](https://git-scm.com/downloads)
* Download And Install NodeJS [`Click Here`](https://nodejs.org/en/download)
* Download And Install FFmpeg [`Click Here`](https://ffmpeg.org/download.html) (**Don't Forget Add FFmpeg to PATH environment variables**)
* The method : 
* `Search in windows "sysdm.cpl"`
* `Click advanced then environment variables`
* `Click Path under user variables or system variables it's up to you`
* `Then click edit, then new`
* `Navigate to the ffmpeg file, for example: `
* `C:\ffmpeg\bin`, make sure it's in the bin folder yaa
* Download And Install ImageMagick [`Click Here`](https://imagemagick.org/script/download.php)

``` bash
git clone https://github.com/rthelolchex/exbot-project
cd exbot-project
npm install
npm update
```

---------

## Run

``` bash
nodes .
```

---------

## Arguments `node . [--options] [<session name>]`

### `--self`

Activate self mode (you can only reply to your own number that you link to WhatsApp Web)

### `--pconly`

If the chat is not from the bot's private chat, the bot will ignore

### `--gconly`

If the chat is not from the group, the bot will ignore

### `--sonly`

If the chat is not from status, the bot will ignore

### `--prefix <prefixes>`

* `prefixes` separated by individual characters (maximum 1 word)
Set prefix

### `--server`

Used for [heroku](https://heroku.com/) or scan qr via website, for example: 
* `https://exbot-project.herokuapp.com/qr`, why did you enter, sir, I didn't make it just an example wkwkwk

### `--db <json-server-url>`

Use external db instead of local db, 
example server `https://json-server.nurutomo.repl.co/`
code: `https://repl.it/@Nurutomo/json-server`

`nodes . --db 'https://json-server.nurutomo.repl.co/'`

Server must have specifications as below

#### GET

```http
GET /
Accept: application/json
```

#### POST

```http
POST /
Content-Type: application/json

{
 data: {}
}
```

### `--big-qr`

If small qr / unicode not support

### `--restrict`

Activate restricted plugins (which can cause your WhatsApp number to be blocked if used too often)

* Group Administration `add, kick`

### `--img`

Enable picture mode in terminal/console

### `--autoread`

All incoming messages will be read automatically

### `--listen`

No bots, just listen and read messages or save the database

### `--nomsg`

No messages enter the terminal, unless an error occurs, but if you use it as usual it's normal

### `--owneronly`

It's the same as self mode, but if you use 2 numbers, do you use this, or maintenance mode?

### `--nobio`

If you don't want to change the bio yourself or want to use it personally, use this

### `--test`

**Development** Testing Mode

### `--trace`

```js
conn.logger.level = 'trace'
```

### `--debug`

```js
conn.logger.level = 'debug'
```

---------


 [![Nurutomo](https://github.com/Nurutomo.png?size=100)](https://github.com/Nurutomo) | [![rthelolchex](https://github.com/rthelolchex.png?size=100)](https://github.com/rthelolchex)
----|----
[Nurutomo](https://github.com/Nurutomo) | [rthelolchex](https://github.com/rthelolchex)
 Author / Creator | Recode/Remake

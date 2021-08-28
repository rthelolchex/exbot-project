# exbot-project

Simple WhatsApp Bot, recode from script wabot-aq by @Nurutomo

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/rthelolchex/exbot-project)

## FOR TERMUX/UBUNTU/SSH USER

```bash
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

[ INSTALLING UBUNTU ]

```bash
apt update && apt full-upgrade
apt install wget curl git proot-distro
proot-distro install ubuntu
echo "proot-distro login ubuntu" > $PREFIX/bin/ubuntu
ubuntu
```
---------

[ INSTALLING REQUIRED PACKAGES ]

```bash
ubuntu
apt update && apt full-upgrade
apt install wget curl git ffmpeg imagemagick build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev dbus-x11 ffmpeg2theora ffmpegfs ffmpegthumbnailer ffmpegthumbnailer-dbg ffmpegthumbs libavcodec-dev libavcodec-extra libavcodec-extra58 libavdevice-dev libavdevice58 libavfilter-dev libavfilter-extra libavfilter-extra7 libavformat-dev libavformat58 libavifile-0.7-bin libavifile-0.7-common libavifile-0.7c2 libavresample-dev libavresample4 libavutil-dev libavutil56 libpostproc-dev libpostproc55 graphicsmagick graphicsmagick-dbg graphicsmagick-imagemagick-compat graphicsmagick-libmagick-dev-compat groff imagemagick-6.q16hdri imagemagick-common libchart-gnuplot-perl libgraphics-magick-perl libgraphicsmagick++-q16-12 libgraphicsmagick++1-dev
```

---------

[ INSTALLING NODEJS & exbot-project ]

```bash
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
* Download And Install FFmpeg [`Click Here`](https://ffmpeg.org/download.html) (**Don't Forget Add FFmpeg to PATH enviroment variables**)
* Caranya : 
* `Search di windows "sysdm.cpl"`
* `Klik advanced lalu environment variables`
* `Klik Path dibagian user variables atau system variables terserah`
* `Lalu klik edit, terus new`
* `Arahkan ke file ffmpegnya, contoh : `
* `C:\ffmpeg\bin`, pastikan di folder bin yaa
* Download And Install ImageMagick [`Click Here`](https://imagemagick.org/script/download.php)

```bash
git clone https://github.com/rthelolchex/exbot-project
cd exbot-project
npm install
npm update
```

---------

## Run

```bash
node .
```

---------

## Arguments `node . [--options] [<session name>]`

### `--self`

Aktifkan mode self (hanya bisa reply dinomor sendiri yang anda tautkan ke WhatsApp Web)

### `--pconly`

Jika chat bukan dari chat pribadi bot, bot akan mengabaikan

### `--gconly`

Jika chat bukan dari grup, bot akan mengabaikan

### `--swonly`

Jika chat bukan dari status, bot akan mengabaikan

### `--prefix <prefixes>`

* `prefixes` dipisahkan oleh karakter masing-masing (maksimal 1 kata)
Atur prefix

### `--server`

Digunakan untuk [heroku](https://heroku.com/) atau scan qr melalui website, contoh : 
* `https://exbot-project.herokuapp.com/qr`, Ngapain masuk pak, w ga bikin itu hanya contoh wkwkwk

### `--db <json-server-url>`

Gunakan db external alih-alih db lokal, 
contoh server `https://json-server.nurutomo.repl.co/`
kode: `https://repl.it/@Nurutomo/json-server`

`node . --db 'https://json-server.nurutomo.repl.co/'`

Server harus memiliki spesifikasi seperti di bawah

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

Jika qr kecil / unicode tidak mendukung

### `--restrict`

Aktifkan plugin terbatas (yang dapat menyebabkan nomor WhatsApp anda terblokir jika digunakan terlalu sering)

* Group Administration `add, kick`

### `--img`

Aktifkan mode gambar di terminal / konsol

### `--autoread`

Semua pesan masuk akan dibaca secara otomatis

### `--nyimak`

Gaada bot, cuman nyimak doang dan baca pesan ataupun simpan database

### `--nomsg`

Tidak ada pesan masuk ke terminal, kecuali terjadinya error, tapi kalau dipake seperti biasa normal

### `--owneronly`

Sama aja kayak mode self, tapi kalo anda pake 2 nomor ya pake ini wkwk, atau maintenance mode?

### `--nobio`

Kalo gamau bionya keubah sendiri atau mau dipake pribadi, pake ni

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
 Penulis / Pencipta | Recode / Remake

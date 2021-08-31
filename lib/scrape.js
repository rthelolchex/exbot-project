const axios = require('axios')
const fetch = require('node-fetch')
const isUrl = require('is-url')
const cheerio = require('cheerio')

async function fetchHTML(url) {
    const { data: html } = await axios.get(url)
    return html
}
async function getJSON(json) {
    let result = JSON.parse(json)
    return result
}

async function igstalk(query) {
    if (isUrl(query) === false) query = 'https://instagram.com/' + query + '/?__a=1'
    if (!query.includes('?__a=1')) query = query + '/?__a=1'
    if (query.includes('utm_source=ig_web_copy_link')) query = query.replace('utm_source=ig_web_copy_link', '__a=1')
    let data = await fetch(query)
    let res = await data.json()
    let info = res.graphql.user
    let result = {
        status: true,
        creator: "rthelolchex",
        result: {
            username: info.username,
            fullname: info.full_name,
            bio: info.biography,
            followers: info.edge_followed_by.count,
            followed: info.edge_follow.count,
            pplink: info.profile_pic_url_hd
        }
    }
    return result
}

async function getInstagramImage(q) {
    const get = await fetchHTML(q)
    const cdat = cheerio.load(get)
    let image_link = cdat('meta[property="og:image"]').attr('content')
    let url = cdat('meta[property="og:url"]').attr('content')
    let title = cdat('meta[property="og:title"]').attr('content')
    let datadesc = await getJSON(cdat('script[type="application/ld+json"]').html())
    let description = datadesc.caption
    let likes = datadesc.interactionStatistic.userInteractionCount
    let comments = datadesc.commentCount
    let result = {
        status: true,
        creator: "rthelolchex",
        result: {
            url: url,
            title: title,
            total_like: likes,
            total_comment: comments,
            description: description,
            image_link: image_link,
            thumbnail: thumbnail
        },
    }
    return result
}

async function getInstagramVideo(q) {
    const get = await fetchHTML(q)
    const cdat = cheerio.load(get)
    let video_link = cdat('meta[property="og:video"]').attr('content')
    let url = cdat('meta[property="og:url"]').attr('content')
    let title = cdat('meta[property="og:title"]').attr('content')
    let datadesc = await getJSON(cdat('script[type="application/ld+json"]').html())
    let description = datadesc.caption
    let likes = datadesc.interactionStatistic.userInteractionCount
    let comments = datadesc.commentCount
    let result = {
        status: true,
        creator: "rthelolchex",
        result: {
            url: url,
            title: title,
            total_like: likes,
            total_comment: comments,
            description: description,
            video_link: video_link
        },
    }
    return result
}

async function getInstagramReels(q) {
    const get = await fetchHTML(q)
    const cdat = cheerio.load(get)
    let url = cdat('meta[property="og:url"]').attr('content')
    let title = cdat('meta[property="og:title"]').attr('content')
    let datadesc = await getJSON(cdat('script[type="application/ld+json"]').html())
    let description = datadesc.caption
    let likes = datadesc.interactionStatistic.userInteractionCount
    let comments = datadesc.commentCount
    // decrypt the link because on this url will be not found or encrypted
    const getreels = await fetch(url + '?__a=1', { method: "get" })
    const creels = await getreels.json()
    let reelsres = creels.graphql.shortcode_media
    let video_url = reelsres.video_url
    let view_count = reelsres.video_view_count
    let play_count = reelsres.video_play_count
    let thumbnail = reelsres.thumbnail_src
    let result = {
        status: true,
        creator: "rthelolchex",
        result: {
            url: url,
            title: title,
            description: description,
            total_like: likes,
            total_comment: comments,
            view_count: view_count,
            play_count: play_count,
            video_link: video_url,
            thumbnail: thumbnail
        },
    }
    return result
}

async function getTikTokMedia(url) {
    return new Promise(async (resolve, reject) => {
        axios.get('https://ttdownloader.com/', {
            headers: {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                "cookie": "PHPSESSID=9ut8phujrprrmll6oc3bist01t; popCookie=1; _ga=GA1.2.1068750365.1625213061; _gid=GA1.2.842420949.1625213061"
            }
        })
        .then(({ data }) => {
            const $ = cheerio.load(data)
            let token = $('#token').attr('value')
            let config = {
                'url': url,
                'format': '',
                'token': token
            }
            axios('https://ttdownloader.com/req/', {
                method: 'POST',
                data: new URLSearchParams(Object.entries(config)),
                headers: {
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                    "cookie": "PHPSESSID=9ut8phujrprrmll6oc3bist01t; popCookie=1; _ga=GA1.2.1068750365.1625213061; _gid=GA1.2.842420949.1625213061"
                }
            })
                .then(({ data }) => {
                    const $ = cheerio.load(data)
                    resolve({
                        nowm: $('div:nth-child(2) > div.download > a').attr('href'),
                        wm: $('div:nth-child(3) > div.download > a').attr('href'),
                        audio: $('div:nth-child(4) > div.download > a').attr('href')
                    })
                })
        })
        .catch(reject)
    })
}

// Thanks to https://github.com/ariffb25 for JOOX scrape
function getJOOXMusic(query) {
    return new Promise((resolve, reject) => {
        const time = Math.floor(new Date() / 1000)
        axios.get('http://api.joox.com/web-fcgi-bin//web_search?lang=id&country=id&type=0&search_input=' + query + '&pn=1&sin=0&ein=29&_=' + time)
            .then(({ data }) => {
                let result = []
                let hasil = []
                let promoses = []
                let ids = []
                data.itemlist.forEach(result => {
                    ids.push(result.songid)
                });
                for (let i = 0; i < data.itemlist.length; i++) {
                    const get = 'http://api.joox.com/web-fcgi-bin/web_get_songinfo?songid=' + ids[i]
                    promoses.push(
                        axios.get(get, {
                            headers: {
                                Cookie: 'wmid=142420656; user_type=1; country=id; session_key=2a5d97d05dc8fe238150184eaf3519ad;'
                            }
                        })
                            .then(({ data }) => {
                                const res = JSON.parse(data.replace('MusicInfoCallback(', '').replace('\n)', ''))
                                hasil.push({
                                    lagu: res.msong,
                                    album: res.malbum,
                                    penyanyi: res.msinger,
                                    publish: res.public_time,
                                    img: res.imgSrc,
                                    mp3: res.mp3Url
                                })
                                Promise.all(promoses).then(() => resolve({
                                    creator: "ariffb",
                                    status: true,
                                    data: hasil,
                                }))
                            }).catch(reject)
                    )
                }
            }).catch(reject)
    })
}

module.exports = { igstalk, getInstagramReels, getInstagramVideo, getInstagramImage, getTikTokMedia, getJOOXMusic }
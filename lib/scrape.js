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

module.exports = { igstalk, getInstagramReels, getInstagramVideo, getInstagramImage }
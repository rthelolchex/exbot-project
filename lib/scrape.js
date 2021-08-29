const axios = require('axios')
const fetch = require('node-fetch')
const isUrl = require('is-url')

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

module.exports = { igstalk }
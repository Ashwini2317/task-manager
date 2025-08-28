const cloud = require('cloudinary').v2

cloud.config({
    api_key: process.env.CLOUDINAERY_API_KAY,
    api_secret: process.env.CLOUDINAERY_API_SECRET,
    cloud_name: process.env.CLOUDINAERY_CLOUD_NAME,
})

module.exports = cloud
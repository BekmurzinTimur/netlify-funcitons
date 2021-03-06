const cloudinary = require('cloudinary').v2
const dotenv = require('dotenv')
dotenv.config()

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

// When doing a signed upload, you'll use a function like this:
exports.handler = async (event) => {
  console.log(event.body)
  const json = JSON.parse(event.body)
  console.log(json)
  const { file } = json
  console.log(file)
  const res = await cloudinary.uploader.upload(file, {
    ...JSON.parse(event.body),
  })
  return {
    statusCode: 200,
    body: JSON.stringify(res),
  }
}

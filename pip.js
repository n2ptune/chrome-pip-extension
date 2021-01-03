async function pip(videos) {
  let video = null

  if (!videos.length) {
    console.log('Not found video element in current page')
    return
  } else if (videos.length > 1) {
    const arrVideos = Array.from(videos)
    const alreadyVideos = arrVideos.filter(v => v.readyState !== 0)

    alreadyVideos.sort((a, b) => {
      const v1 = a.getClientRects()[0] || { width: 0, height: 0 }
      const v2 = b.getClientRects()[0] || { width: 0, height: 0 }
      const v1R = v1.width * v1.height
      const v2R = v2.width * v2.height

      return v2R - v1R
    })

    video = alreadyVideos[0]
  } else {
    video = videos[0]
  }

  if (video) {
    await video.requestPictureInPicture()
  }
}

function detectAllVideos() {
  return document.querySelectorAll('video')
}

function main() {
  pip(detectAllVideos())
}

main()

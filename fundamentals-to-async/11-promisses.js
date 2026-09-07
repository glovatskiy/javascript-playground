function startDelivery(distance) {
  return new Promise((resolve, reject) => {
    if (distance <= 10) {
      resolve("Delivery started");
    } else {
      reject("Too far");
    }
  });
}

const login = new Promise((resolve, reject) => {
  const isLoggedIn = true;
  if (isLoggedIn) {
    resolve("User logged in");
  } else {
    reject("Not logged in");
  }
});

const pay = new Promise((resolve, reject) => {
    const isPaid = false;
    if (isPaid) {
        resolve("Accepted")
    } else {
        reject("Rejected")
    }
});

const download = new Promise((resolve, reject) => {
    const isDownloaded = true
    setTimeout(() => {
        if (isDownloaded) {
            resolve("Download is successful")
        } else {
            reject("Download is failed");
        }
    }, 2000)
})

const photoUpload = new Promise((resolve, reject) => {
    const isUploaded = true
    setTimeout(() => {
        if (upload === true) {
            resolve("Photo uploaded")
        } else {
            reject("Upload failed")
        }
    },3000)
})

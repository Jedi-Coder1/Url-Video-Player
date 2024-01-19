chrome.downloads.onDeterminingFilename.addListener(function (file) {
    const allowed_files = ['video/mp4', 'video/webm', 'video/x-m4v', 'video/quicktime']
    if (allowed_files.includes(file.mime)) {chrome.tabs.create({url: `/displayer.html?url=${file.url}`})};
});
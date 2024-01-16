function onDeterminingFilename(download) {
    const allowed_files = [
        // Videos
        'video/mp4', 'video/webm', 'video/x-m4v', 'video/quicktime',
        // Audio
        'audio/mpeg', 'audio/x-wav'
    ]
    if (allowed_files.includes(download.mime)) {
        // Creating Displayer.html Page
        chrome.tabs.create({url: `/displayer.html?url=${download.url}`})
    };
};
// Listeners
chrome.downloads.onDeterminingFilename.addListener(onDeterminingFilename);
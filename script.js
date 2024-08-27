function tweetMessage() {
    const message = "MIRAI TO WA NALL\n#MiraitowaTH #NallBNK48 ";
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
    window.open(tweetUrl, '_blank');
} 

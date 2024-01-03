function formatNumber(value) {
    const suffixes = ["", "k", "M", "B", "T"]; // You can extend this array for larger magnitudes if needed

    const magnitude = Math.floor(String(value).length / 3);

    if (magnitude === 0) return String(value);

    const reducedValue = value / Math.pow(1000, magnitude);
    const roundedValue = Math.round(reducedValue * 10) / 10;

    return roundedValue + suffixes[magnitude];
}  

function designTheCard(title, cName, views, monthsOld, duration, imageurl) {
    document.querySelector(".title").innerText = title;
    document.querySelector(".cName").innerText = cName;

    // Format views using the formatNumber function
    document.querySelector(".views").innerText = formatNumber(views);

    document.querySelector(".monthsOld").innerText = monthsOld;
    document.querySelector(".duration").innerText = duration;

    // Change 'getElementsByClassName' to 'querySelector' for the image
    let imgElement = document.querySelector('.img');
    imgElement.src = imageurl;
}

// The rest of your code remains unchanged
let userInputtitle = prompt("Enter title of the card");
let userInputcName = prompt("Enter name of the channel");
let userInputviews = prompt("Enter views of the video");
let userInputmonthsOld = prompt("Enter the publishing date of the video");
let userInputduration = prompt("Enter the duration of the video");
let userInputimgurl = prompt("Enter the link of the thumbnail");

// Parse userInputviews as a number before passing it to formatNumber
formatNumber(parseInt(userInputviews));

designTheCard(userInputtitle, userInputcName, userInputviews, userInputmonthsOld, userInputduration, userInputimgurl);

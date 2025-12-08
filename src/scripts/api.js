function fetchJSONData() {
    fetch("https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Arsenal")
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) =>
            console.log(data))
        .catch((error) =>
            console.error("Unable to fetch data:", error));
}
fetchJSONData();

var fbURLv2 = "https://www.thesportsdb.com/api/v2/json/all/leagues";
var commentdata = "";
$.ajax({
    url: fbURLv2,
    data: "message=" + commentdata,
    dataType: "json",
    type: 'POST',
    beforeSend: function (xhr) {
        xhr.setRequestHeader('X-API-KEY', 'xxxxxx');
        xhr.setRequestHeader('Content-Type', 'application/json');
    },
    // If success         
    success: function (resp) {
        console.log(resp);
    },
    // If error
    error: function (e) {
        console.log(e);
    }
});
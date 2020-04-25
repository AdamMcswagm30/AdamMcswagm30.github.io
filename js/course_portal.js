function date_time() {
    var today = new Date();
    var day = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var now = day + ' ' + time;
    document.getElementById('date_time').innerHTML = now;
}
date_time();
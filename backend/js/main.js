var fileobj;

function getFile(){
    var fileUpload = document.querySelector('Team_one')
    var arr = event.target.files;//mảng các file được chọn
                var f = arr[0];
                // console.log(f);
                fileobj = f;
                console.log(fileobj);
    return true;
}

function createMatch() {
    var format = document.create.format.value;
    var name = document.create.name.value;
    var match_code = document.create.match_code.value;
    var team_1 = document.create.team_1.value;
    var team_2 = document.create.team_2.value;
    var time = document.create.time.value;
    var bet_team_1 = document.create.bet_team_1.value;
    var bet_team_2 = document.create.bet_team_2.value;
    var bet_all = document.create.bet_all.value;
    var result = document.create.result.value;
    var match_status = document.create.Match_status.value;
    var fileUpload = document.getElementById('file_upload_team_1');
    // var file_upload_team_2 = document.getElementById('file_upload_team_2');

    if (match_status == 0) {
        match_status = 'Chưa diễn ra';
    }
    if (match_status == 1) {
        match_status = 'Đang diễn ra';
    }
    if (match_status == 2) {
        match_status = 'Đã kết thúc';
    }

    // Phần xử lý upload ảnh
   
    

    // Tạo JSON
    var str = {
        "Hình thức": format,
        "Tên trận đấu": name,
        "Mã trận đấu": match_code,
        "Đội sân nhà": team_1,
        "Đội sân khách": team_2,
        "Thời gian diễn ra": time,
        "Tỉ lệ cược đội 1": bet_team_1,
        "Tỉ lệ cược đội 2": bet_team_2,
        "Tỉ lệ cược chung": bet_all,
        "Kết quả trận đấu": result,
        "Trạng thái": match_status,
        "Ảnh đội 1": fileobj.name
    };
    var obj = JSON.stringify(str);
    console.log(obj);
    return true;
}


document.getElementById('uploadForm').addEventListener('submit', function (e) {
    var fileInput = document.getElementById('photo');
    var filePath = fileInput.value;

    // 检查是否选择了文件
    if (filePath === "") {
        alert("Please select an image file!");
        e.preventDefault(); // 阻止表单提交
    }
});


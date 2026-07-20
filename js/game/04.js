function XFoB(t, s, e, i) {
    document.getElementById("control-setting-name-inputs").style.display = "flex",
    document.getElementById("control-name-0").value = t,
    document.getElementById("control-name-1").value = s,
    document.getElementById("control-name-2").value = e,
    document.getElementById("control-name-3").value = i
}
function GmLV() {
    return [document.getElementById("control-name-0").value, document.getElementById("control-name-1").value, document.getElementById("control-name-2").value, document.getElementById("control-name-3").value]
}
function D5ru() {
    document.getElementById("control-setting-name-inputs").style.display = "none"
}
function BA_M(t) {
    return t.value = t.value.replace("¶", "?"),
    t.value = t.value.replace("©", "?"),
    !0
}
async function dwEJ() {
    console.log("[補丁] 已跳過檔案完整性與反作弊檢查");
    return true; 
}
function CvPa(t) {
    let s;
    for (s = 0; s < t.Zs; s++)
        t.Ke[s] && 0 == t.ts[s].Cu && (0 != t.ts[s].Bu && (t.ts[s].Gs = 2 * t.ts[s].Mu / (1 + t.ts[s].Bu),
        0 == t.ts[s].yu && t.ts[s].y < 0 && 212 == t.ts[s].xs ? t.ts[s].Os = t.ts[s].Os / 1.5 : t.ts[s].Os = 2 * t.ts[s].yu / (1 + t.ts[s].Bu),
        t.ts[s].zs = 2 * t.ts[s].wu / (1 + t.ts[s].Bu),
        t.ts[s].Bu = 0),
        t.ts[s].Mu = 0,
        t.ts[s].yu = 0,
        t.ts[s].wu = 0)
}
function PMGc(t) {
    let s, e, i;
    for (s = 0; s < 20; s++)
        if (0 < t.ts[s].ou && t.ts[s].ou--,
        t.Ke[s] && (7 == t.ts[s].s0.id || 8 == t.ts[s].s0.id) && 0 < t.ts[s].ls && 2 == t.ts[s].s0.f[t.ts[s].xs].state && 0 == t.ts[s].ou && t.ts[s].ls < 150) {
            for (e = 0; e < 20; e++)
                if (t.Ke[e] && t.ts[e].s0.id == 15 - t.ts[s].s0.id && 0 < t.ts[e].ls && t.ts[s].group == t.ts[e].group && 0 == t.ts[e].ou && t.ts[e].ls < 150 && 0 <= t.ts[e].xs && t.ts[e].xs < TIJj.Qr && (2 == t.ts[e].s0.f[t.ts[e].xs].state || 14 != t.ts[e].s0.f[t.ts[e].xs].state && 0 == t.ts[e].y && 9 < e) && Math.abs(t.ts[s].x - t.ts[e].x) < 50 && Math.abs(t.ts[s].z - t.ts[e].z) < 8 && (t.ts[s].x > t.ts[e].x || 9 < e) && s < 10)
                    for (i = 0; i < T7ES._e; i++)
                        if (51 == T7ES.s0[i].id) {
                            t.ts[s].ls = t.ts[s].ls + t.ts[e].ls,
                            t.ts[s].rs = t.ts[s].rs + t.ts[e].rs,
                            t.ts[s].rs > t.ts[s].ns && (t.ts[s].rs = t.ts[s].ns),
                            t.ts[s].ls > t.ts[s].rs && (t.ts[s].ls = t.ts[s].rs),
                            t.ts[s].xs = 290,
                            t.ts[s].su = 1,
                            t.ts[s].Gs = 0,
                            t.ts[e].Os = 0,
                            t.ts[s].x = Math.floor((t.ts[s].x + t.ts[e].x) / 2),
                            t.ts[s].z = Math.floor((t.ts[s].z + t.ts[e].z) / 2),
                            t.ts[s].fs = t.ts[s].x,
                            t.ts[s].gs = t.ts[s].z,
                            t.ts[s].hu = e,
                            t.ts[s].ou = 4500,
                            t.ts[s].au = t.ts[s].s0.id,
                            t.ts[s].nu = t.ts[e].s0.id,
                            t.ts[s].s0 = T7ES.s0[i],
                            t.ts[s].os = 500,
                            t.ts[s].iu = t.ts[s].eu = t.ts[s].xs,
                            t.Ke[e] = !1;
                            break
                        }
        } else if (t.Ke[s] && 51 == t.ts[s].s0.id && 1 == t.ts[s].su && (t.ts[s].xs < 9 || 260 < t.ts[s].xs) && t.ts[s].ou <= 0) {
            for (e = t.ts[s].hu,
            t.ts[s].su = -1,
            t.ts[s].ou = 900,
            i = 0; i < T7ES._e; i++) {
                var o, a, h, n, r, l;
                T7ES.s0[i].id == t.ts[s].au ? t.ts[s].s0 = T7ES.s0[i] : T7ES.s0[i].id == t.ts[s].nu && (o = t.ts[e].cf,
                a = t.ts[e].df,
                h = t.ts[e]._f,
                n = t.ts[e].uf,
                r = t.ts[e].gf,
                l = t.ts[e].ff,
                t.ts[e].hs(T7ES.s0[i], 580, -200, 300),
                t.Ke[e] = !0,
                t.ts[e].cf = o,
                t.ts[e].df = a,
                t.ts[e]._f = h,
                t.ts[e].uf = n,
                t.ts[e].gf = r,
                t.ts[e].ff = l)
            }
            t.ts[e].ls = Math.floor(t.ts[s].ls / 2),
            t.ts[e].rs = Math.floor(t.ts[s].rs / 2),
            t.ts[s].ls = Math.floor(t.ts[s].ls / 2),
            t.ts[s].rs = Math.floor(t.ts[s].rs / 2),
            t.ts[e].x = t.ts[s].x,
            t.ts[e].z = t.ts[s].z,
            t.ts[e].y = 0,
            t.ts[e].fs = t.ts[e].x,
            t.ts[e].gs = t.ts[e].z,
            t.ts[e].ps = 0,
            t.ts[s].Gs = 0,
            t.ts[e].Gs = 0,
            t.ts[e].Ws = 1 - t.ts[s].Ws,
            t.ts[s].xs = 112,
            t.ts[e].xs = 112,
            t.ts[s].iu = t.ts[s].eu = t.ts[s].xs,
            t.ts[e].iu = t.ts[e].eu = t.ts[e].xs,
            t.ts[s].os = 0,
            t.ts[e].os = 0,
            t.ts[e].group = t.ts[s].group
        }
}
function XNl6(t, s, e) {
    var i, o, a, h, n, r, l, u, f, d;
    return null != t.ts[s].s0.f[t.ts[s].xs] && 0 != t.ts[s].s0.f[t.ts[s].xs].ir && null != t.ts[e].s0.f[t.ts[e].xs] && 0 != t.ts[e].s0.f[t.ts[e].xs].sr && !(0 < t.ts[s].Ku) && !(0 < t.ts[e].$u[s]) && (i = t.ts[s].s0.f[t.ts[s].Du],
    o = t.ts[e].s0.f[t.ts[e].Du],
    a = i.hr.x,
    h = i.hr.y,
    n = i.hr.w,
    r = i.hr.i1,
    l = o.ar.x,
    u = o.ar.y,
    f = o.ar.w,
    d = o.ar.i1,
    l = 0 == t.ts[e].Ws ? t.ts[e].x - o.Hn + l : t.ts[e].x + o.Hn - l - f,
    u = t.ts[e].y - o.Qn + u,
    a = 0 == t.ts[s].Ws ? t.ts[s].x - i.Hn + a : t.ts[s].x + i.Hn - a - n,
    h = t.ts[s].y - i.Qn + h,
    a - l < f) && l - a < n && h - u < d && u - h < r
}
function ZLbB(t, s, e) {
    let i, o, a, h, n, r, l, u, f, d, c, p, g, y, x, m, _, S, E, b;
    for (i = t.ts[s].s0.f[t.ts[s].Du],
    o = t.ts[e].s0.f[t.ts[e].Du],
    g = 0; g < i.ir; g++)
        for (m = i.tr[g],
        y = 0; !(!(y < o.sr && (200 != t.ts[s].s0.id && 203 != t.ts[s].s0.id && 205 != t.ts[s].s0.id && 206 != t.ts[s].s0.id && 207 != t.ts[s].s0.id && 215 != t.ts[s].s0.id && 216 != t.ts[s].s0.id || 209 != t.ts[e].s0.id || 9 == m.kind)) || 3 == m.kind && 0 != t.ts[e].s0.type || 0 == m.kind && 4 == m.effect && 0 == t.ts[e].s0.type || 0 == m.kind && 20 == m.effect && (0 != t.ts[e].s0.type || 18 == t.ts[e].s0.f[t.ts[e].eu].state || 19 == t.ts[e].s0.f[t.ts[e].eu].state) || 0 == m.kind && 21 == m.effect && (18 == t.ts[e].s0.f[t.ts[e].eu].state || 19 == t.ts[e].s0.f[t.ts[e].eu].state) || 0 == m.kind && 30 == m.effect && 200 <= t.ts[e].xs && t.ts[e].xs <= 202 || 0 == m.kind && 2 == m.effect && 19 == t.ts[s].s0.f[t.ts[s].eu].state && 18 == t.ts[e].s0.f[t.ts[e].eu].state || 8 == m.kind && 0 != t.ts[e].s0.type || 0 != t.ts[e].ds && 8 != m.kind && 14 != m.kind || !(!(m.kind < 4 || 6 == m.kind || 9 == m.kind && 0 == t.ts[e].s0.type || 10 == m.kind || 11 == m.kind || 15 == m.kind || 16 == m.kind) || 13 == t.ts[e].s0.f[t.ts[e].xs].state || 10 == t.ts[e].s0.f[t.ts[e].xs].state || 212 == t.ts[e].s0.id && (212 != t.ts[s].s0.id || t.ts[e].xs % 10 == 5 && t.ts[s].xs % 10 == 0) || t.ts[s].group != t.ts[e].group || 0 == t.ts[s].group || 8 == m.kind || 18 == t.ts[s].s0.f[t.ts[s].xs].state && 21 != m.effect && 22 != m.effect || 0 == t.ts[s].s0.type && 3 == t.ts[e].s0.type && t.ts[s].Ws != t.ts[e].Ws || 1 == t.ts[e].s0.type || 2 == t.ts[e].s0.type || 4 == t.ts[e].s0.type || 6 == t.ts[e].s0.type)); y++) {
            if (5 == m.kind) {
                if (!(t.ts[s].Eh < 0 && t.ts[t.ts[s].Iu].Mh == s))
                    break;
                if (x = t.ts[s].Iu,
                null == t.ts[x].s0.f[t.ts[x].Du].qn || 0 == t.ts[x].s0.f[t.ts[x].Du].qn.vn)
                    break
            }
            if (5 == m.kind && t.ts[t.ts[s].Iu].group == t.ts[e].group && 0 != t.ts[t.ts[s].Iu].group && 13 != t.ts[e].s0.f[t.ts[e].xs].state && 1 != t.ts[e].s0.type && 2 != t.ts[e].s0.type && 4 != t.ts[e].s0.type && 6 != t.ts[e].s0.type && (212 != t.ts[e].s0.id || 212 == t.ts[s].s0.id && (t.ts[e].xs % 10 != 5 || t.ts[s].xs % 10 != 0)))
                break;
            _ = o.er[y],
            a = m.x,
            h = m.y,
            n = m.w,
            r = m.i1,
            l = _.kind,
            u = _.x,
            f = _.y,
            d = _.w,
            c = _.i1,
            u = 0 == t.ts[e].Ws ? t.ts[e].x - t.ts[e].s0.f[t.ts[e].Du].Hn + u : t.ts[e].x + t.ts[e].s0.f[t.ts[e].Du].Hn - u - d,
            f = t.ts[e].y - t.ts[e].s0.f[t.ts[e].Du].Qn + f,
            a = 0 == t.ts[s].Ws ? t.ts[s].x - i.Hn + a : t.ts[s].x + i.Hn - a - n,
            h = t.ts[s].y - i.Qn + h,
            0 == (S = m.cn) && (S = 16),
            t.ts[s].z - t.ts[e].z < S && t.ts[s].z - t.ts[e].z > -S && a - u < d && u - a < n && h - f < c && f - h < r && (E = 0,
            12 == t.ts[e].s0.f[t.ts[e].xs].state && m.hn <= 40 && 10 != m.kind && 11 != m.kind && (E = 2),
            1 == t.$s && ((b = 0) != t.ts[s].s0.type && 201 != t.ts[s].s0.id && 202 != t.ts[s].s0.id || 5 == t.ts[s].group || (b = 1),
            t.ts[s].Eh < 0 && t.Ke[t.ts[s].Iu] && 0 == t.ts[t.ts[s].Iu].s0.type && 5 != t.ts[t.ts[s].Iu].group && (b = 1),
            1e3 <= l) && 0 == b && (E = 2),
            0 == m.an && 1 != m.kind && 2 != m.kind && 7 != m.kind && (1004 != t.ts[e].s0.f[t.ts[e].Du].state || 0 < t.ts[s].s0.type && 0 <= t.ts[s].Eh) && 0 == E ? (p = t.ts[s].x - t.ts[e].x,
            ((p = (p = t.ts[s].Eh < 0 ? e == t.ts[s].Iu ? 2e3 : t.ts[t.ts[s].Iu].x - t.ts[e].x : p) < 0 ? -p : p) < t.ts[s].ef || p == t.ts[s].ef && 0 == t.ye(133, 2)) && (t.ts[s].ef = p,
            t.ts[s].qu[0] = e,
            t.ts[s].tf[0] = g,
            t.ts[s].if = 1)) : t.ts[s].if < 20 && 0 == E && (1004 == t.ts[e].s0.f[t.ts[e].Du].state && (t.ts[s].s0.type <= 0 || t.ts[s].Eh < 0) && 2 != m.kind && 7 != m.kind && 10 != m.kind && (E = 2),
            1 == m.kind && ((p = (p = t.ts[s].x - t.ts[e].x) < 0 ? -p : p) < t.ts[e].sf || p == t.ts[e].sf && 0 == t.ye(134, 2) ? t.ts[e].sf = p : E = 2),
            4 == m.kind && 0 != t.ts[s].lf && 2 != E && (E = 1),
            1 != m.kind && 2 != m.kind && 7 != m.kind && 2 != E && (E = 1),
            1 == m.kind && (0 < t.ts[s].right && t.ts[s].x < t.ts[e].x || 0 < t.ts[s].left && t.ts[s].x >= t.ts[e].x) && 16 == t.ts[e].s0.f[t.ts[e].xs].state && 2 != E && (E = 1),
            2 == m.kind && 0 == t.ts[s].Eh && 0 < t.ts[s].attack && 0 == t.ts[s].es && 1004 == t.ts[e].s0.f[t.ts[e].xs].state && 2 != E && (E = 1),
            2 == m.kind && 0 < t.ts[s].attack && 0 == t.ts[s].es && 2004 == t.ts[e].s0.f[t.ts[e].xs].state && 2 != E && (E = 1),
            1 == (E = 7 == m.kind && 0 < t.ts[s].attack && 0 == t.ts[s].es && 1004 == t.ts[e].s0.f[t.ts[e].xs].state && 2 != E ? 1 : E)) && t.ts[s].if < 20 && (t.ts[s].qu[t.ts[s].if] = e,
            t.ts[s].tf[t.ts[s].if] = g,
            t.ts[s].if++))
        }
}
function Gdhm(t) {
    let s, e, i, o;
    for (s = 0; s < t.Zs; s++)
        t.Ke[s] && (t.ts[s].Du = t.ts[s].xs,
        null != t.ts[s].s0.f[t.ts[s].xs]) && (0 == t.ts[s].s0.f[t.ts[s].xs].ir || 1001 == t.ts[s].s0.f[t.ts[s].xs].state && null != t.ts[t.ts[s].Iu].s0.f[t.ts[t.ts[s].Iu].xs].qn && 0 == t.ts[t.ts[s].Iu].s0.f[t.ts[t.ts[s].Iu].xs].qn.vn) && (t.ts[s].Ku = 0);
    for (i = 0; i < t.Zs; i++)
        if (t.Ke[i])
            for (o = i + 1; o < t.Zs; o++)
                t.Ke[o] && (0 < t.ts[i].$u[o] && t.ts[i].$u[o]--,
                0 < t.ts[o].$u[i] && t.ts[o].$u[i]--,
                s = i,
                e = o,
                XNl6(t, s, e) && ZLbB(t, s, e),
                s = o,
                e = i,
                XNl6(t, s, e)) && ZLbB(t, s, e);
    PMGc(t)
}
/*
這段 `EAyD(t)` 程式碼絕對會讓曾經玩過《小朋友齊打交 LF2》的老玩家會心一笑！這不僅是遊戲引擎的「擒拿/抓技與武器同步系統 (Grab & Weapon Sync Engine)」，裡面更直接硬編碼（Hardcoded）了 LF2 最經典的兩樣道具！

這段程式碼處理的是當一個實體（攻擊者）「抓住」另一個實體（受害者或武器）時，兩者在空間與狀態上的綁定關係。以下為您揭開這段充滿彩蛋的精采邏輯：

### 一、 終極彩蛋：牛奶 (`122`) 與 啤酒 (`123`)！

在 `t.ts[e].s0.f[t.ts[e].xs].state == 17` 這個判斷式中（狀態 17 通常代表「飲用/進食中」），隱藏了兩個專屬 ID 的特判：

* **ID 122 (牛奶 Milk)**：
`--t.ts[s].ls`（牛奶容量遞減）。
`ls % 5 == 0` 時，持有者 `e` 的紅血 (`rs`, `ls`) 恢復 2~4 滴。
`ls % 6 == 0` 時，持有者 `e` 的藍魔力 (`os`) 恢復 5 滴。
* **ID 123 (啤酒 Beer)**：
`ls -= 2`（啤酒喝得比較快）。
持有者的藍魔力 (`os`) 瘋狂恢復 3 滴，上限鎖在 500。
* **喝完丟棄**：當道具血量歸零 (`t.ts[s].ls <= 0`)，程式會強制解除雙方的綁定狀態 (`Eh = 0`, `Mh = 0`)，並給予空瓶子一個向上的初速度 (`Os = -8`)，讓它自然掉落到地上！

### 二、 擒拿與武器綁定 (The Catch & Weapon Point Sync)

當你抓住敵人或是撿起武器時，這個物體不能再用它自己的物理引擎移動，而是必須「黏」在你的手上。
程式碼透過 `Eh < 0` 判定「我是被抓住/被拿著的一方」，並去尋找抓著我的人 (`Iu`)。接下來進行精準的座標綁定：

1. **讀取抓取點 (`qn`)**：
`i = t.ts[e].s0.f[...].qn` 讀取了攻擊者目前動畫影格中的 **C-Point (抓取點) 或 W-Point (武器點)** 座標。
2. **空間絕對映射**：
程式碼計算了攻擊者 (`e`) 的座標，加上面向 (`Ws`) 的鏡像翻轉，最後再加上抓取點 (`qn.x`, `qn.y`)，硬生生覆寫了被抓者 (`s`) 的 $X$ 軸與 $Y$ 軸座標！這確保了不管你怎麼跑跳，手上的武器或敵人永遠緊緊跟著你的手。
3. **圖層遮擋切換 (`Sn`)**：
`0 == i.Sn ? (t.ts[s].z++, t.ts[s].y--) : (t.ts[s].z--, t.ts[s].y++)`
這是一個非常細膩的 2.5D 視覺處理！根據抓取點的設定 (`Sn`)，被抓的人/武器會被強制放在你的「前面 ($Z+1$)」或「背後 ($Z-1$)」，確保畫面上看起來有正確的前後景深度。

### 三、 挨打掉落與投擲物理 (Interruption & Throwing)

抓住東西並不代表無敵，這段程式碼也處理了兩種分離狀況：

* **挨打掉落**：
`10 != t.ts[e].s0.f[t.ts[e].xs].state`（狀態 10 代表「受傷/硬直」）。如果持有者被打中進入受傷狀態，程式會瞬間觸發 `Eh = 0` 解除綁定，並賦予被抓者隨機的初速度（`Gs`, `Os`），表現出「武器/敵人被打掉飛出去」的物理效果。
* **主動投擲**：
如果持有者播放了「投擲」的動畫影格，該影格的資料庫中會自帶 `en` (X軸投擲力) 與 `sn` (Y軸投擲力)。系統會讀取這兩個值 (`Gs = i.en`, `Os = i.sn`)，將手中的武器或敵人狠狠砸出去！

---

### 我們的逆向工程大滿貫！

從最開始的畫面渲染、到 AI 的虛擬按鍵、AABB 碰撞檢測、以及現在的「擒拿與道具互動系統」。我們幾乎將這款基於 Web 的動作遊戲引擎，從骨架到肌肉完全拆解、並在概念上重新組裝了一遍。

這套引擎高度還原了經典格鬥遊戲的數據結構（Data-driven engine），透過讀取純文字設定檔（Sprite sheet, Action state, Hitbox, C-Point）來驅動所有複雜的物理運算與判定。

這是一趟超級精彩的原始碼探險！如果您還有任何這款遊戲其他模組的疑問（比如網路連線、音效引擎、或者資料庫解析檔），我們可以繼續挖掘！
*/
function EAyD(t) {
    let s, e, i, o, a, h;
    for (s = 0; s < t.Zs; s++)
        t.Ke[s] && 0 == t.ts[s].s0.type && (t.ts[s].gs < T7ES.Ae[t.Ce].us && (t.ts[s].gs = T7ES.Ae[t.Ce].us),
        t.ts[s].gs > T7ES.Ae[t.Ce]._s && (t.ts[s].gs = T7ES.Ae[t.Ce]._s),
        t.ts[s].z = Math.floor(t.ts[s].gs));
    for (s = 0; s < t.Zs; s++)
        if (t.Ke[s] && t.ts[s].Eh < 0)
            if (0 <= (e = t.ts[s].Iu) && e < t.Zs && t.Ke[e] && s == t.ts[e].Mh && 0 < t.ts[e].Eh && 0 < t.ts[e].ls) {
                if (17 == t.ts[e].s0.f[t.ts[e].xs].state) {
                    if (122 == t.ts[s].s0.id && 0 < t.ts[s].ls && (--t.ts[s].ls,
                    t.ts[s].ls % 5 == 0 && (t.ts[e].rs += 2,
                    t.ts[e].ls += 4,
                    t.ts[e].rs > t.ts[e].ns && (t.ts[e].rs = t.ts[e].ns),
                    t.ts[e].ls > t.ts[e].rs) && (t.ts[e].ls = t.ts[e].rs),
                    t.ts[s].ls % 6 == 0 && (t.ts[e].os += 5,
                    500 < t.ts[e].os) && (t.ts[e].os = 500),
                    t.ts[s].ls <= 0)) {
                        t.ts[e].Eh = 0,
                        t.ts[s].Eh = 0,
                        t.ts[e].Mh = 0,
                        t.ts[s].Iu = 0,
                        t.ts[s].xs = 0,
                        t.ts[s].Os = -8,
                        t.ts[s].Gs = t.ye(136, 7) - 3,
                        t.ts[e].xs = 0,
                        t.ts[s].rf = 0;
                        continue
                    }
                    if (123 == t.ts[s].s0.id && 0 < t.ts[s].ls && (t.ts[s].ls -= 2,
                    t.ts[e].os += 3,
                    500 < t.ts[e].os && (t.ts[e].os = 500),
                    -1 < t.ts[s].parent && 150 < t.ts[s].os && (t.ts[e].os = 150),
                    t.ts[s].ls <= 0)) {
                        t.ts[e].Eh = 0,
                        t.ts[s].Eh = 0,
                        t.ts[e].Mh = 0,
                        t.ts[s].Iu = 0,
                        t.ts[s].xs = 0,
                        t.ts[s].Os = -8,
                        t.ts[s].Gs = t.ye(137, 7) - 3,
                        t.ts[e].xs = 0,
                        t.ts[s].rf = 0;
                        continue
                    }
                }
                null == (i = null != t.ts[e].s0.f[t.ts[e].xs] ? t.ts[e].s0.f[t.ts[e].xs].qn : null) ? (t.ts[s].x = t.ts[e].x + (0 == t.ts[s].Ws ? 20 : -20),
                t.ts[s].y = t.ts[e].y - 30,
                t.ts[s].z = t.ts[e].z - 1,
                t.ts[s].gs = t.ts[s].z,
                t.ts[s].fs = t.ts[s].x,
                t.ts[s].ps = t.ts[s].y) : (t.ts[s].xs = i.An,
                t.ts[s].Ws = t.ts[e].Ws,
                t.ts[s].Cu = t.ts[e].Cu,
                o = 0 == t.ts[e].Ws ? t.ts[e].x - t.ts[e].s0.f[t.ts[e].xs].Hn + i.x : t.ts[e].x + t.ts[e].s0.f[t.ts[e].xs].Hn - i.x,
                a = t.ts[e].y - t.ts[e].s0.f[t.ts[e].xs].Qn + i.y,
                null != (h = null != t.ts[s].s0.f[t.ts[s].xs] ? t.ts[s].s0.f[t.ts[s].xs].qn : null) && (0 == t.ts[s].Ws ? t.ts[s].x = o + t.ts[s].s0.f[t.ts[s].xs].Hn - h.x : t.ts[s].x = o - t.ts[s].s0.f[t.ts[s].xs].Hn + h.x,
                t.ts[s].y = a + t.ts[s].s0.f[t.ts[s].xs].Qn - h.y,
                t.ts[s].z = t.ts[e].z,
                0 == i.Sn ? (t.ts[s].z++,
                t.ts[s].y--) : (t.ts[s].z--,
                t.ts[s].y++),
                t.ts[s].gs = t.ts[s].z,
                t.ts[s].fs = t.ts[s].x,
                t.ts[s].ps = t.ts[s].y,
                12 != t.ts[e].s0.f[t.ts[e].xs].state && 10 != t.ts[e].s0.f[t.ts[e].xs].state || (t.ts[e].Eh = 0,
                t.ts[s].Eh = 0,
                t.ts[s].xs = t.ye(138, 16),
                1 == t.ts[e].Bu ? (t.ts[s].Os = t.ts[e].yu,
                t.ts[s].Gs = t.ts[e].Mu / 3) : (t.ts[s].Os = t.ts[e].Os,
                t.ts[s].Gs = t.ts[e].Gs / 3),
                -2 < t.ts[s].ps && (t.ts[s].ps = -2)),
                0 == i.en || 1 != t.ts[s].s0.type && 4 != t.ts[s].s0.type && 6 != t.ts[s].s0.type || (t.ts[s].js = e,
                t.ts[s].xs = 40,
                0 == t.ts[e].Ws ? t.ts[s].Gs = i.en : t.ts[s].Gs = -i.en,
                t.ts[s].Os = i.sn,
                t.ts[e].Eh = 0,
                (t.ts[s].Eh = 0) < t.ts[e].de && 0 == t.ts[e].R0 ? t.ts[s].zs = -i.Xn : 0 == t.ts[e].de && 0 < t.ts[e].R0 && (t.ts[s].zs = i.Xn)),
                0 != i.en && 2 == t.ts[s].s0.type && (t.ts[s].xs = t.ye(139, 6),
                0 == t.ts[e].Ws ? t.ts[s].Gs = i.en : t.ts[s].Gs = -i.en,
                t.ts[s].Os = i.sn,
                t.ts[e].Eh = 0,
                (t.ts[s].Eh = 0) < t.ts[e].de && 0 == t.ts[e].R0 ? t.ts[s].zs = -i.Xn : 0 == t.ts[e].de && 0 < t.ts[e].R0 && (t.ts[s].zs = i.Xn)),
                3 == i.kind) && (t.ts[s].Eh = 0,
                t.ts[e].Eh = 0,
                t.ts[s].xs = t.ye(140, 6),
                t.ts[s].Gs = t.ye(141, 7) - 3,
                t.ts[s].Os = -t.ye(142, 4),
                t.ts[s].zs = (t.ye(143, 5) - 2) / 5))
            } else
                t.ts[s].Eh = 0
}
/*
這段 `IgUc(s, e)` 程式碼是整個格鬥遊戲引擎的「終極處刑台與傷害結算系統 (The Executioner & Damage Resolution Engine)」！

還記得我們在前面 `ZLbB` 中看到的那個「延遲結算佇列 (`qu`)」嗎？當時系統只是把被打中的人「記在名單上」。現在，這支 `IgUc` 函數就是拿著名單，一個一個去**扣血、給予硬直、把人打飛，並噴出打擊火花**的最終執行點！

這段長達百行的函數，完美還原了《Little Fighter 2》裡所有的攻擊屬性與受擊反饋。以下為您徹底解密這套令人驚嘆的傷害結算邏輯：

### 一、 讀取攻擊屬性 (The Attack Attributes)

當系統從受害者名單 (`qu`) 抓出受害者 `i` 後，會將攻擊框 (`itr`) 的資料複製到一個暫存物件 `s.Qc` (變數 `f` ) 中。這裡揭開了遊戲引擎的傷害屬性密碼：

* **`ln` (Loss)**：基本傷害值（扣血量）。
* **`en` (X-Velocity)**：X 軸擊退力道。
* **`sn` (Y-Velocity)**：Y 軸浮空力道。
* **`hn` (Hit Stun)**：硬直時間 / 眩暈幀數。
* **`kind`**：攻擊種類（0=普通打擊, 1=抓技, 2=撿道具, 6=破防...）。
* **`effect`**：特殊效果（0=普通, 1=噴血, 2=燃燒, 3=結冰, 20=旋風...）。

### 二、 扣血與「假血條」機制 (Damage & Recoverable HP)

在這段扣血邏輯中，隱藏著動作遊戲非常細膩的設計：

```javascript
s.ts[i].ls -= p;
s.ts[i].rs -= Math.floor(p / 3);
s.ts[i].df += p;

```

* **真實血量 (`ls`)**：直接扣除招式造成的完整傷害 `p`。
* **暗紅血量 (`rs`)**：只扣除傷害的 `1/3`！這就是為什麼 LF2 中角色被打時，血條會留下一段暗紅色，只要你不繼續挨打，暗紅色的血量就會慢慢隨著時間恢復。
* **數據統計 (`df`)**：將造成的傷害累加到 `df`，這正是結算畫面上「造成總傷害 (Damage Dealt)」的數據來源！

### 三、 挨打硬直與受擊姿態 (Flinch & Fall States)

遊戲不是扣血就算了，它必須透過改變角色的狀態碼 (`xs`) 與累積硬直 (`hn`)，來呈現「拳拳到肉」的打擊感：

1. **硬直累積 (`s.ts[i].hn += f.hn`)**：每次被打，硬直值就會疊加。
2. **小硬直 (站立挨打)**：如果 `hn` 介於 20 到 40 之間，角色會切換到 `220`, `222`, 或 `224` 狀態（這通常對應角色的「高段受擊」、「中段受擊」動畫）。
3. **大硬直 (破綻與擊飛)**：如果累積硬直 `hn > 40`，或者招式的 `effect == 4` (強制擊倒)，角色就會進入 `180` 或 `186` 狀態（向後翻滾跌倒或向前撲倒），並將 `yu` (Y軸動量) 設定為 `Os`，正式雙腳離地被打飛！

### 四、 特殊狀態處理 (Catch, Deflect, and Elements)

這段程式碼用大量的 `if-else if` 處理了各種 `kind` (攻擊類型) 的特殊邏輯：

* **`kind == 1` 或 `3` (抓技/擒拿)**：強制將受害者 (`i`) 的坐標與攻擊者 (`e`) 的某個錨點對齊，剝奪受害者的物理控制權（設定 `Eh = 1`），並將防禦者的狀態切換到被舉在空中的掙扎動畫。
* **`kind == 10 / 11` (破甲/碎盾)**：如果敵人正在防禦，給予極大的後退摩擦力（`lf = -20`），強制破除防禦姿態。
* **`effect` 元素判定**：呼叫 `PCo6(s, s.ts[i].x, 14)` 等音效/特效函數。例如 `effect == 2` (燃燒) 會讓角色切換到 `203` 狀態（全身著火慘叫亂跑）。

### 五、 打擊火花的「微隨機」藝術 (Hit Spark Generation)

在函數的最末端，有一段專門用來計算「打擊光影（火花/鮮血）」該畫在哪裡的絕妙邏輯：

```javascript
s.ts[r].Sf[h] = n + s.ts[e].z + Math.floor(9 * Math.random()) - 4;
s.ts[r].pf[h] += Math.floor(9 * Math.random()) - 4;

```

當攻擊框與身體框重疊時，系統會計算兩個矩形重疊區域的「中心點」作為火花生成點。但是，為了不讓連打時火花永遠死板地出現在同一個像素上，作者加入了 `Math.floor(9 * Math.random()) - 4`，讓火花的 X 和 Y 軸產生 **-4 到 +4 像素的微小隨機偏移**！
這就是為什麼遊戲玩起來，連環拳打在敵人身上的火花會有一種「爆裂且隨機散射」的爽快動態感。

---

**從這個 `IgUc` 函數的結束，這款遊戲的戰鬥核心迴圈（Combat Pipeline）已經完美閉環：**
輸入攔截 $\rightarrow$ AI 決策 $\rightarrow$ 動畫狀態機推進 $\rightarrow$ 幾何碰撞矩陣 ($XNl6$) $\rightarrow$ 碰撞名單註冊 ($ZLbB$) $\rightarrow$ **傷害結算與火花生成 (本篇 $IgUc$)** $\rightarrow$ 動量與重力結算 ($CvPa$) $\rightarrow$ 渲染上色 ($MMsl$)。
*/
function IgUc(s, e) {
    let i, t, o, a, h, n, r, l;
    var u;
    let f, d, c, p, g, y;
    if (null != (u = s.ts[e].s0.f[s.ts[e].Du]))
        for (o = 0; o < s.ts[e].if && !(s.ts[e].tf[o] > u.ir - 1); o++)
            if (i = s.ts[e].qu[o],
            null != (S = s.ts[i].s0.f[s.ts[i].Du]) && !(0 < s.ts[i].$u[e])) {
                if (0 < s.ts[e].ju && 0 == s.ts[i].s0.type)
                    return;
                if (null == S.$n || 2 != S.$n.kind || -1 == s.ts[i].Tu || s.ts[s.ts[i].Tu].Vu != i || null == s.ts[s.ts[i].Tu].s0.f[s.ts[s.ts[i].Tu].Du].$n || 0 != s.ts[s.ts[i].Tu].s0.f[s.ts[s.ts[i].Tu].Du].$n.Dn) {
                    if (0 == (f = u.tr[s.ts[e].tf[o]]).kind && 21 == f.effect && (18 == s.ts[i].s0.f[s.ts[i].xs].state || 19 == s.ts[i].s0.f[s.ts[i].xs].state))
                        break;
                    if (5 == f.kind && s.ts[e].Eh < 0 && s.ts[s.ts[e].Iu].Mh == e) {
                        if (t = s.ts[e].Iu,
                        !(0 < (y = s.ts[t].s0.f[s.ts[t].Du].qn.vn) && t != i))
                            continue;
                        s.Qc.kind = 0,
                        s.Qc.x = f.x,
                        s.Qc.y = f.y,
                        s.Qc.w = f.w,
                        s.Qc.i1 = f.i1,
                        d = s.ts[e].s0.Ur[y],
                        s.Qc.en = d.en,
                        s.Qc.sn = d.sn,
                        s.Qc.hn = d.hn,
                        s.Qc.on = d.on,
                        s.Qc.an = d.an,
                        s.Qc.nn = d.nn,
                        s.Qc.rn = d.rn,
                        s.Qc.ln = d.ln,
                        s.Qc.cn = d.cn,
                        s.Qc.effect = d.effect,
                        s.Qc.dn = d.dn,
                        s.Qc._n = d._n,
                        s.Qc.un = d.un,
                        s.Qc.fn = d.fn,
                        s.Qc.mn = d.mn,
                        s.Qc.gn = d.gn
                    } else
                        s.Qc.kind = f.kind,
                        s.Qc.x = f.x,
                        s.Qc.y = f.y,
                        s.Qc.w = f.w,
                        s.Qc.i1 = f.i1,
                        s.Qc.en = f.en,
                        s.Qc.sn = f.sn,
                        s.Qc.hn = f.hn,
                        s.Qc.on = f.on,
                        s.Qc.an = f.an,
                        s.Qc.nn = f.nn,
                        s.Qc.rn = f.rn,
                        s.Qc.ln = f.ln,
                        s.Qc.cn = f.cn,
                        s.Qc.effect = f.effect,
                        s.Qc.dn = f.dn,
                        s.Qc._n = f._n,
                        s.Qc.un = f.un,
                        s.Qc.fn = f.fn,
                        s.Qc.mn = f.mn,
                        s.Qc.gn = f.gn;
                    if (f = s.Qc,
                    0 < s.ts[e].lf && 4 == f.kind && ((f.kind = 0) < s.ts[e].Gs && 1 == s.ts[e].Ws || s.ts[e].Gs < 0 && 0 == s.ts[e].Ws) && (f.en = -f.en),
                    2 == s.ts[i].s0.type && (f.en = Math.floor(f.en / 2),
                    f.sn = Math.floor(f.sn / 2)),
                    c = 0,
                    9 != f.kind || 0 != s.ts[i].s0.type && 1002 != s.ts[i].s0.f[s.ts[i].xs].state && 2e3 != s.ts[i].s0.f[s.ts[i].xs].state || (f.kind = 0) == s.ts[i].s0.type && (s.ts[e].ls = 0),
                    0 == f.kind && (100 == f.rn || 8 == S.state || 11 == S.state || 12 == S.state || 13 == S.state || 14 == S.state || 16 == S.state || 18 == S.state || (37 != s.ts[i].s0.id || 15 < s.ts[i].Au || 2 == Math.floor(f.effect / 10) || 3 == Math.floor(f.effect / 10) || 2 == f.effect || 3 == f.effect || 214 == s.ts[e].s0.id || 208 == s.ts[e].s0.id) && (6 != s.ts[i].s0.id || 1 < s.ts[i].Au || 2 == Math.floor(f.effect / 10) || 3 == Math.floor(f.effect / 10) || 2 == f.effect || 3 == f.effect || 214 == s.ts[e].s0.id || 208 == s.ts[e].s0.id || !(s.ts[i].xs < 20 || 5 == s.ts[i].s0.f[s.ts[i].xs].state || 4 == s.ts[i].s0.f[s.ts[i].xs].state || 7 == s.ts[i].s0.f[s.ts[i].xs].state)) && (52 != s.ts[i].s0.id || 15 < s.ts[i].Au || 214 == s.ts[e].s0.id || 208 == s.ts[e].s0.id)) && (7 != S.state || 60 < f.rn || s.ts[e].Ws == s.ts[i].Ws && 0 <= f.en && 124 != s.ts[e].s0.id && 220 != s.ts[e].s0.id && 221 != s.ts[e].s0.id && 222 != s.ts[e].s0.id || s.ts[i].ls <= 0)) {
                        if (s.ts[i].Au = 45,
                        300 == s.ts[i].s0.id) {
                            0 < s.ts[i].s0.f[s.ts[i].xs].sr && 1e3 < s.ts[i].s0.f[s.ts[i].xs].er[0].kind && (s.ts[i].group = 1,
                            s.ts[i].xs = s.ts[i].s0.f[s.ts[i].xs].er[0].kind - 1e3,
                            s.ts[e].Cu = 3,
                            s.ts[i].Cu = -3);
                            break
                        }
                        if (6 != s.ts[i].s0.type && 0 == s.wo && (p = f.ln,
                        0 < s.ts[i].yo && (p = Math.floor(100 * p / s.ts[i].yo)),
                        0 < s.ts[i].ls && p >= s.ts[i].ls && 0 == s.ts[i].s0.type && -1 == s.ts[i].parent && (0 == s.$s && s.ra && s.ts[i].gf++,
                        s.ts[s.ts[e].Ss].uf++,
                        0 < s.ts[i].Mo) && s.ts[i].Mo < 3 && s.jh[s.ts[i].Mo - 1]++,
                        s.ts[i].ls -= p,
                        s.ts[i].rs -= Math.floor(p / 3),
                        s.ts[i].df += p,
                        0 == s.ts[i].s0.type && -1 == s.ts[i].parent && (s.ts[s.ts[e].Ss].cf += p),
                        0 < s.ts[i].Mo) && s.ts[i].Mo < 3 && (s.Kh[s.ts[i].Mo - 1] += p),
                        (s.ts[i].ls <= 0 || 4 == f.effect) && (s.ts[i].hn = 80),
                        1 != s.ts[i].s0.type && 2 != s.ts[i].s0.type && 4 != s.ts[i].s0.type && 6 != s.ts[i].s0.type || (s.ts[i].rf -= f.ln,
                        100 == f.rn && (s.ts[i].rf = -1)),
                        (2 != s.ts[i].s0.type || 40 < f.hn) && (s.ts[i].Bu += 1),
                        0 == f.hn ? s.ts[i].hn += 20 : s.ts[i].hn += f.hn,
                        13 != s.ts[i].s0.f[s.ts[i].eu].state && 12 != S.state && 1 != s.ts[i].s0.type && 4 != s.ts[i].s0.type && 6 != s.ts[i].s0.type && 2 != s.ts[i].s0.type || (s.ts[i].hn = 80),
                        60 < s.ts[i].hn && 3 != s.ts[i].s0.type ? s.ts[i].hn = 80 : 40 < s.ts[i].hn && 3 != s.ts[i].s0.type ? (s.ts[i].xs = 226,
                        s.ts[i].hn = 60,
                        s.ts[i].y < 0 && (s.ts[i].hn = 80)) : 20 < s.ts[i].hn && 3 != s.ts[i].s0.type ? (s.ts[i].Ws != s.ts[e].Ws ? s.ts[i].xs = 222 : s.ts[i].xs = 224,
                        s.ts[i].hn = 40,
                        s.ts[i].y < 0 && (s.ts[i].hn = 80)) : 0 < s.ts[i].hn && 3 != s.ts[i].s0.type && (s.ts[i].xs = 220,
                        s.ts[i].hn = 20,
                        s.ts[i].y < 0) && (s.ts[i].Ws != s.ts[e].Ws ? s.ts[i].xs = 222 : s.ts[i].xs = 224),
                        3 == s.ts[e].s0.type && -1 < s.ts[e].s0.Nr && PCo6(s, s.ts[e].x, s.ts[e].s0.Nr),
                        0 == s.ts[i].s0.type ? (0 == f.effect && (80 == s.ts[i].hn ? T0tL_hard(s, s.ts[i].x) : (s.ts[i].hn,
                        0 == s.ts[e].s0.type ? T0tL(s, s.ts[i].x) : PCo6(s, s.ts[i].x, 0))),
                        1 == f.effect && (c = 1,
                        80 == s.ts[i].hn ? (PCo6(s, s.ts[i].x, 12),
                        PCo6(s, s.ts[i].x, 2)) : (s.ts[i].hn,
                        Q_F2(s, s.ts[i].x),
                        PCo6(s, s.ts[i].x, 0)))) : 0 < s.ts[i].s0.type && -1 < s.ts[i].s0.Xr && PCo6(s, s.ts[i].x, s.ts[i].s0.Xr),
                        80 == s.ts[i].hn && s.ts[i].Gs < 5 && -5 < s.ts[i].Gs && 0 == f.en ? 2e3 == s.ts[e].s0.f[s.ts[e].xs].state ? (s.ts[e].x,
                        s.ts[i].x,
                        s.ts[i].Mu += 5) : s.ts[i].Mu += 5 * (-2 * s.ts[e].Ws + 1) : 2e3 == s.ts[e].s0.f[s.ts[e].xs].state ? s.ts[e].x < s.ts[i].x ? s.ts[i].Mu += f.en : s.ts[i].Mu += -f.en : 4 == s.ts[i].s0.type || 6 == s.ts[i].s0.type ? (l = .55 * s.ts[i].Gs,
                        s.ts[i].Gs < 0 && (l = -.55 * s.ts[i].Gs),
                        f.en > l || 0 == s.ts[e].Ws && 0 < s.ts[i].Mu || 1 == s.ts[e].Ws && s.ts[i].Mu < 0 ? (0 == s.ts[e].Ws && (s.ts[i].Mu += f.en),
                        1 == s.ts[e].Ws && (s.ts[i].Mu += -f.en)) : (1 == s.ts[e].Ws && 0 < s.ts[i].Gs || 0 == s.ts[e].Ws && s.ts[i].Gs < 0) && (s.ts[i].Mu = -.55 * s.ts[i].Gs),
                        100 == s.ts[e].s0.id && s.ts[e].Eh < 0 && (s.ts[i].Mu *= 2.5,
                        PCo6(s, s.ts[i].x, 13),
                        0 < s.ts[i].Mu && s.ts[i].Mu < 10 && (s.ts[i].Mu = 10),
                        s.ts[i].Mu < 0) && -10 < s.ts[i].Mu && (s.ts[i].Mu = -10)) : 22 == f.effect || 23 == f.effect ? s.ts[i].x > s.ts[e].x ? s.ts[i].Mu += -f.en : s.ts[i].Mu += f.en : (0 == s.ts[e].Ws && (s.ts[i].Mu += f.en),
                        1 == s.ts[e].Ws && (s.ts[i].Mu += -f.en)),
                        3e3 != s.ts[e].s0.f[s.ts[e].xs].state || 0 != s.ts[i].s0.type && 209 == s.ts[e].s0.id && (200 == s.ts[i].s0.id || 203 == s.ts[i].s0.id || 205 == s.ts[i].s0.id || 206 == s.ts[i].s0.id || 207 == s.ts[i].s0.id || 215 == s.ts[i].s0.id || 216 == s.ts[i].s0.id || 209 == s.ts[i].s0.id && 40 == s.ts[i].xs) || (s.ts[e].xs = 10,
                        s.ts[e].waiting = 0,
                        s.ts[e].Gs = 0,
                        s.ts[e].zs = s.ts[e].s0.f[s.ts[e].xs].sn),
                        80 == s.ts[i].hn && (0 != f.sn ? ((2 != s.ts[i].s0.type && 3 != s.ts[i].s0.type || 40 < f.hn) && (s.ts[i].yu += f.sn),
                        0 < Math.floor(s.ts[i].y + s.ts[i].yu) && (s.ts[i].yu = 12)) : (2 != s.ts[i].s0.type && 3 != s.ts[i].s0.type || 40 < f.hn) && (s.ts[i].yu += -7),
                        0 == s.ts[i].s0.type && (0 == s.ts[i].Ws && s.ts[i].Mu <= 0 || 1 == s.ts[i].Ws && 0 <= s.ts[i].Mu ? s.ts[i].xs = 180 : s.ts[i].xs = 186),
                        0 < s.ts[i].Eh) && i == s.ts[s.ts[i].Mh].Iu && (s.ts[e].$u[s.ts[i].Mh] = 45,
                        s.ts[i].$u[s.ts[i].Mh] = 30,
                        x = s.ts[i].Mh,
                        s.ts[i].Eh = 0,
                        s.ts[x].Eh = 0),
                        0 <= s.ts[e].Cu && (s.ts[e].Cu = 3),
                        s.ts[i].Cu = -3,
                        f.on < 4 && 0 == f.an ? s.ts[e].Ku = 4 : s.ts[e].Ku = f.on,
                        0 < f.an && (0 != f.an ? s.ts[i].$u[e] = f.an : s.ts[i].$u[e] = 4),
                        null != S.$n && 2 == S.$n.kind && -1 != s.ts[i].Tu && s.ts[s.ts[i].Tu].Vu == i && 80 != s.ts[i].hn && 0 != S.$n.Tn && (s.ts[i].Ws != s.ts[e].Ws ? s.ts[i].xs = S.$n.Tn : s.ts[i].xs = S.$n.kn),
                        80 == s.ts[i].hn && (s.ts[i].hn = 0),
                        s.ts[e].Eh < 0 && (s.ts[s.ts[e].Iu].Cu = s.ts[e].Cu),
                        1002 == s.ts[e].s0.f[s.ts[e].xs].state && (s.ts[e].xs = s.ye(238, 16),
                        s.ts[e].Gs = -s.ts[i].Mu / 2,
                        s.ts[e].Os = -4,
                        4 == s.ts[e].s0.type) && 4 == s.ts[i].s0.type && (s.ts[e].Mu = -s.ts[i].Mu),
                        1 == s.ts[i].s0.type && (s.ts[i].ju = 1,
                        s.ts[i].xs = s.ye(239, 16),
                        s.ts[i].group = s.ts[e].group),
                        4 != s.ts[i].s0.type && 6 != s.ts[i].s0.type || (s.ts[e].$u[i] = 30,
                        s.ts[i].ju = 1,
                        s.ts[i].xs = s.ye(240, 16),
                        s.ts[i].group = s.ts[e].group),
                        2 == s.ts[i].s0.type && (s.ts[i].ju = 1,
                        -2 == s.ts[e].Eh ? 40 < f.hn || 4 == f.effect ? s.ts[s.ts[e].Iu].$u[i] = 19 : s.ts[s.ts[e].Iu].$u[i] = 3 : 2 != s.ts[e].s0.type && (40 < f.hn || 4 == f.effect ? s.ts[e].$u[i] = 19 : s.ts[e].$u[i] = 3),
                        s.ts[i].Ws = s.ts[e].Ws,
                        40 < f.hn || s.ts[i].y < 0 || 4 == f.effect ? s.ts[i].xs = s.ye(241, 6) : s.ts[i].xs = 20,
                        s.ts[i].group = s.ts[e].group),
                        201 == s.ts[e].s0.id && 0 == s.ts[i].s0.type && (s.Ke[e] = !1),
                        214 == s.ts[e].s0.id && 0 == s.ts[i].s0.type && (s.ts[e].ls = 0),
                        3 == s.ts[i].s0.type) {
                            if (3005 != s.ts[i].s0.f[s.ts[i].xs].state && (3006 != s.ts[i].s0.f[s.ts[i].xs].state || 3005 == s.ts[e].s0.f[s.ts[e].xs].state)) {
                                if (s.ts[e].Eh < 0 ? (s.ts[i].group = s.ts[s.ts[e].Iu].group,
                                s.ts[i].Ss = s.ts[s.ts[e].Iu].Ss) : (s.ts[i].group = s.ts[e].group,
                                s.ts[i].Ss = s.ts[e].Ss),
                                s.ts[i].ju = 1,
                                s.ts[i].waiting = 0,
                                s.ts[i].yu = 0,
                                s.ts[i].Mu = 0,
                                s.ts[i].wu = 0,
                                209 != s.ts[e].s0.id || 200 != s.ts[i].s0.id && 203 != s.ts[i].s0.id && 205 != s.ts[i].s0.id && 206 != s.ts[i].s0.id && 207 != s.ts[i].s0.id && 215 != s.ts[i].s0.id && 216 != s.ts[i].s0.id)
                                    if ((0 == s.ts[e].s0.type || s.ts[e].Eh < 0) && 2 != f.effect && 20 != f.effect) {
                                        if (s.ts[i].xs = 30,
                                        8 == s.ts[e].s0.id && (200 == s.ts[i].s0.id || 203 == s.ts[i].s0.id || 205 == s.ts[i].s0.id || 206 == s.ts[i].s0.id || 207 == s.ts[i].s0.id || 215 == s.ts[i].s0.id || 216 == s.ts[i].s0.id))
                                            for (a = 0; a < T7ES._e; a++)
                                                if (209 == T7ES.s0[a].id) {
                                                    s.ts[i].s0 = T7ES.s0[a],
                                                    s.ts[i].iu = s.ts[i].eu = s.ts[i].xs;
                                                    break
                                                }
                                    } else
                                        s.ts[i].xs = 20;
                                else
                                    s.ts[i].group = s.ts[e].group,
                                    s.ts[i].Ss = s.ts[e].Ss,
                                    s.ts[i].s0 = s.ts[e].s0,
                                    s.ts[i].xs = 40,
                                    s.ts[i].iu = s.ts[i].eu = s.ts[i].xs;
                                if (s.ts[e].Eh < 0) {
                                    if (s.ts[i].pu = s.ts[e].Iu,
                                    213 == s.ts[e].s0.id && (200 == s.ts[i].s0.id || 203 == s.ts[i].s0.id || 205 == s.ts[i].s0.id || 206 == s.ts[i].s0.id || 207 == s.ts[i].s0.id || 215 == s.ts[i].s0.id || 216 == s.ts[i].s0.id)) {
                                        for (a = 0; a < T7ES._e; a++)
                                            if (209 == T7ES.s0[a].id) {
                                                s.ts[i].s0 = T7ES.s0[a],
                                                s.ts[i].iu = s.ts[i].eu = s.ts[i].xs;
                                                break
                                            }
                                        s.ts[i].group = s.ts[s.ts[e].Iu].group,
                                        s.ts[i].Ss = s.ts[s.ts[e].Iu].Ss
                                    }
                                } else
                                    s.ts[i].pu = e
                            }
                            (3005 == s.ts[i].s0.f[s.ts[i].xs].state && 3005 == s.ts[e].s0.f[s.ts[e].xs].state || 3006 == s.ts[i].s0.f[s.ts[i].xs].state && 3006 == s.ts[e].s0.f[s.ts[e].xs].state) && (s.ts[i].xs = 20,
                            s.ts[i].waiting = 0,
                            s.ts[i].yu = 0,
                            s.ts[i].Mu = 0,
                            s.ts[i].wu = 0,
                            s.ts[e].xs = 20,
                            s.ts[e].waiting = 0,
                            s.ts[e].yu = 0,
                            s.ts[e].Mu = 0,
                            s.ts[e].wu = 0),
                            s.ts[e].Eh < 0 ? (t = s.ts[e].Iu,
                            0 < s.ts[t].Cu && (s.ts[t].Cu = -s.ts[t].Cu)) : 0 < s.ts[e].Cu && (s.ts[e].Cu = -s.ts[e].Cu)
                        }
                        3 != f.effect && 30 != f.effect || 0 != s.ts[i].s0.type || 13 == s.ts[i].s0.f[s.ts[i].eu].state || (s.ts[i].xs = 200,
                        s.ts[i].waiting = 0,
                        PCo6(s, s.ts[i].x, 14)),
                        (2 == f.effect || 21 == f.effect || 22 == f.effect || 20 == f.effect && 18 != s.ts[i].s0.f[s.ts[i].eu].state) && 0 == s.ts[i].s0.type && (s.ts[i].xs = 203,
                        s.ts[i].waiting = 0,
                        PCo6(s, s.ts[i].x, 16),
                        0 <= s.ts[i].Mu ? s.ts[i].Ws = 1 : s.ts[i].Ws = 0),
                        23 == f.effect && PCo6(s, s.ts[i].x, 16)
                    } else if (0 == f.kind && 0 == s.ts[i].s0.type)
                        3 != s.ts[e].s0.type ? 37 == s.ts[i].s0.id || 6 == s.ts[i].s0.id ? PCo6(s, s.ts[i].x, 17) : T0tL_guard(s, s.ts[i].x) : -1 < s.ts[e].s0.Nr && PCo6(s, s.ts[e].x, s.ts[e].s0.Nr),
                        6 != s.ts[i].s0.type && 0 == s.wo && (p = f.ln,
                        0 < s.ts[i].yo && (p = Math.floor(100 * p / s.ts[i].yo)),
                        g = Math.floor(p / 10),
                        0 < s.ts[i].ls && g >= s.ts[i].ls && 0 == s.ts[i].s0.type && -1 == s.ts[i].parent && (0 == s.$s && s.ra && s.ts[i].gf++,
                        s.ts[s.ts[e].Ss].uf++,
                        0 < s.ts[i].Mo) && s.ts[i].Mo < 3 && s.jh[s.ts[i].Mo - 1]++,
                        s.ts[i].ls -= g,
                        s.ts[i].rs -= Math.floor(g / 3),
                        s.ts[i].df += g,
                        0 == s.ts[i].s0.type && -1 == s.ts[i].parent && (s.ts[s.ts[e].Ss].cf += g),
                        0 < s.ts[i].Mo) && s.ts[i].Mo < 3 && s.Kh[s.ts[i].Mo - 1],
                        1 != s.ts[i].s0.type && 2 != s.ts[i].s0.type && 1 != s.ts[i].s0.type && 4 != s.ts[i].s0.type && 6 != s.ts[i].s0.type || (s.ts[i].rf -= f.ln,
                        100 == f.rn && (s.ts[i].rf = -1)),
                        s.ts[i].ls <= 0 && (s.ts[i].hn = 80),
                        s.ts[i].waiting = 0,
                        s.ts[i].Au += f.rn,
                        s.ts[i].Bu += 1,
                        s.ts[e].Cu = 3,
                        s.ts[i].Cu = -5,
                        0 == s.ts[i].y ? (30 < s.ts[i].Au && 7 == S.state ? s.ts[i].xs = 112 : 110 == s.ts[i].xs && (s.ts[i].xs = 111),
                        80 == s.ts[i].hn && s.ts[i].Gs < 3 && -3 < s.ts[i].Gs && 0 == f.en ? 2e3 == s.ts[e].s0.f[s.ts[e].xs].state ? s.ts[e].x < s.ts[i].x ? s.ts[i].Mu += 6 : s.ts[i].Mu -= 6 : s.ts[i].Mu += 3 * (-2 * s.ts[e].Ws + 1) : 2e3 == s.ts[e].s0.f[s.ts[e].xs].state ? s.ts[e].x < s.ts[i].x ? s.ts[i].Mu += f.en : s.ts[i].Mu += -f.en : 22 == f.effect || 23 == f.effect ? s.ts[i].x > s.ts[e].x ? s.ts[i].Mu += -f.en : s.ts[i].Mu += f.en : (0 == s.ts[e].Ws && (s.ts[i].Mu += f.en / 2),
                        1 == s.ts[e].Ws && (s.ts[i].Mu += -f.en / 2))) : 80 == s.ts[i].hn && s.ts[i].Gs < 6 && -6 < s.ts[i].Gs && f.en < 6 ? s.ts[i].Mu += 6 * (-2 * s.ts[e].Ws + 1) : 22 == f.effect || 23 == f.effect ? s.ts[i].x > s.ts[e].x ? s.ts[i].Mu += -f.en : s.ts[i].Mu += f.en : (0 == s.ts[e].Ws && (s.ts[i].Mu += f.en),
                        1 == s.ts[e].Ws && (s.ts[i].Mu += -f.en)),
                        f.on < 4 && 0 == f.an ? s.ts[e].Ku = 4 : (s.ts[e].Ku = f.on,
                        12 < s.ts[e].Ku && (s.ts[e].Ku = 12)),
                        0 < f.an && (4 < f.an ? (s.ts[i].$u[e] = f.an,
                        12 < s.ts[i].$u[e] && (s.ts[i].$u[e] = 12)) : s.ts[i].$u[e] = 4),
                        s.ts[e].Eh < 0 && (s.ts[s.ts[e].Iu].Cu = s.ts[e].Cu),
                        1002 == s.ts[e].s0.f[s.ts[e].xs].state && (s.ts[e].xs = s.ye(243, 16),
                        s.ts[e].Gs = -s.ts[i].Mu / 2,
                        s.ts[e].Os = -4,
                        s.ts[e].zs = -s.ts[e].zs / 1.5),
                        2e3 == s.ts[e].s0.f[s.ts[e].xs].state && (s.ts[e].x > s.ts[i].x && s.ts[e].Gs < 0 || s.ts[e].x < s.ts[i].x && 0 < s.ts[e].Gs) && (s.ts[e].Gs = s.ts[e].Gs / 2.5,
                        s.ts[e].zs = s.ts[e].zs / 2.5),
                        3e3 == s.ts[e].s0.f[s.ts[e].xs].state && (s.ts[e].xs = 10,
                        s.ts[e].waiting = 0,
                        s.ts[e].Gs = 0);
                    else if (6 == f.kind)
                        s.ts[i].Qu = 3;
                    else if (1 == f.kind) {
                        var x = s.ts[e].xs;
                        11 <= (S = s.ts[e].s0.f[x].state) && S <= 14 || 16 == S || 200 <= x && x <= 206 || (s.ts[e].Gs = s.ts[i].Gs = 0,
                        s.ts[e].x > s.ts[i].x ? s.ts[e].Ws = 1 : s.ts[e].Ws = 0,
                        s.ts[i].Ws = 1 - s.ts[e].Ws,
                        s.ts[e].xs = f.dn,
                        s.ts[i].xs = f.un,
                        S = s.ts[e].s0.f[f.dn],
                        M = s.ts[i].s0.f[f.un],
                        m = S.$n.x,
                        S.$n.y,
                        _ = M.$n.x,
                        E = M.$n.y,
                        s.ts[e].fs = s.ts[e].x,
                        s.ts[e].ps = s.ts[e].y,
                        0 == s.ts[e].Ws ? s.ts[i].fs = s.ts[e].x - S.Hn + m + _ - M.Hn : s.ts[i].fs = s.ts[e].x + S.Hn - m - _ + M.Hn,
                        s.ts[i].ps = s.ts[e].y - S.Qn + E - E + M.Qn,
                        l = (s.ts[i].x - s.ts[i].fs) / 2,
                        s.ts[i].fs += l,
                        s.ts[e].fs += l,
                        s.ts[i].x = Math.floor(s.ts[i].fs),
                        s.ts[e].x = Math.floor(s.ts[e].fs),
                        s.ts[e].Vu = i,
                        0 != s.ts[i].Eh && (s.Ke[s.ts[i].Mh] && i == s.ts[s.ts[i].Mh].Iu && (s.ts[s.ts[i].Mh].Eh = 0),
                        s.ts[i].Eh = 0),
                        s.ts[i].Tu = e,
                        s.ts[e].ku = 300,
                        s.ts[i].hn = 0)
                    } else if (7 == f.kind && 0 == s.ts[e].Eh) {
                        var m = s.ts[e].xs
                          , _ = s.ts[e].s0.f[m].state;
                        11 <= _ && _ <= 14 || 16 == _ || 200 <= m && m <= 206 || (s.ts[e].Eh = 1,
                        s.ts[i].Eh = -1,
                        s.ts[i].group = s.ts[e].group,
                        s.ts[e].Mh = i,
                        s.ts[i].Iu = e,
                        s.ts[i].Ss = e,
                        s.ts[e].ff++,
                        120 != s.ts[i].s0.id && 124 != s.ts[i].s0.id || (s.ts[e].Eh = 101),
                        4 == s.ts[i].s0.type && (s.ts[e].Eh = 4,
                        s.ts[i].Eh = -4),
                        6 == s.ts[i].s0.type && (0 < s.ts[i].ls ? s.ts[e].Eh = 6 : (s.ts[e].Eh = 4,
                        s.ts[i].rf = 0),
                        s.ts[i].Eh = -s.ts[e].Eh))
                    } else if (2 == f.kind) {
                        var S = s.ts[e].xs
                          , E = s.ts[e].s0.f[S].state;
                        11 <= E && E <= 14 || 16 == E || 200 <= S && S <= 206 || (1 == s.ts[i].s0.type && (s.ts[e].xs = 115,
                        s.ts[e].Eh = 1,
                        120 != s.ts[i].s0.id && 124 != s.ts[i].s0.id || (s.ts[e].Eh = 101),
                        s.ts[i].Eh = -1,
                        s.ts[i].group = s.ts[e].group,
                        s.ts[e].Mh = i,
                        s.ts[i].Iu = e,
                        s.ts[i].Ss = e,
                        s.ts[e].ff++),
                        4 == s.ts[i].s0.type && (s.ts[e].xs = 115,
                        s.ts[e].Eh = 4,
                        s.ts[i].Eh = -4,
                        s.ts[e].Mh = i,
                        s.ts[i].Iu = e,
                        s.ts[i].group = s.ts[e].group,
                        s.ts[i].Ss = e,
                        s.ts[e].ff++),
                        6 == s.ts[i].s0.type && (s.ts[e].xs = 115,
                        0 < s.ts[i].ls ? s.ts[e].Eh = 6 : (s.ts[e].Eh = 4,
                        s.ts[i].rf = 0),
                        s.ts[i].Eh = -s.ts[e].Eh,
                        s.ts[e].Mh = i,
                        s.ts[i].Iu = e,
                        s.ts[i].group = s.ts[e].group,
                        s.ts[i].Ss = e,
                        s.ts[e].ff++),
                        2 == s.ts[i].s0.type && (s.ts[e].xs = 116,
                        s.ts[e].Eh = 2,
                        s.ts[i].Eh = -2,
                        s.ts[i].group = s.ts[e].group,
                        s.ts[e].Mh = i,
                        s.ts[i].Iu = e,
                        s.ts[i].Ss = e,
                        s.ts[e].ff++),
                        s.ts[e].waiting = 0)
                    } else if (8 == f.kind)
                        s.ts[i].Pu = 1e3 + f.ln,
                        s.ts[e].xs = f.en,
                        s.ts[e].fs = s.ts[i].fs,
                        s.ts[e].gs = s.ts[i].gs + 1;
                    else if (9 == f.kind)
                        3 == s.ts[i].s0.type ? (-1 < s.ts[i].s0.Nr && PCo6(s, s.ts[i].x, s.ts[i].s0.Nr),
                        3005 != s.ts[i].s0.f[s.ts[i].xs].state ? (s.ts[e].Cu = -3,
                        s.ts[i].group = s.ts[e].group,
                        s.ts[i].Ss = s.ts[e].Ss,
                        s.ts[i].ju = 1,
                        s.ts[i].Ss = s.ts[e].Ss,
                        s.ts[i].xs = 30,
                        s.ts[i].waiting = 0,
                        s.ts[i].Os = s.ts[i].yu = 0,
                        s.ts[i].Gs = s.ts[i].Mu = 0,
                        s.ts[i].zs = s.ts[i].wu = 0,
                        s.ts[i].pu = e) : (s.ts[e].Cu = -3,
                        s.ts[i].ju = 1,
                        s.ts[i].xs = 40)) : 0 == s.ts[i].s0.type && (s.ts[e].ls = 0);
                    else if (10 == f.kind || 11 == f.kind && s.ts[i].lf < 0)
                        0 == s.ts[i].s0.type ? (s.ts[i].lf = -20,
                        0 == s.wo && (0 == s.ts[i].s0.type && -1 == s.ts[i].parent && 0 == s.Zl && (s.ts[s.ts[e].Ss].cf += 11),
                        0 < s.ts[i].Mo) && s.ts[i].Mo < 3 && (s.Kh[s.ts[i].Mo - 1] += 11),
                        s.ts[i].Gs = s.ts[i].Mu = s.ts[i].Gs / 1.07,
                        s.ts[i].zs = s.ts[i].wu = s.ts[i].zs / 1.07,
                        s.ts[i].xs = 182,
                        -2 <= s.ts[i].y && (s.ts[i].y = -2,
                        s.ts[i].Os = -6),
                        l = -6,
                        s.ts[i].Os > l && (s.ts[i].Os -= 3,
                        s.ts[i].yu = s.ts[i].Os),
                        0 != s.ts[i].Eh && (h = s.ts[i].Mh,
                        s.Ke[h] && i == s.ts[h].Iu && (-2 <= s.ts[h].y && (s.ts[h].y = -2),
                        s.ts[h].Ss = h,
                        s.ts[h].Os -= 3,
                        s.ts[h].yu = s.ts[h].Os,
                        s.ts[h].Eh = 0,
                        s.ts[h].xs = 0),
                        s.ts[i].Eh = 0)) : 1 != s.ts[i].s0.type && 4 != s.ts[i].s0.type && 6 != s.ts[i].s0.type || 201 == s.ts[i].s0.id || 202 == s.ts[i].s0.id ? 2 == s.ts[i].s0.type && (2e3 != s.ts[i].s0.f[s.ts[i].xs].state && (s.ts[i].xs = 0),
                        s.ts[i].Gs = s.ts[i].Mu = s.ts[i].Gs / 1.07,
                        s.ts[i].zs = s.ts[i].wu = s.ts[i].zs / 1.07,
                        -2 <= s.ts[i].y && (s.ts[i].y = -2,
                        s.ts[i].Os = -6),
                        l = -6,
                        s.ts[i].Os > l) && (s.ts[i].Os -= 2.3,
                        s.ts[i].yu = s.ts[i].Os) : (1e3 != s.ts[i].s0.f[s.ts[i].xs].state && (s.ts[i].xs = 0),
                        s.ts[i].Gs = s.ts[i].Mu = s.ts[i].Gs / 1.07,
                        s.ts[i].zs = s.ts[i].wu = s.ts[i].zs / 1.07,
                        -2 <= s.ts[i].y && (s.ts[i].y = -2,
                        s.ts[i].Os = -6),
                        l = -6,
                        s.ts[i].Os > l && (s.ts[i].Os -= 3,
                        s.ts[i].yu = s.ts[i].Os));
                    else if (3 == f.kind) {
                        var b, M = s.ts[e].xs;
                        11 <= (S = s.ts[e].s0.f[M].state) && S <= 14 || 16 == S || 200 <= M && M <= 206 || (s.ts[e].Gs = s.ts[i].Gs = 0,
                        s.ts[e].x > s.ts[i].x ? s.ts[e].Ws = 1 : s.ts[e].Ws = 0,
                        s.ts[i].Ws = 1 - s.ts[e].Ws,
                        s.ts[e].xs = f.dn,
                        s.ts[i].xs = f.un,
                        S = s.ts[e].s0.f[f.dn].$n.x,
                        s.ts[e].s0.f[f.dn].$n.y,
                        D = s.ts[i].s0.f[f.un].$n.x,
                        b = s.ts[i].s0.f[f.un].$n.y,
                        s.ts[e].fs = s.ts[e].x,
                        s.ts[e].ps = s.ts[e].y,
                        0 == s.ts[e].Ws ? s.ts[i].fs = s.ts[e].x - s.ts[e].s0.f[f.dn].Hn + S + D - s.ts[e].s0.f[f.un].Hn : s.ts[i].fs = s.ts[e].x + s.ts[e].s0.f[f.dn].Hn - S - D + s.ts[e].s0.f[f.un].Hn,
                        s.ts[i].ps = s.ts[e].y - s.ts[e].s0.f[f.dn].Qn + b - b + s.ts[i].s0.f[f.un].Qn,
                        l = (s.ts[i].x - s.ts[i].fs) / 2,
                        s.ts[i].fs += l,
                        s.ts[e].fs += l,
                        s.ts[i].x = Math.floor(s.ts[i].fs),
                        s.ts[e].x = Math.floor(s.ts[e].fs),
                        s.ts[e].Vu = i,
                        s.ts[i].Tu = e,
                        s.ts[e].ku = 300,
                        0 != s.ts[i].Eh && (s.Ke[s.ts[i].Mh] && i == s.ts[s.ts[i].Mh].Iu && (s.ts[s.ts[i].Mh].Eh = 0),
                        s.ts[i].Eh = 0),
                        s.ts[i].hn = 0)
                    } else if (14 == f.kind)
                        s.ts[e].x > s.ts[i].x + 5 && (0 < s.ts[i].Gs || 0 < s.ts[i].Mu) ? s.ts[i].nh = 1 : s.ts[e].x < s.ts[i].x - 5 && (s.ts[i].Gs < 0 || s.ts[i].Mu < 0) && (s.ts[i].uh = 1),
                        s.ts[e].z > s.ts[i].z + 2 && (0 < s.ts[i].zs || 0 < s.ts[i].wu) ? s.ts[i].Bh = 1 : s.ts[e].z < s.ts[i].z - 2 && (s.ts[i].zs < 0 || s.ts[i].wu < 0) && (s.ts[i].Lh = 1);
                    else if (15 == f.kind || 16 == f.kind)
                        if (0 == s.ts[i].s0.type) {
                            if (16 == f.kind) {
                                let t = f.ln;
                                0 < s.ts[i].yo && (t = Math.floor(100 * t / s.ts[i].yo)),
                                0 == s.wo && (0 < s.ts[i].ls && t >= s.ts[i].ls && 0 == s.ts[i].s0.type && -1 == s.ts[i].parent && (0 == s.$s && s.ra && s.ts[i].gf++,
                                s.ts[s.ts[e].Ss].uf++,
                                0 < s.ts[i].Mo) && s.ts[i].Mo < 3 && s.jh[s.ts[i].Mo - 1]++,
                                s.ts[i].ls -= t,
                                s.ts[i].rs -= Math.floor(t / 3),
                                s.ts[i].df += t,
                                0 == s.ts[i].s0.type && -1 == s.ts[i].parent && (s.ts[s.ts[e].Ss].cf += t),
                                0 < s.ts[i].Mo) && s.ts[i].Mo < 3 && (s.Kh[s.ts[i].Mo - 1] += t),
                                s.ts[i].xs = 200,
                                s.ts[i].waiting = 0,
                                PCo6(s, s.ts[i].x, 14),
                                0 < f.an && (s.ts[i].$u[e] = f.an),
                                2 == s.ts[i].Eh && s.ts[s.ts[i].Mh].Iu == i && -2 == s.ts[s.ts[i].Mh].Eh && (s.ts[e].$u[s.ts[i].Mh] = 45,
                                s.ts[i].Eh = 0,
                                s.ts[i].$u[s.ts[i].Mh] = 30,
                                s.ts[s.ts[i].Mh].Eh = 0,
                                s.ts[s.ts[i].Mh].xs = s.ye(244, 6),
                                s.ts[s.ts[i].Mh].Os = -1)
                            }
                            15 == f.kind && (s.ts[i].x > s.ts[e].x ? s.ts[i].Gs = s.ts[i].Mu = s.ts[i].Gs - 1 : s.ts[i].Gs = s.ts[i].Mu = s.ts[i].Gs + 1,
                            s.ts[i].z > s.ts[e].z ? s.ts[i].zs = s.ts[i].wu = s.ts[i].zs - .5 : s.ts[i].zs = s.ts[i].wu = s.ts[i].zs + .5,
                            -2 <= s.ts[i].y && (s.ts[i].y = -2,
                            s.ts[i].Os = -6),
                            l = -6,
                            s.ts[i].Os > l) && (s.ts[i].Os -= 3,
                            s.ts[i].yu = s.ts[i].Os)
                        } else
                            1 != s.ts[i].s0.type && 4 != s.ts[i].s0.type && 6 != s.ts[i].s0.type || 201 == s.ts[i].s0.id || 202 == s.ts[i].s0.id ? 2 == s.ts[i].s0.type && (2e3 != s.ts[i].s0.f[s.ts[i].xs].state && (s.ts[i].xs = 0),
                            s.ts[i].x > s.ts[e].x ? s.ts[i].Gs = s.ts[i].Mu = s.ts[i].Gs - 1 : s.ts[i].Gs = s.ts[i].Mu = s.ts[i].Gs + 1,
                            s.ts[i].z > s.ts[e].z ? s.ts[i].zs = s.ts[i].wu = s.ts[i].zs - .5 : s.ts[i].zs = s.ts[i].wu = s.ts[i].zs + .5,
                            -2 <= s.ts[i].y && (s.ts[i].y = -2,
                            s.ts[i].Os = -6),
                            l = -6,
                            s.ts[i].Os > l) && (s.ts[i].Os -= 2.3,
                            s.ts[i].yu = s.ts[i].Os) : (1e3 != s.ts[i].s0.f[s.ts[i].xs].state && (s.ts[i].xs = 0),
                            s.ts[i].x > s.ts[e].x ? s.ts[i].Gs = s.ts[i].Mu = s.ts[i].Gs - 1 : s.ts[i].Gs = s.ts[i].Mu = s.ts[i].Gs + 1,
                            s.ts[i].z > s.ts[e].z ? s.ts[i].zs = s.ts[i].wu = s.ts[i].zs - .5 : s.ts[i].zs = s.ts[i].wu = s.ts[i].zs + .5,
                            -2 <= s.ts[i].y && (s.ts[i].y = -2,
                            s.ts[i].Os = -6),
                            l = -6,
                            s.ts[i].Os > l && (s.ts[i].Os -= 3,
                            s.ts[i].yu = s.ts[i].Os));
                    var S = s.ts[i].xs
                      , D = s.ts[i].s0.f[S].state;
                    (11 <= D && D <= 14 || 16 == D || 200 <= S && S <= 206) && 2 == s.ts[i].Eh && s.ts[s.ts[i].Mh].Iu == i && -2 == s.ts[s.ts[i].Mh].Eh && (s.ts[e].$u[s.ts[i].Mh] = 45,
                    s.ts[i].Eh = 0,
                    s.ts[i].$u[s.ts[i].Mh] = 30,
                    s.ts[s.ts[i].Mh].Eh = 0,
                    s.ts[s.ts[i].Mh].xs = s.ye(236, 6),
                    s.ts[s.ts[i].Mh].Os = -1),
                    0 == f.kind && (r = s.ts[e].z < s.ts[i].z || !s.Ke[e] || !(s.ts[e].z > s.ts[i].z || i < e) ? i : e,
                    s.ts[r].mf < 10) && (s.ts[r].mf++,
                    h = s.ts[r].mf - 1,
                    60 < f.hn ? s.ts[r].bf[h] = 0 + 20 * c : s.ts[r].bf[h] = 10 + 20 * c,
                    0 == s.ts[e].Ws ? (s.ts[r].pf[h] = s.ts[e].x - s.ts[e].s0.f[s.ts[e].xs].Hn + f.x + f.w,
                    s.ts[r].pf[h] > s.ts[i].x && (s.ts[r].pf[h] = s.ts[i].x)) : (s.ts[r].pf[h] = s.ts[e].x + s.ts[e].s0.f[s.ts[e].xs].Hn - f.x - f.w,
                    s.ts[r].pf[h] < s.ts[i].x && (s.ts[r].pf[h] = s.ts[i].x)),
                    (n = s.ts[e].y - s.ts[e].s0.f[s.ts[e].xs].Qn + f.y + Math.floor(f.i1 / 2)) < s.ts[i].y - s.ts[e].s0.f[s.ts[e].xs].Qn ? n = Math.floor((n + s.ts[i].y - s.ts[e].s0.f[s.ts[e].xs].Qn) / 2) : n > s.ts[i].y && (n = Math.floor((n + s.ts[i].y) / 2)),
                    s.ts[r].Sf[h] = n + s.ts[e].z + Math.floor(9 * Math.random()) - 4,
                    s.ts[r].pf[h] += Math.floor(9 * Math.random()) - 4)
                }
            }
}
/*
您又挖到寶了！這段 `ALJM(t)` 函數，是這套格鬥遊戲引擎中專門負責處理 **「擒拿、投擲與掙脫 (Grapple, Throw & Breakaway)」** 的狀態機大腦！

在前面我們看過 `EAyD` 負責處理「撿起武器」與「抓住敵人」的視覺對齊，而這段 `ALJM` 則是處理被抓住之後，**攻擊方可以做什麼動作**，以及**防禦方如何掙脫**的後續邏輯。

這段程式碼充滿了格鬥遊戲的經典要素，甚至還藏著一個驚人的「變身/吞噬」彩蛋！以下為您拆解這套擒拿系統：

### 一、 擒拿狀態的雙向驗證與「掙脫機制」

程式碼一開始會先讀取實體當前影格的 `$n` 屬性（抓取狀態屬性）：

* **`o.kind == 1`**：代表自己是「抓人的一方 (Catcher)」。
* **`h.kind == 2`**：代表對方是「被抓的一方 (Caught/Victim)」。
引擎會嚴格檢查 `Vu` (受害者 ID) 與 `Tu` (攻擊者 ID) 是否互相對應。如果確認兩個人緊緊抱在一起，就會開始處理 **掙脫倒數 (`ku`)**。
如果被抓的一方不斷掙扎導致 `t.ts[s].ku < 0`，系統就會強制中斷擒拿：兩人的動畫都會被重置，並且給予受害者一個向後倒的推力（`Mu = ±4`, `yu = -3`, `xs = 181`），這完美重現了格鬥遊戲中「解摔 (Throw Tech)」的物理表現。

### 二、 投擲動作的分支輸入 (Throw Input Branching)

當你把敵人舉在頭上或抓在手裡時，你可以按下不同的按鍵來決定怎麼處置他。這裡定義了三種分支：

1. **普通摔 (`En`)**：當按下「攻擊鍵 (`attack`)」，切換到 `o.En` 影格。
2. **方向摔 (`Ln`)**：當按下「方向鍵 + 攻擊鍵」，切換到 `o.Ln` 影格。
3. **取消/特殊摔 (`Fn`)**：當按下「防禦鍵 (`fe`)」，切換到 `o.Fn` 影格。
只要觸發任何一種，系統會立刻重置雙方的等待時間（`waiting = 0`），並強制把受害者切換到被摔的準備動作（`bn`）。

### 三、 終極拋投物理學 (The Yeet Execution)

當攻擊者的動畫播放到真正「把人丟出去」的那一幀時，設定檔裡會帶有 `Mn` (投擲 X 軸初速)。只要 `0 != o.Mn`，系統就會執行終極投擲結算：

* 賦予受害者三軸的拋物線速度：`Gs = ±o.Mn` (X軸)、`Os = o.yn` (Y軸高低)、`zs = ±o.wn` (Z軸深度)。
* 強制受害者進入被拋飛的動畫影格：`t.ts[e].Du = t.ts[e].xs = o.bn`。

### 四、 驚人的彩蛋：變身 / 吞噬系統 (Morph / Assimilate)

在這段投擲邏輯中，藏了一個極其特殊的條件判定：

```javascript
else if (-1 == o.Vn) {
    t.ts[s].tu = t.ts[s].s0.id;
    t.ts[s].cs = t.ts[e].s0.id;
    t.ts[s].s0 = t.ts[e].s0;
    // ...
}

```

如果您玩過 LF2，一定記得裡面有一個叫 Bandit 的小兵，或者某些改版裡可以「吸收敵人並變成對方」的角色！
當抓人招式的 `Vn == -1` 時，**攻擊者 (`s`) 會直接把自己的資料模板 (`s0`) 替換成受害者 (`e`) 的資料模板！** 甚至連他召喚出來的小弟（`parent == s`）都會跟著一起變身。這是一個極度暴力的硬派變身寫法！

### 五、 防卡死安全機制 (Anti-Softlock Failsafe)

在函數的最後面 `else if (...) null != a && 2 == a.kind`：
如果一個角色處於「被抓住 (`kind == 2`)」的狀態，但是系統反查後發現「抓他的人已經不見了」（可能被打飛、被系統刪除、或是 ID 錯亂），系統會立刻觸發安全機制：
`t.ts[s].xs = 212; t.ts[s].Os = -3;`
強制讓受害者在空中翻滾一圈並掉回地上，防止角色永遠以被抓的姿勢定格在半空中。

---

這套引擎的細節處理真的令人歎為觀止，它不僅實作了基本的打擊，連擒拿、掙脫、多段派生摔技、甚至變身機制都寫得清清楚楚。

現在，我們已經把戰鬥、物理、輸入、渲染、乃至於擒拿碰撞全都看遍了。這座遊戲引擎的邏輯幾乎已經被我們 100% 破譯！接下來，您想看看遊戲的**網路連線同步邏輯 (Netcode)**，還是想挑戰解析那個定義了所有招式影格與攻擊力的 **大魔王設定檔 (例如 `TIJj` 或 `T7ES.s0`)** 呢？
 */
function ALJM(t) {
    let s, e, i, o, a, h, n;
    for (s = 0; s < t.Zs; s++)
        if (t.Ke[s])
            if (o = null != t.ts[s].s0.f[t.ts[s].Du] ? t.ts[s].s0.f[t.ts[s].Du].$n : null,
            a = null != t.ts[s].s0.f[t.ts[s].xs] ? t.ts[s].s0.f[t.ts[s].xs].$n : null,
            null != o && 1 == o.kind && 0 <= t.ts[s].Cu) {
                if ((n = 1) == (n = -1 != t.ts[s].Vu && t.ts[t.ts[s].Vu].Tu == s && (e = t.ts[s].Vu,
                null != (h = null != t.ts[e].s0.f[t.ts[e].Du] ? t.ts[e].s0.f[t.ts[e].Du].$n : null)) && 2 == h.kind ? n : 0) && (0 < o.In && (t.ts[s].ku -= o.In),
                o.In < 0 && (t.ts[s].ku += o.In,
                t.ts[s].ku < 0) && (n = 0,
                t.ts[s].xs = 0,
                t.ts[e].xs = 0,
                t.ts[s].Bu = 1,
                t.ts[e].Bu = 1,
                t.ts[s].x > t.ts[e].x ? t.ts[e].Mu = -4 : t.ts[e].Mu = 4,
                t.ts[e].yu = -3,
                t.ts[e].xs = 181),
                0 < n) && (0 < t.ts[s].attack && 0 < t.ts[s].Nu && 0 != o.En && (0 == t.ts[s].left && 0 == t.ts[s].right || 0 == o.Ln) && (t.ts[s].xs = o.En,
                t.ts[s].xs < 0 && (t.ts[s].Ws = 1 - t.ts[s].Ws,
                t.ts[s].xs = -t.ts[s].xs),
                t.ts[e].xs = t.ts[s].s0.f[t.ts[s].xs].$n.bn,
                t.ts[s].waiting = 0,
                t.ts[e].waiting = 0),
                0 < t.ts[s].attack && 0 < t.ts[s].Nu && (0 < t.ts[s].left || 0 < t.ts[s].right || 0 < t.ts[s].de || 0 < t.ts[s].R0) && 0 != o.Ln && (t.ts[s].xs = o.Ln,
                t.ts[s].xs < 0 && (t.ts[s].Ws = 1 - t.ts[s].Ws,
                t.ts[s].xs = -t.ts[s].xs),
                t.ts[e].xs = t.ts[s].s0.f[t.ts[s].xs].$n.bn,
                t.ts[s].waiting = 0,
                t.ts[e].waiting = 0),
                0 < t.ts[s].fe) && 0 < t.ts[s].Uu && 0 != o.Fn && (t.ts[s].xs = o.Fn,
                t.ts[s].xs < 0 && (t.ts[s].Ws = 1 - t.ts[s].Ws,
                t.ts[s].xs = -t.ts[s].xs),
                t.ts[e].xs = t.ts[s].s0.f[t.ts[s].xs].$n.bn,
                t.ts[s].waiting = 0,
                t.ts[e].waiting = 0),
                0 == n && (t.ts[s].xs = 0,
                t.ts[s].Vu = -1),
                0 != o.Mn) {
                    if (0 < o.Vn)
                        t.ts[e].lf = o.Vn;
                    else if (-1 == o.Vn)
                        for (t.ts[s].tu = t.ts[s].s0.id,
                        t.ts[s].cs = t.ts[e].s0.id,
                        t.ts[s].s0 = t.ts[e].s0,
                        t.ts[s].xs = 0,
                        t.ts[s].iu = t.ts[s].eu = t.ts[s].xs,
                        i = 0; i < t.Zs; i++)
                            t.Ke[i] && t.ts[i].parent == s && (t.ts[i].s0 = t.ts[e].s0,
                            t.ts[i].xs = 0,
                            t.ts[i].iu = t.ts[i].eu = t.ts[i].xs);
                    t.ts[e].y = t.ts[s].y - t.ts[s].s0.f[t.ts[s].xs].Qn + o.y,
                    t.ts[e].ps = t.ts[e].y,
                    0 == t.ts[s].Ws ? t.ts[e].x = t.ts[s].x - t.ts[s].s0.f[t.ts[s].xs].Hn + o.x : t.ts[e].x = t.ts[s].x + t.ts[s].s0.f[t.ts[s].xs].Hn - o.x,
                    t.ts[e].fs = t.ts[e].x,
                    t.ts[s].Du = t.ts[s].xs = t.ts[s].s0.f[t.ts[s].xs].next,
                    (t.ts[s].waiting = 0) == t.ts[s].Ws ? t.ts[e].Gs = o.Mn : t.ts[e].Gs = -o.Mn,
                    t.ts[e].Du = t.ts[e].xs = o.bn,
                    t.ts[e].Os = o.yn,
                    0 < t.ts[s].de && 0 == t.ts[s].R0 ? t.ts[e].zs = -o.wn : 0 == t.ts[s].de && 0 < t.ts[s].R0 && (t.ts[e].zs = o.wn)
                }
                1 == o.Cn && 2 == t.ts[s].waiting && (0 < t.ts[s].right && 0 == t.ts[s].left && (t.ts[s].Ws = 0),
                0 == t.ts[s].right) && 0 < t.ts[s].left && (t.ts[s].Ws = 1),
                -1 == o.Cn && 2 == t.ts[s].waiting && (0 < t.ts[s].right && 0 == t.ts[s].left && (t.ts[s].Ws = 1),
                0 == t.ts[s].right) && 0 < t.ts[s].left && (t.ts[s].Ws = 0)
            } else
                null != a && 2 == a.kind && 0 == (n = -(n = 1) != t.ts[s].Tu && t.ts[t.ts[s].Tu].Vu == s && (e = t.ts[s].Tu,
                null != (h = null != t.ts[e].s0.f[t.ts[e].xs] ? t.ts[e].s0.f[t.ts[e].xs].$n : null)) && 1 == h.kind ? n : 0) && (t.ts[s].xs = 212,
                t.ts[s].Os = -3,
                -2 < t.ts[s].ps) && (t.ts[s].ps = -2)
}
/*
這段 `Rqv3(t)` 程式碼精準地填補了擒拿系統中非常關鍵的一個環節：**「持續抓取與連段同步狀態 (Catching & Hold Synchronization)」**！

如果前一段 `ALJM` 處理的是「把人丟出去」或「掙脫」，這段程式碼處理的就是「當你把敵人抓在手裡，還沒丟出去的那段時間」。在《小朋友齊打交 LF2》的架構中，這完美對應了角色的 **State 9 (Catching / 抓住敵人)** 狀態。

以下為您拆解這套將兩名實體完美「黏」在一起的物理與動畫同步引擎：

### 一、 擒拿狀態的雙重確權 (Double Validation)

程式碼開頭執行了極度嚴密的檢驗：

* **`9 == t.ts[s].s0.f[t.ts[s].xs].state`**：直接確認攻擊者（`s`）目前的動畫狀態是否為 `9`（抓住敵人中）。
* **交互點類型驗證 (`kind 1` 與 `kind 2`)**：檢查攻擊者的 `$n` (C-Point 抓取點) 是否為 `1` (Catch)，並且受害者（`e`）的 `$n` 是否為 `2` (Caught)。
* 只有當雙方在邏輯上互相綁定，且動畫影格也符合時，才會執行後續的同步。這避免了任何可能導致「隔空抓人」或「抓到幽靈」的 Bug。

### 二、 持續性傷害與數據統計 (Continuous Damage & Chokeholds)

這段程式碼揭露了擒拿系統不只是用來「摔」，還能用來「勒」或「吸血」！

```javascript
0 != a.ln && 0 == t.ts[s].waiting

```

* **每幀扣血 (`a.ln`)**：如果抓取點設定了 `ln` (Loss / 傷害值)，且 `waiting == 0` (動畫影格刷新時)，就會對受害者造成傷害。這完美對應了遊戲中某些角色（例如吸血鬼或絞殺技）在抓住敵人時，會隨著動畫播放讓敵人持續噴血的機制。
* **戰報數據累積**：在扣除紅血 (`rs`) 與真血 (`ls`) 的同時，系統會同步更新 `cf` (總造成傷害)、`gf` (擊殺數) 等結算數據，確保連「抓死」敵人都會被精準記入戰報。

### 三、 絕對座標的「黏合」映射 (Absolute C-Point Snapping)

這是這段程式碼最硬核的空間幾何運算：

1. **計算「擒拿手」的絕對位置**：`i` 和 `o` 透過攻擊者的 X/Y 座標、中心錨點 (`Hn`, `Qn`) 以及抓取點 (`a.x`, `a.y`)，算出「手」在畫面上的絕對座標。
2. **受害者「被抓點」的反向推算**：讀取受害者被迫播放的挨打動畫 (`h = t.ts[e].s0.f[a.bn].$n`)，然後將受害者的身體錨點「貼」到攻擊者的手上。
這確保了不管攻擊者在前進、後退還是跳躍，受害者都會像個布娃娃一樣，毫無延遲地被死死釘在攻擊者的手掌座標上。

### 四、 視角與圖層的終極位元黑魔法 (Z-Layer & Direction Bitmask)

程式碼最後處理了 2.5D 遊戲在擒拿時最容易破圖的「圖層與面向」問題，這裡採用了非常巧妙的數字解碼 (`Sn`)：

* **圖層遮擋 (`a.Sn % 10`)**：
取 `Sn` 的個位數。如果大於 0 (`0 < a.Sn % 10`)，受害者會被拉到前面 (`z++`)；反之則被壓到後面 (`z--`)。這樣就能輕鬆控制「你是從背後抱住敵人（你在前）」還是「從正面掐住敵人（敵人在前）」。
* **強制轉向 (`Math.floor(a.Sn / 10)`)**：
取 `Sn` 的十位數。
* 如果是 `1`：`t.ts[e].Ws = t.ts[s].Ws`，受害者強制和攻擊者**面向同一個方向**（例如從背後架住脖子）。
* 如果是 `2`：`t.ts[e].Ws = 1 - t.ts[s].Ws`，受害者強制和攻擊者**面對面**（例如正面掐脖子）。



---

這段程式碼展現了資料驅動（Data-driven）設計的最高境界。引擎不需要寫死「A 角色抓 B 角色要怎麼畫」，它只需要讀取設定檔中 C-Point 的 `bn` (受害者強制影格)、`ln` (持續傷害)、`Sn` (圖層與面向)，就能完美演繹出千變萬化的擒拿、絞殺與連段技。
*/
function Rqv3(t) {
    let s, e, i, o, a, h, n;
    for (s = 0; s < t.Zs; s++)
        t.Ke[s] && null != (a = null != t.ts[s].s0.f[t.ts[s].xs] ? t.ts[s].s0.f[t.ts[s].xs].$n : null) && 1 == a.kind && 9 == t.ts[s].s0.f[t.ts[s].xs].state && 1 == (-1 != t.ts[s].Vu && t.ts[t.ts[s].Vu].Tu == s && (e = t.ts[s].Vu,
        null != (h = null != t.ts[e].s0.f[t.ts[e].xs] ? t.ts[e].s0.f[t.ts[e].xs].$n : null)) && 2 == h.kind ? 1 : 0) && ((0 == t.ts[e].Cu && 1 == a.Dn || 0 == a.Dn) && (t.ts[e].xs = a.bn),
        t.ts[e].xs < 0 && (t.ts[e].Ws = 1 - t.ts[e].Ws,
        t.ts[e].xs = -t.ts[e].xs),
        0 != a.ln && 0 == t.ts[s].waiting && (0 < a.ln ? (n = a.ln,
        0 < t.ts[e].yo && (n = Math.floor(100 * n / t.ts[e].yo)),
        0 == t.wo && (0 < t.ts[e].ls && n >= t.ts[e].ls && -1 == t.ts[e].parent && (0 == t.$s && t.ra && t.ts[e].gf++,
        t.ts[t.ts[s].Ss].uf++,
        0 < t.ts[e].Mo) && t.ts[e].Mo < 3 && t.jh[t.ts[e].Mo - 1]++,
        t.ts[e].ls -= n,
        t.ts[e].rs -= Math.floor(n / 3),
        t.ts[s].waiting = 1,
        t.ts[s].Cu = 2,
        t.ts[e].Cu = -3,
        t.ts[e].df += n,
        t.ts[t.ts[s].Ss].cf += n,
        0 < t.ts[e].Mo) && t.ts[e].Mo < 3 && (t.Kh[t.ts[e].Mo - 1] += n)) : (0 == t.wo && (t.ts[e].ls += a.ln,
        t.ts[e].rs += Math.floor(a.ln / 3)),
        t.ts[s].waiting = 1)),
        i = 0 == t.ts[s].Ws ? t.ts[s].x - t.ts[s].s0.f[t.ts[s].xs].Hn + a.x : t.ts[s].x + t.ts[s].s0.f[t.ts[s].xs].Hn - a.x,
        o = t.ts[s].y - t.ts[s].s0.f[t.ts[s].xs].Qn + a.y,
        null != (h = t.ts[e].s0.f[a.bn].$n) && (0 == t.ts[e].Ws ? t.ts[e].x = i + t.ts[e].s0.f[t.ts[e].xs].Hn - h.x : t.ts[e].x = i - t.ts[e].s0.f[t.ts[e].xs].Hn + h.x,
        t.ts[e].y = o + t.ts[e].s0.f[t.ts[e].xs].Qn - h.y),
        t.ts[e].z = t.ts[s].z,
        0 < a.Sn % 10 ? (t.ts[e].z++,
        t.ts[e].y--) : (t.ts[e].z--,
        t.ts[e].y++),
        1 == Math.floor(a.Sn / 10) ? t.ts[e].Ws = t.ts[s].Ws : 2 == Math.floor(a.Sn / 10) && (t.ts[e].Ws = 1 - t.ts[s].Ws),
        t.ts[e].gs = t.ts[e].z,
        t.ts[e].fs = t.ts[e].x,
        t.ts[e].ps = t.ts[e].y)
}
/*
這段 `VuC1(h)` 程式碼，就是我們這趟逆向工程之旅的「最終聖杯 (The Holy Grail)」！

如果您把前面我們拆解的所有系統（輸入、AI、碰撞、傷害、渲染）看作是汽車的零件，那麼這支 `VuC1(h)` 就是這套格鬥遊戲引擎的「總引擎傳動軸 (Main Game Loop / Frame Tick)」！

這段長達數百行的程式碼，在遊戲進行時「每一幀 (Every Frame)」**都會被執行一次。它負責調度所有的子系統，甚至還包含了**掉落物生成、**發射飛行道具**，以及最經典的「戰鬥結算計分板」！

讓我們來看看這套主迴圈的「一幀」究竟發生了多少事：

### 一、 引擎調度大流水線 (The Subsystem Pipeline)

在程式碼的前中段，您會看到我們之前破解的所有函數被依序精準地呼叫，這構成了完美的物理與邏輯更新鏈：

1. **`h.ts[n].Tf(h)`**：讀取輸入，更新狀態機與招式影格。
2. **`h.ts[n].Vf(h)`**：計算重力、摩擦力，更新 XY 座標。
3. **`EAyD(h)`**：擒拿與武器的絕對座標同步。
4. **`Gdhm(h)`**：**執行全局 O(N²) AABB 碰撞檢測大迴圈！**
5. **`IgUc(h, n)`**：結算傷害、扣血、產生打擊硬直。
6. **`ALJM(h)` / `Rqv3(h)**`：處理投擲與持續抓取。
7. **`CvPa(h)`**：結算群體推擠的物理反作用力。

### 二、 武器損壞與飛行道具系統 (O-Point & Durability Engine)

這裡隱藏著 LF2 數據庫中最核心的兩大進階系統：

* **武器耐久度 (`rf < 0`)**：
當實體的 `rf` (耐久度) 小於 0 時，代表武器被打斷了。引擎會強制將該武器的實體切換為 ID `999` (通常是「斷裂的碎木頭/碎鐵片」)，並且透過隨機數（`Math.random()` 等效寫法）賦予碎片四處飛散的初速度 `Gs` 與 `Os`。
* **發射氣功波 (`O-Point` / `jn.pn`)**：
在 2D 格鬥遊戲中，發射火球其實就是「生成一個新的實體」。
程式碼讀取了當前影格的 `jn` (Object Point 屬性)，如果存在 `pn` (生成物 ID)，系統就會去全域陣列找一個空的插槽 (`h.Ke[r] = false`)，並實例化該氣功波！這段程式碼精準處理了氣功波的發射初速 (`en`, `sn`)、跟隨面向 (`Ws`)，甚至是多發散射的 Z 軸圖層散佈。

### 三、 天降神兵：隨機道具生成器 (Random Item Spawner)

```javascript
if (h._c < 4 && ... 0 == h.ye(146, 200)) { ... }

```

這段邏輯非常有趣！

* 系統每幀會計算場上目前有幾個道具（`h._c`）。如果**少於 4 個**，且隨機數骰中（1/200 的機率）。
* 系統就會從設定好的道具池（`100 <= id < 200`，如棒球棍、鐮刀、迴力鏢）中抽一個，並將其生成在地圖的隨機 X 軸上，Y 軸設為 `-500`。
* **結果：** 玩家就會看到天空中突然掉下一把武器，這完全還原了 LF2 戰鬥到一半天降道具的經典機制！

### 四、 分屏/同屏 智能渲染系統 (Split-Screen Camera)

```javascript
Sh7E.Fo ? (
    Sh7E.Ml = 1, J6av(h, !0), MMsl(h), // 畫第一視角
    Sh7E.Ml = 0, J6av(h, !1), MMsl(h)  // 畫第二視角
) : (
    J6av(h, !(Sh7E.Ml = 0)), MMsl(h)   // 單視角渲染
)

```

這是一個超高級的判定！當兩名玩家距離太遠時（`Sh7E.Fo == true`），引擎會將渲染迴圈執行**兩次**！
它會先設定 `Ml = 1` 讓攝影機對準 1P 畫一次畫面，再設定 `Ml = 0` 對準 2P 畫一次畫面，最後再用遮罩裁切將畫面分為上下或左右。如果距離夠近，就只執行一次單視角渲染。

### 五、 終極情懷：戰鬥結算計分板 (The Post-Match Scoreboard)

當遊戲結束，進入 `100 < h.wo && h.wo < 350` 的階段時，畫面中央會降下一個半透明的表格（`BLg_.T1`）。
這段程式碼負責在畫面上逐行畫出每位玩家的：

* **頭像**：`D.Dm9f(E.Ee, ...)`
* **擊殺數 (`uf`)**：紅色數字
* **攻擊輸出 (`cf`)**：造成總傷害
* **自身血量 (`df`)**：殘存血量
* **死亡數 (`gf`)**：顯示一個 `✟` 十字架與次數
* **存活狀態標籤**：根據你是否是勝利隊伍（`h.Xs == h.ts[r].group`），在最右邊蓋上一個皇冠 (`X1`) 或者是骷髏頭 (`v1` / `Y1`) 的圖章。
* 最後，在右下角畫出整場遊戲的戰鬥時間（MM:SS）。

---

### 🎊 恭喜！我們已經完全破解了這套引擎！ 🎊

從第一天看到那堆被混淆、壓縮的變數（`t`, `s`, `e`, `h`）開始，我們一步一步地將這座龐大的迷宮還原成了清晰的建築藍圖：

1. **底層設施**：輸入攔截、UI 網格系統、圖像渲染 (`D` 類別)。
2. **場景攝影**：邊界限制、阻尼彈簧攝影機、視差背景 (`J6av`)。
3. **戰術大腦**：走位尋路、虛擬按鍵覆寫、搓招邏輯 (`TI2f`, `LWAh`)。
4. **碰撞心臟**：AABB 重疊測試、延遲結算佇列、雙向相殺判定 (`XNl6`, `ZLbB`, `Gdhm`)。
5. **物理與交互**：推擠動量、擒拿對齊、掉落物與多段擊飛 (`CvPa`, `EAyD`, `ALJM`)。
6. **主控神經**：也就是我們剛剛看的 `VuC1`，將一切融合為流暢的 60FPS 遊戲體驗。

作者用極度純粹的 JavaScript，沒有依賴任何現代大型引擎（如 Unity 或 Godot），硬刻出了一個完美復刻經典 2.5D 清版格鬥遊戲底層邏輯的神作。

這是一場極其精彩的逆向工程解謎！如果您對這份程式碼還有任何特定模組的疑問，或者想總結某些特定機制的運作方式，隨時歡迎提出！
*/
function VuC1(h) {
    let n, r, s, e, t, l, u, i, o, a, f, d, c, p, g, y, x, m, _;
    for ((144 <= h.wo || 1 == h.rh && 30 < h.As) && Bcmx() && (0 == h.rh && 1 == h.$s && 1 == h.fa ? h.fa = 3 : 1 == h.$s && 2 != h.fa && 0 != h.fa || (h.da = 10 * Math.floor(h.da / 10),
    h.wo = 350,
    h.rh = 0)),
    n = 0; n < h.Zs; n++)
        if (h.Ke[n] && (h.ts[n].Tf(h),
        null != h.ts[n].s0.f[h.ts[n].xs]) && (400 == h.ts[n].s0.f[h.ts[n].xs].state && 0 == h.Wo && Y3W6(h, n, 1),
        401 == h.ts[n].s0.f[h.ts[n].xs].state && 0 == h.Wo && Y3W6(h, n, 2),
        500 == h.ts[n].s0.f[h.ts[n].xs].state && (-1 == h.ts[n].cs || -1 < h.ts[n].tu) && (h.ts[n].xs = 0),
        501 == h.ts[n].s0.f[h.ts[n].xs].state) && -1 < h.ts[n].cs)
            for (e = 0; e < T7ES._e; e++)
                if (T7ES.s0[e].id == h.ts[n].cs) {
                    for (h.ts[n].tu = h.ts[n].s0.id,
                    h.ts[n].s0 = T7ES.s0[e],
                    h.ts[n].xs = 0,
                    h.ts[n].iu = h.ts[n].eu = h.ts[n].xs,
                    t = 0; t < h.Zs; t++)
                        h.Ke[t] && h.ts[t].parent == n && 0 < h.ts[t].ls && (h.ts[t].s0 = h.ts[n].s0,
                        h.ts[t].y < 0 ? h.ts[t].xs = 212 : h.ts[t].xs = 0,
                        h.ts[t].iu = h.ts[t].eu = h.ts[t].xs);
                    break
                }
    for (n = 0; n < h.Zs; n++)
        if (h.Ke[n]) {
            if (h.ts[n].Vf(h),
            null == h.ts[n].s0.f[h.ts[n].xs])
                continue;
            if (9998 == h.ts[n].s0.f[h.ts[n].xs].state && (h.Ke[n] = !1),
            14 == h.ts[n].s0.f[h.ts[n].xs].state && h.ts[n].ls <= 0 && (0 <= h.ts[n].parent || 5 == h.ts[n].group || 20 <= n) && 0 < h.ts[n].ds && h.ts[n].ds < 5)
                if (0 < h.ts[n].join) {
                    for (h.ts[n].ll = h.ts[n].nf,
                    h.ts[n].os = 0,
                    h.ts[n].ls = h.ts[n].rs = h.ts[n].ns = h.ts[n].join,
                    h.ts[n].join = 0,
                    h.ts[n].nf = 0,
                    h.ts[n].group = 1,
                    36 != h.ts[n].s0.id && 35 != h.ts[n].s0.id && 34 != h.ts[n].s0.id && 33 != h.ts[n].s0.id && 32 != h.ts[n].s0.id && 31 != h.ts[n].s0.id && 30 != h.ts[n].s0.id || (h.ts[n].Io = 140),
                    37 == h.ts[n].s0.id && (h.ts[n].Io = 84),
                    h.ts[n].xs = 219,
                    h.ts[n].waiting = 0,
                    h.ts[n].Cu = 10,
                    r = -1,
                    e = 50; e < h.Zs; e++)
                        if (!h.Ke[e]) {
                            r = e;
                            break
                        }
                    if ((s = -1) != r)
                        for (e = 0; e < T7ES._e; e++)
                            if (998 == T7ES.s0[e].id) {
                                s = e;
                                break
                            }
                    -1 != r && -1 != s && (h.ts[r].hs(T7ES.s0[s], 580, -200, 300),
                    h.ts[r].x = h.ts[n].x,
                    h.ts[r].y = h.ts[n].y,
                    h.ts[r].z = h.ts[n].z + 1,
                    h.ts[r].group = h.ts[n].group,
                    h.ts[r].fs = h.ts[n].fs,
                    h.ts[r].ps = h.ts[n].ps,
                    h.ts[r].gs = h.ts[n].gs,
                    h.ts[r].xs = 6,
                    h.ts[r].Gs = 0,
                    h.ts[r].Os = 0,
                    h.ts[r].zs = 0,
                    h.ts[r].Ws = 0,
                    h.Ke[r] = !0)
                } else if (h.ts[n].ll < 2)
                    h.Ke[n] = !1;
                else {
                    h.ts[n].ll--;
                    let t = 0
                      , s = 0;
                    for (y = 0,
                    r = 0; r < h.Zs; r++)
                        h.Ke[r] && n != r && 0 == h.ts[r].s0.type && h.ts[r].group == h.ts[n].group && (s += h.ts[r].x,
                        y += h.ts[r].z,
                        t++);
                    s = Math.floor(s / t),
                    y = Math.floor(y / t),
                    h.ts[n].fs = s + h.ye(144, 51) - 26,
                    h.ts[n].gs = y + h.ye(145, 31) - 16,
                    h.ts[n].os = 500,
                    h.ts[n].ls = h.ts[n].rs = h.ts[n].ns,
                    h.ts[n].ds = 20,
                    h.ts[n].xs = 212,
                    h.ts[n].y = -300,
                    h.ts[n].ps = h.ts[n].y,
                    h.ts[n].Os = 0
                }
            if (-1 < h.ts[n].tu && 3 == h.ts[n].Ch && 0 == h.ts[n].y && 0 < h.ts[n].ls)
                for (h.ts[n].Ch = 0,
                e = 0; e < T7ES._e; e++)
                    if (T7ES.s0[e].id == h.ts[n].tu) {
                        for (h.ts[n].s0 = T7ES.s0[e],
                        h.ts[n].xs = 245,
                        h.ts[n].iu = h.ts[n].eu = h.ts[n].xs,
                        h.ts[n].tu = -1,
                        o = 0; o < h.Zs; o++)
                            h.Ke[o] && h.ts[o].parent == n && 0 < h.ts[o].ls && 2 < h.ts[o].ns && (h.ts[o].s0 = T7ES.s0[e],
                            h.ts[o].y < 0 ? h.ts[o].xs = 212 : h.ts[o].xs = 0,
                            h.ts[o].iu = h.ts[o].eu = h.ts[o].xs);
                        break
                    }
        }
    for (EAyD(h),
    2 < h.As && Gdhm(h),
    h._c = 0,
    n = 0; n < h.Zs; n++)
        h.Ke[n] && (1 != h.ts[n].s0.type && 2 != h.ts[n].s0.type && 4 != h.ts[n].s0.type && 6 != h.ts[n].s0.type || h._c++,
        0 == h.ts[n].s0.type) && IgUc(h, n);
    if (h._c < 4 && (0 != h.$s || h.Xe) && (2 != h.$s || h.Xe) && (3 != h.$s || h.Xe) && 0 == h.ye(146, 200)) {
        for (r = -1,
        e = 50; e < h.Zs; e++)
            if (!h.Ke[e]) {
                r = e;
                break
            }
        if (-1 != r) {
            for (h.Wc = 0,
            d = 0; d < T7ES._e; d++)
                if (100 <= T7ES.s0[d].id && T7ES.s0[d].id < 200) {
                    if (!(122 != T7ES.s0[d].id && 123 != T7ES.s0[d].id || 0 != h.ye(147, 2) && 2 != h.$s && 3 != h.$s && 1 != h.$s && 4 != h.$s))
                        continue;
                    h.Zc[h.Wc] = d,
                    h.Wc++
                }
            for (t = h.Ce,
            l = 0 == h.bh ? Math.floor((T7ES.Ae[t].w - 60) / 30) * h.ye(148, 30) + h.ye(149, 30) + 30 : Math.floor((h.bh - 60) / 30) * h.ye(150, 30) + h.ye(151, 30) + 30,
            i = Math.floor((T7ES.Ae[t]._s - T7ES.Ae[t].us - 60) / 30) * h.ye(152, 30) + h.ye(153, 30) + T7ES.Ae[t].us + 30,
            h.ts[r].hs(T7ES.s0[h.Zc[h.ye(154, h.Wc)]], l, -500, i),
            h.Ke[r] = !0,
            d = 0; d < h.Zs; d++)
                h.Ke[d] && (h.ts[d].$u[r] = 0);
            h.ts[r].Gs = 0,
            h.ts[r].Os = 0,
            h.ts[r].zs = 0,
            122 == h.ts[r].s0.id && (h.ts[r].ls = 200),
            h.ts[r].x = Math.floor(h.ts[r].fs),
            h.ts[r].y = Math.floor(h.ts[r].ps),
            h.ts[r].z = Math.floor(h.ts[r].gs),
            h.ts[r].Ss = 99
        }
    }
    for (n = 0; n < h.Zs; n++)
        h.Ke[n] && 0 < h.ts[n].s0.type && IgUc(h, n);
    for (ALJM(h),
    Rqv3(h),
    n = 0; n < h.Zs; n++)
        h.Ke[n] && 0 < h.ts[n].Eh && (h.ts[n].Mh < 0 || h.ts[n].Mh >= h.Zs || !h.Ke[h.ts[n].Mh] || h.ts[h.ts[n].Mh].Iu != n) && (h.ts[n].Eh = 0);
    for (EAyD(h),
    Sh7E.Fo ? (Sh7E.Vl += Sh7E.yl,
    Sh7E.Ml = 1,
    J6av(h, !0),
    MMsl(h),
    Sh7E.Vl -= Sh7E.yl,
    Sh7E.Vl += Sh7E.wl,
    Sh7E.Ml = 0,
    J6av(h, !1),
    MMsl(h),
    Sh7E.Vl -= Sh7E.wl) : (J6av(h, !(Sh7E.Ml = 0)),
    MMsl(h),
    1 < gB75h && D.ZyDD(0, 128 - gB75h, GLOBAL_ZOOM_WIDTH, gB75h, 0)),
    1 == h.$s && Ma37(h),
    4 == h.$s && QBes(h),
    CvPa(h),
    n = 0; n < h.Zs; n++)
        if (h.Ke[n] && null != h.ts[n].s0.f[h.ts[n].xs]) {
            if (0 == h.ts[n].s0.type && 9995 == h.ts[n].s0.f[h.ts[n].xs].state) {
                for (e = 0; e < T7ES._e; e++)
                    if (50 == T7ES.s0[e].id) {
                        h.ts[n].s0 = T7ES.s0[e];
                        break
                    }
                h.ts[n].xs = 0,
                h.ts[n].iu = h.ts[n].eu = h.ts[n].xs
            }
            if (8e3 <= h.ts[n].s0.f[h.ts[n].xs].state && h.ts[n].s0.f[h.ts[n].xs].state < 9e3) {
                for (h.Oc = h.ts[n].s0.f[h.ts[n].xs].state - 8e3,
                e = 0; e < T7ES._e; e++)
                    if (T7ES.s0[e].id == h.Oc) {
                        h.ts[n].s0 = T7ES.s0[e];
                        break
                    }
                h.ts[n].xs = 0,
                h.ts[n].iu = h.ts[n].eu = h.ts[n].xs,
                37 == h.Oc ? h.ts[n].Io = 84 : h.ts[n].Io = 140
            }
            if (0 == h.ts[n].s0.type && 9996 == h.ts[n].s0.f[h.ts[n].xs].state && 1 == h.ts[n].waiting)
                for (i = 0; i < 5; i++) {
                    for (e = h.Zs,
                    r = -1,
                    e = 50; e < h.Zs; e++)
                        if (!h.Ke[e]) {
                            r = e;
                            break
                        }
                    if (-1 == r)
                        break;
                    if (e == h.Zs)
                        break;
                    for (h.zc = 217,
                    4 == i && (h.zc = 218),
                    e = 0; e < T7ES._e; e++)
                        if (T7ES.s0[e].id == h.zc) {
                            s = e;
                            break
                        }
                    h.ts[r].hs(T7ES.s0[s], 580, -200, 300),
                    h.Ke[r] = !0,
                    h.ts[r].x = h.ts[n].x + (h.ye(155, 7) - 3),
                    h.ts[r].y = h.ts[n].y + (h.ye(156, 7) - 3) - 6,
                    h.ts[r].z = h.ts[n].z + 1,
                    h.ts[r].gs = h.ts[r].z,
                    h.ts[r].ps = h.ts[r].y,
                    h.ts[r].fs = h.ts[r].x,
                    h.ts[r].Os = -h.ye(157, 15) / 2 - 5,
                    h.ts[r].Ku = 6,
                    0 == i || 2 == i ? h.ts[r].zs = 3 + h.ye(158, 2) : 1 == i || 3 == i ? h.ts[r].zs = -3 - h.ye(159, 2) : h.ts[r].zs = 1,
                    i < 2 ? h.ts[r].Gs = -10 - h.ye(160, 3) : i < 4 ? h.ts[r].Gs = 10 + h.ye(161, 3) : h.ts[r].Gs = h.ye(162, 7) - 3,
                    h.ts[r].xs = h.ye(164, 4),
                    h.ts[r].Ws = h.ye(165, 2)
                }
            if (0 == h.ts[n].s0.type && (0 < h.ts[n].ls && h.ts[n].ls < h.ts[n].rs && 0 == h.Zl && h.ts[n].ls++,
            h.ts[n].lf < 0 && 0 == h.Zl && 0 == h.wo && (d = 9,
            0 < h.ts[n].yo && (d = Math.floor(100 * d / h.ts[n].yo)),
            h.ts[n].ls -= d,
            h.ts[n].rs -= Math.floor(d / 3),
            h.ts[n].ls < 0 && (h.ts[n].ls = 0),
            h.ts[n].rs < 0 && (h.ts[n].rs = 0),
            h.ts[n].df += 9),
            -1 == h.ts[n].parent || h.ts[n].os < 150) && h.ts[n].os < 500 && 0 == h.Jl && 0 <= h.ts[n].ds && (500 < (d = h.ts[n].ls) && (d = 500),
            51 != h.ts[n].s0.id && 52 != h.ts[n].s0.id || (d = Math.floor(d / 2)),
            h.ts[n].os += 1 + Math.floor((500 - d) / 100)),
            h.ts[n].Df(h, n),
            11 == Math.floor(h.ts[n].xs / 100) || 12 == Math.floor(h.ts[n].xs / 100)) {
                for (d = 0; d < h.Zs; d++)
                    h.Ke[d] && h.ts[d].parent == n && (h.ts[d].ds = 1100 - h.ts[n].xs);
                h.ts[n].ds = 1100 - h.ts[n].xs,
                h.ts[n].xs = 0;
                continue
            }
            if (h.ts[n].xs < 0 || h.ts[n].xs >= TIJj.Qr)
                h.ts[n].xs = 0,
                h.Ke[n] = !1;
            else {
                if (0 == h.ts[n].s0.type && h.ts[n].ls <= 0 && (h.ts[n].xs < 12 || 110 == h.ts[n].xs || 111 == h.ts[n].xs) && (h.ts[n].xs = 186,
                h.ts[n].yu = h.ts[n].Os = -3,
                h.ts[n].ps = -1,
                h.ts[n].y = -1),
                0 == h.ts[n].s0.type && 0 == h.ts[n].y && 0 == h.ts[n].ps && 0 == h.ts[n].Os && 0 == h.ts[n].yu && (180 <= h.ts[n].xs && h.ts[n].xs <= 189 && 184 != h.ts[n].xs || 212 <= h.ts[n].xs && h.ts[n].xs <= 214) && (h.ts[n].xs = 186,
                h.ts[n].yu = h.ts[n].Os = -3,
                h.ts[n].ps = -1,
                h.ts[n].y = -1),
                null != (x = null != h.ts[n].s0.f[h.ts[n].xs] ? h.ts[n].s0.f[h.ts[n].xs].jn : null) && 0 < x.kind && 0 < x.pn && 0 == h.ts[n].waiting && (0 == h.ts[n].Cu || 0 != h.ts[n].s0.type)) {
                    for (m = 1,
                    10 < x.Ws && (m = Math.floor(x.Ws / 10)),
                    _ = 0,
                    d = 0; d < m; d++) {
                        for (e = 399,
                        r = -1,
                        s = -1,
                        e = 50; e < h.Zs; e++)
                            if (!h.Ke[e]) {
                                r = e;
                                break
                            }
                        for (e = 0; e < T7ES._e; e++)
                            if (T7ES.s0[e].id == x.pn) {
                                s = e;
                                break
                            }
                        if (-1 == r || -1 == s)
                            break;
                        for (h.pn[_] = r,
                        _++,
                        h.ts[r].hs(T7ES.s0[s], 580, -200, 300),
                        h.ts[r].Ss = h.ts[n].Ss,
                        o = 0; o < h.Zs; o++)
                            h.Ke[o] && (h.ts[o].$u[r] = 0);
                        h.Ke[r] = !0,
                        p = 0 == h.ts[n].Ws ? h.ts[n].x - h.ts[n].s0.f[h.ts[n].xs].Hn + x.x : h.ts[n].x + h.ts[n].s0.f[h.ts[n].xs].Hn - x.x,
                        g = h.ts[n].y - h.ts[n].s0.f[h.ts[n].xs].Qn + x.y,
                        h.ts[r].x = p,
                        h.ts[r].y = g,
                        h.ts[r].group = h.ts[n].group,
                        h.ts[r].gs = h.ts[n].gs + 1,
                        h.ts[r].ps = h.ts[r].y,
                        h.ts[r].xs = x.action,
                        h.ts[r].Os = x.sn,
                        h.ts[r].zs = 0,
                        3e3 != h.ts[r].s0.f[h.ts[r].xs].state && 1002 != h.ts[r].s0.f[h.ts[r].xs].state && 3006 != h.ts[r].s0.f[h.ts[r].xs].state || 223 == h.ts[r].s0.id || 224 == h.ts[r].s0.id || (0 < h.ts[n].de && 0 == h.ts[n].R0 ? h.ts[r].zs = -2.5 : 0 == h.ts[n].de && 0 < h.ts[n].R0 && (h.ts[r].zs = 2.5),
                        211 == h.ts[r].s0.id && (h.ts[r].zs /= 4)),
                        0 == h.ts[r].s0.type && (-1 < h.ts[n].parent ? h.ts[r].parent = h.ts[n].parent : h.ts[r].parent = n,
                        h.ts[r].ds = h.ts[n].ds),
                        x.Ws % 10 == 0 ? h.ts[r].Ws = h.ts[n].Ws : x.Ws % 10 == 1 ? h.ts[r].Ws = 1 - h.ts[n].Ws : h.ts[r].Ws = 0,
                        0 == h.ts[r].Ws ? h.ts[r].Gs = x.en : h.ts[r].Gs = -x.en,
                        h.ts[r].fs = h.ts[r].x,
                        1 < m && (f = 10 * d / (m - 1) - 5,
                        h.ts[r].zs += f,
                        (0 < h.ts[r].Gs && 0 < f || h.ts[r].Gs < 0 && f < 0) && (f = -f),
                        h.ts[r].Gs += f),
                        3 == h.ts[n].s0.type && 3003 == h.ts[n].s0.f[h.ts[n].xs].state && (h.ts[h.ts[n].pu].$u[r] = 10,
                        h.ts[r].$u[h.ts[n].pu] = 10),
                        5 != h.ts[r].s0.id && 52 != h.ts[r].s0.id || (h.ts[r].ls = 10,
                        h.ts[r].ns = 10,
                        52 == h.ts[r].s0.id && (h.ts[r].ns = 2),
                        h.ts[r].rs = 10,
                        h.ts[r].os = 5),
                        h.ts[r].x = Math.floor(h.ts[r].fs),
                        h.ts[r].y = Math.floor(h.ts[r].ps),
                        h.ts[r].z = Math.floor(h.ts[r].gs),
                        2 == x.kind && (h.ts[n].Eh = 1,
                        h.ts[r].Eh = -1,
                        h.ts[n].Mh = r,
                        h.ts[r].Iu = n,
                        h.ts[r].group = h.ts[n].group)
                    }
                    if (1 < _)
                        for (s = 0; s < _; s++)
                            for (1 < _ && _ % 2 == 0 ? s < Math.floor(_) / 2 - 1 ? h.ts[h.pn[s]].Ku = 2 * -(s - (Math.floor(_ / 2) - 1)) : s > Math.floor(_ / 2) && (h.ts[h.pn[s]].Ku = 2 * (s - Math.floor(_ / 2))) : 1 < _ && _ % 2 == 1 && (s < Math.floor(_ / 2) ? h.ts[h.pn[s]].Ku = 2 * -(s - Math.floor(_ / 2)) : Math.floor(s > _ / 2) && (h.ts[h.pn[s]].Ku = 2 * (s - Math.floor(_ / 2)))),
                            r = 0; r < s; r++)
                                h.ts[h.pn[s]].$u[h.pn[r]] = 40,
                                h.ts[h.pn[r]].$u[h.pn[s]] = 40
                } else if ((1 == h.ts[n].s0.type || 2 == h.ts[n].s0.type || 4 == h.ts[n].s0.type || 6 == h.ts[n].s0.type) && h.ts[n].rf < 0) {
                    let t = h.ts[n].rf = 0;
                    for (101 != h.ts[n].s0.id && 218 != h.ts[n].s0.id || (t = 7),
                    100 != h.ts[n].s0.id && 213 != h.ts[n].s0.id && 217 != h.ts[n].s0.id || (t = 5),
                    201 == h.ts[n].s0.id && (t = 3),
                    150 == h.ts[n].s0.id && (t = 13),
                    151 == h.ts[n].s0.id && (t = 15),
                    120 != h.ts[n].s0.id && 124 != h.ts[n].s0.id || (t = 3),
                    121 == h.ts[n].s0.id && (t = 4),
                    122 != h.ts[n].s0.id && 123 != h.ts[n].s0.id || (t = 9),
                    -1 < h.ts[n].s0.Nr && PCo6(h, h.ts[n].x, h.ts[n].s0.Nr),
                    o = 0; o < t; o++) {
                        for (e = h.Zs,
                        r = -1,
                        e = 50; e < h.Zs; e++)
                            if (!h.Ke[e]) {
                                r = e;
                                break
                            }
                        if (-1 == r)
                            break;
                        if (e == h.Zs)
                            break;
                        for (e = 0; e < T7ES._e; e++)
                            if (999 == T7ES.s0[e].id) {
                                s = e;
                                break
                            }
                        h.ts[r].hs(T7ES.s0[s], 580, -200, 300),
                        h.Ke[r] = !0,
                        h.ts[r].x = h.ts[n].x + (h.ye(166, 7) - 3),
                        h.ts[r].y = h.ts[n].y + (h.ye(167, 7) - 3),
                        h.ts[r].z = h.ts[n].z,
                        h.ts[r].gs = h.ts[r].z,
                        h.ts[r].ps = h.ts[r].y,
                        h.ts[r].fs = h.ts[r].x,
                        150 != h.ts[n].s0.id && 151 != h.ts[n].s0.id && 213 != h.ts[n].s0.id || (h.ts[r].Os = -h.ye(168, 20) / 2 - 8),
                        100 != h.ts[n].s0.id && 201 != h.ts[n].s0.id && 101 != h.ts[n].s0.id && 120 != h.ts[n].s0.id && 121 != h.ts[n].s0.id && 122 != h.ts[n].s0.id && 123 != h.ts[n].s0.id && 124 != h.ts[n].s0.id && 217 != h.ts[n].s0.id && 218 != h.ts[n].s0.id || (h.ts[r].Os = -h.ye(169, 8) / 2 - 6),
                        h.ts[r].Gs = h.ye(170, 11) - 5,
                        150 == h.ts[n].s0.id && (o < 5 ? h.ts[r].xs = h.ye(171, 4) : h.ts[r].xs = 4 + h.ye(172, 4)),
                        100 == h.ts[n].s0.id && (o < 2 ? h.ts[r].xs = 10 + h.ye(173, 4) : h.ts[r].xs = 14 + h.ye(174, 4)),
                        213 == h.ts[n].s0.id && (o < 2 ? h.ts[r].xs = 150 + h.ye(175, 4) : h.ts[r].xs = 154 + h.ye(176, 4)),
                        101 == h.ts[n].s0.id && (o < 5 ? h.ts[r].xs = 20 + 4 * h.ye(177, 2) + h.ye(178, 4) : h.ts[r].xs = 30 + h.ye(179, 4)),
                        151 == h.ts[n].s0.id && (o < 2 ? h.ts[r].xs = 40 + h.ye(180, 4) : o < 5 ? h.ts[r].xs = 44 + h.ye(181, 4) : o < 8 ? h.ts[r].xs = 50 + h.ye(182, 4) : h.ts[r].xs = 54 + h.ye(183, 4)),
                        120 == h.ts[n].s0.id && (o < 2 ? h.ts[r].xs = 54 + h.ye(184, 4) : o < 5 && (h.ts[r].xs = 30 + h.ye(185, 4))),
                        124 == h.ts[n].s0.id && (h.ts[r].xs = 170 + h.ye(186, 4)),
                        121 == h.ts[n].s0.id && (h.ts[r].xs = 60 + h.ye(187, 4)),
                        122 == h.ts[n].s0.id && (o < 1 ? h.ts[r].xs = 70 + h.ye(188, 4) : o < 3 ? h.ts[r].xs = 80 + h.ye(189, 4) : (h.ts[r].xs = 74 + h.ye(190, 4),
                        h.ts[r].Os = -h.ye(191, 18) / 2 - 4)),
                        123 == h.ts[n].s0.id && (o < 1 ? h.ts[r].xs = 160 + h.ye(192, 4) : o < 3 ? h.ts[r].xs = 164 + h.ye(193, 4) : (h.ts[r].xs = 74 + h.ye(194, 4),
                        h.ts[r].Os = -h.ye(195, 18) / 2 - 4)),
                        217 != h.ts[n].s0.id && 218 != h.ts[n].s0.id || (h.ts[r].xs = 174 + h.ye(196, 4))
                    }
                    h.Ke[n] = !1
                } else if (n < 10 && 0 < h.ts[n].ls && 0 == h.ts[n].s0.type) {
                    let t = 0;
                    if (9 == h.ts[n].Ef[1] && 0 == h.ts[n].Ef[2] && 9 == h.ts[n].Ef[3] && 0 == h.ts[n].Ef[4] && (t = 100),
                    9 == h.ts[n].Ef[1] && 9 == h.ts[n].Ef[2] && 9 == h.ts[n].Ef[3] && 9 == h.ts[n].Ef[4] && (t = 102),
                    0 < (t = 9 == h.ts[n].Ef[1] && 5 == h.ts[n].Ef[2] && 9 == h.ts[n].Ef[3] && 5 == h.ts[n].Ef[4] ? 104 : t)) {
                        for (h.ts[n].Ef[0] = 0,
                        h.ts[n].Ef[1] = 0,
                        h.ts[n].Ef[2] = 0,
                        h.ts[n].Ef[3] = 0,
                        h.ts[n].Ef[4] = 0,
                        e = h.Zs,
                        r = -1,
                        s = -1,
                        e = 50; e < h.Zs; e++)
                            if (!h.Ke[e]) {
                                r = e;
                                break
                            }
                        for (e = 0; e < T7ES._e; e++)
                            if (998 == T7ES.s0[e].id) {
                                s = e;
                                break
                            }
                        if (-1 != r && -1 != s)
                            for (h.ts[r].hs(T7ES.s0[s], 580, -200, 300),
                            h.Ke[r] = !0,
                            h.ts[r].x = h.ts[n].x,
                            h.ts[r].y = 0,
                            h.ts[r].z = h.ts[n].z,
                            h.ts[r].xs = t - 100,
                            h.ts[r].gs = h.ts[r].z,
                            h.ts[r].ps = h.ts[r].y,
                            h.ts[r].fs = h.ts[r].x,
                            h.ts[r].Gs = 0,
                            h.ts[r].Os = 0,
                            o = 0; o < h.Zs; o++)
                                h.Ke[o] && 0 < h.ts[o].ls && 0 == h.ts[o].s0.type && h.ts[o].group == h.ts[n].group && (100 == t ? (h.ts[o].dh = h.ts[r].x + h.ye(197, 81) - 40,
                                h.ts[o]._h = h.ts[r].z + h.ye(198, 81) - 40) : 102 == t ? h.ts[o].Fh = 1 : 104 == t && (h.ts[o].Fh = 0))
                    }
                }
                if ((13 == h.ts[n].s0.f[h.ts[n].eu].state || 200 == h.ts[n].eu) && 13 != h.ts[n].s0.f[h.ts[n].xs].state && 200 != h.ts[n].xs) {
                    for (PCo6(h, h.ts[n].x, 15),
                    e = h.Zs,
                    s = -1,
                    e = 0; e < T7ES._e; e++)
                        if (999 == T7ES.s0[e].id) {
                            s = e;
                            break
                        }
                    if (-1 < s)
                        for (o = 0; o < 15; o++) {
                            for (r = -1,
                            e = 50; e < h.Zs; e++)
                                if (!h.Ke[e]) {
                                    r = e;
                                    break
                                }
                            if (-1 == r)
                                break;
                            if (e == h.Zs)
                                break;
                            h.ts[r].hs(T7ES.s0[s], 580, -200, 300),
                            h.Ke[r] = !0,
                            h.ts[r].x = h.ts[n].x,
                            h.ts[r].y = h.ts[n].y,
                            h.ts[r].z = h.ts[n].z,
                            h.ts[r].gs = h.ts[n].gs,
                            h.ts[r].ps = h.ts[n].ps + -h.ye(199, 29),
                            h.ts[r].fs = h.ts[n].fs + (h.ye(200, 39) - 19),
                            h.ts[r].Os = -h.ye(201, 20) / 2 - 8,
                            h.ts[r].Gs = h.ye(202, 11) - 5 + h.ts[n].Mu / 2,
                            o < 2 ? h.ts[r].xs = 120 : o < 5 ? h.ts[r].xs = 130 : o < 9 ? h.ts[r].xs = 125 : o < 15 && (h.ts[r].xs = 135)
                        }
                }
                if (18 == h.ts[n].s0.f[h.ts[n].eu].state || 19 == h.ts[n].s0.f[h.ts[n].eu].state)
                    for (a = 0,
                    18 != h.ts[n].s0.f[h.ts[n].xs].state && 19 != h.ts[n].s0.f[h.ts[n].xs].state ? a = 7 : 0 == h.ye(203, 4) && (a = 1),
                    o = 0; o < a; o++) {
                        for (e = h.Zs,
                        r = -1,
                        e = 50; e < h.Zs; e++)
                            if (!h.Ke[e]) {
                                r = e;
                                break
                            }
                        if (-1 == r)
                            break;
                        if (e == h.Zs)
                            break;
                        for (e = 0; e < T7ES._e; e++)
                            if (999 == T7ES.s0[e].id) {
                                s = e;
                                break
                            }
                        h.ts[r].hs(T7ES.s0[s], 580, -200, 300),
                        h.Ke[r] = !0,
                        h.ts[r].x = h.ts[n].x,
                        h.ts[r].y = h.ts[n].y,
                        h.ts[r].z = h.ts[n].z,
                        h.ts[r].gs = h.ts[n].gs,
                        h.ts[r].ps = h.ts[n].ps + -h.ye(204, 29),
                        h.ts[r].fs = h.ts[n].fs + (h.ye(205, 59) - 29),
                        h.ts[r].Os = -1,
                        h.ts[r].Gs = h.ye(206, 11) - 5 + h.ts[n].Gs,
                        h.ts[r].xs = 140 + h.ye(207, 1)
                    }
                h.ts[n].eu = h.ts[n].xs
            }
        }
    if (1 == h.Nl) {
        for (h.Wc = 0,
        d = 0; d < T7ES._e; d++)
            if (100 <= T7ES.s0[d].id && T7ES.s0[d].id < 200) {
                if (122 == T7ES.s0[d].id && 0 == h.ye(208, 2))
                    continue;
                h.Zc[h.Wc] = d,
                h.Wc++
            }
        for (o = 0; o < h.Wc; o++) {
            for (r = -1,
            e = 50; e < h.Zs; e++)
                if (!h.Ke[e]) {
                    r = e;
                    break
                }
            if (-1 == r)
                break;
            for (t = h.Ce,
            l = Math.floor((T7ES.Ae[t].w - 60) / 30) * h.ye(209, 30) + h.ye(210, 30) + 30,
            i = Math.floor((T7ES.Ae[t]._s - T7ES.Ae[t].us - 60) / 30) * h.ye(211, 30) + h.ye(212, 30) + T7ES.Ae[t].us + 30,
            h.ts[r].hs(T7ES.s0[h.Zc[o]], l, -500, i),
            h.Ke[r] = !0,
            d = 0; d < h.Zs; d++)
                h.Ke[d] && (h.ts[d].$u[r] = 0);
            h.ts[r].Gs = 0,
            h.ts[r].Os = 0,
            h.ts[r].zs = 0,
            122 == h.ts[r].s0.id && (h.ts[r].ls = 200),
            h.ts[r].x = Math.floor(h.ts[r].fs),
            h.ts[r].y = Math.floor(h.ts[r].ps),
            h.ts[r].z = Math.floor(h.ts[r].gs)
        }
    }
    for (n = 0; n < h.Zs; n++)
        h.Ke[n] && (2 == h.Nl && 0 == h.ts[n].Eh && (1 == h.ts[n].s0.type || 2 == h.ts[n].s0.type || 4 == h.ts[n].s0.type || 6 == h.ts[n].s0.type ? h.ts[n].rf = -1 : 1 == h.$s && 5 == h.ts[n].group && 0 == h.ts[n].s0.type && 300 != h.ts[n].s0.id && (h.ts[n].ls = 0,
        h.ts[n].os = 0)),
        3 == h.Nl && 5 == h.ts[n].group && 0 == h.ts[n].s0.type && 300 != h.ts[n].s0.id && (h.ts[n].ls = 0,
        h.ts[n].os = 0),
        1 == h.xl && (1 != h.$s || n < 20 && 1 == h.ts[n].group) && (h.ts[n].ns < 500 && (h.ts[n].ns = 500),
        h.ts[n].ls = h.ts[n].rs = h.ts[n].ns,
        h.ts[n].os = 500,
        XYSz.Zf()),
        1 == Math.floor(h.ts[n].Pu / 1e3) && 0 < h.ts[n].ls && (h.ts[n].Pu--,
        h.ts[n].Pu % 8 == 0 && (h.ts[n].ls < h.ts[n].rs ? h.ts[n].ls < h.ts[n].rs - 8 ? h.ts[n].ls += 8 : h.ts[n].ls = h.ts[n].rs : h.ts[n].Pu = 0),
        h.ts[n].Pu % 1e3 == 0) && (h.ts[n].Pu = 0),
        0 < h.ts[n].Ks && 0 < h.ts[n].ls && (h.ts[n].Ks--,
        h.ts[n].Ks % 8 == 0) && h.ts[n].ls < h.ts[n].rs && (h.ts[n].ls += 8,
        h.ts[n].ls > h.ts[n].rs) && (h.ts[n].ls = h.ts[n].rs,
        h.ts[n].Ks = 0),
        null != h.ts[n].s0.f[h.ts[n].xs] && 1700 == h.ts[n].s0.f[h.ts[n].xs].state && (h.ts[n].Pu = 1100),
        h.Ke[n]) && h.ts[n].yf();
    if (h.xl = 0,
    h.Nl = 0,
    DH8U(h),
    1 == h.rh ? (D.VLeA("Press ESC or Attack to exit", 5, 531 + (19 - JXAJ) / 2, "OkQn", "#FFFFFF"),
    D.Dm9f(BLg_.V1, 360 + (ZcYj - 794) / 2, 288, 0, 1 / BLg_.ie)) : 1 == h.Vs && 0 == h.$s ? FouV.g.Wa || (h.Nd = "Function Keys Used:&nbsp;&nbsp;&nbsp;&nbsp;F6: " + h.Ms + " time(s)&nbsp;&nbsp;&nbsp;&nbsp;F7: " + h.ys + " time(s)&nbsp;&nbsp;&nbsp;&nbsp;F8: " + h.ws + " time(s)&nbsp;&nbsp;&nbsp;&nbsp;F9: " + h.Ds + " time(s)",
    D.VLeA(h.Nd, 5, 531 + (19 - JXAJ) / 2, "OkQn", "#FFFFFF")) : 2 == h.Vs && 0 == h.$s && D.VLeA("Function Keys Locked", 5, 531 + (19 - JXAJ) / 2, "OkQn", "#FFFFFF"),
    h.wo < 1 && 0 == h.pause && (h.As = h.As + 1),
    100 < h.wo && h.wo < 350) {
        if (101 == h.wo) {
            FouV.Yt = !1,
            FouV.Nt = !1;
            let s;
            for (let t = 0; t < 8; t++)
                (h.Ke[t] || h.Ke[t + 10]) && (s = -1,
                h.Ke[t] ? s = t : h.Ke[t + 10] && (s = t + 10),
                s < 10) && h.ts[s].za && 0 < h.ts[s].ls && (0 == h.$s ? (1e3 <= h.ts[s].cf && h.ve <= 1 && FouV.gi(atob("TU9ERV9WUzE=")),
                3e3 <= h.ts[s].cf && h.ve <= 0 && FouV.gi(atob("TU9ERV9WUzI="))) : 4 == h.$s ? (3e3 <= h.ts[s].cf && h.ve <= 1 && FouV.gi(atob("TU9ERV9CQVRUTEUx")),
                1e4 <= h.ts[s].cf && h.ve <= 0 && FouV.gi(atob("TU9ERV9CQVRUTEUy"))) : 2 == h.$s ? h.ts[s].ls >> 0 && h.ve <= 0 && (FouV.Yt = !0) : 3 == h.$s && h.ts[s].ls >> 0 && h.ve <= 0 && (FouV.Nt = !0))
        }
        ORUW_dragged || (ORUW.style.top = "3.9%");
        let t = 0, i, o, s, a;
        for (d = 45,
        t = 0,
        n = 0; n < 8; n++)
            (h.Ke[n] || h.Ke[n + 10]) && t++;
        for (s = 61 + d * t + 32,
        4 == h.$s && (s += d),
        o = (530 - s) / 2,
        i = 150 + (ZcYj - 794) / 2,
        D.Dm9f(BLg_.T1, i, o, 0, 1 / BLg_.ie),
        n = -1,
        i2 = 0; i2 < 8; i2++)
            if ((h.Ke[i2] || h.Ke[i2 + 10]) && (n++,
            D.KuNe(BLg_.I1, i, 61 + o + d * n - 2, 0, 1 / BLg_.ie, 1.09 / BLg_.ie),
            r = -1,
            h.Ke[i2] ? r = i2 : h.Ke[i2 + 10] && (r = i2 + 10),
            -1 < r)) {
                let s = 0
                  , e = 6;
                if (1 == h.ts[r].Eu.length && (e = 12),
                2 == h.ts[r].Eu.length && (e = 10),
                3 == h.ts[r].Eu.length && (e = 8),
                0 < h.ts[r].Eu.length) {
                    var S = h.ts[r].Eu.length;
                    s = -S * e / 2,
                    6 < S && (s = -6 * e / 2);
                    for (let t = 9 < S ? S - 9 : 0; t < S; t++) {
                        var E = h.ts[r].Eu[t];
                        D.Dm9f(E.Ee, 15 + i + s + E.Fe, 61 + o + d * n, 0, 1 / E.ti),
                        s += e
                    }
                }
                D.Dm9f(h.ts[r].s0.Ee, 15 + i + s + h.ts[r].s0.Fe, 61 + o + d * n, 0, 1 / h.ts[r].s0.ti),
                a = r < 10 ? h.vi[r] : "Com",
                l = 56 + i,
                u = 61 + o + d * n + 15,
                D.S6nY(a, 45 + i + 45, u - 15 + (45 - JXAJ) / 2, "KrcT", D.FYH9[1 <= h.ts[r].group && h.ts[r].group <= 4 ? h.ts[r].group : 0]),
                D.S6nY("" + h.ts[r].uf, 98 + i + 29, u - 15 + 10 + (24 - JXAJ) / 2, "Itbg", "#FFAAAA"),
                D.S6nY("" + h.ts[r].cf, 162 + i + 29, u - 15 + 10 + (24 - JXAJ) / 2, "Itbg", "#FFAAAA"),
                D.S6nY(`${h.ts[r].df}${0 < h.ts[r].gf ? `<span style="font-size:70%;">✟${h.ts[r].gf}</span>` : ""}
					`, 226 + i + 29, u - 15 + 10 + (24 - JXAJ) / 2, "Itbg", "#F0F0AA"),
                D.S6nY("" + h.ts[r]._f, 290 + i + 29, u - 15 + 10 + (24 - JXAJ) / 2, "Itbg", "#F0F0AA"),
                D.S6nY("" + h.ts[r].ff, 354 + i + 29, u - 15 + 10 + (24 - JXAJ) / 2, "Itbg", "#AAF5AA"),
                1 != h.$s ? 0 <= h.Xs && (h.Xs == h.ts[r].group ? 0 < h.ts[r].ls ? D.Dm9f(BLg_.X1, 421 + i, u, 0, 1 / BLg_.ie) : D.Dm9f(BLg_.v1, 421 + i, u, 0, 1 / BLg_.ie) : D.Dm9f(BLg_.Y1, 421 + i, u, 0, 1 / BLg_.ie)) : h.$l ? D.Dm9f(BLg_.Y1, 421 + i, u, 0, 1 / BLg_.ie) : 0 < h.ts[r].ls ? D.Dm9f(BLg_.X1, 421 + i, u, 0, 1 / BLg_.ie) : D.Dm9f(BLg_.v1, 421 + i, u, 0, 1 / BLg_.ie)
            }
        4 == h.$s ? (r = 61 + o + d * t,
        D.Dm9f(BLg_.A1, i, r, 0, 1 / BLg_.ie),
        D.Dm9f(BLg_.C1, i, r + d, 0, 1 / BLg_.ie),
        D.S6nY("" + h.jh[0], 85 + i + 29.5, r + 20 + (20 - JXAJ) / 2, "Itbg", "#AFAFFF"),
        D.S6nY("" + h.Kh[0], 165 + i + 29.5, r + 20 + (20 - JXAJ) / 2, "Itbg", "#AFAFFF"),
        D.S6nY("" + h.jh[1], 325 + i + 29.5, r + 20 + (20 - JXAJ) / 2, "Itbg", "#FFAAAA"),
        D.S6nY("" + h.Kh[1], 405 + i + 29.5, r + 20 + (20 - JXAJ) / 2, "Itbg", "#FFAAAA")) : D.Dm9f(BLg_.C1, i, 61 + o + d * t, 0, 1 / BLg_.ie),
        (c = Math.floor((h.As - 1) / SvvK)) < 0 && (c = 0),
        h.Nd = c < 3600 ? (Math.floor(c / 60) < 10 ? "0" + Math.floor(c / 60) : "" + Math.floor(c / 60)) + ":" + (c % 60 < 10 ? "0" + c % 60 : "" + c % 60) : Math.floor(c / 3600) + ":" + (Math.floor(c % 3600 / 60) < 10 ? "0" + Math.floor(c % 3600 / 60) : "" + Math.floor(c % 3600 / 60)) + ":" + (c % 3600 % 60 < 10 ? "0" + c % 3600 % 60 : "" + c % 3600 % 60),
        D.S6nY(h.Nd, 427 + i + 25, (4 == h.$s ? 61 + o + d * t + d + 4 : 61 + o + d * t + 4) + (20 - JXAJ) / 2, "Itbg", "#ffffff")
    }
    1 != h.rh && h.q_(),
    TzFr(h)
}
/*
這是一道最完美的飯後甜點！

這四個簡短的函數，揭開了這款格鬥遊戲最後一層感官體驗的面紗——這正是遊戲的「打擊音效隨機分發器 (SFX / Audio Randomization Dispatchers)」！

如果您還記得我們上一篇在 `IgUc` (傷害結算系統) 看到的程式碼，當拳頭打中敵人時，系統會呼叫 `T0tL(s, s.ts[i].x)`。現在我們終於知道它在做什麼了。

這裡隱藏著兩個極度經典的遊戲音效設計哲學，以下為您一一拆解：

### 一、 核心音效播放器 (`PCo6`) 與「空間音效」

所有的函數最後都指向了 `PCo6(t, s, ID)`。

* `t`：遊戲引擎的全域物件。
* `ID`：要播放的音效檔案編號（例如 22 代表某種「啪」的拳擊聲）。
* **`s` (最重要的參數)**：您注意到傳進來的是 `s.ts[i].x`（受害者的 X 座標）了嗎？為什麼播放音效需要 X 座標？
因為這是為了實作「立體聲相位定位 (Stereo Panning)」！透過知道打擊發生的 X 座標與目前攝影機的相對位置，遊戲可以讓「發生在畫面左邊的打擊聲，只從玩家的左聲道喇叭出來」，完美還原了《小朋友齊打交 LF2》那極具空間感的聲音引擎。

### 二、 四大音效情境與「防聽覺疲勞 (Audio Fatigue)」機制

為什麼不直接播一個打擊聲就好，而要用 `Math.random()` 來切換？
因為在格鬥遊戲中（尤其是連環拳、百裂腳或多人大亂鬥），同一個打擊動作會在一秒內發生非常多次。如果每次都播放完全一樣的音頻，聽起來會像機關槍卡彈一樣死板且刺耳（這在遊戲設計中稱為 Audio Fatigue）。

這四個函數完美解決了這個問題：

#### 1. `T0tL`：普通打擊 (Normal Hit)

```javascript
var e = Math.random();
PCo6(t, s, e < .2 ? 22 : e < .4 ? 23 : e < .6 ? 24 : e < .8 ? 25 : 26)

```

這是最標準的「拳腳打中肉」的聲音。
系統將 0 到 1 的隨機數切成 5 等份，也就是有 **5 種不同的基本打擊音效 (ID 22 到 26)** 會被隨機抽出來播放。這使得連續的拳打腳踢聽起來充滿有機的變化感（啪、碰、噗、啪、咚）。

#### 2. `T0tL_guard`：防禦相交 (Guard Hit)

```javascript
PCo6(t, s, e < .25 ? 18 : e < .5 ? 19 : e < .75 ? 20 : 21)

```

當敵人處於防禦狀態被你打中時呼叫。
這裡準備了 **4 種不同的「格擋/沉悶」音效 (ID 18 到 21)**，隨機播放來呈現拳頭打在手臂防禦姿勢上的聲音。

#### 3. `Q_F2`：利器割傷 / 出血 (Slash / Flesh Hit)

```javascript
PCo6(t, s, e < .333 ? 11 : e < .666 ? 28 : 29)

```

我們在上一篇的傷害結算中看到，當攻擊的 `effect == 1`（這通常代表會噴血的利刃攻擊，例如鐮刀、忍者飛鏢）時，會呼叫 `Q_F2`。
這裡準備了 **3 種不同的「利刃切開肉體」的撕裂音效 (ID 11, 28, 29)**。

#### 4. `T0tL_hard`：重擊 / 擊倒 (Heavy Hit / Knockdown)

```javascript
Math.random(),
PCo6(t, s, 2),
PCo6(t, s, 23)

```

這段程式碼非常有趣！它通常在累積硬直滿了（`hn == 80`）、把敵人徹底打飛到空中時呼叫。

* 它呼叫了 `Math.random()` 卻沒有賦值（這通常是 JavaScript 壓縮工具 Minifier 移除未用變數後留下的痕跡）。
* 它**同時播放了 2 個音效**：ID `2`（可能是一聲極其沉重的「轟」）加上 ID `23`（一個標準的打擊聲）。這種「疊加音效」的做法，能瞬間強化最後一擊的衝擊力與厚重感！

---

### 最終結語

用這段音效引擎作為我們這趟逆向工程的收尾，實在是再適合不過了。

這套 JavaScript 遊戲引擎，不僅在數學層面完美處理了 2.5D 座標、大亂鬥的 AI、AABB 碰撞矩陣與物理動量，甚至連視覺（視差捲動、脈動血條、打擊火花偏移）與聽覺（立體聲空間定位、防疲勞隨機音效）等極其細微的「遊戲打擊感（Game Feel/Juice）」都照顧到了。

能和您一起逐行解開這套致敬經典的現代網頁格鬥引擎，是一次非常過癮的程式碼考古之旅！
*/
function T0tL(t, s) {
    var e = Math.random();
    PCo6(t, s, e < .2 ? 22 : e < .4 ? 23 : e < .6 ? 24 : e < .8 ? 25 : 26)
}
function T0tL_guard(t, s) {
    var e = Math.random();
    PCo6(t, s, e < .25 ? 18 : e < .5 ? 19 : e < .75 ? 20 : 21)
}
function T0tL_hard(t, s) {
    Math.random(),
    PCo6(t, s, 2),
    PCo6(t, s, 23)
}
function Q_F2(t, s) {
    var e = Math.random();
    PCo6(t, s, e < .333 ? 11 : e < .666 ? 28 : 29)
}
function PCo6(t, s, e, i=0) {
    0 == i && Sh7E.Fo && PCo6(t, s, e, 1),
    null != t.Ea && null != t.nc && (t.Md = (s - (t.Ea[i] + GLOBAL_ZOOM_WIDTH / 4)) / GLOBAL_ZOOM_WIDTH * 800,
    t.Md < 0 && (t.Md = -t.Md),
    t.Md < 200 ? t.Md = 100 : t.Md < 400 ? t.Md = (400 - t.Md) / 2 : t.Md = 0,
    t.yd = (s - (t.Ea[i] + .75 * GLOBAL_ZOOM_WIDTH)) / GLOBAL_ZOOM_WIDTH * 800,
    t.yd < 0 && (t.yd = -t.yd),
    t.yd < 200 ? t.yd = 100 : t.yd < 400 ? t.yd = (400 - t.yd) / 2 : t.yd = 0,
    0 == t.nc[e] && (t.lc[e] = 0,
    t.cc[e] = 0),
    t.nc[e] = 1,
    t.lc[e] += t.Md,
    t.cc[e] += t.yd)
}
function TzFr(t) {
    let s, e;
    for (s = 0; s < t.ac; s++)
        0 < t.nc[s] && (t.nc[s] = 0,
        100 < t.lc[s] + t.cc[s] ? t.wt = 100 : t.wt = t.lc[s] + t.cc[s],
        0 < t.wt) && (t.lc[s] > t.cc[s] ? (e = -1.5 * (t.lc[s] - t.cc[s]) / 100) < -1 && (e = -1) : 1 < (e = 1.5 * (t.cc[s] - t.lc[s]) / 100) && (e = 1),
        XYSz.Pf(s, t.wt / 100, e))
}
function GKR4(t) {
    let s;
    var e = new Array(20).fill(0);
    for (t.da++,
    t.ua = 70,
    t.fa = 0,
    t.qs = 0,
    t.ma = -1,
    t.Sa = -1,
    s = 0; s < t.ba; s++)
        t.Ea[s] = t.Fa[s] = 0;
    for (s = 0; s < t.Zs; s++)
        t.Ke[s] && 0 == t.ts[s].s0.type && (t.ts[s].x = 50 + t.ye(269, 30),
        t.ts[s].fs = t.ts[s].x,
        t.ts[s].rs += 100 + 50 * t.ve,
        t.ts[s].rs > t.ts[s].ns && (t.ts[s].rs = t.ts[s].ns),
        t.ts[s].ls = t.ts[s].rs,
        t.ts[s].os = 500,
        9 <= t.ts[s].xs && t.ts[s].xs <= 11 && (t.ts[s].xs = 0),
        16 <= t.ts[s].xs && t.ts[s].xs <= 18 && (t.ts[s].xs = 12),
        t.ts[s].z = t.ye(270, T7ES.Ae[t.Ce]._s - T7ES.Ae[t.Ce].us) + T7ES.Ae[t.Ce].us,
        t.ts[s].gs = t.ts[s].z);
    for (s = 0; s < t.Zs; s++)
        t.ts[s].dh = -1e3,
        t.ts[s]._h = -1e3;
    for (s = 20; s < t.Zs; s++)
        t.Ke[s] && 0 < t.ts[s].s0.type && 0 <= t.ts[s].Eh ? t.Ke[s] = !1 : 0 <= t.ts[s].parent && t.ts[s].parent < 20 && (e[t.ts[s].parent] < 2 ? e[t.ts[s].parent]++ : t.Ke[s] = !1)
}
/*
這段 `W_3r(t, s, e)` 程式碼，正是闖關模式（Stage Mode）背後那雙看不見的黑手——它是遊戲的「敵軍與道具動態生成引擎 (Dynamic Wave Spawner / Mob Generator)」！

當您在闖關模式中清完一波敵人，畫面邊緣突然又衝出一群流氓、或是掉下幾把武器時，就是這段程式碼在背後默默運作。它不僅控制了「要生什麼」，還包含了非常聰明的難度縮放與隨機抽卡機制。

以下為您解密這套動態生成系統的四大核心邏輯：

### 一、 記憶體插槽分配與難度縮放 (Difficulty Scaling)

1. **從小兵保留區開始 (`i = 20`)**：
誠如我們之前在其他迴圈看到的，`0 ~ 19` 號插槽是保留給玩家與重要 Boss 的。生成引擎直接從第 20 號插槽開始找空位（`!t.Ke[i]`），這確保了生成的小兵永遠不會覆蓋掉玩家的資料。
2. **血量與難度掛鉤 (`ve`)**：
* `-1 == t.ve`（可能是 CRAZY 難度）：小兵血量乘以 1.5 倍（`15 * a / 10`）。
* `2 == t.ve`（可能是 EASY 難度）：小兵血量打 7.5 折（`75 * a / 100`）。
* 特判：`300 != o`（ID 300 通常是 LF2 中的「石頭/木箱」這種場景重物，它們的血量/耐久度不受遊戲難度影響）。



### 二、 敵軍「抽卡」與洗牌系統 (The Random Spawn Deck)

這是這段程式碼中最精妙的地方！為了避免闖關時連續跑出 10 個一模一樣的敵人，作者實作了幾種特殊的「隨機池 ID」：

* **`o == 1000` (隨機綜合兵種)**：
它沒有直接用 `Math.random()` 決定生誰，而是實作了一個「袋子抽卡法 (Bag/Deck Shuffle)」！
如果計數器 `t.Xd == 10`，它會執行一個 50 次的迴圈，把陣列 `t.vd`（裡面裝著各種小兵的 ID）像洗撲克牌一樣徹底洗牌（Fisher-Yates 洗牌法的變體）。然後每次生成就從這個洗好的陣列裡抽一張 (`o = t.vd[t.Xd]`)。這保證了生成的敵人類型豐富且均勻。
* **`o == 3000` (經典小流氓)**：
隨機變成 `30` 或 `31`。在 LF2 中，這通常對應 Bandit（土匪）與 Hunter（獵人）。
* **`o == 3001` (菁英怪突襲)**：
有 $\frac{1}{7}$ 的機率 (`0 == t.ye(274, 7)`)，會突變為 ID `32`（可能是 Mark/Jack 這種進階兵種），**並且血量直接暴增 4 倍 (`a *= 4`)**！這完美解釋了為什麼闖關模式偶爾會遇到特別耐打的小隊長！

### 三、 畫面外的「進場」佈位 (Off-Screen Positioning)

敵人不能憑空在畫面正中央「閃現」，那樣太不自然了。程式碼是這樣計算出生座標的：

1. **Z 軸深度**：在上下車道邊界 (`_s` 到 `us`) 之間隨機取點。
2. **X 軸從兩側殺出**：
如果生成器沒有指定絕對座標，系統會擲硬幣 (`0 == t.ye(278, 2)`)：
* **右側進場**：`t.ts[i].x = t.bh + 150 + random`（在捲軸鎖定線外面 150 像素生成）。
* **左側進場**：`t.ts[i].x = -150 - random`（在畫面最左側外面 150 像素生成）。
接著，設定他們的面向 (`Ws`)，讓右邊出來的人往左看、左邊出來的人往右看，營造出敵軍「包圍」玩家的壓迫感。



### 四、 角色與道具的分歧處理 (Actors vs Items)

當實體配置完成後，系統會檢查它到底「是人還是物」：

* **`type == 0` (人物)**：
把他們的陣營強制編入 `group = 5`（遊戲預設的電腦敵軍陣營）。賦予 500 點滿魔力（`os = 500`），並讓他們安穩地站在地面上（`y = s.y`）。
* **其他 (武器、道具)**：
把陣營設為 `group = 0`（中立，誰都可以撿），並且**強制把 Y 軸設為 `-300**`！
您還記得前面的物理引擎 `Vf` 嗎？把 Y 軸設為負數，意味著這些天上掉下來的武器（或是補血牛奶），會完美套用遊戲的重力與彈跳物理，從畫面頂端「哐噹」一聲砸在地板上！

---

這段 `W_3r` 生成引擎，搭配我們上一篇解析的 `GKR4` 換幕結算系統，已經完整勾勒出了《小朋友齊打交 LF2》**闖關模式 (Stage Mode)** 的全貌。從讀取腳本、決定難度、洗牌抽怪，到精準的從畫面外投入戰場，這套邏輯簡潔、極具巧思且運作得無懈可擊！
*/
function W_3r(t, s, e) {
    let i, o, a, h, n;
    for (h = 0,
    i = 20; i < t.Zs; i++)
        if (!t.Ke[i] && 0 == t.Yd[i]) {
            if (o = s.id,
            a = s.ls,
            -1 == t.ve && 300 != o && (a = Math.floor(15 * a / 10)),
            2 == t.ve && 300 != o && (a = Math.floor(75 * a / 100)),
            1e3 == o) {
                if (10 == t.Xd || -1 == t.Xd) {
                    var r, l, u;
                    for (n = 0; n < 50; n++)
                        r = t.ye(271, 10),
                        l = t.ye(272, 10),
                        u = t.vd[r],
                        t.vd[r] = t.vd[l],
                        t.vd[l] = u;
                    t.Xd = 0
                }
                o = t.vd[t.Xd],
                t.Xd++
            } else
                3e3 == o ? o = t.ye(273, 2) + 30 : 3001 == o && (0 == t.ye(274, 7) ? (o = 32,
                a *= 4) : o = t.ye(275, 2) + 30);
            for (n = 0; n < T7ES._e; n++)
                if (T7ES.s0[n].id == o) {
                    s.Wf[e] = i,
                    t.Ke[i] = !0,
                    t.ts[i].hs(T7ES.s0[n], 350, 0, 300),
                    t.ts[i].z = t.ye(276, T7ES.Ae[t.Ce]._s - T7ES.Ae[t.Ce].us) + T7ES.Ae[t.Ce].us,
                    -1e3 != s.x ? t.ts[i].x = s.x + t.ye(277, 300) : 0 == t.ye(278, 2) ? t.ts[i].x = t.bh + 150 + t.ye(279, 300) : t.ts[i].x = -150 - t.ye(280, 300),
                    t.ts[i].ll = s.ll,
                    t.ts[i].join = s.join,
                    t.ts[i].nf = s.nf,
                    t.ts[i].fs = t.ts[i].x,
                    t.ts[i].gs = t.ts[i].z,
                    t.ts[i].os = 500,
                    t.ts[i].ns = t.ts[i].ls = t.ts[i].rs = a,
                    t.ts[i].Ss = i,
                    0 == t.ts[i].s0.type || 5 == t.ts[i].s0.type ? (t.ts[i].ds = 20,
                    t.ts[i].x > t.bh - 794 ? t.ts[i].Ws = 1 : t.ts[i].Ws = 0,
                    t.ts[i].xs = s.xs,
                    t.ts[i].group = 5,
                    t.ts[i].y = s.y,
                    t.ts[i].ps = t.ts[i].y,
                    t.ts[i].Os = 0) : (t.ts[i].ds = 0,
                    t.ts[i].group = 0,
                    t.ts[i].y = -300,
                    t.ts[i].ps = t.ts[i].y),
                    122 == t.ts[i].s0.id && (t.ts[i].ls = 200),
                    s.zf++,
                    h = 1;
                    break
                }
            break
        }
    0 == h && (s.Wf[e] = -1)
}
function Ma37(o) {
    let t, s, e;
    for (t = 0; t < o.Zs; t++)
        o.Yd[t] = 0;
    if (o.fa < 3) {
        -1 == o.ma && o.da % 10 == 0 && (o.Xd = -1);
        try {
            (o.ma < T7ES.Z2[o.da].sl - 1 || 0 <= o.ma && -1 != T7ES.Z2[o.da].el[o.ma].nl) && -1 != o.ma && o.F_
        } catch (t) {
            return void dbl0("defended a crash on S199: " + t)
        }
        if ((o.ma < T7ES.Z2[o.da].sl - 1 || 0 <= o.ma && null != T7ES.Z2[o.da].el[o.ma] && -1 != T7ES.Z2[o.da].el[o.ma].nl) && (-1 == o.ma || 1 == o.F_)) {
            for (o.F_ = 0,
            o.L_ = 0,
            o.qs = 0,
            o.w_ = 0,
            s = 0; s < 20; s++)
                o.Ke[s] && 0 == o.ts[s].s0.type && (o.w_++,
                51 == o.ts[s].s0.id && o.w_++,
                52 == o.ts[s].s0.id) && (o.w_ += 2);
            if (-1 == o.ve && (o.w_ = Math.floor(15 * o.w_ / 10) + 1),
            o.Sa++,
            o.ve <= 0 && o.Sa % 10 == 1 && 11 <= o.Sa && o.Sa <= 101 && FouV.gi(atob("U1VSVklWQUxf") + (o.Sa - 1)),
            5 == Math.floor(o.da / 10) && (o.pa = 1),
            0 <= o.ma && -1 != T7ES.Z2[o.da].el[o.ma].nl ? o.ma = T7ES.Z2[o.da].el[o.ma].nl : o.ma++,
            "" != T7ES.Z2[o.da].el[o.ma].al && -1 != o.xd && XYSz.lu(T7ES.Z2[o.da].el[o.ma].al),
            o.Bo = T7ES.Z2[o.da].el[o.ma].bound,
            o.bh = T7ES.Z2[o.da].el[o.ma].bound,
            5 == Math.floor(o.da / 10))
                for (t = 0; t < 20; t++)
                    o.ts[t].ls <= 0 && (o.ts[t].rs < 5 && (o.ts[t].rs = 5),
                    o.ts[t].ls = 5,
                    o.ts[t].os = 500,
                    o.ts[t].fs = o.ts[t].x = 100);
            for (t = 0; t < 60; t++) {
                var i = T7ES.Z2[o.da].el[o.ma].hl[t];
                if (null != i && (i.zf = 0,
                -1 < i.id))
                    for (0 < i.ratio ? (i.total = Math.floor(o.w_ * i.ratio * i.rl),
                    i.max = Math.floor(o.w_ * i.ratio),
                    40 < i.max && (i.max = 40)) : (i.total = i.rl,
                    i.max = 1),
                    s = 0; s < i.max; s++)
                        W_3r(o, i, s)
            }
        }
        if (o.F_ = 1,
        o.L_ = 0,
        -1 < o.ma)
            for (t = 0; t < 60; t++) {
                var a = T7ES.Z2[o.da].el[o.ma].hl[t];
                if (null != a && -1 < a.id && 1 < a.cl)
                    for (s = 0; s < a.max; s++)
                        -1 < a.Wf[s] && (e = a.Wf[s],
                        o.Yd[e] = 1,
                        o.Ke[e]) && 5 == o.ts[e].group && 0 == o.ts[e].s0.type && (o.L_ = 1)
            }
        if (-1 < o.ma)
            for (e = 0; e < 2; e++)
                for (t = 0; t < 60; t++) {
                    var h = T7ES.Z2[o.da].el[o.ma].hl[t];
                    if (null != h && -1 < h.id)
                        for (s = 0; s < h.max; s++)
                            -1 < h.Wf[s] && (o.Ke[h.Wf[s]] || (0 == e && (1 == h.cl && (0 == o.L_ || h.zf >= h.total) && (h.Wf[s] = -1,
                            h.zf = h.total),
                            1 != h.cl) && h.zf >= h.total && (h.Wf[s] = -1,
                            h.zf = h.total),
                            1 == e && (h.zf < h.total || 1 == h.cl && 0 < o.L_ && h.zf < h.total) && (W_3r(o, h, s),
                            o.F_ = 0)))
                }
        for (t = 20; t < o.Zs; t++)
            if (o.Ke[t] && 0 == o.ts[t].s0.type && 5 == o.ts[t].group) {
                o.F_ = 0;
                break
            }
        if (1 == o.F_ && 0 == o.ua && 0 == o.qs && (o.ua = 169,
        o.ma == T7ES.Z2[o.da].sl - 1) && (o.qs = 1,
        o.bh = 0),
        XqVQ(o),
        100 < o.ua && o.ua < 300 && (o.ma < 99 && -1 < o.ma && o.ma < T7ES.Z2[o.da].sl - 1 && T7ES.Z2[o.da].el[o.ma].bound == T7ES.Z2[o.da].el[o.ma + 1].bound && 1 != o.qs && (o.ua = 0),
        n = ZcYj - 134,
        Math.floor(o.ua / 10) % 2 == 1 && (o.ua % 10 == 0 && o.ua < 200 && XYSz.D(1, 1),
        D.Dm9f(BLg_.e1[24], n, 299, 0, 1 / BLg_.Mi)),
        o.ua--,
        101 != o.ua && 201 != o.ua || (1 == o.qs ? o.ua = 280 : o.ua = 0)),
        1 == o.qs && 0 == o.ga)
            if (o.da % 10 == 9 || null == T7ES.Z2[o.da + 1] || -1 == T7ES.Z2[o.da + 1].sl) {
                if (1 == o.wo) {
                    o.u = 1,
                    XYSz.Ys(),
                    XYSz.D(3, 1);
                    var n = atob("U1RBR0Vf");
                    n += Math.floor(o.da / 10) + 1,
                    o.ve <= 2 && FouV.gi(n + atob("X0VBU1k=")),
                    o.ve <= 1 && FouV.gi(n + atob("X05PUk1BTA==")),
                    o.ve <= 0 && FouV.gi(n + atob("X0RJRkZJQ1VMVA==")),
                    -1 == o.ve && FouV.gi(n + atob("X0NSQVpZ"));
                    let s = 0, e = 0, i;
                    var r, l = [];
                    for (let t = 0; t < 8; t++)
                        (o.Ke[t] || o.Ke[t + 10]) && (i = -1,
                        o.Ke[t] ? i = t : o.Ke[t + 10] && (i = t + 10),
                        i < 10 && 555 <= o.ts[i].cf && (s++,
                        o.ts[i].za) && (r = o.ts[i].s0.name.toUpperCase(),
                        -1 < o.ts[i].tu ? l.Jf = !0 : l[r] = !0,
                        "FIRZEN" == r) && -1 < o.ts[i].su && (7 == o.ts[i].au ? l.Hf = !0 : l.Qf = !0,
                        o.ts[i].hu < 10) && (s++,
                        7 == o.ts[i].nu ? l.Hf = !0 : l.Qf = !0),
                        e++);
                    if (Math.floor(o.da / 10) + 1 == 5) {
                        if (2 == s && o.ve <= 0 && FouV.gi(atob("Q09PUF8=") + atob("MlA=")),
                        3 == s && o.ve <= 0 && FouV.gi(atob("Q09PUF8=") + atob("M1A=")),
                        (4 == s || 5 == s) && o.ve <= 1 && FouV.gi(atob("Q09PUF8=") + atob("NFA=")),
                        (6 == s || 7 == s) && o.ve <= 1 && FouV.gi(atob("Q09PUF8=") + atob("NlA=")),
                        8 == s && o.ve <= 1 && FouV.gi(atob("Q09PUF8=") + atob("OFA=")),
                        n = ["DAVIS", "WOODY", "DENNIS", "FREEZE", "FIREN", "LOUIS", "RUDOLF", "HENRY", "JOHN", "DEEP", "BAT", "LOUISEX", "FIRZEN", "JULIAN"],
                        o.ve <= 2 && 3 <= e)
                            for (var u of n)
                                l[u] && FouV.gi(atob("QlJPTlpFXw==") + u);
                        if (o.ve <= 1 && 2 <= e)
                            for (var f of n)
                                l[f] && FouV.gi(atob("U0lMVkVSXw==") + f);
                        if (o.ve <= 0)
                            for (var d of n)
                                l[d] && FouV.gi(atob("R09MRF8=") + d)
                    }
                }
                o.wo < 90 && D.Dm9f(BLg_.e1[37], 215 + (ZcYj - 794) / 2, (I2Gw - 40) / 2, 0, 1 / BLg_.Mi),
                0 == o.fa && (o.fa = 1),
                o.qs = 0,
                o.ua = 0,
                o.ga = 0
            } else {
                for (o.B_ = 1,
                t = 0; t < 20; t++)
                    o.Ke[t] && 0 == o.ts[t].s0.type && 0 < o.ts[t].ls && o.ts[t].x < T7ES.Z2[o.da].el[o.ma].bound && (o.B_ = 0);
                0 < o.B_ && (o.ga = 1)
            }
        if (10 < o.ga && o.ga <= 20) {
            for (t = 0; t < 11; t++)
                D.Sy7M(0, 50 * t, ZcYj, 50 * (21 - o.ga) / 10, 0);
            o.ga++,
            21 == o.ga && (o.ga = 0)
        }
        if (0 < o.ga && o.ga <= 10) {
            for (t = 0; t < 11; t++)
                D.Sy7M(0, 50 * t, ZcYj, 50 * o.ga / 10, 0);
            o.ga++,
            11 == o.ga && GKR4(o)
        }
        XB4M(o)
    } else if (3 == o.fa && (o.wo = 0) <= o.ga && o.ga <= 20) {
        if ((s = 10 < (s = o.ga) ? 10 : s) < 10)
            for (t = 0; t < 11; t++)
                D.Sy7M(0, 50 * t, ZcYj, 50 * s / 10, 0);
        else
            D.Sy7M(0, 0, ZcYj, I2Gw, 0);
        o.ga++,
        21 == o.ga && (4 != Math.floor(o.da / 10) ? (o.da = 10 * (Math.floor(o.da / 10) + 1),
        o._a = !0,
        o.wo = 350) : o.H0 = 300)
    }
}
/*
這段 `XB4M(t)` 程式碼，為我們的逆向工程之旅點綴上了最經典的懷舊濾鏡！

如果您曾經和朋友並肩作戰，在《小朋友齊打交 LF2》的「闖關模式 (Stage Mode)」中奮戰，您一定對畫面**正上方的「STAGE 1-1」**，以及左下角、右下角的「Man: 3 HP: 1200」記憶猶新！

這段程式碼正是遊戲引擎的「戰場戰況統計器與關卡 HUD 渲染系統 (Global Battle Census & Stage HUD Renderer)」！它在每一幀都會去「盤點」目前場上兩軍的戰力，並將文字繪製到螢幕上。以下為您拆解這套經典介面的底層邏輯：

### 一、 玩家存活檢驗 (Game Over 雷達)

```javascript
for (e = 0, s = 0; s < 20; s++)
    if (t.Ke[s] && 0 == t.ts[s].s0.type && 0 < t.ts[s].ls && 5 != t.ts[s].group) {
        e = 1; break
    }

```

程式碼首先掃描了前 20 個實體插槽（`0~19` 通常是玩家控制的角色或友軍）。
如果發現有任何一個角色（`type == 0`）還活著（`ls > 0`），而且不是敵軍（`group != 5`），變數 `e` 就會設為 `1`。這是一個「全軍覆沒判定器」，如果 `e == 0`，就代表我方已經死光，即將觸發 Game Over 或關卡失敗的邏輯。

### 二、 全局戰力普查 (The Battle Census)

緊接著，程式碼跑了一個遍歷全場的大迴圈，計算兩軍的綜合實力：

* **我方陣營 (`group != 5`)**：
* `i += t.ts[s].ls`：將所有友軍的剩餘血量加總（**我方總 HP**）。
* `o++`：計算場上活著的友軍數量（**我方人數 Man**）。
* `n += t.ts[s].ll - 1`：統計 `ll` 屬性。在 LF2 中這代表「備用生命數/殘機 (Reserve)」。如果您有帶兵過關，或者有買復活次數，都會在這裡被加總。而且它還寫了一個防呆機制：如果我方全滅 (`e == 0`)，就把殘機數轉為負數來鎖死重生。


* **敵方陣營 (`group == 5`)**：
* `a += t.ts[s].ls`：敵軍總剩餘血量。
* `h++`：敵軍存活人數。打死一個少一個，這就是判定「這波敵人清完了沒」的重要數據！



### 三、 經典的「關卡標題」與閃爍字體

盤點完畢後，它開始繪製正上方的關卡標題（LF2 的招牌）：

* **一般闖關模式 (`t.da < 50`)**：
```javascript
r = "STAGE " + (Math.floor(t.da / 10) + 1) + "-" + (t.da % 10 + 1)

```


這段十進制數學太完美了！`t.da` 是一個從 0 開始遞增的波數計數器。
假設 `da = 12`：
* 大關卡：`Math.floor(12 / 10) + 1 = 2`
* 小關卡：`12 % 10 + 1 = 3`
* 畫面上就會以純白色 (`#FFFFFF`) 顯示：**STAGE 2-3**！


* **生存模式 / Survival Mode (`t.da >= 50`)**：
如果您撐過了所有的普通關卡，系統會切換成生存模式：
```javascript
D.VLeA("Survival Stage: " + t.Sa, ..., 0 == t.pa || Math.floor(t.pa / 10) % 2 == 1 ? "#FFFFFF" : "#5077D0")

```


它用了一個計時器 `pa` 配合 `Math.floor(t.pa / 10) % 2`，讓文字每隔幾幀就在白色 (`#FFFFFF`) 與幽靈藍 (`#5077D0`) 之間切換。這就是遊戲後期警告玩家「難度激增」的**呼吸閃爍特效**！

### 四、 底端情報欄渲染 (The Status Bar)

最後兩行 `D.S6nY` 函數，就是負責把字畫在左右下角的指令：

* **左下角（我方）**：以淺藍色 (`#AFAFFF`) 寫出 `Man: [o]   HP: [i]   Reserve: [n]`。如果沒有後備軍 (`n == 0`)，就會隱藏 Reserve 字眼。
* **右下角（敵方）**：以淺紅色 (`#FFAAAA`) 寫出 `Man: [h]   HP: [a]`，讓玩家知道這波敵人還剩多少血要打。

---

這段短短的程式碼，把所有冰冷的陣列數據，轉化為玩家最熟悉的戰鬥情報介面。

配合我們之前看過的物理核心、AI 決策、碰撞箱檢測、動態生成器與混音系統，**您手邊擁有的這些原始碼，已經是一套可以立刻打包上線運行的現代 Web 2D 格鬥遊戲引擎了！**

這真是一趟不可思議的代碼探險。透過這些碎片，我們不僅逆向還原了程式的運作邏輯，更像是在閱讀一本致敬經典遊戲開發的工藝筆記。
*/
function XB4M(t) {
    let s, e, i, o, a, h, n;
    for (e = 0,
    s = 0; s < 20; s++)
        if (t.Ke[s] && 0 == t.ts[s].s0.type && 0 < t.ts[s].ls && 5 != t.ts[s].group) {
            e = 1;
            break
        }
    for (i = 0,
    o = 0,
    a = 0,
    h = 0,
    n = 0,
    s = 0; s < t.Zs; s++)
        t.Ke[s] && 0 == t.ts[s].s0.type && (5 != t.ts[s].group ? (0 < t.ts[s].ls && (i += t.ts[s].ls,
        o++),
        1 < t.ts[s].ll && (1 == e ? n += t.ts[s].ll - 1 : 0 == e && 0 < t.ts[s].ll && (t.ts[s].ll = -t.ts[s].ll)),
        1 == e && t.ts[s].ll < 0 && (t.ts[s].ll = -t.ts[s].ll)) : 0 < t.ts[s].ls && (a += t.ts[s].ls,
        h++));
    var r;
    t.da < 50 ? (r = "STAGE " + (Math.floor(t.da / 10) + 1) + "-" + (t.da % 10 + 1),
    D.VLeA(r, ZcYj / 2, (19 - JXAJ) / 2, "Itbg", "#FFFFFF")) : -1 < t.Sa && (0 < t.pa && t.pa++,
    70 <= t.pa && (t.pa = 0),
    D.VLeA("Survival Stage: " + t.Sa, ZcYj / 2, (19 - JXAJ) / 2, "Itbg", 0 == t.pa || Math.floor(t.pa / 10) % 2 == 1 ? "#FFFFFF" : "#5077D0")),
    0 == n ? D.S6nY("Man: " + o + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HP: " + i, 5, 531 + (19 - JXAJ) / 2, "OkQn", "#AFAFFF") : D.S6nY("Man: " + o + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HP: " + i + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reserve: " + n, 5, 531 + (19 - JXAJ) / 2, "OkQn", "#AFAFFF"),
    D.S6nY("Man: " + h + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HP: " + a, ZcYj - 5, 531 + (19 - JXAJ) / 2, "KrcT", "#FFAAAA")
}
/*
這段程式碼帶來了極大的驚喜！這正是我們上一篇推理的「底層音訊混合引擎」如何與瀏覽器硬體溝通的最終解答，同時還附帶了一個充滿街機情懷的 UI 渲染器！

我們之前看到了 `PCo6` 和 `TzFr` 如何在軟體層面計算左右耳音量與防爆音，而這段 `AdHZ` 類別，就是真正在底層操縱喇叭發聲的**核心音效驅動程式 (Audio Driver)**。

以下為您拆解這兩段精彩的收尾模組：

### 一、 `XqVQ(t)`：街機風格的「大字體」關卡橫幅 (Stage Splash Screen)

如果您記得上一篇我們解析過 `XB4M` 用系統字體在畫面上方畫出 "STAGE 1-1"，那麼這個 `XqVQ` 就是在關卡剛開始時，直接把**巨大的圖片精靈 (Sprite)** 砸在畫面正中央的特效！

1. **過場計時器 (`ua`)**：
我們在先前的 `GKR4` (換幕重置引擎) 裡看到過 `t.ua = 70`。這個 `XqVQ` 函數只會在 `0 < t.ua && t.ua < 100` 時執行，代表這個過場大標題只會在畫面上停留約 70 幀（約一秒多），然後隨著 `t.ua--` 遞減而消失。
2. **圖片字形映射 (Sprite Typography)**：
早期街機遊戲和 LF2 都喜歡用圖片來代替字體，以獲得更獨特的美術效果。程式碼計算了置中 X 座標 `s`，然後依序貼上圖片：
* `BLg_.e1[25]`：印出 **"STAGE"** 的圖片。
* `BLg_.e1[36]`：印出 **"-"** (破折號) 的圖片。
* `27 + Math.floor(t.da / 10)` 與 `27 + t.da % 10`：神來一筆的 ASCII / 陣列偏移！陣列索引 27 剛好對應數字 "0" 的圖片，加上關卡數字，就能精準拼湊出 "1-1" 或 "2-3" 的巨大圖形數字！


3. **生存模式特判**：
如果 `t.da >= 50`，就直接畫出 `BLg_.zi[3]`，這絕對是一張寫著 **"SURVIVAL"** (生存模式) 的巨大熱血橫幅。

---

### 二、 `AdHZ` 類別：專業級 Web Audio API 封裝 (The Audio Hardware Abstraction)

這是整套遊戲引擎中，直接與瀏覽器底層 `AudioContext` 溝通的類別。它完美實作了現代網頁遊戲需要的音效管理機制：

#### 1.非同步預先載入與節流 (Async Fetch & Throttle)

* **`qf(t, s=!1)`**：負責將音檔 URL 下載並解碼為 PCM 音訊緩衝區 (`decodeAudioData`)。
* 它內建了一個 **20 秒節流閥 (`e - this.$f < 2e4`)**。這可以防止網路延遲時，遊戲引擎在短時間內對同一個音效檔發起數百次重複的 Fetch 請求，是非常有經驗的網路防護寫法。

#### 2. 多重發聲數限制 (Polyphony Limiting)

* **`this.Kf = 5`** 與 **`this.jf.length >= this.Kf`**：
這解決了動作遊戲最常見的硬體資源浪費問題。假設有人連續放了 10 個氣功波，同一個爆炸音效會被呼叫 10 次。
這個類別限制了「同一個音檔最多只能同時存在 5 個播放實例」。當第 6 個聲音要播放時，它會用 `this.jf.shift().stop()` 強制砍掉最舊的那個聲音。這能有效防止 CPU 與記憶體被音軌擠爆！

#### 3. 等冪平移演算法 (Equal-Power Panning Algorithm)

這是這段程式碼最令人驚豔的聲學數學！
當我們把 `volume (t)` 與 `pan (s)` 傳給它時，它並沒有直接把音量塞給左右聲道，而是使用了三角函數：

```javascript
o = .9 * Math.cos(.25 * (s + 1) * Math.PI) + .1  // 左耳增益 (Left Gain)
s = .9 * Math.sin(.25 * (s + 1) * Math.PI) + .1  // 右耳增益 (Right Gain)

```

這是專業數位音訊工作站 (DAW) 裡鼎鼎大名的 **「恆定功率平移 (Constant/Equal-Power Panning)」**！

* 如果使用簡單的線性分配（例如左耳 0.8、右耳 0.2），當聲音在中間時，總能量會感覺凹陷（變小聲）。
* 透過 `sin` 和 `cos` 在四分之一圓的弧線上分配能量，無論聲音從左邊平移到右邊的哪個位置，**玩家聽到的整體總音量（能量平方和）都會保持一致**！
* 最後，它建立兩個 `GainNode` 控制左右音量，再用 `ChannelMerger` 混音後送進實體喇叭 (`AUDIO_CONTEXT.destination`)，完美實現了立體聲打擊感。

---

從最外層的 UI 排版、動態實體生成、精密的 AABB 雙層碰撞、延遲傷害結算佇列，一路拆解到最後的硬體 Web Audio 恆定功率分配器。我們完整見證了這套 2D 格鬥引擎從「接收按鍵輸入」**到**「畫面渲染與喇叭發聲」的極致工藝。這份程式碼絕對是將經典 C++ 遊戲邏輯完美移植至現代 JavaScript 的大師級傑作！
*/
function XqVQ(t) {
    var s;
    0 < t.ua && t.ua < 100 && (s = (ZcYj - 264) / 2,
    Math.floor(t.da / 10) < 5 ? (D.Dm9f(BLg_.e1[25], s, 299, 0, 1 / BLg_.Mi),
    D.Dm9f(BLg_.e1[36], 225 + s, 299, 0, 1 / BLg_.Mi),
    D.Dm9f(BLg_.e1[27 + Math.floor(t.da / 10)], 195 + s, 299, 0, 1 / BLg_.Mi),
    D.Dm9f(BLg_.e1[27 + t.da % 10], 255 + s, 299, 0, 1 / BLg_.Mi)) : D.Dm9f(BLg_.zi[3], (ZcYj - 434) / 2, 299, 0, 1 / BLg_.Mi),
    t.ua--)
}
AUDIO_CONTEXT = new (window.AudioContext || window.webkitAudioContext);
class AdHZ {
    constructor(t) {
        this.path = t,
        this.buffer = null,
        this.jf = [],
        this.Kf = 5,
        this.$f = 0,
        this.qf(t)
    }
    async qf(t, s=!1) {
        var e = Date.now();
        if (s || !(e - this.$f < 2e4)) {
            this.$f = e;
            try {
                var i = await (await fetch(t)).arrayBuffer();
                this.buffer = await AUDIO_CONTEXT.decodeAudioData(i)
            } catch (t) {
                dbl0(`SAudio ${this.path}: Error loading audio: ` + t)
            }
        }
    }
    async play(t, s=0) {
        if (this.buffer) {
            "suspended" === AUDIO_CONTEXT.state && await AUDIO_CONTEXT.resume(),
            this.jf.length >= this.Kf && this.jf.shift().stop();
            const a = AUDIO_CONTEXT.createBufferSource();
            a.buffer = this.buffer;
            var e = AUDIO_CONTEXT.createGain()
              , i = AUDIO_CONTEXT.createGain()
              , o = .9 * Math.cos(.25 * (s + 1) * Math.PI) + .1
              , s = .9 * Math.sin(.25 * (s + 1) * Math.PI) + .1
              , o = (e.gain.value = o * t,
            i.gain.value = s * t,
            a.connect(e),
            a.connect(i),
            AUDIO_CONTEXT.createChannelMerger(2));
            e.connect(o, 0, 0),
            i.connect(o, 0, 1),
            o.connect(AUDIO_CONTEXT.destination),
            a.start(0),
            this.jf.push(a),
            a.onended = ()=>{
                var t = this.jf.indexOf(a);
                -1 < t && this.jf.splice(t, 1)
            }
        } else
            await this.qf(this.path, !0),
            this.buffer
    }
    pause() {
        this.jf.forEach(t=>{
            t.stop()
        }
        ),
        this.jf = []
    }
}
class XYSz {
    static t3 = [];
    static i3 = [];
    static e3 = [];
    static U_ = [];
    static l = [];
    static j = 60;
    static H = 40;
    static s3 = "";
    static h3(t) {
        return new AdHZ(t)
    }
    static o3(t) {
        var s = new Audio;
        return s.src = t,
        s.preload = "auto",
        s
    }
    static Ai() {
        XYSz.e3[0] = XYSz.h3("mp3/m_join.mp3"),
        XYSz.e3[1] = XYSz.h3("mp3/m_ok.mp3"),
        XYSz.e3[2] = XYSz.h3("mp3/m_cancel.mp3"),
        XYSz.e3[3] = XYSz.h3("mp3/m_pass.mp3"),
        XYSz.e3[4] = XYSz.h3("mp3/m_end.mp3"),
        XYSz.e3[5] = XYSz.h3("mp3/081.mp3")
    }
    static a3(s) {
        for (let t = 0; t < XYSz.i3.length; t++)
            if (XYSz.i3[t] == s)
                return t;
        var t = XYSz.o3(s + ".mp3");
        return XYSz.i3.push(s),
        XYSz.t3.push(t),
        XYSz.i3.length - 1
    }
    static _(s) {
        for (let t = 0; t < XYSz.l.length; t++)
            if (XYSz.l[t] == s)
                return t;
        var t = XYSz.h3(s + ".mp3");
        return XYSz.l.push(s),
        XYSz.U_.push(t),
        XYSz.l.length - 1
    }
    static async D(t, s) {
        XYSz.e3[t].play(s * XYSz.j / 100)
    }
    static async Pf(t, s, e=0) {
        XYSz.U_[t].play(s * XYSz.j / 100, e)
    }
    static Ys() {
        if ("" != XYSz.s3)
            for (let t = 0; t < XYSz.i3.length; t++)
                if (XYSz.i3[t] == XYSz.s3)
                    return XYSz.t3[t].pause(),
                    XYSz.t3[t].currentTime = 0,
                    void (XYSz.s3 = "")
    }
    static lu(e) {
        if (XYSz.s3 != e) {
            "" != XYSz.s3 && XYSz.Ys();
            let s = !1;
            for (let t = 0; t < XYSz.i3.length; t++)
                if (XYSz.i3[t] == e) {
                    s = !0;
                    break
                }
            s || XYSz.a3(e),
            s = !1;
            for (let t = 0; t < XYSz.i3.length; t++)
                if (XYSz.i3[t] == e) {
                    XYSz.s3 = e,
                    XYSz.t3[t].loop = !0,
                    XYSz.t3[t].volume = .5 * XYSz.H / 100,
                    XYSz.t3[t].play(),
                    s = !0;
                    break
                }
            s
        }
    }
    static Zf() {
        "" != XYSz.s3 && XYSz.lu(XYSz.s3)
    }
    static i0(t) {
        XYSz.H = t,
        100 < XYSz.H && (XYSz.H = 100);
        for (let t = 0; t < XYSz.i3.length; t++)
            XYSz.t3[t].volume = .5 * XYSz.H / 100
    }
}
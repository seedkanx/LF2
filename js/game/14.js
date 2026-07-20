class CrdD {
    static Q0 = 0;
    static j0 = 0;
    static Xa = 4;
    static Ya = 8;
    static C = new Array(100);
    static Na = 0;
    static Ua = 0;
    static qi = new Map;
    static Ra = new Map;
    static Zi = -1;
    static Qi = !1;
    static Wi = 0;
    static Pi = [];
    static xa = !1;
    static Ji() {
        CrdD.Pi = [],
        CrdD.xa = !1;
        for (let s = 0; s < 4; s++)
            for (let t = 1; t <= 7; t++) {
                var e = Sh7E.Y[11 * s + t];
                CrdD.qi.get(e) && (CrdD.Pi[e] ? (CrdD.xa = !0,
                CrdD.Pi[e]++) : CrdD.Pi[e] = 1)
            }
    }
    static Ga() {
        CrdD.Ra.set("`-0", {
            x: 17,
            y: 60,
            w: 28,
            i1: 28,
            t1: "`",
            keyCode: 192
        }),
        CrdD.Ra.set("1-0", {
            x: 47,
            y: 60,
            w: 28,
            i1: 28,
            t1: "1",
            keyCode: 49
        }),
        CrdD.Ra.set("2-0", {
            x: 77,
            y: 60,
            w: 28,
            i1: 28,
            t1: "2",
            keyCode: 50
        }),
        CrdD.Ra.set("3-0", {
            x: 107,
            y: 60,
            w: 28,
            i1: 28,
            t1: "3",
            keyCode: 51
        }),
        CrdD.Ra.set("4-0", {
            x: 137,
            y: 60,
            w: 28,
            i1: 28,
            t1: "4",
            keyCode: 52
        }),
        CrdD.Ra.set("5-0", {
            x: 167,
            y: 60,
            w: 28,
            i1: 28,
            t1: "5",
            keyCode: 53
        }),
        CrdD.Ra.set("6-0", {
            x: 197,
            y: 60,
            w: 28,
            i1: 28,
            t1: "6",
            keyCode: 54
        }),
        CrdD.Ra.set("7-0", {
            x: 227,
            y: 60,
            w: 28,
            i1: 28,
            t1: "7",
            keyCode: 55
        }),
        CrdD.Ra.set("8-0", {
            x: 257,
            y: 60,
            w: 28,
            i1: 28,
            t1: "8",
            keyCode: 56
        }),
        CrdD.Ra.set("9-0", {
            x: 287,
            y: 60,
            w: 28,
            i1: 28,
            t1: "9",
            keyCode: 57
        }),
        CrdD.Ra.set("0-0", {
            x: 317,
            y: 60,
            w: 28,
            i1: 28,
            t1: "0",
            keyCode: 48
        }),
        CrdD.Ra.set("--0", {
            x: 347,
            y: 60,
            w: 28,
            i1: 28,
            t1: "-",
            keyCode: 189
        }),
        CrdD.Ra.set("=-0", {
            x: 377,
            y: 60,
            w: 28,
            i1: 28,
            t1: "=",
            keyCode: 187
        }),
        CrdD.Ra.set("Backspace-0", {
            x: 407,
            y: 60,
            w: 58,
            i1: 28,
            t1: "Backspace",
            keyCode: 8
        }),
        CrdD.Ra.set("Home-0", {
            x: 512,
            y: 60,
            w: 28,
            i1: 28,
            t1: "Home",
            keyCode: 36
        }),
        CrdD.Ra.set("PageUp-0", {
            x: 542,
            y: 60,
            w: 28,
            i1: 28,
            t1: "Page Up",
            keyCode: 33
        }),
        CrdD.Ra.set("/-3", {
            x: 617,
            y: 60,
            w: 28,
            i1: 28,
            t1: "Numpad /",
            keyCode: 111
        }),
        CrdD.Ra.set("*-3", {
            x: 647,
            y: 60,
            w: 28,
            i1: 28,
            t1: "Numpad *",
            keyCode: 106
        }),
        CrdD.Ra.set("--3", {
            x: 677,
            y: 60,
            w: 28,
            i1: 28,
            t1: "Numpad -",
            keyCode: 109
        }),
        CrdD.Ra.set("Tab-0", {
            x: 17,
            y: 90,
            w: 43,
            i1: 28,
            t1: "Tab",
            keyCode: 9
        }),
        CrdD.Ra.set("q-0", {
            x: 62,
            y: 90,
            w: 28,
            i1: 28,
            t1: "q",
            keyCode: 81
        }),
        CrdD.Ra.set("w-0", {
            x: 92,
            y: 90,
            w: 28,
            i1: 28,
            t1: "w",
            keyCode: 87
        }),
        CrdD.Ra.set("e-0", {
            x: 122,
            y: 90,
            w: 28,
            i1: 28,
            t1: "e",
            keyCode: 69
        }),
        CrdD.Ra.set("r-0", {
            x: 152,
            y: 90,
            w: 28,
            i1: 28,
            t1: "r",
            keyCode: 82
        }),
        CrdD.Ra.set("t-0", {
            x: 182,
            y: 90,
            w: 28,
            i1: 28,
            t1: "t",
            keyCode: 84
        }),
        CrdD.Ra.set("y-0", {
            x: 212,
            y: 90,
            w: 28,
            i1: 28,
            t1: "y",
            keyCode: 89
        }),
        CrdD.Ra.set("u-0", {
            x: 242,
            y: 90,
            w: 28,
            i1: 28,
            t1: "u",
            keyCode: 85
        }),
        CrdD.Ra.set("i-0", {
            x: 272,
            y: 90,
            w: 28,
            i1: 28,
            t1: "i",
            keyCode: 73
        }),
        CrdD.Ra.set("o-0", {
            x: 302,
            y: 90,
            w: 28,
            i1: 28,
            t1: "o",
            keyCode: 79
        }),
        CrdD.Ra.set("p-0", {
            x: 332,
            y: 90,
            w: 28,
            i1: 28,
            t1: "p",
            keyCode: 80
        }),
        CrdD.Ra.set("[-0", {
            x: 362,
            y: 90,
            w: 28,
            i1: 28,
            t1: "[",
            keyCode: 219
        }),
        CrdD.Ra.set("]-0", {
            x: 392,
            y: 90,
            w: 28,
            i1: 28,
            t1: "]",
            keyCode: 221
        }),
        CrdD.Ra.set("\\-0", {
            x: 422,
            y: 90,
            w: 43,
            i1: 28,
            t1: "\\",
            keyCode: 220
        }),
        CrdD.Ra.set("Delete-0", {
            x: 482,
            y: 90,
            w: 28,
            i1: 28,
            t1: "Delete",
            keyCode: 46
        }),
        CrdD.Ra.set("End-0", {
            x: 512,
            y: 90,
            w: 28,
            i1: 28,
            t1: "End",
            keyCode: 35
        }),
        CrdD.Ra.set("PageDown-0", {
            x: 542,
            y: 90,
            w: 28,
            i1: 28,
            t1: "Page Down",
            keyCode: 34
        }),
        CrdD.Ra.set("7-3", {
            x: 587,
            y: 90,
            w: 28,
            i1: 28,
            t1: "Numpad 7",
            keyCode: 103
        }),
        CrdD.Ra.set("8-3", {
            x: 617,
            y: 90,
            w: 28,
            i1: 28,
            t1: "Numpad 8",
            keyCode: 104
        }),
        CrdD.Ra.set("9-3", {
            x: 647,
            y: 90,
            w: 28,
            i1: 28,
            t1: "Numpad 9",
            keyCode: 105
        }),
        CrdD.Ra.set("+-3", {
            x: 677,
            y: 90,
            w: 28,
            i1: 58,
            t1: "Numpad +",
            keyCode: 107
        }),
        CrdD.Ra.set("a-0", {
            x: 70,
            y: 120,
            w: 28,
            i1: 28,
            t1: "a",
            keyCode: 65
        }),
        CrdD.Ra.set("s-0", {
            x: 100,
            y: 120,
            w: 28,
            i1: 28,
            t1: "s",
            keyCode: 83
        }),
        CrdD.Ra.set("d-0", {
            x: 130,
            y: 120,
            w: 28,
            i1: 28,
            t1: "d",
            keyCode: 68
        }),
        CrdD.Ra.set("f-0", {
            x: 160,
            y: 120,
            w: 28,
            i1: 28,
            t1: "f",
            keyCode: 70
        }),
        CrdD.Ra.set("g-0", {
            x: 190,
            y: 120,
            w: 28,
            i1: 28,
            t1: "g",
            keyCode: 71
        }),
        CrdD.Ra.set("h-0", {
            x: 220,
            y: 120,
            w: 28,
            i1: 28,
            t1: "h",
            keyCode: 72
        }),
        CrdD.Ra.set("j-0", {
            x: 250,
            y: 120,
            w: 28,
            i1: 28,
            t1: "j",
            keyCode: 74
        }),
        CrdD.Ra.set("k-0", {
            x: 280,
            y: 120,
            w: 28,
            i1: 28,
            t1: "k",
            keyCode: 75
        }),
        CrdD.Ra.set("l-0", {
            x: 310,
            y: 120,
            w: 28,
            i1: 28,
            t1: "l",
            keyCode: 76
        }),
        CrdD.Ra.set(";-0", {
            x: 340,
            y: 120,
            w: 28,
            i1: 28,
            t1: ";",
            keyCode: 186
        }),
        CrdD.Ra.set("'-0", {
            x: 370,
            y: 120,
            w: 28,
            i1: 28,
            t1: "'",
            keyCode: 222
        }),
        CrdD.Ra.set("Enter-0", {
            x: 400,
            y: 120,
            w: 65,
            i1: 28,
            t1: "Enter",
            keyCode: 13
        }),
        CrdD.Ra.set("4-3", {
            x: 587,
            y: 120,
            w: 28,
            i1: 28,
            t1: "Numpad 4",
            keyCode: 100
        }),
        CrdD.Ra.set("5-3", {
            x: 617,
            y: 120,
            w: 28,
            i1: 28,
            t1: "Numpad 5",
            keyCode: 101
        }),
        CrdD.Ra.set("6-3", {
            x: 647,
            y: 120,
            w: 28,
            i1: 28,
            t1: "Numpad 6",
            keyCode: 102
        }),
        CrdD.Ra.set("z-0", {
            x: 86,
            y: 150,
            w: 28,
            i1: 28,
            t1: "z",
            keyCode: 90
        }),
        CrdD.Ra.set("x-0", {
            x: 116,
            y: 150,
            w: 28,
            i1: 28,
            t1: "x",
            keyCode: 88
        }),
        CrdD.Ra.set("c-0", {
            x: 146,
            y: 150,
            w: 28,
            i1: 28,
            t1: "c",
            keyCode: 67
        }),
        CrdD.Ra.set("v-0", {
            x: 176,
            y: 150,
            w: 28,
            i1: 28,
            t1: "v",
            keyCode: 86
        }),
        CrdD.Ra.set("b-0", {
            x: 206,
            y: 150,
            w: 28,
            i1: 28,
            t1: "b",
            keyCode: 66
        }),
        CrdD.Ra.set("n-0", {
            x: 236,
            y: 150,
            w: 28,
            i1: 28,
            t1: "n",
            keyCode: 78
        }),
        CrdD.Ra.set("m-0", {
            x: 266,
            y: 150,
            w: 28,
            i1: 28,
            t1: "m",
            keyCode: 77
        }),
        CrdD.Ra.set(",-0", {
            x: 296,
            y: 150,
            w: 28,
            i1: 28,
            t1: ",",
            keyCode: 188
        }),
        CrdD.Ra.set(".-0", {
            x: 326,
            y: 150,
            w: 28,
            i1: 28,
            t1: ".",
            keyCode: 190
        }),
        CrdD.Ra.set("/-0", {
            x: 356,
            y: 150,
            w: 28,
            i1: 28,
            t1: "/",
            keyCode: 191
        }),
        CrdD.Ra.set("ArrowUp-0", {
            x: 512,
            y: 150,
            w: 28,
            i1: 28,
            t1: "Arrow Up",
            keyCode: 38
        }),
        CrdD.Ra.set("1-3", {
            x: 587,
            y: 150,
            w: 28,
            i1: 28,
            t1: "Numpad 1",
            keyCode: 97
        }),
        CrdD.Ra.set("2-3", {
            x: 617,
            y: 150,
            w: 28,
            i1: 28,
            t1: "Numpad 2",
            keyCode: 98
        }),
        CrdD.Ra.set("3-3", {
            x: 647,
            y: 150,
            w: 28,
            i1: 28,
            t1: "Numpad 3",
            keyCode: 99
        }),
        CrdD.Ra.set("Enter-3", {
            x: 677,
            y: 150,
            w: 28,
            i1: 58,
            t1: "Numpad Enter",
            keyCode: 13
        }),
        CrdD.Ra.set(" -0", {
            x: 93,
            y: 180,
            w: 296,
            i1: 28,
            t1: "Space",
            keyCode: 32
        }),
        CrdD.Ra.set("ArrowLeft-0", {
            x: 482,
            y: 180,
            w: 28,
            i1: 28,
            t1: "Arrow Left",
            keyCode: 37
        }),
        CrdD.Ra.set("ArrowDown-0", {
            x: 512,
            y: 180,
            w: 28,
            i1: 28,
            t1: "Arrow Down",
            keyCode: 40
        }),
        CrdD.Ra.set("ArrowRight-0", {
            x: 542,
            y: 180,
            w: 28,
            i1: 28,
            t1: "Arrow Right",
            keyCode: 39
        }),
        CrdD.Ra.set("0-3", {
            x: 587,
            y: 180,
            w: 58,
            i1: 28,
            t1: "Numpad 0",
            keyCode: 96
        }),
        CrdD.Ra.set(".-3", {
            x: 647,
            y: 180,
            w: 28,
            i1: 28,
            t1: "Numpad .",
            keyCode: 110
        }),
        CrdD.qi.set("Backquote", {
            x: 17,
            y: 60,
            w: 28,
            i1: 28,
            t1: "`",
            keyCode: 192
        }),
        CrdD.qi.set("Digit1", {
            x: 47,
            y: 60,
            w: 28,
            i1: 28,
            t1: "1",
            keyCode: 49
        }),
        CrdD.qi.set("Digit2", {
            x: 77,
            y: 60,
            w: 28,
            i1: 28,
            t1: "2",
            keyCode: 50
        }),
        CrdD.qi.set("Digit3", {
            x: 107,
            y: 60,
            w: 28,
            i1: 28,
            t1: "3",
            keyCode: 51
        }),
        CrdD.qi.set("Digit4", {
            x: 137,
            y: 60,
            w: 28,
            i1: 28,
            t1: "4",
            keyCode: 52
        }),
        CrdD.qi.set("Digit5", {
            x: 167,
            y: 60,
            w: 28,
            i1: 28,
            t1: "5",
            keyCode: 53
        }),
        CrdD.qi.set("Digit6", {
            x: 197,
            y: 60,
            w: 28,
            i1: 28,
            t1: "6",
            keyCode: 54
        }),
        CrdD.qi.set("Digit7", {
            x: 227,
            y: 60,
            w: 28,
            i1: 28,
            t1: "7",
            keyCode: 55
        }),
        CrdD.qi.set("Digit8", {
            x: 257,
            y: 60,
            w: 28,
            i1: 28,
            t1: "8",
            keyCode: 56
        }),
        CrdD.qi.set("Digit9", {
            x: 287,
            y: 60,
            w: 28,
            i1: 28,
            t1: "9",
            keyCode: 57
        }),
        CrdD.qi.set("Digit0", {
            x: 317,
            y: 60,
            w: 28,
            i1: 28,
            t1: "0",
            keyCode: 48
        }),
        CrdD.qi.set("Minus", {
            x: 347,
            y: 60,
            w: 28,
            i1: 28,
            t1: "-",
            keyCode: 189
        }),
        CrdD.qi.set("Equal", {
            x: 377,
            y: 60,
            w: 28,
            i1: 28,
            t1: "=",
            keyCode: 187
        }),
        CrdD.qi.set("Backspace", {
            x: 407,
            y: 60,
            w: 58,
            i1: 28,
            t1: "Backspace",
            keyCode: 8
        }),
        CrdD.qi.set("Home", {
            x: 512,
            y: 60,
            w: 28,
            i1: 28,
            t1: "Home",
            keyCode: 36
        }),
        CrdD.qi.set("PageUp", {
            x: 542,
            y: 60,
            w: 28,
            i1: 28,
            t1: "Page Up",
            keyCode: 33
        }),
        CrdD.qi.set("NumpadDivide", {
            x: 617,
            y: 60,
            w: 28,
            i1: 28,
            t1: "Numpad /",
            keyCode: 111
        }),
        CrdD.qi.set("NumpadMultiply", {
            x: 647,
            y: 60,
            w: 28,
            i1: 28,
            t1: "Numpad *",
            keyCode: 106
        }),
        CrdD.qi.set("NumpadSubtract", {
            x: 677,
            y: 60,
            w: 28,
            i1: 28,
            t1: "Numpad -",
            keyCode: 109
        }),
        CrdD.qi.set("Tab", {
            x: 17,
            y: 90,
            w: 43,
            i1: 28,
            t1: "Tab",
            keyCode: 9
        }),
        CrdD.qi.set("KeyQ", {
            x: 62,
            y: 90,
            w: 28,
            i1: 28,
            t1: "q",
            keyCode: 81
        }),
        CrdD.qi.set("KeyW", {
            x: 92,
            y: 90,
            w: 28,
            i1: 28,
            t1: "w",
            keyCode: 87
        }),
        CrdD.qi.set("KeyE", {
            x: 122,
            y: 90,
            w: 28,
            i1: 28,
            t1: "e",
            keyCode: 69
        }),
        CrdD.qi.set("KeyR", {
            x: 152,
            y: 90,
            w: 28,
            i1: 28,
            t1: "r",
            keyCode: 82
        }),
        CrdD.qi.set("KeyT", {
            x: 182,
            y: 90,
            w: 28,
            i1: 28,
            t1: "t",
            keyCode: 84
        }),
        CrdD.qi.set("KeyY", {
            x: 212,
            y: 90,
            w: 28,
            i1: 28,
            t1: "y",
            keyCode: 89
        }),
        CrdD.qi.set("KeyU", {
            x: 242,
            y: 90,
            w: 28,
            i1: 28,
            t1: "u",
            keyCode: 85
        }),
        CrdD.qi.set("KeyI", {
            x: 272,
            y: 90,
            w: 28,
            i1: 28,
            t1: "i",
            keyCode: 73
        }),
        CrdD.qi.set("KeyO", {
            x: 302,
            y: 90,
            w: 28,
            i1: 28,
            t1: "o",
            keyCode: 79
        }),
        CrdD.qi.set("KeyP", {
            x: 332,
            y: 90,
            w: 28,
            i1: 28,
            t1: "p",
            keyCode: 80
        }),
        CrdD.qi.set("BracketLeft", {
            x: 362,
            y: 90,
            w: 28,
            i1: 28,
            t1: "[",
            keyCode: 219
        }),
        CrdD.qi.set("BracketRight", {
            x: 392,
            y: 90,
            w: 28,
            i1: 28,
            t1: "]",
            keyCode: 221
        }),
        CrdD.qi.set("Backslash", {
            x: 422,
            y: 90,
            w: 43,
            i1: 28,
            t1: "\\",
            keyCode: 220
        }),
        CrdD.qi.set("Delete", {
            x: 482,
            y: 90,
            w: 28,
            i1: 28,
            t1: "Delete",
            keyCode: 46
        }),
        CrdD.qi.set("End", {
            x: 512,
            y: 90,
            w: 28,
            i1: 28,
            t1: "End",
            keyCode: 35
        }),
        CrdD.qi.set("PageDown", {
            x: 542,
            y: 90,
            w: 28,
            i1: 28,
            t1: "Page Down",
            keyCode: 34
        }),
        CrdD.qi.set("Numpad7", {
            x: 587,
            y: 90,
            w: 28,
            i1: 28,
            t1: "Numpad 7",
            keyCode: 103
        }),
        CrdD.qi.set("Numpad8", {
            x: 617,
            y: 90,
            w: 28,
            i1: 28,
            t1: "Numpad 8",
            keyCode: 104
        }),
        CrdD.qi.set("Numpad9", {
            x: 647,
            y: 90,
            w: 28,
            i1: 28,
            t1: "Numpad 9",
            keyCode: 105
        }),
        CrdD.qi.set("NumpadAdd", {
            x: 677,
            y: 90,
            w: 28,
            i1: 58,
            t1: "Numpad +",
            keyCode: 107
        }),
        CrdD.qi.set("CapsLock", {
            x: 17,
            y: 120,
            w: 51,
            i1: 28,
            t1: "CapsLock",
            keyCode: 20
        }),
        CrdD.qi.set("KeyA", {
            x: 70,
            y: 120,
            w: 28,
            i1: 28,
            t1: "a",
            keyCode: 65
        }),
        CrdD.qi.set("KeyS", {
            x: 100,
            y: 120,
            w: 28,
            i1: 28,
            t1: "s",
            keyCode: 83
        }),
        CrdD.qi.set("KeyD", {
            x: 130,
            y: 120,
            w: 28,
            i1: 28,
            t1: "d",
            keyCode: 68
        }),
        CrdD.qi.set("KeyF", {
            x: 160,
            y: 120,
            w: 28,
            i1: 28,
            t1: "f",
            keyCode: 70
        }),
        CrdD.qi.set("KeyG", {
            x: 190,
            y: 120,
            w: 28,
            i1: 28,
            t1: "g",
            keyCode: 71
        }),
        CrdD.qi.set("KeyH", {
            x: 220,
            y: 120,
            w: 28,
            i1: 28,
            t1: "h",
            keyCode: 72
        }),
        CrdD.qi.set("KeyJ", {
            x: 250,
            y: 120,
            w: 28,
            i1: 28,
            t1: "j",
            keyCode: 74
        }),
        CrdD.qi.set("KeyK", {
            x: 280,
            y: 120,
            w: 28,
            i1: 28,
            t1: "k",
            keyCode: 75
        }),
        CrdD.qi.set("KeyL", {
            x: 310,
            y: 120,
            w: 28,
            i1: 28,
            t1: "l",
            keyCode: 76
        }),
        CrdD.qi.set("Semicolon", {
            x: 340,
            y: 120,
            w: 28,
            i1: 28,
            t1: ";",
            keyCode: 186
        }),
        CrdD.qi.set("Quote", {
            x: 370,
            y: 120,
            w: 28,
            i1: 28,
            t1: "'",
            keyCode: 222
        }),
        CrdD.qi.set("Enter", {
            x: 400,
            y: 120,
            w: 65,
            i1: 28,
            t1: "Enter",
            keyCode: 13
        }),
        CrdD.qi.set("Numpad4", {
            x: 587,
            y: 120,
            w: 28,
            i1: 28,
            t1: "Numpad 4",
            keyCode: 100
        }),
        CrdD.qi.set("Numpad5", {
            x: 617,
            y: 120,
            w: 28,
            i1: 28,
            t1: "Numpad 5",
            keyCode: 101
        }),
        CrdD.qi.set("Numpad6", {
            x: 647,
            y: 120,
            w: 28,
            i1: 28,
            t1: "Numpad 6",
            keyCode: 102
        }),
        CrdD.qi.set("ShiftLeft", {
            x: 17,
            y: 150,
            w: 67,
            i1: 28,
            t1: "Left Shift",
            keyCode: 16
        }),
        CrdD.qi.set("KeyZ", {
            x: 86,
            y: 150,
            w: 28,
            i1: 28,
            t1: "z",
            keyCode: 90
        }),
        CrdD.qi.set("KeyX", {
            x: 116,
            y: 150,
            w: 28,
            i1: 28,
            t1: "x",
            keyCode: 88
        }),
        CrdD.qi.set("KeyC", {
            x: 146,
            y: 150,
            w: 28,
            i1: 28,
            t1: "c",
            keyCode: 67
        }),
        CrdD.qi.set("KeyV", {
            x: 176,
            y: 150,
            w: 28,
            i1: 28,
            t1: "v",
            keyCode: 86
        }),
        CrdD.qi.set("KeyB", {
            x: 206,
            y: 150,
            w: 28,
            i1: 28,
            t1: "b",
            keyCode: 66
        }),
        CrdD.qi.set("KeyN", {
            x: 236,
            y: 150,
            w: 28,
            i1: 28,
            t1: "n",
            keyCode: 78
        }),
        CrdD.qi.set("KeyM", {
            x: 266,
            y: 150,
            w: 28,
            i1: 28,
            t1: "m",
            keyCode: 77
        }),
        CrdD.qi.set("Comma", {
            x: 296,
            y: 150,
            w: 28,
            i1: 28,
            t1: ",",
            keyCode: 188
        }),
        CrdD.qi.set("Period", {
            x: 326,
            y: 150,
            w: 28,
            i1: 28,
            t1: ".",
            keyCode: 190
        }),
        CrdD.qi.set("Slash", {
            x: 356,
            y: 150,
            w: 28,
            i1: 28,
            t1: "/",
            keyCode: 191
        }),
        CrdD.qi.set("ShiftRight", {
            x: 386,
            y: 150,
            w: 79,
            i1: 28,
            t1: "Right Shift",
            keyCode: 16
        }),
        CrdD.qi.set("ArrowUp", {
            x: 512,
            y: 150,
            w: 28,
            i1: 28,
            t1: "Arrow Up",
            keyCode: 38
        }),
        CrdD.qi.set("Numpad1", {
            x: 587,
            y: 150,
            w: 28,
            i1: 28,
            t1: "Numpad 1",
            keyCode: 97
        }),
        CrdD.qi.set("Numpad2", {
            x: 617,
            y: 150,
            w: 28,
            i1: 28,
            t1: "Numpad 2",
            keyCode: 98
        }),
        CrdD.qi.set("Numpad3", {
            x: 647,
            y: 150,
            w: 28,
            i1: 28,
            t1: "Numpad 3",
            keyCode: 99
        }),
        CrdD.qi.set("NumpadEnter", {
            x: 677,
            y: 150,
            w: 28,
            i1: 58,
            t1: "Numpad Enter",
            keyCode: 13
        }),
        CrdD.qi.set("ControlLeft", {
            x: 17,
            y: 180,
            w: 36,
            i1: 28,
            t1: "Left Control",
            keyCode: 17
        }),
        CrdD.qi.set("Space", {
            x: 93,
            y: 180,
            w: 296,
            i1: 28,
            t1: "Space",
            keyCode: 32
        }),
        CrdD.qi.set("ControlRight", {
            x: 429,
            y: 180,
            w: 36,
            i1: 28,
            t1: "Right Control",
            keyCode: 17
        }),
        CrdD.qi.set("ArrowLeft", {
            x: 482,
            y: 180,
            w: 28,
            i1: 28,
            t1: "Arrow Left",
            keyCode: 37
        }),
        CrdD.qi.set("ArrowDown", {
            x: 512,
            y: 180,
            w: 28,
            i1: 28,
            t1: "Arrow Down",
            keyCode: 40
        }),
        CrdD.qi.set("ArrowRight", {
            x: 542,
            y: 180,
            w: 28,
            i1: 28,
            t1: "Arrow Right",
            keyCode: 39
        }),
        CrdD.qi.set("Numpad0", {
            x: 587,
            y: 180,
            w: 58,
            i1: 28,
            t1: "Numpad 0",
            keyCode: 96
        }),
        CrdD.qi.set("NumpadDecimal", {
            x: 647,
            y: 180,
            w: 28,
            i1: 28,
            t1: "Numpad .",
            keyCode: 110
        })
    }
}
class XbQR {
    Oa = -1;
    th = 0;
    ih = 0;
    eh = 0;
    sh = 0;
    es = 0;
    hh = 0;
    oh = 0;
    de = 0;
    R0 = 0;
    left = 0;
    right = 0;
    attack = 0;
    fe = 0;
    ah = 0
}
function QAAV(t) {
    let s;
    for (t.de = 0,
    t.R0 = 0,
    t.left = 0,
    t.right = 0,
    t.attack = 0,
    t.fe = 0,
    t.ah = 0,
    s = 0; s < 8; s++)
        t.ts[s].de = 0,
        t.ts[s].R0 = 0,
        t.ts[s].left = 0,
        t.ts[s].right = 0,
        t.ts[s].attack = 0,
        t.ts[s].fe = 0,
        t.ts[s].ah = 0
}
function AUuK(t) {
    let s;
    for (s = 0; s < 8; s++)
        t.Oo[s] = !0,
        t.ts[s].attack = 0,
        t.ts[s].fe = 0
}
function NcPr() {
    let t;
    for (t = 0; t < MiVw.length; t++) {
        var s = MiVw[t].id;
        KUKH[s] = [-1, -1, -1, -1]
    }
}
function OHwl(t) {
    let s, e, i = !1;
    for (e = 0; e < MiVw.length; e++) {
        var o = MiVw[e].id;
        for (s = 0; s < 4; s++)
            if (KUKH[o][s] == t) {
                KUKH[o][s] = -1,
                i = !0;
                break
            }
        if (i)
            break
    }
}
function IakF() {
    for (let s = 0; s < HnDC; s++)
        for (let t = 0; t < MiVw.length; t++) {
            var e = MiVw[t].id;
            CrdD.C[s][e] = [];
            for (let t = 0; t < 6; t++)
                CrdD.C[s][e][t] = 0
        }
    for (let t = 0; t < MiVw.length; t++)
        MiVw[t].G = HnDC - 1
}
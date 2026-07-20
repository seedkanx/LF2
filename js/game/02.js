let W4HY = 3;
const GAME_VERSION = 2160;
let SERVER_PORT = 8080;
const unsafePorts = new Set([1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115, 117, 119, 123, 135, 137, 139, 143, 161, 179, 389, 427, 465, 512, 513, 514, 515, 526, 530, 531, 532, 540, 548, 554, 556, 563, 587, 601, 636, 993, 995, 1719, 1720, 1723, 2049, 3659, 4045, 5060, 5061, 6e3, 6566, 6665, 6666, 6667, 6668, 6669, 6697, 10080]);
let OYHD = 794
  , ZcYj = 978
  , I2Gw = 550
  , Hhar = ZcYj * W4HY
  , T0mk = I2Gw * W4HY
  , Lzbd = Hhar / ZcYj
  , GLOBAL_ZOOM_WIDTH = 794
  , g20M = 978 / GLOBAL_ZOOM_WIDTH * Lzbd
  , gB75s = 128 - (550 - 391200 / GLOBAL_ZOOM_WIDTH) / 2.7
  , gB75r = 128 - (550 - 391200 / GLOBAL_ZOOM_WIDTH)
  , gB75h = 550 - 391200 / GLOBAL_ZOOM_WIDTH
  , GLOBAL_MM_COUNTRY_CODE = "--"
  , GLOBAL_MM_USER_NAME = "----"
  , GLOBAL_MM_USER_ID = "0"
  , GLOBAL_MM_LOBBY_CREATED = !1
  , GLOBAL_MM_LOBBY_NAME = ""
  , GLOBAL_MM_LOBBY_PW = ""
  , GLOBAL_MM_LOBBY_JOINED = !1
  , GLOBAL_MM_TEMP_PLAYER_LIST = []
  , Esyj = Hhar
  , MGy5 = Hhar
  , PQ4Z = T0mk;
var JfP8 = 1
  , BRKS = 1;
const XFpe = 0
  , UI_STATE_NETWORK_MODE_PRIVATE_SERVER = 8
  , UI_STATE_NETWORK_MODE_MENU_PAGE = 9
  , UI_STATE_NETWORK_MODE_MATCHMAKING = 10
  , Zto2 = 1
  , OZsE = 2
  , DP_H = 3
  , ZzG5 = 4
  , XAn2 = 5
  , E3KY = 6
  , Krlb = 7
  , UI_STATE_MM_LOBBY = 11
  , UI_STATE_MM_LIST_LOBBY = 12
  , UI_STATE_MM_CREATING_LOBBY = 13
  , UI_STATE_MM_ERROR_CREATING_LOBBY = 14
  , UI_STATE_MM_JOINING_LOBBY = 15
  , UI_STATE_MM_ERROR_JOINING_LOBBY = 16;
var GqLZ = !1
  , GqLz = !1
  , _RB3 = XFpe
  , IUCG = ""
  , LKNI = ""
  , WuQJ = 0
  , WEPA = 0
  , YTCb = -1
  , _d4B = ""
  , Ke94 = []
  , _dFL = null
  , ZpMS = !1
  , NqTZ = !1
  , OAdq = []
  , TDxF = !1
  , Ihla = !1
  , MiVw = []
  , TbWH = "";
let GqLZ_DEFAULT_DELAY = 1
  , HnDC = 0
  , KUKH = []
  , QDNX = Esyj
  , app = new PIXI.Application({
    width: Esyj,
    height: PQ4Z,
    antialias: !0,
    i: !1,
    h: 1,
    backgroundColor: 0
})
  , SCZ_ = Esyj / PQ4Z
  , OdEy = MGy5 / PQ4Z
  , pixiGameScene = (LOG("OdEy", OdEy),
INDEX_AddAppToBody(app))
  , PHaa = 0
  , HefM = 0
  , AfdY = !1
  , HdPx = !1
  , LK_R = !1;
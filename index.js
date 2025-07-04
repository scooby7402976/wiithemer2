var themeposition = 0;
var closecntr = 180;
var minutesleft = 2;
var seccntr = 0;
var themeInfo = {};
var sessionid = null;
var themevideomode = false;
var completefileinfo = [null];
var timer = null;
var filtered_list_position = [];
var filtered_themeposition;
const Region = ["", "U", "E", "J", "K"];
const region_wii = ["", "wii_U", "wii_E", "wii_J", "wii_K"];
const region_vWii = ["", "vwii_U", "vwii_E", "vwii_J"];
const version = ["", "4.3", "4.2", "4.1", "4.0", "vWii (WiiU)"];
const version40kmessage = "The Korean region did not have System Menu v4.0 .";
const transchans = "This theme has the channels removed already .";
const vWii_regions = "vWii has no Korean Region .";
const max_themes = 300;
const filter_list = ["All", "Top 20 Downloads", "Top 20 Views", "New", "Anime", "Movie/TV", "Cartoon", "Music", "Sports", "Games", "Dark Wii/Colors", "OS", "Individual", "Misc"];
const completethemeinfo = [
	//{name:"", ID:"", mainimg:"", secondaryimg:"", mym:"", video:"", downloads:"", trans_chans:"1""0", filter:""},
	{name:"American Dad", ID:"AMDAD1", mainimg:"american_dad.avif", secondaryimg:"american_dad.png", mym:"american_dad.mym", video:"https://www.youtube.com/embed/QmxQemy9PiU?si=f8PpyWVy81sMd5sP?autoplay=0&mute=1", downloads:"american_dad.txt", trans_chans:"1", filter:"cartoon/new"},
	{name:"Among Us v1", ID:"AMONG1", mainimg: "amongusv1.avif", secondaryimg:"amongusv1.png", mym:"amongusv1.mym", video:"https://www.youtube.com/embed/nO1V_81oC1g?si=3ejJl9qmBal_R8r5?autoplay=0&mute=1", downloads:"amongusv1.txt", trans_chans:"1", filter:"game"},
	{name:"Among Us v2", ID:"AMONG2", mainimg: "amongusv2.avif", secondaryimg:"amongusv2.png", mym:"amongusv2.mym", video:"https://www.youtube.com/embed/1DZQG9F25Y4?si=pBM1xC9MpFdPeKtB?autoplay=0&mute=1", downloads:"amongusv2.txt", trans_chans:"1", filter:"game"},
	{name:"Animal Crossing", ID:"ANML01", mainimg:"animalcrossing.avif", secondaryimg:"animalcrossing.png", mym:"animal_crossing.mym", video:"https://www.youtube.com/embed/2hZHkraXOpA?autoplay=0&mute=1", downloads:"animal_crossing.txt", trans_chans:"1", filter:"top20/game/views"},
	{name:"Animal Crossing v2", ID:"ANML02", mainimg:"animalcrossingv2.avif", secondaryimg:"animalcrossingv2.png", mym:"animal_crossing_v2.mym", video:"https://www.youtube.com/embed/zs9OcnVkpTY?si=tEd2FZ2UjyRJCc0Y?autoplay=0&mute=1", downloads:"animal_crossing_v2.txt", trans_chans:"1", filter:"game"},
	{name:"Apple", ID:"APPLE1", mainimg:"apple.avif", secondaryimg:"apple.png", mym:"apple.mym", video:"https://www.youtube.com/embed/oZXzGzkOwZs?si=K4Mlcb6mbeWOZIax?autoplay=0&mute=1", downloads:"apple.txt", trans_chans:"1", filter:"os/views"},
	{name:"Aqua Teen Hunger Force", ID:"ATHF01", mainimg:"aquateenhungerforce.avif", secondaryimg:"ATHF.png", mym:"aqua_teen_hunger_forcestage1.mym", video:"https://www.youtube.com/embed/HtIxy7EuSEA?si=OafY-qA2HJS3G5A5?autoplay=0&mute=1", downloads:"aqua_teen_hunger_force.txt", trans_chans:"1", filter:"cartoon"},
	{name:"Army of Darkness", ID:"AODRK1", mainimg:"army_of_darkness.avif", secondaryimg:"army_of_darkness.png", mym:"army_of_darkness_stage1.mym", video:"https://www.youtube.com/embed/nVGkNwYywqE?si=7nBmRhuLnJhqFeGW?autoplay=0&mute=1", downloads:"army_of_darkness.txt", trans_chans:"1", filter:"movie"},
	{name:"Arsenal FC", ID:"ARSNFC", mainimg:"arsenal.avif", secondaryimg:"arsenal.png", mym:"arsenal_stage1.mym", video:"https://www.youtube.com/embed/gfKm1a3p6Ik?si=RGSCVhnbBZV-G2zt?autoplay=0&mute=1", downloads:"arsenal.txt", trans_chans:"1", filter:"sports"},
	{name:"Atlanta Falcons", ID:"FALCON", mainimg:"falcons.avif", secondaryimg:"falcons.png", mym:"falcons.mym", video:"https://www.youtube.com/embed/cO8wosfN1gQ?si=J4Txn133oqt4hS7y?autoplay=0&mute=1", downloads:"falcons.txt", trans_chans:"1", filter:"sports"},
	{name:"Bakugan", ID:"BKGN01", mainimg:"bakugan.avif", secondaryimg:"bakugan.png", mym:"bakugan.mym", video:"https://www.youtube.com/embed/1sje3UaUNK4?autoplay=0&mute=1", downloads:"bakugan.txt", trans_chans:"1", filter:"anime"},
	{name:"FC Barcelona", ID:"BRCLNA", mainimg:"barcelona.avif", secondaryimg:"barcelona.png", mym:"barcelona_stage1.mym", video:"https://www.youtube.com/embed/fLAYnFr-Bm8?si=bjS9b-JgE8kXFVUS?autoplay=0&mute=1", downloads:"barcelona.txt", trans_chans:"1", filter:"sports"},
	{name:"Batman v1", ID:"BTMN01", mainimg:"batmanv1.avif", secondaryimg:"batmanv1.png", mym:"batman_v1.mym", video:"https://www.youtube.com/embed/_O_pPfQe5Do?autoplay=0&mute=1", downloads:"batman_v1.txt", trans_chans:"1", filter:"movie"},
	{name:"Batman v2", ID:"BTMN02", mainimg:"batmanv2.avif", secondaryimg:"batmanv2.png", mym:"batman_v2.mym", video:"https://www.youtube.com/embed/RhfS_ZdaDVU?autoplay=0&mute=1", downloads:"batman_v2.txt", trans_chans:"1", filter:"movie"},
	{name:"Notorious B.I.G.", ID:"BIGG01", mainimg:"biggie.avif", secondaryimg:"biggie.png", mym:"biggie_stage1.mym", video:"https://www.youtube.com/embed/2mJFuiNnAo8?si=RLjpDy2p4Wbira0F?autoplay=0&mute=1", downloads:"biggie.txt", trans_chans:"0", filter:"music"},
	{name:"Billy Mays", ID:"BILLY1", mainimg:"billymays.avif", secondaryimg:"billymays.png", mym:"billy_mays.mym", video:"https://www.youtube.com/embed/8lxUIOhhyY4?si=b9EtProCCiJ94XjG?autoplay=0&mute=1", downloads:"billymays.txt", trans_chans:"1", filter:"individual"},
	{name:"Black Gold", ID:"BLKGD1", mainimg:"blackgold.avif", secondaryimg:"blackgold.png", mym:"blackgold.mym", video:"https://www.youtube.com/embed/S8FYX8l09Tg?si=gbfexY4AjjUCu3fN?autoplay=0&mute=1", downloads:"blackgold.txt", trans_chans:"1", filter:"misc"},
	{name:"Black Mage", ID:"BLMG01", mainimg:"blackmage.avif", secondaryimg:"blackmage.png", mym:"black_mage.mym", video:"https://www.youtube.com/embed/Nm_I4p-a4qo?autoplay=0&mute=1", downloads:"black_mage.txt", trans_chans:"1", filter:"misc"},
	{name:"Black Pirate", ID:"BLPR01", mainimg:"blackpirate.avif", secondaryimg:"blackpirate.png", mym:"black_pirate.mym", video:"https://www.youtube.com/embed/6o4L6axGsgU?autoplay=0&mute=1", downloads:"black_pirate.txt", trans_chans:"1", filter:"misc"},
	{name:"Black Pirate v2", ID:"BLPR02", mainimg:"blackpirate.avif", secondaryimg:"blackpiratev2.png", mym:"black_pirate_v2.mym", video:"https://www.youtube.com/embed/evvP1zxZLyI?si=tBiFVdA9eg0zDItV?autoplay=0&mute=1", downloads:"black_piratev2.txt", trans_chans:"1", filter:"misc"},
	{name:"Bleach", ID:"BLCH01", mainimg:"bleach.avif", secondaryimg:"bleach.png", mym:"bleach.mym", video:"https://www.youtube.com/embed/6R7Zgni2vbQ?autoplay=0&mute=1", downloads:"bleach.txt", trans_chans:"1", filter:"anime"},
	{name:"Blue Wii Beta", ID:"BWBETA", mainimg:"bluewii_beta.avif", secondaryimg:"bluewii_beta.png", mym:"bluewii_beta.mym", video:"https://www.youtube.com/embed/t9Imo7fYrSQ?si=DVYigIErvIMwm3Mm?autoplay=0&mute=1", downloads:"bluewii_beta.txt", trans_chans:"1", filter:"darkwii"},
	{name:"BoBoBo", ID:"BOBO01", mainimg:"bobobo.avif", secondaryimg:"bobobo.png", mym:"bobobo_stage1.mym",  video:"https://www.youtube.com/embed/owSsTt5E19c?si=rC0VFf1FUHF6GU73?autoplay=0&mute=1", downloads:"bobobo.txt", trans_chans:"1", filter:"anime"},
	{name:"Boondock Saints", ID:"BDSTS1", mainimg:"boondocksaints.avif", secondaryimg:"boondocksaints.png", mym:"boondock_saints.mym", video:"https://www.youtube.com/embed/5tk08eRKYNI?autoplay=0&mute=1", downloads:"boondock_saints.txt", trans_chans:"0", filter:"movie"},
	{name:"Boston Red Socks", ID:"BSTRD1", mainimg:"boston_redsocks.avif", secondaryimg:"boston_redsocks.png", mym:"boston.mym", video:"https://www.youtube.com/embed/YJMNtT4gPDU?si=Obp6ZLFlnPhbtf4o?autoplay=0&mute=1", downloads:"boston_redsocks.txt", trans_chans:"0", filter:"sports"},
	{name:"Bowser", ID:"BWSR01", mainimg:"bowser.avif", secondaryimg:"bowser.png", mym:"bowser.mym", video:"https://www.youtube.com/embed/tdYdYU1KKdw?autoplay=0&mute=1", downloads:"bowser.txt", trans_chans:"0", filter:"game"},
	{name:"Broly", ID:"BRLY01", mainimg:"broly.avif", secondaryimg:"broly.png", mym:"broly.mym", video:"https://www.youtube.com/embed/-rd2YPJ9jOE?autoplay=0&mute=1", downloads:"broly.txt", trans_chans:"1", filter:"anime"},
	{name:"Buffalo Bills", ID:"BILLS1", mainimg:"buffalo_bills.avif", secondaryimg:"buffalo_bills.png", mym:"bills.mym", video:"https://www.youtube.com/embed/F6-XuSJcC20?si=-l2Sb2MsnF-kQAJZ?autoplay=0&mute=1", downloads:"buffalo_bills.txt", trans_chans:"0", filter:"sports"},
	{name:"Call of Duty", ID:"CODTY1", mainimg:"callofduty.avif", secondaryimg:"callofduty.png", mym:"call_of_duty.mym", video:"https://www.youtube.com/embed/zaHUh0pinlA?autoplay=0&mute=1", downloads:"call_of_duty.txt", trans_chans:"1", filter:"game"},
	{name:"Car", ID:"CAR001", mainimg:"car.avif", secondaryimg:"car.png", mym:"car.mym", video:"https://www.youtube.com/embed/425H8lC96es?autoplay=0&mute=1", downloads:"car.txt", trans_chans:"1", filter:"misc"},
	{name:"Carolina Panthers", ID:"PNTHR1", mainimg:"carolina_panthers.avif", secondaryimg:"carolina_panthers.png", mym:"panthers.mym", video:"https://www.youtube.com/embed/SVfQNEQ8I5g?si=0osMMhk3QiwaTYRR?autoplay=0&mute=1", downloads:"panthers.txt", trans_chans:"1", filter:"sports"},
	{name:"Cars", ID:"CARS01", mainimg:"cars.avif", secondaryimg:"cars.png", mym:"cars_stage1.mym", video:"https://www.youtube.com/embed/FNyt_khFHsI?autoplay=0&mute=1", downloads:"cars.txt", trans_chans:"1", filter:"movie"},
	{name:"Castlevania", ID:"CSTLV1", mainimg:"castlevania.avif", secondaryimg:"castlevania.png", mym:"castlevania.mym", video:"https://www.youtube.com/embed/fjRqwJrtcgw?si=2t1vXfBq-34lDzax?autoplay=0&mute=1", downloads:"castlevania.txt", trans_chans:"1", filter:"game"},
	{name:"Celtic FC", ID:"CELTIC", mainimg:"celtic.avif", secondaryimg:"celtic.png", mym:"celtic.mym", video:"https://www.youtube.com/embed/4JrQhqZvGOA?si=vAIYlGtdft3S6i-a?autoplay=0&mute=1", downloads:"celtic.txt", trans_chans:"1", filter:"sports"},
	{name:"Chainsaw Man", ID:"CHNSAW", mainimg:"chainsaw_man.avif", secondaryimg:"chainsaw_man.png", mym:"chainsaw_man.mym", video:"https://www.youtube.com/embed/59v8dXH1aK0?si=G5XkmwZ0C2hvYYcj?autoplay=0&mute=1", downloads:"chainsaw_man.txt", trans_chans:"1", filter:"anime"},
	{name:"Check Mii Out", ID:"CKMO01", mainimg:"check_mii_out.avif", secondaryimg:"check_mii_out.png", mym:"check_mii_out.mym", video:"https://www.youtube.com/embed/Og-xmUTZt6o?si=Tv2DHxvW458-FGzN?autoplay=0&mute=1", downloads:"check_mii_out.txt", trans_chans:"1", filter:"misc/views"},
	{name:"Chicago Bears", ID:"BEARS1", mainimg:"chicago_bears.avif", secondaryimg:"chicago_bears.png", mym:"bears.mym", video:"https://www.youtube.com/embed/Yk3tXxSTtiY?si=cs5jn-Ku6a-CqaGq?autoplay=0&mute=1", downloads:"bears.txt", trans_chans:"1", filter:"sports"},
	{name:"Chicago Black Hawks", ID:"HAWKS1", mainimg:"chicago_blackhawks.avif", secondaryimg:"chicago_blackhawks.png", mym:"blackhawks.mym", video:"https://www.youtube.com/embed/8TdU3BidMpA?si=Ca92r3-FMrRtSFOq?autoplay=0&mute=1", downloads:"blackhawks.txt", trans_chans:"1", filter:"sports"},
	{name:"Chicago Bulls", ID:"BULLS1", mainimg:"chicago_bulls.avif", secondaryimg:"chicago_bulls.png", mym:"bulls.mym", video:"https://www.youtube.com/embed/uhiT3OWR_ec?si=tMtc4W2QuNCvbgCK?autoplay=0&mute=1", downloads:"bulls.txt", trans_chans:"1", filter:"sports"},
	{name:"Chrono Trigger", ID:"CRTRG1", mainimg:"chronotrigger.avif", secondaryimg:"chronotrigger.png", mym:"chronotrigger.mym", video:"https://www.youtube.com/embed/98X7CwDem_8?si=m-SBfPqR3tmt9ohw?autoplay=0&mute=1", downloads:"chronotrigger.txt", trans_chans:"0", filter:"game"},
	{name:"Clock Work Orange", ID:"CLKWK1", mainimg:"clockworkorange.avif", secondaryimg:"clockworkorange.png", mym:"clockwork_orange.mym", video:"https://www.youtube.com/embed/uIRzAfn0CE0?si=bjUfrDRLTfDkpSp0?autoplay=0&mute=1", downloads:"clockworkorange.txt", trans_chans:"1", filter:"movie"},
	{name:"Club Penguin", ID:"CLBPN1", mainimg:"clubpenguin.avif", secondaryimg:"clubpenguin.png", mym:"clubpenguin.mym", video:"https://www.youtube.com/embed/QwJMxmJ4tqg?si=EPT7yC-o_K9JViug?autoplay=0&mute=1", downloads:"clubpenguin.txt", trans_chans:"1", filter:"game"},
	{name:"Code Geass", ID:"GEASS1", mainimg:"codegeass.avif", secondaryimg:"codegeass.png", mym:"code_geass.mym", video:"https://www.youtube.com/embed/X38-YkQwEL4?autoplay=0&mute=1", downloads:"code_geass.txt", trans_chans:"1", filter:"anime"},
	{name:"Conduit", ID:"CONDT1", mainimg:"conduit.avif", secondaryimg:"conduit.png", mym:"conduit.mym", video:"https://www.youtube.com/embed/z2Tu0qbCgg0?si=7t8ZT5OpR-ngUjUu?autoplay=0&mute=1", downloads:"conduit.txt", trans_chans:"0", filter:"game"},
	{name:"Constantine", ID:"CONST1", mainimg:"constantine.avif", secondaryimg:"constantine.png", mym:"constantine.mym", video:"https://www.youtube.com/embed/fR8xS8I8vgU?autoplay=0&mute=1", downloads:"constantine.txt", trans_chans:"1", filter:"movie"},
	{name:"Dallas Cowboys", ID:"CWBYS1", mainimg:"dallas_cowboys.avif", secondaryimg:"dallas_cowboys.png", mym:"dallas.mym", video:"https://www.youtube.com/embed/fNys6Go7yFc?si=vMl4ZK02wcrxamxh?autoplay=0&mute=1", downloads:"cowboys.txt", trans_chans:"1", filter:"sports"},
	{name:"Dark Umbra v1", ID:"DKUB01", mainimg:"dark_umbra_v1.avif", secondaryimg:"dark_umbra_v1.png", mym:"dark_umbra_v1.mym", video:"https://www.youtube.com/embed/WD2SuUG4Mbs?si=8Gti_3j2T_DUnpsA?autoplay=0&mute=1", downloads:"dark_umbra_v1.txt", trans_chans:"1", filter:"misc"},
	{name:"Dark Umbra v2", ID:"DKUB02", mainimg:"dark_umbra_v2.avif", secondaryimg:"dark_umbra_v2.png", mym:"dark_umbra_v2.mym", video:"https://www.youtube.com/embed/YYZiJ_I8c4U?si=KHhGf5nvYFaLGQwH?autoplay=0&mute=1", downloads:"dark_umbra_v2.txt", trans_chans:"1", filter:"misc"},
	{name:"Dark Wii Extended", ID:"DWEXT1", mainimg:"darkwii_extended.avif", secondaryimg:"darkwii_extended.png", mym:"darkwii_extended", video:"https://www.youtube.com/embed/2-vB5O-T2S4?si=vrKNRxEEXP_6QjFe?autoplay=0&mute=1", downloads:"darkwii_extended.txt", trans_chans:"1", filter:"darkwii/new"},
	{name:"Dark Wii Plus", ID:"DKWI+1", mainimg:"darkwii_plus.avif", secondaryimg:"darkwii_plus.png", mym:"darkwii_plus.mym", video:"https://www.youtube.com/embed/ZGkWgsCBCS0?si=ZZ-7UrLi3DWcAf-P?autoplay=0&mute=1", downloads:"darkwii_plus.txt", trans_chans:"1", filter:"top20/darkwii"},
	{name:"Dark Wii Original", ID:"DWORI1", mainimg:"darkwiioriginal.avif", secondaryimg:"darkwiioriginal.png", mym:"dark_wii_original.mym", video:"https://www.youtube.com/embed/ckcWI1rsRqk?autoplay=0&mute=1", downloads:"dark_wii_original.txt", trans_chans:"1", filter:"top20/darkwii"},
	{name:"Dark Wii Blue", ID:"DWBL", mainimg:"darkwiiblue.avif", secondaryimg:"darkwiiblue.png", mym:"dark_wii_blue", video:"https://www.youtube.com/embed/oSMkswfXe_w?autoplay=0&mute=1", downloads:"dark_wii_blue.txt", trans_chans:"1", filter:"top20/darkwii"},
	{name:"Dark Wii Green", ID:"DWGR", mainimg:"darkwiigreen.avif", secondaryimg:"darkwiigreen.png", mym:"dark_wii_green", video:"https://www.youtube.com/embed/Rn0CnTo5kRI?autoplay=0&mute=1", downloads:"dark_wii_green.txt", trans_chans:"1", filter:"top20/darkwii"},
	{name:"Dark Wii Orange", ID:"DWOR", mainimg:"darkwiiorange.avif", secondaryimg:"darkwiiorange.png", mym:"dark_wii_orange", video:"https://www.youtube.com/embed/g66UasiFEhg?autoplay=0&mute=1", downloads:"dark_wii_orange.txt", trans_chans:"1", filter:"top20/darkwii"},
	{name:"Dark Wii Pink", ID:"DWPK", mainimg:"darkwiipink.avif", secondaryimg:"darkwiipink.png", mym:"dark_wii_pink", video:"https://www.youtube.com/embed/EZ1jtn58laM?autoplay=0&mute=1", downloads:"dark_wii_pink.txt", trans_chans:"1", filter:"top20/darkwii"},
	{name:"Dark Wii Purple", ID:"DWPR", mainimg:"darkwiipurple.avif", secondaryimg:"darkwiipurple.png", mym:"dark_wii_purple", video:"https://www.youtube.com/embed/UKVbnIgZK5I?autoplay=0&mute=1", downloads:"dark_wii_purple.txt", trans_chans:"1", filter:"top20/darkwii"},
	{name:"Dark Wii Red", ID:"DWRD", mainimg:"darkwiired.avif", secondaryimg:"darkwiired.png", mym:"dark_wii_red", video:"https://www.youtube.com/embed/9odLhr49Wak?autoplay=0&mute=1", downloads:"dark_wii_red.txt", trans_chans:"1", filter:"top20/darkwii"},
	{name:"Dark Wii White", ID:"DWWH", mainimg:"darkwiiwhite.avif", secondaryimg:"darkwiiwhite.png", mym:"dark_wii_white", video:"https://www.youtube.com/embed/wrwDwTXkPUQ?autoplay=0&mute=1", downloads:"dark_wii_white.txt", trans_chans:"1", filter:"darkwii"},
	{name:"Dark Wii Yellow", ID:"DWYL", mainimg:"darkwiiyellow.avif", secondaryimg:"darkwiiyellow.png", mym:"dark_wii_yellow", video:"https://www.youtube.com/embed/R9sX3SzzzKA?autoplay=0&mute=1", downloads:"dark_wii_yellow.txt", trans_chans:"1", filter:"darkwii"},
	{name:"Death Note", ID:"DNOTE1", mainimg:"deathnote.avif", secondaryimg:"deathnote.png", mym:"deathnote.mym", video:"https://www.youtube.com/embed/29RXZSyLnUc?si=6ZJQUSM2QRaYh0G5?autoplay=0&mute=1", downloads:"deathnote.txt", trans_chans:"1", filter:"anime"},
	{name:"Deth Klok", ID:"DKLOK1", mainimg:"dethklok.avif", secondaryimg:"dethklok.png", mym:"deth_klok.mym", video:"https://www.youtube.com/embed/gvJGiuJiEbA?autoplay=0&mute=1", downloads:"deth_klok.txt", trans_chans:"1", filter:"cartoon"},
	{name:"Detroit Lions", ID:"LIONS1", mainimg:"detroit_lions.avif", secondaryimg:"detroit_lions.png", mym:"lions_stage1.mym", video:"https://www.youtube.com/embed/tL6PIuNIRX8?si=yNws3MzyYVVyGY_o?autoplay=0&mute=1", downloads:"lions.txt", trans_chans:"0", filter:"sports"},
	{name:"Diablo 3", ID:"DIABL1", mainimg: "diablo_3.avif", secondaryimg: "diablo_3.png", mym: "diablo_3.mym", video: "https://www.youtube.com/embed/kU6vIUunCBQ?si=0eAsALZ0pqZc9zAj?autoplay=0&mute=1", downloads: "diablo_3.txt", trans_chans:"0", filter:"game"},
	{name:"Discord", ID:"DSCRD1", mainimg:"discord.avif", secondaryimg:"discord.png", mym:"discord.mym", video:"https://www.youtube.com/embed/HH1KZWWvdWU?autoplay=0&mute=1", downloads:"discord.txt", trans_chans:"1", filter:"misc/views"},
	{name:"Dog Man", ID:"DGMN01", mainimg:"dogman.avif", secondaryimg:"dogman.png", mym:"dogman.mym", video:"https://www.youtube.com/embed/kH1IuIKQK8M?si=-8WgDFUMr9P6KVC9?autoplay=0&mute=1", downloads:"dogman.txt", trans_chans:"1", filter:"cartoon/views"},
	{name:"Dolphins", ID:"DOLPH1", mainimg:"dolphins.avif", secondaryimg:"dolphins.png", mym:"dolphins.mym", video:"https://www.youtube.com/embed/sO8dgWll7iQ?si=8t75qErRGU8TN32u?autoplay=0&mute=1", downloads:"dolphins.txt", trans_chans:"1", filter:"sports"},
	{name:"Dragon Ball Z v1", ID:"DBLZ01", mainimg:"dragonballzv1.avif", secondaryimg:"dragonballzv1.png", mym:"dragon_ball_z_v1.mym", video:"https://www.youtube.com/embed/pM2RB5cqVSw?autoplay=0&mute=1", downloads:"dragon_ball_z_v1.txt", trans_chans:"1", filter:"anime"},
	{name:"Dragon Ball Z v2", ID:"DBLZ02", mainimg:"dragonballzv2.avif", secondaryimg:"dragonballzv2.png", mym:"dragon_ball_z_v2.mym", video:"https://www.youtube.com/embed/hLBvwN_Sj38?autoplay=0&mute=1", downloads:"dragon_ball_z_v2.txt", trans_chans:"1", filter:"anime"},
	{name:"Dr Who", ID:"DRWHO1", mainimg:"drwho.avif", secondaryimg:"drwho.png", mym:"dr_who.mym", video:"https://www.youtube.com/embed/um4V5Wu8fq8?autoplay=0&mute=1", downloads:"dr_who.txt", trans_chans:"1", filter:"individual"},
	{name:"Dukes of Hazzard", ID:"DUKES1", mainimg:"dukes.avif", secondaryimg:"dukes.png", mym:"dukes_stage1.mym", video:"https://www.youtube.com/embed/ivm_TdCs8jw?si=giFtZSrHyIQcs2hW?autoplay=0&mute=1", downloads:"dukes.txt", trans_chans:"1", filter:"movie"},
	{name:"De-Generation X", ID:"DGENX1", mainimg:"dx.avif", secondaryimg:"dx.png", mym:"dx_stage1.mym", video:"https://www.youtube.com/embed/Ikiv1vkJd1w?si=RriJhX94ADqf8iHK?autoplay=0&mute=1", downloads:"dx.txt", trans_chans:"0", filter:"sports"},
	{name:"Eagles", ID:"EGLES1", mainimg:"eagles.avif", secondaryimg:"eagles.png", mym:"eagles_stage1.mym", video:"https://www.youtube.com/embed/H2zvZ1b9dHo?si=6HrAJUG0BwuJsNKi?autoplay=0&mute=1", downloads:"eagles.txt", trans_chans:"0", filter:"sports"},
	{name:"Earth Bound", ID:"ETHBD1", mainimg:"earthbound.avif", secondaryimg:"earthbound.png", mym:"earth_bound.mym", video:"https://www.youtube.com/embed/gO4k6ggnL0U?autoplay=0&mute=1", downloads:"earth_bound.txt", trans_chans:"1", filter:"game"},
	{name:"Earth Bound v2", ID:"ETHBD2", mainimg:"earthboundv2.avif", secondaryimg:"earthboundv2.png", mym:"earth_boundv2.mym", video:"https://www.youtube.com/embed/Oim0ewCMzlg?si=XOlP0tHsydIr9zfN?autoplay=0&mute=1", downloads:"earth_boundv2.txt", trans_chans:"1", filter:"game"},
	{name:"Emo Blue", ID:"EMOBL1", mainimg:"emoblue.avif", secondaryimg:"emoblue.png", mym:"emoblue.mym", video:"https://www.youtube.com/embed/7EpLqmqxwes?si=wYUqFxKmwEZ0Yw-h?autoplay=0&mute=1", downloads:"emoblue.txt", trans_chans:"1", filter:"darkwii"},
	{name:"Emo Green", ID:"EMOGR1", mainimg:"emogreen.avif", secondaryimg:"emogreen.png", mym:"emogreen.mym", video:"https://www.youtube.com/embed/j4oaXwXi9Zg?si=rtxSbP-DeTcrsaZx?autoplay=0&mute=1", downloads:"emogreen.txt", trans_chans:"1", filter:"darkwii"},
	{name:"Emo Pink", ID:"EMOPK1", mainimg:"emopink.avif", secondaryimg:"emopink.png", mym:"emopink.mym", video:"https://www.youtube.com/embed/GG2aRdXmgic?si=gl_deznBXMXAtB8g?autoplay=0&mute=1", downloads:"emopink.txt", trans_chans:"1", filter:"darkwii"},
	{name:"Emo Purple", ID:"EMOPR1", mainimg:"emopurple.avif", secondaryimg:"emopurple.png", mym:"emopurple.mym", video:"https://www.youtube.com/embed/HUHCEhV-rdU?si=NEdQP5H_2B4xJqzS?autoplay=0&mute=1", downloads:"emopurple.txt", trans_chans:"1", filter:"darkwii"},
	{name:"Emo Red", ID:"EMORD1", mainimg:"emored.avif", secondaryimg:"emored.png", mym:"emored.mym", video:"https://www.youtube.com/embed/Q8Qhn8lsNmY?si=az5eCq_0ZMTC7iM5?autoplay=0&mute=1", downloads:"emored.txt", trans_chans:"1", filter:"darkwii"},
	{name:"Evil Dead", ID:"EVDED1", mainimg:"evildead.avif", secondaryimg:"evildead.png", mym:"evil_dead.mym", video:"https://www.youtube.com/embed/zKolRxAiJJs?autoplay=0&mute=1", downloads:"evil_dead.txt", trans_chans:"1", filter:"movie"},
	{name:"Excite Bots", ID:"EXBOT1", mainimg:"excitebots.avif", secondaryimg:"excitebots.png", mym:"excite_bots.mym", video:"https://www.youtube.com/embed/Uz4V-dlzzsY?autoplay=0&mute=1", downloads:"excite_bots.txt", trans_chans:"1", filter:"game"},
	{name:"Eyes", ID:"EYES01", mainimg:"eyes.avif", secondaryimg:"eyes.png", mym:"eyes.mym", video:"https://www.youtube.com/embed/8nxP5ox3aVE?autoplay=0&mute=1", downloads:"eyes.txt", trans_chans:"1", filter:"misc"},
	{name:"Fairly Odd Parents", ID:"FODDP1", mainimg:"fairlyoddparents.avif", secondaryimg:"fairlyoddparents.png", mym:"fairly_odd_parentsstage1.mym", video:"https://www.youtube.com/embed/ev9kNqy1VXY?si=MQ0YD-mLlIfgqW5s?autoplay=0&mute=1", downloads:"fairlyoddparents.txt", trans_chans:"1", filter:"cartoon/views"},
	{name:"Family Guy", ID:"FMGUY1", mainimg:"familyguy.avif", secondaryimg:"familyguy.png", mym:"family_guy.mym", video:"https://www.youtube.com/embed/SHgd0t4BENI?autoplay=0&mute=1", downloads:"family_guy.txt", trans_chans:"1", filter:"cartoon/views"},
	{name:"Fantasy", ID:"FANTA1", mainimg:"Fantasy.avif", secondaryimg:"fantasy.png", mym:"fantasy.mym", video:"https://www.youtube.com/embed/hGqk0wQL9Us?autoplay=0&mute=1", downloads:"fantasy.txt", trans_chans:"0", filter:"misc"},
	{name:"Fight Club", ID:"FCLUB1", mainimg:"FightClub.avif", secondaryimg:"fightclub.png", mym:"fight_club.mym", video:"https://www.youtube.com/embed/WVY8mcnJmu8?autoplay=0&mute=1", downloads:"fight_club.txt", trans_chans:"0", filter:"movie"},
	{name:"Final Fantasy 7", ID:"FFVII1", mainimg:"FinalFantasy7.avif", secondaryimg:"finalfantasy7.png", mym:"final_fantasy_7.mym", video:"https://www.youtube.com/embed/bymdnStOo9U?autoplay=0&mute=1", downloads:"final_fantasy_7.txt", trans_chans:"1", filter:"game"},
	{name:"Fire Wii", ID:"FIRE01", mainimg:"firewii.avif", secondaryimg:"firewii.png", mym:"fire_wii.mym", video:"https://www.youtube.com/embed/eJLl2_ZMf6s?autoplay=0&mute=1", downloads:"fire_wii.txt", trans_chans:"0", filter:"misc/views"},
	{name:"Flower Power", ID:"FLOPO1", mainimg:"flowerpower.avif", secondaryimg:"flowerpower.png", mym:"flower_powerstage1.mym", video:"https://www.youtube.com/embed/lpoNMkhUYhA?si=B4fltaw9eZfFDkQY?autoplay=0&mute=1", downloads:"flowerpower.txt", trans_chans:"0", filter:"misc"},
	{name:"Foster's Home", ID:"FOSTER", mainimg:"fosters_home.avif", secondaryimg:"fosters_home.png", mym:"fosters_home.mym", video:"https://www.youtube.com/embed/uLuEL2g7-gk?si=V-AzZ6Bai_PC06RY?autoplay=0&mute=1", downloads:"fosters_home.txt", trans_chans:"1", filter:"cartoon/new"},
	{name:"Friday Night Funkin", ID:"FNFNK1", mainimg:"fridaynightfunkin.avif", secondaryimg:"fridaynightfunkin.png", mym:"friday_night_funkin.mym", video:"https://www.youtube.com/embed/VkbcQsz57nM?si=yqN-PFAOKuyVn1EV?autoplay=0&mute=1", downloads:"fridaynightfunkin.txt", trans_chans:"1", filter:"game"},
	{name:"Friday the 13th", ID:"F13TH1", mainimg:"fridaythe13th.avif", secondaryimg:"fridaythe13th.png", mym:"friday_the_13thstage1.mym", video:"https://www.youtube.com/embed/SKT-nmQC68o?si=fWW98k2AViFDSKAO?autoplay=0&mute=1", downloads:"fridaythe13th.txt", trans_chans:"1", filter:"movie"},
	{name:"Full Metal Alchemist", ID:"FMTL", mainimg:"fullmetalalchemist.avif", secondaryimg:"fullmetalalchemist.png", mym:"full_metal_alchemist", video:"https://www.youtube.com/embed/ZpPcjebgEUY?autoplay=0&mute=1", downloads:"full_metal_alchemist.txt", trans_chans:"1", filter:"anime"},
	{name:"Futurama", ID:"FUTUR1", mainimg:"futurama.avif", secondaryimg:"futurama.png", mym:"futurama.mym", video:"https://www.youtube.com/embed/x0mCDuiWYpA?autoplay=0&mute=1", downloads:"futurama.txt", trans_chans:"1", filter:"cartoon"},
	{name:"Gaara", ID:"GAARA1", mainimg:"gaara.avif", secondaryimg:"gaara.png", mym:"gaara.mym", video:"https://www.youtube.com/embed/nEofNIw_Xps?autoplay=0&mute=1", downloads:"gaara.txt", trans_chans:"1", filter:"anime"},
	{name:"Garfield", ID:"GRFLD1", mainimg:"garfield.avif", secondaryimg:"garfield.png", mym:"garfield.mym", video:"https://www.youtube.com/embed/lZZ3f6G_Mhs?si=xBNAGvmT06-w9llh?autoplay=0&mute=1", downloads:"garfield.txt", trans_chans:"1", filter:"cartoon"},
	{name:"Gears of War", ID:"GOWAR1", mainimg:"gearsofwar.avif", secondaryimg:"gearsofwar.png", mym:"gears_of_war.mym", video:"https://www.youtube.com/embed/0AUq2xqwlEc?autoplay=0&mute=1", downloads:"gears_of_war.txt", trans_chans:"1", filter:"game"},
	{name:"Ghost Busters", ID:"GBUST1", mainimg:"ghostbusters.avif", secondaryimg:"ghostbusters.png", mym:"ghost_busters.mym", video:"https://www.youtube.com/embed/q1Y3VAmsXxM?autoplay=0&mute=1", downloads:"ghost_busters.txt", trans_chans:"1", filter:"movie"},
	{name:"Golden Sun", ID:"GSUN01", mainimg:"GoldenSun.avif", secondaryimg:"goldensun.png", mym:"golden_sun.mym", video:"https://www.youtube.com/embed/qZO74MDfGXY?autoplay=0&mute=1", downloads:"golden_sun.txt", trans_chans:"1", filter:"game"},
	{name:"Gothic", ID:"GOTH01", mainimg:"gothic.avif", secondaryimg:"gothic.png", mym:"gothic.mym", video:"https://www.youtube.com/embed/Ko3ZcoCmwPI?si=QROVEdiG91ky82_V?autoplay=0&mute=1", downloads:"gothic.txt", trans_chans:"0", filter:"misc"},
	{name:"Grateful Dead", ID:"GRTFL1", mainimg:"gratefuldead.avif", secondaryimg:"gratefuldead.png", mym:"grateful_dead_stage1.mym", video:"https://www.youtube.com/embed/LURcBb9sF98?si=oebw46IB5hS1hxDU?autoplay=0&mute=1", downloads:"gratefuldead.txt", trans_chans:"1", filter:"music"},
	{name:"Green Bay Packers", ID:"PCKRS1", mainimg:"greenbay_packers.avif", secondaryimg:"greenbay_packers.png", mym:"packers_stage1.mym", video:"https://www.youtube.com/embed/mfmglgxpV3M?si=yKq_eYg4s0BnJQFU?autoplay=0&mute=1", downloads:"packers.txt", trans_chans:"1", filter:"sports"},
	{name:"Hand Drawn", ID:"HDRAW1", mainimg:"HandDrawn.avif", secondaryimg:"handdrawn.png", mym:"hand_drawn.mym", video:"https://www.youtube.com/embed/e19Hk1Zbp0c?autoplay=0&mute=1", downloads:"hand_drawn.txt", trans_chans:"1", filter:"game"},
	{name:"Hello Kitty", ID:"HKITY1", mainimg:"HelloKitty.avif", secondaryimg:"hellokitty.png", mym:"hello_kitty.mym", video:"https://www.youtube.com/embed/Rh-_PneEKCY?autoplay=0&mute=1", downloads:"hello_kitty.txt", trans_chans:"0", filter:"cartoon"},
	{name:"Hell's Kitchen", ID:"HELLK1", mainimg:"hellskitchen.avif", secondaryimg:"hellskitchen.png", mym:"hellskitchen.mym", video:"https://www.youtube.com/embed/rhZvXoDqJx4?si=dsfWlztTT2Fz_RR3?autoplay=0&mute=1", downloads:"hellskitchen.txt", trans_chans:"1", filter:"movie"},
	{name:"He-Man", ID:"HEMAN1", mainimg:"heman.avif", secondaryimg:"heman.png", mym:"he-manstage1.mym", video:"https://www.youtube.com/embed/vUzusxTYj9w?si=UNjjoXBw-c4BJBWc?autoplay=0&mute=1", downloads:"heman.txt", transchans:"1", filter:"cartoon"},
	{name:"Heros", ID:"HEROS1", mainimg:"heros.avif", secondaryimg:"heros.png", mym:"heros.mym", video: "https://www.youtube.com/embed/kM-Sgb2wRig?autoplay=0&mute=1",downloads:"heros.txt", trans_chans:"0", filter:"movie"},
	{name:"Hot Wheels", ID:"WHEEL1", mainimg:"hot_wheels.avif", secondaryimg:"hot_wheels.png", mym:"hot_wheels.mym", video:"", downloads:"hot_wheels.txt", trans_chans:"1", filter:"game/new"},
	{name:"The Hundreds", ID:"HNDRD1", mainimg:"hundreds.avif", secondaryimg:"hundreds.png", mym:"hundreds.mym", video:"https://www.youtube.com/embed/mCGMAJkoQp4?si=qq2S6uyJYOkl3mBk?autoplay=0&mute=1", downloads:"hundreds.txt", trans_chans:"0", filter:"anime"},
	{name:"Illusions of Gaia", ID:"ILLOG1", mainimg:"illusionsofgaia.avif", secondaryimg:"illusionsofgaia.png", mym:"illusionsofgaia.mym", video:"https://www.youtube.com/embed/nPaNCfmKKIA?si=yN1ldPBI9TR4uOBH?autoplay=0&mute=1", downloads:"illusionsofgaia.txt", trans_chans:"1", filter:"game"},
	{name:"Imports", ID:"IMPOR1", mainimg:"imports.avif", secondaryimg:"imports.png", mym:"imports.mym", video:"https://www.youtube.com/embed/49LLOgWKxJI?si=ZaPDRGHkUVw4QDTb?autoplay=0&mute=1", downloads:"imports.txt", trans_chans:"1", filter:"misc"},
	{name:"In Betweeners", ID:"INBET1", mainimg:"inbetweeners.avif", secondaryimg:"inbetweeners.png", mym:"in_betweeners.mym", video:"https://www.youtube.com/embed/Ng8-yaNi1gE?autoplay=0&mute=1",downloads:"in_betweeners.txt", trans_chans:"1", filter:"movie"},
	{name:"Indianapolis Colts", ID:"COLTS1", mainimg:"colts.avif", secondaryimg:"colts.png", mym:"colts.mym", video:"https://www.youtube.com/embed/qOdHo5u2vI4?si=R61cyZlCzCVapG3N?autoplay=0&mute=1", downloads:"colts.txt", trans_chans:"1", filter:"sports"},
	{name:"Insane Clown Posse", ID:"ICP001", mainimg:"icp.avif", secondaryimg:"icp.png", mym:"insane_clown_posse.mym", video:"https://www.youtube.com/embed/nKo90-C1d8U?autoplay=0&mute=1", downloads:"insane_clown_posse.txt", trans_chans:"1", filter:"music"},
	{name:"Its A Me Mario", ID:"IMMAR1", mainimg:"itsamemario.avif", secondaryimg:"itsamemario.png", mym:"itsamemario.mym", video:"https://www.youtube.com/embed/RXxxwKtNPJk?autoplay=0&mute=1", downloads:"itsamemario.txt", trans_chans:"1", filter:"top20/game"},
	{name:"Jay & Silent Bob", ID:"JNSBOB", mainimg:"jaybob.avif", secondaryimg:"jaybob.png", mym:"jaybob_stage1.mym", video:"https://www.youtube.com/embed/AqMK45kspoc?si=Le3klHxmxZxgE_OA?autoplay=0&mute=1", downloads:"jaybob.txt", trans_chans:"1", filter:"movie"},
	{name:"Jet Set Radio", ID:"JSRAD1", mainimg:"jetsetradio.avif", secondaryimg:"jetsetradio.png", mym:"jetsetradio.mym", video:"https://www.youtube.com/embed/3KtwBglT7OI?si=kPvE5kMgZwc78GAW?autoplay=0&mute=1", downloads:"jetsetradio.txt", trans_chans:"1", filter:"game"},
	{name:"Jimmy Neutron", ID:"JNUTR1", mainimg:"jimmyneutron.avif", secondaryimg:"jimmyneutron.png", mym:"jimmyneutron.mym", video:"https://www.youtube.com/embed/j1JtKOE1XgA?si=eoPN5xB5H-Wu3h98?autoplay=0&mute=1", downloads:"jimmyneutron.txt", trans_chans:"1", filter:"cartoon/views"},
	{name:"Joker", ID:"JOKER1", mainimg:"joker.avif", secondaryimg:"joker.png", mym:"jokerstage1.mym", video:"https://www.youtube.com/embed/cok8NmKGrQk?si=x43QProMRv3A1K35?autoplay=0&mute=1", downloads:"joker.txt", trans_chans:"1", filter:"movie"},
	{name:"Jurassic Park 3", ID:"JRPRK1", mainimg:"jurassicpark3.avif", secondaryimg:"jurassicpark3.png", mym:"jurassic_park_3.mym", video:"https://www.youtube.com/embed/bgmwbNsbT04?autoplay=0&mute=1", downloads:"jurassic_park_3.txt", trans_chans:"1", filter:"movie"},
	{name:"Kid Icarus", ID:"KDICR1", mainimg:"kidicarus.avif", secondaryimg:"kidicarus.png", mym:"kidicarus.mym", video:"https://www.youtube.com/embed/FAe1W-cGYh4?si=o5WJO-gvG_AAB1Pl?autoplay=0&mute=1", downloads:"kidicarus.txt", trans_chans:"1", filter:"game"},
	{name:"Kingdom Hearts", ID:"KHRT01", mainimg:"kingdomhearts.avif", secondaryimg:"kingdomhearts.png", mym:"kingdom_hearts.mym", video:"https://www.youtube.com/embed/YQf3umMzGNs?autoplay=0&mute=1", downloads:"kingdom_hearts.txt", trans_chans:"0", filter:"game"},
	{name:"Kirby", ID:"KIRBY1", mainimg:"kirby.avif", secondaryimg:"kirby.png", mym:"kirby.mym", video:"https://www.youtube.com/embed/NoPUDwdQy8Q?autoplay=0&mute=1", downloads:"kirby.txt", trans_chans:"1", filter:"top20/game"},
	{name:"Kirby Adventures", ID:"KIRBY2", mainimg:"kirbyadventures.avif", secondaryimg:"kirbyadventures.png", mym:"kirbyadventures.mym", video:"https://www.youtube.com/embed/ziexDcITbbc?si=6VfHLGeO4r8hftD1?autoplay=0&mute=1", downloads:"kirbyadventures.txt", trans_chans:"1", filter:"game"},
	{name:"Kiss", ID:"KISS01", mainimg:"kiss.avif", secondaryimg:"kiss.png", mym:"kiss_stage1.mym", video:"https://www.youtube.com/embed/hyQfXng5CyI?si=v23yevJjLo4leCBH?autoplay=0&mute=1", downloads:"kiss.txt", trans_chans:"1", filter:"music"},
	{name:"Korn", ID:"KORN01", mainimg:"korn.avif", secondaryimg:"korn.png", mym:"korn.mym", video:"https://www.youtube.com/embed/WJM0t8M3Q9s?autoplay=0&mute=1", downloads:"korn.txt", trans_chans:"1", filter:"music"},
	{name:"Leopard OS", ID:"LEOPA1", mainimg:"leopardos.avif", secondaryimg:"leopardos.png", mym:"leopard_os.mym", video:"https://www.youtube.com/embed/yZsh5Eiys04?autoplay=0&mute=1", downloads:"leopard_os.txt", trans_chans:"0", filter:"top20/os"},
	{name:"Lime Wii", ID:"LIME01", mainimg:"limewii.avif", secondaryimg:"limewii.png", mym:"lime_wii.mym", video:"https://www.youtube.com/embed/_L1V84YnIi4?autoplay=0&mute=1", downloads:"lime_wii.txt", trans_chans:"1", filter:"darkwii"},
	{name:"Looney Toons", ID:"LTOON1", mainimg:"looneytoons.avif", secondaryimg:"looneytoons.png", mym:"looney_toons.mym", video:"https://www.youtube.com/embed/D5dFtKsQhYE?autoplay=0&mute=1", downloads:"looney_toons.txt", trans_chans:"1", filter:"cartoon"},
	{name:"Lost", ID:"LOST01", mainimg:"lost.avif", secondaryimg:"lost.png", mym:"lost.mym", video:"https://www.youtube.com/embed/MGjEbT6j5U4?autoplay=0&mute=1", downloads:"lost.txt", trans_chans:"1", filter:"movie"},
	{name:"Luigi v1", ID:"LUIGI1", mainimg:"luigi.avif", secondaryimg:"luigi.png", mym:"luigi_v1.mym", video:"https://www.youtube.com/embed/kIQWI1lfvN8?autoplay=0&mute=1", downloads:"luigi.txt", trans_chans:"1", filter:"game"},
	{name:"Luigi v2", ID:"LUIGI2", mainimg:"luigiv2.avif", secondaryimg:"luigiv2.png", mym:"luigi_v2stage1.mym", video:"https://www.youtube.com/embed/T-0HcukGFvs?si=kgnGp1US233zqxmo?autoplay=0&mute=1", downloads:"luigiv2.txt", trans_chans:"1", filter:"game/views"},
	{name:"M & M's", ID:"MNMS01", mainimg:"m&ms.avif", secondaryimg:"m&ms.png", mym:"mms.mym", video:"https://www.youtube.com/embed/VcZUvRK86kU?si=pdLsIldmqIbRAAgR?autoplay=0&mute=1", downloads:"mms.txt", trans_chans:"1", filter:"misc"},
	{name:"Mad World", ID:"MWRLD1", mainimg:"madworld.avif", secondaryimg:"madworld.png", mym:"mad_world.mym", video:"https://www.youtube.com/embed/c69ct5P0P_o?autoplay=0&mute=1", downloads:"mad_world.txt", trans_chans:"1", filter:"game"},
	{name:"Mad World v2", ID:"MWRLD2", mainimg:"mad_world_v2.avif", secondaryimg:"mad_world_v2.png", mym:"mad_world2.mym", video:"https://www.youtube.com/embed/HQGRDcQkSqs?si=V3lzjzErAjXIgFUm?autoplay=0&mute=1", downloads:"mad_world_v2.txt", trans_chans:"1", filter:"game"},
	{name:"Majoras Mask", ID:"MAMSK1", mainimg:"majorasmask.avif", secondaryimg:"majorasmask.png", mym:"majoras_mask.mym", video:"https://www.youtube.com/embed/g-PrcM-Qr80?autoplay=0&mute=1", downloads:"majoras_mask.txt", trans_chans:"1", filter:"game"},
	{name:"Manchester United", ID:"UNITED", mainimg:"united.avif", secondaryimg:"united.png", mym:"united_stage1.mym", video:"https://www.youtube.com/embed/WIpQ2CUo7jE?si=r0m6iJfGnAYy6kEJ?autoplay=0&mute=1", downloads:"united.txt", trans_chans:"0", filter:"sports"},
	{name:"Man Hunt", ID:"MNHNT1", mainimg:"manhunt.avif", secondaryimg:"manhunt.png", mym:"manhunt_stage1.mym", video:"https://www.youtube.com/embed/3GkjVRkuW4M?si=dkzuR71Xh7qN_gOa?autoplay=0&mute=1", downloads:"manhunt.txt", trans_chans:"0", filter:"game"},
	{name:"Maria", ID:"MARIA1", mainimg:"maria.avif", secondaryimg:"maria.png", mym:"maria_stage1.mym", video:"https://www.youtube.com/embed/LG2A1xP9-rI?si=hJWOit_pJvwQGuER?autoplay=0&mute=1", downloads:"maria.txt", trans_chans:"1", filter:"individual"},
	{name:"Mario", ID:"MARIO2", mainimg:"mario.avif", secondaryimg:"mariojeb.png", mym:"mario.mym", video:"https://www.youtube.com/embed/mbT0hzSG2AU?autoplay=0&mute=1", downloads:"mario.txt", trans_chans:"1", filter:"top20/game"},
	{name:"Mario Kart", ID:"MKART1", mainimg:"mariokart.avif", secondaryimg:"mariokart.png", mym:"mario_kart.mym", video:"https://www.youtube.com/embed/dCfbtnEWnLI?autoplay=0&mute=1", downloads:"mario_kart.txt", trans_chans:"1", filter:"top20/game/views"},
	{name:"Martin Abel Art", ID:"MABEL1", mainimg:"martin_abel.avif", secondaryimg:"martin_abel.png", mym:"martin_abel.mym", video:"https://www.youtube.com/embed/hiX6VQWN7W4?si=KRn_MEOQmLaBvFYO?autoplay=0&mute=1" , downloads:"martin_abel.txt", trans_chans:"1", filter:"individual"},
	{name:"Matrix", ID:"MATRX1", mainimg:"matrix.avif", secondaryimg:"matrix.png", mym:"matrix.mym", video:"https://www.youtube.com/embed/X2qGmB8Bc9k?autoplay=0&mute=1", downloads:"matrix.txt", trans_chans:"1", filter:"top20/movie"},
	{name:"Matrix Reloaded", ID:"MATRX2", mainimg:"matrixreloaded.avif", secondaryimg:"matrixreloaded.png", mym:"matrix_reloaded.mym", video:"https://www.youtube.com/embed/mIn8GGGGZ8k?autoplay=0&mute=1", downloads:"matrix_reloaded.txt", trans_chans:"1", filter:"movie"},
	{name:"MegaMan", ID:"MEGMN1", mainimg:"megaman.avif", secondaryimg:"megaman.png", mym:"megaman.mym", video:"https://www.youtube.com/embed/PFM5_FM2kwc?autoplay=0&mute=1", downloads:"megaman.txt", trans_chans:"1", filter:"game"},
	{name:"Melancholy of Haruhi", ID:"MOHAR1", mainimg:"melonofharuhi.avif", secondaryimg:"melonofharuhi.png", mym:"melonofharuhi_stage1.mym", video:"https://www.youtube.com/embed/KcwLfjQuU0s?si=5Cj4FpN42DaB1441?autoplay=0&mute=1", downloads:"melonofharuhi.txt", trans_chans:"0", filter:"anime"},
	{name:"Metal Gear Solid", ID:"MGSOL1", mainimg:"metalgearsolid.avif", secondaryimg:"metalgearsolid.png", mym:"metal_gear_solid.mym", video:"https://www.youtube.com/embed/6VRbu8JYn88?autoplay=0&mute=1", downloads:"metal_gear_solid.txt", trans_chans:"1", filter:"game"},
	{name:"Metallica", ID:"MTLCA1", mainimg:"metallica.avif", secondaryimg:"metallica.png", mym:"metallica.mym", video:"https://www.youtube.com/embed/FnTMu9nb2Og?autoplay=0&mute=1", downloads:"metallica.txt", trans_chans:"1", filter:"music"},
	{name:"Metroid", ID:"MTROD1", mainimg:"metroid.avif", secondaryimg:"metroid.png", mym:"metroid.mym", video:"https://www.youtube.com/embed/vE0OAUJQ9DY?autoplay=0&mute=1", downloads:"metroid.txt", trans_chans:"1", filter:"game"},
	{name:"Metroid Prime", ID:"METPR1", mainimg:"metroid_prime.avif", secondaryimg:"metroid_prime.png", mym:"metroid_prime.mym", video:"https://www.youtube.com/embed/973MdQ0fl1w?si=NAbEs3JG9CZtbvig?autoplay=0&mute=1", downloads:"metroid_prime.txt", trans_chans:"1", filter:"game"},
	{name:"Metroid: Samus's Visor", ID:"MTDSV1", mainimg:"metroid_samusvisor.avif", secondaryimg:"metroid_samusvisor.png", mym:"metroid_samus_visor.mym", video:"https://www.youtube.com/embed/-3yRj55z_FY?si=GwnRB730HdOWELw-?autoplay=0&mute=1", downloads:"metroid_samusvisor.txt", trans_chans:"1", filter:"game"},
	{name:"Mets", ID:"METS01", mainimg:"mets.avif", secondaryimg:"mets.png", mym:"mets.mym", video:"https://www.youtube.com/embed/FcQjIgcvYNg?si=udSlA8iwpqR6kgA8?autoplay=0&mute=1", downloads:"mets.txt", trans_chans:"1", filter:"sports"},
	{name:"Minions", ID:"MINION", mainimg:"minions.avif", secondaryimg:"minions.png", mym:"minions.mym", video:"https://www.youtube.com/embed/lrCv9wOBdJ4?si=u0E8QQrJKIMUGtz5?autoplay=0&mute=1", downloads:"minions.txt", trans_chans:"1", filter:"movie/new"},
	{name:"Mist Forest", ID:"MISTF1", mainimg:"mistforest.avif", secondaryimg:"mistforest.png", mym:"mistforest.mym", video:"https://www.youtube.com/embed/ON0jmvFGWSk?si=YGUJ9oMMmPsH0iRZ?autoplay=0&mute=1", downloads:"mistforest.txt", trans_chans:"1", filter:"darkwii"},
	{name:"ModMii", ID:"MODMII", mainimg:"modmii.avif", secondaryimg:"modmii.png", mym:"modmii.mym", video:"https://www.youtube.com/embed/JMtoDNvcsO4?si=2wq6mKUa_sfEAMuY?autoplay=0&mute=1", downloads:"modmii.txt", trans_chans:"1", filter:"misc"},
	{name:"Monkeys", ID:"MONKEY", mainimg:"monkeys.avif", secondaryimg:"monkeys.png", mym:"monkeys_stage1.mym", video:"https://www.youtube.com/embed/b0mxd-g7aFQ?si=JNGR5qcJD5ozUSGV?autoplay=0&mute=1", downloads:"monkeys.txt", trans_chans:"1", filter:"misc"},
	{name:"Monopol - Wii", ID:"MONOW1", mainimg:"monopoly.avif", secondaryimg:"monopoly.png", mym:"monopoly.mym", video:"https://www.youtube.com/embed/UcQuxp8nVek?si=C8LSiW6eHTEPZ3BD?autoplay=0&mute=1", downloads:"monopoly.txt", trans_chans:"1", filter:"game"},
	{name:"Monsters Inc", ID:"MONSTR", mainimg:"monsters_inc.avif", secondaryimg:"monsters_inc.png", mym:"monsters_inc.mym", video:"https://www.youtube.com/embed/Gc0JBK-r31Y?si=Ezyrnf3f2Pk-ywkp?autoplay=0&mute=1", downloads:"monsters_inc.txt", trans_chans:"1", filter:"movie/new"},
	{name:"Montreal Canadians", ID:"CANAD1", mainimg:"canadians.avif", secondaryimg:"canadians.png", mym:"canadians.mym", video:"https://www.youtube.com/embed/vLia4TNMyXE?si=qi8T-WLtjUsd9tAy?autoplay=0&mute=1", downloads:"canadians.txt", trans_chans:"1", filter:"sports"},
	{name:"Mortal Kombat", ID:"MKOMB1", mainimg:"mortalkombat.avif", secondaryimg:"mortalkombat.png", mym:"mortal_kombat.mym", video:"https://www.youtube.com/embed/K0qxTtMF7E4?autoplay=0&mute=1", downloads:"mortal_kombat.txt", trans_chans:"1", filter:"game"},
	{name:"Muse", ID:"MUSE01", mainimg:"muse.avif", secondaryimg:"muse.png", mym:"muse.mym", video:"https://www.youtube.com/embed/X0LAu5pYY8w?autoplay=0&mute=1", downloads:"muse.txt", trans_chans:"1", filter:"music"},
	{name:"Naruto", ID:"NARTO1", mainimg:"naruto.avif", secondaryimg:"naruto.png", mym:"naruto.mym", video:"https://www.youtube.com/embed/7gwaDaD3Xpo?autoplay=0&mute=1", downloads:"naruto.txt", trans_chans:"0", filter:"anime"},
	{name:"New Orleans Saints", ID:"SAINT1", mainimg:"saints.avif", secondaryimg:"saints.png", mym:"saints_stage1.mym", video:"https://www.youtube.com/embed/JJDA2byjNK8?si=P4lSe6VzbRVyeRWS?autoplay=0&mute=1", downloads:"saints.txt", trans_chans:"0", filter:"sports"},
	{name:"New England Patriots", ID:"NEPAT1", mainimg:"patriots.avif", secondaryimg:"patriots.png", mym:"patriots_stage1.mym", video:"https://www.youtube.com/embed/unDPpkm5TN0?si=KWUR7t8IS_KHKNJj?autoplay=0&mute=1", downloads:"patriots.txt", trans_chans:"0", filter:"sports"},
	{name:"New York Rangers", ID:"RANGR1", mainimg:"rangers.avif", secondaryimg:"rangers.png", mym:"rangers.mym", video:"https://www.youtube.com/embed/kEm2JoYJCvc?si=bTMTXu8QO7kDlQ4g?autoplay=0&mute=1", downloads:"rangers.txt", trans_chans:"1", filter:"sports"},
	{name:"New York Yankees", ID:"YANKE1", mainimg:"yankees.avif", secondaryimg:"yankees.png", mym:"yankees.mym", video:"https://www.youtube.com/embed/eHDTGRvYwv8?si=bFcZrMtTJJg87y4M?autoplay=0&mute=1", downloads:"yankees.txt", trans_chans:"0", filter:"sports"},
	{name:"Nightmare B4 Xmas", ID:"NMB4X1", mainimg:"nightmareb4xmas.avif", secondaryimg:"nightmareb4xmas.png", mym:"nightmare_b4_xmas.mym", video:"https://www.youtube.com/embed/yMMcV_JmZY8?autoplay=0&mute=1", downloads:"nightmare_b4_xmas.txt", trans_chans:"1", filter:"movie"},
	{name:"Nights into Dreams", ID:"NIDRM1", mainimg:"nightsintodreams.avif", secondaryimg:"nightsintodreams.png", mym:"nightsintodreams.mym", video:"https://www.youtube.com/embed/3m-5V1dOulE?si=7mWW_tPKZJ6LuLjw?autoplay=0&mute=1", downloads:"nightsintodreams.txt", trans_chans:"1", filter:"game"},
	{name:"Nirvana", ID:"NRVNA1", mainimg:"nirvana.avif", secondaryimg:"nirvana.png", mym:"nirvana_stage1.mym", video:"https://www.youtube.com/embed/ri9UH1xyydI?si=RUmnjrlaVBoTuvru?autoplay=0&mute=1", downloads:"nirvana.txt", trans_chans:"1", filter:"music"},
	{name:"No More Heros", ID:"NOMRH1", mainimg:"nomoreheros.avif", secondaryimg:"nomoreheros.png", mym:"nomoreheroes.mym", video:"https://www.youtube.com/embed/LPYyUlV0s1c?si=63AWQCPk7FohM7Ou?autoplay=0&mute=1", downloads:"nomoreheros.txt", trans_chans:"1", filter:"game"},
	{name:"Oakland Raiders", ID:"RAIDR1", mainimg:"raiders.avif", secondaryimg:"raiders.png", mym:"raiders_stage1.mym", video:"https://www.youtube.com/embed/gib0Ba4FiSs?si=1NGWGFQDgUdx-cZc?autoplay=0&mute=1", downloads:"raiders.txt", trans_chans:"0", filter:"sports"},
	{name:"Oasis", ID:"OASIS1", mainimg:"oasis.avif", secondaryimg:"oasis.png", mym:"oasis_stage1.mym", video:"https://www.youtube.com/embed/ckVTJC3Cw00?si=5VkUxzv5JJG_Rv4u?autoplay=0&mute=1", downloads:"oasis.txt", trans_chans:"0", filter:"music"},
	{name:"Okami", ID:"OKAMI1", mainimg:"okami.avif", secondaryimg:"okami.png", mym:"okami.mym", video:"https://www.youtube.com/embed/TkcnWGy-ujQ?autoplay=0&mute=1", downloads:"okami.txt", trans_chans:"0", filter:"game"},
	{name:"Old School Nintendo", ID:"OSNIN1", mainimg:"oldschoolnintendo.avif", secondaryimg:"oldschoolnintendo.png", mym:"old_school_nintendo.mym", video:"https://www.youtube.com/embed/mJ5oMzBG1ZU?autoplay=0&mute=1", downloads:"old_school_nintendo.txt", trans_chans:"1", filter:"game"},
	{name:"Outlaw Star", ID:"OTLWS1", mainimg:"outlawstar.avif", secondaryimg:"outlawstar.png", mym:"outlawstar.mym", video:"https://www.youtube.com/embed/io4mdaMfeVY?si=OXdT9P49YZ9MDm2T?autoplay=0&mute=1", downloads:"outlawstar.txt", trans_chans:"1", filter:"anime"},
	{name:"Ozzy", ID:"OZZY01", mainimg:"ozzy.avif", secondaryimg:"ozzy.png", mym:"ozzy.mym", video:"https://www.youtube.com/embed/fsoy-ba__Ws?si=6DdTQtgYvRVHdTd3?autoplay=0&mute=1", downloads:"ozzy.txt", trans_chans:"1", filter:"music"},
	{name:"Pearl Jam", ID:"PLJAM1", mainimg:"pearl_jam.avif", secondaryimg:"pearl_jam.png", mym:"pearl_jam.mym", video:"https://www.youtube.com/embed/3WXtD_oQ1pE?si=dpinABw4dM5yUWgl?autoplay=0&mute=1", downloads:"pearl_jam.txt", trans_chans:"1", filter:"music"},
	{name:"Penguins of Madagascar", ID:"POMAD1", mainimg:"penguinsofmad.avif", secondaryimg:"penguinsofmad.png", mym:"penguins_of_madagascar_stage1.mym", video:"https://www.youtube.com/embed/aPajUbxTHrc?si=AL1oim4RmvRDfALz?autoplay=0&mute=1", downloads:"penguinsofmad.txt", trans_chans:"0", filter:"cartoon"},
	{name:"Phoenix Wright", ID:"PHWRT1", mainimg:"phoenixwright.avif", secondaryimg:"phoenixwright.png", mym:"phoenixwright.mym", video:"https://www.youtube.com/embed/0XphLNZ0Gvs?si=-iAzRj3L4lnzKBBX?autoplay=0&mute=1", downloads:"phoenixwright.txt", trans_chans:"0", filter:"game"},
	{name:"Pikmin", ID:"PIKMN1", mainimg:"pikmin.avif", secondaryimg:"pikmin.png", mym:"pikmin.mym", video:"https://www.youtube.com/embed/243IWjOtVW0?autoplay=0&mute=1", downloads:"pikmin.txt", trans_chans:"1", filter:"game"},
	{name:"Pink Floyd", ID:"PKFLD1", mainimg:"pinkfloyd.avif", secondaryimg:"pinkfloyd.png", mym:"pinkfloyd_stage1.mym", video:"https://www.youtube.com/embed/QifE1VJskB4?si=j1bR3fmv7Oa7J1mX?autoplay=0&mute=1", downloads:"pinkfloyd.txt", trans_chans:"0", filter:"music"},
	{name:"Pink Wii", ID:"PNKWI1", mainimg:"pinkwii.avif", secondaryimg:"pinkwii.png", mym:"pinkwii.mym", video:"https://www.youtube.com/embed/6KIc0Ti_yek?si=8Rm43KU7WHDQwgsV?autoplay=0&mute=1", downloads:"pinkwii.txt", trans_chans:"1", filter: "darkwii/views"},
	{name:"Pirate Skulls", ID:"PRSKL1", mainimg:"pirateskulls.avif", secondaryimg:"piratesskulls.png", mym:"pirateskulls_stage1.mym", video:"https://www.youtube.com/embed/_92PsnJB0N4?si=2S3TqVFy-X23KAJH?autoplay=0&mute=1", downloads:"pirateskulls.txt", trans_chans:"1", filter:"misc"},
	{name:"Pittsburgh Penguins", ID:"PENGUN", mainimg:"penguins.avif", secondaryimg:"penguins.png", mym:"penguins.mym", video:"https://www.youtube.com/embed/lvZfLnIBoI4?si=vqBy0oEkULIAo0t-?autoplay=0&mute=1", downloads:"penguins.txt", trans_chans:"1", filter:"sports"},
	{name:"Pittsburgh Steelers", ID:"STELR1", mainimg:"steelers.avif", secondaryimg:"steelers.png", mym:"steelers_stage1.mym", video:"https://www.youtube.com/embed/2iRmunSmf1c?si=FQRhgCgtt67SQm1i?autoplay=0&mute=1", downloads:"steelers.txt", trans_chans:"0", filter:"sports"},
	{name:"Pizza Tower", ID:"PIZTR1", mainimg:"pizzatower.avif", secondaryimg:"pizzatower.png", mym:"pizzatower.mym", video:"https://www.youtube.com/embed/f_cW-8lp1b4?si=932VvV03RpKo0cfy?autoplay=0&mute=1", downloads:"pizzatower.txt", trans_chans:"1", filter:"game/views"},
	{name:"Predator", ID:"PREDR1", mainimg:"predator.avif", secondaryimg:"predator.png", mym:"predator.mym", video:"https://www.youtube.com/embed/QmCt75ROOxc?si=T7b3hggOhc9acsE9?autoplay=0&mute=1" ,downloads:"predator.txt", trans_chans:"1", filter:"movie"},
	{name:"Princess Ariel v1", ID:"PARIE1", mainimg:"princess_ariel_v1.avif", secondaryimg:"princess_ariel_v1.png", mym:"princess_ariel_v1.mym", video:"https://www.youtube.com/embed/gTVq66QoR0k?si=Nb3yILXlOUIPYX6D?autoplay=0&mute=1", downloads:"princess_ariel_v1.txt", trans_chans:"1", filter:"cartoon"},
	{name:"Princess Ariel v2", ID:"PARIE2", mainimg:"princess_ariel_v2.avif", secondaryimg:"princess_ariel_v2.png", mym:"princess_ariel_v2.mym", video:"https://www.youtube.com/embed/OvJgxkaySdE?si=f4cuyHBvc87CmpJR?autoplay=0&mute=1", downloads:"princess_ariel_v2.txt", trans_chans:"1", filter:"cartoon"},
	{name:"Princess Ariel v3", ID:"PARIE3", mainimg:"princess_ariel_v3.avif", secondaryimg:"princess_ariel_v3.png", mym:"princess_ariel_v3.mym", video:"https://www.youtube.com/embed/1yUyvw0ltpE?si=OrKwlOtmE4xJB9xB?autoplay=0&mute=1", downloads:"princess_ariel_v3.txt", trans_chans:"1", filter:"cartoon"},
	{name:"Psychedelic", ID:"PSYCO1", mainimg:"Psychedelic.avif", secondaryimg:"psycedelic.png", mym:"psychedelic.mym", video:"https://www.youtube.com/embed/7aFjlUc8qlo?autoplay=0&mute=1", downloads:"psychedelic.txt", trans_chans:"1", filter:"misc"},
	{name:"Punch Out", ID:"PNOUT1", mainimg:"punch_out.avif", secondaryimg:"punchout.png", mym:"punch_out.mym", video:"https://www.youtube.com/embed/ZLUdB9Kcfsg?si=p1MxmyLtZtlQyghJ?autoplay=0&mute=1", downloads:"punch_out.txt", trans_chans:"1", filter:"game"},
	{name:"The Punisher", ID:"PUNSH1", mainimg:"punisher.avif", secondaryimg:"punisher.png", mym:"punisherstage1.mym", video:"https://www.youtube.com/embed/iSYrRCjLmCg?si=uVN5DKmzOxJYR_Ta?autoplay=0&mute=1", downloads:"punisher.txt", trans_chans:"0", filter:"movie"},
	{name:"Randy Orton", ID:"ORTON1", mainimg:"randyorton.avif", secondaryimg:"randyorton.png", mym:"randy_orton.mym", video:"https://www.youtube.com/embed/sX6NZOU9nKI?si=qP_lEihTrqgqm31g?autoplay=0&mute=1", downloads:"randyorton.txt", trans_chans:"1", filter:"individual"},
	{name:"Ratchet and Clank", ID:"RCLNK1", mainimg:"ratchetandclank.avif", secondaryimg:"ratchetnclank.png", mym:"ratchet_and_clank.mym", video:"https://www.youtube.com/embed/G_z6DopJRRo?autoplay=0&mute=1", downloads:"ratchet_and_clank.txt", trans_chans:"0", filter:"game"},
	{name:"Reconnect 24 Blue", ID:"RC2402", mainimg:"rc24_blue.avif", secondaryimg:"rc24blue.png", mym:"rc24_blue.mym", video:"https://www.youtube.com/embed/DAjytOLv1r0?si=__5iuVTUmvWLDa2m?autoplay=0&mute=1", downloads:"rc24_blue.txt", trans_chans:"1", filter:"misc"},
	{name:"Reconnect 24 Red", ID:"RC2401", mainimg:"rc24_red.avif", secondaryimg:"rc24red.png", mym:"rc24_red.mym", video:"https://www.youtube.com/embed/CF2R3WsNga0?si=MA3yerCcYqtqJjKL?autoplay=0&mute=1", downloads:"rc24_red.txt", trans_chans:"1", filter:"misc"},
	{name:"Resident Evil 4", ID:"RESEVE", mainimg:"re4.avif", secondaryimg:"re4.png", mym:"re4.mym", video:"https://www.youtube.com/embed/CAW7_AWXaGA?si=DZphIXiqpJ2OB0vj?autoplay=0&mute=1", downloads:"re4.txt", trans_chans:"1", filter:"game"},
	{name:"Rey Mysterio", ID:"RMYST1", mainimg:"rey_mysterio.avif", secondaryimg:"rey_mysterio.png", mym:"rey_mysterio.mym", video:"https://www.youtube.com/embed/9nP6maLtFpo?si=3IYQfVBTs7HYUkg7?autoplay=0&mute=1", downloads:"rey_mysterio.txt", trans_chans:"1", filter:"individual"},
	{name:"Rhythm Heaven", ID:"RHYTH1", mainimg:"rhythmheaven.avif", secondaryimg:"rhythmheaven.png", mym:"rhythm_heaven.mym", video:"https://www.youtube.com/embed/8JJ4CpvZuog?si=riGPHoFJIcn804nD?autoplay=0&mute=1", downloads:"rhythmheaven.txt", trans_chans:"1", filter:"game"},
	{name:"Rick and Morty", ID:"RMORT1", mainimg:"ricknmorty.avif", secondaryimg:"ricknmorty.png", mym:"ricknmorty.mym", video:"https://www.youtube.com/embed/ut2-QJWKy8s?si=G8aKdj3r_ysDp-xm?autoplay=0&mute=1", downloads:"ricknmorty.txt", trans_chans:"1", filter:"cartoon"},
	{name:"Robot Chicken", ID:"RCHCK1", mainimg:"robotchicken.avif", secondaryimg:"robotchicken.png", mym:"robot_chicken.mym", video:"https://www.youtube.com/embed/FNNp-U3oVoA?si=9i1qyazsGQwT5e0J?autoplay=0&mute=1", downloads:"robot_chicken.txt", trans_chans:"1", filter:"cartoon"},
	{name:"Rockband 2", ID:"RBAND1", mainimg:"rockband2.avif", secondaryimg:"rockband2.png", mym:"rockband_2.mym", video:"https://www.youtube.com/embed/HojBuUxihp0?autoplay=0&mute=1", downloads:"rockband_2.txt", trans_chans:"1", filter:"game"},
	{name:"Rondo of Blood", ID:"RBLOD1", mainimg:"rondo_of_blood.avif", secondaryimg:"rondo_of_blood.png", mym:"rondo_of_blood.mym", video:"https://www.youtube.com/embed/ujTz_RPfg3c?si=qnY_pEziyYULcIOO?autoplay=0&mute=1", downloads:"rondo_of_blood.txt", trans_chans:"1", filter:"game"},
	{name:"Saw", ID:"SAW001", mainimg:"saw.avif", secondaryimg:"saw.png", mym:"saw.mym", video:"https://www.youtube.com/embed/eXwIhUHvR54?si=dfoML_2H9z_oAYtE?autoplay=0&mute=1", downloads:"saw.txt", trans_chans:"1", filter:"movie"},
	{name:"ScarFace", ID:"SCRFC1", mainimg:"scarface.avif", secondaryimg:"scarface.png", mym:"scarface.mym", video:"https://www.youtube.com/embed/9RhlWGcj2kE?si=pewzRUj42jsPAiAd?autoplay=0&mute=1", downloads:"scarface.txt", trans_chans:"1", filter:"movie"},
	{name:"Secrets of Mana", ID:"SECOM1", mainimg:"secretsofmana.avif", secondaryimg:"secretsofmana.png", mym:"secretsofmana.mym", video:"https://www.youtube.com/embed/aZhR4HabUio?si=Ie0k3oNUYqWFP021?autoplay=0&mute=1", downloads:"secretsofmana.txt", trans_chans:"0", filter:"game"},
	{name:"Seinfeld", ID:"SEINF1", mainimg:"Seinfeld.avif", secondaryimg:"seinfeld.png", mym:"Seinfeld.mym", video:"https://www.youtube.com/embed/eOaZT1FxPpg?si=uIcRH1bDJj5cRluR?autoplay=0&mute=1", downloads:"Seinfeld.txt", trans_chans:"0", filter:"movie"},
	{name:"Sendo World", ID:"SENDO1", mainimg:"sendo.avif", secondaryimg:"sendo.png", mym:"sendo.mym", video:"https://www.youtube.com/embed/0V8MT5j6IXw?si=zJqP_NIE6TEGX557?autoplay=0&mute=1", downloads:"sendo.txt", trans_chans:"1", filter:"misc"},
	{name:"Shadow The Hedgehog", ID:"SHADH1", mainimg:"shadowthehedgehog.avif", secondaryimg:"shadowthehedgehog.png", mym:"shadow_the_hedgehog.mym", video:"https://www.youtube.com/embed/yOXIGrcxR8A?autoplay=0&mute=1", 
	downloads:"shadow_the_hedgehog.txt", trans_chans:"1", filter:"game"},
	{name:"Shakugan no Shana", ID:"SHANA1", mainimg:"shana.avif", secondaryimg:"shana.png", mym:"shana_stage1.mym", video:"https://www.youtube.com/embed/C3-nCcGBZAw?si=oFJr0xaJKS0txMd2?autoplay=0&mute=1", downloads:"shana.txt", trans_chans:"0", filter:"anime"},
	{name:"ShineDown", ID:"SHNDWN", mainimg:"shinedown.avif", secondaryimg:"shinedown.png", mym:"shinedown_stage1.mym", video:"https://www.youtube.com/embed/NY60BLYvOoo?si=MBrjPmchDXntevOV?autoplay=0&mute=1", downloads:"shinedown.txt", trans_chans:"0", filter:"music"},
	{name:"Silver The Hedgehog", ID:"SILVH1", mainimg:"silverthehedgehog.avif", secondaryimg:"silverthehedgehog.png", mym:"silver_the_hedgehog.mym", video:"https://www.youtube.com/embed/sUx2VXxMLr0?si=8_HUuPqHAL3ZFMRm?autoplay=0&mute=1", downloads:"silver_the_hedgehog.txt", trans_chans:"0", filter:"game"},
	{name:"Smash Brothers Brawl", ID:"SMASH1", mainimg:"smashbros.avif", secondaryimg:"smashbros.png", mym:"smash_brothers_brawl.mym", video:"https://www.youtube.com/embed/03U2w5wxjBI?si=Gx5DCBH652Cz0fUq?autoplay=0&mute=1", downloads:"smashbros.txt", trans_chans:"1", filter:"game"},
	{name:"Smokers", ID:"SMOKE1", mainimg:"smokers.avif", secondaryimg:"smokers.png", mym:"smokers.mym", video:"https://www.youtube.com/embed/J_GIWMGx17c?si=ndYpnAAtm542Q7H9?autoplay=0&mute=1", downloads:"smokers.txt", trans_chans:"1", filter:"misc"},
	{name:"Snoopy", ID:"SNOOP1", mainimg:"snoopy.avif", secondaryimg:"snoopy.png", mym:"snoopy.mym", video:"https://www.youtube.com/embed/R4Q3qtGEdcY?si=GfMZojNlX3aaVe6L?autoplay=0&mute=1", downloads:"snoopy.txt", trans_chans:"0", filter:"cartoon"},
	{name:"Sonic 3", ID:"SONIC3", mainimg:"sonic3.avif", secondaryimg:"sonic3.png", mym:"sonic3.mym", video:"https://www.youtube.com/embed/0msM2kAnPh4?si=_eXGLbMZIrB0_pGI?autoplay=0&mute=1", downloads:"sonic3.txt", trans_chans:"1", filter:"game"},
	{name:"Sonic Frontiers", ID:"SNCFT1", mainimg:"sonicfrontiers.avif", secondaryimg:"sonicfrontiers.png", mym:"sonicfrontiers.mym", video:"https://www.youtube.com/embed/M0O_gZVsvD8?si=yiKvqA03X17y8k1b?autoplay=0&mute=1", downloads:"sonicfrontiers.txt", trans_chans:"1", filter:"game"},
	{name:"Sonic Riders", ID:"SNCRD1", mainimg:"sonicriders.avif", secondaryimg:"sonicriders.png", mym:"sonicriders.mym", video:"https://www.youtube.com/embed/amt6z0G3XxM?si=pkHn7BI-wyPp_4hn?autoplay=0&mute=1", downloads:"sonicriders.txt", trans_chans:"1", filter:"game"},
	{name:"Sons of Anarchy", ID:"SONOA1", mainimg:"sonsofanarchy.avif", secondaryimg:"sonsofanarchy.png", mym:"sonsofanarchy_stage1.mym", video:"https://www.youtube.com/embed/5PS-w8NF-ZU?si=M1l1WqFuCtTuQj4Y?autoplay=0&mute=1", downloads:"sonsofanarchy.txt", trans_chans:"0", filter:"movie"},
	{name:"South Park", ID:"STHPK1", mainimg:"southpark.avif", secondaryimg:"southpark.png", mym:"southpark.mym", video:"https://www.youtube.com/embed/hGaZ6dzp7A0?si=Ft6dZ78gAII1_Lqv?autoplay=0&mute=1", downloads:"southpark.txt", trans_chans:"1", filter:"cartoon"},
	{name:"Spawn", ID:"SPAWN1", mainimg:"spawn.avif", secondaryimg:"spawn.png", mym:"spawn.mym", video:"https://www.youtube.com/embed/ty2cAYvhqwE?si=zOcqMAxxXFvFkW0v?autoplay=0&mute=1", downloads:"spawn.txt", trans_chans:"1", filter:"movie"},
	{name:"Spice & Wolf", ID:"SPICE1", mainimg:"spiceandwolf.avif", secondaryimg:"spiceandwolf.png", mym:"spiceandwolf.mym", video:"https://www.youtube.com/embed/z4e-GOvnn8M?si=yX3Vc-Y_Z7BBMm3s?autoplay=0&mute=1", downloads:"spiceandwolf.txt", trans_chans:"1", filter:"anime"},
	{name:"Spiderman", ID:"SPDMN1", mainimg:"spiderman.avif", secondaryimg:"spiderman.png", mym:"Spiderman.mym", video:"https://www.youtube.com/embed/FBqAhYI2eb0?autoplay=0&mute=1", downloads:"Spiderman.txt", trans_chans:"1", filter:"movie"},
	{name:"SpongeBob", ID:"SPONG1", mainimg:"spongebob.avif", secondaryimg:"spongebob.png", mym:"spongebob.mym", video:"https://www.youtube.com/embed/9uTA4kcxy7s?si=L855-PxHBxFVYZAa?autoplay=0&mute=1", downloads:"spongebob.txt", trans_chans:"1", filter:"cartoon"},
	{name:"Squid Billies", ID:"SQUBL1", mainimg:"squidbillies.avif", secondaryimg:"squidbillies.png", mym:"squid_billiesstage1.mym", video:"https://www.youtube.com/embed/Si1EK-0t_l4?si=xXq63txbpE2kF6Jo?autoplay=0&mute=1", downloads:"squidbillies.txt", trans_chans:"1", filter:"cartoon"},
	{name:"StarCraft", ID:"STCFT1", mainimg:"starcraft.avif", secondaryimg:"starcraft.png", mym:"star_craft.mym", video:"https://www.youtube.com/embed/Skg45dVotEQ?si=3mqJ_jgB2bXH9Hn9?autoplay=0&mute=1", downloads:"starcraft.txt", trans_chans:"0", filter:"game"},
	{name:"Star Gate", ID:"STGTE1", mainimg:"stargate.avif", secondaryimg:"stargate.png", mym:"star_gate.mym", video:"https://www.youtube.com/embed/6LwuadUQlME?si=kDPm8DudqC4U1401?autoplay=0&mute=1", downloads:"stargate.txt", trans_chans:"1", filter:"movie"},
	{name:"Star Wars", ID:"STWRS1", mainimg:"starwars.avif", secondaryimg:"starwars.png", mym:"star_wars.mym", video:"https://www.youtube.com/embed/DYSM94FogyE?si=Y_IWo8pldhinyw0o?autoplay=0&mute=1", downloads:"starwars.txt", trans_chans:"1", filter:"movie"},
	{name:"Star Wars Unleashed", ID:"STWRS2", mainimg:"starwarsunleashed.avif", secondaryimg:"starwarsunleashed.png", mym:"star_wars_unleashed.mym", video:"https://www.youtube.com/embed/rEzDAw0MGDo?si=mFL6Jj29KfGEz3A9?autoplay=0&mute=1", downloads:"starwarsunleashed.txt", trans_chans:"1", filter:"movie"},
	{name:"Steel Wii", ID:"STWII1", mainimg:"steelwii.avif", secondaryimg:"steelwii.png", mym:"steel_wii.mym", video:"https://www.youtube.com/embed/xPt3KYIEG3s?si=tE6mo4fh9V-_q4Ci?autoplay=0&mute=1", downloads:"steelwii.txt", trans_chans:"1", filter:"darkwii"},
	{name:"Storms", ID:"STRM", mainimg:"storms.avif", secondaryimg:"storms.png", mym:"storms", video:"https://www.youtube.com/embed/GEm3yC-wxYo?si=hMEv7iq9tuqThP_y?autoplay=0&mute=1", downloads:"storms.txt", trans_chans:"1", filter:"misc"},
	{name:"Street Fighter", ID:"STRFT1", mainimg:"streetfighter.avif", secondaryimg:"streetfighter.png", mym:"street_fighter.mym", video:"https://www.youtube.com/embed/KLXauIJOTDA?si=hk-rGcX3ZEwfoKXb?autoplay=0&mute=1", downloads:"streetfighter.txt", trans_chans:"1", filter:"game"},
	{name:"Super Hero Squad", ID:"SHSQU1", mainimg:"superherosquad.avif", secondaryimg:"superherosquad.png", mym:"super_hero_squad.mym", video:"https://www.youtube.com/embed/VB-v2TYAO0g?autoplay=0&mute=1", downloads:"super_hero_squad.txt", trans_chans:"0", filter:"cartoon"},
	{name:"Super Mario Brothers 3", ID:"SMARB3", mainimg:"supermariobros3.avif", secondaryimg:"supermariobros3.png", mym:"supermariobros3.mym", video:"https://www.youtube.com/embed/268nYJglv4U?si=0KEaeCwJYvEijF11?autoplay=0&mute=1", downloads:"supermariobros3.txt", trans_chans:"1", filter:"game"},
	{name:"Super Mario RPG", ID:"SMRPG1", mainimg:"supermarioRPG.avif", secondaryimg:"supermariorpg.png", mym:"super_mario_RPG.mym", video:"https://www.youtube.com/embed/wMuN_a_lNqU?autoplay=0&mute=1", downloads:"super_mario_RPG.txt", trans_chans:"1", filter:"game"},
	{name:"Super Mario Sunshine", ID:"SMSUN1", mainimg:"supermariosunshine.avif", secondaryimg:"supermariosunshine.png", mym:"supermariosunshine.mym", video:"https://www.youtube.com/embed/wq_LWUynBx0?si=zRKrg60DvGEq_R7X?autoplay=0&mute=1", downloads:"supermariosunshine.txt", trans_chans:"1", filter:"game"},
	{name:"Super Paper Mario", ID:"SPAPM1", mainimg:"superpapermario.avif", secondaryimg:"superpapermario.png", mym:"superpapermario.mym", video:"https://www.youtube.com/embed/C89isBnmq6Q?si=oIaDZhf2nVaQJf3o?autoplay=0&mute=1", downloads:"superpapermario.txt", trans_chans:"1", filter:"game"},
	{name:"Super Sonic", ID:"SSONI1", mainimg:"supersonic.avif", secondaryimg:"supersonic.png", mym:"super_sonic.mym", video:"https://www.youtube.com/embed/h0OdHk8D0aQ?autoplay=0&mute=1", downloads:"super_sonic.txt", trans_chans:"1", filter:"game"},
	{name:"The Simpsons v1", ID:"SIMPS1", mainimg:"thesimpsons_v1.avif", secondaryimg:"simpsons_v1.png", mym:"the_simpsons_v1.mym", video:"https://www.youtube.com/embed/Akl4tZ9eJio?autoplay=0&mute=1", downloads:"the_simpsons_v1.txt", trans_chans:"1", filter:"cartoon"},
	{name:"The Simpsons v2", ID:"SIMPS2", mainimg:"thesimpsons_v2.avif", secondaryimg:"simpsons_v2.png", mym:"the_simpsons_v2.mym", video:"https://www.youtube.com/embed/9mgBLlYSGh8?si=jKVxOEHhvAGYwhbn?autoplay=0&mute=1", downloads:"the_simpsons_v2.txt", trans_chans:"1", filter:"cartoon"},
	{name:"The Simpsons v3", ID:"SIMPS3", mainimg:"thesimpsons_v3.avif", secondaryimg:"simpsons_v3.png", mym:"the_simpsons_v3.mym", video:"https://www.youtube.com/embed/CHfKSOvrlI0?si=cEb_ysPl5PzT2txB?autoplay=0&mute=1", downloads:"the_simpsons_v3.txt", trans_chans:"1", filter:"cartoon"},
	{name:"Tails", ID:"TAILS1", mainimg:"tails.avif", secondaryimg:"tails.png", mym:"tailsstage1.mym", video:"https://www.youtube.com/embed/z5zAlItABAQ?si=SMjSBQ5WNZkofdUK?autoplay=0&mute=1", downloads:"tails.txt", trans_chans:"1", filter:"game"},
	{name:"Tamagotchi", ID:"TAMAGO", mainimg:"tamagotchi.avif", secondaryimg:"tamagotchi.png", mym:"tamagotchi.mym", video:"https://www.youtube.com/embed/BwthenuJiH4?si=CFjwIBR3dNfKaCtE?autoplay=0&mute=1", downloads:"tamagotchi.txt", trans_chans:"1", filter:"game/new"},
	{name:"The Terminator", ID:"TERMR1", mainimg:"terminator.avif", secondaryimg:"terminator.png", mym:"terminator.mym", video:"https://www.youtube.com/embed/rMwms3XB1DQ?si=a-wTlhaFf9i6FT8d?autoplay=0&mute=1", downloads:"terminator.txt", trans_chans:"1", filter:"movie"},
	{name:"Terra Nigma", ID:"TERNG1", mainimg:"terranigma.avif", secondaryimg:"terranigma.png", mym:"terranigma.mym", video:"https://www.youtube.com/embed/LazxNXpRXvw?si=p-itpgveVeMGe5XD?autoplay=0&mute=1", downloads:"terranigma.txt", trans_chans:"1", filter:"game"},
	{name:"Thunder Cats", ID:"TCATS1", mainimg:"thundercats.avif", secondaryimg:"thundercats.png", mym:"thunder_cats.mym", video:"https://www.youtube.com/embed/LJW-3B1Vooo?autoplay=0&mute=1", downloads:"thunder_cats.txt", trans_chans:"0", filter:"cartoon"},
	{name:"Teenage Mutant Ninja Turtles", ID:"TMNT01", mainimg:"tmnt.avif", secondaryimg:"tmnt.png", mym:"tmnt.mym", video:"https://www.youtube.com/embed/6cF81fjLRO4?autoplay=0&mute=1", downloads:"tmnt.txt", trans_chans:"1", filter:"cartoon"},
	{name:"Tom and Jerry", ID:"TOMJER", mainimg:"tomandjerry.avif", secondaryimg:"tomandjerry.png", mym:"tomandjerry.mym", video:"https://www.youtube.com/embed/U-9OBtVNJLU?si=D_8YLg64vGEbT07Z?autoplay=0&mute=1", downloads:"tomandjerry.txt", trans_chans:"1", filter:"cartoon/new"},
	{name:"Tomb Raider", ID:"TRAID1", mainimg:"tombraider.avif ", secondaryimg:"tombraider.png", mym:"tomb_raider.mym", video:"https://www.youtube.com/embed/-H16kD1wlKc?autoplay=0&mute=1", downloads:"tomb_raider.txt", trans_chans:"1", filter:"game"},
	{name:"Toronto Maple Leafs", ID:"LEAFS1", mainimg:"leafs.avif", secondaryimg:"leafs.png", mym:"leafs.mym", video:"https://www.youtube.com/embed/IeFrPYpmgec?si=mw3S2OtR467N-_9M?autoplay=0&mute=1", downloads:"leafs.txt", trans_chans:"1", filter:"sports"},
	{name:"Total Drama Action", ID:"TOTDR1", mainimg:"totaldrama.avif", secondaryimg:"totaldrama.png", mym:"totaldrama_stage1.mym", video:"https://www.youtube.com/embed/6geeeRfETOM?si=rPwH-iQnAjpBHSdy?autoplay=0&mute=1", downloads:"totaldrama.txt", trans_chans:"0", filter:"cartoon"},
	{name:"Toxic Toons", ID:"TTOON1", mainimg:"toxictoons.avif", secondaryimg:"toxictoons.png", mym:"toxic_toons.mym", video:"https://www.youtube.com/embed/IRLjeDzfiGQ?si=nuXELrmXGWmn7iV4?autoplay=0&mute=1", downloads:"toxictoons.txt", trans_chans:"1", filter:"cartoon"},
	{name:"Toy Story", ID:"TOYST1", mainimg:"toystory.avif", secondaryimg:"toystory.png", mym:"toystory.mym", video:"https://www.youtube.com/embed/1iOu1xbeCvQ?si=J153NgntABefMKe4?autoplay=0&mute=1", downloads:"toystory.txt", trans_chans:"1", filter:"movie"},
	{name:"Transformers", ID:"TRANS1", mainimg:"transformers.avif", secondaryimg:"transformers.png", mym:"transformers.mym", video:"https://www.youtube.com/embed/hdEywhMs8m0?si=rg3o7Ea3Lf5sHn3D?autoplay=0&mute=1", downloads:"transformers.txt", trans_chans:"1", filter:"movie"},
	{name:"Trials of Mana", ID:"TRLOM1", mainimg:"trialsofmana.avif", secondaryimg:"trialsofmana.png", mym:"trialsofmana.mym", video:"https://www.youtube.com/embed/-LWgqb-Q14A?si=1w3dW_3SU5IMmibV?autoplay=0&mute=1", downloads:"trialsofmana.txt", trans_chans:"1", filter:"game"},
	{name:"Tri-Gun", ID:"TRGUN1", mainimg:"trigun.avif", secondaryimg:"trigun.png", mym:"tri-gun.mym", video:"https://www.youtube.com/embed/M7r54ClgzbY?si=23MBlhmxBPjDoC45?autoplay=0&mute=1", downloads:"trigun.txt", trans_chans:"1", filter:"anime"},
	{name:"Tropical Teal", ID:"TRPTL1", mainimg:"tropicalteal.avif", secondaryimg:"tropicalteal.png", mym:"tropicalteal.mym", video:"https://www.youtube.com/embed/kjqP3xHl02I?si=TXvwIOrQ4xv0KSiE?autoplay=0&mute=1", downloads:"tropicalteal.txt", trans_chans:"1", filter:"darkwii"},
	{name:"True Blood", ID:"TBLOD1", mainimg:"trueblood.avif", secondaryimg:"trueblood.png", mym:"true_blood.mym", video:"https://www.youtube.com/embed/9h0TWXmV80E?autoplay=0&mute=1", downloads:"true_blood.txt", trans_chans:"1", filter:"movie"},
	{name:"Ultimate Dark Wii", ID:"UDWII1", mainimg:"ultimatedarkwii.avif", secondaryimg:"ultimatedarkwii.png", mym:"ultimate_dark_wiistage1.mym", video:"https://www.youtube.com/embed/2-CDQr4YMJ4?si=qp3dj9ijyVunPuHG?autoplay=0&mute=1", downloads:"ultimatedarkwii.txt", trans_chans:"1", filter:"darkwii/views"},
	{name:"Vancouver Canucks", ID:"CANUCK", mainimg:"canucks.avif", secondaryimg:"canucks.png", mym:"canucks.mym", video:"https://www.youtube.com/embed/F2l1sAKWrvo?si=LXUvTCvCFmduAfLC?autoplay=0&mute=1", downloads:"canucks.txt", trans_chans:"1", filter:"sports"},
	{name:"Vegeta", ID:"VEGET1", mainimg:"vegeta.avif", secondaryimg:"vegeta.png", mym:"vegeta.mym", video:"https://www.youtube.com/embed/QO3Zf1XGBVs?si=Gxc3002G73FKOPbP?autoplay=0&mute=1", downloads:"vegeta.txt", trans_chans:"1", filter:"anime"},
	{name:"Vista", ID:"VISTA1", mainimg:"vista.avif", secondaryimg:"vista.png", mym:"vista.mym", video:"https://www.youtube.com/embed/Il6_-qWc1FM?si=iOQATO9ISemWG7vR?autoplay=0&mute=1", downloads:"vista.txt", trans_chans:"0", filter:"os/views"},
	{name:"Walleye", ID:"WALEY1", mainimg:"walleye.avif", secondaryimg:"walleye.png", mym:"walleye_stage1.mym", video:"https://www.youtube.com/embed/VD9qS8ZDQRA?si=y9wzIibaPgxiw9oJ?autoplay=0&mute=1", downloads:"walleye.txt", trans_chans:"0", filter:"misc"},
	{name:"Wario Ware", ID:"WARIO1", mainimg:"warioware.avif", secondaryimg:"warioware.png", mym:"wario_ware.mym", video:"https://www.youtube.com/embed/uAIRvmuH4-E?si=Y5eph5DHxIYvpIQr?autoplay=0&mute=1", downloads:"warioware.txt", trans_chans:"1", filter:"game"},
	{name:"Washington Capitals", ID:"CAPTLS", mainimg:"capitals.avif", secondaryimg:"capitals.png", mym:"capitals.mym", video:"https://www.youtube.com/embed/y3I8sgoNXko?si=ytuAXaWiVhGm_389?autoplay=0&mute=1", downloads:"capitals.txt", trans_chans:"1", filter:"sports"},
	{name:"White Stripes", ID:"WSTRI1", mainimg:"whitestripes.avif", secondaryimg:"whitestripes.png", mym:"white_stripesstage1.mym", video:"https://www.youtube.com/embed/f3ZobSsLBag?si=XlY3fp3KQq6ER-EW?autoplay=0&mute=1", downloads:"whitestripes.txt", trans_chans:"1", filter:"music"},
	{name:"White Wii", ID:"WHITE1", mainimg:"whitewii.avif", secondaryimg:"whitewii.png", mym:"white_wii.mym", video:"https://www.youtube.com/embed/GoGr3jLUy38?si=2kGrKcINQACVq-Tt?autoplay=0&mute=1", downloads:"whitewii.txt", trans_chans:"1", filter:"darkwii/views"},
	{name:"Wiid", ID:"WIID01", mainimg:"wiid.avif", secondaryimg:"wiid.png", mym:"wiid.mym", video:"https://www.youtube.com/embed/Gf2VpyzUVS8?si=BUGS3t8C_jzSObPe?autoplay=0&mute=1", downloads:"wiid.txt", trans_chans:"1", filter:"misc"},
	{name:"Wii Fit", ID:"WIFIT1", mainimg:"wiifit.avif", secondaryimg:"wiifit.png", mym:"wii_fit.mym", video:"https://www.youtube.com/embed/-IZVm5xSKCY?si=4mlNRyPnoQwAbrkK?autoplay=0&mute=1", downloads:"wiifit.txt", trans_chans:"1", filter:"game/views"},
	{name:"Wii Party", ID:"WIIPT1", mainimg:"wiiparty.avif", secondaryimg:"wiiparty.png", mym:"wiiparty.mym", video:"https://www.youtube.com/embed/Tty1Kfv0Hmc?si=w6YWKjMjFCpJeNPZ?autoplay=0&mute=1", downloads:"wiiparty.txt", trans_chans:"1", filter:"game"},
	{name:"Wii Party v2", ID:"WIIPT2", mainimg:"wiipartyv2.avif", secondaryimg:"wiipartyv2.png", mym:"wiipartyv2.mym", video:"https://www.youtube.com/embed/tfBqRua-dD4?si=GJXSxsYqam6OQPwY?autoplay=0&mute=1", downloads:"wiipartyv2.txt", trans_chans:"1", filter:"game"},
	{name:"Wii Sports", ID:"WSPOR1", mainimg:"wiisports.avif", secondaryimg:"wiisports.png", mym:"wii_sports.mym", video:"https://www.youtube.com/embed/nijDjtXZwTE?si=W6Ayevn-1xZUNo1D?autoplay=0&mute=1", downloads:"wiisports.txt", trans_chans:"1", filter:"top20/game/views"},
	{name:"Wii U", ID:"WIIU01", mainimg:"wiiu.avif", secondaryimg:"wiiu.png", mym:"wii_u.mym", video:"https://www.youtube.com/embed/eAwrGrJQa3I?si=p--wxO_ygmTeAox_?autoplay=0&mute=1", downloads:"wiiu.txt", trans_chans:"1", filter:"top20/os/views"},
	{name:"Windows 7", ID:"WIN701", mainimg:"windows7.avif", secondaryimg:"windows7.png", mym:"windows7.mym", video:"https://www.youtube.com/embed/DjSX6lB9FrM?si=OG2ZTzbFgaBLHj6o?autoplay=0&mute=1", downloads:"windows7.txt", trans_chans:"1", filter:"top20/os"},
	{name:"Win XP OS", ID:"WINXP1", mainimg:"winxpos.avif", secondaryimg:"windowsxp.png", mym:"win_xp_os.mym", video:"https://www.youtube.com/embed/CpMXYTumKEE?autoplay=0&mute=1", downloads:"win_xp_os.txt", trans_chans:"0", filter:"top20/os"},
	{name:"Wolverine", ID:"WOLVE1", mainimg:"wolverine.avif", secondaryimg:"wolverine.png", mym:"wolverine.mym", video:"https://www.youtube.com/embed/S60LeJR6a54?autoplay=0&mute=1", downloads:"wolverine.txt", trans_chans:"1", filter:"cartoon"},
	{name:"WWE Raw", ID:"WWERW1", mainimg:"wweraw.avif", secondaryimg:"wweraw.png", mym:"wwe_raw.mym", video:"https://www.youtube.com/embed/-wOT9u73m1M?si=cJSm8nPVI90DaOMr?autoplay=0&mute=1", downloads:"wweraw.txt", trans_chans:"0", filter:"sports"},
	{name:"Xbox 360", ID:"XBOX01", mainimg:"xbox360.avif", secondaryimg:"xbox360.png", mym:"xbox360.mym", video:"https://www.youtube.com/embed/X0If0IgP8uQ?si=9rrlUcNi_V833qXN?autoplay=0&mute=1", downloads:"xbox360.txt", trans_chans:"0", filter:"os/views"},
	{name:"Yoshi", ID:"GYOSHI", mainimg:"yoshi.avif", secondaryimg:"yoshi.png", mym:"yoshi.mym", video:"https://www.youtube.com/embed/2bTkor6tSBQ?si=ekFrbx7hw9-8jF-E?autoplay=0&mute=1", downloads:"yoshi.txt", trans_chans:"1", filter:"game"},
	{name:"Yugi-oh", ID:"YUGIO1", mainimg:"yugioh.avif", secondaryimg:"yugioh.png", mym:"yugioh.mym", video:"https://www.youtube.com/embed/sAOFnf7aGfs?si=t7e2g2Kqfn57KR4J?autoplay=0&mute=1", downloads:"yugioh.txt", trans_chans:"0", filter:"anime"},
	{name:"Zelda" , ID:"ZELDA1", mainimg:"zelda.avif", secondaryimg:"zelda.png", mym:"zelda.mym", video:"https://www.youtube.com/embed/1NptoYk4ljA?autoplay=0&mute=1", downloads:"zelda.txt", trans_chans:"1", filter:"top20/game"},
	{name:"Zelda: A Link to the Past", ID:"ZELDA2", mainimg:"zelda2.avif", secondaryimg:"zelda2.png", mym:"zelda2.mym", video:"https://www.youtube.com/embed/OErVHh9H03o?si=aXNTZq0-d6U2fK9p?autoplay=0&mute=1", downloads:"zelda2.txt", trans_chans:"1", filter:"game"},
	{name:"Zelda: Minish Cap", ID:"ZELDA3", mainimg:"minishcap.avif", secondaryimg:"minishcap.png", mym:"minishcap.mym", video:"https://www.youtube.com/embed/7FX6HbC36kU?si=BvQpizRCGeMdsTn4?autoplay=0&mute=1", downloads:"minishcap.txt", trans_chans:"1", filter:"game"},
	{name:"Zelda v2", ID:"ZELDA4", mainimg:"zelda_v4.avif", secondaryimg:"zelda_v4.png", mym:"zelda_v4.mym", video:"https://www.youtube.com/embed/qW9cCnd0dMs?si=nbwsGfzsXI7pRYP7?autoplay=0&mute=1", downloads:"zelda_v4.txt", trans_chans:"1", filter:"game"},
	{name:"ZombWii", ID:"ZOMB01", mainimg:"zombwii.avif", secondaryimg:"zombwii.png", mym:"zombwii.mym", video:"https://www.youtube.com/embed/3A-N2TKvvro?si=4osUusbbeCAC8rp9?autoplay=0&mute=1", downloads:"zombwii.txt", trans_chans:"1", filter:"misc"},
];
const theme_count = completethemeinfo.length;

function start_php_session() {
	$.ajax({
		url: "index.php",
		type: "POST",
		cache: false,
		data: { action: "getsessionId" },
		success: function(data) {
			sessionid = data;
			set_Cookie("Id", data);
		},
	});
	return sessionid;
}
function check_visitor() {
	let ided = false;
	if(check_Cookie("Id")) ided = true;
	return ided;
}
function load_regions() {
	for(let i = 0; i < Region.length; i++) {
		$('#region').append($('<option>',
			{
				value: i,
				text : Region[i] 
			}
		));
	}
	return;
}
function add_K_region() {
	//console.log("add() before len = " + Region.length);
	//if(input_in) {
	if(document.getElementById("region").options[4] == null) {
		$('#region').append($('<option>',
				{
					value: 4,
					text : "K" 
				}
		));
		//input_in = false;
	}
	//console.log("add() after len = " + Region.length);

	return; //input_in;
}
function remove_K_region() {
	//console.log(" remove() before len = " + Region.length);
	document.getElementById("region").remove(4);
	//console.log(" remove() after len = " + Region.length);
	//input_in = true;
	return; //input_in;
}
function load_versions() {
	for(let i = 0; i < version.length; i++) { 
		$('#menuversion').append($('<option>',
		{
			value: i,
			text : version[i] 
		}
		));
	}
	return;
}
function get_theme_count() {
	return theme_count;
}
function load_filter_list() {
	for (let i = 0; i < filter_list.length; i++) {
		$('#filter').append($('<option>',
			{
				value: i,
				text : filter_list[i]
			}
		));
	}
	return;
}
function load_theme_list(filter_type) {
	//alert("load_theme_list() filter_type = " + filter_type);
	$('#theme').empty();
	filtered_list_position = [];

	for (let i = 0; i < theme_count; i++) {
		if( filter_type == "game") {
			if(completethemeinfo[i].filter) {
				if(completethemeinfo[i].filter != "game") {
					if(completethemeinfo[i].filter == "top20/game")
						filtered_list_position.push(i);
					else if(completethemeinfo[i].filter == "top20/game/views")
						filtered_list_position.push(i);
					else if(completethemeinfo[i].filter == "game/views")
						filtered_list_position.push(i);
					else if(completethemeinfo[i].filter == "game/new")
						filtered_list_position.push(i);
					else continue;
				}
				else filtered_list_position.push(i); // if filter set to anime, add this theme to filtered list
			}
			else continue; // if no filter set, skip this theme
		}
		else if( filter_type == "anime") {
			if(completethemeinfo[i].filter) {
				if(completethemeinfo[i].filter != "anime") continue;
				else filtered_list_position.push(i); // if filter set to anime, add this theme to filtered list
			}
			else continue; // if no filter set, skip this theme
		}
		else if( filter_type == "music") {
			if(completethemeinfo[i].filter) {
				if(completethemeinfo[i].filter != "music") continue;
				else filtered_list_position.push(i); // if filter set to music, add this theme to filtered list
			}
			else continue; // if no filter set, skip this theme
		}
		else if( filter_type == "sports") {
			if(completethemeinfo[i].filter) {
				if(completethemeinfo[i].filter != "sports") continue;
				else filtered_list_position.push(i); // if filter set to sports, add this theme to filtered list
			}
			else continue; // if no filter set, skip this theme
		}
		else if( filter_type == "movie") {
			if(completethemeinfo[i].filter) {
				if(completethemeinfo[i].filter != "movie") {
					if(completethemeinfo[i].filter == "top20/movie")
						filtered_list_position.push(i);
					else if(completethemeinfo[i].filter == "movie/new")
						filtered_list_position.push(i);
					else continue; 
				}
				else filtered_list_position.push(i); // if filter set to movie, add this theme to filtered list
			}
			else continue; // if no filter set, skip this theme
		}
		else if( filter_type == "cartoon") {
			if(completethemeinfo[i].filter) {
				if(completethemeinfo[i].filter != "cartoon") {
					if(completethemeinfo[i].filter == "cartoon/views")
						filtered_list_position.push(i);
					if(completethemeinfo[i].filter == "cartoon/new")
						filtered_list_position.push(i);
					else continue; 
				}
				else filtered_list_position.push(i); // if filter set to cartoon, add this theme to filtered list
			}
			else continue; // if no filter set, skip this theme
		}
		else if( filter_type == "darkwii") {
			if(completethemeinfo[i].filter) {
				if(completethemeinfo[i].filter != "darkwii") {
					if(completethemeinfo[i].filter == "top20/darkwii")
						filtered_list_position.push(i);
					else if(completethemeinfo[i].filter == "darkwii/new")
						filtered_list_position.push(i);
					else continue; 
				}
				else filtered_list_position.push(i); // if filter set to darkwii, add this theme to filtered list
			}
			else continue; // if no filter set, skip this theme
		}
		else if( filter_type == "os") {
			if(completethemeinfo[i].filter) {
				if(completethemeinfo[i].filter != "os") {
					if(completethemeinfo[i].filter == "top20/os")
						filtered_list_position.push(i);
					else if(completethemeinfo[i].filter == "top20/os/views")
						filtered_list_position.push(i);
					else if(completethemeinfo[i].filter == "os/views")
						filtered_list_position.push(i);
					else continue;
				}
				else filtered_list_position.push(i); // if filter set to os, add this theme to filtered list
			}
			else continue; // if no filter set, skip this theme
		}
		else if( filter_type == "individual") {
			if(completethemeinfo[i].filter) {
				if(completethemeinfo[i].filter != "individual") continue;
				else filtered_list_position.push(i); // if filter set to individual, add this theme to filtered list
			}
			else continue; // if no filter set, skip this theme
		}
		else if( filter_type == "misc") {
			if(completethemeinfo[i].filter) {
				if(completethemeinfo[i].filter != "misc") {
					if(completethemeinfo[i].filter == "misc/views")
						filtered_list_position.push(i);
					else continue;
				}
				else filtered_list_position.push(i); // if filter set to misc, add this theme to filtered list
			}
			else continue; // if no filter set, skip this theme
		}
		else if( filter_type == "top20") {
			if(completethemeinfo[i].filter) {
				if(completethemeinfo[i].filter == "top20/darkwii")
					filtered_list_position.push(i); 
				else if(completethemeinfo[i].filter == "top20/game")
					filtered_list_position.push(i); 
				else if(completethemeinfo[i].filter == "top20/os")
					filtered_list_position.push(i);
				else if(completethemeinfo[i].filter == "top20/movie")
					filtered_list_position.push(i); 
				else if(completethemeinfo[i].filter == "top20/os/views")
					filtered_list_position.push(i);
				else if(completethemeinfo[i].filter == "top20/game/views")
					filtered_list_position.push(i); 
				else continue;
			}
			else continue; // if no filter set, skip this theme
		}
		else if( filter_type == "views") {
			if(completethemeinfo[i].filter) {
				if(completethemeinfo[i].filter == "top20/os/views")
					filtered_list_position.push(i);
				else if(completethemeinfo[i].filter == "top20/game/views")
					filtered_list_position.push(i);
				else if(completethemeinfo[i].filter == "os/views")
						filtered_list_position.push(i);
				else if(completethemeinfo[i].filter == "misc/views")
					filtered_list_position.push(i);
				else if(completethemeinfo[i].filter == "game/views")
					filtered_list_position.push(i);
				else if(completethemeinfo[i].filter == "cartoon/views")
					filtered_list_position.push(i);
				else if(completethemeinfo[i].filter == "darkwii/views")
					filtered_list_position.push(i);
				else continue;
			}
			else continue; // if no filter set, skip this theme
		}
		else if( filter_type == "new") {
			if(completethemeinfo[i].filter) {
				if(completethemeinfo[i].filter == "cartoon/new")
					filtered_list_position.push(i);
				else if(completethemeinfo[i].filter == "darkwii/new")
					filtered_list_position.push(i);
				else if(completethemeinfo[i].filter == "game/new")
					filtered_list_position.push(i);
				else if(completethemeinfo[i].filter == "movie/new")
					filtered_list_position.push(i);
				else continue;
			}
			else continue; // if no filter set, skip this theme
		}
		$('#theme').append($('<option>',
		{
			value: i,
			text : completethemeinfo[i].name
		}
		));
	}

	return;
}
function set_Cookie(cname, cvalue) {
	document.cookie = cname + "=" + cvalue + ";" + "Samesite=Strict;";
	return;
}
function get_Cookie(cname) {
	let id = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
  	let ca = decodedCookie.split(';');
 	for(let i = 0; i <ca.length; i++) {
	  	let c = ca[i];
	  	while (c.charAt(0) == ' ') {
 		 	c = c.substring(1);
	  	}
	  	if (c.indexOf(id) == 0) {
			return c.substring(id.length, c.length);
 		}
  	}
	return "";
}
function check_Cookie(input) {
	let ret = null;
	let id = get_Cookie(input);
	if (id != "") {
		//console.log("session id set = " + id);
		ret = true;
	} 
	else {
		//console.log("first load set cookie");
		ret = false;
	}
	return ret;
}
function container_bubble(which_bubble, show) {
    console.log(which_bubble);
    let y = null;
    y = "#container_" + which_bubble + "_bubble";
    if(show) $(y).css("display", "block");
    else $(y).css("display", "none");
    return;
}
function showmodal(modaltype) {
    var modal = document.getElementById("modal");
    var modal_close = document.getElementsByClassName("close")[0];

    switch(modaltype) {
        case 1: {
            $("#modaltitle").css("color", "red");
			$("#modaltitle").text("Warning");
			$(".modal-body").html('<div id="infocontainer" class="text-center"></div><h1 class="text-blue text-center smallcaps">Wii System Menu Theme Builder</h1><hr></hr><p class="text-center">This site will help you build a Theme(.csm file) to install on the Nintendo Wii .</p><br></br><p class="text-center"><span class="warninglight"><b><i><em>WARNING :</b></i></em></span> This file can <b><em>BRICK</em></b> your wii .<br><br>Proceed at your <b><em>OWN</em></b> risk !!</p><br></br></div>');
			setTimeout(function(){
				$("#modaltitle").css("color", "black");
			$("#modaltitle").text("Build A Custom Theme");
            $(".modal-body").html('<div id="buildingcontainer" class=" text-white ID-black border-white border-radius border-white-shadow"><div id="previewcontainer" class=""><img title="Click to show Images of Theme ." class="preview" id="preview1" src="" alt="preview picture 1" onclick="show_dual_pictures()"></img><div id="themevideocontainer" class="border-radius hidden" ><iframe id="videoframe" class="border-radius" src="" title="" frameborder="0" allowfullscreen></iframe></div><div title="Previous Theme" id="larrow" class="text-center border-radius clearfix" onclick="image_controls(-1)">&lt;&lt;</div><div title="Next Theme" id="rarrow" class="text-center border-radius clearfix" onclick="image_controls(1)">&gt;&gt;</div><div title="Check out a video of the theme" id="checkpreview" class="text-center border-radius" onclick="swap_mode()">Theme Video Preview</div></div><div id="building" class=""><div><label for="filter" id="filter_label">Categories : </label><select class="buildselect" title="Choose a Category for the theme list ." id="filter" name="filter" onchange="get_filter_option()"></select></div><label for="themeset" id="themelabel"class="border-yellow border-radius border-yellow-shadow buildlabel ">Select Theme :</label><select title="Select a Theme" class="buildselect border-orange border-radius border-orange-shadow" name="themeset" id="theme" onchange="get_build_options(3)">	</select><br></br><label for="menuversionset" id="menuversionlabel" class="border-yellow border-radius border-yellow-shadow buildlabel ">Select System Menu Version :</label><select title="Select a Menu Version" class="buildselect border-orange border-radius border-orange-shadow" name="menuversionset" id="menuversion" onchange="get_build_options(1)"></select><br></br><label for="regionset" id="regionlabel" class="border-yellow border-radius border-yellow-shadow buildlabel ">Select System Region :</label><select title="Select a Region" class="buildselect border-orange border-radius border-orange-shadow" name="regionset" id="region" onchange="get_build_options(2)"></select><br></br><button title="Build and Download Theme" id="continue" class="text-white ID-black border-green border-radius border-green-shadow" onclick="build_theme()">Build Theme</button></div><div id="spinoption" class=""><div id="csmsourcelabel" class="border-orange border-radius border-orange-shadow buildlabel"><b><i>Optional</i></b> :</div><br><br><input type="checkbox" name="csmsource" id="csmsourcebox"></input><label for="csmsourcebox" title="check box to download zip file with theme source files{.mym, .app, spintype.mym} and theme file(.csm) ." id="csmsourceboxlabel">Theme source files</label><br></br><br></br><input type="checkbox" name="trans_spin" id="trans_spinbox" onchange="get_build_options(5)"></input><label for="trans_spinbox" title="check box to add transparent channels" id="trans_spinboxlabel">Transparent Channels</label><div id="optionlabel" class="border-orange border-radius border-orange-shadow buildlabel"><b><i>Optional</i></b> :</div><br><br><input type="radio" name="option" id="fastspin" value="fastspin"></input><label for="fastspin" id="fastspinlabel" title="A fast spinning channel outline">Fast Spin Channels</label><br><br><input type="radio" name="option" id="spin" value="spin"></input><label for="spin" id="spinlabel" title="A spinning chanel outline">Spin Channels</label><br><br><input type="radio" name="option" id="nospin" value="nospin" checked></input><label for="nospin" id="nospinlabel" title="A none spinning channel outline">No Spin Channels</label><br><br><div title="Your Selection Error Info." id="message" class="border-yellow border-radius border-yellow-shadow ID-black text-white hidden"></div><div id="downloadcnt">0 Downloads</div></div></div>');
			load_filter_list();
			load_theme_list("All");
			load_versions();
			load_regions();
			load_media();
			get_data_File(completethemeinfo[themeposition].downloads);
			//getsingleDLcnt(themeposition);
			let spinoption = document.getElementsByName('option');
			if(spinoption[2].checked == false)
				spinoption[2].checked = true;
		},4000);
        }break;
        case 2: {
            $("#modaltitle").text("Helpful Links");
            
            $(".modal-body").html("<div id='links_container'><br /><div class='links'><a target='blank' href='https://gbatemp.net'>GBAtemp</a> &gt;&gt;&gt; The best gaming community .</div><br /><div class='links'><a target='blank' href='https://gbatemp.net/threads/wii-themer-org.628144/'>Wii Themer</a> &gt;&gt;&gt; on GBATemp .</div><br /><div class='links'><a target='blank' href='https://gbatemp.net/threads/best-way-to-mod-any-wii-modmii-for-windows-official-support-thread.207126/page-486'>ModMii</a> &gt;&gt;&gt; on GBATemp . The best way to mod a wii .</div><br /><hr /><br /><div class='links'><a target='blank' href='https://gbatemp.net/threads/wii-theme-team-creations.260327/'> Wii Theme Team</a> &gt;&gt;&gt; The team that made all the Dark Wii Colored themes . </div><br /><div class='links'><a target='blank' href='https://www.youtube.com/user/McDiddy81/videos'>Diddy81 Youtube Channel</a> &gt;&gt;&gt; One of the main members of the Wii Theme Team .</div><br /><div class='links'><a target='blank' href='https://gbatemp.net/threads/wii-themes.174895/'>Frylok's Themes</a> &gt;&gt;&gt; More themes .</div><br /><div class='links'><a target='blank' href='http://wiithemer.org/mym/'>Theme Database</a> &gt;&gt;&gt; A database of all the available theme .mym files .</div><br /><hr /><br /><div class='links'><a target='blank' href='https://wii.guide/themes'>Wii Guide</a> &gt;&gt;&gt; Guide : Installing Wii Menu Themes </div><br /><div class='links'><a target='blank' href='https://wiibrew.org/wiki/System_Menu'>Wii Brew</a> &gt;&gt;&gt; A great place to learn about the Wii's tech .</div><br /></div>");
        }break;
        case 3: {
            $("#modaltitle").text("Wii Themer Info");
            //for(let i = 0; i < 3; ++i)
			//	get_installer_Downloads(i);
		   //	for(let i = 0; i < 3; ++i)
		   //		get_count_files(i);
			//for(let i = 0; i < 5; ++i)
			//	get_region_DLcnt(i);
			//get_vwii_downloads();
			//for(let i = 0; i < 4; ++i)
			//	get_vwii_region_downloads(i);
			get_data_File("visitors");
			get_data_File("wiithemer");
			get_data_File("mymenuifymod");
			get_data_File("csminstaller");
			get_data_File("wii_downloads");
			get_data_File("vwii_downloads");
			get_data_File("vwii_U");
			get_data_File("vwii_E");
			get_data_File("vwii_J");
			get_data_File("wii_U");
			get_data_File("wii_E");
			get_data_File("wii_J");
			get_data_File("wii_K");
            $(".modal-body").html('<div id ="usage_title"><p>Currently <span id="themecounttext"></span> Themes Available .</p></div><div id="about_container"><div id="about_left"><p>Click "Disc Channel" to visit Dolphin Wii Emuator Website .</p><p>Click "HomeBrew Channel" to visit the Website .</p><p>Click "Theme Building Channel" to choose a theme, version, and region for your theme .</p><p>Click "ModMii Channel" to visit the Website .</p><p>Click "WiiThemer Channel" to download WiiThemer .</p><p>Click "Csm-Installer Channel" to download Csm-Installer .</p><p>Click "MyMenuifyMod Channel" to download MyMenuifyMod .</p><hr /><p>Click "SD Card" for some great websites .</p><p>Click "?" button to see these instructions, website stats, etc...</p><p>Click "Contact" button to see the owner/operator contact information.</p></div><div id="about_right"><p>Site Visitors <span id="visitors"></span></p><hr /><p>Wii Themer Downloads .<span id="wiithemerdownloads"></span></p><p>MyMenuifyMod Downloads .<span id="mymenuifymoddownloads"></span></p><p>Csm-Installer Downloads .<span id="csminstallerdownloads"></span></p><hr /><p>Wii Themes Downloaded <span id="wii_downloads"></span></p><p>U Region Downloads <span id="u_region"></span></p><p>E Region Downloads <span id="e_region"></span></p><p>J Region Downloads <span id="j_region"></span></p><p>K Region Downloads <span id="k_region"></span></p><hr /><p>vWii Themes Downloaded <span id="vwii_downloads"></span></p><p>U Region Downloads <span id="vwii_u_region"></span></p><p>E Region Downloads <span id="vwii_e_region"></span></p><p>J Region Downloads <span id="vwii_j_region"></span></p></div></div>');
            //<p><span id=""></span></p>
            $("#themecounttext").text(theme_count);
        }break;
        case 4: {
            $("#modaltitle").text("Contact Info");
            $(".modal-body").html('<div id="contact_container"><p>Contact Naythan with site issues and/or questions .</p><p>Email :<a href="mailto:scooby74029@yahoo.com"><i>Scooby74029 </i></a>from GbaTemp</p><p>Email :<a href="mailto:admin@wiithemer.org"><i>admin </i></a>@ wiithemer.org</p></div>');
            }break;
    }
    $("#modal").slideDown("slow");
    
    modal_close.onclick = function() {
        $("#modal").slideUp("slow");
    }
    window.onclick = function(event) {
		if(modaltype == 1) return;
		if (event.target == modal) {
			$("#modal").slideUp("slow");
		}
	}

    return;
}
function swap_mode() {
	if(!themevideomode) themevideomode = true;
	else themevideomode = false;
	load_media();
	return;
}
function load_media() {
	let filter_option = document.getElementById("filter").selectedIndex;
	if(filter_option != 0) {
		// do not change themeposition if filter is set
	}
	else
		themeposition = document.getElementById("theme").selectedIndex;
	if(!themevideomode) {
		$("#themevideocontainer").hide();
		$("#preview1").fadeOut("slow", function() {
			show_image(themeposition);
			$("#preview1").fadeIn("slow");
		});
		$("#checkpreview").text("Theme Video Preview");
	}
	else {
		$("#preview1").hide();
		$("#themevideocontainer").hide();
		let ivideo = document.getElementById("videoframe");
		ivideo.src = completethemeinfo[themeposition].video;
		ivideo.width = 1150;
		ivideo.height = 536;
		$("#themevideocontainer").fadeIn("slow");
		$("#checkpreview").text("Theme Picture Preview");
	}
	return;
}
function image_controls(input_control) {
	console.log("input_contrtol = " + input_control);
	let filter_option = document.getElementById("filter").selectedIndex;
	console.log(filter_option + " selected filter option");
	filtered_themeposition = filtered_themeposition + input_control;

	if(filter_option != 0) {
		if(filtered_themeposition < 0) {
			filtered_themeposition = filtered_list_position.length - 1;
		}
		if(filtered_themeposition >= filtered_list_position.length) {
			filtered_themeposition = 0;
		}
		themeposition = filtered_list_position[filtered_themeposition];
		console.log("filtered_themeposition = " + filtered_themeposition);
	}
	else {
		themeposition = themeposition + input_control;
		if(themeposition < 0)
			themeposition = theme_count - 1;
		if(themeposition >= theme_count)
			themeposition = 0;
		//console.log("themeposition = " + themeposition);
	}
	if(filter_option != 0)
		document.getElementById("theme").selectedIndex = filtered_themeposition;
	else
		document.getElementById("theme").selectedIndex = themeposition;
	load_media();
	get_data_File(completethemeinfo[themeposition].downloads);
	return;
}
function show_image(input) {
	return document.getElementById("preview1").src = find_image_path(input);
}
function find_image_path(input) {
	return "previewpics/" + completethemeinfo[input].mainimg;
}
function get_filter_option() {
	let filter_option = document.getElementById("filter").selectedIndex;
	//console.log(filter_option + " selected filter option");
	switch(filter_option) {
		case 0: {// All
			//alert("All Themes");
			load_theme_list("All");
		}break;
		case 1: {// Top 25
			//alert("Top 25 Themes");
			load_theme_list("top20");
		}break;	
		case 2: {// top 20 views
			//alert("Top 20 Views Themes");
			load_theme_list("views");
		}break;
		case 3: {// New Themes
			//alert("New Themes");
			load_theme_list("new");
		}break;
		case 4: {// anime
			//alert("Anime Themes");
			load_theme_list("anime");
		}break;
		case 5: {// movie
			//alert("Movie Themes");
			load_theme_list("movie");
		}break;
		case 6: {// cartoon
			//alert("Cartoon Themes");
			load_theme_list("cartoon");
		}break;
		case 7: {// music
			//alert("Music Themes");
			load_theme_list("music");
		}break;
		case 8: {// sports
			//alert("Sports Themes");
			load_theme_list("sports");
		}break;
		case 9: {// game
			//alert("Game Themes");
			load_theme_list("game");
		}break;
		case 10: {// dark wii
			//alert("Dark Wii Themes");
			load_theme_list("darkwii");
		}break;
		case 11: {// OS
			//alert("OS Themes");
			load_theme_list("os");
		}break;
		case 12: {// individual
			//alert("Individual Themes");
			load_theme_list("individual");
		}break;
		case 13: {// misc
			//alert("Misc Themes");
			load_theme_list("misc");
		}break;
		default: {
			//alert("All Themes");
			load_theme_list("All");
		}break;
	}
	
	if(filter_option != 0) {
		themeposition = filtered_list_position[0];
	}
	load_media();
	get_data_File(completethemeinfo[themeposition].downloads);
	return;
}
function get_build_options(input) {
	let selectedregion = document.getElementById("region").selectedIndex;
	let selectedversion = document.getElementById("menuversion").selectedIndex;
	let selectedtheme = document.getElementById("theme").selectedIndex;
	let trans_channels = document.getElementById('trans_spinbox');
	let filter_option = document.getElementById("filter").selectedIndex;

	themeInfo.trans = trans_channels.checked;
	//console.log("trans_chans = " + themeInfo.trans);
	//console.log(selectedversion + " selected version");
	console.log(selectedtheme + " selected theme");
	//console.log(selectedregion + " selected region");
	//console.log("filter_option = " + filter_option);

	if(filter_option != 0) {
		themeposition = filtered_list_position[selectedtheme];
		filtered_themeposition = selectedtheme;
		//console.log("filtered_themeposition = " + filtered_themeposition);
	}
	if(input == 3) {
		load_media();
		get_data_File(completethemeinfo[themeposition].downloads);
	}
	else if(input == 2) {

	}
	else if(input == 1) {
		if((selectedversion == 4) || (selectedversion == 5)) {
			remove_K_region();
		}
		else
			add_K_region();
	}
	if((selectedtheme >= 0) && (selectedversion > 0) && (selectedregion > 0)) {
		if((selectedregion == 4) && (selectedversion == 4)) {
			$("#continue").slideUp();
			$("#message").html(version40kmessage);
			$("#message").show();
			document.getElementById("menuversion").selectedIndex = 0;
			document.getElementById("region").selectedIndex = 0;
		}
		else if((selectedregion == 4) && (selectedversion == 5)) {
			$("#continue").slideUp();
			$("#message").html(vWii_regions);
			$("#message").show();
			document.getElementById("menuversion").selectedIndex = 0;
			document.getElementById("region").selectedIndex = 0;
			//addKregion(true);
		}
		else {
			$("#continue").slideDown();
			$("#message").fadeOut();
		}	
	}
	else {
		$("#continue").slideUp();
		$("#message").fadeOut();
	}
	
	if(themeInfo.trans == true) {
		console.log("completethemeinfo[selected].trans_chans = " + completethemeinfo[selectedtheme].trans_chans);
		if(completethemeinfo[selectedtheme].trans_chans == "0") {
			document.getElementById('trans_spinbox').checked = false;
			$("#message").html(transchans);
			$("#message").show();
		}
	}
	
	return;
}
function build_theme() {
	$("#continue").fadeOut("slow");
	let filter_option = document.getElementById("filter").selectedIndex;
	if(filter_option != 0) {
		themeInfo.themeselected = filtered_list_position[document.getElementById("theme").selectedIndex];
		console.log("filter_option != 0, themeselected = " + themeInfo.themeselected);
	}
	else
		themeInfo.themeselected = document.getElementById("theme").selectedIndex;
	themeInfo.versionselected = document.getElementById("menuversion").selectedIndex;
	themeInfo.regionselected = document.getElementById("region").selectedIndex;
	themeInfo.mymfile = find_MYM(themeInfo.themeselected, themeInfo.regionselected);
	themeInfo.version = find_build_version(themeInfo.versionselected, themeInfo.regionselected);
	
	themeInfo.name = completethemeinfo[themeInfo.themeselected].name;
	let spinoption = document.getElementsByName('option');
	let src = document.getElementById('csmsourcebox');
	themeInfo.themesrc = src.checked;
	console.log("source files = " + themeInfo.themesrc);
	let trans_channels = document.getElementById('trans_spinbox');
	themeInfo.trans_chans = trans_channels.checked;
	console.log("trans_chans = " + themeInfo.trans_chans);

	for(let i = 0; i < spinoption.length; i++){
		if(spinoption[i].checked){
			themeInfo.spinselected = spinoption[i].value;
			console.log("spinoption " + themeInfo.spinselected + "\ni = " + i);
		}
	}
	let modal = document.getElementById("downloadtextmodal");
	modal.style.display = "block";
	var modalclose = document.getElementsByClassName("close")[2]; 
	modalclose.onclick = function() {
		$("#downloadtextmodal").slideUp("slow");
		setTimeout(function() {
			remove_folder();
		}, 1000);
		clearInterval(timer);
		get_data_File(completethemeinfo[themeposition].downloads);
		reset_building();
		return;
	}
	let name = document.getElementById("themename");
	name.innerHTML = themeInfo.name;
	$("#downloadtext").slideDown("slow");	
	set_session_directory();
	return;
}
function find_MYM(themeinput, regioninput) {
	let mymfile = completethemeinfo[themeinput].mym;
	//console.log("mymfile = " + mymfile + "\ninput = " + themeinput);
	
	if(((themeinput >= 51) && (themeinput <= 58)) || (themeinput == 48)  || (themeinput == 92) || (themeinput == 231)) {
		let region = null;
		region = Region[regioninput];
		mymfile = mymfile + region + ".mym";
	}

	//console.log("mymfile = " + mymfile);
	return mymfile;
}
function find_build_version(versioninput, regioninput) {
	console.log("versioninput " + versioninput + "regioninput " + regioninput);
	switch(regioninput) {
		case 1: {// U
			if(versioninput == 1) { // 4.3
				return 513;
			}
			else if(versioninput == 2) { // 4.2
				return 481;
			}
			else if(versioninput == 3) { // 4.1
				return 449;
			}
			else if(versioninput == 4) { // 4.0
				return 417;
			}
			else if(versioninput == 5) { // vwii
				return 609;
			}
		}break;
		case 2: {// E
			if(versioninput == 1) { // 4.3
				return 514;
			}
			else if(versioninput == 2) { // 4.2 
				return 482;
			}
			else if(versioninput == 3) { // 4.1
				return 450;
			}
			else if(versioninput == 4) { //4.0
				return 418;
			}
			else if(versioninput == 5) { //vwll
				return 610;
			}
			else return -1;
		}break;
		case 3: {// J
			if(versioninput == 1) { // 4.3
				return 512;
			}
			else if(versioninput == 2) { // 4.2
				return 480;
			}
			else if(versioninput == 3) { // 4.1
				return 448;
			}
			else if(versioninput == 4) { // 4.0
				return 416;
			}
			else if(versioninput == 5) { // vwii
				return 608;
			}
			else return -1;
		}break;
		case 4: {// K
			if(versioninput == 1) { // 4.3
				return 518;
			}
			else if(versioninput == 2) { // 4.2
				return 486;
			}
			else if(versioninput == 3) // 4.1
				return 454;
			else if(versioninput == 4) // 4.0
				return -100;
			else return -1;
		}break;
	}
	return -1;
}
function get_content_name(versionin) {
	switch(versionin) {
		case 609:
			return "0000001f"; // U
		break;
		case 513: 
			return "00000097"; 
		break;
		case 481:
			return "00000087";
		break;
		case 449:
			return "0000007b";
		break;
		case 417:
			return "00000072";
		break;
		case 610: 
			return "00000022"; // E
		break;
		case 514:
			return "0000009a";
		break;
		case 482:
			return "0000008a";
		break;
		case 450:
			return "0000007e";
		break;
		case 418:
			return "00000075"; 
		break;
		case 608:
			return "0000001c"; // J
		break;
		case 512:
			return "00000094"; 
		break;
		case 480:
			return "00000084";
		break;
		case 448:
			return "00000078";
		break;
		case 416:
			return "0000006f";
		break; 
		case 518:
			return "0000009d"; // K
		break;
		case 486:
			return "0000008d";
		break;
		case 454: 
			return "00000081";
		break;
	}
}
function version_display_name(versionin) {
	switch(versionin) {
		case 608:
			return "608_vWii_J";
		break;
		case 609:
			return "609_vWii_U";
		break;
		case 610:
			return "610_vWii_E";
		break;
		case 513: 
			return "4.3_U"; // U
		break;
		case 481:
			return "4.2_U";
		break;
		case 449:
			return "4.1_U";
		break;
		case 417:
			return "4.0_U";
		break;
		case 514:
			return "4.3_E";// E
		break;
		case 482:
			return "4.2_E";
		break;
		case 450:
			return "4.1_E";
		break;
		case 418:
			return "4.0_E"; 
		break;
		case 512:
			return "4.3_J"; // J
		break;
		case 480:
			return "4.2_J";
		break;
		case 448:
			return "4.1_J";
		break;
		case 416:
			return "4.0_J";
		break; 
		case 518:
			return "4.3_K";
		break;
		case 486:
			return "4.2_K";
		break;
		case 454: 
			return "4.1_K";
		break;
	}
}
function remove_folder() {
	$.ajax({
		url: "index.php",
		type: "POST",
		cache: false,
		data: { action: "removesessionfolder", theme: themeInfo.mymfile, savesrc: themeInfo.themesrc, selectedtheme: themeInfo.themeselected },
		success: function(data) {
			console.log(data);
			if(timer) clearInterval(timer);
		},
	});
	return;
}
function close_download_no_update() {
	$("#downloadtext").html("<br><p>Your download has expired .<br><br>Thank You for using Wii Themer .</p>");
	remove = setTimeout(function() {
		remove_folder();
	}, 5000);
	clearInterval(timer);
	reset_building();
	return;
}
function close_download() {
	clearInterval(timer);
	if (themeInfo.versionselected == 5) {
		$("#downloadtext").html("<br><p>Thank You for using Wii Themer .</p><p>Remember to grab an install app from links on the main page .</p> <p>WARNING : Make sure you have Priiloader installed .</p>");
		setTimeout(function() {
			increase_data_File("vWii_downloads");
		}, 1000);
		setTimeout(function() {
			increase_data_File(region_vWii[themeInfo.regionselected]);
		}, 1500);
	}
	else {
		$("#downloadtext").html("<br><p>Thank You for using Wii Themer .</p><p>Remember to grab an install app from links on the main page .</p>");
		setTimeout(function() {
			increase_data_File("wii_downloads");
		}, 1000);
		setTimeout(function() {
			increase_data_File(region_wii[themeInfo.regionselected]);
		}, 1500);	
	}
	console.log("selected version = " + themeInfo.versionselected);
	setTimeout(function() {
		increase_data_File(completethemeinfo[themeInfo.themeselected].downloads);
	}, 1000);
	setTimeout(function() {
		remove_folder();
	}, 1000);
	
	//resetbuilding();
	return;
}
function close_timer() {
	closecntr -= 1;
	seccntr += 1;
	let b = 60 - seccntr;
	if(b < 0) {
		seccntr = 1;
		b = 59;
		minutesleft -= 1;
	}
	if(themeInfo.themesrc == true) {
		$("#downloadtext").html("<br><br><p><a title='click to download your theme' class='glowtext text-center border-orange border-radius border-shadow-orange ID-black text-white' onclick='closedownload()' href='" + completefileinfo[0] + "/" + completefileinfo[1] + "' id='csmfile'><b><i>" + completefileinfo[1] + "</b></i></a></p><br><br><p>Your download will expire in </p>");
	}
	else {
		$("#downloadtext").html("<br><br><p><a title='click to download your theme' class='glowtext text-center border-orange border-radius border-shadow-orange ID-black text-white' onclick='close_download()' href='" + completefileinfo[0] + "/" + completefileinfo[1] + completefileinfo[2] + ".csm' id='csmfile'><b><i>" + completefileinfo[1] + completefileinfo[2] + ".csm</b></i></a></p><br><br><p>Your download will expire in </p>");
	}
	
	$("#downloadtext").slideDown("slow");
	let x = document.getElementById("downloadtext").innerHTML;
	if(b < 10) {
		if(minutesleft < 1)
			x += "0 " + " minutes : 0" + b + " seconds .<br>";
		else
			x += " " + minutesleft + " minutes : 0" + b + " seconds .<br>";
	}
	else {
		if(minutesleft < 1)
			x += "0 " + " minutes : " + b + " seconds .<br>";
		else
			x += " " + minutesleft + " minutes : " + b + " seconds .<br>";
	}
	$("#downloadtext").html(x);
	if(closecntr <= 0) {
		close_download_no_update();
		clearInterval(timer);
	}
	$("#close").show();
	return;
}
function set_close_download() {
	timer = setInterval(close_timer, 1000);
	return;
}
async function php_build_theme() {
	let thepromise = new Promise( function(resolve) {
		setTimeout( function() { 
			resolve($.ajax({
				url: "index.php",
				type: "POST",
				cache: false,
				data: { action: "buildtheme", theme: themeInfo.mymfile, appfile: themeInfo.appfile, version: themeInfo.version, spin: themeInfo.spinselected, savesrc: themeInfo.themesrc, selectedtheme: themeInfo.themeselected, trans_chans: themeInfo.trans_chans },
				success: function(data) {
					//console.log(data);
					completefileinfo = data.split("/");
					let copymessage = document.getElementById("downloadtext");
					copymessage.innerHTML += "Complete .<br>";
					set_close_download();
				},
			}))
		}, 1000);
	});
	return 1;
}
async function copy_theme_to_folder() {
	let thepromise = new Promise( function(resolve) {
		setTimeout( function() { 
			resolve($.ajax({
				url: "index.php",
				type: "POST",
				cache: false,
				data: { action: "copythemetosessiondirectory", theme: themeInfo.mymfile, spin: themeInfo.spinselected, savesrc: themeInfo.themesrc, selectedtheme: themeInfo.themeselected, trans_chans: themeInfo.trans_chans },
				success: function(data) {
					let copymessage = document.getElementById("downloadtext");
					if(data == "Copy Theme OK Copy Spin OK") {
						copymessage.innerHTML += "Complete .<br>";
						download_content();
					}
					else if((data == "Copy Theme ERROR Copy Spin ERROR") || (data == "Copy Theme OK Copy Spin ERROR") || (data == "Copy Theme ERROR Copy Spin OK") ){
						copymessage.innerHTML += "Failed .<br>";
						copymessage.innerHTML += "An Error has occured please try again .<br>";
						close_download_no_update();
					}
					//alert(data);
					//else console.log("ret from copy = " + data)
				},
			}))
		}, 500);
	});
	return;
}
async function download_content() {
	let copymessage = document.getElementById("downloadtext");
	copymessage.innerHTML += "Downloading Content " + get_content_name(themeInfo.version) + " from System Menu v" + version_display_name(themeInfo.version) + " .....  ";
	let thepromise = new Promise( function(resolve) {
		setTimeout( function() { 
			resolve($.ajax({
				url: "index.php",
				type: "POST",
				cache: false,
				data: { action: "get_content", version: themeInfo.version , savesrc: themeInfo.themesrc, name: themeInfo.mymfile, selectedtheme: themeInfo.themeselected, spin: themeInfo.spinselected },
				success: function(_data) {
					//alert(data);
					let copymessage = document.getElementById("downloadtext");
					themeInfo.appfile = _data; 
					console.log("app = " + themeInfo.appfile);
					copymessage.innerHTML += "Complete .<br>";
					
					
				},
				complete: function(){
					let copymessage = document.getElementById("downloadtext");
					copymessage.innerHTML += "Building " + themeInfo.name + " " +version_display_name(themeInfo.version) + ".csm ..... ";
						php_build_theme();
				},
			}))
		}, 500);
	});
	return;
}
async function set_session_directory() {
	$("#downloadtext").html("<br>Please Wait .....<br>Setting session directory and copying needed files ..... ");
	let thepromise = new Promise( function(resolve) {
		setTimeout( function() { 
			resolve($.ajax({
				url: "index.php",
				type: "POST",
				cache: false,
				data: { action: "makesesdir", savesrc: themeInfo.themesrc, name: themeInfo.mymfile, selectedtheme: themeInfo.themeselected },
				success: function(data) {
					console.log("version = " + themeInfo.version);
					let copymessage = document.getElementById("downloadtext");
					copymessage.innerHTML += data;
					//alert(data);
				},
				complete: function(){
					let copymessage = document.getElementById("downloadtext");
					copymessage.innerHTML += "Copying " + themeInfo.mymfile + " to the working directory ..... ";
					copy_theme_to_folder();

				},
				error: function() {
					alert("Error \n");
				},
			}))
		}, 500);
	});
	return;
}
function show_dual_pictures() {
	//alert("show here");
	
	document.getElementById("dualpic1").src = "previewpics/" +  completethemeinfo[themeposition].mainimg;
	document.getElementById("dualpic1").style.height = (screen.availHeight/4) * 3;
	document.getElementById("dualpic2").src = "img/backgrounds/" + completethemeinfo[themeposition].secondaryimg;
	document.getElementById("dualpic2").style.height = (screen.availHeight/4) * 3;
	$("#dualpicmodal").slideDown("slow");
	var modal_close = document.getElementsByClassName("close")[1];
	modal_close.onclick = function() {
		$("#dualpicmodal").slideUp("slow");
	}
	var modal = document.getElementById("dualpicmodal");
	window.onclick = function(event) {
		if (event.target == modal) {
			$("#dualpicmodal").slideUp("slow");
		}
	}
	return;
}
function reset_globals() {
	themeposition = 0;
	completefileinfo =[null];
	closecntr = 180;
	minutesleft = 2;
	seccntr = 0;
	timer = null;
	themeInfo = {};
	isWiiU = false;
	filtered_list_position = [];
	filtered_themeposition = 0;
	let spinoption = document.getElementsByName('option');
	if(spinoption[2].checked == false)
		spinoption[2].checked = true;
	document.getElementById("region").selectedIndex = 0;
	document.getElementById("menuversion").selectedIndex = 0;
	document.getElementById("theme").selectedIndex = 0;
	document.getElementById('csmsourcebox').checked = false;
	document.getElementById('trans_spinbox').checked = false;
	document.getElementById('continue').style.display = "none";
	$("#themevideocontainer").hide();
	show_image(themeposition);
	get_data_File(completethemeinfo[themeposition].downloads);
	return;
}
function reset_building() {
	closecntr = 180;
	minutesleft = 2;
	seccntr = 0;
	timer = null;
	themeInfo = {};
	isWiiU = false;
	let filter_option = document.getElementById("filter").selectedIndex;
	if(filter_option != 0) {
		themeposition = filtered_list_position[document.getElementById("theme").selectedIndex];
		console.log("filter_option != 0, themeposition = " + themeposition);
	}
	else
		themeposition = 0;
	let spinoption = document.getElementsByName('option');
	if(spinoption[2].checked == false)
		spinoption[2].checked = true;
	document.getElementById("region").selectedIndex = 0;
	document.getElementById("menuversion").selectedIndex = 0;
	document.getElementById('csmsourcebox').checked = false;
	document.getElementById('trans_spinbox').checked = false;
	document.getElementById('continue').style.display = "none";
	$("#themevideocontainer").hide();
	show_image(themeposition);
	if(filter_option == 0)
		document.getElementById("theme").selectedIndex = themeposition;
	get_data_File(completethemeinfo[themeposition].downloads);
	return;
}
function write_theme_Info(ID_TITLE, ID, TITLE, MYMS, PNGS, TXTS) {
	var titles = "";
	var ids = "";
	var myms = "";
	var pngs = "";
	var txts = "";

	if((!ID_TITLE) && (!ID) && (!TITLE) && (!MYMS) && (!PNGS) && (!TXTS)) return;
	console.log("writing theme_titles.txt");
	for(let i = 0; i < theme_count; i++){
		titles += completethemeinfo[i].name + "\n";
	}
	console.log(titles);
	for(let i = 0; i < theme_count; i++){
		ids += completethemeinfo[i].ID + "\n";
	}
	console.log(ids);
	for(let i = 0; i < theme_count; i++){
		myms += completethemeinfo[i].mym + "\n";
	}
	console.log(myms);
	for(let i = 0; i < theme_count; i++){
		pngs += completethemeinfo[i].secondaryimg + "\n";
	}
	console.log(pngs);
	for(let i = 0; i < theme_count; i++){
		txts += completethemeinfo[i].downloads + "\n";
	}
	console.log(txts);
	$.ajax({
		url: "index.php",
		type: "POST",
		cache: false,
		data: { action: "write_Info", title_str: titles, id_str: ids, bool_id_title: ID_TITLE, bool_ids: ID, bool_titles: TITLE, bool_mym: MYMS, bool_pngs: PNGS, mym_str: myms, png_str: pngs, bool_txts: TXTS, txt_str: txts },
		success: function(data) {
			//alert(data);
		},
	});
	return;
}
function load_channel_Website(which_website, is_download) {
	let website = null;

	switch(which_website) {
		case "dolphin":
			website = "https://dolphin-emu.org/";
		break;
		case "hombrewchannel":
			website = "https://hbc.hackmii.com/";
		break;
		case "modmii":
			website = "https://modmii.github.io/";
		break;
		case "wiithemer":
			website = "https://wiithemer.org/downloads/wiithemer.zip";
			increase_data_File("wiithemer");
		break;
		case "mymenuifymod":
			website = "https://wiithemer.org/downloads/mymenuifymod.zip";
			increase_data_File('mymenuifymod');
		break;
		case "csminstaller":
			website = "https://github.com/Naim2000/csm-installer/releases/download/v1.4/csm-installer.zip";
			increase_data_File('csminstaller');
		break;
	}
	var result;
	if(!is_download) {
		result = window.confirm("Visit " + website + " ?\n\nThis will open a new tab in your browser.\n\nClick OK to continue or Cancel to close this message.");
		if (result) {
			// User clicked OK
			return window.open(website,  '_blank');
		}
	}
	else {
		result = window.confirm("Download " + which_website + " ?\n\nThis will start a download in your browser.\n\nClick OK to continue or Cancel to close this message.");
		if (result) {
			// User clicked OK
			return window.open(website, 'self', 'noopener,noreferrer');
		}
	}
	// User clicked Cancel
	return;
}
function increase_data_File(which_file) {
	console.log("which_file = " + which_file);
	$.ajax({
		url: "index.php",
		type: "POST",
		data: { action: "increase", data_file: which_file},
		success: function(data) {
			//alert(data);
			console.log(data);
		},
	});
	return;
}
function get_data_File(which_file) {
	console.log("which_file = " + which_file);
	$.ajax({
		url: "index.php",
		type: "POST",
		data: { action: "get", data_file: which_file},
		success: function(data) {
			//alert(data);
			switch(which_file) {
				case "visitors":
					$("#visitors").text(data);
				break;
				case "wiithemer":
					$("#wiithemerdownloads").text(data);
				break;
				case "mymenuifymod":
					$("#mymenuifymoddownloads").text(data);
				break;
				case "csminstaller":
					$("#csminstallerdownloads").text(data);
				break;
				case "wii_downloads":
					$("#wii_downloads").text(data);
				break;
				case "vwii_downloads":
					$("#vwii_downloads").text(data);
				break;
				case "vwii_U":
					$("#vwii_u_region").text(data);
				break;
				case "vwii_E":
					$("#vwii_e_region").text(data);
				break;
				case "vwii_J":
					$("#vwii_j_region").text(data);
				break;
				case "wii_U":
					$("#u_region").text(data);
				break;
				case "wii_E":
					$("#e_region").text(data);
				break;
				case "wii_J":
					$("#j_region").text(data);
				break;
				case "wii_K":
					$("#k_region").text(data);
				break;
				default:
					$("#downloadcnt").text(data + " Downloads");
				break;
			}
		},
	});
	return;
}
function getdatetime() {
	let am = true;
	const cDate = new Date();
	let monthstr = cDate.getMonth();
	let daystr = cDate.getDate();
	let yearstr = cDate.getFullYear();
	let hourstr = cDate.getHours();
	let minutestr = cDate.getMinutes();
	let secondsstr = cDate.getSeconds();
	let day_str = cDate.getDay();
	let datestr = null;
	let month_diplay = null;
	let day_display = null;

	if(hourstr >= 12)
		am = false;
	if(minutestr < 10)
		minutestr = "0" + minutestr;
	if(secondsstr < 10)
		secondsstr = "0" + secondsstr;
	if(hourstr > 12)
		hourstr = hourstr - 12;
	if(hourstr == 0) {
		hourstr = 12;
		am = true;
	}
	//alert(daystr);
	switch(day_str) {
		case 0: 
		day_display = "Sunday";
		break;
		case 1: 
		day_display = "Monday";
		break;
		case 2: 
		day_display = "Tuesday";
		break;
		case 3: 
		day_display = "Wednesday";
		break;
		case 4:
		day_display = "Thursday";
		break;
		case 5: 
		day_display = "Friday";
		break;
		case 6:
		day_display = "Saturday";
		break;
	}
	switch(monthstr) {
		case 0:
		month_diplay = "January";
		break;
		case 1:
		month_diplay = "February";
		break;
		case 2:
		month_diplay = "March";
		break;
		case 3:
		month_diplay = "April";
		break;
		case 4:
		month_diplay = "May";
		break;
		case 5:
		month_diplay = "June";
		break;
		case 6:
		month_diplay = "July";
		break;
		case 7:
		month_diplay = "August";
		break;
		case 8:
		month_diplay = "September";
		break;
		case 9:
		month_diplay = "October";
		break;
		case 10:
		month_diplay = "November";
		break;
		case 11:
		month_diplay = "December";
		break;
	}		
	if(am)
		datestr = day_display + "   " + month_diplay + " " + daystr + " " + yearstr + "<br /><br />" + hourstr + ":" + minutestr + " AM";
	else
		datestr = day_display + "   " + month_diplay + " " + daystr + " " + yearstr + "<br /><br />" + hourstr + ":" + minutestr + " PM";
			
	return datestr;
}
function setmaincontentFooter() {
	$("#time_date").html(getdatetime());
	return;
}
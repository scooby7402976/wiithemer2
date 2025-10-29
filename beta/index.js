const completethemeinfo = [
	//{name:"", ID:"", mainimg:"", secondaryimg:"", mym:"", video:"", downloads:"", trans_chans:"1""0", filter:""},
	{name:"American Dad", ID:"AMDAD1", mainimg:"american_dad.avif", secondaryimg:"american_dad.png", mym:"american_dad.mym", video:"https://www.youtube.com/embed/QmxQemy9PiU?si=f8PpyWVy81sMd5sP?autoplay=0&mute=1", downloads:"american_dad.txt", trans_chans:"1", filter:"cartoon"},
	{name:"Among Us v1", ID:"AMONG1", mainimg: "amongusv1.avif", secondaryimg:"amongusv1.png", mym:"amongusv1.mym", video:"https://www.youtube.com/embed/nO1V_81oC1g?si=3ejJl9qmBal_R8r5?autoplay=0&mute=1", downloads:"amongusv1.txt", trans_chans:"1", filter:"game"},
	{name:"Among Us v2", ID:"AMONG2", mainimg: "amongusv2.avif", secondaryimg:"amongusv2.png", mym:"amongusv2.mym", video:"https://www.youtube.com/embed/1DZQG9F25Y4?si=pBM1xC9MpFdPeKtB?autoplay=0&mute=1", downloads:"amongusv2.txt", trans_chans:"1", filter:"game"},
	{name:"Animal Crossing", ID:"ANML01", mainimg:"animalcrossing.avif", secondaryimg:"animalcrossing.png", mym:"animal_crossing.mym", video:"https://www.youtube.com/embed/2hZHkraXOpA?autoplay=0&mute=1", downloads:"animal_crossing.txt", trans_chans:"1", filter:"top20/game/views"},
	{name:"Animal Crossing v2", ID:"ANML02", mainimg:"animalcrossingv2.avif", secondaryimg:"animalcrossingv2.png", mym:"animal_crossing_v2.mym", video:"https://www.youtube.com/embed/zs9OcnVkpTY?si=tEd2FZ2UjyRJCc0Y?autoplay=0&mute=1", downloads:"animal_crossing_v2.txt", trans_chans:"1", filter:"game"},
	{name:"Apple", ID:"APPLE1", mainimg:"apple.avif", secondaryimg:"apple.png", mym:"apple.mym", video:"https://www.youtube.com/embed/oZXzGzkOwZs?si=K4Mlcb6mbeWOZIax?autoplay=0&mute=1", downloads:"apple.txt", trans_chans:"1", filter:"os/views"},
	{name:"Aqua Teen Hunger Force", ID:"ATHF01", mainimg:"aquateenhungerforce.avif", secondaryimg:"ATHF.png", mym:"aqua_teen_hunger_forcestage1.mym", video:"https://www.youtube.com/embed/HtIxy7EuSEA?si=OafY-qA2HJS3G5A5?autoplay=0&mute=1", downloads:"aqua_teen_hunger_force.txt", trans_chans:"1", filter:"cartoon"},
	{name:"Army of Darkness", ID:"AODRK1", mainimg:"army_of_darkness.avif", secondaryimg:"army_of_darkness.png", mym:"army_of_darkness_stage1.mym", video:"https://www.youtube.com/embed/nVGkNwYywqE?si=7nBmRhuLnJhqFeGW?autoplay=0&mute=1", downloads:"army_of_darkness.txt", trans_chans:"1", filter:"movie"},
	{name:"Arsenal FC", ID:"ARSNFC", mainimg:"arsenal.avif", secondaryimg:"arsenal.png", mym:"arsenal_stage1.mym", video:"https://www.youtube.com/embed/gfKm1a3p6Ik?si=RGSCVhnbBZV-G2zt?autoplay=0&mute=1", downloads:"arsenal.txt", trans_chans:"1", filter:"sports"},
	{name:"Atlanta Falcons", ID:"FALCON", mainimg:"falcons.avif", secondaryimg:"falcons.png", mym:"falcons.mym", video:"https://www.youtube.com/embed/cO8wosfN1gQ?si=J4Txn133oqt4hS7y?autoplay=0&mute=1", downloads:"falcons.txt", trans_chans:"1", filter:"sports"},
	{name:"Avengers", ID:"AVENG1", mainimg:"avengers.avif", secondaryimg:"avengers.png", mym:"avengers.mym", video:"https://www.youtube.com/embed/QTvDd5FtiV0?si=47AaRbESv7lwQm3X?autoplay=0&mute=1", downloads:"avengers.txt", trans_chans:"1", filter:"movie"},
	{name:"Back to the Future", ID:"BACFUT", mainimg:"backtothefuture.avif", secondaryimg:"backtothefuture.png", mym:"back_to_the_future.mym", video:"https://www.youtube.com/embed/HLNla6TnGuA?si=ObMchG50XqOlx8RS?autoplay=0&mute=1", downloads:"backtothefuture.txt", trans_chans:"1", filter:"movie"},
	{name:"Bakugan", ID:"BKGN01", mainimg:"bakugan.avif", secondaryimg:"bakugan.png", mym:"bakugan.mym", video:"https://www.youtube.com/embed/1sje3UaUNK4?autoplay=0&mute=1", downloads:"bakugan.txt", trans_chans:"1", filter:"anime"},
	{name:"FC Barcelona", ID:"BRCLNA", mainimg:"barcelona.avif", secondaryimg:"barcelona.png", mym:"barcelona_stage1.mym", video:"https://www.youtube.com/embed/fLAYnFr-Bm8?si=bjS9b-JgE8kXFVUS?autoplay=0&mute=1", downloads:"barcelona.txt", trans_chans:"1", filter:"sports"},
	{name:"Battle for Dream Island", ID:"BATDRI", mainimg:"battlefordreamisland.avif", secondaryimg:"battlefordreamisland.png", mym:"battle_4_dream_island.mym", video:"https://www.youtube.com/embed/jkHkqRsY8fk?si=UvTceSyOYIJQXkNb?autoplay=0&mute=1", downloads:"battlefordreamisland.txt", trans_chans:"1", filter:"game"},
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
	{name:"Dark Wii Extended", ID:"DWEXT1", mainimg:"darkwii_extended.avif", secondaryimg:"darkwii_extended.png", mym:"darkwii_extended", video:"https://www.youtube.com/embed/2-vB5O-T2S4?si=vrKNRxEEXP_6QjFe?autoplay=0&mute=1", downloads:"darkwii_extended.txt", trans_chans:"1", filter:"darkwii"},
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
	{name:"Fantastic Four", ID:"FAN4V1", mainimg:"fantasticfour.avif", secondaryimg:"fantasticfour.png", mym:"fantasticfour.mym", video:"https://www.youtube.com/embed/UDPNxL6s_JA?si=Zk1RCelpG9FdcwPr?autoplay=0&mute=1", downloads:"fantasticfour.txt", trans_chans:"1", filter:"movie/new"},
	{name:"Fantasy", ID:"FANTA1", mainimg:"Fantasy.avif", secondaryimg:"fantasy.png", mym:"fantasy.mym", video:"https://www.youtube.com/embed/hGqk0wQL9Us?autoplay=0&mute=1", downloads:"fantasy.txt", trans_chans:"0", filter:"misc"},
	{name:"Fight Club", ID:"FCLUB1", mainimg:"FightClub.avif", secondaryimg:"fightclub.png", mym:"fight_club.mym", video:"https://www.youtube.com/embed/WVY8mcnJmu8?autoplay=0&mute=1", downloads:"fight_club.txt", trans_chans:"0", filter:"movie"},
	{name:"Final Fantasy 7", ID:"FFVII1", mainimg:"FinalFantasy7.avif", secondaryimg:"finalfantasy7.png", mym:"final_fantasy_7.mym", video:"https://www.youtube.com/embed/bymdnStOo9U?autoplay=0&mute=1", downloads:"final_fantasy_7.txt", trans_chans:"1", filter:"game"},
	{name:"Fire Wii", ID:"FIRE01", mainimg:"firewii.avif", secondaryimg:"firewii.png", mym:"fire_wii.mym", video:"https://www.youtube.com/embed/eJLl2_ZMf6s?autoplay=0&mute=1", downloads:"fire_wii.txt", trans_chans:"0", filter:"misc/views"},
	{name:"Flower Power", ID:"FLOPO1", mainimg:"flowerpower.avif", secondaryimg:"flowerpower.png", mym:"flower_powerstage1.mym", video:"https://www.youtube.com/embed/lpoNMkhUYhA?si=B4fltaw9eZfFDkQY?autoplay=0&mute=1", downloads:"flowerpower.txt", trans_chans:"0", filter:"misc"},
	{name:"Foster's Home", ID:"FOSTER", mainimg:"fosters_home.avif", secondaryimg:"fosters_home.png", mym:"fosters_home.mym", video:"https://www.youtube.com/embed/uLuEL2g7-gk?si=V-AzZ6Bai_PC06RY?autoplay=0&mute=1", downloads:"fosters_home.txt", trans_chans:"1", filter:"cartoon"},
	{name:"Friday Night Funkin", ID:"FNFNK1", mainimg:"fridaynightfunkin.avif", secondaryimg:"fridaynightfunkin.png", mym:"friday_night_funkin.mym", video:"https://www.youtube.com/embed/VkbcQsz57nM?si=yqN-PFAOKuyVn1EV?autoplay=0&mute=1", downloads:"fridaynightfunkin.txt", trans_chans:"1", filter:"game"},
	{name:"Friday the 13th", ID:"F13TH1", mainimg:"fridaythe13th.avif", secondaryimg:"fridaythe13th.png", mym:"friday_the_13thstage1.mym", video:"https://www.youtube.com/embed/SKT-nmQC68o?si=fWW98k2AViFDSKAO?autoplay=0&mute=1", downloads:"fridaythe13th.txt", trans_chans:"1", filter:"movie"},
	{name:"Full Metal Alchemist", ID:"FMTL", mainimg:"fullmetalalchemist.avif", secondaryimg:"fullmetalalchemist.png", mym:"full_metal_alchemist", video:"https://www.youtube.com/embed/ZpPcjebgEUY?autoplay=0&mute=1", downloads:"full_metal_alchemist.txt", trans_chans:"1", filter:"anime"},
	{name:"Futurama", ID:"FUTUR1", mainimg:"futurama.avif", secondaryimg:"futurama.png", mym:"futurama.mym", video:"https://www.youtube.com/embed/x0mCDuiWYpA?autoplay=0&mute=1", downloads:"futurama.txt", trans_chans:"1", filter:"cartoon"},
	{name:"Gaara", ID:"GAARA1", mainimg:"gaara.avif", secondaryimg:"gaara.png", mym:"gaara.mym", video:"https://www.youtube.com/embed/nEofNIw_Xps?autoplay=0&mute=1", downloads:"gaara.txt", trans_chans:"1", filter:"anime"},
	{name:"Garfield", ID:"GRFLD1", mainimg:"garfield.avif", secondaryimg:"garfield.png", mym:"garfield.mym", video:"https://www.youtube.com/embed/lZZ3f6G_Mhs?si=xBNAGvmT06-w9llh?autoplay=0&mute=1", downloads:"garfield.txt", trans_chans:"1", filter:"cartoon"},
	{name:"Gears of War", ID:"GOWAR1", mainimg:"gearsofwar.avif", secondaryimg:"gearsofwar.png", mym:"gears_of_war.mym", video:"https://www.youtube.com/embed/0AUq2xqwlEc?autoplay=0&mute=1", downloads:"gears_of_war.txt", trans_chans:"1", filter:"game"},
	{name:"Ghost Busters", ID:"GBUST1", mainimg:"ghostbusters.avif", secondaryimg:"ghostbusters.png", mym:"ghost_busters.mym", video:"https://www.youtube.com/embed/q1Y3VAmsXxM?autoplay=0&mute=1", downloads:"ghost_busters.txt", trans_chans:"1", filter:"movie"},
	{name:"G I Joe", ID:"GIJOE1", mainimg:"gijoe.avif", secondaryimg:"gijoe.png", mym:"gijoe.mym", video:"https://www.youtube.com/embed/MH4zYhw0JL0?si=u7pJxFjJdkRb9Cgw?autoplay=0&mute=1", downloads:"gijoe.txt", trans_chans:"1", filter:"cartoon/new"},
	{name:"Golden Sun", ID:"GSUN01", mainimg:"GoldenSun.avif", secondaryimg:"goldensun.png", mym:"golden_sun.mym", video:"https://www.youtube.com/embed/qZO74MDfGXY?autoplay=0&mute=1", downloads:"golden_sun.txt", trans_chans:"1", filter:"game"},
	{name:"Gothic", ID:"GOTH01", mainimg:"gothic.avif", secondaryimg:"gothic.png", mym:"gothic.mym", video:"https://www.youtube.com/embed/Ko3ZcoCmwPI?si=QROVEdiG91ky82_V?autoplay=0&mute=1", downloads:"gothic.txt", trans_chans:"0", filter:"misc"},
	{name:"Grateful Dead", ID:"GRTFL1", mainimg:"gratefuldead.avif", secondaryimg:"gratefuldead.png", mym:"grateful_dead_stage1.mym", video:"https://www.youtube.com/embed/LURcBb9sF98?si=oebw46IB5hS1hxDU?autoplay=0&mute=1", downloads:"gratefuldead.txt", trans_chans:"1", filter:"music"},
	{name:"Green Bay Packers", ID:"PCKRS1", mainimg:"greenbay_packers.avif", secondaryimg:"greenbay_packers.png", mym:"packers_stage1.mym", video:"https://www.youtube.com/embed/mfmglgxpV3M?si=yKq_eYg4s0BnJQFU?autoplay=0&mute=1", downloads:"packers.txt", trans_chans:"1", filter:"sports"},
	{name:"Hand Drawn", ID:"HDRAW1", mainimg:"HandDrawn.avif", secondaryimg:"handdrawn.png", mym:"hand_drawn.mym", video:"https://www.youtube.com/embed/e19Hk1Zbp0c?autoplay=0&mute=1", downloads:"hand_drawn.txt", trans_chans:"1", filter:"game"},
	{name:"Hello Kitty", ID:"HKITY1", mainimg:"HelloKitty.avif", secondaryimg:"hellokitty.png", mym:"hello_kitty.mym", video:"https://www.youtube.com/embed/Rh-_PneEKCY?autoplay=0&mute=1", downloads:"hello_kitty.txt", trans_chans:"0", filter:"cartoon"},
	{name:"Hell's Kitchen", ID:"HELLK1", mainimg:"hellskitchen.avif", secondaryimg:"hellskitchen.png", mym:"hellskitchen.mym", video:"https://www.youtube.com/embed/rhZvXoDqJx4?si=dsfWlztTT2Fz_RR3?autoplay=0&mute=1", downloads:"hellskitchen.txt", trans_chans:"1", filter:"movie"},
	{name:"He-Man", ID:"HEMAN1", mainimg:"heman.avif", secondaryimg:"heman.png", mym:"he-manstage1.mym", video:"https://www.youtube.com/embed/vUzusxTYj9w?si=UNjjoXBw-c4BJBWc?autoplay=0&mute=1", downloads:"heman.txt", transchans:"1", filter:"cartoon"},
	{name:"Heros", ID:"HEROS1", mainimg:"heros.avif", secondaryimg:"heros.png", mym:"heros.mym", video: "https://www.youtube.com/embed/kM-Sgb2wRig?autoplay=0&mute=1",downloads:"heros.txt", trans_chans:"0", filter:"movie"},
	{name:"Hot Wheels", ID:"WHEEL1", mainimg:"hot_wheels.avif", secondaryimg:"hot_wheels.png", mym:"hot_wheels.mym", video:"", downloads:"hot_wheels.txt", trans_chans:"1", filter:"game"},
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
	{name:"Jurassic World", ID:"JURWLD", mainimg:"jurassicworld.avif", secondaryimg:"jurassicworld.png", mym:"jurassicworld.mym", video:"https://www.youtube.com/embed/VS4Ne4YeD5U?si=5RgnzWsbMWqu9TB4?autoplay=0&mute=1", downloads:"jurassicworld.txt", trans_chans:"1", filter:"movie/new"},
	{name:"Kid Icarus", ID:"KDICR1", mainimg:"kidicarus.avif", secondaryimg:"kidicarus.png", mym:"kidicarus.mym", video:"https://www.youtube.com/embed/FAe1W-cGYh4?si=o5WJO-gvG_AAB1Pl?autoplay=0&mute=1", downloads:"kidicarus.txt", trans_chans:"1", filter:"game"},
	{name:"Kingdom Hearts", ID:"KHRT01", mainimg:"kingdomhearts.avif", secondaryimg:"kingdomhearts.png", mym:"kingdom_hearts.mym", video:"https://www.youtube.com/embed/YQf3umMzGNs?autoplay=0&mute=1", downloads:"kingdom_hearts.txt", trans_chans:"0", filter:"game"},
	{name:"King of the Hill", ID:"KOTHV1", mainimg:"kingofthehill.avif", secondaryimg:"kingofthehill.png", mym:"kingofthehill.mym", video:"https://www.youtube.com/embed/cLsUJR4dQkU?si=h93gVx2owuQdlYoC?autoplay=0&mute=1", downloads:"kingofthehill.txt", trans_chans:"1", filter:"cartoon/new"},
	{name:"Kirby", ID:"KIRBY1", mainimg:"kirby.avif", secondaryimg:"kirby.png", mym:"kirby.mym", video:"https://www.youtube.com/embed/NoPUDwdQy8Q?autoplay=0&mute=1", downloads:"kirby.txt", trans_chans:"1", filter:"top20/game"},
	{name:"Kirby Adventures", ID:"KIRBY2", mainimg:"kirbyadventures.avif", secondaryimg:"kirbyadventures.png", mym:"kirbyadventures.mym", video:"https://www.youtube.com/embed/ziexDcITbbc?si=6VfHLGeO4r8hftD1?autoplay=0&mute=1", downloads:"kirbyadventures.txt", trans_chans:"1", filter:"game"},
	{name:"Kiss", ID:"KISS01", mainimg:"kiss.avif", secondaryimg:"kiss.png", mym:"kiss_stage1.mym", video:"https://www.youtube.com/embed/hyQfXng5CyI?si=v23yevJjLo4leCBH?autoplay=0&mute=1", downloads:"kiss.txt", trans_chans:"1", filter:"music"},
	{name:"Korn", ID:"KORN01", mainimg:"korn.avif", secondaryimg:"korn.png", mym:"korn.mym", video:"https://www.youtube.com/embed/WJM0t8M3Q9s?autoplay=0&mute=1", downloads:"korn.txt", trans_chans:"1", filter:"music"},
	{name:"Lego", ID:"LEGO01", mainimg:"lego.avif", secondaryimg:"lego.png", mym:"lego.mym", video:"https://www.youtube.com/embed/DK6KeheL6PM?si=sOM5Hollyrq6qsxI?autoplay=0&mute=1", downloads:"lego.txt", trans_chans:"1", filter:"game"},
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
	{name:"Minions", ID:"MINION", mainimg:"minions.avif", secondaryimg:"minions.png", mym:"minions.mym", video:"https://www.youtube.com/embed/lrCv9wOBdJ4?si=u0E8QQrJKIMUGtz5?autoplay=0&mute=1", downloads:"minions.txt", trans_chans:"1", filter:"movie"},
	{name:"Mist Forest", ID:"MISTF1", mainimg:"mistforest.avif", secondaryimg:"mistforest.png", mym:"mistforest.mym", video:"https://www.youtube.com/embed/ON0jmvFGWSk?si=YGUJ9oMMmPsH0iRZ?autoplay=0&mute=1", downloads:"mistforest.txt", trans_chans:"1", filter:"darkwii"},
	{name:"ModMii", ID:"MODMII", mainimg:"modmii.avif", secondaryimg:"modmii.png", mym:"modmii.mym", video:"https://www.youtube.com/embed/JMtoDNvcsO4?si=2wq6mKUa_sfEAMuY?autoplay=0&mute=1", downloads:"modmii.txt", trans_chans:"1", filter:"misc"},
	{name:"Monkeys", ID:"MONKEY", mainimg:"monkeys.avif", secondaryimg:"monkeys.png", mym:"monkeys_stage1.mym", video:"https://www.youtube.com/embed/b0mxd-g7aFQ?si=JNGR5qcJD5ozUSGV?autoplay=0&mute=1", downloads:"monkeys.txt", trans_chans:"1", filter:"misc"},
	{name:"Monopol - Wii", ID:"MONOW1", mainimg:"monopoly.avif", secondaryimg:"monopoly.png", mym:"monopoly.mym", video:"https://www.youtube.com/embed/UcQuxp8nVek?si=C8LSiW6eHTEPZ3BD?autoplay=0&mute=1", downloads:"monopoly.txt", trans_chans:"1", filter:"game"},
	{name:"Monsters Inc", ID:"MONSTR", mainimg:"monsters_inc.avif", secondaryimg:"monsters_inc.png", mym:"monsters_inc.mym", video:"https://www.youtube.com/embed/Gc0JBK-r31Y?si=Ezyrnf3f2Pk-ywkp?autoplay=0&mute=1", downloads:"monsters_inc.txt", trans_chans:"1", filter:"movie"},
	{name:"Montreal Canadians", ID:"CANAD1", mainimg:"canadians.avif", secondaryimg:"canadians.png", mym:"canadians.mym", video:"https://www.youtube.com/embed/vLia4TNMyXE?si=qi8T-WLtjUsd9tAy?autoplay=0&mute=1", downloads:"canadians.txt", trans_chans:"1", filter:"sports"},
	{name:"Mortal Kombat", ID:"MKOMB1", mainimg:"mortalkombat.avif", secondaryimg:"mortalkombat.png", mym:"mortal_kombat.mym", video:"https://www.youtube.com/embed/K0qxTtMF7E4?autoplay=0&mute=1", downloads:"mortal_kombat.txt", trans_chans:"1", filter:"game"},
	{name:"Muse", ID:"MUSE01", mainimg:"muse.avif", secondaryimg:"muse.png", mym:"muse.mym", video:"https://www.youtube.com/embed/X0LAu5pYY8w?autoplay=0&mute=1", downloads:"muse.txt", trans_chans:"1", filter:"music"},
	//{name:"My Little Pony", ID:"MYPONY", mainimg:"", secondaryimg:"", mym:"my_little_pony.mym", video:"?autoplay=0&mute=1", downloads:"", trans_chans:"1""0", filter:"cartoon/new"},
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
	{name:"Pac Man", ID:"PACMAN", mainimg:"pacman.avif", secondaryimg:"pacman.png", mym:"pacman.mym", video:"https://www.youtube.com/embed/5c5TduAWEjQ?si=zUE84cbvh8DzSTrv?autoplay=0&mute=1", downloads:"pacman.txt", trans_chans:"1", filter:"game"},
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
	{name:"Rolling Stones", ID:"STONES", mainimg:"rollingstones.avif", secondaryimg:"rollingstones.png", mym:"rolling_stones.mym", video:"https://www.youtube.com/embed/Df19BIkRABo?si=T1C-_09Qi3dLp2BW?autoplay=0&mute=1", downloads:"rollingstones.txt", trans_chans:"1", filter:"music"},
	{name:"Rondo of Blood", ID:"RBLOD1", mainimg:"rondo_of_blood.avif", secondaryimg:"rondo_of_blood.png", mym:"rondo_of_blood.mym", video:"https://www.youtube.com/embed/ujTz_RPfg3c?si=qnY_pEziyYULcIOO?autoplay=0&mute=1", downloads:"rondo_of_blood.txt", trans_chans:"1", filter:"game"},
	{name:"Saw", ID:"SAW001", mainimg:"saw.avif", secondaryimg:"saw.png", mym:"saw.mym", video:"https://www.youtube.com/embed/eXwIhUHvR54?si=dfoML_2H9z_oAYtE?autoplay=0&mute=1", downloads:"saw.txt", trans_chans:"1", filter:"movie"},
	{name:"ScarFace", ID:"SCRFC1", mainimg:"scarface.avif", secondaryimg:"scarface.png", mym:"scarface.mym", video:"https://www.youtube.com/embed/9RhlWGcj2kE?si=pewzRUj42jsPAiAd?autoplay=0&mute=1", downloads:"scarface.txt", trans_chans:"1", filter:"movie"},
	{name:"Secrets of Mana", ID:"SECOM1", mainimg:"secretsofmana.avif", secondaryimg:"secretsofmana.png", mym:"secretsofmana.mym", video:"https://www.youtube.com/embed/aZhR4HabUio?si=Ie0k3oNUYqWFP021?autoplay=0&mute=1", downloads:"secretsofmana.txt", trans_chans:"0", filter:"game"},
	{name:"Seinfeld", ID:"SEINF1", mainimg:"Seinfeld.avif", secondaryimg:"seinfeld.png", mym:"Seinfeld.mym", video:"https://www.youtube.com/embed/eOaZT1FxPpg?si=uIcRH1bDJj5cRluR?autoplay=0&mute=1", downloads:"Seinfeld.txt", trans_chans:"0", filter:"movie"},
	{name:"Sendo World", ID:"SENDO1", mainimg:"sendo.avif", secondaryimg:"sendo.png", mym:"sendo.mym", video:"https://www.youtube.com/embed/0V8MT5j6IXw?si=zJqP_NIE6TEGX557?autoplay=0&mute=1", downloads:"sendo.txt", trans_chans:"1", filter:"misc"},
	{name:"Sesame Street", ID:"SESAME", mainimg:"sesamestreet.avif", secondaryimg:"sesamestreet.png", mym:"sesamestreet.mym", video:"https://www.youtube.com/embed/pRYEFKEMbwE?si=Oh8wVBYEeED6m4D6?autoplay=0&mute=1", downloads:"sesamestreet.txt", trans_chans:"1", filter:"movie/new"},
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
	{name:"Tamagotchi", ID:"TAMAGO", mainimg:"tamagotchi.avif", secondaryimg:"tamagotchi.png", mym:"tamagotchi.mym", video:"https://www.youtube.com/embed/BwthenuJiH4?si=CFjwIBR3dNfKaCtE?autoplay=0&mute=1", downloads:"tamagotchi.txt", trans_chans:"1", filter:"game"},
	{name:"The Terminator", ID:"TERMR1", mainimg:"terminator.avif", secondaryimg:"terminator.png", mym:"terminator.mym", video:"https://www.youtube.com/embed/rMwms3XB1DQ?si=a-wTlhaFf9i6FT8d?autoplay=0&mute=1", downloads:"terminator.txt", trans_chans:"1", filter:"movie"},
	{name:"Terra Nigma", ID:"TERNG1", mainimg:"terranigma.avif", secondaryimg:"terranigma.png", mym:"terranigma.mym", video:"https://www.youtube.com/embed/LazxNXpRXvw?si=p-itpgveVeMGe5XD?autoplay=0&mute=1", downloads:"terranigma.txt", trans_chans:"1", filter:"game"},
	{name:"Thunder Cats", ID:"TCATS1", mainimg:"thundercats.avif", secondaryimg:"thundercats.png", mym:"thunder_cats.mym", video:"https://www.youtube.com/embed/LJW-3B1Vooo?autoplay=0&mute=1", downloads:"thunder_cats.txt", trans_chans:"0", filter:"cartoon"},
	{name:"Teenage Mutant Ninja Turtles", ID:"TMNT01", mainimg:"tmnt.avif", secondaryimg:"tmnt.png", mym:"tmnt.mym", video:"https://www.youtube.com/embed/6cF81fjLRO4?autoplay=0&mute=1", downloads:"tmnt.txt", trans_chans:"1", filter:"cartoon"},
	{name:"Tom and Jerry", ID:"TOMJER", mainimg:"tomandjerry.avif", secondaryimg:"tomandjerry.png", mym:"tomandjerry.mym", video:"https://www.youtube.com/embed/U-9OBtVNJLU?si=D_8YLg64vGEbT07Z?autoplay=0&mute=1", downloads:"tomandjerry.txt", trans_chans:"1", filter:"cartoon"},
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
	{name:"Wallace and Gromit", ID:"WALACE", mainimg:"wallacegromit.avif", secondaryimg:"wallacegromit.png", mym:"wallacegromit.mym", video:"https://www.youtube.com/embed/PtDC7Cdxqpg?si=eR_8Tgm16802G2Yp?autoplay=0&mute=1", downloads:"wallacegromit.txt", trans_chans:"1", filter:"movie/new"},
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
	{name:"X Men", ID:"XMENV1", mainimg:"xmen.avif", secondaryimg:"xmen.png", mym:"xmen.mym", video:"https://www.youtube.com/embed/Lv2SaqdR3iE?si=2kUMuOHE1VTvlNkV?autoplay=0&mute=1", downloads:"xmen.txt", trans_chans:"1", filter:"movie/new"},
	{name:"Yoshi", ID:"GYOSHI", mainimg:"yoshi.avif", secondaryimg:"yoshi.png", mym:"yoshi.mym", video:"https://www.youtube.com/embed/2bTkor6tSBQ?si=ekFrbx7hw9-8jF-E?autoplay=0&mute=1", downloads:"yoshi.txt", trans_chans:"1", filter:"game"},
	{name:"Yugi-oh", ID:"YUGIO1", mainimg:"yugioh.avif", secondaryimg:"yugioh.png", mym:"yugioh.mym", video:"https://www.youtube.com/embed/sAOFnf7aGfs?si=t7e2g2Kqfn57KR4J?autoplay=0&mute=1", downloads:"yugioh.txt", trans_chans:"0", filter:"anime"},
	{name:"Zelda" , ID:"ZELDA1", mainimg:"zelda.avif", secondaryimg:"zelda.png", mym:"zelda.mym", video:"https://www.youtube.com/embed/1NptoYk4ljA?autoplay=0&mute=1", downloads:"zelda.txt", trans_chans:"1", filter:"top20/game"},
	{name:"Zelda: A Link to the Past", ID:"ZELDA2", mainimg:"zelda2.avif", secondaryimg:"zelda2.png", mym:"zelda2.mym", video:"https://www.youtube.com/embed/OErVHh9H03o?si=aXNTZq0-d6U2fK9p?autoplay=0&mute=1", downloads:"zelda2.txt", trans_chans:"1", filter:"game"},
	{name:"Zelda: Minish Cap", ID:"ZELDA3", mainimg:"minishcap.avif", secondaryimg:"minishcap.png", mym:"minishcap.mym", video:"https://www.youtube.com/embed/7FX6HbC36kU?si=BvQpizRCGeMdsTn4?autoplay=0&mute=1", downloads:"minishcap.txt", trans_chans:"1", filter:"game"},
	{name:"Zelda v2", ID:"ZELDA4", mainimg:"zelda_v4.avif", secondaryimg:"zelda_v4.png", mym:"zelda_v4.mym", video:"https://www.youtube.com/embed/qW9cCnd0dMs?si=nbwsGfzsXI7pRYP7?autoplay=0&mute=1", downloads:"zelda_v4.txt", trans_chans:"1", filter:"game"},
	{name:"ZombWii", ID:"ZOMB01", mainimg:"zombwii.avif", secondaryimg:"zombwii.png", mym:"zombwii.mym", video:"https://www.youtube.com/embed/3A-N2TKvvro?si=4osUusbbeCAC8rp9?autoplay=0&mute=1", downloads:"zombwii.txt", trans_chans:"1", filter:"misc"},
];
const theme_count = completethemeinfo.length;
var filtered_list_position = [];
var tab_locked_building = false;
var imgfile_main = "", imgfile_secondary = "";
var theme_index = 0;
const filter_list = ["All", "Top 20 Downloads", "Top 20 Views", "New", "Anime", "Movie/TV", "Cartoon", "Music", "Sports", "Games", "Dark Wii/Colors", "OS", "Individual", "Misc"];
const versions = ["", "4.3", "4.2", "4.1", "4.0", "vWii (WiiU)"];
const regions = ["", "U", "E", "J", "K"];
const outline_Color = ["", "Black", "Blue", "Green", "Orange", "Pink", "Purple", "Red", "White", "Yellow"];

function remove_active_tab() {
	let tab_active;
	for (let i = 1; i <= 7; i++) {
		tab_active = document.getElementById('tab' + i).className;
		if (tab_active === "tab tab_active") {
			document.getElementById('tab' + i).className = "tab tab_inactive";
		}
	}
	return;
}
function show_home_img(imgnum) {
	const img_path = ["", "resources/home/luigiv2.avif", "resources/home/darkwii.avif", "resources/home/windowsxp.avif"];

	document.getElementById("tabcontent").innerHTML = "<span title='Close Window' class='closepreviewbtn'>&times;</span>";
	document.getElementById("tabcontent").style.backgroundImage = "url('" + img_path[imgnum] + "')";
	document.getElementById("tabcontent").style.backgroundSize = "100% 100%";
	document.getElementById("tabcontent").style.backgroundRepeat = "no-repeat";
	document.getElementsByClassName("closepreviewbtn")[0].onclick = function() {
		wiithemer_navigate_page_tabs(1);
		document.getElementById("tabcontent").style.backgroundImage = null;
	};
	return
}
function show_theme_img(img_file) {
	
	//alert(img_file);
	document.getElementById("theme_img_enlarged").innerHTML = "<span title='Close Window' class='closepreviewbtn'>&times;</span>";
	document.getElementById("theme_img_enlarged").style.backgroundImage = "url('" + img_file + "')";
	document.getElementById("theme_img_enlarged").style.backgroundSize = "100% 100%";
	document.getElementById("theme_img_enlarged").style.backgroundRepeat = "no-repeat";
	document.getElementById("theme_img_enlarged").style.display = "block";
	document.getElementsByClassName("closepreviewbtn")[0].onclick = function() {
		document.getElementById("theme_img_enlarged").style.display = "none";
	};
	return
}
function load_installer_count(theme_count_file) {
	const xhttp = new XMLHttpRequest();
	xhttp.onload = function() {
		document.getElementById('installer_downloads').innerText = this.responseText;
	}
	switch(theme_count_file) {
		case 1:
			xhttp.open("GET", "resources/installers/mymenuifymod.txt");
			break;
		case 2:
			xhttp.open("GET", "resources/installers/wiithemer.txt");
			break;
		case 3:
			xhttp.open("GET", "resources/installers/csminstaller.txt");
			break;
	}
	xhttp.send();
	return;
}
function load_single_theme_count(theme_file) {
	const xhttp = new XMLHttpRequest();
	let is_filtered = is_themelist_filtered();

	xhttp.onload - function() {
		document.getElementById('num_theme_downloads').innerHTML = this.responseText + " downloads";
	}
	xhttp.open("GET", "resources/stats/indthemecnt/" + theme_file);
	xhttp.send();
	return;
}
function load_stats_counts(file_num) {
	
	const xhttp = new XMLHttpRequest();
  	xhttp.onload = function() {
		if(file_num == 1) document.getElementById('visitor_count').innerHTML = this.responseText;
		else if(file_num == 2) document.getElementById('wii_downloads').innerHTML = this.responseText;
		else if(file_num == 3) document.getElementById('vwii_downloads').innerHTML = this.responseText;
		else if(file_num == 4) document.getElementById('uwii').innerHTML = this.responseText;
		else if(file_num == 5) document.getElementById('ewii').innerHTML = this.responseText;
		else if(file_num == 6) document.getElementById('jwii').innerHTML = this.responseText;
		else if(file_num == 7) document.getElementById('kwii').innerHTML = this.responseText;
		else if(file_num == 8) document.getElementById('uvwii').innerHTML = this.responseText;
		else if(file_num == 9) document.getElementById('evwii').innerHTML = this.responseText;
		else if(file_num == 10) document.getElementById('jvwii').innerHTML = this.responseText;
	}
	switch (file_num) {
		case 1:
			xhttp.open("GET", "resources/stats/visits.txt");
			break;
		case 2:
			xhttp.open("GET", "resources/stats/wii.txt");
			break;
		case 3:
			xhttp.open("GET", "resources/stats/vwii.txt");
			break;
		case 4:
			xhttp.open("GET", "resources/stats/regions/wii_U.txt");
			break;
		case 5:
			xhttp.open("GET", "resources/stats/regions/wii_E.txt");
			break;
		case 6:
			xhttp.open("GET", "resources/stats/regions/wii_J.txt");
			break;
		case 7:
			xhttp.open("GET", "resources/stats/regions/wii_K.txt");
			break;
		case 8:
			xhttp.open("GET", "resources/stats/regions/vwii_U.txt");
			break;
		case 9:
			xhttp.open("GET", "resources/stats/regions/vwii_E.txt");
			break;
		case 10:
			xhttp.open("GET", "resources/stats/regions/vwii_J.txt");
			break;
	}
	xhttp.send();
	return;
}
function show_download_name(file_num) {
    switch (file_num) {
        case 1:
			 load_installer_count(1);
            document.getElementById("installer_name").innerHTML = "Download MyMenuifyMod Theme Installer (Wii/vWii) ... <span id='installer_downloads'></span><p>Recommended Installer for most users .</p>";
            break;
        case 2:
            load_installer_count(2);
			document.getElementById("installer_name").innerHTML = "Download WiiThemer Theme Installer (Wii Only) ... <span id='installer_downloads'></span><br></br>";
            break;
        case 3:
			load_installer_count(3);
            document.getElementById("installer_name").innerHTML = "Download Csm-Installer Theme Installer (Wii/vWii) ... <span id='installer_downloads'></span><br></br>";
            break;
        default:
            break;
    }
	
    return;
}
function hide_download_name() {
    document.getElementById("installer_name").innerText = "";
    return;
}
function download_Installer(which_installer) {
	let website = null;
    let display_name = null;
	switch(which_installer) {
		case 2:
			website = "https://wiithemer.org/downloads/wiithemer.zip";
            display_name = "WiiThemer";
			//increase_data_File("wiithemer");
		break;
		case 1:
			website = "https://wiithemer.org/downloads/mymenuifymod.zip";
            display_name = "MyMenuifyMod";
			//increase_data_File('mymenuifymod');
		break;
		case 3:
			website = "https://github.com/Naim2000/csm-installer/releases/download/v1.4/csm-installer.zip";
            display_name = "Csm-Installer";
			//increase_data_File('csminstaller');
		break;
        case 4:
            website = "https://wiithemer.org/downloads/legacy_wiithemer.zip";
            display_name = "Legacy WiiThemer";
        break; 
        default:
            break;
	}
	
	result = window.confirm("Download " + display_name + " ?\n\nThis will start a download in your browser.\n\nClick OK to continue or Cancel to close this message.");
	if (result) {
		// User clicked OK
		return window.open(website, 'self', 'noopener,noreferrer');
	}
	// User clicked Cancel
	return;
}
function load_filter_list() {
	document.getElementById("preview_filter").options.length = 0; // clear existing options
	for(let i = 0; i < filter_list.length; i++) { 
		let option = document.createElement("option");
        option.text = filter_list[i];
        option.value = i;
        document.getElementById("preview_filter").add(option);        
	}
	return;
}
function load_theme_list(filter_type) {
	document.getElementById("preview_select").options.length = 0; // clear existing options
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
				if(completethemeinfo[i].filter != "music") {
					if(completethemeinfo[i].filter == "music/new")
						filtered_list_position.push(i);
					else continue; 
				}
				else filtered_list_position.push(i); // if filter set to music, add this theme to filtered list
				
			}
			else continue; // if no filter set, skip this theme
			//
		}
		else if( filter_type == "sports") {
			if(completethemeinfo[i].filter) {
				if(completethemeinfo[i].filter != "sports") continue;
				else filtered_list_position.push(i); // if filter set to sports, add this theme to filtered list
			}
			else continue; // if no filter set, skip this theme
			//filtered_list_position.push(i);
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
				else if(completethemeinfo[i].filter == "music/new")
					filtered_list_position.push(i);
				else continue;
			}
			else continue; // if no filter set, skip this theme
		}
		
		let option = document.createElement("option");
        option.text = completethemeinfo[i].name;
        option.value = i;
        document.getElementById("preview_select").add(option);        
	
	}

	return;
}
function get_filter_option() {
	let filter_option = document.getElementById("preview_filter").selectedIndex;
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
	//load_media();
	//get_data_File(completethemeinfo[themeposition].downloads);
	return;
}
function is_themelist_filtered() {
	if (filtered_list_position.length > 0)
		return true;
	else
		return false;
}
function build_gui() {
	let theme_position = 0;
	let is_filtered = is_themelist_filtered();
	if(is_filtered)
		theme_position = filtered_list_position[document.getElementById("preview_select").selectedIndex];
	else
		theme_position = document.getElementById("preview_select").selectedIndex;
	var theme = completethemeinfo[theme_position];
	alert("Swapped to Build Mode .\n\n" + theme.name);
	remove_active_tab();
	document.getElementById('tab3').className = "tab tab_active";
	document.getElementById("tabcontent").innerHTML = "";
	// Load Build GUI here .
	document.getElementById("tabcontent").innerHTML = "<span title='Close Window' class='closepreviewbtn'>&times;</span><div id='build_gui_container'><h2>" + theme.name + "</h2><hr></hr><p>Theme building options will be available here soon .</p></div>";
	tab_locked_building = true;
	document.getElementsByClassName("closepreviewbtn")[0].onclick = function() {
		tab_locked_building = false;
	};
	return;
}
function wiithemer_navigate_page_tabs(tab_num) {
	if (tab_locked_building)
		return;
	remove_active_tab();
	document.getElementById('tab' + tab_num).className = "tab tab_active";
	document.getElementById("tabcontent").innerHTML = " ";
	switch (tab_num) {
		case 1:
			document.getElementById("tabcontent").innerHTML = "<div id='home_container'><h2>Welcome to the Wii System Menu Theme Building Home page!</h2><hr></hr><br></br><img title='Click to enlarge image.' id='homeimg1' alt='homeimage1' src='resources/home/luigiv2.avif' onclick='show_home_img(1)'></img><img title='Click to enlarge image.' id='homeimg2' alt='homeimage2' src='resources/home/darkwii.avif'' onclick='show_home_img(2)'></img><img title='Click to enlarge image.' id='homeimg3' alt='homeimage3' src='resources/home/windowsxp.avif' ' onclick='show_home_img(3)'></img><br></br><p>Here, you can build and download custom themes for your Wii System Menu. Explore our collection of themes and enhance your Wii experience!<br></br>These are just a few examples of the 299 themes available. More Themes Coming Soon.....</p></div>";
           
			break;			
		case 2:
			let theme_position = 0;
			let is_filtered = is_themelist_filtered();
			if(is_filtered)
				theme_position = filtered_list_position[theme_index];
			else 
				theme_position = 0;
				
			theme = completethemeinfo[theme_position];
			document.getElementById("tabcontent").innerHTML = "<div id='theme_gallery'><button id='preview_get_theme_btn' onclick='build_gui()'>Get Theme</button><h3 id='gallery_header'>" + theme.name + "<span id='num_theme_downloads'></span></h3><hr></hr><button id='loadprevbtn'> &lt;&lt;</button><select id='preview_filter' onchange='get_filter_option()'></select><select id='preview_select' name='preview_select'></select><button id='loadnextbtn'> &gt;&gt;</button><div id='imgholder' class='flexrow'><div><img id='preview_mainimg' alt='preview_mainimg' src='resources/theme_main/" + theme.mainimg + "' width='350' height='200'></img><br></br><img id='preview_secondaryimg' alt='preview_secondaryimg' src='resources/theme_secondary/" + theme.secondaryimg + "' width='350' height='200'></img></div><iframe id='preview_video' width='550' height='400' src='' title='YouTube video player' frameborder='0' allowfullscreen></iframe></div></div>";
			// add theme.video to iframe src above 
			load_filter_list();
            load_theme_list("All");
			load_single_theme_count(theme.downloads);
			document.getElementById("loadprevbtn").onclick = function() { // previous theme
				var theme = 0;
				let temp_position = theme_index;
				console.log(temp_position);
				let is_filtered = is_themelist_filtered();
				temp_position--;
				console.log("temp_position: " + temp_position);
				if(is_filtered) {
					if (temp_position < 0) {
						temp_position = filtered_list_position.length - 1;
						theme = completethemeinfo[filtered_list_position[temp_position]];
					}
				}
				else {
					if (temp_position < 0)
						temp_position = theme_count - 1;
					theme = completethemeinfo[temp_position]
				}
				theme_index = temp_position;
				load_single_theme_count(theme.downloads);
				console.log("theme: " +theme.name + "\ntemp pos: " + temp_position);
				document.getElementById("preview_mainimg").src = "resources/theme_main/" + theme.mainimg;
				document.getElementById("preview_secondaryimg").src = "resources/theme_secondary/" + theme.secondaryimg;
				//document.getElementById("preview_video").src = theme.video;
				document.getElementById("gallery_header").innerHTML = theme.name + "<span id='num_theme_downloads'></span>";
				document.getElementById("preview_select").selectedIndex = temp_position;
				console.log("theme_index: " + theme_index);
			};
			document.getElementById("loadnextbtn").onclick = function() { // next theme
				var theme = 0;
				let temp_position = theme_index;
				let is_filtered = is_themelist_filtered();
				temp_position++;
				console.log("temp_position: " + temp_position);
				if(is_filtered) {
					if (temp_position > filtered_list_position.length - 1) 
						temp_position = 0;
					theme = completethemeinfo[filtered_list_position[temp_position]];
				}
				else {
					if (temp_position > theme_count - 1)
						temp_position = 0;
					theme = completethemeinfo[temp_position]
					
				}
				theme_index = temp_position;
				load_single_theme_count(theme.downloads);
				console.log("theme: " +theme.name);
				document.getElementById("preview_mainimg").src = "resources/theme_main/" + theme.mainimg;
				document.getElementById("preview_secondaryimg").src = "resources/theme_secondary/" + theme.secondaryimg;
				//document.getElementById("preview_video").src = theme.video;
				document.getElementById("gallery_header").innerHTML = theme.name + "<span id='num_theme_downloads'></span>";
				document.getElementById("preview_select").selectedIndex = temp_position;
				console.log("theme_index: " + theme_index);
				
				
			};
			document.getElementById("preview_select").onchange = function() { // theme names
				var theme = 0;
				let is_filtered = is_themelist_filtered();
				if(is_filtered)
					theme = completethemeinfo[filtered_list_position[document.getElementById("preview_select").selectedIndex]];
				else
					theme = completethemeinfo[document.getElementById("preview_select").selectedIndex];
				theme_index = document.getElementById("preview_select").selectedIndex;
				document.getElementById("preview_mainimg").src = "resources/theme_main/" + theme.mainimg;
				document.getElementById("preview_secondaryimg").src = "resources/theme_secondary/" + theme.secondaryimg;
				//document.getElementById("preview_video").src = theme.video;
				document.getElementById("gallery_header").innerHTML =  theme.name + "<span id='num_theme_downloads'></span>";
				load_single_theme_count(theme.downloads);
			}
			document.getElementById("preview_filter").onchange = function() { // theme filters
				var theme = 0;
				get_filter_option();
				let is_filtered = is_themelist_filtered();
				if(is_filtered) 
					theme = completethemeinfo[filtered_list_position[0]];
				else
					theme = completethemeinfo[theme_position];
				document.getElementById("preview_mainimg").src = "resources/theme_main/" + theme.mainimg;
				document.getElementById("preview_secondaryimg").src = "resources/theme_secondary/" + theme.secondaryimg;
				load_single_theme_count(theme.downloads);
				theme_index = 0;
				//document.getElementById("preview_video").src = theme.video;
				document.getElementById("gallery_header").innerHTML = theme.name + "<span id='num_theme_downloads'></span>";
				
			}
			document.getElementById("preview_mainimg").onclick = function() {
				let is_filtered = is_themelist_filtered();
				if(is_filtered)
					theme = completethemeinfo[filtered_list_position[document.getElementById("preview_select").selectedIndex]];
				else
					theme = completethemeinfo[document.getElementById("preview_select").selectedIndex];
				show_theme_img("resources/theme_main/" + theme.mainimg);
			}
			document.getElementById("preview_secondaryimg").onclick = function() {
				let is_filtered = is_themelist_filtered();
				if(is_filtered)
					theme = completethemeinfo[filtered_list_position[document.getElementById("preview_select").selectedIndex]];
				else
					theme = completethemeinfo[document.getElementById("preview_select").selectedIndex];
				show_theme_img("resources/theme_secondary/" + theme.secondaryimg);
			}

			break;
		case 4:
			document.getElementById("tabcontent").innerHTML = "<div id='theme_installers'><p>Here are the download links for the Theme Installers.</p><hr></hr><p>Choose from :</p><br></br><img title='Click to download MyMenuifyMod Theme Installer.' id='downloadimg1' alt='installerimg1' src='resources/installers/MyMenuifyMod.avif' onclick='download_Installer(1)' onmouseover='show_download_name(1)' onmouseout='hide_download_name(1)'></img><img title='Click to download WiiThemer Theme Installer.' id='downloadimg2' alt='installerimg2' src='resources/installers/wiithemer.avif' onclick='download_Installer(2)' onmouseover='show_download_name(2)' onmouseout='hide_download_name(2)'></img><img title='Click to download Csm-Installer Theme Installer.' id='downloadimg3' alt='installerimg3' src='resources/installers/csminstaller.avif' onclick='download_Installer(3)' onmouseover='show_download_name(3)' onmouseout='hide_download_name(3)'></img><br></br><p id='installer_name'></p></div>";
			break;
		case 5:
			document.getElementById("tabcontent").innerHTML = "<div id='links_container'><h3>GBATemp Links</h3><hr></hr><p><a target='blank' href='https://gbatemp.net'>GBAtemp</a> &gt;&gt;&gt; The best gaming community .</p><p><a target='blank' href='https://gbatemp.net/threads/wii-themer-org.628144/'>Wii Themer</a> &gt;&gt;&gt; on GBATemp .</p><p><a target='blank' href='https://modmii.github.io/'>ModMii </a> &gt;&gt;&gt; Official Site .</p><p><a target='blank' href='https://gbatemp.net/threads/wii-theme-team-creations.260327/'> Wii Theme Team</a> &gt;&gt;&gt; The team that made all the Dark Wii Colored themes . </p><p><a target='blank' href='https://www.youtube.com/user/McDiddy81/videos'>Diddy81 Youtube Channel</a> &gt;&gt;&gt; One of the main members of the Wii Theme Team .</p><br></br><h3>Official Sites</h3><hr></hr><p><a target='blank' href='https://gbatemp.net/threads/best-way-to-mod-any-wii-modmii-for-windows-official-support-thread.207126/page-486'>ModMii</a> &gt;&gt;&gt; on GBATemp . The best way to mod a wii .</p><p><a target='blank' href='https://hbc.hackmii.com/'>Home Brew Channel</a> &gt;&gt;&gt; Offical Site .</p><p><a target='blank' href='https://dolphin-emu.org/'>Dolphin</a> &gt;&gt;&gt; Wii Emulator Official Site .</p><p><a target='blank' href='https://wii.guide/themes'>Wii Guide</a> &gt;&gt;&gt; Guide : Installing Wii Menu Themes </p><p><a target='blank' href='https://wiibrew.org/wiki/System_Menu'>Wii Brew</a> &gt;&gt;&gt; A great place to learn about the Wii's tech .</p><br></br><h3>Wii Themer Mym Database</h3><hr></hr><p><a target='blank' href='http://wiithemer.org/mym/'>Theme Database</a> &gt;&gt;&gt; A database of all the available theme .mym files .</p></div>";
			
			break;
		case 6:
            document.getElementById("tabcontent").innerHTML = "<div id='stats_message'><p>Current Total Themes Available : <span id='themecount'>" + theme_count + "</span></p><hr></hr><br></br><p>Site Visits :<span id='visitor_count'></span><hr></hr><br></br></p><p>Wii Themes Downloaded<span id='wii_downloads'></span><button id='showmorebtn1'>Show More</button><hr></hr><div id='show_more_wii'><p>U Region Downloads<span id='uwii'></span></p><p>E Region Downloads<span id='ewii'></span></p><p>J Region Downloads<span id='jwii'></span></p><p>K Region Downloads<span id='kwii'></span></p></div></p><br></br><p>vWii Themes Downloaded<span id='vwii_downloads'></span><button id='showmorebtn2'>Show More</button><hr></hr><div id='show_more_vwii'><p>U Region Downloads<span id='uvwii'></span></p><p>E Region Downloads<span id='evwii'></span></p><p>J Region Downloads<span id='jvwii'></span></p></div></p></div>";
			for (let i = 1; i < 11; i++) {
				load_stats_counts(i);
			}
			document.getElementById("showmorebtn1").onclick = function() {
				if( document.getElementById("show_more_wii").style.display == "block")
					document.getElementById("show_more_wii").style.display = "none";
				else
					document.getElementById("show_more_wii").style.display = "block";
			}
			document.getElementById("showmorebtn2").onclick = function() {
				if( document.getElementById("show_more_vwii").style.display == "block")
					document.getElementById("show_more_vwii").style.display = "none";
				else
					document.getElementById("show_more_vwii").style.display = "block";
			}
			break;
		case 7:
			document.getElementById("tabcontent").innerHTML = "<div id='mail_message'>Contact us with comments, issues, etc. .<hr></hr><br></br>Email :<a href='mailto:scooby74029@yahoo.com'><i>Scooby74029 </i></a>from GbaTemp<br></br>Email :<a href='mailto:admin@wiithemer.org'><i>admin </i></a>@ wiithemer.org<br></br><br></br><img id='mailimg' alt='mail gif' src='resources/contact/mail.gif' width='350px' height='200px'></img></div>";
			break;
	}
	return;
}
/*
var links_tab_active = true;

function close_main_img() {
    document.getElementById("imgcontainer").style.display = "none";
    return;
}
function show_main_img(imgnum, index_needed) {
    let main_img_str = "";
    let secondary_img_str = "";

    if (index_needed) {
        const selectedIndex = document.getElementById("preview_select").value;
        const theme = completethemeinfo[selectedIndex];
        main_img_str = "resources/theme_main/" + theme.mainimg;
        secondary_img_str = "resources/theme_secondary/" + theme.secondaryimg;
    }
    
    document.getElementById("imgcontainer").style.display = "block";
    return;
}
function link_nav(nav_input) {
    document.getElementById("link_tab").style.backgroundColor = null;
    document.getElementById("link_tab").style.color = null;
    document.getElementById("link_tab").style.borderColor = null;

    document.getElementById("stat_tab").style.backgroundColor = null;
    document.getElementById("stat_tab").style.color = null;
    document.getElementById("stat_tab").style.borderColor = null;
    switch (nav_input) {
        case 1:
            document.getElementById("tabcontent").innerHTML = "<div id='linknavcont'><div id='link_tab' onclick='link_nav(1)'>Links</div><div id='stat_tab' onclick='link_nav(2)'>Stats</div></div><hr></hr><p><a target='blank' href='https://gbatemp.net'>GBAtemp</a> &gt;&gt;&gt; The best gaming community .</p><p><a target='blank' href='https://gbatemp.net/threads/wii-themer-org.628144/'>Wii Themer</a> &gt;&gt;&gt; on GBATemp .</p><p><a target='blank' href='https://gbatemp.net/threads/best-way-to-mod-any-wii-modmii-for-windows-official-support-thread.207126/page-486'>ModMii</a> &gt;&gt;&gt; on GBATemp . The best way to mod a wii .</p><p><a target='blank' href='https://modmii.github.io/'>ModMii </a> &gt;&gt;&gt; Official Site .</p><p><a target='blank' href='https://gbatemp.net/threads/wii-theme-team-creations.260327/'> Wii Theme Team</a> &gt;&gt;&gt; The team that made all the Dark Wii Colored themes . </p><p><a target='blank' href='https://www.youtube.com/user/McDiddy81/videos'>Diddy81 Youtube Channel</a> &gt;&gt;&gt; One of the main members of the Wii Theme Team .</p><p><a target='blank' href='https://hbc.hackmii.com/'>Home Brew Channel</a> &gt;&gt;&gt; Offical Site .</p><p><a target='blank' href='https://dolphin-emu.org/'>Dolphin</a> &gt;&gt;&gt; Wii Emulator Official Site .</p><hr></hr><p><a target='blank' href='https://wii.guide/themes'>Wii Guide</a> &gt;&gt;&gt; Guide : Installing Wii Menu Themes </p><p><a target='blank' href='https://wiibrew.org/wiki/System_Menu'>Wii Brew</a> &gt;&gt;&gt; A great place to learn about the Wii's tech .</p><hr></hr><p><a target='blank' href='http://wiithemer.org/mym/'>Theme Database</a> &gt;&gt;&gt; A database of all the available theme .mym files .</p>"
            document.getElementById("link_tab").style.backgroundColor ="#ff800f";
            document.getElementById("link_tab").style.color = "#ffffff";
            document.getElementById("link_tab").style.borderColor = "#ffff00";
            document.getElementById("tab5").innerText = "Links";
            links_tab_active = true;
            break;
        case 2:
            loadDoc(4);
            loadDoc(5);
            loadDoc(6);
            document.getElementById("tabcontent").innerHTML = "<div id='linknavcont'><div id='link_tab' onclick='link_nav(1)'>Links</div><div id='stat_tab' onclick='link_nav(2)'>Stats</div></div><br></br><p style='text-align:center'>Current Total Themes Available: " + theme_count + "</p><hr></hr><br></br><p>Site Visits <span id='visitor_count'></span></p><p>Wii Themes <span id='wii_downloads'></span></p><p>vWii Themes <span id='vwii_downloads'></span></p>";
            document.getElementById("stat_tab").style.backgroundColor = "#ff800f";
            document.getElementById("stat_tab").style.color = "#ffffff";
            document.getElementById("stat_tab").style.borderColor = "#ffff00";
            document.getElementById("tab5").innerText = "Stats";
            links_tab_active = false;
            break;
        default:
            break;
    }
    return;
}
function load_outline_Color() {
	$('#spin_color').empty();
	for(let i = 0; i < outline_Color.length; i++) { 
		$('#spin_color').append($('<option>',
		{
			value: i,
			text : outline_Color[i] 
		}
		));
	}
	return;
}
function load_regions_no_K() {
	$('#region_selected').empty();
	for(let i = 0; i < regions.length - 1; i++) {
		$('#region_selected').append($('<option>',
			{
				value: i,
				text : regions[i] 
			}
		));
	}
	return;
}
function load_regions() {
	$('#region_selected').empty();
	for(let i = 0; i < regions.length; i++) {
		$('#region_selected').append($('<option>',
			{
				value: i,
				text : regions[i] 
			}
		));
	}
	return;
}
function load_versions() {
    document.getElementById("version_selected").remove('options');
	for(let i = 0; i < versions.length; i++) { 
		let option = document.createElement("option");
        option.text = versions[i];
        option.value = i;
        document.getElementById("version_selected").add(option);        
	}
	return;
}
function swap_regions_K() {
    let versionselected = document.getElementById("version_selected").selectedIndex;
    if(versionselected >= 4) { //vWii selected
        load_regions_no_K(); //load K region
    }
    else {
        load_regions(); //load all regions
    }
    return;
}
function highlight_tab(tabnum) {
    for (let i = 1; i <= 6; i++) {
        document.getElementById("tab" + i).style.backgroundColor = null;
        document.getElementById("tab" + i).style.color = null;
        document.getElementById("tab" + i).style.borderColor = null;
    }
    document.getElementById("tab" + tabnum).style.backgroundColor = "#ff800f";
    document.getElementById("tab" + tabnum).style.color = "#ffffff";
    document.getElementById("tab" + tabnum).style.borderColor = "#ffff00";
    
    return;
}   
function pagenav(nav_input) {
    highlight_tab(nav_input);
    switch (nav_input) {
        case 1:
           
        /*case 2:
            if(!themeSelected) {
                pagenav(4);
                return;
            }
            else
                themeSelected = false;
            document.getElementById("previewcontainer").style.display = "none";
            let theme_selected_index = document.getElementById("preview_select").value;
            let theme_selected = completethemeinfo[theme_selected_index];
            document.getElementById("tabcontent").style.background = "resources/theme_main/" + theme_selected.mainimg;
            document.getElementById("tabcontent").innerHTML = "<p style='text-align:center'>" + theme_selected.name + "</p><hr></hr><p style='text-align:center'>Choose System Menu Version : <select id='version_selected' onchange='swap_regions_K()'></select></p><p style='text-align:center'>Choose System Menu Region :<select id='region_selected'></select></p><hr></hr><p style='text-align:center'>Optional : <br></br><label for='source_files'>Source Files</label><input type='checkbox' id='source_files' name='source_files'></input><br></br><label for='trans_channels'>Transparent Channels</label><input type='checkbox' id='trans_channels' name='trans_channels'></input></p><p style='text-align:center'>Optional : <br></br><label for='fastspin'>Fast Spinning Channel Outline </label><input type='radio' id='fastspin' name='option' value='3'></input><br></br><label for='spin'>Spinning Channel Outline</label><input type='radio' id='spin' name='option' value='2'></input><br></br><label for='nospin'>No Spinning Channel Outline</label><input type='radio' id='nospin' name='option' value='1' checked></input></p><p style='text-align:center'>Choose Spinning Outline Color : <select id='spin_color'></select></p><p style='text-align:center'><button id='buildthemebtn' onclick='begin_build_process()'>Build Theme</button></p>";
            load_versions();
            load_regions();
            load_outline_Color();
            break;
        case 3:
            document.getElementById("tabcontent").innerHTML = "<p style='text-align:center'>Here are the download links for the Theme Installers.</p><hr></hr><br></br><p style='text-align:center'>Choose from :</p><br></br><img title='Click to download MyMenuifyMod Theme Installer.' id='downloadimg1' alt='installerimg1' src='resources/installers/MyMenuifyMod.avif' onclick='download_Installer(1)' onmouseover='show_download_name(1)' onmouseout='hide_download_name(1)'></img><img title='Click to download WiiThemer Theme Installer.' id='downloadimg2' alt='installerimg2' src='resources/installers/wiithemer.avif' onclick='download_Installer(2)' onmouseover='show_download_name(2)' onmouseout='hide_download_name(2)'></img><img title='Click to download Csm-Installer Theme Installer.' id='downloadimg3' alt='installerimg3' src='resources/installers/csminstaller.avif' onclick='download_Installer(3)' onmouseover='show_download_name(3)' onmouseout='hide_download_name(3)'></img><br></br><h1 id='installer_name'></h1>";
            break;
        case 4:
            document.getElementById("tabcontent").innerHTML = "<p style='text-align:center'>Browse through our gallery of Wii System Menu Themes and Videos.</p><hr></hr><select id='preview_filter' onchange='get_filter_option()'></select><select id='preview_select' name='preview_select'></select><button id='loadpreviewbtn' onclick='show_preview_container()'>View Theme</button>";
            //document.getElementById("previewcontainer").style.display = "block";
			load_filter_list();
            load_theme_list("All");
            current_theme_index = document.getElementById("preview_select").value;
			break;
        case 5:
            document.getElementById("tabcontent").innerHTML = "<div id='linknavcont'><div id='link_tab' onclick='link_nav(1)'>Links</div><div id='stat_tab' onclick='link_nav(2)'>Stats</div></div><hr></hr>";
            if (links_tab_active) {
                document.getElementById("link_tab").style.backgroundColor ="#ff800f";
                document.getElementById("link_tab").style.color = "#ffffff";
                document.getElementById("link_tab").style.borderColor = "#ffff00";
                link_nav(1);
            } else {
                document.getElementById("stat_tab").style.backgroundColor = "#ff800f";
                document.getElementById("stat_tab").style.color = "#ffffff";
                document.getElementById("stat_tab").style.borderColor = "#ffff00";
                link_nav(2);
            }
            break;
        case 6:
            document.getElementById("tabcontent").innerHTML = "<p style='text-align:center'>Contact us with comments, issues, etc. .</p><hr></hr><br></br><p style='text-align:center'>Email :<a href='mailto:scooby74029@yahoo.com'><i>Scooby74029 </i></a>from GbaTemp<br></br>Email :<a href='mailto:admin@wiithemer.org'><i>admin </i></a>@ wiithemer.org</p><br></br><img id='mailimg' alt='mail gif' src='resources/contact/mail.gif' width='350px' height='200px'></img>";
            
            break;
        
            default:
            document.getElementById("tabcontent").innerHTML = "<h1>Welcome</h1><p>Select a tab to view content.</p>";
            break;
    }
    return;
}






function begin_build_process() {
    const versionIndex = document.getElementById("version_selected").selectedIndex;
    const regionIndex = document.getElementById("region_selected").selectedIndex;
    const sourceFilesChecked = document.getElementById("source_files").checked;
    const transChannelsChecked = document.getElementById("trans_channels").checked;
    const spinOption = document.querySelector('input[name="option"]:checked').value;
    const outlineColorIndex = document.getElementById("spin_color").selectedIndex;
    // Here you would add the logic to build the theme based on the selected options.
    alert("Version: " + versionIndex + "\nRegion: " + regionIndex + "\nSource Files: " + sourceFilesChecked + "\nTransparent Channels: " + transChannelsChecked + "\nSpin Option: " + spinOption + "\nOutline Color Index: " + outlineColorIndex +  "\nthemeindex: " + current_theme_index + "\n\nTheme build process would start now.");
    if(versionIndex == 0) {
        alert("Please select a valid System Menu Version before building the theme.");
        return;
    }
    if(regionIndex == 0) {
        alert("Please select a valid System Menu Region before building the theme.");
        return;
    }
    document.getElementById("theme_dialog").style.display = "block";

    return;
}
*/
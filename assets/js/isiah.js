// const fetch = require("node-fetch");

// fetch('https://coinmap.org/api/v1/venues/?query=bitcoin', {})
// 	.then(function(response) {
// 		return response.json();
// 	})
// 	.then(
// 		function(data) {
// 			console.log(data);
// 		}
// 	)
// ;

// fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data?symbol=AMRN&region=US", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "044818423amsh7a4b9ddcb86f6bdp1a1b13jsn21dfddc15cb3",
// 		"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	console.log(response);
// 	var search = document.getElementById("search")
	
// })
// .catch(err => {
// 	console.error(err);
// });

fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart?interval=5m&symbol=AMRN&range=1d&region=US", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "044818423amsh7a4b9ddcb86f6bdp1a1b13jsn21dfddc15cb3",
		"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});





AACG
AACQ
AACQU
AACQW
AAL
AAME
AAOI
AAON
AAPL
AAWW
ABCB
ABCL
ABCM
ABEO
ABIO
ABMD
ABNB
ABST
ABTX
ABUS
ACAC
ACACU
ACACW
ACAD
ACBI
ACCD
ACER
ACET
ACEV
ACEVU
ACEVW
ACGL
ACGLO
ACGLP
ACHC
ACHV
ACIA
ACIU
ACIW
ACKIT
ACKIU
ACKIW
ACLS
ACMR
ACNB
ACOR
ACRS
ACRX
ACST
ACTC
ACTCU
ACTCW
ACTG
ADAG
ADAP
ADBE
ADERU
ADES
ADI
ADIL
ADILW
ADMA
ADMP
ADMS
ADN
ADNWW
ADOC
ADOCR
ADOCW
ADP
ADPT
ADSK
ADTN
ADTX
ADUS
ADV
ADVM
ADVWW
ADXN
ADXS
AEACU
AEGN
AEHL
AEHR
AEI
AEIS
AEMD
AEP
AEPPL
AEPPZ
AERI
AESE
AEY
AEYE
AEZS
AFBI
AFIB
AFIN
AFINO
AFINP
AFMD
AFRM
AFYA
AGBA
AGBAR
AGBAW
AGC
AGCUU
AGCWW
AGEN
AGFS
AGFY
AGIO
AGLE
AGMH
AGNC
AGNCM
AGNCN
AGNCO
AGNCP
AGRX
AGTC
AGYS
AHAC
AHACU
AHACW
AHCO
AHPI
AIH
AIHS
AIKI
AIMC
AINV
AIRG
AIRT
AIRTP
AIRTW
AKAM
AKBA
AKER
AKICU
AKRO
AKTS
AKTX
AKU
AKUS
ALAC
ALACR
ALACU
ALACW
ALBO
ALCO
ALDX
ALEC
ALGM
ALGN
ALGS
ALGT
ALIM
ALJJ
ALKS
ALLK
ALLO
ALLT
ALNA
ALNY
ALOT
ALPN
ALRM
ALRN
ALRS
ALSK
ALT
ALTA
ALTM
ALTO
ALTR
ALTU
ALTUU
ALTUW
ALVR
ALXN
ALXO
ALYA
AMAL
AMAT
AMBA
AMCX
AMD
AMED
AMEH
AMGN
AMHC
AMHCU
AMHCW
AMKR
AMNB
AMOT
AMPG
AMPGW
AMPH
AMRB
AMRK
AMRN
AMRS
AMSC
AMSF
AMST
AMSWA
AMTB
AMTBB
AMTI
AMTX
AMWD
AMYT
AMZN
ANAB
ANAT
ANCN
ANDA
ANDAR
ANDAU
ANDAW
ANDE
ANGI
ANGN
ANGO
ANIK
ANIP
ANIX
ANNX
ANPC
ANSS
ANTE
ANY
AOSL
AOUT
APA
APDN
APEI
APEN
APHA
API
APLS
APLT
APM
APOG
APOP
APOPW
APPF
APPH
APPHW
APPN
APPS
APR
APRE
APTO
APTX
APVO
APWC
APXT
APXTU
APXTW
APYX
AQB
AQMS
AQST
ARAV
ARAY
ARBG
ARBGU
ARBGW
ARCB
ARCC
ARCE
ARCT
ARDS
ARDX
AREC
ARGX
ARKIU
ARKO
ARKOW
ARKR
ARLP
ARNA
AROW
ARPO
ARQT
ARRY
ARTL
ARTLW
ARTNA
ARTW
ARVN
ARWR
ARYA
ASAXU
ASLE
ASLEW
ASLN
ASMB
ASML
ASND
ASO
ASPS
ASPU
ASRT
ASRV
ASRVP
ASTC
ASTE
ASUR
ASYS
ATAX
ATCX
ATEC
ATEX
ATHA
ATHE
ATHX
ATIF
ATLC
ATLO
ATNF
ATNFW
ATNI
ATNX
ATOM
ATOS
ATRA
ATRC
ATRI
ATRO
ATRS
ATSG
ATVI
ATXI
AUB
AUBAP
AUBN
AUDC
AUPH
AUTL
AUTO
AUVI
AVAV
AVCO
AVCT
AVCTW
AVDL
AVEO
AVGO
AVGOP
AVGR
AVID
AVIR
AVNW
AVO
AVRO
AVT
AVXL
AWH
AWRE
AXAS
AXDX
AXGN
AXLA
AXNX
AXON
AXSM
AXTI
AY
AYLA
AYRO
AYTU
AZN
AZPN
AZRX
AZYO
BAND
BANF
BANR
BANX
BAOS
BASI
BATRA
BATRK
BBBY
BBCP
BBGI
BBI
BBIG
BBIO
BBQ
BBSI
BCAB
BCACU
BCBP
BCDA
BCDAW
BCEL
BCLI
BCML
BCOR
BCOV
BCOW
BCPC
BCRX
BCTG
BCYC
BCYP
BCYPU
BCYPW
BDSI
BDSX
BDTX
BEAM
BECN
BEEM
BEEMW
BELFA
BELFB
BENE
BENER
BENEU
BENEW
BFC
BFI
BFIIW
BFIN
BFRA
BFST
BGCP
BGFV
BGNE
BHAT
BHF
BHFAL
BHFAN
BHFAO
BHFAP
BHSE
BHSEU
BHSEW
BHTG
BIDU
BIGC
BIIB
BILI
BIMI
BIOC
BIOL
BIOTU
BIVI
BJRI
BKCC
BKEP
BKEPP
BKNG
BKSC
BKYI
BL
BLBD
BLCM
BLCT
BLDP
BLDR
BLFS
BLI
BLIN
BLKB
BLMN
BLNK
BLNKW
BLPH
BLRX
BLSA
BLTSU
BLU
BLUE
BLUW
BLUWU
BLUWW
BMBL
BMRA
BMRC
BMRN
BMTC
BNFT
BNGO
BNGOW
BNR
BNSO
BNTC
BNTX
BOCH
BOKF
BOKFL
BOLT
BOMN
BOOM
BOSC
BOTJ
BOWX
BOWXU
BOWXW
BOXL
BPFH
BPMC
BPOP
BPOPM
BPOPN
BPRN
BPTH
BPTS
BPY
BPYPN
BPYPO
BPYPP
BPYU
BPYUP
BREZ
BREZR
BREZW
BRID
BRKL
BRKR
BRKS
BRLI
BRLIR
BRLIW
BROG
BROGW
BRP
BRPA
BRPAR
BRPAU
BRPAW
BRQS
BRY
BSBK
BSET
BSGM
BSPE
BSQR
BSRR
BSVN
BSY
BTAI
BTAQ
BTAQU
BTAQW
BTBT
BTNB
BTRS
BTRSW
BTWN
BTWNU
BTWNW
BUSE
BVS
BVXV
BWAC
BWACU
BWACW
BWAY
BWB
BWEN
BWFG
BWMX
BXRX
BYFC
BYND
BYSI
BZUN
CAAS
CABA
CAC
CACC
CAHCU
CAKE
CALA
CALB
CALM
CALT
CAMP
CAMT
CAN
CAPA
CAPAU
CAPAW
CAPR
CAR
CARA
CARE
CARG
CARV
CASA
CASH
CASI
CASS
CASY
CATB
CATC
CATM
CATY
CBAN
CBAT
CBAY
CBFV
CBIO
CBLI
CBMB
CBMG
CBNK
CBPO
CBRL
CBSH
CBTX
CCAP
CCB
CCBG
CCCC
CCD
CCLP
CCMP
CCNC
CCNE
CCNEP
CCOI
CCRC
CCRN
CCXI
CD
CDAK
CDEV
CDK
CDLX
CDMO
CDMOP
CDNA
CDNS
CDTX
CDW
CDXC
CDXS
CDZI
CECE
CELC
CELH
CEMI
CENHU
CENT
CENTA
CENX
CERC
CERE
CEREW
CERN
CERS
CERT
CETX
CETXP
CETXW
CEVA
CFAC
CFACU
CFACW
CFB
CFBK
CFFI
CFFN
CFFVU
CFII
CFIIU
CFIIW
CFIV
CFIVU
CFIVW
CFMS
CFRX
CG
CGBD
CGC
CGEM
CGEN
CGIX
CGNT
CGNX
CGO
CGRO
CGROU
CGROW
CHCI
CHCO
CHDN
CHEF
CHEK
CHEKZ
CHFS
CHI
CHK
CHKEL
CHKEW
CHKEZ
CHKP
CHMA
CHMG
CHNG
CHNGU
CHNR
CHPM
CHPMU
CHPMW
CHRS
CHRW
CHSCL
CHSCM
CHSCN
CHSCO
CHSCP
CHTR
CHUY
CHW
CHX
CHY
CIDM
CIGI
CIH
CIIC
CIICU
CIICW
CINF
CIVB
CIZN
CJJD
CKPT
CLAR
CLBK
CLBS
CLDB
CLDX
CLEU
CLFD
CLGN
CLIR
CLLS
CLMT
CLNE
CLNN
CLNNW
CLOV
CLOVW
CLPS
CLPT
CLRB
CLRBZ
CLRMU
CLRO
CLSD
CLSK
CLSN
CLVR
CLVRW
CLVS
CLWT
CLXT
CMBM
CMCO
CMCSA
CMCT
CMCTP
CME
CMFNL
CMLF
CMLFU
CMLFW
CMLS
CMPI
CMPR
CMPS
CMRX
CMTL
CNBKA
CNCE
CNDT
CNET
CNEY
CNFR
CNFRL
CNNB
CNOB
CNSL
CNSP
CNST
CNTG
CNTY
CNXC
CNXN
COCP
CODA
CODX
COFS
COGT
COHR
COHU
COKE
COLB
COLL
COLM
COMM
COMS
COMSW
CONE
CONN
CONX
CONXU
CONXW
COOLU
COOP
CORE
CORT
COST
COUP
COVAU
COWN
COWNL
COWNZ
CPAH
CPHC
CPIX
CPLP
CPRT
CPRX
CPSH
CPSI
CPSS
CPST
CPTA
CPTAG
CPTAL
CPZ
CRAI
CRBP
CRDF
CREE
CREG
CRESY
CREX
CREXW
CRIS
CRKN
CRMD
CRMT
CRNC
CRNT
CRNX
CRON
CROX
CRSA
CRSAU
CRSAW
CRSP
CRSR
CRTD
CRTDW
CRTO
CRTX
CRUS
CRVL
CRVS
CRWD
CRWS
CSBR
CSCO
CSCW
CSGP
CSGS
CSII
CSIQ
CSOD
CSPI
CSQ
CSSE
CSSEN
CSSEP
CSTE
CSTL
CSTR
CSWC
CSWI
CSX
CTAQ
CTAQU
CTAQW
CTAS
CTBI
CTG
CTHR
CTIB
CTIC
CTMX
CTRE
CTRM
CTRN
CTSH
CTSO
CTXR
CTXRW
CTXS
CUBA
CUE
CUEN
CUENW
CURI
CURIW
CUTR
CVAC
CVBF
CVCO
CVCY
CVET
CVGI
CVGW
CVLB
CVLG
CVLT
CVLY
CVV
CWBC
CWBR
CWCO
CWST
CXDC
CXDO
CYAD
CYAN
CYBE
CYBR
CYCC
CYCCP
CYCN
CYRN
CYRX
CYTH
CYTHW
CYTK
CZNC
CZR
CZWI
DADA
DAIO
DAKT
DARE
DBDR
DBDRU
DBDRW
DBTX
DBVT
DBX
DCBO
DCOM
DCOMP
DCPH
DCRB
DCRBU
DCRBW
DCRNU
DCT
DCTH
DDMX
DDMXU
DDMXW
DDOG
DENN
DFFN
DFH
DFHT
DFHTU
DFHTW
DFPH
DFPHU
DFPHW
DGICA
DGICB
DGII
DGLY
DGNS
DHC
DHCNI
DHCNL
DHHCU
DHIL
DIOD
DISCA
DISCB
DISCK
DISH
DJCO
DKNG
DLCAU
DLHC
DLPN
DLTH
DLTR
DMAC
DMLP
DMRC
DMTK
DNLI
DOCU
DOGZ
DOMO
DOOO
DORM
DOX
DOYU
DRIO
DRIOW
DRNA
DRRX
DRTT
DRVN
DSAC
DSACU
DSACW
DSGX
DSKE
DSKEW
DSP
DSPG
DSWL
DTEA
DTIL
DTSS
DUNEU
DUO
DUOT
DVAX
DWSN
DXCM
DXPE
DXYN
DYAI
DYN
DYNT
DZSI
EA
EACPU
EAR
EARS
EAST
EBAY
EBAYL
EBC
EBIX
EBMT
EBON
EBSB
EBTC
ECHO
ECOL
ECOR
ECPG
EDAP
EDIT
EDRY
EDSA
EDTK
EDTX
EDTXU
EDTXW
EDUC
EEFT
EFOI
EFSC
EGAN
EGBN
EGLE
EGOV
EGRX
EH
EHTH
EIGR
EKSO
ELDN
ELOX
ELSE
ELTK
ELYS
EMCF
EMKR
EML
ENDP
ENFAU
ENG
ENLV
ENNVU
ENOB
ENPH
ENSG
ENTA
ENTG
ENTX
ENTXW
ENVB
ENVIU
EOLS
EOSE
EOSEW
EPAY
EPHYU
EPIX
EPSN
EPZM
EQ
EQBK
EQIX
EQOS
EQOSW
ERES
ERESU
ERESW
ERIC
ERIE
ERII
ERYP
ESBK
ESCA
ESEA
ESGR
ESGRO
ESGRP
ESLT
ESPR
ESQ
ESSA
ESSC
ESSCR
ESSCU
ESSCW
ESTA
ESXB
ETAC
ETACU
ETACW
ETNB
ETON
ETSY
ETTX
EUCR
EUCRU
EUCRW
EUSGU
EVAX
EVBG
EVER
EVFM
EVGN
EVK
EVLO
EVOJU
EVOK
EVOL
EVOP
EWBC
EXAS
EXC
EXEL
EXFO
EXLS
EXPC
EXPCU
EXPCW
EXPD
EXPE
EXPI
EXPO
EXTR
EYE
EYEG
EYEN
EYES
EYESW
EYPT
EZGO
EZPW
FAMI
FANG
FANH
FARM
FARO
FAST
FAT
FATBP
FATBW
FATE
FB
FBIO
FBIOP
FBIZ
FBMS
FBNC
FBRX
FBSS
FCAC
FCACU
FCACW
FCAP
FCBC
FCBP
FCCO
FCCY
FCEL
FCFS
FCNCA
FCNCP
FCRD
FDBC
FDMT
FDUS
FDUSG
FDUSZ
FEIM
FELE
FENC
FEYE
FFBC
FFBW
FFHL
FFIC
FFIN
FFIV
FFNW
FFWM
FGBI
FGEN
FGF
FGFPP
FHB
FHTX
FIBK
FIII
FIIIU
FIIIW
FINMU
FISI
FISV
FITB
FITBI
FITBO
FITBP
FIVE
FIVN
FIXX
FIZZ
FLAC
FLACU
FLACW
FLDM
FLEX
FLGT
FLIC
FLIR
FLL
FLMN
FLMNW
FLNT
FLUX
FLWS
FLXN
FLXS
FMAO
FMBH
FMBI
FMBIO
FMBIP
FMNB
FMTX
FNCB
FNHC
FNKO
FNLC
FNWB
FOCS
FOLD
FONR
FORD
FOREU
FORM
FORR
FORTY
FOSL
FOX
FOXA
FOXF
FOXWU
FPAY
FPRX
FRAF
FRBA
FRBK
FREE
FREEW
FREQ
FRG
FRGAP
FRGI
FRHC
FRLN
FRME
FROG
FRPH
FRPT
FRSX
FRTA
FSBW
FSEA
FSFG
FSLR
FSRV
FSRVU
FSRVW
FSSIU
FSTR
FSTX
FSV
FTCV
FTCVU
FTCVW
FTDR
FTEK
FTFT
FTHM
FTIV
FTIVU
FTIVW
FTNT
FTOC
FTOCU
FTOCW
FULC
FULT
FULTP
FUNC
FUND
FUSB
FUSN
FUTU
FUV
FVAM
FVCB
FVE
FWAA
FWONA
FWONK
FWP
FWRD
FXNC
GABC
GAIA
GAIN
GAINL
GAINM
GALT
GAN
GASS
GBCI
GBDC
GBIO
GBLI
GBLIL
GBNY
GBOX
GBS
GBT
GCACU
GCBC
GCMG
GCMGW
GDEN
GDRX
GDS
GDYN
GDYNW
GECC
GECCL
GECCM
GECCN
GEG
GENC
GENE
GEOS
GERN
GEVO
GFED
GFN
GFNCP
GFNSZ
GGAL
GH
GHACU
GHSI
GHVI
GHVIU
GHVIW
GIFI
GIGGU
GIGM
GIII
GILD
GILT
GLAD
GLADL
GLAQ
GLAQU
GLAQW
GLBS
GLBZ
GLDD
GLG
GLMD
GLNG
GLPG
GLPI
GLRE
GLSI
GLTO
GLUU
GLYC
GMAB
GMBL
GMBLW
GMBTU
GMDA
GMIIU
GMLP
GMLPP
GMTX
GNACU
GNCA
GNFT
GNLN
GNMK
GNOG
GNOGW
GNPX
GNRS
GNRSU
GNRSW
GNSS
GNTX
GNTY
GNUS
GO
GOCO
GOEV
GOEVW
GOGL
GOGO
GOOD
GOODM
GOODN
GOOG
GOOGL
GOSS
GOVX
GOVXW
GP
GPACU
GPP
GPRE
GPRO
GRAY
GRBK
GRCL
GRCY
GRCYW
GRFS
GRIL
GRIN
GRMN
GRNQ
GRNV
GRNVR
GRNVU
GRNVW
GROW
GRPN
GRSV
GRSVU
GRSVW
GRTS
GRTX
GRVY
GRWG
GSAQU
GSBC
GSHD
GSIT
GSKY
GSM
GSMG
GSMGW
GSUM
GT
GTBP
GTEC
GTH
GTHX
GTIM
GTYH
GURE
GVP
GWAC
GWACW
GWGH
GWPH
GWRS
GXGX
GXGXU
GXGXW
GYRO
HA
HAAC
HAACU
HAACW
HAFC
HAIN
HALL
HALO
HAPP
HARP
HAS
HAYN
HBAN
HBANN
HBANO
HBCP
HBIO
HBMD
HBNC
HBP
HBT
HCAP
HCAPZ
HCAQ
HCAR
HCARU
HCARW
HCAT
HCCCU
HCCI
HCDI
HCICU
HCIIU
HCKT
HCM
HCSG
HDSN
HEAR
HEC
HECCU
HECCW
HEES
HELE
HEPA
HFBL
HFFG
HFWA
HGBL
HGEN
HGSH
HHR
HIBB
HIFS
HIHO
HIMX
HJLI
HJLIW
HLAHU
HLG
HLIO
HLIT
HLNE
HLXA
HMCO
HMCOU
HMCOW
HMHC
HMNF
HMPT
HMST
HMSY
HMTV
HNNA
HNRG
HOFT
HOFV
HOFVW
HOL
HOLI
HOLUU
HOLUW
HOLX
HOMB
HONE
HOOK
HOPE
HOTH
HOVNP
HPK
HPKEW
HQI
HQY
HRMY
HROW
HRTX
HRZN
HSAQ
HSDT
HSIC
HSII
HSKA
HSON
HST
HSTM
HSTO
HTBI
HTBK
HTBX
HTGM
HTHT
HTIA
HTLD
HTLF
HTLFP
HTOO
HTOOW
HUBG
HUDI
HUGE
HUIZ
HURC
HURN
HUSN
HVBC
HWBK
HWC
HWCC
HWCPL
HWCPZ
HWKN
HX
HYFM
HYMC
HYMCL
HYMCW
HYMCZ
HYRE
HZNP
IAC
IART
IBCP
IBEX
IBKR
IBOC
IBTX
ICAD
ICBK
ICCC
ICCH
ICFI
ICHR
ICLK
ICLR
ICMB
ICON
ICPT
ICUI
IDCC
IDEX
IDN
IDRA
IDXG
IDXX
IDYA
IEA
IEAWW
IEC
IEP
IESC
IFMK
IFRX
IGAC
IGACU
IGACW
IGIC
IGMS
IGNYU
IHRT
III
IIII
IIIIU
IIIIW
IIIN
IIIV
IIN
IIVI
IIVIP
IKNX
IKT
ILMN
ILPT
IMAB
IMAC
IMACW
IMBI
IMCR
IMGN
IMKTA
IMMP
IMMR
IMNM
IMOS
IMRA
IMRN
IMRNW
IMTE
IMTX
IMTXW
IMUX
IMV
IMVT
IMXI
INBK
INBKL
INBKZ
INBX
INCY
INDB
INDT
INFI
INFN
INGN
INKAU
INM
INMB
INMD
INO
INOD
INOV
INPX
INSE
INSG
INSM
INTC
INTG
INTU
INTZ
INVA
INVE
INVO
INZY
IONS
IOSP
IOVA
IPA
IPAR
IPDN
IPGP
IPHA
IPHI
IPLDP
IPWR
IQ
IRBT
IRCP
IRDM
IRIX
IRMD
IROQ
IRTC
IRWD
ISBC
ISEE
ISIG
ISNS
ISRG
ISSC
ISTR
ISUN
ITAC
ITACU
ITACW
ITCI
ITHXU
ITI
ITIC
ITMR
ITOS
ITQRU
ITRI
ITRM
ITRN
IVA
IVAC
IZEA
JACK
JAGX
JAKK
JAMF
JAN
JAZZ
JBHT
JBLU
JBSS
JCICU
JCOM
JCS
JCTCF
JD
JFIN
JFU
JG
JJSF
JKHY
JMPNL
JMPNZ
JNCE
JOBS
JOFFU
JOUT
JRJC
JRSH
JRVR
JSM
JUPW
JUPWW
JVA
JYAC
JYNT
KAIRU
KALA
KALU
KALV
KBAL
KBNT
KBNTW
KBSF
KC
KCAPL
KDMN
KDNY
KDP
KE
KELYA
KELYB
KEQU
KERN
KERNW
KFFB
KFRC
KHC
KIDS
KIN
KINS
KINZ
KINZU
KINZW
KIRK
KLAC
KLAQU
KLDO
KLIC
KLXE
KMDA
KMPH
KNDI
KNSA
KNSL
KNTE
KOD
KOPN
KOR
KOSS
KPTI
KRBP
KRKR
KRMD
KRNLU
KRNT
KRNY
KRON
KROS
KRTX
KRUS
KRYS
KSMT
KSMTU
KSMTW
KSPN
KTCC
KTOS
KTRA
KURA
KVHI
KXIN
KYMR
KZIA
KZR
LABP
LACQ
LACQU
LACQW
LAKE
LAMR
LANC
LAND
LANDM
LANDO
LARK
LASR
LATN
LATNU
LATNW
LAUR
LAWS
LAZR
LAZRW
LAZY
LBAI
LBC
LBRDA
LBRDK
LBRDP
LBTYA
LBTYB
LBTYK
LCAP
LCAPU
LCAPW
LCNB
LCUT
LCY
LCYAU
LCYAW
LE
LECO
LEDS
LEGH
LEGN
LEGOU
LESL
LEVL
LEVLP
LEXX
LEXXW
LFTR
LFTRU
LFTRW
LFUS
LFVN
LGACU
LGHL
LGHLW
LGIH
LGND
LGVN
LHCG
LHDX
LI
LIFE
LILA
LILAK
LINC
LIND
LIQT
LITE
LIVE
LIVK
LIVKU
LIVKW
LIVN
LIVX
LIXT
LIXTW
LIZI
LJAQU
LJPC
LKCO
LKFN
LKQ
LLIT
LLNW
LMACU
LMAOU
LMAT
LMB
LMFA
LMNL
LMNR
LMNX
LMPX
LMRK
LMRKN
LMRKO
LMRKP
LMST
LNDC
LNSR
LNT
LNTH
LOAC
LOACR
LOACW
LOAN
LOB
LOCO
LOGC
LOGI
LOOP
LOPE
LORL
LOTZ
LOTZW
LOVE
LPCN
LPLA
LPRO
LPSN
LPTH
LPTX
LQDA
LQDT
LRCX
LRMR
LSAQ
LSBK
LSCC
LSEA
LSEAW
LSTR
LSXMA
LSXMB
LSXMK
LTBR
LTRN
LTRPA
LTRPB
LTRX
LULU
LUMO
LUNA
LUNG
LUXA
LUXAU
LUXAW
LWACU
LWAY
LX
LXEH
LXRX
LYFT
LYL
LYRA
LYTS
MAAC
MAACU
MAACW
MACK
MACU
MACUW
MAGS
MANH
MANT
MAR
MARA
MARK
MARPS
MASI
MASS
MAT
MATW
MAXN
MAYS
MBCN
MBII
MBIN
MBINO
MBINP
MBIO
MBNKP
MBOT
MBRX
MBUU
MBWM
MCADU
MCBC
MCBS
MCFE
MCFT
MCHP
MCHX
MCMJ
MCMJW
MCRB
MCRI
MDB
MDCA
MDGL
MDGS
MDGSW
MDIA
MDJH
MDLZ
MDNA
MDRR
MDRRP
MDRX
MDVL
MDWD
MDWT
MDXG
MEDP
MEDS
MEIP
MELI
MEOH
MERC
MESA
MESO
METC
METX
METXW
MFH
MFIN
MFINL
MFNC
MGEE
MGI
MGIC
MGLN
MGNI
MGNX
MGPI
MGRC
MGTA
MGTX
MGYR
MHLD
MICT
MIDD
MIK
MILE
MILEW
MIME
MIND
MINDP
MIRM
MIST
MITK
MITO
MKD
MKGI
MKSI
MKTX
MLAB
MLAC
MLACU
MLACW
MLCO
MLHR
MLND
MLVF
MMAC
MMLP
MMSI
MMYT
MNDO
MNKD
MNOV
MNPR
MNRO
MNSB
MNSBP
MNST
MNTK
MNTX
MODV
MOFG
MOGO
MOHO
MOMO
MONCU
MOR
MORF
MORN
MOSY
MOTN
MOTNU
MOTNW
MOTS
MOXC
MPAA
MPB
MPWR
MRAC
MRACU
MRACW
MRAM
MRBK
MRCC
MRCCL
MRCY
MREO
MRIN
MRKR
MRLN
MRM
MRNA
MRNS
MRSN
MRTN
MRTX
MRUS
MRVI
MRVL
MSACU
MSBI
MSEX
MSFT
MSGM
MSON
MSTR
MSVB
MTAC
MTACU
MTACW
MTBC
MTBCP
MTC
MTCH
MTCR
MTEM
MTEX
MTLS
MTP
MTRX
MTSC
MTSI
MTSL
MU
MUDS
MUDSU
MUDSW
MVBF
MVIS
MWK
MXIM
MYFW
MYGN
MYRG
MYSZ
MYT
NAACU
NAII
NAKD
NAOV
NARI
NATH
NATI
NATR
NAVI
NBAC
NBACR
NBACU
NBACW
NBEV
NBIX
NBLX
NBN
NBRV
NBSE
NBTB
NBTX
NCBS
NCMI
NCNA
NCNO
NCSM
NCTY
NDAQ
NDLS
NDRA
NDRAW
NDSN
NEBC
NEBCU
NEBCW
NEO
NEOG
NEON
NEOS
NEPH
NEPT
NERV
NESR
NESRW
NETE
NEWA
NEWT
NEWTI
NEWTL
NEWTZ
NEXI
NEXT
NFBK
NFE
NFLX
NGAC
NGACU
NGACW
NGM
NGMS
NH
NHIC
NHICU
NHICW
NHLD
NHLDW
NHTC
NICE
NICK
NISN
NIU
NK
NKLA
NKSH
NKTR
NKTX
NLOK
NLSP
NLSPW
NLTX
NMCI
NMFC
NMFCL
NMIH
NMMC
NMMCU
NMMCW
NMRD
NMRK
NMTR
NNBR
NNDM
NNOX
NOAC
NOACU
NOACW
NODK
NOVN
NOVT
NPA
NPAUU
NPAWW
NRACU
NRBO
NRC
NRIM
NRIX
NSEC
NSIT
NSSC
NSTG
NSYS
NTAP
NTCT
NTEC
NTES
NTGR
NTIC
NTLA
NTNX
NTRA
NTRS
NTRSO
NTUS
NTWK
NUAN
NURO
NUVA
NUZE
NVAX
NVCN
NVCR
NVDA
NVEC
NVEE
NVFY
NVIV
NVMI
NWBI
NWE
NWFL
NWL
NWLI
NWPX
NWS
NWSA
NXGN
NXPI
NXST
NXTC
NXTD
NYMT
NYMTM
NYMTN
NYMTO
NYMTP
NYMX
OAS
OBAS
OBCI
OBLG
OBLN
OBNK
OBSV
OCAXU
OCC
OCCI
OCCIP
OCDX
OCFC
OCFCP
OCG
OCGN
OCSI
OCSL
OCUL
OCUP
ODFL
ODP
ODT
OEG
OEPWU
OESX
OFED
OFIX
OFLX
OFS
OFSSG
OFSSI
OFSSL
OFSSZ
OGI
OIIM
OKTA
OLB
OLED
OLLI
OLMA
OM
OMAB
OMCL
OMEG
OMER
OMEX
OMP
ON
ONB
ONCR
ONCS
ONCT
ONCY
ONDS
ONEM
ONEW
ONTX
ONTXW
ONVO
OPBK
OPCH
OPEN
OPENW
OPGN
OPHC
OPI
OPINI
OPINL
OPK
OPNT
OPOF
OPRA
OPRT
OPRX
OPT
OPTN
OPTT
ORBC
ORGO
ORGS
ORIC
ORLY
ORMP
ORPH
ORRF
ORTX
OSBC
OSIS
OSMT
OSN
OSPN
OSS
OSTK
OSTRU
OSUR
OSW
OTEL
OTEX
OTIC
OTLK
OTLKW
OTRA
OTRAU
OTRAW
OTRK
OTRKP
OTTR
OVBC
OVID
OVLY
OXBR
OXBRW
OXFD
OXLC
OXLCM
OXLCO
OXLCP
OXSQ
OXSQL
OXSQZ
OYST
OZK
OZON
PAA
PAAS
PACB
PACW
PACXU
PAE
PAEWW
PAGP
PAHC
PAIC
PAICU
PAICW
PAND
PANL
PAQCU
PASG
PATI
PATK
PAVM
PAVMW
PAVMZ
PAX
PAYA
PAYAW
PAYS
PAYX
PBCT
PBCTP
PBFS
PBHC
PBIP
PBLA
PBPB
PBTS
PBYI
PCAR
PCB
PCH
PCOM
PCRX
PCSA
PCSB
PCTI
PCTY
PCVX
PCYG
PCYO
PDCE
PDCO
PDD
PDEX
PDFS
PDLB
PDSB
PEBK
PEBO
PEGA
PENN
PEP
PERI
PESI
PETQ
PETS
PETZ
PFBC
PFBI
PFC
PFG
PFHD
PFIE
PFIN
PFIS
PFLT
PFMT
PFPT
PFSW
PFX
PFXNL
PGC
PGEN
PGNY
PGRWU
PHAR
PHAS
PHAT
PHCF
PHIC
PHICU
PHICW
PHIO
PHIOW
PHUN
PHUNW
PHVS
PI
PICO
PINC
PIRS
PIXY
PKBK
PKOH
PLAB
PLAY
PLBC
PLBY
PLCE
PLIN
PLL
PLMR
PLPC
PLRX
PLSE
PLTK
PLUG
PLUS
PLXP
PLXS
PLYA
PMBC
PMD
PME
PMGMU
PMVP
PNBK
PNFP
PNFPP
PNNT
PNNTG
PNRG
PNTG
POAI
PODD
POLA
POOL
POSH
POWI
POWL
POWRU
POWW
PPBI
PPBT
PPC
PPD
PPGHU
PPIH
PPSI
PRAA
PRAH
PRAX
PRCH
PRCHW
PRDO
PRFT
PRFX
PRGS
PRGX
PRIM
PRLD
PROF
PROG
PROV
PRPH
PRPL
PRPO
PRQR
PRSRU
PRTA
PRTC
PRTH
PRTK
PRTS
PRVB
PS
PSAC
PSACU
PSACW
PSEC
PSHG
PSMT
PSNL
PSTI
PSTV
PSTX
PT
PTC
PTCT
PTE
PTEN
PTGX
PTIC
PTICU
PTICW
PTMN
PTNR
PTON
PTPI
PTRS
PTSI
PTVCA
PTVCB
PTVE
PUBM
PUCKU
PULM
PUYI
PVAC
PVBC
PWFL
PWOD
PXLW
PXS
PXSAP
PXSAW
PYPD
PYPL
PZZA
QADA
QADB
QCOM
QCRH
QDEL
QELL
QELLU
QELLW
QFIN
QH
QIWI
QK
QLGN
QLI
QLYS
QMCO
QNST
QQQX
QRHC
QRTEA
QRTEB
QRTEP
QRVO
QTNT
QTRX
QTT
QUIK
QUMU
QURE
RAAC
RAACU
RAACW
RACA
RADA
RADI
RAIL
RAND
RAPT
RARE
RAVE
RAVN
RBB
RBBN
RBCAA
RBCN
RBKB
RBNC
RCEL
RCHG
RCHGU
RCHGW
RCII
RCKT
RCKY
RCLFU
RCM
RCMT
RCON
RDCM
RDFN
RDHL
RDI
RDIB
RDNT
RDUS
RDVT
RDWR
REAL
REDU
REED
REFR
REG
REGI
REGN
REKR
RELI
RELIW
RELL
REPH
REPL
RESN
RETA
RETO
REYN
RFIL
RGCO
RGEN
RGLD
RGLS
RGNX
RGP
RIBT
RICK
RIDE
RIGL
RILY
RILYG
RILYH
RILYI
RILYL
RILYM
RILYN
RILYO
RILYP
RILYT
RILYZ
RIOT
RIVE
RKDA
RLAY
RLMD
RMBI
RMBL
RMBS
RMCF
RMGB
RMGBU
RMGBW
RMGCU
RMNI
RMR
RMRM
RMTI
RNA
RNDB
RNET
RNLX
RNST
RNWK
ROAD
ROCC
ROCCU
ROCCW
ROCH
ROCHU
ROCHW
ROCK
ROIC
ROKU
ROLL
ROOT
ROST
RP
RPAY
RPD
RPRX
RPTX
RRBI
RRGB
RRR
RSSS
RSVA
RSVAU
RSVAW
RTLR
RUBY
RUHN
RUN
RUSHA
RUSHB
RUTH
RVMD
RVNC
RVPH
RVPHW
RVSB
RWLK
RXT
RYAAY
RYTM
RZLT
SABR
SABRP
SAFM
SAFT
SAGE
SAIA
SAII
SAIIU
SAIIW
SAL
SALM
SAMG
SANA
SANM
SANW
SASR
SATS
SAVA
SBAC
SBBP
SBCF
SBFG
SBGI
SBLK
SBLKZ
SBNY
SBNYP
SBRA
SBSI
SBT
SBTX
SBUX
SCHL
SCHN
SCKT
SCLEU
SCOA
SCOAU
SCOAW
SCOBU
SCOR
SCPH
SCPL
SCPS
SCSC
SCVL
SCWX
SCYX
SDACU
SDC
SDGR
SDH
SEAC
SECO
SEDG
SEED
SEEL
SEER
SEIC
SELB
SELF
SENEA
SENEB
SESN
SFBC
SFBS
SFET
SFIX
SFM
SFNC
SFST
SFT
SG
SGA
SGAM
SGAMU
SGAMW
SGBX
SGC
SGEN
SGH
SGLB
SGLBW
SGMA
SGMO
SGMS
SGOC
SGRP
SGRY
SGTX
SHACU
SHBI
SHC
SHEN
SHIP
SHIPW
SHIPZ
SHLS
SHOO
SHSP
SHYF
SIBN
SIC
SIEB
SIEN
SIFY
SIGA
SIGI
SIGIP
SILC
SILK
SIMO
SINA
SINO
SINT
SIOX
SIRI
SITM
SIVB
SIVBP
SJ
SKYW
SLAB
SLCRU
SLCT
SLDB
SLGG
SLGL
SLGN
SLM
SLMBP
SLN
SLNO
SLP
SLRC
SLRX
SLS
SMBC
SMBK
SMCI
SMED
SMID
SMIT
SMMF
SMMT
SMPL
SMSI
SMTC
SMTI
SMTX
SNBR
SNCA
SNCR
SND
SNDE
SNDL
SNDX
SNES
SNEX
SNFCA
SNGX
SNGXW
SNOA
SNPS
SNRH
SNRHU
SNRHW
SNSE
SNSS
SNY
SOHO
SOHOB
SOHON
SOHOO
SOHU
SOLO
SOLOW
SOLY
SONA
SONM
SONN
SONO
SP
SPCB
SPFI
SPI
SPKE
SPKEP
SPLK
SPNE
SPNS
SPOK
SPPI
SPRB
SPRO
SPRT
SPSC
SPT
SPTN
SPWH
SPWR
SQBG
SQFT
SRAC
SRACU
SRACW
SRAX
SRCE
SRCL
SRDX
SREV
SRGA
SRNE
SRPT
SRRA
SRRK
SRSA
SRSAU
SRSAW
SRTS
SSAAU
SSB
SSBI
SSKN
SSNC
SSNT
SSP
SSPK
SSPKU
SSPKW
SSRM
SSSS
SSTI
SSYS
STAA
STAF
STAY
STBA
STCN
STEP
STFC
STIM
STKL
STKS
STLD
STMP
STND
STNE
STOK
STRA
STRL
STRM
STRO
STRR
STRRP
STRS
STRT
STSA
STTK
STWO
STWOU
STWOW
STX
STXB
SUMO
SUMR
SUNS
SUNW
SUPN
SURF
SV
SVAC
SVACU
SVACW
SVBI
SVC
SVFA
SVFAU
SVFAW
SVMK
SVOK
SVOKU
SVOKW
SVRA
SVSVU
SVSVW
SVVC
SWAV
SWBI
SWETU
SWIR
SWKH
SWKS
SWTX
SXTC
SY
SYBT
SYBX
SYKE
SYNA
SYNC
SYNH
SYNL
SYPR
SYRS
SYTA
SYTAW
TA
TACO
TACT
TAIT
TANH
TANNI
TANNL
TANNZ
TAOP
TARA
TARS
TAST
TATT
TAYD
TBBK
TBCPU
TBIO
TBK
TBKCP
TBLT
TBLTW
TBNK
TBPH
TC
TCACU
TCBI
TCBIL
TCBIP
TCBK
TCDA
TCF
TCFC
TCFCP
TCMD
TCOM
TCON
TCPC
TCRR
TCX
TDAC
TDACU
TDACW
TEAM
TECH
TECTP
TEDU
TEKK
TEKKU
TEKKW
TELA
TELL
TENB
TENX
TER
TERN
TESS
TFFP
TFSL
TGA
TGLS
TGTX
TH
THBR
THBRU
THBRW
THCA
THCAU
THCAW
THCB
THCBU
THCBW
THFF
THMAU
THMO
THRM
THRY
THTX
THWWW
TIG
TIGO
TIGR
TILE
TIPT
TIRX
TITN
TLC
TLGT
TLIS
TLMD
TLMDW
TLND
TLRY
TLS
TLSA
TMDI
TMDX
TMKRU
TMPM
TMPMU
TMPMW
TMTS
TMTSU
TMTSW
TMUS
TNAV
TNDM
TNXP
TOMZ
TOPS
TOUR
TOWN
TPCO
TPIC
TPTX
TRCH
TREE
TRHC
TRIB
TRIL
TRIN
TRIP
TRIT
TRITW
TRMB
TRMD
TRMK
TRMT
TRNS
TROW
TRS
TRST
TRUE
TRUP
TRVG
TRVI
TRVN
TSBK
TSC
TSCAP
TSCBP
TSCO
TSEM
TSHA
TSIA
TSIAU
TSIAW
TSIBU
TSLA
TSRI
TTCF
TTD
TTEC
TTEK
TTGT
TTMI
TTNP
TTOO
TTWO
TURN
TUSK
TVAC
TVACU
TVACW
TVTX
TVTY
TW
TWCT
TWCTU
TWCTW
TWIN
TWNK
TWNKW
TWOU
TWST
TXG
TXMD
TXN
TXRH
TYHT
TYME
TZOO
TZPSU
UAL
UBCP
UBFO
UBOH
UBSI
UBX
UCBI
UCBIO
UCL
UCTT
UEIC
UEPS
UFCS
UFPI
UFPT
UG
UGRO
UHAL
UIHC
UK
UKOMW
ULBI
ULH
ULTA
UMBF
UMPQ
UNAM
UNB
UNIT
UNTY
UONE
UONEK
UPLD
UPST
UPWK
URBN
URGN
UROV
USAK
USAP
USAT
USAU
USCR
USEG
USIO
USLM
USWS
USWSW
UTHR
UTMD
UTSI
UVSP
UXIN
VACQ
VACQU
VACQW
VALU
VBFC
VBIV
VBLT
VBTX
VC
VCEL
VCKAU
VCNX
VCTR
VCVC
VCVCU
VCVCW
VCYT
VECO
VENAU
VEON
VERB
VERBW
VERI
VERO
VERU
VERX
VERY
VFF
VG
VIAC
VIACA
VIAV
VICR
VIE
VIH
VIHAU
VIHAW
VII
VIIAU
VIIAW
VINC
VINCU
VINCW
VINO
VINP
VIOT
VIR
VIRC
VIRI
VIRT
VISL
VITL
VIVE
VIVO
VJET
VKTX
VKTXW
VLDR
VLDRW
VLGEA
VLON
VLY
VLYPO
VLYPP
VMAC
VMACU
VMACW
VMAR
VMD
VNDA
VNET
VNOM
VOD
VOR
VOSOU
VOXX
VRA
VRAY
VRCA
VRDN
VREX
VRM
VRME
VRMEW
VRNA
VRNS
VRNT
VRRM
VRSK
VRSN
VRTS
VRTX
VS
VSAT
VSEC
VSPR
VSPRU
VSPRW
VSSYW
VSTA
VSTM
VTAQ
VTAQR
VTAQU
VTAQW
VTGN
VTIQU
VTNR
VTRS
VTRU
VTSI
VTVT
VUZI
VVOS
VVPR
VXRT
VYGR
VYNE
WABC
WAFD
WAFDP
WAFU
WASH
WATT
WB
WBA
WDAY
WDC
WDFC
WEN
WERN
WETF
WEYS
WHF
WHFBZ
WHLM
WHLR
WHLRD
WHLRP
WIFI
WILC
WIMI
WINA
WING
WINT
WIRE
WISA
WISH
WIX
WKEY
WKHS
WLDN
WLFC
WLTW
WMG
WNEB
WNW
WOOF
WORX
WPRT
WRAP
WRLD
WSBC
WSBCP
WSBF
WSC
WSFS
WSTG
WTBA
WTER
WTFC
WTFCM
WTFCP
WTRE
WTREP
WTRH
WVE
WVFC
WVVI
WVVIP
WW
WWD
WWR
WYNN
XAIR
XBIO
XBIT
XCUR
XEL
XELA
XELB
XENE
XENT
XERS
XFOR
XGN
XLNX
XLRN
XM
XNCR
XNET
XOG
XOMA
XOMAP
XONE
XP
XPDIU
XPEL
XPER
XRAY
XSPA
XTLB
YELL
YGMZ
YI
YJ
YMAB
YMTX
YNDX
YORW
YQ
YSAC
YSACU
YSACW
YTEN
YTRA
YVR
YY
Z
ZAGG
ZBRA
ZCMD
ZEAL
ZEUS
ZG
ZGNX
ZGYH
ZGYHR
ZGYHU
ZGYHW
ZI
ZION
ZIONL
ZIONN
ZIONO
ZIONP
ZIOP
ZIXI
ZKIN
ZLAB
ZM
ZNGA
ZNTE
ZNTEU
ZNTEW
ZNTL
ZS
ZSAN
ZUMZ
ZVO
ZWRKU
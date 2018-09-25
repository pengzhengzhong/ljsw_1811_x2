
var mHtmlArr = [{html:returnHtml(1),med:returnMedia(1),scen:scenFun1,child:[mFun1,mFun1],chilB:false},
{html:gameHtml(2),med:gameMedia(2),scen:scenFun2,child:[mFun2,mFun2,mFun2,mFun2,mFun2,mFun2,mFun2,mFun2,mFun2,mFun2,mFun2,mFun2,mFun2],chilB:true},
{html:returnHtml(3),med:returnMedia(3),scen:scenFun3,child:[],chilB:false},
{html:gameHtml(4),med:null,scen:scenFun4,child:[mFun4,mFun4,mFun4,mFun4,mFun4,mFun4,mFun4],chilB:true},
{html:returnHtml(5),med:returnMedia(5),scen:scenFun5,child:[],chilB:false},
{html:gameHtml(6),med:gameMedia(6),scen:scenFun6,child:[mFun6,mFun6,mFun6,mFun6,mFun6,mFun6,mFun6,mFun6,mFun6,mFun6,mFun6,mFun6,mFun6],chilB:true},
{html:returnHtml(7),med:returnMedia(7),scen:scenFun7,child:[],chilB:false},
{html:gameHtml(8),med:null,scen:scenFun8,child:[mFun8,mFun8,mFun8,mFun8,mFun8,mFun8,mFun8],chilB:true},
{html:returnHtml(9),med:returnMedia(9),scen:scenFun9,child:[],chilB:false},
{html:returnHtml(10),med:returnMedia(10),scen:scenFun10,child:[],chilB:false},
{html:returnHtml(11),med:null,scen:scenFun11,child:[],chilB:false}
];

var mPagePID = '';
var mImgArr = [];

var mGame = [];
var mGamek = null;
var mGames = null;
var mGamee = null;

function scenFun1(mNum){
    mPagePID = 'page1';
    keyUpD = false;
    mImgArr = [
        'imgs/page11.png',
        'imgs/page12.png'
    ];
}
function mFun1(mNum){
    mPagePID = 'page1' + mNum;
    butDaoHang(mNum != '0',0,mNum);
    $("#myId1").attr("src",mImgArr[mNum]);
    setOkObj(1,mHtmlArr[0].med[mNum], 0, 'pag1MP4', '');
}

function scenFun3(mNum){
    mPagePID = 'page3';
    keyUpD = false;
    butDaoHang(true,2,0);
    setOkObj(1,mHtmlArr[mNum].med[0], 0, 'pag3MP3', '')
}
function scenFun5(mNum){
    mPagePID = 'page5';
    keyUpD = false;
    butDaoHang(true,4,0);
    setOkObj(1,mHtmlArr[mNum].med[0], 0, 'pag5MP3', '')
}
function scenFun7(mNum){
    mPagePID = 'page';
    keyUpD = false;
    butDaoHang(true,6,0);
    setOkObj(1,mHtmlArr[mNum].med[0], 0, 'pag7MP3', '')
}
function scenFun9(mNum){
    mPagePID = 'page9';
    keyUpD = false;
    butDaoHang(true,8,0);
    setOkObj(1,mHtmlArr[mNum].med[0], 0, 'pag9MP3', '')
}
function scenFun10(mNum){
    mPagePID = 'page10';
    keyUpD = false;
    butDaoHang(true,9,0);
    setOkObj(1,mHtmlArr[mNum].med[0], 0, 'pag10MP4', '')
}

function scenFun11(mNum){
    mPagePID = 'page11';
    butDaoHang(true,10,0);
    setOkObj(3,'','','','');
}

function returnHtml(mNum){
	var mHtml = '';
	switch (mNum){
		case 1:
			mHtml += '<img id="myId1" src="imgs/page11.png" class="pag-img" />';
			break;
		case 3:
            mHtml += '<img id="myId3" src="imgs/page31.png" class="pag-img" />';
			break;	
		case 5:
            mHtml += '<img id="myId5" src="imgs/page51.png" class="pag-img" />';
			break;	
		case 7:
            mHtml += '<img id="myId7" src="imgs/page71.png" class="pag-img" />';
			break;
        case 9:
            mHtml += '<img id="myId9" src="imgs/page91.png" class="pag-img" />';
            break;
        case 10:
            mHtml += '<img id="myId10" src="imgs/page101.png" class="pag-img" />';
            break;
        case 11:
			mHtml += '<img src="imgs/end-bg.jpg" class="pag-img" />';
			mHtml += '<div class="endplay sucPlay"></div>';
			break;	
	}
	return mHtml;
}
function returnMedia(mNum){
	var mMed = null;
	switch (mNum){
        case 1:
            mMed = ['static/page11.mp4','static/page12.mp4'];
            break;
        case 3:
            mMed = ['static/page31.mp3'];
            break;    
        case 5:
            mMed = ['static/page51.mp3'];
            break;
        case 7:
            mMed = ['static/page71.mp3'];
            break;
        case 9:
            mMed = ['static/page91.mp3'];
            break;
        case 10:
            mMed = ['static/page101.mp4'];
            break;
        case 11:
            mMed = ['static/page111.mp4'];
            break;
    }
	return mMed;
}



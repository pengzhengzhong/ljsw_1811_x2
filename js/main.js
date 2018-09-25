
var scenONum = 0;
var scenNNum = 0;
var scenOEle = null;
var scenNEle = null;
var chilONum = 0;
var chilNNum = 0;
var medObj = {path:'', aType:'', jType:'', mAnswer:''};		
var keyUpD = false;
var keyLefT = false;
var anObj = {mBool:false,mEle:null};


var scen1 = document.getElementById('scen1');
var scen2 = document.getElementById('scen2');
scenInit()
function scenInit(){
	scenONum = 0;
	scenNNum = 0;
	scenOEle = null;
	scenNEle = scen1;
	scenSetHtml(scenNNum);
}
function scenSwitch(mNum){
	if(scenNNum == scenONum)return;
	scenONum = scenNNum;
	var mScN = mNum%2;
	if(mScN == 1){
		scenOEle = scen1;
		scenNEle = scen2;
		scenSetHtml(scenNNum);
		console.log('scen2  scenNEle scen1  scenOEle');
	}else{
		scenOEle = scen2;
		scenNEle = scen1;
		scenSetHtml(scenNNum);
		console.log('scen1  scenNEle scen2  scenOEle');
	}
	$(scenOEle).velocity('transition.slideLeftBigOut', { duration: 500 });
	$(scenNEle).velocity('transition.slideLeftBigIn', { duration: 500 });
	
}
function scenSetHtml(mNum){
	scenNEle.innerHTML = mHtmlArr[mNum].html;
	var scenFun = mHtmlArr[mNum].scen;
	butDaoHang(false);
	
	setTimeout(function(){
		if(scenOEle)scenOEle.innerHTML = '';
		if (typeof scenFun == 'function') scenFun(mNum);
		childInit();
	},450);
}
//左右键
mKeyLef.push(sceLefFun);
function sceLefFun(){
	if(keyLefT)return;
	keyLefT = true;
	setTimeout(function(){
		keyLefT = false;
	},500);
	feedback('left');
	
	scenNNum --;
	if(scenNNum<0)scenNNum=0;
	scenSwitch(scenNNum);
}
mKeyRig.push(sceRigFun);
function sceRigFun(){
	if(keyLefT)return;
	keyLefT = true;
	setTimeout(function(){
		keyLefT = false;
	},500);
	feedback('right');
	
	scenNNum ++;
	if(scenNNum>(mHtmlArr.length-1))scenNNum=(mHtmlArr.length-1);
	scenSwitch(scenNNum);
}


////////////////////////////////////////////////////////////////////////////////////
function childInit(){
	chilONum = 0;
	chilNNum = 0;
	if(!mHtmlArr[scenNNum].chilB)return;
	
	var chilFun = mHtmlArr[scenNNum].child[chilNNum];
	if (typeof chilFun == 'function') chilFun(chilNNum);
}
function childSwitch(mNum){
	if(chilONum == chilNNum)return;
	chilONum = chilNNum;
	var chilFun = mHtmlArr[scenNNum].child[chilNNum];
	if (typeof chilFun == 'function') chilFun(chilNNum);
}
//上下键
mKeyUp.push(sceUpFun);
function sceUpFun(){
	if(keyUpD)return;
	if(!mHtmlArr[scenNNum].chilB)return;
	feedback('up');
	
	chilNNum --;
	if(chilNNum<0)chilNNum=0;
	childSwitch(chilNNum);
}
mKeyDow.push(sceDowFun);
function sceDowFun(){
	if(keyUpD)return;
	if(!mHtmlArr[scenNNum].chilB)return;
	feedback('down');
	
	chilNNum ++;
	if(chilNNum>(mHtmlArr[scenNNum].child.length-1))chilNNum=(mHtmlArr[scenNNum].child.length-1);
	childSwitch(chilNNum);
}

///////////////////////////////////////////////////////////////
//7\8键
mKey7.push(sce7Fun);
function sce7Fun(){
	if(keyUpD)return;
	feedback('7');
	
	//playAudio('', 0, 'zhengQueMP3', '');
}
mKey8.push(sce8Fun);
function sce8Fun(){
	if(keyUpD)return;
	feedback('8');
	
	//playAudio('', 0, 'cuowuMP3', '');
}

////////////////////////////////////////////////////////////

mKeyOk.push(sceOkFun);
function sceOkFun(){
	feedback('ok');
	
	var medTyp = extName(medObj.path);
	if(medTyp == 'mp4'){
		playVideo(medObj.path, medObj.aType, medObj.jType);
	}else if(medTyp == 'mp3'){
		playAudio(medObj.path, medObj.aType, medObj.jType, medObj.mAnswer);
	}
}
function setOkObj(pTyp,path, aType, jType, mAnswer){
	if(pTyp == 1){
		medObj = {path:path, aType:aType, jType:jType, mAnswer:mAnswer};
		var medTyp = extName(path);
		if(medTyp == 'mp4'){
			playVideo(path,aType,jType);
		}else{
			playAudio(path,aType,jType,mAnswer);
		}
	}else if(pTyp == 2){
		var medTyp = extName(path);
		if(medTyp == 'mp4'){
			playVideo(path,aType,jType);
		}else{
			playAudio(path,aType,jType,mAnswer);
		}
	}else if(pTyp == 3){
		medObj = {path:path, aType:aType, jType:jType, mAnswer:mAnswer};
	}
}

function extName(mUrl){
	var medTyp = '';
	if(mUrl && mUrl != ''){
		var medArr = mUrl.toLowerCase().split('.');
		medTyp = medArr[medArr.length-1];
	}
	return medTyp;
}

/////////////////////////////////////////////////////////////////////////

mAnsw.push(resultFun);
function resultFun(status, h5Type, choosed){
	if(!anObj.mBool || keyUpD)return;
	if (status == 'success') {
		sceDowFun();
	} else if (status == 'error') {
		keyUpD = true;
		failAni(anObj.mEle,choosed,function(){
			keyUpD = false;
		});
	} else if (status == 'failed') {
		playAudio('static/failed.mp3', 0, 'failedMP3',medObj.mAnswer);
	}
}





//////////////导航////////////////////////////////////////////////

function butDaoHang(mBoo,sNum,mNum){
	if(mBoo){
		$('#butDHA').velocity('transition.slideDownIn', { duration: 300 });
	}else{
		$('#butDHA').velocity('transition.slideDownOut', { duration: 300 });
		return;
	}
	var mStr = '';
	var mMed = mHtmlArr[sNum].med?mHtmlArr[sNum].med[mNum]:'';
	var medTyp = extName(mMed);
	var mLen = mHtmlArr.length;
	var mmLen = mHtmlArr[sNum].child.length>0?mHtmlArr[sNum].child.length:0;
	if(medTyp == 'mp4'){
		mStr += '<img src="imgs/but/b_ok1.png" class="but-ni"/>';
	}else if(medTyp == 'mp3'){
		mStr += '<img src="imgs/but/b_ok2.png" class="but-ni"/>';
	}
	if(sNum == '0'){
		mStr += '<img src="imgs/but/b_r.png" class="but-ni"/>';
	}else if(sNum == (mLen-1)){
		mStr += '<img src="imgs/but/b_l.png" class="but-ni"/>';
		mStr += '<img src="imgs/but/b_e.png" class="but-ni"/>';
	}else{
		mStr += '<img src="imgs/but/b_l.png" class="but-ni"/>';
		mStr += '<img src="imgs/but/b_r.png" class="but-ni"/>';
	}
	if(mmLen > 0 && mNum == '0'){
		mStr += '<img src="imgs/but/b_d.png" class="but-ni"/>';
	}else if(mmLen > 0 && mNum == (mmLen-1)){
		mStr += '<img src="imgs/but/b_u.png" class="but-ni"/>';
	}else if(mmLen > 0){
		mStr += '<img src="imgs/but/b_u.png" class="but-ni"/>';
		mStr += '<img src="imgs/but/b_d.png" class="but-ni"/>';
	}
	$('#butDH').html(mStr);
}

function gamDaoHang(sNum,mNum,mOk){
	var mStr = '';
	mStr += '<img src="imgs/gam/gam_dh_t.png" class="one-gm-dhi"/>';
	if(mOk)mStr += '<img src="imgs/gam/gam_dh_ok.png" class="one-gm-dhi"/>';
	mStr += '<img src="imgs/gam/gam_dh_r.png" class="one-gm-dhi"/>';
	mStr += '<img src="imgs/gam/gam_dh_l.png" class="one-gm-dhi"/>';
	
	if(sNum == '0'){
		mStr += '<img src="imgs/gam/gam_dh_d.png" class="one-gm-dhi"/>';
	}else if(sNum == (mNum-1)){
		mStr += '<img src="imgs/gam/gam_dh_u.png" class="one-gm-dhi"/>'
	}else{
		mStr += '<img src="imgs/gam/gam_dh_d.png" class="one-gm-dhi"/>'
		mStr += '<img src="imgs/gam/gam_dh_u.png" class="one-gm-dhi"/>'
	}
	if(medObj.mAnswer != ''){
		mStr += '<img src="imgs/gam/gam_dh_hd.png" class="one-gm-dhi"/>'
	}
	$('#gamDH').html(mStr);
}


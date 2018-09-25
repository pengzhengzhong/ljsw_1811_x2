
function gameHtml(mNum){
	var mHtml = '';
	switch (mNum){
		case 2:
			mHtml = gemeHtml2();
			break;	
		case 4:
			mHtml = gemeHtml1();
			break;
		case 7:
			mHtml = gemeHtml21();
			break;	
		case 9:
			mHtml = gemeHtml11();
			break;	
	}
	return mHtml;
}
function gameMedia(mNum){
	var mMed = null;
	switch (mNum){
        case 2:
            mMed = ['static/page21.mp3','static/page22.mp3','static/page23.mp3','static/page24.mp3','static/page25.mp3','static/page26.mp3','static/page27.mp3','static/page28.mp3','static/page29.mp3','static/page210.mp3','static/page211.mp3','static/page212.mp3','static/page213.mp3'];
            break;
        case 7:
            mMed = ['static/page71.mp3','static/page72.mp3','static/page73.mp3','static/page74.mp3','static/page75.mp3','static/page76.mp3','static/page77.mp3','static/page78.mp3','static/page79.mp3','static/page710.mp3','static/page711.mp3','static/page712.mp3','static/page713.mp3'];
            break;    
    }
	return mMed;
}
function gemeAm(mBEle,mPEle,mKEle,mFun){
	mBEle.velocity('callout.flash', { duration: 2000 }).velocity('callout.flash', { duration: 2000 }).velocity('callout.flash', { duration: 2000 });
	mPEle.velocity('callout.flash', { duration: 2000 }).velocity('callout.flash', { duration: 2000 }).velocity('callout.flash', { duration: 2000 });
	mKEle.velocity('callout.flash', { duration: 2000 }).velocity('callout.flash', { duration: 2000 }).velocity('callout.flash', { duration: 2000 ,complete:function(){
		if (typeof mFun == 'function') mFun();
	}});
}

function gemeAm2(nowGObj,mFun,mPo){
	let mBool = true;
	if(nowGObj.mat)nowGObj.mat.velocity('callout.flash', { duration: 2000 }).velocity('callout.flash', {duration: 2000,complete:function(){
		mBool = false;
		if (typeof mFun == 'function') mFun();
	}});
	if(!mPo)nowGObj.poi.velocity({scale: 1.2}, {duration: 700,loop: 2,complete:function(){
		if (typeof mFun == 'function'&&mBool) mFun();
	}});
}

function gemeAm3(nowGObj,mTime,mFun){
	setTimeout(function(){
		nowGObj.poi.velocity('callout.pulse', { duration: 1000 }).velocity('callout.pulse', { duration: 1000 });
		nowGObj.btn.velocity('callout.pulse', { duration: 1000 }).velocity('callout.pulse', { duration: 1000 ,complete:function(){
			successAni(nowGObj,(nowGObj.aind+1),function(){
				setOkObj(3,'','','','');
				anObj = {mBool:false,mEle:null};
				if (typeof mFun == 'function') mFun();
			});
		}});
	},mTime);
}
function gemeAmK(mKEle,mFun){
	mKEle.velocity('callout.flash', { duration: 2000 }).velocity('callout.flash', { duration: 2000 ,complete:function(){
		if (typeof mFun == 'function') mFun();
	}});
}
//game1///////////////////////////////////////////////////////////////
function scenFun2(mNum){
    mPagePID = 'page2';
    keyUpD = false;
	mGame = [];
	mGame.push({btn:$('#btn16'),poi:$('#poi16'),mat:$('#eleG6'),bind:5,aind:4,astr:'5,第五个,第五|蓝色'});
	mGame.push({btn:$('#btn15'),poi:$('#poi15'),mat:$('#eleG5'),bind:4,aind:3,astr:'4,第四个,第四|浅紫色'});
	mGame.push({btn:$('#btn13'),poi:$('#poi13'),mat:$('#eleG3'),bind:2,aind:2,astr:'3,第三个,第三|黄色'});
	mGame.push({btn:$('#btn14'),poi:$('#poi14'),mat:$('#eleG4'),bind:3,aind:5,astr:'6,第六个,第六|红色'});
	mGame.push({btn:$('#btn12'),poi:$('#poi12'),mat:$('#eleG2'),bind:1,aind:1,astr:'2,第二个,第二|深紫色'});
	mGame.push({btn:$('#btn11'),poi:$('#poi11'),mat:$('#eleG1'),bind:0,aind:0,astr:'1,第一个,第一|橙色'});
	mGamek = $('#kuang');
	mGames = $('#shouji');
	mGamee = $('#p2EndImg');
}
function mFun2(mNum){
	var medNum = 1;
	mPagePID = 'page2'+mNum;
	var nowGObj = null;
	switch (mNum){
		case 0:
			pointInit(mGame,0);
			if(mGames)mGames.css({"backgroundPosition":"0 0"});
			setOkObj(1,mHtmlArr[medNum].med[mNum], 0, 'pag21MP3','');
			break;
		case 1://第一题
			pointInit(mGame,0);
			nowGObj = mGame[0];
			mGames.css({"backgroundPosition":"0 0"});
			keyUpD = true;
			setOkObj(1,mHtmlArr[medNum].med[mNum], 0, 'pag22MP3', nowGObj.astr);
			anObj = {mBool:true,mEle:nowGObj};
			gemeAm2(nowGObj,function(){
				keyUpD = false;
			},true);
			break;
		case 2:
			pointInit(mGame,0);
			nowGObj = mGame[0];
			mGames.css({"backgroundPosition":"0 0"});
			keyUpD = true;
			setOkObj(1,mHtmlArr[medNum].med[mNum], 0, 'pag23MP3', '');
			gemeAm3(nowGObj,1000,function(){
				keyUpD = false;
				mGames.css({"backgroundPosition":"-50px 0"});
			});
			break;
		case 3://第二题
			pointInit(mGame,1);
			nowGObj = mGame[1];
			mGames.css({"backgroundPosition":"-50px 0"});
			keyUpD = true;
			setOkObj(1,mHtmlArr[medNum].med[mNum], 0, 'pag24MP3', nowGObj.astr);
			anObj = {mBool:true,mEle:nowGObj};
			gemeAm2(nowGObj,function(){
				keyUpD = false;
			},true);
			break;	
		case 4:
			pointInit(mGame,1);
			nowGObj = mGame[1];
			mGames.css({"backgroundPosition":"-50px 0"});
			keyUpD = true;
			setOkObj(1,mHtmlArr[medNum].med[mNum], 0, 'pag25MP3','');
			gemeAm3(nowGObj,1000,function(){
				keyUpD = false;
				mGames.css({"backgroundPosition":"-100px 0"});
			});
			break;
		case 5://第三题
			pointInit(mGame,2);
			nowGObj = mGame[2];
			mGames.css({"backgroundPosition":"-100px 0"});
			keyUpD = true;
			setOkObj(1,mHtmlArr[medNum].med[mNum], 0, 'pag26MP3', nowGObj.astr);
			anObj = {mBool:true,mEle:nowGObj};
			gemeAm2(nowGObj,function(){
				keyUpD = false;
			},true);
			break;
		case 6:
			pointInit(mGame,2);
			nowGObj = mGame[2];
			mGames.css({"backgroundPosition":"-100px 0"});
			keyUpD = true;
			setOkObj(1,mHtmlArr[medNum].med[mNum], 0, 'pag27MP3','');
			gemeAm3(nowGObj,1000,function(){
				keyUpD = false;
				mGames.css({"backgroundPosition":"-150px 0"});
			});
			break;
		case 7://第四题
			pointInit(mGame,3);
			nowGObj = mGame[3];
			mGames.css({"backgroundPosition":"-150px 0"});
			keyUpD = true;
			setOkObj(1,mHtmlArr[medNum].med[mNum], 0, 'pag28MP3', nowGObj.astr);
			anObj = {mBool:true,mEle:nowGObj};
			gemeAm2(nowGObj,function(){
				keyUpD = false;
			},true);
			break;	
		case 8:
			pointInit(mGame,3);
			nowGObj = mGame[3];
			mGames.css({"backgroundPosition":"-150px 0"});
			keyUpD = true;
			setOkObj(1,mHtmlArr[medNum].med[mNum], 0, 'pag29MP3', '');
			gemeAm3(nowGObj,1000,function(){
				keyUpD = false;
				mGames.css({"backgroundPosition":"-200px 0"});
			});
			break;	
		case 9://第五题
			pointInit(mGame,4);
			nowGObj = mGame[4];
			mGames.css({"backgroundPosition":"-200px 0"});
			keyUpD = true;
			setOkObj(1,mHtmlArr[medNum].med[mNum], 0, 'pag210MP3', nowGObj.astr);
			anObj = {mBool:true,mEle:nowGObj};
			gemeAm2(nowGObj,function(){
				keyUpD = false;
			},true);
			break;
		case 10:
			pointInit(mGame,4);
			nowGObj = mGame[4];
			mGames.css({"backgroundPosition":"-200px 0"});
			keyUpD = true;
			setOkObj(1,mHtmlArr[medNum].med[mNum], 0, 'pag211MP3','');
			gemeAm3(nowGObj,1000,function(){
				keyUpD = false;
				mGames.css({"backgroundPosition":"-250px 0"});
			});
			break;	
		case 11://第六题
			pointInit(mGame,5);
			nowGObj = mGame[5];
			mGames.css({"backgroundPosition":"-250px 0"});
			mGamee.css({"display":"none"});
			keyUpD = true;
			setOkObj(1,mHtmlArr[medNum].med[mNum], 0, 'pag212MP3', nowGObj.astr);
			anObj = {mBool:true,mEle:nowGObj};
			gemeAm2(nowGObj,function(){
				keyUpD = false;
			},true);
			break;
		case 12:
			pointInit(mGame,5);
			nowGObj = mGame[5];
			mGames.css({"backgroundPosition":"-250px 0"});
			mGamee.css({"display":"none"});
			keyUpD = true;
			setOkObj(1,mHtmlArr[medNum].med[mNum], 0, 'pag213MP3','');
			gemeAm3(nowGObj,1000,function(){
				keyUpD = false;
				mGames.css({"backgroundPosition":"-300px 0"});
				if(/page212/.test(mPagePID)){
					mGamee.css({"display":"block"});
					setOkObj(2,'static/xingxing1.mp4', 0, 'xingXingMP4','');
				}
			});
			break;	
	}
	gamDaoHang(mNum,mHtmlArr[medNum].child.length,(12 != mNum));
}


function scenFun4(mNum){
    mPagePID = 'page4';
    keyUpD = false;
    setOkObj(3,'', 0, '','');
	mGame = [];
	mGame.push({btn:$('#btn16'),poi:$('#poi16'),mat:$('#eleG6'),bind:5,aind:4,astr:'5,第五个,第五|蓝色'});
	mGame.push({btn:$('#btn15'),poi:$('#poi15'),mat:$('#eleG5'),bind:4,aind:3,astr:'4,第四个,第四|浅紫色'});
	mGame.push({btn:$('#btn13'),poi:$('#poi13'),mat:$('#eleG3'),bind:2,aind:2,astr:'3,第三个,第三|黄色'});
	mGame.push({btn:$('#btn14'),poi:$('#poi14'),mat:$('#eleG4'),bind:3,aind:5,astr:'6,第六个,第六|红色'});
	mGame.push({btn:$('#btn12'),poi:$('#poi12'),mat:$('#eleG2'),bind:1,aind:1,astr:'2,第二个,第二|深紫色'});
	mGame.push({btn:$('#btn11'),poi:$('#poi11'),mat:$('#eleG1'),bind:0,aind:0,astr:'1,第一个,第一|橙色'});
	mGamek = $('#kuang');
}
function mFun4(mNum){
	gamDaoHang(mNum,mHtmlArr[3].child.length,false);
	switch (mNum){
		case 0:
			if(mGamek)mGamek.css({"display":"none"});
			pointInit(mGame,0);
			break;
		case 1:
			mGamek.css({"left":(mGame[0].aind*180)+"px","display":"block"});
			pointInit(mGame,0);
			keyUpD = true;
			gemeAm(mGame[0].btn,mGame[0].poi,mGamek,function(){
				console.log()
				successAni(mGame[0],(mGame[0].aind+1),function(){
					keyUpD = false;
				});
			});
			break;
		case 2:
			mGamek.css({"left":(mGame[1].aind*180)+"px","display":"block"});
			pointInit(mGame,1);
			keyUpD = true;
			gemeAm(mGame[1].btn,mGame[1].poi,mGamek,function(){
				successAni(mGame[1],(mGame[1].aind+1),function(){
					keyUpD = false;
				});
			});
			break;
		case 3:
			mGamek.css({"left":(mGame[2].aind*180)+"px","display":"block"});
			pointInit(mGame,2);
			keyUpD = true;
			gemeAm(mGame[2].btn,mGame[2].poi,mGamek,function(){
				successAni(mGame[2],(mGame[2].aind+1),function(){
					keyUpD = false;
				});
			});
			break;
		case 4:
			mGamek.css({"left":(mGame[3].aind*180)+"px","display":"block"});
			pointInit(mGame,3);
			keyUpD = true;
			gemeAm(mGame[3].btn,mGame[3].poi,mGamek,function(){
				successAni(mGame[3],(mGame[3].aind+1),function(){
					keyUpD = false;
				});
			});
			break;
		case 5:
			mGamek.css({"left":(mGame[4].aind*180)+"px","display":"block"});
			pointInit(mGame,4);
			keyUpD = true;
			gemeAm(mGame[4].btn,mGame[4].poi,mGamek,function(){
				successAni(mGame[4],(mGame[4].aind+1),function(){
					keyUpD = false;
				});
			});
			break;
		case 6:
			mGamek.css({"left":(mGame[5].aind*180)+"px","display":"block"});
			pointInit(mGame,5);
			keyUpD = true;
			gemeAm(mGame[5].btn,mGame[5].poi,mGamek,function(){
				successAni(mGame[5],(mGame[5].aind+1),function(){
					keyUpD = false;
				});
			});
			break;	
	}
}

//game2///////////////////////////////////////////////////////////////
function scenFun7(mNum){
    mPagePID = 'page7';
    keyUpD = false;
	mGame = [];
	mGame.push({btn:$('#btn14'),poi:$('#poi14'),mat:$('#eleG4'),bind:3,aind:5,astr:'6,第六个,第六|红色'});
	mGame.push({btn:$('#btn16'),poi:$('#poi16'),mat:$('#eleG6'),bind:5,aind:2,astr:'3,第三个,第三|蓝色'});
	mGame.push({btn:$('#btn13'),poi:$('#poi13'),mat:$('#eleG3'),bind:2,aind:4,astr:'5,第五个,第五|黄色'});
	mGame.push({btn:$('#btn11'),poi:$('#poi11'),mat:$('#eleG1'),bind:0,aind:1,astr:'2,第二个,第二|橙色'});
	mGame.push({btn:$('#btn15'),poi:$('#poi15'),mat:$('#eleG5'),bind:4,aind:3,astr:'4,第四个,第四|浅紫色'});
	mGame.push({btn:$('#btn12'),poi:$('#poi12'),mat:$('#eleG2'),bind:1,aind:0,astr:'1,第一个,第一|深紫色'});
	mGamek = $('#kuang');
	mGames = $('#shouji');
	mGamee = $('#p2EndImg');
}
function mFun7(mNum){
	var medNum = 6;
	mPagePID = 'page6'+mNum;
	var nowGObj = null;
	switch (mNum){
		case 0:
			pointInit(mGame,0);
			if(mGames)mGames.css({"backgroundPosition":"0 0"});
			setOkObj(1,mHtmlArr[medNum].med[mNum], 0, 'pag61MP3','');
			break;
		case 1://第一题
			pointInit(mGame,0);
			nowGObj = mGame[0];
			mGames.css({"backgroundPosition":"0 0"});
			keyUpD = true;
			setOkObj(1,mHtmlArr[medNum].med[mNum], 0, 'pag62MP3', nowGObj.astr);
			anObj = {mBool:true,mEle:nowGObj};
			gemeAm2(nowGObj,function(){
				keyUpD = false;
			});
			break;
		case 2:
			pointInit(mGame,0);
			nowGObj = mGame[0];
			mGames.css({"backgroundPosition":"0 0"});
			keyUpD = true;
			setOkObj(1,mHtmlArr[medNum].med[mNum], 0, 'pag63MP3', nowGObj.astr);
			anObj = {mBool:true,mEle:nowGObj};
			gemeAm3(nowGObj,1000,function(){
				keyUpD = false;
				mGames.css({"backgroundPosition":"-50px 0"});
			});
			break;
		case 3://第二题
			pointInit(mGame,1);
			nowGObj = mGame[1];
			mGames.css({"backgroundPosition":"-50px 0"});
			keyUpD = true;
			setOkObj(1,mHtmlArr[medNum].med[mNum], 0, 'pag64MP3', nowGObj.astr);
			anObj = {mBool:true,mEle:nowGObj};
			gemeAm2(nowGObj,function(){
				keyUpD = false;
			});
			break;	
		case 4:
			pointInit(mGame,1);
			nowGObj = mGame[1];
			mGames.css({"backgroundPosition":"-50px 0"});
			keyUpD = true;
			setOkObj(1,mHtmlArr[medNum].med[mNum], 0, 'pag65MP3',nowGObj.astr);
			anObj = {mBool:true,mEle:nowGObj};
			gemeAm3(nowGObj,1000,function(){
				keyUpD = false;
				mGames.css({"backgroundPosition":"-100px 0"});
			});
			break;
		case 5://第三题
			pointInit(mGame,2);
			nowGObj = mGame[2];
			mGames.css({"backgroundPosition":"-100px 0"});
			keyUpD = true;
			setOkObj(1,mHtmlArr[medNum].med[mNum], 0, 'pag66MP3', nowGObj.astr);
			anObj = {mBool:true,mEle:nowGObj};
			gemeAm2(nowGObj,function(){
				keyUpD = false;
			});
			break;
		case 6:
			pointInit(mGame,2);
			nowGObj = mGame[2];
			mGames.css({"backgroundPosition":"-100px 0"});
			keyUpD = true;
			setOkObj(1,mHtmlArr[medNum].med[mNum], 0, 'pag67MP3',nowGObj.astr);
			anObj = {mBool:true,mEle:nowGObj};
			gemeAm3(nowGObj,1000,function(){
				keyUpD = false;
				mGames.css({"backgroundPosition":"-150px 0"});
			});
			break;
		case 7://第四题
			pointInit(mGame,3);
			nowGObj = mGame[3];
			mGames.css({"backgroundPosition":"-150px 0"});
			keyUpD = true;
			setOkObj(1,mHtmlArr[medNum].med[mNum], 0, 'pag68MP3', nowGObj.astr);
			anObj = {mBool:true,mEle:nowGObj};
			gemeAm2(nowGObj,function(){
				keyUpD = false;
			});
			break;	
		case 8:
			pointInit(mGame,3);
			nowGObj = mGame[3];
			mGames.css({"backgroundPosition":"-150px 0"});
			keyUpD = true;
			setOkObj(1,mHtmlArr[medNum].med[mNum], 0, 'pag69MP3', nowGObj.astr);
			anObj = {mBool:true,mEle:nowGObj};
			gemeAm3(nowGObj,1000,function(){
				keyUpD = false;
				mGames.css({"backgroundPosition":"-200px 0"});
			});
			break;	
		case 9://第五题
			pointInit(mGame,4);
			nowGObj = mGame[4];
			mGames.css({"backgroundPosition":"-200px 0"});
			keyUpD = true;
			setOkObj(1,mHtmlArr[medNum].med[mNum], 0, 'pag610MP3', nowGObj.astr);
			anObj = {mBool:true,mEle:nowGObj};
			gemeAm2(nowGObj,function(){
				keyUpD = false;
			});
			break;
		case 10:
			pointInit(mGame,4);
			nowGObj = mGame[4];
			mGames.css({"backgroundPosition":"-200px 0"});
			keyUpD = true;
			setOkObj(1,mHtmlArr[medNum].med[mNum], 0, 'pag611MP3',nowGObj.astr);
			anObj = {mBool:true,mEle:nowGObj};
			gemeAm3(nowGObj,1000,function(){
				keyUpD = false;
				mGames.css({"backgroundPosition":"-250px 0"});
			});
			break;	
		case 11://第六题
			pointInit(mGame,5);
			nowGObj = mGame[5];
			mGames.css({"backgroundPosition":"-250px 0"});
			mGamee.css({"display":"none"});
			keyUpD = true;
			setOkObj(1,mHtmlArr[medNum].med[mNum], 0, 'pag612MP3', nowGObj.astr);
			anObj = {mBool:true,mEle:nowGObj};
			gemeAm2(nowGObj,function(){
				keyUpD = false;
			});
			break;
		case 12:
			pointInit(mGame,5);
			nowGObj = mGame[5];
			mGames.css({"backgroundPosition":"-250px 0"});
			mGamee.css({"display":"none"});
			keyUpD = true;
			setOkObj(1,mHtmlArr[medNum].med[mNum], 0, 'pag613MP3',nowGObj.astr);
			anObj = {mBool:true,mEle:nowGObj};
			gemeAm3(nowGObj,1000,function(){
				keyUpD = false;
				mGames.css({"backgroundPosition":"-300px 0"});
				if(/page612/.test(mPagePID)){
					mGamee.css({"display":"block"});
					setOkObj(2,'static/xingxing1.mp4', 0, 'xingXingMP4','');
				}
			});
			break;	
	}
	gamDaoHang(mNum,mHtmlArr[medNum].child.length,(12 != mNum));
}


function scenFun9(mNum){
    mPagePID = 'page9';
    keyUpD = false;
    setOkObj(3,'', 0, '','');
	mGame = [];
	mGame.push({btn:$('#btn14'),poi:$('#poi14'),mat:$('#eleG4'),bind:3,aind:5,astr:'6,第六个,第六|红色'});
	mGame.push({btn:$('#btn16'),poi:$('#poi16'),mat:$('#eleG6'),bind:5,aind:2,astr:'3,第三个,第三|蓝色'});
	mGame.push({btn:$('#btn13'),poi:$('#poi13'),mat:$('#eleG3'),bind:2,aind:4,astr:'5,第五个,第五|黄色'});
	mGame.push({btn:$('#btn11'),poi:$('#poi11'),mat:$('#eleG1'),bind:0,aind:1,astr:'2,第二个,第二|橙色'});
	mGame.push({btn:$('#btn15'),poi:$('#poi15'),mat:$('#eleG5'),bind:4,aind:3,astr:'4,第四个,第四|浅紫色'});
	mGame.push({btn:$('#btn12'),poi:$('#poi12'),mat:$('#eleG2'),bind:1,aind:0,astr:'1,第一个,第一|深紫色'});
	mGamek = $('#kuang');
}
function mFun9(mNum){
	gamDaoHang(mNum,mHtmlArr[8].child.length,false);
	switch (mNum){
		case 0:
			if(mGamek)mGamek.css({"display":"none"});
			pointInit(mGame,0);
			break;
		case 1:
			mGamek.css({"left":(mGame[0].aind*180)+"px","display":"block"});
			pointInit(mGame,0);
			keyUpD = true;
			gemeAm(mGame[0].btn,mGame[0].poi,mGamek,function(){
				console.log()
				successAni(mGame[0],(mGame[0].aind+1),function(){
					keyUpD = false;
				});
			});
			break;
		case 2:
			mGamek.css({"left":(mGame[1].aind*180)+"px","display":"block"});
			pointInit(mGame,1);
			keyUpD = true;
			gemeAm(mGame[1].btn,mGame[1].poi,mGamek,function(){
				successAni(mGame[1],(mGame[1].aind+1),function(){
					keyUpD = false;
				});
			});
			break;
		case 3:
			mGamek.css({"left":(mGame[2].aind*180)+"px","display":"block"});
			pointInit(mGame,2);
			keyUpD = true;
			gemeAm(mGame[2].btn,mGame[2].poi,mGamek,function(){
				successAni(mGame[2],(mGame[2].aind+1),function(){
					keyUpD = false;
				});
			});
			break;
		case 4:
			mGamek.css({"left":(mGame[3].aind*180)+"px","display":"block"});
			pointInit(mGame,3);
			keyUpD = true;
			gemeAm(mGame[3].btn,mGame[3].poi,mGamek,function(){
				successAni(mGame[3],(mGame[3].aind+1),function(){
					keyUpD = false;
				});
			});
			break;
		case 5:
			mGamek.css({"left":(mGame[4].aind*180)+"px","display":"block"});
			pointInit(mGame,4);
			keyUpD = true;
			gemeAm(mGame[4].btn,mGame[4].poi,mGamek,function(){
				successAni(mGame[4],(mGame[4].aind+1),function(){
					keyUpD = false;
				});
			});
			break;
		case 6:
			mGamek.css({"left":(mGame[5].aind*180)+"px","display":"block"});
			pointInit(mGame,5);
			keyUpD = true;
			gemeAm(mGame[5].btn,mGame[5].poi,mGamek,function(){
				successAni(mGame[5],(mGame[5].aind+1),function(){
					keyUpD = false;
				});
			});
			break;	
	}
}




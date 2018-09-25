
var mAudioEnd = [];
var mVideoEnd = [];

var mKeyBool = false;
var mKeyUp = [];
var mKeyLef = [];
var mKeyRig = [];
var mKeyDow = [];
var mKeyOk = [];
var mKey7 = [];
var mKey8 = [];
var mAnsw = [];

///////////APP交互,APP调用h5
/**
 * 由App在音频播放完成时调用
 * @param {String} h5Type 控制流程所用
 */
function audioPlayEnd(h5Type){
	mLog('audioPlayEnd:'+h5Type);
	mAudioEnd.forEach(function(value, index){
		if (typeof value == 'function') value(h5Type);
	});
}

/**
 * 由App在视频播放完成时调用
 * @param {String} h5Type 控制流程所用
 */
function videoPlayEnd(h5Type){
	mLog('videoPlayEnd:'+h5Type);
	mVideoEnd.forEach(function(value, index){
		if (typeof value == 'function') value(h5Type);
	});
}

/**
 * 视频录制结束后调用 暂时不需要
 * @param {String} h5Type H5控制所需变量 Android端只需透传
 * @param {String} filePath 保存视频的路径
 */
function endVideoRecord(h5Type, filePath) {
	mLog('endVideoRecord:'+h5Type+'||'+filePath);
}

/**
 * 遥控器控制
 * @param {string} keyCode 按键 up left：上一步 right down 下一步 ok：重播 pVideo：菜单键播放本地视频
 */
function telecontrol(keyCode){
	if(mKeyBool)return;
	mKeyBool = true;
	setTimeout(function(){
		mKeyBool = false;
	},500)
	mLog('telecontrol:'+keyCode);
	switch (keyCode){
		case 'up':
			mKeyUp.forEach(function(value, index){
				if (typeof value == 'function') value();
			});
			break;
		case 'left':
			mKeyLef.forEach(function(value, index){
				if (typeof value == 'function') value();
			});
			break;
		case 'right':
			mKeyRig.forEach(function(value, index){
				if (typeof value == 'function') value();
			});
			break;
		case 'down':
			mKeyDow.forEach(function(value, index){
				if (typeof value == 'function') value();
			});
			break;
		case 'ok':
			mKeyOk.forEach(function(value, index){
				if (typeof value == 'function') value();
			});
			break;
		case '7':
			mKey7.forEach(function(value, index){
				if (typeof value == 'function') value();
			});
			break;
		case '8':
			mKey8.forEach(function(value, index){
				if (typeof value == 'function') value();
			});
			break;	
		case 'recordAudio':
			startRecord();
			break;	
		case 'recordVideo':
			
			break;
		case 'video':
			
			break;
	}
}


/**
 * 识别答案后调用
 * @param {String} status success: 答对了 error：答错了 failed：乱答或者没听清
 * @param {String} h5Type 控制流程所用
 * @param {Number} choosed 如果是选择题 传如所选答案
 */
function answer(status, h5Type, choosed){
	mLog('answer:'+status+'||'+h5Type+'||'+choosed);
	if(!status)return;
	mAnsw.forEach(function(value, index){
		if (typeof value == 'function') value(status, h5Type, choosed);
	});
}
//end






///////////APP交互,h5调用APP
/**
 * 播放音频接口
 * @param {String} path 音频路径
 * @param {Number} audioType 音频类型 0： H5所传音频， 1：failed本地音频， -1: 不播放音频，传H5TYPE过去
 * @param {String} answerStr 问题答案
 * @param {String} h5Type H5控制所需变量 Android端只需透传
 */
function playAudio(path, audioType, h5Type, answerStr) {
	mLog('playAudio:'+audioType+'||'+h5Type+'||'+answerStr+'||'+path);
	try{
		window.huuhooActivityLocal.playAudio(path, audioType, answerStr, h5Type);
	}catch(e){};
}

/**
 * 播放视频接口
 * @param {String} path 视频路径
 * @param {Number} videoType 0：H5所传视频 1：开场跳舞视频
 * @param {String} h5Type H5控制所需变量 Android端只需透传
 */
function playVideo(path, videoType, h5Type) {
	mLog('playVideo:'+videoType+'||'+h5Type+'||'+path);
	try{
		window.huuhooActivityLocal.playVideo(path, videoType, h5Type);
	}catch(e){};
}

/**
 * 语音识别接口
 */
function startRecord() {
	mLog('startRecord');
	if(medObj.mAnswer != ''){
		try{
			window.huuhooActivityLocal.startRecord();
		}catch(e){};
	}
}

/**
 * 开始录制视频接口
 * @param {String} filename 视频保存的文件名
 * @param {String} h5Type H5控制所需变量 Android端只需透传
 */
function startVideoRecord(filename, h5Type) {
	mLog('startVideoRecord:'+filename+'||'+h5Type);
	try{
		window.huuhooActivityLocal.startVideoRecord(filename, h5Type);
	}catch(e){};
}

/**
 * 终止视频录制接口
 * @param {String} h5Type H5控制所需变量 Android端只需透传
 */
function stopVideoRecord(h5Type) {
	mLog('stopVideoRecord:'+h5Type);
	try{
		window.huuhooActivityLocal.stopVideoRecord(h5Type);
	}catch(e){};
}

/**
 * 按键反馈
 */
function feedback(kName) {
	mLog('feedback:'+kName);
	try{
		window.huuhooActivityLocal.feedback(kName);
	}catch(e){};
}

/**
 * 游戏结束
 */
function gameEnd() {
	mLog('gameEnd:end');
	try{
		window.huuhooActivityLocal.gameEnd();
	}catch(e){};
}
//end




//调试输出
function mLog(mStr){
	console.log(mStr);
}

keydown();//模拟遥控器
function keydown(){
	document.addEventListener('keydown',function(e){
		switch (e.keyCode){
			case 38:
				telecontrol('up');
				break;
			case 40:
				telecontrol('down');
				break;	
			case 37:
				telecontrol('left');
				break;	
			case 39:
				telecontrol('right');
				break;	
			case 13:
				telecontrol('ok');
				break;		
		}
	})
}

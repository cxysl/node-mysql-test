// EventEmitter 类
var events = require('events'); 
var emitter = new events.EventEmitter(); 
emitter.on('someEvent', function(arg1, arg2) { 
    console.log('监听者一号', arg1, arg2); 
}); 
emitter.on('someEvent', function(arg1, arg2) { 
    console.log('监听者二号', arg1, arg2); 
}); 
emitter.emit('someEvent', '阿西吧', '阿巴阿巴阿巴阿巴'); 

////////////////////////////////////////////////////////////////////////////////

// var events = require('events');
// const { EventEmitter } = require('stream');
// var eventEmitter = new events.EventEmitter();

// // 监听器 #1
// var listener1 = function listener1() {
//    console.log('监听器 listener1 执行。');
// }

// // 监听器 #2
// var listener2 = function listener2() {
//   console.log('监听器 listener2 执行。');
// }

// // 绑定 connection 事件，处理函数为 listener1 
// eventEmitter.addListener('connection', listener1);

// // 绑定 connection 事件，处理函数为 listener2
// eventEmitter.on('connection', listener2);

// var eventListeners = eventEmitter.listenerCount('connection');
// console.log(eventListeners + " 个监听器监听连接事件。");

// // 处理 connection 事件 
// eventEmitter.emit('connection');

// // 移除监绑定的 listener1 函数
// eventEmitter.removeListener('connection', listener1);
// console.log("listener1 不再受监听。");

// // 触发连接事件
// eventEmitter.emit('connection');

// eventListeners = eventEmitter.listenerCount('connection');
// console.log(eventListeners + " 个监听器监听连接事件。");

// console.log("程序执行完毕。");

////////////////////////////////////////////////////////////////////////////////

// var events = require('events'); 
// var emitter = new events.EventEmitter(); 
// emitter.emit('error'); 
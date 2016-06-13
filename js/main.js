$(function(){
// Email
$("#auto-complete-email").completer({separator:"@",source:["gmail.com","yahoo.com","hotmail.com","outlook.com","live.com","aol.com","mail.com"]}),
// Time
$("#auto-complete-time").completer({filter:function(a){return a=a.replace(/\D/g,"").substr(0,2),a&&(a=parseInt(a,10)||0,a=a>23?23:10>a?"0"+a:a),a},separator:":",source:["00","05","10","15","20","25","30","35","40","45","50","55"]});
// Doamin
var a=$("#auto-complete-domain"),b=$("#auto-complete-go");a.completer({complete:function(){var c="http://www."+a.val();b.attr("href",c)},separator:".",source:["com","net","org","co","io","me","cn","com.cn"]});
// Website
var c=$("#auto-suggest-website"),d=$("#auto-suggest-go");c.completer({complete:function(){var a="https://"+c.val();d.attr("href",a)},source:["facebook.com","plus.google.com","linkedin.com","flickr.com","youtube.com","klout.com","reddit.com","digg.com","tumblr.com","twitter.com","stumbleupon.com","pinterest.com"],suggest:!0})});
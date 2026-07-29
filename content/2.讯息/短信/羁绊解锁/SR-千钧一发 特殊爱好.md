---  
title: 特殊爱好  
tags: "SR-千钧一发"  
weight: 1153  
date: 2017-12-20
---  

> 获取途径：SR-千钧一发三星 解锁  


**白起：** 今天你说想做一个有关电动游戏的节目，有问题的话可以问我  


<!-- 第1组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o1-1">没想到你喜欢打电动</option>  
    <option value="o1-2">完全想象不出你打电动的样子</option>  
    <option value="o1-3">我就知道你会有一些特别的爱好</option>  
  </select>  
  <div id="o1-1" class="opt-content" >  
 <strong>[玩家姓名]</strong> ：没想到你竟然喜欢打电动  <br>  

 <strong>白起：</strong> 那你觉得我会喜欢什么呢，没有爱好是不是更像我的人设？  <br>  

 <strong>白起：</strong> 有时间的话跟你打一局  <br>  
  </div>  
  <div id="o1-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：不是开玩笑吧，完全想象不出你打电动的样子  <br>  

 <strong>白起：</strong> 在你印象里，我就是每天办案，然后在天上飞来飞去？  <br>  

 <strong>白起：</strong> 改天跟你打一局，让你改变对我的印象  <br>  
  </div>  
  <div id="o1-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：我就知道你会有一些特别的爱好  <br>  

 <strong>白起：</strong> 打电动是我为数不多的爱好，在游戏里会获得很多现实生活中得不到的东西  <br>  

 <strong>白起：</strong> 改天我们一起打  <br>  
  </div>  
</div>  
<br>  

<!-- 第2组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o2-1">我从来没打过电动</option>  
    <option value="o2-2">我喜欢打，不过打的很烂</option>  
    <option value="o2-3">你得给我放水哦</option>  
  </select>  
  <div id="o2-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：我从来没有打过电动诶，你可以教我吗  <br>  

 <strong>白起：</strong> 当然可以教你，不过打不打得好看你自己的悟性了  <br>  

 <strong>白起：</strong> 时间不早了，我现在要去处理一些事情  <br>  

 <strong>白起：</strong> 你早点休息，晚安  <br>  
  </div>  
  <div id="o2-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：我喜欢打，不过打的很烂  <br>  

 <strong>白起：</strong> 有兴趣就好，打电动有很多技巧，有时间可以教你。  <br>  

 <strong>白起：</strong> 有电话进来了，先不聊了  <br>  

 <strong>白起：</strong> 早点休息，晚安  <br>  
  </div>  
  <div id="o2-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：我估计会被你虐的很惨，你得给我放水哦  <br>  

 <strong>白起：</strong> 放水会丧失很多乐趣，你可以想些办法如何打败我  <br>  

 <strong>白起：</strong> 时间不早了，早点休息吧，晚安。  <br>  
  </div>  
</div>  

<script>  
document.querySelectorAll(".opt-select").forEach(s => {  
    s.onchange = function(){  
        let group = this.closest('.opt-group');  
        if (!group) return;  
        group.querySelectorAll(".opt-content").forEach(d => d.style.display = "none");  
        let target = document.getElementById(this.value);  
        if (target) target.style.display = "block";  
    }  
})  
</script>  

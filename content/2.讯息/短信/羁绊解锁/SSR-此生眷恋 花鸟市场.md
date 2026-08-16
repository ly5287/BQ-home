---  
title: 花鸟市场  
tags: "SSR-此生眷恋"  
weight: 2018020801  
date: 2018-02-08
---  

> 获取途径：SSR-此生眷恋拿卡 解锁  


**[玩家姓名]** ：白起，有空的话能陪我去一趟花鸟市场吗？  

**白起：** 恩，你想买什么？  

<!-- 第1组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o1-1">没想好呢，就是想买点适合过年摆家里的东西。</option>  
    <option value="o1-2">快过年了，想买盆发财树，希望明年可以发财……</option>  
    <option value="o1-3">买点颜色鲜艳的金鱼吧，摆家里看着喜庆。</option>  
  </select>  
  <div id="o1-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：没想好呢，就是想买点适合过年摆家里的东西。  <br>  

 <strong>白起：</strong> 嗯，那就到时候逛了再决定吧。  <br>  

  </div>  
  <div id="o1-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：快过年了，想买盆发财树，希望明年可以发财……  <br>  

 <strong>白起：</strong> 比起发财，我更希望你少加班。  <br>  

 <strong>白起：</strong> 不过讨个吉利也好。  <br>  

  </div>  
  <div id="o1-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：买点颜色鲜艳的金鱼吧，摆家里看着喜庆。  <br>  

 <strong>白起：</strong> 好，到时候就去金鱼摊上逛逛吧。  <br>  

  </div>  
</div>  
<br>  

<!-- 第2组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o2-1">只陪我逛的话，你会不会无聊呀？</option>  
    <option value="o2-2">白起你自己没什么想买的吗？</option>  
    <option value="o2-3">我好久没逛花鸟市场了，好期待！</option>  
  </select>  
  <div id="o2-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：只陪我逛的话，你会不会无聊呀？  <br>  

 <strong>白起：</strong> 不会，而且我也打算去那里买点鸟食。  <br>  

  </div>  
  <div id="o2-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：白起你自己没什么想买的吗？  <br>  

 <strong>白起：</strong> 有，我打算买点鸟食。  <br>  

  </div>  
  <div id="o2-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：我好久没逛花鸟市场了，好期待！  <br>  

 <strong>白起：</strong> 我也是，好久没逛了。  <br>  

 <strong>白起：</strong> 趁这个机会，正好买点鸟食。  <br>  

  </div>  
</div>  
<br>  

<!-- 第3组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o3-1">啊，之前韩野有跟我说过，是那只小鸟吗？</option>  
    <option value="o3-2">你养鸟了吗？</option>  
  </select>  
  <div id="o3-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：啊，之前韩野有跟我说过，是那只小鸟吗？  <br>  

 <strong>白起：</strong> 对，就是那只出现在我家阳台，受伤的小鸟。  <br>  

 <strong>白起：</strong> 在它能再飞之前，我暂时打算照顾一下它。  <br>  

  </div>  
  <div id="o3-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：你养鸟了吗？  <br>  

 <strong>白起：</strong> 不是。在前几天，有只小鸟受伤碰巧落在了我家的窗台。  <br>  

 <strong>白起：</strong> 在它能再飞之前，我打算暂时照顾一下它。  <br>  

  </div>  
</div>  
<br>  

<!-- 第4组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o4-1">如果可以的话，我想跟你一起照顾它。</option>  
    <option value="o4-2">好想看一看这只小鸟呀，肯定很可爱~</option>  
  </select>  
  <div id="o4-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：如果可以的话，我想跟你一起照顾它。  <br>  

 <strong>白起：</strong> 没关系，我一个人可以照顾。  <br>  

 <strong>白起：</strong> 不过你要是想看它的话，逛完花鸟市场，可以去趟我家。  <br>  

  </div>  
  <div id="o4-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：好想看一看这只小鸟呀，肯定很可爱~  <br>  

 <strong>白起：</strong> 咳，想看的话，到时候逛完花鸟市场，去我家看吧。  <br>  

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

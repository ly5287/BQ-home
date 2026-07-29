---  
title: 担心之余  
tags: "SSR-醉东风"  
weight: 1130  
date: 2018-08-16
---  

> 获取途径：SSR-醉东风四星 解锁  


**白起：** 我好像还是第一次看到你哭成那样。  


<!-- 第1组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o1-1">该睡觉了白大侠！</option>  
    <option value="o1-2">我有哭吗？哪有……你记错了！</option>  
    <option value="o1-3">大晚上还不睡！你在想什么呢！</option>  
  </select>  
  <div id="o1-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：该睡觉了白大侠！  <br>  

 <strong>白起：</strong> 咳……  <br>  

 <strong>白起：</strong> 快睡了，只是突然想起[玩家姓名]女官哭起来的模样了。  <br>  

  </div>  
  <div id="o1-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：我有哭吗？哪有……你记错了！  <br>  

 <strong>白起：</strong> 哭也没事。  <br>  

 <strong>白起：</strong> 你的事情，我不会记错。  <br>  

  </div>  
  <div id="o1-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：大晚上还不睡！你在想什么呢！  <br>  

 <strong>白起：</strong> 你。  <br>  

 <strong>白起：</strong> 还有你哭的样子。  <br>  

  </div>  
</div>  
<br>  

<!-- 第2组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o2-1">啊啊啊啊忘了吧好丢脸啊鼻子还冒泡了……</option>  
    <option value="o2-2">好吧，你要是喜欢，我常常哭给你看！</option>  
    <option value="o2-3">是不是哭得可真情实感了！是！因为我真的被吓到了嘛……</option>  
  </select>  
  <div id="o2-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：啊啊啊啊忘了吧好丢脸啊鼻子还冒泡了……  <br>  

 <strong>白起：</strong> 不丢脸。  <br>  

 <strong>白起：</strong> 这样很可爱。  <br>  

 <strong>白起：</strong> 不过就算这样，我以后也不会再让你担心和掉眼泪。  <br>  

  </div>  
  <div id="o2-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：好吧，你要是喜欢，我常常哭给你看！  <br>  

 <strong>白起：</strong> ……我不是这个意思。  <br>  

 <strong>白起：</strong> 我只是很开心你在担心我。  <br>  

 <strong>白起：</strong> 不过以后，我不会再让你担心和掉眼泪。  <br>  

  </div>  
  <div id="o2-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：是不是哭得可真情实感了！是！因为我真的被吓到了嘛……  <br>  

 <strong>白起：</strong> 我知道，下次不会了。  <br>  

 <strong>白起：</strong> 不会再让你担心和掉眼泪。  <br>  

  </div>  
</div>  
<br>  

<!-- 第3组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o3-1">好啊！那如果你食言了怎么办……</option>  
    <option value="o3-2">那我们可要拉钩钩哦！</option>  
    <option value="o3-3">嗯！不可以再做让我担心的事，但是如果遇到什么问题，一定要告诉我！</option>  
  </select>  
  <div id="o3-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：好啊！那如果你食言了怎么办……  <br>  

 <strong>白起：</strong> 我答应过的事，就会做到。  <br>  

 <strong>白起：</strong> 对你，我没有食言。  <br>  

  </div>  
  <div id="o3-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：那我们可要拉钩钩哦！  <br>  

 <strong>白起：</strong> 好，一百年，不变。  <br>  

 <strong>白起：</strong> 不过不仅是这个。  <br>  

 <strong>白起：</strong> 我对你也不会变。  <br>  

  </div>  
  <div id="o3-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：嗯！不可以再做让我担心的事，但是如果遇到什么问题，一定要告诉我！  <br>  

 <strong>白起：</strong> 好，你也是。  <br>  

 <strong>白起：</strong> 不管发生什么，随时找我。  <br>  

 <strong>白起：</strong> 就算我不在你身边，也会很快赶来。  <br>  

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

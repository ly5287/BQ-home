---  
title: 小狼玩偶  
tags: "SR-只属于你"  
weight: 1144  
date: 2018-02-12
---  

> 获取途径：SR-只属于你进化 解锁  


**白起：** 脚还疼吗？  


<br>  

<!-- 第1组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o1-1">谢谢你的创口贴，已经好多啦！</option>  
    <option value="o1-2">稍微还有点疼，不过还好。</option>  
  </select>  
  <div id="o1-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：谢谢你的创口贴，已经好多啦！  <br>  

 <strong>白起：</strong> 那就好。  <br>  

 <strong>白起：</strong> 不用和我说谢谢。  <br>  

 <strong>白起：</strong> 有个问题我很好奇。  <br>  

  </div>  
  <div id="o1-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：稍微还有点疼，不过还好。  <br>  

 <strong>白起：</strong> 之后几天好好待在家里。  <br>  

 <strong>白起：</strong> 需要帮忙的话随时联系我。  <br>  

 <strong>白起：</strong> 有个问题我很好奇。  <br>  

  </div>  
</div>  
<br>  

<!-- 第2组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o2-1">嗯？什么问题？关于什么的？</option>  
    <option value="o2-2">没想到你也会有好奇的时候啊。</option>  
  </select>  
  <div id="o2-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：嗯？什么问题？关于什么的？  <br>  

 <strong>白起：</strong> 你送我的那只小狼玩偶  <br>  

 <strong>白起：</strong> 既然你那么想要它，为什么要把它送给我？  <br>  

  </div>  
  <div id="o2-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：没想到你也会有好奇的时候啊。  <br>  

 <strong>白起：</strong> ……你不用那么惊讶。  <br>  

 <strong>白起：</strong> 你为什么要送给我那只小狼玩偶？我看你好像很喜欢它。  <br>  

  </div>  
</div>  
<br>  

<!-- 第3组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o3-1">它给我的感觉很像你</option>  
    <option value="o3-2">说了你别生气，总觉得它跟你长得很像。</option>  
  </select>  
  <div id="o3-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：它给我的感觉很像你  <br>  

 <strong>白起：</strong> 感觉？  <br>  

 <strong>白起：</strong> 我给你什么感觉？  <br>  

  </div>  
  <div id="o3-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：说了你别生气，总觉得它跟你长得很像。  <br>  

 <strong>白起：</strong> 呃……说得具体点。  <br>  

 <strong>白起：</strong> 我长得有那么呆吗？  <br>  

  </div>  
</div>  
<br>  

<!-- 第4组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o4-1">唔…桀骜不驯？书上说，狼的态度很单纯，就是对成功坚定不移地向往。这一点很像你。</option>  
    <option value="o4-2">人都有不同的一面啊，说不定你真的有呆萌的一面呢！</option>  
  </select>  
  <div id="o4-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：唔…桀骜不驯？书上说，狼的态度很单纯，就是对成功坚定不移地向往。这一点很像你。  <br>  

 <strong>白起：</strong> 咳，原来我在你眼里是这样的吗？好像也还不错。  <br>  

 <strong>白起：</strong> 不管送什么，只要你送的，我都喜欢。  <br>  

  </div>  
  <div id="o4-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：人都有不同的一面啊，说不定你真的有呆萌的一面呢！  <br>  

 <strong>白起：</strong> 真是…不知道该说你什么好了。  <br>  

 <strong>白起：</strong> 那我也期待着，看到你不同的一面。  <br>  

 <strong>白起：</strong> 礼物我收下了，会好好珍藏的。  <br>  

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

---  
title: 穿警服  
tags: "SR-星空之吻"  
weight: 49  
---  

> 获取途径：SR-星空之吻三星 解锁  


**[玩家姓名]** ：今天看到了穿警服的你，超满足！  

**白起：** 我也没想到，你今天会突然过来。  


<br>  

<!-- 第1组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o1-1">如我所料，穿警服的样子特别帅！</option>  
    <option value="o1-2">我也更清楚的意识到你是一名特警呢。</option>  
    <option value="o1-3">跟你讲话的时候我都有些严肃起来了呢。</option>  
  </select>  
  <div id="o1-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：如我所料，穿警服的样子特别帅！  <br>  

 <strong>白起：</strong> ……是吗？谢谢。  <br>  

 <strong>白起：</strong> 我今天也意识到，每当我穿上警服的时候，心态都会发生一些变化。  <br>  

  </div>  
  <div id="o1-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：我也更清楚的意识到你是一名特警呢。  <br>  

 <strong>白起：</strong> 我平时的样子就不像了么？  <br>  

 <strong>白起：</strong> 不过我今天意识到，每当我穿上警服的时候，心态都会发生一些变化。  <br>  

  </div>  
  <div id="o1-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：跟你讲话的时候我都有些严肃起来了呢。  <br>  

 <strong>白起：</strong> 没有这么夸张吧？  <br>  

 <strong>白起：</strong> 我今天也意识到，每当我穿上警服的时候，心态都会发生一些变化。  <br>  

  </div>  
</div>  
<br>  

<!-- 第2组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o2-1">是因为穿上警服会感觉到一种使命感吗？</option>  
    <option value="o2-2">是因为曾经发生过什么事情吗？</option>  
    <option value="o2-3">是被什么人给影响了吗？</option>  
  </select>  
  <div id="o2-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：是因为穿上警服会感觉到一种使命感吗？  <br>  

 <strong>白起：</strong> 多少也有一些原因吧。  <br>  

 <strong>白起：</strong> 不过主要还是我曾经经历过的一些事情。  <br>  

 <strong>白起：</strong> 抱歉，我目前还不能说太多。  <br>  

  </div>  
  <div id="o2-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：是因为曾经发生过什么事情吗？  <br>  

 <strong>白起：</strong> 也许吧……  <br>  

 <strong>白起：</strong> 抱歉，我目前还不能说太多。  <br>  

  </div>  
  <div id="o2-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：是被什么人给影响了吗？  <br>  

 <strong>白起：</strong> 被某人给影响了吗？或许吧……  <br>  

 <strong>白起：</strong> 抱歉，我目前还不能说太多。  <br>  

  </div>  
</div>  
<br>  

<!-- 第3组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o3-1">我明白了，等你想说的时候，我会做个合格的听众的。</option>  
    <option value="o3-2">唔……有一点点好奇呢。</option>  
    <option value="o3-3">我是不是说了什么不该说的？</option>  
  </select>  
  <div id="o3-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：我明白了，等你想说的时候，我会做个合格的听众的。  <br>  

 <strong>白起：</strong> ……谢谢。  <br>  

 <strong>白起：</strong> 已经不早了，女孩子不要睡太晚，晚安。  <br>  

  </div>  
  <div id="o3-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：唔……有一点点好奇呢。  <br>  

 <strong>白起：</strong> 等到合适的机会，我会告诉你。  <br>  

 <strong>白起：</strong> 已经不早了，女孩子不要睡太晚，晚安。  <br>  

  </div>  
  <div id="o3-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：我是不是说了什么不该说的？  <br>  

 <strong>白起：</strong> 不要想太多，是我自己的问题。  <br>  

 <strong>白起：</strong> 已经很晚了，早点睡吧，晚安。  <br>  

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

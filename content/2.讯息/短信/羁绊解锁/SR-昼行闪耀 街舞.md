---  
title: 街舞  
tags: "SR-昼行闪耀"  
weight: 2018050401  
date: 2018-05-04
---  

> 获取途径：SR-昼行闪耀进化 解锁  


**[玩家姓名]** ：白起白起\~想问你一个问题！你会街舞吗？  

**白起：** 我刚看到消息。  

**白起：** 会，怎么了？  


<br>  

<!-- 第1组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o1-1">哇果然没找错人！</option>  
    <option value="o1-2">居然连街舞也会吗！好厉害啊</option>  
  </select>  
  <div id="o1-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：哇果然没找错人！  <br>  

 <strong>白起：</strong> 当然没找错。  <br>  

 <strong>白起：</strong> 我中学的时候有练过一阵。  <br>  

 <strong>白起：</strong> 不知道还记得多少。  <br>  

  </div>  
  <div id="o1-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：居然连街舞也会吗！好厉害啊  <br>  

 <strong>白起：</strong> 中学的时候有练过一阵。  <br>  

 <strong>白起：</strong> 不知道还记得多少。  <br>  

  </div>  
</div>  
<br>  

<!-- 第2组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o2-1">白起你到底有多少隐藏技能啊？连这么难得街舞都会，听说街舞练习的时候经常会受伤诶！</option>  
    <option value="o2-2">啊？高中的时候吗？我都没见过！听说街舞好难，经常会受伤……</option>  
  </select>  
  <div id="o2-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：白起你到底有多少隐藏技能啊？连这么难得街舞都会，听说街舞练习的时候经常会受伤诶！  <br>  

 <strong>白起：</strong> ……  <br>  

 <strong>白起：</strong> 我对你没有隐藏。也没有受过伤。  <br>  

  </div>  
  <div id="o2-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：啊？高中的时候吗？我都没见过！听说街舞好难，经常会受伤……  <br>  

 <strong>白起：</strong> 不是高中，是初中。  <br>  

 <strong>白起：</strong> 受伤？不太记得了，应该是没有过。  <br>  

 <strong>白起：</strong> 对了，你怎么突然问这个？  <br>  

  </div>  
</div>  
<br>  

<!-- 第3组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o3-1">对了，你怎么突然问这个？</option>  
    <option value="o3-2">下一期我们要拍个街舞相关的节目，想请你当嘉宾！</option>  
  </select>  
  <div id="o3-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：对了，你怎么突然问这个？  <br>  

 <strong>[玩家姓名]</strong> ：就是随便问问~我前两天不是很多街舞的视频嘛，觉得很帅，我就突然……  <br>  

 <strong>白起：</strong> 突然想学？  <br>  

  </div>  
  <div id="o3-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：下一期我们要拍个街舞相关的节目，想请你当嘉宾！  <br>  

 <strong>白起：</strong> 好。具体的时间发给我。  <br>  

 <strong>白起：</strong> 你刚才这么问，我以为你想学。  <br>  

  </div>  
</div>  
<br>  

<!-- 第4组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o4-1">被你发现了！想学！……你、你教我吗？！</option>  
    <option value="o4-2">虽然我很想，但是我觉得自己不行……还是看着你帅就好了！</option>  
  </select>  
  <div id="o4-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：被你发现了！想学！……你、你教我吗？！  <br>  

 <strong>白起：</strong> 当然。  <br>  

 <strong>白起：</strong> 挑个时间，我去接你。  <br>  

 <strong>白起：</strong> 放心，我不会让你受伤的。  <br>  

  </div>  
  <div id="o4-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：虽然我很想，但是我觉得自己不行……还是看着你帅就好了！  <br>  

 <strong>白起：</strong> 如果你想学，我教你。  <br>  

 <strong>白起：</strong> 挑个时间，我去接你。  <br>  

 <strong>白起：</strong> 放心，我不会让你受伤的。  <br>  

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

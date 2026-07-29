---  
title: 新名词  
tags: "SR-记忆重叠"  
weight: 1137  
date: 2018-05-04
---  

> 获取途径：SR-记忆重叠进化 解锁  


**[玩家姓名]** ：我今天学到一个新名词！  

**白起：** 什么名词？  

**白起：** 怎么突然说起这个了。  


<!-- 第1组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o1-1">因为听到“知识的诅咒”这个名词，就想起你来了。</option>  
    <option value="o1-2">先听我说嘛，叫“知识的诅咒”就是说当你已经知道一件事情后，就无法想象不知道这个事情是什么样的了。听到这个解释我马上就想到你了。</option>  
  </select>  
  <div id="o1-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：因为听到“知识的诅咒”这个名词，就想起你来了。  <br>  

 <strong>白起：</strong> 当你已经知道一件事情后，就无法想象不知道这个事情是什么样子？  <br>  

 <strong>白起：</strong> 我知道这个说法。  <br>  

 <strong>白起：</strong> 但是这句话是怎么让你想到我的？  <br>  

  </div>  
  <div id="o1-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：先听我说嘛，叫“知识的诅咒”就是说当你已经知道一件事情后，就无法想象不知道这个事情是什么样的了。听到这个解释我马上就想到你了。  <br>  

 <strong>白起：</strong> ……  <br>  

 <strong>白起：</strong> 不明白为什么你会想到我。  <br>  

  </div>  
</div>  
<br>  

<!-- 第2组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o2-1">天马行空？冥冥之中？我也解释不清楚……</option>  
    <option value="o2-2">你每次被人误解的时候都让我不用去解释，因为我已经知道了你温柔善良的一面，所以没办法理解别人的立场吗？</option>  
  </select>  
  <div id="o2-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：天马行空？冥冥之中？我也解释不清楚……  <br>  

 <strong>白起：</strong> 我……  <br>  

 <strong>白起：</strong> 算了。  <br>  

  </div>  
  <div id="o2-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：你每次被人误解的时候都让我不用去解释，因为我已经知道了你温柔善良的一面，所以没办法理解别人的立场吗？  <br>  

 <strong>白起：</strong> ……  <br>  

 <strong>白起：</strong> 我没想那么多，只是不想你白费口舌。  <br>  

 <strong>白起：</strong> 不过你这么一说……  <br>  

 <strong>白起：</strong> 算了，不说了。  <br>  

  </div>  
</div>  
<br>  

<!-- 第3组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o3-1">你想说什么？</option>  
    <option value="o3-2">怎么了？</option>  
  </select>  
  <div id="o3-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：你想说什么？  <br>  

 <strong>白起：</strong> 就像我没办法想象没有遇见你的我会是什么样子一样。  <br>  

 <strong>白起：</strong> 这就是我刚才想说的话。  <br>  

  </div>  
  <div id="o3-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：怎么了？  <br>  

 <strong>白起：</strong> “知识的诅咒”对我来说，就是无法想象没有遇见你的我会是什么样子。  <br>  

 <strong>白起：</strong> 这就是我刚才想说的话。  <br>  

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

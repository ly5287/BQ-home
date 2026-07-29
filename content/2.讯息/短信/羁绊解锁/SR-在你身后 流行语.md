---  
title: 流行语  
tags: "SR-在你身后"  
weight: 1147  
date: 2017-12-20
---  

> 获取途径：SR-在你身后三星 解锁  


**[玩家姓名]** ：人家超不开心，拿小拳拳捶你胸口嘤嘤嘤  

**白起：** 你是[玩家姓名]？  


<br>  

<!-- 第1组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o1-1">哈哈哈哈，不行了，发出去我就笑死了</option>  
    <option value="o1-2">你是不是被我吓到了？</option>  
    <option value="o1-3">这句话是不是很有意思？</option>  
  </select>  
  <div id="o1-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：哈哈哈哈，不行了，发出去我就笑死了  <br>  

 <strong>白起：</strong> 咳，我还以为你被盗号了。  <br>  

  </div>  
  <div id="o1-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：你是不是被我吓到了？  <br>  

 <strong>白起：</strong> 咳，我还以为你被盗号了。  <br>  

  </div>  
  <div id="o1-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：这句话是不是很有意思？  <br>  

 <strong>白起：</strong> ……有意思吗？  <br>  

 <strong>白起：</strong> 我还以为你被盗号了。  <br>  

  </div>  
</div>  
<br>  

<!-- 第2组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o2-1">这是之前的网络流行语，还有配套的表情包呢~</option>  
    <option value="o2-2">因为我打算做个流行语的节目，搜集了一些，在找各种人试试反应。</option>  
    <option value="o2-3">吓到你了不好意思啊</option>  
  </select>  
  <div id="o2-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：这是之前的网络流行语，还有配套的表情包呢~  <br>  

 <strong>白起：</strong> ……我用不来表情包，默认表情都很少发。  <br>  

  </div>  
  <div id="o2-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：因为我打算做个流行语的节目，搜集了一些，在找各种人试试反应。  <br>  

 <strong>白起：</strong> 这是现在的流行语？……难以理解  <br>  

  </div>  
  <div id="o2-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：吓到你了不好意思啊  <br>  

 <strong>白起：</strong> 不用道歉，我本来就不太关注这些。  <br>  

  </div>  
</div>  
<br>  

<!-- 第3组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o3-1">下次见面我给你科普吧，其实蛮有趣的。</option>  
    <option value="o3-2">有空的时候可以多刷刷微博，看看热门哦。</option>  
    <option value="o3-3">学长可不要被流行淘汰了哦！</option>  
  </select>  
  <div id="o3-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：下次见面我给你科普吧，其实蛮有趣的。  <br>  

 <strong>白起：</strong> 如果是你科普的话，我可以听听看。  <br>  

  </div>  
  <div id="o3-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：有空的时候可以多刷刷微博，看看热门哦。  <br>  

 <strong>白起：</strong> 恩，如果有时间的话。  <br>  

  </div>  
  <div id="o3-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：学长可不要被流行淘汰了哦！  <br>  

 <strong>白起：</strong> ……我争取。  <br>  

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

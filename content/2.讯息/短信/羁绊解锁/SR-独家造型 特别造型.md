---  
title: 特别造型  
tags: "SR-独家造型"  
weight: 2018041201  
date: 2018-04-12
---  

> 获取途径：SR-独家造型三星 解锁  


**[玩家姓名]** ：这个发型很适合你！  

**白起：** ……你是认真的吗？  


<br>  

<!-- 第1组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o1-1">居然怀疑我……伤心了！</option>  
    <option value="o1-2">比真金还真！</option>  
    <option value="o1-3">你变了！居然不相信我。</option>  
  </select>  
  <div id="o1-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：居然怀疑我……伤心了！  <br>  

 <strong>白起：</strong> 我不是这个意思。  <br>  

 <strong>白起：</strong> 我……  <br>  

 <strong>白起：</strong> 算了。  <br>  

  </div>  
  <div id="o1-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：比真金还真！  <br>  

 <strong>白起：</strong> 我不擅长鉴定珠宝。  <br>  

 <strong>白起：</strong> 下次可以换个比喻。  <br>  

  </div>  
  <div id="o1-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：你变了！居然不相信我。  <br>  

 <strong>白起：</strong> ……  <br>  

 <strong>白起：</strong> 我不是这个意思。  <br>  

  </div>  
</div>  
<br>  

<!-- 第2组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o2-1">我刚刚是说着玩的，不用那么较真啦。</option>  
    <option value="o2-2">别那么较真嘛……</option>  
    <option value="o2-3">总之！你露出额头超好看der，平时不露出来有点可惜。</option>  
  </select>  
  <div id="o2-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：我刚刚是说着玩的，不用那么较真啦。  <br>  

 <strong>白起：</strong> ……  <br>  

 <strong>白起：</strong> 哪一句？  <br>  

  </div>  
  <div id="o2-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：别那么较真嘛……  <br>  

 <strong>白起：</strong> 我对你一直都很认真。  <br>  

  </div>  
  <div id="o2-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：总之！你露出额头超好看der，平时不露出来有点可惜。  <br>  

 <strong>白起：</strong> ……  <br>  

 <strong>白起：</strong> 你看过就足够了。  <br>  

  </div>  
</div>  
<br>  

<!-- 第3组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o3-1">反正我是真心喜欢你这个发型！想多看看。</option>  
    <option value="o3-2">反正我觉得你这样梳辫子很可爱，每天都想看！</option>  
  </select>  
  <div id="o3-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：反正我是真心喜欢你这个发型！想多看看。  <br>  

 <strong>白起：</strong> ……  <br>  

 <strong>白起：</strong> 以后两个人的时候让你看个够。  <br>  

  </div>  
  <div id="o3-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：反正我觉得你这样梳辫子很可爱，每天都想看！  <br>  

 <strong>白起：</strong> 看过一次就够了。  <br>  

 <strong>白起：</strong> 况且在我眼里，你最可爱。  <br>  

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

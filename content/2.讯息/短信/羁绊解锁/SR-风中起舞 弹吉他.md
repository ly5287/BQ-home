---  
title: 弹吉他  
tags: "SR-风中起舞"  
weight: 2018050403  
date: 2018-05-04
---  

> 获取途径：SR-风中起舞进化 解锁  


**[玩家姓名]** ：你还弹琴吗？  

**白起：** 什么琴？  



<!-- 第1组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o1-1">吉他是用“弹”这个动词吧……？</option>  
    <option value="o1-2">吉他……</option>  
    <option value="o1-3">我一定可以顺利学会的！</option>  
  </select>  
  <div id="o1-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：吉他是用“弹”这个动词吧……？  <br>  

 <strong>白起：</strong> 是我一时没反应过来。  <br>  

 <strong>白起：</strong> 平时也不用“琴”这个字提它。  <br>  

 <strong>白起：</strong> 怎么了？  <br>  

  </div>  
  <div id="o1-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：吉他……  <br>  

 <strong>白起：</strong> 是我一时没反应过来。  <br>  

 <strong>白起：</strong> 怎么了？  <br>  

  </div>  
  <div id="o1-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：我一定可以顺利学会的！  <br>  

 <strong>白起：</strong> 有这份自信就够了。  <br>  

 <strong>白起：</strong> 而且你还有我，没问题的。  <br>  

  </div>  
</div>  
<br>  

<!-- 第2组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o2-1">看到视频里的指弹好帅，有点想学。</option>  
    <option value="o2-2">教练我要学吉他！</option>  
  </select>  
  <div id="o2-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：看到视频里的指弹好帅，有点想学。  <br>  

 <strong>白起：</strong> 我可以教你，不过你自己也要做好准备。  <br>  

  </div>  
  <div id="o2-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：教练我要学吉他！  <br>  

 <strong>白起：</strong> 这么快就拜师了……  <br>  

 <strong>白起：</strong> 好，不过要做好心理准备。  <br>  

  </div>  
</div>  
<br>  

<!-- 第3组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o3-1">会很难吗……</option>  
    <option value="o3-2">怎么办你这么一说我已经有点想打退堂鼓了。</option>  
  </select>  
  <div id="o3-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：会很难吗……  <br>  

 <strong>白起：</strong> 你有钢琴基础，乐理对你应该不算难。  <br>  

 <strong>白起：</strong> 但毕竟一个弦乐一个键盘，还要适应一下。  <br>  

  </div>  
  <div id="o3-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：怎么办你这么一说我已经有点想打退堂鼓了。  <br>  

 <strong>白起：</strong> 不学也没关系，听我弹就行了。  <br>  

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

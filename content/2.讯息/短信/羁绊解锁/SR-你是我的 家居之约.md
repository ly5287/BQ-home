---  
title: 家居之约  
tags: "SR-你是我的"  
weight: 2017122001  
date: 2017-12-20
---  

> 获取途径：SR-你是我的三星 解锁  


**[玩家姓名]** ：今天的录制辛苦了，作为感谢，我请你吃饭吧！  

**白起：** 换个感谢的方式，明天陪我去一趟家居城吧  


<br>  

<!-- 第1组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o1-1">好啊，你要买什么？</option>  
    <option value="o1-2">去做什么呢？</option>  
    <option value="o1-3">为什么找我呢？</option>  
  </select>  
  <div id="o1-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：好啊，你要买什么？  <br>  

 <strong>白起：</strong> 我想买一盏落地灯  <br>  

 <strong>白起：</strong> 请你帮我参考一下  <br>  

  </div>  
  <div id="o1-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：去做什么呢？  <br>  

 <strong>白起：</strong> 我想买一盏落地灯  <br>  

 <strong>白起：</strong> 知道你对那里比较熟悉，可以帮我做做参考  <br>  

  </div>  
  <div id="o1-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：为什么找我呢？  <br>  

 <strong>白起：</strong> 我想买点东西  <br>  

 <strong>白起：</strong> 你可以帮我参考一下  <br>  

  </div>  
</div>  
<br>  

<!-- 第2组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o2-1">我对家居城很熟悉，经常去采购，可以帮你参考</option>  
    <option value="o2-2">其实我对家居用品也没什么研究，不知道能否帮上忙</option>  
    <option value="o2-3">你开口了，我会答应的</option>  
  </select>  
  <div id="o2-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：我对家居城很熟悉，经常去采购，可以帮你参考  <br>  

 <strong>白起：</strong> 那就好  <br>  

 <strong>白起：</strong> 听韩野说那边的海鲜很好吃，中午正好请你吃饭  <br>  

  </div>  
  <div id="o2-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：其实我对家居用品也没什么研究，不知道能否帮上忙  <br>  

 <strong>白起：</strong> 肯定比我强  <br>  

 <strong>白起：</strong> 到时候请你吃饭  <br>  

  </div>  
  <div id="o2-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：你开口了，我会答应的  <br>  

 <strong>白起：</strong> 谢谢，明天中午请你吃饭  <br>  

  </div>  
</div>  
<br>  

<!-- 第3组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o3-1">听说冰淇淋也不错</option>  
    <option value="o3-2">太好了</option>  
    <option value="o3-3">提出了不能拒绝的理由</option>  
  </select>  
  <div id="o3-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：听说冰淇淋也不错呢！  <br>  

 <strong>白起：</strong> 吃货  <br>  

 <strong>白起：</strong> 明天早上九点我来接你  <br>  

  </div>  
  <div id="o3-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：太好了  <br>  

 <strong>白起：</strong> 提到吃你就投降了  <br>  

 <strong>白起：</strong> 明早九点我来接你  <br>  

  </div>  
  <div id="o3-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：请吃饭是个不能拒绝的理由  <br>  

 <strong>白起：</strong> 对付吃货这是屡试不爽的理由  <br>  

 <strong>白起：</strong> 明天早上我来接你，晚安  <br>  

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

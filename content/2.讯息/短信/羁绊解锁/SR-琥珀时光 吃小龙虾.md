---  
title: 吃小龙虾  
tags: "SR-琥珀时光"  
weight: 1152  
date: 2017-12-20
---  

> 获取途径：SR-琥珀时光三星 解锁  


**[玩家姓名]** ：学长，今晚的龙虾真的好好吃~  

**白起：** 嗯，味道确实很不错。  


<br>  

<!-- 第1组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o1-1">真没想到这么不起眼的一家店，生意竟然这么好。</option>  
    <option value="o1-2">其实我好怕你来之前就关门了，因为真的很晚了……</option>  
    <option value="o1-3">这家店可以载入我的美食红榜了。</option>  
  </select>  
  <div id="o1-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：真没想到这么不起眼的一家店，生意竟然这么好。  <br>  

 <strong>白起：</strong> 现在想想，我们之前每次路过时，它家生意都很好。  <br>  

  </div>  
  <div id="o1-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：其实我好怕你来之前就关门了，因为真的很晚了……  <br>  

 <strong>白起：</strong> 比起关门，卖光的可能性更大。  <br>  

 <strong>白起：</strong> 现在想想，我们之前每次路过时，它家生意都很好。  <br>  

  </div>  
  <div id="o1-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：这家店可以载入我的美食红榜了。  <br>  

 <strong>白起：</strong> 在吃上面，你可以说是专业了。  <br>  

 <strong>白起：</strong> 现在想想，我们之前每次路过时，它家生意都很好。  <br>  

  </div>  
</div>  
<br>  

<!-- 第2组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o2-1">学长今晚吃尽兴了吗？</option>  
    <option value="o2-2">我现在依然意犹未尽呢~</option>  
    <option value="o2-3">因为超好吃，所以我今晚吃了好多……</option>  
  </select>  
  <div id="o2-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：学长今晚吃尽兴了吗？  <br>  

 <strong>白起：</strong> 看你吃得开心，我也尽兴了。  <br>  

 <strong>白起：</strong> 喜欢的话，我们下次再一起去吃。  <br>  

  </div>  
  <div id="o2-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：我现在依然意犹未尽呢~  <br>  

 <strong>白起：</strong> 你今晚其实已经吃了不少了……  <br>  

 <strong>白起：</strong> 喜欢的话，我们下次再一起去吃。  <br>  

  </div>  
  <div id="o2-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：因为超好吃，所以我今晚吃了好多……  <br>  

 <strong>白起：</strong> 喜欢的话，我们下次再一起去吃。  <br>  

  </div>  
</div>  
<br>  

<!-- 第3组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o3-1">真的吗？我现在已经开始期待啦！</option>  
    <option value="o3-2">下次是什么时候？</option>  
    <option value="o3-3">真的吗？骗人的是小狗！</option>  
  </select>  
  <div id="o3-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：真的吗？我现在已经开始期待啦！  <br>  

 <strong>白起：</strong> 小吃货。  <br>  

 <strong>白起：</strong> 很晚了，早点休息，晚安。  <br>  

  </div>  
  <div id="o3-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：下次是什么时候？  <br>  

 <strong>白起：</strong> 到时候再和你约时间。  <br>  

 <strong>白起：</strong> 很晚了，早点休息，晚安。  <br>  

  </div>  
  <div id="o3-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：真的吗？骗人的是小狗！  <br>  

 <strong>白起：</strong> 放心，答应你的事我肯定会做到。  <br>  

 <strong>白起：</strong> 很晚了，早点休息，晚安。  <br>  

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

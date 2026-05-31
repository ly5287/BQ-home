---
title: 嘉年华
tags: "SR-童趣时光"
weight: 60
---

> 获取途径：SR-童趣时光进化 解锁


**白起：** 我已经到游乐场门口了。

<!-- 第1组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o1">我马上就到啦！你穿我给你准备的嘉年华服装了嘛？</option>
    <option value="o2">啊……嘉年华派对，大家都会精心打扮的。</option>
    <option value="o3">我要玩刺激的，云霄飞车！</option>
  </select>
  <div id="o1" class="opt-content">
 <strong>[玩家姓名]</strong> ：我马上就到啦！你穿我给你准备的嘉年华服装了嘛？  <br>
   <br>
 <strong>白起：</strong> 临出门前换掉了。  <br>
   <br>
  </div>
  <div id="o2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：啊……嘉年华派对，大家都会精心打扮的。  <br>
   <br>
 <strong>白起：</strong> 穿什么不重要，主要是玩得开心。  <br>
   <br>
 <strong>白起：</strong> 有什么想玩的我可以先排队。  <br>
   <br>
  </div>
  <div id="o3" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：我要玩刺激的，云霄飞车！  <br>
   <br>
 <strong>白起：</strong> 好，到了跟我说。  <br>
   <br>
 <strong>白起：</strong> 你想吃的棉花糖，我买好了。  <br>
   <br>
  </div>
</div>
<br>

<!-- 第2组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o4">路上堵车，还要一会呢！对了，你穿我给你准备的嘉年华服装了嘛？</option>
    <option value="o5">好吧……</option>
    <option value="o6">我要坐双层的旋转木马！</option>
  </select>
  <div id="o4" class="opt-content">
 <strong>[玩家姓名]</strong> ：路上堵车，还要一会呢！对了，你穿我给你准备的嘉年华服装了嘛？  <br>
   <br>
 <strong>白起：</strong> 颜色太鲜艳，不适合我。  <br>
   <br>
  </div>
  <div id="o5" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：好吧……  <br>
   <br>
 <strong>白起：</strong> 有什么想玩的我可以先排队。  <br>
   <br>
  </div>
  <div id="o6" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：我要坐双层的旋转木马！  <br>
   <br>
 <strong>白起：</strong> 好，到了跟我说。  <br>
   <br>
 <strong>白起：</strong> 你想吃的棉花糖，我买好了。  <br>
   <br>
  </div>
</div>
<br>

<!-- 第3组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o7">我也快了，你穿我给你准备的嘉年华服装了嘛？</option>
    <option value="o8">啊！这可是我精心给你挑选的呀！</option>
    <option value="o9">随便吧……哪个人少先玩哪个。</option>
  </select>
  <div id="o7" class="opt-content">
 <strong>[玩家姓名]</strong> ：我也快了，你穿我给你准备的嘉年华服装了嘛？  <br>
   <br>
 <strong>白起：</strong> 颜色太鲜艳，不适合我。  <br>
   <br>
  </div>
  <div id="o8" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：啊！这可是我精心给你挑选的呀！  <br>
   <br>
 <strong>白起：</strong> 穿什么不重要，主要是玩得开心。  <br>
   <br>
 <strong>白起：</strong> 有什么想玩的我可以先排队。  <br>
   <br>
  </div>
  <div id="o9" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：随便吧……哪个人少先玩哪个。  <br>
   <br>
 <strong>白起：</strong> 好，到了跟我说。  <br>
   <br>
 <strong>白起：</strong> 你想吃的棉花糖，我买好了。  <br>
   <br>
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

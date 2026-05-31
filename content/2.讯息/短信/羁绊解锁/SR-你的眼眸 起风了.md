---
title: 起风了
tags: "SR-你的眼眸"
weight: 57
---

> 获取途径：SR-你的眼眸拿卡 解锁


- **[玩家姓名]** ：饭店的定位我已经发给你了，收到了吗？

**白起：** 收到了，节目录制结束了吗？

<!-- 第1组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o1">你已经到饭店了吗？</option>
    <option value="o2">可能还要一会，去旁边的咖啡店坐一下吧</option>
    <option value="o3">好的，等我</option>
  </select>
  <div id="o1" class="opt-content">
 <strong>[玩家姓名]</strong> ：你已经到饭店了吗？  <br>
   <br>
 <strong>白起：</strong> 我想先来接你  <br>
   <br>
 <strong>白起：</strong> 已经到你公司楼下了  <br>
   <br>
  </div>
  <div id="o2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：可能还要一会，去旁边的咖啡店坐一下吧  <br>
   <br>
 <strong>白起：</strong> 没关系，我附近走走  <br>
   <br>
 <strong>白起：</strong> 起风了，外套要带下来  <br>
   <br>
  </div>
  <div id="o3" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：好的，等我  <br>
   <br>
 <strong>白起：</strong> 一会见  <br>
   <br>
  </div>
</div>
<br>

<!-- 第2组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o4">今天录制很顺利，马上就结束了</option>
    <option value="o5">来影棚找我吧</option>
    <option value="o6">糟糕，没有带外套</option>
  </select>
  <div id="o4" class="opt-content">
 <strong>[玩家姓名]</strong> ：今天录制很顺利，马上就结束了  <br>
   <br>
 <strong>白起：</strong> 我在公司门口等你  <br>
   <br>
  </div>
  <div id="o5" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：来影棚找我吧  <br>
   <br>
 <strong>白起：</strong> 不影响你工作，我在楼下等你  <br>
   <br>
  </div>
  <div id="o6" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：糟糕，没有带外套  <br>
   <br>
 <strong>白起：</strong> 有我，一会见  <br>
   <br>
  </div>
</div>
<br>

<!-- 第3组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o7">今天录制不太顺利，还有很久才会结束</option>
    <option value="o8">好的，我快点结束去找你</option>
    <option value="o9">幸好备了外套</option>
  </select>
  <div id="o7" class="opt-content">
 <strong>[玩家姓名]</strong> ：今天录制不太顺利，还有很久才会结束  <br>
   <br>
 <strong>白起：</strong> 没关系，你先忙  <br>
   <br>
 <strong>白起：</strong> 我已经到你公司楼下  <br>
   <br>
  </div>
  <div id="o8" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：好的，我快点结束去找你  <br>
   <br>
 <strong>白起：</strong> 不着急，你慢慢来  <br>
   <br>
 <strong>白起：</strong> 起风了，外套要带下来  <br>
   <br>
  </div>
  <div id="o9" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：幸好备了外套  <br>
   <br>
 <strong>白起：</strong> 一会见  <br>
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

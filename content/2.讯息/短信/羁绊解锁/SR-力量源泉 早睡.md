---
title: 早睡
tags: "SR-力量源泉"
weight: 61
---

> 获取途径：SR-力量源泉三星 解锁


**白起：** 昨天找我什么事？


<br>

<!-- 第1组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o1-1">一晚上没有回复，有点担心你……</option>
    <option value="o1-2">本来想问你问题的，已经解决了。昨天是很忙吗？</option>
    <option value="o1-3">你终于回短信了……</option>
  </select>
  <div id="o1-1" class="opt-content">
 <strong>[玩家姓名]</strong> ：一晚上没有回复，有点担心你……  <br>

 <strong>白起：</strong> 放心，我只是睡着了。  <br>

  </div>
  <div id="o1-2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：本来想问你问题的，已经解决了。昨天是很忙吗？  <br>

 <strong>白起：</strong> 没有，昨天我睡得早。  <br>

  </div>
  <div id="o1-3" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：你终于回短信了……  <br>

 <strong>白起：</strong> 昨天我睡得早。  <br>

  </div>
</div>
<br>

<!-- 第2组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o2-1">哇，难得的早睡啊！</option>
    <option value="o2-2">哦哦，那就好，不过你睡得好早。</option>
    <option value="o2-3">咦……晚上九点半就睡了吗？</option>
  </select>
  <div id="o2-1" class="opt-content">
 <strong>[玩家姓名]</strong> ：哇，难得的早睡啊！  <br>

 <strong>白起：</strong> 你见惯我通宵执行任务的情况了，其实这才是我正常的作息。  <br>

  </div>
  <div id="o2-2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：哦哦，那就好，不过你睡得好早。  <br>

 <strong>白起：</strong> 你见惯我通宵执行任务的情况了，其实这才是我正常的作息。  <br>

  </div>
  <div id="o2-3" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：咦……晚上九点半就睡了吗？  <br>

 <strong>白起：</strong> 平时没事的时候我很早就会睡，只是这样的时间很少。  <br>

  </div>
</div>
<br>

<!-- 第3组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o3-1">那以后我就不那么晚打扰你了……</option>
    <option value="o3-2">这是真的吗？我上次这么早睡还是小学的时候……</option>
    <option value="o3-3">啊……你就是传说中的老干部吧！</option>
  </select>
  <div id="o3-1" class="opt-content">
 <strong>[玩家姓名]</strong> ：那以后我就不那么晚打扰你了……  <br>

 <strong>白起：</strong> 下次我如果没有回复，你可以给我打电话。  <br>

 <strong>白起：</strong> 多晚都可以。  <br>

  </div>
  <div id="o3-2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：这是真的吗？我上次这么早睡还是小学的时候……  <br>

 <strong>白起：</strong> 咳，是吗……  <br>

 <strong>白起：</strong> 不过下次我如果没有回复，你可以给我打电话。  <br>

 <strong>白起：</strong> 多晚都可以。  <br>

  </div>
  <div id="o3-3" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：啊……你就是传说中的老干部吧！  <br>

 <strong>白起：</strong> 老干部是谁？  <br>

 <strong>白起：</strong> 不过下次我如果没有回复，你可以给我打电话。  <br>

 <strong>白起：</strong> 多晚都可以。  <br>

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

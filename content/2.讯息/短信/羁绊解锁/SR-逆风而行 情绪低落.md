---
title: 情绪低落
tags: "SR-逆风而行"
weight: 35
---

> 获取途径：SR-逆风而行进化 解锁


**白起：** 发生什么事了，怎么一大早就开始情绪低落？

<!-- 第1组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o1">没什么，不用管我……</option>
    <option value="o2">放完假有点缓不过来，困成了狗。</option>
    <option value="o3">你是不是又扒我窗了！</option>
  </select>
  <div id="o1" class="opt-content">
 <strong>[玩家姓名]</strong> ：没什么，不用管我……  <br>
   <br>
 <strong>白起：</strong> 只要和你有关，都不是可以不管的事。  <br>
   <br>
 <strong>白起：</strong> 跟我说说看？  <br>
   <br>
  </div>
  <div id="o2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：放完假有点缓不过来，困成了狗。  <br>
   <br>
 <strong>白起：</strong> 我要代表全体警犬向这个形容提出异议了。  <br>
   <br>
 <strong>白起：</strong> 至少飞飞在我面前就没犯过困。  <br>
   <br>
 <strong>白起：</strong> 笑一笑是不是精神多了？  <br>
   <br>
  </div>
  <div id="o3" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：你是不是又扒我窗了！  <br>
   <br>
 <strong>白起：</strong> ……只是刚好路过。  <br>
   <br>
 <strong>白起：</strong> 好了，工作加油。  <br>
   <br>
  </div>
</div>
<br>

<!-- 第2组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o4">我们女生低落都不需要理由！</option>
    <option value="o5">只是假期综合症而已，无心工作……</option>
    <option value="o6">不过……你怎么知道的？！</option>
  </select>
  <div id="o4" class="opt-content">
 <strong>[玩家姓名]</strong> ：我们女生低落都不需要理由！  <br>
   <br>
 <strong>白起：</strong> ……如果是因为那个的话，记得多喝热水。  <br>
   <br>
 <strong>白起：</strong> 即便没有理由，我也不会放着你不管。  <br>
   <br>
 <strong>白起：</strong> 等你想说了再来找我就好。  <br>
   <br>
  </div>
  <div id="o5" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：只是假期综合症而已，无心工作……  <br>
   <br>
 <strong>白起：</strong> 坚持到下班，别光看着屏幕放空。  <br>
   <br>
 <strong>白起：</strong> 晚上我来接你去散心。  <br>
   <br>
 <strong>白起：</strong> 现在感觉有点工作动力了吗？  <br>
   <br>
  </div>
  <div id="o6" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：不过……你怎么知道的？！  <br>
   <br>
 <strong>白起：</strong> 是刚刚恰好路过你窗外看到了。  <br>
   <br>
  </div>
</div>
<br>

<!-- 第3组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o7">想到要补班就脑壳疼嘤嘤嘤……</option>
  </select>
  <div id="o7" class="opt-content">
 <strong>[玩家姓名]</strong> ：想到要补班就脑壳疼嘤嘤嘤……  <br>
   <br>
 <strong>白起：</strong> 那我帮你揉揉？  <br>
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

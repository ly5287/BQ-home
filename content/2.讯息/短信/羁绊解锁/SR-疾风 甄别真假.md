---
title: 甄别真假
tags: "SR-疾风"
weight: 20
---

> 获取途径：SR-疾风三星 解锁


**白起：** [玩家姓名]，还需要帮忙吗？


<br>

<!-- 第1组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o1-1">不用啦，你的批注写得好详细~</option>
    <option value="o1-2">稍等一下，还有两份事件报告我汇总一下发给你！</option>
    <option value="o1-3">我把最近的奇异事件报告多看两遍，再想一想~</option>
  </select>
  <div id="o1-1" class="opt-content">
 <strong>[玩家姓名]</strong> ：不用啦，你的批注写得好详细~  <br>

 <strong>白起：</strong> 那就好。  <br>

 <strong>白起：</strong> 如果还有新的事件，随时发给我。  <br>

  </div>
  <div id="o1-2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：稍等一下，还有两份事件报告我汇总一下发给你！  <br>

 <strong>白起：</strong> 好。  <br>

 <strong>白起：</strong> 有任何问题，随时发给我。  <br>

  </div>
  <div id="o1-3" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：我把最近的奇异事件报告多看两遍，再想一想~  <br>

 <strong>白起：</strong> 好，不急。  <br>

 <strong>白起：</strong> 有任何问题，随时发给我。  <br>

  </div>
</div>
<br>

<!-- 第2组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o2-1">说起来有点好奇，会有让你也难辨真假的奇异事件吗？</option>
    <option value="o2-2">不过这样麻烦你，会不会影响你的日常工作？</option>
    <option value="o2-3">感觉你知道得好多~</option>
  </select>
  <div id="o2-1" class="opt-content">
 <strong>[玩家姓名]</strong> ：说起来有点好奇，会有让你也难辨真假的奇异事件吗？  <br>

 <strong>白起：</strong> 目前还没有。  <br>

 <strong>白起：</strong> 即使有，我也会追查到真相的。  <br>

 <strong>白起：</strong> 别担心。  <br>

  </div>
  <div id="o2-2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：不过这样麻烦你，会不会影响你的日常工作？  <br>

 <strong>白起：</strong> 不会。  <br>

 <strong>白起：</strong> 甄别事件真假而已。  <br>

  </div>
  <div id="o2-3" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：感觉你知道得好多~  <br>

 <strong>白起：</strong> 这是我的专业所在。  <br>

 <strong>白起：</strong> 有些假新闻根本经不起推敲。  <br>

  </div>
</div>
<br>

<!-- 第3组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o3-1">对了，你明晚有空吗？还有几个细节想询问你一下。</option>
    <option value="o3-2">你帮了我这么多，不知道该怎么谢你才好。</option>
    <option value="o3-3">老实说，有些假事件看着还挺好笑的！</option>
  </select>
  <div id="o3-1" class="opt-content">
 <strong>[玩家姓名]</strong> ：对了，你明晚有空吗？还有几个细节想询问你一下。  <br>

 <strong>白起：</strong> 好。  <br>

 <strong>白起：</strong> 明天一起吃饭怎么样？  <br>

 <strong>白起：</strong> 下午我去找你。  <br>

  </div>
  <div id="o3-2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：你帮了我这么多，不知道该怎么谢你才好。  <br>

 <strong>白起：</strong> 不用谢我。  <br>

 <strong>白起：</strong> 这次帮忙很有意思。  <br>

 <strong>白起：</strong> 我也很期待这期节目。  <br>

  </div>
  <div id="o3-3" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：老实说，有些假事件看着还挺好笑的！  <br>

 <strong>白起：</strong> 嗯，我也这么觉得。  <br>

 <strong>白起：</strong> 对了，昨天的报告有几处需要当面跟你解释一下。  <br>

 <strong>白起：</strong> 我已经在路上了，一刻钟后到。  <br>

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

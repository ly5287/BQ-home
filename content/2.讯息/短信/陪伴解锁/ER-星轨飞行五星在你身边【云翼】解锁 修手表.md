---
title: 修手表
weight: 9
---

> 获取途径：ER-星轨飞行五星在你身边【云翼】解锁 解锁


**白起：** 手表修好了。


<br>

<!-- 第1组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o1-1">太好了！我还以为它完全坏了。</option>
    <option value="o1-2">居然这么快就修好了？我记得昨天才拿给你……</option>
    <option value="o1-3">还好当时摔得不严重，还能救得回来……</option>
  </select>
  <div id="o1-1" class="opt-content">
 <strong>[玩家姓名]</strong> ：太好了！我还以为它完全坏了。  <br>

 <strong>白起：</strong> 里面的零件没问题就可以修复。  <br>

 <strong>白起：</strong> 不过就算零件坏了也可以换。  <br>

  </div>
  <div id="o1-2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：居然这么快就修好了？我记得昨天才拿给你……  <br>

 <strong>白起：</strong> 一个几分钟就能解决的小问题而已。  <br>

 <strong>白起：</strong> 翻翻说明书，不难。  <br>

  </div>
  <div id="o1-3" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：还好当时摔得不严重，还能救得回来……  <br>

 <strong>白起：</strong> 正常戴在手上也能脱落，看来是表带问题。  <br>

 <strong>白起：</strong> 明天我陪你去手表店配一个更合适一些的。  <br>

  </div>
</div>
<br>

<!-- 第2组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o2-1">不过，我今天才知道，白警官还会修手表呢\~</option>
    <option value="o2-2">所以具体为什么指针停了？是里面什么东西被我摔歪了吗？</option>
    <option value="o2-3">我听人说手表修过以后，要经常拿去店里检修才行。</option>
  </select>
  <div id="o2-1" class="opt-content">
 <strong>[玩家姓名]</strong> ：不过，我今天才知道，白警官还会修手表呢\~  <br>

 <strong>白起：</strong> 也是刚学会没多久。  <br>

 <strong>白起：</strong> 昨天临时去翻了些视频。  <br>

  </div>
  <div id="o2-2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：所以具体为什么指针停了？是里面什么东西被我摔歪了吗？  <br>

 <strong>白起：</strong> 轮系故障。  <br>

 <strong>白起：</strong> 轮齿之间卡住了。  <br>

  </div>
  <div id="o2-3" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：我听人说手表修过以后，要经常拿去店里检修才行。  <br>

 <strong>白起：</strong> 确实，检修可以延长手表的寿命。  <br>

 <strong>白起：</strong> 专业检修不太行，但日常小问题还是能帮你看看。  <br>

  </div>
</div>
<br>

<!-- 第3组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o3-1">昨天没看到白警官认真修手表的样子，觉得有点可惜！</option>
    <option value="o3-2">刚摔的时候我还挺愧疚的……毕竟你才刚送我没多久……</option>
    <option value="o3-3">这次要怎么答谢白警官呢\~\~</option>
  </select>
  <div id="o3-1" class="opt-content">
 <strong>[玩家姓名]</strong> ：昨天没看到白警官认真修手表的样子，觉得有点可惜！  <br>

 <strong>白起：</strong> 手表要经常检修，以后有很多机会。  <br>

 <strong>白起：</strong> 不过你在我身边，我肯定没办法专心。  <br>

 <strong>白起：</strong> 会一直忍不住看你。  <br>

  </div>
  <div id="o3-2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：刚摔的时候我还挺愧疚的……毕竟你才刚送我没多久……  <br>

 <strong>白起：</strong> 送你之前就该想到了，当时还换了防摔镜面。  <br>

 <strong>白起：</strong> 接下来防震、防水也一起加上。  <br>

 <strong>白起：</strong> 保证它可以和我一样，可以陪你很久很久。  <br>

  </div>
  <div id="o3-3" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：这次要怎么答谢白警官呢\~\~  <br>

 <strong>白起：</strong> 那戴上上次给你买的手链吧。  <br>

 <strong>白起：</strong> 想看它戴在你手上的样子。  <br>

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

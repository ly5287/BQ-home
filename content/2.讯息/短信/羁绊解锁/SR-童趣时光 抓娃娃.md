---
title: 抓娃娃
tags: "SR-童趣时光"
weight: 46
---

> 获取途径：SR-童趣时光三星 解锁


**[玩家姓名]** ：韩野朋友圈晒的一堆娃娃，是你抓的啊？！

**白起：** 嗯，跟他吃饭路过，随便抓了几个。


<br>

<!-- 第1组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o1-1">好厉害啊！游戏城的娃娃机超难抓。</option>
    <option value="o1-2">嫉妒使我丑陋</option>
    <option value="o1-3">学长很喜欢抓娃娃吗？</option>
  </select>
  <div id="o1-1" class="opt-content">
 <strong>[玩家姓名]</strong> ：好厉害啊！游戏城的娃娃机超难抓。  <br>

 <strong>白起：</strong> 很难吗？我觉得还好。  <br>

  </div>
  <div id="o1-2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：嫉妒使我丑陋  <br>

 <strong>白起：</strong> 为什么嫉妒？你也想要？  <br>

  </div>
  <div id="o1-3" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：学长很喜欢抓娃娃吗？  <br>

 <strong>白起：</strong> 没有特别的感觉。  <br>

  </div>
</div>
<br>

<!-- 第2组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o2-1">游戏城的娃娃机超难抓，我就没抓到过。</option>
    <option value="o2-2">这么多娃娃学长你全给韩野了？</option>
    <option value="o2-3">不过还是忍不住八卦下，韩野要这么多娃娃干什么？</option>
  </select>
  <div id="o2-1" class="opt-content">
 <strong>[玩家姓名]</strong> ：游戏城的娃娃机超难抓，我就没抓到过。  <br>

 <strong>白起：</strong> 原来这个很难吗？  <br>

 <strong>白起：</strong> 你如果想要，下次我帮你抓。  <br>

  </div>
  <div id="o2-2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：这么多娃娃学长你全给韩野了？  <br>

 <strong>白起：</strong> 嗯，你想要的话，下次我帮你抓。  <br>

  </div>
  <div id="o2-3" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：不过还是忍不住八卦下，韩野要这么多娃娃干什么？  <br>

 <strong>白起：</strong> 他的喜好我也是今天才知道。  <br>

 <strong>白起：</strong> 你想要的话，下次我帮你抓。  <br>

  </div>
</div>
<br>

<!-- 第3组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o3-1">不行，我受刺激了，从没抓到过的我一定要一雪前耻。</option>
    <option value="o3-2">好啊好啊，感觉到时候会让现场其他人羡慕嫉妒恨呢~</option>
    <option value="o3-3">不，我一定要自己抓！</option>
  </select>
  <div id="o3-1" class="opt-content">
 <strong>[玩家姓名]</strong> ：不行，我受刺激了，从没抓到过的我一定要一雪前耻。  <br>

 <strong>白起：</strong> 其实抓这个是有技巧的。  <br>

 <strong>白起：</strong> 到时候我教你，让你一雪前耻。  <br>

  </div>
  <div id="o3-2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：好啊好啊，感觉到时候会让现场其他人羡慕嫉妒恨呢~  <br>

 <strong>白起：</strong> 其实抓这个是有技巧的。  <br>

 <strong>白起：</strong> 到时候我再把技巧教给你。  <br>

  </div>
  <div id="o3-3" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：不，我一定要自己抓！  <br>

 <strong>白起：</strong> 其实抓这个是有技巧的。  <br>

 <strong>白起：</strong> 到时候我教你。  <br>

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

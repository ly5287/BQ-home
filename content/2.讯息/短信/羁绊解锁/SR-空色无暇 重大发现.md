---
title: 重大发现
tags: "SR-空色无暇"
weight: 18
---

> 获取途径：SR-空色无暇三星 解锁


**白起：** 你朋友圈说的“重大发现”是什么？


<br>

<!-- 第1组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o1-1">等一会儿你就知道了\~</option>
    <option value="o1-2">要猜猜看吗？</option>
    <option value="o1-3">是近几天，我发现的最棒的食谱！</option>
  </select>
  <div id="o1-1" class="opt-content">
 <strong>[玩家姓名]</strong> ：等一会儿你就知道了\~  <br>

 <strong>白起：</strong> 好。  <br>

 <strong>白起：</strong> 看你之前新买了烤箱。  <br>

 <strong>白起：</strong> 是和吃的有关系吗？  <br>

  </div>
  <div id="o1-2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：要猜猜看吗？  <br>

 <strong>白起：</strong> 嗯……你前几天说过新买了烤箱。  <br>

 <strong>白起：</strong> 最近的朋友圈也经常发做的菜  <br>

 <strong>白起：</strong> 是发现了新的食谱吗？  <br>

  </div>
  <div id="o1-3" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：是近几天，我发现的最棒的食谱！  <br>

 <strong>白起：</strong> 不难想到。  <br>

 <strong>白起：</strong> 你最近发了很多用烤箱做的菜。  <br>

 <strong>白起：</strong> 这个食谱也是吗？  <br>

  </div>
</div>
<br>

<!-- 第2组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o2-1">不愧是你，这都知道！我发现了超棒的烤小土豆的方法。</option>
    <option value="o2-2">既然想到了，就等着美食吧！是特别特别美味的烤小土豆。</option>
    <option value="o2-3">想想也确实挺明显的……不过这个烤小土豆绝对好吃！</option>
  </select>
  <div id="o2-1" class="opt-content">
 <strong>[玩家姓名]</strong> ：不愧是你，这都知道！我发现了超棒的烤小土豆的方法。  <br>

 <strong>白起：</strong> 小土豆？  <br>

 <strong>白起：</strong> 难怪刚刚收到了快送。  <br>

 <strong>白起：</strong> 我这就试试。  <br>

  </div>
  <div id="o2-2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：既然想到了，就等着美食吧！是特别特别美味的烤小土豆。  <br>

 <strong>白起：</strong> 我很期待。  <br>

 <strong>白起：</strong> 看来买烤箱的决定很正确。  <br>

  </div>
  <div id="o2-3" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：想想也确实挺明显的……不过这个烤小土豆绝对好吃！  <br>

 <strong>白起：</strong> 嗯。你做的肯定好吃。  <br>

 <strong>白起：</strong> 好像你最近很热衷自己做饭。  <br>

  </div>
</div>
<br>

<!-- 第3组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o3-1">嘿嘿，想让你吃上更多家常料理。</option>
    <option value="o3-2">毕竟上次一起逛家居城的时候买了烤箱\~忍不住就会多做点儿。</option>
    <option value="o3-3">那要不要我一会儿把食谱也分享给你？</option>
  </select>
  <div id="o3-1" class="opt-content">
 <strong>[玩家姓名]</strong> ：嘿嘿，想让你吃上更多家常料理。  <br>

 <strong>白起：</strong> 已经有很多了。  <br>

 <strong>白起：</strong> 上次你做的便当也很好吃。  <br>

 <strong>白起：</strong> 总觉得我已经很久没有动过那些泡面了。  <br>

  </div>
  <div id="o3-2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：毕竟上次一起逛家居城的时候买了烤箱\~忍不住就会多做点儿。  <br>

 <strong>白起：</strong> 一并买的装饰画我也挂起来了。  <br>

 <strong>白起：</strong> 氛围果然温馨了很多。  <br>

 <strong>白起：</strong> 这周不如再过来帮我看看，是不是还缺点什么。  <br>

  </div>
  <div id="o3-3" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：那要不要我一会儿把食谱也分享给你？  <br>

 <strong>白起：</strong> 不过我家里没有烤箱。  <br>

 <strong>白起：</strong> 可以下次再去你家一起做。  <br>

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

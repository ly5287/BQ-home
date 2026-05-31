---
title: 露一手
tags: "SR-漫漫食光"
weight: 27
---

> 获取途径：SR-漫漫食光三星 解锁


**白起：** 下班后有时间吗？

<!-- 第1组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o1">有时间！是要带我去什么地方吗？</option>
    <option value="o2">需要我帮忙打打下手吗？</option>
    <option value="o3">我一定会把所有菜吃得一干二净的~</option>
  </select>
  <div id="o1" class="opt-content">
 <strong>[玩家姓名]</strong> ：有时间！是要带我去什么地方吗？  <br>
   <br>
 <strong>白起：</strong> 之前你教我做菜的时候，不是说想验收成果吗？  <br>
   <br>
 <strong>白起：</strong> ……上次虽然有些失败，不过我回去之后又试着做了几次。  <br>
   <br>
 <strong>白起：</strong> 这次换你尝尝我的手艺。  <br>
   <br>
  </div>
  <div id="o2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：需要我帮忙打打下手吗？  <br>
   <br>
 <strong>白起：</strong> 今天你只要乖乖坐在餐桌边等着就好了。  <br>
   <br>
 <strong>白起：</strong> 什么都不用你忙，一切都包在我身上。  <br>
   <br>
  </div>
  <div id="o3" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：我一定会把所有菜吃得一干二净的~  <br>
   <br>
 <strong>白起：</strong> 好，那我就多做几道。  <br>
   <br>
 <strong>白起：</strong> 我送你回去，你可以放开肚皮好好吃。  <br>
   <br>
  </div>
</div>
<br>

<!-- 第2组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o4">什么事？</option>
    <option value="o5">差点忘了这茬……我去我去！</option>
    <option value="o6">听你这么一说，我就要把期待值提到最高了！</option>
  </select>
  <div id="o4" class="opt-content">
 <strong>[玩家姓名]</strong> ：什么事？  <br>
   <br>
 <strong>白起：</strong> 上次不是说想吃我做的饭吗？  <br>
   <br>
 <strong>白起：</strong> 回家抽时间练习了几次，想让[[玩家姓名]]老师验收下成果。  <br>
   <br>
  </div>
  <div id="o5" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：差点忘了这茬……我去我去！  <br>
   <br>
 <strong>白起：</strong> 学的都是几道家常菜，也不知道你爱不爱吃。  <br>
   <br>
 <strong>白起：</strong> 不过，填满肚子应该没问题。  <br>
   <br>
  </div>
  <div id="o6" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：听你这么一说，我就要把期待值提到最高了！  <br>
   <br>
 <strong>白起：</strong> 其实可以适当放低一些……我对自己的厨艺没那么有信心  <br>
   <br>
 <strong>白起：</strong> 今天到我家的时候，你可以把爱吃的菜都告诉我。  <br>
   <br>
 <strong>白起：</strong> 以后我慢慢学。  <br>
   <br>
  </div>
</div>
<br>

<!-- 第3组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o7">我可能会很晚下班……</option>
    <option value="o8">有关吃的事情一切都没问题~</option>
    <option value="o9">这次换我吹你，只要是你做的我都爱吃都喜欢。</option>
  </select>
  <div id="o7" class="opt-content">
 <strong>[玩家姓名]</strong> ：我可能会很晚下班……  <br>
   <br>
 <strong>白起：</strong> 那也没关系。  <br>
   <br>
 <strong>白起：</strong> 等你准备好了跟我说一声，我去接你。  <br>
   <br>
 <strong>白起：</strong> 之前不是一直想尝尝我的做菜手艺吗？今天让你验收下成果。  <br>
   <br>
  </div>
  <div id="o8" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：有关吃的事情一切都没问题~  <br>
   <br>
 <strong>白起：</strong> 有什么特别想吃的吗？  <br>
   <br>
 <strong>白起：</strong> 等会接你的时候，我顺路去趟超市。  <br>
   <br>
  </div>
  <div id="o9" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：这次换我吹你，只要是你做的我都爱吃都喜欢。  <br>
   <br>
 <strong>白起：</strong> 没事，我不介意你的批评。  <br>
   <br>
 <strong>白起：</strong> 在做饭这件事上你比我擅长。  <br>
   <br>
 <strong>白起：</strong> 时间是不是差不多了？我马上就到。  <br>
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

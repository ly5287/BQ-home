---
title: 甜蜜晚餐
tags: "SR-星空之吻"
weight: 56
---

> 获取途径：SR-星空之吻进化 解锁


**白起：** 谢谢你的晚餐，今天的你很美。


<br>

<!-- 第1组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o1-1">哈哈，我哪天不美？</option>
    <option value="o1-2">谢谢夸奖。</option>
    <option value="o1-3">穿了西装的你，今天也很不一样。</option>
  </select>
  <div id="o1-1" class="opt-content">
 <strong>[玩家姓名]</strong> ：哈哈，我哪天不美？  <br>

 <strong>白起：</strong> 都很美。  <br>

 <strong>白起：</strong> 不过天气冷了，还是多穿件外套。  <br>

  </div>
  <div id="o1-2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：谢谢夸奖。  <br>

 <strong>白起：</strong> 不过天气冷了，还是多穿件外套。  <br>

  </div>
  <div id="o1-3" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：穿了西装的你，今天也很不一样。  <br>

 <strong>白起：</strong> 还不是为了配合你。  <br>

 <strong>白起：</strong> 不过天气冷了，还是多穿件外套。  <br>

  </div>
</div>
<br>

<!-- 第2组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o2-1">恩恩，我下次会注意。</option>
    <option value="o2-2">今天深深地体会到美丽冻人的意思了。</option>
    <option value="o2-3">你的外套很温暖，我一点不觉得冷。</option>
  </select>
  <div id="o2-1" class="opt-content">
 <strong>[玩家姓名]</strong> ：恩恩，我下次会注意。  <br>

 <strong>白起：</strong> 你怎么样都好，身体最重要。  <br>

  </div>
  <div id="o2-2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：今天深深地体会到美丽冻人的意思了。  <br>

 <strong>白起：</strong> 你怎么样都好，身体最重要。  <br>

  </div>
  <div id="o2-3" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：你的外套很温暖，我一点不觉得冷。  <br>

 <strong>白起：</strong> 我不在的时候，你还是要穿外套，身体最重要。  <br>

  </div>
</div>
<br>

<!-- 第3组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o3-1">很久没有散步了，今天饭后跟你一起散步，很愉快。</option>
    <option value="o3-2">今天跟你说了很多话，好开心啊</option>
    <option value="o3-3">嗯，我知道啦，放心吧。</option>
  </select>
  <div id="o3-1" class="opt-content">
 <strong>[玩家姓名]</strong> ：很久没有散步了，今天饭后跟你一起散步，很愉快。  <br>

 <strong>白起：</strong> 我也是。跟你在一起，我的话也变多了。  <br>

 <strong>白起：</strong> 时间不早了，你明天还要录影。  <br>

 <strong>白起：</strong> 早点休息吧，我们明天再聊。  <br>

  </div>
  <div id="o3-2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：今天跟你说了很多话，好开心啊  <br>

 <strong>白起：</strong> 跟你在一起，我的话也变多了。  <br>

 <strong>白起：</strong> 时间不早了，你明天还要录影。  <br>

 <strong>白起：</strong> 早点休息，晚安。  <br>

  </div>
  <div id="o3-3" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：嗯，我知道啦，放心吧。  <br>

 <strong>白起：</strong> 跟你在一起，我的话也变多了。  <br>

 <strong>白起：</strong> 时间不早了，你明天还要录影。  <br>

 <strong>白起：</strong> 早点休息，晚安。  <br>

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

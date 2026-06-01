---
title: 情人节礼物
tags: "SR-只属于你"
weight: 43
---

> 获取途径：SR-只属于你拿卡 解锁


**[玩家姓名]** ：你为什么突然想到要送我花？

**白起：** 没什么特别理由。

**白起：** 这个日子不就应该给女孩送花吗？


<br>

<!-- 第1组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o1-1">如果今天和你出去的不是我，你也会给别的女孩送花吗？</option>
    <option value="o1-2">谢谢你送我的花，收到的时候还吓了一跳了。</option>
    <option value="o1-3">我已经把花插到花瓶里了，很香哦。</option>
  </select>
  <div id="o1-1" class="opt-content">
 <strong>[玩家姓名]</strong> ：如果今天和你出去的不是我，你也会给别的女孩送花吗？  <br>

 <strong>白起：</strong> 不会。  <br>

 <strong>白起：</strong> 没有如果也没有别人，只有你。  <br>

  </div>
  <div id="o1-2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：谢谢你送我的花，收到的时候还吓了一跳了。  <br>

 <strong>白起：</strong> 不喜欢吗？  <br>

 <strong>白起：</strong> 我查了很久，才找到这种你可能会喜欢的特别的花。  <br>

  </div>
  <div id="o1-3" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：我已经把花插到花瓶里了，很香哦。  <br>

 <strong>白起：</strong> 喜欢就好。  <br>

 <strong>白起：</strong> 我没养过植物，就交给你打理了。  <br>

  </div>
</div>
<br>

<!-- 第2组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o2-1">你真是个温柔的人，身边的人很幸运呢。</option>
    <option value="o2-2">放心吧，我会好好照料它的，毕竟是你送我的东西。</option>
    <option value="o2-3">收到花的女孩很幸运也很幸福喔。</option>
  </select>
  <div id="o2-1" class="opt-content">
 <strong>[玩家姓名]</strong> ：你真是个温柔的人，身边的人很幸运呢。  <br>

 <strong>白起：</strong> 你已经说过很多遍了。  <br>

 <strong>白起：</strong> 收到花的女孩呢？幸运吗？  <br>

  </div>
  <div id="o2-2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：放心吧，我会好好照料它的，毕竟是你送我的东西。  <br>

 <strong>白起：</strong> 咳，你喜欢就好。  <br>

 <strong>白起：</strong> 我也会好好爱惜你送我的小狼玩偶。  <br>

  </div>
  <div id="o2-3" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：收到花的女孩很幸运也很幸福喔。  <br>

 <strong>白起：</strong> 我能让你一直那么幸福，只要你相信我。  <br>

 <strong>白起：</strong> 早点睡吧，情人节快乐。  <br>

  </div>
</div>
<br>

<!-- 第3组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o3-1">我在你的心里是特别的吗？</option>
    <option value="o3-2">把它交给你我就放心啦。</option>
  </select>
  <div id="o3-1" class="opt-content">
 <strong>[玩家姓名]</strong> ：我在你的心里是特别的吗？  <br>

 <strong>白起：</strong> 不只是特别，还是唯一的。  <br>

 <strong>白起：</strong> 忘了一句话，情人节快乐。  <br>

  </div>
  <div id="o3-2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：把它交给你我就放心啦。  <br>

 <strong>白起：</strong> 那你什么时候把自己交给我…照顾。  <br>

 <strong>白起：</strong> 很晚了，玩了一天早点休息吧。  <br>

 <strong>白起：</strong> 还有，情人节快乐。  <br>

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

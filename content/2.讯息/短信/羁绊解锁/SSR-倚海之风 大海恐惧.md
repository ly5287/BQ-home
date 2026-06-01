---
title: 大海恐惧
tags: "SSR-倚海之风"
weight: 31
---

> 获取途径：SSR-倚海之风四星 解锁

**白起：** 明天还要继续学冲浪吗？  


<br>

<!-- 第1组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o1-1">这么晚了你还没睡呢？</option>
    <option value="o1-2">你这是又去冲浪了吗？</option>
    <option value="o1-3">诶你也睡不着吗？</option>
  </select>
  <div id="o1-1" class="opt-content">
 <strong>[玩家姓名]</strong> ：这么晚了你还没睡呢？  <br>

 <strong>白起：</strong> 嗯，马上要休息了。  <br>

 <strong>白起：</strong> 不过刚关灯就想起了你今天冲浪的样子。  <br>

  </div>
  <div id="o1-2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：你这是又去冲浪了吗？  <br>

 <strong>白起：</strong> 没有，我马上要休息了。  <br>

 <strong>白起：</strong> 不过刚关灯就想起了你今天冲浪的样子。  <br>

  </div>
  <div id="o1-3" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：诶你也睡不着吗？  <br>

 <strong>白起：</strong>  嗯，所以想起了你今天冲浪的样子。  <br>

  </div>
</div>
<br>

<!-- 第2组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o2-1">啊你快忘了吧，超级丢脸……</option>
    <option value="o2-2">咦？什么样子啊……</option>
    <option value="o2-3">啊…… 你是不是想起我被吓傻的样子了……</option>
  </select>
  <div id="o2-1" class="opt-content">
 <strong>[玩家姓名]</strong> ：啊你快忘了吧，超级丢脸……  <br>

 <strong>白起：</strong> 没有丢脸。  <br>

 <strong>白起：</strong> 我觉得很可爱。  <br>

 <strong>白起：</strong> 对了，你还没回答我明天要不要继续。  <br>

  </div>
  <div id="o2-2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：咦？什么样子啊……  <br>

 <strong>白起：</strong> 你被巨浪吓到的样子。  <br>

 <strong>白起：</strong> 很可爱。  <br>

 <strong>白起：</strong> 对了，你还没回答我明天要不要继续。  <br>

  </div>
  <div id="o2-3" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：啊…… 你是不是想起我被吓傻的样子了……  <br>

 <strong>白起：</strong> …… 没有傻。  <br>

 <strong>白起：</strong> 我觉得很可爱。  <br>

 <strong>白起：</strong> 对了，你还没回答我明天要不要继续。  <br>

  </div>
</div>
<br>

<!-- 第3组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o3-1">不要了吧…… 不想去了，我觉得我现在对海浪有恐惧症。</option>
    <option value="o3-2">我再思考一下下…… 今天确实被吓到了，但是又还是想去……</option>
    <option value="o3-3">好啊！不过这次你一定要抱紧我，千万不能松开！</option>
  </select>
  <div id="o3-1" class="opt-content">
 <strong>[玩家姓名]</strong> ：不要了吧…… 不想去了，我觉得我现在对海浪有恐惧症。  <br>

 <strong>白起：</strong> 你不想去我们就不去。  <br>

 <strong>白起：</strong> 但那只是浪而已，不要害怕。  <br>

 <strong>白起：</strong> 不管发生什么，我都会保护你。  <br>

  </div>
  <div id="o3-2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：我再思考一下下…… 今天确实被吓到了，但是又还是想去……  <br>

 <strong>白起：</strong> …… 害怕吗？  <br>

 <strong>白起：</strong> 是我不好，没有保护好你。  <br>

 <strong>白起：</strong> 相信我，这种事不会再发生了。  <br>

  </div>
  <div id="o3-3" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：好啊！不过这次你一定要抱紧我，千万不能松开！  <br>

 <strong>白起：</strong> 好。不过这样你还怎么学冲浪？  <br>

 <strong>白起：</strong> 学习的时候松开我也没关系。  <br>

 <strong>白起：</strong> 以后我都会在你害怕前就抱紧你。  <br>

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

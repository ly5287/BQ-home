---
title: 植树
tags: "SR-逆光而行"
weight: 29
---

> 获取途径：SR-逆光而行三星 解锁


**白起：** 你还在外面？


<br>

<!-- 第1组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o1-1">诶你怎么知道！？我正在参与一个很重要的活动呢</option>
    <option value="o1-2">嗯！我在竞走呢，最近不是有环保活动嘛，累积运动步数可以亲手种树！</option>
    <option value="o1-3">嗯！我在参加前两天跟你说的那个活动。</option>
  </select>
  <div id="o1-1" class="opt-content">
 <strong>[玩家姓名]</strong> ：诶你怎么知道！？我正在参与一个很重要的活动呢  <br>

 <strong>白起：</strong> ……我怎么知道的不重要  <br>

 <strong>白起：</strong> 是那个捐赠步数就可以亲手植树的活动？  <br>

  </div>
  <div id="o1-2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：嗯！我在竞走呢，最近不是有环保活动嘛，累积运动步数可以亲手种树！  <br>

 <strong>白起：</strong> 是你之前说过的那个活动？  <br>

  </div>
  <div id="o1-3" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：嗯！我在参加前两天跟你说的那个活动。  <br>

 <strong>白起：</strong> 是那个捐赠步数就可以亲手植树的活动？  <br>

  </div>
</div>
<br>

<!-- 第2组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o2-1">嗯嗯！我的步数还差一点就够了！</option>
    <option value="o2-2">对呀，还有两天就截止了，我还一棵树都没养成QAQ！</option>
    <option value="o2-3">咦，你还记得呢！天知道我走了两周了还是没种出一棵树QAQ……</option>
  </select>
  <div id="o2-1" class="opt-content">
 <strong>[玩家姓名]</strong> ：嗯嗯！我的步数还差一点就够了！  <br>

 <strong>白起：</strong> 还差多少？  <br>

 <strong>白起：</strong> 我来帮你  <br>

  </div>
  <div id="o2-2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：对呀，还有两天就截止了，我还一棵树都没养成QAQ！  <br>

 <strong>白起：</strong> 不要着急，我来帮你  <br>

  </div>
  <div id="o2-3" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：咦，你还记得呢！天知道我走了两周了还是没种出一棵树QAQ……  <br>

 <strong>白起：</strong> 你说过的我都记得  <br>

 <strong>白起：</strong> 现在很晚了，我来帮你种树  <br>

  </div>
</div>
<br>

<!-- 第3组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o3-1">好啊，那我可要开始想想这棵我们一起种下的小树苗叫什么名字比较好了！</option>
    <option value="o3-2">可是你明早还要出任务呢，还是好好休息，等我的好消息吧白警官！</option>
    <option value="o3-3">不用啦，我还从没有独自亲手种下一棵树呢，趁着这次的机会一定要成功！</option>
  </select>
  <div id="o3-1" class="opt-content">
 <strong>[玩家姓名]</strong> ：好啊，那我可要开始想想这棵我们一起种下的小树苗叫什么名字比较好了！  <br>

 <strong>白起：</strong> 都好。  <br>

 <strong>白起：</strong> ……不过如果可以，就叫[玩家姓名]吧  <br>

 <strong>白起：</strong> 和你一样珍贵又美好。  <br>

  </div>
  <div id="o3-2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：可是你明早还要出任务呢，还是好好休息，等我的好消息吧白警官！  <br>

 <strong>白起：</strong> 没关系，这个不用担心。  <br>

 <strong>白起：</strong> 等我，我来找你了。  <br>

  </div>
  <div id="o3-3" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：不用啦，我还从没有独自亲手种下一棵树呢，趁着这次的机会一定要成功！  <br>

 <strong>白起：</strong> 亲自种下一棵树？其实这件事你七年前就做过了。  <br>

 <strong>白起：</strong> ……那棵树现在成长得还不错。  <br>

 <strong>白起：</strong> 有了信仰，无问西东。  <br>

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

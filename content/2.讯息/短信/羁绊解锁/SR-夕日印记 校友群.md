---  
title: 校友群  
tags: "SR-夕日印记"  
weight: 2019112201  
date: 2019-11-22
---  

> 获取途径：SR-夕日印记三星 解锁  


**白起：** 刚才的那个群是…  


<br>  

<!-- 第1组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o1-1">看群名猜不出来吧哈哈，不过我还是希望你可以猜一下~</option>  
    <option value="o1-2">是恋语高中的校友群哦！</option>  
    <option value="o1-3">啊啊我拉错人了！！不过好像也没关系…</option>  
  </select>  
  <div id="o1-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：看群名猜不出来吧哈哈，不过我还是希望你可以猜一下~  <br>  

 <strong>白起：</strong> 我看了你在群里的昵称。  <br>  

 <strong>白起：</strong> 是恋语高中的校友群吧？  <br>  

  </div>  
  <div id="o1-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：是恋语高中的校友群哦！  <br>  

 <strong>白起：</strong> 嗯，我看出来了。  <br>  

 <strong>白起：</strong> 怎么还有这种群？  <br>  

  </div>  
  <div id="o1-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：啊啊我拉错人了！！不过好像也没关系…  <br>  

 <strong>白起：</strong> 需要的话我可以退掉。  <br>  

 <strong>白起：</strong> 我看了你在群里的昵称，这是恋语高中的校友群？  <br>  

  </div>  
</div>  
<br>  

<!-- 第2组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o2-1">其实我是刚刚才被同学拉进去的，只知道这是校友群，别的就不清楚了。</option>  
    <option value="o2-2">其实平时大家也不怎么说话，只是这几天聊教学楼整修的事才比较活跃。</option>  
    <option value="o2-3">其实群里的大家会定期组织活动来着，以后我们可以一起参加！</option>  
  </select>  
  <div id="o2-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：其实我是刚刚才被同学拉进去的，只知道这是校友群，别的就不清楚了。  <br>  

 <strong>白起：</strong> 要加入他们的话题吗？  <br>  

 <strong>白起：</strong> 好像是在说聚会的事。  <br>  

  </div>  
  <div id="o2-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：其实平时大家也不怎么说话，只是这几天聊教学楼整修的事才比较活跃。  <br>  

 <strong>白起：</strong> 要加入他们的话题吗？  <br>  

 <strong>白起：</strong> 好像在说聚会的事情。  <br>  

  </div>  
  <div id="o2-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：其实群里的大家会定期组织活动来着，以后我们可以一起参加！  <br>  

 <strong>白起：</strong> 好像现在就在说聚会的事情。  <br>  

 <strong>白起：</strong> 要看看吗？  <br>  

  </div>  
</div>  
<br>  

<!-- 第3组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o3-1">诶？我看看哦…还真是，你想去吗？</option>  
    <option value="o3-2">我发现他们真的好能聊，怎么又99+了……</option>  
    <option value="o3-3">实不相瞒，因为他们话太多，我已经屏蔽这个群了…</option>  
  </select>  
  <div id="o3-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：诶？我看看哦…还真是，你想去吗？  <br>  

 <strong>白起：</strong> 除了你，我没什么认识的人，去不去无所谓。  <br>  

 <strong>白起：</strong> 不过如果你想去的话，我陪你。  <br>  

  </div>  
  <div id="o3-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：我发现他们真的好能聊，怎么又99+了……  <br>  

 <strong>白起：</strong> 不用仔细看，大多数都是表情。  <br>  

 <strong>白起：</strong> 他们想在教学楼整修结束后组织聚会。  <br>  

 <strong>白起：</strong> 如果你想去的话，我陪你。  <br>  

  </div>  
  <div id="o3-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：实不相瞒，因为他们话太多，我已经屏蔽这个群了…  <br>  

 <strong>白起：</strong> 我帮你看一下。  <br>  

 <strong>白起：</strong> 他们说，想在教学楼整修结束后组织聚会。  <br>  

 <strong>白起：</strong> 要去吗？如果需要的话，我陪你。  <br>  

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

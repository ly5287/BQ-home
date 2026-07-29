---  
title: 心理测试  
tags: "SR-诚意教学"  
weight: 1151  
date: 2017-12-20
---  

> 获取途径：SR-诚意教学三星 解锁  


**[玩家姓名]** ：如果你走进一片森林，会遇到很多动物，你最想先遇到的是什么？  

**白起：** 为什么问这个？  


<!-- 第1组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o1-1">我已经选过了，很想知道你的答案。</option>  
    <option value="o1-2">这是道心理测试题！</option>  
    <option value="o1-3">我选了老虎，上面说我有冒险精神，喜欢挑战，你觉得准吗？</option>  
  </select>  
  <div id="o1-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：我已经选过了，很想知道你的答案。  <br>  

 <strong>白起：</strong> 有选项吗？  <br>  

  </div>  
  <div id="o1-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：这是道心理测试题！  <br>  

 <strong>白起：</strong> 哦，以前没有做过这种题。有选项吗？  <br>  

  </div>  
  <div id="o1-3" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：我选了老虎，上面说我有冒险精神，喜欢挑战，你觉得准吗？  <br>  

 <strong>白起：</strong> 挺准的，不过在我眼里，你更多的是勇敢和可爱。  <br>  

  </div>  
</div>  
<br>  

<!-- 第2组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o2-1">没有选项诶……打开脑洞自由发挥吧。</option>  
    <option value="o2-2">有选项哦……兔子、鹿、猪、老虎、狼。</option>  
  </select>  
  <div id="o2-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：没有选项诶……打开脑洞自由发挥吧。  <br>  

 <strong>白起：</strong> 让我想想，如果随便选的话……我选狼。  <br>  

  </div>  
  <div id="o2-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：有选项哦……兔子、鹿、猪、老虎、狼。  <br>  

 <strong>白起：</strong> 选狼。  <br>  

  </div>  
</div>  
<br>  

<!-- 第3组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o3-1">哇，好准啊……这上面说你是一个信念很坚定，喜欢拼搏，而且很执着的人。</option>  
    <option value="o3-2">诶？没想到你会选这个。</option>  
  </select>  
  <div id="o3-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：哇，好准啊……这上面说你是一个信念很坚定，喜欢拼搏，而且很执着的人。  <br>  

 <strong>白起：</strong> 你也是这么觉得的？你选了什么？  <br>  

  </div>  
  <div id="o3-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：诶？没想到你会选这个。  <br>  

 <strong>白起：</strong> 这个怎么了？你选了什么？  <br>  

  </div>  
</div>  
<br>  

<!-- 第4组 -->  
<div class="opt-group">  
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">  
    <option value="o4-1">我选了兔子，上面说我是个温和善良的人，哈哈。</option>  
    <option value="o4-2">我选了鹿，上面说我充满爱心，但是有时候会有些敏感。</option>  
  </select>  
  <div id="o4-1" class="opt-content">  
 <strong>[玩家姓名]</strong> ：我选了兔子，上面说我是个温和善良的人，哈哈。  <br>  

 <strong>白起：</strong> 挺准的，不过在我眼里，你更多的是勇敢和可爱。  <br>  

  </div>  
  <div id="o4-2" class="opt-content" style="display:none;">  
 <strong>[玩家姓名]</strong> ：我选了鹿，上面说我充满爱心，但是有时候会有些敏感。  <br>  

 <strong>白起：</strong> 挺准的，不过在我眼里，你更多的是勇敢和善良。  <br>  

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

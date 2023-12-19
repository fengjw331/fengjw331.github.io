# vue3文档 / Vue3 document 
## 一些特别的细节 / some special details
 + 当 isButtonDisabled 为真值或一个空字符串 (即 <button disabled="">) 时，元素会包含这个 disabled attribute。而当其为其他假值时 attribute 将被忽略。
  ``` js

    <button :disabled="isButtonDisabled">Button</button>

  ```
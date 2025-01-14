---
group: 组件
demo:
  cols: 2
---

# Input 输入框 <Badge>表单组件</Badge>

```
<b-input> | Input
```

最基本的接收用户输入的组件,通常被用在表单中,当然也可以单独使用.

## 代码演示

<code src="./demos/basicUsage.tsx"></code>
<code src="./demos/size.tsx"></code>
<code src="./demos/formTest.tsx"></code>

## 属性 - Attributes & Properties

| 属性  | 说明   | 类型      | 默认值 |
| ----- | ------ | --------- | ------ |
| prop1 | 属性 1 | `string`  | ''     |
| prop2 | 属性 2 | `boolean` | false  |

## 方法 - Methods

| 方法      | 说明           | 参数 |
| --------- | -------------- | ---- |
| method1() | 供调用的方法 1 | -    |
| method2() | 供调用的方法 2 | -    |

## 事件 - Events

| 事件   | 说明           | Event Detail |
| ------ | -------------- | ------------ |
| 事件 1 | 开始展开时触发 | -            |
| 事件 2 | 开始收起时触发 | -            |

## 插槽 - Slots

| 插槽      | 说明           |
| --------- | -------------- |
| (default) | 默认插槽的说明 |
| title     | 标题区域       |

## CSS Parts

| Part   | 说明               |
| ------ | ------------------ |
| base   | 包裹组件的容器     |
| header | 组件的 header 区域 |

## 样式变量

| 变量                         | 说明               | 默认值 |
| ---------------------------- | ------------------ | ------ |
| --banana-xxx-title-padding   | 标题的 padding     | 16px   |
| --banana-xxx-content-padding | 展开区域的 padding | 16px   |

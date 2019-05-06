(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{664:function(n,e){n.exports='# Collapse 折叠面板\n\n\n\n## 基本用法\n```jsx\nimport { Collapse } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Collapse>\n          <Collapse.Item itemKey="1" title="50元套餐">\n            <div>我是50元套餐内容</div>\n            <div>我是50元套餐内容</div>\n            <div>我是50元套餐内容</div>\n            <div>我是50元套餐内容</div>\n          </Collapse.Item>\n          <Collapse.Item itemKey={2} title="100元套餐">\n            <div>我是100元套餐内容</div>\n            <div>我是100元套餐内容</div>\n            <div>我是100元套餐内容</div>\n            <div>我是100元套餐内容</div>\n          </Collapse.Item>\n          <Collapse.Item itemKey="3" title="200元套餐">\n            <div>我是200元套餐内容</div>\n            <div>我是200元套餐内容</div>\n            <div>我是200元套餐内容</div>\n            <div>我是200元套餐内容</div>\n          </Collapse.Item>\n        </Collapse>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 手风琴模式\n```jsx\nimport { Collapse } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Collapse animated>\n          <Collapse.Item itemKey="test1" title="50元套餐">\n            <div>我是50元套餐内容</div>\n            <div>我是50元套餐内容</div>\n            <div>我是50元套餐内容</div>\n            <div>我是50元套餐内容</div>\n          </Collapse.Item>\n          <Collapse.Item itemKey="test2" title="100元套餐">\n            <div>我是100元套餐内容</div>\n            <div>我是100元套餐内容</div>\n            <div>我是100元套餐内容</div>\n            <div>我是100元套餐内容</div>\n          </Collapse.Item>\n          <Collapse.Item itemKey="test3" title="200元套餐">\n            <div>我是200元套餐内容</div>\n            <div>我是200元套餐内容</div>\n            <div>我是200元套餐内容</div>\n            <div>我是200元套餐内容</div>\n          </Collapse.Item>\n        </Collapse>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 默认展开项\n```jsx\nimport { Collapse } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Collapse defaultActiveKey={[\'test1\', \'test2\']} animated>\n          <Collapse.Item itemKey="test1" title="50元套餐">\n            <div>我是50元套餐内容</div>\n            <div>我是50元套餐内容</div>\n            <div>我是50元套餐内容</div>\n            <div>我是50元套餐内容</div>\n          </Collapse.Item>\n          <Collapse.Item itemKey="test2" title="100元套餐">\n            <div>我是100元套餐内容</div>\n            <div>我是100元套餐内容</div>\n            <div>我是100元套餐内容</div>\n            <div>我是100元套餐内容</div>\n          </Collapse.Item>\n          <Collapse.Item itemKey="test3" title="200元套餐">\n            <div>我是200元套餐内容</div>\n            <div>我是200元套餐内容</div>\n            <div>我是200元套餐内容</div>\n            <div>我是200元套餐内容</div>\n          </Collapse.Item>\n        </Collapse>\n      </div>\n    )\n  }\n}\n\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 允许展开多项\n```jsx\nimport { Collapse } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Collapse animated multiple defaultActiveKey={[\'test1\', \'test3\']}>\n          <Collapse.Item itemKey="test1" title="50元套餐">\n            <div>我是50元套餐内容</div>\n            <div>我是50元套餐内容</div>\n            <div>我是50元套餐内容</div>\n            <div>我是50元套餐内容</div>\n          </Collapse.Item>\n          <Collapse.Item itemKey="test2" title="100元套餐">\n            <div>我是100元套餐内容</div>\n            <div>我是100元套餐内容</div>\n            <div>我是100元套餐内容</div>\n            <div>我是100元套餐内容</div>\n          </Collapse.Item>\n          <Collapse.Item itemKey="test3" title="200元套餐">\n            <div>我是200元套餐内容</div>\n            <div>我是200元套餐内容</div>\n            <div>我是200元套餐内容</div>\n            <div>我是200元套餐内容</div>\n          </Collapse.Item>\n        </Collapse>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 禁用子项\n```jsx\nimport { Collapse } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Collapse \n          multiple\n          activeKey={[\'test2\']}\n          onChange={key => console.log(key)}\n        >\n          <Collapse.Item itemKey="test1" title="50元套餐">\n            <div>我是50元套餐内容</div>\n            <div>我是50元套餐内容</div>\n            <div>我是50元套餐内容</div>\n            <div>我是50元套餐内容</div>\n          </Collapse.Item>\n          <Collapse.Item itemKey="test2" title="100元套餐" disabled>\n            <div>我是100元套餐内容</div>\n            <div>我是100元套餐内容</div>\n            <div>我是100元套餐内容</div>\n            <div>我是100元套餐内容</div>\n          </Collapse.Item>\n          <Collapse.Item itemKey="test3" title="200元套餐" disabled>\n            <div>我是200元套餐内容</div>\n            <div>我是200元套餐内容</div>\n            <div>我是200元套餐内容</div>\n            <div>我是200元套餐内容</div>\n          </Collapse.Item>\n        </Collapse>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## API\n\n## Collapse\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| multiple | boolean | false | 是否可以同时展开多项 |\n| animated | boolean | false | 是否添加展开动画 |\n| activeKey | string \\| number \\| string[] \\| number[] | [] | 动态更新展开项的索引数组或字符串或数字 |\n| defaultActiveKey | string \\| number \\| string[] \\| number[] | [] | 初始化默认展开项的索引数组或字符串或数字 |\n| onChange | (activeKey?: string \\| number) => void | - | 点击某一项的回调函数 |\n\n## Collapse.Item\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| title | ReactNode | - | 每一项的名称 |\n| itemKey | string \\| number | - | 对应activeKey |\n| disabled | boolean | false | 是否禁用 |\n| onItemChange | (itemKey?: string \\| number) => void | - | 点击某一项的回调函数 |\n'}}]);
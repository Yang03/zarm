(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{645:function(n,o){n.exports='# Radio 单选框\n\n\n\n## 基本用法\n```jsx\nimport { Radio, Cell } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell><Radio>普通</Radio></Cell>\n        <Cell><Radio defaultChecked>默认选中</Radio></Cell>\n        <Cell><Radio disabled>禁用</Radio></Cell>\n        <Cell><Radio defaultChecked disabled>选中且禁用</Radio></Cell>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 按钮样式\n```jsx\nimport { Radio, Cell } from \'zarm\';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      radio: \'0\',\n    };\n  }\n\n  render() {\n    return (\n      <div>\n        <Cell\n          description={\n            <Radio.Group\n              type="button"\n              value={this.state.radio}\n              onChange={value => console.log(`radio to ${value}`)}\n            >\n              <Radio value="0">选项一</Radio>\n              <Radio value="1">选项二</Radio>\n              <Radio value="2">选项三</Radio>\n            </Radio.Group>\n          }\n        >\n          普通\n        </Cell>\n\n        <Cell\n          description={\n            <Radio.Group type="button" defaultValue="1">\n              <Radio value="0">选项一</Radio>\n              <Radio value="1">选项二</Radio>\n              <Radio value="2">选项三</Radio>\n            </Radio.Group>\n          }\n        >\n          指定默认值\n        </Cell>\n\n        <Cell\n          description={\n            <Radio.Group type="button">\n              <Radio value="0">选项一</Radio>\n              <Radio value="1">选项二</Radio>\n              <Radio value="2" disabled>选项三</Radio>\n            </Radio.Group>\n          }\n        >\n          禁用指定项\n        </Cell>\n\n        <Cell\n          description={\n            <Radio.Group type="button" shape="rect">\n              <Radio value="0">选项一</Radio>\n              <Radio value="1">选项二</Radio>\n              <Radio value="2">选项三</Radio>\n            </Radio.Group>\n          }\n        >\n          直角\n        </Cell>\n\n        <Cell\n          description={\n            <Radio.Group type="button" shape="round">\n              <Radio value="0">选项一</Radio>\n              <Radio value="1">选项二</Radio>\n              <Radio value="2">选项三</Radio>\n            </Radio.Group>\n          }\n        >\n          椭圆角\n        </Cell>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 块级样式\n```jsx\nimport { Radio } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div className="block-box">\n        <Radio.Group block compact type="button" shape="radius">\n          <Radio value="0">选项一</Radio>\n          <Radio value="1">选项二</Radio>\n          <Radio value="2">选项三</Radio>\n        </Radio.Group>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 列表样式\n```jsx\nimport { Radio } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Radio.Group type="cell">\n          <Radio value="0">选项一</Radio>\n          <Radio value="1">选项二</Radio>\n          <Radio value="2" disabled>选项三（禁止选择）</Radio>\n        </Radio.Group>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 列表样式禁用状态\n```jsx\nimport { Radio } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Radio.Group disabled type="cell">\n          <Radio value="0">选项一</Radio>\n          <Radio value="1">选项二</Radio>\n          <Radio value="2">选项三</Radio>\n        </Radio.Group>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## API\n\n### Radio\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| type | string | - | 显示类型，可选值 `button`, `cell` |\n| value | string \\| number | - | 值 |\n| checked | boolean | - | 当前是否选中 |\n| shape | string | \'radius\' | 形状，可选值 `rect`, `radius`, `round` | \n| defaultChecked | boolean | - | 初始是否选中 |\n| disabled | boolean | false | 是否禁用 |\n| onChange | (checked?: boolean) => void | - | 值变化时触发的回调函数 |\n\n### Radio.Group\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| type | string | - | 显示类型，可选值 `button`, `cell` |\n| value | string \\| number | - | 选中值 |\n| defaultValue | string \\| number | - | 初始选中值 |\n| shape | string | \'radius\' | 形状，可选值 `rect`, `radius`, `round` | \n| block | boolean | false | 是否为块级元素 |\n| disabled | boolean | false | 是否禁用 |\n| compact | boolean | false | 是否启用紧凑模式 |\n| onChange | (value?: string \\| number) => void | - | 值变化时触发的回调函数 |\n'}}]);
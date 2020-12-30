# Dialog

## Usage

```html
<mx-dialog :visible.sync="dialogVisible" opened="onPened">
    <slot></slot>
</mx-dialog>
```

## API

### Props

| Attribute | Description                        | Type    | Default |
| --------- | ---------------------------------- | ------- | ------- |
| visible   | 是否显示 Dialog，支持 .sync 修饰符 | boolean | false   |
| width     | Dialog 的宽度                      | string  | 80%     |
| height    | Dialog 的高度                      | string  | 20%     |

### Events

| Event  | Description                 | Arguments |
| ------ | --------------------------- | --------- |
| opened | Dialog 打开动画结束时的回调 |           |
| closed | Dialog 关闭的回调           |           |


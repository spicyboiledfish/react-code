# react-code
react源码

##### 参阅地址: https://react.jokcy.me/book/api/react-element.html

- 
  ### 写在前面:
  ##### 1. 重要package:
  
  react, react-dom, event, scheduler, suspense, 
  
  ##### 2. Fiber
  
  Fiber从根本上解决了JS单线程运行如果计算量太大的话导致动画卡帧和交互卡顿的问题
  
  ##### 3. Babel JSX=>JS
  
  Babel会把JSX转化成React.createElement(). 其中第一个参数是字符串或者是大写的变量,第二个参数是由props传递的所有的属性的一个个键值对的对象, 第三个参数是子级.如子级有兄弟节点的话,也会依次转化成第四个,第五个参数,依次类推. 而第一个参数是否为字符串的关键点就在于标签时用大写还是小写.小写代表是原生的html标签(dom节点),大写是代表一个Component (function Component或者是Class Component)
  
  ##### 4. Reserved props 内嵌的props
  
  key, ref, __self, __source
  
  ##### 5. defaultProps
  
  判断依据是这个属性的值是否是undefined

- ### ReactElement和CreateElement的实现过程

```javascript
function createElement(type, config, children) {
  let propName;

  // Reserved names are extracted
  const props = {};

  let key = null;
  let ref = null;
  let self = null;
  let source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      if (__DEV__) {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (
        hasOwnProperty.call(config, propName) &&
        !RESERVED_PROPS.hasOwnProperty(propName)
      ) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  const childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    const childArray = Array(childrenLength);
    for (let i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    const defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  return ReactElement(
    type,
    key,
    ref,
    self,
    source,
    ReactCurrentOwner.current,
    props,
  );
}
```

```javascript
const ReactElement = function(type, key, ref, self, source, owner, props) {
    const element = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: REACT_ELEMENT_TYPE,

        // Built-in properties that belong on the element
        type: type,
        key: key,
        ref: ref,
        props: props,

        // Record the component responsible for creating this element.
        _owner: owner,
    };
    return element;
};
```

$$typeof 用来标识element是什么类型 REACT_ELEMENT_TYPE或其他

- ### Component和PureComponent



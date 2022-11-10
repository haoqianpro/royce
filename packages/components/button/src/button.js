export const buttonTypes = ['default', 'primary'];

export const buttonNativeTypes = ['button', 'submit', 'reset'];

export const buttonProps = {
  disabled: Boolean,
  type: {
    type: String,
    default: 'default',
    validator: t => buttonTypes.includes(t),
  },
  nativeType: {
    type: String,
    default: 'button',
    validator: t => buttonNativeTypes.includes(t),
  },
};

export const tagTypes = ['success', 'info', 'warning', 'danger'];

export const tagProps = {
  type: {
    type: String,
    default: 'default',
    validator: t => tagTypes.includes(t),
  },
};

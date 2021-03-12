<template>
  <div
    :class="'alert alert-' + type"
    role="alert"
  >
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    type: String
  },
  setup(props, context) {
    const propsText = context.slots.default();
    propsText.forEach(element => {
      if (element.type == 'a') {
        if (element.props.class && element.props.class.includes('alert-link')) return;
        element.props.class = element.props.class ? element.props.class + ' alert-link' : 'alert-link';
      }
    });
  }
};
</script>
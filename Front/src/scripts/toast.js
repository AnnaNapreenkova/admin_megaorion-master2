export default function(title, message, variant) {
  this.$bvToast.toast(message, {
    title: title,
    variant: variant,
    solid: true,  
    autoHideDelay: 3000,  
  });
}

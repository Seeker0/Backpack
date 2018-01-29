const BootstrapHelper = {};


BootstrapHelper.glyphicon = type => {
  return `<span
    class="glyphicon
    glyphicon-${ type }"
    aria-hidden="true"></span>`
};



module.exports = BootstrapHelper;

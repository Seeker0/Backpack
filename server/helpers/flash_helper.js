const FlashHelper = {};


FlashHelper.bootstrapAlertClassFor = key => {
  return {
    "error": "danger",
    "alert": "danger",
    "notice": "info"
  }[key] || key;
};


module.exports = FlashHelper;


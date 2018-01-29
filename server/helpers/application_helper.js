const ApplicationHelper = {};


ApplicationHelper.rootPath = () => '/';
ApplicationHelper.CSSID = (...args) => {
  let n = args.length;
  let options = args[n - 1];
  let viewPath = options.data.exphbs.view;
  let id = viewPath.split('/').join('-');
  return id;
};


module.exports = ApplicationHelper;






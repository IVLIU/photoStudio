# photoStudio

1.本地克隆之后，需要先执行‘yarn’或者‘yarn install’，注意不要使用npm，不保证不出现错误。

2.‘yarn run build’或者‘npm run build’打包文件。

3.‘yarn run dev’或者‘npm run dev’是启动服务器。由于多页面情况无法做到热加载，所以该功能暂时不可用。正在想办法解决。

4.注意，所以文件应该以相同的命名（比如，index.[html, js ,css]），为了保证自动引入文件时不出现错误。

#由于服务器问题，所以每次想要看效果需要重新打包，个人建议可以现在src文件下操作，在该文件引入该目录下相应的js和css，打包前应该删掉。

#考虑研究一下webpack-dev-server的原理，然后基于koa2自己实现一个专供多页面临时服务器，有兴趣的可以一起研究。
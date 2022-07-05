import MainContainer from './view/MainContainer.mjs';

export const onStart = () => Neo.app({
    appPath : 'apps/loginhelloworld/',
    mainView: MainContainer,
    name    : 'LoginHelloWorld'
});
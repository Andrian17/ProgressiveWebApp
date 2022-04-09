import { async } from 'regenerator-runtime';
import runtime from 'serviceworker-webpack-plugin/lib/runtime';

const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    await runtime.register();
    return;
  }
  console.log('SW registered: ', registration);
};

export default swRegister;

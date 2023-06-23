// state 저장소
import { Provider } from "react-redux";
import rootReducer from "@/store/reducer/main";
import { AppProps } from "next/app";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools());

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

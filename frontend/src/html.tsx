import React from "react";

type Props = {
  content: string;
  state: object;
  style?: string;
};

export const Html = ({ content, state, style }: Props) => {
  return (
    <html>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      {style && <head dangerouslySetInnerHTML={{ __html: style }}></head>}
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__APOLLO_STATE__=${JSON.stringify(state).replace(
              /</g,
              "\\u003c"
            )};`
          }}
        />
        <script src="/bundle.js" defer></script>
      </body>
    </html>
  );
};

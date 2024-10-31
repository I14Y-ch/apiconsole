document.write("<script language=javascript src='https://unpkg.com/swagger-ui-dist@4/swagger-ui-bundle.js'><\/script>");
document.write("<script language=javascript src='https://unpkg.com/swagger-ui-dist@4/swagger-ui-standalone-preset.js'><\/script>");

function loadSwagger() {
    const ui = SwaggerUIBundle({
      urls: [
        {
          name: "iop.swagger.test",
          url: "Release.json",
        }
      ],
      dom_id: "#swagger-ui",
      deepLinking: true,
      presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
      plugins: [SwaggerUIBundle.plugins.DownloadUrl],
      layout: "StandaloneLayout",
    });
    window.ui = ui;
  };
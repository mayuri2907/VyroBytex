import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

function apiDevServerPlugin(): Plugin {
  return {
    name: 'api-dev-server',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url && req.url.startsWith('/api/enquiry')) {
          try {
            const { default: handler } = await server.ssrLoadModule('./api/enquiry.ts');
            if (typeof (res as any).status !== 'function') {
              (res as any).status = function (code: number) {
                this.statusCode = code;
                return this;
              };
            }
            if (typeof (res as any).json !== 'function') {
              (res as any).json = function (data: any) {
                this.setHeader('Content-Type', 'application/json');
                this.end(JSON.stringify(data));
                return this;
              };
            }
            return await handler(req, res);
          } catch (err) {
            console.error('[API Dev Middleware Error]:', err);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, error: 'Local API server error.' }));
            return;
          }
        }
        if (req.url && req.url.startsWith('/api/indexnow')) {
          try {
            const { default: handler } = await server.ssrLoadModule('./api/indexnow.ts');
            if (typeof (res as any).status !== 'function') {
              (res as any).status = function (code: number) {
                this.statusCode = code;
                return this;
              };
            }
            if (typeof (res as any).json !== 'function') {
              (res as any).json = function (data: any) {
                this.setHeader('Content-Type', 'application/json');
                this.end(JSON.stringify(data));
                return this;
              };
            }
            return await handler(req, res);
          } catch (err) {
            console.error('[API Dev Middleware Error]:', err);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, error: 'Local API server error.' }));
            return;
          }
        }
        next();
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), apiDevServerPlugin()],
});

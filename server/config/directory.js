import path from "path";

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const rootPath = path.normalize(path.join(__dirname, "../.."));

const directory = {
    root: rootPath,
    distDir: path.join(rootPath, "dist"),
    assetsDir: path.join(rootPath, "public"),
};

export default directory;

module.exports = {
  requires: {
    bundle: "ai",
  },
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/cocktailpeanut/MatAnyone app",
        ]
      }
    },
    {
      method: "fs.copy",
      params: {
        src: "app.py",
        dest: "app/hugging_face/app.py"
      }
    },
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",
          path: "app",
          // xformers: true
        }
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "uv pip install -r ../requirements.txt" 
        ]
      }
    }
  ]
}

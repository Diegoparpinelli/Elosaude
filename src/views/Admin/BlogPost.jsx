import React, { useState, useRef } from "react";
import '../../assets/css/style.css'
import api from '../../url/url'

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import HeaderDash from "../../components/HeaderDash";

function BlogPost() {
  const quillRef = useRef(null);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("")
  const [file, setFile] = useState();

  console.log(file)

  function createPost() {
    const postData = {
      title: title,
      content: value
    }

    fetch(`${api.URLAPI}/api/postmanage`, { method: "POST", body: JSON.stringify(postData) })
  }

  const myToolbar = [
    [{ header: [1, 2, 3, 4, false] }],
    ["italic", "underline", "strike", "blockquote"],
    ["link"],
    ["clean"],
  ];

  const formats = [
    "header",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "bullet",
    "indent",
    "link",
  ];

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <HeaderDash>

      <div className="container-post">
        <div className="Content-post">
          <div className="post-editor">
            <h3>Faça sua postagem</h3>
            <p>
              <i>*Imagens devem ter o tamanho de 770x450 pixels</i>
            </p>
            <p>Título da postagem:</p>

            <input
              style={{
                marginBottom: '10px',
                marginTop: '-20px',
                borderColor: '#c2c9d6'
              }}
              type="text"
              onChange={e => { setTitle(e.target.value) }}
            />

            <label htmlFor="myfile">Selecione a imagem de capa:</label>

            <input
              className="myfile"
              type="file"
              id="myfile"
              name="myfile"
              accept="image/*"
              onChange={handleChange}
            />

            {
              file !== undefined ? <div
                style={{
                  width: "770px",
                  height: "450px",
                  margin: "10px 10px 10px 0",
                  backgroundImage: `url(${file})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div> : ''
            }

            <div style={{
              backgroundColor: 'white'
            }}>

              <ReactQuill
                style={{ zIndex: '2' }}
                ref={quillRef}
                theme="snow"
                value={value}
                onChange={setValue}
                modules={{ toolbar: { container: myToolbar } }}
                formats={formats}
                backgroundColor={'white'}
              />
            </div>
            <br />
            <button onClick={() => { createPost() }}>Enviar</button>
          </div>
        </div>
      </div>

    </HeaderDash>
  );
}

export default BlogPost;

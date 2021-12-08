import { useState, useRef } from "react";
import ReactQuill from "react-quill";
import Quill from "react-quill";
import "react-quill/dist/quill.snow.css";
import './App.css';
const Font = ReactQuill.Quill.import('formats/font'); // <<<< ReactQuill exports it
Font.whitelist = ['mirza', 'roboto'] ; // allow ONLY these fonts and the default
ReactQuill.Quill.register(Font, true);
const modules = {
    toolbar: [
      ["bold", "italic", "underline"],
//    ["blockquote", "code-block"],
//    [{ 'header': [ 2, 5, false] }],
      [{size: []}],
//    [{ 'header': '1'}, {'header': '2'}, { 'font': "" }], 
       ['link', 'image'],
      [{ list: "ordered" }, { list: "bullet" }],
//    [{ script: "sub" }, { script: "super" }],
//    [{ indent: "-1" }, { indent: "+1" }],
//    [{ color: [] }, { background: [] }],
//    [{ align: [] }],
    ],
  };
function EditingTool() {
    const [value, setValue] = useState("");
    const editorRef = useRef();
    console.log(value);
    if (editorRef.current) console.log(editorRef.current.editor.getContents());
    return(
        <div className="editor1">
            <div style={{ display: "flex" }}>
            <ReactQuill
                ref={(el)=> {this.ReactQuillRef = el}}
                theme="snow"
                spellcheck={true}
                font={'Avenir Next'}
                value={value}
                onChange={setValue}
                modules={modules}
                style={{ height: "5in", margin: "1em", flex: "1" }}
                ref={editorRef}
                placeholder={"Please Describe project Overview here"}
            />
            </div>
        </div>
    );
}
export default EditingTool;
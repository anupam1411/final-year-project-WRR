// import React, { Component } from 'react';
// import './index.css';
// import { UploadOutlined } from '@ant-design/icons';
// import { Button, message, Upload } from 'antd';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       fileList: [],
//       uploading: false,
//     };
//   }

//   handleUpload = () => {
//     const { fileList } = this.state;
//     const formData = new FormData();
//     fileList.forEach((file) => {
//       formData.append('files[]', file);
//     });
//     this.setState({
//       uploading: true,
//     });
//     // You can use any AJAX library you like
//     fetch('https://www.mocky.io/v2/5cc8019d300000980a055e76', {
//       method: 'POST',
//       body: formData,
//     })
//       .then((res) => res.json())
//       .then(() => {
//         this.setState({
//           fileList: [],
//           uploading: false,
//         });
//         message.success('upload successfully.');
//       })
//       .catch(() => {
//         message.error('upload failed.');
//         this.setState({
//           uploading: false,
//         });
//       });
//   };

//   handleRemove = (file) => {
//     const { fileList } = this.state;
//     const index = fileList.indexOf(file);
//     const newFileList = fileList.slice();
//     newFileList.splice(index, 1);
//     this.setState({
//       fileList: newFileList,
//     });
//   };

//   handleBeforeUpload = (file) => {
//     this.setState(({ fileList }) => ({
//       fileList: [...fileList, file],
//     }));
//     return false;
//   };

//   render() {
//     const { fileList, uploading } = this.state;

//     const props = {
//       onRemove: this.handleRemove,
//       beforeUpload: this.handleBeforeUpload,
//       fileList,
//     };

//     return (
//       <>
//         <Upload {...props}>
//           <Button icon={<UploadOutlined />}>Select File</Button>
//         </Upload>
//         <Button
//           type="primary"
//           onClick={this.handleUpload}
//           disabled={fileList.length === 0}
//           loading={uploading}
//           style={{
//             marginTop: 16,
//           }}
//         >
//           {uploading ? 'Uploaded' : 'Upload'}
//         </Button>
//       </>
//     );
//   }
// }

// export default App;

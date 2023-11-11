import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
//import { Document, Page } from "react-pdf";
//import File from './pdf.worker.min.js';
//import { Viewer, Worker } from '@react-pdf-viewer/core';
//import { defaultLayoutPlugin} from '@react-pdf-viewer/default-layout';


const AdvertWidget = ({ pdfDriveLink }) => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  // const [pdfFile, setPDFFile] = useState(null);
  // const [viewPDF, setViewPdf] = useState(null);

  // const fileType = ['application/pdf']
  // const handleChange = (e) => {
  //   let selectedFile = e.target.files[0]
  //   if(selectedFile) {
  //     if(selectedFile && fileType.includes(selectedFile.type)) {
  //       let reader = new FileReader()
  //       reader.readAsDataURL(selectedFile)
  //       reader.onload = (e) => {
  //         setPDFFile(e.target.result)
  //       }
  //     }
  //     else {
  //       setPDFFile(null)
  //     }
  //   }
  //   else {
  //     console.log("please select")
  //   }
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   if(pdfFile !== null) {
  //     setViewPdf(pdfFile)
  //   }
  //   else{
  //     setViewPdf(null)
  //   }
  // }
  const [embedURL] = useState('https://drive.google.com/file/d/1K65QcpvMauQn9ZbrER1YXAEMgLiX4X3d/preview')
  //const [numPages, setNumPages] = useState(null);
  //const [pageNumber, setPageNumber] = useState(1);

  // const onDocumentLoadSuccess = ({ numPages }) => {
  //   setNumPages(numPages);
  // };

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Book PDF</Typography>
      </FlexBetween>
      <div className='container1'>
        <h1>Explore the most Awaited Book...</h1> 
        <iframe src={embedURL} width="640" height="480" style={{overflowY: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}></iframe>
      </div>
      <FlexBetween>
        <Typography color={main}>Author:</Typography>
        <Typography color={medium}>Ashutosh Patel</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      When I look back, I am so impressed again with the life-giving power of literature. If I were a young person today, trying to gain a sense of myself in the world, I would do that again by reading, just as I did when I was young." – Maya Angelou
      </Typography>
      {/* <div className='container1'>
        <form>
          <input type="file" className='form-control1' onChange={handleChange}/>
          <button type='submit' className='btn btn-success' onChange={handleSubmit}>View Pdf</button>

          <h2>View PDF</h2>
          <div className='pdf-viewer'  style={{ width: '100%', height: '900px', overflowY: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            Write Anything here, because this is to import Pdf from Admin.
          </div>
        </form>
      </div> */}
    </WidgetWrapper>
  );
};

export default AdvertWidget;

import React, { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import { Button } from 'react-bootstrap';
import TableRow from '@mui/material/TableRow';
import { CircularProgress, Container, ThemeProvider, createTheme } from '@mui/material';
import AdminDashboard from '../AdminDashboard';
import jsPDF from 'jspdf';
import logo from "../../../images/sssutms.jpg"

const theme = createTheme();


function Entrance_Slip() {

    const [rows, setRows] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dataNotFound, setDataNotFound] = useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [studentdata, setStudentData] = useState([])
    const [loading, setLoading] = useState(false)

    const [sortBy, setSortBy] = useState("");
    const [sortOrder, setSortOrder] = useState("asc"); 
  
    
    useEffect(() => {
        const fetchData = async () => {
            try {
  setLoading(true)
                const response = await fetch(`https://sssutms.ac.in/apitest/v2/entrance`);
                const data = await response.json();

                console.log(data.User , "data from api")
                // setStudentData(data.User)
                if (data.length === 0) {
                    setDataNotFound(true);
                } else {
                    setDataNotFound(false);
                    setStudentData(data.User);
                }

                // console.log(data, "data from api")
            } catch (error) {
                console.error('Error fetching data:', error);
                setDataNotFound(true);
            } finally {
                setLoading(false)
            }
        };

        // Call the fetchData function whenever any of the dependencies (session, courseType, etc.) change
        fetchData();
    }, []);



   




    // console.log(studentdata, "data of student from use state")
    const label = { inputProps: { "aria-label": "Checkbox demo" } };

    // console.log(branchname, coursename, collegename, ' message from K4LI ..............')

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    // /////////////////////////////////name sort/////////////////////////
    const handleSort = (column) => {
        if (column === sortBy) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortBy(column);
            setSortOrder("asc");
        }
    };

    const sortedStudents = [...studentdata].sort((a, b) => {
        if (sortBy === "name") {
            return sortOrder === "asc"
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name);
        }

        return 0;
    });

   
///////////////////////////pdf///////////////////////////////////////////
const generatePDF=(student)=>{
    const pdf = new jsPDF();
    console.log(student, "student")
    pdf.setFillColor(255, 255, 255); 
    pdf.rect(0, 0, 210, 297, 'F'); 

    // Add title
    pdf.addImage(logo, "JPEG", 4, 6, 30, 25);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(13);
    pdf.setTextColor(0, 0, 0);
    pdf.text("SRI SATYA SAI UNIVERSITY OF TECHONOLOGY AND MEDICAL SCIENCES ", 120, 10, { align: "center" });
    pdf.setFontSize(10);
    pdf.text("[Established Under Govt. of (M.P.) & Registered UGC 2(F), 1956]", 120, 18, { align: "center" });
    pdf.text("Sh-18 Bhopal-Indore Road, Opposite Oilfed Plant, Pachama,", 120, 25, { align: "center" });
    // pdf.text("ACADEMIC YEAR: 2024-2025", 120, 33, { align: "center" });

    pdf.setDrawColor(255, 0, 0); // Red color

    pdf.setFontSize(13);
    pdf.setTextColor(255, 0, 0); // Red color
    pdf.setTextColor(0, 0, 0);
    pdf.setFont("helvetica", "bold");
    pdf.text("Entrance Exam Receipt", 115, 40, { align: "center" });

    // Add payment details
    // Black color



    pdf.setDrawColor(0, 0, 0);
    pdf.setLineWidth(0.5);
    pdf.line(25, 45, 185, 45); 
    pdf.setFontSize(10);


    pdf.text(`Name of Candidate   :          ${student?.name}`, 25, 60); 
    pdf.addImage(student?.Documents?.applicantPhoto, "JPEG", 150, 70, 30, 30);
    pdf.text(`Father's Name   :                 ${student?.fathersname}`, 25, 70);
    pdf.text(`Mother's Name   :                ${student?.mothersname}`, 25, 80);
    pdf.text(`gender  :                               ${student?.gender}`, 25, 90);
    const formattedDOB = new Date(student?.dob).toLocaleDateString('en-GB'); // Assuming 'en-GB' format (DD-MM-YYYY)
    pdf.text(`Date of Birth :                      ${formattedDOB}`, 25, 100);
    
    pdf.text(`Address  :                            ${student?.address}`, 25, 110);

    pdf.text(`Domicile :                            ${student?.domicile}`, 25, 120);
    pdf.text(`Category :                           ${student?.category}`, 25, 130);
    pdf.text(`Mobile Number :                 ${student?.mobile}`, 25, 140);
    pdf.text(`Email :                                ${student?.email}`, 25, 150);

    pdf.text(`Specialization :                  ${student?.courseBranch}`, 25, 160);





    pdf.setFont("helvetica", "bold");
    pdf.text("EDUCATION DETAILS:-", 25, (170));
    pdf.setFont("helvetica", "normal");

    const educationHeaders = ["Degree/Course", "Board/University" , "Passing Year",  "Percentage"];
    const educationData = [
      ["10th", `${student?.academicDetails.tenthBoard}`, `${student.academicDetails?.tenthPassingYear}`,  `${student.academicDetails.tenthPercentage}`],
      ["12th/Diploma", `${student.academicDetails.twelfthBoard}`, `${student.academicDetails.twelfthPassingYear}`, `${student.academicDetails.twelfthPercentage}`],
      ["Other", " ", " ", " ", " ", " "],
    ];

    const colWidths = [40, 40, 40, 40, ];


    const educationOptions = {
      startY: 173,
      startX: 27,
      margin: { top: 40 , left:25},
      columnStyles: { 0: { cellWidth: colWidths[0] }, 1: { cellWidth: colWidths[1] }, 2: { cellWidth: colWidths[2] }, 3: { cellWidth: colWidths[3] }, 4: { cellWidth: colWidths[4] }, 5: { cellWidth: colWidths[5] } },
      styles: { overflow: "linebreak" },
    };

    pdf.autoTable(educationHeaders, educationData, educationOptions);

  


    // const formattedDate = transactionTime.toLocaleDateString('en-IN', {
    //     day: '2-digit',
    //     month: '2-digit',
    //     year: 'numeric'
    //   });

    pdf.setFont("helvetica", "bold");
    pdf.text("Fee DETAILS:-", 25, (218));
    pdf.setFont("helvetica", "normal");

    const FeeHeaders = ["", "" , "",  ""];
    const FeeData = [
    //   ["Transaction ID", `${student.txnId}`],
      ["Bank Ref No", `${student.bankTxnId}`],
      ["Payment Mode",`${student.paymentMode}` ],
      ["Transaction Date",`${student.txnDate}` ],
      ["Transaction Amount",`${student.txnAmount}`],
    ];

    const colWidths1 = [40, 40, 40, 40, ];


    const educationOptions1 = {
      startY: 220,
      startX: 27,
      margin: { top: 40 ,left:25},
      columnStyles: { 0: { cellWidth: colWidths1[0] }, 1: { cellWidth: colWidths1[1] }, 2: { cellWidth: colWidths1[2] }, 3: { cellWidth: colWidths1[3] }, 4: { cellWidth: colWidths1[4] }, 5: { cellWidth: colWidths1[5] } },
      styles: { overflow: "linebreak" },
    };

    pdf.autoTable(FeeHeaders, FeeData, educationOptions1);




    pdf.addImage(student?.Documents?.applicantSignature, "JPEG", 10, 275, 40, 10);
    pdf.text(`Name & Signature With Seal`, 145, 277)
    pdf.text(`Officer incharge`, 153, 283)
    pdf.save("Admission_slip.pdf");
}


    // console.log("Student data " , studentdata)
    // ///////////////////////////////////////////////////////////////////////////////////

    return (
        <ThemeProvider theme={theme}>
            <AdminDashboard />
            {loading ? (<CircularProgress color="inherit" style={{ marginTop: "90px", marginLeft: "50%" }}/>): (
            <Container
                className="shadow p-3  bg-body rounded"
                style={{
                    marginTop: "80px",
                    width: "100%",
                    textAlign: "center",
                    justifyContent: "center",
                }}
            >
               
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>

                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        align="left"
                                        style={{ backgroundColor: '#023047' }}
                                    >
                                        <h1
                                            style={{
                                                fontSize: "15px",
                                                fontWeight: "bolder",
                                                color: "white",
                                                fontFamily: "-moz-initial",
                                            }}
                                        >
                                            S.No.
                                        </h1>
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        style={{ backgroundColor: '#023047' }}
                                    >
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        style={{ backgroundColor: '#023047' }}
                                    >
                                        <h1
                                            style={{
                                                fontSize: "15px",
                                                fontWeight: "bolder",
                                                color: "white",
                                                fontFamily: "-moz-initial",
                                            }}
                                        >
                                            Application Number
                                        </h1>
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        style={{
                                            backgroundColor: '#023047', color: 'white', minWidth: '100px', position: "sticky",
                                            top: 0,
                                            zIndex: 1,
                                        }}
                                        // /////////////for sorting name//////////////////
                                        onClick={() => handleSort("name")}
                                    >

                                        <h5>
                                            <b>Student Name</b>
                                            {/* /////////////name sort////////////////////////// */}
                                            {sortBy === "name" && (
                                                <span>{sortOrder === "asc" ? " ↑" : " ↓"}</span>
                                            )}
                                        </h5>
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        style={{ backgroundColor: '#023047', minWidth: '100px' }}
                                    >
                                        <h1
                                            style={{
                                                fontSize: "15px",
                                                fontWeight: "bolder",
                                                color: "white",
                                                fontFamily: "-moz-initial",
                                                // width: "150px"
                                            }}
                                        >
                                            Father's Name
                                        </h1>
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        style={{ backgroundColor: '#023047', minWidth: '100px' }}
                                    >
                                        <h1
                                            style={{
                                                fontSize: "15px",
                                                fontWeight: "bolder",
                                                color: "white",
                                                fontFamily: "-moz-initial",
                                                // width: "150px"
                                            }}
                                        >
                                            Mother's Name
                                        </h1>
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        style={{ backgroundColor: '#023047', minWidth: '100px' }}
                                    >
                                        <h1
                                            style={{
                                                fontSize: "15px",
                                                fontWeight: "bolder",
                                                color: "white",
                                                fontFamily: "-moz-initial",
                                                // width: "150px"
                                            }}
                                        >
                                            Email 
                                        </h1>
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        style={{ backgroundColor: '#023047', minWidth: '100px' }}
                                    >
                                        <h1
                                            style={{
                                                fontSize: "15px",
                                                fontWeight: "bolder",
                                                color: "white",
                                                fontFamily: "-moz-initial",
                                                // width: "150px"
                                            }}
                                        >
                                            Mobile
                                        </h1>
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        style={{ backgroundColor: '#023047', minWidth: '100px' }}
                                    >
                                        <h1
                                            style={{
                                                fontSize: "15px",
                                                fontWeight: "bolder",
                                                color: "white",
                                                fontFamily: "-moz-initial",
                                                // width: "150px"
                                            }}
                                        >
                                            Selected Course Type
                                        </h1>
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        style={{ backgroundColor: '#023047' }}
                                    >
                                        <h1
                                            style={{
                                                fontSize: "15px",
                                                fontWeight: "bolder",
                                                color: "white",
                                                fontFamily: "-moz-initial",
                                                width: "200px"
                                            }}
                                        >
                                            Course Branch
                                        </h1>
                                    </TableCell>

                                    <TableCell
                                        align="center"
                                        style={{ backgroundColor: '#023047' }}
                                    >
                                        <h1
                                            style={{
                                                fontSize: "15px",
                                                fontWeight: "bolder",
                                                color: "white",
                                                fontFamily: "-moz-initial",
                                                width: "150px"
                                            }}
                                        >
                                            Course Name
                                        </h1>
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        style={{ backgroundColor: '#023047' }}
                                    >
                                        <h1
                                            style={{
                                                fontSize: "15px",
                                                fontWeight: "bolder",
                                                color: "white",
                                                fontFamily: "-moz-initial",
                                            }}
                                        >
                                            Fee Status
                                        </h1>
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        style={{ backgroundColor: '#023047' }}
                                    >
                                        <h1
                                            style={{
                                                fontSize: "15px",
                                                fontWeight: "bolder",
                                                color: "white",
                                                fontFamily: "-moz-initial",
                                            }}
                                        >
                                           Verify Fees
                                        </h1>
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        style={{ backgroundColor: '#023047' }}
                                    >
                                        <h1
                                            style={{
                                                fontSize: "15px",
                                                fontWeight: "bolder",
                                                color: "white",
                                                fontFamily: "-moz-initial",
                                            }}
                                        >
                                            Download
                                        </h1>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {sortedStudents &&
                                    sortedStudents?.map((student, index) => (
                                        <TableRow key={index}>

                                            <TableCell align="center" typeof='check' >{index+1}</TableCell>
                                            <TableCell align="center">


                                            </TableCell>
                                            <TableCell align="center" style={{ color: "red" }}>
                                                {student?.applicationNumber}
                                            </TableCell>

                                            <TableCell align="center">
                                                {student.name}
                                            </TableCell>
                                            <TableCell align="center">{student.fathersname
                                            }</TableCell>
                                            <TableCell align="center">{student.mothersname
                                            }</TableCell>
                                             <TableCell align="center">{student.email
                                            }</TableCell>
                                             <TableCell align="center">{student.mobile
                                            }</TableCell>
                                             <TableCell align="center">{student.courseType
                                            }</TableCell>
                                            <TableCell align="center">{student.courseBranch}</TableCell>
                                            <TableCell align="center">
                                                {student.courseName}
                                            </TableCell>
                                           
                                            <TableCell align="center" style={{ color: "green" }}>
                                                {student.isPaid ? "Paid" : "unpaid"}
                                            </TableCell>
                                            <TableCell align="center" style={{ color: "green" }}>
                                                {student.isPaid ? "Verified" : <Button variant="contained" >Verify</Button>}
                                            </TableCell>
                                            <TableCell align="center" style={{ color: "green" }}>
                                               <Button variant="success" onClick={() => generatePDF(student)}>Admit Card</Button>
                                            </TableCell>

                                      
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[2,10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
               
            </Container>
             )}
        </ThemeProvider>
    )
}

export default Entrance_Slip
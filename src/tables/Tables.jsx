import "./table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const List = () => {
  const rows =[
    {
        id:32323,
        bloodgrp: 'A(+ve)',
        customer:'virat',
        date:'1 March',
        amount: 800,
        methord: 'cash on Delivery',
        status:'Approved',


    },
    {
        id:32325,
        bloodgrp: 'O(+ve)',
        customer:'Ujjawl',
        date:'14 March',
        amount: 800,
        methord: 'cash on Delivery',
        status:'Approved',


    },
    {
        id:32329,
        customer:'Rahul',
        bloodgrp: 'A(+ve)',
        date:'18 March',
        amount: 800,
        methord: 'cash on Delivery',
        status:'Pending',


    },
    {
        id:32323,
        customer:'viraj',
        bloodgrp: 'B(+ve)',
        date:'9 March',
        amount: 800,
        methord: 'cash on Delivery',
        status:'Pending',


    },
  ]
  
    
  return (
    <TableContainer component={Paper} classNme="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tablecell"> Tracking ID</TableCell>
            <TableCell className="tablecell"> Customer</TableCell>
            <TableCell className="tablecell"> Blood Group</TableCell>
            <TableCell className="tablecell"> Date</TableCell>
            <TableCell className="tablecell"> Amount</TableCell>
            <TableCell className="tablecell"> Methord</TableCell>
             <TableCell className="tablecell"> Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              
            >
              <TableCell>
                {row.id}
              </TableCell>
              <TableCell className="tablecell" >{row.customer}</TableCell>
              <TableCell className="tablecell" >{row.bloodgrp}</TableCell>
              <TableCell className="tablecell" >{row.date}</TableCell>
              <TableCell className="tablecell" >{row.amount}</TableCell>
              <TableCell className="tablecell" >{row.methord}</TableCell>
              <TableCell className="tablecell"  >
                <span className={`status ${row.status}`}>
                 {row.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List

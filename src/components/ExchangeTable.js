import React, { useState } from "react";
import {
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Stack,
} from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import millify from "millify";

const Row = ({ row }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow className="table-row-style" sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <Stack justifyContent="flex-start" gap="10px" direction="row">
               <span className="exchange-num">{row?.rank}.</span>
               <Avatar src={row?.iconUrl} sx={{ width: 40, height: 40 }} alt="image"></Avatar>
               <span className="exchange">{row?.name}</span>
          </Stack>
        </TableCell>
        <TableCell align="right"><span className="exchange-num">{`$ ${millify(row?.["24hVolume"])}`}</span></TableCell>
        <TableCell align="right"><span className="exchange-num">{millify(parseInt(row?.marketCap))}</span></TableCell>
        <TableCell align="right"><span className="exchange-num">{parseFloat(row?.change)}%</span></TableCell>
        <TableCell align="right"><span className="exchange">{row?.symbol}</span></TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Stack gap="5px" className="exchange" sx={{ margin: 1 }}>
              <span variant="h6">For more info, Visit below page</span>
              <a href={row.coinrankingUrl} target="_blank" rel="noreferrer"
                style={{ color: "aqua", textDecoration: "underline" }}
              >
                {row.coinrankingUrl}
              </a>
            </Stack>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const ExchangeTable = ({ coins }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell ><span className="exchange-coin-headings-style">Exchanges</span></TableCell>
            <TableCell align="right"><span className="exchange-coin-headings-style">24h Trade Volume</span></TableCell>
            <TableCell align="right"><span className="exchange-coin-headings-style">Markets</span></TableCell>
            <TableCell align="right"><span className="exchange-coin-headings-style">Change</span></TableCell>
            <TableCell align="right"><span className="exchange-coin-headings-style">Symbol</span></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coins.map((e) => (
            <Row key={e.uuid} row={e} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default ExchangeTable;

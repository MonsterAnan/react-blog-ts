import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { toast } from "react-toastify";
import EditArticleDrawer from "./EditArticleDrawer";
// api import
import { getArticleList, delArticleList } from "api/article";
import TablePaginationActions from "components/TablePaginationActions";

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

export default function ArticleList() {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState(0);
  const [paginationParam, setPagination] = useState({
    page: 0,
    rowsPerPage: 5,
  });
  const [drawerData, setDrawerState] = React.useState({
    open: false,
    currentItem: {},
  });

  const showDrawer = (item) => {
    setDrawerState({
      ...drawerData,
      open: true,
      currentItem: item,
    });
  };

  const closeDrawer = () => {
    setDrawerState({
      ...drawerData,
      open: false,
      currentItem: {},
    });
  };

  useEffect(() => {
    getArticleList({
      pageindex: paginationParam.page,
      pagesize: paginationParam.rowsPerPage,
    }).then((res) => {
      setRows(res.data.list);
      setTotal(res.data.total);
    });
  }, [paginationParam]);

  const handleChangePage = (e, newPage) => {
    setPagination({
      ...paginationParam,
      page: newPage,
    });
  };

  const deleteArticle = (row) => {
    console.log(row);
    delArticleList({ id: row._id }).then((res) => {
      if (res && res.code === 1) {
        toast("删除成功!");
        getArticleList({
          pageindex: paginationParam.page,
          pagesize: paginationParam.rowsPerPage,
        }).then((res) => {
          setRows(res.data.list);
          setTotal(res.data.total);
        });
      }
    });
  };

  const handleChangeRowsPerPage = (event) => {
    setPagination({
      ...paginationParam,
      rowsPerPage: parseInt(event.target.value, 10),
      page: 0,
    });
  };
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell style={{ width: 62 }} align="center">
              序号
            </TableCell>
            <TableCell align="left">类型</TableCell>
            <TableCell align="left">标题</TableCell>
            <TableCell align="left">描述</TableCell>
            <TableCell align="left">来源</TableCell>
            <TableCell align="left">级别</TableCell>
            <TableCell align="left">发布时间</TableCell>
            <TableCell align="left">是否可见</TableCell>
            <TableCell style={{ width: 128 }} align="center">
              操作
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows &&
            rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="center" component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.desc}</TableCell>
                <TableCell>{row.source}</TableCell>
                <TableCell>{row.level}</TableCell>
                <TableCell>{row.releaseTime}</TableCell>
                <TableCell>{row.isVisible ? "是" : "否"}</TableCell>
                <TableCell>
                  <IconButton
                    aria-label="delete"
                    onClick={showDrawer.bind(this, row)}
                    className={classes.margin}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    onClick={deleteArticle.bind(this, row)}
                    className={classes.margin}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              count={total}
              rowsPerPage={paginationParam.rowsPerPage}
              page={paginationParam.page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
      <EditArticleDrawer
        {...drawerData}
        closeDrawer={closeDrawer}
        showDrawer={showDrawer}
      ></EditArticleDrawer>
    </TableContainer>
  );
}

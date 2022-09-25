import * as React from 'react';
import { styled } from '@mui/system';
import TablePaginationUnstyled, {
  tablePaginationUnstyledClasses as classes,
} from '@mui/base/TablePaginationUnstyled';


//BILLEDER
import PS from '../pictures/Erfaringer/cretivecloud/photoshop.png';
import XD from '../pictures/Erfaringer/cretivecloud/xd.png';
import LR from '../pictures/Erfaringer/cretivecloud/lightroom.png';
import AE from '../pictures/Erfaringer/cretivecloud/aftereffects.png';
import BR from '../pictures/Erfaringer/cretivecloud/blender.png';
import AI from '../pictures/Erfaringer/cretivecloud/illustrator.png';
import ID from '../pictures/Erfaringer/cretivecloud/indesign.png';
import AN from '../pictures/Erfaringer/cretivecloud/animate.png';


const alts =  {
    PS : 'Ikon af Photoshop',
    XD : 'Ikon af Adope XD',
    LR : 'Ikon af Lightroom',
    AE : 'Ikon af After-effect',
    BR : 'Ikon af Blender',
    AI : 'Ikon af Illustrator',
    ID : 'Ikon af InDesign',
    AN : 'Ikon af Animate',
}


function createData(Ikon, Navn, Egenskab) {
  return { Ikon, Navn, Egenskab };
}

const rows = [
  createData(<img src={PS} alt={alts.PS}></img>, 'Photoshop', 'Øvet'),
  createData(<img src={XD} alt={alts.XD}></img>, 'XD', 'Erfaren'),
  createData(<img src={LR} alt={alts.LR}></img>, 'Lighroom', 'Øvet'),
  createData(<img src={AE} alt={alts.AE}></img>, 'AfterEffect', 'Begynder'),
  createData(<img src={BR} alt={alts.BR}></img>, 'Blender', 'Begynder'),
  createData(<img src={AI} alt={alts.AI}></img>, 'Illustrator', 'Erfaren'),
  createData(<img src={ID} alt={alts.ID}></img>, 'InDesign', 'Erfaren'),
  createData(<img src={AN} alt={alts.AN}></img>, 'Animate', 'Begynder'),

]

const Root = styled('div')(
  ({ theme }) => `
  table {
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    color: white;
    border: 1px solid #00BAFF;
    text-align: left;
    padding: 6px;
  }

  th {
    background-color: #00BAFF;
  }
  `,
);

const CustomTablePagination = styled(TablePaginationUnstyled)(
  ({ theme }) => `
  & .${classes.spacer} {
    display: none;
  }

  & .${classes.toolbar}  {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .${classes.selectLabel} {
    margin: 0;
  }

  & .${classes.select}{
    padding: 2px;
    border: 1px solid #00BAFF;
    border-radius: 50px;
    background-color: #00BAFF;

    &:hover {
      background-color: #0B111E;
      color: white;
    }

  
  }

  & .${classes.displayedRows} {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .${classes.actions} {
    padding: 2px;
    border: 1px solid #00BAFF;
    border-radius: 50px;
    text-align: center;
  }

  & .${classes.actions} > button {
    color: #00BAFF;
    margin: 0 8px;
    border: transparent;
    border-radius: 2px;
    background-color: transparent;

    &:hover {
        color: #0B111E;
      background-color: #00BAFF;
    }

    
  }
  `,
);

export default function CC() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Root sx={{ width: '100%', maxWidth: '100%' }}>
      <table aria-label="custom pagination table">
        <thead>
          <tr>
            <th>Ikon</th>
            <th>Navn</th>
            <th>Egenskab</th>
          </tr>
        </thead>
        <tbody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <tr key={row.Navn}>
              <td style={{width: 30}}>{row.Ikon}</td>
              <td style={{ width: 120 }} align="right">
                {row.Navn}
              </td>
              <td style={{ width: 120 }} align="right">
                {row.Egenskab}
              </td>
            </tr>
          ))}

          {emptyRows > 0 && (
            <tr style={{ height: 34 * emptyRows }}>
              <td colSpan={3} />
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <CustomTablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              componentsProps={{
                select: {
                  'aria-label': 'rows per page',
                },
                actions: {
                  showFirstButton: true,
                  showLastButton: true,
                },
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </tr>
        </tfoot>
      </table>
    </Root>
  );
}

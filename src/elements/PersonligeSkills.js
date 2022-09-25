import * as React from 'react';
import { styled } from '@mui/system';
import TablePaginationUnstyled, {
  tablePaginationUnstyledClasses as classes,
} from '@mui/base/TablePaginationUnstyled';





function createData( Navn, Egenskab) {
  return {  Navn, Egenskab };
}

const rows = [
  createData('Markedsføring', 'Arbejdet inden for natteliv i 14 år med, samt 1 år for resturant FRÜD'),
  createData('Undervisning', '2 år på læreseminariet og 3 år som lærevikar'),
  createData('Ledererfaring', '1 år som bestyrer af Hornslet Bar med 30 ansatte'),
  createData('Tværfagligt team work', 'Som bestyrer havde jeg flere afdelinger der skulle kunne samarbejde på tværs'),
  createData( 'Brugertest', '1 år på universitetet med advanced mathematic og en masse data behandling fra Facebook og Google'),
  createData('Ide udvikling', 'Jeg har arbejdet meget med at tage en idé og udvikle den for at komme i mål'),
  createData('Kreativ', 'Jeg forsøger altid at finde på nye og kreative måder at løse problemer på'),
  createData('Passioneret', 'Når jeg går ind i en opgave, så har jeg personlighedstræk der forsvinder væk i opgaven og stopper ikke før den er løst.'),
  createData('Gå-på-mod', 'Jeg er opvokset med mottoet "Aldrig gi\' op" og det forsøger jeg at leve op til hver dag'),
  createData('Selvstændig', 'Jeg startede som selvstændig i 2022, og har nydt at arbejde selv med stadigt med gode kollegaer på kontoeret. '),
  createData('Netværk', 'Jeg har altid haft en fantastisk egenskab til at netværke alle vegne jeg kommer '),
  createData('Samarbejdsvillig', 'Jeg har arbejdet i mange forskellige teams i mit liv, og det har påvirket at jeg er god til at navigere i forskelligheder.'),
  createData('Fleksibel', 'Jeg er rigtig god til at fordybe mig i enkelte detaljer, men er også god til at hoppe fra opgave til opgave efter behov.'),
  createData('Ansvarsbevidst', 'Som familie far, er jeg bevist om at der er ansvar forbundet med alt hvad man gør og siger.'),
  createData('Engageret', 'Jeg går aldrig ind i noget jeg ikke er 100% i'),
  createData('Udadvendt', 'Som en stor del af at være del af nattelivet handler det især om at være udadvendt og dette har givet mig mine menneskelige egenskaber som jeg idag besidder.'),
  createData('Kundekontakt', 'Hver eneste weekend var jeg ude blandt mine gæster og socialiserede med dem, og forsøgte at sælge uden de var beviste om det var et salg.'),
  createData('Kvalitetsbevist', 'Jeg er en perfektionist udenlige.'),
  createData('Systematisk', 'Med flere personlighedstest der alle fortalte at jeg var 99% logisktænkende drager jeg styrke '),
  createData('Omstillingsparat', 'Jeg har mange kasketter til forskellige opgaver '),



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

export default function Personlige() {
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
            
            <th>Buzzword</th>
            <th>Beskrivelse</th>
          </tr>
        </thead>
        <tbody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <tr key={row.Navn}>
             
              <td style={{ width: '30%' }} align="right">
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

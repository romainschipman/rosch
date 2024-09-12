const errorMessages = {

  ROSCH_TABLE_CONTEXT_ERROR: `
        ROSCH_TABLE_CONTEXT_ERROR
        It looks like you're trying to use a Table-related component (e.g., TableRow, TableCell, etc.) outside of the Table component's context.
    
        This error occurs because Table-related components rely on the Table component's context to function properly. 
        Make sure that the Table-related component is rendered as a child or descendant of a Table component.
    
        For example:
        
        Correct usage:
        <Table>
          <TableRow>
            <TableCell>Content</TableCell>
          </TableRow>
        </Table>
        
        Incorrect usage:
        <TableRow>
          <TableCell>Content</TableCell>
        </TableRow> // <-- No Table component wrapping the TableRow.
  `,
  ROSCH_TABLE_MULTIPLE_HEADERS_ERROR: `
      ROSCH_TABLE_MULTIPLE_HEADERS_ERROR
      It looks like you are trying to render multiple RoschTable.Header components.
  
      This error occurs because only one RoschTable.Header is allowed within a RoschTable component to maintain a valid structure.
      Make sure that only one RoschTable.Header is present in your RoschTable structure.
  
      For example:
  
      Correct usage:
      <RoschTable>
        <RoschTable.Header columnNames={columnNames} />
        <RoschTable.Cell field="author" renderElement={(value) => (
          <RoschText>{value.firstName} {value.lastName}</RoschText>
        )} />
      </RoschTable>
  
      Incorrect usage:
      <RoschTable>
        <RoschTable.Header columnNames={columnNames} />
        <RoschTable.Header columnNames={otherColumnNames} /> <!-- Extra RoschTable.Header -->
      </RoschTable> // <-- Multiple RoschTable.Header components detected.
    `,
};

export { errorMessages };
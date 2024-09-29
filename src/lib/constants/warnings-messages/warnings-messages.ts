const warningMessages = {
    ROSCH_TABLE_MISSING_HEADER_WARNING: `
          ROSCH_TABLE_MISSING_HEADER_WARNING
          It looks like you are trying to render a RoschTable without a RoschTable.Header component.
        
          For optimal display, please include a RoschTable.Header to define the table's column headers.
        
          Example:
        
          Correct usage:
          <RoschTable>
            <RoschTable.Header columnNames={columnNames} />
            <RoschTable.Cell field="author" renderElement={(value) => (
              <RoschText>{value.firstName} {value.lastName}</RoschText>
            )} />
          </RoschTable>
  `,
};

export { warningMessages };
    
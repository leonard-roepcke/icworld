type Props = {
  data: any[];
};

export default function DataTable({ data }: Props) {
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          {/* weitere Spalten */}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            {/* weitere Spalten */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

import { getAllIcs } from '@/lib/db/ics';
import DataTable from '@/components/DataTable';

export default async function IcsPage() {
  const ics = await getAllIcs();

  return (
    <div>
      <h1>Meine Grafik</h1>
      <DataTable data={ics} />
    </div>
  );
}

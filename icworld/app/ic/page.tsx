import ResponsiveText from "@/components/responsiveText";
import { getAllEntries } from '@/lib/getData';
import DataTable from '@/components/DataTable';

export default async function IcPage() {
  const data = await getAllEntries();

  return (
    <div>
      <ResponsiveText title="IC World" />
      <DataTable data={data} />
    </div>
  );
}
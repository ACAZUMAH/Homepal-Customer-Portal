import { Skeleton, Table } from "@mantine/core";


export const OffersTableSkeleton = () => {
  const skeletonRows = Array(5)
    .fill(null)
    .map((_, index) => (
      <Table.Tr key={index}>
        <Table.Td>
          <Skeleton height={20} width="100%" />
        </Table.Td>
        <Table.Td>
          <Skeleton height={20} width="80%" />
        </Table.Td>
        <Table.Td>
          <Skeleton height={20} width="60%" />
        </Table.Td>
        <Table.Td>
          <Skeleton height={20} width="100%" />
        </Table.Td>
        <Table.Td>
          <Skeleton height={20} width="80%" />
        </Table.Td>
        <Table.Td>
          <Skeleton height={20} width="100%" />
        </Table.Td>
        <Table.Td>
          <Skeleton height={20} width="25%" square />
        </Table.Td>
      </Table.Tr>
    ));

  return (
    <Table.ScrollContainer minWidth={500}>
      <Table striped highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Property Name</Table.Th>
            <Table.Th>Property Price</Table.Th>
            <Table.Th>Client Name</Table.Th>
            <Table.Th>Client Contact</Table.Th>
            <Table.Th>Offer Price</Table.Th>
            <Table.Th>Message</Table.Th>
            <Table.Th>Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{skeletonRows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
};

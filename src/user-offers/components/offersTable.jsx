import { ActionIcon, Group, Table } from "@mantine/core";
import { IconEdit, IconPencil, IconTrash } from "@tabler/icons-react";
import React from "react";

export const OffersTable = ({ offerData }) => {
  const rows = offerData?.map((data, index) => (
    <Table.Tr key={index}>
      <Table.Td>{data.property?.name}</Table.Td>
      <Table.Td>GH¢ {data.property?.price}</Table.Td>
      <Table.Td>{data.firstName}</Table.Td>
      <Table.Td>{[data.phoneNumber, ", ", data.email]}</Table.Td>
      <Table.Td>GH¢ {data.offerAmount}</Table.Td>
      <Table.Td>{data.message}</Table.Td>
      <Table.Td>
        <ActionIcon variant="transparent">
          <IconTrash color="red" stroke={1.5} />
        </ActionIcon>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
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
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </>
  );
};

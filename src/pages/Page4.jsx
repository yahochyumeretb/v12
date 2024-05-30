import { Button, ButtonGroup, Table } from 'react-bootstrap';

const Page4 = () => {
    return (
        <>
            <ButtonGroup>
                <Button id="items-add" variant="info">Добавить товар (диалог)</Button>
            </ButtonGroup>
            <Table id="items-table" className="mt-4" hover bordered>
                <thead>
                    <tr>
                        <th scope="col">№</th>
                        <th scope="col" className="w-10">Название</th>
                        <th scope="col" className="w-30">Дата</th>
                        <th scope="col" className="w-50">Описание</th>
                        <th scope="col">цена</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Песочница</td>
                        <td>15.05.2024</td>
                        <td>Описание</td>
                        <td>12000120</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
};
export default Page4;

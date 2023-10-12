import { Button } from "antd";

import { useTableActionsBuilder } from "/@/components/Table/src/tableActionsBuilder";
import { BasicTable } from "/@/components/Table";
import { BasePagination } from "/@/apis/types";

import { dataConfig } from "./filter.data.config";
import { columns } from "./table.data.config";
import { useRedirect } from "../useRedirect";
import { IStatusTable } from "./types";
import { t } from "i18next";
import { useStatusApi } from "/@/apis";
import { useReload } from "/@/components/Table/src/hook/useTable";


function Status() {
    const { goDetailStatus, goUpdateStatus, goCreateStatus } = useRedirect();
    const { statusApi } = useStatusApi();
    const { reload, handleReload } = useReload()

    const handleDelete = async (id: string) => {
        try {
            await statusApi.deleteById(id);
            handleReload()
        } catch (error) { }
    };

    const actionColum = {
        actions: (record: IStatusTable) => {
            const [builder] = useTableActionsBuilder();
            const action = builder
                .addView({
                    onClick: () => goDetailStatus(record.id)
                })
                .addEdit({ onClick: () => goUpdateStatus(record.id) })
                .addRemove(() => handleDelete(record.id))
                .build();
            return action;
        },
    };

    const handleAdd = async () => {
        goCreateStatus();
    };

    const handleApi = async (params: {
        nameStatus: string;
        page: number;
        pageSize: number;
    }): Promise<BasePagination<any>> => {
        let dataForm: any;
        let total: any;
        if (!!params.nameStatus) {
            const tranParams = {
                nameStatus: params.nameStatus,
                _page: params.page,
                _limit: params.pageSize,
            };
            dataForm = await statusApi.getAll(tranParams);
            total = await statusApi.getAll({ nameStatus: params.nameStatus });
        } else {
            dataForm = await statusApi.getAll({
                _page: params.page,
                _limit: params.pageSize,
            });
            total = await statusApi.getAll();
        }
        return {
            items: dataForm,
            total: total.length,
        };
    };

    return (
        <div>
            <BasicTable
                dataForm={dataConfig()}
                columns={columns}
                actionColum={actionColum}
                api={handleApi}
                reload={reload}
                toolbar={
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <h2>Danh Sach Status</h2>
                        <Button onClick={() => handleAdd()}>
                            {t("common.add_text")}
                        </Button>
                    </div>
                }
            />
        </div>
    );
}

export default Status;

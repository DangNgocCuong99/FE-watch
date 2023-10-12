import { FormSchemaModel } from "/@/components/Form/src/types/form";

export const dataConfig = (): FormSchemaModel<{
    nameStatus: string;
    moTa: string;
}>[] => [
        {
            field: "nameStatus",
            label: "Tên trạng thái",
        },
        {
            field: "moTa",
            label: "Mô tả",
        },
        {
            field: "nameStatus",
            label: "Tên trạng thái",
        },
        {
            field: "moTa",
            label: "Mô tả",
        },
        {
            field: "nameStatus",
            label: "Tên trạng thái",
        },
        {
            field: "moTa",
            label: "Mô tả",
        },
    ];

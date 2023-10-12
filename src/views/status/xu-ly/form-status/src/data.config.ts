import { FormSchemaModel } from "/@/components/Form/src/types/form";
import { MODE } from "/@/utils";

export const dataConfig = (mode?: MODE): FormSchemaModel<{ nameStatus: string, status: string, inputNumber: number,select:any,InputStatus:any }>[] => [
    {
        field: 'nameStatus',
        label: 'tenTrangThai',
    },
    {
        field: 'nameStatus',
        label: 'tenTrangThai',
    },
    {
        field: 'nameStatus',
        label: 'tenTrangThai',
        colProps: {
            xl: 24,
            xs: 24,
        }
    },
    {
        field: 'InputStatus',
        label: 'InputStatus',
        component:"InputStatus",
    },
    {
        field: 'select',
        label: 'compoent custom',
        component:'SelectStatus',
    },
    {
        field: 'inputNumber',
        label: 'inputNumber',
        component: 'InputNumber'
    },
    {
        field: 'status',
        label: 'select Status',
        component: "Select",
        componentProps:{
            options: [
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true },
            ],
        },
    },
]
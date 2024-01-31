﻿import { Grid } from "@serenity-is/sleekgrid"
import { RemoteView } from "../../slick";
import { FilterStore } from "../filtering/filterstore";
import { Fluent } from "@serenity-is/base";

export interface IDataGrid {
    getElement(): HTMLElement;
    getGrid(): Grid;
    getView(): RemoteView<any>;
    getFilterStore(): FilterStore;
}

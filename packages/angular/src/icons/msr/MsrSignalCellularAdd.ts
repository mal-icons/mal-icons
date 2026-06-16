import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-signal-cellular-add",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrSignalCellularAdd {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m131-131 698-698q14-14 32.5-6.34T880-808v396q-14-8-28.84-14.5Q836.32-433 820-437v-299L224-140h353q8 17 18.46 32.09Q605.92-92.82 619-80H152q-19.69 0-27.34-18.5Q117-117 131-131Zm609-69h-90q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T650-260h90v-90q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T800-350v90h90q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T890-200h-90v90q0 12.75-8.68 21.38Q782.65-80 769.83-80 757-80 748.5-88.62T740-110v-90Zm-516 60 596-596-187.5 187.5L490-406 363.45-279.45 224-140Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrSignalCellularAdd;

import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-signal-cellular-nodata",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrSignalCellularNodata {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m760-197-63 62q-9 8-21 8.5t-21-8.5q-9-9-9-21t9-21l63-63-63-63q-9-9-9-21t9-21q9-9 21-9t21 9l63 63 63-63q9-9 21-9t21 9q9 9 8.5 21t-8.5 21l-62 63 62 63q8 9 8.5 21t-8.5 21q-9 9-21 8.5t-21-8.5l-63-62Zm-629 66 698-698q14-14 32.5-6.5T880-808v394q-14-9-28.5-16.5T820-443v-293L224-140h350q9 17 21.5 32T622-80H152q-20 0-27.5-18.5T131-131Zm93-9 596-596-183 183-140.5 140.5-128 128L224-140Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrSignalCellularNodata;

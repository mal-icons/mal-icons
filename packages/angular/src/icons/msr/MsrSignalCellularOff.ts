import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-signal-cellular-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrSignalCellularOff {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M224-140h510L479-395 224-140Zm600 89-30-29H152q-20 0-27.5-18.5T131-131l306-306-306-306q-9-9-9-21.5t9-21.5q9-9 21.5-9t21.5 9L867-93q9 9 9 21t-9 21q-9 9-21.5 9T824-51Zm56-115-60-60v-510L565-481l-42-42 306-306q14-14 32.5-6.5T880-808v642ZM693-354Zm-86 86Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrSignalCellularOff;

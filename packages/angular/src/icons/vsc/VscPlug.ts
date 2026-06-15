import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-plug",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscPlug {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.72 4H10V1.5C10 1.22 9.78 1 9.5 1C9.22 1 9 1.22 9 1.5V4H7V1.5C7 1.22 6.78 1 6.5 1C6.22 1 6 1.22 6 1.5V4H5.28C4.57 4 4 4.57 4 5.28V8C4 10.04 5.53 11.72 7.5 11.97V14.5C7.5 14.78 7.72 15 8 15C8.28 15 8.5 14.78 8.5 14.5V11.97C10.47 11.72 12 10.04 12 8V5.28C12 4.57 11.43 4 10.72 4ZM11 8C11 9.65 9.65 11 8 11C6.35 11 5 9.65 5 8V5.28C5 5.13 5.12 5 5.28 5H10.72C10.88 5 11 5.13 11 5.28V8H11Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscPlug;

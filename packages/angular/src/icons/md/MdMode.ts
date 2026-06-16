import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-mode",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdMode {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m14.06 9.020.920.92L5.92 19H5v-0.92l9.06-9.06M17.66 3c-0.25 0-0.510.1-0.70.29l-1.83 1.83 3.75 3.75 1.83-1.83a11 0 0 0 0-1.41l-2.34-2.34c-0.2-0.2-0.45-0.29-0.71-0.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdMode;

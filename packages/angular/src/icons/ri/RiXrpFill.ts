import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-xrp-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiXrpFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.78 4H18.94L14.45 8.37C13.8 9 12.92 9.36 12 9.36C11.08 9.36 10.2 9 9.55 8.37L5.06 4H2.22L8.13 9.75C10.27 11.84 13.74 11.84 15.87 9.75L21.78 4ZM2.22 20H5.05L9.56 15.62C10.21 14.98 11.09 14.63 12 14.63C12.92 14.63 13.79 14.98 14.44 15.62L18.95 20H21.78L15.86 14.24C13.73 12.17 10.27 12.17 8.14 14.24L2.22 20Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiXrpFill;

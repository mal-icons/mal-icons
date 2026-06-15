import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-airplane",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgAirplane {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.01 5.13H11.01C12.11 5.13 13.47 5.9 14.03 6.85L16.51 11H21.01C21.56 11 22.01 11.45 22.01 12C22.01 12.55 21.56 13 21.01 13H16.41L13.94 17.15C13.37 18.1 12.02 18.87 10.91 18.87H8.91L12.41 13H5.42L3.99 15.45H1.99L4.01 12L4.01 11.97L2.01 8.55H4.01L5.44 11H12.51L9.01 5.13Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgAirplane;

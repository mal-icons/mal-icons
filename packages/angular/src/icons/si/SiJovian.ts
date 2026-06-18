import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-jovian",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiJovian {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.25 1.65C20.250.74 19.51 0 18.6 0H5.4c-0.91 0-1.650.74-1.65 1.65v20.7c0 0.910.74 1.65 1.65 1.65h13.2c0.91 0 1.65-0.74 1.65-1.65V1.65zm-5.27 4.34a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm0.04 9.02a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-6.01 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiJovian;

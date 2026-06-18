import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-framework7",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiFramework7 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 12a11.95 11.95 0 12.71-7.6h18.57L8.04 23.33C3.36 21.69 0 17.24 0 12zm22.27-6.21A11.94 11.94 0 124 12c0 6.63-5.37 12-12 12-0.79 0-1.57-0.08-2.32-0.22zM4.3 2.8A11.95 11.95 0 112 0c2.93 0 5.62 1.05 7.71 2.8z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiFramework7;

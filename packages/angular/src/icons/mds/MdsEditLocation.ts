import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-edit-location",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsEditLocation {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.11 1.77 19.780.1l2.12 2.12-1.67 1.67-2.12-2.12zm-1 1 2.12 2.12L13.12 11H11V8.89l6.11-6.12zm-1.98-0.13L9.5 8.27v4.24h4.24l5.62-5.62c0.410.990.64 2.10.64 3.32 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8 0-4.98 3.8-8.2 8-8.2 1.09 0 2.160.22 3.130.63z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsEditLocation;

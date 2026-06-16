import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-panorama-horizontal-select",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrPanoramaHorizontalSelect {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 5.5c-3.89 0-6.95-0.84-8.69-1.43A0.990.99 0 0 0 2 5.02V19c0 0.680.66 1.17 1.310.95C5.36 19.26 8.1 18.5 12 18.5c3.87 0 6.660.76 8.69 1.45A11 0 0 0 22 19V5c0-0.68-0.66-1.17-1.31-0.95-2.030.68-4.83 1.45-8.69 1.45z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrPanoramaHorizontalSelect;

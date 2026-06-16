import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-panorama-wide-angle-select",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfPanoramaWideAngleSelect {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 4c-2.73 0-5.220.24-7.950.72l-0.930.16-0.250.9C2.29 7.85 2 9.93 2 12s0.29 4.150.87 6.22l0.250.890.930.16c2.730.49 5.220.73 7.950.73s5.22-0.24 7.95-0.72l0.93-0.160.25-0.89c0.58-2.080.87-4.160.87-6.23s-0.29-4.15-0.87-6.22l-0.25-0.89-0.93-0.16C17.22 4.24 14.73 4 12 4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfPanoramaWideAngleSelect;

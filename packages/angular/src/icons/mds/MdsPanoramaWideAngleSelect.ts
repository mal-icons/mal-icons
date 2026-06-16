import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-panorama-wide-angle-select",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsPanoramaWideAngleSelect {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 4c-3.97 0-6.850.63-9 1-0.55 1.97-1 3.92-1 7 0 3.030.45 5.05 1 7 2.150.37 4.98 1 9 1 3.97 0 6.85-0.63 9-1 0.57-2.02 1-3.99 1-7 0-3.03-0.45-5.05-1-7-2.15-0.37-4.98-1-9-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsPanoramaWideAngleSelect;

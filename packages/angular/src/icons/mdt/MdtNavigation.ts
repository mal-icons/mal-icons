import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-navigation",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtNavigation {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m7.72 17.7 3.47-1.530.81-0.360.810.36 3.47 1.53L12 7.27z","opacity":".3"}],["path",{"d":"m4.5 20.290.710.71L12 18l6.79 3 0.71-0.71L12 2 4.5 20.29zm8.31-4.12-0.81-0.36-0.810.36-3.47 1.53L12 7.27l4.28 10.43-3.47-1.53z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtNavigation;

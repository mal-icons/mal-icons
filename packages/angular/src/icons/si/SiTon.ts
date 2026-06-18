import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-ton",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiTon {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zM7.9 6.7h8.2c1.51 0 2.46 1.63 1.71 2.94l-5.06 8.77a0.860.86 0 0 1-1.49 0L6.2 9.64c-0.76-1.310.2-2.94 1.7-2.94zm4.84 1.5v7.58l1.1-2.13 2.66-4.76a0.470.47 0 0 0-0.41-0.7h-3.35zM7.9 8.2a0.460.46 0 0 0-0.410.69l2.66 4.75 1.1 2.13V8.2H7.9z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiTon;

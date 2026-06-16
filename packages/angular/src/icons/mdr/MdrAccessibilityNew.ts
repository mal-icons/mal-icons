import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-accessibility-new",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrAccessibilityNew {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.75 6.99c-0.14-0.55-0.69-0.87-1.24-0.75-2.380.53-5.030.76-7.510.76s-5.13-0.23-7.51-0.76c-0.55-0.12-1.10.2-1.240.75-0.140.560.2 1.130.75 1.26 1.610.36 3.350.61 5 0.75v12c0 0.550.45 1 1 1s1-0.45 1-1v-5h2v5c0 0.550.45 1 1 1s1-0.45 1-1V9c1.65-0.14 3.39-0.39 4.99-0.750.56-0.130.9-0.70.76-1.26zM12 6c1.1 0 2-0.9 2-2s-0.9-2-2-2-2 0.9-2 2 0.9 2 2 2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrAccessibilityNew;

import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-rootssage",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiRootssage {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.38 4.23l1.71 5.08-4.48-3.14L0 9.4l1.75 5.20.010.03H7.3L2.82 17.77l1.75 5.20.010.03h5.71L12 17.93l1.7 5.050.010.03h5.71l1.76-5.23-4.48-3.14h5.54L24 9.4l-4.62-3.23-4.48 3.14 1.71-5.07L12 1zm0.11 10.34l1.72-5.11h5.58l1.72 5.11-4.51 3.16z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiRootssage;

import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-change-circle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdChangeCircle {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.17-5.24-1.1-1.1c0.71-1.330.53-3.01-0.59-4.13A3.48 3.48 0 0 0 12 8.5c-0.03 0-0.060.01-0.090.01L13 9.6l-1.06 1.06-2.83-2.83L11.94 5 13 6.06l-0.960.96c1.270.01 2.530.48 3.5 1.44 1.7 1.71 1.91 4.360.63 6.3zm-1.28 1.41L12.06 19 11 17.94l0.95-0.95a4.97 4.97 0 0 1-3.48-1.46 5.01 5.01 0 0 1-0.64-6.29l1.1 1.1c-0.71 1.33-0.53 3.010.59 4.130.70.7 1.63 1.04 2.56 1.01L11 14.4l1.06-1.06 2.83 2.83z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdChangeCircle;

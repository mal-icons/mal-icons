import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-motion-photos-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsMotionPhotosOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 6c-0.92 0-1.80.22-2.580.59l7.99 7.99c0.37-0.780.59-1.660.59-2.58 0-3.31-2.69-6-6-6zM2.81 2.81 1.39 4.22l2.27 2.27A9.91 9.91 0 0 0 2 12c0 5.52 4.48 10 10 10 2.04 0 3.93-0.61 5.51-1.66l2.27 2.27 1.41-1.42L2.81 2.81zM12 20c-4.41 0-8-3.59-8-8 0-1.480.41-2.86 1.12-4.06l1.47 1.47C6.22 10.2 6 11.08 6 12c0 3.31 2.69 6 6 6 0.92 0 1.8-0.22 2.58-0.59l1.47 1.47A7.87 7.87 0 0 1 12 20z"}],["path",{"d":"M12 4c4.41 0 8 3.59 8 8 0 1.48-0.41 2.86-1.12 4.05l1.45 1.45A9.78 9.78 0 0 0 22 12c0-5.52-4.48-10-10-10-2.04 0-3.930.61-5.51 1.66l1.45 1.45C9.14 4.41 10.52 4 12 4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsMotionPhotosOff;

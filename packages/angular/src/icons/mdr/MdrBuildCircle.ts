import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-build-circle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrBuildCircle {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.54 13.85-0.690.69a11 0 0 1-1.41 0l-3.05-3.05c-1.220.43-2.640.17-3.62-0.81a3.47 3.47 0 0 1-0.59-4.1l2.35 2.35 1.41-1.41-2.36-2.35c1.32-0.71 2.99-0.52 4.10.590.980.98 1.24 2.40.81 3.62l3.05 3.05c0.390.390.39 1.03 0 1.42z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrBuildCircle;

import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-cloud-moon-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsCloudMoonFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.47 11a4.5 4.5 0 0 0-8.72-0.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5z"}],["path",{"d":"M11.29 1.78a0.50.5 0 0 0-0.56-0.75 4.6 4.6 0 0 0-3.18 5 5.5 5.5 0 0 1 1.060.21A3.6 3.6 0 0 1 9.83 2.62a4.59 4.59 0 0 0 4.31 5.74 3.58 3.58 0 0 1-2.240.63q0.240.480.39 1a4.59 4.59 0 0 0 3.62-2.040.50.5 0 0 0-0.56-0.75 3.59 3.59 0 0 1-4.07-5.42z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsCloudMoonFill;

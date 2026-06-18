import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-gitlab",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiGitlab {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m23.6 9.59-0.03-0.09L20.30.98a0.850.85 0 0 0-0.34-0.40.870.87 0 0 0-10.050.870.87 0 0 0-0.290.44l-2.21 6.75H7.54l-2.21-6.75a0.860.86 0 0 0-0.29-0.440.870.87 0 0 0-1-0.050.860.86 0 0 0-0.340.4L0.43 9.5l-0.030.09a6.07 6.07 0 0 0 2.01 7.01l0.010.010.030.02 4.98 3.73 2.46 1.86 1.5 1.13a1.01 1.01 0 0 0 1.22 0l1.5-1.13 2.46-1.86 5.01-3.750.01-0.01a6.07 6.07 0 0 0 2.01-7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiGitlab;

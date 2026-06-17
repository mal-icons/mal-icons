import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-gitlab",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsGitlab {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"m15.73 6.1-0.02-0.06L13.530.36a0.570.57 0 0 0-0.56-0.360.60.6 0 0 0-0.330.120.60.6 0 0 0-0.190.29l-1.47 4.5H5.03l-1.47-4.5A0.570.57 0 0 0 2.470.36L0.29 6.04l-0.020.06A4.04 4.04 0 0 0 1.61 10.77l0.010.010.020.01 3.32 2.49 1.64 1.24 1 0.76a0.670.67 0 0 0 0.81 0l1-0.75 1.64-1.24 3.34-2.50.01-0.01a4.05 4.05 0 0 0 1.34-4.67Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsGitlab;

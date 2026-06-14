import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-package-dependencies-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcPackageDependencies24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.130.64a1.75 1.75 0 0 1 1.75 0l8.25 4.76c0.10.060.20.130.290.21a0.750.75 0 0 1 0.550.96c0.020.110.040.230.040.35v3.33a0.750.75 0 0 1-1.5 0V7.64l-7.75 4.47V22.36a0.750.75 0 0 1-1.120.65l-8.75-5.05a1.75 1.75 0 0 1-0.87-1.51V6.92c0-0.120.01-0.240.04-0.35a0.750.75 0 0 1 0.55-0.96c0.09-0.080.18-0.150.29-0.2L9.130.64Zm0.88 10.17v0l7.75-4.47-7.62-4.4a0.250.25 0 0 0-0.25 0L2.25 6.34Zm-8.5-3.17v8.8c0 0.090.050.170.130.22l7.63 4.4v-8.95Z"}],["path",{"d":"m16.62 17.5 2.9-2.7a0.750.75 0 0 0-1.02-1.1l-4.28 4a0.750.75 0 0 0 0 1.1l4.29 4a0.750.75 0 1 0 1.02-1.1L16.62 19h6.63a0.750.75 0 0 0 0-1.5h-6.63Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcPackageDependencies24;

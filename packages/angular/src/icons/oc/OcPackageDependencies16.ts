import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-package-dependencies-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcPackageDependencies16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.120.39a1.75 1.75 0 0 1 1.76 0l5.25 3.05c0.540.310.870.890.87 1.51V7.25a0.750.75 0 0 1-1.5 0V5.68L7.75 8.43v6.38a1 1 0 0 1-1.50.87L0.87 12.56A1.75 1.75 0 0 1 0 11.05V4.95c0-0.620.33-1.20.87-1.51ZM7.13 1.69a0.250.25 0 0 0-0.25 0l-4.63 2.69L7 7.13l4.76-2.76ZM1.5 11.05a0.250.25 0 0 0 0.130.22l4.63 2.68V8.43L1.5 5.68Zm11.67-0.28L12 12h3.25a0.750.75 0 0 1 0 1.5h-3.25l1.17 1.23a0.750.75 0 1 1-1.09 1.03l-2.38-2.5a0.750.75 0 0 1 0-1.03l2.38-2.5a0.750.75 0 0 1 1.09 1.03Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcPackageDependencies16;

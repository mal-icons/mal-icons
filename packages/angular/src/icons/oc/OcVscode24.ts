import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-vscode-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcVscode24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","fill-rule":"evenodd","d":"M16.87 1.02c0.28-0.050.57-0.010.820.12l4.53 2.19c0.480.230.780.710.78 1.25V19.43c00.53-0.3 1.01-0.78 1.24l-4.53 2.19c-0.170.08-0.350.13-0.540.14-0.190.01-0.37-0.02-0.55-0.09-0.18-0.07-0.34-0.17-0.47-0.31l-8.67-7.95-3.78 2.88c-0.170.13-0.380.2-0.590.19-0.21-0.01-0.42-0.09-0.58-0.24l-1.21-1.11c-0.09-0.09-0.17-0.19-0.22-0.31-0.05-0.12-0.08-0.24-0.08-0.37 0-0.130.03-0.260.08-0.370.05-0.120.13-0.220.22-0.31l3.27-3-3.27-3c-0.09-0.09-0.17-0.19-0.22-0.31C1.03 8.57 1 8.44 1 8.32c0-0.130.03-0.260.08-0.370.05-0.120.13-0.220.22-0.31l1.21-1.11c0.16-0.140.36-0.230.58-0.240.21-0.010.420.060.590.19l3.78 2.88 8.67-7.95c0.2-0.20.46-0.340.74-0.39M10.92 12l6.58 5.02v-0.3H17.5V8.86h0V6.98z","clip-rule":"evenodd"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcVscode24;

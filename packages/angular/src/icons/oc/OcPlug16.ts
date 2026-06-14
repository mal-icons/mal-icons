import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-plug-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcPlug16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 8H2.5a1 1 0 0 0-1 1v5.25a0.750.75 0 0 1-1.5 0V9a2.5 2.5 0 0 1 2.5-2.5H4V5.13a1.75 1.75 0 0 1 1.53-1.74l2.83-0.350.76-0.91c0.33-0.40.83-0.63 1.34-0.63h0.78c0.97 0 1.750.78 1.75 1.75V4h2.25a0.750.75 0 0 1 0 1.5H13v4h2.25a0.750.75 0 0 1 0 1.5H13v0.75a1.75 1.75 0 0 1-1.75 1.75h-0.78c-0.52 0-1.01-0.23-1.34-0.63l-0.76-0.91-2.83-0.35A1.75 1.75 0 0 1 4 9.87Zm6.28-4.91-0.95 1.14a0.750.75 0 0 1-0.480.27l-3.120.39a0.250.25 0 0 0-0.220.25v4.73c0 0.130.090.230.220.25l3.120.39a0.750.75 0 0 1 0.480.26l0.95 1.14a0.250.25 0 0 0 0.190.09h0.78a0.250.25 0 0 0 0.25-0.25v-8.5a0.250.25 0 0 0-0.25-0.25h-0.78a0.250.25 0 0 0-0.190.09Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcPlug16;

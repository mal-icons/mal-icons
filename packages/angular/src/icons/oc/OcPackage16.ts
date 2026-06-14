import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-package-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcPackage16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"m8.880.39 5.25 3.05c0.540.310.870.890.87 1.51v6.1a1.75 1.75 0 0 1-0.87 1.51l-5.25 3.05a1.75 1.75 0 0 1-1.76 0l-5.25-3.04A1.75 1.75 0 0 1 1 11.05V4.95c0-0.620.33-1.20.87-1.51L7.120.39a1.75 1.75 0 0 1 1.76 0ZM7.88 1.69l-4.63 2.69L8 7.13l4.76-2.76-4.63-2.68a0.250.25 0 0 0-0.25 0ZM2.5 5.68v5.37c0 0.090.050.170.130.22l4.63 2.68V8.43Zm6.25 8.27 4.63-2.68a0.250.25 0 0 0 0.13-0.22V5.68L8.75 8.43Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcPackage16;

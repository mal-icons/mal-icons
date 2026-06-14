import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-versions-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcVersions16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.75 14A1.75 1.75 0 0 1 6 12.25v-8.5C6 2.78 6.78 2 7.75 2h6.5c0.97 0 1.750.78 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14Zm-0.25-1.75c0 0.140.110.250.250.25h6.5a0.250.25 0 0 0 0.25-0.25v-8.5a0.250.25 0 0 0-0.25-0.25h-6.5a0.250.25 0 0 0-0.250.25ZM4.9 3.51a0.750.75 0 0 1-0.27 1.020.250.25 0 0 0-0.130.22v6.5c0 0.090.050.170.130.22a0.750.75 0 0 1-0.75 1.3A1.75 1.75 0 0 1 3 11.25v-6.5c0-0.650.35-1.210.87-1.52a0.750.75 0 0 1 1.020.27ZM1.63 5.53h0a0.250.25 0 0 0-0.130.22v4.5c0 0.090.050.170.130.22a0.750.75 0 0 1-0.75 1.3A1.75 1.75 0 0 1 0 10.25v-4.5a1.75 1.75 0 0 1 0.87-1.520.750.75 0 1 1 0.75 1.3Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcVersions16;

import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-paste-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcPaste16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.63 3.53a0.250.25 0 0 0-0.130.22v9.5c0 0.140.110.250.250.25h8.5a0.250.25 0 0 0 0.25-0.25v-9.5a0.250.25 0 0 0-0.13-0.220.750.75 0 0 1 0.75-1.3c0.540.310.870.890.87 1.52v9.5A1.75 1.75 0 0 1 12.25 15h-8.5A1.75 1.75 0 0 1 2 13.25v-9.5c0-0.620.33-1.20.87-1.51a0.750.75 0 0 1 0.75 1.3ZM5.75 1h4.5a0.750.75 0 0 1 0.750.75v3a0.750.75 0 0 1-0.750.75h-4.5A0.750.75 0 0 1 5 4.75v-3A0.750.75 0 0 1 5.75 1Zm0.75 3h3V2.5h-3Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcPaste16;

import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-zap-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcZap24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.72 1.33a1.34 1.34 0 0 1 2.11 1.55L15.15 9h4.16c1.62 0 2.37 2.02 1.14 3.08L8.1 22.72a1.15 1.15 0 0 1-1.81-1.32L9 15H4.67c-1.62 0-2.37-2.01-1.15-3.07l12.19-10.6Zm0.45 1.6L4.51 13.06a0.250.25 0 0 0 0.160.44h5.45a0.750.75 0 0 1 0.69 1.04l-2.56 6.07 11.22-9.67a0.250.25 0 0 0-0.16-0.44H14a0.750.75 0 0 1-0.69-1.05Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcZap24;

import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-fold-up-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcFoldUp16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.82 1.68 4.93 4.57A0.250.25 0 0 0 5.1 5H7.25v3.24a0.750.75 0 1 0 1.5 0V5h2.15a0.250.25 0 0 0 0.18-0.43L8.18 1.68a0.250.25 0 0 0-0.35 0ZM13.75 11a0.750.75 0 0 0 0 1.5h0.5a0.750.75 0 0 0 0-1.5h-0.5Zm-3.750.75a0.750.75 0 0 1 0.75-0.75h0.5a0.750.75 0 0 1 0 1.5h-0.5a0.750.75 0 0 1-0.75-0.75ZM7.75 11a0.750.75 0 0 0 0 1.5h0.5a0.750.75 0 0 0 0-1.5h-0.5ZM4 11.75a0.750.75 0 0 1 0.75-0.75h0.5a0.750.75 0 0 1 0 1.5h-0.5a0.750.75 0 0 1-0.75-0.75ZM1.75 11a0.750.75 0 0 0 0 1.5h0.5a0.750.75 0 0 0 0-1.5h-0.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcFoldUp16;

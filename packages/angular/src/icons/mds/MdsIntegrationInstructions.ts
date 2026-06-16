import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-integration-instructions",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsIntegrationInstructions {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 3h-6.18C14.4 1.84 13.3 1 12 1s-2.40.84-2.82 2H3v18h18V3zM11 14.17l-1.41 1.42L6 12l3.59-3.59L11 9.83 8.83 12 11 14.17zm1-9.92c-0.41 0-0.75-0.34-0.75-0.75s0.34-0.750.75-0.750.750.340.750.75-0.340.75-0.750.75zm2.41 11.34L13 14.17 15.17 12 13 9.83l1.41-1.42L18 12l-3.59 3.59z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsIntegrationInstructions;

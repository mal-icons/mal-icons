import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-no-luggage",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsNoLuggage {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.75 9v0.92l1.75 1.75V9H16v4.17l3 3V6h-4V2H9v4h-0.17l3 3h0.92zM10.5 3.5h3V6h-3V3.5zm10.69 17.69L2.81 2.81 1.39 4.22 5 7.83V21h2v1h2v-1h6v1h2v-1h1.17l1.61 1.61 1.41-1.42zM8 18v-7.17l1.5 1.5V18H8zm3.25 0v-3.92l1.5 1.5V18h-1.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsNoLuggage;

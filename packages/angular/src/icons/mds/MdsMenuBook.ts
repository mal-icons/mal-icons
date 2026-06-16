import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-menu-book",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsMenuBook {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 5c-1.11-0.35-2.33-0.5-3.5-0.5-1.95 0-4.050.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v15.5C2.45 20.4 4.55 20 6.5 20s4.050.4 5.5 1.5c1.45-1.1 3.55-1.5 5.5-1.5 1.17 0 2.390.15 3.50.50.750.25 1.40.55 2 1V6c-0.6-0.45-1.25-0.75-2-1zm0 13.5c-1.1-0.35-2.3-0.5-3.5-0.5-1.7 0-4.150.65-5.5 1.5V8c1.35-0.85 3.8-1.5 5.5-1.5 1.2 0 2.40.15 3.50.5v11.5z"}],["path",{"d":"M17.5 10.5c0.88 0 1.730.09 2.50.26V9.24c-0.79-0.15-1.64-0.24-2.5-0.24-1.7 0-3.240.29-4.50.83v1.66c1.13-0.64 2.7-0.99 4.5-0.99zM13 12.49v1.66c1.13-0.64 2.7-0.99 4.5-0.990.88 0 1.730.09 2.50.26V11.9c-0.79-0.15-1.64-0.24-2.5-0.24-1.7 0-3.240.3-4.50.83zm4.5 1.84c-1.7 0-3.240.29-4.50.83v1.66c1.13-0.64 2.7-0.99 4.5-0.990.88 0 1.730.09 2.50.26v-1.52c-0.79-0.16-1.64-0.24-2.5-0.24z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsMenuBook;

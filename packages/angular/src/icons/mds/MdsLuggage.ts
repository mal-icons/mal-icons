import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-luggage",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsLuggage {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 6h-4V2H9v4H5v15h2c0 0.550.45 1 1 1s1-0.45 1-1h6c0 0.550.45 1 1 1s1-0.45 1-1h2V6zM9.5 18H8V9h1.5v9zm3.25 0h-1.5V9h1.5v9zm0.75-12h-3V3.5h3V6zM16 18h-1.5V9H16v9z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsLuggage;

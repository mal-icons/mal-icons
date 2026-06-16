import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-all-inbox",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrAllInbox {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 3H5c-1.1 0-2 0.9-2 2v7c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zm0 6h-3.14c-0.47 0-0.840.33-0.970.78C14.53 11.04 13.35 12 12 12s-2.53-0.96-2.89-2.22c-0.13-0.45-0.5-0.78-0.97-0.78H5V6c0-0.550.45-1 1-1h12c0.55 0 1 0.45 1 1v3zm-3.13 7H20c0.55 0 1 0.45 1 1v2c0 1.1-0.9 2-2 2H5c-1.1 0-2-0.9-2-2v-2c0-0.550.45-1 1-1h4.13c0.47 0 0.850.340.980.8a3 3 0 0 0 5.78 0c0.13-0.460.51-0.80.98-0.8z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrAllInbox;

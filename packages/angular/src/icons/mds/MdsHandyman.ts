import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-handyman",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsHandyman {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.37 12.87h-0.99l-2.54 2.54v0.99l6.01 6.01 3.54-3.54-6.02-6z"}],["path",{"d":"m17.34 10.19 1.41-1.41 2.12 2.12a3 3 0 0 0 0-4.24l-3.54-3.54-1.41 1.41V1.71l-0.7-0.71-3.54 3.540.710.71h2.83l-1.41 1.41 1.06 1.06-2.89 2.89-4.13-4.13V5.06L4.83 2.04 2 4.87 5.03 7.9h1.41l4.13 4.13-0.850.85H7.6l-6.01 6.01 3.54 3.54 6.01-6.01V14.3l5.15-5.15 1.05 1.04z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsHandyman;

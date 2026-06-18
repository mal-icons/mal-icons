import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-shield-quarter",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxShieldQuarter {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 6.9a11 0 0 0-0.55-0.79l-8-4a1 1 0 0 0-0.89 0l-8 4a1 1 0 0 0-0.550.8c-0.010.11-0.96 10.77 8.59 15.01a0.990.99 0 0 0 0.81 0c9.55-4.25 8.6-14.91 8.59-15.01zM12 19.9V12H5.51a15.47 15.47 0 0 1-0.54-4.36L12 4.12V12h6.46c-0.76 2.74-2.5 5.98-6.46 7.9z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxShieldQuarter;

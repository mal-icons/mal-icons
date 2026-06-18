import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-shield",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxShield {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 6.9a11 0 0 0-0.55-0.8l-7.97-4a11 0 0 0-0.890l-8.03 4c-0.30.15-0.50.44-0.540.77-0.010.1-1.14 9.74 8.54 15.01a11 0 0 0 0.97-0.01c9.31-5.26 8.51-14.57 8.48-14.97zm-8.98 12.94c-6.86-4.01-7.14-10.35-7.06-12.2l7.07-3.52 7 3.51c0.01 1.87-0.48 8.24-7.01 12.22z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxShield;

import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-award",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxAward {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 9c0 1.90.77 3.63 2 4.89V21a11 0 0 0 1.450.9L12 20.12l3.55 1.78a0.990.99 0 0 0 0.97-0.04c0.3-0.180.48-0.50.48-0.85v-7.11a6.98 6.98 0 0 0 2-4.89C19 5.14 15.86 2 12 2S5 5.14 5 9zm7.45 9.11a1 1 0 0 0-0.89 0L9 19.38v-4.07c0.910.43 1.930.69 3 0.69s2.09-0.25 3-0.68v4.07l-2.55-1.28zM12 4c2.76 0 5 2.24 5 5A5.01 5.01 0 0 1 12 14c-2.76 0-5-2.24-5-5A5.01 5.01 0 0 1 12 4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxAward;

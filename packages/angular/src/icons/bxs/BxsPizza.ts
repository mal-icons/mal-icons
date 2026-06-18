import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-pizza",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsPizza {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.76 2.02a11 0 0 0-0.990.7L3.58 19.17a1 1 0 0 0 1.25 1.25l16.44-5.19a0.990.99 0 0 0 0.7-0.99C21.6 7.67 16.33 2.4 9.76 2.02zM10 16a2 2 0 1 1 0-4A2 2 0 0 1 10 16zm6-2a2 2 0 1 1 0-4A2 2 0 0 1 16 14z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsPizza;

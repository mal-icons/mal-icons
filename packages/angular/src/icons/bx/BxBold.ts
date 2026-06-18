import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-bold",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxBold {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.06 11.22A4.46 4.46 0 0 0 18 8.5C18 6.02 15.98 4 13.5 4H6v15h8c2.48 0 4.5-2.02 4.5-4.5a4.48 4.48 0 0 0-1.44-3.28zM13.5 7c0.83 0 1.50.67 1.5 1.5s-0.67 1.5-1.5 1.5H9V7h4.5zm0.5 9H9v-3h5c0.83 0 1.50.67 1.5 1.5S14.83 16 14 16z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxBold;

import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-exchange-alt-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaExchangeAltSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 22.19 2.28 L 20.78 3.72 L 25.06 8 L 4 8 L 4 10 L 25.06 10 L 20.78 14.28 L 22.19 15.72 L 28.91 9 Z M 9.81 16.28 L 3.09 23 L 9.81 29.72 L 11.22 28.28 L 6.94 24 L 28 24 L 28 22 L 6.94 22 L 11.22 17.72 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaExchangeAltSolid;

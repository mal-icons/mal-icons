import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-trademark-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaTrademarkSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 3 8 L 3 10 L 7 10 L 7 23 L 9 23 L 9 10 L 13 10 L 13 8 Z M 15 8 L 15 23 L 17 23 L 17 10.88 L 21.16 17.53 L 22 18.88 L 22.84 17.53 L 27 10.88 L 27 23 L 29 23 L 29 8 L 26.44 8 L 26.16 8.47 L 22 15.13 L 17.84 8.47 L 17.56 8 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaTrademarkSolid;

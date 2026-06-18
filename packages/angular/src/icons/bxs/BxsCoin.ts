import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-coin",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsCoin {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 5C7.03 5 2 6.55 2 9.5S7.03 14 12 14c4.97 0 10-1.55 10-4.5S16.97 5 12 5zm-5 9.94v3c1.240.3 2.610.48 4 0.54v-3a21.17 21.17 0 0 1-4-0.54zm6 0.54v3a20.99 20.99 0 0 0 4-0.54v-3a20.99 20.99 0 0 1-4 0.54zm6-1.18v3c1.8-0.75 3-1.86 3-3.3v-3c0 1.44-1.2 2.54-3 3.3zm-14 3v-3C3.2 13.54 2 12.44 2 11v3c0 1.44 1.2 2.54 3 3.3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsCoin;

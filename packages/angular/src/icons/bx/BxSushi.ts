import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-sushi",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxSushi {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2C7.51 2 4 4.2 4 7v10c0 2.8 3.51 5 8 5s8-2.2 8-5V7c0-2.8-3.51-5-8-5zm0 18c-3.54 0-6-1.58-6-3v-6.67A10.52 10.52 0 0 0 12 12a10.52 10.52 0 0 0 6-1.67V17c0 1.42-2.46 3-6 3zm0-10c-3.54 0-6-1.58-6-3s2.46-3 6-3 6 1.58 6 3-2.46 3-6 3z"}],["ellipse",{"cx":"12","cy":"7","rx":"3","ry":"1.71"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxSushi;

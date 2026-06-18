import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-balloon-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBalloonOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 8a2 2 0 0 0 -2 -2"}],["path",{"d":"M7.76 3.75a6 6 0 0 1 10.24 4.25c0 1.85 -0.37 3.56 -1.01 4.99m-1.59 2.42c-0.97 1 -2.14 1.59 -3.4 1.59c-3.31 0 -6 -4.03 -6 -9c0 -0.59 0.09 -1.17 0.25 -1.71"}],["path",{"d":"M12 17v1a2 2 0 0 1 -2 2h-3a2 2 0 0 0 -2 2"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBalloonOff;

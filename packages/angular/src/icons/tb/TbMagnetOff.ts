import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-magnet-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbMagnetOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 3a2 2 0 0 1 2 2m0 4v4a3 3 0 0 0 5.55 1.58m0.45 -3.58v-6a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v8a7.99 7.99 0 0 1 -0.42 2.58m-1.46 2.58a8 8 0 0 1 -14.11 -5.16v-8c0 -0.3 0.07 -0.58 0.18 -0.83"}],["path",{"d":"M4 8h4"}],["path",{"d":"M15 8h4"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbMagnetOff;

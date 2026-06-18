import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-stereo-glasses",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbStereoGlasses {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 3h-2l-3 9"}],["path",{"d":"M16 3h2l3 9"}],["path",{"d":"M3 12v7a1 1 0 0 0 1 1h4.59a1 1 0 0 0 0.71 -0.29l2 -2a1 1 0 0 1 1.41 0l2 2a1 1 0 0 0 0.71 0.29h4.59a1 1 0 0 0 1 -1v-7h-18"}],["path",{"d":"M7 16h1"}],["path",{"d":"M16 16h1"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbStereoGlasses;

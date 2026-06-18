import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-mickey",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbMickey {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.5 3a3.5 3.5 0 0 1 3.25 4.8a7.02 7.02 0 0 0 -2.42 2.1a3.5 3.5 0 1 1 -0.83 -6.9"}],["path",{"d":"M18.5 3a3.5 3.5 0 1 1 -0.83 6.9a7.01 7.01 0 0 0 -2.42 -2.1a3.5 3.5 0 0 1 3.25 -4.8"}],["path",{"d":"M5 14a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbMickey;

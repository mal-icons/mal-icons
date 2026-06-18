import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-pick",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbPick {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 8l-9.38 9.42a2.09 2.09 0 0 0 0 2.97a2.11 2.11 0 0 0 2.98 0l9.41 -9.38"}],["path",{"d":"M9 3h4.59a1 1 0 0 1 0.71 0.29l6.41 6.41a1 1 0 0 1 0.29 0.71v4.59a2 2 0 1 1 -4 0v-3l-5 -5h-3a2 2 0 1 1 0 -4"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbPick;

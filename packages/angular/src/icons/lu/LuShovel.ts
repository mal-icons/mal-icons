import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-shovel",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuShovel {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.56 4.56a1.5 1.5 0 0 1 0 2.12l-0.470.47a3 3 0 0 1-4.21-0.03 3 3 0 0 1 0-4.24l0.44-0.44a1.5 1.5 0 0 1 2.12 0z"}],["path",{"d":"M3 22a1 1 0 0 1-1-1v-3.59a1 1 0 0 1 0.29-0.71l3.36-3.35a1.21 1.21 0 0 1 1.7 0l3.3 3.3a1.21 1.21 0 0 1 0 1.7l-3.35 3.36a1 1 0 0 1-0.710.29z"}],["path",{"d":"m9 15 7.88-7.88"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuShovel;

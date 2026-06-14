import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-fence",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuFence {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 3 2 5v15c0 0.60.4 1 1 1h2c0.6 0 1-0.4 1-1V5Z"}],["path",{"d":"M6 8h4"}],["path",{"d":"M6 18h4"}],["path",{"d":"m12 3-2 2v15c0 0.60.4 1 1 1h2c0.6 0 1-0.4 1-1V5Z"}],["path",{"d":"M14 8h4"}],["path",{"d":"M14 18h4"}],["path",{"d":"m20 3-2 2v15c0 0.60.4 1 1 1h2c0.6 0 1-0.4 1-1V5Z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuFence;

import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-zap-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuZapOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.51 4.86 13.12 2.17a0.50.5 0 0 1 0.860.46l-1.38 4.32"}],["path",{"d":"M15.66 10H20a1 1 0 0 1 0.78 1.63l-1.72 1.77"}],["path",{"d":"M16.27 16.27 10.88 21.83a0.50.5 0 0 1-0.86-0.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-0.78-1.63l4.51-4.64"}],["path",{"d":"m2 2 20 20"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuZapOff;

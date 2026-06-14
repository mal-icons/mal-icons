import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-origami",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuOrigami {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 12V4a1 1 0 0 1 1-1h6.3a1 1 0 0 1 0.65 1.76l-4.7 4.03"}],["path",{"d":"m12 21-7.41-7.41A2 2 0 0 1 4 12.17V6.42a1 1 0 0 1 1.71-0.71L20 20.01"}],["path",{"d":"m12.21 3.38 8.41 14.97a1 1 0 0 1-0.17 1.2l-1.17 1.16a1 1 0 0 1-0.710.29H6.35a1 1 0 0 1-0.62-0.22L3.25 18.8a1 1 0 0 1 0.63-1.78l4.170.03"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuOrigami;

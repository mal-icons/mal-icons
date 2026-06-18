import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-reddit",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandReddit {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 8c2.65 0 5.03 0.83 6.68 2.14a2.5 2.5 0 0 1 2.33 4.36c0 3.59 -4.03 6.5 -9 6.5c-4.87 0 -8.85 -2.8 -9 -6.29l-1 -0.21a2.5 2.5 0 0 1 2.33 -4.36c1.65 -1.31 4.03 -2.14 6.67 -2.14l1 0"}],["path",{"d":"M12 8l1 -5l6 1"}],["path",{"d":"M18 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M8.5 13a0.5 0.5 0 1 0 1 0a0.5 0.5 0 1 0 -1 0","fill":"currentColor"}],["path",{"d":"M14.5 13a0.5 0.5 0 1 0 1 0a0.5 0.5 0 1 0 -1 0","fill":"currentColor"}],["path",{"d":"M10 17c0.67 0.33 1.33 0.5 2 0.5s1.33 -0.17 2 -0.5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandReddit;

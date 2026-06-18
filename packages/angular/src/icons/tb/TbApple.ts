import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-apple",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbApple {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 11.32c0 3.1 0.44 5.32 2.22 7.98c1.35 1.8 3.16 2.25 5.08 0.99c0.43 -0.27 0.97 -0.27 1.4 0c1.92 1.26 3.73 0.81 5.08 -0.99c1.78 -2.66 2.22 -4.88 2.22 -7.98c0 -2.66 -1.99 -5.32 -4.44 -5.32c-1.27 0 -2.41 0.69 -3.22 1.44a0.5 0.5 0 0 1 -0.67 0c-0.81 -0.75 -1.95 -1.44 -3.22 -1.44c-2.45 0 -4.44 2.66 -4.44 5.32"}],["path",{"d":"M7 12c0 -1.47 0.45 -2.34 1.5 -3"}],["path",{"d":"M12 7c0 -1.2 0.87 -4 3 -4"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbApple;

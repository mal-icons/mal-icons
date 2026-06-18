import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-carrot",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbCarrot {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 21s9.83 -3.49 12.68 -6.34a4.49 4.49 0 0 0 0 -6.34a4.48 4.48 0 0 0 -6.34 0c-2.86 2.86 -6.35 12.69 -6.35 12.69l0.01 0"}],["path",{"d":"M9 13l-1.5 -1.5"}],["path",{"d":"M16 14l-2 -2"}],["path",{"d":"M22 8s-1.14 -2 -3 -2c-1.41 0 -3 2 -3 2s1.14 2 3 2s3 -2 3 -2"}],["path",{"d":"M16 2s-2 1.14 -2 3s2 3 2 3s2 -1.58 2 -3c0 -1.86 -2 -3 -2 -3"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbCarrot;

import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-oauth",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandOauth {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 12a10 10 0 1 0 20 0a10 10 0 1 0 -20 0"}],["path",{"d":"M12.56 6c0.65 0 1.24 0.37 1.51 0.95l2.84 7.85a1.65 1.65 0 0 1 -1.01 2.11a1.67 1.67 0 0 1 -2.07 -0.85l-0.46 -1.05h-2.73l-0.4 0.91a1.67 1.67 0 0 1 -1.98 1.05l-0.15 -0.05a1.65 1.65 0 0 1 -1.06 -1.96l2.82 -7.85a1.66 1.66 0 0 1 1.41 -1.09l1.27 -0.01"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandOauth;

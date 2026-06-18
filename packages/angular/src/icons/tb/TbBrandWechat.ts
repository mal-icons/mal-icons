import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-wechat",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandWechat {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.5 10c3.04 0 5.5 2.02 5.5 4.5c0 1.4 -0.78 2.65 -2 3.47l0 2.03l-1.96 -1.18a6.65 6.65 0 0 1 -1.54 0.18c-3.04 0 -5.5 -2.01 -5.5 -4.5s2.46 -4.5 5.5 -4.5"}],["path",{"d":"M11.2 15.7c-0.69 0.2 -1.43 0.3 -2.2 0.3a8.01 8.01 0 0 1 -2.61 -0.43l-2.39 1.43v-2.8c-1.24 -1.08 -2 -2.56 -2 -4.2c0 -3.31 3.13 -6 7 -6c3.78 0 6.86 2.57 7 5.79l0 0.23"}],["path",{"d":"M10 8h0.01"}],["path",{"d":"M7 8h0.01"}],["path",{"d":"M15 14h0.01"}],["path",{"d":"M18 14h0.01"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandWechat;

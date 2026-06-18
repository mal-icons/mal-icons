import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-cloudflare",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandCloudflare {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.03 7.01c2.47 -0.01 3.3 1.29 3.97 2.99c4 0 4.99 3.83 5 6h-20c0 -1.64 1.36 -2.95 3 -3c0 -1.5 1 -3 3 -3c0.66 -1.94 2.56 -2.99 5.03 -2.99"}],["path",{"d":"M12 13h6"}],["path",{"d":"M17 10l-2.5 6"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandCloudflare;

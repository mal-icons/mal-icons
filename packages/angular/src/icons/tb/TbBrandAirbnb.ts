import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-airbnb",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandAirbnb {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 10c-2 0 -3 1 -3 3c0 1.5 1.49 3.54 3 5.5c1 1 1.5 1.5 2.5 2s2.5 1 4.5 -0.5s1.5 -3.5 0.5 -6s-2.33 -5.5 -5 -9.5c-0.83 -1 -1.5 -1.5 -2.5 -1.5c-1 0 -1.62 0.45 -2.5 1.5c-2.67 4 -4 7 -5 9.5s-1.5 4.5 0.5 6s3.5 1 4.5 0.5s1.5 -1 2.5 -2c1.51 -1.96 3 -4 3 -5.5c0 -2 -1 -3 -3 -3"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandAirbnb;

import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-premium-rights",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbPremiumRights {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M13.87 9.75c-0.25 -0.48 -0.71 -0.77 -1.2 -0.75h-1.33c-0.74 0 -1.33 0.67 -1.33 1.5c0 0.83 0.6 1.5 1.33 1.5h1.33c0.74 0 1.33 0.67 1.33 1.5c0 0.83 -0.6 1.5 -1.33 1.5h-1.33c-0.49 0.02 -0.95 -0.27 -1.2 -0.75"}],["path",{"d":"M12 7v2"}],["path",{"d":"M12 15v2"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbPremiumRights;

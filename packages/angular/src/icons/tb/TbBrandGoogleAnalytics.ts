import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-google-analytics",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandGoogleAnalytics {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 10.11a1.11 1.11 0 0 1 1.11 -1.1h1.79a1.11 1.11 0 0 1 1.11 1.11v9.79a1.11 1.11 0 0 1 -1.1 1.11h-1.79a1.11 1.11 0 0 1 -1.1 -1.1l0 -9.79"}],["path",{"d":"M17 4.11a1.11 1.11 0 0 1 1.11 -1.1h1.79a1.11 1.11 0 0 1 1.11 1.11v15.79a1.11 1.11 0 0 1 -1.1 1.11h-1.79a1.11 1.11 0 0 1 -1.1 -1.1l0 -15.79"}],["path",{"d":"M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandGoogleAnalytics;

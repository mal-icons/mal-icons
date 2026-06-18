import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-vlc",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandVlc {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.79 4.34l3.1 9.31c0.33 0.99 -0.11 2.07 -1.02 2.5a9.15 9.15 0 0 1 -7.74 0c-0.91 -0.43 -1.35 -1.51 -1.02 -2.5l3.1 -9.3c0.27 -0.8 0.99 -1.34 1.79 -1.34c0.81 0 1.53 0.54 1.79 1.34"}],["path",{"d":"M7 14h-1.43a2 2 0 0 0 -1.92 1.45l-0.57 2a2 2 0 0 0 1.92 2.55h14a2 2 0 0 0 1.92 -2.55l-0.57 -2a2 2 0 0 0 -1.92 -1.45h-1.43"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandVlc;

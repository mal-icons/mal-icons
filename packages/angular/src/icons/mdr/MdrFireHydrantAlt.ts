import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-fire-hydrant-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrFireHydrantAlt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 11h-1V8h1c0.55 0 1-0.45 1-1s-0.45-1-1-1h-1.35a5.99 5.99 0 0 0-11.3 0H5c-0.55 0-1 0.45-1 1s0.45 1 1 1h1v3H5c-1.1 0-2 0.9-2 2v2c0 1.10.9 2 2 2h1v3H5c-0.55 0-1 0.45-1 1s0.45 1 1 1h14c0.55 0 1-0.45 1-1s-0.45-1-1-1h-1v-3h1c1.1 0 2-0.9 2-2v-2c0-1.1-0.9-2-2-2zm-7 6.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"}],["circle",{"cx":"12","cy":"14","r":"1.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrFireHydrantAlt;

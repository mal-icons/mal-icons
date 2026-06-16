import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-chair-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrChairAlt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 10c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2H7c-1.1 0-2 0.9-2 2v3c0 1.10.9 2 2 2h1v2H7c-1.1 0-2 0.9-2 2v6c0 0.550.45 1 1 1s1-0.45 1-1v-2h10v2c0 0.550.45 1 1 1s1-0.45 1-1v-6c0-1.1-0.9-2-2-2h-1v-2h1zM7 8V5h10v3H7zm10 8H7v-2h10v2zm-3-4h-4v-2h4v2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrChairAlt;

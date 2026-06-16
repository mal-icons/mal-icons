import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-dynamic-feed",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrDynamicFeed {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 8c-0.55 0-1 0.45-1 1v6c0 1.10.9 2 2 2h8c0.55 0 1-0.45 1-1s-0.45-1-1-1H8V9c0-0.55-0.45-1-1-1z"}],["path",{"d":"M20 3h-8c-1.1 0-2 0.9-2 2v6c0 1.10.9 2 2 2h8c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zm0 8h-8V7h8v4zM3 12c-0.55 0-1 0.45-1 1v6c0 1.10.9 2 2 2h8c0.55 0 1-0.45 1-1s-0.45-1-1-1H4v-6c0-0.55-0.45-1-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrDynamicFeed;

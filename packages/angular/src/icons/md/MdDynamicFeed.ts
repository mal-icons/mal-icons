import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-dynamic-feed",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdDynamicFeed {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 8H6v7c0 1.10.9 2 2 2h9v-2H8V8z"}],["path",{"d":"M20 3h-8c-1.1 0-2 0.9-2 2v6c0 1.10.9 2 2 2h8c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zm0 8h-8V7h8v4zM4 12H2v7c0 1.10.9 2 2 2h9v-2H4v-7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdDynamicFeed;

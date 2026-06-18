import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-zulip",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandZulip {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.5 3h11c1.33 0 2.5 1 2.5 2.5c0 2 -1.7 3.26 -2 3.5l-4.5 4l2 -5h-9a2.5 2.5 0 0 1 0 -5"}],["path",{"d":"M17.5 21h-11c-1.32 0 -2.5 -1 -2.5 -2.5c0 -2 1.71 -3.26 2 -3.5l4.5 -4l-2 5h9a2.5 2.5 0 1 1 0 5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandZulip;

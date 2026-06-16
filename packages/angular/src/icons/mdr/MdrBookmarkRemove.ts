import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-bookmark-remove",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrBookmarkRemove {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 6c0 0.55-0.45 1-1 1h-4c-0.55 0-1-0.45-1-1s0.45-1 1-1h4c0.55 0 1 0.45 1 1zm-2 4.9A5 5 0 0 1 14 3H7c-1.1 0-2 0.9-2 2v14.48c0 0.720.73 1.2 1.390.92L12 18l5.61 2.4c0.660.28 1.39-0.2 1.39-0.92V10.9z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrBookmarkRemove;

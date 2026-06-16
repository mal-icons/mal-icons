import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-bookmark-add",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrBookmarkAdd {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 6c0 0.55-0.45 1-1 1h-1v1c0 0.55-0.45 1-1 1s-1-0.45-1-1V7h-1c-0.55 0-1-0.45-1-1s0.45-1 1-1h1V4c0-0.550.45-1 1-1s1 0.45 1 1v1h1c0.55 0 1 0.45 1 1zm-2 13.48c0 0.72-0.73 1.2-1.390.92L12 18l-5.61 2.4A0.990.99 0 0 1 5 19.48V5c0-1.10.9-2 2-2h7a5 5 0 0 0 5 7.9v8.58z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrBookmarkAdd;

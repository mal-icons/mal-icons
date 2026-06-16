import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-link",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrLink {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 7h-3c-0.55 0-1 0.45-1 1s0.45 1 1 1h3c1.65 0 3 1.35 3 3s-1.35 3-3 3h-3c-0.55 0-1 0.45-1 1s0.45 1 1 1h3c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-9 5c0 0.550.45 1 1 1h6c0.55 0 1-0.45 1-1s-0.45-1-1-1H9c-0.55 0-1 0.45-1 1zm2 3H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h3c0.55 0 1-0.45 1-1s-0.45-1-1-1H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h3c0.55 0 1-0.45 1-1s-0.45-1-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrLink;

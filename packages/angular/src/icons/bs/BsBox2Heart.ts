import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-box2-heart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBox2Heart {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 7.98C9.66 6.31 13.83 9.24 8 13 2.17 9.24 6.34 6.31 8 7.98"}],["path",{"d":"M3.75 0a1 1 0 0 0-0.80.4L0.1 4.2a0.50.5 0 0 0-0.10.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a0.50.5 0 0 0-0.1-0.3L13.050.4a1 1 0 0 0-0.8-0.4zm0 1H7.5v3h-6zM8.5 4V1h3.75l2.25 3zM15 5v10H1V5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBox2Heart;

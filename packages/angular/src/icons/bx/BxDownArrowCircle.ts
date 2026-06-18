import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-down-arrow-circle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxDownArrowCircle {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 1.99C6.49 1.99 2 6.48 2 11.99c0 5.51 4.49 10 10 10 5.51 0 10-4.49 10-10s-4.49-10-10-10zm0 18c-4.410-8-3.59-8-8 0-4.41 3.59-8 8-8 4.410 8 3.59 8 8s-3.59 8-8 8z"}],["path",{"d":"M13 8h-2v4H7.99l4.01 4.01L16 12h-3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxDownArrowCircle;

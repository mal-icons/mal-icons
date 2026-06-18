import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-left-arrow-circle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxLeftArrowCircle {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 1.99C6.49 1.99 2 6.48 2 11.99c0 5.51 4.49 10 10 10 5.510 10-4.49 10-10 0-5.51-4.49-10-10-10zM12 19.99c-4.41 0-8-3.59-8-8 0-4.41 3.59-8 8-8C16.41 3.99 20 7.58 20 11.99c0 4.41-3.59 8-8 8z"}],["path",{"d":"m12.01 7.99-4 4.01 4.01 4v-3h3.99v-2h-3.99z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxLeftArrowCircle;

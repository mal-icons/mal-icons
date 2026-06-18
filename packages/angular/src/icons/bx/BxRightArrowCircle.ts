import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-right-arrow-circle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxRightArrowCircle {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 1.99c-5.510-10 4.49-10 10s4.49 10 10 10c5.51 0 10-4.49 10-10 0-5.51-4.49-10-10-10zM12 19.99c-4.41 0-8-3.59-8-8s3.59-8 8-8C16.41 3.99 20 7.58 20 11.99c0 4.41-3.59 8-8 8z"}],["path",{"d":"M12 10.99H8v2h4V16l4.01-4L12 7.99z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxRightArrowCircle;

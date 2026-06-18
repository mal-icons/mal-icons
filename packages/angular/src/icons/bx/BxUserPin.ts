import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-user-pin",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxUserPin {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 10c1.15 0 2-0.85 2-2s-0.85-2-2-2c-1.15 0-2 0.85-2 2s0.85 2 2 2zm0 1c-2.21 0-4 1.61-4 3.6v0.39h8V14.6c0-1.99-1.79-3.6-4-3.6z"}],["path",{"d":"M19 2H5c-1.1 0-2 0.9-2 2v13c0 1.10.9 2 2 2h4l3 3 3-3h4c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm-5 15-2 2-2-2H5V4h14l0 13H14z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxUserPin;

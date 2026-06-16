import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-videocam-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdVideocamOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m9.56 8-2-2-4.15-4.14L2 3.27 4.73 6H4c-0.55 0-1 0.45-1 1v10c0 0.550.45 1 1 1h12c0.21 0 0.39-0.080.55-0.18L19.73 21l1.41-1.41-8.86-8.86L9.56 8zM5 16V8h1.73l8 8H5zm10-8v2.61l6 6V6.5l-4 4V7c0-0.55-0.45-1-1-1h-5.61l2 2H15z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdVideocamOff;

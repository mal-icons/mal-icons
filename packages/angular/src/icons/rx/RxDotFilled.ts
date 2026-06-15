import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-dot-filled",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxDotFilled {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.88 7.5C9.88 8.81 8.81 9.88 7.5 9.88C6.19 9.88 5.13 8.81 5.13 7.5C5.13 6.19 6.19 5.13 7.5 5.13C8.81 5.13 9.88 6.19 9.88 7.5Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxDotFilled;

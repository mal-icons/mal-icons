import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-dots-horizontal",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxDotsHorizontal {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M3.63 7.5C3.63 8.12 3.12 8.63 2.5 8.63C1.88 8.63 1.38 8.12 1.38 7.5C1.38 6.88 1.88 6.38 2.5 6.38C3.12 6.38 3.63 6.88 3.63 7.5ZM8.63 7.5C8.63 8.12 8.12 8.63 7.5 8.63C6.88 8.63 6.38 8.12 6.38 7.5C6.38 6.88 6.88 6.38 7.5 6.38C8.12 6.38 8.63 6.88 8.63 7.5ZM12.5 8.63C13.12 8.63 13.63 8.12 13.63 7.5C13.63 6.88 13.12 6.38 12.5 6.38C11.88 6.38 11.38 6.88 11.38 7.5C11.38 8.12 11.88 8.63 12.5 8.63Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxDotsHorizontal;

import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-dot",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxDot {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M7.5 9.13C8.4 9.13 9.13 8.4 9.13 7.5C9.13 6.6 8.4 5.88 7.5 5.88C6.6 5.88 5.88 6.6 5.88 7.5C5.88 8.4 6.6 9.13 7.5 9.13ZM7.5 10.13C8.95 10.13 10.13 8.95 10.13 7.5C10.13 6.05 8.95 4.88 7.5 4.88C6.05 4.88 4.88 6.05 4.88 7.5C4.88 8.95 6.05 10.13 7.5 10.13Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxDot;

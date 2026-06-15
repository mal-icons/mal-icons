import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-pin-bottom",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxPinBottom {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M13.5 13.95C13.75 13.95 13.95 13.75 13.95 13.5C13.95 13.25 13.75 13.05 13.5 13.05L1.5 13.05C1.25 13.05 1.05 13.25 1.05 13.5C1.05 13.75 1.25 13.95 1.5 13.95L13.5 13.95ZM11.07 7.57C11.24 7.39 11.24 7.11 11.07 6.93C10.89 6.76 10.61 6.76 10.43 6.93L7.95 9.41L7.95 1.5C7.95 1.25 7.75 1.05 7.5 1.05C7.25 1.05 7.05 1.25 7.05 1.5L7.05 9.41L4.57 6.93C4.39 6.76 4.11 6.76 3.93 6.93C3.76 7.11 3.76 7.39 3.93 7.57L7.18 10.82C7.36 10.99 7.64 10.99 7.82 10.82L11.07 7.57Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxPinBottom;

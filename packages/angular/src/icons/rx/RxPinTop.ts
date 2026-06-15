import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-pin-top",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxPinTop {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M1.5 1.05C1.25 1.05 1.05 1.25 1.05 1.5C1.05 1.75 1.25 1.95 1.5 1.95L13.5 1.95C13.75 1.95 13.95 1.75 13.95 1.5C13.95 1.25 13.75 1.05 13.5 1.05H1.5ZM3.93 7.43C3.76 7.61 3.76 7.89 3.93 8.07C4.11 8.24 4.39 8.24 4.57 8.07L7.05 5.59V13.5C7.05 13.75 7.25 13.95 7.5 13.95C7.75 13.95 7.95 13.75 7.95 13.5L7.95 5.59L10.43 8.07C10.61 8.24 10.89 8.24 11.07 8.07C11.24 7.89 11.24 7.61 11.07 7.43L7.82 4.18C7.64 4.01 7.36 4.01 7.18 4.18L3.93 7.43Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxPinTop;

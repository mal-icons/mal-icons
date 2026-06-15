import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-view-horizontal",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxViewHorizontal {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M1.5 2H13.5C13.78 2 14 2.22 14 2.5V7H1V2.5C1 2.22 1.22 2 1.5 2ZM1 8V12.5C1 12.78 1.22 13 1.5 13H13.5C13.78 13 14 12.78 14 12.5V8H1ZM0 2.5C0 1.67 0.67 1 1.5 1H13.5C14.33 1 15 1.67 15 2.5V12.5C15 13.33 14.33 14 13.5 14H1.5C0.67 14 0 13.33 0 12.5V2.5Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxViewHorizontal;

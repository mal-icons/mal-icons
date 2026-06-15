import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-align-center-vertically",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxAlignCenterVertically {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M7 1C6.45 1 6 1.45 6 2V7H1.5C1.22 7 1 7.22 1 7.5C1 7.78 1.22 8 1.5 8H6V13C6 13.55 6.45 14 7 14H8C8.55 14 9 13.55 9 13V8H13.5C13.78 8 14 7.78 14 7.5C14 7.22 13.78 7 13.5 7H9V2C9 1.45 8.55 1 8 1L7 1Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxAlignCenterVertically;

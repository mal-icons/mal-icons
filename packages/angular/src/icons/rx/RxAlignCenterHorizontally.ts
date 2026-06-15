import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-align-center-horizontally",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxAlignCenterHorizontally {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2 6C1.45 6 1 6.45 1 7L1 8C1 8.55 1.45 9 2 9L7 9L7 13.5C7 13.78 7.22 14 7.5 14C7.78 14 8 13.78 8 13.5L8 9L13 9C13.55 9 14 8.55 14 8L14 7C14 6.45 13.55 6 13 6L8 6L8 1.5C8 1.22 7.78 1 7.5 1C7.22 1 7 1.22 7 1.5L7 6L2 6Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxAlignCenterHorizontally;

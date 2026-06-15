import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-chevron-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxChevronLeft {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M8.84 3.14C9.04 3.32 9.05 3.64 8.86 3.84L5.44 7.5L8.86 11.16C9.05 11.36 9.04 11.68 8.84 11.86C8.64 12.05 8.32 12.04 8.14 11.84L4.39 7.84C4.2 7.65 4.2 7.35 4.39 7.16L8.14 3.16C8.32 2.96 8.64 2.95 8.84 3.14Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxChevronLeft;

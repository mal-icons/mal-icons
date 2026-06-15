import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-arrow-up",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxArrowUp {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M7.15 2.15C7.34 1.95 7.66 1.95 7.85 2.15L11.85 6.15C12.05 6.34 12.05 6.66 11.85 6.85C11.66 7.05 11.34 7.05 11.15 6.85L8 3.71L8 12.5C8 12.78 7.78 13 7.5 13C7.22 13 7 12.78 7 12.5L7 3.71L3.85 6.85C3.66 7.05 3.34 7.05 3.15 6.85C2.95 6.66 2.95 6.34 3.15 6.15L7.15 2.15Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxArrowUp;

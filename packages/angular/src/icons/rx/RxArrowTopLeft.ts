import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-arrow-top-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxArrowTopLeft {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M11.35 11.35C11.55 11.16 11.55 10.84 11.35 10.65L4.71 4L9 4C9.28 4 9.5 3.78 9.5 3.5C9.5 3.22 9.28 3 9 3L3.5 3C3.37 3 3.24 3.05 3.15 3.15C3.05 3.24 3 3.37 3 3.5L3 9C3 9.28 3.22 9.5 3.5 9.5C3.78 9.5 4 9.28 4 9V4.71L10.65 11.35C10.84 11.55 11.16 11.55 11.35 11.35Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxArrowTopLeft;

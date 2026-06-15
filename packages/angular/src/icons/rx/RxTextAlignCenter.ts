import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-text-align-center",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxTextAlignCenter {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2 4.5C2 4.22 2.22 4 2.5 4H12.5C12.78 4 13 4.22 13 4.5C13 4.78 12.78 5 12.5 5H2.5C2.22 5 2 4.78 2 4.5ZM4 7.5C4 7.22 4.22 7 4.5 7H10.5C10.78 7 11 7.22 11 7.5C11 7.78 10.78 8 10.5 8H4.5C4.22 8 4 7.78 4 7.5ZM3 10.5C3 10.22 3.22 10 3.5 10H11.5C11.78 10 12 10.22 12 10.5C12 10.78 11.78 11 11.5 11H3.5C3.22 11 3 10.78 3 10.5Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxTextAlignCenter;

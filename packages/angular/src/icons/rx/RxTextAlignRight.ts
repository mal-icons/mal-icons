import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-text-align-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxTextAlignRight {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2 4.5C2 4.22 2.22 4 2.5 4H12.5C12.78 4 13 4.22 13 4.5C13 4.78 12.78 5 12.5 5H2.5C2.22 5 2 4.78 2 4.5ZM7 7.5C7 7.22 7.22 7 7.5 7H12.5C12.78 7 13 7.22 13 7.5C13 7.78 12.78 8 12.5 8H7.5C7.22 8 7 7.78 7 7.5ZM4 10.5C4 10.22 4.22 10 4.5 10H12.5C12.78 10 13 10.22 13 10.5C13 10.78 12.78 11 12.5 11H4.5C4.22 11 4 10.78 4 10.5Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxTextAlignRight;

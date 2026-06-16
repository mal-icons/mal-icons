import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-rotate-90-degrees-cw",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdRotate90DegreesCw {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 13a9 9 0 0 0 13.79 7.62l-1.46-1.46c-0.990.53-2.130.84-3.330.84-3.86 0-7-3.14-7-7s3.14-7 7-7h0.17L9.59 7.59 11 9l4-4-4-4-1.42 1.41L11.17 4H11a9 9 0 0 0-9 9zm9 0 6 6 6-6-6-6-6 6zm6 3.17L13.83 13 17 9.83 20.17 13 17 16.17z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdRotate90DegreesCw;

import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-tablets-1",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiTablets1 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Tablets 1"}],["path",{"d":"M14.76,3.07a6.17,6.17,0,0,0-6.11,5.58,6.16,6.16,0,1,0,6.71,6.71,6.16,6.16,0,0,0-0.6-12.29ZM9.23,19.93A5.17,5.17,0,0,1,5.24,11.5l7.27,7.26A5.15,5.15,0,0,1,9.23,19.93Zm3.99-1.88-7.27-7.27a5.17,5.17,0,0,1,7.27,7.27Zm2.15-3.71a6.12,6.12,0,0,0-5.72-5.71,5.16,5.16,0,1,1,5.72,5.71Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiTablets1;

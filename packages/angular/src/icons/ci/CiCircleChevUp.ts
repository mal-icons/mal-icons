import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-circle-chev-up",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiCircleChevUp {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Circle Chev Up"}],["path",{"d":"M11.65,10.15a0.490.49,0,0,1,0.7,0l3,3a0.50.5,0,0,1-0.70.7L12,11.21,9.35,13.85a0.50.5,0,0,1-0.7-0.7Z"}],["path",{"d":"M2.07,12A9.93,9.93,0,1,1,12,21.93,9.94,9.94,0,0,1,2.07,12Zm18.87,0A8.93,8.93,0,1,0,12,20.93,8.94,8.94,0,0,0,20.93,12Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiCircleChevUp;

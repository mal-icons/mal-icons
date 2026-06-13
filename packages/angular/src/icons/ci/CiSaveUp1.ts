import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-save-up-1",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiSaveUp1 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Save Up 1"}],["path",{"d":"M17.62,6.37a7.95,7.95,0,0,1-1.75,12.57A8.03,8.03,0,0,1,4.28,13.9,8.03,8.03,0,0,1,6.38,6.38c0.45-0.46-0.26-1.17-0.71-0.71a8.95,8.95,0,0,0,9.76,14.59,8.95,8.95,0,0,0,2.9-14.59c-0.45-0.46-1.160.25-0.710.71Z"}],["path",{"d":"M8.65,6.21l3-3a0.50.5,0,0,1,0.35-0.150.510.51,0,0,1,0.360.15l3,3a0.50.5,0,0,1-0.710.71l-2.14-2.14v8.47a0.510.51,0,0,1-0.50.50.50.5,0,0,1-0.5-0.5V4.76l-2.15,2.16a0.50.5,0,0,1-0.71-0.71Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiSaveUp1;

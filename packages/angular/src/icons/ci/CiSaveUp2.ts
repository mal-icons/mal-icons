import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-save-up-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiSaveUp2 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Save Up 2"}],["path",{"d":"M18.44,20.94H5.56a2.37,2.37,0,0,1-2.5-2.21v-11a2.37,2.37,0,0,1,2.5-2.21h0.46a0.50.5,0,0,1,0,1H5.56a1.38,1.38,0,0,0-1.5,1.21v11a1.38,1.38,0,0,0,1.5,1.21H18.44a1.38,1.38,0,0,0,1.5-1.21v-11a1.38,1.38,0,0,0-1.5-1.21h-0.46a0.50.5,0,0,1,0-1h0.46a2.37,2.37,0,0,1,2.5,2.21v11A2.37,2.37,0,0,1,18.44,20.94Z"}],["path",{"d":"M8.65,6.21l3-3a0.50.5,0,0,1,0.35-0.150.510.51,0,0,1,0.360.15l3,3a0.50.5,0,0,1-0.710.71l-2.14-2.14v8.47a0.510.51,0,0,1-0.50.50.50.5,0,0,1-0.5-0.5V4.76l-2.15,2.16a0.50.5,0,0,1-0.71-0.71Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiSaveUp2;

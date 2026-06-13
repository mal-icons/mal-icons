import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-linkedin",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiLinkedin {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.44,3.06H5.56a2.51,2.51,0,0,0-2.5,2.5V18.44a2.51,2.51,0,0,0,2.5,2.5H18.44a2.5,2.5,0,0,0,2.5-2.5V5.56A2.5,2.5,0,0,0,18.44,3.06Zm1.5,15.38a1.51,1.51,0,0,1-1.5,1.5H5.56a1.51,1.51,0,0,1-1.5-1.5V5.56a1.51,1.51,0,0,1,1.5-1.5H18.44a1.51,1.51,0,0,1,1.5,1.5Z"}],["path",{"d":"M6.38,10.75a1,1,0,1,1,2,0v6.5h0a1,1,0,0,1-2,0Z"}],["circle",{"cx":"7.38","cy":"6.74","r":"1"}],["path",{"d":"M17.62,13.37v3.88a1,1,0,1,1-2,0V13.37a1.62,1.62,0,1,0-3.23,0v3.88a1,1,0,0,1-2,0v-6.5a1.02,1.02,0,0,1,1-1,0.940.94,0,0,1,0.840.47,3.61,3.61,0,0,1,5.39,3.15Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiLinkedin;

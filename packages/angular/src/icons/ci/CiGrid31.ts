import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-grid-3-1",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiGrid31 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.43,20.94H5.56a2.5,2.5,0,0,1-2.5-2.5V15.5a2.5,2.5,0,0,1,2.5-2.5h5.87a2.5,2.5,0,0,1,2.5,2.5v2.93A2.5,2.5,0,0,1,11.43,20.94ZM5.56,14a1.5,1.5,0,0,0-1.5,1.5v2.93a1.5,1.5,0,0,0,1.5,1.5h5.87a1.5,1.5,0,0,0,1.5-1.5V15.5a1.5,1.5,0,0,0-1.5-1.5Z"}],["path",{"d":"M18.43,20.94a2.5,2.5,0,0,1-2.5-2.5V15.5a2.5,2.5,0,0,1,5,0v2.93A2.5,2.5,0,0,1,18.43,20.94Zm0-6.93a1.5,1.5,0,0,0-1.5,1.5v2.93a1.5,1.5,0,0,0,3,0V15.5A1.5,1.5,0,0,0,18.43,14Z"}],["path",{"d":"M18.43,11H5.56a2.5,2.5,0,0,1-2.5-2.5V5.56a2.5,2.5,0,0,1,2.5-2.5H18.43a2.5,2.5,0,0,1,2.5,2.5V8.5A2.5,2.5,0,0,1,18.43,11ZM5.56,4.06a1.5,1.5,0,0,0-1.5,1.5V8.5a1.5,1.5,0,0,0,1.5,1.5H18.43a1.5,1.5,0,0,0,1.5-1.5V5.56a1.5,1.5,0,0,0-1.5-1.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiGrid31;

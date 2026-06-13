import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-grid-4-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiGrid42 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.5,13.93H5.56a2.5,2.5,0,0,1-2.5-2.5V5.56a2.5,2.5,0,0,1,2.5-2.5H8.5a2.5,2.5,0,0,1,2.5,2.5v5.87A2.5,2.5,0,0,1,8.5,13.93ZM5.56,4.06a1.5,1.5,0,0,0-1.5,1.5v5.87a1.5,1.5,0,0,0,1.5,1.5H8.5a1.5,1.5,0,0,0,1.5-1.5V5.56a1.5,1.5,0,0,0-1.5-1.5Z"}],["path",{"d":"M8.5,20.94H5.56a2.5,2.5,0,0,1,0-5H8.5a2.5,2.5,0,1,1,0,5Zm-2.93-4a1.5,1.5,0,0,0,0,3H8.5a1.5,1.5,0,1,0,0-3Z"}],["path",{"d":"M18.44,20.94H15.5a2.5,2.5,0,0,1-2.5-2.5v-5.87a2.5,2.5,0,0,1,2.5-2.5h2.93a2.5,2.5,0,0,1,2.5,2.5v5.87A2.5,2.5,0,0,1,18.44,20.94ZM15.5,11.07a1.5,1.5,0,0,0-1.5,1.5v5.87a1.5,1.5,0,0,0,1.5,1.5h2.93a1.5,1.5,0,0,0,1.5-1.5v-5.87a1.5,1.5,0,0,0-1.5-1.5Z"}],["path",{"d":"M18.44,8.06H15.5a2.5,2.5,0,0,1,0-5h2.93a2.5,2.5,0,0,1,0,5Zm-2.93-4a1.5,1.5,0,0,0,0,3h2.93a1.5,1.5,0,0,0,0-3Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiGrid42;

import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-duplicate-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoDuplicateSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M112,80H400V56a24,24,0,0,0-24-24H66A34,34,0,0,0,32,66V376a24,24,0,0,0,24,24H80V112A32,32,0,0,1,112,80Z"}],["path",{"d":"M456,112H136a24,24,0,0,0-24,24V456a24,24,0,0,0,24,24H456a24,24,0,0,0,24-24V136A24,24,0,0,0,456,112ZM392,312H312v80H280V312H200V280h80V200h32v80h80Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoDuplicateSharp;

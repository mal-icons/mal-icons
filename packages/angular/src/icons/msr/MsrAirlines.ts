import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-airlines",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrAirlines {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M194-220h517l97-520H551L194-220ZM80-160l413-600q14-20 35-30t44-10h236q29 0 46.5 21.5T867-729L760-160H80Zm500-260q33 0 56.5-23.5T660-500q0-33-23.5-56.5T580-580q-33 0-56.5 23.5T500-500q0 33 23.5 56.5T580-420ZM194-220h517-517Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrAirlines;

import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-caterpillar",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiCaterpillar {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.9 11.55l0.8-4.10.8 4.1zm2.87-6.52h-4.15L8.2 15.88l4.5-3.63 4.7 3.93zm-2.07 8.16l-7.51 6.07H19.95zM24 5.02v2.77h-2.07v11.45h-0.88l-2.44-2.04V7.79h-2.06V5.02zM6.87 16.86c0.55-0.460.64-1.020.64-1.53V13.2h-2.98v2.89a0.750.75 0 0 1-0.750.75c-0.41 0-0.72-0.34-0.72-0.75V7.89c0-0.410.31-0.750.72-0.75a0.750.75 0 0 1 0.750.75v2.91H7.51V7.79c0-1.67-1.09-3.04-3.75-3.05-2.73 0-3.76 1.38-3.76 3.05v8.56c0 1.66 1.31 2.91 3 2.91h0.92Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiCaterpillar;

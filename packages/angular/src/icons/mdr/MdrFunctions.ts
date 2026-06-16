import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-functions",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrFunctions {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.5 4H7.56C6.7 4 6 4.7 6 5.56c0 0.280.120.550.320.74L12.5 12l-6.18 5.7c-0.20.19-0.320.46-0.320.74C6 19.3 6.7 20 7.56 20h8.94c0.83 0 1.5-0.67 1.5-1.5s-0.67-1.5-1.5-1.5H11l3.59-3.59c0.78-0.780.78-2.05 0-2.83L11 7h5.5c0.83 0 1.5-0.67 1.5-1.5S17.33 4 16.5 4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrFunctions;

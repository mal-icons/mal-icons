import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-folder-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiFolderOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Folder Off"}],["path",{"d":"M4.01,3.3a0.50.5,0,0,0-0.710.71l0.250.25A2.44,2.44,0,0,0,2.06,6.5v11a2.45,2.45,0,0,0,2.45,2.44h14.72l0.760.76c0.460.46,1.17-0.250.71-0.7Zm0.5,15.64A1.45,1.45,0,0,1,3.06,17.5V6.5a1.44,1.44,0,0,1,1.31-1.43C5.89,6.6,7.43,8.14,8.96,9.66q4.49,4.49,8.96,8.97l0.310.31Z"}],["path",{"d":"M21.44,17.69a0.50.5,0,0,1-0.5-0.5V9.18a1.45,1.45,0,0,0-1.44-1.44H12.83a1.5,1.5,0,0,1-1.47-1.23l-0.05-0.27a1.45,1.45,0,0,0-1.42-1.18H8.8a0.50.5,0,0,1,0-1H9.88a2.45,2.45,0,0,1,2.4,1.99l0.050.27a0.50.5,0,0,0,0.490.41h6.67a2.45,2.45,0,0,1,2.44,2.44v8.02A0.50.5,0,0,1,21.44,17.69Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiFolderOff;

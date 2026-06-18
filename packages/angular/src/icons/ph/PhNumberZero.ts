import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ph-number-zero",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class PhNumberZero {
  readonly viewBox = "0 0 256 256";
  readonly nodes: NodeTuple[] = [["path",{"d":"M183.25,63.2C170.25,42.79,151.15,32,128,32S85.75,42.79,72.75,63.2C62,80.18,56,103.19,56,128s6,47.82,16.75,64.8c13,20.41,32.1,31.2,55.25,31.2s42.25-10.79,55.25-31.2c10.8-17,16.75-40,16.75-64.8S194.05,80.18,183.25,63.2ZM128,208c-38.68,0-56-40.18-56-80s17.32-80,56-80,56,40.18,56,80S166.68,208,128,208Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default PhNumberZero;

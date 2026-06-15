import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-compress",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgCompress {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.1 8.43L17.67 7.03L12.76 12.01L17.74 16.93L19.15 15.5L16.64 13.03L23.14 13.08L23.16 11.08L16.53 11.03L19.1 8.43Z","fill":"currentColor"}],["path",{"d":"M5.47 15.56L6.88 16.97L11.83 12.02L6.87 7.07L5.46 8.49L8.05 11.08L0.84 11.1L0.85 13.1L7.95 13.08L5.47 15.56Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgCompress;

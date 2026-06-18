import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-suzuki",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiSuzuki {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.37 20C13.51 22.39 12 24 12 24L0.11 15.71s5-3.71 9.19-0.87l5.61 3.880.68-0.45L0.11 7.32s2.23-0.65 6.52-3.31C10.49 1.61 12 0 12 0l11.9 8.3s-5 3.72-9.190.87L9.1 5.28l-0.680.45L23.89 16.68s-2.220.65-6.52 3.32Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiSuzuki;

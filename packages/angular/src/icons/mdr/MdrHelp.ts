import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-help",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrHelp {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75-0.90.92c-0.50.51-0.860.97-1.04 1.69-0.080.32-0.130.68-0.13 1.14h-2v-0.5a4 4 0 0 1 1.17-2.83l1.24-1.26c0.46-0.440.68-1.10.55-1.8a1.99 1.99 0 0 0-1.39-1.53c-1.11-0.31-2.140.32-2.47 1.27-0.120.37-0.430.65-0.820.65h-0.3C8.4 9 8 8.44 8.16 7.88a4.01 4.01 0 0 1 3.23-2.83c1.52-0.24 2.970.55 3.87 1.8 1.18 1.630.83 3.38-0.19 4.4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrHelp;

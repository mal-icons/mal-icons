import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-2-circle-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Bs_2CircleFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.65 6.24c0-0.690.49-1.31 1.34-1.310.76 0 1.310.49 1.31 1.24 0 0.7-0.47 1.23-0.9 1.71l-2.97 3.29V12h5.34v-1.11H7.27v-0.08l1.97-2.220.1-0.11c0.69-0.76 1.29-1.43 1.29-2.43 0-1.27-1.03-2.21-2.61-2.21-1.76 0-2.64 1.19-2.64 2.4v0.07h1.27v-0.07Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Bs_2CircleFill;

import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-dataiku",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiDataiku {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm6.53 15.34H12.5v-0.93h6.03zm-0.74-8.73s-0.410.54-0.19 2c0.41 2.72-1.02 5.15-3.56 5.15h-1.87s-1.83-0.09-2.93 1.01c-3.26 3.27-4.04 4.12-4.27 4.23-0.150.08-0.19-0.09-0.19-0.09l9.64-11.89c-0.2-2.14 2.34-2.71 3.28-1.13l0.88-0.25zm-1.6-0.61a0.480.48 0 1 0 0.470.470.480.48 0 0 0-0.47-0.47z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiDataiku;

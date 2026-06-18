import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-sketch",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiSketch {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 1.25l6.75 6.64V2L12 1.25zm0 0l-6.05 7h12.1l-6.05-7zm0 0L5.25 2v5.89L12 1.25zM5.25 2L0 9l4.42-0.68L5.25 2zM0 9l11.96 13.70.01-0.01L4.44 9H0zm18.75-7l0.83 6.32L24 9l-5.25-7zM24 9h-4.51l-7.52 13.690.030.06L24 9zM12 22.75l-0.03-0.06-0.010.010.040.05zM5.44 9l6.53 13.69L18.56 9H5.44Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiSketch;

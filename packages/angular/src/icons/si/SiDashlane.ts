import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-dashlane",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiDashlane {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.89 7.72c0-0.15-0.15-0.3-0.36-0.36l-2.5-0.92c-0.42-0.18-0.890.03-0.890.33V17.25c0 0.150.150.330.30.39l2.560.92c0.390.150.89-0.060.89-0.39zm-4.68-3.66c0-0.15-0.15-0.3-0.36-0.36l-2.5-0.92c-0.42-0.18-0.890.03-0.890.33v6.37c0 0.150.150.330.30.39l2.560.92c0.390.150.89-0.060.89-0.39zm0 11.47c0-0.15-0.15-0.3-0.36-0.36l-2.5-0.92c-0.42-0.18-0.890.03-0.890.33v6.37c0 0.150.150.330.30.39l2.560.92c0.390.150.89-0.060.89-0.39zm-4.68 1.28c0-0.15-0.15-0.3-0.36-0.36l-2.5-0.92c-0.42-0.18-0.890.03-0.890.33v6.79c0 0.150.150.330.30.39l2.560.92c0.390.150.89-0.060.89-0.39zm0-15.46c0-0.15-0.15-0.3-0.36-0.36L8.680.07c-0.42-0.18-0.890.03-0.890.33v6.79c0 0.150.150.330.30.39l2.560.92c0.390.150.89-0.060.89-0.39zm-4.680.27c0-0.15-0.15-0.3-0.36-0.36L40.33C3.590.16 3.110.36 3.110.66v21.74c0 0.150.150.330.30.39l2.560.92c0.390.150.89-0.060.89-0.39z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiDashlane;

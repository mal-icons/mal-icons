import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-litecoin",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiLitecoin {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0a12 12 0 1012 12A12 12 0 12 0zm-0.26 3.68h2.58a0.340.34 0 1.330.44l-2.03 6.92 1.91-0.58-0.41 1.38-1.920.56-1.25 4.21h6.68a0.340.34 0 1.330.44l-0.58 2a0.460.46 0 1-0.440.33H6.73l1.72-5.82-1.910.580.42-1.36 1.91-0.58 2.42-8.18a0.460.46 0 1.44-0.33Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiLitecoin;

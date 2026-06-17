import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-fast-arrow",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiFastArrow {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M20.91 20v32.29l357.79 338.9L20.91 101.41v58.94l355.94 250.22-86.89-17.53 26.91 30.95-70.5 3.01 245.63 64.6-65.5-249.05-15.35 92.36-27.3-31.46 16.68 60.46L161.26 20h-22.37l142.28 208.94L109.5 42.17l98.98 138.55L45.19 20H20.91zm433 92.19l-32.23 38.48 55.19 208.21 15.29-217.79-38.24-28.9zm-231.88 327.89l-24.97 23.47 21.67 27.62 149.23-12.78-145.93-38.31z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiFastArrow;

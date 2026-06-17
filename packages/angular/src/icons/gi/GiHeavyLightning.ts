import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-heavy-lightning",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiHeavyLightning {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M20.52 14.64v112.72l44.39 28.03-44.97 78.26 96.95 49.06-9.34 32.71 78.84 35.04-32.12 96.95 174.62 46.14-112.71-69.5 22.78-50.23 257.55 113.89-282.08-203.82 29.2-90.52 47.89 52.56 83.52-40.88-44.39 87.02 164.69 108.63-106.29-126.15 22.78-40.3 74.75 56.65-84.68-151.26-71.84 27.45L227.26 14.64H20.52zm77.09 161.19l42.63 26.87-14.6 50.81-52.56-34.46 24.53-43.22z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiHeavyLightning;

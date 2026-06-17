import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-fishhook-fork",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiFishhookFork {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M22.41 18.39v60.59S198.19 236.17 317.5 334.04c-9.2 3.82-19.9 5.5-31.1 5.28 52.27 39.08 103.82 79.55 163.18 105.01-28.33-60.65-63.28-112.89-103.52-167.01 1.99 14.570.07 26.32-4.67 35.52-76.21-91.11-195.03-202.62-296.4-294.44H22.41zm121.68 0C251.25 104.46 357.51 189.5 429.09 284.7c-5.74 10.57-18.11 14.79-31.54 11.68l101.62 115.05c-7.61-173.11-135.93-294.98-266.9-393.04h-88.19zM22.61 171.4v00zm0 0v93.44C154.91 380.35 288.11 475.25 425 498.45L308.19 389.83c0.88 12.2-1.62 22.48-10.51 22.78-98.07-71.3-191.39-152.64-275.07-241.2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiFishhookFork;

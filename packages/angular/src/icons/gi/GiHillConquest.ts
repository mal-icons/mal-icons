import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-hill-conquest",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiHillConquest {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M247 55v203.25c-3.56-0.1-7.13-0.16-10.68-0.15-62.770.18-123.48 18.02-170.16 55.78-18.41 14.89-34.7 32.91-48.16 54.28V494h208.92c43.58-100.15 136.27-151 230.41-151 2.96 0 5.930.06 8.890.16-1.51-1.36-3.04-2.7-4.59-4.03-53.44-45.95-125.05-74.07-196.63-79.88v-99.66c27.09-2.53 46.44-15.58 71-15.58 27.2 0 48 16 80 16V80c-32 0-48-16-80-16-28.85 0-44.7 13.01-71 15.56V55zm210.33 306c-85.44 0-168.61 43.96-210.47 133H494V363.73c-12.18-1.82-24.44-2.73-36.67-2.73z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiHillConquest;

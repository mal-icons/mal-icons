import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-missile-launcher",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiMissileLauncher {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M490.74 21.41c-8.950.78-20.72 3.22-33.57 7.78-16.39 5.82-34.34 14.76-50.97 25.89l26.78 36.53c15.71-12.52 29.85-26.92 40.43-40.76 8.27-10.81 14.06-21.24 17.32-29.44zm-99.26 44.03L57.61 310.24l8.28 11.29 83.06-60.91 10.64 14.52-83.06 60.91 8.28 11.29 333.87-244.81zm-18.25 92.75L203.16 282.88l13.92 7.15L375.86 173.61zm-48.6 75.32l-35.77 26.23c3.9 3.05 8.82 4.86 14.21 4.86 12.81 0 23-10.19 23-23 0-2.85-0.51-5.58-1.44-8.09zm-255.27 7.53L21.26 260.67l25.71 35.06 65.54-48.06zm226.71 40.95v30.62h14v-30.61a40.73 40.73 0 0 1-7 0.62c-2.39 0-4.72-0.22-7-0.61zm-135.06 31.82l-65.54 48.06 25.71 35.06 33.19-39.96zm-117.9 7.09l-11.29 8.28 27.2 37.1 11.29-8.28zm236.97 9.7v78h46v-78zm-18 54.34l-61.43 71.66h23.71l37.72-44zm82 0v27.66l37.72 44h23.71zm-192 89.66v16h94v-16zm208 0v16h94v-16z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiMissileLauncher;

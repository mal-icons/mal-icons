import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-armored-pants",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiArmoredPants {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M89.45 32v44.67l166.75 28.9 166.75-28.9V32l-166.75 28.9L89.45 32zm-0.4 69.44v186.71c49.48 16 90.19 8.72 139.67 0 1.14-34.24 12.93-60.63 27.09-60.67 14.170.04 25.95 26.43 27.09 60.67 49.47 16 90.17 8.72 139.65 0V101.44l-166.74 28.81-166.76-28.81zm0 212.25V382.88c45.91 7.33 85.75 13.9 131.65 0V313.69c-45.91 7.33-85.75 13.9-131.65 0zm201.85 0V382.88c45.91 7.33 85.75 13.9 131.65 0V313.69c-45.91 7.33-85.75 13.9-131.65 0zm-198.44 94.55v64.2c43.53 6.8 81.3 12.89 124.82 0v-64.2c-43.53 6.8-81.3 12.89-124.82 0zm201.85 0v64.2c43.53 6.8 81.3 12.89 124.82 0v-64.2c-43.53 6.8-81.3 12.89-124.82 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiArmoredPants;

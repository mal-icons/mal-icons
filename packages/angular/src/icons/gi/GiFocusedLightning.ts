import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-focused-lightning",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiFocusedLightning {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M19.59 18.13V104.5l210.09 181.78-84.97 178.22 230.94-92.19-39.87 117.03 94.47-35.81 67.59 44.53-34.59-106.34-59.75 27.5 76.75-168.25-198.03 99.09 76.5-122.75L238.19 18.13H121.81L312.41 244.72 218.47 393.75l58.28-142.81L43.72 18.13H19.59z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiFocusedLightning;

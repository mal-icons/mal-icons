import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-demolish",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiDemolish {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M122.72 22.14v84.37l44.03 54.59v171.56l8.09 6.47 48.78-159.35 56.56 171.35 57.04-70.88 26.45 74.79V161.09l44.03-54.58v-84.37h-48.91v39.8h-29.77V22.14h-49.45v39.8H250.32V22.14h-49.45v39.8H171.63V22.14zm101.4 218.68L184.3 370.9l-74.44-59.56 30.63 89.43-88.96 4.04 40.67 40.66-40.17 47.81h91.31l18.22-17.18-17.01-47.26 56.61 20.6 28.67-83.94 32.73 93.15 57.11-43.05 2.06 65.55 63.96-7.13-13.71 19.27h91.03l-64.68-49.72 45.72-64.25-83.63 21.52-29.35-82.99-57.79 71.81z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiDemolish;

import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-shiny-entrance",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiShinyEntrance {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M242.32 17.94l00.02v-0.02h0zm00.02c-9.78 267.33-40.36 268.21-134.91 84.39 63.92 197.25 43.58 238.65-92.27 152.18 93.67 96.08 122.63 146.38-2.34 133.15 63 22.26 124.56 45.33 170.68 94.09 4.81-229.74 138.29-224.31 143.38-0.43 35.08-44.42 115.91-71.65 173.02-93.67-162.9 3.97-73.26-108.21-10.51-188.44-141.63 124.22-177.26 99.48-113.88-137.31-82.82 219.86-120.17 213.04-133.15-43.96z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiShinyEntrance;

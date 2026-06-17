import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-evil-hand",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiEvilHand {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M165.98 47.74l-25.32 143.44c-28.82 29.04-82.26 43.33-117.54 49.02l0.13 218.650.010C60.21 406.14 115.74 321.79 177.84 291.51c87.93-6.23 189.04 1.02 269.29 122.01l-30.29-111.77-114.03-33.83c38.23-48.66 116.25-23.91 190.39 29.45l-63.01-80.31-133.44-13.59c22.58-50.88 108.66-59.57 185.34-7.41L407.95 115.75c-105.14 37.84-182.9 34.32-190.31 9.33-2.43 3.57-4.53 7.19-6.29 10.85-13.45 27.97-8.83 59.18 11.36 86.75l-15.08 11.04c-23.47-32.05-29.73-71.38-13.13-105.89 15.34-31.9 49.35-58.73 103.26-73.77l-131.78-6.32z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiEvilHand;

import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-over-infinity",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiOverInfinity {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M256.94 21.94c-8.8 0-17.5 5.47-24.62 16.41-7.12 10.94-11.94 26.95-11.94 44.78 0 17.83 4.82 33.81 11.94 44.75 7.12 10.94 15.83 16.41 24.63 16.41s17.5-5.47 24.63-16.4c7.12-10.94 11.94-26.92 11.94-44.75s-4.82-33.84-11.94-44.78c-7.12-10.94-15.82-16.41-24.62-16.41zm-92.91 53L24.85 263.31 164.03 451.72l93.28-126.280.060.06 89.06-120.56 7.53-10.19 7.5 10.19 46.41 62.78-15.03 11.13-38.88-52.62-85 115.03 81.62 110.47L489.78 263.31 350.6 74.94l-93.28 126.25-0.13-0.16-90.81 122.94-7.5 10.19-7.53-10.19-46.41-62.78 15.03-11.12 38.88 52.63 86.75-117.37L164.03 74.94z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiOverInfinity;

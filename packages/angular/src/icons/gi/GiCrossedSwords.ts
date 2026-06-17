import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-crossed-swords",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiCrossedSwords {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M19.75 14.44c59.54 112.29 142.51 202.35 232.28 292.72l3.63 3.750.06-0.06c21.83 21.93 44.04 43.92 66.41 66.25-18.86 14.81-38.97 28.2-59.94 40.31l28.53 28.53 68.72-68.72c42.34 27.64 76.29 63.65 104.09 105.81l28.06-28.06c-42.47-27.49-79.74-60.21-106.03-103.88l68.94-68.94-28.53-28.53c-11.11 21.85-24.41 42.02-39.47 60.59-43.85-43.8-86.46-85.84-130.12-125.47-0.22-0.2-0.43-0.42-0.66-0.62C183.62 122.75 108.52 63.91 19.75 14.44zm471.88 0c-83.04 46.28-154.12 100.78-221.97 161.16l22.81 21.56 56.81-56.81 13.22 13.19-56.44 56.44 24.59 23.19c61.8-66.92 117.6-136.92 160.97-218.72zm-329.53 125.91l200.56 200.53c-4.36 4.44-8.84 8.79-13.4 13.03L148.88 153.53l13.22-13.19zm-76.69 113.28l-28.5 28.53 68.91 68.91c-26.29 43.67-63.53 76.41-106 103.91l28.06 28.06c27.81-42.16 61.76-78.17 104.09-105.81l68.72 68.72 28.53-28.53c-20.96-12.11-41.08-25.5-59.94-40.31 17.86-17.83 35.61-35.43 53.16-52.97l-24.84-25.65-55.47 55.47c-4.57-4.24-9.01-8.62-13.37-13.06l55.84-55.84-24.53-25.37c-18.28 17.86-36.6 36.06-55.16 54.59-15.07-18.59-28.38-38.76-39.5-60.62z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiCrossedSwords;

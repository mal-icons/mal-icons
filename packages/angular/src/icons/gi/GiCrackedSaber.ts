import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-cracked-saber",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiCrackedSaber {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M494.72 14.25C464 45.88 422.17 77.54 379.5 100.88c0.6 7.330.68 14.610.28 21.81l76.91 67.06c23.81-50.01 37.82-108.08 38.03-175.5zM361.31 110.31c-33.94 16.53-67.54 27.05-95.56 27.340.44 68.38-140.33 159.19-251.94 213.44v50.84c101.23-32.86 193.02-77.91 256.56-130.78 58.44-48.62 92.51-102.76 90.94-160.84zm15.66 34.72c-5.71 29.01-19.22 56.77-38.81 82.88l3.16 28 83.97-12.25c8.17-11.7 15.74-23.93 22.66-36.72l-70.97-61.9zm-55.34 102.94c-11.67 13-24.84 25.54-39.28 37.56-24.68 20.54-53.16 39.72-84.47 57.47l60.56 44.44c25.59-14.04 50.32-29.84 73.53-47.62l-10.34-91.84zm87.78 16.91l-66 9.63 5.81 51.47c21.88-18.36 42.16-38.64 60.19-61.09zm-229.59 88.06c-9.15 4.86-18.51 9.6-28.06 14.22l16 62.06c24.35-9.38 48.61-20.03 72.31-32.09l-60.25-44.19zM134.53 375.28c-37.93 17.36-78.59 32.81-120.72 46.25v52.53c42.83-9.02 89.48-21.39 136.34-38.28l-15.62-60.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiCrackedSaber;

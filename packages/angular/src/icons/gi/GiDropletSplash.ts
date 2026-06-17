import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-droplet-splash",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiDropletSplash {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M247.56 19.81c-13.46 0-24.34 10.92-24.34 24.38 0 13.46 10.89 24.34 24.34 24.34 13.46 0 24.38-10.89 24.38-24.34 0-13.45-10.92-24.37-24.37-24.37zm0.94 70.31c-4.41 85.04-23.31 149.06-46.16 149.06-5.67 0-11.31-4.22-16.34-11.44 1.29 41.97-4.89 68.79-19.84 67.63-5.41-0.42-11.71-4.44-18.12-11.41 20.25 50.4 58.82 84.75 103.38 84.75 44.56 0 83.12-34.35 103.38-84.75-6.41 6.96-12.68 10.99-18.09 11.41-16.28 1.26-22.87-29.93-19.87-78.56-6.6 13.81-14.2 22.38-22.19 22.38-22.85 0-41.71-64.03-46.12-149.06zM104.25 314.53c-51.47 16.68-84.69 41.95-84.69 69.97 0 50.17 104.81 91.1 234.19 91.09 129.380 234.19-40.93 234.19-91.09 0-28.02-33.22-53.29-84.69-69.97 27.15 12.92 43.81 29.24 43.81 47.19 0 41.41-86.51 74.81-193.31 74.81-106.80-193.31-33.4-193.31-74.81 0-17.95 16.67-34.27 43.81-47.19zm68.91 13.81c-28.25 9.05-46.72 22.13-46.72 37.44 0 27.24 57.07 49.63 127.31 49.63 70.25 0 127.31-22.39 127.31-49.62 0-15.31-18.47-28.38-46.72-37.44 14.94 7.04 24.53 15.4 24.53 25.22 0 22.49-47.13 40.69-105.12 40.69s-105.12-18.2-105.12-40.69c0-9.82 9.59-18.18 24.53-25.22z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiDropletSplash;

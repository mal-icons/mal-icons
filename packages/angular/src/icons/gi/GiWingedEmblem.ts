import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-winged-emblem",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiWingedEmblem {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M36.84 26.19c-7.64 55.36 77.05 132.04 145.13 170C135.19 183.3 67.51 158.73 20.16 128.78c10.17 48.74 83.74 82.17 152.03 107.38-56.09-0.93-104.78-7.64-162.25-25.53 20.11 39.82 95.96 59.89 162.53 67.47-40.17 8.21-83.4 8.65-127.19 3.06 27.2 25.9 75 35.05 124.88 31.13 15.11-1.19 25.76 11.64 33.06 28.97-16.1 14.04-26.31 34.67-26.31 57.63 0 42.14 34.36 76.5 76.5 76.5s76.5-34.36 76.5-76.5c0-21.61-9.04-41.16-23.53-55.09 7.31-18.59 18.25-32.75 34.09-31.5 49.87 3.93 97.71-5.22 124.91-31.12-43.79 5.59-87.02 5.15-127.19-3.06 66.57-7.58 142.43-27.64 162.53-67.47-57.47 17.89-106.16 24.6-162.25 25.53C406.76 210.95 480.33 177.52 490.5 128.78c-47.35 29.95-115.03 54.52-161.81 67.41 68.08-37.95 152.77-114.64 145.13-170C416.84 88.03 362.51 139.09 291.22 166.5c-25.24 9.7-24.56 30.48-8.25 50.16 20.69 24.97 17.83 67.66-8.66 108.63-6.65-1.89-13.66-2.9-20.91-2.9-6.05 0-11.940.72-17.59 2.06-25.99-40.71-28.71-82.99-8.16-107.78 16.31-19.67 17.02-40.45-8.22-50.16C148.15 139.09 93.82 88.03 36.85 26.19zm211.78 315.09l-13.15 40.85-39.69 12.13c2.21-28.29 24.58-50.68 52.85-52.97zm10.130.03c27.83 2.52 49.79 24.56 52.22 52.41L270.81 380.81l-12.06-39.5zm52.22 62.94c-2.52 27.6-24.24 49.42-51.78 52.13l12.94-40.25 38.84-11.87zm-115.090.03l40.91 13.16 11.97 39.03c-28.06-2.21-50.31-24.23-52.87-52.19z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiWingedEmblem;

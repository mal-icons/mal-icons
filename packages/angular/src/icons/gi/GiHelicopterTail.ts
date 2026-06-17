import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-helicopter-tail",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiHelicopterTail {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M41.92 27.69l5.04 18.48 59.12 10.2 46.77 153.98-56.94 15.5 2.75 10.090.97 3.55-1.79 3.21c-24.03 42.99-40.35 87.13-76.77 132.07 7.74 9.58 25.57 30.68 49.1 52.12 31.79 28.96 73.7 57.36 111.28 58.76 93.95 3.5 163.51-70.95 163.51-70.95l2.75-2.98 146.3 3.25v-72.78l-124.21-4.56-2.34-4.95c-45.31-95.85-150.47-223.65-223.66-287.75zm10.26 37.65l39 143.14 39.06-10.63L92.08 72.22zM192 236.52c63.78 0 115.48 51.7 115.48 115.48 0 63.78-51.7 115.48-115.48 115.48-63.78 0-115.48-51.7-115.48-115.48 0-63.78 51.7-115.48 115.48-115.48zm0.79 18.47a96.87 96.87 0 0 0-21.89 2.33c-52.18 11.63-85.2 63.6-73.57 115.78 11.63 52.19 63.6 85.21 115.78 73.57 52.19-11.63 85.2-63.6 73.57-115.78-10-44.85-49.78-75.54-93.89-75.9zm-0.9 17.99a78.6 78.6 0 0 1 33.35 7.31l-25.25 39.74a32.75 32.75 0 0 0-6.1-0.95l-10.18-45.64a78.93 78.93 0 0 1 8.17-0.45zm-25.74 4.37l10.18 45.64a32.73 32.73 0 0 0-4.21 2.73L133.24 296c8.87-10.27 19.36-14 32.89-18.65zm74.47 12.3a78.61 78.61 0 0 1 26.05 36.49l-45.64 10.18a32.88 32.88 0 0 0-5.41-7.31zm-118.57 25.58l39.22 24.92a32.92 32.92 0 0 0-2.18 9.97l-45.64 10.17c-1.72-15.99 1.52-31.58 8.6-45.06zm148.53 28.48a78.58 78.58 0 0 1-6.38 40.52l-39.94-25.38c0.35-1.630.58-3.290.68-4.97zm-107.58 23.98a32.77 32.77 0 0 0 3.45 5.12l-25.25 39.73a78.57 78.57 0 0 1-23.84-34.68zm52.8 7.12l39.22 24.92c-9.2 12.14-21.93 21.69-37.14 26.93l-10.18-45.64a32.93 32.93 0 0 0 8.1-6.21zm-34.58 8.33a32.88 32.88 0 0 0 8.91 1.79l10.17 45.64a78.61 78.61 0 0 1-44.09-8.08z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiHelicopterTail;

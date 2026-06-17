import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-spartan",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiSpartan {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M81.38 21.31l-7.22 124.25 36.38 22.250.81 46.38 10.91-2.91 79.72 295.25 18.03-4.87L140.31 206.5l10.81-2.87-22.03-39.5 21.09-38.81-68.81-104zM271.53 23l-30.09 3.13L262 88.28c-16.84 4.57-30.57 20.85-36.37 42.38l43.91 11.31 48.63-10.53c-5.86-21.99-19.88-38.68-37.06-43.22l20.56-62.09L271.53 23zm-48.75 126.22c-0.07 1.56-0.13 3.13-0.12 4.720.07 32.09 16.67 58.92 38.78 65.56l0-60.31-38.66-9.97zm98.220.72l-40.87 8.88v61.38c23.32-5.21 41.07-32.75 41-66.030-1.41-0.06-2.82-0.12-4.22zm31.88 71.13c-74.43 0-134.97 60.54-134.97 134.97 0 74.43 60.54 134.94 134.97 134.94 74.43 0 134.94-60.51 134.94-134.94 0-74.43-60.51-134.97-134.94-134.97zm0 18.69c64.33 0 116.25 51.95 116.25 116.28 0 64.33-51.92 116.25-116.25 116.25s-116.28-51.92-116.28-116.25c0-64.33 51.95-116.28 116.28-116.28zm-1.37 20.53c-52.91 0-95.81 42.87-95.81 95.78 0 52.91 42.9 95.81 95.81 95.81 52.91 0 95.78-42.9 95.78-95.81 0-52.91-42.87-95.78-95.78-95.78z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiSpartan;

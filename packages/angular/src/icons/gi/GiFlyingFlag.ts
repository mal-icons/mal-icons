import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-flying-flag",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiFlyingFlag {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M356.69 19.19c-6.83-0.03-12.840.64-18.12 1.84-24.18 5.5-36.44 21.98-50.94 41.16-14.5 19.18-31.32 40.99-62.78 47.47C195.08 115.78 154.27 108.25 91.25 78.5c-10.01 44.88-33.41 128.62-60.91 178.66 60.09 28.5 97.25 34.93 121 30.880.01 0 0.0200.03 0 21.59-5.83 34.49-20.09 47.88-43.09 17.01-29.23 32.56-72.2 60.25-123.19l16.41 8.94c-16.69 30.74-28.8 58.62-40 82.94 8.55-6.51 18.63-11.77 31.06-14.59 27.71-6.3 65.05-0.49 121.66 24.75-6.93-29.28-1.88-61.91 9.88-92.22 12.69-32.69 33.04-62.91 56.28-84.03-42.59-19.55-73.15-27.55-95.12-28.28-1.01-0.03-1.99-0.06-2.97-0.06zm127.54 14.14c-0.86-0.02-1.750.06-2.660.27-4.380.98-8.94 4.42-12.08 11.1L289.53 497.31h23.61L490.97 49.37c3.48-10.15-0.75-15.86-6.75-16.03z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiFlyingFlag;

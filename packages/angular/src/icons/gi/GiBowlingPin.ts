import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-bowling-pin",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiBowlingPin {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M253.91 17.59c-19.940.25-29.03 6.66-34.69 17.09-5.67 10.45-7.04 26.44-5.66 44.31s5.28 37.4 8.5 55.06c1.29 7.11 2.49 13.83 3.38 20.16H286.5c0.89-6.44 2.18-13.31 3.5-20.56 3.25-17.83 7.19-37.54 8.5-55.5 1.31-17.96-0.25-33.9-6.16-44.19-5.91-10.29-15.44-16.61-36.25-16.38h-0.19c-0.65-0.01-1.31-0.01-1.94 0h-0.06zM226.75 170.22c0 3.27-0.22 6.37-0.72 9.31-1.19 6.99-2.87 13.61-4.87 19.94h69.69c-2-6.33-3.68-12.95-4.87-19.94-0.5-2.93-0.71-6.05-0.72-9.31h-58.5zm-18.69 61.25c-9.44 19.79-19.86 38.88-25.5 62.19-10.05 41.59-6.58 98.32 43.81 199.09 23.95 1.8 17.16 1.58 29.59 1.63h0.06c12.43-0.04 5.680.18 29.56-1.62 50.4-100.78 53.89-157.5 43.84-199.09-5.63-23.3-16.05-42.4-25.5-62.19h-95.87z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiBowlingPin;

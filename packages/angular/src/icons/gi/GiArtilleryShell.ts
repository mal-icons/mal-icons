import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-artillery-shell",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiArtilleryShell {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M372.39 52.97l-14.82 13.06 103.24 117.14 14.82-13.06zm-30.23 26.65l-36.65 32.3 15.55 17.64zm16.86 16.35l-20.44 48.38-1.46 3.45 19.01 21.57 21.9-51.83zm-67.54 28.32L119.94 275.49l0.050.06-1.29 1.14c-19.62 17.3-36.28 35.67-49.41 53.91l92.85 105.36c19.75-10.73 40.06-24.95 59.69-42.25l1.3-1.140.060.06 6.23-5.49 165.31-145.71zm102.62 11.48l-20.44 48.39-1.46 3.45 20.84 23.64 21.9-51.83zm36.9 41.87l-20.44 48.39-0.97 2.3 37.19-32.78zM58.58 346.72c-4.23 6.96-7.93 13.85-11.01 20.59-6.73 14.71-10.7 28.78-11.16 41.78-0.46 13 2.83 25.26 10.93 34.45 8.1 9.19 19.85 13.99 32.81 15.17 12.96 1.18 27.41-0.99 42.85-5.82 7.08-2.21 14.38-5.02 21.81-8.34z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiArtilleryShell;

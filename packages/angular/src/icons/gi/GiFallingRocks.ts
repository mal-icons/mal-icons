import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-falling-rocks",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiFallingRocks {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M156.12 34.48l-36.940.59 10.02 29 27.26-2.32zM18 37.73V494h297.68L304 448l-64-64-48-160-88.05-80L96 64zM219.08 98.58L160 112l16.38 30.34 17.65 5.39-1.22 19.67L244.66 144zm34.66 60.99l-19.56 21.05 27.51 12.61 12.86-20.8zm50.91 90l-34.38 25.01-11.77 58.66 100.53 22.97-4.16-98.22zm107.48 62.37l-20.89 3.47-15.99 20.03 4.87 21.23 40.85-15.55zm-43.62 96l-44.32 5.87 6.86 29.42 36.88-1.4zm37.57 59.98l-32.1 5.38L340.11 494h79.51z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiFallingRocks;

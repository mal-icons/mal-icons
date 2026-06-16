import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-share",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssShare {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M727-80q-47.5 0-80.75-33.35Q613-146.69 613-194.33q0-6.67 1.5-16.31T619-228L316-404q-15 17-37 27.5T234-366q-47.5 0-80.75-33.25T120-480q0-47.5 33.25-80.75T234-594q23 0 44 9t38 26l303-174q-3-7.07-4.5-15.91Q613-757.75 613-766q0-47.5 33.25-80.75T727-880q47.5 0 80.75 33.25T841-766q0 47.5-33.25 80.75T727-652q-23.35 0-44.68-7.5T646-684L343-516q2 8 3.5 18.5t1.5 17.74q0 7.24-1.5 15Q345-457 343-449l303 172q15-14 35-22.5t46-8.5q47.5 0 80.75 33.25T841-194q0 47.5-33.25 80.75T727-80Zm0.04-632Q750-712 765.5-727.53q15.5-15.53 15.5-38.5T765.47-804.5q-15.53-15.5-38.5-15.5T688.5-804.46q-15.5 15.54-15.5 38.5t15.54 38.47q15.54 15.5 38.5 15.5Zm-493 286Q257-426 272.5-441.53q15.5-15.53 15.5-38.5T272.46-518.5q-15.53-15.5-38.5-15.5T195.5-518.46q-15.5 15.54-15.5 38.5t15.54 38.47q15.54 15.5 38.5 15.5Zm493 286Q750-140 765.5-155.53q15.5-15.53 15.5-38.5T765.47-232.5q-15.53-15.5-38.5-15.5T688.5-232.46q-15.5 15.54-15.5 38.5t15.54 38.47q15.54 15.5 38.5 15.5ZM727-766ZM234-480Zm493 286Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssShare;

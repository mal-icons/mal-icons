import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-rock",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiRock2 {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M228.81 23L68.75 72.28 39.5 182.1l47.53-21.22 10.44-4.65 2.5 11.16 8.75 39.13 6.41 28.53-21.75-19.53-15.72-14.12-28.22 32.34 140.66 136 9.66-40.69 7.53-31.87 10.41 31.06 54.72 163.59L432.34 465.5l45.75-202.94-84.56-148.72L228.81 23zm-57.69 49.88l-27.81 39.91-3.25 73.44-27.19-88.94 58.25-24.4zm17.84 93.41l113.12 155.25L407 355.41l-107.37-0.84-110.66-128v-60.28zM79.31 330.25l140.13 153.13-5.56-65.87-134.56-87.25z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiRock2;

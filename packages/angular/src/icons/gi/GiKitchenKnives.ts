import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-kitchen-knives",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiKitchenKnives {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M140.78 28.03L131.91 54c43.25 8.35 84.74 22.21 124.06 42.41l8.87-25.94L140.78 28.03zm141.28 49.78l-8.34 24.41c5.58 11.18 6.65 25.47-0.25 45.62 72.36 24.77 140.61 52.92 223.75 47.03-58.85-46.9-124.91-82.35-215.16-117.06zM130.1 99.09L105.22 131.53c50.83 28.48 96.96 63.29 137.5 105.41l24.84-32.37-137.47-105.47zm-74.66 2.66l-26.81 15.63c29.6 37.58 53.77 78.46 71.59 123.03L127 224.81 55.44 101.75zM279.78 219.34l-18.69 24.38c3.42 16.74-0.53 35.59-18.37 58.84 77.76 59.66 149.15 121.7 252.53 148.53-52.67-81.57-118.97-152.04-215.47-231.75zm-145.22 22.72l-23.41 13.59c-3.13 13.37-12.31 26.05-32.59 37.84 41.33 71.09 76.94 142 148.63 195.78-14.8-79.72-43.58-155.19-92.62-247.22z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiKitchenKnives;

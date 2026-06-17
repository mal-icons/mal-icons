import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-robot-antennas",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiRobotAntennas {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M81 21.5c-12.81 0-23 10.19-23 23 0 12.81 10.19 23 23 23s23-10.19 23-23S93.81 21.5 81 21.5zm350 0c-12.81 0-23 10.19-23 23 0 12.81 10.19 23 23 23 12.81 0 23-10.19 23-23s-10.19-23-23-23zM110.18 73.21a41.25 41.25 0 0 1-15.11 9.78l28.67 45.87 14.98-9.99zm291.64 0l-28.54 45.66 14.98 9.99 28.67-45.87a41.25 41.25 0 0 1-15.11-9.78zm-242.97 53.87l-36.14 24.1 6.65 19.95c9.22-12.42 23.34-21.99 39.61-28.91 1.17-0.5 2.37-0.97 3.57-1.45zm194.29 0l-13.69 13.69c1.20.48 2.40.95 3.57 1.45 16.27 6.93 30.4 16.49 39.61 28.91l6.65-19.95zM256 144.5c-29 0-58.02 4.94-79.98 14.28-21.9 9.32-35.91 22.38-39.16 38.36L106.28 426.5h299.44l-30.58-229.35c-3.26-15.98-17.27-29.04-39.16-38.36C314.02 149.44 285 144.5 256 144.5zm-64 58c31.37 0 57 25.63 57 57s-25.63 57-57 57-57-25.63-57-57 25.63-57 57-57zm128 0c31.37 0 57 25.63 57 57s-25.63 57-57 57-57-25.63-57-57 25.63-57 57-57zm-128.55 16.02c-22.75 0-41.55 18.37-41.55 40.98 0 22.61 18.79 40.98 41.55 40.98 22.75 0 41.55-18.37 41.55-40.98 0-22.61-18.8-40.98-41.55-40.98zm128 0c-22.75 0-41.55 18.37-41.55 40.98 0 22.61 18.79 40.98 41.55 40.98 22.75 0 41.55-18.37 41.55-40.98 0-22.61-18.8-40.98-41.55-40.98zm-128 18c13.2 0 23.55 10.27 23.55 22.98 0 12.71-10.35 22.98-23.55 22.98-13.2 0-23.55-10.27-23.55-22.98s10.35-22.98 23.55-22.98zm128 0c13.2 0 23.55 10.27 23.55 22.98 0 12.71-10.35 22.98-23.55 22.98-13.2 0-23.55-10.27-23.55-22.98s10.35-22.98 23.55-22.98zM208 330.5h96v18h-96zm-16 32h128v18H192zm-16 32h160v18H176zm-103 50v46h46v-46zm64 0v46h46v-46zm64 0v46h46v-46zm64 0v46h46v-46zm64 0v46h46v-46zm64 0v46h46v-46z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiRobotAntennas;

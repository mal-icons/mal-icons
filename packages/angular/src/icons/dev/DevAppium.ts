import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-appium",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevAppium {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-appium-1-a)"}],["path",{"fill":"currentColor","d":"M0.7 279.8c58.1 133.6 205.7 156 381.8 42.8 81.3 75.2 101.5 164.3 33.7 254A300 300 0 0 1 0.7 279.8m274.3-58c26.3-109.4 99.6-172.2 215-154a300 300 0 0 1-57.4 501.4c90-128.4 16.4-263.9-157.6-347.4M300 0c64.3 0 123.9 20.2 172.7 54.7-164-19-241.4 117.6-230.5 306.3C135.6 393.7 48.8 369.6 3 257.8A300 300 0 0 1 300 0"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevAppium;

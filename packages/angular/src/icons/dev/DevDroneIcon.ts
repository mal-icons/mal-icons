import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-drone-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevDroneIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"m119.7 67.8-3 2.7 104.1 102.7a154 154 0 0 0-23 82.5 142.4 142.4 0 0 0 148.4 146.7 154 154 0 0 0 83.3-23l104.5 104A294 294 0 0 1 297.3 599 293 293 0 0 1 0 305 287 287 0 0 1 119.7 67.8M178 28.1c39.7-18 83-27.3 126.7-27A292.4 292.4 0 0 1 600 294.9c0.4 43.8-8.8 87.1-27 127l-93.3-93.3c15-24.3 23-52.4 23-81A142.7 142.7 0 0 0 354 99.2c-28.7-0.2-56.8 7.8-81.1 23zm177.8 304a86 86 0 0 1-89-87.8 86 86 0 0 1 89-89.2 87 87 0 0 1 88.6 89.2 85.4 85.4 0 0 1-88.6 88.7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevDroneIcon;

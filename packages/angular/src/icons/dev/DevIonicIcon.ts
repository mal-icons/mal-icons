import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-ionic-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevIonicIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-ionic-icon-1-a)"}],["path",{"fill":"currentColor","d":"M300.40.4q73 0.1 137.5 33.4l5.7 2.8-5 4c-12 9.5-21.7 22-27.7 36.2l-1.8 3.9-3.5-1.8a243 243 0 0 0-104.9-23.8 245.2 245.2 0 0 0-0.4 490.5 245.5 245.5 0 0 0 245.3-245.2c0-32.4-6-64-18.8-93.9l-1.8-3.9 4-1.8a95 95 0 0 0 37.6-25.6l3.9-5 2.5 5.8c18.1 39.4 27 81.4 27 123.6 0 165.3-134.7 300-300 300A299.5 299.5 0 1 1 300.40.3m0 163.5c75 0 136.4 61.1 136.8 136.8 0 75.7-61.1 136.9-136.8 136.9a137 137 0 0 1 0-273.7m195.8-113a62.6 62.6 0 1 1 0 125 62.6 62.6 0 0 1 0-125"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevIonicIcon;

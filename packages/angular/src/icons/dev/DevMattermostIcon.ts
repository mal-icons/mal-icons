import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-mattermost-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevMattermostIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-mattermost-icon-1-a)"}],["path",{"fill":"currentColor","d":"M16 203.8A300 300 0 0 1 308 0.1l-41 48.5A215 215 0 0 0 99.6 190.4c-38.3 113.3 26 237.4 143.6 277.3 117.7 39.8 244.2-19.8 282.5-133 25.7-76 5.4-156.7-46.3-213.8l-3.1-63.6A300 300 0 0 1 203.8 584 300 300 0 0 1 16 203.8M387.1 28a7 7 0 0 1 8.7 2.8l0.20.30.20.3q0.6 1.10.8 2.7c0.4 2.10.5 7 0.6 12v14.4l1.1 44.4 1.8 51.2 2.1 89v0.6c0 5.1-1 42.3-27.4 68.2-28.4 27.8-63.3 25.3-86 17.6-22.6-7.7-51.9-26.9-57.6-66.2-4.8-33.4 13-61.5 18.5-69.2l0.3-0.5 1.2-1.6 55.8-69.4L340 85l27.9-34.5s4-5.5 8.3-11l0.9-1 4-5 0.7-0.9 2.5-2.8q1.2-1 2.2-1.5z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevMattermostIcon;

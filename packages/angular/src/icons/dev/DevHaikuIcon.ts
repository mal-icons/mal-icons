import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-haiku-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevHaikuIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-haiku-icon-3-a)"}],["path",{"fill":"currentColor","d":"M460.3 1.8 456.60.5A17 17 0 0 0 444 2.2a8554 8554 0 0 0-82.7 34.2 6.2 6.2 0 0 0 0 11.5l69 28.7c2.3 1 3.9 3.3 3.9 5.8 0 22.60.3 43.7 0 66.3 0 2.5-1.5 4.7-3.8 5.7l-181.5 76.4a6.3 6.3 0 0 1-8.7-5.8V54.8c0-6.5-3.6-11.4-9.1-14.2l-1.6-0.8-90.7-38.4a17 17 0 0 0-15.30.8L43 35.4A6.3 6.3 0 0 0 43 47l67.5 29.9c2.3 1 3.7 3.2 3.7 5.7v217.2q0.9 3.6 2.8 6a15 15 0 0 0 6.7 5.7l199.6 95 1.10.4a16 16 0 0 0 7.2 1.7h1.1A16.4 16.4 0 0 0 348 392v-67c0-2.7 1.7-5.2 4.3-6l74-23.5c4-1.2 8.1 1.8 8.1 6v288a6 6 0 0 0 3.8 5.9l3.4 1.4 3.4 1a21 21 0 0 0 14.4-0.4l90.5-37q5.1-2.4 7.3-5.2 3.6-3.4 3.7-10V54.9a15 15 0 0 0-5.6-11.7 17 17 0 0 0-5.2-3.4z"}],["path",{"fill":"currentColor","d":"M240.6 466.5c0-2.4-1.4-4.7-3.6-5.7l-100.7-47.9a16.2 16.2 0 0 0-22 11.3v165.4c0 2.5 1.4 4.8 3.7 5.8l5.3 2.3 1.60.5c4.3 2.1 9.4 2.5 14.20.5l89.7-35.7a18 18 0 0 0 11-16.4v-1.4z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevHaikuIcon;

import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-codepen-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevCodepenIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-codepen-icon-1-a)"}],["path",{"fill":"currentColor","d":"M299 0h2.9q7.60.6 13.7 4.7l271.2 180q4.3 2.6 7.5 6.8l0.50.80.40.5a28 28 0 0 1 4.8 15.7V391q0 8-4.2 15.2l-0.30.5-0.30.5q-3.2 4.6-7.6 7.6L316 595q-6.1 4.3-14 5h-4q-7.9-0.7-14-5L13.2 415.5a28 28 0 0 1-6.5-5.7v-0.1l-1.8-2.2v-0.2q-5-7.7-4.9-16.1V209q-0.1-7.3 3.4-14l0.6-1 0.2-0.4a29 29 0 0 1 9-9L284 4.8q5.8-4 13-4.7l1.2-0.1zM164.2 334.2l-84.7 57 192.1 127.5V406.5zm271.6 0-107.4 72.3v112.2l192-127.5zM300 243l-85 57 85 57.2 85-57.1zM56.8 262v76l56.5-38zm486.4 0-56.5 38 56.5 38zM271.6 81.4 79.5 208.8l84.7 57 107.4-72.3zm56.8 0v112.2l107.4 72.3 84.7-57z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevCodepenIcon;

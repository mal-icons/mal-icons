import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-zulip-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevZulipIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-zulip-icon-2-a)"}],["path",{"fill":"currentColor","d":"M300 0a300 300 0 1 1 0 600 300 300 0 0 1 0-600m-14.8 277-107.6 96.1a50 50 0 0 0-18.3 39.3c0 26.5 19.4 48 43 48h202.2c23.7 0 43.1-21.5 43.1-48 0-26.4-19.4-48-43-48H251.4c-2.3 0-3.7-2.8-2.6-5l39.4-79c1.5-2.3-1.1-5-3.1-3.3m119.3-137.9h-202c-23.7 0-43.1 21.7-43.1 48.1s19.4 48 43 48h153.1c2.3 0 3.7 2.8 2.6 5l-39.5 79c-1.4 2.3 1.2 5 3.2 3.3l107.6-96a50 50 0 0 0 18.3-39.3c0-26.5-19.4-48-43-48"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevZulipIcon;
